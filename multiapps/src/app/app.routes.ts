import { Routes } from '@angular/router';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';
import { ChatAppComponent } from './chat-app/chat-app.component';

export const routes: Routes = [
    { path: '', component: CounterAppComponent },
    { path: 'counter', component: CounterAppComponent },
    { path: 'weather', component: WeatherAppComponent },
    { path: 'chat', component: ChatAppComponent}
];
