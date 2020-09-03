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

  test('Test 1 should create a game object', () =>{    
    expect(rpg.players).toEqual([])
    expect(rpg.items).toEqual([])
    expect(rpg.monsters).toEqual([])
    expect(rpg.environments).toEqual([])
  });

  test('Test 2 should add a new environment', () =>{    
    rpg.addEnvironment(1,1,1,1,1,1,)
    expect(rpg.environments[0].name).toEqual(1)
  });

  test('Test 3 should create a new player', () =>{
    let player1 = rpg.addPlayer("jake","lazy","human","wizard","6","40","20","60","torched","30",[],[]);
    expect(player1.name).toEqual("jake")
  });

  test('Test 4 should add a player to an environment', () => {
    let player1 = rpg.addPlayer("jake","lazy","human","wizard","6","40","20","60","torched","30",[],[]);
    rpg.addEnvironment("Castle","A dusty castle, long abandoned and full of monsters and secrets.",[],[],[player1],[]);
    expect(rpg.environments[0].players[0]).toEqual(player1);
  });

  test('Test 5 should add a monster to an environment', () => {
    let monster1 = rpg.addMonster("Monster Jake",1,8,500,[],[],100,[],"stats");
    rpg.addEnvironment("Castle","A dusty castle, long abandoned and full of monsters and secrets.",[],[monster1],[],[]);
    expect(rpg.environments[0].monsters[0]).toEqual(monster1);
  });

  test('Test 6 should add an item to a player', () => {
    let item1 = rpg.addItem("Taco",1,200,70,5,[],[],"rare");
    let player1 = rpg.addPlayer("jake","lazy","human","wizard","6","40","20","60","torched","30",[item1],[]);    
    expect(player1.inv[0]).toEqual(item1);
  });  

  test('Test 7 should add an item to an environment', () => {
    let sword = rpg.addItem("Sword",1,1,10,1,[],[],"common");
    rpg.addEnvironment("Castle","A dusty castle, long abandoned and full of monsters and secrets.",[sword],[],[],[]);
    expect(rpg.environments[0].items[0]).toEqual(sword);
  });

  test('test 8 should create a weapon subclass', () => {
    let sword = rpg.addWeapon(5,5,"Sword",1,1,10,1,[],[],"common");
    expect(sword.atk).toEqual(5);
    expect(sword.dam).toEqual(5);
    expect(sword.name).toEqual("Sword");
  });
  
});

