import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  resultado:any;

  SalLiq(formu:any){           
    let SalB=parseFloat(formu.value.sb);
    let ValH=parseFloat(formu.value.vl);
    let Provento=SalB+ValH;

    let DescF=parseFloat(formu.value.df);
    let DescIR=parseFloat(formu.value.dc);
    let Desconto=DescF+(DescIR/100*SalB);
    this.resultado=Provento-Desconto;
    }
}