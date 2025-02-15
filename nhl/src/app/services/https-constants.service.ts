import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpsConstantsService {

  readonly BASE_URL = 'https://nhl-yo0e.onrender.com/api';

  readonly ENDPOINTS = {
    GET_SEASONS:                                                                     `${this.BASE_URL}/season/getAll`,     
    
    GET_SEASON_TEAMS_DATA: (seasonId: string) =>                                     `${this.BASE_URL}/teams/teams-data/${seasonId}`,

    GET_CONFERENCE_TEAMS_DATA: (seasonId: string, conferenceId: string) =>           `${this.BASE_URL}/teams/teams-data/${seasonId}/${conferenceId}`,

    GET_SEASON_MATCHES: (seasonId: string) =>                                        `${this.BASE_URL}/match/getMatchesForSeason/${seasonId}`,
    CREATE_SEASON_MATCHES:                                                           `${this.BASE_URL}/match/create`,

    GET_TEAMS:                                                                       `${this.BASE_URL}/teams/getAll`, 
    GET_TEAM_MATCHES:  (seasonId: string, teamId: number) =>                         `${this.BASE_URL}/match/getMatchesForSeasonAndTeam/${seasonId}/${teamId}`, 
    GET_TWO_TEAMS_MATCHES:  (seasonId: string, teamId1: number, teamId2: number) =>  `${this.BASE_URL}/match/getMatchesForSeasonAndTwoTeams/${seasonId}/${teamId1}/${teamId2}`, 
    GET_TEAM_INFO:  (seasonId: string, teamId: number) =>                            `${this.BASE_URL}/match/getMatchesForSeason/${seasonId}/${teamId}`, 
    GET_TEAM_COMPARE_INFO:  (seasonId: string, teamId1: number, teamId2: number) =>  `${this.BASE_URL}/teams/getTeamInfo/${seasonId}/${teamId1}/${teamId2}`, 
  };

  constructor() { }


}
