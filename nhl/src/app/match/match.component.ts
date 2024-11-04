import { Component, OnInit } from '@angular/core';
import { Team } from '../dto/team/team';
import { SeasonService } from '../services/season.service';
import { Match } from '../dto/match/match';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss' // Opravený typo: 'styleUrl' na 'styleUrls'
  ]
})
export class MatchComponent implements OnInit {

  teams: Team[] = [];
  homeTeam: Team | undefined;
  awayTeam: Team | undefined;
  homeTeamScore: number = 0;
  awayTeamScore: number = 0;
  simulated: boolean = false;
  overtime: boolean = false;
  matches: Match[] = [];

  constructor(private seasonService: SeasonService) {}

  ngOnInit(): void {
    this.seasonService.getTeams().subscribe((teams) => {
      this.teams = teams;
    });

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
        this.matches.push(response);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}
