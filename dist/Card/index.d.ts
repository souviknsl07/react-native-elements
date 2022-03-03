import { CardBaseProps } from './Card';
import { CardDividerProps } from './Card.Divider';
import { CardFeaturedSubtitleProps } from './Card.FeaturedSubtitle';
import { CardFeaturedTitleProps } from './Card.FeaturedTitle';
import { CardImageProps } from './Card.Image';
declare const Card: import("../helpers").RneFunctionComponent<CardBaseProps> & {
    Divider: import("../helpers").RneFunctionComponent<CardDividerProps>;
    Image: import("../helpers").RneFunctionComponent<CardImageProps>;
    Title: import("../helpers").RneFunctionComponent<import("./Card.Title").CardTitleProps>;
    FeaturedTitle: import("../helpers").RneFunctionComponent<CardFeaturedTitleProps>;
    FeaturedSubtitle: import("../helpers").RneFunctionComponent<CardFeaturedSubtitleProps>;
};
export { Card };
export declare type CardProps = typeof Card;
export type { CardBaseProps, CardDividerProps, CardFeaturedSubtitleProps, CardFeaturedTitleProps, CardImageProps, };
