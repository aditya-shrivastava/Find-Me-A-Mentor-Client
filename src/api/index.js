import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://fmm-api.herokuapp.com/api/v1',
});

export default instance;
