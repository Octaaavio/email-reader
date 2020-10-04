import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { EmailListComponent } from './components/email-list/email-list.component';
import { EmailComponent } from './components/email/email.component';

const routes: Routes = [
  {path: '', component: EmailListComponent},
  {path: 'compose-email', component: EmailFormComponent},
  {path: 'view-email', component: EmailComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
