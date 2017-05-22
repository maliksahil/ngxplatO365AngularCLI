import { NgxplatO365AngularCLIPage } from './app.po';

describe('ngxplat-o365-angular-cli App', () => {
  let page: NgxplatO365AngularCLIPage;

  beforeEach(() => {
    page = new NgxplatO365AngularCLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
