import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  http = inject(HttpClient);

  apiKey = 'd4594364698122bfd1c4b3eb5f2ff19f';

  constructor() { }
  

  getWeather() {
    
  }
}
