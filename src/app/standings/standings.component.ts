import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableModule, MatTableDataSource, } from '@angular/material/table';
import { MatSortHeader, MatSortModule, Sort, MatSort, MatTooltipModule,  } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { FootballStandingsRepository } from '../../repositories/football-standings.repositories';
import { FootballClubsRepository } from '../../repositories/football-teams.repository';
import { FootballStandings, Standings } from '../../models/football-standings-model';
import { NumberValueAccessor } from '@angular/forms/src/directives/number_value_accessor';
import { RouterTestingModule } from '@angular/router/testing';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})

export class StandingsComponent {

  @Input()
  
  leagueId: Number;

  displayedColumns = ['position', 'teamName', 'crestURI', 'playedGames', 'goals', 'goalsAgainst', 'goalDifference', 'wins', 'draws', 'losses', 'points'];

  constructor(
    private footballStandingsRepository: FootballStandingsRepository
  ) { }


  ngOnInit() {
    this.footballStandingsRepository.getStandingsByLeague(this.leagueId).subscribe(result => { });
  }




}
