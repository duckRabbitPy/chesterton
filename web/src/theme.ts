export const theme = {
  cream: '#ececec',
  ink: '#2c2c2c',
  muted: '#6b6b6b',
  card: '#ffffff',
  accent: '#1f6b4a',
  accentMuted: 'rgba(31, 107, 74, 0.2)',
  gift: '#c43b6a',
  giftBg: '#f7d0dc',
  border: '#d8d8d8',
  sans: 'system-ui, sans-serif',
} as const;

export type AppTheme = typeof theme;
