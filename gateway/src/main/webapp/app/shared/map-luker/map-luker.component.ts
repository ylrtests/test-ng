import { Component, OnInit, ElementRef, AfterViewInit, Input } from '@angular/core';
import { Router } from '@angular/router';

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
  @Input() activeElement?= 0;

  constructor(private elem: ElementRef, private router: Router) { }

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
          // Existe elemento activo
          if (this.activeElement > 0) {
            if ((this.activeElement - 1) === i) {
              this.mapElements[i].classList.add("active")
            }
            else {
              this.mapElements[i].classList.add("opaque")
            }
          }

          this.mapElements[i].classList.add("animated")
          i++;
        }
        else {
          this.shadowItems.style.opacity = 1;
          clearInterval()
        }
      }, 700);
    }, 1000);
  }

  clickMapItem(link: string) {
    // si ya inicio sesión
    this.router.navigate([`${link}`]);
  }
}
