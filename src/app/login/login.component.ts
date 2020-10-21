import { Component, OnInit } from '@angular/core';


export class travelRequest{
  public orginationAirport: string;
  public destinationAirport: string;
  public travelDate: Date;
  public travelers: string;
}

export class Rate{
  public value: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  result: number = 0;
  rate: number = 150;


  constructor() { }

  ngOnInit(): void {

    this.model.travelers="0";
  }

  model= new travelRequest;

  Orgination: string[] =[
    'OHare',
    'NY Laguardia',
    'Boston'
  ];

  Destination: string[] =[
    'Friedman Memorial',
    'Yampa Valley',
    'TPE'
  ];


  onSumbit(form): void{
    var numberValue = Number(this.model.travelers);
    this.result = numberValue * this.rate;
    console.log(form.value);
  }



}
