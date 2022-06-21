import { AfterViewInit, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { PrivatBankService } from './services/privat-bank/privat-bank.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ITop1000Test';

  private _yesterday: string;

  constructor(
    private readonly privateBankService: PrivatBankService
  ) {
    let now: Date = new Date();
    now.setDate(now.getDate() - 1);
    this._yesterday = now.toLocaleDateString();
  }

  ngAfterViewInit(): void {
    /*this.checkRates();*/
  }

  ngOnInit(): void {
    this.checkRates();
  }

  private checkRates() {
    console.log('checkRates');
    this.privateBankService.getRates(this._yesterday).subscribe(
      data => { console.log(data); },
      error => { }
    );

    //this.privateBankService.getTest().subscribe(
    //  data => { console.log(data); },
    //  error => { }
    //);

    //this.privateBankService.getMonobank().subscribe(
    //  data => { console.log(data); },
    //  error => { }
    //);

    //this.privateBankService.getNBU().subscribe(
    //  data => { console.log(data); },
    //  error => { }
    //);
  }
}
