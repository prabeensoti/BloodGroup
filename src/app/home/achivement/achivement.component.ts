import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achivement',
  templateUrl: './achivement.component.html',
  styleUrls: ['./achivement.component.css']
})
export class AchivementComponent implements OnInit {
  achivements: string [] = [];
  achivement: string[] = null;
  indexs = 0;
    nextImage() {
      if (this.indexs < this.achivements.length - 1 ) {
        this.indexs++;
      } else {
        this.indexs = 0;
      }
     // this.photoscr = this.achivements[this.indexs];
    }
    previousImage() {
      if (this.indexs === 0) {
        this.indexs = this.achivements.length - 1;
      } else {
        this.indexs--;
      }
     // this.photoscr = this.achivements[this.indexs];
    }
    changeImage(i: number) {
      this.indexs = i;
      //this.photoscr = this.achivements[i];
    }
    autoChange() {
      setInterval(() => {
        this.nextImage();
       }, 5000);
    }

  constructor() { }

  ngOnInit() {
    //this.photoscr = this.achivements[0];
    this.autoChange();
  }

}
