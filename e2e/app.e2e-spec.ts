import { NG4TodoPage } from './app.po';

describe('ng4-todo App', () => {
  let page: NG4TodoPage;

  beforeEach(() => {
    page = new NG4TodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
