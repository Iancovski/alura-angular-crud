import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormThinkingComponent } from './components/form-thinking/form-thinking.component';
import { ListThinkingComponent } from './components/list-thinking/list-thinking.component';
import { CardThinkingComponent } from './components/card-thinking/card-thinking.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormThinkingComponent,
    ListThinkingComponent,
    CardThinkingComponent,
    ModalDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
