import { Component, Input } from '@angular/core';
import { AppCommonModule } from '../app-common.module';
import { SidebarItem } from 'src/app/docs/items';

@Component({
  selector: 'app-documentation-sidebar',
  templateUrl: './documentation-sidebar.component.html',
  styleUrls: ['./documentation-sidebar.component.css'],
  standalone: true,
  imports: [
    AppCommonModule
  ]
})
export class DocumentationLayoutSidebarComponent {
  @Input() items!: SidebarItem[];
}
