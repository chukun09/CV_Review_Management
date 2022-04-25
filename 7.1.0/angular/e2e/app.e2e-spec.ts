import { CVRMTemplatePage } from './app.po';

describe('CVRM App', function() {
  let page: CVRMTemplatePage;

  beforeEach(() => {
    page = new CVRMTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
