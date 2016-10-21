import { PostAddAndVoteAppPage } from './app.po';

describe('post-add-and-vote-app App', function() {
  let page: PostAddAndVoteAppPage;

  beforeEach(() => {
    page = new PostAddAndVoteAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
