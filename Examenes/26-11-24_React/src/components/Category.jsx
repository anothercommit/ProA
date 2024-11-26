// ["electronics","jewelery","men's clothing","women's clothing"]
export default function Category({ handler }) {
    const callHandler = () => handler(event.target.value);

    return (
        <>
            <label htmlFor="category">Categoría</label>

            <select name="category" id="category" onChange={callHandler}>
                <option value="">--Seleccione una categoría--</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelry</option>
                <option value="men's clothing">Men's clothing</option>
                <option value="women's clothing">Women's clothing</option>
            </select>
        </>
    );
}
