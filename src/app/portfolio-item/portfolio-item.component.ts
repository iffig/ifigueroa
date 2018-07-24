import { Component, OnInit, Input} from '@angular/core';
import { portfolioItem } from '../portfolio-item';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent implements OnInit {
  @Input() item: portfolioItem;
  show = false;
  constructor() { }

  ngOnInit() {
  }
  hideDetails():void{
    this.show = false;
  }

  showDetails():void{
    this.show = true;
  }

  toggleDetail():void{
    if(this.show == false){
      this.show = true;
    }
    else if(this.show == true){
      this.show = false;
    }

  }

}
