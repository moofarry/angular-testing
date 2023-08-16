import { NgModule } from '@angular/core';
import { CharizardComponent } from './charizard/charizard.component';
import { CounterComponent } from './counter/counter.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [CharizardComponent, CounterComponent],
  providers: [],
})
export class BasicModule {}
