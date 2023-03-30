import { Router, ActivatedRoute } from '@angular/router';
import { ThinkingService } from './../../services/thinking.service';
import { Thinking } from '../../interfaces/thinking';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-thinking',
  templateUrl: './form-thinking.component.html',
  styleUrls: ['./form-thinking.component.css']
})
export class FormThinkingComponent implements OnInit {

  thinking: Thinking = {
    content: '',
    author: '',
    model: 1
  }

  constructor(
    private service: ThinkingService, 
    private router: Router, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.findById(parseInt(id!)).subscribe((thinking) =>
        this.thinking = thinking
      )
    }
  }

  saveThinking() {
    if (this.thinking.id) {
      this.service.update(this.thinking).subscribe();
    } else {
      this.service.create(this.thinking).subscribe();
    }

    this.router.navigate(['/thinking']);
  }

  cancelThinking() {
    this.router.navigate(['/thinking']);
  }
}
