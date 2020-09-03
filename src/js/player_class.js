import { AbilityScores } from './character_class.js';


export default class Player {
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
  }
};