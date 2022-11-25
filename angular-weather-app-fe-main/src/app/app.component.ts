import { Component, OnInit } from '@angular/core';
import { FetchDataService, IWeatherData } from './services/fetchdata';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  countries: Array<string> = [];
  selectedCountry: string = '';
  weatherData: IWeatherData | undefined;

  constructor(private fetchDataService: FetchDataService) {}

  ngOnInit(): void {
    this.fetchDataService.getCountries().subscribe(({ data }) => {
      const countries = data.map((val) => val.country);
      this.countries = countries;
    });
  }

  getWeatherInfo() {
    this.fetchDataService
      .getWeatherData(this.selectedCountry)
      .subscribe((data: IWeatherData) => {
        this.weatherData = data;
      });
  }
}
