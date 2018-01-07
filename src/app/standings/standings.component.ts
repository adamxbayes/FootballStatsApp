import { Component, OnInit, Input } from '@angular/core';
import { MatTableModule, MatTableDataSource, } from '@angular/material/table';
import { MatSortHeader, MatSortModule, Sort, MatSort } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { FootballStandingsRepository } from '../../repositories/football-standings.repositories';
import { FootballClubsRepository } from '../../repositories/football-teams.repository';
import { FootballStandings, Standings } from '../../models/football-standings-model';
import { NumberValueAccessor } from '@angular/forms/src/directives/number_value_accessor';
import { ViewChild } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})

export class StandingsComponent implements OnInit {

  @Input()
  leagueId: Number;

  displayedColumns = ['position', 'teamName', 'crestURI', 'playedGames', 'goals', 'goalsAgainst', 'goalDifference', 'wins', 'draws', 'losses', 'points'];

  dataSource: MatTableDataSource<Standings>;

  constructor(
    private footballStandingsRepository: FootballStandingsRepository
  ){ }

  sortData(sort: Sort) {}
  ngOnInit() {
    this.footballStandingsRepository.getStandingsByLeague(this.leagueId).subscribe(result => {
      this.dataSource = new MatTableDataSource<Standings>(result);
    });
  }
}