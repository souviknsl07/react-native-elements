/// <reference types="react" />
import { LinearProgress, LinearProgressProps } from './LinearProgress';
export { LinearProgress };
export type { LinearProgressProps };
declare const _default: (import("react").FunctionComponent<Pick<import("react-native").ViewProps & {
    value?: number;
    variant?: "determinate" | "indeterminate";
    color?: string;
    trackColor?: string;
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    animation?: boolean | {
        duration?: number;
    };
} & Partial<import("../config").ThemeProps<LinearProgressProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "color" | "value" | "variant" | "trackColor" | "animation">> & {
    INDETERMINATE: "determinate" | "indeterminate";
    DETERMINATE: "determinate" | "indeterminate";
}) | (import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    value?: number;
    variant?: "determinate" | "indeterminate";
    color?: string;
    trackColor?: string;
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    animation?: boolean | {
        duration?: number;
    };
} & Partial<import("../config").ThemeProps<LinearProgressProps>>> & {
    INDETERMINATE: "determinate" | "indeterminate";
    DETERMINATE: "determinate" | "indeterminate";
});
/**
 * ### Linear Progress
 *
 * Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates. They communicate an app’s state and indicate available actions, such as whether users can navigate away from the current screen.
 *
 * Usage ```<LinearProgress variant={LinearProgress.INDETERMINATE}  />```
 *
 * [API Documentation](https://reactnativeelements.com/docs/linearProgress)
 */
export default _default;
