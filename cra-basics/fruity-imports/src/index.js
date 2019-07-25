import React from 'react';
import ReactDOM from 'react-dom';
import fruits from './fruits';
import { choice, remove } from './helpers';

class App extends React.Component {
    render() {
        console.log(fruits);
        let selectedFruit = choice(fruits);
        remove(fruits, selectedFruit);
        return (
            <div style={{textAlign: "center"}}>
                <h2>{selectedFruit}</h2>
                <h3>I'd like one {selectedFruit}, please.</h3>
                <h3>Here you go: {selectedFruit}</h3>
                <h3>Delicious! May I have another?</h3>
                <h2>{fruits}</h2>
                <h3>I'm sorry, we're all out. We have {fruits.length} other foods left.</h3>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));