import { Ng4CrashCoursePage } from './app.po';

describe('ng4-crash-course App', () => {
  let page: Ng4CrashCoursePage;

  beforeEach(() => {
    page = new Ng4CrashCoursePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
