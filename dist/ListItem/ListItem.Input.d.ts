import React from 'react';
import { TextInput } from 'react-native';
import { ThemeProps } from '../config';
import { InputProps } from '../Input';
export declare type ListItemInputProps = InputProps;
/** This allows adding an Text Input within the ListItem.
 * This, Receives all [Input](input.md#props) props. */
export declare const ListItemInput: React.ForwardRefExoticComponent<Pick<import("react-native").TextInputProps & React.RefAttributes<TextInput> & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabled?: boolean;
    disabledInputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    inputContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    leftIcon?: import("../Icon").IconNode;
    leftIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    rightIcon?: import("../Icon").IconNode;
    rightIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    inputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    InputComponent?: React.ComponentClass<{}, any> | React.FunctionComponent<{}> | React.ForwardRefExoticComponent<any>;
    errorProps?: object;
    errorStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    errorMessage?: string;
    label?: React.ReactNode;
    labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    labelProps?: object;
    renderErrorMessage?: boolean;
} & Partial<ThemeProps<InputProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "theme" | "updateTheme" | "replaceTheme" | "containerStyle" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "disabled" | "onBlur" | "onFocus" | "placeholder" | "label" | "key" | "allowFontScaling" | "numberOfLines" | "maxFontSizeMultiplier" | "selectionColor" | "textBreakStrategy" | "value" | "onContentSizeChange" | "onScroll" | "scrollEnabled" | "autoCapitalize" | "autoCorrect" | "autoFocus" | "blurOnSubmit" | "caretHidden" | "contextMenuHidden" | "defaultValue" | "editable" | "keyboardType" | "maxLength" | "multiline" | "onChange" | "onChangeText" | "onEndEditing" | "onSelectionChange" | "onSubmitEditing" | "onTextInput" | "onKeyPress" | "placeholderTextColor" | "returnKeyType" | "secureTextEntry" | "selectTextOnFocus" | "selection" | "textAlign" | "inputAccessoryViewID" | "clearButtonMode" | "clearTextOnFocus" | "dataDetectorTypes" | "enablesReturnKeyAutomatically" | "keyboardAppearance" | "passwordRules" | "rejectResponderTermination" | "selectionState" | "spellCheck" | "textContentType" | "autoCompleteType" | "importantForAutofill" | "disableFullscreenUI" | "inlineImageLeft" | "inlineImagePadding" | "returnKeyLabel" | "underlineColorAndroid" | "textAlignVertical" | "showSoftInputOnFocus" | "disabledInputStyle" | "inputContainerStyle" | "leftIcon" | "leftIconContainerStyle" | "rightIcon" | "rightIconContainerStyle" | "inputStyle" | "InputComponent" | "errorProps" | "errorStyle" | "errorMessage" | "labelStyle" | "labelProps" | "renderErrorMessage"> & React.RefAttributes<TextInput>>;
