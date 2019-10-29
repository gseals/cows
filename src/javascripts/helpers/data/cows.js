import axios from 'axios';
// import '../../../../db'; // do an import to figure out where you are going with a relative path

// const getCows = () => axios.get('https://teamtreehouse.com/ashleyclaiborne.json');

const getCows = () => new Promise((resolve, reject) => {
  axios.get('../../../../db/cows.json').then((response) => {
    const demCows = response.data.cows;
    const cows = [];
    Object.keys(demCows).forEach((cowId) => {
      demCows[cowId].id = cowId;
      cows.push(demCows[cowId]);
    });
    resolve(cows);
  }).catch((error) => reject(error));
});

export default { getCows };
