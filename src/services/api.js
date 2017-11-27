import axios from 'axios';

const __API__ = 'https://api-nave-twitter.herokuapp.com';

export default axios.create({
    baseURL: __API__
});