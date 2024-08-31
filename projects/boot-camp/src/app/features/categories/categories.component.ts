import { Component } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { CategoriesService } from '../../service/categories.service';
import { CategoriesModel } from '../../models/categories.model.model';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
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

}
