import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipe.modal';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
receipe : Receipe[]=[
  new Receipe('Test recipe',
  'description',
  'https://image.shutterstock.com/z/stock-photo-healthy-food-healthy-vegetarian-lunch-bowl-fresh-green-salad-on-dark-woden-background-banner-1921792865.jpg')
];
  constructor() { }

  ngOnInit(): void {
  }

}