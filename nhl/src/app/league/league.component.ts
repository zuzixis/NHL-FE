import { SeasonService } from '../services/season.service';
import { HttpsConstantsService } from '../services/https-constants.service';
import { Component, OnInit } from '@angular/core';
import { Season } from '../dto/season/season';
import { TeamPosition } from '../dto/team/team-position';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrl: './league.component.scss',
})
export class LeagueComponent implements OnInit {

  seasons: Season[] = [];
  teamPositions: TeamPosition[] = [];
  progress: number = 0;
  value: boolean = false;  


  constructor(private seasonService: SeasonService) {
    
  }

  ngOnInit(): void {
    this.seasonService.getSeasons().subscribe((result) => {
      this.seasons = result;
      if (this.seasons.length > 0) {
        if (result[0].countOfPlayedMatches) {
          this.progress = parseFloat((result[0].countOfPlayedMatches / result[0].countOfMatches * 100).toFixed(2));

          console.log('___ progres = ' + this.progress);
        }
        this.seasonService.getSeasonTeamsData(this.seasons[0].id.toString()).subscribe((positions: TeamPosition[]) => {
          this.teamPositions.push(...positions);
        });
      }
    });
  }

}
