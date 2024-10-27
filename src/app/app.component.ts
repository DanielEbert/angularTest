import { Component, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimeService } from './time.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularTest';
  private framerate = 2;
  private frameIntervalMs = 1 / this.framerate * 1000;

  private nextRenderTime = 0;
  private destroyed = false;

  constructor(private timeService: TimeService) {}

  ngOnInit() {
    this.tryRender()
  }

  tryRender = () => {
    if (this.destroyed) return;
    // ...

    const curTimeMs = Date.now(); 
    this.nextRenderTime = Math.max(this.nextRenderTime + this.frameIntervalMs, curTimeMs);

    console.log(this.timeService.time())

    setTimeout(this.tryRender, Math.max(0, this.nextRenderTime - curTimeMs ))
  }

  ngOnDestroy() {
    this.destroyed = true;
  }
}
