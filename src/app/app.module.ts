import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatDatepickerModule, MatSelectModule, MatSlideToggleModule, MatGridListModule, MatGridTile, MatExpansionModule, MatExpansionPanelActionRow } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule, RoutableComponents } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FootballLeaguesRepository } from '../repositories/football-leagues.repositories';
import { FootballFixturesRepository } from '../repositories/football-fixtures.repositories';
import { HttpModule } from '@angular/http';
import { FootballApi } from '../repositories/football-api';
import { ClubsComponent } from './clubs/clubs.component';
import { StatsComponent } from './stats/stats.component';
import { FootballClubsRepository } from '../repositories/football-teams.repository';
import { FootballPlayersRepository } from '../repositories/football-players.repositories';
import { PlayersComponent } from './players/players.component';
import { FixturesModule } from './fixtures/fixtures.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutableComponents,
    PlayersComponent,
    FixturesModule
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatDialogModule,
    MatExpansionModule
  ],
  providers: [
    FootballApi,
    FootballLeaguesRepository,
    FootballClubsRepository,
    FootballPlayersRepository,
    FootballFixturesRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
