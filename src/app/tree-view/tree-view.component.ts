import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      
      console.log(this.data)
    }, 1000);
  }

}
