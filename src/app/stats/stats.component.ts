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
  [x: string]: any;
  constructor(private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  }

  public returnToLeagues() {

    this._router.navigate(['']);
  }
  public goToClubs(){
'clubs/:id'
    this._router.navigate(['clubs/:id']);
  }

}
