import { Injectable } from '@angular/core';
import { FootballLeagues } from './../models/football-leagues-model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { forEach } from '@angular/router/src/utils/collection';
import { FootballApi } from './football-api';


@Injectable()
export class FootballLeaguesRepository {

    private FootballCompetitions: FootballLeagues[] = [];

    
    constructor(private _api: FootballApi) { } 

    public getAll(): Observable<FootballLeagues[]> {
        return this._api.get('competitions/').map(result => {
            let soccerLeagues = [];

            result.forEach(league => {
                soccerLeagues.push(
                    new FootballLeagues(league.id, league.caption, league.numberOfTeams)
                )
            });

            return soccerLeagues;
        });
    }
}