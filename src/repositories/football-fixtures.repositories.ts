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

        return this._api.get(`teams/${ClubId}/fixtures`).map(result => {
            let soccerFixtures = [];
            console.log(result);

            result.fixtures.forEach(fixture => {
                soccerFixtures.push(
                    new FixtureModel
                    (
                        fixture.date,
                        fixture.matchday,
                        fixture.homeTeam,
                        fixture.awayTeam,
                        fixture.homeScore,
                        fixture.awayScore,
                        fixture.finished)
                    )
                    console.log(FixtureModel)});
                    return soccerFixtures;
            })
        }

      }

        


  



