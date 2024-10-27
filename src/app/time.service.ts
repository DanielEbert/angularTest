import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  public time = signal(0);

  constructor() {
    console.log('init')
    setInterval(() => {
      this.time.update(t => t + 1)
    }, 100)
  }
}
