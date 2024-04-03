import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Mi primera app de Angular';
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
