import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource, MatSortModule, MatSort } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { FootballStandingsRepository } from '../../repositories/football-standings.repositories';
import { FootballClubsRepository } from '../../repositories/football-teams.repository';
import { FootballStandings } from '../../models/football-standings-model';
import { NumberValueAccessor } from '@angular/forms/src/directives/number_value_accessor';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})

export class StandingsComponent implements OnInit {


  @Input()  
  leagueId: Number;
  result: FootballStandings [];
  displayedColumns = ['position', 'teamName', 'crestURI', 'playedGames', 'goals', 'goalsAgainst', 'goalDifference', 'wins', 'draws', 'losses', 'points'];
  dataSource : MatTableDataSource<FootballStandings>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private footballStandingsRepository: FootballStandingsRepository) { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  ngOnInit() {
    this.footballStandingsRepository.getStandingsByLeague(this.leagueId).subscribe(result => {
      this.dataSource = new MatTableDataSource<FootballStandings>(this.result);
  
    })
  }
}

export interface Standings {
  position: Number,
  teamName: String,
  crestURI: String,
  playedGames: Number,
  points: Number,
  goals: Number,
  goalsAgainst: Number,
  goalsDifference: Number,
  wins: Number,
  draws: Number,
  losses: Number
}
