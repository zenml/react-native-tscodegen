# Where to find TypeScript description

- Write description files in `RN-TSCodegen` instead.
- Delete file content here, instead re-export them from `RN-TSCodegen`

## Does not exist in react-native/index.js

- [ ] `\react-native\Libraries\Utilities\codegenNativeComponent.js`
- [ ] `\react-native\Libraries\Utilities\codegenNativeCommands.js`

## Does not exist in @types/react-native

- [x] `\react-native\Libraries\Types\CodegenTypes.js`
- [x] `\react-native\Libraries\Types\CoreEventTypes.js`
- [ ] `\react-native\Libraries\TurboModule\RCTExport.js`
- [ ] `\react-native\Libraries\TurboModule\TurboModuleRegistry.js`
- [x] `\react-native\Libraries\StyleSheet\StyleSheetTypes.js`: `ColorValue`, `ColorArrayValue`, `PointValue`
- [ ] `Ref<T>`: in @types/react
- [ ] `ElementRef<T>`: does not exist in @types/react

## Somehow in @types/react-native

- [x] `\react-native\Libraries\Image\ImageSource.js`: there is `ImageURISource`, but no `ImageSource`
- [ ] `\react-native\Libraries\Components\View\ViewPropTypes.js`: `ViewProps` used in test cases

## Note

https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-native/index.d.ts
https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts
https://github.com/facebook/react-native/blob/master/index.js