import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class TodoService {

  constructor(private http : Http) { }

  getTodoList(){
    return this.http.get("https://jsonplaceholder.typicode.com/todos").pipe(map(res => res.json()));
  }
  
}
