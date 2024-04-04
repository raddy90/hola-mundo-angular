import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      id: 'asd',
      name: 'Trunks',
      power: 10,
    },
  ];


 // onDeleteId = Index value:number
 @Output()
 public onDeleteId: EventEmitter<string> = new EventEmitter();

  // onDeleteCharacter(index: number): void {
  //   //TODO: Emitir el ID del personaje
  //   console.log(index);
  //   this.onDeleteId.emit(index);
  // }

  deleteCharacterById(id: string): void {
    //TODO: Emitir el ID del personaje
    console.log(id);
    this.onDeleteId.emit(id);
  }
}
