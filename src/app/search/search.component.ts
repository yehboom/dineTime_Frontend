import { Component, OnInit } from '@angular/core';

export class selectRestaurant{
  public rDate: Date;
  public name: string;
  public time: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.model.name="name";
  }
  model= new selectRestaurant;

  Time: string[] =[
    '12:00',
    '14:00',
    '17:00'
  ];

}
