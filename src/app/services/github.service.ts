import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getUserDetails(userName: string){
    return this.http.get(`https://api.github.com/users/${userName}`);
  }

  // tslint:disable-next-line:typedef
  getRepos(repoUrl: string){
    return this.http.get(repoUrl);
  }
}
