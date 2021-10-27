import { useState } from 'react';

function App() {
    const [calc, setCalc] = useState('');
    const [result, setResult] = useState('');

    const ops = ['/', '*', '+', '-', '.'];

    const updateCalc = (value) => {
        if ((ops.includes(value) && calc && !result === '') || (ops.includes(value) && ops.includes(calc.slice(-1)) && !result === '')) {
            return;
        }
        setCalc(calc + value);

        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    };

    const calculate = () => {
        if (calc) {
            setCalc(eval(calc).toString());
        }

        if (!result && !calc === '') {
            return;
        }
    };

    const takeAnswerValue = () => {
        if (result && !calc) {
            setCalc(result);
        }
    };

    const deleteLastValue = () => {
        if (calc === '') {
            return;
        }

        setCalc(calc.slice(0, -1));
    };

    const resetAll = () => {
        if (calc === '') {
            return;
        }

        setCalc('');
    };

    const addDigits = () => {
        const digits = [];

        for (let i = 1; i < 10; i++) {
            digits.unshift(
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
                <div className='calculation-area'>{calc || '0'}</div>
                <div className='answer-area'>Ans:{result ? <span>({result})</span> : ''}</div>
            </div>
            <div className='button-input'>
                <div className='digits'>
                    {addDigits()}
                    <button onClick={() => updateCalc('0')}>0</button>
                    <button onClick={() => updateCalc('.')} className='font-weight--600'>
                        .
                    </button>
                </div>
                <div className='operators'>
                    <button onClick={() => deleteLastValue()} className='bg-red font-weight--600'>
                        DEL
                    </button>
                    <button onClick={() => resetAll()} className='bg-orange font-weight--600'>
                        AC
                    </button>
                    <button onClick={() => updateCalc('*')}>*</button>
                    <button onClick={() => updateCalc('/')}>/</button>
                    <button onClick={() => updateCalc('+')}>+</button>
                    <button onClick={() => updateCalc('-')}>-</button>
                    <button onClick={calculate} className='bg-green font-weight--600'>
                        Ans
                    </button>
                    <button onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    );
}

export default App;
