import { ICombatable } from "../../Interfaces"
import type { Constructor } from '../types';

export default function Combatable<TBase extends Constructor>(Base: TBase) {
    return class Combatable extends Base implements ICombatable {
        private _hp: number = 0
        private _mp: number = 0
        private _physicalAttack: number = 0
        private _physicalDefense: number = 0
        private _magicAttack: number = 0
        private _magicDefense: number = 0
                
        get hp(): number { return this._hp }
        set hp(val: number) {
            this._hp = val < 0 ? 0 : val
        }

        get mp(): number { return this._mp }
        set mp(val: number) {
            this._mp = val < 0 ? 0 : val
        }

        get physicalAttack(): number { return this._physicalAttack }
        set physicalAttack(val: number) {
            this._physicalAttack = val < 0 ? 0 : val
        }

        get physicalDefense(): number { return this._physicalDefense }
        set physicalDefense(val: number) {
            this._physicalDefense = val < 0 ? 0 : val
        }

        get magicAttack(): number { return this._magicAttack }
        set magicAttack(val: number) {
            this._magicAttack = val < 0 ? 0 : val
        }

        get magicDefense(): number { return this._magicDefense }
        set magicDefense(val: number) {
            this._magicDefense = val < 0 ? 0 : val
        }
    }
}