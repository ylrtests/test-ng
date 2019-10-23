import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jhi-definiciones-template',
  templateUrl: './definiciones-template.component.html',
  styleUrls: ['./definiciones-template.component.scss'] 
})
export class DefinicionesTemplateComponent implements OnInit {

  @Input() processNumber = 1;

  constructor() { }

  ngOnInit() {
  }

}
