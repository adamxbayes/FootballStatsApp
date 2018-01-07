import { SearchLeagueComponent } from '../search-leagues/search-leagues.component';
import { FootballLeagues } from '../../models/football-leagues-model';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { MatInputModule, MatAutocompleteModule, MatCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { FootballLeaguesRepository } from '../../repositories/football-leagues.repositories';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

fdescribe('SearchLeagueComponent', () => {
    let component: SearchLeagueComponent;
    let fixture: ComponentFixture<SearchLeagueComponent>;

    let fakeFootballLeague1 = new FootballLeagues(88, 'SearchableCaptionString', 1);
    let fakeFootballLeague2 = new FootballLeagues(99, 'FilterableCaptionString1', 1);
    let fakeFootballLeague3 = new FootballLeagues(100, 'FilterableCaptionString2', 1);

    let fakeFootballLeagueRepository = {
        getAll: jasmine.createSpy('getAll').and.returnValue(Observable.of([
            fakeFootballLeague1,
            fakeFootballLeague2,
            fakeFootballLeague3
        ]))
    };

    let fakeRouter = {
        navigate: jasmine.createSpy('navigate'),
        navigateByUrl: jasmine.createSpy('navigateByUrl').and.returnValue(Observable.of(true))
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MatInputModule,
                MatAutocompleteModule,
                MatCardModule,
                FormsModule,
                ReactiveFormsModule,
                BrowserAnimationsModule
            ],
            declarations: [
                SearchLeagueComponent],

            providers: [
                { provide: FootballLeaguesRepository, useValue: fakeFootballLeagueRepository },
                { provide: Router, useValue: fakeRouter }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchLeagueComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should get all football leagues on initialisation', () => {
        let footballLeagues = component.FootballCompetitions;

        expect(fakeFootballLeagueRepository.getAll).toHaveBeenCalled();
        expect(footballLeagues.length).toBeGreaterThan(0);
    });

    it('goToClubs(), should redirect to selected league', () => {
        component.selectedLeagueCaption = 'SearchableCaptionString';

        component.goToClubs();

        expect(fakeRouter.navigate).toHaveBeenCalledWith(['./clubs/' + fakeFootballLeague1.id]);
    });

    it('filterFootballCompetitions() should return all leagues which contain caption provided', () => {
        let filterResult = component.filterFootballCompetitions('Filterable');

        expect(filterResult.length).toEqual(2);
    });

    it('filterFootballCompetitions() should return all leagues which contain caption provided regardless of casing', () => {
        let filterResult = component.filterFootballCompetitions('FILTERABLE');

        expect(filterResult.length).toEqual(2);
    });

    it ('filterFootballCompetitions() should return all empty array when no items match', () => {
        let filterResult = component.filterFootballCompetitions('xxxxxx');

        expect(filterResult.length).toEqual(0);
    });
});