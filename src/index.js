import './style.css';
import { getScore, sendScore } from './modules/fetchScores.js';
import Storage from './modules/storage.js';
import displayScores from './modules/displayScores.js';

displayScores(Storage.getItems());

const base = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const Id = '5epUk01TjtD7dN1pDjSB';
const url = `${base}/games/${Id}/scores/`;

document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('scorer');
  const score = document.getElementById('score');
  const scoreInt = parseInt(score.value, 10);
  if (name.value !== '' && scoreInt !== 0) {
    await sendScore(url, name.value, score.value);
    name.value = '';
    score.value = '';
  }
});

document.getElementById('refresh').addEventListener('click', async (e) => {
  e.preventDefault();

  const leaderlist = await getScore(url);
  displayScores(leaderlist);
  Storage.setItems(leaderlist);
});