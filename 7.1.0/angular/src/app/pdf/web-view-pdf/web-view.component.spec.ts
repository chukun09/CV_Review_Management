// import { WebViewComponent } from "./web-view.component";
// import { TestBed, waitForAsync } from "@angular/core/testing";

// describe("WebViewComponent", () => {
//   beforeEach(
//     waitForAsync(() => {
//       TestBed.configureTestingModule({
//         declarations: [WebViewComponent],
//       }).compileComponents();
//     })
//   );

//   it('should create the app', () => { // 4
//     const fixture = TestBed.createComponent(WebViewComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it('should get CoreControls', (done: DoneFn) => {
//     const fixture = TestBed.createComponent(WebViewComponent);
//     const app = fixture.debugElement.componentInstance as WebViewComponent;
//     fixture.detectChanges();
//     spyOn(app.coreControlsEvent, 'emit');
//     // wait for WV to finish loading document first before checking
//     app.getDocumentLoadedObservable().subscribe(() => {
//       expect(app.coreControlsEvent.emit).toHaveBeenCalledWith('Single');
//       done();
//     });
//   });
// });
