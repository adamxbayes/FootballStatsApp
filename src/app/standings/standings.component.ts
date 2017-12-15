import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { FootballStandingsRepository } from '../../repositories/football-standings.repositories';
import { FootballStandings } from '../../models/football-standings-model';
import { NumberValueAccessor } from '@angular/forms/src/directives/number_value_accessor';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {

displayedColumns = ['position','teamName','crestUrI','playedGames','points','goals','goalsAgainst', 'goalsDifference','wins','draws','losses'];
dataSource = new MatTableDataSource<LeagueStandings> (TABLE_DATA); // Table_DATA Refers to the returning data from the http request

  ngOnInit() {
  }

}

export interface LeagueStandings {
  
      position: Number;
      teamName: String;
      crestUrI: String;
      playedGames: Number;
      points: Number;
      goals: Number;
      goalsAgainst: Number;
      goalsDifference: Number;
      wins: Number;
      draws: Number;
      losses: Number;
  
    }
