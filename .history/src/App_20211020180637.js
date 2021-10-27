import { useState } from 'react';

function App() {
    const [operation, setOperation] = useState('');
    const [output, setOutput] = useState('');

    const ops = ['/', '*', '+', '-'];

    const getInput = (value) => {
        setOutput(value + calc);
    };

    const addDigits = () => {
        const digits = [];

        for (let i = 1; i < 10; i++) {
            digits.push(<button key={i}>{i}</button>);
        }

        return digits;
    };
    return (
        <div className='container-calculator'>
            <div className='display-calculation'>(0) Ans:0</div>
            <dis className='button-input'>
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
            </dis>
        </div>
    );
}

export default App;
