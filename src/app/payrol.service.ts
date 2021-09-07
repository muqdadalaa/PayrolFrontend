import { Injectable } from '@angular/core';
import { Payrol } from './payrol.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PayrolService {

  url:string="http://localhost:18809/api/DboEmpInfoes"
  payrols:Payrol[];
  payrol:Payrol;

  constructor(private http:HttpClient) { }

  getAllPayrol(){
    this.http.get(this.url).toPromise().then(
      res=>{
        this.payrols = res as Payrol[];
      }
    )
  }

  postPayrol(){
    return this.http.post(this.url,this.payrol);
  }

  putPayrol(){
    return this.http.put(this.url + "/" + this.payrol.empId,this.payrol);
  }

  deletePayrol(empId){
    return this.http.delete(this.url+"/"+empId);
  }

}
