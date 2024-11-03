export interface TeamPosition {
    teamId: number;
    teamName: string;
    shortName: string;
    owner: string;
    points: number;
    playedGames: number;
    position: number;
    wins: number;
    losses: number;
    winsOt: number;
    lossesOt: number;
    goalsScored: number;
    goalsAgainst: number;
    pointsBeforeRound: number;
}