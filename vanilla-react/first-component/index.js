// ---------- Class Component ----------
// class Hello extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello there!</h1>
//             </div>
//         );
//     }
// }
// ReactDOM.render(<Hello />, document.getElementById('root'));

// ---------- Function Component ----------
function JSXDemo(props) {
    return (
        <div>
            <h1>{props.type} Luxury</h1>
            <img width="400px" src="https://images.unsplash.com/photo-1563724600443-ed9bf3f2437a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
            <h3>Price: ${35*9.8}</h3> { // "{} escape JSX syntax"
                }
        </div>
    );
}

ReactDOM.render(<JSXDemo type="Leather" />, document.getElementById('root'));