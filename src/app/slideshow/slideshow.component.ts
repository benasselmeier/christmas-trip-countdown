import { Component, Input, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 })),
      ]),
      transition('* => void', [
        animate(1000, style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class SlideshowComponent implements OnInit {
  @Input() images: string[] = [];
  currentImageIndex: number = 0;

  ngOnInit(): void {
    console.log(this.images)
    setInterval(() => {
      this.nextImage();
    }, 3000); // Change the duration (in milliseconds) between slides as needed
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }
}
