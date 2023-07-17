import * as UI from '@beforeyoubid/ui-lib';

describe('import', () => {
  it('export has some exports', () => {
    console.log('Keys: ');
    console.log(Object.keys(UI).join('\n'));
    expect(Object.keys(UI).length).toBeGreaterThan(0);
  });
});
