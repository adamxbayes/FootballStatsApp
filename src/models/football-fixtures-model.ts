export class FixtureModel {

constructor(
    public date: Date,
    public finished: boolean,
    public matchday: number,
    public homeTeam: string,
    public awayTeam: string,
    public homeScore: number,
    public awayScore: number,
    
    //On the database it shows an object called result, and in the result it shows home and away goals for each halve, need to extract these
    //pieces of data and sum in to homeScore and awayScore.


) {}



}