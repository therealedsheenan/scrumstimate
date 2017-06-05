import { ScrumsimatePage } from './app.po';

describe('scrumsimate App', () => {
  let page: ScrumsimatePage;

  beforeEach(() => {
    page = new ScrumsimatePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
