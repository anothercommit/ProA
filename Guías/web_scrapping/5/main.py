import re
import requests
from collections import Counter
from bs4 import BeautifulSoup


def make_soup(url):
    response = requests.get(url)
    response.raise_for_status()
    return BeautifulSoup(response.content, "lxml")


def find_first_product(soup):
    link = soup.find(
        "a",
        class_="ui-search-item__group__element ui-search-link__title-card ui-search-link",
    )
    return link.get("href") if link else None


def find_product_rating(soup):
    rating = soup.find(
        "p",
        class_="ui-review-capability__rating__average ui-review-capability__rating__average--desktop",
    )
    return rating.get_text() if rating else "No rating found"


def find_reviews(soup):
    return [
        p.get_text()
        for p in soup.find_all(
            "p",
            class_="ui-review-capability-comments__comment__content ui-review-capability-comments__comment__content",
        )
    ]


def get_common_words(text, pattern):
    return Counter(re.findall(pattern, text.lower()))


def main():
    producto = input("Escribe el nombre de un producto de Mercado Libre: ").split()
    url = f"https://listado.mercadolibre.com.ar/{'-'.join(producto)}"

    sopa = make_soup(url)
    href = find_first_product(sopa)

    if not href:
        print("No product link found.")
        return

    print("--------------------------------------------------------")
    print("pagina: ", href)

    sopa = make_soup(href)
    calificacion = find_product_rating(sopa)
    print(calificacion)

    reviews = find_reviews(sopa)
    if not reviews:
        print("No reviews found.")
        return

    re_pattern = r"\b(?!que\b|la\b|lo\b|una\b|un\b|si\b|el\b|yo\b|con\b|es\b|los\b|las\b|por\b|no\b|y\b|de\b|pero\b|este\b|esta\b|del\b|se\b|al\b|como\b|ni\b|ya\b|mas\b|ser\b|uno\b)\w+\b"

    common_words = get_common_words(reviews[0], re_pattern)

    if len(reviews) > 1:
        for review in reviews[1:]:
            common_words += get_common_words(review, re_pattern)

    print(common_words.most_common())


main()
