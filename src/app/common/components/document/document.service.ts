import { Injectable, signal } from '@angular/core';
import { DocumentComponent } from './document/document.component';

@Injectable({ providedIn: 'root' })
export class DocumentService {
  document = signal<DocumentComponent | undefined>(undefined);
}
