import { ContentChild, EventEmitter, Output, TemplateRef } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { Config, Menu } from '../accordion/types';
@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.css']
})
export class CollapsibleComponent implements OnInit {

  @Input() options;
  @Input() menu: Menu<any>;
  config: Config;
  @Output() toggleEvent = new EventEmitter<boolean>();
  @ContentChild(TemplateRef) template: TemplateRef<any>;
  
  ngOnInit() {
    this.config = this.mergeConfig(this.options);
  }

  mergeConfig(options: Config) {
    // 기본 옵션
    const config = {
      // selector: '#accordion',
      multi: true
    };

    return { ...config, ...options };
  }

  toggle() {
   
   this.toggleEvent.emit()
  }
}
