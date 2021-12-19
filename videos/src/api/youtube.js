import axios from 'axios';

const KEY = 'AIzaSyAoYHolE9hqIEOBYtO_x9gZ87Du32Bckio';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }

})

