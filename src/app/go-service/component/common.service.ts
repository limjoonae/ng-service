import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

 public isNull(data: any): boolean {
    return (data == null || data == undefined || data == '')? true : false;
  }

}