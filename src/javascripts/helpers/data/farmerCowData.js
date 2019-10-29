import axios from 'axios';

const getFarmerCows = () => new Promise((resolve, reject) => {
  axios.get('../../../../db/farmerCows.json')
    .then((response) => {
      const demFarmerCows = response.data.farmerCows;
      const farmerCows = [];
      Object.keys(demFarmerCows).forEach((demFarmerCowId) => {
        demFarmerCows[demFarmerCowId].id = demFarmerCowId;
        farmerCows.push(demFarmerCows[demFarmerCowId]);
      });
      resolve(farmerCows);
    })
    .catch((error) => reject(error));
});

export default { getFarmerCows };
