import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { forEach } from '@angular/router/src/utils/collection';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { ClubPlayers } from '../models/football-players-model';
import { FootballApi } from './football-api';
import { FootballTeam } from '../models/football-team-model';
import {FixtureModel} from '../models/football-fixtures-model'

export class FixtureRepository {
    
    private footballFixtures: FixtureModel[] = [];

    constructor(private _api: FootballApi){ }

    public getFixturesByTeam(ClubId: Number): Observable<FixtureModel[]>
    {
        
    }
    
}
