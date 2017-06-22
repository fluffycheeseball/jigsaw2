import { JigsawAppPage } from './app.po';

describe('jigsaw-app App', () => {
  let page: JigsawAppPage;

  beforeEach(() => {
    page = new JigsawAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
