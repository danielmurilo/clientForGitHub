import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GitHubRepo } from '../interfaces/gitHubRepo';
import { GitHubUser } from '../interfaces/gitHubUser';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  private readonly baseURL: string = 'https://api.github.com/users/'

  constructor(
    private http: HttpClient
  ) { }

  procurarUsuario(userName: string){
    return this.http.get<GitHubUser>(this.baseURL + userName)
  }

  procurarRepos(userName: string){
    return this.http.get<GitHubRepo[]>(this.baseURL + userName + '/repos')
  }
}

