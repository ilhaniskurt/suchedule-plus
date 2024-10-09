// Don't change these as they are required types in implementation
const Themes = ["light", "dark", "system"] as const;

// Add custom theme names here and create layers at globals.css with corresponding names
// Modify @/components/ui/theme-selector if you want custom icon for custom themes
// Default icon is same as light theme icon
const ExtendedThemes = [...Themes] as const; // [...Themes, "custom"]

type ThemeType = (typeof ExtendedThemes)[number];

export default ThemeType;
export { ExtendedThemes as ThemeList };
