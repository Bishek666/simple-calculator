import { useState } from 'react';

function App() {
    const [operation, setOperation] = useState('');
    const [output, setOutput] = useState('');

    const ops = ['/', '*', '+', '-', '.'];

    const getInput = (value) => {
        setOutput(value + operation);
    };

    const addDigits = () => {
        const digits = [];

        for (let i = 1; i < 10; i++) {
            digits.push(
                <button onClick={getInput(i.toString())} key={i}>
                    {i}
                </button>
            );
        }

        return digits;
    };
    return (
        <div className='container-calculator'>
            <div className='display-calculation'>
                {output ? output : ''}
                Ans:{operation | '0'}
            </div>
            <div className='button-input'>
                <div className='digits'>
                    {addDigits()}
                    <button onClick={() => setOperation('0')}>0</button>
                    <button onClick={() => setOperation('.')}>.</button>
                    <button>=</button>
                </div>
                <div className='operators'>
                    <button onClick={() => setOperation('+')}>+</button>
                    <button onClick={() => setOperation('-')}>-</button>
                    <button onClick={() => setOperation('*')}>*</button>
                    <button onClick={() => setOperation('/')}>/</button>
                    <button>DEL</button>
                </div>
            </div>
        </div>
    );
}

export default App;
