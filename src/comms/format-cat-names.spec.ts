import { formatCatNames } from './format-cat-names';

describe('formatCatNames', () => {
  it('returns a single name', () => {
    expect(formatCatNames(['Pip'])).toBe('Pip');
  });

  it('joins two names with and', () => {
    expect(formatCatNames(['Pip', 'Noodle'])).toBe('Pip and Noodle');
  });

  it('joins three names with commas and no Oxford comma', () => {
    expect(formatCatNames(['Pip', 'Noodle', 'Miso'])).toBe(
      'Pip, Noodle and Miso',
    );
  });
});
