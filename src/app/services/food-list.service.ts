import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {
  public emitEvent = new EventEmitter();

  private url: string = "http://localhost:3000/";

  constructor(private httpclient: HttpClient) { }

  public getFoodList(): Observable<Array<Food>> {
    return this.httpclient.get<Array<Food>>(`${this.url}list-food`).pipe(
      res => res,
      error => error
    )
  }

  public postFood(value: string): Observable<Food> {
    return this.httpclient.post<Food>(`${this.url}list-food`, {nome: value}).pipe(
      res => res,
      error => error
    )
  }

  public putFood(value: string, id: number): Observable<Food>{
    return this.httpclient.put<Food>(`${this.url}list-food/${id}`, {nome : value}).pipe(
      res => res,
      error => error
    )
  }

  public deleteFood(id: number): Observable<Food>{
    return this.httpclient.delete<Food>(`${this.url}list-food/${id}`).pipe(
      res => res,
      error => error
    )
  }

  public foodListAlert(value: Food) {
    return this.emitEvent.emit(value);
  }
}


