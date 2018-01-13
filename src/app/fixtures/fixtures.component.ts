import { NgModule, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { FootballFixturesRepository } from '../../repositories/football-fixtures.repositories';
import { FixtureModel } from '../../models/football-fixtures-model'
import { Route } from '@angular/router/src/config';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MatListModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})

export class FixturesModule implements OnInit{

  fixtures: FixtureModel[] = [];
  public footballFixtures: Observable<FixtureModel[]>;
  public selectedClubId: Number;
  public teamFixtures: Number;
  constructor(private footballFixtureRepository: FootballFixturesRepository, private _router: Router, private _route: ActivatedRoute) { }

  myControl: FormControl = new FormControl();

  

  ngOnInit() {

    this._route.params.subscribe(p => {
      this.selectedClubId = Number(p['teamId']);
      this.footballFixtures = this.footballFixtureRepository.getFixturesByTeam(this.selectedClubId);
    })
  }



}

