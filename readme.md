# The One SDK To Rule Them All

Simple wrapper around [The One API](https://the-one-api.dev) with typed methods. You will need to provide your own token, link to create one [here](https://the-one-api.dev/sign-up). Methods available are:
```typescript
getMovie(string)
getMovies()
```

## Installation
```
npm i george-sdk
```

## Usage
```typescript
// Import SDK
import TheOneAPI from 'george-sdk';

// Initialize SDK instance
const myToken = 'YOUR_TOKEN_HERE';
const myInstance = new TheOneAPI(myToken);

// Call methods using .then
myInstance.getMovies().then((val) => {
    console.log(val);
});
myInstance.getMovie('5cd95395de30eff6ebccde56').then((val) => {
    console.log(val);
});

// Or using async/await
const movie = await myInstance.getMovie();;
const movies = await myInstance.getMovies('5cd95395de30eff6ebccde56');;
```

## Types
```typescript
type MovieResponse = {
    docs: {
        _id: String;
        name: String;
        runtimeInMinutes: Number;
        budgetInMillions: Number;
        boxOfficeRevenueInMillions: Number;
        academyAwardNominations: Number;
        academyAwardWins: Number;
        rottenTomatoesScore: Number;
    }[];
    total: Number;
    limit: Number;
    offset: Number;
    page: Number;
    pages: Number;
}
```
