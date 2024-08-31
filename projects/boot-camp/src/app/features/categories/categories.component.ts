import { Component } from '@angular/core';
import { firstValueFrom, Subscriber, Subscription } from 'rxjs';
import { CategoriesService } from '../../service/categories.service';
import { CategoriesModel } from '../../models/categories.model.model';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterLink
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

  private _catergories?: Subscription;
  public categories: CategoriesModel[] =[];
  
  constructor (private categoriesService: CategoriesService) {}

  ngOnInit() {
    this._catergories = this.categoriesService.getCategories().subscribe({
      next: (catergories) => {
        this.categories = catergories;
        console.log(this.categories);
      },
      error:(error) => {
        console.error('error', error);
      }
    })
  }

  ngOnDestroy(){
      this._catergories?.unsubscribe();
  }
  

  getCategory(){
    this._catergories = this.categoriesService.getCategories().subscribe({
      next: (catergories) => {
        this.categories = catergories;
        console.log(this.categories);
      },
      error:(error) => {
        console.error('error', error);
      }
    })
  }

  deleteCategory(catergoryId? : string){
    if(catergoryId){
      firstValueFrom(this.categoriesService.DeleteCategories(catergoryId)).then(
        (res)=>{

          this.getCategory();
          console.log('res => ', res);
        }
      )
    }

  }
}
