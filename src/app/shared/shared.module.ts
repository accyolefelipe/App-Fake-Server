import { FoodListComponent } from './food-list/food-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AddFoodComponent } from './add-food/add-food.component'
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FoodListComponent,
    AddFoodComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    FoodListComponent,
    AddFoodComponent
  ]
})
export class SharedModule { }
