import { theme } from '@beforeyoubid/ui-lib/dist/mui-theme';

describe('theme', () => {
  it('can be imported', () => {
    console.log('Theme: ');
    console.log(Object.keys(theme).join('\n'));
    expect(theme).not.toBeNull();
  });
});
