import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  api_key = '0524439bfc0f275c4e8464ee04c08788';
  constructor(private _http: HttpClient) { }

  public getDallasApi() {
    // tslint:disable-next-line: max-line-length
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=dallas&units=imperial&appid=4f3e28f0b8b0098757ab0d171d5966c8');
  }
  public getBurbankApi() {
    // tslint:disable-next-line: max-line-length
    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?q=Burbank&units=imperial&appid=4f3e28f0b8b0098757ab0d171d5966c8`);
  }
  public getSeattleApi() {
    // tslint:disable-next-line: max-line-length
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&appid=4f3e28f0b8b0098757ab0d171d5966c8');
  }
  public getSanJoseApi() {
    // tslint:disable-next-line: max-line-length
    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?id=5392171&units=imperial&appid=4f3e28f0b8b0098757ab0d171d5966c8`);
  }
  public getWashingtonApi() {
    // tslint:disable-next-line: max-line-length
    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?id=4140963&units=imperial&appid=4f3e28f0b8b0098757ab0d171d5966c8`);
  }
  public getChicagoApi() {
    // tslint:disable-next-line: max-line-length
    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=4f3e28f0b8b0098757ab0d171d5966c8`);
  }
}
