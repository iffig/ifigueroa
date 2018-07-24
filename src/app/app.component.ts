import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ifigueroa';
  symbolToggled = false;

  toggleSymbol():void{
    if(this.symbolToggled == false){
      this.symbolToggled = true;
    }
    else{
      this.symbolToggled = false;
    }
  }
}
