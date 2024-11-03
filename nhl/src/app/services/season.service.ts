import { Observable } from 'rxjs';
import { HttpsConstantsService } from './https-constants.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeamPosition } from '../dto/team/team-position';
import { Season } from '../dto/season/season';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  constructor(private http: HttpClient, private httpConstants: HttpsConstantsService) { }

  getSeasons(): Observable<Season[]> {
    return this.http.get<Season[]>(this.httpConstants.ENDPOINTS.GET_SEASONS);
  }

  getSeasonTeamsData(seasonId: string) : Observable<TeamPosition[]> {
    return this.http.get<TeamPosition[]>(this.httpConstants.ENDPOINTS.GET_SEASON_TEAMS_DATA(seasonId));
  }

}
