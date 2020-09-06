import Environment from './environment_class.js';
import { Player } from './player_class.js'; 
import Monster from './monster_class.js'; 
import { Item, Weapon, Armor } from './item_class.js';
import { AbilityScores } from './character_class.js';


export default class Game {
  constructor(players,items,monsters,environments) {
    this.players = players;
    this.items = items;
    this.monsters = monsters;
    this.environments = environments;
    this.gameClock = 0;       
  }

  addEnvironment(name,description,items,monsters,players,exits) {
    let newEnvironment = new Environment(name,description,items,monsters,players,exits)
    this.environments.push(newEnvironment);
  }  
  
  addPlayer(name,race,pclass,level,xp,hp,mp,status,hunger,inv,equip,str,dex,con,wis,int,chr,lck) {
    let abilityScores = new AbilityScores(str,dex,con,wis,int,chr,lck)
    let newPlayer = new Player(name,abilityScores,race,pclass,level,xp,hp,mp,status,hunger,inv,equip)
    return newPlayer;
  }
  
  addMonster(name,cr,hp,xp,inventory,equipment,mp,status,abilityScores) {
    let newMonster = new Monster(name,cr,hp,xp,inventory,equipment,mp,status,abilityScores)
    return newMonster;
  }
    
  addItem(name,Id,worth,Hp,level,status,flags,rarity) {
    let newItem = new Item(name,Id,worth,Hp,level,status,flags,rarity)
    return newItem;
  }

  addWeapon(atk,dam,name,Id,worth,Hp,level,status,flags,rarity) {
    let newWeapon = new Weapon(atk,dam,name,Id,worth,Hp,level,status,flags,rarity)
    return newWeapon;
  }

  addArmor(acBonus,type,name,Id,worth,Hp,level,status,flags,rarity) {
    let newArmor = new Armor(acBonus,type,name,Id,worth,Hp,level,status,flags,rarity)
    return newArmor;
  }

  roll(num,side,mod,adj){
    let total;
    if (!mod){
      total = 0;
    } else {
      total = mod;
    }
    let min;
    if (!adj){
      min = 1;
    } else {
      min = 1 + adj;
    }
    for (let i=0;i<num;i++){
      let roll = ((min-1) + Math.ceil(Math.random() * (side-min + 1)));
      total += roll;
      console.log(`d${side} rolled: ${roll}`);
    }
    console.log(`${num}d${side} rolled, with a modifier of ${mod}. Total is: ${total}`);
    return total;
  }
};