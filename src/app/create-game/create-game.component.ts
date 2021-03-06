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
    id;

    constructor(
        private formBuilder: FormBuilder,
        private gameService: GameService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id != null) {
            this.game = this.gameService.getOneById(this.id);
            this.gameForm = this.formBuilder.group({
                title: this.game.title,
                genre: this.game.genre,
                developer: this.game.developer,
                publisher: this.game.publisher,
                releaseDate: this.game.releaseDate,
                description: this.game.description,
                price: this.game.price,
                languages: this.game.languages,
                pictureURL: this.game.pictureURL
            });
        } else {
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
    }

    onSubmit() {
        if (this.gameForm.valid) {
            const values = {
                id: this.id,
                ...this.gameForm.value
            };
            if (values.id != null) {
                this.gameService.updateGame(values);
                console.log('Jeu mis à jour !');
            } else {
                this.gameService.createGame(values);
                console.log('Jeu créé !');
            }
        }
        this.router.navigate(['/']);
       }
}
