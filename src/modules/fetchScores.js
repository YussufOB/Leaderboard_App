const getScore = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.result;
};

const sendScore = async (url, user, score) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => json.result);
};

export { getScore, sendScore };