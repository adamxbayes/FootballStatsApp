import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PlayersComponent } from '../players/players.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  public leagueId: number;

  [x: string]: any;
  constructor(private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(p => {
      this.leagueId = Number(p['leagueId']);
      this.teamId = Number(p['teamId']);
    });
  }

  public returnToLeagues() {

    this._router.navigate(['']);
  }
  public goToClubs(){
'clubs/:id'
    this._router.navigate(['clubs/:id']);
  }

}
