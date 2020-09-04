import { Player } from '../src/js/player_class.js';
import Game from '../src/js/game_class.js';


describe('Player', () => {
  let rpg; 
  beforeEach(() => {
    rpg = new Game([],[],[],[])
});

  test('test 1 should create a player object', () =>{
    const player1 = new Player([],[],[],[],[],[],[],[],[],[],[],[])
    expect(player1.name).toEqual([])
    expect(player1.abilityScores).toEqual([])
    expect(player1.race).toEqual([])
    expect(player1.pclass).toEqual([])
    expect(player1.level).toEqual([])
    expect(player1.xp).toEqual([])
    expect(player1.hp).toEqual([])
    expect(player1.mp).toEqual([])
    expect(player1.status).toEqual([])
    expect(player1.hunger).toEqual([])
    expect(player1.inv).toEqual([])
    expect(player1.equip).toEqual([])
  });

  test('test 2 should add an item to a players inv', () => {
    let player2 = rpg.addPlayer("jake","human","wizard","6","40","20","60","torched","30",[],[],10,10,10,10,10,10,10)
    let sword = rpg.addItem("Sword",1,1,10,1,[],[],"common");
    player2.addItemInv(sword);
    expect(player2.inv[0]).toEqual(sword);
  });

  test('test 3 should add an item to a players equip', () => {
    let player2 = rpg.addPlayer("jake","human","wizard","6","40","20","60","torched","30",[],[],10,10,10,10,10,10,10)
    let armor = rpg.addArmor(5,"heavy","Chest plate",1,1,10,1,[],[],"common");
    player2.addItemEquip(armor);
    expect(player2.equip[0]).toEqual(armor);
  });

  test('test 4 should check if a players ability score meets a target value or higher', () => {
    let player2 = rpg.addPlayer("jake","human","wizard","6","40","20","60","torched","30",[],[],10,10,10,10,10,10,10)
    expect(player2.abilityScoreCheck('str',15)).toEqual(false);
    expect(player2.abilityScoreCheck('wis',8)).toEqual(true);
  });

})