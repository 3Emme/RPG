export default class Game {
  constructor(players,items,monsters,environments) {
    this.players = players
    this.items = items
    this.monsters = monsters
    this.environments = environments
    this.gameClock = 0       
  }
};

let RPG = new Game([],[],[],[])

//booya