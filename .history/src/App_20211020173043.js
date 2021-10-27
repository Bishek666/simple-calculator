function App() {
    const addDigits = () => {
        const digits = [];

        for (i = 1; i < 10; i++) {
            digits.push(<button>{i}</button>);
        }
    };
    return (
        <div className='App'>
            <div className='container-calculator'>
                <div className='display-calculation'>0</div>
                <div className='operators'>
                    <button>+</button>
                    <button>-</button>
                    <button>*</button>
                    <button>/</button>
                </div>
                <div className='digits'>
                    <button>0</button>
                    <button>.</button>
                    <button>=</button>
                </div>
            </div>
        </div>
    );
}

export default App;
