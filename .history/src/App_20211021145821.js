import { useState } from 'react';

function App() {
    const [calc, setCalc] = useState('');
    const [result, setResult] = useState('');

    const ops = ['/', '*', '+', '-', '.'];

    const updateCalc = (value) => {

      if (ops.includes(value) && calc =++ "" ||
       ops.includes(value) && ops.include(calc.slice(-1))){
        return
      }
        setCalc(value + calc);
        console.log(calc);
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
                Ans: {result ? result : ''}
                {calc ? calc : '0'}
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
