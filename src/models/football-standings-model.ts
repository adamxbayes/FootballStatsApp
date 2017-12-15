export interface Standings {
    position: Number,
    teamName: String,
    crestURI: String,
    playedGames: Number,
    points: Number,
    goals: Number,
    goalsAgainst: Number,
    goalsDifference: Number,
    wins: Number,
    draws: Number,
    losses: Number
}


export class FootballStandings implements Standings {
    constructor(
        public position: Number,
        public teamName: String,
        public crestURI: String,
        public playedGames: Number,
        public points: Number,
        public goals: Number,
        public goalsAgainst: Number,
        public goalsDifference: Number,
        public wins: Number,
        public draws: Number,
        public losses: Number

    ) { }

}