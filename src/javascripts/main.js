import '../styles/main.scss';
import 'bootstrap';
import cowList from './components/cowList/cowList';
import farmerList from './components/farmerList/farmerList';

const init = () => {
  console.error('hi');
  cowList.buildCows();
  farmerList.buildFarmers();
};

init();
