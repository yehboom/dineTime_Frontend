import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class table{
  public rDate: Date;
  public people: string;
  public time: string;
}

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.css']
})
export class AddTableComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.model.people="1";
  }

  model= new table();

  // onSumbit(form): void{
  //   // var numberValue = Number(this.model.travelers);
  //   // this.result = numberValue * this.rate;
  //   this.router.navigateByUrl('/tablelist');
  //   console.log(form.value);
  // }

    btnClick= function () {
    this.router.navigateByUrl('/tablelist');
};


}
