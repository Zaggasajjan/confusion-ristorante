import { Component, OnInit } from '@angular/core';
import { DishDetailsComponent } from '../dish-details/dish-details.component';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { DishService } from '../services/dish.service';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
   dishes: Dish[];
   selectedDish: Dish;

  constructor(private dishService: DishService) { }

  ngOnInit(): void {

    this.dishService.getDishes()
    .then((dishes) => this.dishes = dishes);
      
}
onSelect(dish:Dish) {
  this.selectedDish = dish;
}
 
}