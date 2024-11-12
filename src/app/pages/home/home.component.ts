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
    title.setTitle('Light UI - Bootstrap-Based Angular Component Library and Infrastructure');
    meta.updateTag({name: 'description', content: 'LightUI is a Bootstrap-based UI library for developing Angular projects.' });
  }
}
