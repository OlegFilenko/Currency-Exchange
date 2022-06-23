import { Component, OnInit } from '@angular/core';
import { BankService } from './services/bank/bank.service';
import { CurrencyService } from './services/currensy/currency.service';
import { ErrorMessageService } from './services/error-message/error-message.service';

enum Direction {
  LTR,
  RTL,
  UNSET
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ITop1000Test';

  valueRight: number;
  valueLeft: number;

  currencyRight: string;
  currencyLeft: string;

  rateUSD: number;
  rateEUR: number;

  private _isRateGetting: boolean;
  private _inputTimer;
  private _timeoutDuration = 300;
  private _missedDirection: Direction = Direction.UNSET;

  readonly currencies: string[] = [];

  constructor(
    private readonly bankService: BankService,
    private readonly errorMessageService: ErrorMessageService,
    private readonly currencyService: CurrencyService
  ) {
    this.currencies = currencyService.list;
  }

  ngOnInit(): void {
    this.bankService.getRateFromCurrconv('USD_UAH,EUR_UAH').subscribe(
      data => {
        this.rateUSD = <number>data['USD_UAH'];
        this.rateEUR = <number>data['EUR_UAH'];
      },
      error => this.errorMessageService.show(error)
    );

    this.currencyLeft = 'USD'
    this.currencyRight = 'UAH'
    this.valueLeft = 1
    this._getRate(Direction.LTR);
  }

  onLeftChange(): void {
    this._onChange(Direction.LTR);
  }

  onRightChange(): void {
    this._onChange(Direction.RTL);
  }

  swap(): void {
    let tempCurr = this.currencyLeft;
    this.currencyLeft = this.currencyRight;
    this.currencyRight = tempCurr;
    this._getRate(Direction.LTR);
  }

  private _getRate(direction: Direction): void {
    const currencyArr: string[] = [this.currencyLeft, this.currencyRight];
    let key: string = (direction == Direction.LTR) ? currencyArr.join('_') : currencyArr.reverse().join('_');
    this._isRateGetting = true;
    this.bankService.getRateFromCurrconv(key).subscribe(
      data => {
        let rate: number = data[key];
        if (direction == Direction.LTR) {
          this.valueRight = this._fixed2(this.valueLeft * rate);
        } else if (direction == Direction.RTL) {
          this.valueLeft = this._fixed2(this.valueRight * rate);
        }
        this._isRateGetting = false;
        if (this._missedDirection != Direction.UNSET) {
          this._getRate(<any>this._missedDirection);
          this._missedDirection = Direction.UNSET;
        }
      },
      error => this.errorMessageService.show(error)
    );
  }

  private _onChange(direction: Direction): void {
    if (!this._isRateGetting) {
      clearInterval(this._inputTimer);
      this._inputTimer = setTimeout(() => {
        this._getRate(direction)
      }, this._timeoutDuration);
    } else {
      this._missedDirection = direction;
    }
  }

  private _fixed2(value: number): number {
    return Number.parseFloat(value.toFixed(2));
  }
}
