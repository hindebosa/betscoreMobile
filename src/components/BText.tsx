import {useTheme} from '@react-navigation/native';
import {ColorValue, StyleProp, Text, TextProps, TextStyle} from 'react-native';

const weightToMetropolisFont = {
  light: 'Metropolis-Light', // 300
  regular: 'Metropolis-Regular', // 400
  medium: 'Metropolis-Medium', // 500
  semiBold: 'Metropolis-SemiBold', // 600
};

export type FontWeight = keyof typeof weightToMetropolisFont;

interface Props {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  underlineColor?: ColorValue;
  size?: number;
  color?: ColorValue;
  weight?: FontWeight;
}

export type StyledTextProps = Props & TextProps;

const StyledText: React.FC<StyledTextProps> = ({
  children,
  style,
  bold,
  size,
  color,
  weight = 'regular',
}) => {
  const actualStyle: StyleProp<TextStyle> = {
    fontSize: (style as TextStyle)?.fontSize || size,
    fontFamily: weightToMetropolisFont[bold ? 'semiBold' : weight],
  };
  actualStyle.color = color;
  return <Text style={[style, actualStyle]}>{children}</Text>;
};

export default StyledText;
