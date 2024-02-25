import Combatable from '../Mixins/Combatable/Combatable';

export class Character {
    private _description: string = "";

    get description(): string { return this._description }
    set description(description: string) {
        this._description = description
    }
}

export const CombatableCharacter = Combatable(Character)
