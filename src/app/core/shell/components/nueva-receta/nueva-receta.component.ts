import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nueva-receta',
  templateUrl: './nueva-receta.component.html',
  styleUrls: ['./nueva-receta.component.scss']
})
export class NuevaRecetaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  procesarForm(){
    alert("procesando form")
  }

}
