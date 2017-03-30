import { Injectable } from '@angular/core';

@Injectable()
export class BootstrapClassService {

  private hyphen = '-';
  constructor() { }

  setStyleClass(styleClass: string, prefix?:string): string {
    return prefix == null? styleClass : prefix.concat(this.hyphen) + styleClass;
  }

  setSizeClass(size: string, prefix: string): string {
    return prefix.concat(this.hyphen) + size;
  }

}
