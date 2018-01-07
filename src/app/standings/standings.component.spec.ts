import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormControl} from '@angular/forms';
import { StandingsComponent } from './standings.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';


describe('StandingsComponent', () => {
  let component: StandingsComponent;
  let fixture: ComponentFixture<StandingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandingsComponent ],
      imports :  [HttpModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
