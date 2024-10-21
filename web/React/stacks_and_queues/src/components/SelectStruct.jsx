export default function StructForm({ handler }) {
    const handleHandler = (e) => handler(e.target.value);

    return (
        <>
            <form>
                <fieldset style={{ maxWidth: "fit-content" }}>
                    <legend>Choose a structure</legend>

                    <label>
                        <input
                            type="radio"
                            value="stack"
                            onChange={handleHandler}
                        />
                        Stack
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="queue"
                            onChange={handleHandler}
                        />
                        Queue
                    </label>
                </fieldset>
            </form>
        </>
    );
}
