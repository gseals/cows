import '../styles/main.scss';
import 'bootstrap';
import cowList from './components/cowList/cowList';
import farmerList from './components/farmerList/farmerList';
import farmerCowData from './helpers/data/farmerCowData';

const init = () => {
  console.error('hi');
  cowList.buildCows();
  farmerList.buildFarmers();
  farmerCowData.getFarmerCows()
    .then((farmerCows) => {
      console.log('from main.js', farmerCows);
    })
    .catch((error) => console.error(error));
};

init();
