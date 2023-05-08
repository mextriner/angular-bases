import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string ='IronMan';
  public age: number=45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  cambiarNombre(value:string):void{
    this.name='Spider-man'
  }
  cambiarEdad(value:number):void{
    this.age=23
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  resetForm():void{
    this.name='IronMan';
    this.age=45;
  }

}
