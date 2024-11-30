import { UrlFormatterPipe } from './url-formatter.pipe';

describe('UrlFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new UrlFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
