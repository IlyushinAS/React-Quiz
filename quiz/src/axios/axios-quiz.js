import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-78a5c.firebaseio.com/'
})