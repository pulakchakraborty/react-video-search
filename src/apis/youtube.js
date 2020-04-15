import axios from 'axios';

const API_KEY = 'Replace_With_Your_API_KEY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: `${API_KEY}`
    }
});
