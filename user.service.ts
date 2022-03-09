import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class userService {
  userLoggedIn: boolean;
  constructor(private httpClient: HttpClient) { 
    this.userLoggedIn = false;
  }
  getUserLoggedIn(): any {
    return this.userLoggedIn;
  }
  setUserLoggedIn(): any {
    this.userLoggedIn = true;
  }
  setUserLoggedOut(): any{
    this.userLoggedIn = false;
  }
  fetchDetails() {
    return this.httpClient.get('http://localhost:3000/fetch');
  }
  registerEmp(employee: any) {
    return this.httpClient.post("http://localhost:3000/register", employee);
  }
  getEmployeeByEmailAndPassword(loginForm: any) {
    return this.httpClient.get("http://localhost:3000/login/"+loginForm.email + '/' + loginForm.password).toPromise();
  }
  // deleteEmp(employee: any) {
  //   return this.httpClient.delete("http://localhost:3000/delete/"+employee.email);
  // }
  // updateEmp(employee: any) {
  //   return this.httpClient.put("http://localhost:3000/update", employee);
  // }
}
