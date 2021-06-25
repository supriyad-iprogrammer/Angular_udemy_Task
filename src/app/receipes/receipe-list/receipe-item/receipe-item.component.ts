import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

import { Receipe } from '../../receipe.modal';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {
@Input() rec!:Receipe;
@Output() selectedReceipe=new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  onselect(){
    this.selectedReceipe.emit();

  }
}
