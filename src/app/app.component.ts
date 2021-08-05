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

  handlingSlideBar(newLimit : number) {
this.limit = newLimit;
  }
  generateWordsString() {
    this.words = words.slice(0,this.limit).join(" ");
    console.log("generate words clicked");
    
  }
}
