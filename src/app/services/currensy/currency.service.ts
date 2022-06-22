import { Injectable } from '@angular/core';
import { CurrencyModel } from './models/currency.model';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  public readonly list: string[] = ['UAH', 'USD', 'EUR', 'CAD', 'CHF', 'CNY', 'CZK', 'ILS', 'JPY', 'KRW', 'KZT', 'LTL', 'MXN', 'NOK', 'PLN', 'RON', 'SEK', 'SGD'];

  public readonly dict: Map<string, CurrencyModel> = new Map<string, CurrencyModel>();

  constructor() {
    this.dict.
      set('UAH', { description: 'Українська гривна', countryA2: 'ua', countryA3: 'ukr', currensyCode: 980, countryCode: 804 }).
      set('USD', { description: 'Амеріканський долар', countryA2: 'us', countryA3: 'usa', currensyCode: 840, countryCode: 840 }).
      set('EUR', { description: 'Європейське євро', countryA2: 'eu', countryA3: 'eur', currensyCode: 978 }).
      set('CAD', { description: 'Канадський долар', countryA2: 'ca', countryA3: 'can', currensyCode: 124, countryCode: 124 }).
      set('CHF', { description: 'Швейцарський франк', countryA2: 'ch', countryA3: 'che', currensyCode: 756, countryCode: 756 }).
      set('CNY', { description: 'Китайський юань', countryA2: 'cn', countryA3: 'chn', currensyCode: 156, countryCode: 156 }).
      set('CZK', { description: 'Чеська крона', countryA2: 'cz', countryA3: 'cze', currensyCode: 203, countryCode: 203 }).
      set('ILS', { description: 'Iзраїльський шекель', countryA2: 'il', countryA3: 'isr', currensyCode: 376, countryCode: 376 }).
      set('JPY', { description: 'Японська єна', countryA2: 'jp', countryA3: 'jpn', currensyCode: 392, countryCode: 392 }).
      set('KRW', { description: 'Корейська вона', countryA2: 'kr', countryA3: 'kor', currensyCode: 410, countryCode: 410 }).
      set('KZT', { description: 'Казахський тенге', countryA2: 'kz', countryA3: 'kaz', currensyCode: 398, countryCode: 398 }).
      set('LTL', { description: 'Литовский літ', countryA2: 'lt', countryA3: 'ltu', currensyCode: 440, countryCode: 440 }).
      set('MXN', { description: 'Мексиканське песо', countryA2: 'mx', countryA3: 'mex', currensyCode: 484, countryCode: 484 }).
      set('NOK', { description: 'Норвезька крона', countryA2: 'no', countryA3: 'nor', currensyCode: 578, countryCode: 578 }).
      set('PLN', { description: 'Польський злотий', countryA2: 'pl', countryA3: 'pol', currensyCode: 985, countryCode: 616 }).
      set('RON', { description: 'Румунський лей', countryA2: 'ro', countryA3: 'rom', currensyCode: 946, countryCode: 642 }).
      set('SEK', { description: 'Шведська крона', countryA2: 'se', countryA3: 'swe', currensyCode: 752, countryCode: 752 }).
      set('SGD', { description: 'Сінгапурський долар', countryA2: 'sg', countryA3: 'sgp', currensyCode: 702, countryCode: 702 })
  }
}
