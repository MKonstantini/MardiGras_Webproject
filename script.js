// script JS

function StartTrivia() {
    document.querySelector("#TriviaBTN").style.display = "none";
    document.querySelector("#TriviaFORM").style.display = "block"; 
}

function EndTrivia() {
    let score = 0;

    const correctAnswers = 
    ["#Q1A2", "#Q2A4", "#Q3A1", "#Q4A4", "#Q5A2"];

    for (let i = 0; i < correctAnswers.length; i++) {
        if(document.querySelector(correctAnswers[i]).checked == true) {
            score++;
        }
        
    }
    if(score >= 3) {
        alert(`Your score is:   ${score} / 5\nWell done!`);
    }
    else {
        alert(`Your score is:   ${score} / 5\nBetter luck next time!`);
    }
}
