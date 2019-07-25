function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        let msg;

        if(num >= 7) {
            msg = 
                <div>
                    <h2>CONGRATS!!!</h2>
                    <img src="https://i.imgur.com/wD2FzDh.gif" />
                </div>
        } else {
            msg = <p>Unlucky X.x:(</p>
        }
        return (
            <div>
                <h2>Your number is {num}</h2>
                <p>{num === 7 ? 'Congrats!' : 'Welp :('}</p>
                { num === 7 && <img src="https://i.imgur.com/wD2FzDh.gif" />}
                <hr />
                {msg}
            </div>
        );
        // Alternatively, set a msg variable beforehand to be displayed in return
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('app'));