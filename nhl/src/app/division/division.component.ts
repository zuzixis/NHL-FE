import { Component, OnInit } from '@angular/core';
import { Season } from '../dto/season/season';
import { TeamPosition } from '../dto/team/team-position';
import { SeasonService } from '../services/season.service';
import { DivisionEnum } from '../dto/division/division';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrl: './division.component.scss'
})
export class DivisionComponent implements OnInit {
  [x: string]: any;

  seasons: Season[] = [];
  teamPositions: TeamPosition[] = [];

  teamPositionsByDivision = {
    [DivisionEnum.ATLANTIC]: [] as TeamPosition[],
    [DivisionEnum.PACIFIC]: [] as TeamPosition[],
    [DivisionEnum.CENTRAL]: [] as TeamPosition[],
    [DivisionEnum.METROPOLITAN]: [] as TeamPosition[]
  };
  public DivisionEnum = DivisionEnum;
  constructor(private seasonService: SeasonService) {

  }

  ngOnInit(): void {
    this.seasonService.getSeasonTeamsData('1').subscribe((positions: TeamPosition[]) => {
      positions.forEach((position) => {
        switch (position.division) {
          case DivisionEnum.ATLANTIC:
            this.teamPositionsByDivision[DivisionEnum.ATLANTIC].push(position);
            break;
          case DivisionEnum.PACIFIC:
            this.teamPositionsByDivision[DivisionEnum.PACIFIC].push(position);
            break;
          case DivisionEnum.CENTRAL:
            this.teamPositionsByDivision[DivisionEnum.CENTRAL].push(position);
            break;
          case DivisionEnum.METROPOLITAN:
            this.teamPositionsByDivision[DivisionEnum.METROPOLITAN].push(position);
            break;
        }
      });
    });
  }
}
