import Environment from './environment_class.js';
import Player from './player_class.js'; 
import Monster from './monster_class.js'; 
import { Item, Weapon } from './item_class.js';


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
  

  addPlayer(name,stats,race,pclass,level,xp,hp,mp,status,hunger,inv,equip) {
    let newPlayer = new Player(name,stats,race,pclass,level,xp,hp,mp,status,hunger,inv,equip)
    return newPlayer;
  }
  

  addMonster(name,cr,hp,xp,inventory,equipment,mp,status,stats) {
    let newMonster = new Monster(name,cr,hp,xp,inventory,equipment,mp,status,stats)
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




  // addPlayers(){}

  // initialize(){}
};





//let RPG = new Game([],[],[],[])

//booyagit 