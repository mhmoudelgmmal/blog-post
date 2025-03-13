import { Component, inject, OnInit } from '@angular/core';
import { SearchInputComponent } from "../../../shared/search-input/search-input.component";
import { LoadingComponent } from "../../../shared/loading/loading.component";
import { ToasterComponent } from "../../../shared/toaster/toaster.component";
import { CardComponent } from "../../../shared/card/card.component";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BlogDataService } from '../../services/blogdata/blog-data.service';
import { Article } from '../../interfaces/article';
interface message {
  text?: string;
}
@Component({
  selector: 'app-home',
  imports: [SearchInputComponent, LoadingComponent, ToasterComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  filter = {
    page : 1,
    perPage:10
  }
  load:boolean = false
  message:message = {text:''}
  articles: Article[] = [];
  private blogService = inject(BlogDataService)
  constructor(){}
  ngOnInit(): void {
    this.getAllArticles(this.filter)
  }
  onRloadClick(){

  }
  getAllArticles(filter:Object){
    this.load = true
    this.articles = []
    this.blogService.getAllpostsData(filter).subscribe({
      next:(res:Article[])=>{

        this.articles = res
        this.load = false
        this.message.text = ''
      },
      error:(error:HttpErrorResponse)=>{
        this.articles = []
        this.load = false
        this.message.text = error.error.message

      }
    })
  }

}
