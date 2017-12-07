import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { FootballLeaguesRepository } from '../../repositories/football-leagues.repositories';
import { FootballLeagues } from '../../models/football-leagues-model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { List } from 'linqts';

@Component({
  selector: 'app-searchleagues',
  templateUrl: './search-leagues.component.html',
  styleUrls: ['./search-leagues.component.css']
})
export class SearchLeagueComponent implements OnInit {
  filteredFootballCompetitions: Observable<any[]>;
  stateCtrl: FormControl;
  selectedLeagueCaption: string;

  //Referencing the models which store instances of objects (drop down lists)
  FootballCompetitions: FootballLeagues[] = [];
  
 

  //observable...something to do with making continuous requests and not reloading full page?

  myControl: FormControl = new FormControl();
  //the export part above, allows this class to be imported.

  public goToClubs(){
    var selectedLeague = new List<FootballLeagues>(this.FootballCompetitions).First(league => league.caption == this.selectedLeagueCaption);

    this._router.navigate([`./clubs/${selectedLeague.id}`]);
  }

  filterFootballCompetitions(caption: string) {
    return this.FootballCompetitions.filter(league =>
      league.caption.toLowerCase().indexOf(caption.toLowerCase()) === 0);
  }

  constructor(private footballLeagueRepository: FootballLeaguesRepository, private _router: Router) {
    this.stateCtrl = new FormControl();

    this.filteredFootballCompetitions = this.stateCtrl.valueChanges
      .startWith(null)
      .map(league => league ? this.filterFootballCompetitions(league) : this.FootballCompetitions.slice());
  }

  ngOnInit() {
    this.footballLeagueRepository.getAll().subscribe(result => {
      this.FootballCompetitions = result;
    });


  }
  public selectLeague(id: number) : void {

     this.footballLeagueRepository.getTeamByLeagueId(id).subscribe(result => {

     });

  }

}