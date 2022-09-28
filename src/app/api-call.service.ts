import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  url:string;

  constructor(private http:HttpClient) { }

  getPosts(lat:any,lon:any) {
    this.url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ed33dbf9d00ae4a8233e7f4b03692c22`;
    return this.http.get(this.url)
  }

  getLatAndLon(city:string) {
    this.url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=ed33dbf9d00ae4a8233e7f4b03692c22`;
    return this.http.get(this.url)
  }

  getWeatherData(lat:number, lon:number) {
    this.url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ed33dbf9d00ae4a8233e7f4b03692c22`;
    return this.http.get(this.url)
  }
}
