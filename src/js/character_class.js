export class AbilityScores {
  constructor(str,dex,con,wis,int,chr,lck) {
    this.str = str
    this.dex = dex
    this.con = con
    this.wis = wis
    this.int = int
    this.chr = chr
    this.lck = lck 
  }

  scoreMod (score) {
    return parseInt((this.score-10)/2);
  }  
}