import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { forEach } from '@angular/router/src/utils/collection';
import { Observable } from "rxjs/Observable";


@Injectable()
export class FootballApi {
    private BASE_API_URL: string = 'http://api.football-data.org/v1';

    constructor(private _http: Http) { }

    public get(route: string): Observable<any> {
        return this._http.get(`${this.BASE_API_URL}/${route}`,
            this.buildRequestOptions()).map(this.buildRequestResponse);
    }

    private buildRequestOptions(): RequestOptions {
        const headers = new Headers({
            'x-Auth-Token': '46f9705ba81a4774b067344f26366b70'
        });

        return new RequestOptions({ headers: headers });
    }

    private buildRequestResponse(response: Response): any {
        let result;

        if (response.text()) {
            result = response.json();
        }

        return result;
    }
}

