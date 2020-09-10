import Vue from 'vue';
import { Extension, Editor, EditorMenuBar, EditorMenuBubble, EditorContent, Paragraph as Paragraph$1, Node as Node$2, Mark } from 'tiptap';
export { Doc, Text } from 'tiptap';
import { Placeholder, Heading as Heading$1, Blockquote as Blockquote$1, CodeBlock as CodeBlock$1, ListItem as ListItem$1, BulletList as BulletList$1, OrderedList as OrderedList$1, Image as Image$3, TodoItem as TodoItem$1, TodoList as TodoList$1, Table as Table$1, Bold as Bold$1, Underline as Underline$1, Italic as Italic$1, Strike as Strike$1, Link as Link$1, HorizontalRule as HorizontalRule$1, History as History$1 } from 'tiptap-extensions';
export { Code, HardBreak, TableCell, TableHeader, TableRow, TrailingNode } from 'tiptap-extensions';
import { Plugin, TextSelection, AllSelection, Selection, NodeSelection } from 'prosemirror-state';
import { findParentNodeOfType } from 'prosemirror-utils';
import _Tooltip from 'element-ui/lib/tooltip';
import _MessageBox from 'element-ui/lib/message-box';
import _DropdownItem from 'element-ui/lib/dropdown-item';
import _DropdownMenu from 'element-ui/lib/dropdown-menu';
import _Dropdown from 'element-ui/lib/dropdown';
import _Popover from 'element-ui/lib/popover';
import _Upload from 'element-ui/lib/upload';
import _Dialog from 'element-ui/lib/dialog';
import { Node as Node$1, Fragment, Slice, MarkType, ReplaceError } from 'prosemirror-model';
import _Button from 'element-ui/lib/button';
import { mergeCells, splitCell } from 'prosemirror-tables';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
}

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global_1 =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

var fails = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var descriptors = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;

var objectPropertyIsEnumerable = {
	f: f
};

var createPropertyDescriptor = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var toString = {}.toString;

var classofRaw = function (it) {
  return toString.call(it).slice(8, -1);
};

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings



var toIndexedObject = function (it) {
  return indexedObject(requireObjectCoercible(it));
};

var isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var toPrimitive = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var hasOwnProperty = {}.hasOwnProperty;

var has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var document$1 = global_1.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document$1) && isObject(document$1.createElement);

var documentCreateElement = function (it) {
  return EXISTS ? document$1.createElement(it) : {};
};

// Thank's IE8 for his funny defineProperty
var ie8DomDefine = !descriptors && !fails(function () {
  return Object.defineProperty(documentCreateElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (ie8DomDefine) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
};

var objectGetOwnPropertyDescriptor = {
	f: f$1
};

var anObject = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (ie8DomDefine) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var objectDefineProperty = {
	f: f$2
};

var createNonEnumerableProperty = descriptors ? function (object, key, value) {
  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var setGlobal = function (key, value) {
  try {
    createNonEnumerableProperty(global_1, key, value);
  } catch (error) {
    global_1[key] = value;
  } return value;
};

var SHARED = '__core-js_shared__';
var store = global_1[SHARED] || setGlobal(SHARED, {});

var sharedStore = store;

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof sharedStore.inspectSource != 'function') {
  sharedStore.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

var inspectSource = sharedStore.inspectSource;

var WeakMap = global_1.WeakMap;

var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

var shared = createCommonjsModule(function (module) {
(module.exports = function (key, value) {
  return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.4',
  mode:  'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});
});

var id = 0;
var postfix = Math.random();

var uid = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

var keys = shared('keys');

var sharedKey = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys = {};

var WeakMap$1 = global_1.WeakMap;
var set, get, has$1;

var enforce = function (it) {
  return has$1(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (nativeWeakMap) {
  var store$1 = new WeakMap$1();
  var wmget = store$1.get;
  var wmhas = store$1.has;
  var wmset = store$1.set;
  set = function (it, metadata) {
    wmset.call(store$1, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store$1, it) || {};
  };
  has$1 = function (it) {
    return wmhas.call(store$1, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return has(it, STATE) ? it[STATE] : {};
  };
  has$1 = function (it) {
    return has(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has$1,
  enforce: enforce,
  getterFor: getterFor
};

var redefine = createCommonjsModule(function (module) {
var getInternalState = internalState.get;
var enforceInternalState = internalState.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global_1) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});
});

var path = global_1;

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

var getBuiltIn = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace])
    : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
};

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
var toInteger = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
var toLength = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

var indexOf = arrayIncludes.indexOf;


var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return objectKeysInternal(O, hiddenKeys$1);
};

var objectGetOwnPropertyNames = {
	f: f$3
};

var f$4 = Object.getOwnPropertySymbols;

var objectGetOwnPropertySymbols = {
	f: f$4
};

// all object keys, includes non-enumerable and symbols
var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = objectGetOwnPropertyNames.f(anObject(it));
  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

var copyConstructorProperties = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = objectDefineProperty.f;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

var isForced_1 = isForced;

var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global_1;
  } else if (STATIC) {
    target = global_1[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global_1[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor$1(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};

var aFunction$1 = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
var toObject = function (argument) {
  return Object(requireObjectCoercible(argument));
};

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod$1 = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction$1(callbackfn);
    var O = toObject(that);
    var self = indexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

var arrayReduce = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod$1(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod$1(true)
};

var arrayMethodIsStrict = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

var arrayMethodUsesToLength = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !descriptors) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};

var $reduce = arrayReduce.left;



var STRICT_METHOD = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
_export({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

var UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

var BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

var regexpStickyHelpers = {
	UNSUPPORTED_Y: UNSUPPORTED_Y,
	BROKEN_CARET: BROKEN_CARET
};

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y$1 = regexpStickyHelpers.UNSUPPORTED_Y || regexpStickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y$1 && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

var regexpExec = patchedExec;

_export({ target: 'RegExp', proto: true, forced: /./.exec !== regexpExec }, {
  exec: regexpExec
});

var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});

var useSymbolAsUid = nativeSymbol
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';

var WellKnownSymbolsStore = shared('wks');
var Symbol$1 = global_1.Symbol;
var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

var wellKnownSymbol = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (nativeSymbol && has(Symbol$1, name)) WellKnownSymbolsStore[name] = Symbol$1[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};

// TODO: Remove from `core-js@4` since it's moved to entry points







var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

var fixRegexpWellKnownSymbolLogic = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
};

var SPECIES$1 = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
var speciesConstructor = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES$1]) == undefined ? defaultConstructor : aFunction$1(S);
};

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod$2 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$2(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$2(true)
};

var charAt = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
var advanceStringIndex = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classofRaw(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};

var arrayPush = [].push;
var min$2 = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegexpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegexp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return regexpExecAbstract(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min$2(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);

var aPossiblePrototype = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

// makes subclassing work correct for wrapped built-ins
var inheritIfRequired = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    objectSetPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) objectSetPrototypeOf($this, NewTargetPrototype);
  return $this;
};

var SPECIES$2 = wellKnownSymbol('species');

var setSpecies = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = objectDefineProperty.f;

  if (descriptors && Constructor && !Constructor[SPECIES$2]) {
    defineProperty(Constructor, SPECIES$2, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var defineProperty$1 = objectDefineProperty.f;
var getOwnPropertyNames = objectGetOwnPropertyNames.f;





var setInternalState = internalState.set;



var MATCH$1 = wellKnownSymbol('match');
var NativeRegExp = global_1.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var UNSUPPORTED_Y$2 = regexpStickyHelpers.UNSUPPORTED_Y;

var FORCED = descriptors && isForced_1('RegExp', (!CORRECT_NEW || UNSUPPORTED_Y$2 || fails(function () {
  re2[MATCH$1] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
})));

// `RegExp` constructor
// https://tc39.github.io/ecma262/#sec-regexp-constructor
if (FORCED) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = this instanceof RegExpWrapper;
    var patternIsRegExp = isRegexp(pattern);
    var flagsAreUndefined = flags === undefined;
    var sticky;

    if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
      return pattern;
    }

    if (CORRECT_NEW) {
      if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
    } else if (pattern instanceof RegExpWrapper) {
      if (flagsAreUndefined) flags = regexpFlags.call(pattern);
      pattern = pattern.source;
    }

    if (UNSUPPORTED_Y$2) {
      sticky = !!flags && flags.indexOf('y') > -1;
      if (sticky) flags = flags.replace(/y/g, '');
    }

    var result = inheritIfRequired(
      CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags),
      thisIsRegExp ? this : RegExpPrototype,
      RegExpWrapper
    );

    if (UNSUPPORTED_Y$2 && sticky) setInternalState(result, { sticky: sticky });

    return result;
  };
  var proxy = function (key) {
    key in RegExpWrapper || defineProperty$1(RegExpWrapper, key, {
      configurable: true,
      get: function () { return NativeRegExp[key]; },
      set: function (it) { NativeRegExp[key] = it; }
    });
  };
  var keys$1 = getOwnPropertyNames(NativeRegExp);
  var index = 0;
  while (keys$1.length > index) proxy(keys$1[index++]);
  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global_1, 'RegExp', RegExpWrapper);
}

// https://tc39.github.io/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');

var TO_STRING = 'toString';
var RegExpPrototype$1 = RegExp.prototype;
var nativeToString = RegExpPrototype$1[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype$1) ? regexpFlags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}

var ELEMENT_TIPTAP_TIP = '[Element-Tiptap Tip]';
var ALIGN_PATTERN = new RegExp("(" + "left"
/* left */
+ "|" + "center"
/* center */
+ "|" + "right"
/* right */
+ "|" + "justify"
/* justify */
+ ")");
var LINE_HEIGHT_100 = 1.7;
var DEFAULT_LINE_HEIGHT = '100%';
var PREVIEW_WINDOW_WIDTH = '80vw';

/* eslint-disable no-console */

var Logger =
/** @class */
function () {
  function Logger() {}

  Logger.warn = function (msg) {
    console.warn(ELEMENT_TIPTAP_TIP + " " + msg);
  };

  Logger.error = function (msg) {
    console.error(ELEMENT_TIPTAP_TIP + " " + msg);
  };

  return Logger;
}();

var en = {
  editor: {
    extensions: {
      Bold: {
        tooltip: 'Bold'
      },
      Underline: {
        tooltip: 'Underline'
      },
      Italic: {
        tooltip: 'Italic'
      },
      Strike: {
        tooltip: 'Strike through'
      },
      Heading: {
        tooltip: 'Heading',
        buttons: {
          paragraph: 'Paragraph',
          heading: 'Heading'
        }
      },
      Blockquote: {
        tooltip: 'Block quote'
      },
      CodeBlock: {
        tooltip: 'Code block'
      },
      Link: {
        add: {
          tooltip: 'Apply link',
          control: {
            title: 'Apply Link',
            placeholder: 'Href',
            confirm: 'Apply',
            cancel: 'Cancel'
          }
        },
        edit: {
          tooltip: 'Edit link',
          control: {
            title: 'Edit Link',
            placeholder: 'Href',
            confirm: 'Update',
            cancel: 'Cancel'
          }
        },
        unlink: {
          tooltip: 'Unlink'
        },
        open: {
          tooltip: 'Open link'
        }
      },
      Image: {
        buttons: {
          insert_image: {
            tooltip: 'Insert image',
            external: 'Insert Image By Url',
            upload: 'Upload Image'
          },
          remove_image: {
            tooltip: 'Remove'
          },
          image_options: {
            tooltip: 'Image options'
          },
          display: {
            tooltip: 'Display',
            inline: 'Inline',
            block: 'Break Text',
            left: 'Float Left',
            right: 'Float Right'
          }
        },
        control: {
          insert_by_url: {
            title: 'Insert image',
            placeholder: 'Url of image',
            confirm: 'Insert',
            cancel: 'Cancel',
            invalid_url: 'Please enter the correct url'
          },
          upload_image: {
            title: 'Upload image',
            button: 'Choose an image file or drag it here'
          },
          edit_image: {
            title: 'Edit image',
            confirm: 'Update',
            cancel: 'Cancel',
            form: {
              src: 'Image Url',
              alt: 'Alternative Text',
              width: 'Width',
              height: 'Height'
            }
          }
        }
      },
      NewIframe: {
        buttons: {
          insert_page: {
            tooltip: 'Insert Page',
            external: 'Insert Page By Url',
            upload: 'Upload Page'
          },
          remove_page: {
            tooltip: 'Remove'
          },
          page_options: {
            tooltip: 'page options'
          },
          display: {
            tooltip: 'Display',
            inline: 'Inline',
            block: 'Break Text',
            left: 'Float Left',
            right: 'Float Right'
          }
        },
        control: {
          insert_by_url: {
            title: 'Insert Page',
            placeholder: 'Url of Page',
            confirm: 'Insert',
            cancel: 'Cancel',
            invalid_url: 'Please enter the correct url'
          },
          upload_page: {
            title: 'Upload page',
            button: 'Choose an Page file or drag it here'
          },
          edit_page: {
            title: 'Edit Page Options',
            confirm: 'Update',
            cancel: 'Cancel',
            form: {
              src: 'Page Url',
              alt: 'Alternative Text',
              width: 'Width',
              height: 'Height'
            }
          }
        }
      },
      Iframe: {
        tooltip: 'Insert Embed',
        control: {
          title: 'Insert Embed',
          placeholder: 'Href',
          confirm: 'Insert',
          cancel: 'Cancel'
        }
      },
      BulletList: {
        tooltip: 'Bullet list'
      },
      OrderedList: {
        tooltip: 'Ordered list'
      },
      TodoList: {
        tooltip: 'Todo list'
      },
      TextAlign: {
        buttons: {
          align_left: {
            tooltip: 'Align left'
          },
          align_center: {
            tooltip: 'Align center'
          },
          align_right: {
            tooltip: 'Align right'
          },
          align_justify: {
            tooltip: 'Align justify'
          }
        }
      },
      FontType: {
        tooltip: 'Font family'
      },
      TextColor: {
        tooltip: 'Text color'
      },
      TextHighlight: {
        tooltip: 'Text highlight'
      },
      LineHeight: {
        tooltip: 'Line height'
      },
      Table: {
        tooltip: 'Table',
        buttons: {
          insert_table: 'Insert Table',
          add_column_before: 'Add Column Before',
          add_column_after: 'Add Column After',
          delete_column: 'Delete Column',
          add_row_before: 'Add Row Before',
          add_row_after: 'Add Row After',
          delete_row: 'Delete Row',
          merge_cells: 'Merge Cells',
          split_cell: 'Split Cell',
          delete_table: 'Delete Table'
        }
      },
      Indent: {
        buttons: {
          indent: {
            tooltip: 'Indent'
          },
          outdent: {
            tooltip: 'Outdent'
          }
        }
      },
      FormatClear: {
        tooltip: 'Clear format'
      },
      HorizontalRule: {
        tooltip: 'Horizontal rule'
      },
      History: {
        tooltip: {
          undo: 'Undo',
          redo: 'Redo'
        }
      },
      Fullscreen: {
        tooltip: {
          fullscreen: 'Full screen',
          exit_fullscreen: 'Exit full screen'
        }
      },
      Print: {
        tooltip: 'Print'
      },
      Preview: {
        tooltip: 'Preview',
        dialog: {
          title: 'Preview'
        }
      },
      Music: {
        tooltip: 'Insert Music',
        control: {
          title: 'Insert Music',
          placeholder: 'audio src',
          confirm: 'Insert',
          cancel: 'Cancel'
        }
      },
      Video: {
        tooltip: 'Insert Video',
        control: {
          title: 'Insert Video',
          placeholder: 'Video Src',
          confirm: 'Insert',
          cancel: 'Cancel'
        }
      },
      SelectAll: {
        tooltip: 'Select all'
      }
    },
    characters: 'Characters'
  }
};

var zh = {
  editor: {
    extensions: {
      Bold: {
        tooltip: '粗体'
      },
      Underline: {
        tooltip: '下划线'
      },
      Italic: {
        tooltip: '斜体'
      },
      Strike: {
        tooltip: '中划线'
      },
      Heading: {
        tooltip: '标题',
        buttons: {
          paragraph: '正文',
          heading: '标题'
        }
      },
      Blockquote: {
        tooltip: '引用'
      },
      CodeBlock: {
        tooltip: '代码块'
      },
      Link: {
        add: {
          tooltip: '添加链接',
          control: {
            title: '添加链接',
            placeholder: '输入链接',
            confirm: '添加',
            cancel: '取消'
          }
        },
        edit: {
          tooltip: '编辑链接',
          control: {
            title: '编辑链接',
            placeholder: '输入链接',
            confirm: '更新',
            cancel: '取消'
          }
        },
        unlink: {
          tooltip: '取消链接'
        },
        open: {
          tooltip: '打开链接'
        }
      },
      Image: {
        buttons: {
          insert_image: {
            tooltip: '插入图片',
            external: '插入网络图片',
            upload: '上传本地图片'
          },
          remove_image: {
            tooltip: '删除'
          },
          image_options: {
            tooltip: '图片属性'
          },
          display: {
            tooltip: '布局',
            inline: '内联',
            block: '断行',
            left: '左浮动',
            right: '右浮动'
          }
        },
        control: {
          insert_by_url: {
            title: '插入网络图片',
            placeholder: '输入链接',
            confirm: '插入',
            cancel: '取消',
            invalid_url: '请输入正确的图片链接'
          },
          upload_image: {
            title: '上传本地图片',
            button: '将图片文件拖到此处或者点击上传'
          },
          edit_image: {
            title: '编辑图片',
            confirm: '更新',
            cancel: '取消',
            form: {
              src: '图片链接',
              alt: '备用文本描述',
              width: '宽度',
              height: '高度'
            }
          }
        }
      },
      NewIframe: {
        buttons: {
          insert_page: {
            tooltip: '插入网页',
            external: '插入网络网页',
            upload: '上传本地网页'
          },
          remove_page: {
            tooltip: '删除'
          },
          page_options: {
            tooltip: '网页属性'
          },
          display: {
            tooltip: '布局',
            inline: '内联',
            block: '断行',
            left: '左浮动',
            right: '右浮动'
          }
        },
        control: {
          insert_by_url: {
            title: '插入网络网页',
            placeholder: '输入链接',
            confirm: '插入',
            cancel: '取消',
            invalid_url: '请输入正确的网页链接'
          },
          upload_page: {
            title: '上传本地网页',
            button: '将网页文件拖到此处或者点击上传'
          },
          edit_page: {
            title: '编辑网页',
            confirm: '更新',
            cancel: '取消',
            form: {
              src: '网页链接',
              alt: '备用文本描述',
              width: '宽度',
              height: '高度'
            }
          }
        }
      },
      Iframe: {
        tooltip: '插入多媒体',
        control: {
          title: '插入多媒体',
          placeholder: '输入链接',
          confirm: '插入',
          cancel: '取消'
        }
      },
      BulletList: {
        tooltip: '无序列表'
      },
      OrderedList: {
        tooltip: '有序列表'
      },
      TodoList: {
        tooltip: '任务列表'
      },
      TextAlign: {
        buttons: {
          align_left: {
            tooltip: '左对齐'
          },
          align_center: {
            tooltip: '居中对齐'
          },
          align_right: {
            tooltip: '右对齐'
          },
          align_justify: {
            tooltip: '两端对齐'
          }
        }
      },
      FontType: {
        tooltip: '字体'
      },
      TextColor: {
        tooltip: '文本颜色'
      },
      TextHighlight: {
        tooltip: '文本高亮'
      },
      LineHeight: {
        tooltip: '行距'
      },
      Table: {
        tooltip: '表格',
        buttons: {
          insert_table: '插入表格',
          add_column_before: '向左插入一列',
          add_column_after: '向右插入一列',
          delete_column: '删除列',
          add_row_before: '向上插入一行',
          add_row_after: '向下插入一行',
          delete_row: '删除行',
          merge_cells: '合并单元格',
          split_cell: '拆分单元格',
          delete_table: '删除表格'
        }
      },
      Indent: {
        buttons: {
          indent: {
            tooltip: '增加锁进'
          },
          outdent: {
            tooltip: '减少锁进'
          }
        }
      },
      FormatClear: {
        tooltip: '清除格式'
      },
      HorizontalRule: {
        tooltip: '分隔线'
      },
      History: {
        tooltip: {
          undo: '撤销',
          redo: '重做'
        }
      },
      Fullscreen: {
        tooltip: {
          fullscreen: '全屏',
          exit_fullscreen: '退出全屏'
        }
      },
      Print: {
        tooltip: '打印'
      },
      Preview: {
        tooltip: '预览',
        dialog: {
          title: '预览'
        }
      },
      Music: {
        tooltip: '插入音乐',
        control: {
          title: '插入音乐',
          placeholder: '输入音频地址',
          confirm: '插入',
          cancel: '取消'
        }
      },
      Video: {
        tooltip: '插入视频',
        control: {
          title: '插入视频',
          placeholder: '输入视频地址',
          confirm: '插入',
          cancel: '取消'
        }
      },
      SelectAll: {
        tooltip: '全选'
      }
    },
    characters: '字数'
  }
};

var pl = {
  editor: {
    extensions: {
      Bold: {
        tooltip: 'Pogrubienie'
      },
      Underline: {
        tooltip: 'Podkreślenie'
      },
      Italic: {
        tooltip: 'Kursywa'
      },
      Strike: {
        tooltip: 'Przekreślenie'
      },
      Heading: {
        tooltip: 'Nagłówek',
        buttons: {
          paragraph: 'Paragraf',
          heading: 'Nagłówek'
        }
      },
      Blockquote: {
        tooltip: 'Cytat'
      },
      CodeBlock: {
        tooltip: 'Kod'
      },
      Link: {
        add: {
          tooltip: 'Dodaj link',
          control: {
            title: 'Dodaj Link',
            placeholder: 'Źródło',
            confirm: 'Dodaj',
            cancel: 'Anuluj'
          }
        },
        edit: {
          tooltip: 'Edytuj link',
          control: {
            title: 'Edytuj link',
            placeholder: 'Źródło',
            confirm: 'aktualizacja',
            cancel: 'Anuluj'
          }
        },
        unlink: {
          tooltip: 'Odczepić'
        },
        open: {
          tooltip: 'Otwórz link'
        }
      },
      Image: {
        buttons: {
          insert_image: {
            tooltip: 'Dodaj obraz',
            external: 'Dodaj obraz online',
            upload: 'Dodaj obraz z dysku'
          },
          remove_image: {
            tooltip: 'Usuń'
          },
          image_options: {
            tooltip: 'Opcje obrazu'
          },
          display: {
            tooltip: 'Pokaz',
            inline: 'Inline',
            block: 'Podziel tekst',
            left: 'Przesuń w lewo',
            right: 'Płyń w prawo'
          }
        },
        control: {
          insert_by_url: {
            title: 'Dodawanie obrazu online',
            placeholder: 'URL obrazu',
            confirm: 'Dodaj',
            cancel: 'Zamknij',
            invalid_url: 'Proszę podać prawidłowy link prowadzący do obrazu'
          },
          upload_image: {
            title: 'Dodawanie obrazu z dysku',
            button: 'Wskaż obraz lub przeciągnij go tutaj'
          },
          edit_image: {
            title: 'Edytuj obraz',
            confirm: 'Aktualizacja',
            cancel: 'Zamknij',
            form: {
              src: 'URL obrazu',
              alt: 'Alternatywny Tekst',
              width: 'Szerokość',
              height: 'Wysokość'
            }
          }
        }
      },
      Iframe: {
        tooltip: 'Dodaj film',
        control: {
          title: 'Dodaj film',
          placeholder: 'URL filmu',
          confirm: 'Dodaj',
          cancel: 'Zamknij'
        }
      },
      BulletList: {
        tooltip: 'Lista wypunktowana'
      },
      OrderedList: {
        tooltip: 'Lista uporządkowana'
      },
      TodoList: {
        tooltip: 'Lista rzeczy do zrobienia'
      },
      TextAlign: {
        buttons: {
          align_left: {
            tooltip: 'Wyrównaj do lewej'
          },
          align_center: {
            tooltip: 'Wyśrodkuj'
          },
          align_right: {
            tooltip: 'Wyrównaj do prawej'
          },
          align_justify: {
            tooltip: 'Wyjustuj'
          }
        }
      },
      FontType: {
        tooltip: 'Rodzina czcionek'
      },
      TextColor: {
        tooltip: 'Kolor tekstu'
      },
      TextHighlight: {
        tooltip: 'Podświetlenie tekstu'
      },
      LineHeight: {
        tooltip: 'Wysokość linii'
      },
      Table: {
        tooltip: 'Tabela',
        buttons: {
          insert_table: 'Dodaj tabelę',
          add_column_before: 'Dodaj kolumnę przed',
          add_column_afer: 'Dodaj kolumnę za',
          delete_column: 'Usuń kolumnę',
          add_row_before: 'Dodaj wiersz przed',
          add_row_after: 'Dodaj wiersz za',
          delete_row: 'Usuń wiersz',
          merge_cells: 'Połącz komórki',
          split_cell: 'Rozdziel komórki',
          delete_table: 'Usuń tabelę'
        }
      },
      Indent: {
        buttons: {
          indent: {
            tooltip: 'Zwiększ wcięcie'
          },
          outdent: {
            tooltip: 'Zmniejsz wcięcie'
          }
        }
      },
      FormatClear: {
        tooltip: 'Wyczyść formatowanie'
      },
      HorizontalRule: {
        tooltip: 'Linia pozioma'
      },
      History: {
        tooltip: {
          undo: 'Cofnij',
          redo: 'Powtórz'
        }
      },
      Fullscreen: {
        tooltip: {
          fullscreen: 'Pełny ekran',
          exit_fullscreen: 'Zamknij pełny ekran'
        }
      },
      Print: {
        tooltip: 'Drukuj'
      },
      Preview: {
        tooltip: 'Podgląd',
        dialog: {
          title: 'Podgląd'
        }
      },
      Music: {
        tooltip: '插入音乐'
      },
      SelectAll: {
        tooltip: 'Zaznacz wszystko'
      }
    },
    characters: 'Znaki'
  }
};

var ru = {
  editor: {
    extensions: {
      Bold: {
        tooltip: 'Полужирный'
      },
      Underline: {
        tooltip: 'Подчеркнутый'
      },
      Italic: {
        tooltip: 'Курсив'
      },
      Strike: {
        tooltip: 'Зачеркнутый'
      },
      Heading: {
        tooltip: 'Заголовок',
        buttons: {
          paragraph: 'Параграф',
          heading: 'Заголовок'
        }
      },
      Blockquote: {
        tooltip: 'Цитата'
      },
      CodeBlock: {
        tooltip: 'Блок кода'
      },
      Link: {
        add: {
          tooltip: 'Добавить ссылку',
          control: {
            title: 'Добавить ссылку',
            placeholder: 'Адрес',
            confirm: 'Применить',
            cancel: 'Отменить'
          }
        },
        edit: {
          tooltip: 'Редактировать ссылку',
          control: {
            title: 'Редактировать ссылку',
            placeholder: 'Адрес',
            confirm: 'Обновить',
            cancel: 'Отменить'
          }
        },
        unlink: {
          tooltip: 'Удалить ссылку'
        },
        open: {
          tooltip: 'Открыть ссылку'
        }
      },
      Image: {
        buttons: {
          insert_image: {
            tooltip: 'Вставить картинку',
            external: 'Вставить картинку по адресу',
            upload: 'Загрузить картинку'
          },
          remove_image: {
            tooltip: 'Удалить'
          },
          image_options: {
            tooltip: 'Варианты изображения'
          },
          display: {
            tooltip: 'дисплей',
            inline: 'Инлайн',
            block: 'Разрыв текста',
            left: 'Поплавок влево',
            right: 'Поплавок справа'
          }
        },
        control: {
          insert_by_url: {
            title: 'Вставить картинку',
            placeholder: 'Адрес картинки',
            confirm: 'Вставить',
            cancel: 'Отменить',
            invalid_url: 'Пожалуйста введите правильный адрес'
          },
          upload_image: {
            title: 'Загрузить картинку',
            button: 'Выберите файл изображения или перетащите сюда'
          },
          edit_image: {
            title: 'Редактировать изображение',
            confirm: 'Обновить',
            cancel: 'Отменить',
            form: {
              src: 'Адрес картинки',
              alt: 'Альтернативный текст',
              width: 'ширина',
              height: 'Высота'
            }
          }
        }
      },
      Iframe: {
        tooltip: 'Вставить видео',
        control: {
          title: 'Вставить видео',
          placeholder: 'Адрес',
          confirm: 'Вставить',
          cancel: 'Отменить'
        }
      },
      BulletList: {
        tooltip: 'Маркированный список'
      },
      OrderedList: {
        tooltip: 'Нумерованный список'
      },
      TodoList: {
        tooltip: 'Список задач'
      },
      TextAlign: {
        buttons: {
          align_left: {
            tooltip: 'Выровнять по левому краю'
          },
          align_center: {
            tooltip: 'Выровнять по центру'
          },
          align_right: {
            tooltip: 'Выровнять по правому краю'
          },
          align_justify: {
            tooltip: 'Выровнять по ширине'
          }
        }
      },
      FontType: {
        tooltip: 'Семейство шрифтов'
      },
      TextColor: {
        tooltip: 'Цвет текста'
      },
      TextHighlight: {
        tooltip: 'Цвет выделения текста'
      },
      LineHeight: {
        tooltip: 'Интервал'
      },
      Table: {
        tooltip: 'Таблица',
        buttons: {
          insert_table: 'Вставить таблицу',
          add_column_before: 'Добавить столбец слева',
          add_column_after: 'Добавить столбец справа',
          delete_column: 'Удалить столбец',
          add_row_before: 'Добавить строку сверху',
          add_row_after: 'Добавить строку снизу',
          delete_row: 'Удалить строку',
          merge_cells: 'Объединить ячейки',
          split_cell: 'Разделить ячейки',
          delete_table: 'Удалить таблицу'
        }
      },
      Indent: {
        buttons: {
          indent: {
            tooltip: 'Увеличить отступ'
          },
          outdent: {
            tooltip: 'Уменьшить отступ'
          }
        }
      },
      FormatClear: {
        tooltip: 'Очистить форматирование'
      },
      HorizontalRule: {
        tooltip: 'Горизонтальная линия'
      },
      History: {
        tooltip: {
          undo: 'Отменить',
          redo: 'Повторить'
        }
      },
      Fullscreen: {
        tooltip: {
          fullscreen: 'Полноэкранный режим',
          exit_fullscreen: 'Выйти из полноэкранного режима'
        }
      },
      Print: {
        tooltip: 'Печать'
      },
      Preview: {
        tooltip: 'Предварительный просмотр',
        dialog: {
          title: 'Предварительный просмотр'
        }
      },
      Music: {
        tooltip: '插入音乐'
      },
      SelectAll: {
        tooltip: 'Выделить все'
      }
    },
    characters: 'Количество символов'
  }
};

var de = {
  editor: {
    extensions: {
      Bold: {
        tooltip: 'Fett'
      },
      Underline: {
        tooltip: 'Unterstrichen'
      },
      Italic: {
        tooltip: 'Kursiv'
      },
      Strike: {
        tooltip: 'Durchgestrichen'
      },
      Heading: {
        tooltip: 'Überschrift',
        buttons: {
          paragraph: 'Absatz',
          heading: 'Überschrift'
        }
      },
      Blockquote: {
        tooltip: 'Zitat'
      },
      CodeBlock: {
        tooltip: 'Codeblock'
      },
      Link: {
        add: {
          tooltip: 'Link hinzufügen',
          control: {
            title: 'Link hinzufügen',
            placeholder: 'Link',
            confirm: 'Hinzufügen',
            cancel: 'Abbrechen'
          }
        },
        edit: {
          tooltip: 'Link bearbeiten',
          control: {
            title: 'Link bearbeiten',
            placeholder: 'Link',
            confirm: 'Speichern',
            cancel: 'Abbrechen'
          }
        },
        unlink: {
          tooltip: 'Link entfernen'
        },
        open: {
          tooltip: 'Link öffnen'
        }
      },
      Image: {
        buttons: {
          insert_image: {
            tooltip: 'Bild einfügen',
            external: 'Bild von URL einfügen',
            upload: 'Bild hochladen'
          },
          remove_image: {
            tooltip: 'Entfernen'
          },
          image_options: {
            tooltip: 'Bildoptionen'
          },
          display: {
            tooltip: 'Textumbruch',
            inline: 'In der Zeile',
            block: 'Text teilen',
            left: 'Links',
            right: 'Rechts'
          }
        },
        control: {
          insert_by_url: {
            title: 'Bild einfügen',
            placeholder: 'Bild URL',
            confirm: 'Einfügen',
            cancel: 'Abbrechen',
            invalid_url: 'Diese URL hat ein ungültiges Format'
          },
          upload_image: {
            title: 'Bild hochladen',
            button: 'Wählen Sie ein Bild aus, oder ziehen Sie ein Bild auf dieses Feld'
          },
          edit_image: {
            title: 'Bild Bearbeiten',
            confirm: 'Speichern',
            cancel: 'Abbrechen',
            form: {
              src: 'Bild URL',
              alt: 'Alternativer Text (angezeigt beim Überfahren mit Maus)',
              width: 'Breite',
              height: 'Höhe'
            }
          }
        }
      },
      Iframe: {
        tooltip: 'Video einfügen',
        control: {
          title: 'Video einfügen',
          placeholder: 'Link',
          confirm: 'Einfügen',
          cancel: 'Abbrechen'
        }
      },
      BulletList: {
        tooltip: 'Aufzählungsliste'
      },
      OrderedList: {
        tooltip: 'Nummerierte Liste'
      },
      TodoList: {
        tooltip: 'Erledigungsliste'
      },
      TextAlign: {
        buttons: {
          align_left: {
            tooltip: 'Linksbündig'
          },
          align_center: {
            tooltip: 'Zentriert'
          },
          align_right: {
            tooltip: 'Rechtsbündig'
          },
          align_justify: {
            tooltip: 'Blocksatz'
          }
        }
      },
      FontType: {
        tooltip: 'Schriftfamilie'
      },
      TextColor: {
        tooltip: 'Textfarbe'
      },
      TextHighlight: {
        tooltip: 'Hervorhebungsfarbe'
      },
      LineHeight: {
        tooltip: 'Zeilenabstand'
      },
      Table: {
        tooltip: 'Tabelle',
        buttons: {
          insert_table: 'Tabelle einfügen',
          add_column_before: 'Spalte vorher einfügen',
          add_column_after: 'Spalte nachher einfügen',
          delete_column: 'Spalte löschen',
          add_row_before: 'Zeile vorher einfügen',
          add_row_after: 'Zeile nachher einfügen',
          delete_row: 'Zeile löschen',
          merge_cells: 'Zellen verbinden',
          split_cell: 'Zellen aufteilen',
          delete_table: 'Tabelle löschen'
        }
      },
      Indent: {
        buttons: {
          indent: {
            tooltip: 'Einzug vergrößern'
          },
          outdent: {
            tooltip: 'Einzug verringern'
          }
        }
      },
      FormatClear: {
        tooltip: 'Formattierung entfernen'
      },
      HorizontalRule: {
        tooltip: 'Horizontale Linie'
      },
      History: {
        tooltip: {
          undo: 'Rückgängig',
          redo: 'Wiederholen'
        }
      },
      Fullscreen: {
        tooltip: {
          fullscreen: 'Vollbild',
          exit_fullscreen: 'Vollbild verlassen'
        }
      },
      Print: {
        tooltip: 'Drucken'
      },
      Preview: {
        tooltip: 'Vorschau',
        dialog: {
          title: 'Vorschau'
        }
      },
      Music: {
        tooltip: '插入音乐'
      },
      SelectAll: {
        tooltip: 'Alles auswählen'
      }
    },
    characters: 'Zeichen'
  }
};

var defaultLang = 'en';
var dictionary = {
  en: en,
  zh: zh,
  pl: pl,
  ru: ru,
  de: de
};
var currentLang = dictionary[defaultLang];
function useLang(l) {
  if (dictionary[l]) {
    currentLang = dictionary[l];
  } else {
    Logger.warn("Can't find the current language \"" + l + "\", Using language \"" + defaultLang + "\" by default. Welcome contribution to https://github.com/Leecason/element-tiptap");
    currentLang = dictionary[defaultLang];
  }
} // @ts-ignore

function t(path) {
  var target = path.split('.').reduce(function (prev, curr) {
    // @ts-ignore
    return prev[curr];
  }, currentLang);
  return target;
}

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
var isArray = Array.isArray || function isArray(arg) {
  return classofRaw(arg) == 'Array';
};

var createProperty = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};

var SPECIES$3 = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES$3];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

var process = global_1.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (engineUserAgent) {
  match = engineUserAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = engineUserAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

var engineV8Version = version && +version;

var SPECIES$4 = wellKnownSymbol('species');

var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return engineV8Version >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES$4] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED$1 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
_export({ target: 'Array', proto: true, forced: FORCED$1 }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
var objectKeys = Object.keys || function keys(O) {
  return objectKeysInternal(O, enumBugKeys);
};

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
  return O;
};

var html = getBuiltIn('document', 'documentElement');

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : objectDefineProperties(result, Properties);
};

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  objectDefineProperty.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: objectCreate(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var $includes = arrayIncludes.includes;



var USES_TO_LENGTH$1 = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
_export({ target: 'Array', proto: true, forced: !USES_TO_LENGTH$1 }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod$3 = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

var stringTrim = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod$3(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod$3(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod$3(3)
};

var getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
var defineProperty$2 = objectDefineProperty.f;
var trim = stringTrim.trim;

var NUMBER = 'Number';
var NativeNumber = global_1[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classofRaw(objectCreate(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced_1(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classofRaw(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys$2 = descriptors ? getOwnPropertyNames$1(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys$2.length > j; j++) {
    if (has(NativeNumber, key = keys$2[j]) && !has(NumberWrapper, key)) {
      defineProperty$2(NumberWrapper, key, getOwnPropertyDescriptor$2(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global_1, NUMBER, NumberWrapper);
}

var max$1 = Math.max;
var min$3 = Math.min;
var floor$1 = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegexpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regexpExecAbstract(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max$1(min$3(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor$1(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
  * vue-class-component v7.2.3
  * (c) 2015-present Evan You
  * @license MIT
  */

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
// Without this check consumers will encounter hard to track down runtime errors.
function reflectionIsSupported() {
  return typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
}
function copyReflectionMetadata(to, from) {
  forwardMetadata(to, from);
  Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
    forwardMetadata(to.prototype, from.prototype, key);
  });
  Object.getOwnPropertyNames(from).forEach(function (key) {
    forwardMetadata(to, from, key);
  });
}

function forwardMetadata(to, from, propertyKey) {
  var metaKeys = propertyKey ? Reflect.getOwnMetadataKeys(from, propertyKey) : Reflect.getOwnMetadataKeys(from);
  metaKeys.forEach(function (metaKey) {
    var metadata = propertyKey ? Reflect.getOwnMetadata(metaKey, from, propertyKey) : Reflect.getOwnMetadata(metaKey, from);

    if (propertyKey) {
      Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
    } else {
      Reflect.defineMetadata(metaKey, metadata, to);
    }
  });
}

var fakeArray = {
  __proto__: []
};
var hasProto = fakeArray instanceof Array;
function createDecorator(factory) {
  return function (target, key, index) {
    var Ctor = typeof target === 'function' ? target : target.constructor;

    if (!Ctor.__decorators__) {
      Ctor.__decorators__ = [];
    }

    if (typeof index !== 'number') {
      index = undefined;
    }

    Ctor.__decorators__.push(function (options) {
      return factory(options, key, index);
    });
  };
}
function mixins() {
  for (var _len = arguments.length, Ctors = new Array(_len), _key = 0; _key < _len; _key++) {
    Ctors[_key] = arguments[_key];
  }

  return Vue.extend({
    mixins: Ctors
  });
}
function isPrimitive(value) {
  var type = _typeof(value);

  return value == null || type !== 'object' && type !== 'function';
}

function collectDataFromConstructor(vm, Component) {
  // override _init to prevent to init as Vue instance
  var originalInit = Component.prototype._init;

  Component.prototype._init = function () {
    var _this = this;

    // proxy to actual vm
    var keys = Object.getOwnPropertyNames(vm); // 2.2.0 compat (props are no longer exposed as self properties)

    if (vm.$options.props) {
      for (var key in vm.$options.props) {
        if (!vm.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
    }

    keys.forEach(function (key) {
      if (key.charAt(0) !== '_') {
        Object.defineProperty(_this, key, {
          get: function get() {
            return vm[key];
          },
          set: function set(value) {
            vm[key] = value;
          },
          configurable: true
        });
      }
    });
  }; // should be acquired class property values


  var data = new Component(); // restore original _init to avoid memory leak (#209)

  Component.prototype._init = originalInit; // create plain data object

  var plainData = {};
  Object.keys(data).forEach(function (key) {
    if (data[key] !== undefined) {
      plainData[key] = data[key];
    }
  });

  return plainData;
}

var $internalHooks = ['data', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'render', 'errorCaptured', 'serverPrefetch' // 2.6
];
function componentFactory(Component) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  options.name = options.name || Component._componentTag || Component.name; // prototype props.

  var proto = Component.prototype;
  Object.getOwnPropertyNames(proto).forEach(function (key) {
    if (key === 'constructor') {
      return;
    } // hooks


    if ($internalHooks.indexOf(key) > -1) {
      options[key] = proto[key];
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(proto, key);

    if (descriptor.value !== void 0) {
      // methods
      if (typeof descriptor.value === 'function') {
        (options.methods || (options.methods = {}))[key] = descriptor.value;
      } else {
        // typescript decorated data
        (options.mixins || (options.mixins = [])).push({
          data: function data() {
            return _defineProperty({}, key, descriptor.value);
          }
        });
      }
    } else if (descriptor.get || descriptor.set) {
      // computed properties
      (options.computed || (options.computed = {}))[key] = {
        get: descriptor.get,
        set: descriptor.set
      };
    }
  });
  (options.mixins || (options.mixins = [])).push({
    data: function data() {
      return collectDataFromConstructor(this, Component);
    }
  }); // decorate options

  var decorators = Component.__decorators__;

  if (decorators) {
    decorators.forEach(function (fn) {
      return fn(options);
    });
    delete Component.__decorators__;
  } // find super


  var superProto = Object.getPrototypeOf(Component.prototype);
  var Super = superProto instanceof Vue ? superProto.constructor : Vue;
  var Extended = Super.extend(options);
  forwardStaticMembers(Extended, Component, Super);

  if (reflectionIsSupported()) {
    copyReflectionMetadata(Extended, Component);
  }

  return Extended;
}
var shouldIgnore = {
  prototype: true,
  arguments: true,
  callee: true,
  caller: true
};

function forwardStaticMembers(Extended, Original, Super) {
  // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
  Object.getOwnPropertyNames(Original).forEach(function (key) {
    // Skip the properties that should not be overwritten
    if (shouldIgnore[key]) {
      return;
    } // Some browsers does not allow reconfigure built-in properties


    var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);

    if (extendedDescriptor && !extendedDescriptor.configurable) {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(Original, key); // If the user agent does not support `__proto__` or its family (IE <= 10),
    // the sub class properties may be inherited properties from the super class in TypeScript.
    // We need to exclude such properties to prevent to overwrite
    // the component options object which stored on the extended constructor (See #192).
    // If the value is a referenced value (object or function),
    // we can check equality of them and exclude it if they have the same reference.
    // If it is a primitive value, it will be forwarded for safety.

    if (!hasProto) {
      // Only `cid` is explicitly exluded from property forwarding
      // because we cannot detect whether it is a inherited property or not
      // on the no `__proto__` environment even though the property is reserved.
      if (key === 'cid') {
        return;
      }

      var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);

      if (!isPrimitive(descriptor.value) && superDescriptor && superDescriptor.value === descriptor.value) {
        return;
      }
    } // Warn if the users manually declare reserved properties

    Object.defineProperty(Extended, key, descriptor);
  });
}

function Component(options) {
  if (typeof options === 'function') {
    return componentFactory(options);
  }

  return function (Component) {
    return componentFactory(Component, options);
  };
}

Component.registerHooks = function registerHooks(keys) {
  $internalHooks.push.apply($internalHooks, _toConsumableArray(keys));
};

/** vue-property-decorator verson 8.4.1 MIT LICENSE copyright 2019 kaorun343 */
/** Used for keying reactive provide/inject properties */
var reactiveInjectKey = '__reactiveInject__';
/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
function Inject(options) {
    return createDecorator(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[key] = options || key;
        }
    });
}
/**
 * decorator of a reactive inject
 * @param from key
 * @return PropertyDecorator
 */
function InjectReactive(options) {
    return createDecorator(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            var fromKey_1 = !!options ? options.from || options : key;
            var defaultVal_1 = (!!options && options.default) || undefined;
            if (!componentOptions.computed)
                componentOptions.computed = {};
            componentOptions.computed[key] = function () {
                var obj = this[reactiveInjectKey];
                return obj ? obj[fromKey_1] : defaultVal_1;
            };
            componentOptions.inject[reactiveInjectKey] = reactiveInjectKey;
        }
    });
}
function produceProvide(original) {
    var provide = function () {
        var _this = this;
        var rv = typeof original === 'function' ? original.call(this) : original;
        rv = Object.create(rv || null);
        // set reactive services (propagates previous services if necessary)
        rv[reactiveInjectKey] = this[reactiveInjectKey] || {};
        for (var i in provide.managed) {
            rv[provide.managed[i]] = this[i];
        }
        var _loop_1 = function (i) {
            rv[provide.managedReactive[i]] = this_1[i]; // Duplicates the behavior of `@Provide`
            if (!rv[reactiveInjectKey].hasOwnProperty(provide.managedReactive[i])) {
                Object.defineProperty(rv[reactiveInjectKey], provide.managedReactive[i], {
                    enumerable: true,
                    get: function () { return _this[i]; },
                });
            }
        };
        var this_1 = this;
        for (var i in provide.managedReactive) {
            _loop_1(i);
        }
        return rv;
    };
    provide.managed = {};
    provide.managedReactive = {};
    return provide;
}
function needToProduceProvide(original) {
    return (typeof original !== 'function' ||
        (!original.managed && !original.managedReactive));
}
/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */
function Provide(key) {
    return createDecorator(function (componentOptions, k) {
        var provide = componentOptions.provide;
        if (needToProduceProvide(provide)) {
            provide = componentOptions.provide = produceProvide(provide);
        }
        provide.managed[k] = key || k;
    });
}
/**
 * decorator of a reactive provide
 * @param key key
 * @return PropertyDecorator | void
 */
function ProvideReactive(key) {
    return createDecorator(function (componentOptions, k) {
        var provide = componentOptions.provide;
        // inject parent reactive services (if any)
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject = componentOptions.inject || {};
            componentOptions.inject[reactiveInjectKey] = {
                from: reactiveInjectKey,
                default: {},
            };
        }
        if (needToProduceProvide(provide)) {
            provide = componentOptions.provide = produceProvide(provide);
        }
        provide.managedReactive[k] = key || k;
    });
}
/** @see {@link https://github.com/vuejs/vue-class-component/blob/master/src/reflect.ts} */
var reflectMetadataIsSupported = typeof Reflect !== 'undefined' && typeof Reflect.getMetadata !== 'undefined';
function applyMetadata(options, target, key) {
    if (reflectMetadataIsSupported) {
        if (!Array.isArray(options) &&
            typeof options !== 'function' &&
            typeof options.type === 'undefined') {
            var type = Reflect.getMetadata('design:type', target, key);
            if (type !== Object) {
                options.type = type;
            }
        }
    }
}
/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
            componentOptions.model = { prop: k, event: event || k };
        })(target, key);
    };
}
/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
        })(target, key);
    };
}
/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return createDecorator(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        var watch = componentOptions.watch;
        if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {
            watch[path] = [watch[path]];
        }
        else if (typeof watch[path] === 'undefined') {
            watch[path] = [];
        }
        watch[path].push({ handler: handler, deep: deep, immediate: immediate });
    });
}
// Code copied from Vue/src/shared/util.js
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (_target, propertyKey, descriptor) {
        var key = hyphenate(propertyKey);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var emit = function (returnValue) {
                var emitName = event || key;
                if (returnValue === undefined) {
                    if (args.length === 0) {
                        _this.$emit(emitName);
                    }
                    else if (args.length === 1) {
                        _this.$emit(emitName, args[0]);
                    }
                    else {
                        _this.$emit(emitName, args);
                    }
                }
                else {
                    _this.$emit(emitName, returnValue);
                }
            };
            var returnValue = original.apply(this, args);
            if (isPromise(returnValue)) {
                returnValue.then(function (returnValue) {
                    emit(returnValue);
                });
            }
            else {
                emit(returnValue);
            }
            return returnValue;
        };
    };
}
function isPromise(obj) {
    return obj instanceof Promise || (obj && typeof obj.then === 'function');
}

var ContentAttributes =
/** @class */
function (_super) {
  __extends(ContentAttributes, _super);

  function ContentAttributes() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(ContentAttributes.prototype, "name", {
    get: function get() {
      return 'content_attributes';
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContentAttributes.prototype, "defaultOptions", {
    get: function get() {
      return {
        spellcheck: true
      };
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContentAttributes.prototype, "plugins", {
    get: function get() {
      return [new Plugin({
        props: {
          attributes: __assign({}, this.options)
        }
      })];
    },
    enumerable: true,
    configurable: true
  });
  return ContentAttributes;
}(Extension);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH$2 = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES$5 = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max$2 = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH$2 }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES$5];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max$2(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});

// `Number.isNaN` method
// https://tc39.github.io/ecma262/#sec-number.isnan
_export({ target: 'Number', stat: true }, {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof = toStringTagSupport ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
var objectToString = toStringTagSupport ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!toStringTagSupport) {
  redefine(Object.prototype, 'toString', objectToString, { unsafe: true });
}

var nativePromiseConstructor = global_1.Promise;

var redefineAll = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};

var defineProperty$3 = objectDefineProperty.f;



var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');

var setToStringTag = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG$2)) {
    defineProperty$3(it, TO_STRING_TAG$2, { configurable: true, value: TAG });
  }
};

var anInstance = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};

var iterators = {};

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype$1 = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod = function (it) {
  return it !== undefined && (iterators.Array === it || ArrayPrototype$1[ITERATOR] === it);
};

// optional / simple context binding
var functionBindContext = function (fn, that, length) {
  aFunction$1(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var ITERATOR$1 = wellKnownSymbol('iterator');

var getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$1]
    || it['@@iterator']
    || iterators[classof(it)];
};

// call something on iterator step with safe closing on error
var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};

var iterate_1 = createCommonjsModule(function (module) {
var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = functionBindContext(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};
});

var ITERATOR$2 = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR$2] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR$2] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};

var engineIsIos = /(iphone|ipod|ipad).*applewebkit/i.test(engineUserAgent);

var location = global_1.location;
var set$1 = global_1.setImmediate;
var clear = global_1.clearImmediate;
var process$1 = global_1.process;
var MessageChannel = global_1.MessageChannel;
var Dispatch = global_1.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global_1.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set$1 || !clear) {
  set$1 = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classofRaw(process$1) == 'process') {
    defer = function (id) {
      process$1.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !engineIsIos) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = functionBindContext(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global_1.addEventListener && typeof postMessage == 'function' && !global_1.importScripts && !fails(post)) {
    defer = post;
    global_1.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in documentCreateElement('script')) {
    defer = function (id) {
      html.appendChild(documentCreateElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

var task = {
  set: set$1,
  clear: clear
};

var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor.f;

var macrotask = task.set;


var MutationObserver$1 = global_1.MutationObserver || global_1.WebKitMutationObserver;
var process$2 = global_1.process;
var Promise$1 = global_1.Promise;
var IS_NODE = classofRaw(process$2) == 'process';
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor$3(global_1, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process$2.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process$2.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver$1 && !engineIsIos) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver$1(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise$1 && Promise$1.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise$1.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global_1, flush);
    };
  }
}

var microtask = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction$1(resolve);
  this.reject = aFunction$1(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
var f$5 = function (C) {
  return new PromiseCapability(C);
};

var newPromiseCapability = {
	f: f$5
};

var promiseResolve = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var hostReportErrors = function (a, b) {
  var console = global_1.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};

var perform = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};

var task$1 = task.set;










var SPECIES$6 = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = internalState.get;
var setInternalState$1 = internalState.set;
var getInternalPromiseState = internalState.getterFor(PROMISE);
var PromiseConstructor = nativePromiseConstructor;
var TypeError$1 = global_1.TypeError;
var document$2 = global_1.document;
var process$3 = global_1.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability$1 = newPromiseCapability.f;
var newGenericPromiseCapability = newPromiseCapability$1;
var IS_NODE$1 = classofRaw(process$3) == 'process';
var DISPATCH_EVENT = !!(document$2 && document$2.createEvent && global_1.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED$2 = isForced_1(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (engineV8Version === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE$1 && typeof PromiseRejectionEvent != 'function') return true;
  }
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (engineV8Version >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES$6] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED$2 || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify$1 = function (promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError$1('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document$2.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global_1.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (handler = global_1['on' + name]) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (promise, state) {
  task$1.call(global_1, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE$1) {
          process$3.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE$1 || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (promise, state) {
  task$1.call(global_1, function () {
    if (IS_NODE$1) {
      process$3.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify$1(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (promise === value) throw TypeError$1("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, promise, wrapper, state),
            bind(internalReject, promise, wrapper, state)
          );
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify$1(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, { done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED$2) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction$1(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState$1(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability$1(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE$1 ? process$3.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify$1(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };
  newPromiseCapability.f = newPromiseCapability$1 = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if ( typeof nativePromiseConstructor == 'function') {
    nativeThen = nativePromiseConstructor.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(nativePromiseConstructor.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') _export({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global_1, arguments));
      }
    });
  }
}

_export({ global: true, wrap: true, forced: FORCED$2 }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
_export({ target: PROMISE, stat: true, forced: FORCED$2 }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability$1(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

_export({ target: PROMISE, stat: true, forced:  FORCED$2 }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve( this, x);
  }
});

_export({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability$1(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction$1(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate_1(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability$1(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction$1(C.resolve);
      iterate_1(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

function noop() {}
/**
 * Check whether a value is NaN
 */

function isNaN$1(val) {
  return Number.isNaN(val);
}
function clamp(val, min, max) {
  if (val < min) {
    return min;
  }

  if (val > max) {
    return max;
  }

  return val;
}
function readFileDataUrl(file) {
  var reader = new FileReader();
  return new Promise(function (resolve, reject) {
    // @ts-ignore
    reader.onload = function (readerEvent) {
      return resolve(readerEvent.target.result);
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
/**
 * Create a cached version of a pure function.
 */

function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
/**
 * Capitalize a string.
 */

var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */

function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

var i18nMixin =
/** @class */
function (_super) {
  __extends(i18nMixin, _super);

  function i18nMixin() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  i18nMixin.prototype.t = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    } // @ts-ignore


    return t.apply(this, args);
  };

  i18nMixin = __decorate([Component], i18nMixin);
  return i18nMixin;
}(Vue);

var Menubar =
/** @class */
function (_super) {
  __extends(Menubar, _super);

  function Menubar() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Menubar.prototype.generateCommandButtonComponentSpecs = function (editorContext) {
    var _this = this;

    var extensionManager = this.editor.extensions;
    return extensionManager.extensions.reduce(function (acc, extension) {
      if (typeof extension.menuBtnView !== 'function') return acc;
      var menuBtnComponentSpec = extension.menuBtnView(__assign(__assign({}, editorContext), {
        editor: _this.editor
      }));

      if (Array.isArray(menuBtnComponentSpec)) {
        return __spreadArrays(acc, menuBtnComponentSpec);
      }

      return __spreadArrays(acc, [menuBtnComponentSpec]);
    }, []);
  };

  __decorate([Prop({
    type: Editor,
    required: true
  })], Menubar.prototype, "editor", void 0);

  Menubar = __decorate([Component({
    components: {
      EditorMenuBar: EditorMenuBar
    }
  })], Menubar);
  return Menubar;
}(Vue);

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__ = Menubar;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('editor-menu-bar',{attrs:{"editor":_vm.editor},scopedSlots:_vm._u([{key:"default",fn:function(editorContext){return [_vm._t("default",[_c('div',{staticClass:"el-tiptap-editor__menu-bar"},_vm._l((_vm.generateCommandButtonComponentSpecs(editorContext)),function(spec,i){return _c(spec.component,_vm._g(_vm._b({key:'command-button' + i,tag:"component"},'component',spec.componentProps,false),spec.componentEvents))}),1)],null,editorContext)]}}],null,true)})};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod$4 = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = indexedObject(O);
    var boundFunction = functionBindContext(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$4(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod$4(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod$4(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod$4(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod$4(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod$4(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$4(6)
};

var $some = arrayIteration.some;



var STRICT_METHOD$1 = arrayMethodIsStrict('some');
var USES_TO_LENGTH$3 = arrayMethodUsesToLength('some');

// `Array.prototype.some` method
// https://tc39.github.io/ecma262/#sec-array.prototype.some
_export({ target: 'Array', proto: true, forced: !STRICT_METHOD$1 || !USES_TO_LENGTH$3 }, {
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var quot = /"/g;

// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
// https://tc39.github.io/ecma262/#sec-createhtml
var createHtml = function (string, tag, attribute, value) {
  var S = String(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
var stringHtmlForced = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};

// `String.prototype.link` method
// https://tc39.github.io/ecma262/#sec-string.prototype.link
_export({ target: 'String', proto: true, forced: stringHtmlForced('link') }, {
  link: function link(url) {
    return createHtml(this, 'a', 'href', url);
  }
});

function _toConsumableArray$1(arr) {
  return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread$1();
}

function _arrayWithoutHoles$1(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray$1(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function getMarkAttrs(state, type) {
  var _state$selection = state.selection,
      from = _state$selection.from,
      to = _state$selection.to;
  var marks = [];
  state.doc.nodesBetween(from, to, function (node) {
    marks = [].concat(_toConsumableArray$1(marks), _toConsumableArray$1(node.marks));
  });
  var mark = marks.find(function (markItem) {
    return markItem.type.name === type.name;
  });

  if (mark) {
    return mark.attrs;
  }

  return {};
}

function getMarkRange() {
  var $pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!$pos || !type) {
    return false;
  }

  var start = $pos.parent.childAfter($pos.parentOffset);

  if (!start.node) {
    return false;
  }

  var link = start.node.marks.find(function (mark) {
    return mark.type === type;
  });

  if (!link) {
    return false;
  }

  var startIndex = $pos.index();
  var startPos = $pos.start() + start.offset;
  var endIndex = startIndex + 1;
  var endPos = startPos + start.node.nodeSize;

  while (startIndex > 0 && link.isInSet($pos.parent.child(startIndex - 1).marks)) {
    startIndex -= 1;
    startPos -= $pos.parent.child(startIndex).nodeSize;
  }

  while (endIndex < $pos.parent.childCount && link.isInSet($pos.parent.child(endIndex).marks)) {
    endPos += $pos.parent.child(endIndex).nodeSize;
    endIndex += 1;
  }

  return {
    from: startPos,
    to: endPos
  };
}

var defineProperty$4 = objectDefineProperty.f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (descriptors && !(NAME in FunctionPrototype)) {
  defineProperty$4(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}

// This alphabet uses a-z A-Z 0-9 _- symbols.
// Symbols are generated for smaller size.
// -_zyxwvutsrqponmlkjihgfedcba9876543210ZYXWVUTSRQPONMLKJIHGFEDCBA
var url = '-_';
// Loop from 36 to 0 (from z to a and 9 to 0 in Base36).
var i = 36;
while (i--) {
  // 36 is radix. Number.prototype.toString(36) returns number
  // in Base36 representation. Base36 is like hex, but it uses 0–9 and a-z.
  url += i.toString(36);
}
// Loop from 36 to 10 (from Z to A in Base36).
i = 36;
while (i-- - 10) {
  url += i.toString(36).toUpperCase();
}

/**
 * Generate URL-friendly unique ID. This method use non-secure predictable
 * random generator with bigger collision probability.
 *
 * @param {number} [size=21] The number of symbols in ID.
 *
 * @return {string} Random string.
 *
 * @example
 * const nanoid = require('nanoid/non-secure')
 * model.id = nanoid() //=> "Uakgb_J5m9g-0JDMbcJqL"
 *
 * @name nonSecure
 * @function
 */
var nonSecure = function (size) {
  var id = '';
  i = size || 21;
  // Compact alternative for `for (var i = 0; i < size; i++)`
  while (i--) {
    // `| 0` is compact and faster alternative for `Math.floor()`
    id += url[Math.random() * 64 | 0];
  }
  return id
};

let icons = {};

function warn (msg, vm) {
  if (!vm) {
    console.error(msg);
    return
  }
  vm.constructor.super.util.warn(msg, vm);
}

var script = {
  name: 'fa-icon',
  props: {
    name: {
      type: String,
      validator (val) {
        if (val && !(val in icons)) {
          warn(
            `Invalid prop: prop "name" is referring to an unregistered icon "${val}".\n` +
              `Please make sure you have imported this icon before using it.`,
            this
          );
          return false
        }
        return true
      }
    },
    title: String,
    scale: [Number, String],
    spin: Boolean,
    inverse: Boolean,
    pulse: Boolean,
    flip: {
      validator (val) {
        return val === 'horizontal' || val === 'vertical' || val === 'both'
      }
    },
    label: String,
    tabindex: [Number, String]
  },
  data () {
    return {
      id: getId('va-'),
      x: false,
      y: false,
      childrenWidth: 0,
      childrenHeight: 0,
      outerScale: 1
    }
  },
  computed: {
    normalizedScale () {
      let scale = this.scale;
      scale = typeof scale === 'undefined' ? 1 : Number(scale);
      if (isNaN(scale) || scale <= 0) {
        warn(
          `Invalid prop: prop "scale" should be a number over 0.`,
          this
        );
        return this.outerScale
      }
      return scale * this.outerScale
    },
    klass () {
      let classes = {
        'fa-icon': true,
        'fa-spin': this.spin,
        'fa-flip-horizontal': this.flip === 'horizontal',
        'fa-flip-vertical': this.flip === 'vertical',
        'fa-flip-both': this.flip === 'both',
        'fa-inverse': this.inverse,
        'fa-pulse': this.pulse
      };

      if (this.classes) {
        Object.keys(this.classes).forEach(c => {
          if (this.classes[c]) {
            classes[c] = true;
          }
        });
      }

      return classes
    },
    icon () {
      if (this.name) {
        return icons[this.name]
      }
      return null
    },
    box () {
      if (this.icon) {
        return `0 0 ${this.icon.width} ${this.icon.height}`
      }
      return `0 0 ${this.width} ${this.height}`
    },
    ratio () {
      if (!this.icon) {
        return 1
      }
      let { width, height } = this.icon;
      return Math.max(width, height) / 16
    },
    width () {
      return (
        this.childrenWidth ||
        (this.icon && (this.icon.width / this.ratio) * this.normalizedScale) ||
        0
      )
    },
    height () {
      return (
        this.childrenHeight ||
        (this.icon && (this.icon.height / this.ratio) * this.normalizedScale) ||
        0
      )
    },
    style () {
      if (this.normalizedScale === 1) {
        return false
      }
      return {
        fontSize: this.normalizedScale + 'em'
      }
    },
    raw () {
      // generate unique id for each icon's SVG element with ID
      if (!this.icon || !this.icon.raw) {
        return null
      }
      let raw = this.icon.raw;
      let ids = {};
      raw = raw.replace(
        /\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,
        (match, quote, id) => {
          let uniqueId = getId('vat-');
          ids[id] = uniqueId;
          return ` id="${uniqueId}"`
        }
      );
      raw = raw.replace(
        /#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,
        (match, rawId, _, pointerId) => {
          let id = rawId || pointerId;
          if (!id || !ids[id]) {
            return match
          }

          return `#${ids[id]}`
        }
      );

      return raw
    },
    focusable () {
      let { tabindex } = this;
      if (tabindex == null) {
        return 'false'
      }
      let index =
        typeof tabindex === 'string' ? parseInt(tabindex, 10) : tabindex;
      if (index >= 0) {
        return null
      }
      return 'false'
    }
  },
  mounted () {
    this.updateStack();
  },
  updated () {
    this.updateStack();
  },
  methods: {
    updateStack () {
      if (!this.name && this.name !== null && this.$children.length === 0) {
        warn(`Invalid prop: prop "name" is required.`, this);
        return
      }

      if (this.icon) {
        return
      }

      let width = 0;
      let height = 0;
      this.$children.forEach(child => {
        child.outerScale = this.normalizedScale;

        width = Math.max(width, child.width);
        height = Math.max(height, child.height);
      });
      this.childrenWidth = width;
      this.childrenHeight = height;
      this.$children.forEach(child => {
        child.x = (width - child.width) / 2;
        child.y = (height - child.height) / 2;
      });
    }
  },
  render (h) {
    if (this.name === null) {
      return h()
    }

    let options = {
      class: this.klass,
      style: this.style,
      attrs: {
        role: this.$attrs.role || (this.label || this.title ? 'img' : null),
        'aria-label': this.label || null,
        'aria-hidden': !(this.label || this.title),
        tabindex: this.tabindex,
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height,
        viewBox: this.box,
        focusable: this.focusable
      },
      on: this.$listeners
    };

    let titleId = this.id;
    if (this.title) {
      options.attrs['aria-labelledby'] = titleId;
    }

    if (this.raw) {
      let html = `<g>${this.raw}</g>`;

      if (this.title) {
        html = `<title id="${titleId}">${escapeHTML(this.title)}</title>${html}`;
      }

      options.domProps = { innerHTML: html };
    }

    let content = this.title
      ? [h('title', { attrs: { id: titleId } }, this.title)]
      : [];

    return h(
      'svg',
      options,
      this.raw
        ? null
        : content.concat(
          [
            h(
              'g',
              this.$slots.default || (this.icon ? [
                ...this.icon.paths.map((path, i) =>
                  h('path', {
                    attrs: path,
                    key: `path-${i}`
                  })
                ),
                ...this.icon.polygons.map((polygon, i) =>
                  h('polygon', {
                    attrs: polygon,
                    key: `polygon-${i}`
                  })
                )
              ] : [])
            )]
        )
    )
  },
  register (data) {
    for (let name in data) {
      let icon = data[name];
      let { paths = [], d, polygons = [], points } = icon;

      if (d) {
        paths.push({ d });
      }

      if (points) {
        polygons.push({ points });
      }

      icons[name] = assign({}, icon, {
        paths,
        polygons
      });
    }
  },
  icons
};

function assign (obj, ...sources) {
  sources.forEach(source => {
    for (let key in source) {
      if (source.hasOwnProperty(key)) {
        obj[key] = source[key];
      }
    }
  });

  return obj
}

function getId (prefix = '') {
  return prefix + nonSecure(7)
}

const ESCAPE_MAP = {
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '&': '&amp;'
};

function escapeHTML (html) {
  return html.replace(/[<>"&]/g, c => ESCAPE_MAP[c] || c)
}

/* script */
const __vue_script__$1 = script;
/* template */

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = undefined;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = normalizeComponent(
    {},
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    undefined,
    undefined,
    undefined
  );

__vue_component__$1.register({
  heading: {
    width: 512,
    height: 512,
    paths: [
      {
        d: 'M448 96v320h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-160c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32v-128h-192v128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-160c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32v-320h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32v128h192v-128h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32z'
      }
    ]
  }
});

__vue_component__$1.register({
  font: {
    width: 448,
    height: 512,
    paths: [
      {
        d: 'M432 416c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-128c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h19.6l-23.3-64h-152.6l-23.3 64h19.6c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-128c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h23.4l130.7-362.3c4.1-12 17.6-21.7 30.3-21.7h0 47.2 0c12.6 0 26.2 9.7 30.3 21.7l130.7 362.3h23.4zM176.8 272h94.3l-47.2-129.5z'
      }
    ]
  }
});

__vue_component__$1.register({
  tint: {
    width: 352,
    height: 512,
    paths: [
      {
        d: 'M205.2 22.1c47 158.5 146.8 200.1 146.8 311.8 0 98.4-78.7 178.1-176 178.1s-176-79.7-176-178.1c0-111.2 100-154.1 146.8-311.8 9-30.1 50.5-28.8 58.4 0zM176 448c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.1 0-80-35.9-80-80 0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.8 50.3 112 112 112z'
      }
    ]
  }
});

__vue_component__$1.register({
  highlighter: {
    width: 544,
    height: 512,
    paths: [
      {
        d: 'M0 480l68.3-70.5 67 67-35.5 35.5zM124.6 240l41.5-35.4 173.3 173.3-35.5 41.6c-9.5 10.8-24.4 15-38.2 10.8l-42.7-13.1-50.9 50.9-96.2-96.2 50.9-50.9-13-42.8c-0.9-2.9-1.6-7.7-1.6-10.7 0-9.1 5.5-21.4 12.4-27.4zM527.9 79.3c20.5 20.5 21.5 53.4 2.3 75.1l-169.9 199.1-169.8-169.8 199.1-170c21.7-19.2 54.6-18.1 75.1 2.4z'
      }
    ]
  }
});

__vue_component__$1.register({
  bold: {
    width: 384,
    height: 512,
    paths: [
      {
        d: 'M333.5 238c34.4 27.5 55.6 71.2 50.8 119.6-6.9 70.7-70.2 122.4-141 122.4h-209.3c-8.8 0-16-7.2-16-16v-48c0-8.8 7.2-16 16-16h31.9v-288h-31.9c-8.8 0-16-7.2-16-16v-48c0-8.8 7.2-16 16-16h199.4c74.6 0 134.4 64.5 127.1 140.8-2 20.3-14.1 49.5-27 65.2zM145.7 112v96h87.8c26.5 0 48-21.5 48-48s-21.5-48-48-48h-87.8zM233.4 400c30.9 0 56-25.1 56-56s-25.1-56-56-56h-87.8v112h87.8z'
      }
    ]
  }
});

__vue_component__$1.register({
  underline: {
    width: 448,
    height: 512,
    paths: [
      {
        d: 'M32 64c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h144c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32v160c0 44.2 35.8 80 80 80s80-35.8 80-80v-160h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h144c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32v160c0 88.2-71.8 160-160 160s-160-71.8-160-160v-160h-32zM432 448c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-416c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h416z'
      }
    ]
  }
});

__vue_component__$1.register({
  italic: {
    width: 320,
    height: 512,
    paths: [
      {
        d: 'M320 48v32c0 8.8-7.2 16-16 16h-62.8l-80 320h46.8c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-192c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h62.8l80-320h-46.8c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h192c8.8 0 16 7.2 16 16z'
      }
    ]
  }
});

__vue_component__$1.register({
  strikethrough: {
    width: 512,
    height: 512,
    paths: [
      {
        d: 'M496 224c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-480c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h102.3c-11.7-16.5-19.8-35.5-21.8-56.4-0.3-3.3-0.6-8.7-0.6-12 0-68.2 55.4-123.6 123.6-123.7h68 0c43.7 0 95 31.7 114.5 70.8l0.5 1c0.9 1.9 1.7 5.1 1.7 7.1 0 5.5-4 11.9-8.8 14.3l-42.9 21.5c-1.9 0.9-5.1 1.7-7.2 1.7-5.5 0-11.9-4-14.3-8.8-7.6-15.2-27.6-27.6-44.6-27.6h0-66.8c-24 0-43.5 19.5-43.5 43.5 0 17.7 13.8 36.4 30.7 41.6l87.2 26.8h202.1zM315.8 320h94.4c2.2 6.6 4.6 17.5 5.3 24.4 0.3 3.3 0.6 8.7 0.6 12 0 68.2-55.4 123.6-123.6 123.7h-68 0c-43.7 0-95-31.7-114.5-70.8l-0.5-1c-0.9-1.9-1.7-5.1-1.7-7.1 0-5.5 4-11.9 8.8-14.3l42.9-21.5c1.9-0.9 5.1-1.7 7.2-1.7 5.5 0 11.9 4 14.3 8.8 7.6 15.2 27.6 27.6 44.6 27.6h0 66.8c24 0 43.5-19.5 43.5-43.5 0-13.2-9.1-29.5-20.2-36.5z'
      }
    ]
  }
});

__vue_component__$1.register({
  link: {
    width: 512,
    height: 512,
    paths: [
      {
        d: 'M326.6 185.4c59.7 59.8 58.9 155.7 0.4 214.6-0.1 0.1-0.2 0.3-0.4 0.4l-67.2 67.2c-59.3 59.3-155.7 59.3-215 0-59.3-59.3-59.3-155.7 0-215l37.1-37.1c9.8-9.8 26.8-3.3 27.3 10.6 0.6 17.7 3.8 35.5 9.7 52.7 2 5.8 0.6 12.3-3.8 16.6l-13.1 13.1c-28 28-28.9 73.7-1.2 102 28 28.6 74.1 28.7 102.3 0.5l67.2-67.2c28.2-28.2 28.1-73.8 0-101.8-3.7-3.7-7.4-6.6-10.3-8.6-3.7-2.5-6.8-8.2-6.9-12.6-0.4-10.6 3.3-21.5 11.7-29.8l21.1-21.1c5.5-5.5 14.2-6.2 20.6-1.7 6.1 4.2 15.3 12 20.5 17.2zM467.5 44.4c59.3 59.3 59.3 155.7 0 215l-37.1 37.1c-9.8 9.8-26.8 3.3-27.3-10.6-0.6-17.7-3.8-35.5-9.7-52.7-2-5.8-0.6-12.3 3.8-16.6l13.1-13.1c28-28 28.9-73.7 1.2-102-28-28.6-74.1-28.7-102.3-0.5l-67.2 67.2c-28.2 28.2-28.1 73.8 0 101.8 3.7 3.7 7.4 6.6 10.3 8.6 3.7 2.5 6.8 8.2 6.9 12.6 0.4 10.6-3.3 21.5-11.7 29.8l-21.1 21.1c-5.5 5.5-14.2 6.2-20.6 1.7-6.1-4.2-15.3-12-20.5-17.2-59.7-59.8-58.9-155.7-0.4-214.6 0.1-0.1 0.2-0.3 0.4-0.4l67.2-67.2c59.3-59.3 155.7-59.3 215 0z'
      }
    ]
  }
});

__vue_component__$1.register({
  edit: {
    width: 576,
    height: 512,
    paths: [
      {
        d: 'M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8l-218.4 218.4-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8 218.4-218.4c3.8-3.8 10-3.8 13.8 0zM564.6 60.3c15.2 15.2 15.2 39.9 0 55.2l-35.4 35.4c-3.8 3.8-10 3.8-13.8 0l-90.2-90.2c-3.8-3.8-3.8-10 0-13.8l35.4-35.4c15.3-15.2 40-15.2 55.2 0zM384 346.2c0-3.2 1.3-6.2 3.5-8.5l40-40c7.6-7.5 20.5-2.2 20.5 8.5v157.8c0 26.5-21.5 48-48 48h-352c-26.5 0-48-21.5-48-48v-352c0-26.5 21.5-48 48-48h285.8c10.7 0 16.1 12.9 8.5 20.5l-40 40c-2.3 2.2-5.3 3.5-8.5 3.5h-229.8v320h320v-101.8z'
      }
    ]
  }
});

__vue_component__$1.register({
  unlink: {
    width: 512,
    height: 512,
    paths: [
      {
        d: 'M304.1 405.9c4.7 4.7 4.7 12.3 0 17l-44.7 44.7c-59.3 59.3-155.7 59.3-215 0-59.3-59.3-59.3-155.7 0-215l44.7-44.7c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17l-44.7 44.7c-28.1 28.1-28.1 73.8 0 101.8 28.1 28.1 73.8 28.1 101.8 0l44.7-44.7c4.7-4.7 12.3-4.7 17 0zM247.5 145.7l-39.6-39.6c-4.7-4.7-4.7-12.3 0-17l44.7-44.7c59.3-59.3 155.7-59.3 215 0s59.3 155.7 0 215l-44.7 44.7c-4.7 4.7-12.3 4.7-17 0l-39.6-39.6c-4.7-4.7-4.7-12.3 0-17l44.7-44.7c28.1-28.1 28.1-73.8 0-101.8-28.1-28.1-73.8-28.1-101.8 0l-44.7 44.7c-4.7 4.7-12.3 4.7-17 0zM482.3 505c-9.4 9.4-24.6 9.4-33.9 0l-441.4-441.4c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l441.4 441.4c9.4 9.4 9.4 24.6 0 33.9z'
      }
    ]
  }
});

__vue_component__$1.register({
  'external-link-alt': {
    width: 512,
    height: 512,
    paths: [
      {
        d: 'M432 320c8.8 0 16 7.2 16 16v128c0 26.5-21.5 48-48 48h-352c-26.5 0-48-21.5-48-48v-352c0-26.5 21.5-48 48-48h160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-144v320h320v-112c0-8.8 7.2-16 16-16h32zM488 0c13.2 0 24 10.8 24 24v128c0 21.5-26 32-41 17l-35.7-35.7-243.6 243.7c-3.9 3.9-11.5 7.1-17 7.1s-13.1-3.2-17-7.1l-22.7-22.6c-3.9-3.9-7.1-11.5-7.1-17s3.2-13.1 7.1-17l243.7-243.6-35.7-35.7c-15-15.1-4.4-41 17-41h128z'
      }
    ]
  }
});

__vue_component__$1.register({
  image: {
    width: 512,
    height: 512,
    paths: [
      {
        d: 'M464 448h-416c-26.5 0-48-21.5-48-48v-288c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48zM112 120c-30.9 0-56 25.1-56 56s25.1 56 56 56 56-25.1 56-56-25.1-56-56-56zM64 384h384v-112l-87.5-87.5c-4.7-4.7-12.3-4.7-17 0l-135.5 135.5-55.5-55.5c-4.7-4.7-12.3-4.7-17 0l-71.5 71.5v48z'
      }
    ]
  }
});

__vue_component__$1.register({
  'regular/image': {
    width: 512,
    height: 512,
    paths: [
      {
        d: 'M464 64c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48h-416c-26.5 0-48-21.5-48-48v-288c0-26.5 21.5-48 48-48h416zM458 400c3.3 0 6-2.7 6-6v-276c0-3.3-2.7-6-6-6h-404c-3.3 0-6 2.7-6 6v276c0 3.3 2.7 6 6 6h404zM128 152c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zM96 352v-48l39.5-39.5c4.7-4.7 12.3-4.7 17 0l39.5 39.5 119.5-119.5c4.7-4.7 12.3-4.7 17 0l87.5 87.5v80h-320z'
      }
    ]
  }
});

__vue_component__$1.register({
  'ellipsis-h': {
    width: 512,
    height: 512,
    paths: [
      {
        d: 'M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zM432 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM80 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72z'
      }
    ]
  }
});

__vue_component__$1.register({
  'regular/trash-alt': {
    width: 448,
    height: 512,
    paths: [
      {
        d: 'M268 416c-6.6 0-12-5.4-12-12v-216c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v216c0 6.6-5.4 12-12 12h-24zM432 80c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-16v336c0 26.5-21.5 48-48 48h-288c-26.5 0-48-21.5-48-48v-336h-16c-8.8 0-16-7.2-16-16v-16c0-8.8 7.2-16 16-16h82.4l34-56.7c7.7-12.9 26.2-23.3 41.2-23.3h0 100.8 0c15 0 33.4 10.4 41.2 23.3l34 56.7h82.4zM171.8 50.9l-17.5 29.1h139.2l-17.5-29.1c-1-1.6-3.3-2.9-5.1-2.9h0-94 0c-1.9 0-4.2 1.3-5.1 2.9zM368 464v-336h-288v336h288zM156 416c-6.6 0-12-5.4-12-12v-216c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v216c0 6.6-5.4 12-12 12h-24z'
      }
    ]
  }
});

__vue_component__$1.register({
  video: {
    width: 576,
    height: 512,
    paths: [
      {
        d: 'M336.2 64c26.4 0 47.8 21.4 47.8 47.8v288.4c0 26.4-21.4 47.8-47.8 47.8h-288.4c-26.4 0-47.8-21.4-47.8-47.8v-288.4c0-26.4 21.4-47.8 47.8-47.8h288.4zM525.6 101.7c21.3-14.6 50.4 0.4 50.4 25.8v256.9c0 25.5-29.2 40.4-50.4 25.8l-109.6-75.5v-157.4z'
      }
    ]
  }
});

__vue_component__$1.register({
  flag: {
    width: 512,
    height: 512,
    paths: [
      {
        d: 'M349.6 98.8c40.5 0 82.6-15.9 116.9-31.9 21.2-9.9 45.5 5.6 45.5 29v243.1c0 10.5-5.2 20.4-13.8 26.4-35.8 24.6-74.3 40.9-122.5 40.9-67.4 0-111.6-34.8-165.2-34.8-50.9 0-86.1 10.1-114.4 22.1v94.4c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24v-386.1c-14.5-10.1-24-26.9-24-45.9 0-31.7 26.3-57.3 58.3-56 28.5 1.2 51.8 24 53.6 52.4 0.1 1 0.1 2.6 0.1 3.6 0 5.7-1.7 14.7-3.7 20 20.7-7.6 43.1-12 68-12 67.4 0 111.6 34.8 165.2 34.8z'
      }
    ]
  }
});

__vue_component__$1.register({
  code: {
    width: 640,
    height: 512,
    paths: [
      {
        d: 'M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9l136.5-470.2c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9l-136.5 470.2c-1.9 6.4-8.5 10.1-14.9 8.2zM164.9 399.3c-4.5 4.9-12.1 5.1-17 0.5l-144.1-135.1c-5.1-4.7-5.1-12.8 0-17.5l144.1-135c4.9-4.6 12.5-4.3 17 0.5l43.5 46.4c4.7 4.9 4.3 12.7-0.8 17.2l-90.6 79.7 90.6 79.7c5.1 4.5 5.4 12.3 0.8 17.2zM492.1 399.9c-4.9 4.5-12.5 4.3-17-0.6l-43.5-46.4c-4.7-4.9-4.3-12.7 0.8-17.2l90.6-79.7-90.6-79.8c-5.1-4.5-5.4-12.3-0.8-17.2l43.5-46.4c4.6-4.8 12.2-5 17-0.5l144.1 135.2c5.1 4.7 5.1 12.8 0 17.5z'
      }
    ]
  }
});

__vue_component__$1.register({
  'quote-right': {
    width: 512,
    height: 512,
    paths: [
      {
        d: 'M464 32c26.5 0 48 21.5 48 48v240c0 88.4-71.6 160-160 160h-8c-13.3 0-24-10.7-24-24v-48c0-13.3 10.7-24 24-24h8c35.3 0 64-28.7 64-64v-64h-80c-26.5 0-48-21.5-48-48v-128c0-26.5 21.5-48 48-48h128zM176 32c26.5 0 48 21.5 48 48v240c0 88.4-71.6 160-160 160h-8c-13.3 0-24-10.7-24-24v-48c0-13.3 10.7-24 24-24h8c35.3 0 64-28.7 64-64v-64h-80c-26.5 0-48-21.5-48-48v-128c0-26.5 21.5-48 48-48h128z'
      }
    ]
  }
});

__vue_component__$1.register({
  'align-left': {
    width: 448,
    height: 512,
    paths: [
      {
        d: 'M12.8 352c-7.1 0-12.8-5.7-12.8-12.8v0-38.3 0c0-7.1 5.7-12.8 12.8-12.8h0 262.3 0c7.1 0 12.8 5.7 12.8 12.8v0 38.3 0c0 7.1-5.7 12.8-12.8 12.8h0-262.3zM12.8 96c-7.1 0-12.8-5.7-12.8-12.8v0-38.3 0c0-7.1 5.7-12.8 12.8-12.8h0 262.3 0c7.1 0 12.8 5.7 12.8 12.8v0 38.3 0c0 7.1-5.7 12.8-12.8 12.8h0-262.3zM432 160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-416c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h416zM432 416c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-416c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h416z'
      }
    ]
  }
});

__vue_component__$1.register({
  'align-center': {
    width: 448,
    height: 512,
    paths: [
      {
        d: 'M432 160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-416c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h416zM432 416c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-416c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h416zM108.1 96c-6.7 0-12.1-5.4-12.1-12.1v-39.8c0-6.7 5.4-12.1 12.1-12.1h0 231.8c6.7 0 12.1 5.4 12.1 12.1v39.8 0c0 6.7-5.4 12.1-12.1 12.1v0h-231.8zM339.9 352h-231.8c-6.7 0-12.1-5.4-12.1-12.1v-39.8c0-6.7 5.4-12.1 12.1-12.1h0 231.8c6.7 0 12.1 5.4 12.1 12.1v39.8 0c0 6.7-5.4 12.1-12.1 12.1v0z'
      }
    ]
  }
});

__vue_component__$1.register({
  'align-right': {
    width: 448,
    height: 512,
    paths: [
      {
        d: 'M16 224c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-416zM432 416c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-416c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h416zM435.2 32c7.1 0 12.8 5.7 12.8 12.8v0 38.3 0c0 7.1-5.7 12.8-12.8 12.8h0-262.3 0c-7.1 0-12.8-5.7-12.8-12.8v0-38.3 0c0-7.1 5.7-12.8 12.8-12.8h0 262.3zM435.2 288c7.1 0 12.8 5.7 12.8 12.8v0 38.3 0c0 7.1-5.7 12.8-12.8 12.8h0-262.3 0c-7.1 0-12.8-5.7-12.8-12.8v0-38.3 0c0-7.1 5.7-12.8 12.8-12.8h0 262.3z'
      }
    ]
  }
});

__vue_component__$1.register({
  'align-justify': {
    width: 448,
    height: 512,
    paths: [
      {
        d: 'M432 416c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-416c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h416zM432 288c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-416c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h416zM432 160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-416c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h416zM432 32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-416c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h416z'
      }
    ]
  }
});

__vue_component__$1.register({
  'text-height': {
    width: 576,
    height: 512,
    paths: [
      {
        d: 'M304 32c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32h-56v304h40c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-160c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h40v-304h-56v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16h288zM560 368c15.6 0 20.6 18 11.3 27.3l-80 80c-2.6 2.6-7.7 4.7-11.3 4.7s-8.7-2.1-11.3-4.7l-80-80c-10-10-3-27.3 11.3-27.3h48v-224h-48c-15.6 0-20.6-18-11.3-27.3l80-80c2.6-2.6 7.7-4.7 11.3-4.7s8.7 2.1 11.3 4.7l80 80c10 10 3 27.3-11.3 27.3h-48v224h48z'
      }
    ]
  }
});

__vue_component__$1.register({
  'list-ul': {
    width: 512,
    height: 512,
    paths: [
      {
        d: 'M48 48c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM48 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM48 368c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM496 384c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-320c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h320zM496 64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-320c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h320zM496 224c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-320c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h320z'
      }
    ]
  }
});

__vue_component__$1.register({
  'list-ol': {
    width: 512,
    height: 512,
    paths: [
      {
        d: 'M61.8 401c19.6 5.1 28.7 20.5 28.7 34.9 0 21.4-14.3 44.1-48.5 44.1-16.6 0-29.3-4.8-37-9.4-5.8-4.2-6.3-9.8-2.6-15.9l5.6-9.3c3.9-6.6 9.1-7 15.6-3.1 4.1 1.7 11 3.1 15.5 3.1 10.2 0 14.4-3.5 14.4-8.2 0-6.6-5.6-9.1-15.9-9.1h-4.7c-6 0-9.3-2.1-12.3-7.9l-1-1.9c-2.5-4.8-1.2-9.8 2.8-14.9l5.6-7c2.9-3.6 7.8-9.1 11-12.3h-22.8c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h57c7.5 0 11.3 4 11.3 11.3v3.3c0 0.2 0 0.6 0 0.9 0 4.2-2.3 10.2-5.1 13.3zM496 224c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-320c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h320zM496 64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-320c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h320zM496 384c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-320c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h320zM16 160c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16v-64h-8c-4.4 0-8-3.6-8-8 0-1 0.4-2.6 0.8-3.6l8-16c1.2-2.4 4.4-4.4 7.1-4.4h24c4.4 0 8 3.6 8 8v88h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8h-64zM12.1 320c-7 0-12.1-4-12.1-11.4v-4c0-47.3 51-56.4 51-69.1 0-7.2-6-8.8-9.3-8.8h-0.1c-3 0-7.2 1.7-9.4 3.8-5.1 4.9-10.5 7-16.1 2.4l-8.6-6.9c-5.8-4.5-7.2-9.8-2.8-15.4 6.7-8.8 19.1-18.8 40.5-18.8 19.5 0 44.5 10.5 44.5 39.6 0 37.8-45 46.2-48.3 56.4h38.7c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8h-67.9z'
      }
    ]
  }
});

__vue_component__$1.register({
  tasks: {
    width: 512,
    height: 512,
    paths: [
      {
        d: 'M139.6 35.5l17 16.5c1.9 1.9 3.4 5.7 3.4 8.5 0 2.8-1.6 6.6-3.5 8.5l-72.2 72.2-15.6 15.6c-2 1.9-6 3.5-8.8 3.5-2.8 0-6.8-1.6-8.8-3.5l-47.6-47.4c-1.9-1.9-3.5-5.8-3.5-8.5 0-2.8 1.6-6.6 3.5-8.5l15.7-15.7c1.9-1.9 5.7-3.5 8.5-3.5 2.8 0 6.6 1.6 8.5 3.5l22.7 22.1 63.7-63.3c1.9-1.9 5.7-3.5 8.5-3.5 2.8 0 6.6 1.6 8.5 3.5zM139.6 194.7l17 17c1.9 1.9 3.4 5.7 3.4 8.4 0 2.7-1.6 6.6-3.5 8.5l-72.2 72.2-15.7 15.7c-2 1.9-6 3.5-8.8 3.5s-6.8-1.6-8.8-3.5l-47.5-47.5c-1.9-1.9-3.5-5.7-3.5-8.5s1.6-6.6 3.5-8.5l15.7-15.7c1.9-1.9 5.7-3.5 8.5-3.5 2.8 0 6.6 1.6 8.5 3.5l22.7 22.1 63.7-63.7c1.9-1.9 5.7-3.5 8.5-3.5 2.8 0 6.6 1.6 8.5 3.5zM64 368c26.5 0 48 21.5 48 48s-21.5 48-48 48c-26.5 0-48.6-21.5-48.6-48s22.1-48 48.6-48zM496 384c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-288c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h288zM496 64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-288c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h288zM496 224c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-288c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h288z'
      }
    ]
  }
});

__vue_component__$1.register({
  indent: {
    width: 448,
    height: 512,
    paths: [
      {
        d: 'M27.3 363.3c-10 10-27.3 3-27.3-11.3v-192c0-14.2 17.3-21.3 27.3-11.3l96 96c2.6 2.6 4.7 7.7 4.7 11.3 0 3.7-2.1 8.7-4.7 11.3zM432 416c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-416c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h416zM435.2 288c7.1 0 12.8 5.7 12.8 12.8v0 38.3 0c0 7.1-5.7 12.8-12.8 12.8h0-230.3 0c-7.1 0-12.8-5.7-12.8-12.8v0-38.3 0c0-7.1 5.7-12.8 12.8-12.8h0 230.3zM435.2 160c7.1 0 12.8 5.7 12.8 12.8v0 38.3 0c0 7.1-5.7 12.8-12.8 12.8h0-230.3 0c-7.1 0-12.8-5.7-12.8-12.8v0-38.3 0c0-7.1 5.7-12.8 12.8-12.8h0 230.3zM432 32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-416c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h416z'
      }
    ]
  }
});

__vue_component__$1.register({
  outdent: {
    width: 448,
    height: 512,
    paths: [
      {
        d: 'M100.7 363.3l-96-96c-2.6-2.6-4.7-7.7-4.7-11.3s2.1-8.7 4.7-11.3l96-96c10-10 27.3-3 27.3 11.3v192c0 14.2-17.3 21.3-27.3 11.3zM432 416c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-416c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h416zM435.2 288c7.1 0 12.8 5.7 12.8 12.8v0 38.3 0c0 7.1-5.7 12.8-12.8 12.8h0-230.3 0c-7.1 0-12.8-5.7-12.8-12.8v0-38.3 0c0-7.1 5.7-12.8 12.8-12.8h0 230.3zM435.2 160c7.1 0 12.8 5.7 12.8 12.8v0 38.3 0c0 7.1-5.7 12.8-12.8 12.8h0-230.3 0c-7.1 0-12.8-5.7-12.8-12.8v0-38.3 0c0-7.1 5.7-12.8 12.8-12.8h0 230.3zM432 32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-416c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h416z'
      }
    ]
  }
});

__vue_component__$1.register({
  minus: {
    width: 448,
    height: 512,
    paths: [
      {
        d: 'M416 208c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-384c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h384z'
      }
    ]
  }
});

__vue_component__$1.register({
  table: {
    width: 512,
    height: 512,
    paths: [
      {
        d: 'M464 32c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48h-416c-26.5 0-48-21.5-48-48v-352c0-26.5 21.5-48 48-48h416zM224 416v-96h-160v96h160zM224 256v-96h-160v96h160zM448 416v-96h-160v96h160zM448 256v-96h-160v96h160z'
      }
    ]
  }
});

__vue_component__$1.register({
  'remove-format': {
    width: 640,
    height: 512,
    paths: [
      {
        d: 'M336 416c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-128c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32.5l26.5-79.6 67.1 51.8-9.3 27.8h11.2zM633.8 458.1c3.4 2.7 6.2 8.3 6.2 12.6 0 3-1.5 7.4-3.4 9.8l-19.6 25.3c-2.7 3.4-8.3 6.2-12.6 6.2-3 0-7.4-1.5-9.8-3.4l-588.4-454.7c-3.4-2.7-6.2-8.3-6.2-12.6 0-3 1.5-7.4 3.4-9.8l19.6-25.3c2.7-3.4 8.3-6.2 12.6-6.2 3 0 7.4 1.5 9.8 3.4l114.5 88.5v-43.9c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32h-117.8l-49.2 147.6zM309.9 207.8l31.9-95.8h-117.8v29.4z'
      }
    ]
  }
});

__vue_component__$1.register({
  undo: {
    width: 512,
    height: 512,
    paths: [
      {
        d: 'M212.3 224.3h-200.3c-6.6 0-12-5.4-12-12v-200.3c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v78.1c45.8-50.8 112.3-82.6 186.2-82.1 136.9 1 246.4 111.6 246.2 248.5-0.3 136.7-111.2 247.5-248 247.5-64.1 0-122.5-24.3-166.5-64.2-5.1-4.6-5.3-12.6-0.5-17.4l34-34c4.5-4.5 11.7-4.7 16.4-0.5 31 27.5 71.9 44.1 116.6 44.1 97.3 0 176-78.7 176-176 0-97.3-78.7-176-176-176-58.5 0-110.3 28.5-142.3 72.3h98.3c6.6 0 12 5.4 12 12v48c0 6.6-5.4 12-12 12z'
      }
    ]
  }
});

__vue_component__$1.register({
  redo: {
    width: 512,
    height: 512,
    paths: [
      {
        d: 'M500.3 0c6.6 0 12 5.4 12 12v200.3c0 6.6-5.4 12-12 12h-200.3c-6.6 0-12-5.4-12-12v-47.4 0c0-6.6 5.4-12 12-12 0.2 0 0.4 0 0.6 0l101.5 4.9c-28.9-43-94.3-77.8-146.1-77.8-97.2 0-176 78.8-176 176 0 97.2 78.8 176 176 176 36.7 0 88.7-19.7 116.3-43.9 1.9-1.6 5.4-3 7.9-3 2.7 0 6.5 1.6 8.5 3.5l34 34c1.9 1.9 3.5 5.7 3.5 8.5 0 3-1.8 7-4 8.9-39 35.3-113.3 63.9-165.8 63.9h-0.3c-136.9 0-247.9-110.9-248-247.8-0.1-136.7 111.3-248.2 248-248.2h0.3c63.2 0 147.7 39.1 188.6 87.3l-4-82.8c0-0.2 0-0.4 0-0.6 0-6.6 5.4-12 12-12h0 47.4z'
      }
    ]
  }
});

__vue_component__$1.register({
  expand: {
    width: 448,
    height: 512,
    paths: [
      {
        d: 'M0 180v-124c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-84v84c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12zM288 44c0-6.6 5.4-12 12-12h124c13.3 0 24 10.7 24 24v124c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-84h-84c-6.6 0-12-5.4-12-12v-40zM436 320c6.6 0 12 5.4 12 12v124c0 13.3-10.7 24-24 24h-124c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84v-84c0-6.6 5.4-12 12-12h40zM160 468c0 6.6-5.4 12-12 12h-124c-13.3 0-24-10.7-24-24v-124c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40z'
      }
    ]
  }
});

__vue_component__$1.register({
  compress: {
    width: 448,
    height: 512,
    paths: [
      {
        d: 'M436 192h-124c-13.3 0-24-10.7-24-24v-124c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zM160 168c0 13.3-10.7 24-24 24h-124c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84v-84c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v124zM160 468c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-84h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h124c13.3 0 24 10.7 24 24v124zM352 468c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-124c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-84v84z'
      }
    ]
  }
});

__vue_component__$1.register({
  print: {
    width: 512,
    height: 512,
    paths: [
      {
        d: 'M448 192c35.3 0 64 28.7 64 64v112c0 8.8-7.2 16-16 16h-48v96c0 17.7-14.3 32-32 32h-320c-17.7 0-32-14.3-32-32v-96h-48c-8.8 0-16-7.2-16-16v-112c0-35.3 28.7-64 64-64v-160c0-17.7 14.3-32 32-32h274.7c8.5 0 16.6 3.4 22.6 9.4l45.3 45.3c6 6 9.4 14.1 9.4 22.6v114.8zM384 448v-96h-256v96h256zM384 224v-96h-48c-8.8 0-16-7.2-16-16v-48h-192v160h256zM432 296c13.3 0 24-10.8 24-24 0-13.3-10.8-24-24-24s-24 10.7-24 24c0 13.3 10.8 24 24 24z'
      }
    ]
  }
});

__vue_component__$1.register({
  eye: {
    width: 576,
    height: 512,
    paths: [
      {
        d: 'M572.5 241.4c1.9 3.8 3.5 10.3 3.5 14.6s-1.6 10.8-3.5 14.6c-54.2 105.8-161.6 177.4-284.5 177.4s-230.3-71.6-284.5-177.4c-1.9-3.8-3.5-10.3-3.5-14.6s1.6-10.8 3.5-14.6c54.2-105.8 161.6-177.4 284.5-177.4s230.3 71.6 284.5 177.4zM288 400h0.1c79.4 0 143.9-64.5 143.9-143.9v-0.1c0-79.5-64.5-144-144-144s-144 64.5-144 144 64.5 144 144 144zM288 160h0.2c52.9 0 95.8 42.9 95.8 95.8 0 52.9-42.9 95.8-95.8 95.8-52.9 0-95.8-42.9-95.8-95.8 0-7 1.5-18.3 3.3-25.1 7 5.1 19.7 9.3 28.4 9.3 26.4 0 47.8-21.4 47.8-47.8 0-8.7-4.2-21.4-9.3-28.4 6.8-2 18.2-3.7 25.3-3.8z'
      }
    ]
  }
});

__vue_component__$1.register({
  'regular/object-group': {
    width: 512,
    height: 512,
    paths: [
      {
        d: 'M500 128h-12v256h12c6.6 0 12 5.4 12 12v72c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-12h-320v12c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-72c0-6.6 5.4-12 12-12h12v-256h-12c-6.6 0-12-5.4-12-12v-72c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v12h320v-12c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v72c0 6.6-5.4 12-12 12zM448 64v32h32v-32h-32zM32 64v32h32v-32h-32zM64 448v-32h-32v32h32zM480 448v-32h-32v32h32zM440 384v-256h-12c-6.6 0-12-5.4-12-12v-12h-320v12c0 6.6-5.4 12-12 12h-12v256h12c6.6 0 12 5.4 12 12v12h320v-12c0-6.6 5.4-12 12-12h12zM404 192c6.6 0 12 5.4 12 12v168c0 6.6-5.4 12-12 12h-200c-6.6 0-12-5.4-12-12v-52h-84c-6.6 0-12-5.4-12-12v-168c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v52h84zM136 168v112h144v-112h-144zM376 344v-112h-56v76c0 6.6-5.4 12-12 12h-76v24h144z'
      }
    ]
  }
});

__vue_component__$1.register({
  music: {
    width: 512,
    height: 512,
    paths: [
      {
        d: 'M470.4 1.5c2.6-0.8 6.9-1.5 9.6-1.5 17.6 0 32 14.3 32 32v352c0 35.3-43 64-96 64s-96-28.7-96-64 43-64 96-64c9 0 23.3 1.8 32 3.9v-184.6l-256 75v233.7c0 35.3-43 64-96 64s-96-28.7-96-64 43-64 96-64c9 0.1 23.3 1.8 32 3.9v-261.4c0-13 10-26.6 22.4-30.5z'
      }
    ]
  }
});

__vue_component__$1.register({
  paperclip: {
    width: 448,
    height: 512,
    paths: [
      {
        d: 'M43.2 466.1c-58.4-60.3-57.3-157.5 1.4-217.6l209.8-214.6c44.3-45.3 116.4-45.3 160.7 0 43.9 44.9 43.9 117.3 0 162.3l-182.8 186.9c-29.9 30.5-78.6 30.1-108-1-28.3-30-27.4-77.5 1.5-107l143.7-146.8c6.2-6.3 16.3-6.4 22.6-0.2l22.9 22.4c6.3 6.2 6.4 16.3 0.2 22.6l-143.7 146.8c-4.9 5-5.2 13.4-0.6 18.3 4.4 4.6 11.2 4.7 15.7 0.2l182.8-186.9c19.6-20.1 19.6-52.7 0-72.8-19.2-19.6-50-19.6-69.2 0l-209.8 214.6c-34.8 35.6-35.3 93.1-1.2 128.3 34 35.1 89 35.1 123.1 0.3l172.1-176c6.2-6.3 16.3-6.4 22.6-0.3l22.9 22.4c6.3 6.2 6.4 16.3 0.3 22.6l-172.1 176c-59.6 60.9-155.9 60.2-214.8-0.5z'
      }
    ]
  }
});

__vue_component__$1.register({
  'map-signs': {
    width: 512,
    height: 512,
    paths: [
      {
        d: 'M507.3 84.7c6.3 6.3 6.3 16.4 0 22.6l-43.3 43.3c-6 6-14.1 9.4-22.6 9.4h-385.4c-13.3 0-24-10.8-24-24v-80c0-13.3 10.8-24 24-24h168v-16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v16h153.4c8.5 0 16.6 3.4 22.6 9.4zM224 496v-112h64v112c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zM456 224c13.3 0 24 10.8 24 24v80c0 13.3-10.8 24-24 24h-385.4c-8.5 0-16.6-3.4-22.6-9.4l-43.3-43.3c-6.3-6.3-6.3-16.4 0-22.6l43.3-43.3c6-6 14.1-9.4 22.6-9.4h153.4v-32h64v32h168z'
      }
    ]
  }
});

var _a;

var CommandButton =
/** @class */
function (_super) {
  __extends(CommandButton, _super);

  function CommandButton() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(CommandButton.prototype, "commandButtonClass", {
    get: function get() {
      return {
        'el-tiptap-editor__command-button': true,
        'el-tiptap-editor__command-button--active': this.isActive
      };
    },
    enumerable: true,
    configurable: true
  });

  __decorate([Prop({
    type: String,
    required: true
  })], CommandButton.prototype, "icon", void 0);

  __decorate([Prop({
    type: Boolean,
    default: false
  })], CommandButton.prototype, "isActive", void 0);

  __decorate([Prop({
    type: String,
    required: true
  })], CommandButton.prototype, "tooltip", void 0);

  __decorate([Prop({
    type: Function,
    default: noop
  })], CommandButton.prototype, "command", void 0);

  CommandButton = __decorate([Component({
    components: (_a = {
      'v-icon': __vue_component__$1
    }, _a[_Tooltip.name] = _Tooltip, _a)
  })], CommandButton);
  return CommandButton;
}(Vue);

/* script */
const __vue_script__$2 = CommandButton;

/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-tooltip',{attrs:{"content":_vm.tooltip,"open-delay":350,"transition":"el-zoom-in-bottom","effect":"dark","placement":"top"}},[_c('div',{class:_vm.commandButtonClass,on:{"mousedown":function($event){$event.preventDefault();},"click":_vm.command}},[_c('v-icon',{attrs:{"name":_vm.icon}})],1)])};
var __vue_staticRenderFns__$1 = [];

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$2 = normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    undefined,
    undefined,
    undefined
  );

var OpenLinkCommandButton =
/** @class */
function (_super) {
  __extends(OpenLinkCommandButton, _super);

  function OpenLinkCommandButton() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  OpenLinkCommandButton.prototype.openLink = function () {
    if (this.url) {
      window.open(this.url);
    }
  };

  __decorate([Prop({
    type: String,
    required: true
  })], OpenLinkCommandButton.prototype, "url", void 0);

  OpenLinkCommandButton = __decorate([Component({
    components: {
      CommandButton: __vue_component__$2
    }
  })], OpenLinkCommandButton);
  return OpenLinkCommandButton;
}(mixins(i18nMixin));

/* script */
const __vue_script__$3 = OpenLinkCommandButton;

/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('command-button',{attrs:{"command":_vm.openLink,"tooltip":_vm.t('editor.extensions.Link.open.tooltip'),"icon":"external-link-alt"}})};
var __vue_staticRenderFns__$2 = [];

  /* style */
  const __vue_inject_styles__$3 = undefined;
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$3 = normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    false,
    undefined,
    undefined,
    undefined
  );

var EditLinkCommandButton =
/** @class */
function (_super) {
  __extends(EditLinkCommandButton, _super);

  function EditLinkCommandButton() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  EditLinkCommandButton.prototype.openEditLinkControl = function () {
    var _this = this;

    _MessageBox.prompt('', this.t('editor.extensions.Link.edit.control.title'), {
      confirmButtonText: this.t('editor.extensions.Link.edit.control.confirm'),
      cancelButtonText: this.t('editor.extensions.Link.edit.control.cancel'),
      inputPlaceholder: this.t('editor.extensions.Link.edit.control.placeholder'),
      inputValue: this.initUrl,
      roundButton: true
    }).then(function (_a) {
      var href = _a.value;

      _this.editorContext.commands.link({
        href: href
      });
    }).catch(function () {});
  };

  __decorate([Prop({
    type: Object,
    required: true
  })], EditLinkCommandButton.prototype, "editorContext", void 0);

  __decorate([Prop({
    type: String,
    required: true
  })], EditLinkCommandButton.prototype, "initUrl", void 0);

  EditLinkCommandButton = __decorate([Component({
    components: {
      CommandButton: __vue_component__$2
    }
  })], EditLinkCommandButton);
  return EditLinkCommandButton;
}(mixins(i18nMixin));

/* script */
const __vue_script__$4 = EditLinkCommandButton;

/* template */
var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('command-button',{attrs:{"command":_vm.openEditLinkControl,"tooltip":_vm.t('editor.extensions.Link.edit.tooltip'),"icon":"edit"}})};
var __vue_staticRenderFns__$3 = [];

  /* style */
  const __vue_inject_styles__$4 = undefined;
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$4 = normalizeComponent(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    false,
    undefined,
    undefined,
    undefined
  );

var UnlinkCommandButton =
/** @class */
function (_super) {
  __extends(UnlinkCommandButton, _super);

  function UnlinkCommandButton() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  __decorate([Prop({
    type: Object,
    required: true
  })], UnlinkCommandButton.prototype, "editorContext", void 0);

  UnlinkCommandButton = __decorate([Component({
    components: {
      CommandButton: __vue_component__$2
    }
  })], UnlinkCommandButton);
  return UnlinkCommandButton;
}(mixins(i18nMixin));

/* script */
const __vue_script__$5 = UnlinkCommandButton;

/* template */
var __vue_render__$4 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('command-button',{attrs:{"command":_vm.editorContext.commands.unlink,"tooltip":_vm.t('editor.extensions.Link.unlink.tooltip'),"icon":"unlink"}})};
var __vue_staticRenderFns__$4 = [];

  /* style */
  const __vue_inject_styles__$5 = undefined;
  /* scoped */
  const __vue_scope_id__$5 = undefined;
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$5 = normalizeComponent(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    false,
    undefined,
    undefined,
    undefined
  );

var LinkBubbleMenu =
/** @class */
function (_super) {
  __extends(LinkBubbleMenu, _super);

  function LinkBubbleMenu() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(LinkBubbleMenu.prototype, "url", {
    get: function get() {
      var getMarkAttrs = this.editorContext.getMarkAttrs;
      var linkAttrs = getMarkAttrs('link');
      return linkAttrs.href;
    },
    enumerable: true,
    configurable: true
  });

  __decorate([Prop({
    type: Object,
    required: true
  })], LinkBubbleMenu.prototype, "editorContext", void 0);

  LinkBubbleMenu = __decorate([Component({
    components: {
      OpenLinkCommandButton: __vue_component__$3,
      EditLinkCommandButton: __vue_component__$4,
      UnlinkCommandButton: __vue_component__$5
    }
  })], LinkBubbleMenu);
  return LinkBubbleMenu;
}(Vue);

/* script */
const __vue_script__$6 = LinkBubbleMenu;
/* template */
var __vue_render__$5 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"link-bubble-menu"},[_c('open-link-command-button',{attrs:{"url":_vm.url}}),_vm._v(" "),_c('edit-link-command-button',{attrs:{"editor-context":_vm.editorContext,"init-url":_vm.url}}),_vm._v(" "),_c('unlink-command-button',{attrs:{"editor-context":_vm.editorContext}})],1)};
var __vue_staticRenderFns__$5 = [];

  /* style */
  const __vue_inject_styles__$6 = undefined;
  /* scoped */
  const __vue_scope_id__$6 = undefined;
  /* module identifier */
  const __vue_module_identifier__$6 = undefined;
  /* functional template */
  const __vue_is_functional_template__$6 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$6 = normalizeComponent(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    false,
    undefined,
    undefined,
    undefined
  );

var MenuBubble =
/** @class */
function (_super) {
  __extends(MenuBubble, _super);

  function MenuBubble() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(MenuBubble.prototype, "showLinkMenu", {
    /* Only appears when link is selected separately */
    get: function get() {
      var _a = this.editor,
          state = _a.state,
          schema = _a.schema;

      if (schema.marks.link) {
        var tr = state.tr;
        var selection = tr.selection;
        if (!selection) return false;
        var $from = selection.$from,
            $to = selection.$to;
        var range = getMarkRange($from, schema.marks.link);
        if (!range) return false;
        return range.to === $to.pos;
      }

      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MenuBubble.prototype, "showTextMenu", {
    get: function get() {
      if (this.editor.state.selection instanceof TextSelection) {
        var extensionManager = this.editor.extensions;
        return extensionManager.extensions.some(function (extension) {
          return extension.options.bubble;
        });
      }

      return false;
    },
    enumerable: true,
    configurable: true
  });

  MenuBubble.prototype.generateCommandButtonComponentSpecs = function (editorContext) {
    var _this = this;

    var extensionManager = this.editor.extensions;
    return extensionManager.extensions.reduce(function (acc, extension) {
      if (!extension.options.bubble) return acc;
      if (typeof extension.menuBtnView !== 'function') return acc;
      var menuBtnComponentSpec = extension.menuBtnView(__assign(__assign({}, editorContext), {
        editor: _this.editor
      }));

      if (Array.isArray(menuBtnComponentSpec)) {
        return __spreadArrays(acc, menuBtnComponentSpec);
      }

      return __spreadArrays(acc, [menuBtnComponentSpec]);
    }, []);
  };

  __decorate([Prop({
    type: Editor,
    required: true
  })], MenuBubble.prototype, "editor", void 0);

  MenuBubble = __decorate([Component({
    components: {
      EditorMenuBubble: EditorMenuBubble,
      LinkBubbleMenu: __vue_component__$6
    }
  })], MenuBubble);
  return MenuBubble;
}(Vue);

/* script */
const __vue_script__$7 = MenuBubble;

/* template */
var __vue_render__$6 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('editor-menu-bubble',{attrs:{"editor":_vm.editor,"keep-in-bounds":false},scopedSlots:_vm._u([{key:"default",fn:function(editorContext){return [_c('div',{staticClass:"el-tiptap-editor__menu-bubble",class:{
      'el-tiptap-editor__menu-bubble--active':
        editorContext.menu.isActive && (_vm.showLinkMenu || _vm.showTextMenu),
    },style:(("\n      left: " + (editorContext.menu.left) + "px;\n      bottom: " + (editorContext.menu.bottom + 10) + "px;\n    "))},[(_vm.showLinkMenu)?_c('link-bubble-menu',{attrs:{"editorContext":editorContext}}):(_vm.showTextMenu)?_vm._l((_vm.generateCommandButtonComponentSpecs(editorContext)),function(spec,i){return _c(spec.component,_vm._g(_vm._b({key:'command-button' + i,tag:"component"},'component',spec.componentProps,false),spec.componentEvents))}):_vm._e()],2)]}}])})};
var __vue_staticRenderFns__$6 = [];

  /* style */
  const __vue_inject_styles__$7 = undefined;
  /* scoped */
  const __vue_scope_id__$7 = undefined;
  /* module identifier */
  const __vue_module_identifier__$7 = undefined;
  /* functional template */
  const __vue_is_functional_template__$7 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$7 = normalizeComponent(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    false,
    undefined,
    undefined,
    undefined
  );

var DEFAULT_EDITOR_SIZE_UNIT = 'px';
var COMMON_EMIT_EVENTS = ["transaction"
/* TRANSACTION */
, "focus"
/* FOCUS */
, "blur"
/* BLUR */
, "paste"
/* PASTE */
, "drop"
/* DROP */
];

var ElTiptap =
/** @class */
function (_super) {
  __extends(ElTiptap, _super);

  function ElTiptap() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.editor = null;
    _this.emitAfterOnUpdate = false; // TODO: provide to fullscreen command button, need to be optimized

    _this.isFullscreen = false;
    return _this;
  }

  Object.defineProperty(ElTiptap.prototype, "characters", {
    get: function get() {
      if (!this.editor) return 0;
      return this.editor.state.doc.textContent.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ElTiptap.prototype, "editorSizeStyle", {
    get: function get() {
      var _a = this,
          width = _a.width,
          height = _a.height;

      width = isNaN$1(Number(width)) ? width : "" + width + DEFAULT_EDITOR_SIZE_UNIT;
      height = isNaN$1(Number(height)) ? height : "" + height + DEFAULT_EDITOR_SIZE_UNIT;
      return {
        width: width,
        height: height
      };
    },
    enumerable: true,
    configurable: true
  });

  ElTiptap.prototype.onContentChange = function (val) {
    if (this.emitAfterOnUpdate) {
      this.emitAfterOnUpdate = false;
      return;
    }

    if (this.editor) this.editor.setContent(val);
  };

  ElTiptap.prototype.onReadonlyChange = function () {
    if (this.editor) {
      this.editor.setOptions({
        editable: !this.readonly
      });
    }
  };

  ElTiptap.prototype.mounted = function () {
    var _this = this;

    var extensions = this.generateExtensions();
    var eventOptions = COMMON_EMIT_EVENTS.reduce(function (prev, event) {
      var _a;

      return __assign(__assign({}, prev), (_a = {}, _a["on" + capitalize(event)] = function () {
        return _this.emitEvent.bind(_this)(event);
      }, _a));
    }, {});
    this.editor = new Editor(__assign(__assign({
      editable: !this.readonly,
      editorProps: this.editorProps,
      useBuiltInExtensions: false,
      extensions: extensions
    }, eventOptions), {
      content: this.content,
      onUpdate: this.onUpdate.bind(this)
    }));
    this.$emit(this.genEvent("init"
    /* INIT */
    ), {
      editor: this.editor
    });
  };

  ElTiptap.prototype.beforeDestroy = function () {
    if (this.editor) this.editor.destroy();
  };

  ElTiptap.prototype.generateExtensions = function () {
    var extensions = [];
    var spellcheck = this.spellcheck == null ? this.$elementTiptapPlugin ? this.$elementTiptapPlugin.spellcheck : true : this.spellcheck;
    extensions = extensions.concat(new ContentAttributes({
      spellcheck: spellcheck
    }));
    extensions = extensions.concat(__spreadArrays(this.extensions));

    if (this.placeholder) {
      extensions.push(new Placeholder({
        emptyEditorClass: 'el-tiptap-editor--empty',
        emptyNodeClass: 'el-tiptap-editor__placeholder',
        emptyNodeText: this.placeholder
      }));
    }

    return extensions;
  };

  ElTiptap.prototype.emitEvent = function (event) {
    this.$emit(this.genEvent(event), {
      editor: this.editor
    });
  };

  ElTiptap.prototype.onUpdate = function (options) {
    this.emitAfterOnUpdate = true;
    var output;

    if (this.output === 'html') {
      output = options.getHTML();
      output = output.replace('<p><iframe', '<iframe');
      output = output.replace('</iframe></p>', '</iframe>');
    } else {
      output = JSON.stringify(options.getJSON());
    }

    this.$emit(this.genEvent("update"
    /* UPDATE */
    ), output, options);
  };

  ElTiptap.prototype.toggleFullscreen = function () {
    this.isFullscreen = !this.isFullscreen;
  };

  ElTiptap.prototype.genEvent = function (event) {
    return "on" + capitalize(event);
  };

  __decorate([Prop({
    type: Array,
    default: function _default() {
      return [];
    }
  })], ElTiptap.prototype, "extensions", void 0);

  __decorate([Model('onUpdate', {
    type: String,
    default: ''
  })], ElTiptap.prototype, "content", void 0);

  __decorate([Prop({
    type: String,
    default: ''
  })], ElTiptap.prototype, "placeholder", void 0);

  __decorate([Prop({
    type: Object,
    default: function _default() {
      return {};
    }
  })], ElTiptap.prototype, "editorProps", void 0);

  __decorate([Prop({
    type: String,
    default: 'html',
    validator: function validator(output) {
      return ['html', 'json'].includes(output);
    }
  })], ElTiptap.prototype, "output", void 0);

  __decorate([Prop({
    type: Boolean,
    default: false
  })], ElTiptap.prototype, "readonly", void 0);

  __decorate([Prop({
    type: Boolean,
    default: undefined
  })], ElTiptap.prototype, "spellcheck", void 0);

  __decorate([Prop({
    type: [String, Number],
    default: undefined
  })], ElTiptap.prototype, "width", void 0);

  __decorate([Prop({
    type: [String, Number],
    default: undefined
  })], ElTiptap.prototype, "height", void 0);

  __decorate([Watch('content')], ElTiptap.prototype, "onContentChange", null);

  __decorate([Watch('readonly')], ElTiptap.prototype, "onReadonlyChange", null);

  __decorate([ProvideReactive()], ElTiptap.prototype, "isFullscreen", void 0);

  __decorate([Provide()], ElTiptap.prototype, "toggleFullscreen", null);

  ElTiptap = __decorate([Component({
    components: {
      MenuBar: __vue_component__,
      MenuBubble: __vue_component__$7,
      EditorContent: EditorContent
    },
    // fix @ProvideReactive
    // https://github.com/kaorun343/vue-property-decorator/issues/277#issuecomment-558594655
    inject: []
  })], ElTiptap);
  return ElTiptap;
}(mixins(i18nMixin));

/* script */
const __vue_script__$8 = ElTiptap;
/* template */
var __vue_render__$7 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.editor)?_c('div',{staticClass:"el-tiptap-editor",class:{ 'el-tiptap-editor--fullscreen': _vm.isFullscreen },style:(_vm.editorSizeStyle)},[(!_vm.readonly)?_c('menu-bubble',{attrs:{"editor":_vm.editor}}):_vm._e(),_vm._v(" "),(!_vm.readonly)?_c('menu-bar',{attrs:{"editor":_vm.editor},scopedSlots:_vm._u([(_vm.$scopedSlots.menubar)?{key:"default",fn:function(slotProps){return [_vm._t("menubar",null,null,slotProps)]}}:null],null,true)}):_vm._e(),_vm._v(" "),_c('editor-content',{staticClass:"el-tiptap-editor__content",attrs:{"editor":_vm.editor}}),_vm._v(" "),_vm._t("footer",[_c('div',{staticClass:"el-tiptap-editor__footer"},[_c('span',{staticClass:"el-tiptap-editor__characters"},[_vm._v(_vm._s(_vm.t('editor.characters'))+": "+_vm._s(_vm.characters))])])],{"editor":_vm.editor})],2):_vm._e()};
var __vue_staticRenderFns__$7 = [];

  /* style */
  const __vue_inject_styles__$8 = undefined;
  /* scoped */
  const __vue_scope_id__$8 = undefined;
  /* module identifier */
  const __vue_module_identifier__$8 = undefined;
  /* functional template */
  const __vue_is_functional_template__$8 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$8 = normalizeComponent(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$8,
    __vue_script__$8,
    __vue_scope_id__$8,
    __vue_is_functional_template__$8,
    __vue_module_identifier__$8,
    false,
    undefined,
    undefined,
    undefined
  );

var $forEach = arrayIteration.forEach;



var STRICT_METHOD$2 = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH$4 = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
var arrayForEach = (!STRICT_METHOD$2 || !USES_TO_LENGTH$4) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
_export({ target: 'Array', proto: true, forced: [].forEach != arrayForEach }, {
  forEach: arrayForEach
});

var ALLOWED_NODE_TYPES = ['paragraph', 'heading', 'list_item', 'todo_item'];
var NUMBER_VALUE_PATTERN = /^\d+(.\d+)?$/;
function isLineHeightActive(state, lineHeight) {
  var selection = state.selection,
      doc = state.doc;
  var from = selection.from,
      to = selection.to;
  var keepLooking = true;
  var active = false;
  doc.nodesBetween(from, to, function (node) {
    var nodeType = node.type;
    var lineHeightValue = node.attrs.lineHeight || DEFAULT_LINE_HEIGHT;

    if (ALLOWED_NODE_TYPES.includes(nodeType.name)) {
      if (keepLooking && lineHeight === lineHeightValue) {
        keepLooking = false;
        active = true;
        return false;
      }

      return nodeType.name !== 'list_item' && nodeType.name !== 'todo_item';
    }

    return keepLooking;
  });
  return active;
}
function transformLineHeightToCSS(value) {
  if (!value) return '';
  var strValue = String(value);

  if (NUMBER_VALUE_PATTERN.test(strValue)) {
    var numValue = parseFloat(strValue);
    strValue = String(Math.round(numValue * 100)) + '%';
  }

  return parseFloat(strValue) * LINE_HEIGHT_100 + '%';
}
function setTextLineHeight(tr, lineHeight) {
  var selection = tr.selection,
      doc = tr.doc;
  if (!selection || !doc) return tr;

  if (!(selection instanceof TextSelection || selection instanceof AllSelection)) {
    return tr;
  }

  var from = selection.from,
      to = selection.to;
  var tasks = [];
  var lineHeightValue = lineHeight && lineHeight !== DEFAULT_LINE_HEIGHT ? lineHeight : null;
  doc.nodesBetween(from, to, function (node, pos) {
    var nodeType = node.type;

    if (ALLOWED_NODE_TYPES.includes(nodeType.name)) {
      var lineHeight_1 = node.attrs.lineHeight || null;

      if (lineHeight_1 !== lineHeightValue) {
        tasks.push({
          node: node,
          pos: pos,
          nodeType: nodeType
        });
      }

      return nodeType.name !== 'list_item' && nodeType.name !== 'todo_item';
    }

    return true;
  });
  if (!tasks.length) return tr;
  tasks.forEach(function (task) {
    var node = task.node,
        pos = task.pos,
        nodeType = task.nodeType;
    var attrs = node.attrs;
    attrs = __assign(__assign({}, attrs), {
      lineHeight: lineHeightValue
    });
    tr = tr.setNodeMarkup(pos, nodeType, attrs, node.marks);
  });
  return tr;
}
function createLineHeightCommand(lineHeight) {
  return function (state, dispatch) {
    var selection = state.selection;
    var tr = state.tr;
    tr = tr.setSelection(selection);
    tr = setTextLineHeight(tr, lineHeight);

    if (tr.docChanged) {
      dispatch && dispatch(tr);
      return true;
    }

    return false;
  };
}

var ParagraphNodeSpec = {
  attrs: {
    textAlign: {
      default: null
    },
    indent: {
      default: null
    },
    lineHeight: {
      default: null
    }
  },
  content: 'inline*',
  group: 'block',
  parseDOM: [{
    tag: 'p',
    getAttrs: getAttrs
  }],
  toDOM: toDOM
}; // @ts-ignore

function getAttrs(dom) {
  var _a = dom.style,
      textAlign = _a.textAlign,
      lineHeight = _a.lineHeight;
  var align = dom.getAttribute('data-text-align') || textAlign || '';
  align = ALIGN_PATTERN.test(align) ? align : null;
  var indent = parseInt(dom.getAttribute('data-indent'), 10) || 0;
  lineHeight = lineHeight && lineHeight !== transformLineHeightToCSS(LINE_HEIGHT_100) ? lineHeight : null;
  return {
    textAlign: align,
    indent: indent,
    lineHeight: lineHeight
  };
}

function toDOM(node) {
  var _a = node.attrs,
      textAlign = _a.textAlign,
      indent = _a.indent,
      lineHeight = _a.lineHeight;
  var style = '';
  var attrs = {};

  if (textAlign && textAlign !== 'left') {
    attrs['data-text-align'] = textAlign;
  }

  if (indent) {
    attrs['data-indent'] = indent;
  }

  if (lineHeight) {
    var cssLineHeight = transformLineHeightToCSS(lineHeight);
    style += "line-height: " + cssLineHeight + ";";
  }

  style && (attrs.style = style);
  return ['p', attrs, 0];
}

var Paragraph =
/** @class */
function (_super) {
  __extends(Paragraph, _super);

  function Paragraph() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(Paragraph.prototype, "schema", {
    get: function get() {
      return ParagraphNodeSpec;
    },
    enumerable: true,
    configurable: true
  });
  return Paragraph;
}(Paragraph$1);
var toParagraphDOM = toDOM;
var getParagraphNodeAttrs = getAttrs;

var $map = arrayIteration.map;



var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH$5 = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 || !USES_TO_LENGTH$5 }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// @@match logic
fixRegexpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regexpExecAbstract(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regexpExecAbstract(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});

function findHeading(state) {
  var heading = state.schema.nodes.heading;
  return findParentNodeOfType(heading)(state.selection);
}

function isHeadingActive(state, level) {
  var result = findHeading(state);

  if (level == null) {
    return !!result;
  }

  return !!(result && result.node && result.node.attrs && result.node.attrs.level === level);
}

var _a$1;

var HeadingDropdown =
/** @class */
function (_super) {
  __extends(HeadingDropdown, _super);

  function HeadingDropdown() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(HeadingDropdown.prototype, "editor", {
    get: function get() {
      return this.editorContext.editor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HeadingDropdown.prototype, "level", {
    get: function get() {
      return this.editor.extensions.options.heading.level;
    },
    enumerable: true,
    configurable: true
  });

  HeadingDropdown.prototype.isHeadingActive = function (level) {
    return isHeadingActive(this.editor.state, level);
  };

  __decorate([Prop({
    type: Object,
    required: true
  })], HeadingDropdown.prototype, "editorContext", void 0);

  HeadingDropdown = __decorate([Component({
    components: (_a$1 = {}, _a$1[_Dropdown.name] = _Dropdown, _a$1[_DropdownMenu.name] = _DropdownMenu, _a$1[_DropdownItem.name] = _DropdownItem, _a$1.CommandButton = __vue_component__$2, _a$1)
  })], HeadingDropdown);
  return HeadingDropdown;
}(mixins(i18nMixin));

/* script */
const __vue_script__$9 = HeadingDropdown;

/* template */
var __vue_render__$8 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dropdown',{attrs:{"placement":"bottom","trigger":"click"},on:{"command":function (i) { return i > 0
    ? _vm.editorContext.commands.heading({ level: i })
    : _vm.editorContext.commands.paragraph(); }}},[_c('command-button',{attrs:{"is-active":_vm.isHeadingActive(),"tooltip":_vm.t('editor.extensions.Heading.tooltip'),"icon":"heading"}}),_vm._v(" "),_c('el-dropdown-menu',{staticClass:"el-tiptap-dropdown-menu",attrs:{"slot":"dropdown"},slot:"dropdown"},[_c('el-dropdown-item',{staticClass:"el-tiptap-dropdown-menu__item",class:{
        'el-tiptap-dropdown-menu__item--active': _vm.editorContext.isActive.paragraph(),
      },attrs:{"command":0}},[_c('span',[_vm._v(_vm._s(_vm.t('editor.extensions.Heading.buttons.paragraph')))])]),_vm._v(" "),_vm._l((_vm.level),function(i){return _c('el-dropdown-item',{key:i,staticClass:"el-tiptap-dropdown-menu__item",class:{
        'el-tiptap-dropdown-menu__item--active': _vm.isHeadingActive(i),
      },attrs:{"command":i}},[_c('h' +i,{tag:"component",attrs:{"data-item-type":"heading"}},[_vm._v("\n        "+_vm._s(_vm.t('editor.extensions.Heading.buttons.heading'))+" "+_vm._s(i)+"\n      ")])],1)})],2)],1)};
var __vue_staticRenderFns__$8 = [];

  /* style */
  const __vue_inject_styles__$9 = undefined;
  /* scoped */
  const __vue_scope_id__$9 = undefined;
  /* module identifier */
  const __vue_module_identifier__$9 = undefined;
  /* functional template */
  const __vue_is_functional_template__$9 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$9 = normalizeComponent(
    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
    __vue_inject_styles__$9,
    __vue_script__$9,
    __vue_scope_id__$9,
    __vue_is_functional_template__$9,
    __vue_module_identifier__$9,
    false,
    undefined,
    undefined,
    undefined
  );

function getAttrs$1(dom) {
  var attrs = getParagraphNodeAttrs(dom);
  var level = dom.nodeName.match(/[H|h](\d)/)[1];
  attrs.level = Number(level);
  return attrs;
}

function toDOM$1(node) {
  var dom = toParagraphDOM(node);
  var level = node.attrs.level || 1; // @ts-ignore

  dom[0] = "h" + level;
  return dom;
}

var Heading =
/** @class */
function (_super) {
  __extends(Heading, _super);

  function Heading() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(Heading.prototype, "schema", {
    get: function get() {
      return __assign(__assign({}, ParagraphNodeSpec), {
        attrs: __assign(__assign({}, ParagraphNodeSpec.attrs), {
          level: {
            default: 1
          }
        }),
        defining: true,
        draggable: false,
        parseDOM: this.options.levels.map(function (level) {
          return {
            tag: "h" + level,
            getAttrs: getAttrs$1
          };
        }),
        toDOM: toDOM$1
      });
    },
    enumerable: true,
    configurable: true
  });

  Heading.prototype.menuBtnView = function (editorContext) {
    return {
      component: __vue_component__$9,
      componentProps: {
        editorContext: editorContext
      }
    };
  };

  return Heading;
}(Heading$1);

var BlockquoteNodeSpec = __assign(__assign({}, ParagraphNodeSpec), {
  attrs: {
    textAlign: {
      default: null
    },
    indent: {
      default: null
    }
  },
  content: 'block*',
  defining: true,
  parseDOM: [{
    tag: 'blockquote',
    getAttrs: getAttrs$2
  }],
  toDOM: toDOM$2
}); // @ts-ignore


function getAttrs$2(dom) {
  return getParagraphNodeAttrs(dom);
}

function toDOM$2(node) {
  var dom = toParagraphDOM(node); // @ts-ignore

  dom[0] = 'blockquote';
  return dom;
}

var Blockquote =
/** @class */
function (_super) {
  __extends(Blockquote, _super);

  function Blockquote() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(Blockquote.prototype, "schema", {
    get: function get() {
      return BlockquoteNodeSpec;
    },
    enumerable: true,
    configurable: true
  });

  Blockquote.prototype.menuBtnView = function (_a) {
    var isActive = _a.isActive,
        commands = _a.commands;
    return {
      component: __vue_component__$2,
      componentProps: {
        command: commands.blockquote,
        isActive: isActive.blockquote(),
        icon: 'quote-right',
        tooltip: t('editor.extensions.Blockquote.tooltip')
      }
    };
  };

  return Blockquote;
}(Blockquote$1);

var CodeBlock =
/** @class */
function (_super) {
  __extends(CodeBlock, _super);

  function CodeBlock() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  CodeBlock.prototype.menuBtnView = function (_a) {
    var isActive = _a.isActive,
        commands = _a.commands;
    return {
      component: __vue_component__$2,
      componentProps: {
        command: commands.code_block,
        isActive: isActive.code_block(),
        icon: 'code',
        tooltip: t('editor.extensions.CodeBlock.tooltip')
      }
    };
  };

  return CodeBlock;
}(CodeBlock$1);

var ListItemNodeSpec = {
  attrs: {
    textAlign: {
      default: null
    },
    lineHeight: {
      default: null
    }
  },
  content: 'paragraph block*',
  defining: true,
  draggable: false,
  parseDOM: [{
    tag: 'li',
    getAttrs: getAttrs$3
  }],
  toDOM: toDOM$3
}; // @ts-ignore

function getAttrs$3(dom) {
  var _a = dom.style,
      textAlign = _a.textAlign,
      lineHeight = _a.lineHeight;
  var align = dom.getAttribute('data-text-align') || textAlign || '';
  align = ALIGN_PATTERN.test(align) ? align : null;
  lineHeight = lineHeight && lineHeight !== transformLineHeightToCSS(LINE_HEIGHT_100) ? lineHeight : null;
  return {
    textAlign: align,
    lineHeight: lineHeight
  };
}

function toDOM$3(node) {
  var _a = node.attrs,
      textAlign = _a.textAlign,
      lineHeight = _a.lineHeight;
  var style = '';
  var attrs = {};

  if (textAlign && textAlign !== 'left') {
    attrs['data-text-align'] = textAlign;
  }

  if (lineHeight) {
    var cssLineHeight = transformLineHeightToCSS(lineHeight);
    style += "line-height: " + cssLineHeight + ";";
  }

  style && (attrs.style = style);
  return ['li', attrs, 0];
}

var ListItem =
/** @class */
function (_super) {
  __extends(ListItem, _super);

  function ListItem() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(ListItem.prototype, "schema", {
    get: function get() {
      return ListItemNodeSpec;
    },
    enumerable: true,
    configurable: true
  });
  return ListItem;
}(ListItem$1);

var BulletList =
/** @class */
function (_super) {
  __extends(BulletList, _super);

  function BulletList() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  BulletList.prototype.menuBtnView = function (_a) {
    var isActive = _a.isActive,
        commands = _a.commands;
    return {
      component: __vue_component__$2,
      componentProps: {
        isActive: isActive.bullet_list(),
        command: commands.bullet_list,
        icon: 'list-ul',
        tooltip: t('editor.extensions.BulletList.tooltip')
      }
    };
  };

  return BulletList;
}(BulletList$1);

var OrderedList =
/** @class */
function (_super) {
  __extends(OrderedList, _super);

  function OrderedList() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  OrderedList.prototype.menuBtnView = function (_a) {
    var isActive = _a.isActive,
        commands = _a.commands;
    return {
      component: __vue_component__$2,
      componentProps: {
        isActive: isActive.ordered_list(),
        command: commands.ordered_list,
        icon: 'list-ol',
        tooltip: t('editor.extensions.OrderedList.tooltip')
      }
    };
  };

  return OrderedList;
}(OrderedList$1);

var merge = createCommonjsModule(function (module, exports) {

exports.__esModule = true;

exports.default = function (target) {
  for (var i = 1, j = arguments.length; i < j; i++) {
    var source = arguments[i] || {};
    for (var prop in source) {
      if (source.hasOwnProperty(prop)) {
        var value = source[prop];
        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }

  return target;
};
});

unwrapExports(merge);

var dom = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.isInContainer = exports.getScrollContainer = exports.isScroll = exports.getStyle = exports.once = exports.off = exports.on = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* istanbul ignore next */

exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.setStyle = setStyle;



var _vue2 = _interopRequireDefault(Vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isServer = _vue2.default.prototype.$isServer;
var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;
var ieVersion = isServer ? 0 : Number(document.documentMode);

/* istanbul ignore next */
var trim = function trim(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};
/* istanbul ignore next */
var camelCase = function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};

/* istanbul ignore next */
var on = exports.on = function () {
  if (!isServer && document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
}();

/* istanbul ignore next */
var off = exports.off = function () {
  if (!isServer && document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
}();

/* istanbul ignore next */
var once = exports.once = function once(el, event, fn) {
  var listener = function listener() {
    if (fn) {
      fn.apply(this, arguments);
    }
    off(el, event, listener);
  };
  on(el, event, listener);
};

/* istanbul ignore next */
function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
}
/* istanbul ignore next */
function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}
/* istanbul ignore next */
function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ');
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
}
/* istanbul ignore next */
var getStyle = exports.getStyle = ieVersion < 9 ? function (element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'styleFloat';
  }
  try {
    switch (styleName) {
      case 'opacity':
        try {
          return element.filters.item('alpha').opacity / 100;
        } catch (e) {
          return 1.0;
        }
      default:
        return element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null;
    }
  } catch (e) {
    return element.style[styleName];
  }
} : function (element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    var computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
};

/* istanbul ignore next */
function setStyle(element, styleName, value) {
  if (!element || !styleName) return;

  if ((typeof styleName === 'undefined' ? 'undefined' : _typeof(styleName)) === 'object') {
    for (var prop in styleName) {
      if (styleName.hasOwnProperty(prop)) {
        setStyle(element, prop, styleName[prop]);
      }
    }
  } else {
    styleName = camelCase(styleName);
    if (styleName === 'opacity' && ieVersion < 9) {
      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
    } else {
      element.style[styleName] = value;
    }
  }
}
var isScroll = exports.isScroll = function isScroll(el, vertical) {
  if (isServer) return;

  var determinedDirection = vertical !== null || vertical !== undefined;
  var overflow = determinedDirection ? vertical ? getStyle(el, 'overflow-y') : getStyle(el, 'overflow-x') : getStyle(el, 'overflow');

  return overflow.match(/(scroll|auto)/);
};

var getScrollContainer = exports.getScrollContainer = function getScrollContainer(el, vertical) {
  if (isServer) return;

  var parent = el;
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window;
    }
    if (isScroll(parent, vertical)) {
      return parent;
    }
    parent = parent.parentNode;
  }

  return parent;
};

var isInContainer = exports.isInContainer = function isInContainer(el, container) {
  if (isServer || !el || !container) return false;

  var elRect = el.getBoundingClientRect();
  var containerRect = void 0;

  if ([window, document, document.documentElement, null, undefined].includes(container)) {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0
    };
  } else {
    containerRect = container.getBoundingClientRect();
  }

  return elRect.top < containerRect.bottom && elRect.bottom > containerRect.top && elRect.right > containerRect.left && elRect.left < containerRect.right;
};
});

unwrapExports(dom);
var dom_1 = dom.isInContainer;
var dom_2 = dom.getScrollContainer;
var dom_3 = dom.isScroll;
var dom_4 = dom.getStyle;
var dom_5 = dom.once;
var dom_6 = dom.off;
var dom_7 = dom.on;
var dom_8 = dom.hasClass;
var dom_9 = dom.addClass;
var dom_10 = dom.removeClass;
var dom_11 = dom.setStyle;

var popupManager = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _vue2 = _interopRequireDefault(Vue);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasModal = false;
var hasInitZIndex = false;
var zIndex = void 0;

var getModal = function getModal() {
  if (_vue2.default.prototype.$isServer) return;
  var modalDom = PopupManager.modalDom;
  if (modalDom) {
    hasModal = true;
  } else {
    hasModal = false;
    modalDom = document.createElement('div');
    PopupManager.modalDom = modalDom;

    modalDom.addEventListener('touchmove', function (event) {
      event.preventDefault();
      event.stopPropagation();
    });

    modalDom.addEventListener('click', function () {
      PopupManager.doOnModalClick && PopupManager.doOnModalClick();
    });
  }

  return modalDom;
};

var instances = {};

var PopupManager = {
  modalFade: true,

  getInstance: function getInstance(id) {
    return instances[id];
  },

  register: function register(id, instance) {
    if (id && instance) {
      instances[id] = instance;
    }
  },

  deregister: function deregister(id) {
    if (id) {
      instances[id] = null;
      delete instances[id];
    }
  },

  nextZIndex: function nextZIndex() {
    return PopupManager.zIndex++;
  },

  modalStack: [],

  doOnModalClick: function doOnModalClick() {
    var topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1];
    if (!topItem) return;

    var instance = PopupManager.getInstance(topItem.id);
    if (instance && instance.closeOnClickModal) {
      instance.close();
    }
  },

  openModal: function openModal(id, zIndex, dom$1, modalClass, modalFade) {
    if (_vue2.default.prototype.$isServer) return;
    if (!id || zIndex === undefined) return;
    this.modalFade = modalFade;

    var modalStack = this.modalStack;

    for (var i = 0, j = modalStack.length; i < j; i++) {
      var item = modalStack[i];
      if (item.id === id) {
        return;
      }
    }

    var modalDom = getModal();

    (0, dom.addClass)(modalDom, 'v-modal');
    if (this.modalFade && !hasModal) {
      (0, dom.addClass)(modalDom, 'v-modal-enter');
    }
    if (modalClass) {
      var classArr = modalClass.trim().split(/\s+/);
      classArr.forEach(function (item) {
        return (0, dom.addClass)(modalDom, item);
      });
    }
    setTimeout(function () {
      (0, dom.removeClass)(modalDom, 'v-modal-enter');
    }, 200);

    if (dom$1 && dom$1.parentNode && dom$1.parentNode.nodeType !== 11) {
      dom$1.parentNode.appendChild(modalDom);
    } else {
      document.body.appendChild(modalDom);
    }

    if (zIndex) {
      modalDom.style.zIndex = zIndex;
    }
    modalDom.tabIndex = 0;
    modalDom.style.display = '';

    this.modalStack.push({ id: id, zIndex: zIndex, modalClass: modalClass });
  },

  closeModal: function closeModal(id) {
    var modalStack = this.modalStack;
    var modalDom = getModal();

    if (modalStack.length > 0) {
      var topItem = modalStack[modalStack.length - 1];
      if (topItem.id === id) {
        if (topItem.modalClass) {
          var classArr = topItem.modalClass.trim().split(/\s+/);
          classArr.forEach(function (item) {
            return (0, dom.removeClass)(modalDom, item);
          });
        }

        modalStack.pop();
        if (modalStack.length > 0) {
          modalDom.style.zIndex = modalStack[modalStack.length - 1].zIndex;
        }
      } else {
        for (var i = modalStack.length - 1; i >= 0; i--) {
          if (modalStack[i].id === id) {
            modalStack.splice(i, 1);
            break;
          }
        }
      }
    }

    if (modalStack.length === 0) {
      if (this.modalFade) {
        (0, dom.addClass)(modalDom, 'v-modal-leave');
      }
      setTimeout(function () {
        if (modalStack.length === 0) {
          if (modalDom.parentNode) modalDom.parentNode.removeChild(modalDom);
          modalDom.style.display = 'none';
          PopupManager.modalDom = undefined;
        }
        (0, dom.removeClass)(modalDom, 'v-modal-leave');
      }, 200);
    }
  }
};

Object.defineProperty(PopupManager, 'zIndex', {
  configurable: true,
  get: function get() {
    if (!hasInitZIndex) {
      zIndex = zIndex || (_vue2.default.prototype.$ELEMENT || {}).zIndex || 2000;
      hasInitZIndex = true;
    }
    return zIndex;
  },
  set: function set(value) {
    zIndex = value;
  }
});

var getTopPopup = function getTopPopup() {
  if (_vue2.default.prototype.$isServer) return;
  if (PopupManager.modalStack.length > 0) {
    var topPopup = PopupManager.modalStack[PopupManager.modalStack.length - 1];
    if (!topPopup) return;
    var instance = PopupManager.getInstance(topPopup.id);

    return instance;
  }
};

if (!_vue2.default.prototype.$isServer) {
  // handle `esc` key when the popup is shown
  window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
      var topPopup = getTopPopup();

      if (topPopup && topPopup.closeOnPressEscape) {
        topPopup.handleClose ? topPopup.handleClose() : topPopup.handleAction ? topPopup.handleAction('cancel') : topPopup.close();
      }
    }
  });
}

exports.default = PopupManager;
});

unwrapExports(popupManager);

var scrollbarWidth = createCommonjsModule(function (module, exports) {

exports.__esModule = true;

exports.default = function () {
  if (_vue2.default.prototype.$isServer) return 0;
  if (scrollBarWidth !== undefined) return scrollBarWidth;

  var outer = document.createElement('div');
  outer.className = 'el-scrollbar__wrap';
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  document.body.appendChild(outer);

  var widthNoScroll = outer.offsetWidth;
  outer.style.overflow = 'scroll';

  var inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);

  var widthWithScroll = inner.offsetWidth;
  outer.parentNode.removeChild(outer);
  scrollBarWidth = widthNoScroll - widthWithScroll;

  return scrollBarWidth;
};



var _vue2 = _interopRequireDefault(Vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scrollBarWidth = void 0;
});

unwrapExports(scrollbarWidth);

var popup = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.PopupManager = undefined;



var _vue2 = _interopRequireDefault(Vue);



var _merge2 = _interopRequireDefault(merge);



var _popupManager2 = _interopRequireDefault(popupManager);



var _scrollbarWidth2 = _interopRequireDefault(scrollbarWidth);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var idSeed = 1;

var scrollBarWidth = void 0;

exports.default = {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    openDelay: {},
    closeDelay: {},
    zIndex: {},
    modal: {
      type: Boolean,
      default: false
    },
    modalFade: {
      type: Boolean,
      default: true
    },
    modalClass: {},
    modalAppendToBody: {
      type: Boolean,
      default: false
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: false
    },
    closeOnClickModal: {
      type: Boolean,
      default: false
    }
  },

  beforeMount: function beforeMount() {
    this._popupId = 'popup-' + idSeed++;
    _popupManager2.default.register(this._popupId, this);
  },
  beforeDestroy: function beforeDestroy() {
    _popupManager2.default.deregister(this._popupId);
    _popupManager2.default.closeModal(this._popupId);

    this.restoreBodyStyle();
  },
  data: function data() {
    return {
      opened: false,
      bodyPaddingRight: null,
      computedBodyPaddingRight: 0,
      withoutHiddenClass: true,
      rendered: false
    };
  },


  watch: {
    visible: function visible(val) {
      var _this = this;

      if (val) {
        if (this._opening) return;
        if (!this.rendered) {
          this.rendered = true;
          _vue2.default.nextTick(function () {
            _this.open();
          });
        } else {
          this.open();
        }
      } else {
        this.close();
      }
    }
  },

  methods: {
    open: function open(options) {
      var _this2 = this;

      if (!this.rendered) {
        this.rendered = true;
      }

      var props = (0, _merge2.default)({}, this.$props || this, options);

      if (this._closeTimer) {
        clearTimeout(this._closeTimer);
        this._closeTimer = null;
      }
      clearTimeout(this._openTimer);

      var openDelay = Number(props.openDelay);
      if (openDelay > 0) {
        this._openTimer = setTimeout(function () {
          _this2._openTimer = null;
          _this2.doOpen(props);
        }, openDelay);
      } else {
        this.doOpen(props);
      }
    },
    doOpen: function doOpen(props) {
      if (this.$isServer) return;
      if (this.willOpen && !this.willOpen()) return;
      if (this.opened) return;

      this._opening = true;

      var dom$1 = this.$el;

      var modal = props.modal;

      var zIndex = props.zIndex;
      if (zIndex) {
        _popupManager2.default.zIndex = zIndex;
      }

      if (modal) {
        if (this._closing) {
          _popupManager2.default.closeModal(this._popupId);
          this._closing = false;
        }
        _popupManager2.default.openModal(this._popupId, _popupManager2.default.nextZIndex(), this.modalAppendToBody ? undefined : dom$1, props.modalClass, props.modalFade);
        if (props.lockScroll) {
          this.withoutHiddenClass = !(0, dom.hasClass)(document.body, 'el-popup-parent--hidden');
          if (this.withoutHiddenClass) {
            this.bodyPaddingRight = document.body.style.paddingRight;
            this.computedBodyPaddingRight = parseInt((0, dom.getStyle)(document.body, 'paddingRight'), 10);
          }
          scrollBarWidth = (0, _scrollbarWidth2.default)();
          var bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
          var bodyOverflowY = (0, dom.getStyle)(document.body, 'overflowY');
          if (scrollBarWidth > 0 && (bodyHasOverflow || bodyOverflowY === 'scroll') && this.withoutHiddenClass) {
            document.body.style.paddingRight = this.computedBodyPaddingRight + scrollBarWidth + 'px';
          }
          (0, dom.addClass)(document.body, 'el-popup-parent--hidden');
        }
      }

      if (getComputedStyle(dom$1).position === 'static') {
        dom$1.style.position = 'absolute';
      }

      dom$1.style.zIndex = _popupManager2.default.nextZIndex();
      this.opened = true;

      this.onOpen && this.onOpen();

      this.doAfterOpen();
    },
    doAfterOpen: function doAfterOpen() {
      this._opening = false;
    },
    close: function close() {
      var _this3 = this;

      if (this.willClose && !this.willClose()) return;

      if (this._openTimer !== null) {
        clearTimeout(this._openTimer);
        this._openTimer = null;
      }
      clearTimeout(this._closeTimer);

      var closeDelay = Number(this.closeDelay);

      if (closeDelay > 0) {
        this._closeTimer = setTimeout(function () {
          _this3._closeTimer = null;
          _this3.doClose();
        }, closeDelay);
      } else {
        this.doClose();
      }
    },
    doClose: function doClose() {
      this._closing = true;

      this.onClose && this.onClose();

      if (this.lockScroll) {
        setTimeout(this.restoreBodyStyle, 200);
      }

      this.opened = false;

      this.doAfterClose();
    },
    doAfterClose: function doAfterClose() {
      _popupManager2.default.closeModal(this._popupId);
      this._closing = false;
    },
    restoreBodyStyle: function restoreBodyStyle() {
      if (this.modal && this.withoutHiddenClass) {
        document.body.style.paddingRight = this.bodyPaddingRight;
        (0, dom.removeClass)(document.body, 'el-popup-parent--hidden');
      }
      this.withoutHiddenClass = true;
    }
  }
};
exports.PopupManager = _popupManager2.default;
});

unwrapExports(popup);
var popup_1 = popup.PopupManager;

var afterLeave = createCommonjsModule(function (module, exports) {

exports.__esModule = true;

exports.default = function (instance, callback) {
  var speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
  var once = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (!instance || !callback) throw new Error('instance & callback is required');
  var called = false;
  var afterLeaveCallback = function afterLeaveCallback() {
    if (called) return;
    called = true;
    if (callback) {
      callback.apply(null, arguments);
    }
  };
  if (once) {
    instance.$once('after-leave', afterLeaveCallback);
  } else {
    instance.$on('after-leave', afterLeaveCallback);
  }
  setTimeout(function () {
    afterLeaveCallback();
  }, speed + 100);
};
});

unwrapExports(afterLeave);

var loading = createCommonjsModule(function (module) {
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 68);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports;

  // render functions
  if (render) {
    options.render = render;
    options.staticRenderFns = staticRenderFns;
    options._compiled = true;
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true;
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId;
  }

  var hook;
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context);
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook;
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot); }
      : injectStyles;
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook;
      // register for functioal component in vue file
      var originalRender = options.render;
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context);
        return originalRender(h, context)
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook];
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = popup;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = dom;

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

module.exports = afterLeave;

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(7);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/loading/src/loading.vue?vue&type=template&id=eee0a7ac&
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "transition",
    {
      attrs: { name: "el-loading-fade" },
      on: { "after-leave": _vm.handleAfterLeave }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }
          ],
          staticClass: "el-loading-mask",
          class: [_vm.customClass, { "is-fullscreen": _vm.fullscreen }],
          style: { backgroundColor: _vm.background || "" }
        },
        [
          _c("div", { staticClass: "el-loading-spinner" }, [
            !_vm.spinner
              ? _c(
                  "svg",
                  {
                    staticClass: "circular",
                    attrs: { viewBox: "25 25 50 50" }
                  },
                  [
                    _c("circle", {
                      staticClass: "path",
                      attrs: { cx: "50", cy: "50", r: "20", fill: "none" }
                    })
                  ]
                )
              : _c("i", { class: _vm.spinner }),
            _vm.text
              ? _c("p", { staticClass: "el-loading-text" }, [
                  _vm._v(_vm._s(_vm.text))
                ])
              : _vm._e()
          ])
        ]
      )
    ]
  )
};
var staticRenderFns = [];
render._withStripped = true;


// CONCATENATED MODULE: ./packages/loading/src/loading.vue?vue&type=template&id=eee0a7ac&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/loading/src/loading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var loadingvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      text: null,
      spinner: null,
      background: null,
      fullscreen: true,
      visible: false,
      customClass: ''
    };
  },


  methods: {
    handleAfterLeave: function handleAfterLeave() {
      this.$emit('after-leave');
    },
    setText: function setText(text) {
      this.text = text;
    }
  }
});
// CONCATENATED MODULE: ./packages/loading/src/loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_loadingvue_type_script_lang_js_ = (loadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/loading/src/loading.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_loadingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
);
component.options.__file = "packages/loading/src/loading.vue";
/* harmony default export */ var loading = (component.exports);
// EXTERNAL MODULE: external "element-ui/lib/utils/dom"
var dom_ = __webpack_require__(2);

// EXTERNAL MODULE: external "element-ui/lib/utils/popup"
var popup_ = __webpack_require__(15);

// EXTERNAL MODULE: external "element-ui/lib/utils/after-leave"
var after_leave_ = __webpack_require__(41);
var after_leave_default = /*#__PURE__*/__webpack_require__.n(after_leave_);

// CONCATENATED MODULE: ./packages/loading/src/directive.js





var Mask = external_vue_default.a.extend(loading);

var loadingDirective = {};
loadingDirective.install = function (Vue) {
  if (Vue.prototype.$isServer) return;
  var toggleLoading = function toggleLoading(el, binding) {
    if (binding.value) {
      Vue.nextTick(function () {
        if (binding.modifiers.fullscreen) {
          el.originalPosition = Object(dom_["getStyle"])(document.body, 'position');
          el.originalOverflow = Object(dom_["getStyle"])(document.body, 'overflow');
          el.maskStyle.zIndex = popup_["PopupManager"].nextZIndex();

          Object(dom_["addClass"])(el.mask, 'is-fullscreen');
          insertDom(document.body, el, binding);
        } else {
          Object(dom_["removeClass"])(el.mask, 'is-fullscreen');

          if (binding.modifiers.body) {
            el.originalPosition = Object(dom_["getStyle"])(document.body, 'position');

            ['top', 'left'].forEach(function (property) {
              var scroll = property === 'top' ? 'scrollTop' : 'scrollLeft';
              el.maskStyle[property] = el.getBoundingClientRect()[property] + document.body[scroll] + document.documentElement[scroll] - parseInt(Object(dom_["getStyle"])(document.body, 'margin-' + property), 10) + 'px';
            });
            ['height', 'width'].forEach(function (property) {
              el.maskStyle[property] = el.getBoundingClientRect()[property] + 'px';
            });

            insertDom(document.body, el, binding);
          } else {
            el.originalPosition = Object(dom_["getStyle"])(el, 'position');
            insertDom(el, el, binding);
          }
        }
      });
    } else {
      after_leave_default()(el.instance, function (_) {
        if (!el.instance.hiding) return;
        el.domVisible = false;
        var target = binding.modifiers.fullscreen || binding.modifiers.body ? document.body : el;
        Object(dom_["removeClass"])(target, 'el-loading-parent--relative');
        Object(dom_["removeClass"])(target, 'el-loading-parent--hidden');
        el.instance.hiding = false;
      }, 300, true);
      el.instance.visible = false;
      el.instance.hiding = true;
    }
  };
  var insertDom = function insertDom(parent, el, binding) {
    if (!el.domVisible && Object(dom_["getStyle"])(el, 'display') !== 'none' && Object(dom_["getStyle"])(el, 'visibility') !== 'hidden') {
      Object.keys(el.maskStyle).forEach(function (property) {
        el.mask.style[property] = el.maskStyle[property];
      });

      if (el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed') {
        Object(dom_["addClass"])(parent, 'el-loading-parent--relative');
      }
      if (binding.modifiers.fullscreen && binding.modifiers.lock) {
        Object(dom_["addClass"])(parent, 'el-loading-parent--hidden');
      }
      el.domVisible = true;

      parent.appendChild(el.mask);
      Vue.nextTick(function () {
        if (el.instance.hiding) {
          el.instance.$emit('after-leave');
        } else {
          el.instance.visible = true;
        }
      });
      el.domInserted = true;
    } else if (el.domVisible && el.instance.hiding === true) {
      el.instance.visible = true;
      el.instance.hiding = false;
    }
  };

  Vue.directive('loading', {
    bind: function bind(el, binding, vnode) {
      var textExr = el.getAttribute('element-loading-text');
      var spinnerExr = el.getAttribute('element-loading-spinner');
      var backgroundExr = el.getAttribute('element-loading-background');
      var customClassExr = el.getAttribute('element-loading-custom-class');
      var vm = vnode.context;
      var mask = new Mask({
        el: document.createElement('div'),
        data: {
          text: vm && vm[textExr] || textExr,
          spinner: vm && vm[spinnerExr] || spinnerExr,
          background: vm && vm[backgroundExr] || backgroundExr,
          customClass: vm && vm[customClassExr] || customClassExr,
          fullscreen: !!binding.modifiers.fullscreen
        }
      });
      el.instance = mask;
      el.mask = mask.$el;
      el.maskStyle = {};

      binding.value && toggleLoading(el, binding);
    },

    update: function update(el, binding) {
      el.instance.setText(el.getAttribute('element-loading-text'));
      if (binding.oldValue !== binding.value) {
        toggleLoading(el, binding);
      }
    },

    unbind: function unbind(el, binding) {
      if (el.domInserted) {
        el.mask && el.mask.parentNode && el.mask.parentNode.removeChild(el.mask);
        toggleLoading(el, { value: false, modifiers: binding.modifiers });
      }
      el.instance && el.instance.$destroy();
    }
  });
};

/* harmony default export */ var directive = (loadingDirective);
// EXTERNAL MODULE: external "element-ui/lib/utils/merge"
var merge_ = __webpack_require__(9);
var merge_default = /*#__PURE__*/__webpack_require__.n(merge_);

// CONCATENATED MODULE: ./packages/loading/src/index.js







var LoadingConstructor = external_vue_default.a.extend(loading);

var defaults = {
  text: null,
  fullscreen: true,
  body: false,
  lock: false,
  customClass: ''
};

var fullscreenLoading = void 0;

LoadingConstructor.prototype.originalPosition = '';
LoadingConstructor.prototype.originalOverflow = '';

LoadingConstructor.prototype.close = function () {
  var _this = this;

  if (this.fullscreen) {
    fullscreenLoading = undefined;
  }
  after_leave_default()(this, function (_) {
    var target = _this.fullscreen || _this.body ? document.body : _this.target;
    Object(dom_["removeClass"])(target, 'el-loading-parent--relative');
    Object(dom_["removeClass"])(target, 'el-loading-parent--hidden');
    if (_this.$el && _this.$el.parentNode) {
      _this.$el.parentNode.removeChild(_this.$el);
    }
    _this.$destroy();
  }, 300);
  this.visible = false;
};

var src_addStyle = function addStyle(options, parent, instance) {
  var maskStyle = {};
  if (options.fullscreen) {
    instance.originalPosition = Object(dom_["getStyle"])(document.body, 'position');
    instance.originalOverflow = Object(dom_["getStyle"])(document.body, 'overflow');
    maskStyle.zIndex = popup_["PopupManager"].nextZIndex();
  } else if (options.body) {
    instance.originalPosition = Object(dom_["getStyle"])(document.body, 'position');
    ['top', 'left'].forEach(function (property) {
      var scroll = property === 'top' ? 'scrollTop' : 'scrollLeft';
      maskStyle[property] = options.target.getBoundingClientRect()[property] + document.body[scroll] + document.documentElement[scroll] + 'px';
    });
    ['height', 'width'].forEach(function (property) {
      maskStyle[property] = options.target.getBoundingClientRect()[property] + 'px';
    });
  } else {
    instance.originalPosition = Object(dom_["getStyle"])(parent, 'position');
  }
  Object.keys(maskStyle).forEach(function (property) {
    instance.$el.style[property] = maskStyle[property];
  });
};

var src_Loading = function Loading() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (external_vue_default.a.prototype.$isServer) return;
  options = merge_default()({}, defaults, options);
  if (typeof options.target === 'string') {
    options.target = document.querySelector(options.target);
  }
  options.target = options.target || document.body;
  if (options.target !== document.body) {
    options.fullscreen = false;
  } else {
    options.body = true;
  }
  if (options.fullscreen && fullscreenLoading) {
    return fullscreenLoading;
  }

  var parent = options.body ? document.body : options.target;
  var instance = new LoadingConstructor({
    el: document.createElement('div'),
    data: options
  });

  src_addStyle(options, parent, instance);
  if (instance.originalPosition !== 'absolute' && instance.originalPosition !== 'fixed') {
    Object(dom_["addClass"])(parent, 'el-loading-parent--relative');
  }
  if (options.fullscreen && options.lock) {
    Object(dom_["addClass"])(parent, 'el-loading-parent--hidden');
  }
  parent.appendChild(instance.$el);
  external_vue_default.a.nextTick(function () {
    instance.visible = true;
  });
  if (options.fullscreen) {
    fullscreenLoading = instance;
  }
  return instance;
};

/* harmony default export */ var src = (src_Loading);
// CONCATENATED MODULE: ./packages/loading/index.js



/* harmony default export */ var packages_loading = __webpack_exports__["default"] = ({
  install: function install(Vue) {
    Vue.use(directive);
    Vue.prototype.$loading = src;
  },

  directive: directive,
  service: src
});

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = merge;

/***/ })

/******/ });
});

var _Loading = unwrapExports(loading);

var _a$2;

var ImageCommandButton =
/** @class */
function (_super) {
  __extends(ImageCommandButton, _super);

  function ImageCommandButton() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.imageUploadDialogVisible = false;
    _this.uploading = false;
    return _this;
  }

  Object.defineProperty(ImageCommandButton.prototype, "imageNodeOptions", {
    get: function get() {
      return this.editorContext.editor.extensions.options.image;
    },
    enumerable: true,
    configurable: true
  });

  ImageCommandButton.prototype.openUrlPrompt = function () {
    var _this = this;

    _MessageBox.prompt('', this.t('editor.extensions.Image.control.insert_by_url.title'), {
      confirmButtonText: this.t('editor.extensions.Image.control.insert_by_url.confirm'),
      cancelButtonText: this.t('editor.extensions.Image.control.insert_by_url.cancel'),
      inputPlaceholder: this.t('editor.extensions.Image.control.insert_by_url.placeholder'),
      inputPattern: this.imageNodeOptions.urlPattern,
      inputErrorMessage: this.t('editor.extensions.Image.control.insert_by_url.invalid_url'),
      roundButton: true
    }).then(function (_a) {
      var url = _a.value;

      _this.editorContext.commands.image({
        src: url
      });
    }).catch(function () {});
  };

  ImageCommandButton.prototype.uploadImage = function (requestOptions) {
    return __awaiter(this, void 0, void 0, function () {
      var file, uploadRequest, loadingInstance, url, e_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            file = requestOptions.file;
            uploadRequest = this.imageNodeOptions.uploadRequest;
            loadingInstance = _Loading.service({
              target: '.el-tiptap-upload'
            });
            _a.label = 1;

          case 1:
            _a.trys.push([1, 3, 4, 5]);

            return [4
            /*yield*/
            , uploadRequest ? uploadRequest(file) : readFileDataUrl(file)];

          case 2:
            url = _a.sent();
            this.editorContext.commands.image({
              src: url
            });
            this.imageUploadDialogVisible = false;
            return [3
            /*break*/
            , 5];

          case 3:
            e_1 = _a.sent();
            Logger.error(e_1);
            return [3
            /*break*/
            , 5];

          case 4:
            this.$nextTick(function () {
              loadingInstance.close();
            });
            return [7
            /*endfinally*/
            ];

          case 5:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  __decorate([Prop({
    type: Object,
    required: true
  })], ImageCommandButton.prototype, "editorContext", void 0);

  ImageCommandButton = __decorate([Component({
    components: (_a$2 = {}, _a$2[_Dialog.name] = _Dialog, _a$2[_Upload.name] = _Upload, _a$2[_Popover.name] = _Popover, _a$2.CommandButton = __vue_component__$2, _a$2)
  })], ImageCommandButton);
  return ImageCommandButton;
}(mixins(i18nMixin));

/* script */
const __vue_script__$a = ImageCommandButton;

/* template */
var __vue_render__$9 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-popover',{attrs:{"placement":"bottom","trigger":"click","popper-class":"el-tiptap-popper"}},[_c('div',{staticClass:"el-tiptap-popper__menu"},[_c('div',{staticClass:"el-tiptap-popper__menu__item",on:{"click":_vm.openUrlPrompt}},[_c('span',[_vm._v(_vm._s(_vm.t('editor.extensions.Image.buttons.insert_image.external')))])]),_vm._v(" "),_c('div',{staticClass:"el-tiptap-popper__menu__item",on:{"click":function($event){_vm.imageUploadDialogVisible = true;}}},[_c('span',[_vm._v(_vm._s(_vm.t('editor.extensions.Image.buttons.insert_image.upload')))])])]),_vm._v(" "),_c('command-button',{attrs:{"slot":"reference","tooltip":_vm.t('editor.extensions.Image.buttons.insert_image.tooltip'),"icon":"image"},slot:"reference"})],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":_vm.t('editor.extensions.Image.control.upload_image.title'),"visible":_vm.imageUploadDialogVisible,"append-to-body":true},on:{"update:visible":function($event){_vm.imageUploadDialogVisible=$event;}}},[_c('el-upload',{staticClass:"el-tiptap-upload",attrs:{"http-request":_vm.uploadImage,"show-file-list":false,"action":"#","drag":"","accept":"image/*"}},[_c('div',{staticClass:"el-tiptap-upload__icon"},[_c('i',{staticClass:"fa fa-upload"})]),_vm._v(" "),_c('div',{staticClass:"el-tiptap-upload__text"},[_vm._v("\n        "+_vm._s(_vm.t('editor.extensions.Image.control.upload_image.button'))+"\n      ")])])],1)],1)};
var __vue_staticRenderFns__$9 = [];

  /* style */
  const __vue_inject_styles__$a = undefined;
  /* scoped */
  const __vue_scope_id__$a = undefined;
  /* module identifier */
  const __vue_module_identifier__$a = undefined;
  /* functional template */
  const __vue_is_functional_template__$a = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$a = normalizeComponent(
    { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
    __vue_inject_styles__$a,
    __vue_script__$a,
    __vue_scope_id__$a,
    __vue_is_functional_template__$a,
    __vue_module_identifier__$a,
    false,
    undefined,
    undefined,
    undefined
  );

var resizeObservers = [];

var hasActiveObservations = function () {
    return resizeObservers.some(function (ro) { return ro.activeTargets.length > 0; });
};

var hasSkippedObservations = function () {
    return resizeObservers.some(function (ro) { return ro.skippedTargets.length > 0; });
};

var msg = 'ResizeObserver loop completed with undelivered notifications.';
var deliverResizeLoopError = function () {
    var event;
    if (typeof ErrorEvent === 'function') {
        event = new ErrorEvent('error', {
            message: msg
        });
    }
    else {
        event = document.createEvent('Event');
        event.initEvent('error', false, false);
        event.message = msg;
    }
    window.dispatchEvent(event);
};

var ResizeObserverBoxOptions;
(function (ResizeObserverBoxOptions) {
    ResizeObserverBoxOptions["BORDER_BOX"] = "border-box";
    ResizeObserverBoxOptions["CONTENT_BOX"] = "content-box";
    ResizeObserverBoxOptions["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));

var DOMRectReadOnly = (function () {
    function DOMRectReadOnly(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.top = this.y;
        this.left = this.x;
        this.bottom = this.top + this.height;
        this.right = this.left + this.width;
        return Object.freeze(this);
    }
    DOMRectReadOnly.prototype.toJSON = function () {
        var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
        return { x: x, y: y, top: top, right: right, bottom: bottom, left: left, width: width, height: height };
    };
    DOMRectReadOnly.fromRect = function (rectangle) {
        return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    };
    return DOMRectReadOnly;
}());

var isSVG = function (target) { return target instanceof SVGElement && 'getBBox' in target; };
var isHidden = function (target) {
    if (isSVG(target)) {
        var _a = target.getBBox(), width = _a.width, height = _a.height;
        return !width && !height;
    }
    var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
    return !(offsetWidth || offsetHeight || target.getClientRects().length);
};
var isElement = function (obj) {
    var _a, _b;
    var scope = (_b = (_a = obj) === null || _a === void 0 ? void 0 : _a.ownerDocument) === null || _b === void 0 ? void 0 : _b.defaultView;
    return !!(scope && obj instanceof scope.Element);
};
var isReplacedElement = function (target) {
    switch (target.tagName) {
        case 'INPUT':
            if (target.type !== 'image') {
                break;
            }
        case 'VIDEO':
        case 'AUDIO':
        case 'EMBED':
        case 'OBJECT':
        case 'CANVAS':
        case 'IFRAME':
        case 'IMG':
            return true;
    }
    return false;
};

var global$1 = typeof window !== 'undefined' ? window : {};

var cache$1 = new Map();
var scrollRegexp = /auto|scroll/;
var verticalRegexp = /^tb|vertical/;
var IE = (/msie|trident/i).test(global$1.navigator && global$1.navigator.userAgent);
var parseDimension = function (pixel) { return parseFloat(pixel || '0'); };
var size = function (inlineSize, blockSize, switchSizes) {
    if (inlineSize === void 0) { inlineSize = 0; }
    if (blockSize === void 0) { blockSize = 0; }
    if (switchSizes === void 0) { switchSizes = false; }
    return Object.freeze({
        inlineSize: (switchSizes ? blockSize : inlineSize) || 0,
        blockSize: (switchSizes ? inlineSize : blockSize) || 0
    });
};
var zeroBoxes = Object.freeze({
    devicePixelContentBoxSize: size(),
    borderBoxSize: size(),
    contentBoxSize: size(),
    contentRect: new DOMRectReadOnly(0, 0, 0, 0)
});
var calculateBoxSizes = function (target) {
    if (cache$1.has(target)) {
        return cache$1.get(target);
    }
    if (isHidden(target)) {
        cache$1.set(target, zeroBoxes);
        return zeroBoxes;
    }
    var cs = getComputedStyle(target);
    var svg = isSVG(target) && target.ownerSVGElement && target.getBBox();
    var removePadding = !IE && cs.boxSizing === 'border-box';
    var switchSizes = verticalRegexp.test(cs.writingMode || '');
    var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || '');
    var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || '');
    var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
    var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
    var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
    var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
    var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
    var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
    var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
    var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
    var horizontalPadding = paddingLeft + paddingRight;
    var verticalPadding = paddingTop + paddingBottom;
    var horizontalBorderArea = borderLeft + borderRight;
    var verticalBorderArea = borderTop + borderBottom;
    var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
    var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
    var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
    var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
    var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
    var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
    var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
    var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
    var boxes = Object.freeze({
        devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
        borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
        contentBoxSize: size(contentWidth, contentHeight, switchSizes),
        contentRect: new DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
    });
    cache$1.set(target, boxes);
    return boxes;
};
var calculateBoxSize = function (target, observedBox) {
    var _a = calculateBoxSizes(target), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
    switch (observedBox) {
        case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
            return devicePixelContentBoxSize;
        case ResizeObserverBoxOptions.BORDER_BOX:
            return borderBoxSize;
        default:
            return contentBoxSize;
    }
};

var ResizeObserverEntry = (function () {
    function ResizeObserverEntry(target) {
        var boxes = calculateBoxSizes(target);
        this.target = target;
        this.contentRect = boxes.contentRect;
        this.borderBoxSize = [boxes.borderBoxSize];
        this.contentBoxSize = [boxes.contentBoxSize];
        this.devicePixelContentBoxSize = [boxes.devicePixelContentBoxSize];
    }
    return ResizeObserverEntry;
}());

var calculateDepthForNode = function (node) {
    if (isHidden(node)) {
        return Infinity;
    }
    var depth = 0;
    var parent = node.parentNode;
    while (parent) {
        depth += 1;
        parent = parent.parentNode;
    }
    return depth;
};

var broadcastActiveObservations = function () {
    var shallowestDepth = Infinity;
    var callbacks = [];
    resizeObservers.forEach(function processObserver(ro) {
        if (ro.activeTargets.length === 0) {
            return;
        }
        var entries = [];
        ro.activeTargets.forEach(function processTarget(ot) {
            var entry = new ResizeObserverEntry(ot.target);
            var targetDepth = calculateDepthForNode(ot.target);
            entries.push(entry);
            ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox);
            if (targetDepth < shallowestDepth) {
                shallowestDepth = targetDepth;
            }
        });
        callbacks.push(function resizeObserverCallback() {
            ro.callback.call(ro.observer, entries, ro.observer);
        });
        ro.activeTargets.splice(0, ro.activeTargets.length);
    });
    for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
        var callback = callbacks_1[_i];
        callback();
    }
    return shallowestDepth;
};

var gatherActiveObservationsAtDepth = function (depth) {
    cache$1.clear();
    resizeObservers.forEach(function processObserver(ro) {
        ro.activeTargets.splice(0, ro.activeTargets.length);
        ro.skippedTargets.splice(0, ro.skippedTargets.length);
        ro.observationTargets.forEach(function processTarget(ot) {
            if (ot.isActive()) {
                if (calculateDepthForNode(ot.target) > depth) {
                    ro.activeTargets.push(ot);
                }
                else {
                    ro.skippedTargets.push(ot);
                }
            }
        });
    });
};

var process$4 = function () {
    var depth = 0;
    gatherActiveObservationsAtDepth(depth);
    while (hasActiveObservations()) {
        depth = broadcastActiveObservations();
        gatherActiveObservationsAtDepth(depth);
    }
    if (hasSkippedObservations()) {
        deliverResizeLoopError();
    }
    return depth > 0;
};

var trigger;
var callbacks = [];
var notify$2 = function () { return callbacks.splice(0).forEach(function (cb) { return cb(); }); };
var queueMicroTask = function (callback) {
    if (!trigger) {
        var toggle_1 = 0;
        var el_1 = document.createTextNode('');
        var config = { characterData: true };
        new MutationObserver(function () { return notify$2(); }).observe(el_1, config);
        trigger = function () { el_1.textContent = "" + (toggle_1 ? toggle_1-- : toggle_1++); };
    }
    callbacks.push(callback);
    trigger();
};

var queueResizeObserver = function (cb) {
    queueMicroTask(function ResizeObserver() {
        requestAnimationFrame(cb);
    });
};

var watching = 0;
var isWatching = function () { return !!watching; };
var CATCH_FRAMES = 60 / 5;
var observerConfig = { attributes: true, characterData: true, childList: true, subtree: true };
var events = [
    'resize',
    'load',
    'transitionend',
    'animationend',
    'animationstart',
    'animationiteration',
    'keyup',
    'keydown',
    'mouseup',
    'mousedown',
    'mouseover',
    'mouseout',
    'blur',
    'focus'
];
var scheduled = false;
var Scheduler = (function () {
    function Scheduler() {
        var _this = this;
        this.stopped = true;
        this.listener = function () { return _this.schedule(); };
    }
    Scheduler.prototype.run = function (frames) {
        var _this = this;
        if (scheduled) {
            return;
        }
        scheduled = true;
        queueResizeObserver(function () {
            var elementsHaveResized = false;
            try {
                elementsHaveResized = process$4();
            }
            finally {
                scheduled = false;
                if (!isWatching()) {
                    return;
                }
                if (elementsHaveResized) {
                    _this.run(60);
                }
                else if (frames) {
                    _this.run(frames - 1);
                }
                else {
                    _this.start();
                }
            }
        });
    };
    Scheduler.prototype.schedule = function () {
        this.stop();
        this.run(CATCH_FRAMES);
    };
    Scheduler.prototype.observe = function () {
        var _this = this;
        var cb = function () { return _this.observer && _this.observer.observe(document.body, observerConfig); };
        document.body ? cb() : global$1.addEventListener('DOMContentLoaded', cb);
    };
    Scheduler.prototype.start = function () {
        var _this = this;
        if (this.stopped) {
            this.stopped = false;
            this.observer = new MutationObserver(this.listener);
            this.observe();
            events.forEach(function (name) { return global$1.addEventListener(name, _this.listener, true); });
        }
    };
    Scheduler.prototype.stop = function () {
        var _this = this;
        if (!this.stopped) {
            this.observer && this.observer.disconnect();
            events.forEach(function (name) { return global$1.removeEventListener(name, _this.listener, true); });
            this.stopped = true;
        }
    };
    return Scheduler;
}());
var scheduler = new Scheduler();
var updateCount = function (n) {
    !watching && n > 0 && scheduler.start();
    watching += n;
    !watching && scheduler.stop();
};

var skipNotifyOnElement = function (target) {
    return !isSVG(target)
        && !isReplacedElement(target)
        && getComputedStyle(target).display === 'inline';
};
var ResizeObservation = (function () {
    function ResizeObservation(target, observedBox) {
        this.target = target;
        this.observedBox = observedBox || ResizeObserverBoxOptions.CONTENT_BOX;
        this.lastReportedSize = {
            inlineSize: 0,
            blockSize: 0
        };
    }
    ResizeObservation.prototype.isActive = function () {
        var size = calculateBoxSize(this.target, this.observedBox);
        if (skipNotifyOnElement(this.target)) {
            this.lastReportedSize = size;
        }
        if (this.lastReportedSize.inlineSize !== size.inlineSize
            || this.lastReportedSize.blockSize !== size.blockSize) {
            return true;
        }
        return false;
    };
    return ResizeObservation;
}());

var ResizeObserverDetail = (function () {
    function ResizeObserverDetail(resizeObserver, callback) {
        this.activeTargets = [];
        this.skippedTargets = [];
        this.observationTargets = [];
        this.observer = resizeObserver;
        this.callback = callback;
    }
    return ResizeObserverDetail;
}());

var observerMap = new Map();
var getObservationIndex = function (observationTargets, target) {
    for (var i = 0; i < observationTargets.length; i += 1) {
        if (observationTargets[i].target === target) {
            return i;
        }
    }
    return -1;
};
var ResizeObserverController = (function () {
    function ResizeObserverController() {
    }
    ResizeObserverController.connect = function (resizeObserver, callback) {
        var detail = new ResizeObserverDetail(resizeObserver, callback);
        resizeObservers.push(detail);
        observerMap.set(resizeObserver, detail);
    };
    ResizeObserverController.observe = function (resizeObserver, target, options) {
        if (observerMap.has(resizeObserver)) {
            var detail = observerMap.get(resizeObserver);
            if (getObservationIndex(detail.observationTargets, target) < 0) {
                detail.observationTargets.push(new ResizeObservation(target, options && options.box));
                updateCount(1);
                scheduler.schedule();
            }
        }
    };
    ResizeObserverController.unobserve = function (resizeObserver, target) {
        if (observerMap.has(resizeObserver)) {
            var detail = observerMap.get(resizeObserver);
            var index = getObservationIndex(detail.observationTargets, target);
            if (index >= 0) {
                detail.observationTargets.splice(index, 1);
                updateCount(-1);
            }
        }
    };
    ResizeObserverController.disconnect = function (resizeObserver) {
        if (observerMap.has(resizeObserver)) {
            var detail = observerMap.get(resizeObserver);
            resizeObservers.splice(resizeObservers.indexOf(detail), 1);
            observerMap.delete(resizeObserver);
            updateCount(-detail.observationTargets.length);
        }
    };
    return ResizeObserverController;
}());

var ResizeObserver = (function () {
    function ResizeObserver(callback) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (typeof callback !== 'function') {
            throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
        }
        ResizeObserverController.connect(this, callback);
    }
    ResizeObserver.prototype.observe = function (target, options) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (!isElement(target)) {
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }
        ResizeObserverController.observe(this, target, options);
    };
    ResizeObserver.prototype.unobserve = function (target) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (!isElement(target)) {
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }
        ResizeObserverController.unobserve(this, target);
    };
    ResizeObserver.prototype.disconnect = function () {
        ResizeObserverController.disconnect(this);
    };
    ResizeObserver.toString = function () {
        return 'function ResizeObserver () { [polyfill code] }';
    };
    return ResizeObserver;
}());

var IMAGE_CACHE = {};
function resolveImg(src) {
  return new Promise(function (resolve, reject) {
    var result = {
      complete: false,
      width: 0,
      height: 0,
      src: src
    };

    if (!src) {
      reject(result);
      return;
    }

    if (IMAGE_CACHE[src]) {
      resolve(__assign({}, IMAGE_CACHE[src]));
      return;
    }

    var img = new Image();

    img.onload = function () {
      result.width = img.width;
      result.height = img.height;
      result.complete = true;
      IMAGE_CACHE[src] = __assign({}, result);
      resolve(result);
    };

    img.onerror = function () {
      reject(result);
    };

    img.src = src;
  });
}

var _a$3;

var IframeDisplayCommandButton =
/** @class */
function (_super) {
  __extends(IframeDisplayCommandButton, _super);

  function IframeDisplayCommandButton() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.popoverVisible = false;
    _this.displayCollection = ["inline"
    /* INLINE */
    , "block"
    /* BREAK_TEXT */
    , "left"
    /* FLOAT_LEFT */
    , "right"
    /* FLOAT_RIGHT */
    ];
    return _this;
  }

  Object.defineProperty(IframeDisplayCommandButton.prototype, "currDisplay", {
    get: function get() {
      return this.node.attrs.display;
    },
    enumerable: true,
    configurable: true
  });

  IframeDisplayCommandButton.prototype.hidePopover = function () {
    this.popoverVisible = false;
  };

  __decorate([Prop({
    type: Node$1,
    required: true
  })], IframeDisplayCommandButton.prototype, "node", void 0);

  __decorate([Prop({
    type: Function,
    required: true
  })], IframeDisplayCommandButton.prototype, "updateAttrs", void 0);

  IframeDisplayCommandButton = __decorate([Component({
    components: (_a$3 = {}, _a$3[_Popover.name] = _Popover, _a$3.CommandButton = __vue_component__$2, _a$3)
  })], IframeDisplayCommandButton);
  return IframeDisplayCommandButton;
}(mixins(i18nMixin));

/* script */
const __vue_script__$b = IframeDisplayCommandButton;

/* template */
var __vue_render__$a = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-popover',{attrs:{"placement":"top","trigger":"click","popper-class":"el-tiptap-popper"},model:{value:(_vm.popoverVisible),callback:function ($$v) {_vm.popoverVisible=$$v;},expression:"popoverVisible"}},[_c('div',{staticClass:"el-tiptap-popper__menu"},_vm._l((_vm.displayCollection),function(display){return _c('div',{key:display,staticClass:"el-tiptap-popper__menu__item",class:{
        'el-tiptap-popper__menu__item--active': display === _vm.currDisplay,
      },on:{"mousedown":_vm.hidePopover,"click":function($event){return _vm.updateAttrs({ display: display })}}},[_c('span',[_vm._v(_vm._s(_vm.t(("editor.extensions.NewIframe.buttons.display." + display))))])])}),0),_vm._v(" "),_c('command-button',{attrs:{"slot":"reference","tooltip":_vm.t('editor.extensions.NewIframe.buttons.display.tooltip'),"icon":"map-signs"},slot:"reference"})],1)};
var __vue_staticRenderFns__$a = [];

  /* style */
  const __vue_inject_styles__$b = undefined;
  /* scoped */
  const __vue_scope_id__$b = undefined;
  /* module identifier */
  const __vue_module_identifier__$b = undefined;
  /* functional template */
  const __vue_is_functional_template__$b = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$b = normalizeComponent(
    { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
    __vue_inject_styles__$b,
    __vue_script__$b,
    __vue_scope_id__$b,
    __vue_is_functional_template__$b,
    __vue_module_identifier__$b,
    false,
    undefined,
    undefined,
    undefined
  );

var col = createCommonjsModule(function (module) {
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 134);
/******/ })
/************************************************************************/
/******/ ({

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./packages/col/src/col.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* harmony default export */ var col = ({
  name: 'ElCol',

  props: {
    span: {
      type: Number,
      default: 24
    },
    tag: {
      type: String,
      default: 'div'
    },
    offset: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },

  computed: {
    gutter: function gutter() {
      var parent = this.$parent;
      while (parent && parent.$options.componentName !== 'ElRow') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    }
  },
  render: function render(h) {
    var _this = this;

    var classList = [];
    var style = {};

    if (this.gutter) {
      style.paddingLeft = this.gutter / 2 + 'px';
      style.paddingRight = style.paddingLeft;
    }

    ['span', 'offset', 'pull', 'push'].forEach(function (prop) {
      if (_this[prop] || _this[prop] === 0) {
        classList.push(prop !== 'span' ? 'el-col-' + prop + '-' + _this[prop] : 'el-col-' + _this[prop]);
      }
    });

    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(function (size) {
      if (typeof _this[size] === 'number') {
        classList.push('el-col-' + size + '-' + _this[size]);
      } else if (_typeof(_this[size]) === 'object') {
        var props = _this[size];
        Object.keys(props).forEach(function (prop) {
          classList.push(prop !== 'span' ? 'el-col-' + size + '-' + prop + '-' + props[prop] : 'el-col-' + size + '-' + props[prop]);
        });
      }
    });

    return h(this.tag, {
      class: ['el-col', classList],
      style: style
    }, this.$slots.default);
  }
});
// CONCATENATED MODULE: ./packages/col/index.js


/* istanbul ignore next */
col.install = function (Vue) {
  Vue.component(col.name, col);
};

/* harmony default export */ var packages_col = __webpack_exports__["default"] = (col);

/***/ })

/******/ });
});

var _Col = unwrapExports(col);

var types = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.isString = isString;
exports.isObject = isObject;
exports.isHtmlElement = isHtmlElement;
function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

function isHtmlElement(node) {
  return node && node.nodeType === Node.ELEMENT_NODE;
}

var isFunction = exports.isFunction = function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
};

var isUndefined = exports.isUndefined = function isUndefined(val) {
  return val === void 0;
};

var isDefined = exports.isDefined = function isDefined(val) {
  return val !== undefined && val !== null;
};
});

unwrapExports(types);
var types_1 = types.isString;
var types_2 = types.isObject;
var types_3 = types.isHtmlElement;
var types_4 = types.isFunction;
var types_5 = types.isUndefined;
var types_6 = types.isDefined;

var util = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.isEmpty = exports.isEqual = exports.arrayEquals = exports.looseEqual = exports.capitalize = exports.kebabCase = exports.autoprefixer = exports.isFirefox = exports.isEdge = exports.isIE = exports.coerceTruthyValueToArray = exports.arrayFind = exports.arrayFindIndex = exports.escapeRegexpString = exports.valueEquals = exports.generateId = exports.getValueByPath = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.noop = noop;
exports.hasOwn = hasOwn;
exports.toObject = toObject;
exports.getPropByPath = getPropByPath;
exports.rafThrottle = rafThrottle;
exports.objToArray = objToArray;



var _vue2 = _interopRequireDefault(Vue);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasOwnProperty = Object.prototype.hasOwnProperty;

function noop() {}
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to;
}
function toObject(arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
}
var getValueByPath = exports.getValueByPath = function getValueByPath(object, prop) {
  prop = prop || '';
  var paths = prop.split('.');
  var current = object;
  var result = null;
  for (var i = 0, j = paths.length; i < j; i++) {
    var path = paths[i];
    if (!current) break;

    if (i === j - 1) {
      result = current[path];
      break;
    }
    current = current[path];
  }
  return result;
};

function getPropByPath(obj, path, strict) {
  var tempObj = obj;
  path = path.replace(/\[(\w+)\]/g, '.$1');
  path = path.replace(/^\./, '');

  var keyArr = path.split('.');
  var i = 0;
  for (var len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break;
    var key = keyArr[i];
    if (key in tempObj) {
      tempObj = tempObj[key];
    } else {
      if (strict) {
        throw new Error('please transfer a valid prop path to form item!');
      }
      break;
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null
  };
}
var generateId = exports.generateId = function generateId() {
  return Math.floor(Math.random() * 10000);
};

var valueEquals = exports.valueEquals = function valueEquals(a, b) {
  // see: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
  if (a === b) return true;
  if (!(a instanceof Array)) return false;
  if (!(b instanceof Array)) return false;
  if (a.length !== b.length) return false;
  for (var i = 0; i !== a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

var escapeRegexpString = exports.escapeRegexpString = function escapeRegexpString() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
};

// TODO: use native Array.find, Array.findIndex when IE support is dropped
var arrayFindIndex = exports.arrayFindIndex = function arrayFindIndex(arr, pred) {
  for (var i = 0; i !== arr.length; ++i) {
    if (pred(arr[i])) {
      return i;
    }
  }
  return -1;
};

var arrayFind = exports.arrayFind = function arrayFind(arr, pred) {
  var idx = arrayFindIndex(arr, pred);
  return idx !== -1 ? arr[idx] : undefined;
};

// coerce truthy value to array
var coerceTruthyValueToArray = exports.coerceTruthyValueToArray = function coerceTruthyValueToArray(val) {
  if (Array.isArray(val)) {
    return val;
  } else if (val) {
    return [val];
  } else {
    return [];
  }
};

var isIE = exports.isIE = function isIE() {
  return !_vue2.default.prototype.$isServer && !isNaN(Number(document.documentMode));
};

var isEdge = exports.isEdge = function isEdge() {
  return !_vue2.default.prototype.$isServer && navigator.userAgent.indexOf('Edge') > -1;
};

var isFirefox = exports.isFirefox = function isFirefox() {
  return !_vue2.default.prototype.$isServer && !!window.navigator.userAgent.match(/firefox/i);
};

var autoprefixer = exports.autoprefixer = function autoprefixer(style) {
  if ((typeof style === 'undefined' ? 'undefined' : _typeof(style)) !== 'object') return style;
  var rules = ['transform', 'transition', 'animation'];
  var prefixes = ['ms-', 'webkit-'];
  rules.forEach(function (rule) {
    var value = style[rule];
    if (rule && value) {
      prefixes.forEach(function (prefix) {
        style[prefix + rule] = value;
      });
    }
  });
  return style;
};

var kebabCase = exports.kebabCase = function kebabCase(str) {
  var hyphenateRE = /([^-])([A-Z])/g;
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
};

var capitalize = exports.capitalize = function capitalize(str) {
  if (!(0, types.isString)(str)) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

var looseEqual = exports.looseEqual = function looseEqual(a, b) {
  var isObjectA = (0, types.isObject)(a);
  var isObjectB = (0, types.isObject)(b);
  if (isObjectA && isObjectB) {
    return JSON.stringify(a) === JSON.stringify(b);
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
};

var arrayEquals = exports.arrayEquals = function arrayEquals(arrayA, arrayB) {
  arrayA = arrayA || [];
  arrayB = arrayB || [];

  if (arrayA.length !== arrayB.length) {
    return false;
  }

  for (var i = 0; i < arrayA.length; i++) {
    if (!looseEqual(arrayA[i], arrayB[i])) {
      return false;
    }
  }

  return true;
};

var isEqual = exports.isEqual = function isEqual(value1, value2) {
  if (Array.isArray(value1) && Array.isArray(value2)) {
    return arrayEquals(value1, value2);
  }
  return looseEqual(value1, value2);
};

var isEmpty = exports.isEmpty = function isEmpty(val) {
  // null or undefined
  if (val == null) return true;

  if (typeof val === 'boolean') return false;

  if (typeof val === 'number') return !val;

  if (val instanceof Error) return val.message === '';

  switch (Object.prototype.toString.call(val)) {
    // String or Array
    case '[object String]':
    case '[object Array]':
      return !val.length;

    // Map or Set or File
    case '[object File]':
    case '[object Map]':
    case '[object Set]':
      {
        return !val.size;
      }
    // Plain Object
    case '[object Object]':
      {
        return !Object.keys(val).length;
      }
  }

  return false;
};

function rafThrottle(fn) {
  var locked = false;
  return function () {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (locked) return;
    locked = true;
    window.requestAnimationFrame(function (_) {
      fn.apply(_this, args);
      locked = false;
    });
  };
}

function objToArray(obj) {
  if (Array.isArray(obj)) {
    return obj;
  }
  return isEmpty(obj) ? [] : [obj];
}
});

unwrapExports(util);
var util_1 = util.isEmpty;
var util_2 = util.isEqual;
var util_3 = util.arrayEquals;
var util_4 = util.looseEqual;
var util_5 = util.capitalize;
var util_6 = util.kebabCase;
var util_7 = util.autoprefixer;
var util_8 = util.isFirefox;
var util_9 = util.isEdge;
var util_10 = util.isIE;
var util_11 = util.coerceTruthyValueToArray;
var util_12 = util.arrayFind;
var util_13 = util.arrayFindIndex;
var util_14 = util.escapeRegexpString;
var util_15 = util.valueEquals;
var util_16 = util.generateId;
var util_17 = util.getValueByPath;
var util_18 = util.noop;
var util_19 = util.hasOwn;
var util_20 = util.toObject;
var util_21 = util.getPropByPath;
var util_22 = util.rafThrottle;
var util_23 = util.objToArray;

var migrating = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



/**
 * Show migrating guide in browser console.
 *
 * Usage:
 * import Migrating from 'element-ui/src/mixins/migrating';
 *
 * mixins: [Migrating]
 *
 * add getMigratingConfig method for your component.
 *  getMigratingConfig() {
 *    return {
 *      props: {
 *        'allow-no-selection': 'allow-no-selection is removed.',
 *        'selection-mode': 'selection-mode is removed.'
 *      },
 *      events: {
 *        selectionchange: 'selectionchange is renamed to selection-change.'
 *      }
 *    };
 *  },
 */
exports.default = {
  mounted: function mounted() {
    return;
  },

  methods: {
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {},
        events: {}
      };
    }
  }
};
});

unwrapExports(migrating);

var shared$1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.isDef = isDef;
exports.isKorean = isKorean;
function isDef(val) {
  return val !== undefined && val !== null;
}
function isKorean(text) {
  var reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;
  return reg.test(text);
}
});

unwrapExports(shared$1);
var shared_1 = shared$1.isDef;
var shared_2 = shared$1.isKorean;

var emitter = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
function _broadcast(componentName, eventName, params) {
  this.$children.forEach(function (child) {
    var name = child.$options.componentName;

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      _broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
exports.default = {
  methods: {
    dispatch: function dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.componentName;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    broadcast: function broadcast(componentName, eventName, params) {
      _broadcast.call(this, componentName, eventName, params);
    }
  }
};
});

unwrapExports(emitter);

var input = createCommonjsModule(function (module) {
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 76);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports;

  // render functions
  if (render) {
    options.render = render;
    options.staticRenderFns = staticRenderFns;
    options._compiled = true;
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true;
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId;
  }

  var hook;
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context);
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook;
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot); }
      : injectStyles;
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook;
      // register for functioal component in vue file
      var originalRender = options.render;
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context);
        return originalRender(h, context)
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook];
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = migrating;

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = shared$1;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = emitter;

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/input/src/input.vue?vue&type=template&id=343dd774&
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: [
        _vm.type === "textarea" ? "el-textarea" : "el-input",
        _vm.inputSize ? "el-input--" + _vm.inputSize : "",
        {
          "is-disabled": _vm.inputDisabled,
          "is-exceed": _vm.inputExceed,
          "el-input-group": _vm.$slots.prepend || _vm.$slots.append,
          "el-input-group--append": _vm.$slots.append,
          "el-input-group--prepend": _vm.$slots.prepend,
          "el-input--prefix": _vm.$slots.prefix || _vm.prefixIcon,
          "el-input--suffix":
            _vm.$slots.suffix ||
            _vm.suffixIcon ||
            _vm.clearable ||
            _vm.showPassword
        }
      ],
      on: {
        mouseenter: function($event) {
          _vm.hovering = true;
        },
        mouseleave: function($event) {
          _vm.hovering = false;
        }
      }
    },
    [
      _vm.type !== "textarea"
        ? [
            _vm.$slots.prepend
              ? _c(
                  "div",
                  { staticClass: "el-input-group__prepend" },
                  [_vm._t("prepend")],
                  2
                )
              : _vm._e(),
            _vm.type !== "textarea"
              ? _c(
                  "input",
                  _vm._b(
                    {
                      ref: "input",
                      staticClass: "el-input__inner",
                      attrs: {
                        tabindex: _vm.tabindex,
                        type: _vm.showPassword
                          ? _vm.passwordVisible
                            ? "text"
                            : "password"
                          : _vm.type,
                        disabled: _vm.inputDisabled,
                        readonly: _vm.readonly,
                        autocomplete: _vm.autoComplete || _vm.autocomplete,
                        "aria-label": _vm.label
                      },
                      on: {
                        compositionstart: _vm.handleCompositionStart,
                        compositionupdate: _vm.handleCompositionUpdate,
                        compositionend: _vm.handleCompositionEnd,
                        input: _vm.handleInput,
                        focus: _vm.handleFocus,
                        blur: _vm.handleBlur,
                        change: _vm.handleChange
                      }
                    },
                    "input",
                    _vm.$attrs,
                    false
                  )
                )
              : _vm._e(),
            _vm.$slots.prefix || _vm.prefixIcon
              ? _c(
                  "span",
                  { staticClass: "el-input__prefix" },
                  [
                    _vm._t("prefix"),
                    _vm.prefixIcon
                      ? _c("i", {
                          staticClass: "el-input__icon",
                          class: _vm.prefixIcon
                        })
                      : _vm._e()
                  ],
                  2
                )
              : _vm._e(),
            _vm.getSuffixVisible()
              ? _c("span", { staticClass: "el-input__suffix" }, [
                  _c(
                    "span",
                    { staticClass: "el-input__suffix-inner" },
                    [
                      !_vm.showClear ||
                      !_vm.showPwdVisible ||
                      !_vm.isWordLimitVisible
                        ? [
                            _vm._t("suffix"),
                            _vm.suffixIcon
                              ? _c("i", {
                                  staticClass: "el-input__icon",
                                  class: _vm.suffixIcon
                                })
                              : _vm._e()
                          ]
                        : _vm._e(),
                      _vm.showClear
                        ? _c("i", {
                            staticClass:
                              "el-input__icon el-icon-circle-close el-input__clear",
                            on: {
                              mousedown: function($event) {
                                $event.preventDefault();
                              },
                              click: _vm.clear
                            }
                          })
                        : _vm._e(),
                      _vm.showPwdVisible
                        ? _c("i", {
                            staticClass:
                              "el-input__icon el-icon-view el-input__clear",
                            on: { click: _vm.handlePasswordVisible }
                          })
                        : _vm._e(),
                      _vm.isWordLimitVisible
                        ? _c("span", { staticClass: "el-input__count" }, [
                            _c(
                              "span",
                              { staticClass: "el-input__count-inner" },
                              [
                                _vm._v(
                                  "\n            " +
                                    _vm._s(_vm.textLength) +
                                    "/" +
                                    _vm._s(_vm.upperLimit) +
                                    "\n          "
                                )
                              ]
                            )
                          ])
                        : _vm._e()
                    ],
                    2
                  ),
                  _vm.validateState
                    ? _c("i", {
                        staticClass: "el-input__icon",
                        class: ["el-input__validateIcon", _vm.validateIcon]
                      })
                    : _vm._e()
                ])
              : _vm._e(),
            _vm.$slots.append
              ? _c(
                  "div",
                  { staticClass: "el-input-group__append" },
                  [_vm._t("append")],
                  2
                )
              : _vm._e()
          ]
        : _c(
            "textarea",
            _vm._b(
              {
                ref: "textarea",
                staticClass: "el-textarea__inner",
                style: _vm.textareaStyle,
                attrs: {
                  tabindex: _vm.tabindex,
                  disabled: _vm.inputDisabled,
                  readonly: _vm.readonly,
                  autocomplete: _vm.autoComplete || _vm.autocomplete,
                  "aria-label": _vm.label
                },
                on: {
                  compositionstart: _vm.handleCompositionStart,
                  compositionupdate: _vm.handleCompositionUpdate,
                  compositionend: _vm.handleCompositionEnd,
                  input: _vm.handleInput,
                  focus: _vm.handleFocus,
                  blur: _vm.handleBlur,
                  change: _vm.handleChange
                }
              },
              "textarea",
              _vm.$attrs,
              false
            )
          ),
      _vm.isWordLimitVisible && _vm.type === "textarea"
        ? _c("span", { staticClass: "el-input__count" }, [
            _vm._v(_vm._s(_vm.textLength) + "/" + _vm._s(_vm.upperLimit))
          ])
        : _vm._e()
    ],
    2
  )
};
var staticRenderFns = [];
render._withStripped = true;


// CONCATENATED MODULE: ./packages/input/src/input.vue?vue&type=template&id=343dd774&

// EXTERNAL MODULE: external "element-ui/lib/mixins/emitter"
var emitter_ = __webpack_require__(4);
var emitter_default = /*#__PURE__*/__webpack_require__.n(emitter_);

// EXTERNAL MODULE: external "element-ui/lib/mixins/migrating"
var migrating_ = __webpack_require__(11);
var migrating_default = /*#__PURE__*/__webpack_require__.n(migrating_);

// CONCATENATED MODULE: ./packages/input/src/calcTextareaHeight.js
var hiddenTextarea = void 0;

var HIDDEN_STYLE = '\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n';

var CONTEXT_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];

function calculateNodeStyling(targetElement) {
  var style = window.getComputedStyle(targetElement);

  var boxSizing = style.getPropertyValue('box-sizing');

  var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));

  var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));

  var contextStyle = CONTEXT_STYLE.map(function (name) {
    return name + ':' + style.getPropertyValue(name);
  }).join(';');

  return { contextStyle: contextStyle, paddingSize: paddingSize, borderSize: borderSize, boxSizing: boxSizing };
}

function calcTextareaHeight(targetElement) {
  var minRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var maxRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    document.body.appendChild(hiddenTextarea);
  }

  var _calculateNodeStyling = calculateNodeStyling(targetElement),
      paddingSize = _calculateNodeStyling.paddingSize,
      borderSize = _calculateNodeStyling.borderSize,
      boxSizing = _calculateNodeStyling.boxSizing,
      contextStyle = _calculateNodeStyling.contextStyle;

  hiddenTextarea.setAttribute('style', contextStyle + ';' + HIDDEN_STYLE);
  hiddenTextarea.value = targetElement.value || targetElement.placeholder || '';

  var height = hiddenTextarea.scrollHeight;
  var result = {};

  if (boxSizing === 'border-box') {
    height = height + borderSize;
  } else if (boxSizing === 'content-box') {
    height = height - paddingSize;
  }

  hiddenTextarea.value = '';
  var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

  if (minRows !== null) {
    var minHeight = singleRowHeight * minRows;
    if (boxSizing === 'border-box') {
      minHeight = minHeight + paddingSize + borderSize;
    }
    height = Math.max(minHeight, height);
    result.minHeight = minHeight + 'px';
  }
  if (maxRows !== null) {
    var maxHeight = singleRowHeight * maxRows;
    if (boxSizing === 'border-box') {
      maxHeight = maxHeight + paddingSize + borderSize;
    }
    height = Math.min(maxHeight, height);
  }
  result.height = height + 'px';
  hiddenTextarea.parentNode && hiddenTextarea.parentNode.removeChild(hiddenTextarea);
  hiddenTextarea = null;
  return result;
}// EXTERNAL MODULE: external "element-ui/lib/utils/merge"
var merge_ = __webpack_require__(9);
var merge_default = /*#__PURE__*/__webpack_require__.n(merge_);

// EXTERNAL MODULE: external "element-ui/lib/utils/shared"
var shared_ = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/input/src/input.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var inputvue_type_script_lang_js_ = ({
  name: 'ElInput',

  componentName: 'ElInput',

  mixins: [emitter_default.a, migrating_default.a],

  inheritAttrs: false,

  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },

  data: function data() {
    return {
      textareaCalcStyle: {},
      hovering: false,
      focused: false,
      isComposing: false,
      passwordVisible: false
    };
  },


  props: {
    value: [String, Number],
    size: String,
    resize: String,
    form: String,
    disabled: Boolean,
    readonly: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    autosize: {
      type: [Boolean, Object],
      default: false
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    /** @Deprecated in next major version */
    autoComplete: {
      type: String,
      validator: function validator(val) {
        return true;
      }
    },
    validateEvent: {
      type: Boolean,
      default: true
    },
    suffixIcon: String,
    prefixIcon: String,
    label: String,
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    showWordLimit: {
      type: Boolean,
      default: false
    },
    tabindex: String
  },

  computed: {
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    validateState: function validateState() {
      return this.elFormItem ? this.elFormItem.validateState : '';
    },
    needStatusIcon: function needStatusIcon() {
      return this.elForm ? this.elForm.statusIcon : false;
    },
    validateIcon: function validateIcon() {
      return {
        validating: 'el-icon-loading',
        success: 'el-icon-circle-check',
        error: 'el-icon-circle-close'
      }[this.validateState];
    },
    textareaStyle: function textareaStyle() {
      return merge_default()({}, this.textareaCalcStyle, { resize: this.resize });
    },
    inputSize: function inputSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    inputDisabled: function inputDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    },
    nativeInputValue: function nativeInputValue() {
      return this.value === null || this.value === undefined ? '' : String(this.value);
    },
    showClear: function showClear() {
      return this.clearable && !this.inputDisabled && !this.readonly && this.nativeInputValue && (this.focused || this.hovering);
    },
    showPwdVisible: function showPwdVisible() {
      return this.showPassword && !this.inputDisabled && !this.readonly && (!!this.nativeInputValue || this.focused);
    },
    isWordLimitVisible: function isWordLimitVisible() {
      return this.showWordLimit && this.$attrs.maxlength && (this.type === 'text' || this.type === 'textarea') && !this.inputDisabled && !this.readonly && !this.showPassword;
    },
    upperLimit: function upperLimit() {
      return this.$attrs.maxlength;
    },
    textLength: function textLength() {
      if (typeof this.value === 'number') {
        return String(this.value).length;
      }

      return (this.value || '').length;
    },
    inputExceed: function inputExceed() {
      // show exceed style if length of initial value greater then maxlength
      return this.isWordLimitVisible && this.textLength > this.upperLimit;
    }
  },

  watch: {
    value: function value(val) {
      this.$nextTick(this.resizeTextarea);
      if (this.validateEvent) {
        this.dispatch('ElFormItem', 'el.form.change', [val]);
      }
    },

    // native input value is set explicitly
    // do not use v-model / :value in template
    // see: https://github.com/ElemeFE/element/issues/14521
    nativeInputValue: function nativeInputValue() {
      this.setNativeInputValue();
    },

    // when change between <input> and <textarea>,
    // update DOM dependent value and styles
    // https://github.com/ElemeFE/element/issues/14857
    type: function type() {
      var _this = this;

      this.$nextTick(function () {
        _this.setNativeInputValue();
        _this.resizeTextarea();
        _this.updateIconOffset();
      });
    }
  },

  methods: {
    focus: function focus() {
      this.getInput().focus();
    },
    blur: function blur() {
      this.getInput().blur();
    },
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {
          'icon': 'icon is removed, use suffix-icon / prefix-icon instead.',
          'on-icon-click': 'on-icon-click is removed.'
        },
        events: {
          'click': 'click is removed.'
        }
      };
    },
    handleBlur: function handleBlur(event) {
      this.focused = false;
      this.$emit('blur', event);
      if (this.validateEvent) {
        this.dispatch('ElFormItem', 'el.form.blur', [this.value]);
      }
    },
    select: function select() {
      this.getInput().select();
    },
    resizeTextarea: function resizeTextarea() {
      if (this.$isServer) return;
      var autosize = this.autosize,
          type = this.type;

      if (type !== 'textarea') return;
      if (!autosize) {
        this.textareaCalcStyle = {
          minHeight: calcTextareaHeight(this.$refs.textarea).minHeight
        };
        return;
      }
      var minRows = autosize.minRows;
      var maxRows = autosize.maxRows;

      this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
    },
    setNativeInputValue: function setNativeInputValue() {
      var input = this.getInput();
      if (!input) return;
      if (input.value === this.nativeInputValue) return;
      input.value = this.nativeInputValue;
    },
    handleFocus: function handleFocus(event) {
      this.focused = true;
      this.$emit('focus', event);
    },
    handleCompositionStart: function handleCompositionStart() {
      this.isComposing = true;
    },
    handleCompositionUpdate: function handleCompositionUpdate(event) {
      var text = event.target.value;
      var lastCharacter = text[text.length - 1] || '';
      this.isComposing = !Object(shared_["isKorean"])(lastCharacter);
    },
    handleCompositionEnd: function handleCompositionEnd(event) {
      if (this.isComposing) {
        this.isComposing = false;
        this.handleInput(event);
      }
    },
    handleInput: function handleInput(event) {
      // should not emit input during composition
      // see: https://github.com/ElemeFE/element/issues/10516
      if (this.isComposing) return;

      // hack for https://github.com/ElemeFE/element/issues/8548
      // should remove the following line when we don't support IE
      if (event.target.value === this.nativeInputValue) return;

      this.$emit('input', event.target.value);

      // ensure native input value is controlled
      // see: https://github.com/ElemeFE/element/issues/12850
      this.$nextTick(this.setNativeInputValue);
    },
    handleChange: function handleChange(event) {
      this.$emit('change', event.target.value);
    },
    calcIconOffset: function calcIconOffset(place) {
      var elList = [].slice.call(this.$el.querySelectorAll('.el-input__' + place) || []);
      if (!elList.length) return;
      var el = null;
      for (var i = 0; i < elList.length; i++) {
        if (elList[i].parentNode === this.$el) {
          el = elList[i];
          break;
        }
      }
      if (!el) return;
      var pendantMap = {
        suffix: 'append',
        prefix: 'prepend'
      };

      var pendant = pendantMap[place];
      if (this.$slots[pendant]) {
        el.style.transform = 'translateX(' + (place === 'suffix' ? '-' : '') + this.$el.querySelector('.el-input-group__' + pendant).offsetWidth + 'px)';
      } else {
        el.removeAttribute('style');
      }
    },
    updateIconOffset: function updateIconOffset() {
      this.calcIconOffset('prefix');
      this.calcIconOffset('suffix');
    },
    clear: function clear() {
      this.$emit('input', '');
      this.$emit('change', '');
      this.$emit('clear');
    },
    handlePasswordVisible: function handlePasswordVisible() {
      this.passwordVisible = !this.passwordVisible;
      this.focus();
    },
    getInput: function getInput() {
      return this.$refs.input || this.$refs.textarea;
    },
    getSuffixVisible: function getSuffixVisible() {
      return this.$slots.suffix || this.suffixIcon || this.showClear || this.showPassword || this.isWordLimitVisible || this.validateState && this.needStatusIcon;
    }
  },

  created: function created() {
    this.$on('inputSelect', this.select);
  },
  mounted: function mounted() {
    this.setNativeInputValue();
    this.resizeTextarea();
    this.updateIconOffset();
  },
  updated: function updated() {
    this.$nextTick(this.updateIconOffset);
  }
});
// CONCATENATED MODULE: ./packages/input/src/input.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_inputvue_type_script_lang_js_ = (inputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/input/src/input.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_inputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
);
component.options.__file = "packages/input/src/input.vue";
/* harmony default export */ var input = (component.exports);
// CONCATENATED MODULE: ./packages/input/index.js


/* istanbul ignore next */
input.install = function (Vue) {
  Vue.component(input.name, input);
};

/* harmony default export */ var packages_input = __webpack_exports__["default"] = (input);

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = merge;

/***/ })

/******/ });
});

var _Input = unwrapExports(input);

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
var _core_1 = _core.version;

var _aFunction = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function (fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function (it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var document$3 = _global.document;
// typeof document.createElement is 'object' in old IE
var is = _isObject(document$3) && _isObject(document$3.createElement);
var _domCreate = function (it) {
  return is ? document$3.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function (it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;

var f$6 = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
	f: f$6
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var hasOwnProperty$1 = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty$1.call(it, key);
};

var PROTOTYPE$1 = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE$1];
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE$1];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && _has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? _ctx(out, _global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE$1] = C[PROTOTYPE$1];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
var _export$1 = $export;

var toString$1 = {}.toString;

var _cof = function (it) {
  return toString$1.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings


var _toIobject = function (it) {
  return _iobject(_defined(it));
};

// 7.1.4 ToInteger
var ceil$1 = Math.ceil;
var floor$2 = Math.floor;
var _toInteger = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor$2 : ceil$1)(it);
};

// 7.1.15 ToLength

var min$4 = Math.min;
var _toLength = function (it) {
  return it > 0 ? min$4(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max$3 = Math.max;
var min$5 = Math.min;
var _toAbsoluteIndex = function (index, length) {
  index = _toInteger(index);
  return index < 0 ? max$3(index + length, 0) : min$5(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes



var _arrayIncludes = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var _library = true;

var _shared = createCommonjsModule(function (module) {
var SHARED = '__core-js_shared__';
var store = _global[SHARED] || (_global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: _core.version,
  mode:  'pure' ,
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});
});

var id$1 = 0;
var px = Math.random();
var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id$1 + px).toString(36));
};

var shared$2 = _shared('keys');

var _sharedKey = function (key) {
  return shared$2[key] || (shared$2[key] = _uid(key));
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO$1 = _sharedKey('IE_PROTO');

var _objectKeysInternal = function (object, names) {
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO$1) _has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (_has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)



var _objectKeys = Object.keys || function keys(O) {
  return _objectKeysInternal(O, _enumBugKeys);
};

var f$7 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$7
};

var f$8 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$8
};

// 7.1.13 ToObject(argument)

var _toObject = function (it) {
  return Object(_defined(it));
};

// 19.1.2.1 Object.assign(target, source, ...)






var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = _toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = _objectGops.f;
  var isEnum = _objectPie.f;
  while (aLen > index) {
    var S = _iobject(arguments[index++]);
    var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!_descriptors || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)


_export$1(_export$1.S + _export$1.F, 'Object', { assign: _objectAssign });

var assign$1 = _core.Object.assign;

var assign$2 = createCommonjsModule(function (module) {
module.exports = { "default": assign$1, __esModule: true };
});

unwrapExports(assign$2);

var _extends = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _assign2 = _interopRequireDefault(assign$2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
});

var _extends$1 = unwrapExports(_extends);

// true  -> String#at
// false -> String#codePointAt
var _stringAt = function (TO_STRING) {
  return function (that, pos) {
    var s = String(_defined(that));
    var i = _toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _redefine = _hide;

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  _anObject(O);
  var keys = _objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
  return O;
};

var document$4 = _global.document;
var _html = document$4 && document$4.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



var IE_PROTO$2 = _sharedKey('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE$2 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');
  var i = _enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE$2][_enumBugKeys[i]];
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$2] = _anObject(O);
    result = new Empty();
    Empty[PROTOTYPE$2] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$2] = O;
  } else result = createDict();
  return Properties === undefined ? result : _objectDps(result, Properties);
};

var _wks = createCommonjsModule(function (module) {
var store = _shared('wks');

var Symbol = _global.Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
};

$exports.store = store;
});

var def = _objectDp.f;

var TAG = _wks('toStringTag');

var _setToStringTag = function (it, tag, stat) {
  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

var _iterCreate = function (Constructor, NAME, next) {
  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
  _setToStringTag(Constructor, NAME + ' Iterator');
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


var IE_PROTO$3 = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function (O) {
  O = _toObject(O);
  if (_has(O, IE_PROTO$3)) return O[IE_PROTO$3];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

var ITERATOR$3 = _wks('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  _iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR$3] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      _setToStringTag(IteratorPrototype, TAG, true);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if (( FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR$3])) {
    _hide(proto, ITERATOR$3, $default);
  }
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) _redefine(proto, key, methods[key]);
    } else _export$1(_export$1.P + _export$1.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

var $at = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

var _iterStep = function (done, value) {
  return { value: value, done: !!done };
};

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
  this._t = _toIobject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return _iterStep(1);
  }
  if (kind == 'keys') return _iterStep(0, index);
  if (kind == 'values') return _iterStep(0, O[index]);
  return _iterStep(0, [index, O[index]]);
}, 'values');

var TO_STRING_TAG$3 = _wks('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i$1 = 0; i$1 < DOMIterables.length; i$1++) {
  var NAME$1 = DOMIterables[i$1];
  var Collection = _global[NAME$1];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG$3]) _hide(proto, TO_STRING_TAG$3, NAME$1);
}

var f$9 = _wks;

var _wksExt = {
	f: f$9
};

var iterator = _wksExt.f('iterator');

var iterator$1 = createCommonjsModule(function (module) {
module.exports = { "default": iterator, __esModule: true };
});

unwrapExports(iterator$1);

var _meta = createCommonjsModule(function (module) {
var META = _uid('meta');


var setDesc = _objectDp.f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !_fails(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};
});
var _meta_1 = _meta.KEY;
var _meta_2 = _meta.NEED;
var _meta_3 = _meta.fastKey;
var _meta_4 = _meta.getWeak;
var _meta_5 = _meta.onFreeze;

var defineProperty$5 = _objectDp.f;
var _wksDefine = function (name) {
  var $Symbol = _core.Symbol || (_core.Symbol =  {} );
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty$5($Symbol, name, { value: _wksExt.f(name) });
};

// all enumerable object keys, includes symbols



var _enumKeys = function (it) {
  var result = _objectKeys(it);
  var getSymbols = _objectGops.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = _objectPie.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

// 7.2.2 IsArray(argument)

var _isArray = Array.isArray || function isArray(arg) {
  return _cof(arg) == 'Array';
};

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

var hiddenKeys$2 = _enumBugKeys.concat('length', 'prototype');

var f$a = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return _objectKeysInternal(O, hiddenKeys$2);
};

var _objectGopn = {
	f: f$a
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

var gOPN = _objectGopn.f;
var toString$2 = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

var f$b = function getOwnPropertyNames(it) {
  return windowNames && toString$2.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(_toIobject(it));
};

var _objectGopnExt = {
	f: f$b
};

var gOPD = Object.getOwnPropertyDescriptor;

var f$c = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = _toIobject(O);
  P = _toPrimitive(P, true);
  if (_ie8DomDefine) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
};

var _objectGopd = {
	f: f$c
};

// ECMAScript 6 symbols shim





var META = _meta.KEY;





















var gOPD$1 = _objectGopd.f;
var dP$1 = _objectDp.f;
var gOPN$1 = _objectGopnExt.f;
var $Symbol = _global.Symbol;
var $JSON = _global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE$3 = 'prototype';
var HIDDEN = _wks('_hidden');
var TO_PRIMITIVE = _wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = _shared('symbol-registry');
var AllSymbols = _shared('symbols');
var OPSymbols = _shared('op-symbols');
var ObjectProto$1 = Object[PROTOTYPE$3];
var USE_NATIVE = typeof $Symbol == 'function' && !!_objectGops.f;
var QObject = _global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE$3] || !QObject[PROTOTYPE$3].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = _descriptors && _fails(function () {
  return _objectCreate(dP$1({}, 'a', {
    get: function () { return dP$1(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD$1(ObjectProto$1, key);
  if (protoDesc) delete ObjectProto$1[key];
  dP$1(it, key, D);
  if (protoDesc && it !== ObjectProto$1) dP$1(ObjectProto$1, key, protoDesc);
} : dP$1;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$3]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
  _anObject(it);
  key = _toPrimitive(key, true);
  _anObject(D);
  if (_has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP$1(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  _anObject(it);
  var keys = _enumKeys(P = _toIobject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = _toPrimitive(key, true));
  if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
  return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = _toIobject(it);
  key = _toPrimitive(key, true);
  if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
  var D = gOPD$1(it, key);
  if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN$1(_toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto$1;
  var names = gOPN$1(IS_OP ? OPSymbols : _toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto$1) $set.call(OPSymbols, value);
      if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, _propertyDesc(1, value));
    };
    if (_descriptors && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  _redefine($Symbol[PROTOTYPE$3], 'toString', function toString() {
    return this._k;
  });

  _objectGopd.f = $getOwnPropertyDescriptor;
  _objectDp.f = $defineProperty;
  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
  _objectPie.f = $propertyIsEnumerable;
  _objectGops.f = $getOwnPropertySymbols;

  if (_descriptors && !_library) {
    _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  _wksExt.f = function (name) {
    return wrap(_wks(name));
  };
}

_export$1(_export$1.G + _export$1.W + _export$1.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j$1 = 0; es6Symbols.length > j$1;)_wks(es6Symbols[j$1++]);

for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

_export$1(_export$1.S + _export$1.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return _has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

_export$1(_export$1.S + _export$1.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = _fails(function () { _objectGops.f(1); });

_export$1(_export$1.S + _export$1.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return _objectGops.f(_toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && _export$1(_export$1.S + _export$1.F * (!USE_NATIVE || _fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!_isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!_isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE$3][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$3], TO_PRIMITIVE, $Symbol[PROTOTYPE$3].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
_setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
_setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
_setToStringTag(_global.JSON, 'JSON', true);



var es6_object_toString = /*#__PURE__*/Object.freeze({
	__proto__: null
});

_wksDefine('asyncIterator');

_wksDefine('observable');

getCjsExportFromNamespace(es6_object_toString);

var symbol = _core.Symbol;

var symbol$1 = createCommonjsModule(function (module) {
module.exports = { "default": symbol, __esModule: true };
});

unwrapExports(symbol$1);

var _typeof_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _iterator2 = _interopRequireDefault(iterator$1);



var _symbol2 = _interopRequireDefault(symbol$1);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
});

var _typeof$1 = unwrapExports(_typeof_1);

var formatRegExp = /%[sdj%]/g;

function format() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var i = 1;
  var f = args[0];
  var len = args.length;
  if (typeof f === 'function') {
    return f.apply(null, args.slice(1));
  }
  if (typeof f === 'string') {
    var str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case '%s':
          return String(args[i++]);
        case '%d':
          return Number(args[i++]);
        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }
          break;
        default:
          return x;
      }
    });
    for (var arg = args[i]; i < len; arg = args[++i]) {
      str += ' ' + arg;
    }
    return str;
  }
  return f;
}

function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }
  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }
  return false;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors);
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    var original = index;
    index = index + 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k]);
  });
  return ret;
}

function asyncMap(objArr, option, func, callback) {
  if (option.first) {
    var flattenArr = flattenObjArr(objArr);
    return asyncSerialArray(flattenArr, func, callback);
  }
  var firstFields = option.firstFields || [];
  if (firstFields === true) {
    firstFields = Object.keys(objArr);
  }
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var next = function next(errors) {
    results.push.apply(results, errors);
    total++;
    if (total === objArrLength) {
      callback(results);
    }
  };
  objArrKeys.forEach(function (key) {
    var arr = objArr[key];
    if (firstFields.indexOf(key) !== -1) {
      asyncSerialArray(arr, func, next);
    } else {
      asyncParallelArray(arr, func, next);
    }
  });
}

function complementError(rule) {
  return function (oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField;
      return oe;
    }
    return {
      message: oe,
      field: oe.field || rule.fullField
    };
  };
}

function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];
        if ((typeof value === 'undefined' ? 'undefined' : _typeof$1(value)) === 'object' && _typeof$1(target[s]) === 'object') {
          target[s] = _extends$1({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}

/**
 *  Rule for validating required fields.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
}

/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function whitespace$1(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
}

/* eslint max-len:0 */

var pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i'),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};

var types$1 = {
  integer: function integer(value) {
    return types$1.number(value) && parseInt(value, 10) === value;
  },
  float: function float(value) {
    return types$1.number(value) && !types$1.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function';
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === 'number';
  },
  object: function object(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof$1(value)) === 'object' && !types$1.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern.hex);
  }
};

/**
 *  Rule for validating the type of a value.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    required(rule, value, source, errors, options);
    return;
  }
  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types$1[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
    // straight typeof check
  } else if (ruleType && (typeof value === 'undefined' ? 'undefined' : _typeof$1(value)) !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
}

/**
 *  Rule for validating minimum and maximum allowed values.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number';
  // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）
  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);
  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  }
  // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type
  if (!key) {
    return false;
  }
  if (arr) {
    val = value.length;
  }
  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
}

var ENUM = 'enum';

/**
 *  Rule for validating a value exists in an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function enumerable(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
  }
}

/**
 *  Rule for validating a regular expression pattern.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function pattern$1(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
}

var rules = {
  required: required,
  whitespace: whitespace$1,
  type: type,
  range: range,
  'enum': enumerable,
  pattern: pattern$1
};

/**
 *  Performs validation for string types.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, 'string');
    if (!isEmptyValue(value, 'string')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);
      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }
  callback(errors);
}

/**
 *  Validates a function.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a boolean.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates the regular expression type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a number is an integer.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a number is a floating point number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates an array.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'array') && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, 'array');
    if (!isEmptyValue(value, 'array')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates an object.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

var ENUM$1 = 'enum';

/**
 *  Validates an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function enumerable$1(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value) {
      rules[ENUM$1](rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a regular expression pattern.
 *
 *  Performs validation when a rule only contains
 *  a pattern property but is not declared as a string type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function pattern$2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, 'string')) {
      rules.pattern(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

function date(rule, value, callback, source, options) {
  // console.log('integer rule called %j', rule);
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  // console.log('validate on %s value', value);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      var dateObject = void 0;

      if (typeof value === 'number') {
        dateObject = new Date(value);
      } else {
        dateObject = value;
      }

      rules.type(rule, dateObject, source, errors, options);
      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
}

function required$1(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value === 'undefined' ? 'undefined' : _typeof$1(value);
  rules.required(rule, value, source, errors, options, type);
  callback(errors);
}

function type$1(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, ruleType);
    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

var validators = {
  string: string,
  method: method,
  number: number,
  boolean: boolean,
  regexp: regexp,
  integer: integer,
  float: floatFn,
  array: array,
  object: object,
  'enum': enumerable$1,
  pattern: pattern$2,
  date: date,
  url: type$1,
  hex: type$1,
  email: type$1,
  required: required$1
};

function newMessages() {
  return {
    'default': 'Validation error on field %s',
    required: '%s is required',
    'enum': '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      boolean: '%s is not a %s',
      integer: '%s is not an %s',
      float: '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}

var messages = newMessages();

/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */
function Schema(descriptor) {
  this.rules = null;
  this._messages = messages;
  this.define(descriptor);
}

Schema.prototype = {
  messages: function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }
    return this._messages;
  },
  define: function define(rules) {
    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }
    if ((typeof rules === 'undefined' ? 'undefined' : _typeof$1(rules)) !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }
    this.rules = {};
    var z = void 0;
    var item = void 0;
    for (z in rules) {
      if (rules.hasOwnProperty(z)) {
        item = rules[z];
        this.rules[z] = Array.isArray(item) ? item : [item];
      }
    }
  },
  validate: function validate(source_) {
    var _this = this;

    var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var oc = arguments[2];

    var source = source_;
    var options = o;
    var callback = oc;
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback();
      }
      return;
    }
    function complete(results) {
      var i = void 0;
      var field = void 0;
      var errors = [];
      var fields = {};

      function add(e) {
        if (Array.isArray(e)) {
          errors = errors.concat.apply(errors, e);
        } else {
          errors.push(e);
        }
      }

      for (i = 0; i < results.length; i++) {
        add(results[i]);
      }
      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        for (i = 0; i < errors.length; i++) {
          field = errors[i].field;
          fields[field] = fields[field] || [];
          fields[field].push(errors[i]);
        }
      }
      callback(errors, fields);
    }

    if (options.messages) {
      var messages$1 = this.messages();
      if (messages$1 === messages) {
        messages$1 = newMessages();
      }
      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }
    var arr = void 0;
    var value = void 0;
    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      arr = _this.rules[z];
      value = source[z];
      arr.forEach(function (r) {
        var rule = r;
        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _extends$1({}, source);
          }
          value = source[z] = rule.transform(value);
        }
        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends$1({}, rule);
        }
        rule.validator = _this.getValidationMethod(rule);
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this.getType(rule);
        if (!rule.validator) {
          return;
        }
        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z
        });
      });
    });
    var errorFields = {};
    asyncMap(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && (_typeof$1(rule.fields) === 'object' || _typeof$1(rule.defaultField) === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;
      function addFullfield(key, schema) {
        return _extends$1({}, schema, {
          fullField: rule.fullField + '.' + key
        });
      }

      function cb() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        var errors = e;
        if (!Array.isArray(errors)) {
          errors = [errors];
        }
        if (errors.length) ;
        if (errors.length && rule.message) {
          errors = [].concat(rule.message);
        }

        errors = errors.map(complementError(rule));

        if (options.first && errors.length) {
          errorFields[rule.field] = 1;
          return doIt(errors);
        }
        if (!deep) {
          doIt(errors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message) {
              errors = [].concat(rule.message).map(complementError(rule));
            } else if (options.error) {
              errors = [options.error(rule, format(options.messages.required, rule.field))];
            } else {
              errors = [];
            }
            return doIt(errors);
          }

          var fieldsSchema = {};
          if (rule.defaultField) {
            for (var k in data.value) {
              if (data.value.hasOwnProperty(k)) {
                fieldsSchema[k] = rule.defaultField;
              }
            }
          }
          fieldsSchema = _extends$1({}, fieldsSchema, data.rule.fields);
          for (var f in fieldsSchema) {
            if (fieldsSchema.hasOwnProperty(f)) {
              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
            }
          }
          var schema = new Schema(fieldsSchema);
          schema.messages(options.messages);
          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }
          schema.validate(data.value, data.rule.options || options, function (errs) {
            doIt(errs && errs.length ? errors.concat(errs) : errs);
          });
        }
      }

      var res = rule.validator(rule, data.value, cb, data.source, options);
      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    });
  },
  getType: function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }
    if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format('Unknown rule type %s', rule.type));
    }
    return rule.type || 'string';
  },
  getValidationMethod: function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }
    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');
    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }
    if (keys.length === 1 && keys[0] === 'required') {
      return validators.required;
    }
    return validators[this.getType(rule)] || false;
  }
};

Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }
  validators[type] = validator;
};

Schema.messages = messages;

var es = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': Schema
});

var require$$2 = getCjsExportFromNamespace(es);

var formItem = createCommonjsModule(function (module) {
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 67);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports;

  // render functions
  if (render) {
    options.render = render;
    options.staticRenderFns = staticRenderFns;
    options._compiled = true;
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true;
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId;
  }

  var hook;
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context);
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook;
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot); }
      : injectStyles;
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook;
      // register for functioal component in vue file
      var originalRender = options.render;
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context);
        return originalRender(h, context)
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook];
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = util;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = emitter;

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

module.exports = require$$2;

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/form/src/form-item.vue?vue&type=template&id=b6f3db6c&
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "el-form-item",
      class: [
        {
          "el-form-item--feedback": _vm.elForm && _vm.elForm.statusIcon,
          "is-error": _vm.validateState === "error",
          "is-validating": _vm.validateState === "validating",
          "is-success": _vm.validateState === "success",
          "is-required": _vm.isRequired || _vm.required,
          "is-no-asterisk": _vm.elForm && _vm.elForm.hideRequiredAsterisk
        },
        _vm.sizeClass ? "el-form-item--" + _vm.sizeClass : ""
      ]
    },
    [
      _c(
        "label-wrap",
        {
          attrs: {
            "is-auto-width": _vm.labelStyle && _vm.labelStyle.width === "auto",
            "update-all": _vm.form.labelWidth === "auto"
          }
        },
        [
          _vm.label || _vm.$slots.label
            ? _c(
                "label",
                {
                  staticClass: "el-form-item__label",
                  style: _vm.labelStyle,
                  attrs: { for: _vm.labelFor }
                },
                [
                  _vm._t("label", [
                    _vm._v(_vm._s(_vm.label + _vm.form.labelSuffix))
                  ])
                ],
                2
              )
            : _vm._e()
        ]
      ),
      _c(
        "div",
        { staticClass: "el-form-item__content", style: _vm.contentStyle },
        [
          _vm._t("default"),
          _c(
            "transition",
            { attrs: { name: "el-zoom-in-top" } },
            [
              _vm.validateState === "error" &&
              _vm.showMessage &&
              _vm.form.showMessage
                ? _vm._t(
                    "error",
                    [
                      _c(
                        "div",
                        {
                          staticClass: "el-form-item__error",
                          class: {
                            "el-form-item__error--inline":
                              typeof _vm.inlineMessage === "boolean"
                                ? _vm.inlineMessage
                                : (_vm.elForm && _vm.elForm.inlineMessage) ||
                                  false
                          }
                        },
                        [
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.validateMessage) +
                              "\n        "
                          )
                        ]
                      )
                    ],
                    { error: _vm.validateMessage }
                  )
                : _vm._e()
            ],
            2
          )
        ],
        2
      )
    ],
    1
  )
};
var staticRenderFns = [];
render._withStripped = true;


// CONCATENATED MODULE: ./packages/form/src/form-item.vue?vue&type=template&id=b6f3db6c&

// EXTERNAL MODULE: external "async-validator"
var external_async_validator_ = __webpack_require__(48);
var external_async_validator_default = /*#__PURE__*/__webpack_require__.n(external_async_validator_);

// EXTERNAL MODULE: external "element-ui/lib/mixins/emitter"
var emitter_ = __webpack_require__(4);
var emitter_default = /*#__PURE__*/__webpack_require__.n(emitter_);

// EXTERNAL MODULE: external "element-ui/lib/utils/merge"
var merge_ = __webpack_require__(9);
var merge_default = /*#__PURE__*/__webpack_require__.n(merge_);

// EXTERNAL MODULE: external "element-ui/lib/utils/util"
var util_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/form/src/label-wrap.vue?vue&type=script&lang=js&


/* harmony default export */ var label_wrapvue_type_script_lang_js_ = ({
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean
  },

  inject: ['elForm', 'elFormItem'],

  render: function render() {
    var h = arguments[0];

    var slots = this.$slots.default;
    if (!slots) return null;
    if (this.isAutoWidth) {
      var autoLabelWidth = this.elForm.autoLabelWidth;
      var style = {};
      if (autoLabelWidth && autoLabelWidth !== 'auto') {
        var marginLeft = parseInt(autoLabelWidth, 10) - this.computedWidth;
        if (marginLeft) {
          style.marginLeft = marginLeft + 'px';
        }
      }
      return h(
        'div',
        { 'class': 'el-form-item__label-wrap', style: style },
        [slots]
      );
    } else {
      return slots[0];
    }
  },


  methods: {
    getLabelWidth: function getLabelWidth() {
      if (this.$el && this.$el.firstElementChild) {
        var computedWidth = window.getComputedStyle(this.$el.firstElementChild).width;
        return Math.ceil(parseFloat(computedWidth));
      } else {
        return 0;
      }
    },
    updateLabelWidth: function updateLabelWidth() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'update';

      if (this.$slots.default && this.isAutoWidth && this.$el.firstElementChild) {
        if (action === 'update') {
          this.computedWidth = this.getLabelWidth();
        } else if (action === 'remove') {
          this.elForm.deregisterLabelWidth(this.computedWidth);
        }
      }
    }
  },

  watch: {
    computedWidth: function computedWidth(val, oldVal) {
      if (this.updateAll) {
        this.elForm.registerLabelWidth(val, oldVal);
        this.elFormItem.updateComputedLabelWidth(val);
      }
    }
  },

  data: function data() {
    return {
      computedWidth: 0
    };
  },
  mounted: function mounted() {
    this.updateLabelWidth('update');
  },
  updated: function updated() {
    this.updateLabelWidth('update');
  },
  beforeDestroy: function beforeDestroy() {
    this.updateLabelWidth('remove');
  }
});
// CONCATENATED MODULE: ./packages/form/src/label-wrap.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_label_wrapvue_type_script_lang_js_ = (label_wrapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/form/src/label-wrap.vue
var label_wrap_render, label_wrap_staticRenderFns;




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_label_wrapvue_type_script_lang_js_,
  label_wrap_render,
  label_wrap_staticRenderFns,
  false,
  null,
  null,
  null
  
);
component.options.__file = "packages/form/src/label-wrap.vue";
/* harmony default export */ var label_wrap = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/form/src/form-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var form_itemvue_type_script_lang_js_ = ({
  name: 'ElFormItem',

  componentName: 'ElFormItem',

  mixins: [emitter_default.a],

  provide: function provide() {
    return {
      elFormItem: this
    };
  },


  inject: ['elForm'],

  props: {
    label: String,
    labelWidth: String,
    prop: String,
    required: {
      type: Boolean,
      default: undefined
    },
    rules: [Object, Array],
    error: String,
    validateStatus: String,
    for: String,
    inlineMessage: {
      type: [String, Boolean],
      default: ''
    },
    showMessage: {
      type: Boolean,
      default: true
    },
    size: String
  },
  components: {
    // use this component to calculate auto width
    LabelWrap: label_wrap
  },
  watch: {
    error: {
      immediate: true,
      handler: function handler(value) {
        this.validateMessage = value;
        this.validateState = value ? 'error' : '';
      }
    },
    validateStatus: function validateStatus(value) {
      this.validateState = value;
    }
  },
  computed: {
    labelFor: function labelFor() {
      return this.for || this.prop;
    },
    labelStyle: function labelStyle() {
      var ret = {};
      if (this.form.labelPosition === 'top') return ret;
      var labelWidth = this.labelWidth || this.form.labelWidth;
      if (labelWidth) {
        ret.width = labelWidth;
      }
      return ret;
    },
    contentStyle: function contentStyle() {
      var ret = {};
      var label = this.label;
      if (this.form.labelPosition === 'top' || this.form.inline) return ret;
      if (!label && !this.labelWidth && this.isNested) return ret;
      var labelWidth = this.labelWidth || this.form.labelWidth;
      if (labelWidth === 'auto') {
        if (this.labelWidth === 'auto') {
          ret.marginLeft = this.computedLabelWidth;
        } else if (this.form.labelWidth === 'auto') {
          ret.marginLeft = this.elForm.autoLabelWidth;
        }
      } else {
        ret.marginLeft = labelWidth;
      }
      return ret;
    },
    form: function form() {
      var parent = this.$parent;
      var parentName = parent.$options.componentName;
      while (parentName !== 'ElForm') {
        if (parentName === 'ElFormItem') {
          this.isNested = true;
        }
        parent = parent.$parent;
        parentName = parent.$options.componentName;
      }
      return parent;
    },
    fieldValue: function fieldValue() {
      var model = this.form.model;
      if (!model || !this.prop) {
        return;
      }

      var path = this.prop;
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.');
      }

      return Object(util_["getPropByPath"])(model, path, true).v;
    },
    isRequired: function isRequired() {
      var rules = this.getRules();
      var isRequired = false;

      if (rules && rules.length) {
        rules.every(function (rule) {
          if (rule.required) {
            isRequired = true;
            return false;
          }
          return true;
        });
      }
      return isRequired;
    },
    _formSize: function _formSize() {
      return this.elForm.size;
    },
    elFormItemSize: function elFormItemSize() {
      return this.size || this._formSize;
    },
    sizeClass: function sizeClass() {
      return this.elFormItemSize || (this.$ELEMENT || {}).size;
    }
  },
  data: function data() {
    return {
      validateState: '',
      validateMessage: '',
      validateDisabled: false,
      validator: {},
      isNested: false,
      computedLabelWidth: ''
    };
  },

  methods: {
    validate: function validate(trigger) {
      var _this = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : util_["noop"];

      this.validateDisabled = false;
      var rules = this.getFilteredRule(trigger);
      if ((!rules || rules.length === 0) && this.required === undefined) {
        callback();
        return true;
      }

      this.validateState = 'validating';

      var descriptor = {};
      if (rules && rules.length > 0) {
        rules.forEach(function (rule) {
          delete rule.trigger;
        });
      }
      descriptor[this.prop] = rules;

      var validator = new external_async_validator_default.a(descriptor);
      var model = {};

      model[this.prop] = this.fieldValue;

      validator.validate(model, { firstFields: true }, function (errors, invalidFields) {
        _this.validateState = !errors ? 'success' : 'error';
        _this.validateMessage = errors ? errors[0].message : '';

        callback(_this.validateMessage, invalidFields);
        _this.elForm && _this.elForm.$emit('validate', _this.prop, !errors, _this.validateMessage || null);
      });
    },
    clearValidate: function clearValidate() {
      this.validateState = '';
      this.validateMessage = '';
      this.validateDisabled = false;
    },
    resetField: function resetField() {
      var _this2 = this;

      this.validateState = '';
      this.validateMessage = '';

      var model = this.form.model;
      var value = this.fieldValue;
      var path = this.prop;
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.');
      }

      var prop = Object(util_["getPropByPath"])(model, path, true);

      this.validateDisabled = true;
      if (Array.isArray(value)) {
        prop.o[prop.k] = [].concat(this.initialValue);
      } else {
        prop.o[prop.k] = this.initialValue;
      }

      // reset validateDisabled after onFieldChange triggered
      this.$nextTick(function () {
        _this2.validateDisabled = false;
      });

      this.broadcast('ElTimeSelect', 'fieldReset', this.initialValue);
    },
    getRules: function getRules() {
      var formRules = this.form.rules;
      var selfRules = this.rules;
      var requiredRule = this.required !== undefined ? { required: !!this.required } : [];

      var prop = Object(util_["getPropByPath"])(formRules, this.prop || '');
      formRules = formRules ? prop.o[this.prop || ''] || prop.v : [];

      return [].concat(selfRules || formRules || []).concat(requiredRule);
    },
    getFilteredRule: function getFilteredRule(trigger) {
      var rules = this.getRules();

      return rules.filter(function (rule) {
        if (!rule.trigger || trigger === '') return true;
        if (Array.isArray(rule.trigger)) {
          return rule.trigger.indexOf(trigger) > -1;
        } else {
          return rule.trigger === trigger;
        }
      }).map(function (rule) {
        return merge_default()({}, rule);
      });
    },
    onFieldBlur: function onFieldBlur() {
      this.validate('blur');
    },
    onFieldChange: function onFieldChange() {
      if (this.validateDisabled) {
        this.validateDisabled = false;
        return;
      }

      this.validate('change');
    },
    updateComputedLabelWidth: function updateComputedLabelWidth(width) {
      this.computedLabelWidth = width ? width + 'px' : '';
    },
    addValidateEvents: function addValidateEvents() {
      var rules = this.getRules();

      if (rules.length || this.required !== undefined) {
        this.$on('el.form.blur', this.onFieldBlur);
        this.$on('el.form.change', this.onFieldChange);
      }
    },
    removeValidateEvents: function removeValidateEvents() {
      this.$off();
    }
  },
  mounted: function mounted() {
    if (this.prop) {
      this.dispatch('ElForm', 'el.form.addField', [this]);

      var initialValue = this.fieldValue;
      if (Array.isArray(initialValue)) {
        initialValue = [].concat(initialValue);
      }
      Object.defineProperty(this, 'initialValue', {
        value: initialValue
      });

      this.addValidateEvents();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.dispatch('ElForm', 'el.form.removeField', [this]);
  }
});
// CONCATENATED MODULE: ./packages/form/src/form-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_form_itemvue_type_script_lang_js_ = (form_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form/src/form-item.vue





/* normalize component */

var form_item_component = Object(componentNormalizer["a" /* default */])(
  src_form_itemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
);
form_item_component.options.__file = "packages/form/src/form-item.vue";
/* harmony default export */ var form_item = (form_item_component.exports);
// CONCATENATED MODULE: ./packages/form-item/index.js


/* istanbul ignore next */
form_item.install = function (Vue) {
  Vue.component(form_item.name, form_item);
};

/* harmony default export */ var packages_form_item = __webpack_exports__["default"] = (form_item);

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = merge;

/***/ })

/******/ });
});

var _FormItem = unwrapExports(formItem);

var form = createCommonjsModule(function (module) {
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 121);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports;

  // render functions
  if (render) {
    options.render = render;
    options.staticRenderFns = staticRenderFns;
    options._compiled = true;
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true;
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId;
  }

  var hook;
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context);
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook;
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot); }
      : injectStyles;
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook;
      // register for functioal component in vue file
      var originalRender = options.render;
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context);
        return originalRender(h, context)
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook];
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/form/src/form.vue?vue&type=template&id=a1b5ff34&
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "form",
    {
      staticClass: "el-form",
      class: [
        _vm.labelPosition ? "el-form--label-" + _vm.labelPosition : "",
        { "el-form--inline": _vm.inline }
      ]
    },
    [_vm._t("default")],
    2
  )
};
var staticRenderFns = [];
render._withStripped = true;


// CONCATENATED MODULE: ./packages/form/src/form.vue?vue&type=template&id=a1b5ff34&

// EXTERNAL MODULE: external "element-ui/lib/utils/merge"
var merge_ = __webpack_require__(9);
var merge_default = /*#__PURE__*/__webpack_require__.n(merge_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/form/src/form.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//



/* harmony default export */ var formvue_type_script_lang_js_ = ({
  name: 'ElForm',

  componentName: 'ElForm',

  provide: function provide() {
    return {
      elForm: this
    };
  },


  props: {
    model: Object,
    rules: Object,
    labelPosition: String,
    labelWidth: String,
    labelSuffix: {
      type: String,
      default: ''
    },
    inline: Boolean,
    inlineMessage: Boolean,
    statusIcon: Boolean,
    showMessage: {
      type: Boolean,
      default: true
    },
    size: String,
    disabled: Boolean,
    validateOnRuleChange: {
      type: Boolean,
      default: true
    },
    hideRequiredAsterisk: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    rules: function rules() {
      // remove then add event listeners on form-item after form rules change
      this.fields.forEach(function (field) {
        field.removeValidateEvents();
        field.addValidateEvents();
      });

      if (this.validateOnRuleChange) {
        this.validate(function () {});
      }
    }
  },
  computed: {
    autoLabelWidth: function autoLabelWidth() {
      if (!this.potentialLabelWidthArr.length) return 0;
      var max = Math.max.apply(Math, this.potentialLabelWidthArr);
      return max ? max + 'px' : '';
    }
  },
  data: function data() {
    return {
      fields: [],
      potentialLabelWidthArr: [] // use this array to calculate auto width
    };
  },
  created: function created() {
    var _this = this;

    this.$on('el.form.addField', function (field) {
      if (field) {
        _this.fields.push(field);
      }
    });
    /* istanbul ignore next */
    this.$on('el.form.removeField', function (field) {
      if (field.prop) {
        _this.fields.splice(_this.fields.indexOf(field), 1);
      }
    });
  },

  methods: {
    resetFields: function resetFields() {
      if (!this.model) {
        console.warn('[Element Warn][Form]model is required for resetFields to work.');
        return;
      }
      this.fields.forEach(function (field) {
        field.resetField();
      });
    },
    clearValidate: function clearValidate() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var fields = props.length ? typeof props === 'string' ? this.fields.filter(function (field) {
        return props === field.prop;
      }) : this.fields.filter(function (field) {
        return props.indexOf(field.prop) > -1;
      }) : this.fields;
      fields.forEach(function (field) {
        field.clearValidate();
      });
    },
    validate: function validate(callback) {
      var _this2 = this;

      if (!this.model) {
        console.warn('[Element Warn][Form]model is required for validate to work!');
        return;
      }

      var promise = void 0;
      // if no callback, return promise
      if (typeof callback !== 'function' && window.Promise) {
        promise = new window.Promise(function (resolve, reject) {
          callback = function callback(valid) {
            valid ? resolve(valid) : reject(valid);
          };
        });
      }

      var valid = true;
      var count = 0;
      // 如果需要验证的fields为空，调用验证时立刻返回callback
      if (this.fields.length === 0 && callback) {
        callback(true);
      }
      var invalidFields = {};
      this.fields.forEach(function (field) {
        field.validate('', function (message, field) {
          if (message) {
            valid = false;
          }
          invalidFields = merge_default()({}, invalidFields, field);
          if (typeof callback === 'function' && ++count === _this2.fields.length) {
            callback(valid, invalidFields);
          }
        });
      });

      if (promise) {
        return promise;
      }
    },
    validateField: function validateField(props, cb) {
      props = [].concat(props);
      var fields = this.fields.filter(function (field) {
        return props.indexOf(field.prop) !== -1;
      });
      if (!fields.length) {
        console.warn('[Element Warn]please pass correct props!');
        return;
      }

      fields.forEach(function (field) {
        field.validate('', cb);
      });
    },
    getLabelWidthIndex: function getLabelWidthIndex(width) {
      var index = this.potentialLabelWidthArr.indexOf(width);
      // it's impossible
      if (index === -1) {
        throw new Error('[ElementForm]unpected width ', width);
      }
      return index;
    },
    registerLabelWidth: function registerLabelWidth(val, oldVal) {
      if (val && oldVal) {
        var index = this.getLabelWidthIndex(oldVal);
        this.potentialLabelWidthArr.splice(index, 1, val);
      } else if (val) {
        this.potentialLabelWidthArr.push(val);
      }
    },
    deregisterLabelWidth: function deregisterLabelWidth(val) {
      var index = this.getLabelWidthIndex(val);
      this.potentialLabelWidthArr.splice(index, 1);
    }
  }
});
// CONCATENATED MODULE: ./packages/form/src/form.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_formvue_type_script_lang_js_ = (formvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/form/src/form.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_formvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
);
component.options.__file = "packages/form/src/form.vue";
/* harmony default export */ var src_form = (component.exports);
// CONCATENATED MODULE: ./packages/form/index.js


/* istanbul ignore next */
src_form.install = function (Vue) {
  Vue.component(src_form.name, src_form);
};

/* harmony default export */ var packages_form = __webpack_exports__["default"] = (src_form);

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = merge;

/***/ })

/******/ });
});

var _Form = unwrapExports(form);

var _a$4;

var EditIframeCommandButton =
/** @class */
function (_super) {
  __extends(EditIframeCommandButton, _super);

  function EditIframeCommandButton() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.editImageDialogVisible = false;
    _this.imageAttrs = _this.getImageAttrs();
    return _this;
  }

  EditIframeCommandButton.prototype.syncImageAttrs = function () {
    this.imageAttrs = this.getImageAttrs();
  };

  EditIframeCommandButton.prototype.getImageAttrs = function () {
    return {
      src: this.node.attrs.src,
      alt: this.node.attrs.alt,
      width: this.node.attrs.width,
      height: this.node.attrs.height
    };
  };

  EditIframeCommandButton.prototype.updateImageAttrs = function () {
    var _a = this.imageAttrs,
        width = _a.width,
        height = _a.height; // input converts it to string

    width = parseInt(width, 10);
    height = parseInt(height, 10);
    this.updateAttrs({
      alt: this.imageAttrs.alt,
      width: width >= 0 ? width : null,
      height: height >= 0 ? height : null
    });
    this.closeEditImageDialog();
  };

  EditIframeCommandButton.prototype.openEditImageDialog = function () {
    this.editImageDialogVisible = true;
  };

  EditIframeCommandButton.prototype.closeEditImageDialog = function () {
    this.editImageDialogVisible = false;
  };

  __decorate([Prop({
    type: Node$1,
    required: true
  })], EditIframeCommandButton.prototype, "node", void 0);

  __decorate([Prop({
    type: Function,
    required: true
  })], EditIframeCommandButton.prototype, "updateAttrs", void 0);

  EditIframeCommandButton = __decorate([Component({
    components: (_a$4 = {}, _a$4[_Dialog.name] = _Dialog, _a$4[_Form.name] = _Form, _a$4[_FormItem.name] = _FormItem, _a$4[_Input.name] = _Input, _a$4[_Col.name] = _Col, _a$4[_Button.name] = _Button, _a$4.CommandButton = __vue_component__$2, _a$4)
  })], EditIframeCommandButton);
  return EditIframeCommandButton;
}(mixins(i18nMixin));

/* script */
const __vue_script__$c = EditIframeCommandButton;

/* template */
var __vue_render__$b = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('command-button',{attrs:{"command":_vm.openEditImageDialog,"tooltip":_vm.t('editor.extensions.NewIframe.buttons.page_options.tooltip'),"icon":"ellipsis-h"}}),_vm._v(" "),_c('el-dialog',{attrs:{"title":_vm.t('editor.extensions.NewIframe.control.edit_page.title'),"visible":_vm.editImageDialogVisible,"append-to-body":true,"width":"400px","custom-class":"el-tiptap-edit-image-dialog"},on:{"update:visible":function($event){_vm.editImageDialogVisible=$event;},"open":_vm.syncImageAttrs},scopedSlots:_vm._u([{key:"footer",fn:function(){return [_c('el-button',{attrs:{"size":"small","round":""},on:{"click":_vm.closeEditImageDialog}},[_vm._v("\n        "+_vm._s(_vm.t('editor.extensions.NewIframe.control.edit_page.cancel'))+"\n      ")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","size":"small","round":""},on:{"click":_vm.updateImageAttrs}},[_vm._v("\n        "+_vm._s(_vm.t('editor.extensions.NewIframe.control.edit_page.confirm'))+"\n      ")])]},proxy:true}])},[_c('el-form',{attrs:{"model":_vm.imageAttrs,"label-position":"top","size":"small"}},[_c('el-form-item',{attrs:{"label":_vm.t('editor.extensions.NewIframe.control.edit_page.form.src')}},[_c('el-input',{attrs:{"value":_vm.imageAttrs.src,"autocomplete":"off","disabled":""}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.t('editor.extensions.NewIframe.control.edit_page.form.alt')}},[_c('el-input',{attrs:{"autocomplete":"off"},model:{value:(_vm.imageAttrs.alt),callback:function ($$v) {_vm.$set(_vm.imageAttrs, "alt", $$v);},expression:"imageAttrs.alt"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"label":_vm.t('editor.extensions.NewIframe.control.edit_page.form.width')}},[_c('el-input',{attrs:{"type":"number"},model:{value:(_vm.imageAttrs.width),callback:function ($$v) {_vm.$set(_vm.imageAttrs, "width", $$v);},expression:"imageAttrs.width"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":11,"push":2}},[_c('el-form-item',{attrs:{"label":_vm.t('editor.extensions.NewIframe.control.edit_page.form.height')}},[_c('el-input',{attrs:{"type":"number"},model:{value:(_vm.imageAttrs.height),callback:function ($$v) {_vm.$set(_vm.imageAttrs, "height", $$v);},expression:"imageAttrs.height"}})],1)],1)],1)],1)],1)],1)};
var __vue_staticRenderFns__$b = [];

  /* style */
  const __vue_inject_styles__$c = undefined;
  /* scoped */
  const __vue_scope_id__$c = undefined;
  /* module identifier */
  const __vue_module_identifier__$c = undefined;
  /* functional template */
  const __vue_is_functional_template__$c = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$c = normalizeComponent(
    { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
    __vue_inject_styles__$c,
    __vue_script__$c,
    __vue_scope_id__$c,
    __vue_is_functional_template__$c,
    __vue_module_identifier__$c,
    false,
    undefined,
    undefined,
    undefined
  );

// Mappable:: interface
// There are several things that positions can be mapped through.
// Such objects conform to this interface.
//
//   map:: (pos: number, assoc: ?number) → number
//   Map a position through this object. When given, `assoc` (should
//   be -1 or 1, defaults to 1) determines with which side the
//   position is associated, which determines in which direction to
//   move when a chunk of content is inserted at the mapped position.
//
//   mapResult:: (pos: number, assoc: ?number) → MapResult
//   Map a position, and return an object containing additional
//   information about the mapping. The result's `deleted` field tells
//   you whether the position was deleted (completely enclosed in a
//   replaced range) during the mapping. When content on only one side
//   is deleted, the position itself is only considered deleted when
//   `assoc` points in the direction of the deleted content.

// Recovery values encode a range index and an offset. They are
// represented as numbers, because tons of them will be created when
// mapping, for example, a large number of decorations. The number's
// lower 16 bits provide the index, the remaining bits the offset.
//
// Note: We intentionally don't use bit shift operators to en- and
// decode these, since those clip to 32 bits, which we might in rare
// cases want to overflow. A 64-bit float can represent 48-bit
// integers precisely.

var lower16 = 0xffff;
var factor16 = Math.pow(2, 16);

function makeRecover(index, offset) { return index + offset * factor16 }
function recoverIndex(value) { return value & lower16 }
function recoverOffset(value) { return (value - (value & lower16)) / factor16 }

// ::- An object representing a mapped position with extra
// information.
var MapResult = function MapResult(pos, deleted, recover) {
  if ( deleted === void 0 ) deleted = false;
  if ( recover === void 0 ) recover = null;

  // :: number The mapped version of the position.
  this.pos = pos;
  // :: bool Tells you whether the position was deleted, that is,
  // whether the step removed its surroundings from the document.
  this.deleted = deleted;
  this.recover = recover;
};

// :: class extends Mappable
// A map describing the deletions and insertions made by a step, which
// can be used to find the correspondence between positions in the
// pre-step version of a document and the same position in the
// post-step version.
var StepMap = function StepMap(ranges, inverted) {
  if ( inverted === void 0 ) inverted = false;

  this.ranges = ranges;
  this.inverted = inverted;
};

StepMap.prototype.recover = function recover (value) {
  var diff = 0, index = recoverIndex(value);
  if (!this.inverted) { for (var i = 0; i < index; i++)
    { diff += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1]; } }
  return this.ranges[index * 3] + diff + recoverOffset(value)
};

// : (number, ?number) → MapResult
StepMap.prototype.mapResult = function mapResult (pos, assoc) {
  if ( assoc === void 0 ) assoc = 1;
 return this._map(pos, assoc, false) };

// : (number, ?number) → number
StepMap.prototype.map = function map (pos, assoc) {
  if ( assoc === void 0 ) assoc = 1;
 return this._map(pos, assoc, true) };

StepMap.prototype._map = function _map (pos, assoc, simple) {
  var diff = 0, oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
  for (var i = 0; i < this.ranges.length; i += 3) {
    var start = this.ranges[i] - (this.inverted ? diff : 0);
    if (start > pos) { break }
    var oldSize = this.ranges[i + oldIndex], newSize = this.ranges[i + newIndex], end = start + oldSize;
    if (pos <= end) {
      var side = !oldSize ? assoc : pos == start ? -1 : pos == end ? 1 : assoc;
      var result = start + diff + (side < 0 ? 0 : newSize);
      if (simple) { return result }
      var recover = makeRecover(i / 3, pos - start);
      return new MapResult(result, assoc < 0 ? pos != start : pos != end, recover)
    }
    diff += newSize - oldSize;
  }
  return simple ? pos + diff : new MapResult(pos + diff)
};

StepMap.prototype.touches = function touches (pos, recover) {
  var diff = 0, index = recoverIndex(recover);
  var oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
  for (var i = 0; i < this.ranges.length; i += 3) {
    var start = this.ranges[i] - (this.inverted ? diff : 0);
    if (start > pos) { break }
    var oldSize = this.ranges[i + oldIndex], end = start + oldSize;
    if (pos <= end && i == index * 3) { return true }
    diff += this.ranges[i + newIndex] - oldSize;
  }
  return false
};

// :: ((oldStart: number, oldEnd: number, newStart: number, newEnd: number))
// Calls the given function on each of the changed ranges included in
// this map.
StepMap.prototype.forEach = function forEach (f) {
  var oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
  for (var i = 0, diff = 0; i < this.ranges.length; i += 3) {
    var start = this.ranges[i], oldStart = start - (this.inverted ? diff : 0), newStart = start + (this.inverted ? 0 : diff);
    var oldSize = this.ranges[i + oldIndex], newSize = this.ranges[i + newIndex];
    f(oldStart, oldStart + oldSize, newStart, newStart + newSize);
    diff += newSize - oldSize;
  }
};

// :: () → StepMap
// Create an inverted version of this map. The result can be used to
// map positions in the post-step document to the pre-step document.
StepMap.prototype.invert = function invert () {
  return new StepMap(this.ranges, !this.inverted)
};

StepMap.prototype.toString = function toString () {
  return (this.inverted ? "-" : "") + JSON.stringify(this.ranges)
};

// :: (n: number) → StepMap
// Create a map that moves all positions by offset `n` (which may be
// negative). This can be useful when applying steps meant for a
// sub-document to a larger document, or vice-versa.
StepMap.offset = function offset (n) {
  return n == 0 ? StepMap.empty : new StepMap(n < 0 ? [0, -n, 0] : [0, 0, n])
};

StepMap.empty = new StepMap([]);

// :: class extends Mappable
// A mapping represents a pipeline of zero or more [step
// maps](#transform.StepMap). It has special provisions for losslessly
// handling mapping positions through a series of steps in which some
// steps are inverted versions of earlier steps. (This comes up when
// ‘[rebasing](/docs/guide/#transform.rebasing)’ steps for
// collaboration or history management.)
var Mapping = function Mapping(maps, mirror, from, to) {
  // :: [StepMap]
  // The step maps in this mapping.
  this.maps = maps || [];
  // :: number
  // The starting position in the `maps` array, used when `map` or
  // `mapResult` is called.
  this.from = from || 0;
  // :: number
  // The end position in the `maps` array.
  this.to = to == null ? this.maps.length : to;
  this.mirror = mirror;
};

// :: (?number, ?number) → Mapping
// Create a mapping that maps only through a part of this one.
Mapping.prototype.slice = function slice (from, to) {
    if ( from === void 0 ) from = 0;
    if ( to === void 0 ) to = this.maps.length;

  return new Mapping(this.maps, this.mirror, from, to)
};

Mapping.prototype.copy = function copy () {
  return new Mapping(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to)
};

// :: (StepMap, ?number)
// Add a step map to the end of this mapping. If `mirrors` is
// given, it should be the index of the step map that is the mirror
// image of this one.
Mapping.prototype.appendMap = function appendMap (map, mirrors) {
  this.to = this.maps.push(map);
  if (mirrors != null) { this.setMirror(this.maps.length - 1, mirrors); }
};

// :: (Mapping)
// Add all the step maps in a given mapping to this one (preserving
// mirroring information).
Mapping.prototype.appendMapping = function appendMapping (mapping) {
  for (var i = 0, startSize = this.maps.length; i < mapping.maps.length; i++) {
    var mirr = mapping.getMirror(i);
    this.appendMap(mapping.maps[i], mirr != null && mirr < i ? startSize + mirr : null);
  }
};

// :: (number) → ?number
// Finds the offset of the step map that mirrors the map at the
// given offset, in this mapping (as per the second argument to
// `appendMap`).
Mapping.prototype.getMirror = function getMirror (n) {
  if (this.mirror) { for (var i = 0; i < this.mirror.length; i++)
    { if (this.mirror[i] == n) { return this.mirror[i + (i % 2 ? -1 : 1)] } } }
};

Mapping.prototype.setMirror = function setMirror (n, m) {
  if (!this.mirror) { this.mirror = []; }
  this.mirror.push(n, m);
};

// :: (Mapping)
// Append the inverse of the given mapping to this one.
Mapping.prototype.appendMappingInverted = function appendMappingInverted (mapping) {
  for (var i = mapping.maps.length - 1, totalSize = this.maps.length + mapping.maps.length; i >= 0; i--) {
    var mirr = mapping.getMirror(i);
    this.appendMap(mapping.maps[i].invert(), mirr != null && mirr > i ? totalSize - mirr - 1 : null);
  }
};

// :: () → Mapping
// Create an inverted version of this mapping.
Mapping.prototype.invert = function invert () {
  var inverse = new Mapping;
  inverse.appendMappingInverted(this);
  return inverse
};

// : (number, ?number) → number
// Map a position through this mapping.
Mapping.prototype.map = function map (pos, assoc) {
    if ( assoc === void 0 ) assoc = 1;

  if (this.mirror) { return this._map(pos, assoc, true) }
  for (var i = this.from; i < this.to; i++)
    { pos = this.maps[i].map(pos, assoc); }
  return pos
};

// : (number, ?number) → MapResult
// Map a position through this mapping, returning a mapping
// result.
Mapping.prototype.mapResult = function mapResult (pos, assoc) {
  if ( assoc === void 0 ) assoc = 1;
 return this._map(pos, assoc, false) };

Mapping.prototype._map = function _map (pos, assoc, simple) {
  var deleted = false, recoverables = null;

  for (var i = this.from; i < this.to; i++) {
    var map = this.maps[i], rec = recoverables && recoverables[i];
    if (rec != null && map.touches(pos, rec)) {
      pos = map.recover(rec);
      continue
    }

    var result = map.mapResult(pos, assoc);
    if (result.recover != null) {
      var corr = this.getMirror(i);
      if (corr != null && corr > i && corr < this.to) {
        if (result.deleted) {
          i = corr;
          pos = this.maps[corr].recover(result.recover);
          continue
        } else {
(recoverables || (recoverables = Object.create(null)))[corr] = result.recover;
        }
      }
    }

    if (result.deleted) { deleted = true; }
    pos = result.pos;
  }

  return simple ? pos : new MapResult(pos, deleted)
};

function TransformError(message) {
  var err = Error.call(this, message);
  err.__proto__ = TransformError.prototype;
  return err
}

TransformError.prototype = Object.create(Error.prototype);
TransformError.prototype.constructor = TransformError;
TransformError.prototype.name = "TransformError";

// ::- Abstraction to build up and track an array of
// [steps](#transform.Step) representing a document transformation.
//
// Most transforming methods return the `Transform` object itself, so
// that they can be chained.
var Transform = function Transform(doc) {
  // :: Node
  // The current document (the result of applying the steps in the
  // transform).
  this.doc = doc;
  // :: [Step]
  // The steps in this transform.
  this.steps = [];
  // :: [Node]
  // The documents before each of the steps.
  this.docs = [];
  // :: Mapping
  // A mapping with the maps for each of the steps in this transform.
  this.mapping = new Mapping;
};

var prototypeAccessors = { before: { configurable: true },docChanged: { configurable: true } };

// :: Node The starting document.
prototypeAccessors.before.get = function () { return this.docs.length ? this.docs[0] : this.doc };

// :: (step: Step) → this
// Apply a new step in this transform, saving the result. Throws an
// error when the step fails.
Transform.prototype.step = function step (object) {
  var result = this.maybeStep(object);
  if (result.failed) { throw new TransformError(result.failed) }
  return this
};

// :: (Step) → StepResult
// Try to apply a step in this transformation, ignoring it if it
// fails. Returns the step result.
Transform.prototype.maybeStep = function maybeStep (step) {
  var result = step.apply(this.doc);
  if (!result.failed) { this.addStep(step, result.doc); }
  return result
};

// :: bool
// True when the document has been changed (when there are any
// steps).
prototypeAccessors.docChanged.get = function () {
  return this.steps.length > 0
};

Transform.prototype.addStep = function addStep (step, doc) {
  this.docs.push(this.doc);
  this.steps.push(step);
  this.mapping.appendMap(step.getMap());
  this.doc = doc;
};

Object.defineProperties( Transform.prototype, prototypeAccessors );

function mustOverride() { throw new Error("Override me") }

var stepsByID = Object.create(null);

// ::- A step object represents an atomic change. It generally applies
// only to the document it was created for, since the positions
// stored in it will only make sense for that document.
//
// New steps are defined by creating classes that extend `Step`,
// overriding the `apply`, `invert`, `map`, `getMap` and `fromJSON`
// methods, and registering your class with a unique
// JSON-serialization identifier using
// [`Step.jsonID`](#transform.Step^jsonID).
var Step = function Step () {};

Step.prototype.apply = function apply (_doc) { return mustOverride() };

// :: () → StepMap
// Get the step map that represents the changes made by this step,
// and which can be used to transform between positions in the old
// and the new document.
Step.prototype.getMap = function getMap () { return StepMap.empty };

// :: (doc: Node) → Step
// Create an inverted version of this step. Needs the document as it
// was before the step as argument.
Step.prototype.invert = function invert (_doc) { return mustOverride() };

// :: (mapping: Mappable) → ?Step
// Map this step through a mappable thing, returning either a
// version of that step with its positions adjusted, or `null` if
// the step was entirely deleted by the mapping.
Step.prototype.map = function map (_mapping) { return mustOverride() };

// :: (other: Step) → ?Step
// Try to merge this step with another one, to be applied directly
// after it. Returns the merged step when possible, null if the
// steps can't be merged.
Step.prototype.merge = function merge (_other) { return null };

// :: () → Object
// Create a JSON-serializeable representation of this step. When
// defining this for a custom subclass, make sure the result object
// includes the step type's [JSON id](#transform.Step^jsonID) under
// the `stepType` property.
Step.prototype.toJSON = function toJSON () { return mustOverride() };

// :: (Schema, Object) → Step
// Deserialize a step from its JSON representation. Will call
// through to the step class' own implementation of this method.
Step.fromJSON = function fromJSON (schema, json) {
  if (!json || !json.stepType) { throw new RangeError("Invalid input for Step.fromJSON") }
  var type = stepsByID[json.stepType];
  if (!type) { throw new RangeError(("No step type " + (json.stepType) + " defined")) }
  return type.fromJSON(schema, json)
};

// :: (string, constructor<Step>)
// To be able to serialize steps to JSON, each step needs a string
// ID to attach to its JSON representation. Use this method to
// register an ID for your step classes. Try to pick something
// that's unlikely to clash with steps from other modules.
Step.jsonID = function jsonID (id, stepClass) {
  if (id in stepsByID) { throw new RangeError("Duplicate use of step JSON ID " + id) }
  stepsByID[id] = stepClass;
  stepClass.prototype.jsonID = id;
  return stepClass
};

// ::- The result of [applying](#transform.Step.apply) a step. Contains either a
// new document or a failure value.
var StepResult = function StepResult(doc, failed) {
  // :: ?Node The transformed document.
  this.doc = doc;
  // :: ?string Text providing information about a failed step.
  this.failed = failed;
};

// :: (Node) → StepResult
// Create a successful step result.
StepResult.ok = function ok (doc) { return new StepResult(doc, null) };

// :: (string) → StepResult
// Create a failed step result.
StepResult.fail = function fail (message) { return new StepResult(null, message) };

// :: (Node, number, number, Slice) → StepResult
// Call [`Node.replace`](#model.Node.replace) with the given
// arguments. Create a successful result if it succeeds, and a
// failed one if it throws a `ReplaceError`.
StepResult.fromReplace = function fromReplace (doc, from, to, slice) {
  try {
    return StepResult.ok(doc.replace(from, to, slice))
  } catch (e) {
    if (e instanceof ReplaceError) { return StepResult.fail(e.message) }
    throw e
  }
};

// ::- Replace a part of the document with a slice of new content.
var ReplaceStep = /*@__PURE__*/(function (Step) {
  function ReplaceStep(from, to, slice, structure) {
    Step.call(this);
    this.from = from;
    this.to = to;
    this.slice = slice;
    this.structure = !!structure;
  }

  if ( Step ) ReplaceStep.__proto__ = Step;
  ReplaceStep.prototype = Object.create( Step && Step.prototype );
  ReplaceStep.prototype.constructor = ReplaceStep;

  ReplaceStep.prototype.apply = function apply (doc) {
    if (this.structure && contentBetween(doc, this.from, this.to))
      { return StepResult.fail("Structure replace would overwrite content") }
    return StepResult.fromReplace(doc, this.from, this.to, this.slice)
  };

  ReplaceStep.prototype.getMap = function getMap () {
    return new StepMap([this.from, this.to - this.from, this.slice.size])
  };

  ReplaceStep.prototype.invert = function invert (doc) {
    return new ReplaceStep(this.from, this.from + this.slice.size, doc.slice(this.from, this.to))
  };

  ReplaceStep.prototype.map = function map (mapping) {
    var from = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
    if (from.deleted && to.deleted) { return null }
    return new ReplaceStep(from.pos, Math.max(from.pos, to.pos), this.slice)
  };

  ReplaceStep.prototype.merge = function merge (other) {
    if (!(other instanceof ReplaceStep) || other.structure != this.structure) { return null }

    if (this.from + this.slice.size == other.from && !this.slice.openEnd && !other.slice.openStart) {
      var slice = this.slice.size + other.slice.size == 0 ? Slice.empty
          : new Slice(this.slice.content.append(other.slice.content), this.slice.openStart, other.slice.openEnd);
      return new ReplaceStep(this.from, this.to + (other.to - other.from), slice, this.structure)
    } else if (other.to == this.from && !this.slice.openStart && !other.slice.openEnd) {
      var slice$1 = this.slice.size + other.slice.size == 0 ? Slice.empty
          : new Slice(other.slice.content.append(this.slice.content), other.slice.openStart, this.slice.openEnd);
      return new ReplaceStep(other.from, this.to, slice$1, this.structure)
    } else {
      return null
    }
  };

  ReplaceStep.prototype.toJSON = function toJSON () {
    var json = {stepType: "replace", from: this.from, to: this.to};
    if (this.slice.size) { json.slice = this.slice.toJSON(); }
    if (this.structure) { json.structure = true; }
    return json
  };

  ReplaceStep.fromJSON = function fromJSON (schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number")
      { throw new RangeError("Invalid input for ReplaceStep.fromJSON") }
    return new ReplaceStep(json.from, json.to, Slice.fromJSON(schema, json.slice), !!json.structure)
  };

  return ReplaceStep;
}(Step));

Step.jsonID("replace", ReplaceStep);

// ::- Replace a part of the document with a slice of content, but
// preserve a range of the replaced content by moving it into the
// slice.
var ReplaceAroundStep = /*@__PURE__*/(function (Step) {
  function ReplaceAroundStep(from, to, gapFrom, gapTo, slice, insert, structure) {
    Step.call(this);
    this.from = from;
    this.to = to;
    this.gapFrom = gapFrom;
    this.gapTo = gapTo;
    this.slice = slice;
    this.insert = insert;
    this.structure = !!structure;
  }

  if ( Step ) ReplaceAroundStep.__proto__ = Step;
  ReplaceAroundStep.prototype = Object.create( Step && Step.prototype );
  ReplaceAroundStep.prototype.constructor = ReplaceAroundStep;

  ReplaceAroundStep.prototype.apply = function apply (doc) {
    if (this.structure && (contentBetween(doc, this.from, this.gapFrom) ||
                           contentBetween(doc, this.gapTo, this.to)))
      { return StepResult.fail("Structure gap-replace would overwrite content") }

    var gap = doc.slice(this.gapFrom, this.gapTo);
    if (gap.openStart || gap.openEnd)
      { return StepResult.fail("Gap is not a flat range") }
    var inserted = this.slice.insertAt(this.insert, gap.content);
    if (!inserted) { return StepResult.fail("Content does not fit in gap") }
    return StepResult.fromReplace(doc, this.from, this.to, inserted)
  };

  ReplaceAroundStep.prototype.getMap = function getMap () {
    return new StepMap([this.from, this.gapFrom - this.from, this.insert,
                        this.gapTo, this.to - this.gapTo, this.slice.size - this.insert])
  };

  ReplaceAroundStep.prototype.invert = function invert (doc) {
    var gap = this.gapTo - this.gapFrom;
    return new ReplaceAroundStep(this.from, this.from + this.slice.size + gap,
                                 this.from + this.insert, this.from + this.insert + gap,
                                 doc.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from),
                                 this.gapFrom - this.from, this.structure)
  };

  ReplaceAroundStep.prototype.map = function map (mapping) {
    var from = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
    var gapFrom = mapping.map(this.gapFrom, -1), gapTo = mapping.map(this.gapTo, 1);
    if ((from.deleted && to.deleted) || gapFrom < from.pos || gapTo > to.pos) { return null }
    return new ReplaceAroundStep(from.pos, to.pos, gapFrom, gapTo, this.slice, this.insert, this.structure)
  };

  ReplaceAroundStep.prototype.toJSON = function toJSON () {
    var json = {stepType: "replaceAround", from: this.from, to: this.to,
                gapFrom: this.gapFrom, gapTo: this.gapTo, insert: this.insert};
    if (this.slice.size) { json.slice = this.slice.toJSON(); }
    if (this.structure) { json.structure = true; }
    return json
  };

  ReplaceAroundStep.fromJSON = function fromJSON (schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number" ||
        typeof json.gapFrom != "number" || typeof json.gapTo != "number" || typeof json.insert != "number")
      { throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON") }
    return new ReplaceAroundStep(json.from, json.to, json.gapFrom, json.gapTo,
                                 Slice.fromJSON(schema, json.slice), json.insert, !!json.structure)
  };

  return ReplaceAroundStep;
}(Step));

Step.jsonID("replaceAround", ReplaceAroundStep);

function contentBetween(doc, from, to) {
  var $from = doc.resolve(from), dist = to - from, depth = $from.depth;
  while (dist > 0 && depth > 0 && $from.indexAfter(depth) == $from.node(depth).childCount) {
    depth--;
    dist--;
  }
  if (dist > 0) {
    var next = $from.node(depth).maybeChild($from.indexAfter(depth));
    while (dist > 0) {
      if (!next || next.isLeaf) { return true }
      next = next.firstChild;
      dist--;
    }
  }
  return false
}

function canCut(node, start, end) {
  return (start == 0 || node.canReplace(start, node.childCount)) &&
    (end == node.childCount || node.canReplace(0, end))
}

// :: (NodeRange) → ?number
// Try to find a target depth to which the content in the given range
// can be lifted. Will not go across
// [isolating](#model.NodeSpec.isolating) parent nodes.
function liftTarget(range) {
  var parent = range.parent;
  var content = parent.content.cutByIndex(range.startIndex, range.endIndex);
  for (var depth = range.depth;; --depth) {
    var node = range.$from.node(depth);
    var index = range.$from.index(depth), endIndex = range.$to.indexAfter(depth);
    if (depth < range.depth && node.canReplace(index, endIndex, content))
      { return depth }
    if (depth == 0 || node.type.spec.isolating || !canCut(node, index, endIndex)) { break }
  }
}

// :: (NodeRange, number) → this
// Split the content in the given range off from its parent, if there
// is sibling content before or after it, and move it up the tree to
// the depth specified by `target`. You'll probably want to use
// [`liftTarget`](#transform.liftTarget) to compute `target`, to make
// sure the lift is valid.
Transform.prototype.lift = function(range, target) {
  var $from = range.$from;
  var $to = range.$to;
  var depth = range.depth;

  var gapStart = $from.before(depth + 1), gapEnd = $to.after(depth + 1);
  var start = gapStart, end = gapEnd;

  var before = Fragment.empty, openStart = 0;
  for (var d = depth, splitting = false; d > target; d--)
    { if (splitting || $from.index(d) > 0) {
      splitting = true;
      before = Fragment.from($from.node(d).copy(before));
      openStart++;
    } else {
      start--;
    } }
  var after = Fragment.empty, openEnd = 0;
  for (var d$1 = depth, splitting$1 = false; d$1 > target; d$1--)
    { if (splitting$1 || $to.after(d$1 + 1) < $to.end(d$1)) {
      splitting$1 = true;
      after = Fragment.from($to.node(d$1).copy(after));
      openEnd++;
    } else {
      end++;
    } }

  return this.step(new ReplaceAroundStep(start, end, gapStart, gapEnd,
                                         new Slice(before.append(after), openStart, openEnd),
                                         before.size - openStart, true))
};

// :: (NodeRange, [{type: NodeType, attrs: ?Object}]) → this
// Wrap the given [range](#model.NodeRange) in the given set of wrappers.
// The wrappers are assumed to be valid in this position, and should
// probably be computed with [`findWrapping`](#transform.findWrapping).
Transform.prototype.wrap = function(range, wrappers) {
  var content = Fragment.empty;
  for (var i = wrappers.length - 1; i >= 0; i--)
    { content = Fragment.from(wrappers[i].type.create(wrappers[i].attrs, content)); }

  var start = range.start, end = range.end;
  return this.step(new ReplaceAroundStep(start, end, start, end, new Slice(content, 0, 0), wrappers.length, true))
};

// :: (number, ?number, NodeType, ?Object) → this
// Set the type of all textblocks (partly) between `from` and `to` to
// the given node type with the given attributes.
Transform.prototype.setBlockType = function(from, to, type, attrs) {
  var this$1 = this;
  if ( to === void 0 ) to = from;

  if (!type.isTextblock) { throw new RangeError("Type given to setBlockType should be a textblock") }
  var mapFrom = this.steps.length;
  this.doc.nodesBetween(from, to, function (node, pos) {
    if (node.isTextblock && !node.hasMarkup(type, attrs) && canChangeType(this$1.doc, this$1.mapping.slice(mapFrom).map(pos), type)) {
      // Ensure all markup that isn't allowed in the new node type is cleared
      this$1.clearIncompatible(this$1.mapping.slice(mapFrom).map(pos, 1), type);
      var mapping = this$1.mapping.slice(mapFrom);
      var startM = mapping.map(pos, 1), endM = mapping.map(pos + node.nodeSize, 1);
      this$1.step(new ReplaceAroundStep(startM, endM, startM + 1, endM - 1,
                                      new Slice(Fragment.from(type.create(attrs, null, node.marks)), 0, 0), 1, true));
      return false
    }
  });
  return this
};

function canChangeType(doc, pos, type) {
  var $pos = doc.resolve(pos), index = $pos.index();
  return $pos.parent.canReplaceWith(index, index + 1, type)
}

// :: (number, ?NodeType, ?Object, ?[Mark]) → this
// Change the type, attributes, and/or marks of the node at `pos`.
// When `type` isn't given, the existing node type is preserved,
Transform.prototype.setNodeMarkup = function(pos, type, attrs, marks) {
  var node = this.doc.nodeAt(pos);
  if (!node) { throw new RangeError("No node at given position") }
  if (!type) { type = node.type; }
  var newNode = type.create(attrs, null, marks || node.marks);
  if (node.isLeaf)
    { return this.replaceWith(pos, pos + node.nodeSize, newNode) }

  if (!type.validContent(node.content))
    { throw new RangeError("Invalid content for node type " + type.name) }

  return this.step(new ReplaceAroundStep(pos, pos + node.nodeSize, pos + 1, pos + node.nodeSize - 1,
                                         new Slice(Fragment.from(newNode), 0, 0), 1, true))
};

// :: (Node, number, number, ?[?{type: NodeType, attrs: ?Object}]) → bool
// Check whether splitting at the given position is allowed.
function canSplit(doc, pos, depth, typesAfter) {
  if ( depth === void 0 ) depth = 1;

  var $pos = doc.resolve(pos), base = $pos.depth - depth;
  var innerType = (typesAfter && typesAfter[typesAfter.length - 1]) || $pos.parent;
  if (base < 0 || $pos.parent.type.spec.isolating ||
      !$pos.parent.canReplace($pos.index(), $pos.parent.childCount) ||
      !innerType.type.validContent($pos.parent.content.cutByIndex($pos.index(), $pos.parent.childCount)))
    { return false }
  for (var d = $pos.depth - 1, i = depth - 2; d > base; d--, i--) {
    var node = $pos.node(d), index$1 = $pos.index(d);
    if (node.type.spec.isolating) { return false }
    var rest = node.content.cutByIndex(index$1, node.childCount);
    var after = (typesAfter && typesAfter[i]) || node;
    if (after != node) { rest = rest.replaceChild(0, after.type.create(after.attrs)); }
    if (!node.canReplace(index$1 + 1, node.childCount) || !after.type.validContent(rest))
      { return false }
  }
  var index = $pos.indexAfter(base);
  var baseType = typesAfter && typesAfter[0];
  return $pos.node(base).canReplaceWith(index, index, baseType ? baseType.type : $pos.node(base + 1).type)
}

// :: (number, ?number, ?[?{type: NodeType, attrs: ?Object}]) → this
// Split the node at the given position, and optionally, if `depth` is
// greater than one, any number of nodes above that. By default, the
// parts split off will inherit the node type of the original node.
// This can be changed by passing an array of types and attributes to
// use after the split.
Transform.prototype.split = function(pos, depth, typesAfter) {
  if ( depth === void 0 ) depth = 1;

  var $pos = this.doc.resolve(pos), before = Fragment.empty, after = Fragment.empty;
  for (var d = $pos.depth, e = $pos.depth - depth, i = depth - 1; d > e; d--, i--) {
    before = Fragment.from($pos.node(d).copy(before));
    var typeAfter = typesAfter && typesAfter[i];
    after = Fragment.from(typeAfter ? typeAfter.type.create(typeAfter.attrs, after) : $pos.node(d).copy(after));
  }
  return this.step(new ReplaceStep(pos, pos, new Slice(before.append(after), depth, depth), true))
};

// :: (Node, number) → bool
// Test whether the blocks before and after a given position can be
// joined.
function canJoin(doc, pos) {
  var $pos = doc.resolve(pos), index = $pos.index();
  return joinable($pos.nodeBefore, $pos.nodeAfter) &&
    $pos.parent.canReplace(index, index + 1)
}

function joinable(a, b) {
  return a && b && !a.isLeaf && a.canAppend(b)
}

// :: (number, ?number) → this
// Join the blocks around the given position. If depth is 2, their
// last and first siblings are also joined, and so on.
Transform.prototype.join = function(pos, depth) {
  if ( depth === void 0 ) depth = 1;

  var step = new ReplaceStep(pos - depth, pos + depth, Slice.empty, true);
  return this.step(step)
};

// :: (Node, number, NodeType) → ?number
// Try to find a point where a node of the given type can be inserted
// near `pos`, by searching up the node hierarchy when `pos` itself
// isn't a valid place but is at the start or end of a node. Return
// null if no position was found.
function insertPoint(doc, pos, nodeType) {
  var $pos = doc.resolve(pos);
  if ($pos.parent.canReplaceWith($pos.index(), $pos.index(), nodeType)) { return pos }

  if ($pos.parentOffset == 0)
    { for (var d = $pos.depth - 1; d >= 0; d--) {
      var index = $pos.index(d);
      if ($pos.node(d).canReplaceWith(index, index, nodeType)) { return $pos.before(d + 1) }
      if (index > 0) { return null }
    } }
  if ($pos.parentOffset == $pos.parent.content.size)
    { for (var d$1 = $pos.depth - 1; d$1 >= 0; d$1--) {
      var index$1 = $pos.indexAfter(d$1);
      if ($pos.node(d$1).canReplaceWith(index$1, index$1, nodeType)) { return $pos.after(d$1 + 1) }
      if (index$1 < $pos.node(d$1).childCount) { return null }
    } }
}

function mapFragment(fragment, f, parent) {
  var mapped = [];
  for (var i = 0; i < fragment.childCount; i++) {
    var child = fragment.child(i);
    if (child.content.size) { child = child.copy(mapFragment(child.content, f, child)); }
    if (child.isInline) { child = f(child, parent, i); }
    mapped.push(child);
  }
  return Fragment.fromArray(mapped)
}

// ::- Add a mark to all inline content between two positions.
var AddMarkStep = /*@__PURE__*/(function (Step) {
  function AddMarkStep(from, to, mark) {
    Step.call(this);
    this.from = from;
    this.to = to;
    this.mark = mark;
  }

  if ( Step ) AddMarkStep.__proto__ = Step;
  AddMarkStep.prototype = Object.create( Step && Step.prototype );
  AddMarkStep.prototype.constructor = AddMarkStep;

  AddMarkStep.prototype.apply = function apply (doc) {
    var this$1 = this;

    var oldSlice = doc.slice(this.from, this.to), $from = doc.resolve(this.from);
    var parent = $from.node($from.sharedDepth(this.to));
    var slice = new Slice(mapFragment(oldSlice.content, function (node, parent) {
      if (!parent.type.allowsMarkType(this$1.mark.type)) { return node }
      return node.mark(this$1.mark.addToSet(node.marks))
    }, parent), oldSlice.openStart, oldSlice.openEnd);
    return StepResult.fromReplace(doc, this.from, this.to, slice)
  };

  AddMarkStep.prototype.invert = function invert () {
    return new RemoveMarkStep(this.from, this.to, this.mark)
  };

  AddMarkStep.prototype.map = function map (mapping) {
    var from = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
    if (from.deleted && to.deleted || from.pos >= to.pos) { return null }
    return new AddMarkStep(from.pos, to.pos, this.mark)
  };

  AddMarkStep.prototype.merge = function merge (other) {
    if (other instanceof AddMarkStep &&
        other.mark.eq(this.mark) &&
        this.from <= other.to && this.to >= other.from)
      { return new AddMarkStep(Math.min(this.from, other.from),
                             Math.max(this.to, other.to), this.mark) }
  };

  AddMarkStep.prototype.toJSON = function toJSON () {
    return {stepType: "addMark", mark: this.mark.toJSON(),
            from: this.from, to: this.to}
  };

  AddMarkStep.fromJSON = function fromJSON (schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number")
      { throw new RangeError("Invalid input for AddMarkStep.fromJSON") }
    return new AddMarkStep(json.from, json.to, schema.markFromJSON(json.mark))
  };

  return AddMarkStep;
}(Step));

Step.jsonID("addMark", AddMarkStep);

// ::- Remove a mark from all inline content between two positions.
var RemoveMarkStep = /*@__PURE__*/(function (Step) {
  function RemoveMarkStep(from, to, mark) {
    Step.call(this);
    this.from = from;
    this.to = to;
    this.mark = mark;
  }

  if ( Step ) RemoveMarkStep.__proto__ = Step;
  RemoveMarkStep.prototype = Object.create( Step && Step.prototype );
  RemoveMarkStep.prototype.constructor = RemoveMarkStep;

  RemoveMarkStep.prototype.apply = function apply (doc) {
    var this$1 = this;

    var oldSlice = doc.slice(this.from, this.to);
    var slice = new Slice(mapFragment(oldSlice.content, function (node) {
      return node.mark(this$1.mark.removeFromSet(node.marks))
    }), oldSlice.openStart, oldSlice.openEnd);
    return StepResult.fromReplace(doc, this.from, this.to, slice)
  };

  RemoveMarkStep.prototype.invert = function invert () {
    return new AddMarkStep(this.from, this.to, this.mark)
  };

  RemoveMarkStep.prototype.map = function map (mapping) {
    var from = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
    if (from.deleted && to.deleted || from.pos >= to.pos) { return null }
    return new RemoveMarkStep(from.pos, to.pos, this.mark)
  };

  RemoveMarkStep.prototype.merge = function merge (other) {
    if (other instanceof RemoveMarkStep &&
        other.mark.eq(this.mark) &&
        this.from <= other.to && this.to >= other.from)
      { return new RemoveMarkStep(Math.min(this.from, other.from),
                                Math.max(this.to, other.to), this.mark) }
  };

  RemoveMarkStep.prototype.toJSON = function toJSON () {
    return {stepType: "removeMark", mark: this.mark.toJSON(),
            from: this.from, to: this.to}
  };

  RemoveMarkStep.fromJSON = function fromJSON (schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number")
      { throw new RangeError("Invalid input for RemoveMarkStep.fromJSON") }
    return new RemoveMarkStep(json.from, json.to, schema.markFromJSON(json.mark))
  };

  return RemoveMarkStep;
}(Step));

Step.jsonID("removeMark", RemoveMarkStep);

// :: (number, number, Mark) → this
// Add the given mark to the inline content between `from` and `to`.
Transform.prototype.addMark = function(from, to, mark) {
  var this$1 = this;

  var removed = [], added = [], removing = null, adding = null;
  this.doc.nodesBetween(from, to, function (node, pos, parent) {
    if (!node.isInline) { return }
    var marks = node.marks;
    if (!mark.isInSet(marks) && parent.type.allowsMarkType(mark.type)) {
      var start = Math.max(pos, from), end = Math.min(pos + node.nodeSize, to);
      var newSet = mark.addToSet(marks);

      for (var i = 0; i < marks.length; i++) {
        if (!marks[i].isInSet(newSet)) {
          if (removing && removing.to == start && removing.mark.eq(marks[i]))
            { removing.to = end; }
          else
            { removed.push(removing = new RemoveMarkStep(start, end, marks[i])); }
        }
      }

      if (adding && adding.to == start)
        { adding.to = end; }
      else
        { added.push(adding = new AddMarkStep(start, end, mark)); }
    }
  });

  removed.forEach(function (s) { return this$1.step(s); });
  added.forEach(function (s) { return this$1.step(s); });
  return this
};

// :: (number, number, ?union<Mark, MarkType>) → this
// Remove marks from inline nodes between `from` and `to`. When `mark`
// is a single mark, remove precisely that mark. When it is a mark type,
// remove all marks of that type. When it is null, remove all marks of
// any type.
Transform.prototype.removeMark = function(from, to, mark) {
  var this$1 = this;
  if ( mark === void 0 ) mark = null;

  var matched = [], step = 0;
  this.doc.nodesBetween(from, to, function (node, pos) {
    if (!node.isInline) { return }
    step++;
    var toRemove = null;
    if (mark instanceof MarkType) {
      var found = mark.isInSet(node.marks);
      if (found) { toRemove = [found]; }
    } else if (mark) {
      if (mark.isInSet(node.marks)) { toRemove = [mark]; }
    } else {
      toRemove = node.marks;
    }
    if (toRemove && toRemove.length) {
      var end = Math.min(pos + node.nodeSize, to);
      for (var i = 0; i < toRemove.length; i++) {
        var style = toRemove[i], found$1 = (void 0);
        for (var j = 0; j < matched.length; j++) {
          var m = matched[j];
          if (m.step == step - 1 && style.eq(matched[j].style)) { found$1 = m; }
        }
        if (found$1) {
          found$1.to = end;
          found$1.step = step;
        } else {
          matched.push({style: style, from: Math.max(pos, from), to: end, step: step});
        }
      }
    }
  });
  matched.forEach(function (m) { return this$1.step(new RemoveMarkStep(m.from, m.to, m.style)); });
  return this
};

// :: (number, NodeType, ?ContentMatch) → this
// Removes all marks and nodes from the content of the node at `pos`
// that don't match the given new parent node type. Accepts an
// optional starting [content match](#model.ContentMatch) as third
// argument.
Transform.prototype.clearIncompatible = function(pos, parentType, match) {
  if ( match === void 0 ) match = parentType.contentMatch;

  var node = this.doc.nodeAt(pos);
  var delSteps = [], cur = pos + 1;
  for (var i = 0; i < node.childCount; i++) {
    var child = node.child(i), end = cur + child.nodeSize;
    var allowed = match.matchType(child.type, child.attrs);
    if (!allowed) {
      delSteps.push(new ReplaceStep(cur, end, Slice.empty));
    } else {
      match = allowed;
      for (var j = 0; j < child.marks.length; j++) { if (!parentType.allowsMarkType(child.marks[j].type))
        { this.step(new RemoveMarkStep(cur, end, child.marks[j])); } }
    }
    cur = end;
  }
  if (!match.validEnd) {
    var fill = match.fillBefore(Fragment.empty, true);
    this.replace(cur, cur, new Slice(fill, 0, 0));
  }
  for (var i$1 = delSteps.length - 1; i$1 >= 0; i$1--) { this.step(delSteps[i$1]); }
  return this
};

// :: (Node, number, ?number, ?Slice) → ?Step
// ‘Fit’ a slice into a given position in the document, producing a
// [step](#transform.Step) that inserts it. Will return null if
// there's no meaningful way to insert the slice here, or inserting it
// would be a no-op (an empty slice over an empty range).
function replaceStep(doc, from, to, slice) {
  if ( to === void 0 ) to = from;
  if ( slice === void 0 ) slice = Slice.empty;

  if (from == to && !slice.size) { return null }

  var $from = doc.resolve(from), $to = doc.resolve(to);
  // Optimization -- avoid work if it's obvious that it's not needed.
  if (fitsTrivially($from, $to, slice)) { return new ReplaceStep(from, to, slice) }
  var placed = placeSlice($from, slice);

  var fittedLeft = fitLeft($from, placed);
  var fitted = fitRight($from, $to, fittedLeft);
  if (!fitted) { return null }
  if (fittedLeft.size != fitted.size && canMoveText($from, $to, fittedLeft)) {
    var d = $to.depth, after = $to.after(d);
    while (d > 1 && after == $to.end(--d)) { ++after; }
    var fittedAfter = fitRight($from, doc.resolve(after), fittedLeft);
    if (fittedAfter)
      { return new ReplaceAroundStep(from, after, to, $to.end(), fittedAfter, fittedLeft.size) }
  }
  return fitted.size || from != to ? new ReplaceStep(from, to, fitted) : null
}

// :: (number, ?number, ?Slice) → this
// Replace the part of the document between `from` and `to` with the
// given `slice`.
Transform.prototype.replace = function(from, to, slice) {
  if ( to === void 0 ) to = from;
  if ( slice === void 0 ) slice = Slice.empty;

  var step = replaceStep(this.doc, from, to, slice);
  if (step) { this.step(step); }
  return this
};

// :: (number, number, union<Fragment, Node, [Node]>) → this
// Replace the given range with the given content, which may be a
// fragment, node, or array of nodes.
Transform.prototype.replaceWith = function(from, to, content) {
  return this.replace(from, to, new Slice(Fragment.from(content), 0, 0))
};

// :: (number, number) → this
// Delete the content between the given positions.
Transform.prototype.delete = function(from, to) {
  return this.replace(from, to, Slice.empty)
};

// :: (number, union<Fragment, Node, [Node]>) → this
// Insert the given content at the given position.
Transform.prototype.insert = function(pos, content) {
  return this.replaceWith(pos, pos, content)
};



function fitLeftInner($from, depth, placed, placedBelow) {
  var content = Fragment.empty, openEnd = 0, placedHere = placed[depth];
  if ($from.depth > depth) {
    var inner = fitLeftInner($from, depth + 1, placed, placedBelow || placedHere);
    openEnd = inner.openEnd + 1;
    content = Fragment.from($from.node(depth + 1).copy(inner.content));
  }

  if (placedHere) {
    content = content.append(placedHere.content);
    openEnd = placedHere.openEnd;
  }
  if (placedBelow) {
    content = content.append($from.node(depth).contentMatchAt($from.indexAfter(depth)).fillBefore(Fragment.empty, true));
    openEnd = 0;
  }

  return {content: content, openEnd: openEnd}
}

function fitLeft($from, placed) {
  var ref = fitLeftInner($from, 0, placed, false);
  var content = ref.content;
  var openEnd = ref.openEnd;
  return new Slice(content, $from.depth, openEnd || 0)
}

function fitRightJoin(content, parent, $from, $to, depth, openStart, openEnd) {
  var match, count = content.childCount, matchCount = count - (openEnd > 0 ? 1 : 0);
  var parentNode = openStart < 0 ? parent : $from.node(depth);
  if (openStart < 0)
    { match = parentNode.contentMatchAt(matchCount); }
  else if (count == 1 && openEnd > 0)
    { match = parentNode.contentMatchAt(openStart ? $from.index(depth) : $from.indexAfter(depth)); }
  else
    { match = parentNode.contentMatchAt($from.indexAfter(depth))
      .matchFragment(content, count > 0 && openStart ? 1 : 0, matchCount); }

  var toNode = $to.node(depth);
  if (openEnd > 0 && depth < $to.depth) {
    var after = toNode.content.cutByIndex($to.indexAfter(depth)).addToStart(content.lastChild);
    var joinable$1 = match.fillBefore(after, true);
    // Can't insert content if there's a single node stretched across this gap
    if (joinable$1 && joinable$1.size && openStart > 0 && count == 1) { joinable$1 = null; }

    if (joinable$1) {
      var inner = fitRightJoin(content.lastChild.content, content.lastChild, $from, $to,
                               depth + 1, count == 1 ? openStart - 1 : -1, openEnd - 1);
      if (inner) {
        var last = content.lastChild.copy(inner);
        if (joinable$1.size)
          { return content.cutByIndex(0, count - 1).append(joinable$1).addToEnd(last) }
        else
          { return content.replaceChild(count - 1, last) }
      }
    }
  }
  if (openEnd > 0)
    { match = match.matchType((count == 1 && openStart > 0 ? $from.node(depth + 1) : content.lastChild).type); }

  // If we're here, the next level can't be joined, so we see what
  // happens if we leave it open.
  var toIndex = $to.index(depth);
  if (toIndex == toNode.childCount && !toNode.type.compatibleContent(parent.type)) { return null }
  var joinable = match.fillBefore(toNode.content, true, toIndex);
  for (var i = toIndex; joinable && i < toNode.content.childCount; i++)
    { if (!parentNode.type.allowsMarks(toNode.content.child(i).marks)) { joinable = null; } }
  if (!joinable) { return null }

  if (openEnd > 0) {
    var closed = fitRightClosed(content.lastChild, openEnd - 1, $from, depth + 1,
                                count == 1 ? openStart - 1 : -1);
    content = content.replaceChild(count - 1, closed);
  }
  content = content.append(joinable);
  if ($to.depth > depth)
    { content = content.addToEnd(fitRightSeparate($to, depth + 1)); }
  return content
}

function fitRightClosed(node, openEnd, $from, depth, openStart) {
  var match, content = node.content, count = content.childCount;
  if (openStart >= 0)
    { match = $from.node(depth).contentMatchAt($from.indexAfter(depth))
      .matchFragment(content, openStart > 0 ? 1 : 0, count); }
  else
    { match = node.contentMatchAt(count); }

  if (openEnd > 0) {
    var closed = fitRightClosed(content.lastChild, openEnd - 1, $from, depth + 1,
                                count == 1 ? openStart - 1 : -1);
    content = content.replaceChild(count - 1, closed);
  }

  return node.copy(content.append(match.fillBefore(Fragment.empty, true)))
}

function fitRightSeparate($to, depth) {
  var node = $to.node(depth);
  var fill = node.contentMatchAt(0).fillBefore(node.content, true, $to.index(depth));
  if ($to.depth > depth) { fill = fill.addToEnd(fitRightSeparate($to, depth + 1)); }
  return node.copy(fill)
}

function normalizeSlice(content, openStart, openEnd) {
  while (openStart > 0 && openEnd > 0 && content.childCount == 1) {
    content = content.firstChild.content;
    openStart--;
    openEnd--;
  }
  return new Slice(content, openStart, openEnd)
}

// : (ResolvedPos, ResolvedPos, number, Slice) → Slice
function fitRight($from, $to, slice) {
  var fitted = fitRightJoin(slice.content, $from.node(0), $from, $to, 0, slice.openStart, slice.openEnd);
  if (!fitted) { return null }
  return normalizeSlice(fitted, slice.openStart, $to.depth)
}

function fitsTrivially($from, $to, slice) {
  return !slice.openStart && !slice.openEnd && $from.start() == $to.start() &&
    $from.parent.canReplace($from.index(), $to.index(), slice.content)
}

function canMoveText($from, $to, slice) {
  if (!$to.parent.isTextblock) { return false }

  var parent = slice.openEnd ? nodeRight(slice.content, slice.openEnd)
      : $from.node($from.depth - (slice.openStart - slice.openEnd));
  if (!parent.isTextblock) { return false }
  for (var i = $to.index(); i < $to.parent.childCount; i++)
    { if (!parent.type.allowsMarks($to.parent.child(i).marks)) { return false } }
  var match;
  if (slice.openEnd) {
    match = parent.contentMatchAt(parent.childCount);
  } else {
    match = parent.contentMatchAt(parent.childCount);
    if (slice.size) { match = match.matchFragment(slice.content, slice.openStart ? 1 : 0); }
  }
  match = match.matchFragment($to.parent.content, $to.index());
  return match && match.validEnd
}

function nodeRight(content, depth) {
  for (var i = 1; i < depth; i++) { content = content.lastChild.content; }
  return content.lastChild
}

// Algorithm for 'placing' the elements of a slice into a gap:
//
// We consider the content of each node that is open to the left to be
// independently placeable. I.e. in <p("foo"), p("bar")>, when the
// paragraph on the left is open, "foo" can be placed (somewhere on
// the left side of the replacement gap) independently from p("bar").
//
// So placeSlice splits up a slice into a number of sub-slices,
// along with information on where they can be placed on the given
// left-side edge. It works by walking the open side of the slice,
// from the inside out, and trying to find a landing spot for each
// element, by simultaneously scanning over the gap side. When no
// place is found for an open node's content, it is left in that node.

// : (ResolvedPos, Slice) → [{content: Fragment, openEnd: number, depth: number}]
function placeSlice($from, slice) {
  var frontier = new Frontier($from);
  for (var pass = 1; slice.size && pass <= 3; pass++) {
    var value = frontier.placeSlice(slice.content, slice.openStart, slice.openEnd, pass);
    if (pass == 3 && value != slice && value.size) { pass = 0; } // Restart if the 3rd pass made progress but left content
    slice = value;
  }
  while (frontier.open.length) { frontier.closeNode(); }
  return frontier.placed
}

// Helper class that models the open side of the insert position,
// keeping track of the content match and already inserted content
// at each depth.
var Frontier = function Frontier($pos) {
  // : [{parent: Node, match: ContentMatch, content: Fragment, wrapper: bool, openEnd: number, depth: number}]
  this.open = [];
  for (var d = 0; d <= $pos.depth; d++) {
    var parent = $pos.node(d), match = parent.contentMatchAt($pos.indexAfter(d));
    this.open.push({parent: parent, match: match, content: Fragment.empty, wrapper: false, openEnd: 0, depth: d});
  }
  this.placed = [];
};

// : (Fragment, number, number, number, ?Node) → Slice
// Tries to place the content of the given slice, and returns a
// slice containing unplaced content.
//
// pass 1: try to fit directly
// pass 2: allow wrapper nodes to be introduced
// pass 3: allow unwrapping of nodes that aren't open
Frontier.prototype.placeSlice = function placeSlice (fragment, openStart, openEnd, pass, parent) {
  if (openStart > 0) {
    var first = fragment.firstChild;
    var inner = this.placeSlice(first.content, Math.max(0, openStart - 1),
                                openEnd && fragment.childCount == 1 ? openEnd - 1 : 0,
                                pass, first);
    if (inner.content != first.content) {
      if (inner.content.size) {
        fragment = fragment.replaceChild(0, first.copy(inner.content));
        openStart = inner.openStart + 1;
      } else {
        if (fragment.childCount == 1) { openEnd = 0; }
        fragment = fragment.cutByIndex(1);
        openStart = 0;
      }
    }
  }
  var result = this.placeContent(fragment, openStart, openEnd, pass, parent);
  if (pass > 2 && result.size && openStart == 0) {
    var child = result.content.firstChild, single = result.content.childCount == 1;
    this.placeContent(child.content, 0, openEnd && single ? openEnd - 1 : 0, pass, child);
    result = single ? Fragment.empty : new Slice(result.content.cutByIndex(1), 0, openEnd);
  }
  return result
};

Frontier.prototype.placeContent = function placeContent (fragment, openStart, openEnd, pass, parent) {
  var i = 0;
  // Go over the fragment's children
  for (; i < fragment.childCount; i++) {
    var child = fragment.child(i), placed = false, last = i == fragment.childCount - 1;
    // Try each open node in turn, starting from the innermost
    for (var d = this.open.length - 1; d >= 0; d--) {
      var open = this.open[d], wrap = (void 0);

      // If pass > 1, it is allowed to wrap the node to help find a
      // fit, so if findWrapping returns something, we add open
      // nodes to the frontier for that wrapping.
      if (pass > 1 && (wrap = open.match.findWrapping(child.type)) &&
          !(parent && wrap.length && wrap[wrap.length - 1] == parent.type)) {
        while (this.open.length - 1 > d) { this.closeNode(); }
        for (var w = 0; w < wrap.length; w++) {
          open.match = open.match.matchType(wrap[w]);
          d++;
          open = {parent: wrap[w].create(),
                  match: wrap[w].contentMatch,
                  content: Fragment.empty, wrapper: true, openEnd: 0, depth: d + w};
          this.open.push(open);
        }
      }

      // See if the child fits here
      var match = open.match.matchType(child.type);
      if (!match) {
        var fill = open.match.fillBefore(Fragment.from(child));
        if (fill) {
          for (var j = 0; j < fill.childCount; j++) {
            var ch = fill.child(j);
            this.addNode(open, ch, 0);
            match = open.match.matchFragment(ch);
          }
        } else if (parent && open.match.matchType(parent.type)) {
          // Don't continue looking further up if the parent node
          // would fit here.
          break
        } else {
          continue
        }
      }

      // Close open nodes above this one, since we're starting to
      // add to this.
      while (this.open.length - 1 > d) { this.closeNode(); }
      // Strip marks from the child or close its start when necessary
      child = child.mark(open.parent.type.allowedMarks(child.marks));
      if (openStart) {
        child = closeNodeStart(child, openStart, last ? openEnd : 0);
        openStart = 0;
      }
      // Add the child to this open node and adjust its metadata
      this.addNode(open, child, last ? openEnd : 0);
      open.match = match;
      if (last) { openEnd = 0; }
      placed = true;
      break
    }
    // As soon as we've failed to place a node we stop looking at
    // later nodes
    if (!placed) { break }
  }
  // Close the current open node if it's not the the root and we
  // either placed up to the end of the node or the the current
  // slice depth's node type matches the open node's type
  if (this.open.length > 1 &&
      (i > 0 && i == fragment.childCount ||
       parent && this.open[this.open.length - 1].parent.type == parent.type))
    { this.closeNode(); }

  return new Slice(fragment.cutByIndex(i), openStart, openEnd)
};

Frontier.prototype.addNode = function addNode (open, node, openEnd) {
  open.content = closeFragmentEnd(open.content, open.openEnd).addToEnd(node);
  open.openEnd = openEnd;
};

Frontier.prototype.closeNode = function closeNode () {
  var open = this.open.pop();
  if (open.content.size == 0) ; else if (open.wrapper) {
    this.addNode(this.open[this.open.length - 1], open.parent.copy(open.content), open.openEnd + 1);
  } else {
    this.placed[open.depth] = {depth: open.depth, content: open.content, openEnd: open.openEnd};
  }
};

function closeNodeStart(node, openStart, openEnd) {
  var content = node.content;
  if (openStart > 1) {
    var first = closeNodeStart(node.firstChild, openStart - 1, node.childCount == 1 ? openEnd - 1 : 0);
    content = node.content.replaceChild(0, first);
  }
  var fill = node.type.contentMatch.fillBefore(content, openEnd == 0);
  return node.copy(fill.append(content))
}

function closeNodeEnd(node, depth) {
  var content = node.content;
  if (depth > 1) {
    var last = closeNodeEnd(node.lastChild, depth - 1);
    content = node.content.replaceChild(node.childCount - 1, last);
  }
  var fill = node.contentMatchAt(node.childCount).fillBefore(Fragment.empty, true);
  return node.copy(content.append(fill))
}

function closeFragmentEnd(fragment, depth) {
  return depth ? fragment.replaceChild(fragment.childCount - 1, closeNodeEnd(fragment.lastChild, depth)) : fragment
}

// :: (number, number, Slice) → this
// Replace a range of the document with a given slice, using `from`,
// `to`, and the slice's [`openStart`](#model.Slice.openStart) property
// as hints, rather than fixed start and end points. This method may
// grow the replaced area or close open nodes in the slice in order to
// get a fit that is more in line with WYSIWYG expectations, by
// dropping fully covered parent nodes of the replaced region when
// they are marked [non-defining](#model.NodeSpec.defining), or
// including an open parent node from the slice that _is_ marked as
// [defining](#model.NodeSpec.defining).
//
// This is the method, for example, to handle paste. The similar
// [`replace`](#transform.Transform.replace) method is a more
// primitive tool which will _not_ move the start and end of its given
// range, and is useful in situations where you need more precise
// control over what happens.
Transform.prototype.replaceRange = function(from, to, slice) {
  if (!slice.size) { return this.deleteRange(from, to) }

  var $from = this.doc.resolve(from), $to = this.doc.resolve(to);
  if (fitsTrivially($from, $to, slice))
    { return this.step(new ReplaceStep(from, to, slice)) }

  var targetDepths = coveredDepths($from, this.doc.resolve(to));
  // Can't replace the whole document, so remove 0 if it's present
  if (targetDepths[targetDepths.length - 1] == 0) { targetDepths.pop(); }
  // Negative numbers represent not expansion over the whole node at
  // that depth, but replacing from $from.before(-D) to $to.pos.
  var preferredTarget = -($from.depth + 1);
  targetDepths.unshift(preferredTarget);
  // This loop picks a preferred target depth, if one of the covering
  // depths is not outside of a defining node, and adds negative
  // depths for any depth that has $from at its start and does not
  // cross a defining node.
  for (var d = $from.depth, pos = $from.pos - 1; d > 0; d--, pos--) {
    var spec = $from.node(d).type.spec;
    if (spec.defining || spec.isolating) { break }
    if (targetDepths.indexOf(d) > -1) { preferredTarget = d; }
    else if ($from.before(d) == pos) { targetDepths.splice(1, 0, -d); }
  }
  // Try to fit each possible depth of the slice into each possible
  // target depth, starting with the preferred depths.
  var preferredTargetIndex = targetDepths.indexOf(preferredTarget);

  var leftNodes = [], preferredDepth = slice.openStart;
  for (var content = slice.content, i = 0;; i++) {
    var node = content.firstChild;
    leftNodes.push(node);
    if (i == slice.openStart) { break }
    content = node.content;
  }
  // Back up if the node directly above openStart, or the node above
  // that separated only by a non-defining textblock node, is defining.
  if (preferredDepth > 0 && leftNodes[preferredDepth - 1].type.spec.defining &&
      $from.node(preferredTargetIndex).type != leftNodes[preferredDepth - 1].type)
    { preferredDepth -= 1; }
  else if (preferredDepth >= 2 && leftNodes[preferredDepth - 1].isTextblock && leftNodes[preferredDepth - 2].type.spec.defining &&
           $from.node(preferredTargetIndex).type != leftNodes[preferredDepth - 2].type)
    { preferredDepth -= 2; }

  for (var j = slice.openStart; j >= 0; j--) {
    var openDepth = (j + preferredDepth + 1) % (slice.openStart + 1);
    var insert = leftNodes[openDepth];
    if (!insert) { continue }
    for (var i$1 = 0; i$1 < targetDepths.length; i$1++) {
      // Loop over possible expansion levels, starting with the
      // preferred one
      var targetDepth = targetDepths[(i$1 + preferredTargetIndex) % targetDepths.length], expand = true;
      if (targetDepth < 0) { expand = false; targetDepth = -targetDepth; }
      var parent = $from.node(targetDepth - 1), index = $from.index(targetDepth - 1);
      if (parent.canReplaceWith(index, index, insert.type, insert.marks))
        { return this.replace($from.before(targetDepth), expand ? $to.after(targetDepth) : to,
                            new Slice(closeFragment(slice.content, 0, slice.openStart, openDepth),
                                      openDepth, slice.openEnd)) }
    }
  }

  var startSteps = this.steps.length;
  for (var i$2 = targetDepths.length - 1; i$2 >= 0; i$2--) {
    this.replace(from, to, slice);
    if (this.steps.length > startSteps) { break }
    var depth = targetDepths[i$2];
    if (i$2 < 0) { continue }
    from = $from.before(depth); to = $to.after(depth);
  }
  return this
};

function closeFragment(fragment, depth, oldOpen, newOpen, parent) {
  if (depth < oldOpen) {
    var first = fragment.firstChild;
    fragment = fragment.replaceChild(0, first.copy(closeFragment(first.content, depth + 1, oldOpen, newOpen, first)));
  }
  if (depth > newOpen) {
    var match = parent.contentMatchAt(0);
    var start = match.fillBefore(fragment).append(fragment);
    fragment = start.append(match.matchFragment(start).fillBefore(Fragment.empty, true));
  }
  return fragment
}

// :: (number, number, Node) → this
// Replace the given range with a node, but use `from` and `to` as
// hints, rather than precise positions. When from and to are the same
// and are at the start or end of a parent node in which the given
// node doesn't fit, this method may _move_ them out towards a parent
// that does allow the given node to be placed. When the given range
// completely covers a parent node, this method may completely replace
// that parent node.
Transform.prototype.replaceRangeWith = function(from, to, node) {
  if (!node.isInline && from == to && this.doc.resolve(from).parent.content.size) {
    var point = insertPoint(this.doc, from, node.type);
    if (point != null) { from = to = point; }
  }
  return this.replaceRange(from, to, new Slice(Fragment.from(node), 0, 0))
};

// :: (number, number) → this
// Delete the given range, expanding it to cover fully covered
// parent nodes until a valid replace is found.
Transform.prototype.deleteRange = function(from, to) {
  var $from = this.doc.resolve(from), $to = this.doc.resolve(to);
  var covered = coveredDepths($from, $to);
  for (var i = 0; i < covered.length; i++) {
    var depth = covered[i], last = i == covered.length - 1;
    if ((last && depth == 0) || $from.node(depth).type.contentMatch.validEnd)
      { return this.delete($from.start(depth), $to.end(depth)) }
    if (depth > 0 && (last || $from.node(depth - 1).canReplace($from.index(depth - 1), $to.indexAfter(depth - 1))))
      { return this.delete($from.before(depth), $to.after(depth)) }
  }
  for (var d = 1; d <= $from.depth && d <= $to.depth; d++) {
    if (from - $from.start(d) == $from.depth - d && to > $from.end(d) && $to.end(d) - to != $to.depth - d)
      { return this.delete($from.before(d), to) }
  }
  return this.delete(from, to)
};

// : (ResolvedPos, ResolvedPos) → [number]
// Returns an array of all depths for which $from - $to spans the
// whole content of the nodes at that depth.
function coveredDepths($from, $to) {
  var result = [], minDepth = Math.min($from.depth, $to.depth);
  for (var d = minDepth; d >= 0; d--) {
    var start = $from.start(d);
    if (start < $from.pos - ($from.depth - d) ||
        $to.end(d) > $to.pos + ($to.depth - d) ||
        $from.node(d).type.spec.isolating ||
        $to.node(d).type.spec.isolating) { break }
    if (start == $to.start(d)) { result.push(d); }
  }
  return result
}

// :: (EditorState, ?(tr: Transaction)) → bool
// Delete the selection, if there is one.
function deleteSelection(state, dispatch) {
  if (state.selection.empty) { return false }
  if (dispatch) { dispatch(state.tr.deleteSelection().scrollIntoView()); }
  return true
}

// :: (EditorState, ?(tr: Transaction), ?EditorView) → bool
// If the selection is empty and at the start of a textblock, try to
// reduce the distance between that block and the one before it—if
// there's a block directly before it that can be joined, join them.
// If not, try to move the selected block closer to the next one in
// the document structure by lifting it out of its parent or moving it
// into a parent of the previous block. Will use the view for accurate
// (bidi-aware) start-of-textblock detection if given.
function joinBackward(state, dispatch, view) {
  var ref = state.selection;
  var $cursor = ref.$cursor;
  if (!$cursor || (view ? !view.endOfTextblock("backward", state)
                        : $cursor.parentOffset > 0))
    { return false }

  var $cut = findCutBefore($cursor);

  // If there is no node before this, try to lift
  if (!$cut) {
    var range = $cursor.blockRange(), target = range && liftTarget(range);
    if (target == null) { return false }
    if (dispatch) { dispatch(state.tr.lift(range, target).scrollIntoView()); }
    return true
  }

  var before = $cut.nodeBefore;
  // Apply the joining algorithm
  if (!before.type.spec.isolating && deleteBarrier(state, $cut, dispatch))
    { return true }

  // If the node below has no content and the node above is
  // selectable, delete the node below and select the one above.
  if ($cursor.parent.content.size == 0 &&
      (textblockAt(before, "end") || NodeSelection.isSelectable(before))) {
    if (dispatch) {
      var tr = state.tr.deleteRange($cursor.before(), $cursor.after());
      tr.setSelection(textblockAt(before, "end") ? Selection.findFrom(tr.doc.resolve(tr.mapping.map($cut.pos, -1)), -1)
                      : NodeSelection.create(tr.doc, $cut.pos - before.nodeSize));
      dispatch(tr.scrollIntoView());
    }
    return true
  }

  // If the node before is an atom, delete it
  if (before.isAtom && $cut.depth == $cursor.depth - 1) {
    if (dispatch) { dispatch(state.tr.delete($cut.pos - before.nodeSize, $cut.pos).scrollIntoView()); }
    return true
  }

  return false
}

function textblockAt(node, side) {
  for (; node; node = (side == "start" ? node.firstChild : node.lastChild))
    { if (node.isTextblock) { return true } }
  return false
}

// :: (EditorState, ?(tr: Transaction), ?EditorView) → bool
// When the selection is empty and at the start of a textblock, select
// the node before that textblock, if possible. This is intended to be
// bound to keys like backspace, after
// [`joinBackward`](#commands.joinBackward) or other deleting
// commands, as a fall-back behavior when the schema doesn't allow
// deletion at the selected point.
function selectNodeBackward(state, dispatch, view) {
  var ref = state.selection;
  var $cursor = ref.$cursor;
  if (!$cursor || (view ? !view.endOfTextblock("backward", state)
                        : $cursor.parentOffset > 0))
    { return false }

  var $cut = findCutBefore($cursor), node = $cut && $cut.nodeBefore;
  if (!node || !NodeSelection.isSelectable(node)) { return false }
  if (dispatch)
    { dispatch(state.tr.setSelection(NodeSelection.create(state.doc, $cut.pos - node.nodeSize)).scrollIntoView()); }
  return true
}

function findCutBefore($pos) {
  if (!$pos.parent.type.spec.isolating) { for (var i = $pos.depth - 1; i >= 0; i--) {
    if ($pos.index(i) > 0) { return $pos.doc.resolve($pos.before(i + 1)) }
    if ($pos.node(i).type.spec.isolating) { break }
  } }
  return null
}

// :: (EditorState, ?(tr: Transaction), ?EditorView) → bool
// If the selection is empty and the cursor is at the end of a
// textblock, try to reduce or remove the boundary between that block
// and the one after it, either by joining them or by moving the other
// block closer to this one in the tree structure. Will use the view
// for accurate start-of-textblock detection if given.
function joinForward(state, dispatch, view) {
  var ref = state.selection;
  var $cursor = ref.$cursor;
  if (!$cursor || (view ? !view.endOfTextblock("forward", state)
                        : $cursor.parentOffset < $cursor.parent.content.size))
    { return false }

  var $cut = findCutAfter($cursor);

  // If there is no node after this, there's nothing to do
  if (!$cut) { return false }

  var after = $cut.nodeAfter;
  // Try the joining algorithm
  if (deleteBarrier(state, $cut, dispatch)) { return true }

  // If the node above has no content and the node below is
  // selectable, delete the node above and select the one below.
  if ($cursor.parent.content.size == 0 &&
      (textblockAt(after, "start") || NodeSelection.isSelectable(after))) {
    if (dispatch) {
      var tr = state.tr.deleteRange($cursor.before(), $cursor.after());
      tr.setSelection(textblockAt(after, "start") ? Selection.findFrom(tr.doc.resolve(tr.mapping.map($cut.pos)), 1)
                      : NodeSelection.create(tr.doc, tr.mapping.map($cut.pos)));
      dispatch(tr.scrollIntoView());
    }
    return true
  }

  // If the next node is an atom, delete it
  if (after.isAtom && $cut.depth == $cursor.depth - 1) {
    if (dispatch) { dispatch(state.tr.delete($cut.pos, $cut.pos + after.nodeSize).scrollIntoView()); }
    return true
  }

  return false
}

// :: (EditorState, ?(tr: Transaction), ?EditorView) → bool
// When the selection is empty and at the end of a textblock, select
// the node coming after that textblock, if possible. This is intended
// to be bound to keys like delete, after
// [`joinForward`](#commands.joinForward) and similar deleting
// commands, to provide a fall-back behavior when the schema doesn't
// allow deletion at the selected point.
function selectNodeForward(state, dispatch, view) {
  var ref = state.selection;
  var $cursor = ref.$cursor;
  if (!$cursor || (view ? !view.endOfTextblock("forward", state)
                        : $cursor.parentOffset < $cursor.parent.content.size))
    { return false }

  var $cut = findCutAfter($cursor), node = $cut && $cut.nodeAfter;
  if (!node || !NodeSelection.isSelectable(node)) { return false }
  if (dispatch)
    { dispatch(state.tr.setSelection(NodeSelection.create(state.doc, $cut.pos)).scrollIntoView()); }
  return true
}

function findCutAfter($pos) {
  if (!$pos.parent.type.spec.isolating) { for (var i = $pos.depth - 1; i >= 0; i--) {
    var parent = $pos.node(i);
    if ($pos.index(i) + 1 < parent.childCount) { return $pos.doc.resolve($pos.after(i + 1)) }
    if (parent.type.spec.isolating) { break }
  } }
  return null
}

// :: (EditorState, ?(tr: Transaction)) → bool
// If the selection is in a node whose type has a truthy
// [`code`](#model.NodeSpec.code) property in its spec, replace the
// selection with a newline character.
function newlineInCode(state, dispatch) {
  var ref = state.selection;
  var $head = ref.$head;
  var $anchor = ref.$anchor;
  if (!$head.parent.type.spec.code || !$head.sameParent($anchor)) { return false }
  if (dispatch) { dispatch(state.tr.insertText("\n").scrollIntoView()); }
  return true
}

function defaultBlockAt(match) {
  for (var i = 0; i < match.edgeCount; i++) {
    var ref = match.edge(i);
    var type = ref.type;
    if (type.isTextblock && !type.hasRequiredAttrs()) { return type }
  }
  return null
}

// :: (EditorState, ?(tr: Transaction)) → bool
// When the selection is in a node with a truthy
// [`code`](#model.NodeSpec.code) property in its spec, create a
// default block after the code block, and move the cursor there.
function exitCode(state, dispatch) {
  var ref = state.selection;
  var $head = ref.$head;
  var $anchor = ref.$anchor;
  if (!$head.parent.type.spec.code || !$head.sameParent($anchor)) { return false }
  var above = $head.node(-1), after = $head.indexAfter(-1), type = defaultBlockAt(above.contentMatchAt(after));
  if (!above.canReplaceWith(after, after, type)) { return false }
  if (dispatch) {
    var pos = $head.after(), tr = state.tr.replaceWith(pos, pos, type.createAndFill());
    tr.setSelection(Selection.near(tr.doc.resolve(pos), 1));
    dispatch(tr.scrollIntoView());
  }
  return true
}

// :: (EditorState, ?(tr: Transaction)) → bool
// If a block node is selected, create an empty paragraph before (if
// it is its parent's first child) or after it.
function createParagraphNear(state, dispatch) {
  var ref = state.selection;
  var $from = ref.$from;
  var $to = ref.$to;
  if ($from.parent.inlineContent || $to.parent.inlineContent) { return false }
  var type = defaultBlockAt($from.parent.contentMatchAt($to.indexAfter()));
  if (!type || !type.isTextblock) { return false }
  if (dispatch) {
    var side = (!$from.parentOffset && $to.index() < $to.parent.childCount ? $from : $to).pos;
    var tr = state.tr.insert(side, type.createAndFill());
    tr.setSelection(TextSelection.create(tr.doc, side + 1));
    dispatch(tr.scrollIntoView());
  }
  return true
}

// :: (EditorState, ?(tr: Transaction)) → bool
// If the cursor is in an empty textblock that can be lifted, lift the
// block.
function liftEmptyBlock(state, dispatch) {
  var ref = state.selection;
  var $cursor = ref.$cursor;
  if (!$cursor || $cursor.parent.content.size) { return false }
  if ($cursor.depth > 1 && $cursor.after() != $cursor.end(-1)) {
    var before = $cursor.before();
    if (canSplit(state.doc, before)) {
      if (dispatch) { dispatch(state.tr.split(before).scrollIntoView()); }
      return true
    }
  }
  var range = $cursor.blockRange(), target = range && liftTarget(range);
  if (target == null) { return false }
  if (dispatch) { dispatch(state.tr.lift(range, target).scrollIntoView()); }
  return true
}

// :: (EditorState, ?(tr: Transaction)) → bool
// Split the parent block of the selection. If the selection is a text
// selection, also delete its content.
function splitBlock(state, dispatch) {
  var ref = state.selection;
  var $from = ref.$from;
  var $to = ref.$to;
  if (state.selection instanceof NodeSelection && state.selection.node.isBlock) {
    if (!$from.parentOffset || !canSplit(state.doc, $from.pos)) { return false }
    if (dispatch) { dispatch(state.tr.split($from.pos).scrollIntoView()); }
    return true
  }

  if (!$from.parent.isBlock) { return false }

  if (dispatch) {
    var atEnd = $to.parentOffset == $to.parent.content.size;
    var tr = state.tr;
    if (state.selection instanceof TextSelection) { tr.deleteSelection(); }
    var deflt = $from.depth == 0 ? null : defaultBlockAt($from.node(-1).contentMatchAt($from.indexAfter(-1)));
    var types = atEnd && deflt ? [{type: deflt}] : null;
    var can = canSplit(tr.doc, tr.mapping.map($from.pos), 1, types);
    if (!types && !can && canSplit(tr.doc, tr.mapping.map($from.pos), 1, deflt && [{type: deflt}])) {
      types = [{type: deflt}];
      can = true;
    }
    if (can) {
      tr.split(tr.mapping.map($from.pos), 1, types);
      if (!atEnd && !$from.parentOffset && $from.parent.type != deflt &&
          $from.node(-1).canReplace($from.index(-1), $from.indexAfter(-1), Fragment.from(deflt.create(), $from.parent)))
        { tr.setNodeMarkup(tr.mapping.map($from.before()), deflt); }
    }
    dispatch(tr.scrollIntoView());
  }
  return true
}

// :: (EditorState, ?(tr: Transaction)) → bool
// Select the whole document.
function selectAll(state, dispatch) {
  if (dispatch) { dispatch(state.tr.setSelection(new AllSelection(state.doc))); }
  return true
}

function joinMaybeClear(state, $pos, dispatch) {
  var before = $pos.nodeBefore, after = $pos.nodeAfter, index = $pos.index();
  if (!before || !after || !before.type.compatibleContent(after.type)) { return false }
  if (!before.content.size && $pos.parent.canReplace(index - 1, index)) {
    if (dispatch) { dispatch(state.tr.delete($pos.pos - before.nodeSize, $pos.pos).scrollIntoView()); }
    return true
  }
  if (!$pos.parent.canReplace(index, index + 1) || !(after.isTextblock || canJoin(state.doc, $pos.pos)))
    { return false }
  if (dispatch)
    { dispatch(state.tr
             .clearIncompatible($pos.pos, before.type, before.contentMatchAt(before.childCount))
             .join($pos.pos)
             .scrollIntoView()); }
  return true
}

function deleteBarrier(state, $cut, dispatch) {
  var before = $cut.nodeBefore, after = $cut.nodeAfter, conn, match;
  if (before.type.spec.isolating || after.type.spec.isolating) { return false }
  if (joinMaybeClear(state, $cut, dispatch)) { return true }

  if ($cut.parent.canReplace($cut.index(), $cut.index() + 1) &&
      (conn = (match = before.contentMatchAt(before.childCount)).findWrapping(after.type)) &&
      match.matchType(conn[0] || after.type).validEnd) {
    if (dispatch) {
      var end = $cut.pos + after.nodeSize, wrap = Fragment.empty;
      for (var i = conn.length - 1; i >= 0; i--)
        { wrap = Fragment.from(conn[i].create(null, wrap)); }
      wrap = Fragment.from(before.copy(wrap));
      var tr = state.tr.step(new ReplaceAroundStep($cut.pos - 1, end, $cut.pos, end, new Slice(wrap, 1, 0), conn.length, true));
      var joinAt = end + 2 * conn.length;
      if (canJoin(tr.doc, joinAt)) { tr.join(joinAt); }
      dispatch(tr.scrollIntoView());
    }
    return true
  }

  var selAfter = Selection.findFrom($cut, 1);
  var range = selAfter && selAfter.$from.blockRange(selAfter.$to), target = range && liftTarget(range);
  if (target != null && target >= $cut.depth) {
    if (dispatch) { dispatch(state.tr.lift(range, target).scrollIntoView()); }
    return true
  }

  return false
}

// :: (...[(EditorState, ?(tr: Transaction), ?EditorView) → bool]) → (EditorState, ?(tr: Transaction), ?EditorView) → bool
// Combine a number of command functions into a single function (which
// calls them one by one until one returns true).
function chainCommands() {
  var commands = [], len = arguments.length;
  while ( len-- ) commands[ len ] = arguments[ len ];

  return function(state, dispatch, view) {
    for (var i = 0; i < commands.length; i++)
      { if (commands[i](state, dispatch, view)) { return true } }
    return false
  }
}

var backspace = chainCommands(deleteSelection, joinBackward, selectNodeBackward);
var del = chainCommands(deleteSelection, joinForward, selectNodeForward);

// :: Object
// A basic keymap containing bindings not specific to any schema.
// Binds the following keys (when multiple commands are listed, they
// are chained with [`chainCommands`](#commands.chainCommands)):
//
// * **Enter** to `newlineInCode`, `createParagraphNear`, `liftEmptyBlock`, `splitBlock`
// * **Mod-Enter** to `exitCode`
// * **Backspace** and **Mod-Backspace** to `deleteSelection`, `joinBackward`, `selectNodeBackward`
// * **Delete** and **Mod-Delete** to `deleteSelection`, `joinForward`, `selectNodeForward`
// * **Mod-Delete** to `deleteSelection`, `joinForward`, `selectNodeForward`
// * **Mod-a** to `selectAll`
var pcBaseKeymap = {
  "Enter": chainCommands(newlineInCode, createParagraphNear, liftEmptyBlock, splitBlock),
  "Mod-Enter": exitCode,
  "Backspace": backspace,
  "Mod-Backspace": backspace,
  "Delete": del,
  "Mod-Delete": del,
  "Mod-a": selectAll
};

// :: Object
// A copy of `pcBaseKeymap` that also binds **Ctrl-h** like Backspace,
// **Ctrl-d** like Delete, **Alt-Backspace** like Ctrl-Backspace, and
// **Ctrl-Alt-Backspace**, **Alt-Delete**, and **Alt-d** like
// Ctrl-Delete.
var macBaseKeymap = {
  "Ctrl-h": pcBaseKeymap["Backspace"],
  "Alt-Backspace": pcBaseKeymap["Mod-Backspace"],
  "Ctrl-d": pcBaseKeymap["Delete"],
  "Ctrl-Alt-Backspace": pcBaseKeymap["Mod-Delete"],
  "Alt-Delete": pcBaseKeymap["Mod-Delete"],
  "Alt-d": pcBaseKeymap["Mod-Delete"]
};
for (var key$1 in pcBaseKeymap) { macBaseKeymap[key$1] = pcBaseKeymap[key$1]; }

// declare global: os, navigator
var mac = typeof navigator != "undefined" ? /Mac/.test(navigator.platform)
          : typeof os != "undefined" ? os.platform() == "darwin" : false;

var RemoveIframeCommandButton =
/** @class */
function (_super) {
  __extends(RemoveIframeCommandButton, _super);

  function RemoveIframeCommandButton() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  RemoveIframeCommandButton.prototype.removeImage = function () {
    var _a = this.view,
        state = _a.state,
        dispatch = _a.dispatch;
    deleteSelection(state, dispatch);
  };

  __decorate([Prop({
    type: Object,
    required: true
  })], RemoveIframeCommandButton.prototype, "view", void 0);

  RemoveIframeCommandButton = __decorate([Component({
    components: {
      CommandButton: __vue_component__$2
    }
  })], RemoveIframeCommandButton);
  return RemoveIframeCommandButton;
}(mixins(i18nMixin));

/* script */
const __vue_script__$d = RemoveIframeCommandButton;

/* template */
var __vue_render__$c = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('command-button',{attrs:{"command":_vm.removeImage,"tooltip":_vm.t('editor.extensions.NewIframe.buttons.remove_page.tooltip'),"icon":"regular/trash-alt"}})};
var __vue_staticRenderFns__$c = [];

  /* style */
  const __vue_inject_styles__$d = undefined;
  /* scoped */
  const __vue_scope_id__$d = undefined;
  /* module identifier */
  const __vue_module_identifier__$d = undefined;
  /* functional template */
  const __vue_is_functional_template__$d = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$d = normalizeComponent(
    { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
    __vue_inject_styles__$d,
    __vue_script__$d,
    __vue_scope_id__$d,
    __vue_is_functional_template__$d,
    __vue_module_identifier__$d,
    false,
    undefined,
    undefined,
    undefined
  );

var ImageBubbleMenu =
/** @class */
function (_super) {
  __extends(ImageBubbleMenu, _super);

  function ImageBubbleMenu() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  __decorate([Prop({
    type: Node$1,
    required: true
  })], ImageBubbleMenu.prototype, "node", void 0);

  __decorate([Prop({
    type: Object,
    required: true
  })], ImageBubbleMenu.prototype, "view", void 0);

  __decorate([Prop({
    type: Function,
    required: true
  })], ImageBubbleMenu.prototype, "updateAttrs", void 0);

  ImageBubbleMenu = __decorate([Component({
    components: {
      IframeDisplayCommandButton: __vue_component__$b,
      EditIframeCommandButton: __vue_component__$c,
      RemoveIframeCommandButton: __vue_component__$d
    }
  })], ImageBubbleMenu);
  return ImageBubbleMenu;
}(Vue);

/* script */
const __vue_script__$e = ImageBubbleMenu;

/* template */
var __vue_render__$d = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"image-bubble-menu"},[_c('iframe-display-command-button',{attrs:{"node":_vm.node,"update-attrs":_vm.updateAttrs}}),_vm._v(" "),_c('edit-iframe-command-button',{attrs:{"node":_vm.node,"update-attrs":_vm.updateAttrs}}),_vm._v(" "),_c('remove-iframe-command-button',{attrs:{"view":_vm.view}})],1)};
var __vue_staticRenderFns__$d = [];

  /* style */
  const __vue_inject_styles__$e = undefined;
  /* scoped */
  const __vue_scope_id__$e = undefined;
  /* module identifier */
  const __vue_module_identifier__$e = undefined;
  /* functional template */
  const __vue_is_functional_template__$e = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$e = normalizeComponent(
    { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
    __vue_inject_styles__$e,
    __vue_script__$e,
    __vue_scope_id__$e,
    __vue_is_functional_template__$e,
    __vue_module_identifier__$e,
    false,
    undefined,
    undefined,
    undefined
  );

var _a$5;
var MIN_SIZE = 20;
var MAX_SIZE = 100000;

var ImageView =
/** @class */
function (_super) {
  __extends(ImageView, _super);

  function ImageView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.maxSize = {
      width: MAX_SIZE,
      height: MAX_SIZE
    };
    _this.originalSize = {
      width: 0,
      height: 0
    };
    _this.resizeOb = new ResizeObserver(function () {
      _this.getMaxSize();
    });
    _this.resizeDirections = ["tl"
    /* TOP_LEFT */
    , "tr"
    /* TOP_RIGHT */
    , "bl"
    /* BOTTOM_LEFT */
    , "br"
    /* BOTTOM_RIGHT */
    ];
    _this.resizing = false;
    _this.resizerState = {
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      dir: ''
    };
    return _this;
  }

  Object.defineProperty(ImageView.prototype, "src", {
    get: function get() {
      return this.node.attrs.src;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ImageView.prototype, "width", {
    get: function get() {
      return this.node.attrs.width;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ImageView.prototype, "height", {
    get: function get() {
      return this.node.attrs.height;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ImageView.prototype, "display", {
    get: function get() {
      return this.node.attrs.display;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ImageView.prototype, "imageViewClass", {
    get: function get() {
      return ['image-view', "image-view--" + this.display];
    },
    enumerable: true,
    configurable: true
  });

  ImageView.prototype.created = function () {
    return __awaiter(this, void 0, void 0, function () {
      var result;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , resolveImg(this.src)];

          case 1:
            result = _a.sent();

            if (!result.complete) {
              result.width = MIN_SIZE;
              result.height = MIN_SIZE;
            }

            this.originalSize = {
              width: result.width,
              height: result.height
            };
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  ImageView.prototype.mounted = function () {
    this.resizeOb.observe(this.view.dom);
  };

  ImageView.prototype.beforeDestroy = function () {
    this.resizeOb.disconnect();
  }; // https://github.com/scrumpy/tiptap/issues/361#issuecomment-540299541


  ImageView.prototype.selectImage = function () {
    var state = this.view.state;
    var tr = state.tr;
    var selection = NodeSelection.create(state.doc, this.getPos());
    tr = tr.setSelection(selection);
    this.view.dispatch(tr);
  };
  /* invoked when window or editor resize */


  ImageView.prototype.getMaxSize = function () {
    var width = getComputedStyle(this.view.dom).width;
    this.maxSize.width = parseInt(width, 10);
  };
  /* on resizer handler mousedown
   * record the position where the event is triggered and resize direction
   * calculate the initial width and height of the image
   */


  ImageView.prototype.onMouseDown = function (e, dir) {
    e.preventDefault();
    e.stopPropagation();
    this.resizerState.x = e.clientX;
    this.resizerState.y = e.clientY;
    var originalWidth = this.originalSize.width;
    var originalHeight = this.originalSize.height;
    var aspectRatio = originalWidth / originalHeight;
    var _a = this.node.attrs,
        width = _a.width,
        height = _a.height;
    var maxWidth = this.maxSize.width;

    if (width && !height) {
      width = width > maxWidth ? maxWidth : width;
      height = Math.round(width / aspectRatio);
    } else if (height && !width) {
      width = Math.round(height * aspectRatio);
      width = width > maxWidth ? maxWidth : width;
    } else if (!width && !height) {
      width = originalWidth > maxWidth ? maxWidth : originalWidth;
      height = Math.round(width / aspectRatio);
    } else {
      width = width > maxWidth ? maxWidth : width;
    }

    this.resizerState.w = width;
    this.resizerState.h = height;
    this.resizerState.dir = dir;
    this.resizing = true;
    this.onEvents();
  };

  ImageView.prototype.onMouseMove = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (!this.resizing) return;
    var _a = this.resizerState,
        x = _a.x,
        y = _a.y,
        w = _a.w,
        h = _a.h,
        dir = _a.dir;
    var dx = (e.clientX - x) * (/l/.test(dir) ? -1 : 1);
    var dy = (e.clientY - y) * (/t/.test(dir) ? -1 : 1);
    this.updateAttrs({
      width: clamp(w + dx, MIN_SIZE, this.maxSize.width),
      height: Math.max(h + dy, MIN_SIZE)
    });
  };

  ImageView.prototype.onMouseUp = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (!this.resizing) return;
    this.resizing = false;
    this.resizerState = {
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      dir: ''
    };
    this.offEvents();
    this.selectImage();
  };

  ImageView.prototype.onEvents = function () {
    document.addEventListener('mousemove', this.onMouseMove, true);
    document.addEventListener('mouseup', this.onMouseUp, true);
  };

  ImageView.prototype.offEvents = function () {
    document.removeEventListener('mousemove', this.onMouseMove, true);
    document.removeEventListener('mouseup', this.onMouseUp, true);
  };

  __decorate([Prop({
    type: Node$1,
    required: true
  })], ImageView.prototype, "node", void 0);

  __decorate([Prop({
    // TODO: EditorView type check failed
    // issue: https://github.com/Leecason/element-tiptap/issues/21#issuecomment-605615966
    type: Object,
    required: true
  })], ImageView.prototype, "view", void 0);

  __decorate([Prop({
    type: Function,
    required: true
  })], ImageView.prototype, "getPos", void 0);

  __decorate([Prop({
    type: Function,
    required: true
  })], ImageView.prototype, "updateAttrs", void 0);

  __decorate([Prop({
    type: Boolean,
    required: true
  })], ImageView.prototype, "selected", void 0);

  ImageView = __decorate([Component({
    components: (_a$5 = {}, _a$5[_Popover.name] = _Popover, _a$5.ImageBubbleMenu = __vue_component__$e, _a$5)
  })], ImageView);
  return ImageView;
}(Vue);

/* script */
const __vue_script__$f = ImageView;

/* template */
var __vue_render__$e = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{class:_vm.imageViewClass},[_c('div',{staticClass:"image-view__body",class:{
      'image-view__body--focused': _vm.selected,
      'image-view__body--resizing': _vm.resizing,
    }},[_c('img',{staticClass:"image-view__body__image",attrs:{"src":_vm.src,"title":_vm.node.attrs.title,"alt":_vm.node.attrs.alt,"width":_vm.width,"height":_vm.height},on:{"click":_vm.selectImage}}),_vm._v(" "),(_vm.view.editable)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.selected || _vm.resizing),expression:"selected || resizing"}],staticClass:"image-resizer"},_vm._l((_vm.resizeDirections),function(direction){return _c('span',{key:direction,staticClass:"image-resizer__handler",class:("image-resizer__handler--" + direction),on:{"mousedown":function($event){return _vm.onMouseDown($event, direction)}}})}),0):_vm._e(),_vm._v(" "),(_vm.view.editable)?_c('el-popover',{directives:[{name:"show",rawName:"v-show",value:(_vm.selected || _vm.resizing),expression:"selected || resizing"}],attrs:{"value":_vm.selected,"visible-arrow":false,"placement":"top","trigger":"manual","popper-class":"el-tiptap-image-popper"}},[_c('image-bubble-menu',{attrs:{"node":_vm.node,"view":_vm.view,"update-attrs":_vm.updateAttrs}}),_vm._v(" "),_c('div',{staticClass:"image-view__body__placeholder",attrs:{"slot":"reference"},slot:"reference"})],1):_vm._e()],1)])};
var __vue_staticRenderFns__$e = [];

  /* style */
  const __vue_inject_styles__$f = undefined;
  /* scoped */
  const __vue_scope_id__$f = undefined;
  /* module identifier */
  const __vue_module_identifier__$f = undefined;
  /* functional template */
  const __vue_is_functional_template__$f = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$f = normalizeComponent(
    { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
    __vue_inject_styles__$f,
    __vue_script__$f,
    __vue_scope_id__$f,
    __vue_is_functional_template__$f,
    __vue_module_identifier__$f,
    false,
    undefined,
    undefined,
    undefined
  );

var IMAGE_URL_REGEX = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/; // @ts-ignore

function getAttrs$4(dom) {
  var _a = dom.style,
      cssFloat = _a.cssFloat,
      display = _a.display;
  var _b = dom.style,
      width = _b.width,
      height = _b.height;
  var dp = dom.getAttribute('data-display') || dom.getAttribute('display');

  if (dp) {
    dp = /(inline|block|left|right)/.test(dp) ? dp : "inline"
    /* INLINE */
    ;
  } else if (cssFloat === 'left' && !display) {
    dp = "left"
    /* FLOAT_LEFT */
    ;
  } else if (cssFloat === 'right' && !display) {
    dp = "right"
    /* FLOAT_RIGHT */
    ;
  } else if (!cssFloat && display === 'block') {
    dp = "block"
    /* BREAK_TEXT */
    ;
  } else {
    dp = "inline"
    /* INLINE */
    ;
  }

  width = width || dom.getAttribute('width') || null;
  height = height || dom.getAttribute('height') || null;
  return {
    src: dom.getAttribute('src') || '',
    title: dom.getAttribute('title') || '',
    alt: dom.getAttribute('alt') || '',
    width: width == null ? null : parseInt(width, 10),
    height: height == null ? null : parseInt(height, 10),
    display: dp
  };
}

function toDOM$4(node) {
  var _a = node.attrs,
      src = _a.src,
      alt = _a.alt,
      title = _a.title,
      width = _a.width,
      height = _a.height,
      display = _a.display;
  var attrs = {
    src: src,
    alt: alt,
    title: title,
    width: width,
    height: height
  };
  attrs['data-display'] = display;
  return ['image', attrs];
}

var Image$1 =
/** @class */
function (_super) {
  __extends(Image, _super);

  function Image() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(Image.prototype, "defaultOptions", {
    get: function get() {
      return {
        urlPattern: IMAGE_URL_REGEX,
        uploadRequest: null
      };
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Image.prototype, "schema", {
    get: function get() {
      return {
        inline: true,
        attrs: {
          src: {
            default: ''
          },
          alt: {
            default: ''
          },
          title: {
            default: ''
          },
          width: {
            default: null
          },
          height: {
            default: null
          },
          display: {
            default: "inline"
            /* INLINE */

          }
        },
        group: 'inline',
        draggable: true,
        parseDOM: [{
          tag: 'img[src]',
          getAttrs: getAttrs$4
        }],
        toDOM: toDOM$4
      };
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Image.prototype, "view", {
    get: function get() {
      return __vue_component__$f;
    },
    enumerable: true,
    configurable: true
  });

  Image.prototype.menuBtnView = function (editorContext) {
    return {
      component: __vue_component__$a,
      componentProps: {
        editorContext: editorContext
      }
    };
  };

  return Image;
}(Image$3);

__vue_component__$1.register({
  'check-square': {
    width: 448,
    height: 512,
    paths: [
      {
        d: 'M400 480h-352c-26.5 0-48-21.5-48-48v-352c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zM195.3 381.9l184-184c6.2-6.2 6.2-16.4 0-22.6l-22.6-22.6c-6.2-6.2-16.4-6.2-22.6 0l-150.1 150.1-70.1-70.1c-6.2-6.2-16.4-6.2-22.6 0l-22.6 22.6c-6.2 6.2-6.2 16.4 0 22.6l104 104c6.2 6.3 16.4 6.3 22.6 0z'
      }
    ]
  }
});

__vue_component__$1.register({
  'regular/square': {
    width: 448,
    height: 512,
    paths: [
      {
        d: 'M400 32c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48h-352c-26.5 0-48-21.5-48-48v-352c0-26.5 21.5-48 48-48h352zM394 432c3.3 0 6-2.7 6-6v-340c0-3.3-2.7-6-6-6h-340c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340z'
      }
    ]
  }
});

var TodoItemView =
/** @class */
function (_super) {
  __extends(TodoItemView, _super);

  function TodoItemView() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(TodoItemView.prototype, "done", {
    get: function get() {
      return this.node.attrs.done;
    },
    set: function set(done) {
      this.updateAttrs({
        done: done
      });
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TodoItemView.prototype, "todoItemStyle", {
    get: function get() {
      return {
        lineHeight: transformLineHeightToCSS(this.node.attrs.lineHeight)
      };
    },
    enumerable: true,
    configurable: true
  });

  TodoItemView.prototype.toggle = function () {
    this.done = !this.done;
  };

  __decorate([Prop({
    type: Node$1,
    required: true
  })], TodoItemView.prototype, "node", void 0);

  __decorate([Prop({
    type: Object,
    required: true
  })], TodoItemView.prototype, "view", void 0);

  __decorate([Prop({
    type: Function,
    required: true
  })], TodoItemView.prototype, "updateAttrs", void 0);

  TodoItemView = __decorate([Component({
    components: {
      'v-icon': __vue_component__$1
    }
  })], TodoItemView);
  return TodoItemView;
}(Vue);

/* script */
const __vue_script__$g = TodoItemView;

/* template */
var __vue_render__$f = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"todo-item",class:{ 'todo-item--done': _vm.done },style:(_vm.todoItemStyle),attrs:{"data-type":_vm.node.type.name,"data-done":_vm.done.toString(),"data-text-align":_vm.node.attrs.textAlign,"data-drag-handle":""}},[_c('span',{staticClass:"todo-checkbox",attrs:{"contenteditable":"false"},on:{"click":function($event){$event.stopPropagation();return _vm.toggle($event)}}},[_c('v-icon',{attrs:{"name":_vm.done ? 'check-square' : 'regular/square'}})],1),_vm._v(" "),_c('div',{ref:"content",staticClass:"todo-content",attrs:{"contenteditable":_vm.view.editable.toString()}})])};
var __vue_staticRenderFns__$f = [];

  /* style */
  const __vue_inject_styles__$g = undefined;
  /* scoped */
  const __vue_scope_id__$g = undefined;
  /* module identifier */
  const __vue_module_identifier__$g = undefined;
  /* functional template */
  const __vue_is_functional_template__$g = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$g = normalizeComponent(
    { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f },
    __vue_inject_styles__$g,
    __vue_script__$g,
    __vue_scope_id__$g,
    __vue_is_functional_template__$g,
    __vue_module_identifier__$g,
    false,
    undefined,
    undefined,
    undefined
  );

function getAttrs$5(dom) {
  var _a = dom.style,
      textAlign = _a.textAlign,
      lineHeight = _a.lineHeight;
  var align = dom.getAttribute('data-text-align') || textAlign || '';
  align = ALIGN_PATTERN.test(align) ? align : '';
  lineHeight = lineHeight && lineHeight !== transformLineHeightToCSS(LINE_HEIGHT_100) ? lineHeight : '';
  return {
    textAlign: align || null,
    lineHeight: lineHeight || null,
    done: dom.getAttribute('data-done') === 'true'
  };
}

function toDOM$5(node) {
  var _a = node.attrs,
      done = _a.done,
      textAlign = _a.textAlign,
      lineHeight = _a.lineHeight;
  var style = '';
  var attrs = {};
  attrs['data-type'] = 'todo_item';
  attrs['data-done'] = done.toString();

  if (textAlign && textAlign !== 'left') {
    attrs['data-text-align'] = textAlign;
  }

  if (lineHeight) {
    var cssLineHeight = transformLineHeightToCSS(lineHeight);
    style += "line-height: " + cssLineHeight + ";";
  }

  style && (attrs.style = style);
  return ['li', attrs, ['span', {
    class: 'todo-checkbox',
    contenteditable: 'false'
  }], ['div', {
    class: 'todo-content'
  }, 0]];
}

var TodoItem =
/** @class */
function (_super) {
  __extends(TodoItem, _super);

  function TodoItem() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(TodoItem.prototype, "schema", {
    // @ts-ignore
    get: function get() {
      return {
        attrs: {
          done: {
            default: false
          },
          textAlign: {
            default: null
          },
          lineHeight: {
            default: null
          }
        },
        draggable: true,
        content: this.options.nested ? '(paragraph|todo_list)+' : 'paragraph+',
        parseDOM: [{
          priority: 51,
          tag: "[data-type=\"" + this.name + "\"]",
          getAttrs: getAttrs$5
        }],
        toDOM: toDOM$5
      };
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TodoItem.prototype, "view", {
    get: function get() {
      return __vue_component__$g;
    },
    enumerable: true,
    configurable: true
  });
  return TodoItem;
}(TodoItem$1);

var TodoList =
/** @class */
function (_super) {
  __extends(TodoList, _super);

  function TodoList() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(TodoList.prototype, "schema", {
    get: function get() {
      var _this = this;

      return {
        group: 'block',
        content: 'todo_item+',
        parseDOM: [{
          priority: 51,
          tag: "[data-type=\"" + this.name + "\"]",
          getAttrs: function getAttrs() {
            return {
              'data-type': _this.name
            };
          }
        }],
        toDOM: function toDOM() {
          var attrs = {};
          attrs['data-type'] = _this.name;
          return ['ul', attrs, 0];
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  TodoList.prototype.menuBtnView = function (_a) {
    var isActive = _a.isActive,
        commands = _a.commands;
    return {
      component: __vue_component__$2,
      componentProps: {
        isActive: isActive.todo_list(),
        command: commands.todo_list,
        icon: 'tasks',
        tooltip: t('editor.extensions.TodoList.tooltip')
      }
    };
  };

  return TodoList;
}(TodoList$1);

function isTableActive(state) {
  var selection = state.selection,
      doc = state.doc;
  var from = selection.from,
      to = selection.to;
  var keepLooking = true;
  var active = false;
  doc.nodesBetween(from, to, function (node) {
    var name = node.type.name;

    if (keepLooking && (name === 'table' || name === 'table_row' || name === 'table_column' || name === 'table_cell')) {
      keepLooking = false;
      active = true;
    }

    return keepLooking;
  });
  return active;
}
function enableMergeCells(state) {
  return isTableActive(state) && mergeCells(state);
}
function enableSplitCell(state) {
  return isTableActive(state) && splitCell(state);
}

var _a$6;
var INIT_GRID_SIZE = 5;
var MAX_GRID_SIZE = 10;
var DEFAULT_SELECTED_GRID_SIZE = 2;

var CreateTablePopover =
/** @class */
function (_super) {
  __extends(CreateTablePopover, _super);

  function CreateTablePopover() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.popoverVisible = false;
    _this.tableGridSize = {
      row: INIT_GRID_SIZE,
      col: INIT_GRID_SIZE
    };
    _this.selectedTableGridSize = {
      row: DEFAULT_SELECTED_GRID_SIZE,
      col: DEFAULT_SELECTED_GRID_SIZE
    };
    return _this;
  }

  CreateTablePopover.prototype.selectTableGridSize = function (row, col) {
    if (row === this.tableGridSize.row) {
      this.tableGridSize.row = Math.min(row + 1, MAX_GRID_SIZE);
    }

    if (col === this.tableGridSize.col) {
      this.tableGridSize.col = Math.min(col + 1, MAX_GRID_SIZE);
    }

    this.selectedTableGridSize.row = row;
    this.selectedTableGridSize.col = col;
  };

  CreateTablePopover.prototype.onMouseDown = function (row, col) {
    this.popoverVisible = false;
    return {
      row: row,
      col: col
    };
  };

  CreateTablePopover.prototype.resetTableGridSize = function () {
    this.tableGridSize = {
      row: INIT_GRID_SIZE,
      col: INIT_GRID_SIZE
    };
    this.selectedTableGridSize = {
      row: DEFAULT_SELECTED_GRID_SIZE,
      col: DEFAULT_SELECTED_GRID_SIZE
    };
  };

  __decorate([Emit('createTable')], CreateTablePopover.prototype, "onMouseDown", null);

  CreateTablePopover = __decorate([Component({
    components: (_a$6 = {}, _a$6[_Popover.name] = _Popover, _a$6)
  })], CreateTablePopover);
  return CreateTablePopover;
}(mixins(i18nMixin));

/* script */
const __vue_script__$h = CreateTablePopover;

/* template */
var __vue_render__$g = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-popover',{attrs:{"placement":"right","trigger":"hover","popper-class":"el-tiptap-popper"},on:{"after-leave":_vm.resetTableGridSize},model:{value:(_vm.popoverVisible),callback:function ($$v) {_vm.popoverVisible=$$v;},expression:"popoverVisible"}},[_c('div',{staticClass:"table-grid-size-editor"},[_c('div',{staticClass:"table-grid-size-editor__body"},_vm._l((_vm.tableGridSize.row),function(row){return _c('div',{key:'r' + row},_vm._l((_vm.tableGridSize.col),function(col){return _c('div',{key:'c' + col,staticClass:"table-grid-size-editor__cell",class:{
            'table-grid-size-editor__cell--selected': col <= _vm.selectedTableGridSize.col && row <= _vm.selectedTableGridSize.row
          },on:{"mouseover":function($event){return _vm.selectTableGridSize(row, col)},"mousedown":function($event){return _vm.onMouseDown(row, col)}}},[_c('div',{staticClass:"table-grid-size-editor__cell__inner"})])}),0)}),0),_vm._v(" "),_c('div',{staticClass:"table-grid-size-editor__footer"},[_vm._v("\n      "+_vm._s(_vm.selectedTableGridSize.row)+" X "+_vm._s(_vm.selectedTableGridSize.col)+"\n    ")])]),_vm._v(" "),_c('div',{attrs:{"slot":"reference"},on:{"mouseover":function($event){_vm.popoverVisible = true;}},slot:"reference"},[_c('span',[_vm._v(_vm._s(_vm.t('editor.extensions.Table.buttons.insert_table')))])])])};
var __vue_staticRenderFns__$g = [];

  /* style */
  const __vue_inject_styles__$h = undefined;
  /* scoped */
  const __vue_scope_id__$h = undefined;
  /* module identifier */
  const __vue_module_identifier__$h = undefined;
  /* functional template */
  const __vue_is_functional_template__$h = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$h = normalizeComponent(
    { render: __vue_render__$g, staticRenderFns: __vue_staticRenderFns__$g },
    __vue_inject_styles__$h,
    __vue_script__$h,
    __vue_scope_id__$h,
    __vue_is_functional_template__$h,
    __vue_module_identifier__$h,
    false,
    undefined,
    undefined,
    undefined
  );

var _a$7;

var TablePopover =
/** @class */
function (_super) {
  __extends(TablePopover, _super);

  function TablePopover() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.popoverVisible = false;
    return _this;
  }

  Object.defineProperty(TablePopover.prototype, "editor", {
    get: function get() {
      return this.editorContext.editor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TablePopover.prototype, "isTableActive", {
    get: function get() {
      return isTableActive(this.editor.state);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TablePopover.prototype, "enableMergeCells", {
    get: function get() {
      return enableMergeCells(this.editor.state);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TablePopover.prototype, "enableSplitCell", {
    get: function get() {
      return enableSplitCell(this.editor.state);
    },
    enumerable: true,
    configurable: true
  });

  TablePopover.prototype.hidePopover = function () {
    this.popoverVisible = false;
  };

  TablePopover.prototype.createTable = function (_a) {
    var row = _a.row,
        col = _a.col;
    this.editorContext.commands.createTable({
      rowsCount: row,
      colsCount: col,
      withHeaderRow: true
    });
    this.hidePopover();
  };

  __decorate([Prop({
    type: Object,
    required: true
  })], TablePopover.prototype, "editorContext", void 0);

  TablePopover = __decorate([Component({
    components: (_a$7 = {}, _a$7[_Popover.name] = _Popover, _a$7.CommandButton = __vue_component__$2, _a$7.CreateTablePopover = __vue_component__$h, _a$7)
  })], TablePopover);
  return TablePopover;
}(mixins(i18nMixin));

/* script */
const __vue_script__$i = TablePopover;

/* template */
var __vue_render__$h = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-popover',{attrs:{"placement":"bottom","trigger":"click","popper-class":"el-tiptap-popper"},model:{value:(_vm.popoverVisible),callback:function ($$v) {_vm.popoverVisible=$$v;},expression:"popoverVisible"}},[_c('div',{staticClass:"el-tiptap-popper__menu"},[_c('div',{staticClass:"el-tiptap-popper__menu__item"},[_c('create-table-popover',{on:{"createTable":_vm.createTable}})],1),_vm._v(" "),_c('div',{staticClass:"el-tiptap-popper__menu__item__separator"}),_vm._v(" "),_c('div',{staticClass:"el-tiptap-popper__menu__item",class:{ 'el-tiptap-popper__menu__item--disabled': !_vm.isTableActive },on:{"mousedown":_vm.hidePopover,"click":_vm.editorContext.commands.addColumnBefore}},[_c('span',[_vm._v(_vm._s(_vm.t('editor.extensions.Table.buttons.add_column_before')))])]),_vm._v(" "),_c('div',{staticClass:"el-tiptap-popper__menu__item",class:{ 'el-tiptap-popper__menu__item--disabled': !_vm.isTableActive },on:{"mousedown":_vm.hidePopover,"click":_vm.editorContext.commands.addColumnAfter}},[_c('span',[_vm._v(_vm._s(_vm.t('editor.extensions.Table.buttons.add_column_after')))])]),_vm._v(" "),_c('div',{staticClass:"el-tiptap-popper__menu__item",class:{ 'el-tiptap-popper__menu__item--disabled': !_vm.isTableActive },on:{"mousedown":_vm.hidePopover,"click":_vm.editorContext.commands.deleteColumn}},[_c('span',[_vm._v(_vm._s(_vm.t('editor.extensions.Table.buttons.delete_column')))])]),_vm._v(" "),_c('div',{staticClass:"el-tiptap-popper__menu__item__separator"}),_vm._v(" "),_c('div',{staticClass:"el-tiptap-popper__menu__item",class:{ 'el-tiptap-popper__menu__item--disabled': !_vm.isTableActive },on:{"mousedown":_vm.hidePopover,"click":_vm.editorContext.commands.addRowBefore}},[_c('span',[_vm._v(_vm._s(_vm.t('editor.extensions.Table.buttons.add_row_before')))])]),_vm._v(" "),_c('div',{staticClass:"el-tiptap-popper__menu__item",class:{ 'el-tiptap-popper__menu__item--disabled': !_vm.isTableActive },on:{"mousedown":_vm.hidePopover,"click":_vm.editorContext.commands.addRowAfter}},[_c('span',[_vm._v(_vm._s(_vm.t('editor.extensions.Table.buttons.add_row_after')))])]),_vm._v(" "),_c('div',{staticClass:"el-tiptap-popper__menu__item",class:{ 'el-tiptap-popper__menu__item--disabled': !_vm.isTableActive },on:{"mousedown":_vm.hidePopover,"click":_vm.editorContext.commands.deleteRow}},[_c('span',[_vm._v(_vm._s(_vm.t('editor.extensions.Table.buttons.delete_row')))])]),_vm._v(" "),_c('div',{staticClass:"el-tiptap-popper__menu__item__separator"}),_vm._v(" "),_c('div',{staticClass:"el-tiptap-popper__menu__item",class:{ 'el-tiptap-popper__menu__item--disabled': !_vm.enableMergeCells },on:{"mousedown":_vm.hidePopover,"click":_vm.editorContext.commands.mergeCells}},[_c('span',[_vm._v(_vm._s(_vm.t('editor.extensions.Table.buttons.merge_cells')))])]),_vm._v(" "),_c('div',{staticClass:"el-tiptap-popper__menu__item",class:{ 'el-tiptap-popper__menu__item--disabled': !_vm.enableSplitCell },on:{"mousedown":_vm.hidePopover,"click":_vm.editorContext.commands.splitCell}},[_c('span',[_vm._v(_vm._s(_vm.t('editor.extensions.Table.buttons.split_cell')))])]),_vm._v(" "),_c('div',{staticClass:"el-tiptap-popper__menu__item__separator"}),_vm._v(" "),_c('div',{staticClass:"el-tiptap-popper__menu__item",class:{ 'el-tiptap-popper__menu__item--disabled': !_vm.isTableActive },on:{"mousedown":_vm.hidePopover,"click":_vm.editorContext.commands.deleteTable}},[_c('span',[_vm._v(_vm._s(_vm.t('editor.extensions.Table.buttons.delete_table')))])])]),_vm._v(" "),_c('command-button',{attrs:{"slot":"reference","is-active":_vm.isTableActive,"tooltip":_vm.t('editor.extensions.Table.tooltip'),"icon":"table"},slot:"reference"})],1)};
var __vue_staticRenderFns__$h = [];

  /* style */
  const __vue_inject_styles__$i = undefined;
  /* scoped */
  const __vue_scope_id__$i = undefined;
  /* module identifier */
  const __vue_module_identifier__$i = undefined;
  /* functional template */
  const __vue_is_functional_template__$i = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$i = normalizeComponent(
    { render: __vue_render__$h, staticRenderFns: __vue_staticRenderFns__$h },
    __vue_inject_styles__$i,
    __vue_script__$i,
    __vue_scope_id__$i,
    __vue_is_functional_template__$i,
    __vue_module_identifier__$i,
    false,
    undefined,
    undefined,
    undefined
  );

var Table =
/** @class */
function (_super) {
  __extends(Table, _super);

  function Table() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Table.prototype.menuBtnView = function (editorContext) {
    return {
      component: __vue_component__$i,
      componentProps: {
        editorContext: editorContext
      }
    };
  };

  return Table;
}(Table$1);

var IframeCommandButton =
/** @class */
function (_super) {
  __extends(IframeCommandButton, _super);

  function IframeCommandButton() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  IframeCommandButton.prototype.openInsertVideoControl = function () {
    var _this = this;

    _MessageBox.prompt('', this.t('editor.extensions.Iframe.control.title'), {
      confirmButtonText: this.t('editor.extensions.Iframe.control.confirm'),
      cancelButtonText: this.t('editor.extensions.Iframe.control.cancel'),
      inputPlaceholder: this.t('editor.extensions.Iframe.control.placeholder'),
      roundButton: true
    }).then(function (_a) {
      var href = _a.value;

      _this.editorContext.commands.iframe({
        src: href
      });
    }).catch(function () {});
  };

  __decorate([Prop({
    type: Object,
    required: true
  })], IframeCommandButton.prototype, "editorContext", void 0);

  IframeCommandButton = __decorate([Component({
    components: {
      CommandButton: __vue_component__$2
    }
  })], IframeCommandButton);
  return IframeCommandButton;
}(mixins(i18nMixin));

/* script */
const __vue_script__$j = IframeCommandButton;

/* template */
var __vue_render__$i = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('command-button',{attrs:{"command":_vm.openInsertVideoControl,"tooltip":_vm.t('editor.extensions.NewIframe.buttons.insert_page.tooltip'),"icon":"flag"}})};
var __vue_staticRenderFns__$i = [];

  /* style */
  const __vue_inject_styles__$j = undefined;
  /* scoped */
  const __vue_scope_id__$j = undefined;
  /* module identifier */
  const __vue_module_identifier__$j = undefined;
  /* functional template */
  const __vue_is_functional_template__$j = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$j = normalizeComponent(
    { render: __vue_render__$i, staticRenderFns: __vue_staticRenderFns__$i },
    __vue_inject_styles__$j,
    __vue_script__$j,
    __vue_scope_id__$j,
    __vue_is_functional_template__$j,
    __vue_module_identifier__$j,
    false,
    undefined,
    undefined,
    undefined
  );

var Iframe =
/** @class */
function (_super) {
  __extends(Iframe, _super);

  function Iframe() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(Iframe.prototype, "name", {
    get: function get() {
      return 'iframe';
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Iframe.prototype, "schema", {
    // @ts-ignore
    get: function get() {
      return {
        attrs: {
          src: {
            default: null
          }
        },
        group: 'block',
        selectable: false,
        parseDOM: [{
          tag: 'iframe',
          // @ts-ignore
          getAttrs: function getAttrs(dom) {
            return {
              src: dom.getAttribute('src')
            };
          }
        }],
        toDOM: function toDOM(node) {
          return ['iframe', {
            src: node.attrs.src,
            frameborder: 0,
            allowfullscreen: 'true'
          }];
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  Iframe.prototype.commands = function (_a) {
    var type = _a.type;
    return function (attrs) {
      return function (state, dispatch) {
        var selection = state.selection;
        var position = selection.$cursor ? selection.$cursor.pos : selection.$to.pos;
        var node = type.create(attrs);
        var transaction = state.tr.insert(position, node);
        dispatch(transaction);
      };
    };
  };

  Object.defineProperty(Iframe.prototype, "view", {
    get: function get() {
      return {
        props: ['node', 'updateAttrs', 'view'],
        computed: {
          src: {
            get: function get() {
              return this.node.attrs.src;
            },
            set: function set(src) {
              this.updateAttrs({
                src: src
              });
            }
          }
        },
        template: "\n        <div class=\"iframe\">\n          <iframe class=\"iframe__embed\" :src=\"src\"></iframe>\n        </div>\n      "
      };
    },
    enumerable: true,
    configurable: true
  });

  Iframe.prototype.menuBtnView = function (editorContext) {
    return {
      component: __vue_component__$j,
      componentProps: {
        editorContext: editorContext
      }
    };
  };

  return Iframe;
}(Node$2);

var InsertMusicCommandButton =
/** @class */
function (_super) {
  __extends(InsertMusicCommandButton, _super);

  function InsertMusicCommandButton() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  InsertMusicCommandButton.prototype.openInsertMusicControl = function () {
    var _this = this;

    _MessageBox.prompt('', this.t('editor.extensions.Music.control.title'), {
      confirmButtonText: this.t('editor.extensions.Music.control.confirm'),
      cancelButtonText: this.t('editor.extensions.Music.control.cancel'),
      inputPlaceholder: this.t('editor.extensions.Music.control.placeholder'),
      roundButton: true
    }).then(function (_a) {
      var href = _a.value;
      console.log(_this.editorContext.commands);

      _this.editorContext.commands.music({
        src: href
      });
    }).catch(function () {});
  };

  __decorate([Prop({
    type: Object,
    required: true
  })], InsertMusicCommandButton.prototype, "editorContext", void 0);

  InsertMusicCommandButton = __decorate([Component({
    components: {
      CommandButton: __vue_component__$2
    }
  })], InsertMusicCommandButton);
  return InsertMusicCommandButton;
}(mixins(i18nMixin));

/* script */
const __vue_script__$k = InsertMusicCommandButton;

/* template */
var __vue_render__$j = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('command-button',{attrs:{"command":_vm.openInsertMusicControl,"tooltip":_vm.t('editor.extensions.Music.tooltip'),"icon":"music"}})],1)};
var __vue_staticRenderFns__$j = [];

  /* style */
  const __vue_inject_styles__$k = undefined;
  /* scoped */
  const __vue_scope_id__$k = undefined;
  /* module identifier */
  const __vue_module_identifier__$k = undefined;
  /* functional template */
  const __vue_is_functional_template__$k = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$k = normalizeComponent(
    { render: __vue_render__$j, staticRenderFns: __vue_staticRenderFns__$j },
    __vue_inject_styles__$k,
    __vue_script__$k,
    __vue_scope_id__$k,
    __vue_is_functional_template__$k,
    __vue_module_identifier__$k,
    false,
    undefined,
    undefined,
    undefined
  );

var Music =
/** @class */
function (_super) {
  __extends(Music, _super);

  function Music() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(Music.prototype, "name", {
    get: function get() {
      return 'music';
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Music.prototype, "schema", {
    // @ts-ignore
    get: function get() {
      return {
        attrs: {
          src: {
            default: null
          }
        },
        group: 'block',
        selectable: false,
        parseDOM: [{
          tag: 'audio',
          // @ts-ignore
          getAttrs: function getAttrs(dom) {
            return {
              src: dom.getAttribute('src')
            };
          }
        }],
        // @ts-ignore
        toDOM: function toDOM(node) {
          return ['audio', {
            src: node.attrs.src,
            controls: 'controls',
            autoplay: 'autoplay'
          }];
        }
      };
    },
    enumerable: true,
    configurable: true
  }); // @ts-ignore

  Music.prototype.commands = function (_a) {
    var type = _a.type; // @ts-ignore

    return function (attrs) {
      return function (state, dispatch) {
        var selection = state.selection;
        var position = selection.$cursor ? selection.$cursor.pos : selection.$to.pos;
        var node = type.create(attrs);
        var transaction = state.tr.insert(position, node);
        dispatch(transaction);
      };
    };
  };

  Object.defineProperty(Music.prototype, "view", {
    // @ts-ignore
    get: function get() {
      return {
        props: ['node', 'updateAttrs', 'view'],
        computed: {
          src: {
            // @ts-ignore
            get: function get() {
              // @ts-ignore
              return this.node.attrs.src;
            },
            // @ts-ignore
            set: function set(src) {
              // @ts-ignore
              this.updateAttrs({
                src: src
              });
            }
          }
        },
        template: "\n       <div class=\"audio\">\n          <audio class=\"audio_embed\" preload autoplay controls :src=\"src\" stlye=\"min-height:30px;max-height:30px\"></audio>\n        </div>\n      "
      };
    },
    enumerable: true,
    configurable: true
  });

  Music.prototype.menuBtnView = function (editorContext) {
    return {
      component: __vue_component__$k,
      componentProps: {
        editorContext: editorContext
      }
    };
  };

  return Music;
}(Node$2);

var InsertMusicCommandButton$1 =
/** @class */
function (_super) {
  __extends(InsertMusicCommandButton, _super);

  function InsertMusicCommandButton() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  InsertMusicCommandButton.prototype.openInsertMusicControl = function () {
    var _this = this;

    _MessageBox.prompt('', this.t('editor.extensions.Video.control.title'), {
      confirmButtonText: this.t('editor.extensions.Video.control.confirm'),
      cancelButtonText: this.t('editor.extensions.Video.control.cancel'),
      inputPlaceholder: this.t('editor.extensions.Video.control.placeholder'),
      roundButton: true // @ts-ignore

    }) // @ts-ignore
    .then(function (_a) {
      var href = _a.value;

      _this.editorContext.commands.video({
        src: href
      });
    }).catch(function () {});
  };

  __decorate([Prop({
    type: Object,
    required: true
  })], InsertMusicCommandButton.prototype, "editorContext", void 0);

  InsertMusicCommandButton = __decorate([Component({
    components: {
      CommandButton: __vue_component__$2
    }
  })], InsertMusicCommandButton);
  return InsertMusicCommandButton;
}(mixins(i18nMixin));

/* script */
const __vue_script__$l = InsertMusicCommandButton$1;

/* template */
var __vue_render__$k = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('command-button',{attrs:{"command":_vm.openInsertMusicControl,"tooltip":_vm.t('editor.extensions.Video.tooltip'),"icon":"video"}})],1)};
var __vue_staticRenderFns__$k = [];

  /* style */
  const __vue_inject_styles__$l = undefined;
  /* scoped */
  const __vue_scope_id__$l = undefined;
  /* module identifier */
  const __vue_module_identifier__$l = undefined;
  /* functional template */
  const __vue_is_functional_template__$l = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$l = normalizeComponent(
    { render: __vue_render__$k, staticRenderFns: __vue_staticRenderFns__$k },
    __vue_inject_styles__$l,
    __vue_script__$l,
    __vue_scope_id__$l,
    __vue_is_functional_template__$l,
    __vue_module_identifier__$l,
    false,
    undefined,
    undefined,
    undefined
  );

var Music$1 =
/** @class */
function (_super) {
  __extends(Music, _super);

  function Music() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(Music.prototype, "name", {
    get: function get() {
      return 'video';
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Music.prototype, "schema", {
    // @ts-ignore
    get: function get() {
      return {
        attrs: {
          src: {
            default: null
          }
        },
        group: 'block',
        selectable: false,
        parseDOM: [{
          tag: 'video',
          // @ts-ignore
          getAttrs: function getAttrs(dom) {
            return {
              src: dom.getAttribute('src')
            };
          }
        }],
        // @ts-ignore
        toDOM: function toDOM(node) {
          return ['video', {
            src: node.attrs.src,
            controls: 'controls',
            autoplay: 'autoplay'
          }];
        }
      };
    },
    enumerable: true,
    configurable: true
  }); // @ts-ignore

  Music.prototype.commands = function (_a) {
    var type = _a.type; // @ts-ignore

    return function (attrs) {
      return function (state, dispatch) {
        var selection = state.selection;
        var position = selection.$cursor ? selection.$cursor.pos : selection.$to.pos;
        var node = type.create(attrs);
        var transaction = state.tr.insert(position, node);
        dispatch(transaction);
      };
    };
  };

  Object.defineProperty(Music.prototype, "view", {
    // @ts-ignore
    get: function get() {
      return {
        props: ['node', 'updateAttrs', 'view'],
        computed: {
          src: {
            // @ts-ignore
            get: function get() {
              // @ts-ignore
              return this.node.attrs.src;
            },
            // @ts-ignore
            set: function set(src) {
              // @ts-ignore
              this.updateAttrs({
                src: src
              });
            }
          }
        },
        template: "\n       <div class=\"video\" style=\"width: 100%;height:auto;min-height:100px;overflow:hidden;\">\n          <video preload autoplay controls :src=\"src\" stlye=\"min-height:30px;max-height:30px max-width:1200px;width:50vw\"></video>\n        </div>\n      "
      };
    },
    enumerable: true,
    configurable: true
  });

  Music.prototype.menuBtnView = function (editorContext) {
    return {
      component: __vue_component__$l,
      componentProps: {
        editorContext: editorContext
      }
    };
  };

  return Music;
}(Node$2);

var IframeCommandButton$1 =
/** @class */
function (_super) {
  __extends(IframeCommandButton, _super);

  function IframeCommandButton() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(IframeCommandButton.prototype, "imageNodeOptions", {
    get: function get() {
      return this.editorContext.editor.extensions.options.image;
    },
    enumerable: true,
    configurable: true
  });

  IframeCommandButton.prototype.openUrlPrompt = function () {
    var _this = this;

    _MessageBox.prompt('', this.t('editor.extensions.NewIframe.control.insert_by_url.title'), {
      confirmButtonText: this.t('editor.extensions.NewIframe.control.insert_by_url.confirm'),
      cancelButtonText: this.t('editor.extensions.NewIframe.control.insert_by_url.cancel'),
      inputPlaceholder: this.t('editor.extensions.NewIframe.control.insert_by_url.placeholder'),
      inputPattern: this.imageNodeOptions.urlPattern,
      inputErrorMessage: this.t('editor.extensions.NewIframe.control.insert_by_url.invalid_url'),
      roundButton: true
    }).then(function (_a) {
      var url = _a.value;

      _this.editorContext.commands.newIframe({
        src: url
      });
    }).catch(function () {});
  };

  __decorate([Prop({
    type: Object,
    required: true
  })], IframeCommandButton.prototype, "editorContext", void 0);

  IframeCommandButton = __decorate([Component({
    components: {
      CommandButton: __vue_component__$2
    }
  })], IframeCommandButton);
  return IframeCommandButton;
}(mixins(i18nMixin));

/* script */
const __vue_script__$m = IframeCommandButton$1;

/* template */
var __vue_render__$l = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('command-button',{attrs:{"slot":"reference","tooltip":_vm.t('editor.extensions.NewIframe.buttons.insert_page.tooltip'),"icon":"paperclip","command":_vm.openUrlPrompt},slot:"reference"})],1)};
var __vue_staticRenderFns__$l = [];

  /* style */
  const __vue_inject_styles__$m = undefined;
  /* scoped */
  const __vue_scope_id__$m = undefined;
  /* module identifier */
  const __vue_module_identifier__$m = undefined;
  /* functional template */
  const __vue_is_functional_template__$m = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$m = normalizeComponent(
    { render: __vue_render__$l, staticRenderFns: __vue_staticRenderFns__$l },
    __vue_inject_styles__$m,
    __vue_script__$m,
    __vue_scope_id__$m,
    __vue_is_functional_template__$m,
    __vue_module_identifier__$m,
    false,
    undefined,
    undefined,
    undefined
  );

var _a$8;
var MIN_SIZE$1 = 300;
var MAX_SIZE$1 = 100000;

var ImageView$1 =
/** @class */
function (_super) {
  __extends(ImageView, _super);

  function ImageView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.maxSize = {
      width: MAX_SIZE$1,
      height: MAX_SIZE$1
    };
    _this.originalSize = {
      width: 0,
      height: 0
    };
    _this.resizeOb = new ResizeObserver(function () {
      _this.getMaxSize();
    });
    _this.resizeDirections = ["tl"
    /* TOP_LEFT */
    , "tr"
    /* TOP_RIGHT */
    , "bl"
    /* BOTTOM_LEFT */
    , "br"
    /* BOTTOM_RIGHT */
    ];
    _this.resizing = false;
    _this.showResizeIframe = false;
    _this.resizerState = {
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      dir: ''
    };
    return _this;
  }

  Object.defineProperty(ImageView.prototype, "src", {
    get: function get() {
      return this.node.attrs.src;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ImageView.prototype, "width", {
    get: function get() {
      return this.node.attrs.width;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ImageView.prototype, "height", {
    get: function get() {
      return this.node.attrs.height;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ImageView.prototype, "display", {
    get: function get() {
      return this.node.attrs.display;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ImageView.prototype, "imageViewClass", {
    get: function get() {
      return ['image-view', "image-view--" + this.display];
    },
    enumerable: true,
    configurable: true
  });

  ImageView.prototype.created = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.originalSize = {
          width: 300,
          height: 300
        };
        return [2
        /*return*/
        ];
      });
    });
  };

  ImageView.prototype.mounted = function () {
    this.resizeOb.observe(this.view.dom);
  };

  ImageView.prototype.beforeDestroy = function () {
    this.resizeOb.disconnect();
  }; // https://github.com/scrumpy/tiptap/issues/361#issuecomment-540299541


  ImageView.prototype.selectImage = function () {
    var state = this.view.state;
    var tr = state.tr;
    var selection = NodeSelection.create(state.doc, this.getPos());
    tr = tr.setSelection(selection);
    this.view.dispatch(tr);
  }; // toggle show rsize iframe


  ImageView.prototype.toggleShowReizeIframe = function () {
    this.showResizeIframe = !this.showResizeIframe;
  };
  /* invoked when window or editor resize */


  ImageView.prototype.getMaxSize = function () {
    var width = getComputedStyle(this.view.dom).width;
    this.maxSize.width = parseInt(width, 10);
  };
  /* on resizer handler mousedown
   * record the position where the event is triggered and resize direction
   * calculate the initial width and height of the image
   */


  ImageView.prototype.onMouseDown = function (e, dir) {
    e.preventDefault();
    e.stopPropagation();
    this.resizerState.x = e.clientX;
    this.resizerState.y = e.clientY;
    var originalWidth = this.originalSize.width;
    var originalHeight = this.originalSize.height;
    var aspectRatio = originalWidth / originalHeight;
    var _a = this.node.attrs,
        width = _a.width,
        height = _a.height;
    var maxWidth = this.maxSize.width;

    if (width && !height) {
      width = width > maxWidth ? maxWidth : width;
      height = Math.round(width / aspectRatio);
    } else if (height && !width) {
      width = Math.round(height * aspectRatio);
      width = width > maxWidth ? maxWidth : width;
    } else if (!width && !height) {
      width = originalWidth > maxWidth ? maxWidth : originalWidth;
      height = Math.round(width / aspectRatio);
    } else {
      width = width > maxWidth ? maxWidth : width;
    }

    this.resizerState.w = width;
    this.resizerState.h = height;
    this.resizerState.dir = dir;
    this.resizing = true;
    this.onEvents();
  };

  ImageView.prototype.onMouseMove = function (e) {
    // e.preventDefault();
    // e.stopPropagation();
    if (!this.resizing) return;
    var _a = this.resizerState,
        x = _a.x,
        y = _a.y,
        w = _a.w,
        h = _a.h,
        dir = _a.dir;
    var dx = (e.clientX - x) * (/l/.test(dir) ? -1 : 1);
    var dy = (e.clientY - y) * (/t/.test(dir) ? -1 : 1);
    this.updateAttrs({
      width: clamp(w + dx, MIN_SIZE$1, this.maxSize.width),
      height: Math.max(h + dy, MIN_SIZE$1)
    });
  };

  ImageView.prototype.onMouseUp = function () {
    // e.preventDefault();
    // e.stopPropagation();
    if (!this.resizing) return;
    this.resizing = false;
    this.resizerState = {
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      dir: ''
    };
    this.offEvents();
    this.selectImage();
  };

  ImageView.prototype.onEvents = function () {
    document.addEventListener('mousemove', this.onMouseMove, true);
    document.addEventListener('mouseup', this.onMouseUp, true);
  };

  ImageView.prototype.offEvents = function () {
    document.removeEventListener('mousemove', this.onMouseMove, true);
    document.removeEventListener('mouseup', this.onMouseUp, true);
  };

  __decorate([Prop({
    type: Node$1,
    required: true
  })], ImageView.prototype, "node", void 0);

  __decorate([Prop({
    // TODO: EditorView type check failed
    // issue: https://github.com/Leecason/element-tiptap/issues/21#issuecomment-605615966
    type: Object,
    required: true
  })], ImageView.prototype, "view", void 0);

  __decorate([Prop({
    type: Function,
    required: true
  })], ImageView.prototype, "getPos", void 0);

  __decorate([Prop({
    type: Function,
    required: true
  })], ImageView.prototype, "updateAttrs", void 0);

  __decorate([Prop({
    type: Boolean,
    required: true
  })], ImageView.prototype, "selected", void 0);

  ImageView = __decorate([Component({
    components: (_a$8 = {}, _a$8[_Popover.name] = _Popover, _a$8.ImageBubbleMenu = __vue_component__$e, _a$8)
  })], ImageView);
  return ImageView;
}(Vue);

/* script */
const __vue_script__$n = ImageView$1;

/* template */
var __vue_render__$m = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{class:_vm.imageViewClass},[_c('div',{staticClass:"image-view__body",class:{
      'image-view__body--focused': _vm.selected,
      'image-view__body--resizing': _vm.resizing,
    }},[_c('div',{staticClass:"image-view__body__image iframe-container",style:('width:'+_vm.width+'px;height:'+_vm.height+'px'),attrs:{"title":_vm.node.attrs.title,"alt":_vm.node.attrs.alt,"width":_vm.width,"height":_vm.height},on:{"click":_vm.selectImage}},[_c('iframe',{staticStyle:{"width":"100%","height":"100%","min-width":"100%","min-height":"100%","pointer-events":"none"},attrs:{"src":_vm.src,"width":_vm.width,"height":_vm.height,"frameborder":"0"},on:{"dbclick":_vm.toggleShowReizeIframe}})]),_vm._v(" "),(_vm.view.editable)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.selected || _vm.resizing),expression:"selected || resizing"}],staticClass:"image-resizer"},_vm._l((_vm.resizeDirections),function(direction){return _c('span',{key:direction,staticClass:"image-resizer__handler",class:("image-resizer__handler--" + direction),on:{"mousedown":function($event){return _vm.onMouseDown($event, direction)}}})}),0):_vm._e(),_vm._v(" "),(_vm.view.editable)?_c('el-popover',{directives:[{name:"show",rawName:"v-show",value:(_vm.selected || _vm.resizing),expression:"selected || resizing"}],attrs:{"value":_vm.selected,"visible-arrow":false,"placement":"top","trigger":"manual","popper-class":"el-tiptap-image-popper"}},[_c('image-bubble-menu',{attrs:{"node":_vm.node,"view":_vm.view,"update-attrs":_vm.updateAttrs}}),_vm._v(" "),_c('div',{staticClass:"image-view__body__placeholder",attrs:{"slot":"reference"},slot:"reference"})],1):_vm._e()],1)])};
var __vue_staticRenderFns__$m = [];

  /* style */
  const __vue_inject_styles__$n = undefined;
  /* scoped */
  const __vue_scope_id__$n = undefined;
  /* module identifier */
  const __vue_module_identifier__$n = undefined;
  /* functional template */
  const __vue_is_functional_template__$n = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$n = normalizeComponent(
    { render: __vue_render__$m, staticRenderFns: __vue_staticRenderFns__$m },
    __vue_inject_styles__$n,
    __vue_script__$n,
    __vue_scope_id__$n,
    __vue_is_functional_template__$n,
    __vue_module_identifier__$n,
    false,
    undefined,
    undefined,
    undefined
  );

var IMAGE_URL_REGEX$1 = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/; // @ts-ignore

function getAttrs$6(dom) {
  var _a = dom.style,
      cssFloat = _a.cssFloat,
      display = _a.display;
  var _b = dom.style,
      width = _b.width,
      height = _b.height;
  var dp = dom.getAttribute('data-display') || dom.getAttribute('display');

  if (dp) {
    dp = /(inline|block|left|right)/.test(dp) ? dp : "inline"
    /* INLINE */
    ;
  } else if (cssFloat === 'left' && !display) {
    dp = "left"
    /* FLOAT_LEFT */
    ;
  } else if (cssFloat === 'right' && !display) {
    dp = "right"
    /* FLOAT_RIGHT */
    ;
  } else if (!cssFloat && display === 'block') {
    dp = "block"
    /* BREAK_TEXT */
    ;
  } else {
    dp = "inline"
    /* INLINE */
    ;
  }

  width = width || dom.getAttribute('width') || null;
  height = height || dom.getAttribute('height') || null;
  return {
    src: dom.getAttribute('src') || '',
    title: dom.getAttribute('title') || '',
    alt: dom.getAttribute('alt') || '',
    width: width == null ? null : parseInt(width, 10),
    height: height == null ? null : parseInt(height, 10),
    display: dp
  };
}

function toDOM$6(node) {
  var _a = node.attrs,
      src = _a.src,
      alt = _a.alt,
      title = _a.title,
      width = _a.width,
      height = _a.height,
      display = _a.display;
  var attrs = {
    src: src,
    alt: alt,
    title: title,
    width: width,
    height: height,
    frameborder: 0,
    allowfullscreen: 'true'
  };
  attrs['data-display'] = display;
  return ['iframe', attrs];
}

var Image$2 =
/** @class */
function (_super) {
  __extends(Image, _super);

  function Image() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(Image.prototype, "defaultOptions", {
    get: function get() {
      return {
        urlPattern: IMAGE_URL_REGEX$1,
        uploadRequest: null
      };
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Image.prototype, "name", {
    get: function get() {
      return 'newIframe';
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Image.prototype, "schema", {
    get: function get() {
      return {
        inline: true,
        attrs: {
          src: {
            default: ''
          },
          alt: {
            default: ''
          },
          title: {
            default: ''
          },
          width: {
            default: null
          },
          height: {
            default: null
          },
          display: {
            default: "inline"
            /* INLINE */

          }
        },
        group: 'inline',
        draggable: true,
        parseDOM: [{
          tag: 'iframe[src]',
          getAttrs: getAttrs$6
        }],
        toDOM: toDOM$6
      };
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Image.prototype, "view", {
    get: function get() {
      return __vue_component__$n;
    },
    enumerable: true,
    configurable: true
  });

  Image.prototype.menuBtnView = function (editorContext) {
    return {
      component: __vue_component__$m,
      componentProps: {
        editorContext: editorContext
      }
    };
  };

  return Image;
}(Image$3);

// `String.prototype.bold` method
// https://tc39.github.io/ecma262/#sec-string.prototype.bold
_export({ target: 'String', proto: true, forced: stringHtmlForced('bold') }, {
  bold: function bold() {
    return createHtml(this, 'b', '', '');
  }
});

var Bold =
/** @class */
function (_super) {
  __extends(Bold, _super);

  function Bold() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Bold.prototype.menuBtnView = function (_a) {
    var isActive = _a.isActive,
        commands = _a.commands;
    return {
      component: __vue_component__$2,
      componentProps: {
        command: commands.bold,
        isActive: isActive.bold(),
        icon: 'bold',
        tooltip: t('editor.extensions.Bold.tooltip')
      }
    };
  };

  return Bold;
}(Bold$1);

var Underline =
/** @class */
function (_super) {
  __extends(Underline, _super);

  function Underline() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Underline.prototype.menuBtnView = function (_a) {
    var isActive = _a.isActive,
        commands = _a.commands;
    return {
      component: __vue_component__$2,
      componentProps: {
        command: commands.underline,
        isActive: isActive.underline(),
        icon: 'underline',
        tooltip: t('editor.extensions.Underline.tooltip')
      }
    };
  };

  return Underline;
}(Underline$1);

var Italic =
/** @class */
function (_super) {
  __extends(Italic, _super);

  function Italic() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Italic.prototype.menuBtnView = function (_a) {
    var isActive = _a.isActive,
        commands = _a.commands;
    return {
      component: __vue_component__$2,
      componentProps: {
        command: commands.italic,
        isActive: isActive.italic(),
        icon: 'italic',
        tooltip: t('editor.extensions.Italic.tooltip')
      }
    };
  };

  return Italic;
}(Italic$1);

// `String.prototype.strike` method
// https://tc39.github.io/ecma262/#sec-string.prototype.strike
_export({ target: 'String', proto: true, forced: stringHtmlForced('strike') }, {
  strike: function strike() {
    return createHtml(this, 'strike', '', '');
  }
});

var Strike =
/** @class */
function (_super) {
  __extends(Strike, _super);

  function Strike() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Strike.prototype.menuBtnView = function (_a) {
    var isActive = _a.isActive,
        commands = _a.commands;
    return {
      component: __vue_component__$2,
      componentProps: {
        command: commands.strike,
        isActive: isActive.strike(),
        icon: 'strikethrough',
        tooltip: t('editor.extensions.Strike.tooltip')
      }
    };
  };

  return Strike;
}(Strike$1);

function removeMark (type) {
  return function (state, dispatch) {
    var tr = state.tr,
        selection = state.selection;
    var from = selection.from,
        to = selection.to;
    var $from = selection.$from,
        empty = selection.empty;

    if (empty) {
      var range = getMarkRange($from, type);
      from = range.from;
      to = range.to;
    }

    tr.removeMark(from, to, type);
    return dispatch(tr);
  };
}

function updateMark (type, attrs) {
  return function (state, dispatch) {
    var tr = state.tr,
        selection = state.selection,
        doc = state.doc;
    var from = selection.from,
        to = selection.to;
    var $from = selection.$from,
        empty = selection.empty;

    if (empty) {
      var range = getMarkRange($from, type);
      from = range.from;
      to = range.to;
    }

    var hasMark = doc.rangeHasMark(from, to, type);

    if (hasMark) {
      tr.removeMark(from, to, type);
    }

    tr.addMark(from, to, type.create(attrs));
    return dispatch(tr);
  };
}

var AddLinkCommandButton =
/** @class */
function (_super) {
  __extends(AddLinkCommandButton, _super);

  function AddLinkCommandButton() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AddLinkCommandButton.prototype.openApplyLinkControl = function () {
    var _this = this;

    _MessageBox.prompt('', this.t('editor.extensions.Link.add.control.title'), {
      confirmButtonText: this.t('editor.extensions.Link.add.control.confirm'),
      cancelButtonText: this.t('editor.extensions.Link.add.control.cancel'),
      inputPlaceholder: this.t('editor.extensions.Link.add.control.placeholder'),
      roundButton: true
    }).then(function (_a) {
      var href = _a.value;

      _this.editorContext.commands.link({
        href: href
      });
    }).catch(function () {});
  };

  __decorate([Prop({
    type: Object,
    required: true
  })], AddLinkCommandButton.prototype, "editorContext", void 0);

  AddLinkCommandButton = __decorate([Component({
    components: {
      CommandButton: __vue_component__$2
    }
  })], AddLinkCommandButton);
  return AddLinkCommandButton;
}(mixins(i18nMixin));

/* script */
const __vue_script__$o = AddLinkCommandButton;

/* template */
var __vue_render__$n = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('command-button',{attrs:{"is-active":_vm.editorContext.isActive.link(),"command":_vm.openApplyLinkControl,"tooltip":_vm.t('editor.extensions.Link.add.tooltip'),"icon":"link"}})};
var __vue_staticRenderFns__$n = [];

  /* style */
  const __vue_inject_styles__$o = undefined;
  /* scoped */
  const __vue_scope_id__$o = undefined;
  /* module identifier */
  const __vue_module_identifier__$o = undefined;
  /* functional template */
  const __vue_is_functional_template__$o = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$o = normalizeComponent(
    { render: __vue_render__$n, staticRenderFns: __vue_staticRenderFns__$n },
    __vue_inject_styles__$o,
    __vue_script__$o,
    __vue_scope_id__$o,
    __vue_is_functional_template__$o,
    __vue_module_identifier__$o,
    false,
    undefined,
    undefined,
    undefined
  );

var Link =
/** @class */
function (_super) {
  __extends(Link, _super);

  function Link() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Link.prototype.commands = function (_a) {
    var type = _a.type;
    return {
      link: function link(attrs) {
        if (attrs.href) {
          return updateMark(type, attrs);
        }

        return removeMark(type);
      },
      unlink: function unlink() {
        return removeMark(type);
      }
    };
  };

  Object.defineProperty(Link.prototype, "plugins", {
    get: function get() {
      return [new Plugin({
        props: {
          handleClick: function handleClick(view, pos) {
            var _a = view.state,
                schema = _a.schema,
                doc = _a.doc,
                tr = _a.tr;
            var range = getMarkRange(doc.resolve(pos), schema.marks.link);
            if (!range) return false;
            var $start = doc.resolve(range.from);
            var $end = doc.resolve(range.to);
            var transaction = tr.setSelection(new TextSelection($start, $end));
            view.dispatch(transaction);
            return true;
          }
        }
      })];
    },
    enumerable: true,
    configurable: true
  });

  Link.prototype.menuBtnView = function (editorContext) {
    return {
      component: __vue_component__$o,
      componentProps: {
        editorContext: editorContext
      }
    };
  };

  return Link;
}(Link$1);

var notARegexp = function (it) {
  if (isRegexp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};

var MATCH$2 = wellKnownSymbol('match');

var correctIsRegexpLogic = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH$2] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
_export({ target: 'String', proto: true, forced: !correctIsRegexpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegexp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});

function _typeof$2(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$2 = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof$2 = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$2(obj);
}

function markApplies(doc, ranges, type) {
  var _loop_1 = function _loop_1(i) {
    var _a = ranges[i],
        $from = _a.$from,
        $to = _a.$to;
    var can = $from.depth === 0 ? doc.type.allowsMarkType(type) : false;
    doc.nodesBetween($from.pos, $to.pos, function (node) {
      if (can) return false;
      can = node.inlineContent && node.type.allowsMarkType(type);
      return true;
    });
    if (can) return {
      value: true
    };
  };

  for (var i = 0; i < ranges.length; i++) {
    var state_1 = _loop_1(i);

    if (_typeof$2(state_1) === "object") return state_1.value;
  }

  return false;
} // https://github.com/ProseMirror/prosemirror-commands/blob/master/src/commands.js


function applyMark(tr, markType, attrs) {
  if (!tr.selection || !tr.doc || !markType) return tr; // @ts-ignore

  var _a = tr.selection,
      empty = _a.empty,
      $cursor = _a.$cursor,
      ranges = _a.ranges;
  if (empty && !$cursor || !markApplies(tr.doc, ranges, markType)) return tr;

  if ($cursor) {
    tr = tr.removeStoredMark(markType);
    return attrs ? tr.addStoredMark(markType.create(attrs)) : tr;
  }

  var has = false;

  for (var i = 0; !has && i < ranges.length; i++) {
    var _b = ranges[i],
        $from = _b.$from,
        $to = _b.$to;
    has = tr.doc.rangeHasMark($from.pos, $to.pos, markType);
  }

  for (var i = 0; i < ranges.length; i++) {
    var _c = ranges[i],
        $from = _c.$from,
        $to = _c.$to;

    if (has) {
      tr = tr.removeMark($from.pos, $to.pos, markType);
    }

    if (attrs) {
      tr = tr.addMark($from.pos, $to.pos, markType.create(attrs));
    }
  }

  return tr;
}

// https://github.com/regexhq/hex-color-regex/blob/master/index.js
function hexColorRegex() {
  return /#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})\b/gi;
}

var COLOR_SET = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#000000'];
function isHexColor(color) {
  return hexColorRegex().test(color);
}

var _a$9;

var ColorPopover =
/** @class */
function (_super) {
  __extends(ColorPopover, _super);

  function ColorPopover() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.color = '';
    _this.popoverVisible = false;
    return _this;
  }

  ColorPopover.prototype.onSelectedColorChange = function (color) {
    this.color = color;
  };

  ColorPopover.prototype.confirmColor = function (color) {
    this.popoverVisible = false;
    return color;
  };

  __decorate([Prop({
    type: Array,
    default: function _default() {
      return [];
    }
  })], ColorPopover.prototype, "colorSet", void 0);

  __decorate([Prop({
    type: String,
    default: ''
  })], ColorPopover.prototype, "selectedColor", void 0);

  __decorate([Prop({
    type: String,
    required: true
  })], ColorPopover.prototype, "tooltip", void 0);

  __decorate([Prop({
    type: String,
    required: true
  })], ColorPopover.prototype, "icon", void 0);

  __decorate([Prop({
    type: String,
    default: 'OK'
  })], ColorPopover.prototype, "confirmText", void 0);

  __decorate([Watch('selectedColor', {
    immediate: true
  })], ColorPopover.prototype, "onSelectedColorChange", null);

  __decorate([Emit('confirm')], ColorPopover.prototype, "confirmColor", null);

  ColorPopover = __decorate([Component({
    components: (_a$9 = {}, _a$9[_Button.name] = _Button, _a$9[_Popover.name] = _Popover, _a$9[_Input.name] = _Input, _a$9.CommandButton = __vue_component__$2, _a$9)
  })], ColorPopover);
  return ColorPopover;
}(Vue);

/* script */
const __vue_script__$p = ColorPopover;

/* template */
var __vue_render__$o = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-popover',{attrs:{"placement":"bottom","trigger":"click","popper-class":"el-tiptap-popper"},model:{value:(_vm.popoverVisible),callback:function ($$v) {_vm.popoverVisible=$$v;},expression:"popoverVisible"}},[_c('div',{staticClass:"color-set"},[_vm._l((_vm.colorSet),function(color){return _c('div',{key:color,staticClass:"color__wrapper"},[_c('div',{staticClass:"color",class:{ 'color--selected': _vm.selectedColor === color },style:({
          'background-color': color,
        }),on:{"mousedown":function($event){$event.preventDefault();},"click":function($event){$event.stopPropagation();return _vm.confirmColor(color)}}})])}),_vm._v(" "),_c('div',{staticClass:"color__wrapper"},[_c('div',{staticClass:"color color--remove",on:{"mousedown":function($event){$event.preventDefault();},"click":function($event){$event.stopPropagation();return _vm.confirmColor('')}}})])],2),_vm._v(" "),_c('div',{staticClass:"color-hex"},[_c('el-input',{staticClass:"color-hex__input",attrs:{"placeholder":"HEX","autofocus":"true","maxlength":"7","size":"small"},model:{value:(_vm.color),callback:function ($$v) {_vm.color=$$v;},expression:"color"}}),_vm._v(" "),_c('el-button',{staticClass:"color-hex__button",attrs:{"type":"text","size":"small"},on:{"click":function($event){return _vm.confirmColor(_vm.color)}}},[_vm._v("\n      "+_vm._s(_vm.confirmText)+"\n    ")])],1),_vm._v(" "),_c('command-button',{attrs:{"slot":"reference","tooltip":_vm.tooltip,"icon":_vm.icon},slot:"reference"})],1)};
var __vue_staticRenderFns__$o = [];

  /* style */
  const __vue_inject_styles__$p = undefined;
  /* scoped */
  const __vue_scope_id__$p = undefined;
  /* module identifier */
  const __vue_module_identifier__$p = undefined;
  /* functional template */
  const __vue_is_functional_template__$p = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$p = normalizeComponent(
    { render: __vue_render__$o, staticRenderFns: __vue_staticRenderFns__$o },
    __vue_inject_styles__$p,
    __vue_script__$p,
    __vue_scope_id__$p,
    __vue_is_functional_template__$p,
    __vue_module_identifier__$p,
    false,
    undefined,
    undefined,
    undefined
  );

var TextColor =
/** @class */
function (_super) {
  __extends(TextColor, _super);

  function TextColor() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(TextColor.prototype, "name", {
    get: function get() {
      return 'text_color';
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextColor.prototype, "defaultOptions", {
    get: function get() {
      return {
        colors: COLOR_SET
      };
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextColor.prototype, "schema", {
    get: function get() {
      var _this = this;

      return {
        attrs: {
          color: ''
        },
        inline: true,
        group: 'inline',
        parseDOM: [{
          style: 'color',
          getAttrs: function getAttrs(color) {
            return {
              color: _this.options.colors.includes(color) ? color : ''
            };
          }
        }],
        toDOM: function toDOM(node) {
          var color = node.attrs.color;
          var style = '';

          if (color) {
            style += "color: " + color + ";";
          }

          return ['span', {
            style: style
          }, 0];
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  TextColor.prototype.commands = function () {
    return function (color) {
      return function (state, dispatch) {
        if (color !== undefined) {
          var schema = state.schema;
          var tr = state.tr;
          var markType = schema.marks.text_color;
          var attrs = color && isHexColor(color) ? {
            color: color
          } : null;
          tr = applyMark(state.tr.setSelection(state.selection), markType, attrs);

          if (tr.docChanged || tr.storedMarksSet) {
            dispatch && dispatch(tr);
            return true;
          }
        }

        return false;
      };
    };
  };

  TextColor.prototype.menuBtnView = function (_a) {
    var commands = _a.commands,
        getMarkAttrs = _a.getMarkAttrs;
    return {
      component: __vue_component__$p,
      componentProps: {
        colorSet: this.options.colors,
        selectedColor: getMarkAttrs('text_color').color,
        tooltip: t('editor.extensions.TextColor.tooltip'),
        icon: 'tint'
      },
      componentEvents: {
        confirm: function confirm(color) {
          return commands.text_color(color);
        }
      }
    };
  };

  return TextColor;
}(Mark);

var TextHighlight =
/** @class */
function (_super) {
  __extends(TextHighlight, _super);

  function TextHighlight() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(TextHighlight.prototype, "name", {
    get: function get() {
      return 'text_highlight';
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextHighlight.prototype, "defaultOptions", {
    get: function get() {
      return {
        colors: COLOR_SET
      };
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextHighlight.prototype, "schema", {
    get: function get() {
      var _this = this;

      return {
        attrs: {
          highlightColor: ''
        },
        inline: true,
        group: 'inline',
        parseDOM: [{
          style: 'span[style*=background-color]',
          getAttrs: function getAttrs(color) {
            return {
              highlightColor: _this.options.colors.includes(color) ? color : ''
            };
          }
        }],
        toDOM: function toDOM(node) {
          var highlightColor = node.attrs.highlightColor;
          var style = '';

          if (highlightColor) {
            style += "background-color: " + highlightColor + ";";
          }

          return ['span', {
            style: style
          }, 0];
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  TextHighlight.prototype.commands = function () {
    return function (color) {
      return function (state, dispatch) {
        if (color !== undefined) {
          var schema = state.schema;
          var tr = state.tr;
          var markType = schema.marks.text_highlight;
          var attrs = color && isHexColor(color) ? {
            highlightColor: color
          } : null;
          tr = applyMark(state.tr.setSelection(state.selection), markType, attrs);

          if (tr.docChanged || tr.storedMarksSet) {
            dispatch && dispatch(tr);
            return true;
          }
        }

        return false;
      };
    };
  };

  TextHighlight.prototype.menuBtnView = function (_a) {
    var commands = _a.commands,
        getMarkAttrs = _a.getMarkAttrs;
    return {
      component: __vue_component__$p,
      componentProps: {
        colorSet: this.options.colors,
        selectedColor: getMarkAttrs('text_highlight').highlightColor,
        tooltip: t('editor.extensions.TextHighlight.tooltip'),
        icon: 'highlighter'
      },
      componentEvents: {
        confirm: function confirm(color) {
          return commands.text_highlight(color);
        }
      }
    };
  };

  return TextHighlight;
}(Mark);

var $find = arrayIteration.find;



var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH$6 = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
_export({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH$6 }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);

var DEFAULT_FONT_TYPE_NAMES = ['Arial', 'Arial Black', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana', 'Courier New', 'Lucida Console', 'Monaco', 'monospace'];
var DEFAULT_FONT_TYPE_MAP = DEFAULT_FONT_TYPE_NAMES.reduce(function (obj, type) {
  obj[type] = type;
  return obj;
}, {});
function setFontType(tr, type, name) {
  var selection = tr.selection;

  if (!(selection instanceof TextSelection || selection instanceof AllSelection)) {
    return tr;
  }

  var attrs = name ? {
    name: name
  } : null;
  tr = applyMark(tr, type, attrs);
  return tr;
}
var DEFAULT_FONT_TYPE = '';
function findActiveFontType(state) {
  var schema = state.schema,
      selection = state.selection,
      tr = state.tr;
  var markType = schema.marks.font_type;
  if (!markType) return DEFAULT_FONT_TYPE;
  var empty = selection.empty;

  if (empty) {
    var storedMarks = tr.storedMarks || state.storedMarks || selection instanceof TextSelection && selection.$cursor && selection.$cursor.marks && selection.$cursor.marks() || [];
    var sm = storedMarks.find(function (m) {
      return m.type === markType;
    });
    return sm && sm.attrs.name || DEFAULT_FONT_TYPE;
  }

  var attrs = getMarkAttrs(state, markType);
  var fontName = attrs.name;
  if (!fontName) return DEFAULT_FONT_TYPE;
  return fontName;
}

var _a$a;

var FontTypeDropdown =
/** @class */
function (_super) {
  __extends(FontTypeDropdown, _super);

  function FontTypeDropdown() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(FontTypeDropdown.prototype, "editor", {
    get: function get() {
      return this.editorContext.editor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FontTypeDropdown.prototype, "fontTypes", {
    get: function get() {
      var fontTypes = this.editor.extensions.options.font_type.fontTypes;

      if (!isPlainObject(fontTypes)) {
        Logger.error('\'fontTypes\' should be an object');
        return DEFAULT_FONT_TYPE_MAP;
      }

      return fontTypes;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FontTypeDropdown.prototype, "activeFontType", {
    get: function get() {
      return findActiveFontType(this.editor.state);
    },
    enumerable: true,
    configurable: true
  });

  FontTypeDropdown.prototype.toggleFontType = function (name) {
    if (name === this.activeFontType) {
      this.editorContext.commands.font_type('');
    } else {
      this.editorContext.commands.font_type(name);
    }
  };

  __decorate([Prop({
    type: Object,
    required: true
  })], FontTypeDropdown.prototype, "editorContext", void 0);

  FontTypeDropdown = __decorate([Component({
    components: (_a$a = {}, _a$a[_Dropdown.name] = _Dropdown, _a$a[_DropdownMenu.name] = _DropdownMenu, _a$a[_DropdownItem.name] = _DropdownItem, _a$a.CommandButton = __vue_component__$2, _a$a)
  })], FontTypeDropdown);
  return FontTypeDropdown;
}(mixins(i18nMixin));

/* script */
const __vue_script__$q = FontTypeDropdown;

/* template */
var __vue_render__$p = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dropdown',{attrs:{"placement":"bottom","trigger":"click"},on:{"command":_vm.toggleFontType}},[_c('command-button',{attrs:{"tooltip":_vm.t('editor.extensions.FontType.tooltip'),"icon":"font"}}),_vm._v(" "),_c('el-dropdown-menu',{staticClass:"el-tiptap-dropdown-menu",attrs:{"slot":"dropdown"},slot:"dropdown"},_vm._l((_vm.fontTypes),function(name){return _c('el-dropdown-item',{key:name,staticClass:"el-tiptap-dropdown-menu__item",class:{
        'el-tiptap-dropdown-menu__item--active': name === _vm.activeFontType,
      },attrs:{"command":name}},[_c('span',{style:({ 'font-family': name }),attrs:{"data-font":name}},[_vm._v(_vm._s(name))])])}),1)],1)};
var __vue_staticRenderFns__$p = [];

  /* style */
  const __vue_inject_styles__$q = undefined;
  /* scoped */
  const __vue_scope_id__$q = undefined;
  /* module identifier */
  const __vue_module_identifier__$q = undefined;
  /* functional template */
  const __vue_is_functional_template__$q = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$q = normalizeComponent(
    { render: __vue_render__$p, staticRenderFns: __vue_staticRenderFns__$p },
    __vue_inject_styles__$q,
    __vue_script__$q,
    __vue_scope_id__$q,
    __vue_is_functional_template__$q,
    __vue_module_identifier__$q,
    false,
    undefined,
    undefined,
    undefined
  );

var FontType =
/** @class */
function (_super) {
  __extends(FontType, _super);

  function FontType() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(FontType.prototype, "name", {
    get: function get() {
      return 'font_type';
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FontType.prototype, "defaultOptions", {
    get: function get() {
      return {
        fontTypes: DEFAULT_FONT_TYPE_MAP
      };
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FontType.prototype, "schema", {
    get: function get() {
      return {
        attrs: {
          name: ''
        },
        inline: true,
        group: 'inline',
        parseDOM: [{
          style: 'font-family',
          getAttrs: function getAttrs(name) {
            return {
              name: name ? name.replace(/["']/g, '') : ''
            };
          }
        }],
        toDOM: function toDOM(node) {
          var name = node.attrs.name;
          var attrs = {};

          if (name) {
            attrs.style = "font-family: " + name;
          }

          return ['span', attrs, 0];
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  FontType.prototype.commands = function (_a) {
    var type = _a.type;
    return function (name) {
      return function (state, dispatch) {
        var tr = state.tr;
        tr = setFontType(state.tr.setSelection(state.selection), type, name);

        if (tr.docChanged || tr.storedMarksSet) {
          dispatch && dispatch(tr);
          return true;
        }

        return false;
      };
    };
  };

  FontType.prototype.menuBtnView = function (editorContext) {
    return {
      component: __vue_component__$q,
      componentProps: {
        editorContext: editorContext
      }
    };
  };

  return FontType;
}(Mark);

var HorizontalRule =
/** @class */
function (_super) {
  __extends(HorizontalRule, _super);

  function HorizontalRule() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HorizontalRule.prototype.menuBtnView = function (_a) {
    var commands = _a.commands;
    return {
      component: __vue_component__$2,
      componentProps: {
        command: commands.horizontal_rule,
        icon: 'minus',
        tooltip: t('editor.extensions.HorizontalRule.tooltip')
      }
    };
  };

  return HorizontalRule;
}(HorizontalRule$1);

var History =
/** @class */
function (_super) {
  __extends(History, _super);

  function History() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  History.prototype.menuBtnView = function (_a) {
    var commands = _a.commands;
    return [{
      component: __vue_component__$2,
      componentProps: {
        command: commands.undo,
        icon: 'undo',
        tooltip: t('editor.extensions.History.tooltip.undo')
      }
    }, {
      component: __vue_component__$2,
      componentProps: {
        command: commands.redo,
        icon: 'redo',
        tooltip: t('editor.extensions.History.tooltip.redo')
      }
    }];
  };

  return History;
}(History$1);

function isTextAlignActive(state, alignment) {
  var selection = state.selection,
      doc = state.doc;
  var from = selection.from,
      to = selection.to;
  var keepLooking = true;
  var active = false;
  doc.nodesBetween(from, to, function (node) {
    if (keepLooking && node.attrs.textAlign === alignment) {
      keepLooking = false;
      active = true;
    }

    return keepLooking;
  });
  return active;
}
var ALLOWED_NODE_TYPES$1 = ['paragraph', 'heading', 'list_item', 'todo_item'];
function setTextAlign(tr, alignment) {
  var selection = tr.selection,
      doc = tr.doc;

  if (!selection || !doc) {
    return tr;
  }

  var from = selection.from,
      to = selection.to;
  var tasks = [];
  alignment = alignment || null;
  doc.nodesBetween(from, to, function (node, pos) {
    var nodeType = node.type;

    if (ALLOWED_NODE_TYPES$1.includes(nodeType.name)) {
      var align = node.attrs.textAlign || null;

      if (align !== alignment) {
        tasks.push({
          node: node,
          pos: pos,
          nodeType: nodeType
        });
        return nodeType.name !== 'list_item' && nodeType.name !== 'todo_item';
      }
    }

    return true;
  });
  if (!tasks.length) return tr;
  tasks.forEach(function (job) {
    var node = job.node,
        pos = job.pos,
        nodeType = job.nodeType;
    var attrs = node.attrs;
    attrs = __assign(__assign({}, attrs), {
      textAlign: alignment
    });
    tr = tr.setNodeMarkup(pos, nodeType, attrs, node.marks);
  });
  return tr;
}

var TextAlign =
/** @class */
function (_super) {
  __extends(TextAlign, _super);

  function TextAlign() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(TextAlign.prototype, "name", {
    get: function get() {
      return 'text_align';
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextAlign.prototype, "defaultOptions", {
    get: function get() {
      return {
        alignments: ["left"
        /* left */
        , "center"
        /* center */
        , "right"
        /* right */
        , "justify"
        /* justify */
        ]
      };
    },
    enumerable: true,
    configurable: true
  });

  TextAlign.prototype.commands = function () {
    return this.options.alignments.reduce(function (commands, alignment) {
      var _a;

      if (!ALIGN_PATTERN.test(alignment)) return commands;
      return __assign(__assign({}, commands), (_a = {}, _a["align_" + alignment] = function () {
        return function (state, dispatch) {
          var selection = state.selection;
          var tr = setTextAlign(state.tr.setSelection(selection), alignment === 'left' ? null : alignment);

          if (tr.docChanged) {
            dispatch && dispatch(tr);
            return true;
          } else {
            return false;
          }
        };
      }, _a));
    }, {});
  };

  TextAlign.prototype.menuBtnView = function (_a) {
    var commands = _a.commands,
        editor = _a.editor;
    return this.options.alignments.reduce(function (views, alignment) {
      if (!ALIGN_PATTERN.test(alignment)) return views;
      var isActive = alignment === 'left' ? false : isTextAlignActive(editor.state, alignment);
      return views.concat({
        component: __vue_component__$2,
        componentProps: {
          isActive: isActive,
          command: commands["align_" + alignment],
          icon: "align-" + alignment,
          tooltip: t("editor.extensions.TextAlign.buttons.align_" + alignment + ".tooltip")
        }
      });
    }, []);
  };

  return TextAlign;
}(Extension);

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

var correctPrototypeGetter = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var IE_PROTO$4 = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO$4)) return O[IE_PROTO$4];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};

var ITERATOR$4 = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype$1, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$1 = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype$1 == undefined) IteratorPrototype$1 = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if ( !has(IteratorPrototype$1, ITERATOR$4)) {
  createNonEnumerableProperty(IteratorPrototype$1, ITERATOR$4, returnThis);
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$1,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;





var returnThis$1 = function () { return this; };

var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = objectCreate(IteratorPrototype$2, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
  iterators[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var IteratorPrototype$3 = iteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$5 = wellKnownSymbol('iterator');
var KEYS$1 = 'keys';
var VALUES$1 = 'values';
var ENTRIES = 'entries';

var returnThis$2 = function () { return this; };

var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS$1 && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS$1: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES$1: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$5]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS$1 && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype$3 !== Object.prototype && CurrentIteratorPrototype.next) {
      if ( objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype$3) {
        if (objectSetPrototypeOf) {
          objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype$3);
        } else if (typeof CurrentIteratorPrototype[ITERATOR$5] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR$5, returnThis$2);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES$1 && nativeIterator && nativeIterator.name !== VALUES$1) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ( IterablePrototype[ITERATOR$5] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR$5, defaultIterator);
  }
  iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES$1),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS$1),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else _export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$2 = internalState.set;
var getInternalState$1 = internalState.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState$2(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$1(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
iterators.Arguments = iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

var ITERATOR$6 = wellKnownSymbol('iterator');
var TO_STRING_TAG$4 = wellKnownSymbol('toStringTag');
var ArrayValues = es_array_iterator.values;

for (var COLLECTION_NAME in domIterables) {
  var Collection$1 = global_1[COLLECTION_NAME];
  var CollectionPrototype = Collection$1 && Collection$1.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR$6] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR$6, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR$6] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG$4]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG$4, COLLECTION_NAME);
    }
    if (domIterables[COLLECTION_NAME]) for (var METHOD_NAME in es_array_iterator) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, es_array_iterator[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = es_array_iterator[METHOD_NAME];
      }
    }
  }
}

function isBulletListNode(node) {
  return node.type.name === 'bullet_list';
}
function isOrderedListNode(node) {
  return node.type.name === 'order_list';
}
function isTodoListNode(node) {
  return node.type.name === 'todo_list';
}
function isListNode(node) {
  return isBulletListNode(node) || isOrderedListNode(node) || isTodoListNode(node);
}

function updateIndentLevel(tr, delta) {
  var doc = tr.doc,
      selection = tr.selection;
  if (!doc || !selection) return tr;

  if (!(selection instanceof TextSelection || selection instanceof AllSelection)) {
    return tr;
  }

  var from = selection.from,
      to = selection.to;
  doc.nodesBetween(from, to, function (node, pos) {
    var nodeType = node.type;

    if (nodeType.name === 'paragraph' || nodeType.name === 'heading' || nodeType.name === 'blockquote') {
      tr = setNodeIndentMarkup(tr, pos, delta);
      return false;
    } else if (isListNode(node)) {
      return false;
    }

    return true;
  });
  return tr;
}

function setNodeIndentMarkup(tr, pos, delta) {
  if (!tr.doc) return tr;
  var node = tr.doc.nodeAt(pos);
  if (!node) return tr;
  var minIndent = 0
  /* min */
  ;
  var maxIndent = 7
  /* max */
  ;
  var indent = clamp((node.attrs.indent || 0) + delta, minIndent, maxIndent);
  if (indent === node.attrs.indent) return tr;

  var nodeAttrs = __assign(__assign({}, node.attrs), {
    indent: indent
  });

  return tr.setNodeMarkup(pos, node.type, nodeAttrs, node.marks);
}

function createIndentCommand(delta) {
  return function (state, dispatch) {
    var selection = state.selection;
    var tr = state.tr;
    tr = tr.setSelection(selection);
    tr = updateIndentLevel(tr, delta);

    if (tr.docChanged) {
      dispatch && dispatch(tr);
      return true;
    }

    return false;
  };
}

var Indent =
/** @class */
function (_super) {
  __extends(Indent, _super);

  function Indent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(Indent.prototype, "name", {
    get: function get() {
      return 'indent';
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Indent.prototype, "defaultOptions", {
    get: function get() {
      return {
        minIndent: 0
        /* min */
        ,
        maxIndent: 7
        /* max */

      };
    },
    enumerable: true,
    configurable: true
  });

  Indent.prototype.commands = function () {
    return {
      indent: function indent() {
        return createIndentCommand(1
        /* more */
        );
      },
      outdent: function outdent() {
        return createIndentCommand(-1
        /* less */
        );
      }
    };
  };

  Indent.prototype.keys = function () {
    return {
      Tab: createIndentCommand(1
      /* more */
      ),
      'Shift-Tab': createIndentCommand(-1
      /* less */
      )
    };
  };

  Indent.prototype.menuBtnView = function (_a) {
    var commands = _a.commands;
    return [{
      component: __vue_component__$2,
      componentProps: {
        command: commands.indent,
        icon: 'indent',
        tooltip: t('editor.extensions.Indent.buttons.indent.tooltip')
      }
    }, {
      component: __vue_component__$2,
      componentProps: {
        command: commands.outdent,
        icon: 'outdent',
        tooltip: t('editor.extensions.Indent.buttons.outdent.tooltip')
      }
    }];
  };

  return Indent;
}(Extension);

var _a$b;

var LineHeightDropdown =
/** @class */
function (_super) {
  __extends(LineHeightDropdown, _super);

  function LineHeightDropdown() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(LineHeightDropdown.prototype, "editor", {
    get: function get() {
      return this.editorContext.editor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LineHeightDropdown.prototype, "lineHeights", {
    get: function get() {
      return this.editor.extensions.options.line_height.lineHeights;
    },
    enumerable: true,
    configurable: true
  });

  LineHeightDropdown.prototype.isLineHeightActive = function (lineHeight) {
    return isLineHeightActive(this.editor.state, lineHeight);
  };

  __decorate([Prop({
    type: Object,
    required: true
  })], LineHeightDropdown.prototype, "editorContext", void 0);

  LineHeightDropdown = __decorate([Component({
    components: (_a$b = {}, _a$b[_Dropdown.name] = _Dropdown, _a$b[_DropdownMenu.name] = _DropdownMenu, _a$b[_DropdownItem.name] = _DropdownItem, _a$b.CommandButton = __vue_component__$2, _a$b)
  })], LineHeightDropdown);
  return LineHeightDropdown;
}(mixins(i18nMixin));

/* script */
const __vue_script__$r = LineHeightDropdown;

/* template */
var __vue_render__$q = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dropdown',{attrs:{"placement":"bottom","trigger":"click"},on:{"command":function (lineHeight) { return _vm.editorContext.commands.line_height({ lineHeight: lineHeight }); }}},[_c('command-button',{attrs:{"tooltip":_vm.t('editor.extensions.LineHeight.tooltip'),"icon":"text-height"}}),_vm._v(" "),_c('el-dropdown-menu',{staticClass:"el-tiptap-dropdown-menu",attrs:{"slot":"dropdown"},slot:"dropdown"},_vm._l((_vm.lineHeights),function(lineHeight){return _c('el-dropdown-item',{key:lineHeight,staticClass:"el-tiptap-dropdown-menu__item",class:{
        'el-tiptap-dropdown-menu__item--active': _vm.isLineHeightActive(lineHeight),
      },attrs:{"command":lineHeight}},[_c('span',[_vm._v(_vm._s(lineHeight))])])}),1)],1)};
var __vue_staticRenderFns__$q = [];

  /* style */
  const __vue_inject_styles__$r = undefined;
  /* scoped */
  const __vue_scope_id__$r = undefined;
  /* module identifier */
  const __vue_module_identifier__$r = undefined;
  /* functional template */
  const __vue_is_functional_template__$r = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$r = normalizeComponent(
    { render: __vue_render__$q, staticRenderFns: __vue_staticRenderFns__$q },
    __vue_inject_styles__$r,
    __vue_script__$r,
    __vue_scope_id__$r,
    __vue_is_functional_template__$r,
    __vue_module_identifier__$r,
    false,
    undefined,
    undefined,
    undefined
  );

var LineHeight =
/** @class */
function (_super) {
  __extends(LineHeight, _super);

  function LineHeight() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(LineHeight.prototype, "name", {
    get: function get() {
      return 'line_height';
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LineHeight.prototype, "defaultOptions", {
    get: function get() {
      return {
        lineHeights: ['100%', '115%', '150%', '200%', '250%', '300%']
      };
    },
    enumerable: true,
    configurable: true
  });

  LineHeight.prototype.commands = function () {
    return function (_a) {
      var lineHeight = _a.lineHeight;
      return createLineHeightCommand(lineHeight);
    };
  };

  LineHeight.prototype.menuBtnView = function (editorContext) {
    return {
      component: __vue_component__$r,
      componentProps: {
        editorContext: editorContext
      }
    };
  };

  return LineHeight;
}(Extension);

var $filter = arrayIteration.filter;



var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH$7 = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 || !USES_TO_LENGTH$7 }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var freezing = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});

var internalMetadata = createCommonjsModule(function (module) {
var defineProperty = objectDefineProperty.f;



var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (freezing && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;
});
var internalMetadata_1 = internalMetadata.REQUIRED;
var internalMetadata_2 = internalMetadata.fastKey;
var internalMetadata_3 = internalMetadata.getWeakData;
var internalMetadata_4 = internalMetadata.onFreeze;

var collection = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global_1[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  // eslint-disable-next-line max-len
  if (isForced_1(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  })))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    internalMetadata.REQUIRED = true;
  } else if (isForced_1(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate_1(iterable, that[ADDER], that, IS_MAP);
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  _export({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};

var defineProperty$6 = objectDefineProperty.f;








var fastKey = internalMetadata.fastKey;


var setInternalState$3 = internalState.set;
var internalStateGetterFor = internalState.getterFor;

var collectionStrong = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState$3(that, {
        type: CONSTRUCTOR_NAME,
        index: objectCreate(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!descriptors) that.size = 0;
      if (iterable != undefined) iterate_1(iterable, that[ADDER], that, IS_MAP);
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (descriptors) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (descriptors) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (descriptors) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (descriptors) defineProperty$6(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState$3(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};

// `Set` constructor
// https://tc39.github.io/ecma262/#sec-set-objects
var es_set = collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);

var charAt$1 = stringMultibyte.charAt;



var STRING_ITERATOR = 'String Iterator';
var setInternalState$4 = internalState.set;
var getInternalState$2 = internalState.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState$4(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState$2(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt$1(string, index);
  state.index += point.length;
  return { value: point, done: false };
});

var FORMAT_MARK_NAMES = ["bold"
/* bold */
, "italic"
/* italic */
, "underline"
/* underline */
, "strike"
/* strike */
, "link"
/* link */
, "text_color"
/* textColor */
, "text_highlight"
/* textHighlight */
];
function clearMarks(tr, schema) {
  var doc = tr.doc,
      selection = tr.selection;
  if (!selection || !doc) return tr;
  var from = selection.from,
      to = selection.to,
      empty = selection.empty;
  if (empty) return tr;
  var markTypesToRemove = new Set(FORMAT_MARK_NAMES.map(function (n) {
    return schema.marks[n];
  }).filter(Boolean));
  if (!markTypesToRemove.size) return tr;
  var tasks = [];
  doc.nodesBetween(from, to, function (node, pos) {
    if (node.marks && node.marks.length) {
      node.marks.some(function (mark) {
        if (markTypesToRemove.has(mark.type)) {
          tasks.push({
            node: node,
            pos: pos,
            mark: mark
          });
        }
      });
      return true;
    }

    return true;
  });
  tasks.forEach(function (job) {
    var node = job.node,
        mark = job.mark,
        pos = job.pos;
    tr = tr.removeMark(pos, pos + node.nodeSize, mark.type);
  });
  tr = setTextAlign(tr, null);
  tr = setTextLineHeight(tr, null);
  return tr;
}

var FormatClear =
/** @class */
function (_super) {
  __extends(FormatClear, _super);

  function FormatClear() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(FormatClear.prototype, "name", {
    get: function get() {
      return 'format_clear';
    },
    enumerable: true,
    configurable: true
  });

  FormatClear.prototype.commands = function () {
    return function () {
      return function (state, dispatch) {
        var tr = clearMarks(state.tr.setSelection(state.selection), state.schema);

        if (dispatch && tr.docChanged) {
          dispatch(tr);
          return true;
        }

        return false;
      };
    };
  };

  FormatClear.prototype.menuBtnView = function (_a) {
    var commands = _a.commands;
    return {
      component: __vue_component__$2,
      componentProps: {
        command: commands.format_clear,
        icon: 'remove-format',
        tooltip: t('editor.extensions.FormatClear.tooltip')
      }
    };
  };

  return FormatClear;
}(Extension);

var FullscreenCommandButton =
/** @class */
function (_super) {
  __extends(FullscreenCommandButton, _super);

  function FullscreenCommandButton() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(FullscreenCommandButton.prototype, "buttonTooltip", {
    get: function get() {
      return this.isFullscreen ? this.t('editor.extensions.Fullscreen.tooltip.exit_fullscreen') : this.t('editor.extensions.Fullscreen.tooltip.fullscreen');
    },
    enumerable: true,
    configurable: true
  });

  __decorate([Inject()], FullscreenCommandButton.prototype, "toggleFullscreen", void 0);

  __decorate([InjectReactive()], FullscreenCommandButton.prototype, "isFullscreen", void 0);

  FullscreenCommandButton = __decorate([Component({
    components: {
      CommandButton: __vue_component__$2
    }
  })], FullscreenCommandButton);
  return FullscreenCommandButton;
}(mixins(i18nMixin));

/* script */
const __vue_script__$s = FullscreenCommandButton;

/* template */
var __vue_render__$r = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('command-button',{attrs:{"command":_vm.toggleFullscreen,"tooltip":_vm.buttonTooltip,"icon":_vm.isFullscreen ? 'compress' : 'expand',"is-active":_vm.isFullscreen}})};
var __vue_staticRenderFns__$r = [];

  /* style */
  const __vue_inject_styles__$s = undefined;
  /* scoped */
  const __vue_scope_id__$s = undefined;
  /* module identifier */
  const __vue_module_identifier__$s = undefined;
  /* functional template */
  const __vue_is_functional_template__$s = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$s = normalizeComponent(
    { render: __vue_render__$r, staticRenderFns: __vue_staticRenderFns__$r },
    __vue_inject_styles__$s,
    __vue_script__$s,
    __vue_scope_id__$s,
    __vue_is_functional_template__$s,
    __vue_module_identifier__$s,
    false,
    undefined,
    undefined,
    undefined
  );

var Fullscreen =
/** @class */
function (_super) {
  __extends(Fullscreen, _super);

  function Fullscreen() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(Fullscreen.prototype, "name", {
    get: function get() {
      return 'fullscreen';
    },
    enumerable: true,
    configurable: true
  });

  Fullscreen.prototype.menuBtnView = function () {
    return {
      component: __vue_component__$s
    };
  };

  return Fullscreen;
}(Extension);

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = functionBindContext(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};

var INCORRECT_ITERATION$1 = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
_export({ target: 'Array', stat: true, forced: INCORRECT_ITERATION$1 }, {
  from: arrayFrom
});

function printHtml(dom) {
  var style = Array.from(document.querySelectorAll('style, link')).reduce(function (str, style) {
    return str + style.outerHTML;
  }, '');
  var content = style + dom.outerHTML;
  var iframe = document.createElement('iframe');
  iframe.id = 'el-tiptap-iframe';
  iframe.setAttribute('style', 'position: absolute; width: 0; height: 0; top: -10px; left: -10px;');
  document.body.appendChild(iframe);
  var frameWindow = iframe.contentWindow;
  var doc = iframe.contentDocument || iframe.contentWindow && iframe.contentWindow.document;

  if (doc) {
    doc.open();
    doc.write(content);
    doc.close();
  }

  if (frameWindow) {
    iframe.onload = function () {
      try {
        setTimeout(function () {
          frameWindow.focus();

          try {
            if (!frameWindow.document.execCommand('print', false)) {
              frameWindow.print();
            }
          } catch (e) {
            frameWindow.print();
          }

          frameWindow.close();
        }, 10);
      } catch (err) {
        Logger.error(err);
      }

      setTimeout(function () {
        document.body.removeChild(iframe);
      }, 100);
    };
  }
}

var Print =
/** @class */
function (_super) {
  __extends(Print, _super);

  function Print() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(Print.prototype, "name", {
    get: function get() {
      return 'print';
    },
    enumerable: true,
    configurable: true
  });

  Print.prototype.commands = function () {
    return function () {
      return function (_state, _dispatch, view) {
        var editorContent = view.dom.closest('.el-tiptap-editor__content');

        if (editorContent) {
          printHtml(editorContent);
          return true;
        }

        return false;
      };
    };
  };

  Print.prototype.menuBtnView = function (_a) {
    var commands = _a.commands;
    return {
      component: __vue_component__$2,
      componentProps: {
        command: commands.print,
        icon: 'print',
        tooltip: t('editor.extensions.Print.tooltip')
      }
    };
  };

  return Print;
}(Extension);

var _a$c;

var PreviewCommandButton =
/** @class */
function (_super) {
  __extends(PreviewCommandButton, _super);

  function PreviewCommandButton() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.html = '';
    _this.previewDialogVisible = false;
    return _this;
  }

  PreviewCommandButton.prototype.onVisibleChange = function (visible) {
    if (visible) this.getHtml();
  };

  PreviewCommandButton.prototype.togglePreviewDialogVisible = function () {
    this.previewDialogVisible = !this.previewDialogVisible;
  };

  PreviewCommandButton.prototype.getHtml = function () {
    this.html = this.editorContext.editor.getHTML();
  };

  __decorate([Prop({
    type: Object,
    required: true
  })], PreviewCommandButton.prototype, "editorContext", void 0);

  __decorate([Prop({
    type: String,
    default: PREVIEW_WINDOW_WIDTH
  })], PreviewCommandButton.prototype, "contentWidth", void 0);

  __decorate([Watch('previewDialogVisible')], PreviewCommandButton.prototype, "onVisibleChange", null);

  PreviewCommandButton = __decorate([Component({
    components: (_a$c = {}, _a$c[_Dialog.name] = _Dialog, _a$c.CommandButton = __vue_component__$2, _a$c)
  })], PreviewCommandButton);
  return PreviewCommandButton;
}(mixins(i18nMixin));

/* script */
const __vue_script__$t = PreviewCommandButton;

/* template */
var __vue_render__$s = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('command-button',{attrs:{"command":_vm.togglePreviewDialogVisible,"tooltip":_vm.t('editor.extensions.Preview.tooltip'),"icon":"eye"}}),_vm._v(" "),_c('el-dialog',{attrs:{"title":_vm.t('editor.extensions.Preview.dialog.title'),"visible":_vm.previewDialogVisible,"width":_vm.contentWidth,"append-to-body":true},on:{"update:visible":function($event){_vm.previewDialogVisible=$event;}}},[_c('div',{staticClass:"el-tiptap-editor__content"},[_c('div',{domProps:{"innerHTML":_vm._s(_vm.html)}})])])],1)};
var __vue_staticRenderFns__$s = [];

  /* style */
  const __vue_inject_styles__$t = undefined;
  /* scoped */
  const __vue_scope_id__$t = undefined;
  /* module identifier */
  const __vue_module_identifier__$t = undefined;
  /* functional template */
  const __vue_is_functional_template__$t = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$t = normalizeComponent(
    { render: __vue_render__$s, staticRenderFns: __vue_staticRenderFns__$s },
    __vue_inject_styles__$t,
    __vue_script__$t,
    __vue_scope_id__$t,
    __vue_is_functional_template__$t,
    __vue_module_identifier__$t,
    false,
    undefined,
    undefined,
    undefined
  );

var Preview =
/** @class */
function (_super) {
  __extends(Preview, _super);

  function Preview() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(Preview.prototype, "name", {
    get: function get() {
      return 'preview';
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Preview.prototype, "defaultOptions", {
    get: function get() {
      return {
        contentWidth: PREVIEW_WINDOW_WIDTH
      };
    },
    enumerable: true,
    configurable: true
  });

  Preview.prototype.menuBtnView = function (editorContext) {
    return {
      component: __vue_component__$t,
      componentProps: {
        editorContext: editorContext,
        contentWidth: this.options.contentWidth
      }
    };
  };

  return Preview;
}(Extension);

var SelectAll =
/** @class */
function (_super) {
  __extends(SelectAll, _super);

  function SelectAll() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(SelectAll.prototype, "name", {
    get: function get() {
      return 'select_all';
    },
    enumerable: true,
    configurable: true
  });

  SelectAll.prototype.commands = function () {
    return function () {
      return selectAll;
    };
  };

  SelectAll.prototype.menuBtnView = function (_a) {
    var commands = _a.commands;
    return {
      component: __vue_component__$2,
      componentProps: {
        command: commands.select_all,
        icon: 'regular/object-group',
        tooltip: t('editor.extensions.SelectAll.tooltip')
      }
    };
  };

  return SelectAll;
}(Extension);

var ElementTiptapPlugin = {
  installed: false,
  spellcheck: true,
  install: function install(Vue, options) {
    if (options === void 0) {
      options = {};
    }

    var lang = options.lang;
    if (lang) useLang(lang);
    this.spellcheck = options.spellcheck == null ? true : options.spellcheck;
    Vue.component('el-tiptap', __vue_component__$8);
    Vue.prototype.$elementTiptapPlugin = this;
    this.installed = true;
  }
};

export { Blockquote, Bold, BulletList, CodeBlock, __vue_component__$8 as ElementTiptap, ElementTiptapPlugin, FontType, FormatClear, Fullscreen, Heading, History, HorizontalRule, Iframe, Image$1 as Image, Indent, Italic, LineHeight, Link, ListItem, Music, Image$2 as NewIframe, OrderedList, Paragraph, Preview, Print, SelectAll, Strike, Table, TextAlign, TextColor, TextHighlight, TodoItem, TodoList, Underline, Music$1 as Video };
