import { Injectable } from "@angular/core";
import { FootballApi } from './football-api';
import { Observable } from 'rxjs/Observable';
import { forEach } from '@angular/router/src/utils/collection';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { FixtureModel } from "../models/football-fixtures-model";

@Injectable()

export class FootballFixturesRepository {

    private footballFixtures: FixtureModel[] = [];

    constructor(private _api: FootballApi){}

    public getFixturesByTeam(ClubId: Number): Observable<FixtureModel[]> {

        


    }



}