import axios from 'axios';

const ACCESS_KEY = 'Z9_pQd-Gh-mjRK7SBq0qOqJGjKe7HWIgziez7QtzgHY';

const unsplashApi = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`
    }
});

export const searchPhotos = (query: string) => {
    return unsplashApi.get('/search/photos', {
        params: { query }
    });
};
