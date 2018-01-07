import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchLeagueComponent } from './search-leagues/search-leagues.component';
import { MatAutocompleteModule } from '@angular/material';
import { FormControl, FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent,]

      , imports: [AppRoutingModule, MatAutocompleteModule]
    }).compileComponents();
  }));
  it('should be created', () => {
    expect(component).toBeTruthy();
  },
  
);



})