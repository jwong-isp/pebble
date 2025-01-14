/**
 * When editing a type, be sure to update JSDoc type definitions at ../typedefs.js for VSCODE intellisense
 */

import { PropTypes } from 'prop-types';

export { default as itemSpacingType } from './ItemSpacingType';
export { default as orderType } from './OrderType';
export { default as radiusType } from './RadiusType';
export { default as spacingType } from './SpacingType';
export {
  default as boolRequiresOtherProp,
} from './BoolRequiresOtherProp';
export { default as requiresOtherProp } from './RequiresOtherProp';

export const colorType = PropTypes.oneOf([
  'transparent',
  'neutral-100',
  'neutral-200',
  'neutral-300',
  'neutral-400',
  'neutral-500',
  'neutral-600',
  'neutral-700',
  'neutral-800',
  'neutral-900',
  'black',
  'black-90',
  'black-80',
  'black-70',
  'black-60',
  'black-50',
  'black-40',
  'black-30',
  'black-20',
  'black-10',
  'black-05',
  'black-025',
  'black-0125',
  'blue-lighter',
  'blue-light',
  'blue',
  'blue-dark',
  'blue-darker',
  'green-lighter',
  'green-light',
  'green',
  'green-dark',
  'green-darker',
  'indigo-lighter',
  'indigo-light',
  'indigo',
  'indigo-dark',
  'indigo-darker',
  'red-lighter',
  'red-light',
  'red',
  'red-dark',
  'red-darker',
  'white',
  'white-90',
  'white-80',
  'white-70',
  'white-60',
  'white-50',
  'white-40',
  'white-30',
  'white-20',
  'white-10',
  'white-05',
  'white-025',
  'white-0125',
  'yellow-lighter',
  'yellow-light',
  'yellow',
  'yellow-dark',
  'yellow-darker',
]);

export const fontSizeType = PropTypes.oneOf([
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
]);

export const textAlignType = PropTypes.oneOf([
  'left',
  'right',
  'center',
]);

const validDimensions = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  10,
  20,
  25,
  30,
  33,
  34,
  40,
  50,
  60,
  70,
  75,
  80,
  90,
  100,
  '10',
  '20',
  '25',
  '30',
  '33',
  '34',
  '40',
  '50',
  '60',
  '70',
  '75',
  '80',
  '90',
  '100',
];

export const dimensionType = PropTypes.oneOfType([
  PropTypes.oneOf(validDimensions),
  PropTypes.string,
  PropTypes.arrayOf(PropTypes.oneOf(validDimensions)),
]);

export const placementType = PropTypes.oneOf([
  'auto',
  'auto-start',
  'auto-end',
  'top',
  'top-start',
  'top-end',
  'right',
  'right-start',
  'right-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
]);

export const overflowType = PropTypes.oneOfType([
  PropTypes.oneOf([
    'auto',
    'visible',
    'hidden',
    'scroll',
    'overlay',
    'initial',
  ]),
  PropTypes.shape({
    horizontal: PropTypes.oneOf([
      'auto',
      'visible',
      'hidden',
      'scroll',
      'overlay',
      'initial',
    ]),
    vertical: PropTypes.oneOf([
      'auto',
      'visible',
      'hidden',
      'scroll',
      'overlay',
      'initial',
    ]),
  }),
  PropTypes.shape({
    horizontal: PropTypes.oneOf([
      'auto',
      'visible',
      'hidden',
      'scroll',
      'overlay',
      'initial',
    ]),
  }),
  PropTypes.shape({
    vertical: PropTypes.oneOf([
      'auto',
      'visible',
      'hidden',
      'scroll',
      'overlay',
      'initial',
    ]),
  }),
  PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.oneOf([
        'auto',
        'visible',
        'hidden',
        'scroll',
        'overlay',
        'initial',
      ]),
      PropTypes.arrayOf(
        PropTypes.shape({
          horizontal: PropTypes.oneOf([
            'auto',
            'visible',
            'hidden',
            'scroll',
            'overlay',
            'initial',
          ]),
          vertical: PropTypes.oneOf([
            'auto',
            'visible',
            'hidden',
            'scroll',
            'overlay',
            'initial',
          ]),
        }),
      ),
      PropTypes.shape({
        horizontal: PropTypes.oneOf([
          'auto',
          'visible',
          'hidden',
          'scroll',
          'overlay',
          'initial',
        ]),
      }),
      PropTypes.shape({
        vertical: PropTypes.oneOf([
          'auto',
          'visible',
          'hidden',
          'scroll',
          'overlay',
          'initial',
        ]),
      }),
    ]),
  ),
]);

export const borderType = PropTypes.oneOfType([
  PropTypes.oneOf([
    'none',
    'top',
    'left',
    'bottom',
    'right',
    'horizontal',
    'vertical',
    'all',
  ]),
  PropTypes.shape({
    width: PropTypes.string,
    style: PropTypes.oneOf([
      'solid',
      'dashed',
      'dotted',
      'double',
      'groove',
      'ridge',
      'inset',
      'outset',
      'hidden',
    ]),
    side: PropTypes.oneOf([
      'top',
      'left',
      'bottom',
      'right',
      'horizontal',
      'vertical',
      'all',
      'none',
    ]),
    color: colorType,
  }),
]);

export const tenantType = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    realm: PropTypes.string,
    url: PropTypes.string,
  }),
);
