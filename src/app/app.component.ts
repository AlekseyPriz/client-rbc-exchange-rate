import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  public courses = {};

  ngOnInit(): void {
    this.httpClient.get('http://localhost:3000/courses')
      .subscribe(
        (response) => this.courses = response,
        (err) => console.error(err)
      );
  }


}

