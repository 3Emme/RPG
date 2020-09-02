import Player from '../src/js/player_class.js';

describe('Player', () => {

  test('should create a player object', () =>{
    const player1 = new Player([],[],[],[],[],[],[],[],[],[],[],[])
    expect(player1.name).toEqual([])
    expect(player1.stats).toEqual([])
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
})