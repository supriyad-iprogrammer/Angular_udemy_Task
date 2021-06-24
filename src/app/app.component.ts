import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment-Recipe';
  loadeddata='receipe'
  onNavigate(feature:string){
this.loadeddata=feature;

  }
}
