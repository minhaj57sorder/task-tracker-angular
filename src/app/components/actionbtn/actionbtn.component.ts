import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-actionbtn',
  standalone: true,
  imports: [],
  templateUrl: './actionbtn.component.html',
  styleUrl: './actionbtn.component.css'
})
export class ActionbtnComponent {
  @Input() text: string = ''; // Add a default value or initialize the property
  @Output() onAction = new EventEmitter<string>(); // Remove the argument from the EventEmitter initialization
  constructor() {
    this.text = 'actionbtn'; // Initialize the property in the constructor
  }
  onBtnClick(value: string){
    this.onAction.emit(value);
  }
}