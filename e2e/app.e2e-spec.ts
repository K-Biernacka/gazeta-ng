import { GazetaNgPage } from './app.po';

describe('gazeta-ng App', () => {
  let page: GazetaNgPage;

  beforeEach(() => {
    page = new GazetaNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
