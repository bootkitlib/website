import { Input, TemplateRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[app-document-collection-item]',
})
export class DocumentCollectionItemDirective  {
  @Input() title!: string;

  constructor(
    public templateRef: TemplateRef<any>) {
  }


}
