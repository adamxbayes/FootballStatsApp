import { Injectable } from '@angular/core';
import { FootballLeagues } from './../models/football-leagues-model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { forEach } from '@angular/router/src/utils/collection';
import { FootballApi } from './football-api';
import { FootballClubs } from '../models/football-team-model';

@Injectable()

export class FootballClubsRepository {

    private footballClubs: FootballClubs[] = [];


    constructor(private _api: FootballApi) { }
    //Returns all premier league clubs, with their name, short code, abbreviation and crest image. 
    public getAll(): Observable<FootballClubs[]> {
        return this._api.get('competitions/445/').map(result => {
            let soccerClubs = [];

            result.forEach(club => {
                soccerClubs.push(
                    new FootballClubs(club.name, club.code, club.shortName, club.crestURL)
                );
            });


            return soccerClubs;
        });
    }

}

