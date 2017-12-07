import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material';
import { SearchLeagueComponent } from '../search-leagues/search-leagues.component';
import { FootballClubs } from '../../models/football-team-model';
import { FootballClubsRepository } from '../../repositories/football-teams.repository';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Route } from '@angular/router/src/config';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})




//Need to grab short name of each club using the Football clubs constructor

export class ClubsComponent implements OnInit {


  filteredFootballClubs: Observable<any[]>;
  leagueId: number;

  
  constructor(private footballClubRepository: FootballClubsRepository, private _router: Router, private _route: ActivatedRoute) {
  }


  public selectClub(name: string): void {
    //this.footballClubRepository

  }

  ngOnInit() {
    this._route.params.subscribe(p => {
      this.leagueId = Number(p['id']);
  });
    }
}



