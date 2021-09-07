import { Component, OnInit } from '@angular/core';
import { PayrolService } from '../payrol.service';

@Component({
  selector: 'app-payrol-list',
  templateUrl: './payrol-list.component.html',
  styleUrls: ['./payrol-list.component.css']
})
export class PayrolListComponent implements OnInit {

  constructor(public service:PayrolService) { }

  ngOnInit() {
    this.service.getAllPayrol();
  }

  fillData(item){
    this.service.payrol.empId=item.empId;
    this.service.payrol.empIdNo=item.empIdNo;
    this.service.payrol.empNo=item.empNo;
    this.service.payrol.empstdNo=item.empstdNo;
    this.service.payrol.empHealthNo=item.empHealthNo;
    this.service.payrol.empHealthNo=item.empHealthNo;
    this.service.payrol.empPhonNo=item.empPhonNo;
    this.service.payrol.empEmail=item.empEmail;
    this.service.payrol.empVoterno=item.empVoterno;
    this.service.payrol.empSupplyCardNo=item.empSupplyCardNo;
    this.service.payrol.empApOrNo=item.empApOrNo;
    this.service.payrol.empApOrDt=item.empApOrDt;
    this.service.payrol.empBirthCou=item.empBirthCou;
    this.service.payrol.empBirthGov=item.empBirthGov;
    this.service.payrol.empMinCo=item.empMinCo;
    this.service.payrol.empUnCo=item.empUnCo;
    this.service.payrol.empSubUntNo=item.empSubUntNo;
    this.service.payrol.empSubUntGov=item.empSubUntGov;
    this.service.payrol.empFullName=item.empFullName;
    this.service.payrol.empFirNam=item.empFirNam;
    this.service.payrol.empSecNam=item.empSecNam;
    this.service.payrol.empTherNam=item.empTherNam;
    this.service.payrol.empForthNam=item.empForthNam;
    this.service.payrol.empAllakab=item.empAllakab;
    this.service.payrol.empDateofbirth=item.empDateofbirth;
    this.service.payrol.empMomNam=item.empMomNam;
    this.service.payrol.empFirMomNam=item.empFirMomNam;
    this.service.payrol.empCecMomNam=item.empCecMomNam;
    this.service.payrol.empTherMomNam=item.empTherMomNam;
    this.service.payrol.empGender=item.empGender;
    this.service.payrol.empSalRec=item.empSalRec;
    this.service.payrol.empPerTyp=item.empPerTyp;
    this.service.payrol.empPepGrp=item.empPepGrp;
    this.service.payrol.empAsgStu=item.empAsgStu;
    this.service.payrol.empNumDyMrt=item.empNumDyMrt;
    this.service.payrol.empDngHotPlc=item.empDngHotPlc;
    this.service.payrol.empMarStu=item.empMarStu;
    this.service.payrol.empHelthInsEmp=item.empHelthInsEmp;
    this.service.payrol.empStaff=item.empStaff;
    this.service.payrol.empStaffRes=item.empStaffRes;
    this.service.payrol.empMedicalBen=item.empMedicalBen;
    this.service.payrol.empRadiBen=item.empRadiBen;
    this.service.payrol.empItem=item.empItem;
    this.service.payrol.empEmployer=item.empEmployer;
    this.service.payrol.empUpgrTb=item.empUpgrTb;
    this.service.payrol.empUpgrYe=item.empUpgrYe;
    this.service.payrol.empEmployerTyp=item.empEmployerTyp;
    this.service.payrol.empAppoSt=item.empAppoSt;
    this.service.payrol.empWorSt=item.empWorSt;
    this.service.payrol.empNati=item.empNati;
    this.service.payrol.empNaDt=item.empNaDt;
    this.service.payrol.empReligion=item.empReligion;
    this.service.payrol.empNaNo=item.empNaNo;
    this.service.payrol.empBocCo=item.empBocCo;
    this.service.payrol.empLstUpdDt=item.empLstUpdDt;
    this.service.payrol.empNatIssProv=item.empNatIssProv;
    this.service.payrol.empStartDt=item.empStartDt;
    this.service.payrol.empLthServYear=item.empLthServYear;
    this.service.payrol.empLthServMonth=item.empLthServMonth;
    this.service.payrol.empServAd=item.empServAd;
    this.service.payrol.empServAdYear=item.empServAdYear;
    this.service.payrol.empServAdMonth=item.empServAdMonth;
    this.service.payrol.empServOutSalryYy=item.empServOutSalryYy;
    this.service.payrol.empServOutSalryMm=item.empServOutSalryMm;
    this.service.payrol.empRetNo=item.empRetNo;
  }

  delete(empId){
    this.service.deletePayrol(empId).subscribe(res=>{
      this.service.getAllPayrol()
    })
  }

}
