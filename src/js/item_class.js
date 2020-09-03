export default class Item {
  constructor(name,Id,worth,Hp,level,status,flags,rarity) {
    this.name = name
    this.Id = Id
    this.worth = worth
    this.Hp = Hp
    this.level = level
    this.status = status
    this.flags = flags
    this.rarity = rarity 
  }
}



// class Weapon extends Item {
//   constructor(atk,dam,name,Id,worth,Hp,level,status,flags,rarity) {
//     super(name,Id,worth,Hp,level,status,flags,rarity)
//     this.atk = atk
//     this.dam = dam
//   }
// }