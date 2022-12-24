
 
import axios from 'axios';
export  default class CountryService {

    getCountries() {
        return axios.get('5c78e9fa-c2e2-4771-93ff-7f400a12f7ba').then(res => res.data);
    }
}
   

    