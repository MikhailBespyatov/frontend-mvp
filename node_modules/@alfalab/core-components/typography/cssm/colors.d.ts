declare const colors: readonly ["tertiary", "disabled", "accent", "primary", "attention", "positive", "secondary", "tertiary-inverted", "primary-inverted", "secondary-inverted", "link", "negative"];
type Color = typeof colors[number];
export { colors, Color };
