function genRandSymbol() {
    let rand = Math.floor(Math.random()*7);
    let symbols = [
        "🍇",
        "🍈",
        "🍉",
        "🍊",
        "🍋",
        "🍌",
        "🍍"
    ];
    return symbols[rand];
}

class Machine extends React.Component {
    
    static defaultProps = {
        numSlots: 3
    }

    render() {
        let slots = [genRandSymbol()];
        let matching = true;

        for (let i = 1; i < this.props.numSlots; ++i) {
            slots.push(genRandSymbol());    // Add a new random symbol
            if(matching===true) {           // Only check matching if all symbols thus far have matched
                matching = slots[0]===slots[i];
            }
        }

        return (
            <>
                <p>{slots.map(slot => <span>{slot} </span>)}</p>
                <p>{matching ? 'You win! :D' : 'Welp :('}</p>
            </>
        );
    }
}