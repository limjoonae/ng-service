import { Injectable } from '@angular/core';

@Injectable()
export class CheckDataService {

  checkData(dataArr: Array<any>) {
    if(dataArr != null){
        if(dataArr.length > 0){
          for (var index = 0; index < dataArr.length; index++) {
            if(dataArr[index].value == '' || dataArr[index].label == ''){
              return false;
            }
          }
          return true;
        } else {
          return false;
        } 
    } else {
       return false;
    }
  }

  checkRadio(dataArr: Array<any>){
     if(dataArr != null){
        if(dataArr.length > 1) {
          return this.checkData(dataArr);
        } else {
          return false;
        }
    } else {
        return false;
    }
  }
}

