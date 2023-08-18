import { NgModule } from '@angular/core';
import { CharizardComponent } from './charizard/charizard.component';
import { CounterComponent } from './counter/counter.component';
import { CommonModule } from '@angular/common';
import { FatherComponent } from './father/father.component';
import { FatherSonComponent } from './father-son/father-son.component';

@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [
    CharizardComponent,
    CounterComponent,
    FatherComponent,
    FatherSonComponent,
  ],
  providers: [],
})
export class BasicModule {}
