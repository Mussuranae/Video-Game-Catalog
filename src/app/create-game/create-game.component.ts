import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent {

  createGameForm: FormGroup;

  constructor( private formBuilder: FormBuilder) {}


  ngOnInit() {
    this.createGameForm = this.formBuilder.group({
        title: '',
        description: '',
        publisher: '',
        price: ''
    });
  }
}
