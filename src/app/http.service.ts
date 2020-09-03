import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';


// tslint:disable-next-line:import-spacing
import {User2} from  './user2';

@Injectable()
export class HttpService {
  v1: string;
  private nic: string;
  constructor(private http: HttpClient) { }

  doSomething(val: string): string {return this.v1 = val;
  }
  connection(val: string, val2: string, val3: any): string {return  this.v1 = val.concat(val2.concat(val3)); }
  // tslint:disable-next-line:typedef
  public doPost(user){
    return this.http.post('http://172.20.10.6:8080/adddelivery', user);
  }

  // tslint:disable-next-line:typedef
  public getOrder(a: any , b: any , c: any , d: any , e: any ){
    const params = new HttpParams();
    params.append('nic', a);
    params.append('dlocation', b);
    params.append('quantity', c);
    params.append('bprice', d);
    params.append('type', e);
    // return this.http.get<User2[]>(this.baseURL + 'users/' + userName + '/repos',{params})
    // this params uses for pass query parameters as below
    return this.http.get<User2[]>('http://172.20.10.6:8080/adddelivery', {
      params: {
        nic: a,
        dlocation: b,
        quantity: c,
        bprice: d,
        type: e
      }
    });

    //  return this.http.get<User2[]>("http://172.20.10.6:8080/adddelivery"+use);

  }
  //  public getUsers(){
  //   return this.http.get<User[]>("https://bitpay.com/api/rates");
  // }

  public getUserByEmail(email){
    return this.http.get('http://localhost:9090//findUser/' + email);
  }

  public deleteUser(id){
    return this.http.delete('http://localhost:9090/cancel/' + id);
  }
}
