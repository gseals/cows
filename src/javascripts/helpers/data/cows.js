import axios from 'axios';

const getCows = () => axios.get('https://teamtreehouse.com/ashleyclaiborne.json');

export default { getCows };
