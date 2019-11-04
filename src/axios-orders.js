import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-1893b.firebaseio.com/'
});

export default instance;
