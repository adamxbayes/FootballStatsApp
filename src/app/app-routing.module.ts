
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SearchLeagueComponent } from './search-leagues/search-leagues.component';
import { ClubsComponent } from './clubs/clubs.component';
import { StatsComponent } from './stats/stats.component';



const routes: Routes = [
    { path: '', component: SearchLeagueComponent },
    { path: 'clubs/:id', component: ClubsComponent },
    { path: 'teams/:teamId/league/:leagueId', component: StatsComponent }


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

export const RoutableComponents = [
    SearchLeagueComponent,
    ClubsComponent,
    StatsComponent
];