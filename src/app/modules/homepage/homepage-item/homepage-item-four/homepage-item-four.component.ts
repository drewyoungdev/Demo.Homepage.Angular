import { Component, OnInit } from '@angular/core';
import { HomepageItemComponent } from '../homepage-item.component';

@Component({
  selector: 'app-homepage-item-four',
  templateUrl: './homepage-item-four.component.html',
  styleUrls: ['./homepage-item-four.component.scss']
})
export class HomepageItemFourComponent extends HomepageItemComponent implements OnInit {

  constructor() {
    super();
    this.title = 'Homepage Item Four'
  }

  ngOnInit() {
    var that = this;
    setTimeout(function () {
      that.completed()
    }, Math.floor(Math.random() * (10000 - 1000 + 1000)) + 1000);
  }
}
