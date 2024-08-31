import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriesModel } from '../models/categories.model.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient ) { }

  getCategories(){
    return this.http.get<CategoriesModel[]>('https://dev.tks.co.th/codepulseapi/api/Categories')
  }


  DeleteCategories(Id : string){
    return this.http.delete('https://dev.tks.co.th/codepulseapi/api/Categories/'+Id);


  }
}
