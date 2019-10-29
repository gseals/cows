import axios from 'axios';

const getFarmers = () => new Promise((resolve, reject) => {
  axios.get('../../../../db/farmers.json')
    .then((response) => {
      const demFarmers = response.data.farmers;
      const farmers = [];
      Object.keys(demFarmers).forEach((farmerId) => {
        demFarmers[farmerId].id = farmerId;
        farmers.push(demFarmers[farmerId]);
      });
      resolve(farmers);
    })
    .catch((error) => reject(error));
});

export default { getFarmers };
