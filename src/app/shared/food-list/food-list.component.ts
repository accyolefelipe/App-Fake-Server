import { Food } from './../../models/food.model';
import { FoodListService } from './../../services/food-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public list: Array<Food> = [];

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.getFoodList();
    this.getEvent();
  }

  public getEvent() {
    this.foodListService.emitEvent.subscribe(
      res => {
        alert(`Olha voce add => ${res.nome}`)
        return this.list.push(res);
      }
    )
  }

  public getFoodList() {
    this.foodListService.getFoodList().subscribe(
      res => this.list = res,
      error => error
    );
  }

  public deleteFood(id: number) {
    return this.foodListService.deleteFood(id).subscribe(
      res => {
        this.list = this.list.filter(
          item => {
            return id !== item.id
          }
        )
      },
      error => error
    )
  }

  public updateFood(id: number, value: string) {
    this.foodListService.putFood(value, id).subscribe(
      res => {
        return console.log(res)
      },
      error => error
    )
  }

}
