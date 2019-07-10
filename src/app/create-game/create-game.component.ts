import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {

  createGameForm;

  constructor(
      private formBuilder: FormBuilder,
  ) {
    this.createGameForm = this.formBuilder.group({
      title: '',
      description: '',
      editor: '',
      price: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(newGameData) {
    console.warn('Your game is now available in the store !');
  }

}
