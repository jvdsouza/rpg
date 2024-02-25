import { Character, CombatableCharacter } from './index';

describe("Character", () => {
    it("can set and get a description", () => {
        const character = new Character();
        const expected = "this is a new character"
        character.description = expected;
        const actual = character.description
        expect(actual).toBe(expected)
    })
})

describe('Mixin functions', () => {
    it("responds to the Combatable mixin functions", () => {
        const myCharacter = new CombatableCharacter()
        expect(myCharacter).toHaveProperty("hp")
        expect(myCharacter).toHaveProperty("mp")
        expect(myCharacter).toHaveProperty("physicalAttack")
        expect(myCharacter).toHaveProperty("magicAttack")
        expect(myCharacter).toHaveProperty("physicalDefense")
        expect(myCharacter).toHaveProperty("magicDefense")
    });
}) 