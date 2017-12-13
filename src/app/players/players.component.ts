import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Route } from '@angular/router/src/config';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { List } from 'linqts';
import { FootballPlayersRepository } from '../../repositories/football-players.repositories';
import { ClubPlayers } from '../../models/football-players-model';
import { FootballTeam } from '../../models/football-team-model';
import { MatExpansionModule } from '@angular/material'


@Component({
    selector: 'app-players',
    templateUrl: 'players.component.html',
    styleUrls: ['players.component.css']

})

export class PlayersComponent implements OnInit {

    public footballPlayers: Observable<ClubPlayers[]>;
    private leagueId: number;
    private selectedClubId: number;
    private selectedPlayer: ClubPlayers;
    public selectedPlayerName: string;


    footballers: ClubPlayers[] = [];

    constructor(private footballPlayersRepository: FootballPlayersRepository, private _router: Router,
        private _route: ActivatedRoute) {

    }
    playerCtrl: FormControl = new FormControl();

    /*filterFootballPlayers(name: string){
            return this.footballPlayers.filter(player=>
            player.name.toLowerCase().indexOf(name.toLowerCase()) === 0
        }
  
    */

    ngOnInit() {

        this._route.params.subscribe(p => {
            this.selectedClubId = Number(p['id']);
            this.footballPlayers = this.footballPlayersRepository.getPlayersByTeam(this.selectedClubId);

        })
    }
    selectPlayer(ClubPlayers) {
        console.log(this.selectedPlayer);

    }

}
