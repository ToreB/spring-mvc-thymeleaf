class Greetings extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Greetings, {this.props.name}!</h1>
            </div>
        );
    }
}