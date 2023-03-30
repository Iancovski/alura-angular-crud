import { ThinkingService } from './../../services/thinking.service';
import { Component, OnInit } from '@angular/core';
import { Thinking } from '../../interfaces/thinking';

@Component({
  selector: 'app-list-thinking',
  templateUrl: './list-thinking.component.html',
  styleUrls: ['./list-thinking.component.css']
})
export class ListThinkingComponent implements OnInit {

  arrayThinking: Thinking[] = [];

  constructor(private service: ThinkingService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe((arrayThinking) => {
      this.arrayThinking = arrayThinking
    });
  }
}

