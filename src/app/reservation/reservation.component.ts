import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class request{
  public rDate: Date;
  public people: string;
  public time: string;
}

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.model.people="1";
  }
  model= new request();

  onSumbit(form): void{
    // var numberValue = Number(this.model.travelers);
    // this.result = numberValue * this.rate;

    console.log(form.value);
  }

  btnClick(): void{

    this.router.navigateByUrl('/search');
  }

}
