const baseStats = require('pokemon-base-stats');

class Pokemon {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.height = data.height;
    this.weight = data.weight;

    this.type = data.types[0].type.name;
    if (data.types.length === 2) {
      this.type2 = data.types[1].type.name;
    } else this.type2 = null;
    
    const nameToUpperCase = (this.name.split(' ')[0].charAt(0).toUpperCase() + this.name.split(' ')[0].slice(1)).split('-')[0]
    const formes = baseStats.getFormes({ name: nameToUpperCase });
    if (!this.name.split('').includes('mega'))
      this.formes = formes;
    // if (formes[0] === 'base') {
      // this.hp = baseStats.getById({ id: this.id })[0];
      // this.attack = baseStats.getById({ id: this.id })[1];
      // this.defense = baseStats.getById({ id: this.id })[2];
      // this.sp_atk = baseStats.getById({ id: this.id })[3];
      // this.sp_def = baseStats.getById({ id: this.id })[4];
      // this.speed = baseStats.getById({ id: this.id })[5];
    // } else {
    //   this.hp = baseStats.getById({ id: this.id, forme: formes[0] })[0];
    //   this.attack = baseStats.getById({ id: this.id, forme: formes[0] })[1];
    //   this.defense = baseStats.getById({ id: this.id, forme: formes[0] })[2];
    //   this.sp_atk = baseStats.getById({ id: this.id, forme: formes[0] })[3];
    //   this.sp_def = baseStats.getById({ id: this.id, forme: formes[0] })[4];
    //   this.speed = baseStats.getById({ id: this.id, forme: formes[0] })[5];
    // }
    this.hp = data.stats[5].base_stat;
    this.attack = data.stats[4].base_stat;
    this.defense = data.stats[3].base_stat;
    this.sp_atk = data.stats[2].base_stat;
    this.sp_def = data.stats[1].base_stat;
    this.speed = data.stats[0].base_stat;
    // console.log('this.props.pokemonSpecies :', this.props.pokemonSpecies);
  }
}

export default Pokemon;
