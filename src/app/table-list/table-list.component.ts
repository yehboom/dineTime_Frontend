import { Component, OnInit } from '@angular/core';



export class tablelist{
  public rDate: Date;
  public people: string;
  public time: string;
  public tableid: string;
}

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    this.model.tableid="1123";
  }

  model= new tablelist();

  onSumbit(form): void{
    // var numberValue = Number(this.model.travelers);
    // this.result = numberValue * this.rate;
    // this.router.navigateByUrl('/reservation');
    console.log(form.value);
  }


}
