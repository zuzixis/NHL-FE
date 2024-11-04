import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { LeagueComponent } from './league/league.component';
import { MatchComponent } from './match/match.component';

const routes: Routes = [
  { path: '', component: LeagueComponent }, 
  { path: 'team', component: TeamComponent }, 
  { path: 'league', component: LeagueComponent },
  { path: 'match', component: MatchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
