import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { GameService } from '../service/game.service';
import { Game } from '../model/game.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent {

    GameForm: FormGroup;
    game: Game;

  constructor(
      private formBuilder: FormBuilder,
      private GameService: GameService,
      private router: Router
  ) {}


  ngOnInit() {
    this.GameForm = this.formBuilder.group({
        title: new FormControl(''),
        genre: new FormControl(''),
        developer: new FormControl(''),
        publisher: new FormControl(''),
        releaseDate: new FormControl(''),
        description: new FormControl(''),
        price: new FormControl(''),
        languages: new FormControl('')
    });
  }

  onSubmit() {
      if (this.GameForm.valid) {
          const values = this.GameForm.value;
          if (this.game.id != null) {
              this.GameService.updateGame(values);
          } else {
              this.GameService.createGame(values);
          }
          this.router.navigate(['/']);
      }
  }
}
