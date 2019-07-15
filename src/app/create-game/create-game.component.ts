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
export class CreateGameComponent implements OnInit {

    gameForm: FormGroup;
    game: Game;

    constructor(
        private formBuilder: FormBuilder,
        private gameService: GameService,
        private router: Router
    ) {
    }


    ngOnInit() {
        this.gameForm = this.formBuilder.group({
            title: new FormControl(''),
            genre: new FormControl(''),
            developer: new FormControl(''),
            publisher: new FormControl(''),
            releaseDate: new FormControl(''),
            description: new FormControl(''),
            price: new FormControl(''),
            languages: new FormControl(''),
            pictureURL: new FormControl('')
        });
    }

    onSubmit() {
        if (this.gameForm.valid) {
            const values = this.gameForm.value;
            if (values.id != null) {
                this.gameService.updateGame(values);
                console.log('Jeu mis à jour !');
            } else {
                this.gameService.createGame(values);
                console.log('Jeu créé !');
            }
        }
        this.router.navigate(['/']);
        console.log('ah ah t\'es dedans !');
       }
}
