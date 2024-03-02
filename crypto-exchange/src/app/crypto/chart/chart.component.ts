import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { CryptoModel } from 'src/app/common/models/crypto.model';
import { RegModel } from 'src/app/common/models/reg.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  currentDate?: Date;
  startOfWeek?: Date;
  endOfWeek?: Date;
  cryptoData?: CryptoModel;


  ngOnInit(): void {
    // this.getWeeklyData();
    // console.log(this.getWeeklyData());
  }
  // getWeeklyData(): void {
  //   const currentUserJson = localStorage.getItem('currentUser');
  //   if(currentUserJson) {
  //     const currentUser: RegModel = JSON.parse(currentUserJson);
  //     const currentDate = new Date();
  //     const startOfWeek = new Date(currentDate);
  //     startOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + (currentDate.getDay() === 0 ? -6 : 1));
  
  //     // most, hogy megvan az aktuális hét kezdődátuma, kiválaszthatjuk az elmúlt heti adatokat
  //     const lastWeekData = currentUser.cryptoList.find(data => {
  //       const dataStartDate = new Date(data.data_start);
  //       console.log(dataStartDate);
  //       const dataEndDate = new Date(data.data_end);
  //       console.log(dataEndDate);
  //       return dataStartDate >= startOfWeek && dataEndDate <= currentDate;
  //     });
  //     console.log('Elmúlt heti adatok:', lastWeekData);
  //   }
  // }
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: string = 'chart';
  chartOptions: Highcharts.Options = {
    title: {
      text: 'My Chart',
    },
    series: [
      {
        type: 'line',
        data: [1, 2, 3, 4, 5],
      },
    ],
  };
  chartCallback: Highcharts.ChartCallbackFunction = function (chart) {
    // Optional callback function
    console.log('Chart instance:', chart);
  };
  updateFlag: boolean = false;
  oneToOneFlag: boolean = true;
  runOutsideAngular: boolean = false;




}
