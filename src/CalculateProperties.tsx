import { InputData, AttackData } from './Models/InputData';
import { ResultData } from './Models/ResultData';

const getHealth = (item: number): number => {
    return item > 100 ? 100 : item === undefined ? 0 : item;
}

const getStrength = (item: Array<AttackData>): number => {
    return item?.length === undefined ? 0 : item.length * 50;
}

const getWeakness = (item: string | undefined): number => {
    return item?.length === undefined ? 0 : item.length * 100;
}

const getDamage = (items: Array<AttackData>): number => {
    let sum = 0;
    if (items === undefined) {
        return sum;
    }
    
    for (let i = 0; i < items.length; i++) {
        sum += parseInt(items[i].damage);
    }
    
    return isNaN(sum) ? 0 : sum;
}
  
const getHappinessRating = (health: number, damage: number, weakness: number): number | string => {
    const result = ((health / 10) + (damage /10 ) + 10 - 1) / 5;
    return isNaN(result) ? "None" : result > 5 ? 5 : result;
}

export default (data: InputData): ResultData => {
    const health = getHealth(data.hp);
    const weakness = getWeakness(data.weaknesses);
    const damage = getDamage(data.attacks);
    const strength = getStrength(data.attacks);
    const hapiness = getHappinessRating(health, damage, weakness);

    return { health, damage, strength, weakness, hapiness };
}