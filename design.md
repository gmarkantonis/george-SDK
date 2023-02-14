# Design

My goal was to make this as simple as possible. Breakdown of the source directory below.

## `/src/index.ts`
- Hard coded `apiURL`
- Our exported class is called `TheOneAPI`
- Initializing an instance of `TheOneAPI`requires a token in the form of a string
- Token is used to created a private `config` object used by both fetch requests
- `getMovie` requires a parameter for movie ID
- `getMovies` does not require any parameters

## `/src/types.ts`
- Extracted the types of `MovieResponse` and `RequestConfig`

## Future work
- Move `apiURL` to an `.env` file
- Breakdown `types.ts` to a `types` folder, especially nice if including more API endpoints (books, quotes, etc)
- Write unit tests, some examples:
    - Requests fail with no token
    - Requests succeed with valid token
    - `getMovie` will return an object with the same ID
