import { Component, ContentChild, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { Config } from './models/config.model';
import { CollapsibleWrapper } from './models/collapsible.interface';
import { CollapsibleHelper } from './collapsible.helper';


@Component({
  selector: 'app-collapsible-wrapper',
  templateUrl: './collapsible-wrapper.component.html',
  styleUrls: ['./collapsible-wrapper.component.css']
})
export class CollapsibleWrapperComponent implements OnInit {

  @ContentChild(TemplateRef) templateWrapper: TemplateRef<any>;

  @Input() itemsToCollapse: any[];
  @Input() config: Config;

  public collapsibleWrapper: CollapsibleWrapper<any> ={
    collapseAll: true,
    childrens: []
  };

  constructor() { 

    if (!this.config) {
      this.config = { multi: false };
    }

  }
  
  ngOnInit(): void {
    this.prepareItems();
  }

  prepareItems(): void {
    this.itemsToCollapse?.forEach((item: any) => {
       const collapsibleObject = new CollapsibleHelper(item.name, undefined, false, item.something);
       this.collapsibleWrapper.childrens.push(collapsibleObject);
    }); 
  }

  toggle(index): void {

    if (!this.config.multi) {
      this.collapsibleWrapper?.childrens.filter(
        (children, i) => i !== index && children.active
      ).forEach(children => children.active = !children.active);
    }

    this.collapsibleWrapper.childrens[index].active = !this.collapsibleWrapper.childrens[index].active;
  }




}
