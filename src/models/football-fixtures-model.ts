export class FixtureModel {

constructor(
    public date: Date,
    public finished: boolean,
    public matchday: number,
    public homeTeam: string,
    public awayTeam: string,
    public homeScore: number,
    public awayScore: number,
    
   // formatting can go as the following in a list item:             matchday, date, homeTeam, homeScore, awayScore, awayTeam


) {}



}