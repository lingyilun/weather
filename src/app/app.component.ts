// ------------------------------------------
// 當我們頁面有使用到外部套件/頁面/服務 我們需要跟系統說使用到的東西來自哪裡
// 引用  { 套件/頁面/服務的名稱 } 來自 '他們的位置';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClientService } from './@service/http-client.service';
import { F007, LocationLocation, RecordsLocation, WeatherElement, Time } from './@interface/f-d0047-077';
// ------------------------------------------


// ------------------------------------------
// 這一段負責的是"畫面HTML"的設定內容
@Component({
  // selector是去設定這個頁面的標籤名稱
  selector: 'app-root',
  // imports他是一個陣列，裡面放的是"畫面HTML"使用到的套件
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  // templateUrl就是用來綁定這個TS要對應哪個HTML畫面
  templateUrl: './app.component.html',
  // styleUrl就是用來綁定這個TS要對應哪個Css
  styleUrl: './app.component.scss'
})
// ------------------------------------------

// ------------------------------------------
// 這邊開始要寫這個頁面得TS內容
// AppComponent是這個頁面TS的"名稱"
// {}裡面才是寫這個頁面的TS內容
export class AppComponent {

  Locations!: RecordsLocation;
  Location!: LocationLocation[];
  Weather!: WeatherElement[];
  chooseLocation!: string;
  chooseWeather!: string;
  weatherData!: Time[];

  // Class中要引用套件或者服務都要寫在constructor 建構式中
  // private將後面設定的全域變數設為公開
  // router為自己取名的全域變數 讓他等於後面宣告的服務/套件/函式
  constructor(
    private httpClientService: HttpClientService
  ) {}

  ngOnInit(): void {
    // subscribe是訂閱 用來等待呼叫Api的函式回應你內容
    // res是自己取名的區域變數 等於Api回應你的內容
    this.httpClientService.getApi('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-077?Authorization=CWA-0DF49296-2C40-408C-AE52-17D1EE4F5728')
    .subscribe((res: F007) => {
      console.log(res);
      this.Locations = res.records.Locations[0];
      this.Location = res.records.Locations[0].Location;
    });
  }

  chooseLocationClick(location: LocationLocation) {
    this.chooseLocation = location.LocationName;
    this.Weather = location.WeatherElement;
  }

  chooseWeatherClick(weather: WeatherElement) {
    this.chooseWeather = weather.ElementName;
    this.weatherData = weather.Time;
  }
}


// ------------------------------------------
