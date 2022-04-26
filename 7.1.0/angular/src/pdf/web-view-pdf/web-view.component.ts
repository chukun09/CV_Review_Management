import { Component, ViewChild, OnInit, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';
import WebViewer, { WebViewerInstance } from '@pdftron/webviewer';
import { jsPDF } from "jspdf";
@Component({
  selector: 'web-view',
  templateUrl: './web-view.component.html',
  styleUrls: ['./web-view.component.css']
})
export class WebViewComponent implements OnInit, AfterViewInit {
  @ViewChild('viewer') viewer: ElementRef;
  wvInstance: WebViewerInstance;
  @Output() coreControlsEvent: EventEmitter<string> = new EventEmitter();

  private documentLoaded$: Subject<void>;

  constructor() {
    this.documentLoaded$ = new Subject<void>();
  }

  ngAfterViewInit(): void {
    WebViewer({
      path: '../../assets/lib',
      initialDoc: '../../assets/pdf/webviewer-demo-annotated.pdf'
    }, this.viewer.nativeElement).then(instance => {
      this.wvInstance = instance;
      // instance.UI.setTheme('dark');

      this.coreControlsEvent.emit(instance.UI.LayoutMode.Single);

      const { documentViewer, Annotations, annotationManager } = instance.Core;

      instance.UI.openElements(['notesPanel']);

      documentViewer.addEventListener('annotationsLoaded', () => {
        console.log('annotations loaded');
      });

      documentViewer.addEventListener('documentLoaded', () => {
        this.documentLoaded$.next();
        const rectangleAnnot = new Annotations.RectangleAnnotation({
          PageNumber: 1,
          // values are in page coordinates with (0, 0) in the top left
          X: 100,
          Y: 150,
          Width: 200,
          Height: 50,
          Author: annotationManager.getCurrentUser()
        });
        annotationManager.addAnnotation(rectangleAnnot);
        annotationManager.redrawAnnotation(rectangleAnnot);
      });
    })
  }

  ngOnInit() {
  }
  downloadPDF() {
    let pdf = new jsPDF();
    pdf.html(this.viewer.nativeElement, {
      callback: (pdf) => {
        pdf.save("demo.pdf");
      }
    })
  }

  getDocumentLoadedObservable() {
    return this.documentLoaded$.asObservable();
  }
}
