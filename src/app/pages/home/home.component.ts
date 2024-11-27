import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private title: Title,
    private meta: Meta,
    ) {
    title.setTitle('Angular BootKit - Angular + Bootstrap mixture');
    meta.updateTag({name: 'description', content: 'BootKit is a Bootstrap-based, Lightweight and pure Angular Component|Infrastructure library.' });
  }
}
