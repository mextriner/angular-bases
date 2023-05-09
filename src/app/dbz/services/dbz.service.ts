import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';
@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }
  public characters : Character[] = [{
    id : uuid(),
    name: 'Krillin',
    power: 4500
  },{
    id : uuid(),
    name:'Goku',
    power:9500
  }
  ,{
    id : uuid(),
    name:'Vegeta',
    power:7500
  }];

  onNewCharacter(character:Character):void{

    const newCharacter: Character = {
      id:uuid(),
      ...character
    }

    this.characters.push(character);
  }

  /* onDeleteCharacter(index : number): void{
    this.characters.splice(index,1);
  } */
  onDeleteCharacterById(id : string): void{
    this.characters = this.characters.filter(character => character.id !== id);

  }
}
