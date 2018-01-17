import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { forEach } from '@angular/router/src/utils/collection';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { FootballApi } from './football-api';
import { FootballStandings } from '../models/football-standings-model';


@Injectable()

export class FootballStandingsRepository {

    private footballStandings: FootballStandings[] = [];

    constructor(private _api: FootballApi) { }

    public getStandingsByLeague(leagueId: Number): Observable<FootballStandings[]> {

       return this._api.get(`competitions/${leagueId}/leagueTable`).map(result => {
            let leagueTable = [];
           

            result.standing.forEach(league => {leagueTable.push( new FootballStandings(
                league.position,
                league.teamName,
                league.crestURI,
                league.playedGames,
                league.points,
                league.goals,
                league.goalsAgainst,
                league.goalDifference,
                league.wins,
                league.draws,
                league.losses) 
            )});
            return leagueTable;
        });
       
    }
}





