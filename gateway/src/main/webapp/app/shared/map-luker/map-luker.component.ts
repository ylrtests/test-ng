import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'jhi-map-luker',
  templateUrl: './map-luker.component.html',
  styleUrls: ['./map-luker.component.scss']
})
export class MapLukerComponent implements OnInit, AfterViewInit {
  private mapElements: any[];
  private logoBrand: any;

  constructor(private elem: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.mapElements = this.elem.nativeElement.querySelectorAll('.item');
    this.logoBrand = this.elem.nativeElement.querySelector("#brand-logo");
    this.animateMap();
  }

  animateMap() {
    setTimeout(() => {
      this.logoBrand.style.opacity = 1
      let i = 0;
      setInterval(() => {
        if (i < this.mapElements.length) {
          this.mapElements[i].style.opacity = 1
          i++;
        }
        else {
          clearInterval()
        }
      }, 700);
    }, 1000);
  }


}
