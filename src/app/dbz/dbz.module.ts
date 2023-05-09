import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { ListComponent } from './components/list/list.component';
import { DbzComponent } from './pages/main-page.component';

@NgModule({
  declarations: [DbzComponent, ListComponent, AddCharacterComponent],
  imports: [CommonModule, FormsModule],
  exports: [DbzComponent],
})
export class DbzModule {}
