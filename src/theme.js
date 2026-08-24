export const colors = {
  background: '#0a0a0a',
  backgroundAlt: '#1a1a1a',
  primary: '#00d4ff',
  secondary: '#ff0096',
  onAccent: '#000',
  text: '#ffffff',
  textMuted: '#ccc',
  textSubtle: '#888',
  textFaint: '#666',
};

export const surfaces = {
  subtle: 'rgba(255, 255, 255, 0.02)',
  card: 'rgba(255, 255, 255, 0.05)',
  raised: 'rgba(255, 255, 255, 0.08)',
  overlay: 'rgba(255, 255, 255, 0.1)',
  header: 'rgba(10, 10, 10, 0.95)',
  headerScrolled: 'rgba(10, 10, 10, 0.98)',
  footer: 'rgba(0, 0, 0, 0.8)',
};

export const borders = {
  subtle: 'rgba(255, 255, 255, 0.1)',
  medium: 'rgba(255, 255, 255, 0.12)',
  strong: 'rgba(255, 255, 255, 0.2)',
  primarySubtle: 'rgba(0, 212, 255, 0.2)',
  primary: 'rgba(0, 212, 255, 0.3)',
};

export const tints = {
  primaryFaint: 'rgba(0, 212, 255, 0.1)',
  primarySoft: 'rgba(0, 212, 255, 0.2)',
  secondaryFaint: 'rgba(255, 0, 150, 0.1)',
};

export const gradients = {
  accent: 'linear-gradient(135deg, #00d4ff, #ff0096)',
  heading: 'linear-gradient(135deg, #ffffff, #00d4ff)',
  page: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
  placeholder: 'linear-gradient(135deg, #333, #555)',
};

export const shadows = {
  accentSoft: '0 10px 20px rgba(0, 212, 255, 0.3)',
  accentLift: '0 20px 40px rgba(0, 212, 255, 0.1)',
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
