import { Player } from '../src/js/player_class.js';
import Game from '../src/js/game_class.js';


describe('Player', () => {
  let rpg; 
  beforeEach(() => {
    rpg = new Game([],[],[],[])
});

  test('test 1 should create a player object', () =>{
    let player2 = rpg.addPlayer("jake","human","wizard","6","40","20","60","torched","30",[],[],10,10,10,10,10,10,10)
    expect(player2.name).toEqual("jake")
  });

  test('test 2 should add an item to a players inv', () => {
    let player2 = rpg.addPlayer("jake","human","wizard","6","40","20","60","torched","30",[],[],10,10,10,10,10,10,10)
    let sword = rpg.addItem("Sword",1,1,10,1,[],[],"common");
    player2.addItemInv(sword);
    expect(player2.inv[0]).toEqual(sword);
  });

  test('test 3 should add an item to a players equip', () => {
    let player2 = rpg.addPlayer("jake","human","wizard","6","40","20","60","torched","30",[],[],10,10,10,10,10,10,10)
    let armor = rpg.addArmor("body",5,"heavy","Chest plate",1,1,10,1,[],[],"common");
    player2.addItemEquip(armor);
    expect(player2.equip.body).toContain(armor);
  });

  test('test 4 should check if a players ability score meets a target value or higher', () => {
    let player2 = rpg.addPlayer("jake","human","wizard","6","40","20","60","torched","30",[],[],10,10,10,10,10,10,10)
    expect(player2.abilityScoreCheck('str',15)).toEqual(false);
    expect(player2.abilityScoreCheck('wis',8)).toEqual(true);
  });

  test('test 5 should create a player object with a status property that is held by a new status object', () => {
    let player2 = rpg.addPlayer("jake","human","wizard","6","40","20","60","torched","30",[],[],10,10,10,10,10,10,10)
    expect(player2.status.hidden).toEqual(false);
  });

})