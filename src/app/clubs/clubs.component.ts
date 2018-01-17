import { Component, OnInit } from '@angular/core';
import { MatGridListModule, MatGridTile, MatList } from '@angular/material';
import { SearchLeagueComponent } from '../search-leagues/search-leagues.component';
import { FootballTeam } from '../../models/football-team-model';
import { FootballLeagues } from '../../models/football-leagues-model';
import { FootballClubsRepository } from '../../repositories/football-teams.repository';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Route } from '@angular/router/src/config';
import { ActivatedRoute } from '@angular/router';
import { FootballLeaguesRepository } from '../../repositories/football-leagues.repositories';
import { List } from 'linqts';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {

  private footballTeams: FootballTeam[];
  private leagueId: number;
  private selectedClubId: number;
  public selectedLeague: FootballLeagues;

  constructor(
    private footballClubsRepository: FootballClubsRepository,
    private _router: Router,
    private _route: ActivatedRoute) {

  }
  public selectClub(id: Number): void {
    this._router.navigate([`./teams/${id}/league/${this.leagueId}`]);

  }
  public returnToLeagues() {

    this._router.navigate(['']);
  }
  public goToStats() {

    this._router.navigate(['teams/:id']);

  }
  ngOnInit() {
    this._route.params.subscribe(p => {
      this.leagueId = Number(p['id']);

      this.footballClubsRepository.getTeamsByLeagueId(this.leagueId).subscribe(result => {
    
        this.footballTeams = result;
      });
    });
  }
}



