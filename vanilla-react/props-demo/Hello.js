class Hello extends React.Component {
    render() {
        console.log(this.props);
        const props = this.props;

        let bangs = "!".repeat(props.bangs);

        return (
            <div>
                <h3>Hello {props.to} from {this.props.from}{bangs}</h3>
            </div>
        );
    }
}