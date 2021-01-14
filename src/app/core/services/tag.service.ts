import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

// service pour récupérer les tags des utilisateurs

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(

    private httpClient: HttpClient
  ) { }

  get(): Observable<any> {
    return this.httpClient.get(
      `${environment.api}/api/tag/find`

    )
  };

}
