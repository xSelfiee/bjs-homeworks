console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];
function getNames() {
    return weapons.map(weapons => weapons.name);
}
function getCountReliableWeapons(durability) {
    return weapons.filter(weapons => weapons.durability > durability).length;
}
function hasReliableWeapons(durability) {
    return weapons.some(weapons => weapons.durability > durability);    
}
function getReliableWeaponsNames(durability) {
    return weapons.filter(weapons => weapons.durability > durability).map(weapons => weapons.name);
}
function getTotalDamage() {
    return weapons.reduce((sum, weapons) => sum + weapons.attack, 0);
}
