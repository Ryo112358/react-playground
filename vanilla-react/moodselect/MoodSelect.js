function getMood() {
    const moods = [ 'Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid' ];
    return moods[Math.floor(Math.random() * moods.length)];
}

class MoodSelect extends React.Component {
    render() {
        return (
            <div>
                <h1>My current mood is: {getMood()}</h1>
            </div>
        );
    }
}