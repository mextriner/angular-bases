import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList : Character[]=[]
  // MI SOLUCIÓN
  /* onDeleteCharacter(nombre: string, poder:number): void{
    let char: Character = {name:nombre, power:poder};
    for(let i = 0; i < this.characterList.length; i++){
      if(JSON.stringify(char) === JSON.stringify(this.characterList[i])){
        this.characterList.splice(i,1);
        return;
      }
    }
  } */

  @Output()
  public onDeleteId: EventEmitter<string>=new EventEmitter();



  //LA SOLUCIÓN CON INDEX
  /* onDeleteCharacter(index : number){
    this.onDeleteId.emit(index)
  } */
  //LA SOLUCIÓN CON ID
  onDeleteCharacter(id : string){
    this.onDeleteId.emit(id)
  }


}
