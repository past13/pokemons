export interface AttackData {
    damage: string;
}

export interface InputData {
    id: string;
    imageUrl: string;
    hp: number;
    name: string;
    strength: string;
    attacks: Array<AttackData>;
    weaknesses: string;
    damage: number;
    happiness: number;
}