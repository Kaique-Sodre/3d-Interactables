import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isHolding: boolean = false;
  previousPosition: { x: number; y: number };

  xRotate: number = 0;
  yRotate: number = 0;

  cubeColor: string = 'blue';

  constructor() {
    this.previousPosition = { x: 0, y: 0 };
  }

  changeColor(colorName: string) {
    this.cubeColor = colorName;
  }

  onHold() {
    this.isHolding = true;
  }

  onRelease() {
    this.isHolding = false;
    this.previousPosition = { x: 0, y: 0 };
  }

  onDrag(event: any) {
    if (this.isHolding) {
      if (this.previousPosition.x == 0 && this.previousPosition.y == 0) {
        this.previousPosition.x = event.clientX;
        this.previousPosition.y = event.clientY;
      }

      this.xRotate -= event.clientY - this.previousPosition.y;
      this.yRotate += event.clientX - this.previousPosition.x;

      this.previousPosition.x = event.clientX;
      this.previousPosition.y = event.clientY;
    }
  }
}
