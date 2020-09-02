import Game from '../src/js/game_class.js';

describe('Game', () => {
    let rpg;
  // let player1;
  // let sword;
  // let monsterJake;
  // let envCastle;

  beforeEach(() => {
    rpg = new Game([],[],[],[])
    // player1 = new Player("jake","lazy","human","wizard","6","40","20","60","torched","30",[],[])
    // player1 = rpg.addPlayer("jake","lazy","human","wizard","6","40","20","60","torched","30",[],[]);
    // sword = new Item("Sword",1,1,10,1,[],[],"common")
    // monsterJake = new Monster("Monster Jake",1,8,500,[sword],[],100,[],"stats")
    // envCastle = new Environment("Castle","A dusty castle, long abandoned and full of monsters and secrets.",[],[],[],[])

  });

  test('should create a game object', () =>{    
    expect(rpg.players).toEqual([])
    expect(rpg.items).toEqual([])
    expect(rpg.monsters).toEqual([])
    expect(rpg.environments).toEqual([])
  });

  test('should add a new environment', () =>{    
    rpg.addEnvironment(1,1,1,1,1,1,)
    expect(rpg.environments[0].name).toEqual(1)
  });

  test('should create a new player', () =>{
    let player1 = rpg.addPlayer("jake","lazy","human","wizard","6","40","20","60","torched","30",[],[]);
    expect(player1.name).toEqual("jake")
  });

});

