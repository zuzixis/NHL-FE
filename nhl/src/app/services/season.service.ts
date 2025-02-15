import { Observable } from 'rxjs';
import { HttpsConstantsService } from './https-constants.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeamPosition } from '../dto/team/team-position';
import { Season } from '../dto/season/season';
import { Team } from '../dto/team/team';
import { Match } from '../dto/match/match';
import { TeamInfo } from '../dto/team/team-info';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {


  constructor(private http: HttpClient, private httpConstants: HttpsConstantsService) { }

  getSeasons(): Observable<Season[]> {
    return this.http.get<Season[]>(this.httpConstants.ENDPOINTS.GET_SEASONS);
  }

  getConference(seasonId: string, conferenceId: string): Observable<TeamPosition[]> {
    return this.http.get<TeamPosition[]>(this.httpConstants.ENDPOINTS.GET_CONFERENCE_TEAMS_DATA(seasonId, conferenceId));
  }

  getSeasonTeamsData(seasonId: string): Observable<TeamPosition[]> {
    return this.http.get<TeamPosition[]>(this.httpConstants.ENDPOINTS.GET_SEASON_TEAMS_DATA(seasonId));
  }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.httpConstants.ENDPOINTS.GET_TEAMS);
  }

  createMatch(match: Match): Observable<Match> {
    return this.http.post<Match>(this.httpConstants.ENDPOINTS.CREATE_SEASON_MATCHES, match);
  }

  getSeasonMatches(seasonId: string): Observable<Match[]> {
    return this.http.get<Match[]>(this.httpConstants.ENDPOINTS.GET_SEASON_MATCHES(seasonId));
  }

  getTeamMatches(seasonId: string,  teamId: number): Observable<Match[]> {
    return this.http.get<Match[]>(this.httpConstants.ENDPOINTS.GET_TEAM_MATCHES(seasonId, teamId));
  }

  getTwoTeamMatches(seasonId: string,  teamId1: number, teamId2: number) {
    return this.http.get<Match[]>(this.httpConstants.ENDPOINTS.GET_TWO_TEAMS_MATCHES(seasonId, teamId1, teamId2));
  }

  getTeamInfo(seasonId: string,  teamId: number): Observable<TeamInfo> {
    return this.http.get<TeamInfo>(this.httpConstants.ENDPOINTS.GET_TEAM_INFO(seasonId, teamId));
  }

  getTeamCompareInfo(seasonId: string,  teamId1: number, teamId2: number): Observable<TeamInfo[]> {
    return this.http.get<TeamInfo[]>(this.httpConstants.ENDPOINTS.GET_TEAM_COMPARE_INFO(seasonId, teamId1, teamId2));
  }

  
}
