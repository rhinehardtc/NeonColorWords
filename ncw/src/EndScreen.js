const EndScreen = (props) => {
    const {score, setScore, setStart, setEnd} = props;

    //Converts score to a cents on the dollar value and returns a statement including the wage
    const earnedWage = () => {return `Thank you for your services. You have earned $${(score/100.00).toFixed(2)}.`}

    return(
        <div className="App StartScreen">
            <h3>{earnedWage()}</h3>
            <h4 onClick={() => {setScore(0); setStart(false); setEnd(false)}}>Please click here to end your shift.</h4>
        </div>
    )
}

export default EndScreen;