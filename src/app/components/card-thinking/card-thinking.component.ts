import { Thinking } from '../../interfaces/thinking';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-thinking',
  templateUrl: './card-thinking.component.html',
  styleUrls: ['./card-thinking.component.css']
})
export class CardThinkingComponent implements OnInit {

  @Input() thinking: Thinking = {
    id: 0,
    content: '',
    author: '',
    model: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  widthThinking(): string {
    if(this.thinking.content.length >= 256) {
      return 'thinking-g'
    }
    return 'thinking-p'
  }

}
