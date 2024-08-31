import { Component } from '@angular/core';
import { CategoryRequest } from '../../models/category-request';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.scss'
})
export class CategoryAddComponent {
  public category: CategoryRequest = new CategoryRequest();

  constructor(){
    this.category.name = 'Category Name';
  }


}
