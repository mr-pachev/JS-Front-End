class Vehicle {
  constructor(type, model, parts, fuel) {
    this.type = type;
    this.model = model;
    this.parts = {
      engine: this.parts.engine,
      power: this.parts.power,
      quanlity: this.parts.engine * this.parts.power,
    };
    this.fuel = Number(fuel);
  }

  drive() {
    
  }
}
