import { Component, Input, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { DocumentCollectionItemDirective } from '../document-collection-item.directive';

@Component({
  selector: 'app-document-collection',
  templateUrl: './document-collection.component.html',
  styleUrls: ['./document-collection.component.css']
})
export class DocumentCollectionComponent implements AfterContentInit {
  @ContentChildren(DocumentCollectionItemDirective) private _itemsQuery!: QueryList<DocumentCollectionItemDirective>;
  @Input() header!: string;
  @Input() description!: string;
  private _items: DocumentCollectionItemDirective[] = [];

  get items() {
    return this._items;
  }

  constructor() { }

  ngAfterContentInit(): void {
    this._items = this._itemsQuery.toArray();
  }
}
