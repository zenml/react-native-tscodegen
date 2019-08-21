import {BubblingEventHandler} from '../lib/CodegenTypes';
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

'use strict';




import {ViewProps} from '../lib/ViewPropTypes';


type ModuleProps = Readonly<ViewProps & {

  // Props
  boolean_default_true_optional_both?: WithDefault<boolean, true>;

  // Events
  onDirectEventDefinedInlineNull: DirectEventHandler<null>;
  onBubblingEventDefinedInlineNull: BubblingEventHandler<null>;
}>;

export default (codegenNativeComponent<ModuleProps>('Module', {
  interfaceOnly: true,
  paperComponentName: 'RCTModule',
}) as NativeComponent<ModuleProps>);