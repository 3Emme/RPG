import Game from '../src/js/game_class.js';

describe('Game', () => {

  test('should create a game object', () =>{
    const RPG = new Game([],[],[],[])
    expect(RPG.players).toEqual([])
    expect(RPG.items).toEqual([])
    expect(RPG.monsters).toEqual([])
    expect(RPG.environments).toEqual([])
  });
})

//booya