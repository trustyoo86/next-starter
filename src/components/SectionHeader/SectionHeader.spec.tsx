import { render } from '@testing-library/react';

// components
import SectionHeader from '../SectionHeader';

describe('[SectionHeader] 테스트', () => {
  describe('렌더링 테스트', () => {
    test('렌더링이 정상적으로 진행된다.', () => {
      const { getByTestId } = render(<SectionHeader />);
      expect(getByTestId('section-header')).toBeTruthy();
    });
  });
});
