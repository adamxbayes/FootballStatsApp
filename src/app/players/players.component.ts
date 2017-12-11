import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Route } from '@angular/router/src/config';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { FootballPlayersRepository } from '../../repositories/football-players.repositories';
import { ClubPlayers } from '../../models/football-players-model';

@Component({
    selector: 'app-players',
    templateUrl: 'players.component.html',
    styleUrls: ['players.component.css']

})

export class PlayersComponent implements OnInit {

    private footballPlayers: ClubPlayers [];
    private leagueId: number;
    private selectedClubId: number;

    constructor(private footballPlayersRepository: FootballPlayersRepository, private _router: Router,
        private _route: ActivatedRoute) {}

    ng OnInit() {
        this.route.params.subscribe(p=> {
        this.club.id = Number(p['id']);
        })


    }
}
