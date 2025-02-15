import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { Match } from '../dto/match/match';
import { Team } from '../dto/team/team';
import { TeamInfo } from '../dto/team/team-info';
import { SeasonService } from '../services/season.service';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-team-compare',
  templateUrl: './team-compare.component.html',
  styleUrl: './team-compare.component.scss'
})
export class TeamCompareComponent implements OnInit {

  teams: Team[] = [];
  selectedTeam!: Team;
  selectedTeam2!: Team;
  teamInfo!: TeamInfo;
  teamInfo2!: TeamInfo;
  matches: Match[] = [];
  againstMatches: Match[] = [];
  team1Wins: number = 0;
  team2Wins: number = 0;
  data: any;
  stats: any;
  dataPointsTeam1: any;
  dataPointsTeam2: any;
  data1: any;

  options: any;
  options1: any;

  constructor(private seasonService: SeasonService) { }

  ngOnInit(): void {

    this.stats = [

    ];
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.options = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: { color: textColor }
        }
      }
    };

    this.seasonService.getTeams().pipe(
      map((teams) => teams.sort((a, b) => a.name.localeCompare(b.name))),
      tap((sortedTeams) => {
        this.teams = sortedTeams;
        if (this.teams.length > 0) {
          this.selectedTeam = this.teams[0];
          this.selectedTeam2 = this.teams[1] || null; // Ensure at least two teams
        }
      })
    ).subscribe(() => {
      this.loadTeamData();
    });
  }

  onTeamSelect(): void {
    this.loadTeamData();
  }

  loadTeamData(): void {

    this.team1Wins = 0;
    this.team2Wins = 0;

    if (this.selectedTeam && this.selectedTeam2) {
      // Fetch matches between the two teams
      this.seasonService.getTwoTeamMatches("1", this.selectedTeam.id, this.selectedTeam2.id).subscribe((result) => {
        this.againstMatches = result;

        // Count wins
        this.againstMatches.forEach((match) => {
          if (match.homeTeamScore !== undefined && match.awayTeamScore !== undefined) {
            if (match.homeTeamId === this.selectedTeam.id && match.homeTeamScore > match.awayTeamScore) {
              this.team1Wins++;
            } else if (match.awayTeamId === this.selectedTeam.id && match.awayTeamScore > match.homeTeamScore) {
              this.team1Wins++;
            } else if (match.homeTeamId === this.selectedTeam2.id && match.homeTeamScore > match.awayTeamScore) {
              this.team2Wins++;
            } else if (match.awayTeamId === this.selectedTeam2.id && match.awayTeamScore > match.homeTeamScore) {
              this.team2Wins++;
            }
          }
        });

        // Fetch team comparison info and update chart
        this.seasonService.getTeamCompareInfo("1", this.selectedTeam.id, this.selectedTeam2.id).subscribe((result) => {
          if (result[0].id === this.selectedTeam.id) {
            this.teamInfo = result[0];
            this.teamInfo2 = result[1];
          } else {
            this.teamInfo = result[1];
            this.teamInfo2 = result[0];
          }

          this.stats = [
            {
              label: 'Points',
              value1: this.calculatePoints(this.teamInfo2),
              value2: this.calculatePoints(this.teamInfo),
              value1Percent: this.calculatePercent(this.calculatePoints(this.teamInfo2), this.calculatePoints(this.teamInfo)),
              value2Percent: this.calculatePercent(this.calculatePoints(this.teamInfo), this.calculatePoints(this.teamInfo2))
            }, {
              label: 'Points %',
              value1: this.calculatePointsPercentage(this.teamInfo2),
              value2: this.calculatePointsPercentage(this.teamInfo),
              value1Percent: this.calculatePointsPercentage(this.teamInfo2), // Using method to calculate percentage
              value2Percent: this.calculatePointsPercentage(this.teamInfo)  // Using method to calculate percentage
            },
            { label: 'Matches', value1: this.teamInfo2.playedGames, value2: this.teamInfo.playedGames, value1Percent: this.calculatePercent(this.teamInfo2.playedGames, this.teamInfo.playedGames), value2Percent: this.calculatePercent(this.teamInfo.playedGames, this.teamInfo2.playedGames) },
            { label: 'Wins', value1: this.teamInfo2.wins + this.teamInfo2.winsOt, value2: this.teamInfo.wins + this.teamInfo.winsOt, value1Percent: this.calculatePercent(this.teamInfo2.wins + this.teamInfo2.winsOt, this.teamInfo.wins + this.teamInfo.winsOt), value2Percent: this.calculatePercent(this.teamInfo.wins + this.teamInfo.winsOt, this.teamInfo2.wins + this.teamInfo2.winsOt) },
            { label: 'Losses OT', value1: this.teamInfo2.lossesOt, value2: this.teamInfo.lossesOt, value1Percent: this.calculatePercent(this.teamInfo2.lossesOt, this.teamInfo.lossesOt), value2Percent: this.calculatePercent(this.teamInfo.lossesOt, this.teamInfo2.lossesOt) },
            { label: 'Losses', value1: this.teamInfo2.losses, value2: this.teamInfo.losses, value1Percent: this.calculatePercent(this.teamInfo2.losses, this.teamInfo.losses), value2Percent: this.calculatePercent(this.teamInfo.losses, this.teamInfo2.losses) },
            { label: 'Position', value1: this.teamInfo2.position, value2: this.teamInfo.position, value1Percent: 50, value2Percent: 50 } // Positions are typically absolute values
,            
            {
              label: 'Wins Comparison', // Add pie chart data here
              value1: this.team1Wins,
              value2: this.team2Wins,
              value1Percent: this.calculatePercent(this.team1Wins, this.team2Wins),
              value2Percent: this.calculatePercent(this.team2Wins, this.team1Wins),
              chartData: this.data  // Add pie chart data as another value
            }
          ];





        });
      });
    }
  }

  calculatePointsPercentage(team: any): number {
    const actualPoints = this.calculatePoints(team);  // Get actual points
    const maxPoints = this.getMaxPoints(team);  // Get maximum points
    return Math.round((actualPoints / maxPoints) * 100);  // Round to the nearest integer
  }
  getMaxPoints(team: any): number {
    return team.playedGames * 2; // Assuming 3 points per game
  }

  onTeamSelect2(): void {
    this.loadTeamData();
  }

  calculatePercent(value: number, total: number): number {
    return Math.round((value / (value + total)) * 100);
  }

  calculatePoints(teamInfo: any): number {
    const winsPoints = teamInfo.wins * 2; // 3 points for each win
    const winsOtPoints = teamInfo.winsOt * 2; // 2 points for overtime win
    const lossesOtPoints = teamInfo.lossesOt ; // 1 point for overtime loss

    return winsPoints + winsOtPoints + lossesOtPoints ;
  }
}
