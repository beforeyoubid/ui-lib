import { RichTextEditor } from '@beforeyoubid/ui-lib/RichTextEditor';

describe('RichTextEditor', () => {
  it('can be imported', () => {
    console.log('RichTextEditor: ');
    console.log(Object.keys(RichTextEditor).join('\n'));
    expect(RichTextEditor).not.toBeNull();
  });
});
