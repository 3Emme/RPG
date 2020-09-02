export default class Player {
  constructor(name,stats,race,pclass,level,xp,hp,mp,status,hunger,inv,equip) {
    this.name = name
    this.stats = stats
    this.race = race
    this.pclass = pclass
    this.level = level
    this.xp = xp
    this.hp = hp
    this.mp = mp
    this.status = status
    this.hunger = hunger
    this.inv = inv
    this.equip = equip
  }
};

//let player1Stats = new Stats(1,1,1,1,1,1,1,1)
// let player1 = new Player(name,player1Stats,race,pclass,level,xp,hp,mp,status,hunger,inv,equip)

// class Stats {
//   constructor(str,dex,con,wis,int,chr,lck) {
//     this.str = str
//     this.dex = dex
//     this.con = con
//     this.wis = wis
//     this.int = int
//     this.chr = chr
//     this.lck = lck 
//   }
// }