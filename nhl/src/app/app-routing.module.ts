import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { LeagueComponent } from './league/league.component';
import { MatchComponent } from './match/match.component';
import { ConferenceComponent } from './conference/conference.component';
import { DivisionComponent } from './division/division.component';
import { TeamCompareComponent } from './team-compare/team-compare.component';

const routes: Routes = [
  { path: '', component: LeagueComponent }, 
  { path: 'team', component: TeamComponent }, 
  { path: 'league', component: LeagueComponent },
  { path: 'conference', component: ConferenceComponent },
  { path: 'division', component: DivisionComponent },
  { path: 'team-compare', component: TeamCompareComponent },
  { path: 'match', component: MatchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
