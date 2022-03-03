import { Animated, StyleProp, ViewStyle } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export interface TabViewBaseProps {
    value?: number;
    onChange?: (value: number) => any;
    animationType?: 'spring' | 'timing';
    animationConfig?: Omit<Animated.SpringAnimationConfig & Animated.TimingAnimationConfig, 'toValue'>;
    containerStyle?: StyleProp<ViewStyle>;
    tabItemContainerStyle?: StyleProp<ViewStyle>;
}
export declare const TabViewBase: RneFunctionComponent<TabViewBaseProps>;
