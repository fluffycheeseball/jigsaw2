import { Component } from '@angular/core';
import { Canvas } from '../models/canvas';

@Component({
selector: 'jigsaw',
templateUrl: './canvas.html',
styleUrls:  ['./canvas.css']
})

export class CanvasComponent {
 Canvas = new Canvas();
 title = 'canvas part'
}