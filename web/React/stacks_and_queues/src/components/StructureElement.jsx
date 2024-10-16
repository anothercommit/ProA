export default function StructureElement({ value }) {
    return (
        <>
            <div
                style={{
                    maxWidth: "50px",
                    maxHeight: "50px",
                    border: "solid 2px",
                }}
            >
                {value}
            </div>
        </>
    );
}
