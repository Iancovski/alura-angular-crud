import { ThinkingService } from './../../services/thinking.service';
import { Thinking } from './../../interfaces/thinking';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})

export class ModalDeleteComponent implements OnInit {
  thinking: Thinking = {
    id: 0,
    content: '',
    author: '',
    model: 0
  }

  constructor(
    private service: ThinkingService, 
    private router: Router, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.findById(parseInt(id!)).subscribe((thinking) => {
      this.thinking = thinking;
    })
  }

  delete() {
    if (this.thinking.id) {
      this.service.delete(this.thinking.id).subscribe(() => {
        this.router.navigate(['/thinking'])
      })
    }
  }

  cancel() {
    this.router.navigate(['/thinking']) 
  }
}
