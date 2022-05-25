import { getLocaleDateFormat } from '@angular/common';
import { NotExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})



export class HeaderComponent implements OnInit {

  inputCodice: string = '';
  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.getInitQuery('MEGAQUERY')
  }

  nome: any;
  durata: any;
  run_date: any;
  run_time: any;
  date: any;

  getQuery1(process: string) {
    this.configService.getConfig(process).subscribe((response: any) => {
      //console.log(response)
      let temp = response
      this.nome = temp

    });
  }
  clickMethod() {
    confirm("Processo avviato")
  }
  getInitQuery(process: string) {
    this.configService.getInfo(process).subscribe((response: any) => {
      console.log(response)
      let temp = response[0].name
      this.nome = temp
      temp = response[0].run_date
      temp = temp.toString()
      var year = temp.substring(0, 4);
      var month = temp.substring(4, 6);
      var day = temp.substring(6, 8);
      temp = response[0].run_time
      temp = temp.toString()
      var hour = temp.substring(0,2)
      var minute = temp.substring(2,4)

      this.run_date = day + '/' + month + '/' + year

      this.run_time = hour + ':' + minute
      temp = response[0].run_duration
      temp = temp.toString()
      this.durata = temp

    });
  }
}




