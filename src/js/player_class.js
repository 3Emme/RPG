import { AbilityScores } from './character_class.js';


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
    this.status = status
    this.hunger = hunger
    this.inv = inv
    this.equip = equip
    this.baseAc = 10+ abilityScores.scoreMod('dex')
  }

  addItemInv(item) {
    this.inv.push (item);
  }

  addItemEquip(item) {
    this.equip.push(item);
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
};