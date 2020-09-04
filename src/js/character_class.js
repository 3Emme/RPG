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
    let mod = (this[score]-10)/2
    if (mod < 0) {
      return Math.floor(mod)
    } else {
      return parseInt(mod)
    }
  }  
}