export default function Pila({ elements }) {
    const containerStyle = {
        maxWidth: "fit-content",
        border: "2px solid white",
    };

    const elementStyle = {
        borderStyle: "solid",
        borderColor: "white",
        borderWidth: "2px 0 0 0",
        padding: "5px 30px 5px 30px",
    };

    return (
        <>
            <div style={containerStyle}>
                {elements.toReversed().map((e, k) => {
                    return (
                        <>
                            <div style={elementStyle}>
                                <p key={k}>{e}</p>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
}
