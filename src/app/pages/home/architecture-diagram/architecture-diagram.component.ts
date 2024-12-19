import { Component } from '@angular/core';

@Component({
  selector: 'app-architecture-diagram',
  templateUrl: './architecture-diagram.component.html',
  styleUrls: ['./architecture-diagram.component.scss']
})
export class ArchitectureDiagramComponent {
  bootstrapComponents = [
    { name: 'Accordion', url: 'accordion' },
    { name: 'Card', url: 'card' },
    { name: 'Dropdown', url: 'dropdown' },
    { name: 'Tab', url: 'tab' },
    { name: 'Code', url: 'code' },
    { name: 'Alerts', url: 'Alerts' },
    { name: 'Badge', url: 'Badge' },
    { name: 'Breadcrumb', url: 'Breadcrumb' },
    { name: 'Buttons', url: 'Buttons' },
    { name: 'Button group', url: 'Buttongroup' },
    { name: 'Carousel', url: 'Carousel' },
    { name: 'Collapse', url: 'collapse' },
    { name: 'List group', url: 'List-group' },
    { name: 'Modal', url: 'Modal' },
    { name: 'Offcanvas', url: 'Offcanvas' },
    { name: 'Pagination', url: 'Pagination' },
    { name: 'Placeholders', url: 'Placeholders' },
    { name: 'Popover', url: 'popover' },
    { name: 'Spinners', url: 'Spinners' },
    { name: 'Toasts', url: 'toasts' },
    { name: 'Tooltip', url: 'tooltip' },
  ];

  uiInfra = [
    {title: 'Validation', url: ''},
    {title: 'Localization', url: ''},
    {title: 'Security', url: ''},
    {title: 'Animation Helpers', url: ''},
    {title: 'Components', url: ''},
    {title: 'Animation Helpers', url: ''},
    {title: 'Responsiveness', url: ''},
  ];


  constructor() {
  }
}
