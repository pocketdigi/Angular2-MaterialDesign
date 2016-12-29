import { DdlwechatPage } from './app.po';

describe('ddlwechat App', function() {
  let page: DdlwechatPage;

  beforeEach(() => {
    page = new DdlwechatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
