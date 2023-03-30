import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { FormThinkingComponent } from './components/form-thinking/form-thinking.component';
import { ListThinkingComponent } from './components/list-thinking/list-thinking.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'thinking',
    pathMatch: 'full'
  },
  {
    path: 'thinking/create',
    component: FormThinkingComponent
  },
  {
    path: 'thinking',
    component: ListThinkingComponent
  },
  {
    path: 'thinking/update/:id',
    component: FormThinkingComponent
  },
  {
    path: 'thinking/delete/:id',
    component: ModalDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
