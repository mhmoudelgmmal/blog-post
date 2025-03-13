import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../interfaces/article';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor() { }
  private http = inject(HttpClient)

  getAllpostsData(data:object):Observable<Article[]>{
    let params = new HttpParams()
    Object.entries(data).forEach(([key,value])=>{
      params = params.set(key,value)
    })
    return this.http.get<Article[]>('https://dev.to/api/articles',{params:params})
  }
  getSingleArticle(id:string):Observable<Article>{
    return this.http.get<Article>(`https://dev.to/api/articles/${id}`)
  }
}
