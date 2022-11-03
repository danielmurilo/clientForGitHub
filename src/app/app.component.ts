import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GitHubRepo } from './interfaces/gitHubRepo';
import { GitHubUser } from './interfaces/gitHubUser';
import { GithubApiService } from './services/github-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  githubForm: FormGroup = this.fb.group({
    username: ['', [ Validators.required ]]
  })

  gUser!: GitHubUser
  gRepos!: GitHubRepo[]

  constructor(
    private fb: FormBuilder,
    private gitHubService: GithubApiService
  ) {}

  procurar(){
    const userName = this.githubForm.get('username')?.value
    this.gitHubService.procurarUsuario(userName).subscribe(
      (user) => { 
        this.gUser = user
      }      
    )
    this.procurarRepos()
  }

  procurarRepos(){
    const userName = this.githubForm.get('username')?.value
    this.gitHubService.procurarRepos(userName).subscribe(
      (repos) => { 
        this.gRepos = repos
      }      
    )
  }
}
