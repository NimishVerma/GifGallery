import { GifsearchPage } from './app.po';

describe('gifsearch App', () => {
  let page: GifsearchPage;

  beforeEach(() => {
    page = new GifsearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
