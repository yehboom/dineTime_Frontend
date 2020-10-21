import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// export class travelRequest{
//   public orginationAirport: string;
//   public destinationAirport: string;
//   public travelDate: Date;
//   public travelers: string;
// }

export class accountLogin{
  public account: string;
  public password: string;
}

// export class Rate{
//   public value: string;
// }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  // result: number = 0;
  // rate: number = 150;


  constructor(private router: Router) { }

  ngOnInit(): void {

    this.model.account="";
    this.model.password="";
  }

  model= new accountLogin;

  // Orgination: string[] =[
  //   'OHare',
  //   'NY Laguardia',
  //   'Boston'
  // ];

  // Destination: string[] =[
  //   'Friedman Memorial',
  //   'Yampa Valley',
  //   'TPE'
  // ];


  onSumbit(form): void{
    // var numberValue = Number(this.model.travelers);
    // this.result = numberValue * this.rate;
    this.router.navigateByUrl('/reservation');
    console.log(form.value);
  }

//   btnClick= function () {
//     this.router.navigateByUrl('/reservation');
// };


}
