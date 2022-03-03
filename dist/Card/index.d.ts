/// <reference types="react" />
import { CardBaseProps } from '@react-native-elements/base/dist/Card/Card';
import { CardDividerProps } from '@react-native-elements/base/dist/Card/Card.Divider';
import { CardImageProps } from '@react-native-elements/base/dist/Card/Card.Image';
import { CardTitleProps } from '@react-native-elements/base/dist/Card/Card.Title';
export declare type CardProps = CardBaseProps;
declare const ThemedCard: (import("react").FunctionComponent<CardBaseProps & {
    theme?: {
        colors: import("@react-native-elements/base/dist/helpers/colors").Colors;
    };
}> | import("react").ForwardRefExoticComponent<CardBaseProps & {
    theme?: {
        colors: import("@react-native-elements/base/dist/helpers/colors").Colors;
    };
}>) & {
    Divider: import("react").FunctionComponent<CardDividerProps> | import("react").ForwardRefExoticComponent<CardDividerProps>;
    Image: import("react").FunctionComponent<CardImageProps> | import("react").ForwardRefExoticComponent<CardImageProps>;
    Title: import("react").FunctionComponent<CardTitleProps> | import("react").ForwardRefExoticComponent<CardTitleProps>;
    FeaturedTitle: import("react").FunctionComponent<import("@react-native-elements/base/dist/Card/Card.FeaturedTitle").CardFeaturedTitleProps & {
        theme?: {
            colors: import("@react-native-elements/base/dist/helpers/colors").Colors;
        };
    }> | import("react").ForwardRefExoticComponent<import("@react-native-elements/base/dist/Card/Card.FeaturedTitle").CardFeaturedTitleProps & {
        theme?: {
            colors: import("@react-native-elements/base/dist/helpers/colors").Colors;
        };
    }>;
    FeaturedSubtitle: import("react").FunctionComponent<import("@react-native-elements/base/dist/Card/Card.FeaturedSubtitle").CardFeaturedSubtitleProps & {
        theme?: {
            colors: import("@react-native-elements/base/dist/helpers/colors").Colors;
        };
    }> | import("react").ForwardRefExoticComponent<import("@react-native-elements/base/dist/Card/Card.FeaturedSubtitle").CardFeaturedSubtitleProps & {
        theme?: {
            colors: import("@react-native-elements/base/dist/helpers/colors").Colors;
        };
    }>;
};
export default ThemedCard;
