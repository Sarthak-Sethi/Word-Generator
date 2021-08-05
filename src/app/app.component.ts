import { Component } from '@angular/core';
import words from 'src/utils/words';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';
  limit:number = 10;
  words : string = '';

  handlingSlideBar(newLimit : Event) {
  this.limit = parseInt((<HTMLInputElement>newLimit.target).value);
  }
  generateWordsString() {
    this.words =   this.shuffle(words).slice(0,this.limit).join(" ");
    console.log("generate words clicked");
    
  }
  shuffle(array:string []) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
}
