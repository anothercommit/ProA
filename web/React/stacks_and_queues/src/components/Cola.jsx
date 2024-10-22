export default function Cola({ elements }) {
    const containerStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 50px) ",
        borderCollapse: "collapse",
    };

    const elementStyle = {
        border: "2px solid white",
    };

    return (
        <>
            <div style={containerStyle}>
                {elements.toReversed().map((e, k) => {
                    return (
                        <>
                            <div style={elementStyle}>
                                <p
                                    style={{ padding: "5px 30px 5px 30px" }}
                                    key={k}
                                >
                                    {e}
                                </p>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
}
