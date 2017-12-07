import { Injectable } from '@angular/core';
import { FootballLeagues } from './../models/football-leagues-model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { forEach } from '@angular/router/src/utils/collection';
import { FootballApi } from './football-api';
import { FootballTeam } from '../models/football-team-model';

@Injectable()

export class FootballClubsRepository {

    constructor(private _api: FootballApi) { }

    public getTeamsByLeagueId(leagueId: number): Observable<FootballTeam[]> {
        return this._api.get(`competitions/${leagueId}/teams`).map(result => {
            let soccerClubs = [];
           console.log(result);

            result.teams.forEach(club => {
                soccerClubs.push(
                    new FootballTeam(this.getIdFromHrefLink(club._links.self.href), club.name, club.code, club.shortName, club.crestUrl, club.teamLink)
                    
                );
                
                let link: string;
                link=`${club._links.self.href}`.toString();
               club.teamLink = link;
                console.log(club.teamLink);
                return link;

                
                
                
                
               
            });
            return soccerClubs;
            
            
        });
    }
    

    
    public getIdFromHrefLink(teamLink: string):  number {
        
        
        teamLink.split("/");
        const teamId = teamLink.substring(teamLink.lastIndexOf("/")+ 1);
       
        
       console.log(Number(teamId));
        
        return Number(teamId);
       
        
        
    }
    
}

