export default class Environment {
  constructor(name,description,items,monsters,players,exits) {
    this.name = name
    this.description = description
    this.items = items
    this.monsters = monsters
    this.players = players
    this.exits = exits
  }  
} 

//
//let envCastle = new Environment("Castle","A dusty castle, long abandoned and full of monsters and secrets.",[],[],[],[])
//   
// 