import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { forEach } from '@angular/router/src/utils/collection';
import { Observable } from "rxjs/Observable";


@Injectable()
export class FootballApi {
    private BASE_API_URL: string = 'http://api.football-data.org/v1';
    private FFT_API_URL: string = 'https://newsapi.org/v2';
    constructor(private _http: Http) { }

    public get(route: string): Observable<any> {
        return this._http.get(`${this.BASE_API_URL}/${route}`,
            this.buildRequestOptions()).map(this.buildRequestResponse);
    }

    public getAll(route: string): Observable<any> {
        return this._http.get(`${this.FFT_API_URL}/${route}`,
            this.buildFFTRequestOptions()).map(this.buildFFTRequestResponse);
    }

    //Builds the request, defines route as a string, sends off an observable to the private BASE_API_URL. After the /, we provide the headers which is the auth token for 
    // that API. We then return a RequestOptions by calling the .buildRequestOptions which maps the JSON reponse to a variable named result.

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

    private buildFFTRequestOptions(): RequestOptions {
        const headers = new Headers({
            'Authorization' :'e6f6dd17abf3440e8e64849b0cc0c8a1'
        });
        return new RequestOptions ({headers : headers});
    }
    private buildFFTRequestResponse(response: Response): any {
        let result;

        if (response.text()) {
            result = response.json();
        }
        return result;
    }
}

