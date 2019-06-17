import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proxy',
  templateUrl: './proxy.component.html',
  styleUrls: ['./proxy.component.scss']
})
export class ProxyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.func1();
    this.func2();
  }

  // 1.概述
  func1() {
    const obj = { count: 1 };
    const proxy = new Proxy(obj, {
      get: (target, key, receiver) => {
        console.log(`getting ${key.toString()}!`);
        return Reflect.get(target, key, receiver);
      },
      set: (target, key, value, receiver) => {
        console.log(`setting ${key.toString()}!`);
        return Reflect.set(target, key, value, receiver);
      }
    });
    proxy.count = 2;
    console.log(++proxy.count);
  }

  func2() {
    const proxy = new Proxy({}, {
      get: (target, property) => {
        return 35;
      }
    });

    const obj = Object.create(proxy);
    console.log(obj.item);
  }

}
