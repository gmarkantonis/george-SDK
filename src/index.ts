import { MovieResponse, RequestConfig } from './types';

const apiURL = 'https://the-one-api.dev/v2';

export class TheOneAPI {
    private token: string;
    private config: RequestConfig;

    constructor(token: string) {
        this.token = token;
        this.config = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + this.token
            }
        };
    }

    getMovie(movieID: String): Promise<MovieResponse> {
        const url = `${apiURL}/movie/${movieID}`;
        return fetch(url, this.config)
            .then(response => response.json())
            .then(data => data)
            .catch(error => {
                console.error(error);
            });
    }

    getMovies(): Promise<MovieResponse> {
        const url = `${apiURL}/movie`;
        return fetch(url, this.config)
            .then(response => response.json())
            .then(data => data)
            .catch(error => {
                console.error(error);
            });
    }
}

export default TheOneAPI;
