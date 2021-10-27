function App() {
    const addDigits = () => {
        const digits = [];

        for (let i = 1; i < 10; i++) {
            digits.push(<button key={i}>{i}</button>);
        }

        return digits;
    };
    return (
        <div className='container-calculator'>
            <div className='display-calculation'>0</div>
            <dis className='button-input'>
                <div className='operators'>
                    <button>+</button>
                    <button>-</button>
                    <button>*</button>
                    <button>/</button>
                    <button>DEL</button>
                </div>
                <div className='digits'>
                    {addDigits()}
                    <button>0</button>
                    <button>.</button>
                    <button>=</button>
                </div>
            </dis>
        </div>
    );
}

export default App;
