import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ICountryData {
  country: string;
  cities: string[];
}

interface ICountries {
  data: Array<ICountryData>;
}

export interface IWeatherData {
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };

  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
}

@Injectable()
export class FetchDataService {
  constructor(private http: HttpClient) {}

  getCountries() {
    const contriesUrl = 'https://countriesnow.space/api/v0.1/countries';
    return this.http.get<ICountries>(contriesUrl);
  }

  getWeatherData(country: string) {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country}&APPID=794ee95e63c5a32aaf88cd813fa2e425`;

    return this.http.get<IWeatherData>(weatherUrl);
  }
}
