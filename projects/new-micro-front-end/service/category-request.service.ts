import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryRequest } from '../models/category-request';

@Injectable({
  providedIn: 'root'
})
export class CategoryRequestService {

  constructor(private http: HttpClient) { }

  addCategories(category: CategoryRequest){
    return this.http.post(
      'https://dev.tks.co.th/codepulseapi/api/Categories',
      category)
  }
}
