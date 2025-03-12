import { Component } from '@angular/core';
import { SearchInputComponent } from "../../shared/search-input/search-input.component";
import { LoadingComponent } from "../../shared/loading/loading.component";
import { ToasterComponent } from "../../shared/toaster/toaster.component";
import { CardComponent } from "../../shared/card/card.component";
interface message {
  text?: string;
}
@Component({
  selector: 'app-home',
  imports: [SearchInputComponent, LoadingComponent, ToasterComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  load:boolean = false
  message:message = {text:''}
  onRloadClick(){

  }
}
