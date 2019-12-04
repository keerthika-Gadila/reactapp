import axios from 'axios';
import details from '../Data/Details.json';

export default class Api {
	static getAllCards(cb) {
		axios.get('http://localhost:4000/details')
			.then(response => cb(response.data))
			.catch(error => { throw error });
	}
	
}