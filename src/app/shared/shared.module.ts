import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FoodListComponent } from './food-list/food-list.component';
import { InputComponent } from './input/input.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { OutputComponent } from './output/output.component';



@NgModule({
  declarations: [
    NewComponentComponent,
    InputComponent,
    OutputComponent,
    FoodListComponent
  ],
  exports: [NewComponentComponent, InputComponent, OutputComponent, FoodListComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
