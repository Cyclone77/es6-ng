import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss']
})
export class AsyncComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.func1();
  }

  func1() {
    this.getStockPriceByName().then(data => console.log(data));
    this.one2FiveInAsync();
  }

  async getStockPriceByName() {
    const symbol = '等待了?';
    await this.getStockSymbol();
    return symbol;
  }

  getStockSymbol() {
    // tslint:disable-next-line:no-unused-expression
    new Promise(resolve => {
      setTimeout(() => {
        console.log('等待吗?');
        resolve(100);
      }, 1000);
    });
  }

  sleep(interval) {
    return new Promise(resolve => {
      setTimeout(resolve, interval);
    });
  }

  async one2FiveInAsync() {
    for (let i = 1; i <= 5; i++) {
      console.log(i);
      await this.sleep(2000);
    }
  }


}
