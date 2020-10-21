import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.model.name="name";
  }
  model= new selectRestaurant;

  Time: string[] =[
    '12:00',
    '14:00',
    '17:00'
  ];



  onSumbit(form): void{
    // var numberValue = Number(this.model.travelers);
    // this.result = numberValue * this.rate;

    console.log(form.value);
  }

  btnClick(): void{

    this.router.navigateByUrl('/reservationlist');
  }
}
