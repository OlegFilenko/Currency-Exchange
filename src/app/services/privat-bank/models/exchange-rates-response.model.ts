export interface ExchangeRatesResponseModel {
  date: string;
  bank: string;
  baseCurrency: number;
  baseCurrencyLit: string;
  exchangeRate: RateModel[];
}

export interface RateModel {
  baseCurrency: string;
  currency: string;
  saleRateNB: number;
  purchaseRateNB: number;
  saleRate?: number;
  purchaseRate?: number;
}
