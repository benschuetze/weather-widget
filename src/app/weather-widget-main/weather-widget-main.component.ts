import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.scss']
})
export class WeatherWidgetMainComponent implements OnInit {

  city: string;
  zipCode: number;


  constructor(private acs: ApiCallService) { }

  ngOnInit(): void {
    this.acs.getPosts('70','70').subscribe((result)=>{
      console.log(result);
    });
  }

  enterLocationData() {
    this.acs.getLatAndLon(this.city).subscribe((result)=> {
      console.log(result[0]['lat'])
      this.acs.getWeatherData(result[0]['lat'], result[0]['lon']).subscribe((result) => {
        console.log(`The weather data for ${this.city} is`, result)
      })
      
    });

  }

}
