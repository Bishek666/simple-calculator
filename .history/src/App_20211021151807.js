import { useState } from 'react';

function App() {
    const [calc, setCalc] = useState('');
    const [result, setResult] = useState('');

    const ops = ['/', '*', '+', '-', '.'];

    const updateCalc = (value) => {
        if ((ops.includes(value) && calc === '') || (ops.includes(value) && ops.includes(calc.slice(-1)))) {
            return;
        }
        setCalc(calc + value);

        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    };

    const addDigits = () => {
        const digits = [];

        for (let i = 1; i < 10; i++) {
            digits.push(
                <button onClick={() => updateCalc(i.toString())} key={i}>
                    {i}
                </button>
            );
        }

        return digits;
    };
    return (
        <div className='container-calculator'>
            <div className='display-calculation'>
                <div className='answer-area'>Ans:{result ? <span>({result})</span> : ''}&nbsp;</div>

                <div className='calculation-area'>{calc || '0'}</div>
            </div>
            <div className='button-input'>
                <div className='digits'>
                    {addDigits()}
                    <button onClick={() => updateCalc('0')}>0</button>
                    <button onClick={() => updateCalc('.')}>.</button>
                    <button>=</button>
                </div>
                <div className='operators'>
                    <button onClick={() => updateCalc('+')}>+</button>
                    <button onClick={() => updateCalc('-')}>-</button>
                    <button onClick={() => updateCalc('*')}>*</button>
                    <button onClick={() => updateCalc('/')}>/</button>
                    <button>DEL</button>
                </div>
            </div>
        </div>
    );
}

export default App;
