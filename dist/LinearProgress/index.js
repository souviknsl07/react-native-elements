import { withTheme } from '../config';
import { LinearProgress, } from '@react-native-elements/base/dist/LinearProgress/LinearProgress';
export { LinearProgress };
export default Object.assign(withTheme(LinearProgress, 'LinearProgress'), {
    INDETERMINATE: 'indeterminate',
    DETERMINATE: 'determinate',
});
