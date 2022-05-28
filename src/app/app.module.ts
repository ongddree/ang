import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
@NgModule({
  declarations: [AppComponent, ItemDetailComponent, ChildComponent, ParentComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
