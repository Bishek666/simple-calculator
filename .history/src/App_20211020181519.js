import { useState } from 'react';

function App() {
    const [calc, setCalc] = useState('');
    const [output, setOutput] = useState('');

    const ops = ['/', '*', '+', '-', '.'];

    const updateCalc = (value) => {
        setOutput(value + calc);
    };

    const addDigits = () => {
        const digits = [];

        for (let i = 1; i < 10; i++) {
            digits.push(
                <button onClick={updateCalc(i.toString())} key={i}>
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
                Ans:{calc | '0'}
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
