import { Component, OnInit, Input } from '@angular/core';
import { MatTableModule, MatTableDataSource, } from '@angular/material/table';
import { MatSortHeader, MatSortModule, Sort, MatSort, MatTooltipModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { FootballStandingsRepository } from '../../repositories/football-standings.repositories';
import { FootballClubsRepository } from '../../repositories/football-teams.repository';
import { FootballStandings, Standings } from '../../models/football-standings-model';
import { NumberValueAccessor } from '@angular/forms/src/directives/number_value_accessor';
import { ViewChild } from '@angular/core';
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

  dataSource: MatTableDataSource<Standings>;

  sortedData;

  @ViewChild(MatSort) sort: MatSort;






  constructor(
    private footballStandingsRepository: FootballStandingsRepository
  ) { }


  sortData(sort: Sort) {
    let a: any;
    let b: any;

    const data = this.displayedColumns.slice();
    if (!sort.active || sort.direction == '') {
      this.sortedData = data;
      return;
    }

    function compare(a, b, isAsc) {

      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }

  ngOnInit() {
    this.footballStandingsRepository.getStandingsByLeague(this.leagueId).subscribe(result => {
      this.dataSource = new MatTableDataSource<Standings>(result);
    });
  }
}
