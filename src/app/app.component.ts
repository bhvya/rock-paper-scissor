import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Rock Paper Scissor';
  playerOne: string = '';
  playerTwo: string = 'Computer';
  nameWarning: boolean = false;
  gameScreenDisplay: boolean = false;
  playerOneScore: number = 0;
  playerTwoScore: number = 0;
  playerOneSelection!: string;
  playerTwoSelection!: string;
  result!: string;

  // On button click - Play with computer
  playWithComputer() {
    if (!this.playerOne) {
      this.nameWarning = true;
      console.log(name);
    } else {
      this.nameWarning = false;
      this.gameScreenDisplay = true;
    }
  }

  // Player 1 selection
  pick(selectedOption: string) {
    this.playerOneSelection = selectedOption;
    this.computersPick();
    this.winner();
    console.log(this.playerOneSelection);
    console.log(this.playerTwoSelection);
  }

  // Computer Player Selection
  computersPick() {
    const gameOptions = ['rock', 'paper', 'scissor'];
    const randomSelection = Math.floor(Math.random() * 3);
    this.playerTwoSelection = gameOptions[randomSelection];
  }

  // Select Winner
  winner() {
    // if (this.playerOneSelection === this.playerTwoSelection) {
    //   this.result = "It's a Tie";
    // } else if ((this.playerOneSelection === 'rock' && this.playerTwoSelection === 'scissor')
    // || (this.playerOneSelection === 'paper' && this.playerTwoSelection === 'rock')
    // || (this.playerOneSelection === 'scissor' && this.playerTwoSelection === 'paper')) {
    //   this.result = "You Won";
    //   this.playerOneScore++;
    // } else if ((this.playerOneSelection === 'rock' && this.playerTwoSelection === 'paper')
    // || (this.playerOneSelection === 'paper' && this.playerTwoSelection === 'scissor')
    // || (this.playerOneSelection === 'scissor' && this.playerTwoSelection === 'rock')) {
    //   this.result = "Computer Won";
    //   this.playerTwoScore++;
    // } 
    switch(this.playerOneSelection+this.playerTwoSelection) {
      case 'rockscissor':
      case 'paperrock':
      case 'scissorpaper':
        this.result = "You Won";
        this.playerOneScore++;
        break;
      case 'rockpaper':
      case 'scissorrock':
      case 'paperscissor':
        this.result = "Computer Won";
        this.playerTwoScore++;
        break;
      default:
        this.result = "It's a Tie";
        break;
    }
  }

}
