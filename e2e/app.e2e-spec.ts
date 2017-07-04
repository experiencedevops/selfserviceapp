import { SelfServiceAppPage } from './app.po';

describe('self-service-app App', () => {
  let page: SelfServiceAppPage;

  beforeEach(() => {
    page = new SelfServiceAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
