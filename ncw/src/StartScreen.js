const StartScreen = (props) => {

    //Chooses a random employee number to display in greeting between 1 and 500000.
    const randomEmployeenumber = () => {return Math.floor(Math.random() * 500000)};

    //Funny but sad messages to display before the game starts. Randomly selected by selectMessage.
    const dystopianMessages = [
        "You are late for your shift. Your pay will be docked accordingly.", 
        "Your peformance is 8% below the average of your peers. Please contact HR regarding your current standing after this shift.",
        "Your request for time off due to { MATERNITY LEAVE } has been denied. You may sumbit to another appeal in { 6 MONTHS }.",
        "Your inquiry to HR regarding { INCREASE IN PAY } has been received. Please allow { 15 WEEKS } for a response.",
        "Your employee feedback is valued. Please submit any workplace concerns to { ADDRESS NOT FOUND }."
    ];

    //Chooses one of the dark messages from dystopianMessages.
    const selectMessage = () => {return dystopianMessages[Math.floor(Math.random() * dystopianMessages.length)]}

    return(
        <div className="App StartScreen">
            <h2>Welcome, employee #{randomEmployeenumber()}.</h2>
            <h4>{selectMessage()}</h4>
            <h4 onClick={() => props.setStart(true)}>Please click here to begin your shift.</h4>
        </div>
    );
};

export default StartScreen;