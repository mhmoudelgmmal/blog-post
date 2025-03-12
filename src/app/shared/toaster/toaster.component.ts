import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toaster',
  imports: [],
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.scss'
})
export class ToasterComponent {
  @Input() errorMessage:string = "Your error message is Here"
  @Output() reloadClick = new EventEmitter();

  reloadPage(){
    this.reloadClick.emit(true);
  }
}
