import { render } from '@testing-library/react';

import { Modal } from '../../components/Modal';
import { ThemedApp } from '../../stories/styles';

describe('Modal', () => {
  test('renders component', () => {
    render(
      <ThemedApp>
        <Modal title="Some title" open onClose={console.log}>
          Some content
        </Modal>
      </ThemedApp>
    );
  });
});
