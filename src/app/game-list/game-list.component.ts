import { Component, OnInit } from '@angular/core';
import { GameService } from '../service/game.service';
import { Game } from '../model/game.model';

@Component({
  selector: 'app-video-game',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: Game[];
  id;

  constructor(
      private gameService: GameService,
  ) { this.obligatedGames(); }

  ngOnInit() {
    this.gameService.getAll().subscribe(games => {
      this.games = games;
    });
  }

  obligatedGames() {
    const gameOne = [
      this.games.title = 'Dragon Age : Origins',
      this.genre = 'Role Play',
      games.developer = 'BioWare',
      this.publisher = 'Electronic Arts',
      this.releaseDate = '6 Nov 2009',
      this.description = 'You are a Grey Warden, one of the last of a legendary order of guardians. ' +
          'With the return of an ancient foe and the kingdom engulfed in civil war, you have been chosen by fate to unite the shattered' +
          ' lands and slay the archdemon once and for all.\n' +
          '\n' +
          'A Stunning World to Explore\n' +
          '\n' +
          '    BioWare’s deepest universe to date with over 80 hours of gameplay and more than double the size and scope of Mass Effect\n' +
          '    Travel throughout dozens of environments and fully immerse yourself in a ' +
          'shattered world that is on the brink of utter annihilation\n' +
          '    An epic story that is completely shaped and reactive to your play style\n' +
          '\n' +
          'Complex Moral Choices\n' +
          '\n' +
          '    There are no easy choices\n' +
          '    Tailor your Dragon Age: Origins experience from the very beginning by choose from six different Origin Stories\n' +
          '    Decide how to handle complex issues like murder, genocide, betrayal, ' +
          'and the possession/sacrificing of children without the security of a good/bad slider to tell you what to do\n' +
          '\n' +
          'Full Character Customization\n' +
          '\n' +
          '    Sculpt your hero in your own image or fantasy\n' +
          '    Elaborate character creator allows you to create your own hero unique from anyone else\n' +
          '    Shape your character’s personality and morality based on the choices you make throughout the game\n' +
          '\n' +
          'Engage in Bone-Crushing, Visceral Combat\n' +
          '\n' +
          '    Battle against massive and terrifying creatures\n' +
          '    Unleash legendary powers and choose from over 100 different magical spells and skills\n' +
          '    Experience the adrenaline rush of brutal combat, beheading your ' +
          'foes or casting spells that make enemies explode from within',
      this.price = '30',
      this.pictureURL = 'https://vignette.wikia.nocookie.net/dragonage/images/e/e6/RedDragonwithlogo.png/' +
          'revision/latest?cb=20140702212511&path-prefix=fr',
      this.languages = 'English, French, German'
    ];

    this.gameService.createGame(gameOne);


    const gameTwo = [
      this.title = 'Dragon Age II',
      this.genre = 'Role Play',
      this.developer = 'BioWare',
      this.publisher = 'Electronic Arts',
      this.releaseDate = '23 Jan 2013',
      this.description = 'You are Hawke, a refugee seeking to escape the darkspawn-plagued land of ' +
          'Felderen and become Champion of Kirkwall. Rise to power and fight epic battles while making ' +
          'decisions that determine the course of civilization. Your pursuit of power begins now. ' +
          'How will you seal your place in history?' +
          ' Game Features:' +
          ' Cinematic storytelling. Experience a decade\'s worth of battles and intrigue thanks to a ' +
          'nonlinear narrative that keeps the action coming. A redesigned dialogue system gives more ' +
          'context to your decisions and helps players create a fully realized, multi-dimensional character. ' +
          'Customize your fight. Dozens of spells and three battle companions give players endless options ' +
          'in battle. Stay in the moment with fast-paced action combat, or pause the battle and make ' +
          'every move count by issuing individual orders.' +
          'Make bigger moves. Your actions carry greater weight than ever and you\'ll need to think ' +
          'long-term because you have an entire decade to reach your goal. Every dialogue and battle decision ' +
          'affects your standing with party members. Maximizing your friendship opens up more options.',
      this.price = '30',
      this.pictureURL = 'https://vignette.wikia.nocookie.net/dragonage/images/a/ac/Dragon_Age_II_Logo.png/revision/' +
          'latest?cb=20150205164627&path-prefix=fr',
      this.languages = 'English, French, German'
    ];

    this.gameService.createGame(gameTwo);


    const gameThree = [
      this.title = 'Dragon Age : Inquisition',
      this.genre = 'Role Play',
      this.developer = 'BioWare',
      this.publisher = 'Electronic Arts',
      this.releaseDate = '20 Nov 2014',
      this.description = 'When the sky opens up and rains down chaos, the world needs heroes. Become the savior of Thedas in ' +
          'Dragon Age: Inquisition. You are the Inquisitor, tasked with saving the world from itself. But the road ahead is ' +
          'paved with difficult decisions. Thedas is a land of strife. Factions constantly war with each other even as a larger demonic ' +
          'invasion has begun. And you? You and your band of champions are the only ones who can hold it together.' +
          ' It’s your job to lead them… or fall.' +
          ' Enthralling, Choice-driven Narrative – You’re not just deciding who to send into ' +
          'which battle in Inquisition, you’re making important decisions that shape the future of Thedas. ' +
          'Each choice carries weight, and your actions can lead to a variety of outcomes. Inquisition is a highly ' +
          'personalized journey, where one wrong move could set in motion a series of events that alter the physical aspects ' +
          'of the world itself, making your Thedas – and your heroes – feel truly unique.' +
          ' A Massive World to Discover – The world of Thedas has never been bigger or more detailed; ' +
          'it’s wide open, and ripe for exploration. Discover enemy keeps ripe for the taking. Unearth hidden caves filled ' +
          'with lurking creatures. Thedas is vast and dangerous, but uncovering its secrets can spell the difference ' +
          'between victory and defeat. Intense, Strategic Combat – There’s no wrong way to play Dragon Age: Inquisition… ' +
          'except for the way that gets you killed. Fortunately, the optional strategic view gives you a god’s-eye ' +
          'vantage on battle. Time stops while you plan in this view, but if that’s not your style, ' +
          'you can just barrel ahead, crossbows blazing. ',
      this.price = '30',
      this.pictureURL = 'https://images5.alphacoders.com/556/556193.jpg',
      this.languages = 'English, French, German'
    ];

    this.gameService.createGame(gameThree);

  }
}
