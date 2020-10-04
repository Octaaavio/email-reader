import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { EmailComponent } from './components/email/email.component';
import { EmailListComponent } from './components/email-list/email-list.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmailFilterPipe } from './pipes/email-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmailFormComponent,
    TwoWayBindingComponent,
    EmailComponent,
    EmailListComponent,
    NavbarComponent,
    EmailFilterPipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
