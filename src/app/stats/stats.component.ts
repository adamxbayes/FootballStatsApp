import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


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

}
