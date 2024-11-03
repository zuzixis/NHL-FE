export interface Season {
    id: number;                       
    name: string;                    
    gameType: string;                 
    yearPlayed: string;               
    yearOrigin: string;               
    countOfMatches: number;          
    countOfPlayedMatches: number | null;
}