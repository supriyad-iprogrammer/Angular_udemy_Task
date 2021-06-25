import { Receipe } from './receipe.modal';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css']
})
export class ReceipesComponent implements OnInit {
@Input() selectedReciepe!:Receipe;
  constructor() { }

  ngOnInit(): void {
  }

}
