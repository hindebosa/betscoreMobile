import React, {ReactNode} from 'react';
import {theme as defaultTheme} from '../theme/theme';

// Define the type for the theme
type Theme = typeof defaultTheme;

// Define the type for the context value
interface ThemeContextValue {
  theme: Theme;
}

export const ThemeContext = React.createContext<ThemeContextValue>({
  theme: defaultTheme,
});

// Define the props for the ThemeProvider
interface ThemeProviderProps {
  children: ReactNode;
  theme: Theme;
}

// Create the ThemeProvider component with typed props
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme,
}) => {
  return (
    <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>
  );
};

// Create the useTheme hook with the correct return type
export default function useTheme(): Theme {
  const {theme} = React.useContext(ThemeContext);
  return theme;
}
