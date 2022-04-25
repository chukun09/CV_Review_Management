import { CV_Review_ManagementTemplatePage } from './app.po';

describe('CV_Review_Management App', function() {
  let page: CV_Review_ManagementTemplatePage;

  beforeEach(() => {
    page = new CV_Review_ManagementTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
