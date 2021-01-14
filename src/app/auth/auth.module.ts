import { NgModule } from '@angular/core';
import { SigninComponent } from './components/signin/signin.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { SharedModule } from '../shared/shared.module';
import { UserPartsModule } from '../shared/user-parts/user-parts.module';


@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    UserPartsModule
  ]
})
export class AuthModule { }
