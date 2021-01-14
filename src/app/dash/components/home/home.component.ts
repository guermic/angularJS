import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from '../../../core/entities/user'
import {MatchService} from '../../../core/services/match.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //ajout du dollars pour indiquer que c'est un observable
  matchs$: Observable<User[]>;

  constructor(
    private matchService: MatchService
  ) { 
    this.matchs$ = matchService.get();
  }

  ngOnInit() {
  }

  get user(): User {
    return AuthService.user;
  }


}
