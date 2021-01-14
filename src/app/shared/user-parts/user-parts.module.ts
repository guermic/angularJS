import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailFormFieldComponent } from './components/email-form-field/email-form-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule } from '@angular/material';
import { PasswordFormFieldComponent } from './components/password-form-field/password-form-field.component';
import { FirstnameFormFieldComponent } from './components/firstname-form-field/firstname-form-field.component';
import { LastnameFormFieldComponent } from './components/lastname-form-field/lastname-form-field.component';



@NgModule({
  declarations: [EmailFormFieldComponent, PasswordFormFieldComponent, FirstnameFormFieldComponent, LastnameFormFieldComponent],
  exports: [
    EmailFormFieldComponent,
    PasswordFormFieldComponent,
    LastnameFormFieldComponent,
    FirstnameFormFieldComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class UserPartsModule { }
