import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  private readonly token = '33e7cdcca4794e452a22';

  constructor(
    private readonly http: HttpClient
  ) {}

  getRateFromCurrconv(key: string): Observable<any> {
    return this.http.get<any>(`https://free.currconv.com/api/v7/convert?apiKey=${this.token}&q=${key}&compact=ultra`);
  }
}
