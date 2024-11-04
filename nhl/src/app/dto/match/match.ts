export interface Match {
    id?: number;
    homeTeamId?: number;
    awayTeamId?: number;
    homeTeamScore?: number;
    awayTeamScore?: number;
    overtime?: boolean;
    simulated?: boolean;
    homeTeamName?: string;
    awayTeamName?: string;
    homeTeamShortName?: string;
    awayTeamShortName?: string;
    seasonId: number;
  }