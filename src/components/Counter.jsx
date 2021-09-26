import React, {useState} from 'react';

const Counter = function () {

    const [like, setlike] = useState(0);


    function increment() {
        setlike (like +1);
    }

    function derement() {
        setlike (like -1);
    }

        return (
            <div>
                <h1>{like}</h1>
                <button onClick={increment}>Increment</button>
                <button onClick={derement}>Decrement</button>
            </div>
        );
}

export default Counter;