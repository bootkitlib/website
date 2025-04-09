import { InjectionToken } from "@angular/core";

export interface AppDocument {
  header: string;
  description: string;
  sections: AppDocumentSection[];
}

export interface AppDocumentSection {
  id: string;
  header: string;
}
