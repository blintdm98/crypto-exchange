import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Highcharts from 'highcharts';
import { CryptoModel } from 'src/app/common/models/crypto.model';
import { RegModel } from 'src/app/common/models/reg.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  cryptoData?: CryptoModel;
  asset_id?: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const currentUserJson = localStorage.getItem('currentUser');
    if(currentUserJson) {
      const currentUser:RegModel = JSON.parse(currentUserJson);
      this.activatedRoute.paramMap.subscribe((params) => {
        let readParam = params.get('asset_id');
        if(readParam) {
          this.asset_id = readParam;
          if (currentUser && currentUser.cryptoList) {
          this.cryptoData = currentUser.cryptoList.find(crypto => crypto.asset_id === this.asset_id);
          if(this.cryptoData) {
            this.getChart(this.cryptoData.name);
          }
          }
      }
    })
  }
}

  getChart(name:string) {
    const chartOptions: Highcharts.Options = {
      title: {
        text: name
      },
      series: [
        {
          type: 'line',
          data: [1, 2, 3, 4, 5],
        },
      ],
    }

    this.chartOptions = {...chartOptions};
    this.updateFlag = true;
  }

  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: string = 'chart';
  chartOptions: Highcharts.Options = {


  };
  updateFlag: boolean = false;
  oneToOneFlag: boolean = true;
  runOutsideAngular: boolean = false;
}
