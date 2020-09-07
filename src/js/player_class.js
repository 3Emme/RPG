import { AbilityScores, Status, Equip } from './character_class.js';


export class Player {
  constructor(name,abilityScores,race,pclass,level,xp,hp,mp,status,hunger,inv,equip) {
    this.name = name
    this.abilityScores = abilityScores
    this.race = race
    this.pclass = pclass
    this.level = level
    this.xp = xp
    this.hp = hp
    this.mp = mp
    this.status = new Status()
    this.hunger = hunger
    this.inv = inv
    this.equip = new Equip()
    this.baseAc = 10+ abilityScores.scoreMod('dex')
  }

  addItemInv(item) {
    this.inv.push (item);
  }

  addItemEquip(item) {
    let slot = item.slot;
    this.equip[slot].push(item);
  }

  abilityScoreCheck(score,target) {
    let abilityScores = this.abilityScores
    let checked = abilityScores[score]
    if (checked >= target){
      return true;
    } else {
      return false;
    }
  }

  equipCheck(){
    let totalAcBonus = 0;
    for (let eqpiece of this.equip){
      totalAcBonus += eqpiece.acBonus;
      console.log(`${eqpiece.name} has an ac bonus of ${eqpiece.acBonus}, increasing total ac bonus to ${totalAcBonus}`)
    }
    this.baseAc += totalAcBonus;
    console.log(`all equip has been checked, and after adding total ac is now ${this.baseAc}`)
  }
};