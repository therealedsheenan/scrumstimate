import { ScrumstimatePage } from './app.po';

describe('scrumstimate App', function() {
  let page: ScrumstimatePage;

  beforeEach(() => {
    page = new ScrumstimatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
