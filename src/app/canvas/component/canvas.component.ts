import { Component } from '@angular/core';
import { Canvas } from '../models/canvas';

@Component({
selector: 'jigsaw',
templateUrl: './canvas.component.html',
styleUrls:  ['./canvas.component.css']
})

export class CanvasComponent {
 Canvas = new Canvas();
 title = "canvasrt" + this.Canvas.Columns[1]
}