import Monster from '../src/js/monster_class.js';

describe('Monster', () => {

  test('should create an item object', () =>{
    const monster = new Monster("test",1,1,1,[],[],1,[],"stats")
    expect(monster.name).toEqual("test")
    expect(monster.cr).toEqual(1)
    expect(monster.hp).toEqual(1)
    expect(monster.xp).toEqual(1)
    expect(monster.inv).toEqual([])
    expect(monster.equip).toEqual([])
    expect(monster.mp).toEqual(1)
    expect(monster.status).toEqual([]) 
    expect(monster.abilityScores).toEqual("stats")     
  });
})