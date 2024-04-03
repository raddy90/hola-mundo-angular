import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {


  public name: string = 'Ironman';
  public age: number = 33;

  get capitalizedName(): string {
    return this.name.toUpperCase()
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
    //TODO
   // throw 'Método no implementado'
  }

  changeAge(): void {
    this.age = 35;
  }

  resetForm(): void {
    this.name = 'Ironman';
    this.age = 33;
  }

}
