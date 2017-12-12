import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { forEach } from '@angular/router/src/utils/collection';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { ClubPlayers } from '../models/football-players-model';
import { FootballApi } from './football-api';
import { FootballTeam } from '../models/football-team-model';

@Injectable()
export class FootballPlayersRepository {

    private footballPlayers: ClubPlayers[] = [];

    constructor(private _api: FootballApi) { }

    public getPlayersByTeam(ClubId: number): Observable<ClubPlayers[]> {

        return this._api.get(`teams/${ClubId}/players`).map(result => {
            let soccerPlayers = [];
            console.log(result);
        
            result.players.forEach(player => {
                soccerPlayers.push(
                    new ClubPlayers
                        (
                        player.name,
                        player.position,
                        player.jerseyNumber,
                        player.dateOfBirth,
                        player.nationality,
                        player.contractUntil)
                        )
            console.log(ClubPlayers)});
            return soccerPlayers;


        })

    }



}





