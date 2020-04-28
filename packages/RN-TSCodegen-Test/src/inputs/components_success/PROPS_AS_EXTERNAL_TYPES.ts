
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_success/PROPS_AS_EXTERNAL_TYPES.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/fixtures.js)

import {codegenNativeComponent} from 'react-native-tscodegen-types';
'use strict';

import {HostComponent} from '../../lib/react-native';

export type String = string;

export type AnotherArray = ReadonlyArray<String>;

export type ModuleProps = Readonly<{
  disable: String;
  array: AnotherArray;
}>;

export default (codegenNativeComponent<ModuleProps>('Module') as HostComponent<ModuleProps>);


