import { Component, Input, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/models/commentaire';
import { Materiel } from 'src/app/models/materiel';

@Component({
  selector: 'med-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input("comment") c :Commentaire 
  constructor() { }

  ngOnInit(): void {
  }

}
