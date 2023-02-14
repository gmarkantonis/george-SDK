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

type RequestConfig = {
    method: string;
    headers: {
        [key: string]: string;
    };
}

export { MovieResponse, RequestConfig };
