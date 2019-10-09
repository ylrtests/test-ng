import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'jhi-map-luker',
  templateUrl: './map-luker.component.html',
  styleUrls: ['./map-luker.component.scss']
})
export class MapLukerComponent implements OnInit, AfterViewInit {
  private mapElements: any[] = [];
  private logoBrand: any;
  private shadowItems: any;
  private titles: any[];

  constructor(private elem: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Carga elementos del mapa de talento
    // No se carga como clase porque tienen diferente orden en el SVG
    this.mapElements.push(this.elem.nativeElement.querySelector("#item-one"));
    this.mapElements.push(this.elem.nativeElement.querySelector("#item-two"));
    this.mapElements.push(this.elem.nativeElement.querySelector("#item-three"));
    this.mapElements.push(this.elem.nativeElement.querySelector("#item-four"));
    this.mapElements.push(this.elem.nativeElement.querySelector("#item-five"));
    this.mapElements.push(this.elem.nativeElement.querySelector("#item-six"));

    // Carga icono de luker
    this.logoBrand = this.elem.nativeElement.querySelector("#brand-logo");
    // Carga ambos titulos
    this.titles = this.elem.nativeElement.querySelectorAll(".title");
    // Carga sombra
    this.shadowItems = this.elem.nativeElement.querySelector("#shadow-circle-items");

    this.animateMap();
  }

  animateMap() {
    setTimeout(() => {
      for (const t of this.titles) {
        t.style.opacity = 1;
      }
      this.logoBrand.style.opacity = 1
      let i = 0;
      setInterval(() => {
        if (i < this.mapElements.length) {
          this.mapElements[i].style.opacity = 1
          i++;
        }
        else {
          this.shadowItems.style.opacity = 1;
          clearInterval()
        }
      }, 700);
    }, 1000);
  }
}
