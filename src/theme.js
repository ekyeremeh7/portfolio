export const colors = {
  background: '#faf8f5',
  backgroundAlt: '#f1ede6',
  primary: '#059669',
  secondary: '#d97706',
  onAccent: '#ffffff',
  text: '#1a1a1a',
  textMuted: '#4b5563',
  textSubtle: '#6b7280',
  textFaint: '#9ca3af',
};

export const surfaces = {
  subtle: 'rgba(26, 26, 26, 0.02)',
  card: 'rgba(26, 26, 26, 0.04)',
  raised: 'rgba(26, 26, 26, 0.06)',
  overlay: 'rgba(26, 26, 26, 0.08)',
  header: 'rgba(250, 248, 245, 0.95)',
  headerScrolled: 'rgba(250, 248, 245, 0.98)',
  footer: 'rgba(241, 237, 230, 0.9)',
};

export const borders = {
  subtle: 'rgba(26, 26, 26, 0.1)',
  medium: 'rgba(26, 26, 26, 0.12)',
  strong: 'rgba(26, 26, 26, 0.2)',
  primarySubtle: 'rgba(5, 150, 105, 0.2)',
  primary: 'rgba(5, 150, 105, 0.3)',
};

export const tints = {
  primaryFaint: 'rgba(5, 150, 105, 0.08)',
  primarySoft: 'rgba(5, 150, 105, 0.16)',
  secondaryFaint: 'rgba(217, 119, 6, 0.1)',
};

export const gradients = {
  accent: 'linear-gradient(135deg, #059669, #047857)',
  heading: 'linear-gradient(135deg, #1a1a1a, #059669)',
  page: 'linear-gradient(135deg, #faf8f5 0%, #f1ede6 100%)',
  placeholder: 'linear-gradient(135deg, #e5e0d8, #d6d0c4)',
};

export const shadows = {
  accentSoft: '0 10px 20px rgba(5, 150, 105, 0.2)',
  accentLift: '0 20px 40px rgba(26, 26, 26, 0.08)',
};

export const fonts = {
  heading: "'Fraunces', Georgia, 'Times New Roman', serif",
  body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

export const radii = {
  sm: '8px',
  md: '10px',
  lg: '15px',
  xl: '20px',
  pill: '25px',
  round: '50%',
};

// Written as full at-rules so they can be interpolated directly into
// styled-components template literals.
export const media = {
  tablet: '@media (max-width: 768px)',
  mobile: '@media (max-width: 480px)',
};

/**
 * Clips a gradient to the text it fills. Needs the -webkit- prefixed
 * properties for Safari and Chrome.
 */
export const gradientText = (gradient = gradients.heading) => `
  background: ${gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;
