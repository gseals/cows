import axios from 'axios';
// import '../../../../db'; // do an import to figure out where you are going with a relative path

// const getCows = () => axios.get('https://teamtreehouse.com/ashleyclaiborne.json');

const getCows = () => axios.get('../../../../db/cows.json');


export default { getCows };
