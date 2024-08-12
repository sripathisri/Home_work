import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-weather-app',
  standalone: true,
  imports: [CommonModule, FormsModule, ],
  templateUrl: './weather-app.component.html',
  styleUrl: './weather-app.component.css'
})
export class WeatherAppComponent {

  city:any

  sendCity(data:any){
    const city = data;
    console.log(city.value)
  }

}
