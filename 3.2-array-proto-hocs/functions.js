console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];
function getNames() {
    let weaponsName = [];
    for (weapon in weapons)
    weaponsName.push(weapons[weapon].name);
    return weaponsName;
}
function getCountReliableWeapons(durability) {
    let count = 0;
    for (weapon in weapons)
    if (weapons[weapon].durability > durability)
    count++;
    return count;
}
function hasReliableWeapons(durability) {
    for (weapon in weapons) {
        if (weapons[weapon].durability > durability)
        return true;
    }
    return false;
}
function getReliableWeaponsNames(durability) {
    let weaponsName = [];
    for (weapon in weapons) {
        if (weapons[weapon].durability > durability)
        weaponsName.push(weapons[weapon].name);
    }
    return weaponsName;
}
function getTotalDamage() {
    let sumWeaponsDmg = 0;
    for (weapon in weapons)
    sumWeaponsDmg += weapons[weapon].attack;
    return sumWeaponsDmg;
}
//console.log(weapons);