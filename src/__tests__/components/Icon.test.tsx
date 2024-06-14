import { render } from '@testing-library/react';

import { Icon } from '../../components/Icon';
import { GameIconsPerson, PDF, ExclamationCircle, SquareRoundedChevronDownFilled } from '../../components/Icon/Custom';
import { ThemedApp } from '../../stories/styles';

describe('Icon', () => {
  test('renders custom PDF icon', () => {
    render(
      <ThemedApp>
        <Icon icon={PDF} color="dark100" />
      </ThemedApp>
    );
  });
  test('renders custom GameIconsPerson icon', () => {
    render(
      <ThemedApp>
        <Icon icon={GameIconsPerson} color="dark100" />
      </ThemedApp>
    );
  });
  test('renders custom ExclamationCircle icon', () => {
    render(
      <ThemedApp>
        <Icon icon={ExclamationCircle} color="dark100" />
      </ThemedApp>
    );
  });
  test('renders custom SquareRoundedChevronDownFilled icon', () => {
    render(
      <ThemedApp>
        <Icon icon={SquareRoundedChevronDownFilled} color="dark100" />
      </ThemedApp>
    );
  });
});
