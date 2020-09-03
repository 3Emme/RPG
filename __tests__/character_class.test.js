import { AbilityScores } from '../src/js/character_class.js';

describe('AbilityScores', () => {
  
  test('test 1 should add ability score', () => {
  const ability1 = new AbilityScores (2,3,4,5,6,7,8)
  expect(ability1.str).toEqual(2)
  expect(ability1.dex).toEqual(3)
  expect(ability1.con).toEqual(4)
  expect(ability1.wis).toEqual(5)
  expect(ability1.int).toEqual(6)
  expect(ability1.chr).toEqual(7)
  expect(ability1.lck).toEqual(8)
  });
})