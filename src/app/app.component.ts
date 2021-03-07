import { Component, OnInit } from '@angular/core';
import { Config } from './collapsible/types';
import { data, Categoria } from './server/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-accordion';
  options: Config = { multi: false };

  data: Categoria[] = data;
  ngOnInit(): void {
    console.log(data);
  }
}
