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
    
    this.species = data.species;
    this.abilities = data.abilities;
    this.hp = data.stats[5].base_stat;
    this.attack = data.stats[4].base_stat;
    this.defense = data.stats[3].base_stat;
    this.sp_atk = data.stats[2].base_stat;
    this.sp_def = data.stats[1].base_stat;
    this.speed = data.stats[0].base_stat;
  }
}

export default Pokemon;
