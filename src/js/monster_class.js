export default class Monster {
  constructor(name,cr,hp,xp,inventory,equipment,mp,status,stats) {
    this.name = name,
    this.cr = cr,
    this.hp = hp,
    this.xp = xp,
    this.inv = inventory,
    this.equip = equipment,
    this.mp = mp,
    this.status = status    
    this.stats = stats    
  } 
}

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