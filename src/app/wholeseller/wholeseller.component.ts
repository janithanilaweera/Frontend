import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {User2} from '../user2';
import {SharedService} from '../shared/shared.service';

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
  selectedOption: any;
  printedOption: any;

  print() {
    this.printedOption = this.selectedOption;
    this.sharedservice.setUser(this.selectedOption);
    console.log(this.selectedOption);
  }

  postmethod(){
    debugger
    this.service.getOrder( this.nic, this.dlocation, this.quantity, this.bprice, this.type)
      .subscribe( data => {this.users2 = data;}, error => {console.log(JSON.stringify(error.json()));});
    //bellow subcribe method for capture return val
    // }



  constructor(public service: HttpService, public  sharedservice: SharedService) { }

  ngOnInit(): void {
  }

}
