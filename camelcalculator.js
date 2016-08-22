'use strict';

class Man {
  constructor(age, height, bodyType, eyeColor, hairColor, hairLength, beard) {
    this.age = age;
    this.height = height;
    this.bodyType = bodyType;
    this.eyeColor = eyeColor;
    this.hairColor = hairColor;
    this.hairLength = hairLength;
    this.beard = beard;
  }
}

class CamelCalculator{

  calcBodyType(bodyType){
    switch (bodyType) {
      case "muscular":
        return 25;
      case "normal":
        return 15;
      case "chubby":
        return 5;
      default:
        throw new Error("Body Type not recognized");
      }
  }

  calcHeight(height){

        if (height >= 181 && height <= 220)
            return 20;
        else if (height >= 168 && height < 181)
              return 15;
        else if (height >= 152 && height < 168)
             return 10;
        else if (height >= 140)
             return 5;
        else
            throw new Error("Height out of range");

  }
  calcAge(age){
        if (age >= 20 && age < 35)
             return 15;
        else if (age >= 14 && age < 20)
            return 10;
        else if (age >= 35 && age < 45)
            return 10;
        else if (age >= 45 && age <= 70)
            return 5;
        else
            throw new Error("Age out of range");
  }
  calcEyeColor(eyeColor){
      switch (eyeColor) {
        case "blue":
          return 12;
        case "green":
          return 10;
        case "grey":
          return 8;
        case "brown":
          return 6;
        default:
          throw new Error("Eye Color not recognized");
        }
  }
  calcHairColor(hairColor){
        switch (hairColor) {
          case "blonde":
            return 12;
          case "red":
            return 11;
          case "brown":
            return 10;
          case "black":
            return 9;
          case "grey":
            return 7;
          default:
            throw new Error("Hair Color not recognized");
          }
  }
  calcHairLength(hairLength){
        switch (hairLength) {
          case "long":
            return 8;
          case "short":
            return 7;
          case "medium":
            return 5;
          case "bald":
            return 2;
          default:
            throw new Error("Hair Length not recognized");
          }
  }
  calcBeard(beard){
          switch (beard) {
            case "small":
              return 8;
            case "none":
              return 7;
            case "medium":
              return 6;
            case "big":
              return 5;
            default:
              throw new Error("Beard type not recognized");
            }
  }

  calculate(person) {
    return this.calcBodyType(person.bodyType) + this.calcHeight(person.height)
      + this.calcAge(person.age) + this.calcEyeColor(person.eyeColor)
      + this.calcHairColor(person.hairColor) + this.calcHairLength(person.hairLength)
      + this.calcBeard(person.beard);
  }
}

var me = new Man(34, 155, "muscular", "brown", "black", "medium", "none");
var perfect = new Man(25, 170, "muscular", "blue", "blonde", "long", "small");
var worst = new Man(68, 145, "chubby", "brown", "grey", "bald", "big");
var avg1 = new Man(35, 155, "normal", "green", "brown", "short", "medium");
var avg2 = new Man(35, 165, "normal", "grey", "brown", "medium", "none");

var camelCalculator = new CamelCalculator();

console.log(camelCalculator.calculate(me));
console.log(camelCalculator.calculate(perfect));
console.log(camelCalculator.calculate(worst));
console.log(camelCalculator.calculate(avg1));
console.log(camelCalculator.calculate(avg2));
