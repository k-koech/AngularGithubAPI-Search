import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  search(searchTerm: string)
  {
    if(searchTerm !== "")
    {
      this.dataService.searchGithubUser(searchTerm);
      // this.dataService.getGithubRepo(searchTerm)
    }
  }
}
