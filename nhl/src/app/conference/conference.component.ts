import { Component, OnInit } from '@angular/core';
import { Season } from '../dto/season/season';
import { TeamPosition } from '../dto/team/team-position';
import { SeasonService } from '../services/season.service';
import { ConferenceEnum } from '../dto/conference/conference';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrl: './conference.component.scss'
})
export class ConferenceComponent implements OnInit {

  seasons: Season[] = [];
  teamWestPositions: TeamPosition[] = [];
  progress: number = 0;
  teamPositionsByDivision = {
    [ConferenceEnum.WESTERN]: [] as TeamPosition[],
    [ConferenceEnum.EASTERN]: [] as TeamPosition[],

  };
  public ConferenceEnum = ConferenceEnum;

  constructor(private seasonService: SeasonService) {

  }

  ngOnInit(): void {
    this.seasonService.getSeasonTeamsData('1').subscribe((positions: TeamPosition[]) => {
      positions.forEach((position) => {
        switch (position.conference) {
          case ConferenceEnum.WESTERN:
            this.teamPositionsByDivision[ConferenceEnum.WESTERN].push(position);
            break;
          case ConferenceEnum.EASTERN:
            this.teamPositionsByDivision[ConferenceEnum.EASTERN].push(position);
            break;
        }
      });
    });
  }

}
