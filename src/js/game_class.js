import Environment from './environment_class.js'; 

export default class Game {
  constructor(players,items,monsters,environments) {
    this.players = players
    this.items = items
    this.monsters = monsters
    this.environments = environments
    this.gameClock = 0       
  }

  addEnvironment(name,description,items,monsters,players,exits) {
    let newEnvironment = new Environment(name,description,items,monsters,players,exits)
    this.environments.push(newEnvironment)
  }  


  // addItems(){}

  // addMonsters(){}

  // addPlayers(){}

  // initialize(){}
};





//let RPG = new Game([],[],[],[])

//booyagit 