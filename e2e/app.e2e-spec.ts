import { TodostackTest1Page } from './app.po';

describe('todostack-test1 App', () => {
  let page: TodostackTest1Page;

  beforeEach(() => {
    page = new TodostackTest1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
