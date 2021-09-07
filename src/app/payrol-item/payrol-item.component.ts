import { Component, OnInit } from '@angular/core';
import { PayrolService } from '../payrol.service';

@Component({
  selector: 'app-payrol-item',
  templateUrl: './payrol-item.component.html',
  styleUrls: ['./payrol-item.component.css']
})
export class PayrolItemComponent implements OnInit {

  constructor(public service:PayrolService) { }

  ngOnInit() {
    this.service.payrol={
      empId:0,
      empIdNo:null,
      empNo:null,
      empstdNo:null,
      empHealthNo:null,
      empStatNo:null,
      empPhonNo:null,
      empEmail:null,
      empVoterno:null,
      empSupplyCardNo:null,
      empApOrNo:null,
      empApOrDt:null,
      empBirthCou:null,
      empBirthGov:null,
      empMinCo:null,
      empUnCo:null,
      empSubUntNo:null,
      empSubUntGov:null,
      empFullName:null,
      empFirNam:null,
      empSecNam:null,
      empTherNam:null,
      empForthNam:null,
      empAllakab:null,
      empDateofbirth:null,
      empMomNam:null,
      empFirMomNam:null,
      empCecMomNam:null,
      empTherMomNam:null,
      empGender:null,
      empSalRec:null,
      empPerTyp:null,
      empPepGrp:null,
      empAsgStu:null,
      empNumDyMrt:null,
      empDngHotPlc:null,
      empMarStu:null,
      empHelthInsEmp:null,
      empStaff:null,
      empStaffRes:null,
      empMedicalBen:null,
      empRadiBen:null,
      empItem:null,
      empEmployer:null,
      empUpgrTb:null,
      empUpgrYe:null,
      empEmployerTyp:null,
      empAppoSt:null,
      empWorSt:null,
      empNati:null,
      empNaDt:null,
      empReligion:null,
      empNaNo:null,
      empBocCo:null,
      empLstUpdDt:null,
      empNatIssProv:null,
      empStartDt:null,
      empLthServYear:null,
      empLthServMonth:null,
      empServAd:null,
      empServAdYear:null,
      empServAdMonth:null,
      empServOutSalryYy:null,
      empServOutSalryMm:null,
      empRetNo:null
     }
  }

  submit(){
    if(this.service.payrol.empId==0){
      this.service.postPayrol().subscribe(res=>{
        this.service.getAllPayrol()
      },
      err=>{
        console.log(err)
      })
    }
    else{
      this.service.putPayrol().subscribe(res=>{
        this.service.getAllPayrol()
      },
      err=>{
        console.log(err)
      })
    }
  
    }
  

}
