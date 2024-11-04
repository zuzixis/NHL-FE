import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpsConstantsService {

  readonly BASE_URL = 'https://nhl-yo0e.onrender.com/api';

  readonly ENDPOINTS = {
    GET_SEASONS:                                                                  `${this.BASE_URL}/season/getAll`,     

    GET_SEASON_TEAMS_DATA: (seasonId: string) =>                                  `${this.BASE_URL}/teams/teams-data/${seasonId}`,

    GET_SEASON_MATCHES: (seasonId: string) =>                                     `${this.BASE_URL}/match/getMatchesForSeason/${seasonId}`,
    CREATE_SEASON_MATCHES:                                                        `${this.BASE_URL}/match/create`,

    GET_TEAMS:                                                                    `${this.BASE_URL}/teams/getAll`, 
  };

  constructor() { }


}
