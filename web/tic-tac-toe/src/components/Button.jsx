// import { useState } from 'react';

export default function Button({ count, onClick }) {

    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}
