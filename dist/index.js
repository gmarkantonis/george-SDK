"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TheOneAPI = void 0;
const apiURL = 'https://the-one-api.dev/v2';
class TheOneAPI {
    constructor(token) {
        this.token = token;
        this.config = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + this.token
            }
        };
    }
    getMovie(movieID) {
        const url = `${apiURL}/movie/${movieID}`;
        return fetch(url, this.config)
            .then(response => response.json())
            .then(data => data)
            .catch(error => {
            console.error(error);
        });
    }
    getMovies() {
        const url = `${apiURL}/movie`;
        return fetch(url, this.config)
            .then(response => response.json())
            .then(data => data)
            .catch(error => {
            console.error(error);
        });
    }
}
exports.TheOneAPI = TheOneAPI;
exports.default = TheOneAPI;
