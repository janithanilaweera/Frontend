import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { WholesellerComponent } from './wholeseller/wholeseller.component';
import { ProducerComponent } from './producer/producer.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes =
[
  {path: 'wholeseller', component: WholesellerComponent},
  {path: 'producer', component: ProducerComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'signin', component: RegisterUserComponent},
  {path: 'signup', component: SignupComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
