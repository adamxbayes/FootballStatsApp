import { Component, OnInit } from '@angular/core';
import  {FootballNewsRepository } from '../../repositories/football-news.repositories';
import { FootballNews } from '../../models/football-news-model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

public footballNews: FootballNews[] = [];

  constructor(private footballNewsRepository: FootballNewsRepository,  private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
this.footballNewsRepository.getAll().subscribe( result => {
this.footballNews = result;
console.log(result);
})
  }

}
