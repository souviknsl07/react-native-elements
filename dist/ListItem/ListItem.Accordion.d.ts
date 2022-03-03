import React from 'react';
import { ListItemBaseProps } from './ListItem';
import { IconNode } from '../Icon';
import { RneFunctionComponent } from '../helpers';
export interface ListItemAccordionProps extends ListItemBaseProps {
    isExpanded?: boolean;
    icon?: IconNode;
    expandIcon?: IconNode;
    content?: React.ReactNode;
    noRotation?: boolean;
    noIcon?: boolean;
    animation?: {
        type?: 'timing' | 'spring';
        duration?: number;
    } | boolean;
}
export declare const ListItemAccordion: RneFunctionComponent<ListItemAccordionProps>;
