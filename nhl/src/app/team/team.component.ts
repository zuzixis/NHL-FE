import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { SeasonService } from '../services/season.service';
import { Team } from '../dto/team/team';
import { CarouselModule } from 'primeng/carousel';
import { Match } from '../dto/match/match';
import { TeamInfo } from '../dto/team/team-info';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent implements OnInit {

  teams: Team[] = [];
  selectedTeam!: Team;
  teamInfo!: TeamInfo;
  matches: Match[] = [];


  constructor(private seasonService: SeasonService) { }


  ngOnInit(): void {
    this.seasonService.getTeams().pipe(
      map((teams) => teams.sort((a, b) => a.name.localeCompare(b.name))),
      tap((sortedTeams) => {
        this.teams = sortedTeams;
        // Set the default selected team after the teams are loaded
        if (this.teams.length > 0) {
          this.selectedTeam = this.teams[0];
        }
      })
    ).subscribe();
    if (this.selectedTeam) {
      this.seasonService.getTeamMatches("1", this.selectedTeam.id).subscribe((result) => {
        this.matches = result;
      });

      this.seasonService.getTeamInfo("1", this.selectedTeam.id).subscribe((result) => {
        this.teamInfo = result;
      });
    }
  }

  responsiveOptions: any[] | undefined;

  onTeamSelect(): void {
    if (this.selectedTeam) {
      this.seasonService.getTeamMatches("1", this.selectedTeam.id).subscribe((result) => {
        this.matches = result; // Store the matches for the selected team
      });

      this.seasonService.getTeamInfo("1", this.selectedTeam.id).subscribe((result) => {
        this.teamInfo = result;
      });
    }
  }

}
