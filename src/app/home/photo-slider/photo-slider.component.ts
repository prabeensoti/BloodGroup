import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-slider',
  templateUrl: './photo-slider.component.html',
  styleUrls: ['./photo-slider.component.css']
})
export class PhotoSliderComponent implements OnInit {
  photoSource: string[] = [
    'https://www.w3schools.com/bootstrap4/la.jpg',
    'https://www.w3schools.com/bootstrap4/chicago.jpg',
    'https://www.w3schools.com/bootstrap4/ny.jpg'];
    photoscr: string;
    indexs = 0;
    nextImage() {
      if (this.indexs < this.photoSource.length - 1 ) {
        this.indexs++;
      } else {
        this.indexs = 0;
      }
      this.photoscr = this.photoSource[this.indexs];
    }
    previousImage() {
      if (this.indexs === 0) {
        this.indexs = this.photoSource.length - 1;
      } else {
        this.indexs--;
      }
      this.photoscr = this.photoSource[this.indexs];
    }
    changeImage(i: number) {
      this.indexs = i;
      this.photoscr = this.photoSource[i];
    }
    autoChange() {
      setInterval(() => {
        this.nextImage();
       }, 5000);
    }

  constructor() { }

  ngOnInit() {
    this.photoscr = this.photoSource[0];
    this.autoChange();
  }

}
