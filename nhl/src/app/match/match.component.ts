import { Component, OnInit } from '@angular/core';
import { Team } from '../dto/team/team';
import { SeasonService } from '../services/season.service';
import { Match } from '../dto/match/match';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss' // Opravený typo: 'styleUrl' na 'styleUrls'
  ]
})
export class MatchComponent implements OnInit {

  teams: Team[] = [];
  homeTeam: Team | undefined | null;
  awayTeam: Team | undefined | null;
  homeTeamScore: number = 0;
  awayTeamScore: number = 0;
  simulated: boolean = false;
  overtime: boolean = false;
  matches: Match[] = [];

  constructor(private seasonService: SeasonService) {}

  ngOnInit(): void {
    this.seasonService.getTeams().pipe(
      map((teams) => teams.sort((a, b) => a.name.localeCompare(b.name))),
      tap((sortedTeams) => this.teams = sortedTeams)
    ).subscribe();
    
    this.seasonService.getSeasonMatches("1").subscribe((result) => {
      this.matches = result;
    });
  }

  submitForm() {
    if (!this.homeTeam || !this.awayTeam) {
      console.error('Both teams must be selected.');
      return;
    }

    const matchData: Match = {
      homeTeamId: this.homeTeam.id,
      awayTeamId: this.awayTeam.id,
      homeTeamScore: this.homeTeamScore,
      awayTeamScore: this.awayTeamScore,
      simulated: this.simulated,
      overtime: this.overtime,
      seasonId: 1
    };

    this.seasonService.createMatch(matchData).subscribe(
      response => {
        this.matches = [response, ...this.matches];

        this.homeTeam = null;
        this.awayTeam = null;
        this.homeTeamScore = 0;
        this.awayTeamScore = 0;
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}
