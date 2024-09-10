import "./styles/Page.css";

export default function Page({ content }) {
    return (
        <>
            <div className="wrapper">
                {content}

                <footer>
                    <p>Made by Joaco</p>

                    <p>
                        <b>Contact me:</b>
                    </p>
                    <p>mimail@mail.com</p>
                    <p>+35 351 3510 351</p>
                </footer>
            </div>
        </>
    );
}
