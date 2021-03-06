import { ChangeDetectorRef } from '@angular/core';
import { IterableDiffers } from '@angular/core';
import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { CurrencyService } from '../../services/currensy/currency.service';


@Component({
  selector: 'currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyInputComponent  {
  readonly currencies: string[] = [];

  availableCurrencies: string[] = [];

  @Input() value: number;
  @Input() currency: string;

  @Input()
  set busy(val: string) {
    this.availableCurrencies = this.currencies.filter(item => item != val);
  }

  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() currencyChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    public readonly currensyService: CurrencyService
  ) {
    this.currencies = currensyService.list;
  }

  onValueChange(value: number): void {
    this.value = value;
    this.valueChange.emit(this.value);
  }

  onCurrencyChange(currValue): void {
    this.currency = currValue.value;
    this.currencyChange.emit(this.currency);
  }
}
