import { Component } from '@angular/core';
import { CategoryRequest } from '../../models/category-request';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { CategoryRequestService } from '../../service/category-request.service';

@Component({
  selector: 'app-category-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.scss'
})
export class CategoryAddComponent {
  public category: CategoryRequest = new CategoryRequest();

  constructor(private categoriesService: CategoryRequestService){
    this.category.name = 'Category Name';
  }

  addCategory(){
    console.log(' post category => ', this.category);
    firstValueFrom(this.categoriesService.addCategory(this.category)).then(
      (res) => {
        console.log('response =>',res)
      },
    );
  
  }


}
