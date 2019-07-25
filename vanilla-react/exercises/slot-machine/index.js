class App extends React.Component {
    render() {
        return (
            <>
                <h2>Slot Machines</h2>
                <Machine />
                <Machine numSlots={1}/>
                <Machine numSlots={3}/>
                <Machine numSlots={4}/>
                <Machine numSlots={4}/>
                <Machine numSlots={4}/>
                <Machine numSlots={4}/>
                <Machine numSlots={7}/>
                <Machine numSlots={5}/>
            </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));