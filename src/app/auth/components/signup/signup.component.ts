import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/entities/user';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private router: Router
    
    ) { }

  userForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    //autre écriture du controller => email : new FormControl(null, [Validators, required, Validators.email]])
    password: ['admin1234', [Validators.required, Validators.minLength(6)]],
    first_name: [null, [Validators.required]],
    last_name: [null, [Validators.required]]
  });

  ngOnInit() {
  }

  signup() {

    const newUser = new User(this.userForm.getRawValue());

    this.authService.signup(newUser).subscribe(
      () => {
        //inscription ok
        this.authService.signin(newUser.email, newUser.password).subscribe(
          () => {
            //connexion ok
            this.router.navigate(['dash/home']);
          },
          (err) => {
            //un erreur
          }
        )
      },

      (err) => {
        console.log({err});
        //afficher un message pour indiquer qu'il y a un duplicata
      }
    )

  }

}
