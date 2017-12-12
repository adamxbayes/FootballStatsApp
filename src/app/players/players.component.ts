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

@Component({
    selector: 'app-players',
    templateUrl: 'players.component.html',
    styleUrls: ['players.component.css']

})

export class PlayersComponent implements OnInit {

    public footballPlayers: Observable<ClubPlayers[]>;
    private leagueId: number;
    private selectedClubId: number;
    private selectedPlayer: string;
    playerCtrl: FormControl;
    public selectedPlayerName: string;
    
    footballers: ClubPlayers[] = [];    
   
    constructor(private footballPlayersRepository: FootballPlayersRepository, private _router: Router,
        private _route: ActivatedRoute) {
            this.playerCtrl = new FormControl();
        }
        

    /*filterFootballPlayers(name: string){
            return this.footballPlayers.filter(player=>
            player.name.toLowerCase().indexOf(name.toLowerCase()) === 0
        }
  
    */

ngOnInit(){

    this._route.params.subscribe(p=>{

        this.selectedClubId = Number(p['id']);

        this.footballPlayers = this.footballPlayersRepository.getPlayersByTeam(this.selectedClubId);

    })
}

selectPlayer(){
var selectedPlayer = new List <ClubPlayers>(this.footballers).First(player => player.name == this.selectedPlayerName);
    

}

}
