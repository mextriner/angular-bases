import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[]=['Spider-man','Ironman','Shehulk','Thor'];
  public deletedHero: string | undefined= '';

  removeLastHero(): void{
    this.deletedHero = this.heroNames.pop();
  }
}
