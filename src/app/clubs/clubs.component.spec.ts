import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormControl} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ClubsComponent } from './clubs.component';
import { MatGridTile, MatGridList, MatCard, MatGridListModule } from '@angular/material';
import {RouterOutlet } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

describe('ClubsComponent', () => {
  let component: ClubsComponent;
  let fixture: ComponentFixture<ClubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubsComponent ],
      imports: [MatGridTile, MatGridListModule, MatGridList, MatCard, AppRoutingModule],
      providers: [RouterOutlet]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(ClubsComponent).not.toBe(null);
  });
});
