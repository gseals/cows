import '../styles/main.scss';
import 'bootstrap';
import cowList from './components/cowList/cowList';

const init = () => {
  console.error('hi');
  cowList.buildCows();
};

init();
