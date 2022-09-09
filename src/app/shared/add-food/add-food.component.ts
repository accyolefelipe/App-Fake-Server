import { FoodListService } from './../../services/food-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss']
})
export class AddFoodComponent implements OnInit {

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
  }

  public addNewItem(value : string){
    return this.foodListService.postFood(value).subscribe(
      res => this.foodListService.foodListAlert(res),
      error => error
    );
  }

}
