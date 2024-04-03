import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h4>Hola Counter</h4>
  <p>Counter: {{ counter }}</p>

<button (click)="increaseBy(-1)">-1</button>
<button (click)="increaseBy(0)">Reset</button>
<button (click)="increaseBy(1)">+1</button>
  `
})

export class CounterComponent{
  public counter: number = 10;

  increaseBy( value: number = 1):void{
    if(value === 0){
      this.counter = 10;
    } else {
    this.counter += value;
    }
  }

  decreaseBy():void{
    this.counter -=1;
  }
}
