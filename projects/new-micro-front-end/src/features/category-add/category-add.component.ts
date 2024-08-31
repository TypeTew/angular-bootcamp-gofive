import { Component,input, Input ,InputSignal ,output } from '@angular/core';
import { CategoryRequest } from '../../models/category-request';
import { FormsModule } from '@angular/forms';
import {firstValueFrom, Subscription} from "rxjs";
import { CategoryRequestService } from '../../service/category-request.service';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-category-add',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.scss'
})
export class CategoryAddComponent {
  private _categories?: Subscription;

  public category: CategoryRequest = new CategoryRequest();
  //private router: Router;

  name = input<string>("Default");

  // name = input<string>('Name default');
  // description = input<string>('Name default');
  // nameChange = output<string>();

  constructor(private categoriesService: CategoryRequestService){
    this.category.name = 'Category Name';
  }

  onFormSubmit() {}


  addCategory(){

    console.log('post category => ', this.category);
    firstValueFrom(this.categoriesService.addCategory(this.category)).then(
      (res) => {
        //this.router.navigateByUrl('add');
        console.log('response add =>',res)
      },
    );
  
  }


}
