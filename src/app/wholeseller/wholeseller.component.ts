import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {User2} from '../user2';
@Component({
  selector: 'app-wholeseller',
  templateUrl: './wholeseller.component.html',
  styleUrls: ['./wholeseller.component.css'],
  providers: [HttpService]
})
export class WholesellerComponent implements OnInit {
  nic: string;
  dlocation: string;
  quantity: number;
  bprice: any = '';
  type: number;

  users2: User2[];
  selectedOption: string;
  printedOption: string;

  print() {
    this.printedOption = this.selectedOption;
  }

  postmethod(){
    debugger
    this.service.getOrder( this.nic, this.dlocation, this.quantity, this.bprice, this.type)
      //bellow subcribe method for capture return val
      .subscribe( data => {this.users2 = data;}, error => {console.log(JSON.stringify(error.json()));});
  }
  // tslint:disable-next-line:typedef


  constructor(public service: HttpService) { }

  ngOnInit(): void {
  }

}
