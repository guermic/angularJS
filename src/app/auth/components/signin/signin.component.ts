import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/core/services/session.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {


  constructor(

    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  
  ) {
    this.authService.signout()
   }

  userForm = this.fb.group({
    email: ['samuel@wecolearn.com', [Validators.required, Validators.email]],
    //autre écriture du controller => email : new FormControl(null, [Validators, required, Validators.email]])
    password: ['admin1234', [Validators.required, Validators.minLength(6)]]
  });

  ngOnInit() {
  }

  get emailControl() {
    return this.userForm.get('email')
  }

  get passwordControl() {
    return this.userForm.get('password')
  }

  signin() {
    console.log('submited :');
    console.log(this.userForm.getRawValue())
    this.authService.signin(
      this.emailControl.value,
      this.passwordControl.value
    ).subscribe((result) => {
      //execute l'observable signin et attends les réponses de la requête
      //console.log( {result} );

      //connexion réussi
      this.router.navigate(['dash/home'])

    },
    (err) => {
      //afficher une erreur de connexion
    }
    );
  }

}
