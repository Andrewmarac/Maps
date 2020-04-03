import { Component } from '@angular/core';
import { Point } from 'src/models/point.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  lat: number = 45.506738;
  lng: number = 9.190766;

  colorCerchio:string;
  colorRetta:string;
  constructor(){}
    redColor(): boolean{
      this.colorCerchio="red"
      return false
    }
    greenColor() : boolean{
      this.colorCerchio="green"
      return false
    }
    blueColor() : boolean{
      this.colorCerchio="blue"
      return false
    }

    violetColorett() : boolean{
      this.colorRetta="Purple"
      return false
    }
    yellowColorRett() : boolean{
      this.colorRetta="yellow"
      return false
    }
    orangeColorRett() : boolean{
      this.colorRetta= "orange"
      return false
    }

   icon =  {
    url:'./assets/img/cat_acrobat.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  };

   triangle: Array<Point> =
  [
    {lng:9.1, lat:45.5},
    {lng:9.0, lat:45.6},
    {lng:9.0, lat:45.4}
  ]


}
