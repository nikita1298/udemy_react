import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Cabyc3dxIK9xlrmU97Io1sHNl66-HBb4GWJNneQhXsQ'
    }

})