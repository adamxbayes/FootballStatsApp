import { Injectable } from "@angular/core";
import { FootballNews } from "../models/football-news-model";
import { FootballApi } from './football-api';
import { FootballLeaguesRepository } from "./football-leagues.repositories";
import { Observable } from "rxjs/Observable";

@Injectable()
export class FootballNewsRepository {

  private FootballNews: FootballNews[] = [];

  constructor(private _api: FootballApi) { }

  public getAll(): Observable<FootballNews[]> {

    return this._api.getAll('top-headlines').map(result => {
      
      let footyNews = [];
      result.articles.array.forEach(article => {
        footyNews.push(new FootballNews(
          article.id,
          article.name,
          article.description,
          article.url,
          article.urlToImage,
          article.publishedAt))
      });
      console.log(result);
      return footyNews;

    });
  }
}



