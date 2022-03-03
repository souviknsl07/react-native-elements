import { StyleProp, ViewStyle } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export interface CardBaseProps {
    containerStyle?: StyleProp<ViewStyle>;
    wrapperStyle?: StyleProp<ViewStyle>;
}
export declare const CardBase: RneFunctionComponent<CardBaseProps>;
