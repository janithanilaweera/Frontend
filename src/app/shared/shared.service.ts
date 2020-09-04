import { Injectable } from '@angular/core';
import {User2} from '../user2';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
 id: any;
 userlogin: boolean;

  constructor() { }

  setUser (data){
    this.id = data;
  }
  getUser (){
    return this.id;
  }
}
