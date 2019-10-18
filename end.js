let username = document.getElementById('username');
let highscore = document.getElementById('saveHighScore');
let currentScore = localStorage.getItem('mostRecentScore')
let finalScore = document.getElementById('finalScore');
finalScore.innerText = 'Your Score:' + currentScore;

const highScores = JSON.parse(localStorage.getItem('highscores')) || [];

username.addEventListener('keyup', () => {
    highscore.disabled = !username.value;
});
document.getElementById('saveHighScore').addEventListener('click', (eve) => {
    eve.preventDefault()
    const score = {
        score: currentScore,
        name: username.value
    }
    highScores.push(score);
    highScores.sort((a,b)=>{
        return b.score - a.score;
    })
    highScores.splice(5);
    localStorage.setItem('highscores', JSON.stringify(highScores));
})