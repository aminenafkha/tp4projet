import { Component, OnInit ,Input } from '@angular/core';
import { Materiel } from 'src/app/models/materiel';

@Component({
  selector: 'med-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {
@Input("materiel") t :Materiel  ;

display: boolean=true;

onAffiche() {
  this.display=!this.display ;
}



  constructor() { }

  ngOnInit(): void {
  }

}
