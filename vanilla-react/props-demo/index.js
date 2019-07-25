class App extends React.Component {
    render() {
        return (
            <div>
                <Hello
                    to="Ringo"
                    from="Paul" 
                    bangs={5}
                    strNum="27"
                    data={[2, 3, 5, 8]}
                    isGrinchy={false}
                    isFriendly />
                <Hello to="Cher" from="Sonny" />
                <Hello to="Olivia" from="Zara" bangs={7} />
            </div>
        );
        // Props not assigned default to true booleans
    }
}

ReactDOM.render(<App />, document.getElementById('app'));