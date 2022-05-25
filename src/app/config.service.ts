import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';


@Injectable({
  providedIn: 'root'
})

export class ConfigService {


    constructor(private webReqService: WebRequestService) {  }

    getConfig(title: string ){
      return this.webReqService.post('esegui', {title});
    }
    getInfo(title: string ){
      return this.webReqService.post('info', {title});
    }
  
}