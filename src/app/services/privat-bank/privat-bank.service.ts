import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { ExchangeRatesResponseModel } from './models/exchange-rates-response.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrivatBankService {

  private _httpOptions = {
    headers: new HttpHeaders({
      'access-control-allow-origin': '*',
      'access-control-allow-methods': 'get,post,delete,put',
      'content-type': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
    })
  };

  constructor(
    private readonly http: HttpClient
  ) { }

  getRates(date: string): Observable<any> {
    return this.http.get<any>(`${environment.api}exchange_rates?json&date=${date}`);
  }

  getNBU(): Observable<any> {
    return this.http.get<any>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
  }

  getMonobank(): Observable<any> {
    return this.http.get<any>('https://api.monobank.ua/bank/currency');
  }
}
