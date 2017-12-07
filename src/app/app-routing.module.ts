
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SearchLeagueComponent } from './search-leagues/search-leagues.component';
import { ClubsComponent } from './clubs/clubs.component';


const routes: Routes = [
    { path: '', component: SearchLeagueComponent },
    { path: 'clubs/:id', component: ClubsComponent },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

export const RoutableComponents = [
    SearchLeagueComponent,
    ClubsComponent
];