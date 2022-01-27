import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PeopleModel } from 'src/app/models/people.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContactService {


  public _people: BehaviorSubject<PeopleModel | null> = new BehaviorSubject(null);
  constructor(private http: HttpClient) { }

  get people$(): Observable<PeopleModel>
  {
      return this._people.asObservable();
  }

  sendMessage(formData: any): Observable<PeopleModel>
  {
      return this.http.post<PeopleModel>(`${environment.backend}/people`, formData).pipe(
          tap((response) => {
              return response;
          })
      );
  }

}