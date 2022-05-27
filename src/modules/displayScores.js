const displayScores = (obj) => {
  const output = document.getElementById('scoreItems');
  output.innerHTML = '';
  obj.forEach((data) => {
    const scoreRecord = `<div class='scoreItem'><h2 class='scorer'>${data.user}</h2><p class='score'>${data.score}</p></div>`;
    output.innerHTML += scoreRecord;
  });
};

export default displayScores;