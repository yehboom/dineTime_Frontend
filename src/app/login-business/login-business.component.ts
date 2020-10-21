import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export class accountLogin{
  public account: string;
  public password: string;
}


@Component({
  selector: 'app-login-business',
  templateUrl: './login-business.component.html',
  styleUrls: ['./login-business.component.css']
})
export class LoginBusinessComponent implements OnInit {


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
    this.router.navigateByUrl('/addtable');
    console.log(form.value);
  }

//   btnClick= function () {
//     this.router.navigateByUrl('/reservation');
// };

}
