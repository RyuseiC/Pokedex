const baseStats = require('pokemon-base-stats');

class Pokemon {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.type = data.types[0].type.name;
    if (data.types.length === 2) {
      this.type2 = data.types[1].type.name;
    } else this.type2 = null;
    if (baseStats.getFormes({ id: this.id })[0] === 'base') {
      this.hp = baseStats.getById({ id: this.id })[0];
      this.attack = baseStats.getById({ id: this.id })[1];
      this.defense = baseStats.getById({ id: this.id })[2];
      this.sp_atk = baseStats.getById({ id: this.id })[3];
      this.sp_def = baseStats.getById({ id: this.id })[4];
      this.speed = baseStats.getById({ id: this.id })[5];
    } 
    // else {
    //   console.log('Giratina Altered form HP :', baseStats.getById({ id: this.id, forme: this.name.split('-')[1] })[0]);
    // }
  }
}

export default Pokemon;
