import { r as reactExports, c as commonjsGlobal, g as getDefaultExportFromCjs } from './__federation_shared_react.js';
import { r as reactDomExports } from './__federation_shared_react-dom.js';

function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
      if (k !== 'default' && !(k in n)) {
        const d = Object.getOwnPropertyDescriptor(e, k);
        if (d) {
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    } }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }));
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f$8=reactExports,k$4=Symbol.for("react.element"),l$b=Symbol.for("react.fragment"),m$a=Object.prototype.hasOwnProperty,n$9=f$8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p$9={key:!0,ref:!0,__self:!0,__source:!0};
function q$7(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m$a.call(a,b)&&!p$9.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k$4,type:c,key:e,ref:h,props:d,_owner:n$9.current}}reactJsxRuntime_production_min.Fragment=l$b;reactJsxRuntime_production_min.jsx=q$7;reactJsxRuntime_production_min.jsxs=q$7;

{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}

var jsxRuntimeExports = jsxRuntime.exports;

var createRoot;

var m$9 = reactDomExports;
{
  createRoot = m$9.createRoot;
  m$9.hydrateRoot;
}

const buildIdentifier = "[0-9A-Za-z-]+";
const build = `(?:\\+(${buildIdentifier}(?:\\.${buildIdentifier})*))`;
const numericIdentifier = "0|[1-9]\\d*";
const numericIdentifierLoose = "[0-9]+";
const nonNumericIdentifier = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
const preReleaseIdentifierLoose = `(?:${numericIdentifierLoose}|${nonNumericIdentifier})`;
const preReleaseLoose = `(?:-?(${preReleaseIdentifierLoose}(?:\\.${preReleaseIdentifierLoose})*))`;
const preReleaseIdentifier = `(?:${numericIdentifier}|${nonNumericIdentifier})`;
const preRelease = `(?:-(${preReleaseIdentifier}(?:\\.${preReleaseIdentifier})*))`;
const xRangeIdentifier = `${numericIdentifier}|x|X|\\*`;
const xRangePlain = `[v=\\s]*(${xRangeIdentifier})(?:\\.(${xRangeIdentifier})(?:\\.(${xRangeIdentifier})(?:${preRelease})?${build}?)?)?`;
const hyphenRange = `^\\s*(${xRangePlain})\\s+-\\s+(${xRangePlain})\\s*$`;
const mainVersionLoose = `(${numericIdentifierLoose})\\.(${numericIdentifierLoose})\\.(${numericIdentifierLoose})`;
const loosePlain = `[v=\\s]*${mainVersionLoose}${preReleaseLoose}?${build}?`;
const gtlt = "((?:<|>)?=?)";
const comparatorTrim = `(\\s*)${gtlt}\\s*(${loosePlain}|${xRangePlain})`;
const loneTilde = "(?:~>?)";
const tildeTrim = `(\\s*)${loneTilde}\\s+`;
const loneCaret = "(?:\\^)";
const caretTrim = `(\\s*)${loneCaret}\\s+`;
const star = "(<|>)?=?\\s*\\*";
const caret = `^${loneCaret}${xRangePlain}$`;
const mainVersion = `(${numericIdentifier})\\.(${numericIdentifier})\\.(${numericIdentifier})`;
const fullPlain = `v?${mainVersion}${preRelease}?${build}?`;
const tilde = `^${loneTilde}${xRangePlain}$`;
const xRange = `^${gtlt}\\s*${xRangePlain}$`;
const comparator = `^${gtlt}\\s*(${fullPlain})$|^$`;
const gte0 = "^\\s*>=\\s*0.0.0\\s*$";
function parseRegex(source) {
  return new RegExp(source);
}
function isXVersion(version) {
  return !version || version.toLowerCase() === "x" || version === "*";
}
function pipe(...fns) {
  return (x) => {
    return fns.reduce((v, f) => f(v), x);
  };
}
function extractComparator(comparatorString) {
  return comparatorString.match(parseRegex(comparator));
}
function combineVersion(major, minor, patch, preRelease2) {
  const mainVersion2 = `${major}.${minor}.${patch}`;
  if (preRelease2) {
    return `${mainVersion2}-${preRelease2}`;
  }
  return mainVersion2;
}
function parseHyphen(range) {
  return range.replace(
    parseRegex(hyphenRange),
    (_range, from, fromMajor, fromMinor, fromPatch, _fromPreRelease, _fromBuild, to, toMajor, toMinor, toPatch, toPreRelease) => {
      if (isXVersion(fromMajor)) {
        from = "";
      } else if (isXVersion(fromMinor)) {
        from = `>=${fromMajor}.0.0`;
      } else if (isXVersion(fromPatch)) {
        from = `>=${fromMajor}.${fromMinor}.0`;
      } else {
        from = `>=${from}`;
      }
      if (isXVersion(toMajor)) {
        to = "";
      } else if (isXVersion(toMinor)) {
        to = `<${+toMajor + 1}.0.0-0`;
      } else if (isXVersion(toPatch)) {
        to = `<${toMajor}.${+toMinor + 1}.0-0`;
      } else if (toPreRelease) {
        to = `<=${toMajor}.${toMinor}.${toPatch}-${toPreRelease}`;
      } else {
        to = `<=${to}`;
      }
      return `${from} ${to}`.trim();
    }
  );
}
function parseComparatorTrim(range) {
  return range.replace(parseRegex(comparatorTrim), "$1$2$3");
}
function parseTildeTrim(range) {
  return range.replace(parseRegex(tildeTrim), "$1~");
}
function parseCaretTrim(range) {
  return range.replace(parseRegex(caretTrim), "$1^");
}
function parseCarets(range) {
  return range.trim().split(/\s+/).map((rangeVersion) => {
    return rangeVersion.replace(
      parseRegex(caret),
      (_, major, minor, patch, preRelease2) => {
        if (isXVersion(major)) {
          return "";
        } else if (isXVersion(minor)) {
          return `>=${major}.0.0 <${+major + 1}.0.0-0`;
        } else if (isXVersion(patch)) {
          if (major === "0") {
            return `>=${major}.${minor}.0 <${major}.${+minor + 1}.0-0`;
          } else {
            return `>=${major}.${minor}.0 <${+major + 1}.0.0-0`;
          }
        } else if (preRelease2) {
          if (major === "0") {
            if (minor === "0") {
              return `>=${major}.${minor}.${patch}-${preRelease2} <${major}.${minor}.${+patch + 1}-0`;
            } else {
              return `>=${major}.${minor}.${patch}-${preRelease2} <${major}.${+minor + 1}.0-0`;
            }
          } else {
            return `>=${major}.${minor}.${patch}-${preRelease2} <${+major + 1}.0.0-0`;
          }
        } else {
          if (major === "0") {
            if (minor === "0") {
              return `>=${major}.${minor}.${patch} <${major}.${minor}.${+patch + 1}-0`;
            } else {
              return `>=${major}.${minor}.${patch} <${major}.${+minor + 1}.0-0`;
            }
          }
          return `>=${major}.${minor}.${patch} <${+major + 1}.0.0-0`;
        }
      }
    );
  }).join(" ");
}
function parseTildes(range) {
  return range.trim().split(/\s+/).map((rangeVersion) => {
    return rangeVersion.replace(
      parseRegex(tilde),
      (_, major, minor, patch, preRelease2) => {
        if (isXVersion(major)) {
          return "";
        } else if (isXVersion(minor)) {
          return `>=${major}.0.0 <${+major + 1}.0.0-0`;
        } else if (isXVersion(patch)) {
          return `>=${major}.${minor}.0 <${major}.${+minor + 1}.0-0`;
        } else if (preRelease2) {
          return `>=${major}.${minor}.${patch}-${preRelease2} <${major}.${+minor + 1}.0-0`;
        }
        return `>=${major}.${minor}.${patch} <${major}.${+minor + 1}.0-0`;
      }
    );
  }).join(" ");
}
function parseXRanges(range) {
  return range.split(/\s+/).map((rangeVersion) => {
    return rangeVersion.trim().replace(
      parseRegex(xRange),
      (ret, gtlt2, major, minor, patch, preRelease2) => {
        const isXMajor = isXVersion(major);
        const isXMinor = isXMajor || isXVersion(minor);
        const isXPatch = isXMinor || isXVersion(patch);
        if (gtlt2 === "=" && isXPatch) {
          gtlt2 = "";
        }
        preRelease2 = "";
        if (isXMajor) {
          if (gtlt2 === ">" || gtlt2 === "<") {
            return "<0.0.0-0";
          } else {
            return "*";
          }
        } else if (gtlt2 && isXPatch) {
          if (isXMinor) {
            minor = 0;
          }
          patch = 0;
          if (gtlt2 === ">") {
            gtlt2 = ">=";
            if (isXMinor) {
              major = +major + 1;
              minor = 0;
              patch = 0;
            } else {
              minor = +minor + 1;
              patch = 0;
            }
          } else if (gtlt2 === "<=") {
            gtlt2 = "<";
            if (isXMinor) {
              major = +major + 1;
            } else {
              minor = +minor + 1;
            }
          }
          if (gtlt2 === "<") {
            preRelease2 = "-0";
          }
          return `${gtlt2 + major}.${minor}.${patch}${preRelease2}`;
        } else if (isXMinor) {
          return `>=${major}.0.0${preRelease2} <${+major + 1}.0.0-0`;
        } else if (isXPatch) {
          return `>=${major}.${minor}.0${preRelease2} <${major}.${+minor + 1}.0-0`;
        }
        return ret;
      }
    );
  }).join(" ");
}
function parseStar(range) {
  return range.trim().replace(parseRegex(star), "");
}
function parseGTE0(comparatorString) {
  return comparatorString.trim().replace(parseRegex(gte0), "");
}
function compareAtom(rangeAtom, versionAtom) {
  rangeAtom = +rangeAtom || rangeAtom;
  versionAtom = +versionAtom || versionAtom;
  if (rangeAtom > versionAtom) {
    return 1;
  }
  if (rangeAtom === versionAtom) {
    return 0;
  }
  return -1;
}
function comparePreRelease(rangeAtom, versionAtom) {
  const { preRelease: rangePreRelease } = rangeAtom;
  const { preRelease: versionPreRelease } = versionAtom;
  if (rangePreRelease === void 0 && !!versionPreRelease) {
    return 1;
  }
  if (!!rangePreRelease && versionPreRelease === void 0) {
    return -1;
  }
  if (rangePreRelease === void 0 && versionPreRelease === void 0) {
    return 0;
  }
  for (let i = 0, n = rangePreRelease.length; i <= n; i++) {
    const rangeElement = rangePreRelease[i];
    const versionElement = versionPreRelease[i];
    if (rangeElement === versionElement) {
      continue;
    }
    if (rangeElement === void 0 && versionElement === void 0) {
      return 0;
    }
    if (!rangeElement) {
      return 1;
    }
    if (!versionElement) {
      return -1;
    }
    return compareAtom(rangeElement, versionElement);
  }
  return 0;
}
function compareVersion(rangeAtom, versionAtom) {
  return compareAtom(rangeAtom.major, versionAtom.major) || compareAtom(rangeAtom.minor, versionAtom.minor) || compareAtom(rangeAtom.patch, versionAtom.patch) || comparePreRelease(rangeAtom, versionAtom);
}
function eq(rangeAtom, versionAtom) {
  return rangeAtom.version === versionAtom.version;
}
function compare(rangeAtom, versionAtom) {
  switch (rangeAtom.operator) {
    case "":
    case "=":
      return eq(rangeAtom, versionAtom);
    case ">":
      return compareVersion(rangeAtom, versionAtom) < 0;
    case ">=":
      return eq(rangeAtom, versionAtom) || compareVersion(rangeAtom, versionAtom) < 0;
    case "<":
      return compareVersion(rangeAtom, versionAtom) > 0;
    case "<=":
      return eq(rangeAtom, versionAtom) || compareVersion(rangeAtom, versionAtom) > 0;
    case void 0: {
      return true;
    }
    default:
      return false;
  }
}
function parseComparatorString(range) {
  return pipe(
    parseCarets,
    parseTildes,
    parseXRanges,
    parseStar
  )(range);
}
function parseRange(range) {
  return pipe(
    parseHyphen,
    parseComparatorTrim,
    parseTildeTrim,
    parseCaretTrim
  )(range.trim()).split(/\s+/).join(" ");
}
function satisfy(version, range) {
  if (!version) {
    return false;
  }
  const parsedRange = parseRange(range);
  const parsedComparator = parsedRange.split(" ").map((rangeVersion) => parseComparatorString(rangeVersion)).join(" ");
  const comparators = parsedComparator.split(/\s+/).map((comparator2) => parseGTE0(comparator2));
  const extractedVersion = extractComparator(version);
  if (!extractedVersion) {
    return false;
  }
  const [
    ,
    versionOperator,
    ,
    versionMajor,
    versionMinor,
    versionPatch,
    versionPreRelease
  ] = extractedVersion;
  const versionAtom = {
    operator: versionOperator,
    version: combineVersion(
      versionMajor,
      versionMinor,
      versionPatch,
      versionPreRelease
    ),
    major: versionMajor,
    minor: versionMinor,
    patch: versionPatch,
    preRelease: versionPreRelease == null ? void 0 : versionPreRelease.split(".")
  };
  for (const comparator2 of comparators) {
    const extractedComparator = extractComparator(comparator2);
    if (!extractedComparator) {
      return false;
    }
    const [
      ,
      rangeOperator,
      ,
      rangeMajor,
      rangeMinor,
      rangePatch,
      rangePreRelease
    ] = extractedComparator;
    const rangeAtom = {
      operator: rangeOperator,
      version: combineVersion(
        rangeMajor,
        rangeMinor,
        rangePatch,
        rangePreRelease
      ),
      major: rangeMajor,
      minor: rangeMinor,
      patch: rangePatch,
      preRelease: rangePreRelease == null ? void 0 : rangePreRelease.split(".")
    };
    if (!compare(rangeAtom, versionAtom)) {
      return false;
    }
  }
  return true;
}

// eslint-disable-next-line no-undef
const moduleMap = {'react':{get:()=>()=>__federation_import('./__federation_shared_react.js'),import:true},'react-dom':{get:()=>()=>__federation_import('./__federation_shared_react-dom.js'),import:true}};
const moduleCache = Object.create(null);
async function importShared(name, shareScope = 'default') {
  return moduleCache[name]
    ? new Promise((r) => r(moduleCache[name]))
    : (await getSharedFromRuntime(name, shareScope)) || getSharedFromLocal(name)
}
// eslint-disable-next-line
async function __federation_import(name) {
  return import(name)
}
async function getSharedFromRuntime(name, shareScope) {
  let module = null;
  if (globalThis?.__federation_shared__?.[shareScope]?.[name]) {
    const versionObj = globalThis.__federation_shared__[shareScope][name];
    const versionKey = Object.keys(versionObj)[0];
    const versionValue = Object.values(versionObj)[0];
    if (moduleMap[name]?.requiredVersion) {
      // judge version satisfy
      if (satisfy(versionKey, moduleMap[name].requiredVersion)) {
        module = await (await versionValue.get())();
      } else {
        console.log(
          `provider support ${name}(${versionKey}) is not satisfied requiredVersion(\${moduleMap[name].requiredVersion})`
        );
      }
    } else {
      module = await (await versionValue.get())();
    }
  }
  if (module) {
    if (module.default) module = module.default;
    moduleCache[name] = module;
    return module
  }
}
async function getSharedFromLocal(name) {
  if (moduleMap[name]?.import) {
    let module = await (await moduleMap[name].get())();
    if (module.default) module = module.default;
    moduleCache[name] = module;
    return module
  } else {
    console.error(
      `consumer config import=false,so cant use callback shared module`
    );
  }
}

/**
 * @remix-run/router v1.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$3() {
  _extends$3 = Object.assign ? Object.assign.bind() : function (target) {
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
  return _extends$3.apply(this, arguments);
}

////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////
/**
 * Actions represent the type of change to a location value.
 */
var Action;
(function (Action) {
  /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */
  Action["Pop"] = "POP";
  /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */
  Action["Push"] = "PUSH";
  /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */
  Action["Replace"] = "REPLACE";
})(Action || (Action = {}));
const PopStateEventType = "popstate";
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */
function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createBrowserLocation(window, globalHistory) {
    let {
      pathname,
      search,
      hash
    } = window.location;
    return createLocation("", {
      pathname,
      search,
      hash
    },
    // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }
  function createBrowserHref(window, to) {
    return typeof to === "string" ? to : createPath(to);
  }
  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);
    try {
      // Welcome to debugging history!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message);
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
/**
 * For browser-based histories, we combine the state and key into an object
 */
function getHistoryState(location, index) {
  return {
    usr: location.state,
    key: location.key,
    idx: index
  };
}
/**
 * Creates a Location object with a unique key from the given Path
 */
function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }
  let location = _extends$3({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });
  return location;
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }
  let {
    window = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window.history;
  let action = Action.Pop;
  let listener = null;
  let index = getIndex();
  // Index should only be null when we initialize. If not, it's because the
  // user called history.pushState or history.replaceState directly, in which
  // case we should log a warning as it will result in bugs.
  if (index == null) {
    index = 0;
    globalHistory.replaceState(_extends$3({}, globalHistory.state, {
      idx: index
    }), "");
  }
  function getIndex() {
    let state = globalHistory.state || {
      idx: null
    };
    return state.idx;
  }
  function handlePop() {
    action = Action.Pop;
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;
    if (listener) {
      listener({
        action,
        location: history.location,
        delta
      });
    }
  }
  function push(to, state) {
    action = Action.Push;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex() + 1;
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    // try...catch because iOS limits us to 100 pushState calls :/
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      // If the exception is because `state` can't be serialized, let that throw
      // outwards just like a replace call would so the dev knows the cause
      // https://html.spec.whatwg.org/multipage/nav-history-apis.html#shared-history-push/replace-state-steps
      // https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal
      if (error instanceof DOMException && error.name === "DataCloneError") {
        throw error;
      }
      // They are going to lose state here, but there is no real
      // way to warn them about it since the page will refresh...
      window.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 1
      });
    }
  }
  function replace(to, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex();
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 0
      });
    }
  }
  function createURL(to) {
    // window.location.origin is "null" (the literal string value) in Firefox
    // under certain conditions, notably when serving from a local HTML file
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
    let base = window.location.origin !== "null" ? window.location.origin : window.location.href;
    let href = typeof to === "string" ? to : createPath(to);
    invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
    return new URL(href, base);
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window, globalHistory);
    },
    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to) {
      return createHref(window, to);
    },
    createURL,
    encodeLocation(to) {
      // Encode a Location the same way window.location would
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },
    push,
    replace,
    go(n) {
      return globalHistory.go(n);
    }
  };
  return history;
}
//#endregion

var ResultType;
(function (ResultType) {
  ResultType["data"] = "data";
  ResultType["deferred"] = "deferred";
  ResultType["redirect"] = "redirect";
  ResultType["error"] = "error";
})(ResultType || (ResultType = {}));
/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/utils/match-routes
 */
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(branches[i],
    // Incoming pathnames are generally encoded from either window.location
    // or from router.navigate, but we want to match against the unencoded
    // paths in the route definitions.  Memory router locations won't be
    // encoded here but there also shouldn't be anything to decode so this
    // should be a safe operation.  This avoids needing matchRoutes to be
    // history-aware.
    safelyDecodeURI(pathname));
  }
  return matches;
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === undefined ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    // Add the children before adding this route to the array so we traverse the
    // route tree depth-first and child routes appear before their parents in
    // the "flattened" version.
    if (route.children && route.children.length > 0) {
      invariant(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      route.index !== true, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\"."));
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    // Routes without a path shouldn't ever match by themselves unless they are
    // index routes, so don't add them to the list of possible branches.
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  routes.forEach((route, index) => {
    var _route$path;
    // coarse-grain check for optional params
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded);
      }
    }
  });
  return branches;
}
/**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0) return [];
  let [first, ...rest] = segments;
  // Optional path segments are denoted by a trailing `?`
  let isOptional = first.endsWith("?");
  // Compute the corresponding required segment: `foo?` -> `foo`
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    // Intepret empty string as omitting an optional segment
    // `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  // All child paths with the prefix.  Do this for all children before the
  // optional version for all children so we get consistent ordering where the
  // parent optional aspect is preferred as required.  Otherwise, we can get
  // child sections interspersed where deeper optional segments are higher than
  // parent optional segments, where for example, /:two would explodes _earlier_
  // then /:one.  By always including the parent as required _for all children_
  // first, we avoid this issue
  result.push(...restExploded.map(subpath => subpath === "" ? required : [required, subpath].join("/")));
  // Then if this is an optional value, add all child versions without
  if (isOptional) {
    result.push(...restExploded);
  }
  // for absolute paths, ensure `/` instead of empty segment
  return result.map(exploded => path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
  : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
}
const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = s => s === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ?
  // If two routes are siblings, we should try to match the earlier sibling
  // first. This allows people to have fine-grained control over the matching
  // behavior by simply putting routes with identical paths in the order they
  // want them tried.
  a[a.length - 1] - b[b.length - 1] :
  // Otherwise, it doesn't really make sense to rank non-siblings by index,
  // so they sort equally.
  0;
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match) return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/utils/match-path
 */
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index) => {
    // We need to compute the pathnameBase here using the raw splat value
    // instead of using params["*"] later because it will be decoded then
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
  .replace(/^\/*/, "/") // Make sure it has a leading /
  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
  .replace(/\/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "/([^\\/]+)";
  });
  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
    : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
  } else if (end) {
    // When matching to the end, ignore trailing slashes
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    // If our path is non-empty and contains anything beyond an initial slash,
    // then we have _some_ form of path in our regex so we should expect to
    // match only if we find the end of this path segment.  Look for an optional
    // non-captured trailing slash (to match a portion of the URL) or the end
    // of the path (if we've matched to the end).  We used to do this with a
    // word boundary but that gives false positives on routes like
    // /user-preferences since `-` counts as a word boundary.
    regexpSource += "(?:(?=\\/|$))";
  } else ;
  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
  return [matcher, paramNames];
}
function safelyDecodeURI(value) {
  try {
    return decodeURI(value);
  } catch (error) {
    warning(false, "The URL path \"" + value + "\" could not be decoded because it is is a " + "malformed URL segment. This is probably due to a bad percent " + ("encoding (" + error + ")."));
    return value;
  }
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    warning(false, "The value for the URL param \"" + paramName + "\" will not be decoded because" + (" the string \"" + value + "\" is a malformed URL segment. This is probably") + (" due to a bad percent encoding (" + error + ")."));
    return value;
  }
}
/**
 * @private
 */
function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  // We want to leave trailing slash behavior in the user's control, so if they
  // specify a basename with a trailing slash, we should support it
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    // pathname does not start with basename/
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/utils/resolve-path
 */
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach(segment => {
    if (segment === "..") {
      // Keep the root "" segment so the pathname starts at /
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + "a string in <Link to=\"...\"> and the router will parse it for you.";
}
/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */
function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
/**
 * @private
 */
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  let to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends$3({}, toArg);
    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  // Routing is relative to the current pathname if explicitly requested.
  //
  // If a pathname is explicitly provided in `to`, it should be relative to the
  // route context. This is explained in `Note on `<Link to>` values` in our
  // migration guide from v5 as a means of disambiguation between `to` values
  // that begin with `/` and those that do not. However, this is problematic for
  // `to` values that do not provide a pathname. `to` can simply be a search or
  // hash string, in which case we should assume that the navigation is relative
  // to the current location's pathname and *not* the route pathname.
  if (isPathRelative || toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      // Each leading .. segment means "go up one route" instead of "go up one
      // URL segment".  This is a key difference from how <a href> works and a
      // major reason we call this a "to" value instead of a "href".
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    // If there are more ".." segments than parent routes, resolve relative to
    // the root / URL.
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  // Ensure the pathname has a trailing slash if the original "to" had one
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  // Or if this was a link to the current path which has a trailing slash
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
/**
 * @private
 */
const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");
/**
 * @private
 */
const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
/**
 * @private
 */
const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
/**
 * @private
 */
const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
class AbortedDeferredError extends Error {}
/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response thrown from an action/loader
 */
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}

const validMutationMethodsArr = ["post", "put", "patch", "delete"];
new Set(validMutationMethodsArr);
const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
new Set(validRequestMethodsArr);

/**
 * React Router v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const React$8 = await importShared('react');

function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function (target) {
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
  return _extends$2.apply(this, arguments);
}

// Create react-specific types from the agnostic types in @remix-run/router to
// export from react-router
const DataRouterContext = /*#__PURE__*/React$8.createContext(null);
const DataRouterStateContext = /*#__PURE__*/React$8.createContext(null);
const AwaitContext = /*#__PURE__*/React$8.createContext(null);

/**
 * A Navigator is a "location changer"; it's how you get to different locations.
 *
 * Every history instance conforms to the Navigator interface, but the
 * distinction is useful primarily when it comes to the low-level <Router> API
 * where both the location and a navigator must be provided separately in order
 * to avoid "tearing" that may occur in a suspense-enabled app if the action
 * and/or location were to be read directly from the history instance.
 */

const NavigationContext = /*#__PURE__*/React$8.createContext(null);
const LocationContext = /*#__PURE__*/React$8.createContext(null);
const RouteContext = /*#__PURE__*/React$8.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
const RouteErrorContext = /*#__PURE__*/React$8.createContext(null);

/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/hooks/use-href
 */
function useHref(to, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    basename,
    navigator
  } = React$8.useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to, {
    relative
  });
  let joinedPathname = pathname;

  // If we're operating within a basename, prepend it to the pathname prior
  // to creating the href.  If this is a root navigation, then just use the raw
  // basename which allows the basename to have full control over the presence
  // of a trailing slash on root links
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
  }
  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}

/**
 * Returns true if this component is a descendant of a <Router>.
 *
 * @see https://reactrouter.com/hooks/use-in-router-context
 */
function useInRouterContext() {
  return React$8.useContext(LocationContext) != null;
}

/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */
function useLocation() {
  !useInRouterContext() ? invariant(false) : void 0;
  return React$8.useContext(LocationContext).location;
}

// Mute warnings for calls to useNavigate in SSR environments
function useIsomorphicLayoutEffect$2(cb) {
  let isStatic = React$8.useContext(NavigationContext).static;
  if (!isStatic) {
    // We should be able to get rid of this once react 18.3 is released
    // See: https://github.com/facebook/react/pull/26395
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React$8.useLayoutEffect(cb);
  }
}

/**
 * Returns an imperative method for changing the location. Used by <Link>s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/hooks/use-navigate
 */
function useNavigate() {
  let {
    isDataRoute
  } = React$8.useContext(RouteContext);
  // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
  !useInRouterContext() ? invariant(false) : void 0;
  let dataRouterContext = React$8.useContext(DataRouterContext);
  let {
    basename,
    navigator
  } = React$8.useContext(NavigationContext);
  let {
    matches
  } = React$8.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map(match => match.pathnameBase));
  let activeRef = React$8.useRef(false);
  useIsomorphicLayoutEffect$2(() => {
    activeRef.current = true;
  });
  let navigate = React$8.useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }

    // Short circuit here since if this happens on first render the navigate
    // is useless because we haven't wired up our history listener yet
    if (!activeRef.current) return;
    if (typeof to === "number") {
      navigator.go(to);
      return;
    }
    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");

    // If we're operating within a basename, prepend it to the pathname prior
    // to handing off to history (but only if we're not in a data router,
    // otherwise it'll prepend the basename inside of the router).
    // If this is a root navigation, then we navigate to the raw basename
    // which allows the basename to have full control over the presence of a
    // trailing slash on root links
    if (dataRouterContext == null && basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
  }, [basename, navigator, routePathnamesJson, locationPathname, dataRouterContext]);
  return navigate;
}

/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/hooks/use-params
 */
function useParams() {
  let {
    matches
  } = React$8.useContext(RouteContext);
  let routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}

/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/hooks/use-resolved-path
 */
function useResolvedPath(to, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    matches
  } = React$8.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map(match => match.pathnameBase));
  return React$8.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}

/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an <Outlet> to render their child route's
 * element.
 *
 * @see https://reactrouter.com/hooks/use-routes
 */
function useRoutes(routes, locationArg) {
  return useRoutesImpl(routes, locationArg);
}

// Internal implementation with accept optional param for RouterProvider usage
function useRoutesImpl(routes, locationArg, dataRouterState) {
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    navigator
  } = React$8.useContext(NavigationContext);
  let {
    matches: parentMatches
  } = React$8.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  routeMatch && routeMatch.route;
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes(routes, {
    pathname: remainingPathname
  });
  let renderedMatches = _renderMatches(matches && matches.map(match => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([parentPathnameBase,
    // Re-encode pathnames that were decoded inside matchRoutes
    navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase,
    // Re-encode pathnames that were decoded inside matchRoutes
    navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase])
  })), parentMatches, dataRouterState);

  // When a user passes in a `locationArg`, the associated routes need to
  // be wrapped in a new `LocationContext.Provider` in order for `useLocation`
  // to use the scoped location instead of the global location.
  if (locationArg && renderedMatches) {
    return /*#__PURE__*/React$8.createElement(LocationContext.Provider, {
      value: {
        location: _extends$2({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: Action.Pop
      }
    }, renderedMatches);
  }
  return renderedMatches;
}
function DefaultErrorComponent() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let devInfo = null;
  return /*#__PURE__*/React$8.createElement(React$8.Fragment, null, /*#__PURE__*/React$8.createElement("h2", null, "Unexpected Application Error!"), /*#__PURE__*/React$8.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /*#__PURE__*/React$8.createElement("pre", {
    style: preStyles
  }, stack) : null, devInfo);
}
const defaultErrorElement = /*#__PURE__*/React$8.createElement(DefaultErrorComponent, null);
class RenderErrorBoundary extends React$8.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      revalidation: props.revalidation,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error: error
    };
  }
  static getDerivedStateFromProps(props, state) {
    // When we get into an error state, the user will likely click "back" to the
    // previous page that didn't have an error. Because this wraps the entire
    // application, that will have no effect--the error page continues to display.
    // This gives us a mechanism to recover from the error when the location changes.
    //
    // Whether we're in an error state or not, we update the location in state
    // so that when we are in an error state, it gets reset when a new location
    // comes in and the user recovers from the error.
    if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
      return {
        error: props.error,
        location: props.location,
        revalidation: props.revalidation
      };
    }

    // If we're not changing locations, preserve the location but still surface
    // any new errors that may come through. We retain the existing error, we do
    // this because the error provided from the app state may be cleared without
    // the location changing.
    return {
      error: props.error || state.error,
      location: state.location,
      revalidation: props.revalidation || state.revalidation
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }
  render() {
    return this.state.error ? /*#__PURE__*/React$8.createElement(RouteContext.Provider, {
      value: this.props.routeContext
    }, /*#__PURE__*/React$8.createElement(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref;
  let dataRouterContext = React$8.useContext(DataRouterContext);

  // Track how deep we got in our render pass to emulate SSR componentDidCatch
  // in a DataStaticRouter
  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /*#__PURE__*/React$8.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState) {
  var _dataRouterState2;
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (dataRouterState === void 0) {
    dataRouterState = null;
  }
  if (matches == null) {
    var _dataRouterState;
    if ((_dataRouterState = dataRouterState) != null && _dataRouterState.errors) {
      // Don't bail if we have data router errors so we can render them in the
      // boundary.  Use the pre-matched (or shimmed) matches
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;

  // If we have data errors, trim matches to the highest error boundary
  let errors = (_dataRouterState2 = dataRouterState) == null ? void 0 : _dataRouterState2.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex(m => m.route.id && (errors == null ? void 0 : errors[m.route.id]));
    !(errorIndex >= 0) ? invariant(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }
  return renderedMatches.reduceRight((outlet, match, index) => {
    let error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null;
    // Only data routers handle errors
    let errorElement = null;
    if (dataRouterState) {
      errorElement = match.route.errorElement || defaultErrorElement;
    }
    let matches = parentMatches.concat(renderedMatches.slice(0, index + 1));
    let getChildren = () => {
      let children;
      if (error) {
        children = errorElement;
      } else if (match.route.Component) {
        // Note: This is a de-optimized path since React won't re-use the
        // ReactElement since it's identity changes with each new
        // React.createElement call.  We keep this so folks can use
        // `<Route Component={...}>` in `<Routes>` but generally `Component`
        // usage is only advised in `RouterProvider` when we can convert it to
        // `element` ahead of time.
        children = /*#__PURE__*/React$8.createElement(match.route.Component, null);
      } else if (match.route.element) {
        children = match.route.element;
      } else {
        children = outlet;
      }
      return /*#__PURE__*/React$8.createElement(RenderedRoute, {
        match: match,
        routeContext: {
          outlet,
          matches,
          isDataRoute: dataRouterState != null
        },
        children: children
      });
    };
    // Only wrap in an error boundary within data router usages when we have an
    // ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
    // an ancestor ErrorBoundary/errorElement
    return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /*#__PURE__*/React$8.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      revalidation: dataRouterState.revalidation,
      component: errorElement,
      error: error,
      children: getChildren(),
      routeContext: {
        outlet: null,
        matches,
        isDataRoute: true
      }
    }) : getChildren();
  }, null);
}
var DataRouterHook$1;
(function (DataRouterHook) {
  DataRouterHook["UseBlocker"] = "useBlocker";
  DataRouterHook["UseRevalidator"] = "useRevalidator";
  DataRouterHook["UseNavigateStable"] = "useNavigate";
})(DataRouterHook$1 || (DataRouterHook$1 = {}));
var DataRouterStateHook$1;
(function (DataRouterStateHook) {
  DataRouterStateHook["UseBlocker"] = "useBlocker";
  DataRouterStateHook["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook["UseActionData"] = "useActionData";
  DataRouterStateHook["UseRouteError"] = "useRouteError";
  DataRouterStateHook["UseNavigation"] = "useNavigation";
  DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook["UseMatches"] = "useMatches";
  DataRouterStateHook["UseRevalidator"] = "useRevalidator";
  DataRouterStateHook["UseNavigateStable"] = "useNavigate";
  DataRouterStateHook["UseRouteId"] = "useRouteId";
})(DataRouterStateHook$1 || (DataRouterStateHook$1 = {}));
function useDataRouterContext(hookName) {
  let ctx = React$8.useContext(DataRouterContext);
  !ctx ? invariant(false) : void 0;
  return ctx;
}
function useDataRouterState(hookName) {
  let state = React$8.useContext(DataRouterStateContext);
  !state ? invariant(false) : void 0;
  return state;
}
function useRouteContext(hookName) {
  let route = React$8.useContext(RouteContext);
  !route ? invariant(false) : void 0;
  return route;
}

// Internal version with hookName-aware debugging
function useCurrentRouteId(hookName) {
  let route = useRouteContext();
  let thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id ? invariant(false) : void 0;
  return thisRoute.route.id;
}

/**
 * Returns the nearest ancestor Route error, which could be a loader/action
 * error or a render error.  This is intended to be called from your
 * ErrorBoundary/errorElement to display a proper error message.
 */
function useRouteError() {
  var _state$errors;
  let error = React$8.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook$1.UseRouteError);
  let routeId = useCurrentRouteId(DataRouterStateHook$1.UseRouteError);

  // If this was a render error, we put it in a RouteError context inside
  // of RenderErrorBoundary
  if (error) {
    return error;
  }

  // Otherwise look for errors from our data router state
  return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}

/**
 * Stable version of useNavigate that is used when we are in the context of
 * a RouterProvider.
 */
function useNavigateStable() {
  let {
    router
  } = useDataRouterContext(DataRouterHook$1.UseNavigateStable);
  let id = useCurrentRouteId(DataRouterStateHook$1.UseNavigateStable);
  let activeRef = React$8.useRef(false);
  useIsomorphicLayoutEffect$2(() => {
    activeRef.current = true;
  });
  let navigate = React$8.useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }

    // Short circuit here since if this happens on first render the navigate
    // is useless because we haven't wired up our router subscriber yet
    if (!activeRef.current) return;
    if (typeof to === "number") {
      router.navigate(to);
    } else {
      router.navigate(to, _extends$2({
        fromRouteId: id
      }, options));
    }
  }, [router, id]);
  return navigate;
}
/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/components/navigate
 */
function Navigate(_ref4) {
  let {
    to,
    replace,
    state,
    relative
  } = _ref4;
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    matches
  } = React$8.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let navigate = useNavigate();

  // Resolve the path outside of the effect so that when effects run twice in
  // StrictMode they navigate to the same place
  let path = resolveTo(to, getPathContributingMatches(matches).map(match => match.pathnameBase), locationPathname, relative === "path");
  let jsonPath = JSON.stringify(path);
  React$8.useEffect(() => navigate(JSON.parse(jsonPath), {
    replace,
    state,
    relative
  }), [navigate, jsonPath, relative, replace, state]);
  return null;
}
/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/components/route
 */
function Route(_props) {
  invariant(false) ;
}
/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a <Router> directly. Instead, you'll render a
 * router that is more specific to your environment such as a <BrowserRouter>
 * in web browsers or a <StaticRouter> for server rendering.
 *
 * @see https://reactrouter.com/router-components/router
 */
function Router(_ref5) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator,
    static: staticProp = false
  } = _ref5;
  !!useInRouterContext() ? invariant(false) : void 0;

  // Preserve trailing slashes on basename, so we can let the user control
  // the enforcement of trailing slashes throughout the app
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = React$8.useMemo(() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = React$8.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash, state, key, navigationType]);
  if (locationContext == null) {
    return null;
  }
  return /*#__PURE__*/React$8.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /*#__PURE__*/React$8.createElement(LocationContext.Provider, {
    children: children,
    value: locationContext
  }));
}
/**
 * A container for a nested tree of <Route> elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/components/routes
 */
function Routes(_ref6) {
  let {
    children,
    location
  } = _ref6;
  return useRoutes(createRoutesFromChildren(children), location);
}
var AwaitRenderStatus;
(function (AwaitRenderStatus) {
  AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
  AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
  AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
})(AwaitRenderStatus || (AwaitRenderStatus = {}));
const neverSettledPromise = new Promise(() => {});
class AwaitErrorBoundary extends React$8.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("<Await> caught the following error during render", error, errorInfo);
  }
  render() {
    let {
      children,
      errorElement,
      resolve
    } = this.props;
    let promise = null;
    let status = AwaitRenderStatus.pending;
    if (!(resolve instanceof Promise)) {
      // Didn't get a promise - provide as a resolved promise
      status = AwaitRenderStatus.success;
      promise = Promise.resolve();
      Object.defineProperty(promise, "_tracked", {
        get: () => true
      });
      Object.defineProperty(promise, "_data", {
        get: () => resolve
      });
    } else if (this.state.error) {
      // Caught a render error, provide it as a rejected promise
      status = AwaitRenderStatus.error;
      let renderError = this.state.error;
      promise = Promise.reject().catch(() => {}); // Avoid unhandled rejection warnings
      Object.defineProperty(promise, "_tracked", {
        get: () => true
      });
      Object.defineProperty(promise, "_error", {
        get: () => renderError
      });
    } else if (resolve._tracked) {
      // Already tracked promise - check contents
      promise = resolve;
      status = promise._error !== undefined ? AwaitRenderStatus.error : promise._data !== undefined ? AwaitRenderStatus.success : AwaitRenderStatus.pending;
    } else {
      // Raw (untracked) promise - track it
      status = AwaitRenderStatus.pending;
      Object.defineProperty(resolve, "_tracked", {
        get: () => true
      });
      promise = resolve.then(data => Object.defineProperty(resolve, "_data", {
        get: () => data
      }), error => Object.defineProperty(resolve, "_error", {
        get: () => error
      }));
    }
    if (status === AwaitRenderStatus.error && promise._error instanceof AbortedDeferredError) {
      // Freeze the UI by throwing a never resolved promise
      throw neverSettledPromise;
    }
    if (status === AwaitRenderStatus.error && !errorElement) {
      // No errorElement, throw to the nearest route-level error boundary
      throw promise._error;
    }
    if (status === AwaitRenderStatus.error) {
      // Render via our errorElement
      return /*#__PURE__*/React$8.createElement(AwaitContext.Provider, {
        value: promise,
        children: errorElement
      });
    }
    if (status === AwaitRenderStatus.success) {
      // Render children with resolved value
      return /*#__PURE__*/React$8.createElement(AwaitContext.Provider, {
        value: promise,
        children: children
      });
    }

    // Throw to the suspense boundary
    throw promise;
  }
}

///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////

/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/utils/create-routes-from-children
 */
function createRoutesFromChildren(children, parentPath) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  let routes = [];
  React$8.Children.forEach(children, (element, index) => {
    if (! /*#__PURE__*/React$8.isValidElement(element)) {
      // Ignore non-elements. This allows people to more easily inline
      // conditionals in their route config.
      return;
    }
    let treePath = [...parentPath, index];
    if (element.type === React$8.Fragment) {
      // Transparently support React.Fragment and its children.
      routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
      return;
    }
    !(element.type === Route) ? invariant(false) : void 0;
    !(!element.props.index || !element.props.children) ? invariant(false) : void 0;
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      Component: element.props.Component,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      errorElement: element.props.errorElement,
      ErrorBoundary: element.props.ErrorBoundary,
      hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle,
      lazy: element.props.lazy
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children, treePath);
    }
    routes.push(route);
  });
  return routes;
}

/**
 * React Router DOM v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const React$7 = await importShared('react');

function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function (target) {
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
  return _extends$1.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && (
  // Ignore everything but left clicks
  !target || target === "_self") &&
  // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event) // Ignore clicks with modifier keys
  ;
}
/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */
function createSearchParams(init) {
  if (init === void 0) {
    init = "";
  }
  return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
    let value = init[key];
    return memo.concat(Array.isArray(value) ? value.map(v => [key, v]) : [[key, value]]);
  }, []));
}
function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
  let searchParams = createSearchParams(locationSearch);
  if (defaultSearchParams) {
    for (let key of defaultSearchParams.keys()) {
      if (!searchParams.has(key)) {
        defaultSearchParams.getAll(key).forEach(value => {
          searchParams.append(key, value);
        });
      }
    }
  }
  return searchParams;
}

const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"],
  _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
// Webpack + React 17 fails to compile on the usage of `React.startTransition` or
// `React["startTransition"]` even if it's behind a feature detection of
// `"startTransition" in React`. Moving this to a constant avoids the issue :/
const START_TRANSITION = "startTransition";
/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */
function BrowserRouter(_ref) {
  let {
    basename,
    children,
    window
  } = _ref;
  let historyRef = React$7.useRef();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({
      window,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = React$7.useState({
    action: history.action,
    location: history.location
  });
  let setState = React$7.useCallback(newState => {
    START_TRANSITION in React$7 ? React$7[START_TRANSITION](() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl]);
  React$7.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /*#__PURE__*/React$7.createElement(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
const isBrowser$1 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
/**
 * The public API for rendering a history-aware <a>.
 */
const Link = /*#__PURE__*/React$7.forwardRef(function LinkWithRef(_ref4, ref) {
  let {
      onClick,
      relative,
      reloadDocument,
      replace,
      state,
      target,
      to,
      preventScrollReset
    } = _ref4,
    rest = _objectWithoutPropertiesLoose$1(_ref4, _excluded);
  let {
    basename
  } = React$7.useContext(NavigationContext);
  // Rendered into <a href> for absolute URLs
  let absoluteHref;
  let isExternal = false;
  if (typeof to === "string" && ABSOLUTE_URL_REGEX.test(to)) {
    // Render the absolute href server- and client-side
    absoluteHref = to;
    // Only check for external origins client-side
    if (isBrowser$1) {
      try {
        let currentUrl = new URL(window.location.href);
        let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
        let path = stripBasename(targetUrl.pathname, basename);
        if (targetUrl.origin === currentUrl.origin && path != null) {
          // Strip the protocol/origin/basename for same-origin absolute URLs
          to = path + targetUrl.search + targetUrl.hash;
        } else {
          isExternal = true;
        }
      } catch (e) {
      }
    }
  }
  // Rendered into <a href> for relative URLs
  let href = useHref(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
    preventScrollReset,
    relative
  });
  function handleClick(event) {
    if (onClick) onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    React$7.createElement("a", _extends$1({}, rest, {
      href: absoluteHref || href,
      onClick: isExternal || reloadDocument ? onClick : handleClick,
      ref: ref,
      target: target
    }))
  );
});
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
const NavLink = /*#__PURE__*/React$7.forwardRef(function NavLinkWithRef(_ref5, ref) {
  let {
      "aria-current": ariaCurrentProp = "page",
      caseSensitive = false,
      className: classNameProp = "",
      end = false,
      style: styleProp,
      to,
      children
    } = _ref5,
    rest = _objectWithoutPropertiesLoose$1(_ref5, _excluded2);
  let path = useResolvedPath(to, {
    relative: rest.relative
  });
  let location = useLocation();
  let routerState = React$7.useContext(DataRouterStateContext);
  let {
    navigator
  } = React$7.useContext(NavigationContext);
  let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
  let locationPathname = location.pathname;
  let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
    toPathname = toPathname.toLowerCase();
  }
  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
  let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
  let className;
  if (typeof classNameProp === "function") {
    className = classNameProp({
      isActive,
      isPending
    });
  } else {
    // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [classNameProp, isActive ? "active" : null, isPending ? "pending" : null].filter(Boolean).join(" ");
  }
  let style = typeof styleProp === "function" ? styleProp({
    isActive,
    isPending
  }) : styleProp;
  return /*#__PURE__*/React$7.createElement(Link, _extends$1({}, rest, {
    "aria-current": ariaCurrent,
    className: className,
    ref: ref,
    style: style,
    to: to
  }), typeof children === "function" ? children({
    isActive,
    isPending
  }) : children);
});
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Hooks
////////////////////////////////////////////////////////////////////////////////
var DataRouterHook;
(function (DataRouterHook) {
  DataRouterHook["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook["UseSubmitImpl"] = "useSubmitImpl";
  DataRouterHook["UseFetcher"] = "useFetcher";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function (DataRouterStateHook) {
  DataRouterStateHook["UseFetchers"] = "useFetchers";
  DataRouterStateHook["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to, {
    relative
  });
  return React$7.useCallback(event => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault();
      // If the URL hasn't changed, a regular <a> will do a replace instead of
      // a push, so do the same here unless the replace prop is explicitly set
      let replace = replaceProp !== undefined ? replaceProp : createPath(location) === createPath(path);
      navigate(to, {
        replace,
        state,
        preventScrollReset,
        relative
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */
function useSearchParams(defaultInit) {
  let defaultSearchParamsRef = React$7.useRef(createSearchParams(defaultInit));
  let hasSetSearchParamsRef = React$7.useRef(false);
  let location = useLocation();
  let searchParams = React$7.useMemo(() =>
  // Only merge in the defaults if we haven't yet called setSearchParams.
  // Once we call that we want those to take precedence, otherwise you can't
  // remove a param with setSearchParams({}) if it has an initial value
  getSearchParamsForLocation(location.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current), [location.search]);
  let navigate = useNavigate();
  let setSearchParams = React$7.useCallback((nextInit, navigateOptions) => {
    const newSearchParams = createSearchParams(typeof nextInit === "function" ? nextInit(searchParams) : nextInit);
    hasSetSearchParamsRef.current = true;
    navigate("?" + newSearchParams, navigateOptions);
  }, [navigate, searchParams]);
  return [searchParams, setSearchParams];
}

var shim = {exports: {}};

var useSyncExternalStoreShim_production_min = {};

/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e$7=reactExports;function h$7(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var k$3="function"===typeof Object.is?Object.is:h$7,l$a=e$7.useState,m$8=e$7.useEffect,n$8=e$7.useLayoutEffect,p$8=e$7.useDebugValue;function q$6(a,b){var d=b(),f=l$a({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];n$8(function(){c.value=d;c.getSnapshot=b;r$7(c)&&g({inst:c});},[a,d,b]);m$8(function(){r$7(c)&&g({inst:c});return a(function(){r$7(c)&&g({inst:c});})},[a]);p$8(d);return d}
function r$7(a){var b=a.getSnapshot;a=a.value;try{var d=b();return !k$3(a,d)}catch(f){return !0}}function t$d(a,b){return b()}var u$7="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?t$d:q$6;useSyncExternalStoreShim_production_min.useSyncExternalStore=void 0!==e$7.useSyncExternalStore?e$7.useSyncExternalStore:u$7;

{
  shim.exports = useSyncExternalStoreShim_production_min;
}

var shimExports = shim.exports;

var withSelector = {exports: {}};

var withSelector_production_min = {};

/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h$6=reactExports,n$7=shimExports;function p$7(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var q$5="function"===typeof Object.is?Object.is:p$7,r$6=n$7.useSyncExternalStore,t$c=h$6.useRef,u$6=h$6.useEffect,v$4=h$6.useMemo,w$5=h$6.useDebugValue;
withSelector_production_min.useSyncExternalStoreWithSelector=function(a,b,e,l,g){var c=t$c(null);if(null===c.current){var f={hasValue:!1,value:null};c.current=f;}else f=c.current;c=v$4(function(){function a(a){if(!c){c=!0;d=a;a=l(a);if(void 0!==g&&f.hasValue){var b=f.value;if(g(b,a))return k=b}return k=a}b=k;if(q$5(d,a))return b;var e=l(a);if(void 0!==g&&g(b,e))return b;d=a;return k=e}var c=!1,d,k,m=void 0===e?null:e;return [function(){return a(b())},null===m?void 0:function(){return a(m())}]},[b,e,l,g]);var d=r$6(a,c[0],c[1]);
u$6(function(){f.hasValue=!0;f.value=d;},[d]);w$5(d);return d};

{
  withSelector.exports = withSelector_production_min;
}

var withSelectorExports = withSelector.exports;

// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

let batch = defaultNoopBatch; // Allow injecting another batching function later

const setBatch = newBatch => batch = newBatch; // Supply a getter just to skip dealing with ESM bindings

const getBatch = () => batch;

const {createContext: createContext$3} = await importShared('react');

let realContext = null;

function getContext() {
  if (!realContext) {
    realContext = createContext$3(null);
  }

  return realContext;
}

const ReactReduxContext = /*#__PURE__*/new Proxy({}, /*#__PURE__*/new Proxy({}, {
  get(_, handler) {
    const target = getContext(); // @ts-ignore

    return (_target, ...args) => Reflect[handler](target, ...args);
  }

}));

const {useContext: useContext$3} = await importShared('react');

/**
 * Hook factory, which creates a `useReduxContext` hook bound to a given context. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useReduxContext` hook bound to the specified context.
 */
function createReduxContextHook(context = ReactReduxContext) {
  return function useReduxContext() {
    const contextValue = useContext$3(context);

    return contextValue;
  };
}
/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

const useReduxContext = /*#__PURE__*/createReduxContextHook();

const notInitialized = () => {
  throw new Error('uSES not initialized!');
};

const {useCallback: useCallback$7,useDebugValue: useDebugValue$1,useRef: useRef$6} = await importShared('react');
let useSyncExternalStoreWithSelector = notInitialized;
const initializeUseSelector = fn => {
  useSyncExternalStoreWithSelector = fn;
};

const refEquality = (a, b) => a === b;
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context = ReactReduxContext) {
  const useReduxContext$1 = context === ReactReduxContext ? useReduxContext : createReduxContextHook(context);
  return function useSelector(selector, equalityFnOrOptions = {}) {
    const {
      equalityFn = refEquality,
      stabilityCheck = undefined,
      noopCheck = undefined
    } = typeof equalityFnOrOptions === 'function' ? {
      equalityFn: equalityFnOrOptions
    } : equalityFnOrOptions;

    const {
      store,
      subscription,
      getServerState,
      stabilityCheck: globalStabilityCheck,
      noopCheck: globalNoopCheck
    } = useReduxContext$1();
    useRef$6(true);
    const wrappedSelector = useCallback$7({
      [selector.name](state) {
        const selected = selector(state);

        return selected;
      }

    }[selector.name], [selector, globalStabilityCheck, stabilityCheck]);
    const selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store.getState, getServerState || store.getState, wrappedSelector, equalityFn);
    useDebugValue$1(selectedState);
    return selectedState;
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

const useSelector = /*#__PURE__*/createSelectorHook();

var reactIs$1 = {exports: {}};

var reactIs_production_min$1 = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$4="function"===typeof Symbol&&Symbol.for,c$a=b$4?Symbol.for("react.element"):60103,d$9=b$4?Symbol.for("react.portal"):60106,e$6=b$4?Symbol.for("react.fragment"):60107,f$7=b$4?Symbol.for("react.strict_mode"):60108,g$5=b$4?Symbol.for("react.profiler"):60114,h$5=b$4?Symbol.for("react.provider"):60109,k$2=b$4?Symbol.for("react.context"):60110,l$9=b$4?Symbol.for("react.async_mode"):60111,m$7=b$4?Symbol.for("react.concurrent_mode"):60111,n$6=b$4?Symbol.for("react.forward_ref"):60112,p$6=b$4?Symbol.for("react.suspense"):60113,q$4=b$4?
Symbol.for("react.suspense_list"):60120,r$5=b$4?Symbol.for("react.memo"):60115,t$b=b$4?Symbol.for("react.lazy"):60116,v$3=b$4?Symbol.for("react.block"):60121,w$4=b$4?Symbol.for("react.fundamental"):60117,x$4=b$4?Symbol.for("react.responder"):60118,y$3=b$4?Symbol.for("react.scope"):60119;
function z$3(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c$a:switch(a=a.type,a){case l$9:case m$7:case e$6:case g$5:case f$7:case p$6:return a;default:switch(a=a&&a.$$typeof,a){case k$2:case n$6:case t$b:case r$5:case h$5:return a;default:return u}}case d$9:return u}}}function A$1(a){return z$3(a)===m$7}reactIs_production_min$1.AsyncMode=l$9;reactIs_production_min$1.ConcurrentMode=m$7;reactIs_production_min$1.ContextConsumer=k$2;reactIs_production_min$1.ContextProvider=h$5;reactIs_production_min$1.Element=c$a;reactIs_production_min$1.ForwardRef=n$6;reactIs_production_min$1.Fragment=e$6;reactIs_production_min$1.Lazy=t$b;reactIs_production_min$1.Memo=r$5;reactIs_production_min$1.Portal=d$9;
reactIs_production_min$1.Profiler=g$5;reactIs_production_min$1.StrictMode=f$7;reactIs_production_min$1.Suspense=p$6;reactIs_production_min$1.isAsyncMode=function(a){return A$1(a)||z$3(a)===l$9};reactIs_production_min$1.isConcurrentMode=A$1;reactIs_production_min$1.isContextConsumer=function(a){return z$3(a)===k$2};reactIs_production_min$1.isContextProvider=function(a){return z$3(a)===h$5};reactIs_production_min$1.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c$a};reactIs_production_min$1.isForwardRef=function(a){return z$3(a)===n$6};reactIs_production_min$1.isFragment=function(a){return z$3(a)===e$6};reactIs_production_min$1.isLazy=function(a){return z$3(a)===t$b};
reactIs_production_min$1.isMemo=function(a){return z$3(a)===r$5};reactIs_production_min$1.isPortal=function(a){return z$3(a)===d$9};reactIs_production_min$1.isProfiler=function(a){return z$3(a)===g$5};reactIs_production_min$1.isStrictMode=function(a){return z$3(a)===f$7};reactIs_production_min$1.isSuspense=function(a){return z$3(a)===p$6};
reactIs_production_min$1.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e$6||a===m$7||a===g$5||a===f$7||a===p$6||a===q$4||"object"===typeof a&&null!==a&&(a.$$typeof===t$b||a.$$typeof===r$5||a.$$typeof===h$5||a.$$typeof===k$2||a.$$typeof===n$6||a.$$typeof===w$4||a.$$typeof===x$4||a.$$typeof===y$3||a.$$typeof===v$3)};reactIs_production_min$1.typeOf=z$3;

{
  reactIs$1.exports = reactIs_production_min$1;
}

var reactIsExports = reactIs$1.exports;

var reactIs = reactIsExports;
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

var reactIs_production_min = {};

/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$3=Symbol.for("react.element"),c$9=Symbol.for("react.portal"),d$8=Symbol.for("react.fragment"),e$5=Symbol.for("react.strict_mode"),f$6=Symbol.for("react.profiler"),g$4=Symbol.for("react.provider"),h$4=Symbol.for("react.context"),k$1=Symbol.for("react.server_context"),l$8=Symbol.for("react.forward_ref"),m$6=Symbol.for("react.suspense"),n$5=Symbol.for("react.suspense_list"),p$5=Symbol.for("react.memo"),q$3=Symbol.for("react.lazy"),t$a=Symbol.for("react.offscreen"),u$5;u$5=Symbol.for("react.module.reference");
function v$2(a){if("object"===typeof a&&null!==a){var r=a.$$typeof;switch(r){case b$3:switch(a=a.type,a){case d$8:case f$6:case e$5:case m$6:case n$5:return a;default:switch(a=a&&a.$$typeof,a){case k$1:case h$4:case l$8:case q$3:case p$5:case g$4:return a;default:return r}}case c$9:return r}}}reactIs_production_min.ContextConsumer=h$4;reactIs_production_min.ContextProvider=g$4;reactIs_production_min.Element=b$3;reactIs_production_min.ForwardRef=l$8;reactIs_production_min.Fragment=d$8;reactIs_production_min.Lazy=q$3;reactIs_production_min.Memo=p$5;reactIs_production_min.Portal=c$9;reactIs_production_min.Profiler=f$6;reactIs_production_min.StrictMode=e$5;reactIs_production_min.Suspense=m$6;
reactIs_production_min.SuspenseList=n$5;reactIs_production_min.isAsyncMode=function(){return !1};reactIs_production_min.isConcurrentMode=function(){return !1};reactIs_production_min.isContextConsumer=function(a){return v$2(a)===h$4};reactIs_production_min.isContextProvider=function(a){return v$2(a)===g$4};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===b$3};reactIs_production_min.isForwardRef=function(a){return v$2(a)===l$8};reactIs_production_min.isFragment=function(a){return v$2(a)===d$8};reactIs_production_min.isLazy=function(a){return v$2(a)===q$3};reactIs_production_min.isMemo=function(a){return v$2(a)===p$5};
reactIs_production_min.isPortal=function(a){return v$2(a)===c$9};reactIs_production_min.isProfiler=function(a){return v$2(a)===f$6};reactIs_production_min.isStrictMode=function(a){return v$2(a)===e$5};reactIs_production_min.isSuspense=function(a){return v$2(a)===m$6};reactIs_production_min.isSuspenseList=function(a){return v$2(a)===n$5};
reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===d$8||a===f$6||a===e$5||a===m$6||a===n$5||a===t$a||"object"===typeof a&&null!==a&&(a.$$typeof===q$3||a.$$typeof===p$5||a.$$typeof===g$4||a.$$typeof===h$4||a.$$typeof===l$8||a.$$typeof===u$5||void 0!==a.getModuleId)?!0:!1};reactIs_production_min.typeOf=v$2;

// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

function createListenerCollection() {
  const batch = getBatch();
  let first = null;
  let last = null;
  return {
    clear() {
      first = null;
      last = null;
    },

    notify() {
      batch(() => {
        let listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },

    get() {
      let listeners = [];
      let listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },

    subscribe(callback) {
      let isSubscribed = true;
      let listener = last = {
        callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }

  };
}

const nullListeners = {
  notify() {},

  get: () => []
};
function createSubscription(store, parentSub) {
  let unsubscribe;
  let listeners = nullListeners;

  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }

  function notifyNestedSubs() {
    listeners.notify();
  }

  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }

  function isSubscribed() {
    return Boolean(unsubscribe);
  }

  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }

  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = undefined;
      listeners.clear();
      listeners = nullListeners;
    }
  }

  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe,
    tryUnsubscribe,
    getListeners: () => listeners
  };
  return subscription;
}

const {useEffect: useEffect$9,useLayoutEffect: useLayoutEffect$2} = await importShared('react');
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed
// Matches logic in React's `shared/ExecutionEnvironment` file

const canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');
const useIsomorphicLayoutEffect$1 = canUseDOM ? useLayoutEffect$2 : useEffect$9;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (let i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

await importShared('react');

const React$6 = await importShared('react');
const {useMemo: useMemo$9} = React$6;

function Provider({
  store,
  context,
  children,
  serverState,
  stabilityCheck = 'once',
  noopCheck = 'once'
}) {
  const contextValue = useMemo$9(() => {
    const subscription = createSubscription(store);
    return {
      store,
      subscription,
      getServerState: serverState ? () => serverState : undefined,
      stabilityCheck,
      noopCheck
    };
  }, [store, serverState, stabilityCheck, noopCheck]);
  const previousState = useMemo$9(() => store.getState(), [store]);
  useIsomorphicLayoutEffect$1(() => {
    const {
      subscription
    } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = undefined;
    };
  }, [contextValue, previousState]);
  const Context = context || ReactReduxContext; // @ts-ignore 'AnyAction' is assignable to the constraint of type 'A', but 'A' could be instantiated with a different subtype

  return /*#__PURE__*/React$6.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context = ReactReduxContext) {
  const useReduxContext$1 = // @ts-ignore
  context === ReactReduxContext ? useReduxContext : // @ts-ignore
  createReduxContextHook(context);
  return function useStore() {
    const {
      store
    } = useReduxContext$1(); // @ts-ignore

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

const useStore = /*#__PURE__*/createStoreHook();

/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context = ReactReduxContext) {
  const useStore$1 = // @ts-ignore
  context === ReactReduxContext ? useStore : createStoreHook(context);
  return function useDispatch() {
    const store = useStore$1(); // @ts-ignore

    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

const useDispatch = /*#__PURE__*/createDispatchHook();

// The primary entry point assumes we're working with standard ReactDOM/RN, but
// older versions that do not include `useSyncExternalStore` (React 16.9 - 17.x).
// Because of that, the useSyncExternalStore compat shim is needed.
initializeUseSelector(withSelectorExports.useSyncExternalStoreWithSelector);
// with standard React renderers (ReactDOM, React Native)

setBatch(reactDomExports.unstable_batchedUpdates);

var UserRoleEnum = /* @__PURE__ */ ((UserRoleEnum2) => {
  UserRoleEnum2["ADMIN"] = "ADMIN";
  UserRoleEnum2["USER"] = "USER";
  UserRoleEnum2["MANAGER"] = "MANAGER";
  return UserRoleEnum2;
})(UserRoleEnum || {});

const getUserAuthData = (state) => state.user?.authData;

const getUserIsLoadPage = (state) => state.user.isLoadPage;

function n$4(n){for(var r=arguments.length,t=Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];throw Error("[Immer] minified error nr: "+n+(t.length?" "+t.map((function(n){return "'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r$4(n){return !!n&&!!n[Q$1]}function t$9(n){var r;return !!n&&(function(n){if(!n||"object"!=typeof n)return !1;var r=Object.getPrototypeOf(n);if(null===r)return !0;var t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return t===Object||"function"==typeof t&&Function.toString.call(t)===Z$2}(n)||Array.isArray(n)||!!n[L]||!!(null===(r=n.constructor)||void 0===r?void 0:r[L])||s$N(n)||v$1(n))}function e$4(t){return r$4(t)||n$4(23,t),t[Q$1].t}function i$5(n,r,t){void 0===t&&(t=!1),0===o$b(n)?(t?Object.keys:nn)(n).forEach((function(e){t&&"symbol"==typeof e||r(e,n[e],n);})):n.forEach((function(t,e){return r(e,t,n)}));}function o$b(n){var r=n[Q$1];return r?r.i>3?r.i-4:r.i:Array.isArray(n)?1:s$N(n)?2:v$1(n)?3:0}function u$4(n,r){return 2===o$b(n)?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function a$5(n,r){return 2===o$b(n)?n.get(r):n[r]}function f$5(n,r,t){var e=o$b(n);2===e?n.set(r,t):3===e?n.add(t):n[r]=t;}function c$8(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r}function s$N(n){return X$2&&n instanceof Map}function v$1(n){return q$2&&n instanceof Set}function p$4(n){return n.o||n.t}function l$7(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=rn(n);delete r[Q$1];for(var t=nn(r),e=0;e<t.length;e++){var i=t[e],o=r[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]});}return Object.create(Object.getPrototypeOf(n),r)}function d$7(n,e){return void 0===e&&(e=!1),y$2(n)||r$4(n)||!t$9(n)||(o$b(n)>1&&(n.set=n.add=n.clear=n.delete=h$3),Object.freeze(n),e&&i$5(n,(function(n,r){return d$7(r,!0)}),!0)),n}function h$3(){n$4(2);}function y$2(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b$2(r){var t=tn[r];return t||n$4(18,r),t}function m$5(n,r){tn[n]||(tn[n]=r);}function _$1(){return U$3}function j$3(n,r){r&&(b$2("Patches"),n.u=[],n.s=[],n.v=r);}function g$3(n){O$2(n),n.p.forEach(S$3),n.p=null;}function O$2(n){n===U$3&&(U$3=n.l);}function w$3(n){return U$3={p:[],l:U$3,h:n,m:!0,_:0}}function S$3(n){var r=n[Q$1];0===r.i||1===r.i?r.j():r.g=!0;}function P$1(r,e){e._=e.p.length;var i=e.p[0],o=void 0!==r&&r!==i;return e.h.O||b$2("ES5").S(e,r,o),o?(i[Q$1].P&&(g$3(e),n$4(4)),t$9(r)&&(r=M$1(e,r),e.l||x$3(e,r)),e.u&&b$2("Patches").M(i[Q$1].t,r,e.u,e.s)):r=M$1(e,i,[]),g$3(e),e.u&&e.v(e.u,e.s),r!==H$5?r:void 0}function M$1(n,r,t){if(y$2(r))return r;var e=r[Q$1];if(!e)return i$5(r,(function(i,o){return A(n,e,r,i,o,t)}),!0),r;if(e.A!==n)return r;if(!e.P)return x$3(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l$7(e.k):e.o,u=o,a=!1;3===e.i&&(u=new Set(o),o.clear(),a=!0),i$5(u,(function(r,i){return A(n,e,o,r,i,t,a)})),x$3(n,o,!1),t&&n.u&&b$2("Patches").N(e,t,n.u,n.s);}return e.o}function A(e,i,o,a,c,s,v){if(r$4(c)){var p=M$1(e,c,s&&i&&3!==i.i&&!u$4(i.R,a)?s.concat(a):void 0);if(f$5(o,a,p),!r$4(p))return;e.m=!1;}else v&&o.add(c);if(t$9(c)&&!y$2(c)){if(!e.h.D&&e._<1)return;M$1(e,c),i&&i.A.l||x$3(e,c);}}function x$3(n,r,t){void 0===t&&(t=!1),!n.l&&n.h.D&&n.m&&d$7(r,t);}function z$2(n,r){var t=n[Q$1];return (t?p$4(t):n)[r]}function I$3(n,r){if(r in n)for(var t=Object.getPrototypeOf(n);t;){var e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=Object.getPrototypeOf(t);}}function k(n){n.P||(n.P=!0,n.l&&k(n.l));}function E$4(n){n.o||(n.o=l$7(n.t));}function N$4(n,r,t){var e=s$N(r)?b$2("MapSet").F(r,t):v$1(r)?b$2("MapSet").T(r,t):n.O?function(n,r){var t=Array.isArray(n),e={i:t?1:0,A:r?r.A:_$1(),P:!1,I:!1,R:{},l:r,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;t&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(r,t):b$2("ES5").J(r,t);return (t?t.A:_$1()).p.push(e),e}function R$2(e){return r$4(e)||n$4(22,e),function n(r){if(!t$9(r))return r;var e,u=r[Q$1],c=o$b(r);if(u){if(!u.P&&(u.i<4||!b$2("ES5").K(u)))return u.t;u.I=!0,e=D$4(r,c),u.I=!1;}else e=D$4(r,c);return i$5(e,(function(r,t){u&&a$5(u.t,r)===t||f$5(e,r,n(t));})),3===c?new Set(e):e}(e)}function D$4(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return l$7(n)}function F$3(){function t(n,r){var t=s[n];return t?t.enumerable=r:s[n]=t={configurable:!0,enumerable:r,get:function(){var r=this[Q$1];return en.get(r,n)},set:function(r){var t=this[Q$1];en.set(t,n,r);}},t}function e(n){for(var r=n.length-1;r>=0;r--){var t=n[r][Q$1];if(!t.P)switch(t.i){case 5:a(t)&&k(t);break;case 4:o(t)&&k(t);}}}function o(n){for(var r=n.t,t=n.k,e=nn(t),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q$1){var a=r[o];if(void 0===a&&!u$4(r,o))return !0;var f=t[o],s=f&&f[Q$1];if(s?s.t!==a:!c$8(f,a))return !0}}var v=!!r[Q$1];return e.length!==nn(r).length+(v?0:1)}function a(n){var r=n.k;if(r.length!==n.t.length)return !0;var t=Object.getOwnPropertyDescriptor(r,r.length-1);if(t&&!t.get)return !0;for(var e=0;e<r.length;e++)if(!r.hasOwnProperty(e))return !0;return !1}var s={};m$5("ES5",{J:function(n,r){var e=Array.isArray(n),i=function(n,r){if(n){for(var e=Array(r.length),i=0;i<r.length;i++)Object.defineProperty(e,""+i,t(i,!0));return e}var o=rn(r);delete o[Q$1];for(var u=nn(o),a=0;a<u.length;a++){var f=u[a];o[f]=t(f,n||!!o[f].enumerable);}return Object.create(Object.getPrototypeOf(r),o)}(e,n),o={i:e?5:4,A:r?r.A:_$1(),P:!1,I:!1,R:{},l:r,t:n,k:i,o:null,g:!1,C:!1};return Object.defineProperty(i,Q$1,{value:o,writable:!0}),i},S:function(n,t,o){o?r$4(t)&&t[Q$1].A===n&&e(n.p):(n.u&&function n(r){if(r&&"object"==typeof r){var t=r[Q$1];if(t){var e=t.t,o=t.k,f=t.R,c=t.i;if(4===c)i$5(o,(function(r){r!==Q$1&&(void 0!==e[r]||u$4(e,r)?f[r]||n(o[r]):(f[r]=!0,k(t)));})),i$5(e,(function(n){void 0!==o[n]||u$4(o,n)||(f[n]=!1,k(t));}));else if(5===c){if(a(t)&&(k(t),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)o.hasOwnProperty(l)||(f[l]=!0),void 0===f[l]&&n(o[l]);}}}}(n.p[0]),e(n.p));},K:function(n){return 4===n.i?o(n):a(n)}});}function T$5(){function e(n){if(!t$9(n))return n;if(Array.isArray(n))return n.map(e);if(s$N(n))return new Map(Array.from(n.entries()).map((function(n){return [n[0],e(n[1])]})));if(v$1(n))return new Set(Array.from(n).map(e));var r=Object.create(Object.getPrototypeOf(n));for(var i in n)r[i]=e(n[i]);return u$4(n,L)&&(r[L]=n[L]),r}function f(n){return r$4(n)?e(n):n}var c="add";m$5("Patches",{$:function(r,t){return t.forEach((function(t){for(var i=t.path,u=t.op,f=r,s=0;s<i.length-1;s++){var v=o$b(f),p=i[s];"string"!=typeof p&&"number"!=typeof p&&(p=""+p),0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||n$4(24),"function"==typeof f&&"prototype"===p&&n$4(24),"object"!=typeof(f=a$5(f,p))&&n$4(15,i.join("/"));}var l=o$b(f),d=e(t.value),h=i[i.length-1];switch(u){case"replace":switch(l){case 2:return f.set(h,d);case 3:n$4(16);default:return f[h]=d}case c:switch(l){case 1:return "-"===h?f.push(d):f.splice(h,0,d);case 2:return f.set(h,d);case 3:return f.add(d);default:return f[h]=d}case"remove":switch(l){case 1:return f.splice(h,1);case 2:return f.delete(h);case 3:return f.delete(t.value);default:return delete f[h]}default:n$4(17,u);}})),r},N:function(n,r,t,e){switch(n.i){case 0:case 4:case 2:return function(n,r,t,e){var o=n.t,s=n.o;i$5(n.R,(function(n,i){var v=a$5(o,n),p=a$5(s,n),l=i?u$4(o,n)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=r.concat(n);t.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)});}}));}(n,r,t,e);case 5:case 1:return function(n,r,t,e){var i=n.t,o=n.R,u=n.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,t];t=s[0],e=s[1];}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=r.concat([v]);t.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])});}for(var l=i.length;l<u.length;l++){var d=r.concat([l]);t.push({op:c,path:d,value:f(u[l])});}i.length<u.length&&e.push({op:"replace",path:r.concat(["length"]),value:i.length});}(n,r,t,e);case 3:return function(n,r,t,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=r.concat([u]);t.push({op:"remove",path:i,value:n}),e.unshift({op:c,path:i,value:n});}u++;})),u=0,o.forEach((function(n){if(!i.has(n)){var o=r.concat([u]);t.push({op:c,path:o,value:n}),e.unshift({op:"remove",path:o,value:n});}u++;}));}(n,r,t,e)}},M:function(n,r,t,e){t.push({op:"replace",path:[],value:r===H$5?void 0:r}),e.push({op:"replace",path:[],value:n});}});}var G$1,U$3,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X$2="undefined"!=typeof Map,q$2="undefined"!=typeof Set,B$1="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H$5=W?Symbol.for("immer-nothing"):((G$1={})["immer-nothing"]=!0,G$1),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q$1=W?Symbol.for("immer-state"):"__$immer_state",Z$2=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,rn=Object.getOwnPropertyDescriptors||function(n){var r={};return nn(n).forEach((function(t){r[t]=Object.getOwnPropertyDescriptor(n,t);})),r},tn={},en={get:function(n,r){if(r===Q$1)return n;var e=p$4(n);if(!u$4(e,r))return function(n,r,t){var e,i=I$3(r,t);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,r);var i=e[r];return n.I||!t$9(i)?i:i===z$2(n.t,r)?(E$4(n),n.o[r]=N$4(n.A.h,i,n)):i},has:function(n,r){return r in p$4(n)},ownKeys:function(n){return Reflect.ownKeys(p$4(n))},set:function(n,r,t){var e=I$3(p$4(n),r);if(null==e?void 0:e.set)return e.set.call(n.k,t),!0;if(!n.P){var i=z$2(p$4(n),r),o=null==i?void 0:i[Q$1];if(o&&o.t===t)return n.o[r]=t,n.R[r]=!1,!0;if(c$8(t,i)&&(void 0!==t||u$4(n.t,r)))return !0;E$4(n),k(n);}return n.o[r]===t&&(void 0!==t||r in n.o)||Number.isNaN(t)&&Number.isNaN(n.o[r])||(n.o[r]=t,n.R[r]=!0),!0},deleteProperty:function(n,r){return void 0!==z$2(n.t,r)||r in n.t?(n.R[r]=!1,E$4(n),k(n)):delete n.R[r],n.o&&delete n.o[r],!0},getOwnPropertyDescriptor:function(n,r){var t=p$4(n),e=Reflect.getOwnPropertyDescriptor(t,r);return e?{writable:!0,configurable:1!==n.i||"length"!==r,enumerable:e.enumerable,value:t[r]}:e},defineProperty:function(){n$4(11);},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n$4(12);}},on={};i$5(en,(function(n,r){on[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)};})),on.deleteProperty=function(r,t){return on.set.call(this,r,t,void 0)},on.set=function(r,t,e){return en.set.call(this,r[0],t,e,r[0])};var un=function(){function e(r){var e=this;this.O=B$1,this.D=!0,this.produce=function(r,i,o){if("function"==typeof r&&"function"!=typeof i){var u=i;i=r;var a=e;return function(n){var r=this;void 0===n&&(n=u);for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var t;return (t=i).call.apply(t,[r,n].concat(e))}))}}var f;if("function"!=typeof i&&n$4(6),void 0!==o&&"function"!=typeof o&&n$4(7),t$9(r)){var c=w$3(e),s=N$4(e,r,void 0),v=!0;try{f=i(s),v=!1;}finally{v?g$3(c):O$2(c);}return "undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j$3(c,o),P$1(n,c)}),(function(n){throw g$3(c),n})):(j$3(c,o),P$1(f,c))}if(!r||"object"!=typeof r){if(void 0===(f=i(r))&&(f=r),f===H$5&&(f=void 0),e.D&&d$7(f,!0),o){var p=[],l=[];b$2("Patches").M(r,f,p,l),o(p,l);}return f}n$4(21,r);},this.produceWithPatches=function(n,r){if("function"==typeof n)return function(r){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return e.produceWithPatches(r,(function(r){return n.apply(void 0,[r].concat(i))}))};var t,i,o=e.produce(n,r,(function(n,r){t=n,i=r;}));return "undefined"!=typeof Promise&&o instanceof Promise?o.then((function(n){return [n,t,i]})):[o,t,i]},"boolean"==typeof(null==r?void 0:r.useProxies)&&this.setUseProxies(r.useProxies),"boolean"==typeof(null==r?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze);}var i=e.prototype;return i.createDraft=function(e){t$9(e)||n$4(8),r$4(e)&&(e=R$2(e));var i=w$3(this),o=N$4(this,e,void 0);return o[Q$1].C=!0,O$2(i),o},i.finishDraft=function(r,t){var e=r&&r[Q$1];var i=e.A;return j$3(i,t),P$1(void 0,i)},i.setAutoFreeze=function(n){this.D=n;},i.setUseProxies=function(r){r&&!B$1&&n$4(20),this.O=r;},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}e>-1&&(t=t.slice(e+1));var o=b$2("Patches").$;return r$4(n)?o(n,t):this.produce(n,(function(n){return o(n,t)}))},e}(),an=new un,fn=an.produce,cn=an.produceWithPatches.bind(an);an.setAutoFreeze.bind(an);an.setUseProxies.bind(an);var pn=an.applyPatches.bind(an);an.createDraft.bind(an);an.finishDraft.bind(an);const createNextState2 = fn;

function _typeof$4(obj) {
  "@babel/helpers - typeof";

  return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof$4(obj);
}

function _toPrimitive$1(input, hint) {
  if (_typeof$4(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof$4(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey$1(arg) {
  var key = _toPrimitive$1(arg, "string");
  return _typeof$4(key) === "symbol" ? key : String(key);
}

function _defineProperty$2(obj, key, value) {
  key = _toPropertyKey$1(key);
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

function ownKeys$a(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$a(Object(source), !0).forEach(function (key) {
      _defineProperty$2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$a(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject$3(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error(formatProdErrorMessage(0) );
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error(formatProdErrorMessage(1) );
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error(formatProdErrorMessage(2) );
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(3) );
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error(formatProdErrorMessage(4) );
    }

    if (isDispatching) {
      throw new Error(formatProdErrorMessage(5) );
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error(formatProdErrorMessage(6) );
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject$3(action)) {
      throw new Error(formatProdErrorMessage(7) );
    }

    if (typeof action.type === 'undefined') {
      throw new Error(formatProdErrorMessage(8) );
    }

    if (isDispatching) {
      throw new Error(formatProdErrorMessage(9) );
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error(formatProdErrorMessage(10) );
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error(formatProdErrorMessage(11) );
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error(formatProdErrorMessage(12) );
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error(formatProdErrorMessage(13) );
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        action && action.type;
        throw new Error(formatProdErrorMessage(14) );
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error(formatProdErrorMessage(16) );
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error(formatProdErrorMessage(15) );
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2$1(_objectSpread2$1({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}

// Cache implementation based on Erik Rasmussen's `lru-memoize`:
// https://github.com/erikras/lru-memoize
var NOT_FOUND = 'NOT_FOUND';

function createSingletonCache(equals) {
  var entry;
  return {
    get: function get(key) {
      if (entry && equals(entry.key, key)) {
        return entry.value;
      }

      return NOT_FOUND;
    },
    put: function put(key, value) {
      entry = {
        key: key,
        value: value
      };
    },
    getEntries: function getEntries() {
      return entry ? [entry] : [];
    },
    clear: function clear() {
      entry = undefined;
    }
  };
}

function createLruCache(maxSize, equals) {
  var entries = [];

  function get(key) {
    var cacheIndex = entries.findIndex(function (entry) {
      return equals(key, entry.key);
    }); // We found a cached entry

    if (cacheIndex > -1) {
      var entry = entries[cacheIndex]; // Cached entry not at top of cache, move it to the top

      if (cacheIndex > 0) {
        entries.splice(cacheIndex, 1);
        entries.unshift(entry);
      }

      return entry.value;
    } // No entry found in cache, return sentinel


    return NOT_FOUND;
  }

  function put(key, value) {
    if (get(key) === NOT_FOUND) {
      // TODO Is unshift slow?
      entries.unshift({
        key: key,
        value: value
      });

      if (entries.length > maxSize) {
        entries.pop();
      }
    }
  }

  function getEntries() {
    return entries;
  }

  function clear() {
    entries = [];
  }

  return {
    get: get,
    put: put,
    getEntries: getEntries,
    clear: clear
  };
}

var defaultEqualityCheck = function defaultEqualityCheck(a, b) {
  return a === b;
};
function createCacheKeyComparator(equalityCheck) {
  return function areArgumentsShallowlyEqual(prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
      return false;
    } // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.


    var length = prev.length;

    for (var i = 0; i < length; i++) {
      if (!equalityCheck(prev[i], next[i])) {
        return false;
      }
    }

    return true;
  };
}
// defaultMemoize now supports a configurable cache size with LRU behavior,
// and optional comparison of the result value with existing values
function defaultMemoize(func, equalityCheckOrOptions) {
  var providedOptions = typeof equalityCheckOrOptions === 'object' ? equalityCheckOrOptions : {
    equalityCheck: equalityCheckOrOptions
  };
  var _providedOptions$equa = providedOptions.equalityCheck,
      equalityCheck = _providedOptions$equa === void 0 ? defaultEqualityCheck : _providedOptions$equa,
      _providedOptions$maxS = providedOptions.maxSize,
      maxSize = _providedOptions$maxS === void 0 ? 1 : _providedOptions$maxS,
      resultEqualityCheck = providedOptions.resultEqualityCheck;
  var comparator = createCacheKeyComparator(equalityCheck);
  var cache = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator); // we reference arguments instead of spreading them for performance reasons

  function memoized() {
    var value = cache.get(arguments);

    if (value === NOT_FOUND) {
      // @ts-ignore
      value = func.apply(null, arguments);

      if (resultEqualityCheck) {
        var entries = cache.getEntries();
        var matchingEntry = entries.find(function (entry) {
          return resultEqualityCheck(entry.value, value);
        });

        if (matchingEntry) {
          value = matchingEntry.value;
        }
      }

      cache.put(arguments, value);
    }

    return value;
  }

  memoized.clearCache = function () {
    return cache.clear();
  };

  return memoized;
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep === 'function' ? "function " + (dep.name || 'unnamed') + "()" : typeof dep;
    }).join(', ');
    throw new Error("createSelector expects all input-selectors to be functions, but received the following types: [" + dependencyTypes + "]");
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptionsFromArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptionsFromArgs[_key - 1] = arguments[_key];
  }

  var createSelector = function createSelector() {
    for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var _recomputations = 0;

    var _lastResult; // Due to the intricacies of rest params, we can't do an optional arg after `...funcs`.
    // So, start by declaring the default value here.
    // (And yes, the words 'memoize' and 'options' appear too many times in this next sequence.)


    var directlyPassedOptions = {
      memoizeOptions: undefined
    }; // Normally, the result func or "output selector" is the last arg

    var resultFunc = funcs.pop(); // If the result func is actually an _object_, assume it's our options object

    if (typeof resultFunc === 'object') {
      directlyPassedOptions = resultFunc; // and pop the real result func off

      resultFunc = funcs.pop();
    }

    if (typeof resultFunc !== 'function') {
      throw new Error("createSelector expects an output function after the inputs, but received: [" + typeof resultFunc + "]");
    } // Determine which set of options we're using. Prefer options passed directly,
    // but fall back to options given to createSelectorCreator.


    var _directlyPassedOption = directlyPassedOptions,
        _directlyPassedOption2 = _directlyPassedOption.memoizeOptions,
        memoizeOptions = _directlyPassedOption2 === void 0 ? memoizeOptionsFromArgs : _directlyPassedOption2; // Simplifying assumption: it's unlikely that the first options arg of the provided memoizer
    // is an array. In most libs I've looked at, it's an equality function or options object.
    // Based on that, if `memoizeOptions` _is_ an array, we assume it's a full
    // user-provided array of options. Otherwise, it must be just the _first_ arg, and so
    // we wrap it in an array so we can apply it.

    var finalMemoizeOptions = Array.isArray(memoizeOptions) ? memoizeOptions : [memoizeOptions];
    var dependencies = getDependencies(funcs);
    var memoizedResultFunc = memoize.apply(void 0, [function recomputationWrapper() {
      _recomputations++; // apply arguments instead of spreading for performance.

      return resultFunc.apply(null, arguments);
    }].concat(finalMemoizeOptions)); // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.

    var selector = memoize(function dependenciesChecker() {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        // @ts-ignore
        params.push(dependencies[i].apply(null, arguments));
      } // apply arguments instead of spreading for performance.


      _lastResult = memoizedResultFunc.apply(null, params);
      return _lastResult;
    });
    Object.assign(selector, {
      resultFunc: resultFunc,
      memoizedResultFunc: memoizedResultFunc,
      dependencies: dependencies,
      lastResult: function lastResult() {
        return _lastResult;
      },
      recomputations: function recomputations() {
        return _recomputations;
      },
      resetRecomputations: function resetRecomputations() {
        return _recomputations = 0;
      }
    });
    return selector;
  }; // @ts-ignore


  return createSelector;
}
var createSelector = /* #__PURE__ */createSelectorCreator(defaultMemoize);

/** A function that accepts a potential "extra argument" value to be injected later,
 * and returns an instance of the thunk middleware that uses that value
 */
function createThunkMiddleware(extraArgument) {
  // Standard Redux middleware definition pattern:
  // See: https://redux.js.org/tutorials/fundamentals/part-4-store#writing-custom-middleware
  var middleware = function middleware(_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        // The thunk middleware looks for any functions that were passed to `store.dispatch`.
        // If this "action" is really a function, call it and return the result.
        if (typeof action === 'function') {
          // Inject the store's `dispatch` and `getState` methods, as well as any "extra arg"
          return action(dispatch, getState, extraArgument);
        } // Otherwise, pass the action down the middleware chain as usual


        return next(action);
      };
    };
  };

  return middleware;
}

var thunk = createThunkMiddleware(); // Attach the factory function so users can create a customized version
// with whatever "extra arg" they want to inject into their thunks

thunk.withExtraArgument = createThunkMiddleware;
const thunkMiddleware = thunk;

var __extends = (globalThis && globalThis.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __generator$1 = (globalThis && globalThis.__generator) || function (thisArg, body) {
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
};
var __spreadArray$2 = (globalThis && globalThis.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __defProp$2 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = function (obj, key, value) { return key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value: value }) : obj[key] = value; };
var __spreadValues$2 = function (a, b) {
    for (var prop in b || (b = {}))
        if (__hasOwnProp$2.call(b, prop))
            __defNormalProp$2(a, prop, b[prop]);
    if (__getOwnPropSymbols$2)
        for (var _i = 0, _c = __getOwnPropSymbols$2(b); _i < _c.length; _i++) {
            var prop = _c[_i];
            if (__propIsEnum$2.call(b, prop))
                __defNormalProp$2(a, prop, b[prop]);
        }
    return a;
};
var __spreadProps$2 = function (a, b) { return __defProps$2(a, __getOwnPropDescs$2(b)); };
var __async$1 = function (__this, __arguments, generator) {
    return new Promise(function (resolve, reject) {
        var fulfilled = function (value) {
            try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            }
        };
        var rejected = function (value) {
            try {
                step(generator.throw(value));
            }
            catch (e) {
                reject(e);
            }
        };
        var step = function (x) { return x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected); };
        step((generator = generator.apply(__this, __arguments)).next());
    });
};
var createDraftSafeSelector = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var selector = createSelector.apply(void 0, args);
    var wrappedSelector = function (value) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        return selector.apply(void 0, __spreadArray$2([r$4(value) ? R$2(value) : value], rest));
    };
    return wrappedSelector;
};
var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
    if (arguments.length === 0)
        return void 0;
    if (typeof arguments[0] === "object")
        return compose;
    return compose.apply(null, arguments);
};
// src/isPlainObject.ts
function isPlainObject$2(value) {
    if (typeof value !== "object" || value === null)
        return false;
    var proto = Object.getPrototypeOf(value);
    if (proto === null)
        return true;
    var baseProto = proto;
    while (Object.getPrototypeOf(baseProto) !== null) {
        baseProto = Object.getPrototypeOf(baseProto);
    }
    return proto === baseProto;
}
var MiddlewareArray = /** @class */ (function (_super) {
    __extends(MiddlewareArray, _super);
    function MiddlewareArray() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        Object.setPrototypeOf(_this, MiddlewareArray.prototype);
        return _this;
    }
    Object.defineProperty(MiddlewareArray, Symbol.species, {
        get: function () {
            return MiddlewareArray;
        },
        enumerable: false,
        configurable: true
    });
    MiddlewareArray.prototype.concat = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        return _super.prototype.concat.apply(this, arr);
    };
    MiddlewareArray.prototype.prepend = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        if (arr.length === 1 && Array.isArray(arr[0])) {
            return new (MiddlewareArray.bind.apply(MiddlewareArray, __spreadArray$2([void 0], arr[0].concat(this))))();
        }
        return new (MiddlewareArray.bind.apply(MiddlewareArray, __spreadArray$2([void 0], arr.concat(this))))();
    };
    return MiddlewareArray;
}(Array));
var EnhancerArray = /** @class */ (function (_super) {
    __extends(EnhancerArray, _super);
    function EnhancerArray() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        Object.setPrototypeOf(_this, EnhancerArray.prototype);
        return _this;
    }
    Object.defineProperty(EnhancerArray, Symbol.species, {
        get: function () {
            return EnhancerArray;
        },
        enumerable: false,
        configurable: true
    });
    EnhancerArray.prototype.concat = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        return _super.prototype.concat.apply(this, arr);
    };
    EnhancerArray.prototype.prepend = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        if (arr.length === 1 && Array.isArray(arr[0])) {
            return new (EnhancerArray.bind.apply(EnhancerArray, __spreadArray$2([void 0], arr[0].concat(this))))();
        }
        return new (EnhancerArray.bind.apply(EnhancerArray, __spreadArray$2([void 0], arr.concat(this))))();
    };
    return EnhancerArray;
}(Array));
function freezeDraftable(val) {
    return t$9(val) ? createNextState2(val, function () {
    }) : val;
}
// src/getDefaultMiddleware.ts
function isBoolean$1(x) {
    return typeof x === "boolean";
}
function curryGetDefaultMiddleware() {
    return function curriedGetDefaultMiddleware(options) {
        return getDefaultMiddleware(options);
    };
}
function getDefaultMiddleware(options) {
    if (options === void 0) { options = {}; }
    var _c = options.thunk, thunk = _c === void 0 ? true : _c; options.immutableCheck; options.serializableCheck;
    var middlewareArray = new MiddlewareArray();
    if (thunk) {
        if (isBoolean$1(thunk)) {
            middlewareArray.push(thunkMiddleware);
        }
        else {
            middlewareArray.push(thunkMiddleware.withExtraArgument(thunk.extraArgument));
        }
    }
    return middlewareArray;
}
// src/configureStore.ts
var IS_PRODUCTION = "production" === "production";
function configureStore(options) {
    var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();
    var _c = options || {}, _d = _c.reducer, reducer = _d === void 0 ? void 0 : _d, _e = _c.middleware, middleware = _e === void 0 ? curriedGetDefaultMiddleware() : _e, _f = _c.devTools, devTools = _f === void 0 ? true : _f, _g = _c.preloadedState, preloadedState = _g === void 0 ? void 0 : _g, _h = _c.enhancers, enhancers = _h === void 0 ? void 0 : _h;
    var rootReducer;
    if (typeof reducer === "function") {
        rootReducer = reducer;
    }
    else if (isPlainObject$2(reducer)) {
        rootReducer = combineReducers(reducer);
    }
    else {
        throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
    }
    var finalMiddleware = middleware;
    if (typeof finalMiddleware === "function") {
        finalMiddleware = finalMiddleware(curriedGetDefaultMiddleware);
    }
    var middlewareEnhancer = applyMiddleware.apply(void 0, finalMiddleware);
    var finalCompose = compose;
    if (devTools) {
        finalCompose = composeWithDevTools(__spreadValues$2({
            trace: !IS_PRODUCTION
        }, typeof devTools === "object" && devTools));
    }
    var defaultEnhancers = new EnhancerArray(middlewareEnhancer);
    var storeEnhancers = defaultEnhancers;
    if (Array.isArray(enhancers)) {
        storeEnhancers = __spreadArray$2([middlewareEnhancer], enhancers);
    }
    else if (typeof enhancers === "function") {
        storeEnhancers = enhancers(defaultEnhancers);
    }
    var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
    return createStore(rootReducer, preloadedState, composedEnhancer);
}
// src/createAction.ts
function createAction(type, prepareAction) {
    function actionCreator() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (prepareAction) {
            var prepared = prepareAction.apply(void 0, args);
            if (!prepared) {
                throw new Error("prepareAction did not return an object");
            }
            return __spreadValues$2(__spreadValues$2({
                type: type,
                payload: prepared.payload
            }, "meta" in prepared && { meta: prepared.meta }), "error" in prepared && { error: prepared.error });
        }
        return { type: type, payload: args[0] };
    }
    actionCreator.toString = function () { return "" + type; };
    actionCreator.type = type;
    actionCreator.match = function (action) { return action.type === type; };
    return actionCreator;
}
function isAction(action) {
    return isPlainObject$2(action) && "type" in action;
}
function isFSA(action) {
    return isAction(action) && typeof action.type === "string" && Object.keys(action).every(isValidKey);
}
function isValidKey(key) {
    return ["type", "payload", "error", "meta"].indexOf(key) > -1;
}
// src/mapBuilders.ts
function executeReducerBuilderCallback(builderCallback) {
    var actionsMap = {};
    var actionMatchers = [];
    var defaultCaseReducer;
    var builder = {
        addCase: function (typeOrActionCreator, reducer) {
            var type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
            if (type in actionsMap) {
                throw new Error("addCase cannot be called with two reducers for the same action type");
            }
            actionsMap[type] = reducer;
            return builder;
        },
        addMatcher: function (matcher, reducer) {
            actionMatchers.push({ matcher: matcher, reducer: reducer });
            return builder;
        },
        addDefaultCase: function (reducer) {
            defaultCaseReducer = reducer;
            return builder;
        }
    };
    builderCallback(builder);
    return [actionsMap, actionMatchers, defaultCaseReducer];
}
// src/createReducer.ts
function isStateFunction(x) {
    return typeof x === "function";
}
function createReducer(initialState, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
    if (actionMatchers === void 0) { actionMatchers = []; }
    var _c = typeof mapOrBuilderCallback === "function" ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer], actionsMap = _c[0], finalActionMatchers = _c[1], finalDefaultCaseReducer = _c[2];
    var getInitialState;
    if (isStateFunction(initialState)) {
        getInitialState = function () { return freezeDraftable(initialState()); };
    }
    else {
        var frozenInitialState_1 = freezeDraftable(initialState);
        getInitialState = function () { return frozenInitialState_1; };
    }
    function reducer(state, action) {
        if (state === void 0) { state = getInitialState(); }
        var caseReducers = __spreadArray$2([
            actionsMap[action.type]
        ], finalActionMatchers.filter(function (_c) {
            var matcher = _c.matcher;
            return matcher(action);
        }).map(function (_c) {
            var reducer2 = _c.reducer;
            return reducer2;
        }));
        if (caseReducers.filter(function (cr) { return !!cr; }).length === 0) {
            caseReducers = [finalDefaultCaseReducer];
        }
        return caseReducers.reduce(function (previousState, caseReducer) {
            if (caseReducer) {
                if (r$4(previousState)) {
                    var draft = previousState;
                    var result = caseReducer(draft, action);
                    if (result === void 0) {
                        return previousState;
                    }
                    return result;
                }
                else if (!t$9(previousState)) {
                    var result = caseReducer(previousState, action);
                    if (result === void 0) {
                        if (previousState === null) {
                            return previousState;
                        }
                        throw Error("A case reducer on a non-draftable value must not return undefined");
                    }
                    return result;
                }
                else {
                    return createNextState2(previousState, function (draft) {
                        return caseReducer(draft, action);
                    });
                }
            }
            return previousState;
        }, state);
    }
    reducer.getInitialState = getInitialState;
    return reducer;
}
function getType2(slice, actionKey) {
    return slice + "/" + actionKey;
}
function createSlice(options) {
    var name = options.name;
    if (!name) {
        throw new Error("`name` is a required option for createSlice");
    }
    if (typeof process !== "undefined" && "production" === "development") {
        if (options.initialState === void 0) {
            console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
        }
    }
    var initialState = typeof options.initialState == "function" ? options.initialState : freezeDraftable(options.initialState);
    var reducers = options.reducers || {};
    var reducerNames = Object.keys(reducers);
    var sliceCaseReducersByName = {};
    var sliceCaseReducersByType = {};
    var actionCreators = {};
    reducerNames.forEach(function (reducerName) {
        var maybeReducerWithPrepare = reducers[reducerName];
        var type = getType2(name, reducerName);
        var caseReducer;
        var prepareCallback;
        if ("reducer" in maybeReducerWithPrepare) {
            caseReducer = maybeReducerWithPrepare.reducer;
            prepareCallback = maybeReducerWithPrepare.prepare;
        }
        else {
            caseReducer = maybeReducerWithPrepare;
        }
        sliceCaseReducersByName[reducerName] = caseReducer;
        sliceCaseReducersByType[type] = caseReducer;
        actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
    });
    function buildReducer() {
        var _c = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers], _d = _c[0], extraReducers = _d === void 0 ? {} : _d, _e = _c[1], actionMatchers = _e === void 0 ? [] : _e, _f = _c[2], defaultCaseReducer = _f === void 0 ? void 0 : _f;
        var finalCaseReducers = __spreadValues$2(__spreadValues$2({}, extraReducers), sliceCaseReducersByType);
        return createReducer(initialState, function (builder) {
            for (var key in finalCaseReducers) {
                builder.addCase(key, finalCaseReducers[key]);
            }
            for (var _i = 0, actionMatchers_1 = actionMatchers; _i < actionMatchers_1.length; _i++) {
                var m = actionMatchers_1[_i];
                builder.addMatcher(m.matcher, m.reducer);
            }
            if (defaultCaseReducer) {
                builder.addDefaultCase(defaultCaseReducer);
            }
        });
    }
    var _reducer;
    return {
        name: name,
        reducer: function (state, action) {
            if (!_reducer)
                _reducer = buildReducer();
            return _reducer(state, action);
        },
        actions: actionCreators,
        caseReducers: sliceCaseReducersByName,
        getInitialState: function () {
            if (!_reducer)
                _reducer = buildReducer();
            return _reducer.getInitialState();
        }
    };
}
// src/entities/entity_state.ts
function getInitialEntityState() {
    return {
        ids: [],
        entities: {}
    };
}
function createInitialStateFactory() {
    function getInitialState(additionalState) {
        if (additionalState === void 0) { additionalState = {}; }
        return Object.assign(getInitialEntityState(), additionalState);
    }
    return { getInitialState: getInitialState };
}
// src/entities/state_selectors.ts
function createSelectorsFactory() {
    function getSelectors(selectState) {
        var selectIds = function (state) { return state.ids; };
        var selectEntities = function (state) { return state.entities; };
        var selectAll = createDraftSafeSelector(selectIds, selectEntities, function (ids, entities) { return ids.map(function (id) { return entities[id]; }); });
        var selectId = function (_, id) { return id; };
        var selectById = function (entities, id) { return entities[id]; };
        var selectTotal = createDraftSafeSelector(selectIds, function (ids) { return ids.length; });
        if (!selectState) {
            return {
                selectIds: selectIds,
                selectEntities: selectEntities,
                selectAll: selectAll,
                selectTotal: selectTotal,
                selectById: createDraftSafeSelector(selectEntities, selectId, selectById)
            };
        }
        var selectGlobalizedEntities = createDraftSafeSelector(selectState, selectEntities);
        return {
            selectIds: createDraftSafeSelector(selectState, selectIds),
            selectEntities: selectGlobalizedEntities,
            selectAll: createDraftSafeSelector(selectState, selectAll),
            selectTotal: createDraftSafeSelector(selectState, selectTotal),
            selectById: createDraftSafeSelector(selectGlobalizedEntities, selectId, selectById)
        };
    }
    return { getSelectors: getSelectors };
}
function createSingleArgumentStateOperator(mutator) {
    var operator = createStateOperator(function (_, state) { return mutator(state); });
    return function operation(state) {
        return operator(state, void 0);
    };
}
function createStateOperator(mutator) {
    return function operation(state, arg) {
        function isPayloadActionArgument(arg2) {
            return isFSA(arg2);
        }
        var runMutator = function (draft) {
            if (isPayloadActionArgument(arg)) {
                mutator(arg.payload, draft);
            }
            else {
                mutator(arg, draft);
            }
        };
        if (r$4(state)) {
            runMutator(state);
            return state;
        }
        else {
            return createNextState2(state, runMutator);
        }
    };
}
// src/entities/utils.ts
function selectIdValue(entity, selectId) {
    var key = selectId(entity);
    return key;
}
function ensureEntitiesArray(entities) {
    if (!Array.isArray(entities)) {
        entities = Object.values(entities);
    }
    return entities;
}
function splitAddedUpdatedEntities(newEntities, selectId, state) {
    newEntities = ensureEntitiesArray(newEntities);
    var added = [];
    var updated = [];
    for (var _i = 0, newEntities_1 = newEntities; _i < newEntities_1.length; _i++) {
        var entity = newEntities_1[_i];
        var id = selectIdValue(entity, selectId);
        if (id in state.entities) {
            updated.push({ id: id, changes: entity });
        }
        else {
            added.push(entity);
        }
    }
    return [added, updated];
}
// src/entities/unsorted_state_adapter.ts
function createUnsortedStateAdapter(selectId) {
    function addOneMutably(entity, state) {
        var key = selectIdValue(entity, selectId);
        if (key in state.entities) {
            return;
        }
        state.ids.push(key);
        state.entities[key] = entity;
    }
    function addManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        for (var _i = 0, newEntities_2 = newEntities; _i < newEntities_2.length; _i++) {
            var entity = newEntities_2[_i];
            addOneMutably(entity, state);
        }
    }
    function setOneMutably(entity, state) {
        var key = selectIdValue(entity, selectId);
        if (!(key in state.entities)) {
            state.ids.push(key);
        }
        state.entities[key] = entity;
    }
    function setManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        for (var _i = 0, newEntities_3 = newEntities; _i < newEntities_3.length; _i++) {
            var entity = newEntities_3[_i];
            setOneMutably(entity, state);
        }
    }
    function setAllMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        state.ids = [];
        state.entities = {};
        addManyMutably(newEntities, state);
    }
    function removeOneMutably(key, state) {
        return removeManyMutably([key], state);
    }
    function removeManyMutably(keys, state) {
        var didMutate = false;
        keys.forEach(function (key) {
            if (key in state.entities) {
                delete state.entities[key];
                didMutate = true;
            }
        });
        if (didMutate) {
            state.ids = state.ids.filter(function (id) { return id in state.entities; });
        }
    }
    function removeAllMutably(state) {
        Object.assign(state, {
            ids: [],
            entities: {}
        });
    }
    function takeNewKey(keys, update, state) {
        var original2 = state.entities[update.id];
        var updated = Object.assign({}, original2, update.changes);
        var newKey = selectIdValue(updated, selectId);
        var hasNewKey = newKey !== update.id;
        if (hasNewKey) {
            keys[update.id] = newKey;
            delete state.entities[update.id];
        }
        state.entities[newKey] = updated;
        return hasNewKey;
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    function updateManyMutably(updates, state) {
        var newKeys = {};
        var updatesPerEntity = {};
        updates.forEach(function (update) {
            if (update.id in state.entities) {
                updatesPerEntity[update.id] = {
                    id: update.id,
                    changes: __spreadValues$2(__spreadValues$2({}, updatesPerEntity[update.id] ? updatesPerEntity[update.id].changes : null), update.changes)
                };
            }
        });
        updates = Object.values(updatesPerEntity);
        var didMutateEntities = updates.length > 0;
        if (didMutateEntities) {
            var didMutateIds = updates.filter(function (update) { return takeNewKey(newKeys, update, state); }).length > 0;
            if (didMutateIds) {
                state.ids = Object.keys(state.entities);
            }
        }
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    function upsertManyMutably(newEntities, state) {
        var _c = splitAddedUpdatedEntities(newEntities, selectId, state), added = _c[0], updated = _c[1];
        updateManyMutably(updated, state);
        addManyMutably(added, state);
    }
    return {
        removeAll: createSingleArgumentStateOperator(removeAllMutably),
        addOne: createStateOperator(addOneMutably),
        addMany: createStateOperator(addManyMutably),
        setOne: createStateOperator(setOneMutably),
        setMany: createStateOperator(setManyMutably),
        setAll: createStateOperator(setAllMutably),
        updateOne: createStateOperator(updateOneMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        upsertMany: createStateOperator(upsertManyMutably),
        removeOne: createStateOperator(removeOneMutably),
        removeMany: createStateOperator(removeManyMutably)
    };
}
// src/entities/sorted_state_adapter.ts
function createSortedStateAdapter(selectId, sort) {
    var _c = createUnsortedStateAdapter(selectId), removeOne = _c.removeOne, removeMany = _c.removeMany, removeAll = _c.removeAll;
    function addOneMutably(entity, state) {
        return addManyMutably([entity], state);
    }
    function addManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        var models = newEntities.filter(function (model) { return !(selectIdValue(model, selectId) in state.entities); });
        if (models.length !== 0) {
            merge(models, state);
        }
    }
    function setOneMutably(entity, state) {
        return setManyMutably([entity], state);
    }
    function setManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        if (newEntities.length !== 0) {
            merge(newEntities, state);
        }
    }
    function setAllMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        state.entities = {};
        state.ids = [];
        addManyMutably(newEntities, state);
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    function updateManyMutably(updates, state) {
        var appliedUpdates = false;
        for (var _i = 0, updates_1 = updates; _i < updates_1.length; _i++) {
            var update = updates_1[_i];
            var entity = state.entities[update.id];
            if (!entity) {
                continue;
            }
            appliedUpdates = true;
            Object.assign(entity, update.changes);
            var newId = selectId(entity);
            if (update.id !== newId) {
                delete state.entities[update.id];
                state.entities[newId] = entity;
            }
        }
        if (appliedUpdates) {
            resortEntities(state);
        }
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    function upsertManyMutably(newEntities, state) {
        var _c = splitAddedUpdatedEntities(newEntities, selectId, state), added = _c[0], updated = _c[1];
        updateManyMutably(updated, state);
        addManyMutably(added, state);
    }
    function areArraysEqual(a, b) {
        if (a.length !== b.length) {
            return false;
        }
        for (var i = 0; i < a.length && i < b.length; i++) {
            if (a[i] === b[i]) {
                continue;
            }
            return false;
        }
        return true;
    }
    function merge(models, state) {
        models.forEach(function (model) {
            state.entities[selectId(model)] = model;
        });
        resortEntities(state);
    }
    function resortEntities(state) {
        var allEntities = Object.values(state.entities);
        allEntities.sort(sort);
        var newSortedIds = allEntities.map(selectId);
        var ids = state.ids;
        if (!areArraysEqual(ids, newSortedIds)) {
            state.ids = newSortedIds;
        }
    }
    return {
        removeOne: removeOne,
        removeMany: removeMany,
        removeAll: removeAll,
        addOne: createStateOperator(addOneMutably),
        updateOne: createStateOperator(updateOneMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        setOne: createStateOperator(setOneMutably),
        setMany: createStateOperator(setManyMutably),
        setAll: createStateOperator(setAllMutably),
        addMany: createStateOperator(addManyMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertMany: createStateOperator(upsertManyMutably)
    };
}
// src/entities/create_adapter.ts
function createEntityAdapter(options) {
    if (options === void 0) { options = {}; }
    var _c = __spreadValues$2({
        sortComparer: false,
        selectId: function (instance) { return instance.id; }
    }, options), selectId = _c.selectId, sortComparer = _c.sortComparer;
    var stateFactory = createInitialStateFactory();
    var selectorsFactory = createSelectorsFactory();
    var stateAdapter = sortComparer ? createSortedStateAdapter(selectId, sortComparer) : createUnsortedStateAdapter(selectId);
    return __spreadValues$2(__spreadValues$2(__spreadValues$2({
        selectId: selectId,
        sortComparer: sortComparer
    }, stateFactory), selectorsFactory), stateAdapter);
}
// src/nanoid.ts
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = function (size) {
    if (size === void 0) { size = 21; }
    var id = "";
    var i = size;
    while (i--) {
        id += urlAlphabet[Math.random() * 64 | 0];
    }
    return id;
};
// src/createAsyncThunk.ts
var commonProperties = [
    "name",
    "message",
    "stack",
    "code"
];
var RejectWithValue = /** @class */ (function () {
    function RejectWithValue(payload, meta) {
        this.payload = payload;
        this.meta = meta;
    }
    return RejectWithValue;
}());
var FulfillWithMeta = /** @class */ (function () {
    function FulfillWithMeta(payload, meta) {
        this.payload = payload;
        this.meta = meta;
    }
    return FulfillWithMeta;
}());
var miniSerializeError = function (value) {
    if (typeof value === "object" && value !== null) {
        var simpleError = {};
        for (var _i = 0, commonProperties_1 = commonProperties; _i < commonProperties_1.length; _i++) {
            var property = commonProperties_1[_i];
            if (typeof value[property] === "string") {
                simpleError[property] = value[property];
            }
        }
        return simpleError;
    }
    return { message: String(value) };
};
var createAsyncThunk = (function () {
    function createAsyncThunk2(typePrefix, payloadCreator, options) {
        var fulfilled = createAction(typePrefix + "/fulfilled", function (payload, requestId, arg, meta) { return ({
            payload: payload,
            meta: __spreadProps$2(__spreadValues$2({}, meta || {}), {
                arg: arg,
                requestId: requestId,
                requestStatus: "fulfilled"
            })
        }); });
        var pending = createAction(typePrefix + "/pending", function (requestId, arg, meta) { return ({
            payload: void 0,
            meta: __spreadProps$2(__spreadValues$2({}, meta || {}), {
                arg: arg,
                requestId: requestId,
                requestStatus: "pending"
            })
        }); });
        var rejected = createAction(typePrefix + "/rejected", function (error, requestId, arg, payload, meta) { return ({
            payload: payload,
            error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
            meta: __spreadProps$2(__spreadValues$2({}, meta || {}), {
                arg: arg,
                requestId: requestId,
                rejectedWithValue: !!payload,
                requestStatus: "rejected",
                aborted: (error == null ? void 0 : error.name) === "AbortError",
                condition: (error == null ? void 0 : error.name) === "ConditionError"
            })
        }); });
        var AC = typeof AbortController !== "undefined" ? AbortController : /** @class */ (function () {
            function class_1() {
                this.signal = {
                    aborted: false,
                    addEventListener: function () {
                    },
                    dispatchEvent: function () {
                        return false;
                    },
                    onabort: function () {
                    },
                    removeEventListener: function () {
                    },
                    reason: void 0,
                    throwIfAborted: function () {
                    }
                };
            }
            class_1.prototype.abort = function () {
            };
            return class_1;
        }());
        function actionCreator(arg) {
            return function (dispatch, getState, extra) {
                var requestId = (options == null ? void 0 : options.idGenerator) ? options.idGenerator(arg) : nanoid();
                var abortController = new AC();
                var abortReason;
                function abort(reason) {
                    abortReason = reason;
                    abortController.abort();
                }
                var promise2 = function () {
                    return __async$1(this, null, function () {
                        var _a, _b, finalAction, conditionResult, abortedPromise, err_1, skipDispatch;
                        return __generator$1(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _c.trys.push([0, 4, , 5]);
                                    conditionResult = (_a = options == null ? void 0 : options.condition) == null ? void 0 : _a.call(options, arg, { getState: getState, extra: extra });
                                    if (!isThenable$1(conditionResult)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, conditionResult];
                                case 1:
                                    conditionResult = _c.sent();
                                    _c.label = 2;
                                case 2:
                                    if (conditionResult === false || abortController.signal.aborted) {
                                        throw {
                                            name: "ConditionError",
                                            message: "Aborted due to condition callback returning false."
                                        };
                                    }
                                    abortedPromise = new Promise(function (_, reject) { return abortController.signal.addEventListener("abort", function () { return reject({
                                        name: "AbortError",
                                        message: abortReason || "Aborted"
                                    }); }); });
                                    dispatch(pending(requestId, arg, (_b = options == null ? void 0 : options.getPendingMeta) == null ? void 0 : _b.call(options, { requestId: requestId, arg: arg }, { getState: getState, extra: extra })));
                                    return [4 /*yield*/, Promise.race([
                                            abortedPromise,
                                            Promise.resolve(payloadCreator(arg, {
                                                dispatch: dispatch,
                                                getState: getState,
                                                extra: extra,
                                                requestId: requestId,
                                                signal: abortController.signal,
                                                abort: abort,
                                                rejectWithValue: function (value, meta) {
                                                    return new RejectWithValue(value, meta);
                                                },
                                                fulfillWithValue: function (value, meta) {
                                                    return new FulfillWithMeta(value, meta);
                                                }
                                            })).then(function (result) {
                                                if (result instanceof RejectWithValue) {
                                                    throw result;
                                                }
                                                if (result instanceof FulfillWithMeta) {
                                                    return fulfilled(result.payload, requestId, arg, result.meta);
                                                }
                                                return fulfilled(result, requestId, arg);
                                            })
                                        ])];
                                case 3:
                                    finalAction = _c.sent();
                                    return [3 /*break*/, 5];
                                case 4:
                                    err_1 = _c.sent();
                                    finalAction = err_1 instanceof RejectWithValue ? rejected(null, requestId, arg, err_1.payload, err_1.meta) : rejected(err_1, requestId, arg);
                                    return [3 /*break*/, 5];
                                case 5:
                                    skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
                                    if (!skipDispatch) {
                                        dispatch(finalAction);
                                    }
                                    return [2 /*return*/, finalAction];
                            }
                        });
                    });
                }();
                return Object.assign(promise2, {
                    abort: abort,
                    requestId: requestId,
                    arg: arg,
                    unwrap: function () {
                        return promise2.then(unwrapResult);
                    }
                });
            };
        }
        return Object.assign(actionCreator, {
            pending: pending,
            rejected: rejected,
            fulfilled: fulfilled,
            typePrefix: typePrefix
        });
    }
    createAsyncThunk2.withTypes = function () { return createAsyncThunk2; };
    return createAsyncThunk2;
})();
function unwrapResult(action) {
    if (action.meta && action.meta.rejectedWithValue) {
        throw action.payload;
    }
    if (action.error) {
        throw action.error;
    }
    return action.payload;
}
function isThenable$1(value) {
    return value !== null && typeof value === "object" && typeof value.then === "function";
}
// src/tsHelpers.ts
var hasMatchFunction = function (v) {
    return v && typeof v.match === "function";
};
// src/matchers.ts
var matches = function (matcher, action) {
    if (hasMatchFunction(matcher)) {
        return matcher.match(action);
    }
    else {
        return matcher(action);
    }
};
function isAnyOf() {
    var matchers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        matchers[_i] = arguments[_i];
    }
    return function (action) {
        return matchers.some(function (matcher) { return matches(matcher, action); });
    };
}
function isAllOf() {
    var matchers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        matchers[_i] = arguments[_i];
    }
    return function (action) {
        return matchers.every(function (matcher) { return matches(matcher, action); });
    };
}
function hasExpectedRequestMetadata(action, validStatus) {
    if (!action || !action.meta)
        return false;
    var hasValidRequestId = typeof action.meta.requestId === "string";
    var hasValidRequestStatus = validStatus.indexOf(action.meta.requestStatus) > -1;
    return hasValidRequestId && hasValidRequestStatus;
}
function isAsyncThunkArray(a) {
    return typeof a[0] === "function" && "pending" in a[0] && "fulfilled" in a[0] && "rejected" in a[0];
}
function isPending() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
        return function (action) { return hasExpectedRequestMetadata(action, ["pending"]); };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isPending()(asyncThunks[0]);
    }
    return function (action) {
        var matchers = asyncThunks.map(function (asyncThunk) { return asyncThunk.pending; });
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
function isRejected() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
        return function (action) { return hasExpectedRequestMetadata(action, ["rejected"]); };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isRejected()(asyncThunks[0]);
    }
    return function (action) {
        var matchers = asyncThunks.map(function (asyncThunk) { return asyncThunk.rejected; });
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
function isRejectedWithValue() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    var hasFlag = function (action) {
        return action && action.meta && action.meta.rejectedWithValue;
    };
    if (asyncThunks.length === 0) {
        return function (action) {
            var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
            return combinedMatcher(action);
        };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isRejectedWithValue()(asyncThunks[0]);
    }
    return function (action) {
        var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
        return combinedMatcher(action);
    };
}
function isFulfilled() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
        return function (action) { return hasExpectedRequestMetadata(action, ["fulfilled"]); };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isFulfilled()(asyncThunks[0]);
    }
    return function (action) {
        var matchers = asyncThunks.map(function (asyncThunk) { return asyncThunk.fulfilled; });
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
function isAsyncThunkAction() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
        return function (action) { return hasExpectedRequestMetadata(action, ["pending", "fulfilled", "rejected"]); };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isAsyncThunkAction()(asyncThunks[0]);
    }
    return function (action) {
        var matchers = [];
        for (var _i = 0, asyncThunks_1 = asyncThunks; _i < asyncThunks_1.length; _i++) {
            var asyncThunk = asyncThunks_1[_i];
            matchers.push(asyncThunk.pending, asyncThunk.rejected, asyncThunk.fulfilled);
        }
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
var alm = "listenerMiddleware";
createAction(alm + "/add");
createAction(alm + "/removeAll");
createAction(alm + "/remove");
// src/autoBatchEnhancer.ts
var SHOULD_AUTOBATCH = "RTK_autoBatch";
var prepareAutoBatched = function () { return function (payload) {
    var _c;
    return ({
        payload: payload,
        meta: (_c = {}, _c[SHOULD_AUTOBATCH] = true, _c)
    });
}; };
var promise$1;
typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : globalThis) : function (cb) { return (promise$1 || (promise$1 = Promise.resolve())).then(cb).catch(function (err) { return setTimeout(function () {
    throw err;
}, 0); }); };
// src/index.ts
F$3();

const getUserRoles = (state) => state.user.authData?.roles;
const isUserAdmin = createSelector(
  getUserRoles,
  (roles) => Boolean(roles?.includes(UserRoleEnum.ADMIN))
);
const isUserManager = createSelector(
  getUserRoles,
  (roles) => Boolean(roles?.includes(UserRoleEnum.MANAGER))
);

const buildSelector = (selector) => {
  const useSelectorHook = (...args) => useSelector((state) => selector(state, ...args));
  return [useSelectorHook, selector];
};

const useAppDispatch = useDispatch;

const {useMemo: useMemo$8} = await importShared('react');
const buildSlice$1 = (options) => {
  const slice = createSlice(options);
  const useActions = () => {
    const dispatch = useAppDispatch();
    return useMemo$8(
      // @ts-ignore
      () => bindActionCreators(slice.actions, dispatch),
      [dispatch]
    );
  };
  return {
    ...slice,
    useActions
  };
};

const defaultJsonSettings = {};
const [useJsonSettings, getJsonSettings] = buildSelector(
  (state) => state.user.authData?.jsonSettings ?? defaultJsonSettings
);

const USER_LOCAL_STORAGE_KEY = "user";
const ARTICLE_VIEW_LOCAL_STORAGE_KEY = "articleView";

var __generator = (globalThis && globalThis.__generator) || function (thisArg, body) {
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
};
var __spreadArray$1 = (globalThis && globalThis.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __defProp$1 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = function (obj, key, value) { return key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value: value }) : obj[key] = value; };
var __spreadValues$1 = function (a, b) {
    for (var prop in b || (b = {}))
        if (__hasOwnProp$1.call(b, prop))
            __defNormalProp$1(a, prop, b[prop]);
    if (__getOwnPropSymbols$1)
        for (var _j = 0, _k = __getOwnPropSymbols$1(b); _j < _k.length; _j++) {
            var prop = _k[_j];
            if (__propIsEnum$1.call(b, prop))
                __defNormalProp$1(a, prop, b[prop]);
        }
    return a;
};
var __spreadProps$1 = function (a, b) { return __defProps$1(a, __getOwnPropDescs$1(b)); };
var __objRest = function (source, exclude) {
    var target = {};
    for (var prop in source)
        if (__hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0)
            target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$1)
        for (var _j = 0, _k = __getOwnPropSymbols$1(source); _j < _k.length; _j++) {
            var prop = _k[_j];
            if (exclude.indexOf(prop) < 0 && __propIsEnum$1.call(source, prop))
                target[prop] = source[prop];
        }
    return target;
};
var __async = function (__this, __arguments, generator) {
    return new Promise(function (resolve, reject) {
        var fulfilled = function (value) {
            try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            }
        };
        var rejected = function (value) {
            try {
                step(generator.throw(value));
            }
            catch (e) {
                reject(e);
            }
        };
        var step = function (x) { return x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected); };
        step((generator = generator.apply(__this, __arguments)).next());
    });
};
// src/query/core/apiState.ts
var QueryStatus;
(function (QueryStatus2) {
    QueryStatus2["uninitialized"] = "uninitialized";
    QueryStatus2["pending"] = "pending";
    QueryStatus2["fulfilled"] = "fulfilled";
    QueryStatus2["rejected"] = "rejected";
})(QueryStatus || (QueryStatus = {}));
function getRequestStatusFlags(status) {
    return {
        status: status,
        isUninitialized: status === QueryStatus.uninitialized,
        isLoading: status === QueryStatus.pending,
        isSuccess: status === QueryStatus.fulfilled,
        isError: status === QueryStatus.rejected
    };
}
// src/query/utils/isAbsoluteUrl.ts
function isAbsoluteUrl(url) {
    return new RegExp("(^|:)//").test(url);
}
// src/query/utils/joinUrls.ts
var withoutTrailingSlash = function (url) { return url.replace(/\/$/, ""); };
var withoutLeadingSlash = function (url) { return url.replace(/^\//, ""); };
function joinUrls(base, url) {
    if (!base) {
        return url;
    }
    if (!url) {
        return base;
    }
    if (isAbsoluteUrl(url)) {
        return url;
    }
    var delimiter = base.endsWith("/") || !url.startsWith("?") ? "/" : "";
    base = withoutTrailingSlash(base);
    url = withoutLeadingSlash(url);
    return "" + base + delimiter + url;
}
// src/query/utils/flatten.ts
var flatten = function (arr) { return [].concat.apply([], arr); };
// src/query/utils/isOnline.ts
function isOnline() {
    return typeof navigator === "undefined" ? true : navigator.onLine === void 0 ? true : navigator.onLine;
}
// src/query/utils/isDocumentVisible.ts
function isDocumentVisible() {
    if (typeof document === "undefined") {
        return true;
    }
    return document.visibilityState !== "hidden";
}
var isPlainObject$1 = isPlainObject$2;
function copyWithStructuralSharing(oldObj, newObj) {
    if (oldObj === newObj || !(isPlainObject$1(oldObj) && isPlainObject$1(newObj) || Array.isArray(oldObj) && Array.isArray(newObj))) {
        return newObj;
    }
    var newKeys = Object.keys(newObj);
    var oldKeys = Object.keys(oldObj);
    var isSameObject = newKeys.length === oldKeys.length;
    var mergeObj = Array.isArray(newObj) ? [] : {};
    for (var _j = 0, newKeys_1 = newKeys; _j < newKeys_1.length; _j++) {
        var key = newKeys_1[_j];
        mergeObj[key] = copyWithStructuralSharing(oldObj[key], newObj[key]);
        if (isSameObject)
            isSameObject = oldObj[key] === mergeObj[key];
    }
    return isSameObject ? oldObj : mergeObj;
}
var defaultFetchFn = function () {
    var args = [];
    for (var _j = 0; _j < arguments.length; _j++) {
        args[_j] = arguments[_j];
    }
    return fetch.apply(void 0, args);
};
var defaultValidateStatus = function (response) { return response.status >= 200 && response.status <= 299; };
var defaultIsJsonContentType = function (headers) { return /ion\/(vnd\.api\+)?json/.test(headers.get("content-type") || ""); };
function stripUndefined(obj) {
    if (!isPlainObject$2(obj)) {
        return obj;
    }
    var copy = __spreadValues$1({}, obj);
    for (var _j = 0, _k = Object.entries(copy); _j < _k.length; _j++) {
        var _l = _k[_j], k = _l[0], v = _l[1];
        if (v === void 0)
            delete copy[k];
    }
    return copy;
}
function fetchBaseQuery(_a) {
    var _this = this;
    if (_a === void 0) { _a = {}; }
    var _b = _a, baseUrl = _b.baseUrl, _j = _b.prepareHeaders, prepareHeaders = _j === void 0 ? function (x) { return x; } : _j, _k = _b.fetchFn, fetchFn = _k === void 0 ? defaultFetchFn : _k, paramsSerializer = _b.paramsSerializer, _l = _b.isJsonContentType, isJsonContentType = _l === void 0 ? defaultIsJsonContentType : _l, _m = _b.jsonContentType, jsonContentType = _m === void 0 ? "application/json" : _m, jsonReplacer = _b.jsonReplacer, defaultTimeout = _b.timeout, globalResponseHandler = _b.responseHandler, globalValidateStatus = _b.validateStatus, baseFetchOptions = __objRest(_b, [
        "baseUrl",
        "prepareHeaders",
        "fetchFn",
        "paramsSerializer",
        "isJsonContentType",
        "jsonContentType",
        "jsonReplacer",
        "timeout",
        "responseHandler",
        "validateStatus"
    ]);
    if (typeof fetch === "undefined" && fetchFn === defaultFetchFn) {
        console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.");
    }
    return function (arg, api) { return __async(_this, null, function () {
        var signal, getState, extra, endpoint, forced, type, meta, _a2, url, _j, headers, _k, params, _l, responseHandler, _m, validateStatus, _o, timeout, rest, config, _p, isJsonifiable, divider, query, request, requestClone, response, timedOut, timeoutId, e_1, responseClone, resultData, responseText, handleResponseError_1, e_2;
        return __generator(this, function (_q) {
            switch (_q.label) {
                case 0:
                    signal = api.signal, getState = api.getState, extra = api.extra, endpoint = api.endpoint, forced = api.forced, type = api.type;
                    _a2 = typeof arg == "string" ? { url: arg } : arg, url = _a2.url, _j = _a2.headers, headers = _j === void 0 ? new Headers(baseFetchOptions.headers) : _j, _k = _a2.params, params = _k === void 0 ? void 0 : _k, _l = _a2.responseHandler, responseHandler = _l === void 0 ? globalResponseHandler != null ? globalResponseHandler : "json" : _l, _m = _a2.validateStatus, validateStatus = _m === void 0 ? globalValidateStatus != null ? globalValidateStatus : defaultValidateStatus : _m, _o = _a2.timeout, timeout = _o === void 0 ? defaultTimeout : _o, rest = __objRest(_a2, [
                        "url",
                        "headers",
                        "params",
                        "responseHandler",
                        "validateStatus",
                        "timeout"
                    ]);
                    config = __spreadValues$1(__spreadProps$1(__spreadValues$1({}, baseFetchOptions), {
                        signal: signal
                    }), rest);
                    headers = new Headers(stripUndefined(headers));
                    _p = config;
                    return [4 /*yield*/, prepareHeaders(headers, {
                            getState: getState,
                            extra: extra,
                            endpoint: endpoint,
                            forced: forced,
                            type: type
                        })];
                case 1:
                    _p.headers = (_q.sent()) || headers;
                    isJsonifiable = function (body) { return typeof body === "object" && (isPlainObject$2(body) || Array.isArray(body) || typeof body.toJSON === "function"); };
                    if (!config.headers.has("content-type") && isJsonifiable(config.body)) {
                        config.headers.set("content-type", jsonContentType);
                    }
                    if (isJsonifiable(config.body) && isJsonContentType(config.headers)) {
                        config.body = JSON.stringify(config.body, jsonReplacer);
                    }
                    if (params) {
                        divider = ~url.indexOf("?") ? "&" : "?";
                        query = paramsSerializer ? paramsSerializer(params) : new URLSearchParams(stripUndefined(params));
                        url += divider + query;
                    }
                    url = joinUrls(baseUrl, url);
                    request = new Request(url, config);
                    requestClone = request.clone();
                    meta = { request: requestClone };
                    timedOut = false, timeoutId = timeout && setTimeout(function () {
                        timedOut = true;
                        api.abort();
                    }, timeout);
                    _q.label = 2;
                case 2:
                    _q.trys.push([2, 4, 5, 6]);
                    return [4 /*yield*/, fetchFn(request)];
                case 3:
                    response = _q.sent();
                    return [3 /*break*/, 6];
                case 4:
                    e_1 = _q.sent();
                    return [2 /*return*/, {
                            error: {
                                status: timedOut ? "TIMEOUT_ERROR" : "FETCH_ERROR",
                                error: String(e_1)
                            },
                            meta: meta
                        }];
                case 5:
                    if (timeoutId)
                        clearTimeout(timeoutId);
                    return [7 /*endfinally*/];
                case 6:
                    responseClone = response.clone();
                    meta.response = responseClone;
                    responseText = "";
                    _q.label = 7;
                case 7:
                    _q.trys.push([7, 9, , 10]);
                    return [4 /*yield*/, Promise.all([
                            handleResponse(response, responseHandler).then(function (r) { return resultData = r; }, function (e) { return handleResponseError_1 = e; }),
                            responseClone.text().then(function (r) { return responseText = r; }, function () {
                            })
                        ])];
                case 8:
                    _q.sent();
                    if (handleResponseError_1)
                        throw handleResponseError_1;
                    return [3 /*break*/, 10];
                case 9:
                    e_2 = _q.sent();
                    return [2 /*return*/, {
                            error: {
                                status: "PARSING_ERROR",
                                originalStatus: response.status,
                                data: responseText,
                                error: String(e_2)
                            },
                            meta: meta
                        }];
                case 10: return [2 /*return*/, validateStatus(response, resultData) ? {
                        data: resultData,
                        meta: meta
                    } : {
                        error: {
                            status: response.status,
                            data: resultData
                        },
                        meta: meta
                    }];
            }
        });
    }); };
    function handleResponse(response, responseHandler) {
        return __async(this, null, function () {
            var text;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        if (typeof responseHandler === "function") {
                            return [2 /*return*/, responseHandler(response)];
                        }
                        if (responseHandler === "content-type") {
                            responseHandler = isJsonContentType(response.headers) ? "json" : "text";
                        }
                        if (!(responseHandler === "json")) return [3 /*break*/, 2];
                        return [4 /*yield*/, response.text()];
                    case 1:
                        text = _j.sent();
                        return [2 /*return*/, text.length ? JSON.parse(text) : null];
                    case 2: return [2 /*return*/, response.text()];
                }
            });
        });
    }
}
// src/query/HandledError.ts
var HandledError = /** @class */ (function () {
    function HandledError(value, meta) {
        if (meta === void 0) { meta = void 0; }
        this.value = value;
        this.meta = meta;
    }
    return HandledError;
}());
var onFocus = /* @__PURE__ */ createAction("__rtkq/focused");
var onFocusLost = /* @__PURE__ */ createAction("__rtkq/unfocused");
var onOnline = /* @__PURE__ */ createAction("__rtkq/online");
var onOffline = /* @__PURE__ */ createAction("__rtkq/offline");
// src/query/endpointDefinitions.ts
var DefinitionType$1;
(function (DefinitionType2) {
    DefinitionType2["query"] = "query";
    DefinitionType2["mutation"] = "mutation";
})(DefinitionType$1 || (DefinitionType$1 = {}));
function isQueryDefinition$1(e) {
    return e.type === DefinitionType$1.query;
}
function isMutationDefinition$1(e) {
    return e.type === DefinitionType$1.mutation;
}
function calculateProvidedBy(description, result, error, queryArg, meta, assertTagTypes) {
    if (isFunction$1(description)) {
        return description(result, error, queryArg, meta).map(expandTagDescription).map(assertTagTypes);
    }
    if (Array.isArray(description)) {
        return description.map(expandTagDescription).map(assertTagTypes);
    }
    return [];
}
function isFunction$1(t) {
    return typeof t === "function";
}
function expandTagDescription(description) {
    return typeof description === "string" ? { type: description } : description;
}
// src/query/utils/isNotNullish.ts
function isNotNullish(v) {
    return v != null;
}
// src/query/core/buildInitiate.ts
var forceQueryFnSymbol = Symbol("forceQueryFn");
var isUpsertQuery = function (arg) { return typeof arg[forceQueryFnSymbol] === "function"; };
function buildInitiate(_j) {
    var serializeQueryArgs = _j.serializeQueryArgs, queryThunk = _j.queryThunk, mutationThunk = _j.mutationThunk, api = _j.api, context = _j.context;
    var runningQueries = new Map();
    var runningMutations = new Map();
    var _k = api.internalActions, unsubscribeQueryResult = _k.unsubscribeQueryResult, removeMutationResult = _k.removeMutationResult, updateSubscriptionOptions = _k.updateSubscriptionOptions;
    return {
        buildInitiateQuery: buildInitiateQuery,
        buildInitiateMutation: buildInitiateMutation,
        getRunningQueryThunk: getRunningQueryThunk,
        getRunningMutationThunk: getRunningMutationThunk,
        getRunningQueriesThunk: getRunningQueriesThunk,
        getRunningMutationsThunk: getRunningMutationsThunk,
        getRunningOperationPromises: getRunningOperationPromises,
        removalWarning: removalWarning
    };
    function removalWarning() {
        throw new Error("This method had to be removed due to a conceptual bug in RTK.\n       Please see https://github.com/reduxjs/redux-toolkit/pull/2481 for details.\n       See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for new guidance on SSR.");
    }
    function getRunningOperationPromises() {
        if (typeof process !== "undefined" && "production" === "development") {
            removalWarning();
        }
        else {
            var extract = function (v) { return Array.from(v.values()).flatMap(function (queriesForStore) { return queriesForStore ? Object.values(queriesForStore) : []; }); };
            return __spreadArray$1(__spreadArray$1([], extract(runningQueries)), extract(runningMutations)).filter(isNotNullish);
        }
    }
    function getRunningQueryThunk(endpointName, queryArgs) {
        return function (dispatch) {
            var _a;
            var endpointDefinition = context.endpointDefinitions[endpointName];
            var queryCacheKey = serializeQueryArgs({
                queryArgs: queryArgs,
                endpointDefinition: endpointDefinition,
                endpointName: endpointName
            });
            return (_a = runningQueries.get(dispatch)) == null ? void 0 : _a[queryCacheKey];
        };
    }
    function getRunningMutationThunk(_endpointName, fixedCacheKeyOrRequestId) {
        return function (dispatch) {
            var _a;
            return (_a = runningMutations.get(dispatch)) == null ? void 0 : _a[fixedCacheKeyOrRequestId];
        };
    }
    function getRunningQueriesThunk() {
        return function (dispatch) { return Object.values(runningQueries.get(dispatch) || {}).filter(isNotNullish); };
    }
    function getRunningMutationsThunk() {
        return function (dispatch) { return Object.values(runningMutations.get(dispatch) || {}).filter(isNotNullish); };
    }
    function buildInitiateQuery(endpointName, endpointDefinition) {
        var queryAction = function (arg, _j) {
            var _k = _j === void 0 ? {} : _j, _l = _k.subscribe, subscribe = _l === void 0 ? true : _l, forceRefetch = _k.forceRefetch, subscriptionOptions = _k.subscriptionOptions, _m = forceQueryFnSymbol, forceQueryFn = _k[_m];
            return function (dispatch, getState) {
                var _j;
                var _a;
                var queryCacheKey = serializeQueryArgs({
                    queryArgs: arg,
                    endpointDefinition: endpointDefinition,
                    endpointName: endpointName
                });
                var thunk = queryThunk((_j = {
                        type: "query",
                        subscribe: subscribe,
                        forceRefetch: forceRefetch,
                        subscriptionOptions: subscriptionOptions,
                        endpointName: endpointName,
                        originalArgs: arg,
                        queryCacheKey: queryCacheKey
                    },
                    _j[forceQueryFnSymbol] = forceQueryFn,
                    _j));
                var selector = api.endpoints[endpointName].select(arg);
                var thunkResult = dispatch(thunk);
                var stateAfter = selector(getState());
                var requestId = thunkResult.requestId, abort = thunkResult.abort;
                var skippedSynchronously = stateAfter.requestId !== requestId;
                var runningQuery = (_a = runningQueries.get(dispatch)) == null ? void 0 : _a[queryCacheKey];
                var selectFromState = function () { return selector(getState()); };
                var statePromise = Object.assign(forceQueryFn ? thunkResult.then(selectFromState) : skippedSynchronously && !runningQuery ? Promise.resolve(stateAfter) : Promise.all([runningQuery, thunkResult]).then(selectFromState), {
                    arg: arg,
                    requestId: requestId,
                    subscriptionOptions: subscriptionOptions,
                    queryCacheKey: queryCacheKey,
                    abort: abort,
                    unwrap: function () {
                        return __async(this, null, function () {
                            var result;
                            return __generator(this, function (_j) {
                                switch (_j.label) {
                                    case 0: return [4 /*yield*/, statePromise];
                                    case 1:
                                        result = _j.sent();
                                        if (result.isError) {
                                            throw result.error;
                                        }
                                        return [2 /*return*/, result.data];
                                }
                            });
                        });
                    },
                    refetch: function () { return dispatch(queryAction(arg, { subscribe: false, forceRefetch: true })); },
                    unsubscribe: function () {
                        if (subscribe)
                            dispatch(unsubscribeQueryResult({
                                queryCacheKey: queryCacheKey,
                                requestId: requestId
                            }));
                    },
                    updateSubscriptionOptions: function (options) {
                        statePromise.subscriptionOptions = options;
                        dispatch(updateSubscriptionOptions({
                            endpointName: endpointName,
                            requestId: requestId,
                            queryCacheKey: queryCacheKey,
                            options: options
                        }));
                    }
                });
                if (!runningQuery && !skippedSynchronously && !forceQueryFn) {
                    var running_1 = runningQueries.get(dispatch) || {};
                    running_1[queryCacheKey] = statePromise;
                    runningQueries.set(dispatch, running_1);
                    statePromise.then(function () {
                        delete running_1[queryCacheKey];
                        if (!Object.keys(running_1).length) {
                            runningQueries.delete(dispatch);
                        }
                    });
                }
                return statePromise;
            };
        };
        return queryAction;
    }
    function buildInitiateMutation(endpointName) {
        return function (arg, _j) {
            var _k = _j === void 0 ? {} : _j, _l = _k.track, track = _l === void 0 ? true : _l, fixedCacheKey = _k.fixedCacheKey;
            return function (dispatch, getState) {
                var thunk = mutationThunk({
                    type: "mutation",
                    endpointName: endpointName,
                    originalArgs: arg,
                    track: track,
                    fixedCacheKey: fixedCacheKey
                });
                var thunkResult = dispatch(thunk);
                var requestId = thunkResult.requestId, abort = thunkResult.abort, unwrap = thunkResult.unwrap;
                var returnValuePromise = thunkResult.unwrap().then(function (data) { return ({ data: data }); }).catch(function (error) { return ({ error: error }); });
                var reset = function () {
                    dispatch(removeMutationResult({ requestId: requestId, fixedCacheKey: fixedCacheKey }));
                };
                var ret = Object.assign(returnValuePromise, {
                    arg: thunkResult.arg,
                    requestId: requestId,
                    abort: abort,
                    unwrap: unwrap,
                    unsubscribe: reset,
                    reset: reset
                });
                var running = runningMutations.get(dispatch) || {};
                runningMutations.set(dispatch, running);
                running[requestId] = ret;
                ret.then(function () {
                    delete running[requestId];
                    if (!Object.keys(running).length) {
                        runningMutations.delete(dispatch);
                    }
                });
                if (fixedCacheKey) {
                    running[fixedCacheKey] = ret;
                    ret.then(function () {
                        if (running[fixedCacheKey] === ret) {
                            delete running[fixedCacheKey];
                            if (!Object.keys(running).length) {
                                runningMutations.delete(dispatch);
                            }
                        }
                    });
                }
                return ret;
            };
        };
    }
}
function defaultTransformResponse(baseQueryReturnValue) {
    return baseQueryReturnValue;
}
function buildThunks(_j) {
    var _this = this;
    var reducerPath = _j.reducerPath, baseQuery = _j.baseQuery, endpointDefinitions = _j.context.endpointDefinitions, serializeQueryArgs = _j.serializeQueryArgs, api = _j.api;
    var patchQueryData = function (endpointName, args, patches) { return function (dispatch) {
        var endpointDefinition = endpointDefinitions[endpointName];
        dispatch(api.internalActions.queryResultPatched({
            queryCacheKey: serializeQueryArgs({
                queryArgs: args,
                endpointDefinition: endpointDefinition,
                endpointName: endpointName
            }),
            patches: patches
        }));
    }; };
    var updateQueryData = function (endpointName, args, updateRecipe) { return function (dispatch, getState) {
        var _j, _k;
        var currentState = api.endpoints[endpointName].select(args)(getState());
        var ret = {
            patches: [],
            inversePatches: [],
            undo: function () { return dispatch(api.util.patchQueryData(endpointName, args, ret.inversePatches)); }
        };
        if (currentState.status === QueryStatus.uninitialized) {
            return ret;
        }
        if ("data" in currentState) {
            if (t$9(currentState.data)) {
                var _l = cn(currentState.data, updateRecipe), patches = _l[1], inversePatches = _l[2];
                (_j = ret.patches).push.apply(_j, patches);
                (_k = ret.inversePatches).push.apply(_k, inversePatches);
            }
            else {
                var value = updateRecipe(currentState.data);
                ret.patches.push({ op: "replace", path: [], value: value });
                ret.inversePatches.push({
                    op: "replace",
                    path: [],
                    value: currentState.data
                });
            }
        }
        dispatch(api.util.patchQueryData(endpointName, args, ret.patches));
        return ret;
    }; };
    var upsertQueryData = function (endpointName, args, value) { return function (dispatch) {
        var _j;
        return dispatch(api.endpoints[endpointName].initiate(args, (_j = {
                subscribe: false,
                forceRefetch: true
            },
            _j[forceQueryFnSymbol] = function () { return ({
                data: value
            }); },
            _j)));
    }; };
    var executeEndpoint = function (_0, _1) { return __async(_this, [_0, _1], function (arg, _j) {
        var endpointDefinition, transformResponse, result, baseQueryApi_1, forceQueryFn, what, err, _k, _l, key, _m, error_1, catchedError, transformErrorResponse, _o, e_4;
        var _p, _q;
        var signal = _j.signal, abort = _j.abort, rejectWithValue = _j.rejectWithValue, fulfillWithValue = _j.fulfillWithValue, dispatch = _j.dispatch, getState = _j.getState, extra = _j.extra;
        return __generator(this, function (_r) {
            switch (_r.label) {
                case 0:
                    endpointDefinition = endpointDefinitions[arg.endpointName];
                    _r.label = 1;
                case 1:
                    _r.trys.push([1, 8, , 13]);
                    transformResponse = defaultTransformResponse;
                    result = void 0;
                    baseQueryApi_1 = {
                        signal: signal,
                        abort: abort,
                        dispatch: dispatch,
                        getState: getState,
                        extra: extra,
                        endpoint: arg.endpointName,
                        type: arg.type,
                        forced: arg.type === "query" ? isForcedQuery(arg, getState()) : void 0
                    };
                    forceQueryFn = arg.type === "query" ? arg[forceQueryFnSymbol] : void 0;
                    if (!forceQueryFn) return [3 /*break*/, 2];
                    result = forceQueryFn();
                    return [3 /*break*/, 6];
                case 2:
                    if (!endpointDefinition.query) return [3 /*break*/, 4];
                    return [4 /*yield*/, baseQuery(endpointDefinition.query(arg.originalArgs), baseQueryApi_1, endpointDefinition.extraOptions)];
                case 3:
                    result = _r.sent();
                    if (endpointDefinition.transformResponse) {
                        transformResponse = endpointDefinition.transformResponse;
                    }
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, endpointDefinition.queryFn(arg.originalArgs, baseQueryApi_1, endpointDefinition.extraOptions, function (arg2) { return baseQuery(arg2, baseQueryApi_1, endpointDefinition.extraOptions); })];
                case 5:
                    result = _r.sent();
                    _r.label = 6;
                case 6:
                    if (typeof process !== "undefined" && "production" === "development") {
                        what = endpointDefinition.query ? "`baseQuery`" : "`queryFn`";
                        err = void 0;
                        if (!result) {
                            err = what + " did not return anything.";
                        }
                        else if (typeof result !== "object") {
                            err = what + " did not return an object.";
                        }
                        else if (result.error && result.data) {
                            err = what + " returned an object containing both `error` and `result`.";
                        }
                        else if (result.error === void 0 && result.data === void 0) {
                            err = what + " returned an object containing neither a valid `error` and `result`. At least one of them should not be `undefined`";
                        }
                        else {
                            for (_k = 0, _l = Object.keys(result); _k < _l.length; _k++) {
                                key = _l[_k];
                                if (key !== "error" && key !== "data" && key !== "meta") {
                                    err = "The object returned by " + what + " has the unknown property " + key + ".";
                                    break;
                                }
                            }
                        }
                        if (err) {
                            console.error("Error encountered handling the endpoint " + arg.endpointName + ".\n              " + err + "\n              It needs to return an object with either the shape `{ data: <value> }` or `{ error: <value> }` that may contain an optional `meta` property.\n              Object returned was:", result);
                        }
                    }
                    if (result.error)
                        throw new HandledError(result.error, result.meta);
                    _m = fulfillWithValue;
                    return [4 /*yield*/, transformResponse(result.data, result.meta, arg.originalArgs)];
                case 7: return [2 /*return*/, _m.apply(void 0, [_r.sent(), (_p = {
                                fulfilledTimeStamp: Date.now(),
                                baseQueryMeta: result.meta
                            },
                            _p[SHOULD_AUTOBATCH] = true,
                            _p)])];
                case 8:
                    error_1 = _r.sent();
                    catchedError = error_1;
                    if (!(catchedError instanceof HandledError)) return [3 /*break*/, 12];
                    transformErrorResponse = defaultTransformResponse;
                    if (endpointDefinition.query && endpointDefinition.transformErrorResponse) {
                        transformErrorResponse = endpointDefinition.transformErrorResponse;
                    }
                    _r.label = 9;
                case 9:
                    _r.trys.push([9, 11, , 12]);
                    _o = rejectWithValue;
                    return [4 /*yield*/, transformErrorResponse(catchedError.value, catchedError.meta, arg.originalArgs)];
                case 10: return [2 /*return*/, _o.apply(void 0, [_r.sent(), (_q = { baseQueryMeta: catchedError.meta }, _q[SHOULD_AUTOBATCH] = true, _q)])];
                case 11:
                    e_4 = _r.sent();
                    catchedError = e_4;
                    return [3 /*break*/, 12];
                case 12:
                    if (typeof process !== "undefined" && "production" !== "production") {
                        console.error("An unhandled error occurred processing a request for the endpoint \"" + arg.endpointName + "\".\nIn the case of an unhandled error, no tags will be \"provided\" or \"invalidated\".", catchedError);
                    }
                    else {
                        console.error(catchedError);
                    }
                    throw catchedError;
                case 13: return [2 /*return*/];
            }
        });
    }); };
    function isForcedQuery(arg, state) {
        var _a, _b, _c, _d;
        var requestState = (_b = (_a = state[reducerPath]) == null ? void 0 : _a.queries) == null ? void 0 : _b[arg.queryCacheKey];
        var baseFetchOnMountOrArgChange = (_c = state[reducerPath]) == null ? void 0 : _c.config.refetchOnMountOrArgChange;
        var fulfilledVal = requestState == null ? void 0 : requestState.fulfilledTimeStamp;
        var refetchVal = (_d = arg.forceRefetch) != null ? _d : arg.subscribe && baseFetchOnMountOrArgChange;
        if (refetchVal) {
            return refetchVal === true || (Number(new Date()) - Number(fulfilledVal)) / 1e3 >= refetchVal;
        }
        return false;
    }
    var queryThunk = createAsyncThunk(reducerPath + "/executeQuery", executeEndpoint, {
        getPendingMeta: function () {
            var _j;
            return _j = { startedTimeStamp: Date.now() }, _j[SHOULD_AUTOBATCH] = true, _j;
        },
        condition: function (queryThunkArgs, _j) {
            var getState = _j.getState;
            var _a, _b, _c;
            var state = getState();
            var requestState = (_b = (_a = state[reducerPath]) == null ? void 0 : _a.queries) == null ? void 0 : _b[queryThunkArgs.queryCacheKey];
            var fulfilledVal = requestState == null ? void 0 : requestState.fulfilledTimeStamp;
            var currentArg = queryThunkArgs.originalArgs;
            var previousArg = requestState == null ? void 0 : requestState.originalArgs;
            var endpointDefinition = endpointDefinitions[queryThunkArgs.endpointName];
            if (isUpsertQuery(queryThunkArgs)) {
                return true;
            }
            if ((requestState == null ? void 0 : requestState.status) === "pending") {
                return false;
            }
            if (isForcedQuery(queryThunkArgs, state)) {
                return true;
            }
            if (isQueryDefinition$1(endpointDefinition) && ((_c = endpointDefinition == null ? void 0 : endpointDefinition.forceRefetch) == null ? void 0 : _c.call(endpointDefinition, {
                currentArg: currentArg,
                previousArg: previousArg,
                endpointState: requestState,
                state: state
            }))) {
                return true;
            }
            if (fulfilledVal) {
                return false;
            }
            return true;
        },
        dispatchConditionRejection: true
    });
    var mutationThunk = createAsyncThunk(reducerPath + "/executeMutation", executeEndpoint, {
        getPendingMeta: function () {
            var _j;
            return _j = { startedTimeStamp: Date.now() }, _j[SHOULD_AUTOBATCH] = true, _j;
        }
    });
    var hasTheForce = function (options) { return "force" in options; };
    var hasMaxAge = function (options) { return "ifOlderThan" in options; };
    var prefetch = function (endpointName, arg, options) { return function (dispatch, getState) {
        var force = hasTheForce(options) && options.force;
        var maxAge = hasMaxAge(options) && options.ifOlderThan;
        var queryAction = function (force2) {
            if (force2 === void 0) { force2 = true; }
            return api.endpoints[endpointName].initiate(arg, { forceRefetch: force2 });
        };
        var latestStateValue = api.endpoints[endpointName].select(arg)(getState());
        if (force) {
            dispatch(queryAction());
        }
        else if (maxAge) {
            var lastFulfilledTs = latestStateValue == null ? void 0 : latestStateValue.fulfilledTimeStamp;
            if (!lastFulfilledTs) {
                dispatch(queryAction());
                return;
            }
            var shouldRetrigger = (Number(new Date()) - Number(new Date(lastFulfilledTs))) / 1e3 >= maxAge;
            if (shouldRetrigger) {
                dispatch(queryAction());
            }
        }
        else {
            dispatch(queryAction(false));
        }
    }; };
    function matchesEndpoint(endpointName) {
        return function (action) {
            var _a, _b;
            return ((_b = (_a = action == null ? void 0 : action.meta) == null ? void 0 : _a.arg) == null ? void 0 : _b.endpointName) === endpointName;
        };
    }
    function buildMatchThunkActions(thunk, endpointName) {
        return {
            matchPending: isAllOf(isPending(thunk), matchesEndpoint(endpointName)),
            matchFulfilled: isAllOf(isFulfilled(thunk), matchesEndpoint(endpointName)),
            matchRejected: isAllOf(isRejected(thunk), matchesEndpoint(endpointName))
        };
    }
    return {
        queryThunk: queryThunk,
        mutationThunk: mutationThunk,
        prefetch: prefetch,
        updateQueryData: updateQueryData,
        upsertQueryData: upsertQueryData,
        patchQueryData: patchQueryData,
        buildMatchThunkActions: buildMatchThunkActions
    };
}
function calculateProvidedByThunk(action, type, endpointDefinitions, assertTagType) {
    return calculateProvidedBy(endpointDefinitions[action.meta.arg.endpointName][type], isFulfilled(action) ? action.payload : void 0, isRejectedWithValue(action) ? action.payload : void 0, action.meta.arg.originalArgs, "baseQueryMeta" in action.meta ? action.meta.baseQueryMeta : void 0, assertTagType);
}
function updateQuerySubstateIfExists(state, queryCacheKey, update) {
    var substate = state[queryCacheKey];
    if (substate) {
        update(substate);
    }
}
function getMutationCacheKey(id) {
    var _a;
    return (_a = "arg" in id ? id.arg.fixedCacheKey : id.fixedCacheKey) != null ? _a : id.requestId;
}
function updateMutationSubstateIfExists(state, id, update) {
    var substate = state[getMutationCacheKey(id)];
    if (substate) {
        update(substate);
    }
}
var initialState$3 = {};
function buildSlice(_j) {
    var reducerPath = _j.reducerPath, queryThunk = _j.queryThunk, mutationThunk = _j.mutationThunk, _k = _j.context, definitions = _k.endpointDefinitions, apiUid = _k.apiUid, extractRehydrationInfo = _k.extractRehydrationInfo, hasRehydrationInfo = _k.hasRehydrationInfo, assertTagType = _j.assertTagType, config = _j.config;
    var resetApiState = createAction(reducerPath + "/resetApiState");
    var querySlice = createSlice({
        name: reducerPath + "/queries",
        initialState: initialState$3,
        reducers: {
            removeQueryResult: {
                reducer: function (draft, _j) {
                    var queryCacheKey = _j.payload.queryCacheKey;
                    delete draft[queryCacheKey];
                },
                prepare: prepareAutoBatched()
            },
            queryResultPatched: function (draft, _j) {
                var _k = _j.payload, queryCacheKey = _k.queryCacheKey, patches = _k.patches;
                updateQuerySubstateIfExists(draft, queryCacheKey, function (substate) {
                    substate.data = pn(substate.data, patches.concat());
                });
            }
        },
        extraReducers: function (builder) {
            builder.addCase(queryThunk.pending, function (draft, _j) {
                var meta = _j.meta, arg = _j.meta.arg;
                var _a, _b;
                var upserting = isUpsertQuery(arg);
                if (arg.subscribe || upserting) {
                    (_b = draft[_a = arg.queryCacheKey]) != null ? _b : draft[_a] = {
                        status: QueryStatus.uninitialized,
                        endpointName: arg.endpointName
                    };
                }
                updateQuerySubstateIfExists(draft, arg.queryCacheKey, function (substate) {
                    substate.status = QueryStatus.pending;
                    substate.requestId = upserting && substate.requestId ? substate.requestId : meta.requestId;
                    if (arg.originalArgs !== void 0) {
                        substate.originalArgs = arg.originalArgs;
                    }
                    substate.startedTimeStamp = meta.startedTimeStamp;
                });
            }).addCase(queryThunk.fulfilled, function (draft, _j) {
                var meta = _j.meta, payload = _j.payload;
                updateQuerySubstateIfExists(draft, meta.arg.queryCacheKey, function (substate) {
                    var _a;
                    if (substate.requestId !== meta.requestId && !isUpsertQuery(meta.arg))
                        return;
                    var merge = definitions[meta.arg.endpointName].merge;
                    substate.status = QueryStatus.fulfilled;
                    if (merge) {
                        if (substate.data !== void 0) {
                            var fulfilledTimeStamp_1 = meta.fulfilledTimeStamp, arg_1 = meta.arg, baseQueryMeta_1 = meta.baseQueryMeta, requestId_1 = meta.requestId;
                            var newData = createNextState2(substate.data, function (draftSubstateData) {
                                return merge(draftSubstateData, payload, {
                                    arg: arg_1.originalArgs,
                                    baseQueryMeta: baseQueryMeta_1,
                                    fulfilledTimeStamp: fulfilledTimeStamp_1,
                                    requestId: requestId_1
                                });
                            });
                            substate.data = newData;
                        }
                        else {
                            substate.data = payload;
                        }
                    }
                    else {
                        substate.data = ((_a = definitions[meta.arg.endpointName].structuralSharing) != null ? _a : true) ? copyWithStructuralSharing(r$4(substate.data) ? e$4(substate.data) : substate.data, payload) : payload;
                    }
                    delete substate.error;
                    substate.fulfilledTimeStamp = meta.fulfilledTimeStamp;
                });
            }).addCase(queryThunk.rejected, function (draft, _j) {
                var _k = _j.meta, condition = _k.condition, arg = _k.arg, requestId = _k.requestId, error = _j.error, payload = _j.payload;
                updateQuerySubstateIfExists(draft, arg.queryCacheKey, function (substate) {
                    if (condition) ;
                    else {
                        if (substate.requestId !== requestId)
                            return;
                        substate.status = QueryStatus.rejected;
                        substate.error = payload != null ? payload : error;
                    }
                });
            }).addMatcher(hasRehydrationInfo, function (draft, action) {
                var queries = extractRehydrationInfo(action).queries;
                for (var _j = 0, _k = Object.entries(queries); _j < _k.length; _j++) {
                    var _l = _k[_j], key = _l[0], entry = _l[1];
                    if ((entry == null ? void 0 : entry.status) === QueryStatus.fulfilled || (entry == null ? void 0 : entry.status) === QueryStatus.rejected) {
                        draft[key] = entry;
                    }
                }
            });
        }
    });
    var mutationSlice = createSlice({
        name: reducerPath + "/mutations",
        initialState: initialState$3,
        reducers: {
            removeMutationResult: {
                reducer: function (draft, _j) {
                    var payload = _j.payload;
                    var cacheKey = getMutationCacheKey(payload);
                    if (cacheKey in draft) {
                        delete draft[cacheKey];
                    }
                },
                prepare: prepareAutoBatched()
            }
        },
        extraReducers: function (builder) {
            builder.addCase(mutationThunk.pending, function (draft, _j) {
                var meta = _j.meta, _k = _j.meta, requestId = _k.requestId, arg = _k.arg, startedTimeStamp = _k.startedTimeStamp;
                if (!arg.track)
                    return;
                draft[getMutationCacheKey(meta)] = {
                    requestId: requestId,
                    status: QueryStatus.pending,
                    endpointName: arg.endpointName,
                    startedTimeStamp: startedTimeStamp
                };
            }).addCase(mutationThunk.fulfilled, function (draft, _j) {
                var payload = _j.payload, meta = _j.meta;
                if (!meta.arg.track)
                    return;
                updateMutationSubstateIfExists(draft, meta, function (substate) {
                    if (substate.requestId !== meta.requestId)
                        return;
                    substate.status = QueryStatus.fulfilled;
                    substate.data = payload;
                    substate.fulfilledTimeStamp = meta.fulfilledTimeStamp;
                });
            }).addCase(mutationThunk.rejected, function (draft, _j) {
                var payload = _j.payload, error = _j.error, meta = _j.meta;
                if (!meta.arg.track)
                    return;
                updateMutationSubstateIfExists(draft, meta, function (substate) {
                    if (substate.requestId !== meta.requestId)
                        return;
                    substate.status = QueryStatus.rejected;
                    substate.error = payload != null ? payload : error;
                });
            }).addMatcher(hasRehydrationInfo, function (draft, action) {
                var mutations = extractRehydrationInfo(action).mutations;
                for (var _j = 0, _k = Object.entries(mutations); _j < _k.length; _j++) {
                    var _l = _k[_j], key = _l[0], entry = _l[1];
                    if (((entry == null ? void 0 : entry.status) === QueryStatus.fulfilled || (entry == null ? void 0 : entry.status) === QueryStatus.rejected) && key !== (entry == null ? void 0 : entry.requestId)) {
                        draft[key] = entry;
                    }
                }
            });
        }
    });
    var invalidationSlice = createSlice({
        name: reducerPath + "/invalidation",
        initialState: initialState$3,
        reducers: {},
        extraReducers: function (builder) {
            builder.addCase(querySlice.actions.removeQueryResult, function (draft, _j) {
                var queryCacheKey = _j.payload.queryCacheKey;
                for (var _k = 0, _l = Object.values(draft); _k < _l.length; _k++) {
                    var tagTypeSubscriptions = _l[_k];
                    for (var _m = 0, _o = Object.values(tagTypeSubscriptions); _m < _o.length; _m++) {
                        var idSubscriptions = _o[_m];
                        var foundAt = idSubscriptions.indexOf(queryCacheKey);
                        if (foundAt !== -1) {
                            idSubscriptions.splice(foundAt, 1);
                        }
                    }
                }
            }).addMatcher(hasRehydrationInfo, function (draft, action) {
                var _a, _b, _c, _d;
                var provided = extractRehydrationInfo(action).provided;
                for (var _j = 0, _k = Object.entries(provided); _j < _k.length; _j++) {
                    var _l = _k[_j], type = _l[0], incomingTags = _l[1];
                    for (var _m = 0, _o = Object.entries(incomingTags); _m < _o.length; _m++) {
                        var _p = _o[_m], id = _p[0], cacheKeys = _p[1];
                        var subscribedQueries = (_d = (_b = (_a = draft[type]) != null ? _a : draft[type] = {})[_c = id || "__internal_without_id"]) != null ? _d : _b[_c] = [];
                        for (var _q = 0, cacheKeys_1 = cacheKeys; _q < cacheKeys_1.length; _q++) {
                            var queryCacheKey = cacheKeys_1[_q];
                            var alreadySubscribed = subscribedQueries.includes(queryCacheKey);
                            if (!alreadySubscribed) {
                                subscribedQueries.push(queryCacheKey);
                            }
                        }
                    }
                }
            }).addMatcher(isAnyOf(isFulfilled(queryThunk), isRejectedWithValue(queryThunk)), function (draft, action) {
                var _a, _b, _c, _d;
                var providedTags = calculateProvidedByThunk(action, "providesTags", definitions, assertTagType);
                var queryCacheKey = action.meta.arg.queryCacheKey;
                for (var _j = 0, _k = Object.values(draft); _j < _k.length; _j++) {
                    var tagTypeSubscriptions = _k[_j];
                    for (var _l = 0, _m = Object.values(tagTypeSubscriptions); _l < _m.length; _l++) {
                        var idSubscriptions = _m[_l];
                        var foundAt = idSubscriptions.indexOf(queryCacheKey);
                        if (foundAt !== -1) {
                            idSubscriptions.splice(foundAt, 1);
                        }
                    }
                }
                for (var _o = 0, providedTags_1 = providedTags; _o < providedTags_1.length; _o++) {
                    var _p = providedTags_1[_o], type = _p.type, id = _p.id;
                    var subscribedQueries = (_d = (_b = (_a = draft[type]) != null ? _a : draft[type] = {})[_c = id || "__internal_without_id"]) != null ? _d : _b[_c] = [];
                    var alreadySubscribed = subscribedQueries.includes(queryCacheKey);
                    if (!alreadySubscribed) {
                        subscribedQueries.push(queryCacheKey);
                    }
                }
            });
        }
    });
    var subscriptionSlice = createSlice({
        name: reducerPath + "/subscriptions",
        initialState: initialState$3,
        reducers: {
            updateSubscriptionOptions: function (d, a) {
            },
            unsubscribeQueryResult: function (d, a) {
            },
            internal_probeSubscription: function (d, a) {
            }
        }
    });
    var internalSubscriptionsSlice = createSlice({
        name: reducerPath + "/internalSubscriptions",
        initialState: initialState$3,
        reducers: {
            subscriptionsUpdated: {
                reducer: function (state, action) {
                    return pn(state, action.payload);
                },
                prepare: prepareAutoBatched()
            }
        }
    });
    var configSlice = createSlice({
        name: reducerPath + "/config",
        initialState: __spreadValues$1({
            online: isOnline(),
            focused: isDocumentVisible(),
            middlewareRegistered: false
        }, config),
        reducers: {
            middlewareRegistered: function (state, _j) {
                var payload = _j.payload;
                state.middlewareRegistered = state.middlewareRegistered === "conflict" || apiUid !== payload ? "conflict" : true;
            }
        },
        extraReducers: function (builder) {
            builder.addCase(onOnline, function (state) {
                state.online = true;
            }).addCase(onOffline, function (state) {
                state.online = false;
            }).addCase(onFocus, function (state) {
                state.focused = true;
            }).addCase(onFocusLost, function (state) {
                state.focused = false;
            }).addMatcher(hasRehydrationInfo, function (draft) { return __spreadValues$1({}, draft); });
        }
    });
    var combinedReducer = combineReducers({
        queries: querySlice.reducer,
        mutations: mutationSlice.reducer,
        provided: invalidationSlice.reducer,
        subscriptions: internalSubscriptionsSlice.reducer,
        config: configSlice.reducer
    });
    var reducer = function (state, action) { return combinedReducer(resetApiState.match(action) ? void 0 : state, action); };
    var actions = __spreadProps$1(__spreadValues$1(__spreadValues$1(__spreadValues$1(__spreadValues$1(__spreadValues$1({}, configSlice.actions), querySlice.actions), subscriptionSlice.actions), internalSubscriptionsSlice.actions), mutationSlice.actions), {
        unsubscribeMutationResult: mutationSlice.actions.removeMutationResult,
        resetApiState: resetApiState
    });
    return { reducer: reducer, actions: actions };
}
// src/query/core/buildSelectors.ts
var skipToken = /* @__PURE__ */ Symbol.for("RTKQ/skipToken");
var initialSubState = {
    status: QueryStatus.uninitialized
};
var defaultQuerySubState = /* @__PURE__ */ createNextState2(initialSubState, function () {
});
var defaultMutationSubState = /* @__PURE__ */ createNextState2(initialSubState, function () {
});
function buildSelectors(_j) {
    var serializeQueryArgs = _j.serializeQueryArgs, reducerPath = _j.reducerPath;
    var selectSkippedQuery = function (state) { return defaultQuerySubState; };
    var selectSkippedMutation = function (state) { return defaultMutationSubState; };
    return { buildQuerySelector: buildQuerySelector, buildMutationSelector: buildMutationSelector, selectInvalidatedBy: selectInvalidatedBy };
    function withRequestFlags(substate) {
        return __spreadValues$1(__spreadValues$1({}, substate), getRequestStatusFlags(substate.status));
    }
    function selectInternalState(rootState) {
        var state = rootState[reducerPath];
        return state;
    }
    function buildQuerySelector(endpointName, endpointDefinition) {
        return function (queryArgs) {
            var serializedArgs = serializeQueryArgs({
                queryArgs: queryArgs,
                endpointDefinition: endpointDefinition,
                endpointName: endpointName
            });
            var selectQuerySubstate = function (state) {
                var _a, _b, _c;
                return (_c = (_b = (_a = selectInternalState(state)) == null ? void 0 : _a.queries) == null ? void 0 : _b[serializedArgs]) != null ? _c : defaultQuerySubState;
            };
            var finalSelectQuerySubState = queryArgs === skipToken ? selectSkippedQuery : selectQuerySubstate;
            return createSelector(finalSelectQuerySubState, withRequestFlags);
        };
    }
    function buildMutationSelector() {
        return function (id) {
            var _a;
            var mutationId;
            if (typeof id === "object") {
                mutationId = (_a = getMutationCacheKey(id)) != null ? _a : skipToken;
            }
            else {
                mutationId = id;
            }
            var selectMutationSubstate = function (state) {
                var _a2, _b, _c;
                return (_c = (_b = (_a2 = selectInternalState(state)) == null ? void 0 : _a2.mutations) == null ? void 0 : _b[mutationId]) != null ? _c : defaultMutationSubState;
            };
            var finalSelectMutationSubstate = mutationId === skipToken ? selectSkippedMutation : selectMutationSubstate;
            return createSelector(finalSelectMutationSubstate, withRequestFlags);
        };
    }
    function selectInvalidatedBy(state, tags) {
        var _a;
        var apiState = state[reducerPath];
        var toInvalidate = new Set();
        for (var _j = 0, _k = tags.map(expandTagDescription); _j < _k.length; _j++) {
            var tag = _k[_j];
            var provided = apiState.provided[tag.type];
            if (!provided) {
                continue;
            }
            var invalidateSubscriptions = (_a = tag.id !== void 0 ? provided[tag.id] : flatten(Object.values(provided))) != null ? _a : [];
            for (var _l = 0, invalidateSubscriptions_1 = invalidateSubscriptions; _l < invalidateSubscriptions_1.length; _l++) {
                var invalidate = invalidateSubscriptions_1[_l];
                toInvalidate.add(invalidate);
            }
        }
        return flatten(Array.from(toInvalidate.values()).map(function (queryCacheKey) {
            var querySubState = apiState.queries[queryCacheKey];
            return querySubState ? [
                {
                    queryCacheKey: queryCacheKey,
                    endpointName: querySubState.endpointName,
                    originalArgs: querySubState.originalArgs
                }
            ] : [];
        }));
    }
}
var cache$1 = WeakMap ? new WeakMap() : void 0;
var defaultSerializeQueryArgs$1 = function (_j) {
    var endpointName = _j.endpointName, queryArgs = _j.queryArgs;
    var serialized = "";
    var cached = cache$1 == null ? void 0 : cache$1.get(queryArgs);
    if (typeof cached === "string") {
        serialized = cached;
    }
    else {
        var stringified = JSON.stringify(queryArgs, function (key, value) { return isPlainObject$2(value) ? Object.keys(value).sort().reduce(function (acc, key2) {
            acc[key2] = value[key2];
            return acc;
        }, {}) : value; });
        if (isPlainObject$2(queryArgs)) {
            cache$1 == null ? void 0 : cache$1.set(queryArgs, stringified);
        }
        serialized = stringified;
    }
    return endpointName + "(" + serialized + ")";
};
function buildCreateApi() {
    var modules = [];
    for (var _j = 0; _j < arguments.length; _j++) {
        modules[_j] = arguments[_j];
    }
    return function baseCreateApi(options) {
        var extractRehydrationInfo = defaultMemoize(function (action) {
            var _a, _b;
            return (_b = options.extractRehydrationInfo) == null ? void 0 : _b.call(options, action, {
                reducerPath: (_a = options.reducerPath) != null ? _a : "api"
            });
        });
        var optionsWithDefaults = __spreadProps$1(__spreadValues$1({
            reducerPath: "api",
            keepUnusedDataFor: 60,
            refetchOnMountOrArgChange: false,
            refetchOnFocus: false,
            refetchOnReconnect: false
        }, options), {
            extractRehydrationInfo: extractRehydrationInfo,
            serializeQueryArgs: function (queryArgsApi) {
                var finalSerializeQueryArgs = defaultSerializeQueryArgs$1;
                if ("serializeQueryArgs" in queryArgsApi.endpointDefinition) {
                    var endpointSQA_1 = queryArgsApi.endpointDefinition.serializeQueryArgs;
                    finalSerializeQueryArgs = function (queryArgsApi2) {
                        var initialResult = endpointSQA_1(queryArgsApi2);
                        if (typeof initialResult === "string") {
                            return initialResult;
                        }
                        else {
                            return defaultSerializeQueryArgs$1(__spreadProps$1(__spreadValues$1({}, queryArgsApi2), {
                                queryArgs: initialResult
                            }));
                        }
                    };
                }
                else if (options.serializeQueryArgs) {
                    finalSerializeQueryArgs = options.serializeQueryArgs;
                }
                return finalSerializeQueryArgs(queryArgsApi);
            },
            tagTypes: __spreadArray$1([], options.tagTypes || [])
        });
        var context = {
            endpointDefinitions: {},
            batch: function (fn) {
                fn();
            },
            apiUid: nanoid(),
            extractRehydrationInfo: extractRehydrationInfo,
            hasRehydrationInfo: defaultMemoize(function (action) { return extractRehydrationInfo(action) != null; })
        };
        var api = {
            injectEndpoints: injectEndpoints,
            enhanceEndpoints: function (_j) {
                var addTagTypes = _j.addTagTypes, endpoints = _j.endpoints;
                if (addTagTypes) {
                    for (var _k = 0, addTagTypes_1 = addTagTypes; _k < addTagTypes_1.length; _k++) {
                        var eT = addTagTypes_1[_k];
                        if (!optionsWithDefaults.tagTypes.includes(eT)) {
                            optionsWithDefaults.tagTypes.push(eT);
                        }
                    }
                }
                if (endpoints) {
                    for (var _l = 0, _m = Object.entries(endpoints); _l < _m.length; _l++) {
                        var _o = _m[_l], endpointName = _o[0], partialDefinition = _o[1];
                        if (typeof partialDefinition === "function") {
                            partialDefinition(context.endpointDefinitions[endpointName]);
                        }
                        else {
                            Object.assign(context.endpointDefinitions[endpointName] || {}, partialDefinition);
                        }
                    }
                }
                return api;
            }
        };
        var initializedModules = modules.map(function (m) { return m.init(api, optionsWithDefaults, context); });
        function injectEndpoints(inject) {
            var evaluatedEndpoints = inject.endpoints({
                query: function (x) { return __spreadProps$1(__spreadValues$1({}, x), { type: DefinitionType$1.query }); },
                mutation: function (x) { return __spreadProps$1(__spreadValues$1({}, x), { type: DefinitionType$1.mutation }); }
            });
            for (var _j = 0, _k = Object.entries(evaluatedEndpoints); _j < _k.length; _j++) {
                var _l = _k[_j], endpointName = _l[0], definition = _l[1];
                if (!inject.overrideExisting && endpointName in context.endpointDefinitions) {
                    if (typeof process !== "undefined" && "production" === "development") {
                        console.error("called `injectEndpoints` to override already-existing endpointName " + endpointName + " without specifying `overrideExisting: true`");
                    }
                    continue;
                }
                context.endpointDefinitions[endpointName] = definition;
                for (var _m = 0, initializedModules_1 = initializedModules; _m < initializedModules_1.length; _m++) {
                    var m = initializedModules_1[_m];
                    m.injectEndpoint(endpointName, definition);
                }
            }
            return api;
        }
        return api.injectEndpoints({ endpoints: options.endpoints });
    };
}
// src/query/core/buildMiddleware/cacheCollection.ts
function isObjectEmpty(obj) {
    for (var k in obj) {
        return false;
    }
    return true;
}
var THIRTY_TWO_BIT_MAX_TIMER_SECONDS = 2147483647 / 1e3 - 1;
var buildCacheCollectionHandler = function (_j) {
    var reducerPath = _j.reducerPath, api = _j.api, context = _j.context, internalState = _j.internalState;
    var _k = api.internalActions, removeQueryResult = _k.removeQueryResult, unsubscribeQueryResult = _k.unsubscribeQueryResult;
    function anySubscriptionsRemainingForKey(queryCacheKey) {
        var subscriptions = internalState.currentSubscriptions[queryCacheKey];
        return !!subscriptions && !isObjectEmpty(subscriptions);
    }
    var currentRemovalTimeouts = {};
    var handler = function (action, mwApi, internalState2) {
        var _a;
        if (unsubscribeQueryResult.match(action)) {
            var state = mwApi.getState()[reducerPath];
            var queryCacheKey = action.payload.queryCacheKey;
            handleUnsubscribe(queryCacheKey, (_a = state.queries[queryCacheKey]) == null ? void 0 : _a.endpointName, mwApi, state.config);
        }
        if (api.util.resetApiState.match(action)) {
            for (var _j = 0, _k = Object.entries(currentRemovalTimeouts); _j < _k.length; _j++) {
                var _l = _k[_j], key = _l[0], timeout = _l[1];
                if (timeout)
                    clearTimeout(timeout);
                delete currentRemovalTimeouts[key];
            }
        }
        if (context.hasRehydrationInfo(action)) {
            var state = mwApi.getState()[reducerPath];
            var queries = context.extractRehydrationInfo(action).queries;
            for (var _m = 0, _o = Object.entries(queries); _m < _o.length; _m++) {
                var _p = _o[_m], queryCacheKey = _p[0], queryState = _p[1];
                handleUnsubscribe(queryCacheKey, queryState == null ? void 0 : queryState.endpointName, mwApi, state.config);
            }
        }
    };
    function handleUnsubscribe(queryCacheKey, endpointName, api2, config) {
        var _a;
        var endpointDefinition = context.endpointDefinitions[endpointName];
        var keepUnusedDataFor = (_a = endpointDefinition == null ? void 0 : endpointDefinition.keepUnusedDataFor) != null ? _a : config.keepUnusedDataFor;
        if (keepUnusedDataFor === Infinity) {
            return;
        }
        var finalKeepUnusedDataFor = Math.max(0, Math.min(keepUnusedDataFor, THIRTY_TWO_BIT_MAX_TIMER_SECONDS));
        if (!anySubscriptionsRemainingForKey(queryCacheKey)) {
            var currentTimeout = currentRemovalTimeouts[queryCacheKey];
            if (currentTimeout) {
                clearTimeout(currentTimeout);
            }
            currentRemovalTimeouts[queryCacheKey] = setTimeout(function () {
                if (!anySubscriptionsRemainingForKey(queryCacheKey)) {
                    api2.dispatch(removeQueryResult({ queryCacheKey: queryCacheKey }));
                }
                delete currentRemovalTimeouts[queryCacheKey];
            }, finalKeepUnusedDataFor * 1e3);
        }
    }
    return handler;
};
var buildInvalidationByTagsHandler = function (_j) {
    var reducerPath = _j.reducerPath, context = _j.context, endpointDefinitions = _j.context.endpointDefinitions, mutationThunk = _j.mutationThunk, api = _j.api, assertTagType = _j.assertTagType, refetchQuery = _j.refetchQuery;
    var removeQueryResult = api.internalActions.removeQueryResult;
    var isThunkActionWithTags = isAnyOf(isFulfilled(mutationThunk), isRejectedWithValue(mutationThunk));
    var handler = function (action, mwApi) {
        if (isThunkActionWithTags(action)) {
            invalidateTags(calculateProvidedByThunk(action, "invalidatesTags", endpointDefinitions, assertTagType), mwApi);
        }
        if (api.util.invalidateTags.match(action)) {
            invalidateTags(calculateProvidedBy(action.payload, void 0, void 0, void 0, void 0, assertTagType), mwApi);
        }
    };
    function invalidateTags(tags, mwApi) {
        var rootState = mwApi.getState();
        var state = rootState[reducerPath];
        var toInvalidate = api.util.selectInvalidatedBy(rootState, tags);
        context.batch(function () {
            var _a;
            var valuesArray = Array.from(toInvalidate.values());
            for (var _j = 0, valuesArray_1 = valuesArray; _j < valuesArray_1.length; _j++) {
                var queryCacheKey = valuesArray_1[_j].queryCacheKey;
                var querySubState = state.queries[queryCacheKey];
                var subscriptionSubState = (_a = state.subscriptions[queryCacheKey]) != null ? _a : {};
                if (querySubState) {
                    if (Object.keys(subscriptionSubState).length === 0) {
                        mwApi.dispatch(removeQueryResult({
                            queryCacheKey: queryCacheKey
                        }));
                    }
                    else if (querySubState.status !== QueryStatus.uninitialized) {
                        mwApi.dispatch(refetchQuery(querySubState, queryCacheKey));
                    }
                }
            }
        });
    }
    return handler;
};
// src/query/core/buildMiddleware/polling.ts
var buildPollingHandler = function (_j) {
    var reducerPath = _j.reducerPath, queryThunk = _j.queryThunk, api = _j.api, refetchQuery = _j.refetchQuery, internalState = _j.internalState;
    var currentPolls = {};
    var handler = function (action, mwApi) {
        if (api.internalActions.updateSubscriptionOptions.match(action) || api.internalActions.unsubscribeQueryResult.match(action)) {
            updatePollingInterval(action.payload, mwApi);
        }
        if (queryThunk.pending.match(action) || queryThunk.rejected.match(action) && action.meta.condition) {
            updatePollingInterval(action.meta.arg, mwApi);
        }
        if (queryThunk.fulfilled.match(action) || queryThunk.rejected.match(action) && !action.meta.condition) {
            startNextPoll(action.meta.arg, mwApi);
        }
        if (api.util.resetApiState.match(action)) {
            clearPolls();
        }
    };
    function startNextPoll(_j, api2) {
        var queryCacheKey = _j.queryCacheKey;
        var state = api2.getState()[reducerPath];
        var querySubState = state.queries[queryCacheKey];
        var subscriptions = internalState.currentSubscriptions[queryCacheKey];
        if (!querySubState || querySubState.status === QueryStatus.uninitialized)
            return;
        var lowestPollingInterval = findLowestPollingInterval(subscriptions);
        if (!Number.isFinite(lowestPollingInterval))
            return;
        var currentPoll = currentPolls[queryCacheKey];
        if (currentPoll == null ? void 0 : currentPoll.timeout) {
            clearTimeout(currentPoll.timeout);
            currentPoll.timeout = void 0;
        }
        var nextPollTimestamp = Date.now() + lowestPollingInterval;
        var currentInterval = currentPolls[queryCacheKey] = {
            nextPollTimestamp: nextPollTimestamp,
            pollingInterval: lowestPollingInterval,
            timeout: setTimeout(function () {
                currentInterval.timeout = void 0;
                api2.dispatch(refetchQuery(querySubState, queryCacheKey));
            }, lowestPollingInterval)
        };
    }
    function updatePollingInterval(_j, api2) {
        var queryCacheKey = _j.queryCacheKey;
        var state = api2.getState()[reducerPath];
        var querySubState = state.queries[queryCacheKey];
        var subscriptions = internalState.currentSubscriptions[queryCacheKey];
        if (!querySubState || querySubState.status === QueryStatus.uninitialized) {
            return;
        }
        var lowestPollingInterval = findLowestPollingInterval(subscriptions);
        if (!Number.isFinite(lowestPollingInterval)) {
            cleanupPollForKey(queryCacheKey);
            return;
        }
        var currentPoll = currentPolls[queryCacheKey];
        var nextPollTimestamp = Date.now() + lowestPollingInterval;
        if (!currentPoll || nextPollTimestamp < currentPoll.nextPollTimestamp) {
            startNextPoll({ queryCacheKey: queryCacheKey }, api2);
        }
    }
    function cleanupPollForKey(key) {
        var existingPoll = currentPolls[key];
        if (existingPoll == null ? void 0 : existingPoll.timeout) {
            clearTimeout(existingPoll.timeout);
        }
        delete currentPolls[key];
    }
    function clearPolls() {
        for (var _j = 0, _k = Object.keys(currentPolls); _j < _k.length; _j++) {
            var key = _k[_j];
            cleanupPollForKey(key);
        }
    }
    function findLowestPollingInterval(subscribers) {
        if (subscribers === void 0) { subscribers = {}; }
        var lowestPollingInterval = Number.POSITIVE_INFINITY;
        for (var key in subscribers) {
            if (!!subscribers[key].pollingInterval) {
                lowestPollingInterval = Math.min(subscribers[key].pollingInterval, lowestPollingInterval);
            }
        }
        return lowestPollingInterval;
    }
    return handler;
};
// src/query/core/buildMiddleware/windowEventHandling.ts
var buildWindowEventHandler = function (_j) {
    var reducerPath = _j.reducerPath, context = _j.context, api = _j.api, refetchQuery = _j.refetchQuery, internalState = _j.internalState;
    var removeQueryResult = api.internalActions.removeQueryResult;
    var handler = function (action, mwApi) {
        if (onFocus.match(action)) {
            refetchValidQueries(mwApi, "refetchOnFocus");
        }
        if (onOnline.match(action)) {
            refetchValidQueries(mwApi, "refetchOnReconnect");
        }
    };
    function refetchValidQueries(api2, type) {
        var state = api2.getState()[reducerPath];
        var queries = state.queries;
        var subscriptions = internalState.currentSubscriptions;
        context.batch(function () {
            for (var _j = 0, _k = Object.keys(subscriptions); _j < _k.length; _j++) {
                var queryCacheKey = _k[_j];
                var querySubState = queries[queryCacheKey];
                var subscriptionSubState = subscriptions[queryCacheKey];
                if (!subscriptionSubState || !querySubState)
                    continue;
                var shouldRefetch = Object.values(subscriptionSubState).some(function (sub) { return sub[type] === true; }) || Object.values(subscriptionSubState).every(function (sub) { return sub[type] === void 0; }) && state.config[type];
                if (shouldRefetch) {
                    if (Object.keys(subscriptionSubState).length === 0) {
                        api2.dispatch(removeQueryResult({
                            queryCacheKey: queryCacheKey
                        }));
                    }
                    else if (querySubState.status !== QueryStatus.uninitialized) {
                        api2.dispatch(refetchQuery(querySubState, queryCacheKey));
                    }
                }
            }
        });
    }
    return handler;
};
var neverResolvedError = new Error("Promise never resolved before cacheEntryRemoved.");
var buildCacheLifecycleHandler = function (_j) {
    var api = _j.api, reducerPath = _j.reducerPath, context = _j.context, queryThunk = _j.queryThunk, mutationThunk = _j.mutationThunk; _j.internalState;
    var isQueryThunk = isAsyncThunkAction(queryThunk);
    var isMutationThunk = isAsyncThunkAction(mutationThunk);
    var isFulfilledThunk = isFulfilled(queryThunk, mutationThunk);
    var lifecycleMap = {};
    var handler = function (action, mwApi, stateBefore) {
        var cacheKey = getCacheKey(action);
        if (queryThunk.pending.match(action)) {
            var oldState = stateBefore[reducerPath].queries[cacheKey];
            var state = mwApi.getState()[reducerPath].queries[cacheKey];
            if (!oldState && state) {
                handleNewKey(action.meta.arg.endpointName, action.meta.arg.originalArgs, cacheKey, mwApi, action.meta.requestId);
            }
        }
        else if (mutationThunk.pending.match(action)) {
            var state = mwApi.getState()[reducerPath].mutations[cacheKey];
            if (state) {
                handleNewKey(action.meta.arg.endpointName, action.meta.arg.originalArgs, cacheKey, mwApi, action.meta.requestId);
            }
        }
        else if (isFulfilledThunk(action)) {
            var lifecycle = lifecycleMap[cacheKey];
            if (lifecycle == null ? void 0 : lifecycle.valueResolved) {
                lifecycle.valueResolved({
                    data: action.payload,
                    meta: action.meta.baseQueryMeta
                });
                delete lifecycle.valueResolved;
            }
        }
        else if (api.internalActions.removeQueryResult.match(action) || api.internalActions.removeMutationResult.match(action)) {
            var lifecycle = lifecycleMap[cacheKey];
            if (lifecycle) {
                delete lifecycleMap[cacheKey];
                lifecycle.cacheEntryRemoved();
            }
        }
        else if (api.util.resetApiState.match(action)) {
            for (var _j = 0, _k = Object.entries(lifecycleMap); _j < _k.length; _j++) {
                var _l = _k[_j], cacheKey2 = _l[0], lifecycle = _l[1];
                delete lifecycleMap[cacheKey2];
                lifecycle.cacheEntryRemoved();
            }
        }
    };
    function getCacheKey(action) {
        if (isQueryThunk(action))
            return action.meta.arg.queryCacheKey;
        if (isMutationThunk(action))
            return action.meta.requestId;
        if (api.internalActions.removeQueryResult.match(action))
            return action.payload.queryCacheKey;
        if (api.internalActions.removeMutationResult.match(action))
            return getMutationCacheKey(action.payload);
        return "";
    }
    function handleNewKey(endpointName, originalArgs, queryCacheKey, mwApi, requestId) {
        var endpointDefinition = context.endpointDefinitions[endpointName];
        var onCacheEntryAdded = endpointDefinition == null ? void 0 : endpointDefinition.onCacheEntryAdded;
        if (!onCacheEntryAdded)
            return;
        var lifecycle = {};
        var cacheEntryRemoved = new Promise(function (resolve) {
            lifecycle.cacheEntryRemoved = resolve;
        });
        var cacheDataLoaded = Promise.race([
            new Promise(function (resolve) {
                lifecycle.valueResolved = resolve;
            }),
            cacheEntryRemoved.then(function () {
                throw neverResolvedError;
            })
        ]);
        cacheDataLoaded.catch(function () {
        });
        lifecycleMap[queryCacheKey] = lifecycle;
        var selector = api.endpoints[endpointName].select(endpointDefinition.type === DefinitionType$1.query ? originalArgs : queryCacheKey);
        var extra = mwApi.dispatch(function (_, __, extra2) { return extra2; });
        var lifecycleApi = __spreadProps$1(__spreadValues$1({}, mwApi), {
            getCacheEntry: function () { return selector(mwApi.getState()); },
            requestId: requestId,
            extra: extra,
            updateCachedData: endpointDefinition.type === DefinitionType$1.query ? function (updateRecipe) { return mwApi.dispatch(api.util.updateQueryData(endpointName, originalArgs, updateRecipe)); } : void 0,
            cacheDataLoaded: cacheDataLoaded,
            cacheEntryRemoved: cacheEntryRemoved
        });
        var runningHandler = onCacheEntryAdded(originalArgs, lifecycleApi);
        Promise.resolve(runningHandler).catch(function (e) {
            if (e === neverResolvedError)
                return;
            throw e;
        });
    }
    return handler;
};
var buildQueryLifecycleHandler = function (_j) {
    var api = _j.api, context = _j.context, queryThunk = _j.queryThunk, mutationThunk = _j.mutationThunk;
    var isPendingThunk = isPending(queryThunk, mutationThunk);
    var isRejectedThunk = isRejected(queryThunk, mutationThunk);
    var isFullfilledThunk = isFulfilled(queryThunk, mutationThunk);
    var lifecycleMap = {};
    var handler = function (action, mwApi) {
        var _a, _b, _c;
        if (isPendingThunk(action)) {
            var _j = action.meta, requestId = _j.requestId, _k = _j.arg, endpointName_1 = _k.endpointName, originalArgs_1 = _k.originalArgs;
            var endpointDefinition = context.endpointDefinitions[endpointName_1];
            var onQueryStarted = endpointDefinition == null ? void 0 : endpointDefinition.onQueryStarted;
            if (onQueryStarted) {
                var lifecycle_1 = {};
                var queryFulfilled = new Promise(function (resolve, reject) {
                    lifecycle_1.resolve = resolve;
                    lifecycle_1.reject = reject;
                });
                queryFulfilled.catch(function () {
                });
                lifecycleMap[requestId] = lifecycle_1;
                var selector_1 = api.endpoints[endpointName_1].select(endpointDefinition.type === DefinitionType$1.query ? originalArgs_1 : requestId);
                var extra = mwApi.dispatch(function (_, __, extra2) { return extra2; });
                var lifecycleApi = __spreadProps$1(__spreadValues$1({}, mwApi), {
                    getCacheEntry: function () { return selector_1(mwApi.getState()); },
                    requestId: requestId,
                    extra: extra,
                    updateCachedData: endpointDefinition.type === DefinitionType$1.query ? function (updateRecipe) { return mwApi.dispatch(api.util.updateQueryData(endpointName_1, originalArgs_1, updateRecipe)); } : void 0,
                    queryFulfilled: queryFulfilled
                });
                onQueryStarted(originalArgs_1, lifecycleApi);
            }
        }
        else if (isFullfilledThunk(action)) {
            var _l = action.meta, requestId = _l.requestId, baseQueryMeta = _l.baseQueryMeta;
            (_a = lifecycleMap[requestId]) == null ? void 0 : _a.resolve({
                data: action.payload,
                meta: baseQueryMeta
            });
            delete lifecycleMap[requestId];
        }
        else if (isRejectedThunk(action)) {
            var _m = action.meta, requestId = _m.requestId, rejectedWithValue = _m.rejectedWithValue, baseQueryMeta = _m.baseQueryMeta;
            (_c = lifecycleMap[requestId]) == null ? void 0 : _c.reject({
                error: (_b = action.payload) != null ? _b : action.error,
                isUnhandledError: !rejectedWithValue,
                meta: baseQueryMeta
            });
            delete lifecycleMap[requestId];
        }
    };
    return handler;
};
// src/query/core/buildMiddleware/devMiddleware.ts
var buildDevCheckHandler = function (_j) {
    var api = _j.api, apiUid = _j.context.apiUid, reducerPath = _j.reducerPath;
    return function (action, mwApi) {
        var _a, _b;
        if (api.util.resetApiState.match(action)) {
            mwApi.dispatch(api.internalActions.middlewareRegistered(apiUid));
        }
        if (typeof process !== "undefined" && "production" === "development") {
            if (api.internalActions.middlewareRegistered.match(action) && action.payload === apiUid && ((_b = (_a = mwApi.getState()[reducerPath]) == null ? void 0 : _a.config) == null ? void 0 : _b.middlewareRegistered) === "conflict") {
                console.warn("There is a mismatch between slice and middleware for the reducerPath \"" + reducerPath + "\".\nYou can only have one api per reducer path, this will lead to crashes in various situations!" + (reducerPath === "api" ? "\nIf you have multiple apis, you *have* to specify the reducerPath option when using createApi!" : ""));
            }
        }
    };
};
var promise;
var queueMicrotaskShim = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : globalThis) : function (cb) { return (promise || (promise = Promise.resolve())).then(cb).catch(function (err) { return setTimeout(function () {
    throw err;
}, 0); }); };
var buildBatchedActionsHandler = function (_j) {
    var api = _j.api, queryThunk = _j.queryThunk, internalState = _j.internalState;
    var subscriptionsPrefix = api.reducerPath + "/subscriptions";
    var previousSubscriptions = null;
    var dispatchQueued = false;
    var _k = api.internalActions, updateSubscriptionOptions = _k.updateSubscriptionOptions, unsubscribeQueryResult = _k.unsubscribeQueryResult;
    var actuallyMutateSubscriptions = function (mutableState, action) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i;
        if (updateSubscriptionOptions.match(action)) {
            var _j = action.payload, queryCacheKey = _j.queryCacheKey, requestId = _j.requestId, options = _j.options;
            if ((_a = mutableState == null ? void 0 : mutableState[queryCacheKey]) == null ? void 0 : _a[requestId]) {
                mutableState[queryCacheKey][requestId] = options;
            }
            return true;
        }
        if (unsubscribeQueryResult.match(action)) {
            var _k = action.payload, queryCacheKey = _k.queryCacheKey, requestId = _k.requestId;
            if (mutableState[queryCacheKey]) {
                delete mutableState[queryCacheKey][requestId];
            }
            return true;
        }
        if (api.internalActions.removeQueryResult.match(action)) {
            delete mutableState[action.payload.queryCacheKey];
            return true;
        }
        if (queryThunk.pending.match(action)) {
            var _l = action.meta, arg = _l.arg, requestId = _l.requestId;
            if (arg.subscribe) {
                var substate = (_c = mutableState[_b = arg.queryCacheKey]) != null ? _c : mutableState[_b] = {};
                substate[requestId] = (_e = (_d = arg.subscriptionOptions) != null ? _d : substate[requestId]) != null ? _e : {};
                return true;
            }
        }
        if (queryThunk.rejected.match(action)) {
            var _m = action.meta, condition = _m.condition, arg = _m.arg, requestId = _m.requestId;
            if (condition && arg.subscribe) {
                var substate = (_g = mutableState[_f = arg.queryCacheKey]) != null ? _g : mutableState[_f] = {};
                substate[requestId] = (_i = (_h = arg.subscriptionOptions) != null ? _h : substate[requestId]) != null ? _i : {};
                return true;
            }
        }
        return false;
    };
    return function (action, mwApi) {
        var _a, _b;
        if (!previousSubscriptions) {
            previousSubscriptions = JSON.parse(JSON.stringify(internalState.currentSubscriptions));
        }
        if (api.util.resetApiState.match(action)) {
            previousSubscriptions = internalState.currentSubscriptions = {};
            return [true, false];
        }
        if (api.internalActions.internal_probeSubscription.match(action)) {
            var _j = action.payload, queryCacheKey = _j.queryCacheKey, requestId = _j.requestId;
            var hasSubscription = !!((_a = internalState.currentSubscriptions[queryCacheKey]) == null ? void 0 : _a[requestId]);
            return [false, hasSubscription];
        }
        var didMutate = actuallyMutateSubscriptions(internalState.currentSubscriptions, action);
        if (didMutate) {
            if (!dispatchQueued) {
                queueMicrotaskShim(function () {
                    var newSubscriptions = JSON.parse(JSON.stringify(internalState.currentSubscriptions));
                    var _j = cn(previousSubscriptions, function () { return newSubscriptions; }), patches = _j[1];
                    mwApi.next(api.internalActions.subscriptionsUpdated(patches));
                    previousSubscriptions = newSubscriptions;
                    dispatchQueued = false;
                });
                dispatchQueued = true;
            }
            var isSubscriptionSliceAction = !!((_b = action.type) == null ? void 0 : _b.startsWith(subscriptionsPrefix));
            var isAdditionalSubscriptionAction = queryThunk.rejected.match(action) && action.meta.condition && !!action.meta.arg.subscribe;
            var actionShouldContinue = !isSubscriptionSliceAction && !isAdditionalSubscriptionAction;
            return [actionShouldContinue, false];
        }
        return [true, false];
    };
};
// src/query/core/buildMiddleware/index.ts
function buildMiddleware(input) {
    var reducerPath = input.reducerPath, queryThunk = input.queryThunk, api = input.api, context = input.context;
    var apiUid = context.apiUid;
    var actions = {
        invalidateTags: createAction(reducerPath + "/invalidateTags")
    };
    var isThisApiSliceAction = function (action) {
        return !!action && typeof action.type === "string" && action.type.startsWith(reducerPath + "/");
    };
    var handlerBuilders = [
        buildDevCheckHandler,
        buildCacheCollectionHandler,
        buildInvalidationByTagsHandler,
        buildPollingHandler,
        buildCacheLifecycleHandler,
        buildQueryLifecycleHandler
    ];
    var middleware = function (mwApi) {
        var initialized2 = false;
        var internalState = {
            currentSubscriptions: {}
        };
        var builderArgs = __spreadProps$1(__spreadValues$1({}, input), {
            internalState: internalState,
            refetchQuery: refetchQuery
        });
        var handlers = handlerBuilders.map(function (build) { return build(builderArgs); });
        var batchedActionsHandler = buildBatchedActionsHandler(builderArgs);
        var windowEventsHandler = buildWindowEventHandler(builderArgs);
        return function (next) {
            return function (action) {
                if (!initialized2) {
                    initialized2 = true;
                    mwApi.dispatch(api.internalActions.middlewareRegistered(apiUid));
                }
                var mwApiWithNext = __spreadProps$1(__spreadValues$1({}, mwApi), { next: next });
                var stateBefore = mwApi.getState();
                var _j = batchedActionsHandler(action, mwApiWithNext, stateBefore), actionShouldContinue = _j[0], hasSubscription = _j[1];
                var res;
                if (actionShouldContinue) {
                    res = next(action);
                }
                else {
                    res = hasSubscription;
                }
                if (!!mwApi.getState()[reducerPath]) {
                    windowEventsHandler(action, mwApiWithNext, stateBefore);
                    if (isThisApiSliceAction(action) || context.hasRehydrationInfo(action)) {
                        for (var _k = 0, handlers_1 = handlers; _k < handlers_1.length; _k++) {
                            var handler = handlers_1[_k];
                            handler(action, mwApiWithNext, stateBefore);
                        }
                    }
                }
                return res;
            };
        };
    };
    return { middleware: middleware, actions: actions };
    function refetchQuery(querySubState, queryCacheKey, override) {
        if (override === void 0) { override = {}; }
        return queryThunk(__spreadValues$1({
            type: "query",
            endpointName: querySubState.endpointName,
            originalArgs: querySubState.originalArgs,
            subscribe: false,
            forceRefetch: true,
            queryCacheKey: queryCacheKey
        }, override));
    }
}
function safeAssign$1(target) {
    var args = [];
    for (var _j = 1; _j < arguments.length; _j++) {
        args[_j - 1] = arguments[_j];
    }
    Object.assign.apply(Object, __spreadArray$1([target], args));
}
var coreModuleName = /* @__PURE__ */ Symbol();
var coreModule = function () { return ({
    name: coreModuleName,
    init: function (api, _j, context) {
        var baseQuery = _j.baseQuery, tagTypes = _j.tagTypes, reducerPath = _j.reducerPath, serializeQueryArgs = _j.serializeQueryArgs, keepUnusedDataFor = _j.keepUnusedDataFor, refetchOnMountOrArgChange = _j.refetchOnMountOrArgChange, refetchOnFocus = _j.refetchOnFocus, refetchOnReconnect = _j.refetchOnReconnect;
        T$5();
        var assertTagType = function (tag) {
            if (typeof process !== "undefined" && "production" === "development") {
                if (!tagTypes.includes(tag.type)) {
                    console.error("Tag type '" + tag.type + "' was used, but not specified in `tagTypes`!");
                }
            }
            return tag;
        };
        Object.assign(api, {
            reducerPath: reducerPath,
            endpoints: {},
            internalActions: {
                onOnline: onOnline,
                onOffline: onOffline,
                onFocus: onFocus,
                onFocusLost: onFocusLost
            },
            util: {}
        });
        var _k = buildThunks({
            baseQuery: baseQuery,
            reducerPath: reducerPath,
            context: context,
            api: api,
            serializeQueryArgs: serializeQueryArgs
        }), queryThunk = _k.queryThunk, mutationThunk = _k.mutationThunk, patchQueryData = _k.patchQueryData, updateQueryData = _k.updateQueryData, upsertQueryData = _k.upsertQueryData, prefetch = _k.prefetch, buildMatchThunkActions = _k.buildMatchThunkActions;
        var _l = buildSlice({
            context: context,
            queryThunk: queryThunk,
            mutationThunk: mutationThunk,
            reducerPath: reducerPath,
            assertTagType: assertTagType,
            config: {
                refetchOnFocus: refetchOnFocus,
                refetchOnReconnect: refetchOnReconnect,
                refetchOnMountOrArgChange: refetchOnMountOrArgChange,
                keepUnusedDataFor: keepUnusedDataFor,
                reducerPath: reducerPath
            }
        }), reducer = _l.reducer, sliceActions = _l.actions;
        safeAssign$1(api.util, {
            patchQueryData: patchQueryData,
            updateQueryData: updateQueryData,
            upsertQueryData: upsertQueryData,
            prefetch: prefetch,
            resetApiState: sliceActions.resetApiState
        });
        safeAssign$1(api.internalActions, sliceActions);
        var _m = buildMiddleware({
            reducerPath: reducerPath,
            context: context,
            queryThunk: queryThunk,
            mutationThunk: mutationThunk,
            api: api,
            assertTagType: assertTagType
        }), middleware = _m.middleware, middlewareActions = _m.actions;
        safeAssign$1(api.util, middlewareActions);
        safeAssign$1(api, { reducer: reducer, middleware: middleware });
        var _o = buildSelectors({
            serializeQueryArgs: serializeQueryArgs,
            reducerPath: reducerPath
        }), buildQuerySelector = _o.buildQuerySelector, buildMutationSelector = _o.buildMutationSelector, selectInvalidatedBy = _o.selectInvalidatedBy;
        safeAssign$1(api.util, { selectInvalidatedBy: selectInvalidatedBy });
        var _p = buildInitiate({
            queryThunk: queryThunk,
            mutationThunk: mutationThunk,
            api: api,
            serializeQueryArgs: serializeQueryArgs,
            context: context
        }), buildInitiateQuery = _p.buildInitiateQuery, buildInitiateMutation = _p.buildInitiateMutation, getRunningMutationThunk = _p.getRunningMutationThunk, getRunningMutationsThunk = _p.getRunningMutationsThunk, getRunningQueriesThunk = _p.getRunningQueriesThunk, getRunningQueryThunk = _p.getRunningQueryThunk, getRunningOperationPromises = _p.getRunningOperationPromises, removalWarning = _p.removalWarning;
        safeAssign$1(api.util, {
            getRunningOperationPromises: getRunningOperationPromises,
            getRunningOperationPromise: removalWarning,
            getRunningMutationThunk: getRunningMutationThunk,
            getRunningMutationsThunk: getRunningMutationsThunk,
            getRunningQueryThunk: getRunningQueryThunk,
            getRunningQueriesThunk: getRunningQueriesThunk
        });
        return {
            name: coreModuleName,
            injectEndpoint: function (endpointName, definition) {
                var _a, _b;
                var anyApi = api;
                (_b = (_a = anyApi.endpoints)[endpointName]) != null ? _b : _a[endpointName] = {};
                if (isQueryDefinition$1(definition)) {
                    safeAssign$1(anyApi.endpoints[endpointName], {
                        name: endpointName,
                        select: buildQuerySelector(endpointName, definition),
                        initiate: buildInitiateQuery(endpointName, definition)
                    }, buildMatchThunkActions(queryThunk, endpointName));
                }
                else if (isMutationDefinition$1(definition)) {
                    safeAssign$1(anyApi.endpoints[endpointName], {
                        name: endpointName,
                        select: buildMutationSelector(),
                        initiate: buildInitiateMutation(endpointName)
                    }, buildMatchThunkActions(mutationThunk, endpointName));
                }
            }
        };
    }
}); };

var __spreadArray = (globalThis && globalThis.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = function (obj, key, value) { return key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value }) : obj[key] = value; };
var __spreadValues = function (a, b) {
    for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
        for (var _i = 0, _c = __getOwnPropSymbols(b); _i < _c.length; _i++) {
            var prop = _c[_i];
            if (__propIsEnum.call(b, prop))
                __defNormalProp(a, prop, b[prop]);
        }
    return a;
};
var __spreadProps = function (a, b) { return __defProps(a, __getOwnPropDescs(b)); };
const {useCallback: useCallback$6,useDebugValue,useEffect:useEffect3,useLayoutEffect: useLayoutEffect$1,useMemo:useMemo2,useRef:useRef3,useState: useState$8} = await importShared('react');
// src/query/react/useSerializedStableValue.ts
const {useEffect: useEffect$8,useRef: useRef$5,useMemo: useMemo$7} = await importShared('react');

function useStableQueryArgs(queryArgs, serialize, endpointDefinition, endpointName) {
    var incoming = useMemo$7(function () { return ({
        queryArgs: queryArgs,
        serialized: typeof queryArgs == "object" ? serialize({ queryArgs: queryArgs, endpointDefinition: endpointDefinition, endpointName: endpointName }) : queryArgs
    }); }, [queryArgs, serialize, endpointDefinition, endpointName]);
    var cache2 = useRef$5(incoming);
    useEffect$8(function () {
        if (cache2.current.serialized !== incoming.serialized) {
            cache2.current = incoming;
        }
    }, [incoming]);
    return cache2.current.serialized === incoming.serialized ? cache2.current.queryArgs : queryArgs;
}
// src/query/react/constants.ts
var UNINITIALIZED_VALUE = Symbol();
// src/query/react/useShallowStableValue.ts
const {useEffect:useEffect2,useRef:useRef2} = await importShared('react');
function useShallowStableValue(value) {
    var cache2 = useRef2(value);
    useEffect2(function () {
        if (!shallowEqual(cache2.current, value)) {
            cache2.current = value;
        }
    }, [value]);
    return shallowEqual(cache2.current, value) ? cache2.current : value;
}
var cache = WeakMap ? new WeakMap() : void 0;
var defaultSerializeQueryArgs = function (_c) {
    var endpointName = _c.endpointName, queryArgs = _c.queryArgs;
    var serialized = "";
    var cached = cache == null ? void 0 : cache.get(queryArgs);
    if (typeof cached === "string") {
        serialized = cached;
    }
    else {
        var stringified = JSON.stringify(queryArgs, function (key, value) { return isPlainObject$2(value) ? Object.keys(value).sort().reduce(function (acc, key2) {
            acc[key2] = value[key2];
            return acc;
        }, {}) : value; });
        if (isPlainObject$2(queryArgs)) {
            cache == null ? void 0 : cache.set(queryArgs, stringified);
        }
        serialized = stringified;
    }
    return endpointName + "(" + serialized + ")";
};
// src/query/react/buildHooks.ts
var useIsomorphicLayoutEffect = typeof window !== "undefined" && !!window.document && !!window.document.createElement ? useLayoutEffect$1 : useEffect3;
var defaultMutationStateSelector = function (x) { return x; };
var noPendingQueryStateSelector = function (selected) {
    if (selected.isUninitialized) {
        return __spreadProps(__spreadValues({}, selected), {
            isUninitialized: false,
            isFetching: true,
            isLoading: selected.data !== void 0 ? false : true,
            status: QueryStatus.pending
        });
    }
    return selected;
};
function buildHooks(_c) {
    var api = _c.api, _d = _c.moduleOptions, batch = _d.batch, useDispatch = _d.useDispatch, useSelector = _d.useSelector, useStore = _d.useStore, unstable__sideEffectsInRender = _d.unstable__sideEffectsInRender, serializeQueryArgs = _c.serializeQueryArgs, context = _c.context;
    var usePossiblyImmediateEffect = unstable__sideEffectsInRender ? function (cb) { return cb(); } : useEffect3;
    return { buildQueryHooks: buildQueryHooks, buildMutationHook: buildMutationHook, usePrefetch: usePrefetch };
    function queryStatePreSelector(currentState, lastResult, queryArgs) {
        if ((lastResult == null ? void 0 : lastResult.endpointName) && currentState.isUninitialized) {
            var endpointName = lastResult.endpointName;
            var endpointDefinition = context.endpointDefinitions[endpointName];
            if (serializeQueryArgs({
                queryArgs: lastResult.originalArgs,
                endpointDefinition: endpointDefinition,
                endpointName: endpointName
            }) === serializeQueryArgs({
                queryArgs: queryArgs,
                endpointDefinition: endpointDefinition,
                endpointName: endpointName
            }))
                lastResult = void 0;
        }
        var data = currentState.isSuccess ? currentState.data : lastResult == null ? void 0 : lastResult.data;
        if (data === void 0)
            data = currentState.data;
        var hasData = data !== void 0;
        var isFetching = currentState.isLoading;
        var isLoading = !hasData && isFetching;
        var isSuccess = currentState.isSuccess || isFetching && hasData;
        return __spreadProps(__spreadValues({}, currentState), {
            data: data,
            currentData: currentState.data,
            isFetching: isFetching,
            isLoading: isLoading,
            isSuccess: isSuccess
        });
    }
    function usePrefetch(endpointName, defaultOptions) {
        var dispatch = useDispatch();
        var stableDefaultOptions = useShallowStableValue(defaultOptions);
        return useCallback$6(function (arg, options) { return dispatch(api.util.prefetch(endpointName, arg, __spreadValues(__spreadValues({}, stableDefaultOptions), options))); }, [endpointName, dispatch, stableDefaultOptions]);
    }
    function buildQueryHooks(name) {
        var useQuerySubscription = function (arg, _c) {
            var _d = _c === void 0 ? {} : _c, refetchOnReconnect = _d.refetchOnReconnect, refetchOnFocus = _d.refetchOnFocus, refetchOnMountOrArgChange = _d.refetchOnMountOrArgChange, _e = _d.skip, skip = _e === void 0 ? false : _e, _f = _d.pollingInterval, pollingInterval = _f === void 0 ? 0 : _f;
            var initiate = api.endpoints[name].initiate;
            var dispatch = useDispatch();
            var stableArg = useStableQueryArgs(skip ? skipToken : arg, defaultSerializeQueryArgs, context.endpointDefinitions[name], name);
            var stableSubscriptionOptions = useShallowStableValue({
                refetchOnReconnect: refetchOnReconnect,
                refetchOnFocus: refetchOnFocus,
                pollingInterval: pollingInterval
            });
            var lastRenderHadSubscription = useRef3(false);
            var promiseRef = useRef3();
            var _g = promiseRef.current || {}, queryCacheKey = _g.queryCacheKey, requestId = _g.requestId;
            var currentRenderHasSubscription = false;
            if (queryCacheKey && requestId) {
                var returnedValue = dispatch(api.internalActions.internal_probeSubscription({
                    queryCacheKey: queryCacheKey,
                    requestId: requestId
                }));
                currentRenderHasSubscription = !!returnedValue;
            }
            var subscriptionRemoved = !currentRenderHasSubscription && lastRenderHadSubscription.current;
            usePossiblyImmediateEffect(function () {
                lastRenderHadSubscription.current = currentRenderHasSubscription;
            });
            usePossiblyImmediateEffect(function () {
                if (subscriptionRemoved) {
                    promiseRef.current = void 0;
                }
            }, [subscriptionRemoved]);
            usePossiblyImmediateEffect(function () {
                var _a;
                var lastPromise = promiseRef.current;
                if (typeof process !== "undefined" && "production" === "removeMeOnCompilation") {
                    console.log(subscriptionRemoved);
                }
                if (stableArg === skipToken) {
                    lastPromise == null ? void 0 : lastPromise.unsubscribe();
                    promiseRef.current = void 0;
                    return;
                }
                var lastSubscriptionOptions = (_a = promiseRef.current) == null ? void 0 : _a.subscriptionOptions;
                if (!lastPromise || lastPromise.arg !== stableArg) {
                    lastPromise == null ? void 0 : lastPromise.unsubscribe();
                    var promise = dispatch(initiate(stableArg, {
                        subscriptionOptions: stableSubscriptionOptions,
                        forceRefetch: refetchOnMountOrArgChange
                    }));
                    promiseRef.current = promise;
                }
                else if (stableSubscriptionOptions !== lastSubscriptionOptions) {
                    lastPromise.updateSubscriptionOptions(stableSubscriptionOptions);
                }
            }, [
                dispatch,
                initiate,
                refetchOnMountOrArgChange,
                stableArg,
                stableSubscriptionOptions,
                subscriptionRemoved
            ]);
            useEffect3(function () {
                return function () {
                    var _a;
                    (_a = promiseRef.current) == null ? void 0 : _a.unsubscribe();
                    promiseRef.current = void 0;
                };
            }, []);
            return useMemo2(function () { return ({
                refetch: function () {
                    var _a;
                    if (!promiseRef.current)
                        throw new Error("Cannot refetch a query that has not been started yet.");
                    return (_a = promiseRef.current) == null ? void 0 : _a.refetch();
                }
            }); }, []);
        };
        var useLazyQuerySubscription = function (_c) {
            var _d = _c === void 0 ? {} : _c, refetchOnReconnect = _d.refetchOnReconnect, refetchOnFocus = _d.refetchOnFocus, _e = _d.pollingInterval, pollingInterval = _e === void 0 ? 0 : _e;
            var initiate = api.endpoints[name].initiate;
            var dispatch = useDispatch();
            var _f = useState$8(UNINITIALIZED_VALUE), arg = _f[0], setArg = _f[1];
            var promiseRef = useRef3();
            var stableSubscriptionOptions = useShallowStableValue({
                refetchOnReconnect: refetchOnReconnect,
                refetchOnFocus: refetchOnFocus,
                pollingInterval: pollingInterval
            });
            usePossiblyImmediateEffect(function () {
                var _a, _b;
                var lastSubscriptionOptions = (_a = promiseRef.current) == null ? void 0 : _a.subscriptionOptions;
                if (stableSubscriptionOptions !== lastSubscriptionOptions) {
                    (_b = promiseRef.current) == null ? void 0 : _b.updateSubscriptionOptions(stableSubscriptionOptions);
                }
            }, [stableSubscriptionOptions]);
            var subscriptionOptionsRef = useRef3(stableSubscriptionOptions);
            usePossiblyImmediateEffect(function () {
                subscriptionOptionsRef.current = stableSubscriptionOptions;
            }, [stableSubscriptionOptions]);
            var trigger = useCallback$6(function (arg2, preferCacheValue) {
                if (preferCacheValue === void 0) { preferCacheValue = false; }
                var promise;
                batch(function () {
                    var _a;
                    (_a = promiseRef.current) == null ? void 0 : _a.unsubscribe();
                    promiseRef.current = promise = dispatch(initiate(arg2, {
                        subscriptionOptions: subscriptionOptionsRef.current,
                        forceRefetch: !preferCacheValue
                    }));
                    setArg(arg2);
                });
                return promise;
            }, [dispatch, initiate]);
            useEffect3(function () {
                return function () {
                    var _a;
                    (_a = promiseRef == null ? void 0 : promiseRef.current) == null ? void 0 : _a.unsubscribe();
                };
            }, []);
            useEffect3(function () {
                if (arg !== UNINITIALIZED_VALUE && !promiseRef.current) {
                    trigger(arg, true);
                }
            }, [arg, trigger]);
            return useMemo2(function () { return [trigger, arg]; }, [trigger, arg]);
        };
        var useQueryState = function (arg, _c) {
            var _d = _c === void 0 ? {} : _c, _e = _d.skip, skip = _e === void 0 ? false : _e, selectFromResult = _d.selectFromResult;
            var select = api.endpoints[name].select;
            var stableArg = useStableQueryArgs(skip ? skipToken : arg, serializeQueryArgs, context.endpointDefinitions[name], name);
            var lastValue = useRef3();
            var selectDefaultResult = useMemo2(function () { return createSelector([
                select(stableArg),
                function (_, lastResult) { return lastResult; },
                function (_) { return stableArg; }
            ], queryStatePreSelector); }, [select, stableArg]);
            var querySelector = useMemo2(function () { return selectFromResult ? createSelector([selectDefaultResult], selectFromResult) : selectDefaultResult; }, [selectDefaultResult, selectFromResult]);
            var currentState = useSelector(function (state) { return querySelector(state, lastValue.current); }, shallowEqual);
            var store = useStore();
            var newLastValue = selectDefaultResult(store.getState(), lastValue.current);
            useIsomorphicLayoutEffect(function () {
                lastValue.current = newLastValue;
            }, [newLastValue]);
            return currentState;
        };
        return {
            useQueryState: useQueryState,
            useQuerySubscription: useQuerySubscription,
            useLazyQuerySubscription: useLazyQuerySubscription,
            useLazyQuery: function (options) {
                var _c = useLazyQuerySubscription(options), trigger = _c[0], arg = _c[1];
                var queryStateResults = useQueryState(arg, __spreadProps(__spreadValues({}, options), {
                    skip: arg === UNINITIALIZED_VALUE
                }));
                var info = useMemo2(function () { return ({ lastArg: arg }); }, [arg]);
                return useMemo2(function () { return [trigger, queryStateResults, info]; }, [trigger, queryStateResults, info]);
            },
            useQuery: function (arg, options) {
                var querySubscriptionResults = useQuerySubscription(arg, options);
                var queryStateResults = useQueryState(arg, __spreadValues({
                    selectFromResult: arg === skipToken || (options == null ? void 0 : options.skip) ? void 0 : noPendingQueryStateSelector
                }, options));
                var data = queryStateResults.data, status = queryStateResults.status, isLoading = queryStateResults.isLoading, isSuccess = queryStateResults.isSuccess, isError = queryStateResults.isError, error = queryStateResults.error;
                useDebugValue({ data: data, status: status, isLoading: isLoading, isSuccess: isSuccess, isError: isError, error: error });
                return useMemo2(function () { return __spreadValues(__spreadValues({}, queryStateResults), querySubscriptionResults); }, [queryStateResults, querySubscriptionResults]);
            }
        };
    }
    function buildMutationHook(name) {
        return function (_c) {
            var _d = _c === void 0 ? {} : _c, _e = _d.selectFromResult, selectFromResult = _e === void 0 ? defaultMutationStateSelector : _e, fixedCacheKey = _d.fixedCacheKey;
            var _f = api.endpoints[name], select = _f.select, initiate = _f.initiate;
            var dispatch = useDispatch();
            var _g = useState$8(), promise = _g[0], setPromise = _g[1];
            useEffect3(function () { return function () {
                if (!(promise == null ? void 0 : promise.arg.fixedCacheKey)) {
                    promise == null ? void 0 : promise.reset();
                }
            }; }, [promise]);
            var triggerMutation = useCallback$6(function (arg) {
                var promise2 = dispatch(initiate(arg, { fixedCacheKey: fixedCacheKey }));
                setPromise(promise2);
                return promise2;
            }, [dispatch, initiate, fixedCacheKey]);
            var requestId = (promise || {}).requestId;
            var mutationSelector = useMemo2(function () { return createSelector([select({ fixedCacheKey: fixedCacheKey, requestId: promise == null ? void 0 : promise.requestId })], selectFromResult); }, [select, promise, selectFromResult, fixedCacheKey]);
            var currentState = useSelector(mutationSelector, shallowEqual);
            var originalArgs = fixedCacheKey == null ? promise == null ? void 0 : promise.arg.originalArgs : void 0;
            var reset = useCallback$6(function () {
                batch(function () {
                    if (promise) {
                        setPromise(void 0);
                    }
                    if (fixedCacheKey) {
                        dispatch(api.internalActions.removeMutationResult({
                            requestId: requestId,
                            fixedCacheKey: fixedCacheKey
                        }));
                    }
                });
            }, [dispatch, fixedCacheKey, promise, requestId]);
            var endpointName = currentState.endpointName, data = currentState.data, status = currentState.status, isLoading = currentState.isLoading, isSuccess = currentState.isSuccess, isError = currentState.isError, error = currentState.error;
            useDebugValue({
                endpointName: endpointName,
                data: data,
                status: status,
                isLoading: isLoading,
                isSuccess: isSuccess,
                isError: isError,
                error: error
            });
            var finalState = useMemo2(function () { return __spreadProps(__spreadValues({}, currentState), { originalArgs: originalArgs, reset: reset }); }, [currentState, originalArgs, reset]);
            return useMemo2(function () { return [triggerMutation, finalState]; }, [triggerMutation, finalState]);
        };
    }
}
// src/query/endpointDefinitions.ts
var DefinitionType;
(function (DefinitionType2) {
    DefinitionType2["query"] = "query";
    DefinitionType2["mutation"] = "mutation";
})(DefinitionType || (DefinitionType = {}));
function isQueryDefinition(e) {
    return e.type === DefinitionType.query;
}
function isMutationDefinition(e) {
    return e.type === DefinitionType.mutation;
}
// src/query/utils/capitalize.ts
function capitalize$1(str) {
    return str.replace(str[0], str[0].toUpperCase());
}
// src/query/tsHelpers.ts
function safeAssign(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    Object.assign.apply(Object, __spreadArray([target], args));
}
var reactHooksModuleName = /* @__PURE__ */ Symbol();
var reactHooksModule = function (_c) {
    var _d = _c === void 0 ? {} : _c, _e = _d.batch, batch = _e === void 0 ? reactDomExports.unstable_batchedUpdates : _e, _f = _d.useDispatch, useDispatch$1 = _f === void 0 ? useDispatch : _f, _g = _d.useSelector, useSelector$1 = _g === void 0 ? useSelector : _g, _h = _d.useStore, useStore$1 = _h === void 0 ? useStore : _h, _j = _d.unstable__sideEffectsInRender, unstable__sideEffectsInRender = _j === void 0 ? false : _j;
    return ({
        name: reactHooksModuleName,
        init: function (api, _c, context) {
            var serializeQueryArgs = _c.serializeQueryArgs;
            var anyApi = api;
            var _d = buildHooks({
                api: api,
                moduleOptions: {
                    batch: batch,
                    useDispatch: useDispatch$1,
                    useSelector: useSelector$1,
                    useStore: useStore$1,
                    unstable__sideEffectsInRender: unstable__sideEffectsInRender
                },
                serializeQueryArgs: serializeQueryArgs,
                context: context
            }), buildQueryHooks = _d.buildQueryHooks, buildMutationHook = _d.buildMutationHook, usePrefetch = _d.usePrefetch;
            safeAssign(anyApi, { usePrefetch: usePrefetch });
            safeAssign(context, { batch: batch });
            return {
                injectEndpoint: function (endpointName, definition) {
                    if (isQueryDefinition(definition)) {
                        var _c = buildQueryHooks(endpointName), useQuery = _c.useQuery, useLazyQuery = _c.useLazyQuery, useLazyQuerySubscription = _c.useLazyQuerySubscription, useQueryState = _c.useQueryState, useQuerySubscription = _c.useQuerySubscription;
                        safeAssign(anyApi.endpoints[endpointName], {
                            useQuery: useQuery,
                            useLazyQuery: useLazyQuery,
                            useLazyQuerySubscription: useLazyQuerySubscription,
                            useQueryState: useQueryState,
                            useQuerySubscription: useQuerySubscription
                        });
                        api["use" + capitalize$1(endpointName) + "Query"] = useQuery;
                        api["useLazy" + capitalize$1(endpointName) + "Query"] = useLazyQuery;
                    }
                    else if (isMutationDefinition(definition)) {
                        var useMutation = buildMutationHook(endpointName);
                        safeAssign(anyApi.endpoints[endpointName], {
                            useMutation: useMutation
                        });
                        api["use" + capitalize$1(endpointName) + "Mutation"] = useMutation;
                    }
                }
            };
        }
    });
};
await importShared('react');

await importShared('react');
// src/query/react/index.ts
var createApi = /* @__PURE__ */ buildCreateApi(coreModule(), reactHooksModule());

const rtkApi = createApi({
  reducerPath: "rtkApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(USER_LOCAL_STORAGE_KEY) || "";
      if (token) {
        headers.set("Authorization", token);
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({})
});

const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    setJsonSettings: build.mutation({
      query: ({ userId, jsonSettings }) => ({
        url: `/users/${userId}`,
        method: "PATCH",
        body: {
          jsonSettings
        }
      })
    }),
    getUserDataById: build.mutation({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: "GET"
      })
    })
  })
});
const setJsonSettingsMutation = userApi.endpoints.setJsonSettings.initiate;
const getUserDataByIdQuery = userApi.endpoints.getUserDataById.initiate;

const initAuthData = createAsyncThunk("user/initAuthData", async (_, thunkAPI) => {
  const userId = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
  if (!userId) {
    return thunkAPI.rejectWithValue("Not user");
  }
  try {
    const response = await thunkAPI.dispatch(getUserDataByIdQuery(userId)).unwrap();
    return response;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue("Error");
  }
});

const saveJsonSettings = createAsyncThunk(
  "user/saveJsonSettings",
  async (newJsonSettings, thunkAPI) => {
    const userData = getUserAuthData(thunkAPI.getState());
    const currentSettings = getJsonSettings(thunkAPI.getState());
    if (!userData) {
      return thunkAPI.rejectWithValue("Not user");
    }
    try {
      const response = await thunkAPI.dispatch(
        setJsonSettingsMutation({
          userId: userData.id,
          jsonSettings: {
            ...currentSettings,
            ...newJsonSettings
          }
        })
      ).unwrap();
      if (!response.jsonSettings) {
        return thunkAPI.rejectWithValue("");
      }
      return response.jsonSettings;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue("Error");
    }
  }
);

let featureFlags = {
  isAppRedesigned: false,
  isArticleRatingEnabled: false,
  isCounterEnabled: false
};
function setFeatureFlags(newFeatureFlags) {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags;
  }
}
const getFeatureFlag = (flag) => featureFlags[flag];
const getAllFeatureFlag = () => featureFlags;

const {memo: memo$E} = await importShared('react');
const ToggleFeatures = ({ feature, on, off }) => {
  if (getFeatureFlag(feature)) {
    return on;
  }
  return off;
};
const ToggleFeatures$1 = memo$E(ToggleFeatures);

const toggleFeatures = ({ name, off, on }) => {
  if (getFeatureFlag(name)) {
    return on();
  }
  return off();
};

const featureFlagsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    updateFeatureFlags: build.mutation({
      query: ({ userId, features }) => ({
        url: `/users/${userId}`,
        method: "PATCH",
        body: {
          features
        }
      })
    })
  })
});
const updateFeatureFlagsMutation = featureFlagsApi.endpoints.updateFeatureFlags.initiate;

const updateFeatureFlags = createAsyncThunk(
  "user/updateFeatureFlags",
  // eslint-disable-next-line
  async ({ userId, features }, thunkAPI) => {
    try {
      await thunkAPI.dispatch(
        updateFeatureFlagsMutation({
          userId,
          features: { ...getAllFeatureFlag(), ...features }
        })
      );
      window.location.reload();
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue("");
    }
  }
);

const initialState$2 = {
  isLoadPage: false
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState$2,
  reducers: {
    setAuthData: (state, action) => {
      state.authData = action.payload;
      setFeatureFlags(action.payload.features);
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, action.payload.id);
    },
    logout: (state) => {
      state.authData = void 0;
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(saveJsonSettings.fulfilled, (state, action) => {
      if (state.authData) {
        state.authData.jsonSettings = action.payload;
      }
    });
    builder.addCase(initAuthData.fulfilled, (state, action) => {
      state.authData = action.payload;
      setFeatureFlags(action.payload.features);
      state.isLoadPage = true;
    });
    builder.addCase(initAuthData.rejected, (state) => {
      state.isLoadPage = true;
    });
  }
});
const userActions = userSlice.actions;
const userReducer = userSlice.reducer;

const classNames = (cls, mods = {}, additional = []) => {
  const newAdditional = additional ? additional.filter(Boolean) : [];
  const newMods = mods ? Object.entries(mods).filter(([key, value]) => Boolean(value)).map(([key, value]) => key) : [];
  return [cls, ...newMods, ...newAdditional].join(" ");
};

const mainLayout = "_mainLayout_1v6di_1";
const sidebar = "_sidebar_1v6di_8";
const content$2 = "_content_1v6di_14";
const rightbar = "_rightbar_1v6di_21";
const toolbar = "_toolbar_1v6di_35";
const s$M = {
	mainLayout: mainLayout,
	sidebar: sidebar,
	content: content$2,
	rightbar: rightbar,
	toolbar: toolbar
};

const {memo: memo$D} = await importShared('react');
const MainLayout = ({ className, header, content, sidebar, toolbar }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: classNames(s$M.mainLayout, {}, [className]), children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: s$M.sidebar, children: sidebar }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: s$M.content, children: content }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: s$M.rightbar, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: s$M.header, children: header }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: s$M.toolbar, children: toolbar })
  ] })
] });
const MainLayout$1 = memo$D(MainLayout);

var ThemeEnum = /* @__PURE__ */ ((ThemeEnum2) => {
  ThemeEnum2["LIGHT"] = "app_light_theme";
  ThemeEnum2["DARK"] = "app_dark_theme";
  ThemeEnum2["PURE"] = "app_pure_theme";
  return ThemeEnum2;
})(ThemeEnum || {});

const {createContext: createContext$2} = await importShared('react');

const ThemeContext = createContext$2({});

const {useContext: useContext$2} = await importShared('react');
const useTheme = () => {
  const { theme, setTheme } = useContext$2(ThemeContext);
  const toggleTheme = (saveAction) => {
    let newTheme;
    switch (theme) {
      case ThemeEnum.DARK:
        newTheme = ThemeEnum.LIGHT;
        break;
      case ThemeEnum.LIGHT:
        newTheme = ThemeEnum.PURE;
        break;
      case ThemeEnum.PURE:
        newTheme = ThemeEnum.DARK;
        break;
      default:
        newTheme = ThemeEnum.LIGHT;
    }
    setTheme?.(newTheme);
    saveAction?.(newTheme);
  };
  return { theme: theme || ThemeEnum.LIGHT, toggleTheme };
};

function warn() {
  if (console && console.warn) {
    var _console;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[0] === 'string') args[0] = "react-i18next:: ".concat(args[0]);

    (_console = console).warn.apply(_console, args);
  }
}
var alreadyWarned = {};
function warnOnce() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (typeof args[0] === 'string' && alreadyWarned[args[0]]) return;
  if (typeof args[0] === 'string') alreadyWarned[args[0]] = new Date();
  warn.apply(void 0, args);
}

var loadedClb = function loadedClb(i18n, cb) {
  return function () {
    if (i18n.isInitialized) {
      cb();
    } else {
      var initialized = function initialized() {
        setTimeout(function () {
          i18n.off('initialized', initialized);
        }, 0);
        cb();
      };

      i18n.on('initialized', initialized);
    }
  };
};

function loadNamespaces(i18n, ns, cb) {
  i18n.loadNamespaces(ns, loadedClb(i18n, cb));
}
function loadLanguages(i18n, lng, ns, cb) {
  if (typeof ns === 'string') ns = [ns];
  ns.forEach(function (n) {
    if (i18n.options.ns.indexOf(n) < 0) i18n.options.ns.push(n);
  });
  i18n.loadLanguages(lng, loadedClb(i18n, cb));
}

function oldI18nextHasLoadedNamespace(ns, i18n) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var lng = i18n.languages[0];
  var fallbackLng = i18n.options ? i18n.options.fallbackLng : false;
  var lastLng = i18n.languages[i18n.languages.length - 1];
  if (lng.toLowerCase() === 'cimode') return true;

  var loadNotPending = function loadNotPending(l, n) {
    var loadState = i18n.services.backendConnector.state["".concat(l, "|").concat(n)];
    return loadState === -1 || loadState === 2;
  };

  if (options.bindI18n && options.bindI18n.indexOf('languageChanging') > -1 && i18n.services.backendConnector.backend && i18n.isLanguageChangingTo && !loadNotPending(i18n.isLanguageChangingTo, ns)) return false;
  if (i18n.hasResourceBundle(lng, ns)) return true;
  if (!i18n.services.backendConnector.backend || i18n.options.resources && !i18n.options.partialBundledLanguages) return true;
  if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
  return false;
}

function hasLoadedNamespace(ns, i18n) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!i18n.languages || !i18n.languages.length) {
    warnOnce('i18n.languages were undefined or empty', i18n.languages);
    return true;
  }

  var isNewerI18next = i18n.options.ignoreJSONStructure !== undefined;

  if (!isNewerI18next) {
    return oldI18nextHasLoadedNamespace(ns, i18n, options);
  }

  return i18n.hasLoadedNamespace(ns, {
    lng: options.lng,
    precheck: function precheck(i18nInstance, loadNotPending) {
      if (options.bindI18n && options.bindI18n.indexOf('languageChanging') > -1 && i18nInstance.services.backendConnector.backend && i18nInstance.isLanguageChangingTo && !loadNotPending(i18nInstance.isLanguageChangingTo, ns)) return false;
    }
  });
}

var matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
var htmlEntities = {
  '&amp;': '&',
  '&#38;': '&',
  '&lt;': '<',
  '&#60;': '<',
  '&gt;': '>',
  '&#62;': '>',
  '&apos;': "'",
  '&#39;': "'",
  '&quot;': '"',
  '&#34;': '"',
  '&nbsp;': ' ',
  '&#160;': ' ',
  '&copy;': '©',
  '&#169;': '©',
  '&reg;': '®',
  '&#174;': '®',
  '&hellip;': '…',
  '&#8230;': '…',
  '&#x2F;': '/',
  '&#47;': '/'
};

var unescapeHtmlEntity = function unescapeHtmlEntity(m) {
  return htmlEntities[m];
};

var unescape$1 = function unescape(text) {
  return text.replace(matchHtmlEntity, unescapeHtmlEntity);
};

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$9(Object(source), true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var defaultOptions = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: true,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: true,
  unescape: unescape$1
};
function setDefaults$1() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  defaultOptions = _objectSpread$8(_objectSpread$8({}, defaultOptions), options);
}
function getDefaults$2() {
  return defaultOptions;
}

var i18nInstance;
function setI18n(instance) {
  i18nInstance = instance;
}
function getI18n() {
  return i18nInstance;
}

function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$1(descriptor.key), descriptor);
  }
}
function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$2(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$2(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

var initReactI18next = {
  type: '3rdParty',
  init: function init(instance) {
    setDefaults$1(instance.options.react);
    setI18n(instance);
  }
};

const {createContext: createContext$1} = await importShared('react');
var I18nContext = createContext$1();
var ReportNamespaces = function () {
  function ReportNamespaces() {
    _classCallCheck$2(this, ReportNamespaces);

    this.usedNamespaces = {};
  }

  _createClass$2(ReportNamespaces, [{
    key: "addUsedNamespaces",
    value: function addUsedNamespaces(namespaces) {
      var _this = this;

      namespaces.forEach(function (ns) {
        if (!_this.usedNamespaces[ns]) _this.usedNamespaces[ns] = true;
      });
    }
  }, {
    key: "getUsedNamespaces",
    value: function getUsedNamespaces() {
      return Object.keys(this.usedNamespaces);
    }
  }]);

  return ReportNamespaces;
}();

function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit$1(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
}

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(Object(source), true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

const {useState: useState$7,useEffect: useEffect$7,useContext: useContext$1,useRef: useRef$4} = await importShared('react');

var usePrevious = function usePrevious(value, ignore) {
  var ref = useRef$4();
  useEffect$7(function () {
    ref.current = ignore ? ref.current : value;
  }, [value, ignore]);
  return ref.current;
};

function useTranslation(ns) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var i18nFromProps = props.i18n;

  var _ref = useContext$1(I18nContext) || {},
      i18nFromContext = _ref.i18n,
      defaultNSFromContext = _ref.defaultNS;

  var i18n = i18nFromProps || i18nFromContext || getI18n();
  if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new ReportNamespaces();

  if (!i18n) {
    warnOnce('You will need to pass in an i18next instance by using initReactI18next');

    var notReadyT = function notReadyT(k, optsOrDefaultValue) {
      if (typeof optsOrDefaultValue === 'string') return optsOrDefaultValue;
      if (optsOrDefaultValue && _typeof$4(optsOrDefaultValue) === 'object' && typeof optsOrDefaultValue.defaultValue === 'string') return optsOrDefaultValue.defaultValue;
      return Array.isArray(k) ? k[k.length - 1] : k;
    };

    var retNotReady = [notReadyT, {}, false];
    retNotReady.t = notReadyT;
    retNotReady.i18n = {};
    retNotReady.ready = false;
    return retNotReady;
  }

  if (i18n.options.react && i18n.options.react.wait !== undefined) warnOnce('It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.');

  var i18nOptions = _objectSpread$7(_objectSpread$7(_objectSpread$7({}, getDefaults$2()), i18n.options.react), props);

  var useSuspense = i18nOptions.useSuspense,
      keyPrefix = i18nOptions.keyPrefix;
  var namespaces = ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
  namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation'];
  if (i18n.reportNamespaces.addUsedNamespaces) i18n.reportNamespaces.addUsedNamespaces(namespaces);
  var ready = (i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every(function (n) {
    return hasLoadedNamespace(n, i18n, i18nOptions);
  });

  function getT() {
    return i18n.getFixedT(props.lng || null, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces[0], keyPrefix);
  }

  var _useState = useState$7(getT),
      _useState2 = _slicedToArray$1(_useState, 2),
      t = _useState2[0],
      setT = _useState2[1];

  var joinedNS = namespaces.join();
  if (props.lng) joinedNS = "".concat(props.lng).concat(joinedNS);
  var previousJoinedNS = usePrevious(joinedNS);
  var isMounted = useRef$4(true);
  useEffect$7(function () {
    var bindI18n = i18nOptions.bindI18n,
        bindI18nStore = i18nOptions.bindI18nStore;
    isMounted.current = true;

    if (!ready && !useSuspense) {
      if (props.lng) {
        loadLanguages(i18n, props.lng, namespaces, function () {
          if (isMounted.current) setT(getT);
        });
      } else {
        loadNamespaces(i18n, namespaces, function () {
          if (isMounted.current) setT(getT);
        });
      }
    }

    if (ready && previousJoinedNS && previousJoinedNS !== joinedNS && isMounted.current) {
      setT(getT);
    }

    function boundReset() {
      if (isMounted.current) setT(getT);
    }

    if (bindI18n && i18n) i18n.on(bindI18n, boundReset);
    if (bindI18nStore && i18n) i18n.store.on(bindI18nStore, boundReset);
    return function () {
      isMounted.current = false;
      if (bindI18n && i18n) bindI18n.split(' ').forEach(function (e) {
        return i18n.off(e, boundReset);
      });
      if (bindI18nStore && i18n) bindI18nStore.split(' ').forEach(function (e) {
        return i18n.store.off(e, boundReset);
      });
    };
  }, [i18n, joinedNS]);
  var isInitial = useRef$4(true);
  useEffect$7(function () {
    if (isMounted.current && !isInitial.current) {
      setT(getT);
    }

    isInitial.current = false;
  }, [i18n, keyPrefix]);
  var ret = [t, i18n, ready];
  ret.t = t;
  ret.i18n = i18n;
  ret.ready = ready;
  if (ready) return ret;
  if (!ready && !useSuspense) return ret;
  throw new Promise(function (resolve) {
    if (props.lng) {
      loadLanguages(i18n, props.lng, namespaces, function () {
        return resolve();
      });
    } else {
      loadNamespaces(i18n, namespaces, function () {
        return resolve();
      });
    }
  });
}

const loader = "_loader_tb71r_1";
const rotate = "_rotate_tb71r_1";
const s$L = {
	loader: loader,
	rotate: rotate
};

const Loader = ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classNames(s$L.loader, {}, [className]) });

const {useCallback: useCallback$5,useEffect: useEffect$6,useState: useState$6} = await importShared('react');

const useModal = ({
  animationDelay,
  isOpen,
  onClose
}) => {
  const [isMounted, setIsMounted] = useState$6(false);
  const [opened, setOpened] = useState$6(false);
  useEffect$6(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);
  const handleClose = useCallback$5(() => {
    if (onClose) {
      setOpened(false);
      setTimeout(() => {
        onClose();
      }, animationDelay);
    }
  }, [onClose, animationDelay]);
  const handleKeyDown = useCallback$5(
    (e) => {
      if (e.key === "Escape" && onClose) {
        handleClose();
      }
    },
    [onClose, handleClose]
  );
  useEffect$6(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => {
        setOpened(true);
      }, 0);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);
  return {
    isMounted,
    opened,
    handleClose
  };
};

const overlay = "_overlay_juas8_1";
const s$K = {
	overlay: overlay
};

const {memo: memo$C} = await importShared('react');
const Overlay = ({ className, onClick }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames(s$K.overlay, {}, [className]), onClick });
const Overlay$1 = memo$C(Overlay);

const {createPortal} = await importShared('react-dom');

const Portal = ({ children, element = document.body }) => createPortal(children, element);

const modal = "_modal_16pv3_1";
const content$1 = "_content_16pv3_13";
const modalNew = "_modalNew_16pv3_22";
const modalOld = "_modalOld_16pv3_26";
const opened$1 = "_opened_16pv3_30";
const s$J = {
	modal: modal,
	content: content$1,
	modalNew: modalNew,
	modalOld: modalOld,
	opened: opened$1
};

const Modal = ({ className, children, isOpen, onClose, lazy }) => {
  const { theme } = useTheme();
  const { handleClose, isMounted, opened } = useModal({
    isOpen,
    animationDelay: 500,
    onClose
  });
  const mods = {
    [s$J.opened]: opened && true
  };
  const modalPortal = document.getElementById("app") ?? document.body;
  if (lazy && !isMounted) {
    return null;
  }
  const designClass = toggleFeatures({ name: "isAppRedesigned", on: () => s$J.modalNew, off: () => s$J.modalOld });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { element: modalPortal, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: classNames(s$J.modal, mods, [className, theme, designClass]), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Overlay$1, { onClick: handleClose }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: s$J.content, children })
  ] }) });
};

const {lazy: lazy$9} = await importShared('react');

const LoginFormAsync = lazy$9(
  () => import('./LoginForm-49ff2c22.js')
);

const {memo: memo$B,Suspense: Suspense$3} = await importShared('react');
const LoginModal = ({ className, isOpen, onClose }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Modal, { isOpen, onClose, className: classNames("", {}, [className]), lazy: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Suspense$3, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoginFormAsync, { onSuccess: onClose }) }) }) });
const LoginModal$1 = memo$B(LoginModal);

var AppRoutesEnum = /* @__PURE__ */ ((AppRoutesEnum2) => {
  AppRoutesEnum2["MAIN"] = "main";
  AppRoutesEnum2["SETTINGS"] = "settings";
  AppRoutesEnum2["ABOUT"] = "about";
  AppRoutesEnum2["PROFILE"] = "profile";
  AppRoutesEnum2["ARTICLES"] = "articles";
  AppRoutesEnum2["ARTICLE_DETAILS"] = "article_details";
  AppRoutesEnum2["ARTICLE_CREATE"] = "article_create";
  AppRoutesEnum2["ARTICLE_EDIT"] = "article_edit";
  AppRoutesEnum2["ADMIN_PANEL"] = "admin_panel";
  AppRoutesEnum2["FORBIDDEN"] = "forbidden";
  AppRoutesEnum2["NOT_FOUND"] = "not_found";
  return AppRoutesEnum2;
})(AppRoutesEnum || {});
const getRouteMain = () => "/";
const getRouteSettings = () => "/settings";
const getRouteAbout = () => "/about";
const getRouteProfile = (id) => `/profile/${id}`;
const getRouteArticles = () => "/articles";
const getRouteArticlesDetails = (id) => `/articles/${id}`;
const getRouteArticleCreate = () => "/articles/create";
const getRouteArticleEdit = (id) => `/articles/${id}/edit`;
const getRouteAdmin = () => "/admin";
const getRouteForbidden = () => "/forbidden";
const getRouteNotFound = () => "*";

const React$5 = await importShared('react');

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React$5.createContext && React$5.createContext(DefaultContext);

var __assign = globalThis && globalThis.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = globalThis && globalThis.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const React$4 = await importShared('react');
function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return React$4.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  // eslint-disable-next-line react/display-name
  return function (props) {
    return React$4.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
      size = props.size,
      title = props.title,
      svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return React$4.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && React$4.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? React$4.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function RxAvatar (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 15 15","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z","fill":"currentColor"}}]})(props);
}

const {useLayoutEffect,useState: useState$5} = await importShared('react');
const AppImage = ({ className, src, alt = "image", fallback, errorFallback, ...otherProps }) => {
  const [isLoading, setIsLoading] = useState$5(true);
  const [hasError, setHasError] = useState$5(false);
  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? "";
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
  }, [src]);
  if (isLoading && fallback) {
    return fallback;
  }
  if (hasError && errorFallback) {
    return errorFallback;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: classNames("", {}, [className]), alt, src, ...otherProps });
};

const skeleton$1 = "_skeleton_1i8qj_1";
const load$1 = "_load_1i8qj_1";
const s$I = {
	skeleton: skeleton$1,
	load: load$1
};

const {memo: memo$A} = await importShared('react');
const Skeleton$2 = ({ className, height, width, border }) => {
  const styles = {
    width,
    height,
    borderRadius: border
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames(s$I.skeleton, {}, [className]), style: styles });
};
const Skeleton$3 = memo$A(Skeleton$2);

const avatar$1 = "_avatar_9uwy4_1";
const icon$3 = "_icon_9uwy4_7";
const s$H = {
	avatar: avatar$1,
	icon: icon$3
};

const {memo: memo$z,useMemo: useMemo$6} = await importShared('react');
const Avatar$2 = ({ className, src, size, alt }) => {
  const styles = useMemo$6(
    () => ({
      width: size || 100,
      height: size || 100
    }),
    [size]
  );
  const fallback = /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton$3, { width: size, height: size, border: "50%" });
  const errorFallback = /* @__PURE__ */ jsxRuntimeExports.jsx(RxAvatar, { size: 30, className: s$H.icon });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AppImage,
    {
      src,
      style: styles,
      className: classNames(s$H.avatar, {}, [className]),
      alt: alt || "avatar",
      fallback,
      errorFallback
    }
  );
};
const Avatar$3 = memo$z(Avatar$2);

var i$4=Object.defineProperty;var d$6=(t,e,n)=>e in t?i$4(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var r$3=(t,e,n)=>(d$6(t,typeof e!="symbol"?e+"":e,n),n);let o$a = class o{constructor(){r$3(this,"current",this.detect());r$3(this,"handoffState","pending");r$3(this,"currentId",0);}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e);}reset(){this.set(this.detect());}nextId(){return ++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window=="undefined"||typeof document=="undefined"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete");}get isHandoffComplete(){return this.handoffState==="complete"}};let s$G=new o$a;

const {useLayoutEffect:t$8,useEffect:c$7} = await importShared('react');
let l$6=(e,f)=>{s$G.isServer?c$7(e,f):t$8(e,f);};

const {useRef:t$7} = await importShared('react');
function s$F(e){let r=t$7(e);return l$6(()=>{r.current=e;},[e]),r}

const {useState:s$E} = await importShared('react');
function i$3(e,o){let[u,t]=s$E(e),r=s$F(e);return l$6(()=>t(r.current),[r,t,...o]),u}

function t$6(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(o=>setTimeout(()=>{throw o}));}

function o$9(){let n=[],r={addEventListener(e,t,s,a){return e.addEventListener(t,s,a),r.add(()=>e.removeEventListener(t,s,a))},requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return r.add(()=>cancelAnimationFrame(t))},nextFrame(...e){return r.requestAnimationFrame(()=>r.requestAnimationFrame(...e))},setTimeout(...e){let t=setTimeout(...e);return r.add(()=>clearTimeout(t))},microTask(...e){let t={current:!0};return t$6(()=>{t.current&&e[0]();}),r.add(()=>{t.current=!1;})},style(e,t,s){let a=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:s}),this.add(()=>{Object.assign(e.style,{[t]:a});})},group(e){let t=o$9();return e(t),this.add(()=>t.dispose())},add(e){return n.push(e),()=>{let t=n.indexOf(e);if(t>=0)for(let s of n.splice(t,1))s();}},dispose(){for(let e of n.splice(0))e();}};return r}

const {useState:s$D,useEffect:o$8} = await importShared('react');
function p$3(){let[e]=s$D(o$9);return o$8(()=>()=>e.dispose(),[e]),e}

const a$4 = await importShared('react');
let o$7=function(t){let e=s$F(t);return a$4.useCallback((...r)=>e.current(...r),[e])};

const {useState:r$2,useEffect:o$6} = await importShared('react');
function l$5(){let[e,f]=r$2(s$G.isHandoffComplete);return e&&s$G.isHandoffComplete===!1&&f(!1),o$6(()=>{e!==!0&&f(!0);},[e]),o$6(()=>s$G.handoff(),[]),e}

var o$5;const t$5 = await importShared('react');
let I$2=(o$5=t$5.useId)!=null?o$5:function(){let n=l$5(),[e,u]=t$5.useState(n?()=>s$G.nextId():null);return l$6(()=>{e===null&&u(s$G.nextId());},[e]),e!=null?""+e:void 0};

function u$3(r,n,...a){if(r in n){let e=n[r];return typeof e=="function"?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u$3),t}

function e$3(r){return s$G.isServer?null:r instanceof Node?r.ownerDocument:r!=null&&r.hasOwnProperty("current")&&r.current instanceof Node?r.current.ownerDocument:document}

let c$6=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var M=(n=>(n[n.First=1]="First",n[n.Previous=2]="Previous",n[n.Next=4]="Next",n[n.Last=8]="Last",n[n.WrapAround=16]="WrapAround",n[n.NoScroll=32]="NoScroll",n))(M||{}),N$3=(o=>(o[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o))(N$3||{}),F$2=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(F$2||{});function f$4(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(c$6)).sort((r,t)=>Math.sign((r.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var T$4=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(T$4||{});function h$2(e,r=0){var t;return e===((t=e$3(e))==null?void 0:t.body)?!1:u$3(r,{[0](){return e.matches(c$6)},[1](){let l=e;for(;l!==null;){if(l.matches(c$6))return !0;l=l.parentElement;}return !1}})}function D$3(e){let r=e$3(e);o$9().nextFrame(()=>{r&&!h$2(r.activeElement,0)&&y$1(e);});}var w$2=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(w$2||{});typeof window!="undefined"&&typeof document!="undefined"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="");},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="");},!0));function y$1(e){e==null||e.focus({preventScroll:!0});}let S$2=["textarea","input"].join(",");function H$4(e){var r,t;return (t=(r=e==null?void 0:e.matches)==null?void 0:r.call(e,S$2))!=null?t:!1}function I$1(e,r=t=>t){return e.slice().sort((t,l)=>{let o=r(t),i=r(l);if(o===null||i===null)return 0;let n=o.compareDocumentPosition(i);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function _(e,r){return O$1(f$4(),r,{relativeTo:e})}function O$1(e,r,{sorted:t=!0,relativeTo:l=null,skipElements:o=[]}={}){let i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,n=Array.isArray(e)?t?I$1(e):e:f$4(e);o.length>0&&n.length>1&&(n=n.filter(s=>!o.includes(s))),l=l!=null?l:i.activeElement;let E=(()=>{if(r&5)return 1;if(r&10)return -1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),x=(()=>{if(r&1)return 0;if(r&2)return Math.max(0,n.indexOf(l))-1;if(r&4)return Math.max(0,n.indexOf(l))+1;if(r&8)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),p=r&32?{preventScroll:!0}:{},d=0,a=n.length,u;do{if(d>=a||d+a<=0)return 0;let s=x+d;if(r&16)s=(s+a)%a;else {if(s<0)return 3;if(s>=a)return 1}u=n[s],u==null||u.focus(p),d+=E;}while(u!==i.activeElement);return r&6&&H$4(u)&&u.select(),2}

const {useEffect:m$4} = await importShared('react');
function d$5(e,r,n){let o=s$F(r);m$4(()=>{function t(u){o.current(u);}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n]);}

const {useEffect:d$4} = await importShared('react');
function s$C(e,r,n){let o=s$F(r);d$4(()=>{function t(i){o.current(i);}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)},[e,n]);}

const {useEffect:d$3,useRef:c$5} = await importShared('react');
function H$3(s,m,i=!0){let l=c$5(!1);d$3(()=>{requestAnimationFrame(()=>{l.current=i;});},[i]);function a(e,o){if(!l.current||e.defaultPrevented)return;let n=o(e);if(n===null||!n.getRootNode().contains(n))return;let E=function r(t){return typeof t=="function"?r(t()):Array.isArray(t)||t instanceof Set?t:[t]}(s);for(let r of E){if(r===null)continue;let t=r instanceof HTMLElement?r:r.current;if(t!=null&&t.contains(n)||e.composed&&e.composedPath().includes(t))return}return !h$2(n,T$4.Loose)&&n.tabIndex!==-1&&e.preventDefault(),m(e,n)}let u=c$5(null);d$5("mousedown",e=>{var o,n;l.current&&(u.current=((n=(o=e.composedPath)==null?void 0:o.call(e))==null?void 0:n[0])||e.target);},!0),d$5("click",e=>{u.current&&(a(e,()=>u.current),u.current=null);},!0),s$C("blur",e=>a(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0);}

const {useState:o$4} = await importShared('react');
function i$2(t){var n;if(t.type)return t.type;let e=(n=t.as)!=null?n:"button";if(typeof e=="string"&&e.toLowerCase()==="button")return "button"}function s$B(t,e){let[n,u]=o$4(()=>i$2(t));return l$6(()=>{u(i$2(t));},[t.type,t.as]),l$6(()=>{n||e.current&&e.current instanceof HTMLButtonElement&&!e.current.hasAttribute("type")&&u("button");},[n,e]),n}

const {useRef:l$4,useEffect:i$1} = await importShared('react');
let u$2=Symbol();function T$3(t,n=!0){return Object.assign(t,{[u$2]:n})}function y(...t){let n=l$4(t);i$1(()=>{n.current=t;},[t]);let c=o$7(e=>{for(let o of n.current)o!=null&&(typeof o=="function"?o(e):o.current=e);});return t.every(e=>e==null||(e==null?void 0:e[u$2]))?void 0:c}

const {useRef:E$3,useEffect:m$3} = await importShared('react');
function F$1({container:e,accept:t,walk:r,enabled:c=!0}){let o=E$3(t),l=E$3(r);m$3(()=>{o.current=t,l.current=r;},[t,r]),l$6(()=>{if(!e||!c)return;let n=e$3(e);if(!n)return;let f=o.current,p=l.current,d=Object.assign(i=>f(i),{acceptNode:f}),u=n.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,d,!1);for(;u.nextNode();)p(u.currentNode);},[e,c,o,l]);}

function f$3(r){throw new Error("Unexpected object: "+r)}var a$3=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(a$3||{});function x$2(r,n){let t=n.resolveItems();if(t.length<=0)return null;let l=n.resolveActiveIndex(),s=l!=null?l:-1,d=(()=>{switch(r.focus){case 0:return t.findIndex(e=>!n.resolveDisabled(e));case 1:{let e=t.slice().reverse().findIndex((i,c,u)=>s!==-1&&u.length-c-1>=s?!1:!n.resolveDisabled(i));return e===-1?e:t.length-1-e}case 2:return t.findIndex((e,i)=>i<=s?!1:!n.resolveDisabled(e));case 3:{let e=t.slice().reverse().findIndex(i=>!n.resolveDisabled(i));return e===-1?e:t.length-1-e}case 4:return t.findIndex(e=>n.resolveId(e)===r.id);case 5:return null;default:f$3(r);}})();return d===-1?l:d}

function e$2(...n){return n.filter(Boolean).join(" ")}

const {Fragment:T$2,cloneElement:x$1,createElement:E$2,forwardRef:b$1,isValidElement:h$1} = await importShared('react');
var S$1=(a=>(a[a.None=0]="None",a[a.RenderStrategy=1]="RenderStrategy",a[a.Static=2]="Static",a))(S$1||{}),j$2=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(j$2||{});function X$1({ourProps:r,theirProps:t,slot:e,defaultTag:a,features:s,visible:n=!0,name:f}){let o=N$2(t,r);if(n)return c$4(o,e,a,f);let u=s!=null?s:0;if(u&2){let{static:l=!1,...p}=o;if(l)return c$4(p,e,a,f)}if(u&1){let{unmount:l=!0,...p}=o;return u$3(l?0:1,{[0](){return null},[1](){return c$4({...p,hidden:!0,style:{display:"none"}},e,a,f)}})}return c$4(o,e,a,f)}function c$4(r,t={},e,a){let{as:s=e,children:n,refName:f="ref",...o}=g$2(r,["unmount","static"]),u=r.ref!==void 0?{[f]:r.ref}:{},l=typeof n=="function"?n(t):n;"className"in o&&o.className&&typeof o.className=="function"&&(o.className=o.className(t));let p={};if(t){let i=!1,m=[];for(let[y,d]of Object.entries(t))typeof d=="boolean"&&(i=!0),d===!0&&m.push(y);i&&(p["data-headlessui-state"]=m.join(" "));}if(s===T$2&&Object.keys(R$1(o)).length>0){if(!h$1(l)||Array.isArray(l)&&l.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${a} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(o).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`));let i=l.props,m=typeof(i==null?void 0:i.className)=="function"?(...d)=>e$2(i==null?void 0:i.className(...d),o.className):e$2(i==null?void 0:i.className,o.className),y=m?{className:m}:{};return x$1(l,Object.assign({},N$2(l.props,R$1(g$2(o,["ref"]))),p,u,w$1(l.ref,u.ref),y))}return E$2(s,Object.assign({},g$2(o,["ref"]),s!==T$2&&u,s!==T$2&&p),l)}function w$1(...r){return {ref:r.every(t=>t==null)?void 0:t=>{for(let e of r)e!=null&&(typeof e=="function"?e(t):e.current=t);}}}function N$2(...r){if(r.length===0)return {};if(r.length===1)return r[0];let t={},e={};for(let s of r)for(let n in s)n.startsWith("on")&&typeof s[n]=="function"?((e[n])!=null||(e[n]=[]),e[n].push(s[n])):t[n]=s[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map(s=>[s,void 0])));for(let s in e)Object.assign(t,{[s](n,...f){let o=e[s];for(let u of o){if((n instanceof Event||(n==null?void 0:n.nativeEvent)instanceof Event)&&n.defaultPrevented)return;u(n,...f);}}});return t}function D$2(r){var t;return Object.assign(b$1(r),{displayName:(t=r.displayName)!=null?t:r.name})}function R$1(r){let t=Object.assign({},r);for(let e in t)t[e]===void 0&&delete t[e];return t}function g$2(r,t=[]){let e=Object.assign({},r);for(let a of t)a in e&&delete e[a];return e}

function r$1(n){let e=n.parentElement,l=null;for(;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(l=e),e=e.parentElement;let t=(e==null?void 0:e.getAttribute("disabled"))==="";return t&&i(l)?!1:t}function i(n){if(!n)return !1;let e=n.previousElementSibling;for(;e!==null;){if(e instanceof HTMLLegendElement)return !1;e=e.previousElementSibling;}return !0}

function e$1(n={},r=null,t=[]){for(let[i,o]of Object.entries(n))f$2(t,s$A(r,i),o);return t}function s$A(n,r){return n?n+"["+r+"]":r}function f$2(n,r,t){if(Array.isArray(t))for(let[i,o]of t.entries())f$2(n,s$A(r,i.toString()),o);else t instanceof Date?n.push([r,t.toISOString()]):typeof t=="boolean"?n.push([r,t?"1":"0"]):typeof t=="string"?n.push([r,t]):typeof t=="number"?n.push([r,`${t}`]):t==null?n.push([r,""]):e$1(t,r,n);}

let a$2="div";var p$2=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(p$2||{});function s$z(t,o){let{features:n=1,...e}=t,d={ref:o,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return X$1({ourProps:d,theirProps:e,slot:{},defaultTag:a$2,name:"Hidden"})}let c$3=D$2(s$z);

const l$3 = await importShared('react');
const {createContext:t$4,useContext:p$1} = l$3;
let n$3=t$4(null);n$3.displayName="OpenClosedContext";var d$2=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(d$2||{});function C$1(){return p$1(n$3)}function c$2({value:o,children:r}){return l$3.createElement(n$3.Provider,{value:o},r)}

var o$3=(r=>(r.Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r))(o$3||{});

const {useRef:o$2,useState:f$1} = await importShared('react');
function T$1(l,r,c){let[i,s]=f$1(c),e=l!==void 0,t=o$2(e),u=o$2(!1),d=o$2(!1);return e&&!t.current&&!u.current?(u.current=!0,t.current=e,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!e&&t.current&&!d.current&&(d.current=!0,t.current=e,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[e?l:i,o$7(n=>(e||s(n),r==null?void 0:r(n)))]}

const {useRef:o$1} = await importShared('react');
function t$3(e){return [e.screenX,e.screenY]}function u$1(){let e=o$1([-1,-1]);return {wasMoved(r){let n=t$3(r);return e.current[0]===n[0]&&e.current[1]===n[1]?!1:(e.current=n,!0)},update(r){e.current=t$3(r);}}}

const {useRef:t$2} = await importShared('react');
var s$y=(r=>(r[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r))(s$y||{});function n$2(){let e=t$2(0);return s$C("keydown",o=>{o.key==="Tab"&&(e.current=o.shiftKey?1:0);},!0),e}

const {useMemo:t$1} = await importShared('react');
function n$1(...e){return t$1(()=>e$3(...e),[...e])}

const {useEffect:d$1} = await importShared('react');
function E$1(n,e,a,t){let i=s$F(a);d$1(()=>{n=n!=null?n:window;function r(o){i.current(o);}return n.addEventListener(e,r,t),()=>n.removeEventListener(e,r,t)},[n,e,t]);}

const {useRef:u,useEffect:n} = await importShared('react');
function c$1(t){let r=o$7(t),e=u(!1);n(()=>(e.current=!1,()=>{e.current=!0,t$6(()=>{e.current&&r();});}),[r]);}

const t = await importShared('react');
const {createContext:r,useContext:c} = t;
let e=r(!1);function l$2(){return c(e)}

const T = await importShared('react');
const {Fragment:P,createContext:m$2,useContext:s$x,useEffect:d,useRef:g$1,useState:R,useMemo:E} = T;
const {createPortal:H$2} = await importShared('react-dom');
function F(p){let l=l$2(),n=s$x(v),e=n$1(p),[a,o]=R(()=>{if(!l&&n!==null||s$G.isServer)return null;let t=e==null?void 0:e.getElementById("headlessui-portal-root");if(t)return t;if(e===null)return null;let r=e.createElement("div");return r.setAttribute("id","headlessui-portal-root"),e.body.appendChild(r)});return d(()=>{a!==null&&(e!=null&&e.body.contains(a)||e==null||e.body.appendChild(a));},[a,e]),d(()=>{l||n!==null&&o(n.current);},[n,o,l]),a}let U$2=P;function N$1(p,l){let n=p,e=g$1(null),a=y(T$3(u=>{e.current=u;}),l),o=n$1(e),t=F(e),[r]=R(()=>{var u;return s$G.isServer?null:(u=o==null?void 0:o.createElement("div"))!=null?u:null}),i=s$x(f),C=l$5();return l$6(()=>{!t||!r||t.contains(r)||(r.setAttribute("data-headlessui-portal",""),t.appendChild(r));},[t,r]),l$6(()=>{if(r&&i)return i.register(r)},[i,r]),c$1(()=>{var u;!t||!r||(r instanceof Node&&t.contains(r)&&t.removeChild(r),t.childNodes.length<=0&&((u=t.parentElement)==null||u.removeChild(t)));}),C?!t||!r?null:H$2(X$1({ourProps:{ref:a},theirProps:n,defaultTag:U$2,name:"Portal"}),r):null}let S=P,v=m$2(null);function j$1(p,l){let{target:n,...e}=p,o={ref:y(l)};return T.createElement(v.Provider,{value:n},X$1({ourProps:o,theirProps:e,defaultTag:S,name:"Popover.Group"}))}let f=m$2(null);function ae(){let p=s$x(f),l=g$1([]),n=o$7(o=>(l.current.push(o),p&&p.register(o),()=>e(o))),e=o$7(o=>{let t=l.current.indexOf(o);t!==-1&&l.current.splice(t,1),p&&p.unregister(o);}),a=E(()=>({register:n,unregister:e,portals:l}),[n,e,l]);return [l,E(()=>function({children:t}){return T.createElement(f.Provider,{value:a},t)},[a])]}let D$1=D$2(N$1),I=D$2(j$1);Object.assign(D$1,{Group:I});

const s$w = await importShared('react');
const {useRef:a$1,useMemo:m$1} = s$w;
function p({defaultContainers:f=[],portals:o}={}){let t=a$1(null),i=n$1(t),u=o$7(()=>{var r;let n=[];for(let e of f)e!==null&&(e instanceof HTMLElement?n.push(e):"current"in e&&e.current instanceof HTMLElement&&n.push(e.current));if(o!=null&&o.current)for(let e of o.current)n.push(e);for(let e of (r=i==null?void 0:i.querySelectorAll("html > *, body > *"))!=null?r:[])e!==document.body&&e!==document.head&&e instanceof HTMLElement&&e.id!=="headlessui-portal-root"&&(e.contains(t.current)||n.some(c=>e.contains(c))||n.push(e));return n});return {resolveContainers:u,contains:o$7(n=>u().some(r=>r.contains(n))),mainTreeNodeRef:t,MainTreeNode:m$1(()=>function(){return s$w.createElement(c$3,{features:p$2.Hidden,ref:t})},[t])}}

let a=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function o(e){var r,i;let n=(r=e.innerText)!=null?r:"",t=e.cloneNode(!0);if(!(t instanceof HTMLElement))return n;let u=!1;for(let f of t.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))f.remove(),u=!0;let l=u?(i=t.innerText)!=null?i:"":n;return a.test(l)&&(l=l.replace(a,"")),l}function g(e){let n=e.getAttribute("aria-label");if(typeof n=="string")return n.trim();let t=e.getAttribute("aria-labelledby");if(t){let u=t.split(" ").map(l=>{let r=document.getElementById(l);if(r){let i=r.getAttribute("aria-label");return typeof i=="string"?i.trim():o(r).trim()}return null}).filter(Boolean);if(u.length>0)return u.join(", ")}return o(e).trim()}

const {useRef:l$1} = await importShared('react');
function b(c){let t=l$1(""),r=l$1("");return o$7(()=>{let e=c.current;if(!e)return "";let u=e.innerText;if(t.current===u)return r.current;let n=g(e).trim().toLowerCase();return t.current=u,r.current=n,n})}

const j = await importShared('react');
const {Fragment:xe$1,createContext:Z$1,createRef:ye$1,useCallback:ge$1,useContext:ee$1,useEffect:te,useMemo:h,useReducer:Oe,useRef:D} = j;
var Be=(n=>(n[n.Open=0]="Open",n[n.Closed=1]="Closed",n))(Be||{}),He$1=(n=>(n[n.Single=0]="Single",n[n.Multi=1]="Multi",n))(He$1||{}),Ge$1=(n=>(n[n.Pointer=0]="Pointer",n[n.Other=1]="Other",n))(Ge$1||{}),Ne$1=(i=>(i[i.OpenListbox=0]="OpenListbox",i[i.CloseListbox=1]="CloseListbox",i[i.GoToOption=2]="GoToOption",i[i.Search=3]="Search",i[i.ClearSearch=4]="ClearSearch",i[i.RegisterOption=5]="RegisterOption",i[i.UnregisterOption=6]="UnregisterOption",i[i.RegisterLabel=7]="RegisterLabel",i))(Ne$1||{});function z$1(e,a=n=>n){let n=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,r=I$1(a(e.options.slice()),t=>t.dataRef.current.domRef.current),l=n?r.indexOf(n):null;return l===-1&&(l=null),{options:r,activeOptionIndex:l}}let je$1={[1](e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},[0](e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let a=e.activeOptionIndex,{isSelected:n}=e.dataRef.current,r=e.options.findIndex(l=>n(l.dataRef.current.value));return r!==-1&&(a=r),{...e,listboxState:0,activeOptionIndex:a}},[2](e,a){var l;if(e.dataRef.current.disabled||e.listboxState===1)return e;let n=z$1(e),r=x$2(a,{resolveItems:()=>n.options,resolveActiveIndex:()=>n.activeOptionIndex,resolveId:t=>t.id,resolveDisabled:t=>t.dataRef.current.disabled});return {...e,...n,searchQuery:"",activeOptionIndex:r,activationTrigger:(l=a.trigger)!=null?l:1}},[3]:(e,a)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let r=e.searchQuery!==""?0:1,l=e.searchQuery+a.value.toLowerCase(),p=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+r).concat(e.options.slice(0,e.activeOptionIndex+r)):e.options).find(i=>{var b;return !i.dataRef.current.disabled&&((b=i.dataRef.current.textValue)==null?void 0:b.startsWith(l))}),u=p?e.options.indexOf(p):-1;return u===-1||u===e.activeOptionIndex?{...e,searchQuery:l}:{...e,searchQuery:l,activeOptionIndex:u,activationTrigger:1}},[4](e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},[5]:(e,a)=>{let n={id:a.id,dataRef:a.dataRef},r=z$1(e,l=>[...l,n]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(a.dataRef.current.value)&&(r.activeOptionIndex=r.options.indexOf(n)),{...e,...r}},[6]:(e,a)=>{let n=z$1(e,r=>{let l=r.findIndex(t=>t.id===a.id);return l!==-1&&r.splice(l,1),r});return {...e,...n,activationTrigger:1}},[7]:(e,a)=>({...e,labelId:a.id})},J$1=Z$1(null);J$1.displayName="ListboxActionsContext";function U$1(e){let a=ee$1(J$1);if(a===null){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,U$1),n}return a}let q$1=Z$1(null);q$1.displayName="ListboxDataContext";function B(e){let a=ee$1(q$1);if(a===null){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,B),n}return a}function Ve$1(e,a){return u$3(a.type,je$1,e,a)}let Ke$1=xe$1;function Qe$1(e,a){let{value:n,defaultValue:r,form:l,name:t,onChange:p,by:u=(s,c)=>s===c,disabled:i=!1,horizontal:b=!1,multiple:m=!1,...L}=e;const P=b?"horizontal":"vertical";let S=y(a),[g=m?[]:void 0,R]=T$1(n,p,r),[T,o]=Oe(Ve$1,{dataRef:ye$1(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),x=D({static:!1,hold:!1}),E=D(null),H=D(null),X=D(null),C=o$7(typeof u=="string"?(s,c)=>{let O=u;return (s==null?void 0:s[O])===(c==null?void 0:c[O])}:u),A=ge$1(s=>u$3(d.mode,{[1]:()=>g.some(c=>C(c,s)),[0]:()=>C(g,s)}),[g]),d=h(()=>({...T,value:g,disabled:i,mode:m?1:0,orientation:P,compare:C,isSelected:A,optionsPropsRef:x,labelRef:E,buttonRef:H,optionsRef:X}),[g,i,m,T]);l$6(()=>{T.dataRef.current=d;},[d]),H$3([d.buttonRef,d.optionsRef],(s,c)=>{var O;o({type:1}),h$2(c,T$4.Loose)||(s.preventDefault(),(O=d.buttonRef.current)==null||O.focus());},d.listboxState===0);let G=h(()=>({open:d.listboxState===0,disabled:i,value:g}),[d,i,g]),ie=o$7(s=>{let c=d.options.find(O=>O.id===s);c&&F(c.dataRef.current.value);}),re=o$7(()=>{if(d.activeOptionIndex!==null){let{dataRef:s,id:c}=d.options[d.activeOptionIndex];F(s.current.value),o({type:2,focus:a$3.Specific,id:c});}}),ae=o$7(()=>o({type:0})),le=o$7(()=>o({type:1})),se=o$7((s,c,O)=>s===a$3.Specific?o({type:2,focus:a$3.Specific,id:c,trigger:O}):o({type:2,focus:s,trigger:O})),pe=o$7((s,c)=>(o({type:5,id:s,dataRef:c}),()=>o({type:6,id:s}))),ue=o$7(s=>(o({type:7,id:s}),()=>o({type:7,id:null}))),F=o$7(s=>u$3(d.mode,{[0](){return R==null?void 0:R(s)},[1](){let c=d.value.slice(),O=c.findIndex(M=>C(M,s));return O===-1?c.push(s):c.splice(O,1),R==null?void 0:R(c)}})),de=o$7(s=>o({type:3,value:s})),ce=o$7(()=>o({type:4})),fe=h(()=>({onChange:F,registerOption:pe,registerLabel:ue,goToOption:se,closeListbox:le,openListbox:ae,selectActiveOption:re,selectOption:ie,search:de,clearSearch:ce}),[]),Te={ref:S},N=D(null),be=p$3();return te(()=>{N.current&&r!==void 0&&be.addEventListener(N.current,"reset",()=>{F(r);});},[N,F]),j.createElement(J$1.Provider,{value:fe},j.createElement(q$1.Provider,{value:d},j.createElement(c$2,{value:u$3(d.listboxState,{[0]:d$2.Open,[1]:d$2.Closed})},t!=null&&g!=null&&e$1({[t]:g}).map(([s,c],O)=>j.createElement(c$3,{features:p$2.Hidden,ref:O===0?M=>{var Y;N.current=(Y=M==null?void 0:M.closest("form"))!=null?Y:null;}:void 0,...R$1({key:s,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:l,name:s,value:c})})),X$1({ourProps:Te,theirProps:L,slot:G,defaultTag:Ke$1,name:"Listbox"}))))}let We$1="button";function Xe$1(e,a){var R;let n=I$2(),{id:r=`headlessui-listbox-button-${n}`,...l}=e,t=B("Listbox.Button"),p=U$1("Listbox.Button"),u=y(t.buttonRef,a),i=p$3(),b=o$7(T=>{switch(T.key){case o$3.Space:case o$3.Enter:case o$3.ArrowDown:T.preventDefault(),p.openListbox(),i.nextFrame(()=>{t.value||p.goToOption(a$3.First);});break;case o$3.ArrowUp:T.preventDefault(),p.openListbox(),i.nextFrame(()=>{t.value||p.goToOption(a$3.Last);});break}}),m=o$7(T=>{switch(T.key){case o$3.Space:T.preventDefault();break}}),L=o$7(T=>{if(r$1(T.currentTarget))return T.preventDefault();t.listboxState===0?(p.closeListbox(),i.nextFrame(()=>{var o;return (o=t.buttonRef.current)==null?void 0:o.focus({preventScroll:!0})})):(T.preventDefault(),p.openListbox());}),P=i$3(()=>{if(t.labelId)return [t.labelId,r].join(" ")},[t.labelId,r]),S=h(()=>({open:t.listboxState===0,disabled:t.disabled,value:t.value}),[t]),g={ref:u,id:r,type:s$B(e,t.buttonRef),"aria-haspopup":"listbox","aria-controls":(R=t.optionsRef.current)==null?void 0:R.id,"aria-expanded":t.disabled?void 0:t.listboxState===0,"aria-labelledby":P,disabled:t.disabled,onKeyDown:b,onKeyUp:m,onClick:L};return X$1({ourProps:g,theirProps:l,slot:S,defaultTag:We$1,name:"Listbox.Button"})}let $e$1="label";function ze$1(e,a){let n=I$2(),{id:r=`headlessui-listbox-label-${n}`,...l}=e,t=B("Listbox.Label"),p=U$1("Listbox.Label"),u=y(t.labelRef,a);l$6(()=>p.registerLabel(r),[r]);let i=o$7(()=>{var L;return (L=t.buttonRef.current)==null?void 0:L.focus({preventScroll:!0})}),b=h(()=>({open:t.listboxState===0,disabled:t.disabled}),[t]);return X$1({ourProps:{ref:u,id:r,onClick:i},theirProps:l,slot:b,defaultTag:$e$1,name:"Listbox.Label"})}let Je$1="ul",qe$1=S$1.RenderStrategy|S$1.Static;function Ye$1(e,a){var T;let n=I$2(),{id:r=`headlessui-listbox-options-${n}`,...l}=e,t=B("Listbox.Options"),p=U$1("Listbox.Options"),u=y(t.optionsRef,a),i=p$3(),b=p$3(),m=C$1(),L=(()=>m!==null?(m&d$2.Open)===d$2.Open:t.listboxState===0)();te(()=>{var x;let o=t.optionsRef.current;o&&t.listboxState===0&&o!==((x=e$3(o))==null?void 0:x.activeElement)&&o.focus({preventScroll:!0});},[t.listboxState,t.optionsRef]);let P=o$7(o=>{switch(b.dispose(),o.key){case o$3.Space:if(t.searchQuery!=="")return o.preventDefault(),o.stopPropagation(),p.search(o.key);case o$3.Enter:if(o.preventDefault(),o.stopPropagation(),t.activeOptionIndex!==null){let{dataRef:x}=t.options[t.activeOptionIndex];p.onChange(x.current.value);}t.mode===0&&(p.closeListbox(),o$9().nextFrame(()=>{var x;return (x=t.buttonRef.current)==null?void 0:x.focus({preventScroll:!0})}));break;case u$3(t.orientation,{vertical:o$3.ArrowDown,horizontal:o$3.ArrowRight}):return o.preventDefault(),o.stopPropagation(),p.goToOption(a$3.Next);case u$3(t.orientation,{vertical:o$3.ArrowUp,horizontal:o$3.ArrowLeft}):return o.preventDefault(),o.stopPropagation(),p.goToOption(a$3.Previous);case o$3.Home:case o$3.PageUp:return o.preventDefault(),o.stopPropagation(),p.goToOption(a$3.First);case o$3.End:case o$3.PageDown:return o.preventDefault(),o.stopPropagation(),p.goToOption(a$3.Last);case o$3.Escape:return o.preventDefault(),o.stopPropagation(),p.closeListbox(),i.nextFrame(()=>{var x;return (x=t.buttonRef.current)==null?void 0:x.focus({preventScroll:!0})});case o$3.Tab:o.preventDefault(),o.stopPropagation();break;default:o.key.length===1&&(p.search(o.key),b.setTimeout(()=>p.clearSearch(),350));break}}),S=i$3(()=>{var o,x,E;return (E=(o=t.labelRef.current)==null?void 0:o.id)!=null?E:(x=t.buttonRef.current)==null?void 0:x.id},[t.labelRef.current,t.buttonRef.current]),g=h(()=>({open:t.listboxState===0}),[t]),R={"aria-activedescendant":t.activeOptionIndex===null||(T=t.options[t.activeOptionIndex])==null?void 0:T.id,"aria-multiselectable":t.mode===1?!0:void 0,"aria-labelledby":S,"aria-orientation":t.orientation,id:r,onKeyDown:P,role:"listbox",tabIndex:0,ref:u};return X$1({ourProps:R,theirProps:l,slot:g,defaultTag:Je$1,features:qe$1,visible:L,name:"Listbox.Options"})}let Ze$1="li";function et$1(e,a){let n=I$2(),{id:r=`headlessui-listbox-option-${n}`,disabled:l=!1,value:t,...p}=e,u=B("Listbox.Option"),i=U$1("Listbox.Option"),b$1=u.activeOptionIndex!==null?u.options[u.activeOptionIndex].id===r:!1,m=u.isSelected(t),L=D(null),P=b(L),S=s$F({disabled:l,value:t,domRef:L,get textValue(){return P()}}),g=y(a,L);l$6(()=>{if(u.listboxState!==0||!b$1||u.activationTrigger===0)return;let A=o$9();return A.requestAnimationFrame(()=>{var d,G;(G=(d=L.current)==null?void 0:d.scrollIntoView)==null||G.call(d,{block:"nearest"});}),A.dispose},[L,b$1,u.listboxState,u.activationTrigger,u.activeOptionIndex]),l$6(()=>i.registerOption(r,S),[S,r]);let R=o$7(A=>{if(l)return A.preventDefault();i.onChange(t),u.mode===0&&(i.closeListbox(),o$9().nextFrame(()=>{var d;return (d=u.buttonRef.current)==null?void 0:d.focus({preventScroll:!0})}));}),T=o$7(()=>{if(l)return i.goToOption(a$3.Nothing);i.goToOption(a$3.Specific,r);}),o=u$1(),x=o$7(A=>o.update(A)),E=o$7(A=>{o.wasMoved(A)&&(l||b$1||i.goToOption(a$3.Specific,r,0));}),H=o$7(A=>{o.wasMoved(A)&&(l||b$1&&i.goToOption(a$3.Nothing));}),X=h(()=>({active:b$1,selected:m,disabled:l}),[b$1,m,l]);return X$1({ourProps:{id:r,ref:g,role:"option",tabIndex:l===!0?void 0:-1,"aria-disabled":l===!0?!0:void 0,"aria-selected":m,disabled:void 0,onClick:R,onFocus:T,onPointerEnter:x,onMouseEnter:x,onPointerMove:E,onMouseMove:E,onPointerLeave:H,onMouseLeave:H},theirProps:p,slot:X,defaultTag:Ze$1,name:"Listbox.Option"})}let tt=D$2(Qe$1),ot=D$2(Xe$1),nt=D$2(ze$1),it$1=D$2(Ye$1),rt=D$2(et$1),Nt=Object.assign(tt,{Button:ot,Label:nt,Options:it$1,Option:rt});

const G = await importShared('react');
const {Fragment:N,createContext:X,createRef:H$1,useContext:$,useEffect:q,useMemo:x,useReducer:z,useRef:K} = G;
var me=(r=>(r[r.Open=0]="Open",r[r.Closed=1]="Closed",r))(me||{}),de$1=(r=>(r[r.Pointer=0]="Pointer",r[r.Other=1]="Other",r))(de$1||{}),fe$1=(a=>(a[a.OpenMenu=0]="OpenMenu",a[a.CloseMenu=1]="CloseMenu",a[a.GoToItem=2]="GoToItem",a[a.Search=3]="Search",a[a.ClearSearch=4]="ClearSearch",a[a.RegisterItem=5]="RegisterItem",a[a.UnregisterItem=6]="UnregisterItem",a))(fe$1||{});function w(e,u=r=>r){let r=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,i=I$1(u(e.items.slice()),t=>t.dataRef.current.domRef.current),s=r?i.indexOf(r):null;return s===-1&&(s=null),{items:i,activeItemIndex:s}}let Te={[1](e){return e.menuState===1?e:{...e,activeItemIndex:null,menuState:1}},[0](e){return e.menuState===0?e:{...e,__demoMode:!1,menuState:0}},[2]:(e,u)=>{var s;let r=w(e),i=x$2(u,{resolveItems:()=>r.items,resolveActiveIndex:()=>r.activeItemIndex,resolveId:t=>t.id,resolveDisabled:t=>t.dataRef.current.disabled});return {...e,...r,searchQuery:"",activeItemIndex:i,activationTrigger:(s=u.trigger)!=null?s:1}},[3]:(e,u)=>{let i=e.searchQuery!==""?0:1,s=e.searchQuery+u.value.toLowerCase(),o=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+i).concat(e.items.slice(0,e.activeItemIndex+i)):e.items).find(l=>{var m;return ((m=l.dataRef.current.textValue)==null?void 0:m.startsWith(s))&&!l.dataRef.current.disabled}),a=o?e.items.indexOf(o):-1;return a===-1||a===e.activeItemIndex?{...e,searchQuery:s}:{...e,searchQuery:s,activeItemIndex:a,activationTrigger:1}},[4](e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},[5]:(e,u)=>{let r=w(e,i=>[...i,{id:u.id,dataRef:u.dataRef}]);return {...e,...r}},[6]:(e,u)=>{let r=w(e,i=>{let s=i.findIndex(t=>t.id===u.id);return s!==-1&&i.splice(s,1),i});return {...e,...r,activationTrigger:1}}},U=X(null);U.displayName="MenuContext";function O(e){let u=$(U);if(u===null){let r=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,O),r}return u}function ye(e,u){return u$3(u.type,Te,e,u)}let Ie=N;function Me(e,u){let{__demoMode:r=!1,...i}=e,s=z(ye,{__demoMode:r,menuState:r?0:1,buttonRef:H$1(),itemsRef:H$1(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:t,itemsRef:o,buttonRef:a},l]=s,m=y(u);H$3([a,o],(g,R)=>{var p;l({type:1}),h$2(R,T$4.Loose)||(g.preventDefault(),(p=a.current)==null||p.focus());},t===0);let I=o$7(()=>{l({type:1});}),A=x(()=>({open:t===0,close:I}),[t,I]),f={ref:m};return G.createElement(U.Provider,{value:s},G.createElement(c$2,{value:u$3(t,{[0]:d$2.Open,[1]:d$2.Closed})},X$1({ourProps:f,theirProps:i,slot:A,defaultTag:Ie,name:"Menu"})))}let ge="button";function Re(e,u){var R;let r=I$2(),{id:i=`headlessui-menu-button-${r}`,...s}=e,[t,o]=O("Menu.Button"),a=y(t.buttonRef,u),l=p$3(),m=o$7(p=>{switch(p.key){case o$3.Space:case o$3.Enter:case o$3.ArrowDown:p.preventDefault(),p.stopPropagation(),o({type:0}),l.nextFrame(()=>o({type:2,focus:a$3.First}));break;case o$3.ArrowUp:p.preventDefault(),p.stopPropagation(),o({type:0}),l.nextFrame(()=>o({type:2,focus:a$3.Last}));break}}),I=o$7(p=>{switch(p.key){case o$3.Space:p.preventDefault();break}}),A=o$7(p=>{if(r$1(p.currentTarget))return p.preventDefault();e.disabled||(t.menuState===0?(o({type:1}),l.nextFrame(()=>{var M;return (M=t.buttonRef.current)==null?void 0:M.focus({preventScroll:!0})})):(p.preventDefault(),o({type:0})));}),f=x(()=>({open:t.menuState===0}),[t]),g={ref:a,id:i,type:s$B(e,t.buttonRef),"aria-haspopup":"menu","aria-controls":(R=t.itemsRef.current)==null?void 0:R.id,"aria-expanded":e.disabled?void 0:t.menuState===0,onKeyDown:m,onKeyUp:I,onClick:A};return X$1({ourProps:g,theirProps:s,slot:f,defaultTag:ge,name:"Menu.Button"})}let Ae="div",be$1=S$1.RenderStrategy|S$1.Static;function Ee$1(e,u){var M$1,b;let r=I$2(),{id:i=`headlessui-menu-items-${r}`,...s}=e,[t,o]=O("Menu.Items"),a=y(t.itemsRef,u),l=n$1(t.itemsRef),m=p$3(),I=C$1(),A=(()=>I!==null?(I&d$2.Open)===d$2.Open:t.menuState===0)();q(()=>{let n=t.itemsRef.current;n&&t.menuState===0&&n!==(l==null?void 0:l.activeElement)&&n.focus({preventScroll:!0});},[t.menuState,t.itemsRef,l]),F$1({container:t.itemsRef.current,enabled:t.menuState===0,accept(n){return n.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:n.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(n){n.setAttribute("role","none");}});let f=o$7(n=>{var E,P;switch(m.dispose(),n.key){case o$3.Space:if(t.searchQuery!=="")return n.preventDefault(),n.stopPropagation(),o({type:3,value:n.key});case o$3.Enter:if(n.preventDefault(),n.stopPropagation(),o({type:1}),t.activeItemIndex!==null){let{dataRef:S}=t.items[t.activeItemIndex];(P=(E=S.current)==null?void 0:E.domRef.current)==null||P.click();}D$3(t.buttonRef.current);break;case o$3.ArrowDown:return n.preventDefault(),n.stopPropagation(),o({type:2,focus:a$3.Next});case o$3.ArrowUp:return n.preventDefault(),n.stopPropagation(),o({type:2,focus:a$3.Previous});case o$3.Home:case o$3.PageUp:return n.preventDefault(),n.stopPropagation(),o({type:2,focus:a$3.First});case o$3.End:case o$3.PageDown:return n.preventDefault(),n.stopPropagation(),o({type:2,focus:a$3.Last});case o$3.Escape:n.preventDefault(),n.stopPropagation(),o({type:1}),o$9().nextFrame(()=>{var S;return (S=t.buttonRef.current)==null?void 0:S.focus({preventScroll:!0})});break;case o$3.Tab:n.preventDefault(),n.stopPropagation(),o({type:1}),o$9().nextFrame(()=>{_(t.buttonRef.current,n.shiftKey?M.Previous:M.Next);});break;default:n.key.length===1&&(o({type:3,value:n.key}),m.setTimeout(()=>o({type:4}),350));break}}),g=o$7(n=>{switch(n.key){case o$3.Space:n.preventDefault();break}}),R=x(()=>({open:t.menuState===0}),[t]),p={"aria-activedescendant":t.activeItemIndex===null||(M$1=t.items[t.activeItemIndex])==null?void 0:M$1.id,"aria-labelledby":(b=t.buttonRef.current)==null?void 0:b.id,id:i,onKeyDown:f,onKeyUp:g,role:"menu",tabIndex:0,ref:a};return X$1({ourProps:p,theirProps:s,slot:R,defaultTag:Ae,features:be$1,visible:A,name:"Menu.Items"})}let Se=N;function Pe$1(e,u){let r=I$2(),{id:i=`headlessui-menu-item-${r}`,disabled:s=!1,...t}=e,[o,a]=O("Menu.Item"),l=o.activeItemIndex!==null?o.items[o.activeItemIndex].id===i:!1,m=K(null),I=y(u,m);l$6(()=>{if(o.__demoMode||o.menuState!==0||!l||o.activationTrigger===0)return;let T=o$9();return T.requestAnimationFrame(()=>{var v,B;(B=(v=m.current)==null?void 0:v.scrollIntoView)==null||B.call(v,{block:"nearest"});}),T.dispose},[o.__demoMode,m,l,o.menuState,o.activationTrigger,o.activeItemIndex]);let A=b(m),f=K({disabled:s,domRef:m,get textValue(){return A()}});l$6(()=>{f.current.disabled=s;},[f,s]),l$6(()=>(a({type:5,id:i,dataRef:f}),()=>a({type:6,id:i})),[f,i]);let g=o$7(()=>{a({type:1});}),R=o$7(T=>{if(s)return T.preventDefault();a({type:1}),D$3(o.buttonRef.current);}),p=o$7(()=>{if(s)return a({type:2,focus:a$3.Nothing});a({type:2,focus:a$3.Specific,id:i});}),M=u$1(),b$1=o$7(T=>M.update(T)),n=o$7(T=>{M.wasMoved(T)&&(s||l||a({type:2,focus:a$3.Specific,id:i,trigger:0}));}),E=o$7(T=>{M.wasMoved(T)&&(s||l&&a({type:2,focus:a$3.Nothing}));}),P=x(()=>({active:l,disabled:s,close:g}),[l,s,g]);return X$1({ourProps:{id:i,ref:I,role:"menuitem",tabIndex:s===!0?void 0:-1,"aria-disabled":s===!0?!0:void 0,disabled:void 0,onClick:R,onFocus:p,onPointerEnter:b$1,onMouseEnter:b$1,onPointerMove:n,onMouseMove:n,onPointerLeave:E,onMouseLeave:E},theirProps:t,slot:P,defaultTag:Se,name:"Menu.Item"})}let ve=D$2(Me),xe=D$2(Re),he$1=D$2(Ee$1),De$1=D$2(Pe$1),it=Object.assign(ve,{Button:xe,Items:he$1,Item:De$1});

const C = await importShared('react');
const {createContext:Q,createRef:de,useContext:Z,useEffect:ee,useMemo:H,useReducer:be,useRef:J,useState:ce} = C;
var De=(u=>(u[u.Open=0]="Open",u[u.Closed=1]="Closed",u))(De||{}),he=(e=>(e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId",e))(he||{});let He={[0]:t=>{let o={...t,popoverState:u$3(t.popoverState,{[0]:1,[1]:0})};return o.popoverState===0&&(o.__demoMode=!1),o},[1](t){return t.popoverState===1?t:{...t,popoverState:1}},[2](t,o){return t.button===o.button?t:{...t,button:o.button}},[3](t,o){return t.buttonId===o.buttonId?t:{...t,buttonId:o.buttonId}},[4](t,o){return t.panel===o.panel?t:{...t,panel:o.panel}},[5](t,o){return t.panelId===o.panelId?t:{...t,panelId:o.panelId}}},ue=Q(null);ue.displayName="PopoverContext";function oe(t){let o=Z(ue);if(o===null){let u=new Error(`<${t} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,oe),u}return o}let ie=Q(null);ie.displayName="PopoverAPIContext";function fe(t){let o=Z(ie);if(o===null){let u=new Error(`<${t} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,fe),u}return o}let Pe=Q(null);Pe.displayName="PopoverGroupContext";function Ee(){return Z(Pe)}let re=Q(null);re.displayName="PopoverPanelContext";function _e(){return Z(re)}function Ge(t,o){return u$3(o.type,He,t,o)}let ke="div";function we(t,o){var I;let{__demoMode:u=!1,...A}=t,O=J(null),n=y(o,T$3(l=>{O.current=l;})),e=J([]),T=be(Ge,{__demoMode:u,popoverState:u?0:1,buttons:e,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:de(),afterPanelSentinel:de()}),[{popoverState:P,button:p$1,buttonId:F,panel:a,panelId:m,beforePanelSentinel:y$1,afterPanelSentinel:s},i]=T,d=n$1((I=O.current)!=null?I:p$1),g=H(()=>{if(!p$1||!a)return !1;for(let K of document.querySelectorAll("body > *"))if(Number(K==null?void 0:K.contains(p$1))^Number(K==null?void 0:K.contains(a)))return !0;let l=f$4(),R=l.indexOf(p$1),q=(R+l.length-1)%l.length,W=(R+1)%l.length,z=l[q],ge=l[W];return !a.contains(z)&&!a.contains(ge)},[p$1,a]),L=s$F(F),h=s$F(m),_=H(()=>({buttonId:L,panelId:h,close:()=>i({type:1})}),[L,h,i]),B=Ee(),D=B==null?void 0:B.registerPopover,f=o$7(()=>{var l;return (l=B==null?void 0:B.isFocusWithinPopoverGroup())!=null?l:(d==null?void 0:d.activeElement)&&((p$1==null?void 0:p$1.contains(d.activeElement))||(a==null?void 0:a.contains(d.activeElement)))});ee(()=>D==null?void 0:D(_),[D,_]);let[E,b]=ae(),c=p({portals:E,defaultContainers:[p$1,a]});E$1(d==null?void 0:d.defaultView,"focus",l=>{var R,q,W,z;l.target!==window&&l.target instanceof HTMLElement&&P===0&&(f()||p$1&&a&&(c.contains(l.target)||(q=(R=y$1.current)==null?void 0:R.contains)!=null&&q.call(R,l.target)||(z=(W=s.current)==null?void 0:W.contains)!=null&&z.call(W,l.target)||i({type:1})));},!0),H$3(c.resolveContainers,(l,R)=>{i({type:1}),h$2(R,T$4.Loose)||(l.preventDefault(),p$1==null||p$1.focus());},P===0);let M=o$7(l=>{i({type:1});let R=(()=>l?l instanceof HTMLElement?l:"current"in l&&l.current instanceof HTMLElement?l.current:p$1:p$1)();R==null||R.focus();}),r=H(()=>({close:M,isPortalled:g}),[M,g]),v=H(()=>({open:P===0,close:M}),[P,M]),x={ref:n};return C.createElement(re.Provider,{value:null},C.createElement(ue.Provider,{value:T},C.createElement(ie.Provider,{value:r},C.createElement(c$2,{value:u$3(P,{[0]:d$2.Open,[1]:d$2.Closed})},C.createElement(b,null,X$1({ourProps:x,theirProps:A,slot:v,defaultTag:ke,name:"Popover"}),C.createElement(c.MainTreeNode,null))))))}let Ne="button";function Ue(t,o){let u=I$2(),{id:A=`headlessui-popover-button-${u}`,...O}=t,[n,e]=oe("Popover.Button"),{isPortalled:T}=fe("Popover.Button"),P=J(null),p=`headlessui-focus-sentinel-${I$2()}`,F=Ee(),a=F==null?void 0:F.closeOthers,y$1=_e()!==null;ee(()=>{if(!y$1)return e({type:3,buttonId:A}),()=>{e({type:3,buttonId:null});}},[y$1,A,e]);let[s]=ce(()=>Symbol()),i=y(P,o,y$1?null:r=>{if(r)n.buttons.current.push(s);else {let v=n.buttons.current.indexOf(s);v!==-1&&n.buttons.current.splice(v,1);}n.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),r&&e({type:2,button:r});}),d=y(P,o),g=n$1(P),L=o$7(r=>{var v,x,I;if(y$1){if(n.popoverState===1)return;switch(r.key){case o$3.Space:case o$3.Enter:r.preventDefault(),(x=(v=r.target).click)==null||x.call(v),e({type:1}),(I=n.button)==null||I.focus();break}}else switch(r.key){case o$3.Space:case o$3.Enter:r.preventDefault(),r.stopPropagation(),n.popoverState===1&&(a==null||a(n.buttonId)),e({type:0});break;case o$3.Escape:if(n.popoverState!==0)return a==null?void 0:a(n.buttonId);if(!P.current||g!=null&&g.activeElement&&!P.current.contains(g.activeElement))return;r.preventDefault(),r.stopPropagation(),e({type:1});break}}),h=o$7(r=>{y$1||r.key===o$3.Space&&r.preventDefault();}),_=o$7(r=>{var v,x;r$1(r.currentTarget)||t.disabled||(y$1?(e({type:1}),(v=n.button)==null||v.focus()):(r.preventDefault(),r.stopPropagation(),n.popoverState===1&&(a==null||a(n.buttonId)),e({type:0}),(x=n.button)==null||x.focus()));}),B=o$7(r=>{r.preventDefault(),r.stopPropagation();}),D=n.popoverState===0,f=H(()=>({open:D}),[D]),E=s$B(t,P),b=y$1?{ref:d,type:E,onKeyDown:L,onClick:_}:{ref:i,id:n.buttonId,type:E,"aria-expanded":t.disabled?void 0:n.popoverState===0,"aria-controls":n.panel?n.panelId:void 0,onKeyDown:L,onKeyUp:h,onClick:_,onMouseDown:B},c=n$2(),M$1=o$7(()=>{let r=n.panel;if(!r)return;function v(){u$3(c.current,{[s$y.Forwards]:()=>O$1(r,M.First),[s$y.Backwards]:()=>O$1(r,M.Last)})===N$3.Error&&O$1(f$4().filter(I=>I.dataset.headlessuiFocusGuard!=="true"),u$3(c.current,{[s$y.Forwards]:M.Next,[s$y.Backwards]:M.Previous}),{relativeTo:n.button});}v();});return C.createElement(C.Fragment,null,X$1({ourProps:b,theirProps:O,slot:f,defaultTag:Ne,name:"Popover.Button"}),D&&!y$1&&T&&C.createElement(c$3,{id:p,features:p$2.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:M$1}))}let We="div",Ke=S$1.RenderStrategy|S$1.Static;function je(t,o){let u=I$2(),{id:A=`headlessui-popover-overlay-${u}`,...O}=t,[{popoverState:n},e]=oe("Popover.Overlay"),T=y(o),P=C$1(),p=(()=>P!==null?(P&d$2.Open)===d$2.Open:n===0)(),F=o$7(y=>{if(r$1(y.currentTarget))return y.preventDefault();e({type:1});}),a=H(()=>({open:n===0}),[n]);return X$1({ourProps:{ref:T,id:A,"aria-hidden":!0,onClick:F},theirProps:O,slot:a,defaultTag:We,features:Ke,visible:p,name:"Popover.Overlay"})}let Ve="div",$e=S$1.RenderStrategy|S$1.Static;function Je(t,o){let u=I$2(),{id:A=`headlessui-popover-panel-${u}`,focus:O=!1,...n}=t,[e,T]=oe("Popover.Panel"),{close:P,isPortalled:p}=fe("Popover.Panel"),F=`headlessui-focus-sentinel-before-${I$2()}`,a=`headlessui-focus-sentinel-after-${I$2()}`,m=J(null),y$1=y(m,o,f=>{T({type:4,panel:f});}),s=n$1(m);l$6(()=>(T({type:5,panelId:A}),()=>{T({type:5,panelId:null});}),[A,T]);let i=C$1(),d=(()=>i!==null?(i&d$2.Open)===d$2.Open:e.popoverState===0)(),g=o$7(f=>{var E;switch(f.key){case o$3.Escape:if(e.popoverState!==0||!m.current||s!=null&&s.activeElement&&!m.current.contains(s.activeElement))return;f.preventDefault(),f.stopPropagation(),T({type:1}),(E=e.button)==null||E.focus();break}});ee(()=>{var f;t.static||e.popoverState===1&&((f=t.unmount)==null||f)&&T({type:4,panel:null});},[e.popoverState,t.unmount,t.static,T]),ee(()=>{if(e.__demoMode||!O||e.popoverState!==0||!m.current)return;let f=s==null?void 0:s.activeElement;m.current.contains(f)||O$1(m.current,M.First);},[e.__demoMode,O,m,e.popoverState]);let L=H(()=>({open:e.popoverState===0,close:P}),[e,P]),h={ref:y$1,id:A,onKeyDown:g,onBlur:O&&e.popoverState===0?f=>{var b,c,M,r,v;let E=f.relatedTarget;E&&m.current&&((b=m.current)!=null&&b.contains(E)||(T({type:1}),((M=(c=e.beforePanelSentinel.current)==null?void 0:c.contains)!=null&&M.call(c,E)||(v=(r=e.afterPanelSentinel.current)==null?void 0:r.contains)!=null&&v.call(r,E))&&E.focus({preventScroll:!0})));}:void 0,tabIndex:-1},_=n$2(),B=o$7(()=>{let f=m.current;if(!f)return;function E(){u$3(_.current,{[s$y.Forwards]:()=>{var c;O$1(f,M.First)===N$3.Error&&((c=e.afterPanelSentinel.current)==null||c.focus());},[s$y.Backwards]:()=>{var b;(b=e.button)==null||b.focus({preventScroll:!0});}});}E();}),D=o$7(()=>{let f=m.current;if(!f)return;function E(){u$3(_.current,{[s$y.Forwards]:()=>{var x;if(!e.button)return;let b=f$4(),c=b.indexOf(e.button),M$1=b.slice(0,c+1),v=[...b.slice(c+1),...M$1];for(let I of v.slice())if(I.dataset.headlessuiFocusGuard==="true"||(x=e.panel)!=null&&x.contains(I)){let l=v.indexOf(I);l!==-1&&v.splice(l,1);}O$1(v,M.First,{sorted:!1});},[s$y.Backwards]:()=>{var c;O$1(f,M.Previous)===N$3.Error&&((c=e.button)==null||c.focus());}});}E();});return C.createElement(re.Provider,{value:A},d&&p&&C.createElement(c$3,{id:F,ref:e.beforePanelSentinel,features:p$2.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:B}),X$1({ourProps:h,theirProps:n,slot:L,defaultTag:Ve,features:$e,visible:d,name:"Popover.Panel"}),d&&p&&C.createElement(c$3,{id:a,ref:e.afterPanelSentinel,features:p$2.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:D}))}let Xe="div";function Ye(t,o){let u=J(null),A=y(u,o),[O,n]=ce([]),e=o$7(s=>{n(i=>{let d=i.indexOf(s);if(d!==-1){let g=i.slice();return g.splice(d,1),g}return i});}),T=o$7(s=>(n(i=>[...i,s]),()=>e(s))),P=o$7(()=>{var d;let s=e$3(u);if(!s)return !1;let i=s.activeElement;return (d=u.current)!=null&&d.contains(i)?!0:O.some(g=>{var L,h;return ((L=s.getElementById(g.buttonId.current))==null?void 0:L.contains(i))||((h=s.getElementById(g.panelId.current))==null?void 0:h.contains(i))})}),p=o$7(s=>{for(let i of O)i.buttonId.current!==s&&i.close();}),F=H(()=>({registerPopover:T,unregisterPopover:e,isFocusWithinPopoverGroup:P,closeOthers:p}),[T,e,P,p]),a=H(()=>({}),[]),m=t,y$1={ref:A};return C.createElement(Pe.Provider,{value:F},X$1({ourProps:y$1,theirProps:m,slot:a,defaultTag:Xe,name:"Popover.Group"}))}let qe=D$2(we),ze=D$2(Ue),Qe=D$2(je),Ze=D$2(Je),et=D$2(Ye),kt=Object.assign(qe,{Button:ze,Overlay:Qe,Panel:Ze,Group:et});

const appLink = "_appLink_1oz4z_1";
const primary$1 = "_primary_1oz4z_10";
const secondary = "_secondary_1oz4z_14";
const red$1 = "_red_1oz4z_18";
const s$v = {
	appLink: appLink,
	primary: primary$1,
	secondary: secondary,
	red: red$1
};

const {memo: memo$y} = await importShared('react');
var AppLinkThemeEnum = /* @__PURE__ */ ((AppLinkThemeEnum2) => {
  AppLinkThemeEnum2["PRIMARY"] = "primary";
  AppLinkThemeEnum2["SECONDARY"] = "secondary";
  AppLinkThemeEnum2["RED"] = "red";
  return AppLinkThemeEnum2;
})(AppLinkThemeEnum || {});
const AppLink$2 = ({ theme = "primary" /* PRIMARY */, className, children, to, ...otherProps }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, className: classNames(s$v.appLink, {}, [className, s$v[theme]]), ...otherProps, children });
const AppLink$3 = memo$y(AppLink$2);

const popup$1 = "_popup_1sgdn_1";
const btn$1 = "_btn_1sgdn_5";
const active$3 = "_active_1sgdn_14";
const disabled$3 = "_disabled_1sgdn_18";
const topLeft$1 = "_topLeft_1sgdn_22";
const topRight$1 = "_topRight_1sgdn_27";
const bottomLeft$1 = "_bottomLeft_1sgdn_32";
const bottomRight$1 = "_bottomRight_1sgdn_37";
const popupCls$1 = {
	popup: popup$1,
	btn: btn$1,
	active: active$3,
	disabled: disabled$3,
	topLeft: topLeft$1,
	topRight: topRight$1,
	bottomLeft: bottomLeft$1,
	bottomRight: bottomRight$1
};

const menu$2 = "_menu_1o58w_1";
const item$5 = "_item_1o58w_11";
const s$u = {
	menu: menu$2,
	item: item$5
};

const {Fragment: Fragment$2,memo: memo$x} = await importShared('react');
const DropDown$1 = ({ className, items, trigger, direction = "bottomRight" }) => {
  useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(it, { as: "div", className: classNames("", {}, [className, popupCls$1.popup]), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(it.Button, { className: popupCls$1.btn, children: trigger }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(it.Items, { className: classNames(s$u.menu, {}, [popupCls$1[direction]]), children: items.map((item, index) => {
      const content = ({ active }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          disabled: item.disabled,
          onClick: item.onClick,
          className: classNames(s$u.item, { [popupCls$1.active]: active }),
          children: item.content
        }
      );
      if (item.href) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          it.Item,
          {
            as: AppLink$3,
            to: item.href,
            disabled: item.disabled,
            children: content
          },
          index
        );
      }
      return (
        // eslint-disable-next-line
        /* @__PURE__ */ jsxRuntimeExports.jsx(it.Item, { as: Fragment$2, disabled: item.disabled, children: content }, index)
      );
    }) })
  ] });
};
const DropdownDeprecated = memo$x(DropDown$1);

const flex = "_flex_omh8n_1";
const justifyStart = "_justifyStart_omh8n_5";
const justifyCenter = "_justifyCenter_omh8n_9";
const justifyEnd = "_justifyEnd_omh8n_13";
const justifyBetween = "_justifyBetween_omh8n_17";
const alignStart = "_alignStart_omh8n_21";
const alignCenter = "_alignCenter_omh8n_25";
const alignEnd = "_alignEnd_omh8n_29";
const directionRow = "_directionRow_omh8n_33";
const directionColumn = "_directionColumn_omh8n_37";
const gap4 = "_gap4_omh8n_41";
const gap8 = "_gap8_omh8n_45";
const gap16 = "_gap16_omh8n_49";
const gap24 = "_gap24_omh8n_53";
const gap32 = "_gap32_omh8n_57";
const max$2 = "_max_omh8n_61";
const nowrap = "_nowrap_omh8n_65";
const wrap = "_wrap_omh8n_69";
const s$t = {
	flex: flex,
	justifyStart: justifyStart,
	justifyCenter: justifyCenter,
	justifyEnd: justifyEnd,
	justifyBetween: justifyBetween,
	alignStart: alignStart,
	alignCenter: alignCenter,
	alignEnd: alignEnd,
	directionRow: directionRow,
	directionColumn: directionColumn,
	gap4: gap4,
	gap8: gap8,
	gap16: gap16,
	gap24: gap24,
	gap32: gap32,
	max: max$2,
	nowrap: nowrap,
	wrap: wrap
};

const {memo: memo$w} = await importShared('react');
const justifyClasses = {
  start: s$t.justifyStart,
  center: s$t.justifyCenter,
  end: s$t.justifyEnd,
  between: s$t.justifyBetween
};
const alignClasses = {
  start: s$t.alignStart,
  center: s$t.alignCenter,
  end: s$t.alignEnd
};
const directionClasses = {
  row: s$t.directionRow,
  column: s$t.directionColumn
};
const gapClasses = {
  4: s$t.gap4,
  8: s$t.gap8,
  16: s$t.gap16,
  24: s$t.gap24,
  32: s$t.gap32
};
const Flex = ({
  className,
  children,
  justify = "start",
  align = "center",
  direction = "row",
  gap = "8",
  max,
  wrap = "nowrap",
  ...otherProps
}) => {
  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gapClasses[gap],
    s$t[wrap]
  ];
  const mods = {
    [s$t.max]: max
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames(s$t.flex, mods, classes), ...otherProps, children });
};
const Flex$1 = memo$w(Flex);

const HStack = (props) => (
  // eslint-disable-next-line
  /* @__PURE__ */ jsxRuntimeExports.jsx(Flex$1, { direction: "row", ...props })
);

const VStack = (props) => {
  const { align = "start" } = props;
  return (
    // eslint-disable-next-line
    /* @__PURE__ */ jsxRuntimeExports.jsx(Flex$1, { direction: "column", ...props, align })
  );
};

const button$1 = "_button_b2jy6_1";
const clear$1 = "_clear_b2jy6_11";
const clearInverted = "_clearInverted_b2jy6_18";
const outline$3 = "_outline_b2jy6_26";
const outline_red = "_outline_red_b2jy6_31";
const background = "_background_b2jy6_36";
const backgroundInverted = "_backgroundInverted_b2jy6_42";
const square$1 = "_square_b2jy6_48";
const size_m$2 = "_size_m_b2jy6_52";
const size_l$2 = "_size_l_b2jy6_58";
const size_xl$2 = "_size_xl_b2jy6_64";
const disabled$2 = "_disabled_b2jy6_82";
const fullWidth$1 = "_fullWidth_b2jy6_90";
const s$s = {
	button: button$1,
	clear: clear$1,
	clearInverted: clearInverted,
	outline: outline$3,
	outline_red: outline_red,
	background: background,
	backgroundInverted: backgroundInverted,
	square: square$1,
	size_m: size_m$2,
	size_l: size_l$2,
	size_xl: size_xl$2,
	disabled: disabled$2,
	fullWidth: fullWidth$1
};

const {memo: memo$v} = await importShared('react');
var ThemeButtonEnum = /* @__PURE__ */ ((ThemeButtonEnum2) => {
  ThemeButtonEnum2["CLEAR"] = "clear";
  ThemeButtonEnum2["CLEAR_INVERTED"] = "clearInverted";
  ThemeButtonEnum2["OUTLINE"] = "outline";
  ThemeButtonEnum2["OUTLINE_RED"] = "outline_red";
  ThemeButtonEnum2["BACKGROUND"] = "background";
  ThemeButtonEnum2["BACKGROUND_INVERTED"] = "backgroundInverted";
  return ThemeButtonEnum2;
})(ThemeButtonEnum || {});
var SizeButtonEnum = /* @__PURE__ */ ((SizeButtonEnum2) => {
  SizeButtonEnum2["M"] = "size_m";
  SizeButtonEnum2["L"] = "size_l";
  SizeButtonEnum2["XL"] = "size_xl";
  return SizeButtonEnum2;
})(SizeButtonEnum || {});
const Button$2 = ({
  className,
  children,
  theme = "outline" /* OUTLINE */,
  square,
  size = "size_m" /* M */,
  disabled,
  fullWidth,
  ...otherProps
}) => {
  const mods = {
    [s$s.square]: square,
    [s$s.disabled]: disabled,
    [s$s.fullWidth]: fullWidth
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      className: classNames(s$s.button, mods, [className, s$s[theme], s$s[size]]),
      disabled,
      ...otherProps,
      children
    }
  );
};
const Button$3 = memo$v(Button$2);

const options$1 = "_options_lur46_1";
const item$4 = "_item_lur46_10";
const s$r = {
	options: options$1,
	item: item$4
};

const {Fragment:Fragment2,memo: memo$u} = await importShared('react');
const ListBox$1 = ({
  className,
  items,
  value,
  defaultValue,
  onChange,
  readonly,
  direction = "bottomLeft",
  label
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { gap: "4", children: [
  label && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classNames("", { [popupCls$1.disabled]: readonly }, []), children: `${label} > ` }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Nt,
    {
      as: "div",
      className: classNames("", {}, [className, popupCls$1.popup]),
      value,
      onChange,
      disabled: readonly,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Nt.Button, { as: "div", className: popupCls$1.btn, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button$3, { disabled: readonly, children: value ?? defaultValue }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Nt.Options, { className: classNames(s$r.options, {}, [popupCls$1[direction]]), children: items?.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(Nt.Option, { value: item.value, as: Fragment2, disabled: item.disabled, children: ({ active, selected }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "li",
          {
            className: classNames(
              "",
              {
                [popupCls$1.active]: active,
                [popupCls$1.disabled]: item.disabled
              },
              [className, popupCls$1.popup]
            ),
            children: [
              selected && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "!!" }),
              item.value
            ]
          }
        ) }, item.value)) })
      ]
    }
  )
] });
const ListBoxDeprecated = memo$u(ListBox$1);

const panel$1 = "_panel_s7mqm_1";
const s$q = {
	panel: panel$1
};

const Popover$1 = ({ className, trigger, direction = "bottomLeft", children }) => {
  useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(kt, { className: classNames(s$q.popover, {}, [className, popupCls$1.popup]), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(kt.Button, { as: "div", className: popupCls$1.btn, children: trigger }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(kt.Panel, { className: classNames(s$q.panel, {}, [popupCls$1[direction]]), children })
  ] });
};

const skeleton = "_skeleton_1uc0b_1";
const load = "_load_1uc0b_1";
const s$p = {
	skeleton: skeleton,
	load: load
};

const {memo: memo$t} = await importShared('react');
const Skeleton = ({ className, height, width, border }) => {
  const styles = {
    width,
    height,
    borderRadius: border
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames(s$p.skeleton, {}, [className]), style: styles });
};
const Skeleton$1 = memo$t(Skeleton);

const avatar = "_avatar_9uwy4_1";
const icon$2 = "_icon_9uwy4_7";
const s$o = {
	avatar: avatar,
	icon: icon$2
};

const {memo: memo$s,useMemo: useMemo$5} = await importShared('react');
const Avatar = ({ className, src, size, alt }) => {
  const styles = useMemo$5(
    () => ({
      width: size || 100,
      height: size || 100
    }),
    [size]
  );
  const fallback = /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton$1, { width: size, height: size, border: "50%" });
  const errorFallback = /* @__PURE__ */ jsxRuntimeExports.jsx(RxAvatar, { size: 30, className: s$o.icon });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AppImage,
    {
      src,
      style: styles,
      className: classNames(s$o.avatar, {}, [className]),
      alt: alt || "avatar",
      fallback,
      errorFallback
    }
  );
};
const Avatar$1 = memo$s(Avatar);

const primary = "_primary_o0lt6_1";
const red = "_red_o0lt6_10";
const s$n = {
	primary: primary,
	red: red
};

const {memo: memo$r} = await importShared('react');
const AppLink = ({
  variant = "primary",
  className,
  children,
  to,
  activeClassName = "",
  ...otherProps
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  NavLink,
  {
    to,
    className: ({ isActive }) => classNames("", { [activeClassName]: isActive }, [className, s$n[variant]]),
    ...otherProps,
    children
  }
);
const AppLink$1 = memo$r(AppLink);

const popup = "_popup_1letv_1";
const menu$1 = "_menu_1letv_5";
const btn = "_btn_1letv_11";
const active$2 = "_active_1letv_23";
const disabled$1 = "_disabled_1letv_27";
const topLeft = "_topLeft_1letv_31";
const topRight = "_topRight_1letv_36";
const bottomLeft = "_bottomLeft_1letv_41";
const bottomRight = "_bottomRight_1letv_46";
const popupCls = {
	popup: popup,
	menu: menu$1,
	btn: btn,
	active: active$2,
	disabled: disabled$1,
	topLeft: topLeft,
	topRight: topRight,
	bottomLeft: bottomLeft,
	bottomRight: bottomRight
};

const menu = "_menu_1sh51_1";
const item$3 = "_item_1sh51_9";
const s$m = {
	menu: menu,
	item: item$3
};

const {Fragment: Fragment$1,memo: memo$q} = await importShared('react');
const DropDown = ({ className, items, trigger, direction = "bottomRight" }) => {
  useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(it, { as: "div", className: classNames("", {}, [className, popupCls.popup]), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(it.Button, { className: popupCls.btn, children: trigger }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(it.Items, { className: classNames(s$m.menu, {}, [popupCls[direction], popupCls.menu]), children: items.map((item, index) => {
      const content = ({ active }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          disabled: item.disabled,
          onClick: item.onClick,
          className: classNames(s$m.item, { [popupCls.active]: active }),
          children: item.content
        }
      );
      if (item.href) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          it.Item,
          {
            as: AppLink$1,
            to: item.href,
            disabled: item.disabled,
            children: content
          },
          index
        );
      }
      return (
        // eslint-disable-next-line
        /* @__PURE__ */ jsxRuntimeExports.jsx(it.Item, { as: Fragment$1, disabled: item.disabled, children: content }, index)
      );
    }) })
  ] });
};
const Dropdown = memo$q(DropDown);

// THIS FILE IS AUTO GENERATED
function MdKeyboardArrowDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0V0z"}},{"tag":"path","attr":{"d":"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}}]})(props);
}

const addonLeft = "_addonLeft_mpqrt_1";
const addonRight = "_addonRight_mpqrt_2";
const button = "_button_mpqrt_7";
const clear = "_clear_mpqrt_24";
const outline$2 = "_outline_mpqrt_31";
const filled = "_filled_mpqrt_42";
const square = "_square_mpqrt_50";
const m = "_m_mpqrt_54";
const l = "_l_mpqrt_60";
const xl = "_xl_mpqrt_66";
const disabled = "_disabled_mpqrt_84";
const fullWidth = "_fullWidth_mpqrt_92";
const s$l = {
	addonLeft: addonLeft,
	addonRight: addonRight,
	button: button,
	clear: clear,
	outline: outline$2,
	filled: filled,
	square: square,
	m: m,
	l: l,
	xl: xl,
	disabled: disabled,
	fullWidth: fullWidth
};

const {memo: memo$p} = await importShared('react');
const Button = ({
  className,
  children,
  variant = "outline",
  square,
  size = "m",
  disabled,
  fullWidth,
  addonLeft,
  addonRight,
  ...otherProps
}) => {
  const mods = {
    [s$l.square]: square,
    [s$l.disabled]: disabled,
    [s$l.fullWidth]: fullWidth
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      className: classNames(s$l.button, mods, [className, s$l[variant], s$l[size]]),
      disabled,
      ...otherProps,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: s$l.addonLeft, children: addonLeft }),
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: s$l.addonRight, children: addonRight })
      ]
    }
  );
};
const Button$1 = memo$p(Button);

const listBoxButton = "_listBoxButton_39yvg_1";
const options = "_options_39yvg_5";
const item$2 = "_item_39yvg_13";
const active$1 = "_active_39yvg_17";
const selected = "_selected_39yvg_22";
const s$k = {
	listBoxButton: listBoxButton,
	options: options,
	item: item$2,
	active: active$1,
	selected: selected
};

const {Fragment,useMemo: useMemo$4} = await importShared('react');
const ListBox = ({
  className,
  items,
  value,
  defaultValue,
  onChange,
  readonly,
  direction = "bottomLeft",
  label
}) => {
  const selectedItem = useMemo$4(() => items?.find((item) => item.value === value), [items, value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { gap: "4", children: [
    label && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classNames("", { [popupCls.disabled]: readonly }, []), children: `${label}: ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Nt,
      {
        as: "div",
        className: classNames("", {}, [className, popupCls.popup]),
        value,
        onChange,
        disabled: readonly,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Nt.Button, { as: "div", className: popupCls.btn, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button$1, { className: s$k.listBoxButton, addonRight: /* @__PURE__ */ jsxRuntimeExports.jsx(MdKeyboardArrowDown, {}), variant: "filled", disabled: readonly, children: selectedItem?.content ?? defaultValue }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Nt.Options, { className: classNames(s$k.options, {}, [popupCls[direction], popupCls.menu]), children: items?.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(Nt.Option, { value: item.value, as: Fragment, disabled: item.disabled, children: ({ active, selected }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: classNames(
                s$k.item,
                {
                  [s$k.active]: active,
                  [popupCls.disabled]: item.disabled,
                  [popupCls.selected]: selected
                },
                [className, popupCls.popup]
              ),
              children: [
                selected,
                item.content
              ]
            }
          ) }, item.value)) })
        ]
      }
    )
  ] });
};

const panel = "_panel_1csa3_1";
const s$j = {
	panel: panel
};

const Popover = ({ className, trigger, direction = "bottomLeft", children }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(kt, { className: classNames(s$j.popover, {}, [className, popupCls.popup]), children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(kt.Button, { as: "div", className: popupCls.btn, children: trigger }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(kt.Panel, { className: classNames(s$j.panel, {}, [popupCls[direction], popupCls.menu]), children })
] });

const {memo: memo$o} = await importShared('react');
const AvatarDropdown = ({ className }) => {
  const { t } = useTranslation("main");
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const userAuthData = useSelector(getUserAuthData);
  const onLogout = () => {
    dispatch(userActions.logout());
  };
  const isAdminPanelAvailable = isAdmin || isManager;
  if (!userAuthData) {
    return null;
  }
  const items = [
    ...isAdminPanelAvailable ? [
      {
        content: t("Admin panel"),
        href: getRouteAdmin()
      }
    ] : [],
    {
      content: t("User profile"),
      href: getRouteProfile(userAuthData.id)
    },
    {
      content: t("User Settings"),
      href: getRouteSettings()
    },
    {
      content: t("Logout"),
      onClick: onLogout
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ToggleFeatures$1,
    {
      feature: "isAppRedesigned",
      on: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Dropdown,
        {
          className: classNames("", {}, [className]),
          direction: "bottomLeft",
          trigger: /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar$1, { size: 40, src: userAuthData.avatar }),
          items
        }
      ),
      off: /* @__PURE__ */ jsxRuntimeExports.jsx(
        DropdownDeprecated,
        {
          className: classNames("", {}, [className]),
          direction: "bottomLeft",
          trigger: /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar$3, { size: 30, src: userAuthData.avatar }),
          items
        }
      )
    }
  );
};
const AvatarDropdown$1 = memo$o(AvatarDropdown);

var lib = {};

var uaParser_min = {exports: {}};

/* UAParser.js v1.0.35
   Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
   MIT License */

(function (module, exports) {
	(function(window,undefined$1){var LIBVERSION="1.0.35",EMPTY="",UNKNOWN="?",FUNC_TYPE="function",UNDEF_TYPE="undefined",OBJ_TYPE="object",STR_TYPE="string",MAJOR="major",MODEL="model",NAME="name",TYPE="type",VENDOR="vendor",VERSION="version",ARCHITECTURE="architecture",CONSOLE="console",MOBILE="mobile",TABLET="tablet",SMARTTV="smarttv",WEARABLE="wearable",EMBEDDED="embedded",UA_MAX_LENGTH=350;var AMAZON="Amazon",APPLE="Apple",ASUS="ASUS",BLACKBERRY="BlackBerry",BROWSER="Browser",CHROME="Chrome",EDGE="Edge",FIREFOX="Firefox",GOOGLE="Google",HUAWEI="Huawei",LG="LG",MICROSOFT="Microsoft",MOTOROLA="Motorola",OPERA="Opera",SAMSUNG="Samsung",SHARP="Sharp",SONY="Sony",XIAOMI="Xiaomi",ZEBRA="Zebra",FACEBOOK="Facebook",CHROMIUM_OS="Chromium OS",MAC_OS="Mac OS";var extend=function(regexes,extensions){var mergedRegexes={};for(var i in regexes){if(extensions[i]&&extensions[i].length%2===0){mergedRegexes[i]=extensions[i].concat(regexes[i]);}else {mergedRegexes[i]=regexes[i];}}return mergedRegexes},enumerize=function(arr){var enums={};for(var i=0;i<arr.length;i++){enums[arr[i].toUpperCase()]=arr[i];}return enums},has=function(str1,str2){return typeof str1===STR_TYPE?lowerize(str2).indexOf(lowerize(str1))!==-1:false},lowerize=function(str){return str.toLowerCase()},majorize=function(version){return typeof version===STR_TYPE?version.replace(/[^\d\.]/g,EMPTY).split(".")[0]:undefined$1},trim=function(str,len){if(typeof str===STR_TYPE){str=str.replace(/^\s\s*/,EMPTY);return typeof len===UNDEF_TYPE?str:str.substring(0,UA_MAX_LENGTH)}};var rgxMapper=function(ua,arrays){var i=0,j,k,p,q,matches,match;while(i<arrays.length&&!matches){var regex=arrays[i],props=arrays[i+1];j=k=0;while(j<regex.length&&!matches){if(!regex[j]){break}matches=regex[j++].exec(ua);if(!!matches){for(p=0;p<props.length;p++){match=matches[++k];q=props[p];if(typeof q===OBJ_TYPE&&q.length>0){if(q.length===2){if(typeof q[1]==FUNC_TYPE){this[q[0]]=q[1].call(this,match);}else {this[q[0]]=q[1];}}else if(q.length===3){if(typeof q[1]===FUNC_TYPE&&!(q[1].exec&&q[1].test)){this[q[0]]=match?q[1].call(this,match,q[2]):undefined$1;}else {this[q[0]]=match?match.replace(q[1],q[2]):undefined$1;}}else if(q.length===4){this[q[0]]=match?q[3].call(this,match.replace(q[1],q[2])):undefined$1;}}else {this[q]=match?match:undefined$1;}}}}i+=2;}},strMapper=function(str,map){for(var i in map){if(typeof map[i]===OBJ_TYPE&&map[i].length>0){for(var j=0;j<map[i].length;j++){if(has(map[i][j],str)){return i===UNKNOWN?undefined$1:i}}}else if(has(map[i],str)){return i===UNKNOWN?undefined$1:i}}return str};var oldSafariMap={"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},windowsVersionMap={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"};var regexes={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[VERSION,[NAME,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[VERSION,[NAME,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[NAME,VERSION],[/opios[\/ ]+([\w\.]+)/i],[VERSION,[NAME,OPERA+" Mini"]],[/\bopr\/([\w\.]+)/i],[VERSION,[NAME,OPERA]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[NAME,VERSION],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[VERSION,[NAME,"UC"+BROWSER]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[VERSION,[NAME,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[VERSION,[NAME,"WeChat"]],[/konqueror\/([\w\.]+)/i],[VERSION,[NAME,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[VERSION,[NAME,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[VERSION,[NAME,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 Secure "+BROWSER],VERSION],[/\bfocus\/([\w\.]+)/i],[VERSION,[NAME,FIREFOX+" Focus"]],[/\bopt\/([\w\.]+)/i],[VERSION,[NAME,OPERA+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[VERSION,[NAME,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[VERSION,[NAME,"Dolphin"]],[/coast\/([\w\.]+)/i],[VERSION,[NAME,OPERA+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[VERSION,[NAME,"MIUI "+BROWSER]],[/fxios\/([-\w\.]+)/i],[VERSION,[NAME,FIREFOX]],[/\bqihu|(qi?ho?o?|360)browser/i],[[NAME,"360 "+BROWSER]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 "+BROWSER],VERSION],[/(comodo_dragon)\/([\w\.]+)/i],[[NAME,/_/g," "],VERSION],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[NAME,VERSION],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[NAME],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[NAME,FACEBOOK],VERSION],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[NAME,VERSION],[/\bgsa\/([\w\.]+) .*safari\//i],[VERSION,[NAME,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[VERSION,[NAME,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[VERSION,[NAME,CHROME+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[NAME,CHROME+" WebView"],VERSION],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[VERSION,[NAME,"Android "+BROWSER]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[NAME,VERSION],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[VERSION,[NAME,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[VERSION,NAME],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[NAME,[VERSION,strMapper,oldSafariMap]],[/(webkit|khtml)\/([\w\.]+)/i],[NAME,VERSION],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[NAME,"Netscape"],VERSION],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[VERSION,[NAME,FIREFOX+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[NAME,VERSION],[/(cobalt)\/([\w\.]+)/i],[NAME,[VERSION,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[ARCHITECTURE,"amd64"]],[/(ia32(?=;))/i],[[ARCHITECTURE,lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[ARCHITECTURE,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[ARCHITECTURE,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[ARCHITECTURE,"armhf"]],[/windows (ce|mobile); ppc;/i],[[ARCHITECTURE,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[ARCHITECTURE,/ower/,EMPTY,lowerize]],[/(sun4\w)[;\)]/i],[[ARCHITECTURE,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[ARCHITECTURE,lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[MODEL,[VENDOR,SAMSUNG],[TYPE,TABLET]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[MODEL,[VENDOR,SAMSUNG],[TYPE,MOBILE]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[MODEL,[VENDOR,APPLE],[TYPE,MOBILE]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[MODEL,[VENDOR,APPLE],[TYPE,TABLET]],[/(macintosh);/i],[MODEL,[VENDOR,APPLE]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[MODEL,[VENDOR,SHARP],[TYPE,MOBILE]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[MODEL,[VENDOR,HUAWEI],[TYPE,TABLET]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[MODEL,[VENDOR,HUAWEI],[TYPE,MOBILE]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[MODEL,/_/g," "],[VENDOR,XIAOMI],[TYPE,MOBILE]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[MODEL,/_/g," "],[VENDOR,XIAOMI],[TYPE,TABLET]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[MODEL,[VENDOR,"OPPO"],[TYPE,MOBILE]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[MODEL,[VENDOR,"Vivo"],[TYPE,MOBILE]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[MODEL,[VENDOR,"Realme"],[TYPE,MOBILE]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[MODEL,[VENDOR,MOTOROLA],[TYPE,MOBILE]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[MODEL,[VENDOR,MOTOROLA],[TYPE,TABLET]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[MODEL,[VENDOR,LG],[TYPE,TABLET]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[MODEL,[VENDOR,LG],[TYPE,MOBILE]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[MODEL,[VENDOR,"Lenovo"],[TYPE,TABLET]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[MODEL,/_/g," "],[VENDOR,"Nokia"],[TYPE,MOBILE]],[/(pixel c)\b/i],[MODEL,[VENDOR,GOOGLE],[TYPE,TABLET]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[MODEL,[VENDOR,GOOGLE],[TYPE,MOBILE]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[MODEL,[VENDOR,SONY],[TYPE,MOBILE]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[MODEL,"Xperia Tablet"],[VENDOR,SONY],[TYPE,TABLET]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[MODEL,[VENDOR,"OnePlus"],[TYPE,MOBILE]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[MODEL,[VENDOR,AMAZON],[TYPE,TABLET]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[MODEL,/(.+)/g,"Fire Phone $1"],[VENDOR,AMAZON],[TYPE,MOBILE]],[/(playbook);[-\w\),; ]+(rim)/i],[MODEL,VENDOR,[TYPE,TABLET]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[MODEL,[VENDOR,BLACKBERRY],[TYPE,MOBILE]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[MODEL,[VENDOR,ASUS],[TYPE,TABLET]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[MODEL,[VENDOR,ASUS],[TYPE,MOBILE]],[/(nexus 9)/i],[MODEL,[VENDOR,"HTC"],[TYPE,TABLET]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[VENDOR,[MODEL,/_/g," "],[TYPE,MOBILE]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[MODEL,[VENDOR,"Acer"],[TYPE,TABLET]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[MODEL,[VENDOR,"Meizu"],[TYPE,MOBILE]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(surface duo)/i],[MODEL,[VENDOR,MICROSOFT],[TYPE,TABLET]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[MODEL,[VENDOR,"Fairphone"],[TYPE,MOBILE]],[/(u304aa)/i],[MODEL,[VENDOR,"AT&T"],[TYPE,MOBILE]],[/\bsie-(\w*)/i],[MODEL,[VENDOR,"Siemens"],[TYPE,MOBILE]],[/\b(rct\w+) b/i],[MODEL,[VENDOR,"RCA"],[TYPE,TABLET]],[/\b(venue[\d ]{2,7}) b/i],[MODEL,[VENDOR,"Dell"],[TYPE,TABLET]],[/\b(q(?:mv|ta)\w+) b/i],[MODEL,[VENDOR,"Verizon"],[TYPE,TABLET]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[MODEL,[VENDOR,"Barnes & Noble"],[TYPE,TABLET]],[/\b(tm\d{3}\w+) b/i],[MODEL,[VENDOR,"NuVision"],[TYPE,TABLET]],[/\b(k88) b/i],[MODEL,[VENDOR,"ZTE"],[TYPE,TABLET]],[/\b(nx\d{3}j) b/i],[MODEL,[VENDOR,"ZTE"],[TYPE,MOBILE]],[/\b(gen\d{3}) b.+49h/i],[MODEL,[VENDOR,"Swiss"],[TYPE,MOBILE]],[/\b(zur\d{3}) b/i],[MODEL,[VENDOR,"Swiss"],[TYPE,TABLET]],[/\b((zeki)?tb.*\b) b/i],[MODEL,[VENDOR,"Zeki"],[TYPE,TABLET]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[VENDOR,"Dragon Touch"],MODEL,[TYPE,TABLET]],[/\b(ns-?\w{0,9}) b/i],[MODEL,[VENDOR,"Insignia"],[TYPE,TABLET]],[/\b((nxa|next)-?\w{0,9}) b/i],[MODEL,[VENDOR,"NextBook"],[TYPE,TABLET]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[VENDOR,"Voice"],MODEL,[TYPE,MOBILE]],[/\b(lvtel\-)?(v1[12]) b/i],[[VENDOR,"LvTel"],MODEL,[TYPE,MOBILE]],[/\b(ph-1) /i],[MODEL,[VENDOR,"Essential"],[TYPE,MOBILE]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[MODEL,[VENDOR,"Envizen"],[TYPE,TABLET]],[/\b(trio[-\w\. ]+) b/i],[MODEL,[VENDOR,"MachSpeed"],[TYPE,TABLET]],[/\btu_(1491) b/i],[MODEL,[VENDOR,"Rotor"],[TYPE,TABLET]],[/(shield[\w ]+) b/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,TABLET]],[/(sprint) (\w+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/(kin\.[onetw]{3})/i],[[MODEL,/\./g," "],[VENDOR,MICROSOFT],[TYPE,MOBILE]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[MODEL,[VENDOR,ZEBRA],[TYPE,TABLET]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[MODEL,[VENDOR,ZEBRA],[TYPE,MOBILE]],[/smart-tv.+(samsung)/i],[VENDOR,[TYPE,SMARTTV]],[/hbbtv.+maple;(\d+)/i],[[MODEL,/^/,"SmartTV"],[VENDOR,SAMSUNG],[TYPE,SMARTTV]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[VENDOR,LG],[TYPE,SMARTTV]],[/(apple) ?tv/i],[VENDOR,[MODEL,APPLE+" TV"],[TYPE,SMARTTV]],[/crkey/i],[[MODEL,CHROME+"cast"],[VENDOR,GOOGLE],[TYPE,SMARTTV]],[/droid.+aft(\w)( bui|\))/i],[MODEL,[VENDOR,AMAZON],[TYPE,SMARTTV]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[MODEL,[VENDOR,SHARP],[TYPE,SMARTTV]],[/(bravia[\w ]+)( bui|\))/i],[MODEL,[VENDOR,SONY],[TYPE,SMARTTV]],[/(mitv-\w{5}) bui/i],[MODEL,[VENDOR,XIAOMI],[TYPE,SMARTTV]],[/Hbbtv.*(technisat) (.*);/i],[VENDOR,MODEL,[TYPE,SMARTTV]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[VENDOR,trim],[MODEL,trim],[TYPE,SMARTTV]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[TYPE,SMARTTV]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[VENDOR,MODEL,[TYPE,CONSOLE]],[/droid.+; (shield) bui/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,CONSOLE]],[/(playstation [345portablevi]+)/i],[MODEL,[VENDOR,SONY],[TYPE,CONSOLE]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[MODEL,[VENDOR,MICROSOFT],[TYPE,CONSOLE]],[/((pebble))app/i],[VENDOR,MODEL,[TYPE,WEARABLE]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[MODEL,[VENDOR,APPLE],[TYPE,WEARABLE]],[/droid.+; (glass) \d/i],[MODEL,[VENDOR,GOOGLE],[TYPE,WEARABLE]],[/droid.+; (wt63?0{2,3})\)/i],[MODEL,[VENDOR,ZEBRA],[TYPE,WEARABLE]],[/(quest( 2| pro)?)/i],[MODEL,[VENDOR,FACEBOOK],[TYPE,WEARABLE]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[VENDOR,[TYPE,EMBEDDED]],[/(aeobc)\b/i],[MODEL,[VENDOR,AMAZON],[TYPE,EMBEDDED]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[MODEL,[TYPE,MOBILE]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[MODEL,[TYPE,TABLET]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[TYPE,TABLET]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[TYPE,MOBILE]],[/(android[-\w\. ]{0,9});.+buil/i],[MODEL,[VENDOR,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[VERSION,[NAME,EDGE+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[VERSION,[NAME,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[NAME,VERSION],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[VERSION,NAME]],os:[[/microsoft (windows) (vista|xp)/i],[NAME,VERSION],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[NAME,[VERSION,strMapper,windowsVersionMap]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[NAME,"Windows"],[VERSION,strMapper,windowsVersionMap]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/ios;fbsv\/([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[VERSION,/_/g,"."],[NAME,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[NAME,MAC_OS],[VERSION,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[VERSION,NAME],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[NAME,VERSION],[/\(bb(10);/i],[VERSION,[NAME,BLACKBERRY]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[VERSION,[NAME,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[VERSION,[NAME,FIREFOX+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[VERSION,[NAME,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[VERSION,[NAME,"watchOS"]],[/crkey\/([\d\.]+)/i],[VERSION,[NAME,CHROME+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[NAME,CHROMIUM_OS],VERSION],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[NAME,VERSION],[/(sunos) ?([\w\.\d]*)/i],[[NAME,"Solaris"],VERSION],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[NAME,VERSION]]};var UAParser=function(ua,extensions){if(typeof ua===OBJ_TYPE){extensions=ua;ua=undefined$1;}if(!(this instanceof UAParser)){return new UAParser(ua,extensions).getResult()}var _navigator=typeof window!==UNDEF_TYPE&&window.navigator?window.navigator:undefined$1;var _ua=ua||(_navigator&&_navigator.userAgent?_navigator.userAgent:EMPTY);var _uach=_navigator&&_navigator.userAgentData?_navigator.userAgentData:undefined$1;var _rgxmap=extensions?extend(regexes,extensions):regexes;var _isSelfNav=_navigator&&_navigator.userAgent==_ua;this.getBrowser=function(){var _browser={};_browser[NAME]=undefined$1;_browser[VERSION]=undefined$1;rgxMapper.call(_browser,_ua,_rgxmap.browser);_browser[MAJOR]=majorize(_browser[VERSION]);if(_isSelfNav&&_navigator&&_navigator.brave&&typeof _navigator.brave.isBrave==FUNC_TYPE){_browser[NAME]="Brave";}return _browser};this.getCPU=function(){var _cpu={};_cpu[ARCHITECTURE]=undefined$1;rgxMapper.call(_cpu,_ua,_rgxmap.cpu);return _cpu};this.getDevice=function(){var _device={};_device[VENDOR]=undefined$1;_device[MODEL]=undefined$1;_device[TYPE]=undefined$1;rgxMapper.call(_device,_ua,_rgxmap.device);if(_isSelfNav&&!_device[TYPE]&&_uach&&_uach.mobile){_device[TYPE]=MOBILE;}if(_isSelfNav&&_device[MODEL]=="Macintosh"&&_navigator&&typeof _navigator.standalone!==UNDEF_TYPE&&_navigator.maxTouchPoints&&_navigator.maxTouchPoints>2){_device[MODEL]="iPad";_device[TYPE]=TABLET;}return _device};this.getEngine=function(){var _engine={};_engine[NAME]=undefined$1;_engine[VERSION]=undefined$1;rgxMapper.call(_engine,_ua,_rgxmap.engine);return _engine};this.getOS=function(){var _os={};_os[NAME]=undefined$1;_os[VERSION]=undefined$1;rgxMapper.call(_os,_ua,_rgxmap.os);if(_isSelfNav&&!_os[NAME]&&_uach&&_uach.platform!="Unknown"){_os[NAME]=_uach.platform.replace(/chrome os/i,CHROMIUM_OS).replace(/macos/i,MAC_OS);}return _os};this.getResult=function(){return {ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return _ua};this.setUA=function(ua){_ua=typeof ua===STR_TYPE&&ua.length>UA_MAX_LENGTH?trim(ua,UA_MAX_LENGTH):ua;return this};this.setUA(_ua);return this};UAParser.VERSION=LIBVERSION;UAParser.BROWSER=enumerize([NAME,VERSION,MAJOR]);UAParser.CPU=enumerize([ARCHITECTURE]);UAParser.DEVICE=enumerize([MODEL,VENDOR,TYPE,CONSOLE,MOBILE,SMARTTV,TABLET,WEARABLE,EMBEDDED]);UAParser.ENGINE=UAParser.OS=enumerize([NAME,VERSION]);{if(module.exports){exports=module.exports=UAParser;}exports.UAParser=UAParser;}var $=typeof window!==UNDEF_TYPE&&(window.jQuery||window.Zepto);if($&&!$.ua){var parser=new UAParser;$.ua=parser.getResult();$.ua.get=function(){return parser.getUA()};$.ua.set=function(ua){parser.setUA(ua);var result=parser.getResult();for(var prop in result){$.ua[prop]=result[prop];}};}})(typeof window==="object"?window:commonjsGlobal); 
} (uaParser_min, uaParser_min.exports));

var uaParser_minExports = uaParser_min.exports;

Object.defineProperty(lib, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React$3 = reactExports;
var React__default = _interopDefault(React$3);

var UAParser = uaParser_minExports;

var ClientUAInstance = new UAParser();
var browser = ClientUAInstance.getBrowser();
var cpu = ClientUAInstance.getCPU();
var device = ClientUAInstance.getDevice();
var engine = ClientUAInstance.getEngine();
var os = ClientUAInstance.getOS();
var ua = ClientUAInstance.getUA();
var setUa = function setUa(userAgentString) {
  return ClientUAInstance.setUA(userAgentString);
};
var parseUserAgent = function parseUserAgent(userAgent) {
  if (!userAgent) {
    console.error('No userAgent string was provided');
    return;
  }

  var UserAgentInstance = new UAParser(userAgent);
  return {
    UA: UserAgentInstance,
    browser: UserAgentInstance.getBrowser(),
    cpu: UserAgentInstance.getCPU(),
    device: UserAgentInstance.getDevice(),
    engine: UserAgentInstance.getEngine(),
    os: UserAgentInstance.getOS(),
    ua: UserAgentInstance.getUA(),
    setUserAgent: function setUserAgent(userAgentString) {
      return UserAgentInstance.setUA(userAgentString);
    }
  };
};

var UAHelper = /*#__PURE__*/Object.freeze({
  ClientUAInstance: ClientUAInstance,
  browser: browser,
  cpu: cpu,
  device: device,
  engine: engine,
  os: os,
  ua: ua,
  setUa: setUa,
  parseUserAgent: parseUserAgent
});

function ownKeys$7(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$7(Object(source), true).forEach(function (key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$7(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof$3(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$3 = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof$3 = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$3(obj);
}

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

function _defineProperty$1(obj, key, value) {
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

function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}

function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$1(o);
}

function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$1(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn$1(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized$1(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var DeviceTypes = {
  Mobile: 'mobile',
  Tablet: 'tablet',
  SmartTv: 'smarttv',
  Console: 'console',
  Wearable: 'wearable',
  Embedded: 'embedded',
  Browser: undefined
};
var BrowserTypes = {
  Chrome: 'Chrome',
  Firefox: 'Firefox',
  Opera: 'Opera',
  Yandex: 'Yandex',
  Safari: 'Safari',
  InternetExplorer: 'Internet Explorer',
  Edge: 'Edge',
  Chromium: 'Chromium',
  Ie: 'IE',
  MobileSafari: 'Mobile Safari',
  EdgeChromium: 'Edge Chromium',
  MIUI: 'MIUI Browser',
  SamsungBrowser: 'Samsung Browser'
};
var OsTypes = {
  IOS: 'iOS',
  Android: 'Android',
  WindowsPhone: 'Windows Phone',
  Windows: 'Windows',
  MAC_OS: 'Mac OS'
};
var InitialDeviceTypes = {
  isMobile: false,
  isTablet: false,
  isBrowser: false,
  isSmartTV: false,
  isConsole: false,
  isWearable: false
};

var checkDeviceType = function checkDeviceType(type) {
  switch (type) {
    case DeviceTypes.Mobile:
      return {
        isMobile: true
      };

    case DeviceTypes.Tablet:
      return {
        isTablet: true
      };

    case DeviceTypes.SmartTv:
      return {
        isSmartTV: true
      };

    case DeviceTypes.Console:
      return {
        isConsole: true
      };

    case DeviceTypes.Wearable:
      return {
        isWearable: true
      };

    case DeviceTypes.Browser:
      return {
        isBrowser: true
      };

    case DeviceTypes.Embedded:
      return {
        isEmbedded: true
      };

    default:
      return InitialDeviceTypes;
  }
};
var setUserAgent = function setUserAgent(userAgent) {
  return setUa(userAgent);
};
var setDefaults = function setDefaults(p) {
  var d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'none';
  return p ? p : d;
};
var getNavigatorInstance = function getNavigatorInstance() {
  if (typeof window !== 'undefined') {
    if (window.navigator || navigator) {
      return window.navigator || navigator;
    }
  }

  return false;
};
var isIOS13Check = function isIOS13Check(type) {
  var nav = getNavigatorInstance();
  return nav && nav.platform && (nav.platform.indexOf(type) !== -1 || nav.platform === 'MacIntel' && nav.maxTouchPoints > 1 && !window.MSStream);
};

var browserPayload = function browserPayload(isBrowser, browser, engine, os, ua) {
  return {
    isBrowser: isBrowser,
    browserMajorVersion: setDefaults(browser.major),
    browserFullVersion: setDefaults(browser.version),
    browserName: setDefaults(browser.name),
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};
var mobilePayload = function mobilePayload(type, device, os, ua) {
  return _objectSpread2({}, type, {
    vendor: setDefaults(device.vendor),
    model: setDefaults(device.model),
    os: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    ua: setDefaults(ua)
  });
};
var smartTvPayload = function smartTvPayload(isSmartTV, engine, os, ua) {
  return {
    isSmartTV: isSmartTV,
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};
var consolePayload = function consolePayload(isConsole, engine, os, ua) {
  return {
    isConsole: isConsole,
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};
var wearablePayload = function wearablePayload(isWearable, engine, os, ua) {
  return {
    isWearable: isWearable,
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};
var embeddedPayload = function embeddedPayload(isEmbedded, device, engine, os, ua) {
  return {
    isEmbedded: isEmbedded,
    vendor: setDefaults(device.vendor),
    model: setDefaults(device.model),
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};

function deviceDetect(userAgent) {
  var _ref = userAgent ? parseUserAgent(userAgent) : UAHelper,
      device = _ref.device,
      browser = _ref.browser,
      engine = _ref.engine,
      os = _ref.os,
      ua = _ref.ua;

  var type = checkDeviceType(device.type);
  var isBrowser = type.isBrowser,
      isMobile = type.isMobile,
      isTablet = type.isTablet,
      isSmartTV = type.isSmartTV,
      isConsole = type.isConsole,
      isWearable = type.isWearable,
      isEmbedded = type.isEmbedded;

  if (isBrowser) {
    return browserPayload(isBrowser, browser, engine, os, ua);
  }

  if (isSmartTV) {
    return smartTvPayload(isSmartTV, engine, os, ua);
  }

  if (isConsole) {
    return consolePayload(isConsole, engine, os, ua);
  }

  if (isMobile) {
    return mobilePayload(type, device, os, ua);
  }

  if (isTablet) {
    return mobilePayload(type, device, os, ua);
  }

  if (isWearable) {
    return wearablePayload(isWearable, engine, os, ua);
  }

  if (isEmbedded) {
    return embeddedPayload(isEmbedded, device, engine, os, ua);
  }
}

var isMobileType = function isMobileType(_ref) {
  var type = _ref.type;
  return type === DeviceTypes.Mobile;
};
var isTabletType = function isTabletType(_ref2) {
  var type = _ref2.type;
  return type === DeviceTypes.Tablet;
};
var isMobileAndTabletType = function isMobileAndTabletType(_ref3) {
  var type = _ref3.type;
  return type === DeviceTypes.Mobile || type === DeviceTypes.Tablet;
};
var isSmartTVType = function isSmartTVType(_ref4) {
  var type = _ref4.type;
  return type === DeviceTypes.SmartTv;
};
var isBrowserType = function isBrowserType(_ref5) {
  var type = _ref5.type;
  return type === DeviceTypes.Browser;
};
var isWearableType = function isWearableType(_ref6) {
  var type = _ref6.type;
  return type === DeviceTypes.Wearable;
};
var isConsoleType = function isConsoleType(_ref7) {
  var type = _ref7.type;
  return type === DeviceTypes.Console;
};
var isEmbeddedType = function isEmbeddedType(_ref8) {
  var type = _ref8.type;
  return type === DeviceTypes.Embedded;
};
var getMobileVendor = function getMobileVendor(_ref9) {
  var vendor = _ref9.vendor;
  return setDefaults(vendor);
};
var getMobileModel = function getMobileModel(_ref10) {
  var model = _ref10.model;
  return setDefaults(model);
};
var getDeviceType = function getDeviceType(_ref11) {
  var type = _ref11.type;
  return setDefaults(type, 'browser');
}; // os types

var isAndroidType = function isAndroidType(_ref12) {
  var name = _ref12.name;
  return name === OsTypes.Android;
};
var isWindowsType = function isWindowsType(_ref13) {
  var name = _ref13.name;
  return name === OsTypes.Windows;
};
var isMacOsType = function isMacOsType(_ref14) {
  var name = _ref14.name;
  return name === OsTypes.MAC_OS;
};
var isWinPhoneType = function isWinPhoneType(_ref15) {
  var name = _ref15.name;
  return name === OsTypes.WindowsPhone;
};
var isIOSType = function isIOSType(_ref16) {
  var name = _ref16.name;
  return name === OsTypes.IOS;
};
var getOsVersion = function getOsVersion(_ref17) {
  var version = _ref17.version;
  return setDefaults(version);
};
var getOsName = function getOsName(_ref18) {
  var name = _ref18.name;
  return setDefaults(name);
}; // browser types

var isChromeType = function isChromeType(_ref19) {
  var name = _ref19.name;
  return name === BrowserTypes.Chrome;
};
var isFirefoxType = function isFirefoxType(_ref20) {
  var name = _ref20.name;
  return name === BrowserTypes.Firefox;
};
var isChromiumType = function isChromiumType(_ref21) {
  var name = _ref21.name;
  return name === BrowserTypes.Chromium;
};
var isEdgeType = function isEdgeType(_ref22) {
  var name = _ref22.name;
  return name === BrowserTypes.Edge;
};
var isYandexType = function isYandexType(_ref23) {
  var name = _ref23.name;
  return name === BrowserTypes.Yandex;
};
var isSafariType = function isSafariType(_ref24) {
  var name = _ref24.name;
  return name === BrowserTypes.Safari || name === BrowserTypes.MobileSafari;
};
var isMobileSafariType = function isMobileSafariType(_ref25) {
  var name = _ref25.name;
  return name === BrowserTypes.MobileSafari;
};
var isOperaType = function isOperaType(_ref26) {
  var name = _ref26.name;
  return name === BrowserTypes.Opera;
};
var isIEType = function isIEType(_ref27) {
  var name = _ref27.name;
  return name === BrowserTypes.InternetExplorer || name === BrowserTypes.Ie;
};
var isMIUIType = function isMIUIType(_ref28) {
  var name = _ref28.name;
  return name === BrowserTypes.MIUI;
};
var isSamsungBrowserType = function isSamsungBrowserType(_ref29) {
  var name = _ref29.name;
  return name === BrowserTypes.SamsungBrowser;
};
var getBrowserFullVersion = function getBrowserFullVersion(_ref30) {
  var version = _ref30.version;
  return setDefaults(version);
};
var getBrowserVersion = function getBrowserVersion(_ref31) {
  var major = _ref31.major;
  return setDefaults(major);
};
var getBrowserName = function getBrowserName(_ref32) {
  var name = _ref32.name;
  return setDefaults(name);
}; // engine types

var getEngineName = function getEngineName(_ref33) {
  var name = _ref33.name;
  return setDefaults(name);
};
var getEngineVersion = function getEngineVersion(_ref34) {
  var version = _ref34.version;
  return setDefaults(version);
};
var isElectronType = function isElectronType() {
  var nav = getNavigatorInstance();
  var ua = nav && nav.userAgent && nav.userAgent.toLowerCase();
  return typeof ua === 'string' ? /electron/.test(ua) : false;
};
var isEdgeChromiumType = function isEdgeChromiumType(ua) {
  return typeof ua === 'string' && ua.indexOf('Edg/') !== -1;
};
var getIOS13 = function getIOS13() {
  var nav = getNavigatorInstance();
  return nav && (/iPad|iPhone|iPod/.test(nav.platform) || nav.platform === 'MacIntel' && nav.maxTouchPoints > 1) && !window.MSStream;
};
var getIPad13 = function getIPad13() {
  return isIOS13Check('iPad');
};
var getIphone13 = function getIphone13() {
  return isIOS13Check('iPhone');
};
var getIPod13 = function getIPod13() {
  return isIOS13Check('iPod');
};
var getUseragent = function getUseragent(userAg) {
  return setDefaults(userAg);
};

function buildSelectorsObject(options) {
  var _ref = options ? options : UAHelper,
      device = _ref.device,
      browser = _ref.browser,
      os = _ref.os,
      engine = _ref.engine,
      ua = _ref.ua;

  return {
    isSmartTV: isSmartTVType(device),
    isConsole: isConsoleType(device),
    isWearable: isWearableType(device),
    isEmbedded: isEmbeddedType(device),
    isMobileSafari: isMobileSafariType(browser) || getIPad13(),
    isChromium: isChromiumType(browser),
    isMobile: isMobileAndTabletType(device) || getIPad13(),
    isMobileOnly: isMobileType(device),
    isTablet: isTabletType(device) || getIPad13(),
    isBrowser: isBrowserType(device),
    isDesktop: isBrowserType(device),
    isAndroid: isAndroidType(os),
    isWinPhone: isWinPhoneType(os),
    isIOS: isIOSType(os) || getIPad13(),
    isChrome: isChromeType(browser),
    isFirefox: isFirefoxType(browser),
    isSafari: isSafariType(browser),
    isOpera: isOperaType(browser),
    isIE: isIEType(browser),
    osVersion: getOsVersion(os),
    osName: getOsName(os),
    fullBrowserVersion: getBrowserFullVersion(browser),
    browserVersion: getBrowserVersion(browser),
    browserName: getBrowserName(browser),
    mobileVendor: getMobileVendor(device),
    mobileModel: getMobileModel(device),
    engineName: getEngineName(engine),
    engineVersion: getEngineVersion(engine),
    getUA: getUseragent(ua),
    isEdge: isEdgeType(browser) || isEdgeChromiumType(ua),
    isYandex: isYandexType(browser),
    deviceType: getDeviceType(device),
    isIOS13: getIOS13(),
    isIPad13: getIPad13(),
    isIPhone13: getIphone13(),
    isIPod13: getIPod13(),
    isElectron: isElectronType(),
    isEdgeChromium: isEdgeChromiumType(ua),
    isLegacyEdge: isEdgeType(browser) && !isEdgeChromiumType(ua),
    isWindows: isWindowsType(os),
    isMacOs: isMacOsType(os),
    isMIUI: isMIUIType(browser),
    isSamsungBrowser: isSamsungBrowserType(browser)
  };
}

var isSmartTV = isSmartTVType(device);
var isConsole = isConsoleType(device);
var isWearable = isWearableType(device);
var isEmbedded = isEmbeddedType(device);
var isMobileSafari = isMobileSafariType(browser) || getIPad13();
var isChromium = isChromiumType(browser);
var isMobile = isMobileAndTabletType(device) || getIPad13();
var isMobileOnly = isMobileType(device);
var isTablet = isTabletType(device) || getIPad13();
var isBrowser = isBrowserType(device);
var isDesktop = isBrowserType(device);
var isAndroid = isAndroidType(os);
var isWinPhone = isWinPhoneType(os);
var isIOS = isIOSType(os) || getIPad13();
var isChrome = isChromeType(browser);
var isFirefox = isFirefoxType(browser);
var isSafari = isSafariType(browser);
var isOpera = isOperaType(browser);
var isIE = isIEType(browser);
var osVersion = getOsVersion(os);
var osName = getOsName(os);
var fullBrowserVersion = getBrowserFullVersion(browser);
var browserVersion = getBrowserVersion(browser);
var browserName = getBrowserName(browser);
var mobileVendor = getMobileVendor(device);
var mobileModel = getMobileModel(device);
var engineName = getEngineName(engine);
var engineVersion = getEngineVersion(engine);
var getUA = getUseragent(ua);
var isEdge = isEdgeType(browser) || isEdgeChromiumType(ua);
var isYandex = isYandexType(browser);
var deviceType = getDeviceType(device);
var isIOS13 = getIOS13();
var isIPad13 = getIPad13();
var isIPhone13 = getIphone13();
var isIPod13 = getIPod13();
var isElectron = isElectronType();
var isEdgeChromium = isEdgeChromiumType(ua);
var isLegacyEdge = isEdgeType(browser) && !isEdgeChromiumType(ua);
var isWindows = isWindowsType(os);
var isMacOs = isMacOsType(os);
var isMIUI = isMIUIType(browser);
var isSamsungBrowser = isSamsungBrowserType(browser);
var getSelectorsByUserAgent = function getSelectorsByUserAgent(userAgent) {
  if (!userAgent || typeof userAgent !== 'string') {
    console.error('No valid user agent string was provided');
    return;
  }

  var _UAHelper$parseUserAg = parseUserAgent(userAgent),
      device = _UAHelper$parseUserAg.device,
      browser = _UAHelper$parseUserAg.browser,
      os = _UAHelper$parseUserAg.os,
      engine = _UAHelper$parseUserAg.engine,
      ua = _UAHelper$parseUserAg.ua;

  return buildSelectorsObject({
    device: device,
    browser: browser,
    os: os,
    engine: engine,
    ua: ua
  });
};

var AndroidView = function AndroidView(_ref) {
  var renderWithFragment = _ref.renderWithFragment,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["renderWithFragment", "children"]);

  return isAndroid ? renderWithFragment ? React__default.createElement(React$3.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var BrowserView = function BrowserView(_ref2) {
  var renderWithFragment = _ref2.renderWithFragment,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["renderWithFragment", "children"]);

  return isBrowser ? renderWithFragment ? React__default.createElement(React$3.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var IEView = function IEView(_ref3) {
  var renderWithFragment = _ref3.renderWithFragment,
      children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ["renderWithFragment", "children"]);

  return isIE ? renderWithFragment ? React__default.createElement(React$3.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var IOSView = function IOSView(_ref4) {
  var renderWithFragment = _ref4.renderWithFragment,
      children = _ref4.children,
      props = _objectWithoutProperties(_ref4, ["renderWithFragment", "children"]);

  return isIOS ? renderWithFragment ? React__default.createElement(React$3.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var MobileView = function MobileView(_ref5) {
  var renderWithFragment = _ref5.renderWithFragment,
      children = _ref5.children,
      props = _objectWithoutProperties(_ref5, ["renderWithFragment", "children"]);

  return isMobile ? renderWithFragment ? React__default.createElement(React$3.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var TabletView = function TabletView(_ref6) {
  var renderWithFragment = _ref6.renderWithFragment,
      children = _ref6.children,
      props = _objectWithoutProperties(_ref6, ["renderWithFragment", "children"]);

  return isTablet ? renderWithFragment ? React__default.createElement(React$3.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var WinPhoneView = function WinPhoneView(_ref7) {
  var renderWithFragment = _ref7.renderWithFragment,
      children = _ref7.children,
      props = _objectWithoutProperties(_ref7, ["renderWithFragment", "children"]);

  return isWinPhone ? renderWithFragment ? React__default.createElement(React$3.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var MobileOnlyView = function MobileOnlyView(_ref8) {
  var renderWithFragment = _ref8.renderWithFragment,
      children = _ref8.children;
      _ref8.viewClassName;
      _ref8.style;
      var props = _objectWithoutProperties(_ref8, ["renderWithFragment", "children", "viewClassName", "style"]);

  return isMobileOnly ? renderWithFragment ? React__default.createElement(React$3.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var SmartTVView = function SmartTVView(_ref9) {
  var renderWithFragment = _ref9.renderWithFragment,
      children = _ref9.children,
      props = _objectWithoutProperties(_ref9, ["renderWithFragment", "children"]);

  return isSmartTV ? renderWithFragment ? React__default.createElement(React$3.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var ConsoleView = function ConsoleView(_ref10) {
  var renderWithFragment = _ref10.renderWithFragment,
      children = _ref10.children,
      props = _objectWithoutProperties(_ref10, ["renderWithFragment", "children"]);

  return isConsole ? renderWithFragment ? React__default.createElement(React$3.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var WearableView = function WearableView(_ref11) {
  var renderWithFragment = _ref11.renderWithFragment,
      children = _ref11.children,
      props = _objectWithoutProperties(_ref11, ["renderWithFragment", "children"]);

  return isWearable ? renderWithFragment ? React__default.createElement(React$3.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var CustomView = function CustomView(_ref12) {
  var renderWithFragment = _ref12.renderWithFragment,
      children = _ref12.children;
      _ref12.viewClassName;
      _ref12.style;
      var condition = _ref12.condition,
      props = _objectWithoutProperties(_ref12, ["renderWithFragment", "children", "viewClassName", "style", "condition"]);

  return condition ? renderWithFragment ? React__default.createElement(React$3.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};

function withOrientationChange(WrappedComponent) {
  return /*#__PURE__*/function (_React$Component) {
    _inherits$1(_class, _React$Component);

    function _class(props) {
      var _this;

      _classCallCheck$1(this, _class);

      _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(_class).call(this, props));
      _this.isEventListenerAdded = false;
      _this.handleOrientationChange = _this.handleOrientationChange.bind(_assertThisInitialized$1(_this));
      _this.onOrientationChange = _this.onOrientationChange.bind(_assertThisInitialized$1(_this));
      _this.onPageLoad = _this.onPageLoad.bind(_assertThisInitialized$1(_this));
      _this.state = {
        isLandscape: false,
        isPortrait: false
      };
      return _this;
    }

    _createClass$1(_class, [{
      key: "handleOrientationChange",
      value: function handleOrientationChange() {
        if (!this.isEventListenerAdded) {
          this.isEventListenerAdded = true;
        }

        var orientation = window.innerWidth > window.innerHeight ? 90 : 0;
        this.setState({
          isPortrait: orientation === 0,
          isLandscape: orientation === 90
        });
      }
    }, {
      key: "onOrientationChange",
      value: function onOrientationChange() {
        this.handleOrientationChange();
      }
    }, {
      key: "onPageLoad",
      value: function onPageLoad() {
        this.handleOrientationChange();
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        if ((typeof window === "undefined" ? "undefined" : _typeof$3(window)) !== undefined && isMobile) {
          if (!this.isEventListenerAdded) {
            this.handleOrientationChange();
            window.addEventListener("load", this.onPageLoad, false);
          } else {
            window.removeEventListener("load", this.onPageLoad, false);
          }

          window.addEventListener("resize", this.onOrientationChange, false);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener("resize", this.onOrientationChange, false);
      }
    }, {
      key: "render",
      value: function render() {
        return React__default.createElement(WrappedComponent, _extends({}, this.props, {
          isLandscape: this.state.isLandscape,
          isPortrait: this.state.isPortrait
        }));
      }
    }]);

    return _class;
  }(React__default.Component);
}

function useMobileOrientation() {
  var _useState = React$3.useState(function () {
    var orientation = window.innerWidth > window.innerHeight ? 90 : 0;
    return {
      isPortrait: orientation === 0,
      isLandscape: orientation === 90,
      orientation: orientation === 0 ? 'portrait' : 'landscape'
    };
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var handleOrientationChange = React$3.useCallback(function () {
    var orientation = window.innerWidth > window.innerHeight ? 90 : 0;
    var next = {
      isPortrait: orientation === 0,
      isLandscape: orientation === 90,
      orientation: orientation === 0 ? 'portrait' : 'landscape'
    };
    state.orientation !== next.orientation && setState(next);
  }, [state.orientation]);
  React$3.useEffect(function () {
    if ((typeof window === "undefined" ? "undefined" : _typeof$3(window)) !== undefined && isMobile) {
      handleOrientationChange();
      window.addEventListener("load", handleOrientationChange, false);
      window.addEventListener("resize", handleOrientationChange, false);
    }

    return function () {
      window.removeEventListener("resize", handleOrientationChange, false);
      window.removeEventListener("load", handleOrientationChange, false);
    };
  }, [handleOrientationChange]);
  return state;
}

function useDeviceData(userAgent) {
  var hookUserAgent = userAgent ? userAgent : window.navigator.userAgent;
  return parseUserAgent(hookUserAgent);
}

function useDeviceSelectors(userAgent) {
  var hookUserAgent = userAgent ? userAgent : window.navigator.userAgent;
  var deviceData = useDeviceData(hookUserAgent);
  var selectors = buildSelectorsObject(deviceData);
  return [selectors, deviceData];
}

lib.AndroidView = AndroidView;
lib.BrowserTypes = BrowserTypes;
var BrowserView_1 = lib.BrowserView = BrowserView;
lib.ConsoleView = ConsoleView;
lib.CustomView = CustomView;
lib.IEView = IEView;
lib.IOSView = IOSView;
lib.MobileOnlyView = MobileOnlyView;
var MobileView_1 = lib.MobileView = MobileView;
lib.OsTypes = OsTypes;
lib.SmartTVView = SmartTVView;
lib.TabletView = TabletView;
lib.WearableView = WearableView;
lib.WinPhoneView = WinPhoneView;
lib.browserName = browserName;
lib.browserVersion = browserVersion;
lib.deviceDetect = deviceDetect;
lib.deviceType = deviceType;
lib.engineName = engineName;
lib.engineVersion = engineVersion;
lib.fullBrowserVersion = fullBrowserVersion;
lib.getSelectorsByUserAgent = getSelectorsByUserAgent;
lib.getUA = getUA;
lib.isAndroid = isAndroid;
lib.isBrowser = isBrowser;
lib.isChrome = isChrome;
lib.isChromium = isChromium;
lib.isConsole = isConsole;
lib.isDesktop = isDesktop;
lib.isEdge = isEdge;
lib.isEdgeChromium = isEdgeChromium;
lib.isElectron = isElectron;
lib.isEmbedded = isEmbedded;
lib.isFirefox = isFirefox;
lib.isIE = isIE;
lib.isIOS = isIOS;
lib.isIOS13 = isIOS13;
lib.isIPad13 = isIPad13;
lib.isIPhone13 = isIPhone13;
lib.isIPod13 = isIPod13;
lib.isLegacyEdge = isLegacyEdge;
lib.isMIUI = isMIUI;
lib.isMacOs = isMacOs;
var isMobile_1 = lib.isMobile = isMobile;
lib.isMobileOnly = isMobileOnly;
lib.isMobileSafari = isMobileSafari;
lib.isOpera = isOpera;
lib.isSafari = isSafari;
lib.isSamsungBrowser = isSamsungBrowser;
lib.isSmartTV = isSmartTV;
lib.isTablet = isTablet;
lib.isWearable = isWearable;
lib.isWinPhone = isWinPhone;
lib.isWindows = isWindows;
lib.isYandex = isYandex;
lib.mobileModel = mobileModel;
lib.mobileVendor = mobileVendor;
lib.osName = osName;
lib.osVersion = osVersion;
lib.parseUserAgent = parseUserAgent;
lib.setUserAgent = setUserAgent;
lib.useDeviceData = useDeviceData;
lib.useDeviceSelectors = useDeviceSelectors;
lib.useMobileOrientation = useMobileOrientation;
lib.withOrientationChange = withOrientationChange;

// THIS FILE IS AUTO GENERATED
function IoIosArrowBack (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"}}]})(props);
}function IoLogoOctocat (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M178.4 287.5c-9.1 0-16.9 4.2-23.2 12.8-6.3 8.5-9.4 19-9.4 31.4 0 12.5 3.2 23 9.4 31.5 6.3 8.5 14 12.8 23.2 12.8 8.5 0 15.9-4.3 22.1-12.8 6.3-8.5 9.4-19 9.4-31.5 0-12.4-3.2-22.9-9.4-31.4-6.3-8.6-13.6-12.8-22.1-12.8zM334.7 287.5c-9 0-16.9 4.2-23.2 12.8-6.3 8.5-9.4 19-9.4 31.4 0 12.5 3.2 23 9.4 31.5 6.3 8.5 14.1 12.8 23.2 12.8 8.5 0 15.9-4.3 22.2-12.8 6.3-8.5 9.4-19 9.4-31.5 0-12.4-3.2-22.9-9.4-31.4-6.3-8.6-13.6-12.8-22.2-12.8z"}},{"tag":"path","attr":{"d":"M445.8 172c-.1 0 2.7-14.3.3-39.2-2.2-24.9-7.5-47.8-16.1-68.8 0 0-4.4.8-12.8 2.9s-22.1 6.3-40.9 14.8c-18.5 8.5-38 19.8-58.3 33.5-13.8-3.9-34.4-5.9-62-5.9-26.3 0-46.9 2-62 5.9-44.6-30.9-81.9-48-112.1-51.2-8.6 21-13.9 44-16 69-2.4 24.9.4 39.3.4 39.3C42 198.6 32 236.5 32 267.8c0 24.2.7 46.1 6.1 65.5 5.6 19.3 12.7 35.1 21.1 47.2 8.6 12.1 19 22.8 31.6 31.9 12.5 9.3 24 16 34.4 20.2 10.5 4.4 22.4 7.6 36 9.9 13.3 2.4 23.4 3.6 30.5 4 0 0 28 1.5 64.4 1.5s64.3-1.5 64.3-1.5c7-.4 17.1-1.6 30.5-4 13.5-2.3 25.5-5.6 35.9-9.9 10.4-4.3 21.9-10.9 34.5-20.2 12.5-9 22.9-19.7 31.5-31.9 8.4-12.1 15.5-27.9 21.1-47.2 5.5-19.4 6.1-41.4 6.1-65.6 0-30.3-10-68.7-34.2-95.7zm-65.4 233.6c-27.9 13.1-68.9 18.4-123.3 18.4H255c-54.4 0-95.4-5.2-122.8-18.4-27.5-13.1-41.3-40.1-41.3-80.7 0-24.3 8.6-44 25.5-59.1 7.4-6.5 16.4-11 27.6-13.7 11.1-2.6 21.4-2.8 31-2.5 9.4.4 22.6 2.2 39.3 3.5 16.8 1.3 29.3 3 41.8 3 11.7 0 27.2-2 52.1-4 25-2 43.5-3 55.5-1 12.3 2 23 6.2 32.1 14.7 17.7 15.8 26.6 35.5 26.6 59.1-.1 40.6-14.2 67.6-42 80.7z"}}]})(props);
}function IoMdNotificationsOutline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M257 120.471c7.083 0 23.911 4.479 23.911 4.479 45.589 10.447 77.678 52.439 77.678 99.85V352.412l9.321 9.364 7.788 7.823H136.302l7.788-7.823 9.321-9.364V224.8c0-47.41 32.089-89.403 77.678-99.85 0 0 18.043-4.479 23.911-4.479M256 48c-17.602 0-31.059 13.518-31.059 31.2v14.559c-59.015 13.523-103.53 67.601-103.53 131.041v114.4L80 380.8v20.8h352v-20.8l-41.411-41.6V224.8c0-63.44-44.516-117.518-103.53-131.041V79.2c0-17.682-13.457-31.2-31.059-31.2zm41.411 374.4h-82.823c0 22.881 18.633 41.6 41.412 41.6s41.411-18.719 41.411-41.6z"}}]})(props);
}

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query({
      query: () => ({
        url: "/notifications"
      })
    })
  })
});
const useNotifications = notificationApi.useGetNotificationsQuery;

const card = "_card_1opwj_1";
const normal$1 = "_normal_1opwj_6";
const outline$1 = "_outline_1opwj_10";
const max$1 = "_max_1opwj_14";
const s$i = {
	card: card,
	normal: normal$1,
	outline: outline$1,
	max: max$1
};

const {memo: memo$n} = await importShared('react');
var CardThemeEnum = /* @__PURE__ */ ((CardThemeEnum2) => {
  CardThemeEnum2["NORMAL"] = "normal";
  CardThemeEnum2["OUTLINE"] = "outline";
  return CardThemeEnum2;
})(CardThemeEnum || {});
const Card$2 = ({ className, children, theme = "normal" /* NORMAL */, max, ...otherProps }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames(s$i.card, { [s$i.max]: max }, [className, s$i[theme]]), ...otherProps, children });
const Card$3 = memo$n(Card$2);

const title$1 = "_title_1rtyo_1";
const text$1 = "_text_1rtyo_5";
const error$1 = "_error_1rtyo_9";
const inverted$2 = "_inverted_1rtyo_16";
const left$1 = "_left_1rtyo_23";
const right$1 = "_right_1rtyo_27";
const center$1 = "_center_1rtyo_31";
const size_s$1 = "_size_s_1rtyo_35";
const size_m$1 = "_size_m_1rtyo_42";
const size_l$1 = "_size_l_1rtyo_49";
const size_xl$1 = "_size_xl_1rtyo_56";
const s$h = {
	title: title$1,
	text: text$1,
	error: error$1,
	inverted: inverted$2,
	left: left$1,
	right: right$1,
	center: center$1,
	size_s: size_s$1,
	size_m: size_m$1,
	size_l: size_l$1,
	size_xl: size_xl$1
};

const {memo: memo$m} = await importShared('react');
var TextThemeEnum = /* @__PURE__ */ ((TextThemeEnum2) => {
  TextThemeEnum2["PRIMARY"] = "primary";
  TextThemeEnum2["INVERTED"] = "inverted";
  TextThemeEnum2["ERROR"] = "error";
  return TextThemeEnum2;
})(TextThemeEnum || {});
var TextAlignEnum = /* @__PURE__ */ ((TextAlignEnum2) => {
  TextAlignEnum2["RIGHT"] = "right";
  TextAlignEnum2["CENTER"] = "center";
  TextAlignEnum2["LEFT"] = "left";
  return TextAlignEnum2;
})(TextAlignEnum || {});
var TextSizeEnum = /* @__PURE__ */ ((TextSizeEnum2) => {
  TextSizeEnum2["S"] = "size_s";
  TextSizeEnum2["M"] = "size_m";
  TextSizeEnum2["L"] = "size_l";
  TextSizeEnum2["XL"] = "size_xl";
  return TextSizeEnum2;
})(TextSizeEnum || {});
const mapSizeToHeaderTag$1 = {
  ["size_s" /* S */]: "h4",
  ["size_m" /* M */]: "h3",
  ["size_l" /* L */]: "h2",
  ["size_xl" /* XL */]: "h1"
};
const TextComponent$2 = ({
  className,
  title,
  text,
  theme = "primary" /* PRIMARY */,
  align = "left" /* LEFT */,
  size = "size_m" /* M */,
  "data-testid": dataTestId = "Text"
}) => {
  const HeaderTag = mapSizeToHeaderTag$1[size];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: classNames(s$h.textComponent, {}, [className, s$h[theme], s$h[align], s$h[size]]), children: [
    title && /* @__PURE__ */ jsxRuntimeExports.jsx(HeaderTag, { className: s$h.title, "data-testid": `${dataTestId}.Header`, children: title }),
    text && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: s$h.text, "data-testid": `${dataTestId}.Paragraph`, children: text })
  ] });
};
const TextComponent$3 = memo$m(TextComponent$2);

const normal = "_normal_1uoyp_1";
const outline = "_outline_1uoyp_5";
const light = "_light_1uoyp_9";
const max = "_max_1uoyp_13";
const gap_0 = "_gap_0_1uoyp_17";
const gap_8 = "_gap_8_1uoyp_21";
const gap_16 = "_gap_16_1uoyp_25";
const gap_24 = "_gap_24_1uoyp_29";
const borderRound = "_borderRound_1uoyp_33";
const borderNormal = "_borderNormal_1uoyp_37";
const s$g = {
	normal: normal,
	outline: outline,
	light: light,
	max: max,
	gap_0: gap_0,
	gap_8: gap_8,
	gap_16: gap_16,
	gap_24: gap_24,
	borderRound: borderRound,
	borderNormal: borderNormal
};

const {memo: memo$l} = await importShared('react');
const mapPaddingToClass = {
  "0": "gap_0",
  "8": "gap_8",
  "16": "gap_16",
  "24": "gap_24"
};
const mapBorderToClass = {
  normal: "borderNormal",
  round: "borderRound"
};
const Card = ({
  className,
  children,
  variant = "normal",
  max,
  padding = "8",
  border = "normal",
  ...otherProps
}) => {
  const paddingClass = mapPaddingToClass[padding];
  const borderClass = mapBorderToClass[border];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: classNames(s$g.card, { [s$g.max]: max }, [className, s$g[variant], s$g[borderClass], s$g[paddingClass]]),
      ...otherProps,
      children
    }
  );
};
const Card$1 = memo$l(Card);

const title = "_title_nna9i_1";
const text = "_text_nna9i_5";
const error = "_error_nna9i_9";
const accent = "_accent_nna9i_16";
const left = "_left_nna9i_23";
const right = "_right_nna9i_27";
const center = "_center_nna9i_31";
const size_s = "_size_s_nna9i_35";
const size_m = "_size_m_nna9i_42";
const size_l = "_size_l_nna9i_49";
const size_xl = "_size_xl_nna9i_56";
const bold = "_bold_nna9i_63";
const s$f = {
	title: title,
	text: text,
	error: error,
	accent: accent,
	left: left,
	right: right,
	center: center,
	size_s: size_s,
	size_m: size_m,
	size_l: size_l,
	size_xl: size_xl,
	bold: bold
};

const {memo: memo$k} = await importShared('react');
const mapSizeToHeaderTag = {
  size_s: "h4",
  size_m: "h3",
  size_l: "h2",
  size_xl: "h1"
};
const TextComponent = ({
  className,
  title,
  text,
  variant = "primary",
  align = "left",
  size = "size_m",
  bold,
  "data-testid": dataTestId = "Text"
}) => {
  const HeaderTag = mapSizeToHeaderTag[size];
  const mods = {
    [s$f.bold]: bold
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: classNames(s$f.textComponent, mods, [className, s$f[variant], s$f[align], s$f[size]]), children: [
    title && /* @__PURE__ */ jsxRuntimeExports.jsx(HeaderTag, { className: s$f.title, "data-testid": `${dataTestId}.Header`, children: title }),
    text && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: s$f.text, "data-testid": `${dataTestId}.Paragraph`, children: text })
  ] });
};
const TextComponent$1 = memo$k(TextComponent);

const notificationItem = "_notificationItem_eosp2_1";
const link$2 = "_link_eosp2_2";
const s$e = {
	notificationItem: notificationItem,
	link: link$2
};

const {memo: memo$j} = await importShared('react');
const NotificationItem = ({ className, notification }) => {
  const content = /* @__PURE__ */ jsxRuntimeExports.jsx(
    ToggleFeatures$1,
    {
      feature: "isAppRedesigned",
      on: /* @__PURE__ */ jsxRuntimeExports.jsx(Card$1, { className: classNames(s$e.notificationItem, {}, [className]), children: /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent$1, { title: notification.title, text: notification.description }) }),
      off: /* @__PURE__ */ jsxRuntimeExports.jsx(Card$3, { theme: CardThemeEnum.OUTLINE, className: classNames(s$e.notificationItem, {}, [className]), children: /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent$3, { title: notification.title, text: notification.description }) })
    }
  );
  if (notification.href) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AppLink$3, { to: notification.href, className: s$e.link, children: content });
  }
  return content;
};
const NotificationItem$1 = memo$j(NotificationItem);

const {memo: memo$i} = await importShared('react');
const NotificationList = ({ className }) => {
  const { data: notifications, isLoading } = useNotifications(null, {
    pollingInterval: 5e3
  });
  const Skeleton = toggleFeatures({
    name: "isAppRedesigned",
    on: () => Skeleton$1,
    off: () => Skeleton$3
  });
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { max: true, gap: "16", className: classNames("", {}, [className]), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { width: "100%", border: "8px", height: "80px" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { width: "100%", border: "8px", height: "80px" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { width: "100%", border: "8px", height: "80px" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(VStack, { max: true, gap: "16", className: classNames("", {}, [className]), children: notifications?.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(NotificationItem$1, { notification: item }, item.id)) });
};
const NotificationList$1 = memo$i(NotificationList);

const {createContext,useContext,useEffect: useEffect$5,useMemo: useMemo$3,useRef: useRef$3,useState: useState$4} = await importShared('react');

const AnimationContext = createContext({});
const getAsyncAnimationModules = () => Promise.all([import('./react-spring_web.modern-ee2e9667.js'), import('./use-gesture-react.esm-aa79ed51.js')]);
const useAnimationLibs = () => useContext(AnimationContext);
const AnimationProvider = ({ children }) => {
  const SpringRef = useRef$3();
  const GestureRef = useRef$3();
  const [isLoaded, setIsLoaded] = useState$4(false);
  useEffect$5(() => {
    getAsyncAnimationModules().then(([Spring, Gesture]) => {
      SpringRef.current = Spring;
      GestureRef.current = Gesture;
      setIsLoaded(true);
    });
  }, []);
  const value = useMemo$3(
    () => ({
      Gesture: GestureRef.current,
      Spring: SpringRef.current,
      isLoaded
    }),
    [isLoaded]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimationContext.Provider, { value, children });
};

const drawer = "_drawer_1lo7l_1";
const opened = "_opened_1lo7l_12";
const content = "_content_1lo7l_17";
const sheet = "_sheet_1lo7l_22";
const drawerNew = "_drawerNew_1lo7l_33";
const drawerOld = "_drawerOld_1lo7l_37";
const s$d = {
	drawer: drawer,
	opened: opened,
	content: content,
	sheet: sheet,
	drawerNew: drawerNew,
	drawerOld: drawerOld
};

const {memo: memo$h,useCallback: useCallback$4,useEffect: useEffect$4} = await importShared('react');
const height = window.innerHeight - 100;
const DrawerContent = ({ className, children, isOpen, onClose }) => {
  const { Gesture, Spring } = useAnimationLibs();
  const { theme } = useTheme();
  const { handleClose, opened } = useModal({
    isOpen,
    animationDelay: 500,
    onClose
  });
  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));
  const openDrawer = useCallback$4(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);
  useEffect$4(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [api, isOpen, openDrawer]);
  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: handleClose
    });
  };
  const bind = Gesture.useDrag(
    ({ last, velocity: [, vy], direction: [, dy], offset: [, oy], cancel, canceled }) => {
      if (oy < -70)
        cancel();
      if (last) {
        if (oy > height * 0.5 || vy > 0.5 && dy > 0) {
          close(vy);
        } else {
          openDrawer();
        }
      } else {
        api.start({ y: oy, immediate: true });
      }
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true
    }
  );
  const display = y.to((py) => py < height ? "block" : "none");
  const mods = {
    [s$d.opened]: opened
  };
  const modalPortal = document.getElementById("app") ?? document.body;
  if (!isOpen) {
    return null;
  }
  const designClass = toggleFeatures({ name: "isAppRedesigned", on: () => s$d.drawerNew, off: () => s$d.drawerOld });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { element: modalPortal, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: classNames(s$d.drawer, mods, [className, theme, designClass]), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Overlay$1, { onClick: close }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Spring.a.div,
      {
        className: s$d.sheet,
        style: { display, bottom: `calc(-100vh + ${height - 100}px)`, y },
        ...bind(),
        children
      }
    )
  ] }) });
};
const DrawerLazy = memo$h((props) => {
  const { isLoaded } = useAnimationLibs();
  if (!isLoaded) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerContent, { ...props });
});
const Drawer = (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimationProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerLazy, { ...props }) });

const notifications = "_notifications_10grr_1";
const inverted$1 = "_inverted_10grr_8";
const s$c = {
	notifications: notifications,
	inverted: inverted$1
};

const {memo: memo$g,useState: useState$3} = await importShared('react');
const NotificationButton = ({ className }) => {
  const [openDrawer, setOpenDrawer] = useState$3(false);
  const openModalDrawer = () => {
    setOpenDrawer(true);
  };
  const closeModalDrawer = () => {
    setOpenDrawer(false);
  };
  const trigger = /* @__PURE__ */ jsxRuntimeExports.jsx(
    ToggleFeatures$1,
    {
      feature: "isAppRedesigned",
      on: /* @__PURE__ */ jsxRuntimeExports.jsx(IoMdNotificationsOutline, { size: 28, onClick: openModalDrawer }),
      off: /* @__PURE__ */ jsxRuntimeExports.jsx(Button$3, { onClick: openModalDrawer, theme: ThemeButtonEnum.CLEAR, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IoMdNotificationsOutline, { size: 28, className: s$c.inverted }) })
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserView_1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ToggleFeatures$1,
      {
        feature: "isAppRedesigned",
        on: /* @__PURE__ */ jsxRuntimeExports.jsx(Popover, { className: classNames(s$c.notificationButton, {}, [className]), trigger, children: /* @__PURE__ */ jsxRuntimeExports.jsx(NotificationList$1, { className: s$c.notifications }) }),
        off: /* @__PURE__ */ jsxRuntimeExports.jsx(Popover$1, { className: classNames(s$c.notificationButton, {}, [className]), trigger, children: /* @__PURE__ */ jsxRuntimeExports.jsx(NotificationList$1, { className: s$c.notifications }) })
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(MobileView_1, { children: [
      trigger,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Drawer, { isOpen: openDrawer, onClose: closeModalDrawer, children: /* @__PURE__ */ jsxRuntimeExports.jsx(NotificationList$1, {}) })
    ] })
  ] });
};
const NotificationButton$1 = memo$g(NotificationButton);

const navbar = "_navbar_cfbem_1";
const navbarRedesigned = "_navbarRedesigned_cfbem_10";
const links = "_links_cfbem_15";
const actions = "_actions_cfbem_15";
const appName = "_appName_cfbem_19";
const s$b = {
	navbar: navbar,
	navbarRedesigned: navbarRedesigned,
	links: links,
	actions: actions,
	appName: appName
};

const {memo: memo$f,useCallback: useCallback$3,useState: useState$2} = await importShared('react');
const Navbar = ({ className }) => {
  const { t } = useTranslation("main");
  const [isAuthModal, setIsAuthModal] = useState$2(true);
  const userAuthData = useSelector(getUserAuthData);
  const onCloseModal = useCallback$3(() => {
    setIsAuthModal(false);
  }, []);
  const onOpenModal = useCallback$3(() => {
    setIsAuthModal(true);
  }, []);
  if (userAuthData) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ToggleFeatures$1,
      {
        feature: "isAppRedesigned",
        on: /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: classNames(s$b.navbarRedesigned, {}, [className]), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { gap: "16", className: s$b.actions, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(NotificationButton$1, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarDropdown$1, { className: s$b.avatar })
        ] }) }),
        off: /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: classNames(s$b.navbar, {}, [className]), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent$3, { theme: TextThemeEnum.INVERTED, className: s$b.appName, title: t("Frontend") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AppLink$3, { theme: AppLinkThemeEnum.SECONDARY, to: getRouteArticleCreate(), className: s$b.createArticle, children: t("Create article") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { gap: "16", className: s$b.actions, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(NotificationButton$1, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarDropdown$1, { className: s$b.avatar })
          ] })
        ] })
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: classNames(s$b.navbar, {}, [className]), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent$3, { theme: TextThemeEnum.INVERTED, className: s$b.appName, title: t("Frontend") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button$3, { theme: ThemeButtonEnum.BACKGROUND, className: s$b.links, onClick: onOpenModal, children: t("Sign In") }),
    isAuthModal && /* @__PURE__ */ jsxRuntimeExports.jsx(LoginModal$1, { isOpen: isAuthModal, onClose: onCloseModal })
  ] });
};
const Navbar$1 = memo$f(Navbar);

const pageLoader = "_pageLoader_a5twk_1";
const s$a = {
	pageLoader: pageLoader
};

const {memo: memo$e} = await importShared('react');
const PageLoader = ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames(s$a.pageLoader, {}, [className]), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) });
const PageLoader$1 = memo$e(PageLoader);

// THIS FILE IS AUTO GENERATED
function AiFillEye (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"}}]})(props);
}function AiFillHome (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"}}]})(props);
}function AiFillStar (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"}}]})(props);
}function AiOutlineTable (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]})(props);
}

// THIS FILE IS AUTO GENERATED
function BsCardList (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"}},{"tag":"path","attr":{"d":"M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"}}]})(props);
}function BsList (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"}}]})(props);
}function BsNewspaper (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"}},{"tag":"path","attr":{"d":"M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"}}]})(props);
}

// THIS FILE IS AUTO GENERATED
function CgProfile (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z","fill":"currentColor"}}]})(props);
}

const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList = [
    {
      path: getRouteMain(),
      text: "Main",
      Icon: AiFillHome
    },
    {
      path: getRouteAbout(),
      text: "About",
      Icon: BsCardList
    }
  ];
  if (userData) {
    sidebarItemsList.push(
      {
        path: getRouteProfile(userData.id),
        text: "Profile",
        Icon: CgProfile,
        authOnly: true
      },
      {
        path: getRouteArticles(),
        text: "Articles",
        Icon: BsNewspaper,
        authOnly: true
      }
    );
  }
  return sidebarItemsList;
});

const item$1 = "_item_2xcjs_1";
const link$1 = "_link_2xcjs_6";
const icon$1 = "_icon_2xcjs_13";
const collapsed$3 = "_collapsed_2xcjs_17";
const s$9 = {
	item: item$1,
	link: link$1,
	icon: icon$1,
	collapsed: collapsed$3
};

const {memo: memo$d} = await importShared('react');
const SidebarItemDeprecated = ({ item, collapsed }) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    AppLink$3,
    {
      theme: AppLinkThemeEnum.SECONDARY,
      to: item.path,
      className: classNames(s$9.item, { [s$9.collapsed]: collapsed }, []),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(item.Icon, { className: s$9.icon, size: 24 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: s$9.link, children: t(item.text) })
      ]
    }
  );
};
const SidebarItemDeprecated$1 = memo$d(SidebarItemDeprecated);

const item = "_item_1ew3b_1";
const active = "_active_1ew3b_8";
const link = "_link_1ew3b_14";
const icon = "_icon_1ew3b_21";
const collapsed$2 = "_collapsed_1ew3b_25";
const s$8 = {
	item: item,
	active: active,
	link: link,
	icon: icon,
	collapsed: collapsed$2
};

const {memo: memo$c} = await importShared('react');
const SidebarItemRedesigned = ({ item, collapsed }) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppLink$1, { to: item.path, className: classNames(s$8.item, { [s$8.collapsed]: collapsed }, []), activeClassName: s$8.active, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(item.Icon, { className: s$8.icon, size: 24 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: s$8.link, children: t(item.text) })
  ] });
};
const SidebarItemRedesigned$1 = memo$c(SidebarItemRedesigned);

const {memo: memo$b} = await importShared('react');
const SidebarItem = ({ item, collapsed }) => {
  const isAuth = useSelector(getUserAuthData);
  if (item.authOnly && !isAuth) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ToggleFeatures$1,
    {
      feature: "isAppRedesigned",
      on: /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarItemRedesigned$1, { collapsed, item }),
      off: /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarItemDeprecated$1, { collapsed, item })
    }
  );
};
const SidebarItem$1 = memo$b(SidebarItem);

const {memo: memo$a} = await importShared('react');
const LangSwitcher = ({ className, short }) => {
  const { t, i18n } = useTranslation();
  const toggleTranslate = async () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ToggleFeatures$1,
    {
      feature: "isAppRedesigned",
      on: /* @__PURE__ */ jsxRuntimeExports.jsx(Button$1, { className: classNames("", {}, [className]), onClick: toggleTranslate, variant: "clear", children: short ? t("En") : t("English") }),
      off: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button$3,
        {
          className: classNames("", {}, [className]),
          theme: ThemeButtonEnum.CLEAR,
          onClick: toggleTranslate,
          children: short ? t("En") : t("English")
        }
      )
    }
  );
};
const LangSwitcher$1 = memo$a(LangSwitcher);

const React$2 = await importShared('react');

const SvgTheme = (props) => /* @__PURE__ */ React$2.createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React$2.createElement("path", { d: "M16 26C21.523 26 26 21.523 26 16C26 10.477 21.523 6 16 6C10.477 6 6 10.477 6 16C6 21.523 10.477 26 16 26ZM16 24.5V7.5C18.2543 7.5 20.4163 8.39553 22.0104 9.98959C23.6045 11.5837 24.5 13.7457 24.5 16C24.5 18.2543 23.6045 20.4163 22.0104 22.0104C20.4163 23.6045 18.2543 24.5 16 24.5Z", fill: "currentColor" }));

const React$1 = await importShared('react');

const SvgThemeDark = (props) => /* @__PURE__ */ React$1.createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 40 41", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React$1.createElement("path", { d: "M10.8481 1.04421C7.31755 3.30995 4.93097 7.30947 4.93097 11.8803C4.93097 16.4512 7.31755 20.4507 10.9073 22.7165C4.85207 22.7165 0 17.8698 0 11.8803C0 9.00642 1.14292 6.25021 3.17734 4.21804C5.21176 2.18587 7.97102 1.04421 10.8481 1.04421Z" }), /* @__PURE__ */ React$1.createElement("path", { d: "M14.9704 15.8996L12.6824 14.4613L10.4734 15.9981L11.144 13.3974L8.99408 11.7621L11.6765 11.5848L12.5641 9.04325L13.57 11.5454L16.2525 11.6045L14.1815 13.3186L14.9704 15.8996Z" }), /* @__PURE__ */ React$1.createElement("path", { d: "M21.4793 8.78712L18.5602 6.95483L15.7199 8.92503L16.5483 5.57568L13.8067 3.48727L17.2584 3.25084L18.4024 0L19.7239 3.21144L23.1361 3.27054L20.4734 5.49688L21.4793 8.78712Z" }), /* @__PURE__ */ React$1.createElement("path", { d: "M33.6686 3.99952L36.4891 6.81691L5.7791 37.493L2.95859 34.6756L33.6686 3.99952Z" }), /* @__PURE__ */ React$1.createElement("path", { d: "M33.5306 23.7016C33.5306 26.5755 32.3876 29.3317 30.3532 31.3639C28.3188 33.3961 25.5595 34.5377 22.6824 34.5377C20.2761 34.5377 18.0473 33.7496 16.2525 32.4296L31.4201 17.2787C32.7416 19.0716 33.5306 21.2979 33.5306 23.7016Z" }), /* @__PURE__ */ React$1.createElement("path", { d: "M33.3925 31.346L35.6607 25.8885L40 30.8928L33.3925 31.346Z" }), /* @__PURE__ */ React$1.createElement("path", { d: "M35.6607 21.5738L33.4122 16.0966L40 16.5694L35.6607 21.5738Z" }), /* @__PURE__ */ React$1.createElement("path", { d: "M24.8521 36.6655L30.3156 34.3998L29.8422 41L24.8521 36.6655Z" }), /* @__PURE__ */ React$1.createElement("path", { d: "M15.0493 34.3998L20.5128 36.6655L15.5227 40.9803L15.0493 34.3998Z" }));

const Icon$3 = "_Icon_1cx5w_1";
const inverted = "_inverted_1cx5w_6";
const s$7 = {
	Icon: Icon$3,
	inverted: inverted
};

const {memo: memo$9} = await importShared('react');
const Icon$2 = memo$9(({ className, Svg, inverted, ...otherProps }) => (
  // eslint-disable-next-line
  /* @__PURE__ */ jsxRuntimeExports.jsx(Svg, { className: classNames(inverted ? s$7.inverted : s$7.Icon, {}, [className]), ...otherProps })
));

const Icon$1 = "_Icon_1dekh_1";
const s$6 = {
	Icon: Icon$1
};

const {memo: memo$8} = await importShared('react');
const Icon = memo$8(({ className, Svg, ...otherProps }) => (
  // eslint-disable-next-line
  /* @__PURE__ */ jsxRuntimeExports.jsx(Svg, { className: classNames(s$6.Icon, {}, [className]), ...otherProps })
));

const {memo: memo$7,useCallback: useCallback$2} = await importShared('react');
const ThemeSwitcher = ({ className }) => {
  const { toggleTheme } = useTheme();
  const dispatch = useAppDispatch();
  const onToggleHandler = useCallback$2(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [toggleTheme, dispatch]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ToggleFeatures$1,
    {
      feature: "isAppRedesigned",
      on: /* @__PURE__ */ jsxRuntimeExports.jsx(Button$1, { className: classNames("", {}, [className]), onClick: onToggleHandler, variant: "clear", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { Svg: SvgTheme, width: 30, height: 30 }) }),
      off: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button$3,
        {
          className: classNames("", {}, [className]),
          onClick: onToggleHandler,
          theme: ThemeButtonEnum.CLEAR,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon$2, { Svg: SvgThemeDark, width: 40, height: 40, inverted: true })
        }
      )
    }
  );
};
const ThemeSwitcher$1 = memo$7(ThemeSwitcher);

const deprecatedSidebar = "_deprecatedSidebar_a7w0r_1";
const switchers$1 = "_switchers_a7w0r_9";
const lang = "_lang_a7w0r_17";
const collapseBtn$1 = "_collapseBtn_a7w0r_21";
const items$1 = "_items_a7w0r_29";
const collapsed$1 = "_collapsed_a7w0r_34";
const s$5 = {
	deprecatedSidebar: deprecatedSidebar,
	switchers: switchers$1,
	lang: lang,
	collapseBtn: collapseBtn$1,
	items: items$1,
	collapsed: collapsed$1
};

const {memo: memo$6} = await importShared('react');
const DeprecatedSidebar = ({ collapsed, sidebarList, className, onToggle }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { "data-testid": "sidebar", className: classNames(s$5.deprecatedSidebar, { [s$5.collapsed]: collapsed }, [className]), children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    Button$3,
    {
      type: "button",
      onClick: onToggle,
      "data-testid": "sidebar-toggle",
      className: s$5.collapseBtn,
      theme: ThemeButtonEnum.BACKGROUND_INVERTED,
      square: true,
      size: SizeButtonEnum.L,
      children: collapsed ? ">" : "<"
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx(VStack, { role: "navigation", className: s$5.items, children: sidebarList }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: s$5.switchers, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeSwitcher$1, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LangSwitcher$1, { className: s$5.lang, short: collapsed })
  ] })
] });
const DeprecatedSidebar$1 = memo$6(DeprecatedSidebar);

const appLogoWrapper = "_appLogoWrapper_1ggyx_1";
const gradientBig = "_gradientBig_1ggyx_5";
const gradientSmall = "_gradientSmall_1ggyx_15";
const appLogo$1 = "_appLogo_1ggyx_1";
const s$4 = {
	appLogoWrapper: appLogoWrapper,
	gradientBig: gradientBig,
	gradientSmall: gradientSmall,
	appLogo: appLogo$1
};

const {memo: memo$5} = await importShared('react');
const AppLogo = ({ className, size = 50 }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { max: true, justify: "center", className: classNames(s$4.appLogoWrapper, {}, [className]), children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(IoLogoOctocat, { size, className: s$4.appLogo }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: s$4.gradientBig }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: s$4.gradientBig })
] });
const AppLogo$1 = memo$5(AppLogo);

const redesignedSidebar = "_redesignedSidebar_r0dc4_1";
const switchers = "_switchers_r0dc4_10";
const collapseBtn = "_collapseBtn_r0dc4_19";
const items = "_items_r0dc4_31";
const collapsed = "_collapsed_r0dc4_35";
const appLogo = "_appLogo_r0dc4_51";
const s$3 = {
	redesignedSidebar: redesignedSidebar,
	switchers: switchers,
	collapseBtn: collapseBtn,
	items: items,
	collapsed: collapsed,
	appLogo: appLogo
};

const {memo: memo$4} = await importShared('react');
const RedesignedSidebar = ({ collapsed, sidebarList, className, onToggle }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { "data-testid": "sidebar", className: classNames(s$3.redesignedSidebar, { [s$3.collapsed]: collapsed }, [className]), children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(AppLogo$1, { className: s$3.appLogo, size: collapsed ? 30 : 50 }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(VStack, { role: "navigation", className: s$3.items, children: sidebarList }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(IoIosArrowBack, { onClick: onToggle, "data-testid": "sidebar-toggle", className: s$3.collapseBtn }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: s$3.switchers, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeSwitcher$1, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LangSwitcher$1, { short: collapsed })
  ] })
] });
const RedesignedSidebar$1 = memo$4(RedesignedSidebar);

const {memo: memo$3,useCallback: useCallback$1,useMemo: useMemo$2,useState: useState$1} = await importShared('react');
const Sidebar = ({ className }) => {
  const [collapsed, setCollapsed] = useState$1(false);
  const sidebarItemsList = useSelector(getSidebarItems);
  const onToggle = useCallback$1(() => {
    setCollapsed((state) => !state);
  }, []);
  const sidebarList = useMemo$2(
    () => sidebarItemsList.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarItem$1, { item, collapsed }, item.path)),
    [collapsed, sidebarItemsList]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ToggleFeatures$1,
    {
      feature: "isAppRedesigned",
      on: /* @__PURE__ */ jsxRuntimeExports.jsx(RedesignedSidebar$1, { sidebarList, collapsed, className, onToggle }),
      off: /* @__PURE__ */ jsxRuntimeExports.jsx(DeprecatedSidebar$1, { sidebarList, collapsed, className, onToggle })
    }
  );
};
const Sidebar$1 = memo$3(Sidebar);

const {lazy: lazy$8} = await importShared('react');

const AboutPageLazy = lazy$8(() => import('./AboutPage-5f0dbb59.js'));

const {lazy: lazy$7} = await importShared('react');

const AdminPanelPageLazy = lazy$7(() => import('./AdminPanelPage-4d20b7e7.js'));

const {lazy: lazy$6} = await importShared('react');

const ArticleDetailsPageLazy = lazy$6(
  () => import('./ArticleDetailsPage-496cd4f3.js')
);

const {lazy: lazy$5} = await importShared('react');

const ArticleEditPageLazy = lazy$5(() => import('./ArticleEditPage-81b407b1.js'));

const {lazy: lazy$4} = await importShared('react');

const ArticlesPageLazy = lazy$4(() => import('./ArticlesPage-1d1e40d1.js'));

const {lazy: lazy$3} = await importShared('react');

const ForbiddenPageLazy = lazy$3(() => import('./ForbiddenPage-65351f86.js'));

const {lazy: lazy$2} = await importShared('react');

const MainPageLazy = lazy$2(() => import('./MainPage-acc6fb8d.js'));

const getScrollSave = (state) => state.scroll.scroll;
const getScrollSaveByPath = createSelector(
  getScrollSave,
  (state, pathName) => pathName,
  (scrollValue, pathName) => scrollValue[pathName] || 0
);

const initialState$1 = {
  scroll: {}
};
const scrollSaveSlice = createSlice({
  name: "scrollSave",
  initialState: initialState$1,
  reducers: {
    setScrollPosition: (state, action) => {
      state.scroll[action.payload.path] = action.payload.position;
    }
  }
});
const scrollSaveActions = scrollSaveSlice.actions;
const scrollSaveReducer = scrollSaveSlice.reducer;

const {useEffect: useEffect$3,useRef: useRef$2} = await importShared('react');

const useInfiniteScroll = ({ callback, triggerRef, wrapperRef }) => {
  const observer = useRef$2(null);
  useEffect$3(() => {
    const wrapperElement = wrapperRef?.current || null;
    const triggerElement = triggerRef.current;
    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: "0px",
        threshold: 0
      };
      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);
      observer.current.observe(triggerElement);
    }
    return () => {
      if (observer.current && triggerElement) {
        observer.current.unobserve(triggerElement);
      }
    };
  }, [triggerRef, wrapperRef, callback]);
};

const {useEffect: useEffect$2} = await importShared('react');

const useInitialEffect = (callback) => {
  useEffect$2(() => {
    {
      callback();
    }
  }, []);
};

const {useCallback,useRef: useRef$1} = await importShared('react');

const useThrottle = (callback, delay) => {
  const throttleRef = useRef$1(false);
  return useCallback(
    (...args) => {
      if (!throttleRef.current) {
        callback(...args);
        throttleRef.current = true;
        setTimeout(() => {
          throttleRef.current = false;
        }, delay);
      }
    },
    [delay, callback]
  );
};

const page = "_page_v2pge_1";
const pageRedesigned = "_pageRedesigned_v2pge_9";
const trigger = "_trigger_v2pge_15";
const s$2 = {
	page: page,
	pageRedesigned: pageRedesigned,
	trigger: trigger
};

const {memo: memo$2,useRef} = await importShared('react');
const PAGE_ID = "PAGE_ID";
const Page = ({ className, children, onScrollEnd, ...props }) => {
  const wrapperRef = useRef();
  const triggerRef = useRef();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state) => getScrollSaveByPath(state, pathname));
  useInfiniteScroll({
    wrapperRef: toggleFeatures({
      name: "isAppRedesigned",
      on: () => void 0,
      off: () => wrapperRef
    }),
    triggerRef,
    callback: onScrollEnd
  });
  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });
  const handleScroll = useThrottle((e) => {
    dispatch(
      scrollSaveActions.setScrollPosition({
        position: e.currentTarget.scrollTop,
        path: pathname
      })
    );
  }, 500);
  const pageClass = toggleFeatures({
    name: "isAppRedesigned",
    on: () => s$2.pageRedesigned,
    off: () => s$2.page
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "main",
    {
      ref: wrapperRef,
      className: classNames(pageClass, {}, [className]),
      onScroll: handleScroll,
      id: PAGE_ID,
      "data-testid": props["data-testid"] ?? "Page",
      children: [
        children,
        onScrollEnd && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: s$2.trigger, ref: triggerRef })
      ]
    }
  );
};
const Page$1 = memo$2(Page);

const notFoundPage = "_notFoundPage_aau8w_1";
const s$1 = {
	notFoundPage: notFoundPage
};

const NotFoundPage = ({ className }) => {
  const { t } = useTranslation("not-found");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Page$1,
    {
      "data-testid": "NotFoundPage",
      className: classNames(s$1.notFoundPage, {}, [className]),
      children: t("Page not found")
    }
  );
};

const {lazy: lazy$1} = await importShared('react');

const ProfilePageLazy = lazy$1(() => import('./ProfilePage-06df636e.js'));

const {lazy} = await importShared('react');

const SettingsPageLazy = lazy(() => import('./SettingsPage-720a7de7.js'));

const routeConfig = {
  [AppRoutesEnum.MAIN]: {
    path: getRouteMain(),
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(MainPageLazy, {})
  },
  [AppRoutesEnum.SETTINGS]: {
    path: getRouteSettings(),
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsPageLazy, {})
  },
  [AppRoutesEnum.ABOUT]: {
    path: getRouteAbout(),
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(AboutPageLazy, {})
  },
  [AppRoutesEnum.PROFILE]: {
    path: getRouteProfile(":profileId"),
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProfilePageLazy, {}),
    authOnly: true
  },
  [AppRoutesEnum.ARTICLES]: {
    path: getRouteArticles(),
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(ArticlesPageLazy, {}),
    authOnly: true
  },
  [AppRoutesEnum.ARTICLE_CREATE]: {
    path: getRouteArticleCreate(),
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleEditPageLazy, {}),
    authOnly: true
  },
  [AppRoutesEnum.ARTICLE_EDIT]: {
    path: getRouteArticleEdit(":id"),
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleEditPageLazy, {}),
    authOnly: true
  },
  [AppRoutesEnum.ARTICLE_DETAILS]: {
    path: getRouteArticlesDetails(":articleId"),
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleDetailsPageLazy, {}),
    authOnly: true
  },
  [AppRoutesEnum.ADMIN_PANEL]: {
    path: getRouteAdmin(),
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(AdminPanelPageLazy, {}),
    authOnly: true,
    roles: [UserRoleEnum.ADMIN, UserRoleEnum.MANAGER]
  },
  [AppRoutesEnum.FORBIDDEN]: {
    path: getRouteForbidden(),
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(ForbiddenPageLazy, {}),
    authOnly: true,
    roles: [UserRoleEnum.ADMIN, UserRoleEnum.MANAGER]
  },
  [AppRoutesEnum.NOT_FOUND]: {
    path: getRouteNotFound(),
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(NotFoundPage, {})
  }
};

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const isAuth = useSelector(getUserAuthData);
  return !isAuth ? /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: getRouteMain(), state: { state: location }, replace: true }) : children;
};

const {useMemo: useMemo$1} = await importShared('react');
const RequireRole = ({ children, roles }) => {
  const location = useLocation();
  const userRoles = useSelector(getUserRoles);
  const hasRequireRoles = useMemo$1(() => {
    if (!roles) {
      return true;
    }
    return roles.some((item) => {
      const hasRole = userRoles?.includes(item);
      return hasRole;
    });
  }, [userRoles, roles]);
  return !hasRequireRoles ? /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: getRouteForbidden(), state: { state: location }, replace: true }) : children;
};

const {memo: memo$1,Suspense: Suspense$2} = await importShared('react');
const AppRouter = () => {
  const renderWithWrapper = (route) => {
    const { element } = route;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: route.path,
        element: route.authOnly ? /* @__PURE__ */ jsxRuntimeExports.jsx(RequireAuth, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(RequireRole, { roles: route.roles, children: element }) }) : element
      },
      route.path
    );
  };
  const routesAuth = Object.values(routeConfig);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Suspense$2, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(PageLoader$1, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Routes, { children: routesAuth.map(renderWithWrapper) }) });
};
const AppRouter$1 = memo$1(AppRouter);

const {Suspense: Suspense$1,useEffect: useEffect$1} = await importShared('react');
const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const isLoadPage = useSelector(getUserIsLoadPage);
  useEffect$1(() => {
    dispatch(initAuthData());
  }, [dispatch]);
  if (!isLoadPage) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PageLoader$1, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ToggleFeatures$1,
    {
      feature: "isAppRedesigned",
      on: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "app", className: classNames("app_redesigned", {}, [theme]), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Suspense$1, { fallback: "loading", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MainLayout$1, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(AppRouter$1, {}), header: /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar$1, {}), sidebar: /* @__PURE__ */ jsxRuntimeExports.jsx(Sidebar$1, {}) }) }) }),
      off: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "app", className: classNames("app", {}, [theme]), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Suspense$1, { fallback: "loading", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar$1, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-page", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sidebar$1, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AppRouter$1, {})
        ] })
      ] }) })
    }
  );
};

const pageError = "_pageError_19vtj_1";
const s = {
	pageError: pageError
};

const {memo} = await importShared('react');
const PageError = ({ className }) => {
  const { t } = useTranslation("page-error");
  const reloadPage = () => {
    location.reload();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: classNames(s.pageError, {}, [className]), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("An unexpected error has occurred") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button$3, { onClick: reloadPage, children: t("Update page") })
  ] });
};
const PageError$1 = memo(PageError);

const React = await importShared('react');
const {Suspense} = React;
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }
  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Suspense, { fallback: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PageError$1, {}) });
    }
    return children;
  }
}

const initialState = {
  value: 0
};
const counterSlice = buildSlice$1({
  name: "counter",
  initialState,
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    }
  }
});
const counterReducer = counterSlice.reducer;

function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

// utils is a library of generic helper functions non-specific to axios

const {toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
};

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  let kind;
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) || (
      isFunction(thing.append) && (
        (kind = kindOf(thing)) === 'formdata' ||
        // detect form-data instance
        (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  )
};

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
};

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
};

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
};

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
};

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    if (reducer(descriptor, name, obj) !== false) {
      reducedDescriptors[name] = descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
};

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
};

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  };

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
};

const noop$1 = () => {};

const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
};

const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

const DIGIT = '0123456789';

const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};

const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {length} = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length|0];
  }

  return str;
};

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  };

  return visit(obj, 0);
};

const isAsyncFn = kindOfTest('AsyncFunction');

const isThenable = (thing) =>
  thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

const utils = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop: noop$1,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
};

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

utils.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

const prototype$1 = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype$1, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype$1);

  utils.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

// eslint-disable-next-line strict
const httpAdapter = null;

/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils.isPlainObject(thing) || utils.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils.isArray(arr) && !arr.some(isVisitable);
}

const predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!utils.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils.isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && utils.isSpecCompliantForm(formData);

  if (!utils.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (utils.isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && utils.isBlob(value)) {
      throw new AxiosError('Blob is not supported. Use a Buffer instead.');
    }

    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (utils.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (utils.isArray(value) && isFlatArray(value)) ||
        ((utils.isFileList(value) || utils.endsWith(key, '[]')) && (arr = utils.toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(utils.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (utils.isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    utils.forEach(value, function each(el, key) {
      const result = !(utils.isUndefined(el) || el === null) && visitor.call(
        formData, el, utils.isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!utils.isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode$1(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && toFormData(params, this, options);
}

const prototype = AxiosURLSearchParams.prototype;

prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || encode;

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils.isURLSearchParams(params) ?
      params.toString() :
      new AxiosURLSearchParams(params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

const InterceptorManager$1 = InterceptorManager;

const transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

const URLSearchParams$1 = typeof URLSearchParams !== 'undefined' ? URLSearchParams : AxiosURLSearchParams;

const FormData$1 = typeof FormData !== 'undefined' ? FormData : null;

const Blob$1 = typeof Blob !== 'undefined' ? Blob : null;

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const isStandardBrowserEnv = (() => {
  let product;
  if (typeof navigator !== 'undefined' && (
    (product = navigator.product) === 'ReactNative' ||
    product === 'NativeScript' ||
    product === 'NS')
  ) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
})();

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
 const isStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();


const platform = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1
  },
  isStandardBrowserEnv,
  isStandardBrowserWebWorkerEnv,
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
};

function toURLEncodedForm(data, options) {
  return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform.isNode && utils.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils.isArray(target) ? target.length : name;

    if (isLast) {
      if (utils.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !utils.isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && utils.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
    const obj = {};

    utils.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

const DEFAULT_CONTENT_TYPE = {
  'Content-Type': undefined
};

/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults$2 = {

  transitional: transitionalDefaults,

  adapter: ['xhr', 'http'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = utils.isObject(data);

    if (isObjectPayload && utils.isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = utils.isFormData(data);

    if (isFormData) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
    }

    if (utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }

      if ((isFileList = utils.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return toFormData(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults$2.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (data && utils.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults$2.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults$2.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

const defaults$3 = defaults$2;

// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils.toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
const parseHeaders = rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};

const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return utils.isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (utils.isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!utils.isString(value)) return;

  if (utils.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (utils.isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = utils.toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = utils.findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      utils.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (utils.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if(utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (utils.isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (utils.isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = utils.findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (utils.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    utils.forEach(this, (value, header) => {
      const key = utils.findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    utils.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils.isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

utils.freezeMethods(AxiosHeaders.prototype);
utils.freezeMethods(AxiosHeaders);

const AxiosHeaders$1 = AxiosHeaders;

/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || defaults$3;
  const context = response || config;
  const headers = AxiosHeaders$1.from(context.headers);
  let data = context.data;

  utils.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}

function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

utils.inherits(CanceledError, AxiosError, {
  __CANCEL__: true
});

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError(
      'Request failed with status code ' + response.status,
      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

const cookies = platform.isStandardBrowserEnv ?

// Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        const cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

// Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })();

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

const isURLSameOrigin = platform.isStandardBrowserEnv ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement('a');
    let originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      let href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
          urlParsingNode.pathname :
          '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      const parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
          parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })();

function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);

  return e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };

    data[isDownloadStream ? 'download' : 'upload'] = true;

    listener(data);
  };
}

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

const xhrAdapter = isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = AxiosHeaders$1.from(config.headers).normalize();
    const responseType = config.responseType;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData)) {
      if (platform.isStandardBrowserEnv || platform.isStandardBrowserWebWorkerEnv) {
        requestHeaders.setContentType(false); // Let the browser set it
      } else {
        requestHeaders.setContentType('multipart/form-data;', false); // mobile/desktop app frameworks
      }
    }

    let request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }

    const fullPath = buildFullPath(config.baseURL, config.url);

    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = AxiosHeaders$1.from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = config.transitional || transitionalDefaults;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new AxiosError(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (platform.isStandardBrowserEnv) {
      // Add xsrf header
      const xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath))
        && config.xsrfCookieName && cookies.read(config.xsrfCookieName);

      if (xsrfValue) {
        requestHeaders.set(config.xsrfHeaderName, xsrfValue);
      }
    }

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = parseProtocol(fullPath);

    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
};

const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter
};

utils.forEach(knownAdapters, (fn, value) => {
  if(fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

const adapters = {
  getAdapter: (adapters) => {
    adapters = utils.isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      if((adapter = utils.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter)) {
        break;
      }
    }

    if (!adapter) {
      if (adapter === false) {
        throw new AxiosError(
          `Adapter ${nameOrAdapter} is not supported by the environment`,
          'ERR_NOT_SUPPORT'
        );
      }

      throw new Error(
        utils.hasOwnProp(knownAdapters, nameOrAdapter) ?
          `Adapter '${nameOrAdapter}' is not available in the build` :
          `Unknown adapter '${nameOrAdapter}'`
      );
    }

    if (!utils.isFunction(adapter)) {
      throw new TypeError('adapter is not a function');
    }

    return adapter;
  },
  adapters: knownAdapters
};

/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new CanceledError(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = AxiosHeaders$1.from(config.headers);

  // Transform request data
  config.data = transformData.call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = adapters.getAdapter(config.adapter || defaults$3.adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );

    response.headers = AxiosHeaders$1.from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}

const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? thing.toJSON() : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, caseless) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge.call({caseless}, target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };

  utils.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}

const VERSION = "1.4.0";

const validators$1 = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators$1[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators$1.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}

const validator = {
  assertOptions,
  validators: validators$1
};

const validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager$1(),
      response: new InterceptorManager$1()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = mergeConfig(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (utils.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    let contextHeaders;

    // Flatten headers
    contextHeaders = headers && utils.merge(
      headers.common,
      headers[config.method]
    );

    contextHeaders && utils.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = AxiosHeaders$1.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

const Axios$1 = Axios;

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

const CancelToken$1 = CancelToken;

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
}

const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

const HttpStatusCode$1 = HttpStatusCode;

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new Axios$1(defaultConfig);
  const instance = bind(Axios$1.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios$1.prototype, context, {allOwnKeys: true});

  // Copy context to instance
  utils.extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(defaults$3);

// Expose Axios class to allow class inheritance
axios.Axios = Axios$1;

// Expose Cancel & CancelToken
axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData;

// Expose AxiosError class
axios.AxiosError = AxiosError;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

// Expose mergeConfig
axios.mergeConfig = mergeConfig;

axios.AxiosHeaders = AxiosHeaders$1;

axios.formToJSON = thing => formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);

axios.HttpStatusCode = HttpStatusCode$1;

axios.default = axios;

// this module should only have a default export
const axios$1 = axios;

const $api = axios$1.create({
  baseURL: "http://localhost:8000"
});
$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = localStorage.getItem(USER_LOCAL_STORAGE_KEY) || "";
  }
  return config;
});

function createReducerManager(initialReducers) {
  const reducers = { ...initialReducers };
  let combinedReducer = combineReducers(reducers);
  let keysToRemove = [];
  const mountedReducers = {};
  return {
    getReducerMap: () => reducers,
    getMountedReducers: () => mountedReducers,
    reduce: (state, action) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        keysToRemove.forEach((key) => {
          delete state[key];
        });
        keysToRemove = [];
      }
      return combinedReducer(state, action);
    },
    add: (key, reducer) => {
      if (!key || reducers[key]) {
        return;
      }
      reducers[key] = reducer;
      mountedReducers[key] = true;
      combinedReducer = combineReducers(reducers);
    },
    remove: (key) => {
      if (!key || !reducers[key]) {
        return;
      }
      delete reducers[key];
      mountedReducers[key] = false;
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    }
  };
}

const createReduxStore = (initialState, asyncReducers) => {
  const rootReducers = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    scroll: scrollSaveReducer,
    [rtkApi.reducerPath]: rtkApi.reducer
  };
  const reducerManager = createReducerManager(rootReducers);
  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: true,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api
        }
      }
    }).concat(rtkApi.middleware)
  });
  store.reducerManager = reducerManager;
  return store;
};

const StoreProvider = ({
  children,
  initialState,
  asyncReducers
}) => {
  const store = createReduxStore(
    initialState,
    asyncReducers
    // navigate,
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Provider, { store, children });
};

const {useEffect,useMemo,useState} = await importShared('react');
const ThemeProvider = ({ children, initialTheme }) => {
  const { theme: defaultTheme } = useJsonSettings();
  const [isThemeInited, setThemeInited] = useState(false);
  const [theme, setTheme] = useState(initialTheme || defaultTheme || ThemeEnum.LIGHT);
  useEffect(() => {
    if (!isThemeInited && defaultTheme) {
      setTheme(defaultTheme);
      setThemeInited(true);
    }
  }, [defaultTheme, isThemeInited]);
  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeContext.Provider, { value: defaultProps, children });
};

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof$4(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _toArray(arr) {
  return _arrayWithHoles$1(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableRest$1();
}

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$6(Object(source), !0).forEach(function (key) { _defineProperty$2(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var consoleLogger = {
  type: 'logger',
  log: function log(args) {
    this.output('log', args);
  },
  warn: function warn(args) {
    this.output('warn', args);
  },
  error: function error(args) {
    this.output('error', args);
  },
  output: function output(type, args) {
    if (console && console[type]) console[type].apply(console, args);
  }
};
var Logger = function () {
  function Logger(concreteLogger) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck$2(this, Logger);
    this.init(concreteLogger, options);
  }
  _createClass$2(Logger, [{
    key: "init",
    value: function init(concreteLogger) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.prefix = options.prefix || 'i18next:';
      this.logger = concreteLogger || consoleLogger;
      this.options = options;
      this.debug = options.debug;
    }
  }, {
    key: "setDebug",
    value: function setDebug(bool) {
      this.debug = bool;
    }
  }, {
    key: "log",
    value: function log() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return this.forward(args, 'log', '', true);
    }
  }, {
    key: "warn",
    value: function warn() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return this.forward(args, 'warn', '', true);
    }
  }, {
    key: "error",
    value: function error() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      return this.forward(args, 'error', '');
    }
  }, {
    key: "deprecate",
    value: function deprecate() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
    }
  }, {
    key: "forward",
    value: function forward(args, lvl, prefix, debugOnly) {
      if (debugOnly && !this.debug) return null;
      if (typeof args[0] === 'string') args[0] = "".concat(prefix).concat(this.prefix, " ").concat(args[0]);
      return this.logger[lvl](args);
    }
  }, {
    key: "create",
    value: function create(moduleName) {
      return new Logger(this.logger, _objectSpread$6(_objectSpread$6({}, {
        prefix: "".concat(this.prefix, ":").concat(moduleName, ":")
      }), this.options));
    }
  }, {
    key: "clone",
    value: function clone(options) {
      options = options || this.options;
      options.prefix = options.prefix || this.prefix;
      return new Logger(this.logger, options);
    }
  }]);
  return Logger;
}();
var baseLogger = new Logger();

var EventEmitter = function () {
  function EventEmitter() {
    _classCallCheck$2(this, EventEmitter);
    this.observers = {};
  }
  _createClass$2(EventEmitter, [{
    key: "on",
    value: function on(events, listener) {
      var _this = this;
      events.split(' ').forEach(function (event) {
        _this.observers[event] = _this.observers[event] || [];
        _this.observers[event].push(listener);
      });
      return this;
    }
  }, {
    key: "off",
    value: function off(event, listener) {
      if (!this.observers[event]) return;
      if (!listener) {
        delete this.observers[event];
        return;
      }
      this.observers[event] = this.observers[event].filter(function (l) {
        return l !== listener;
      });
    }
  }, {
    key: "emit",
    value: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      if (this.observers[event]) {
        var cloned = [].concat(this.observers[event]);
        cloned.forEach(function (observer) {
          observer.apply(void 0, args);
        });
      }
      if (this.observers['*']) {
        var _cloned = [].concat(this.observers['*']);
        _cloned.forEach(function (observer) {
          observer.apply(observer, [event].concat(args));
        });
      }
    }
  }]);
  return EventEmitter;
}();

function defer() {
  var res;
  var rej;
  var promise = new Promise(function (resolve, reject) {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
}
function makeString(object) {
  if (object == null) return '';
  return '' + object;
}
function copy(a, s, t) {
  a.forEach(function (m) {
    if (s[m]) t[m] = s[m];
  });
}
function getLastOfPath(object, path, Empty) {
  function cleanKey(key) {
    return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
  }
  function canNotTraverseDeeper() {
    return !object || typeof object === 'string';
  }
  var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');
  while (stack.length > 1) {
    if (canNotTraverseDeeper()) return {};
    var key = cleanKey(stack.shift());
    if (!object[key] && Empty) object[key] = new Empty();
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      object = object[key];
    } else {
      object = {};
    }
  }
  if (canNotTraverseDeeper()) return {};
  return {
    obj: object,
    k: cleanKey(stack.shift())
  };
}
function setPath(object, path, newValue) {
  var _getLastOfPath = getLastOfPath(object, path, Object),
    obj = _getLastOfPath.obj,
    k = _getLastOfPath.k;
  obj[k] = newValue;
}
function pushPath(object, path, newValue, concat) {
  var _getLastOfPath2 = getLastOfPath(object, path, Object),
    obj = _getLastOfPath2.obj,
    k = _getLastOfPath2.k;
  obj[k] = obj[k] || [];
  if (concat) obj[k] = obj[k].concat(newValue);
  if (!concat) obj[k].push(newValue);
}
function getPath(object, path) {
  var _getLastOfPath3 = getLastOfPath(object, path),
    obj = _getLastOfPath3.obj,
    k = _getLastOfPath3.k;
  if (!obj) return undefined;
  return obj[k];
}
function getPathWithDefaults(data, defaultData, key) {
  var value = getPath(data, key);
  if (value !== undefined) {
    return value;
  }
  return getPath(defaultData, key);
}
function deepExtend(target, source, overwrite) {
  for (var prop in source) {
    if (prop !== '__proto__' && prop !== 'constructor') {
      if (prop in target) {
        if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
          if (overwrite) target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }
  return target;
}
function regexEscape(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
var _entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;'
};
function escape(data) {
  if (typeof data === 'string') {
    return data.replace(/[&<>"'\/]/g, function (s) {
      return _entityMap[s];
    });
  }
  return data;
}
var isIE10 = typeof window !== 'undefined' && window.navigator && typeof window.navigator.userAgentData === 'undefined' && window.navigator.userAgent && window.navigator.userAgent.indexOf('MSIE') > -1;
var chars = [' ', ',', '?', '!', ';'];
function looksLikeObjectPath(key, nsSeparator, keySeparator) {
  nsSeparator = nsSeparator || '';
  keySeparator = keySeparator || '';
  var possibleChars = chars.filter(function (c) {
    return nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0;
  });
  if (possibleChars.length === 0) return true;
  var r = new RegExp("(".concat(possibleChars.map(function (c) {
    return c === '?' ? '\\?' : c;
  }).join('|'), ")"));
  var matched = !r.test(key);
  if (!matched) {
    var ki = key.indexOf(keySeparator);
    if (ki > 0 && !r.test(key.substring(0, ki))) {
      matched = true;
    }
  }
  return matched;
}
function deepFind(obj, path) {
  var keySeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
  if (!obj) return undefined;
  if (obj[path]) return obj[path];
  var paths = path.split(keySeparator);
  var current = obj;
  for (var i = 0; i < paths.length; ++i) {
    if (!current) return undefined;
    if (typeof current[paths[i]] === 'string' && i + 1 < paths.length) {
      return undefined;
    }
    if (current[paths[i]] === undefined) {
      var j = 2;
      var p = paths.slice(i, i + j).join(keySeparator);
      var mix = current[p];
      while (mix === undefined && paths.length > i + j) {
        j++;
        p = paths.slice(i, i + j).join(keySeparator);
        mix = current[p];
      }
      if (mix === undefined) return undefined;
      if (mix === null) return null;
      if (path.endsWith(p)) {
        if (typeof mix === 'string') return mix;
        if (p && typeof mix[p] === 'string') return mix[p];
      }
      var joinedPath = paths.slice(i + j).join(keySeparator);
      if (joinedPath) return deepFind(mix, joinedPath, keySeparator);
      return undefined;
    }
    current = current[paths[i]];
  }
  return current;
}

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$5(Object(source), !0).forEach(function (key) { _defineProperty$2(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ResourceStore = function (_EventEmitter) {
  _inherits(ResourceStore, _EventEmitter);
  var _super = _createSuper$3(ResourceStore);
  function ResourceStore(data) {
    var _this;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      ns: ['translation'],
      defaultNS: 'translation'
    };
    _classCallCheck$2(this, ResourceStore);
    _this = _super.call(this);
    if (isIE10) {
      EventEmitter.call(_assertThisInitialized(_this));
    }
    _this.data = data || {};
    _this.options = options;
    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }
    if (_this.options.ignoreJSONStructure === undefined) {
      _this.options.ignoreJSONStructure = true;
    }
    return _this;
  }
  _createClass$2(ResourceStore, [{
    key: "addNamespaces",
    value: function addNamespaces(ns) {
      if (this.options.ns.indexOf(ns) < 0) {
        this.options.ns.push(ns);
      }
    }
  }, {
    key: "removeNamespaces",
    value: function removeNamespaces(ns) {
      var index = this.options.ns.indexOf(ns);
      if (index > -1) {
        this.options.ns.splice(index, 1);
      }
    }
  }, {
    key: "getResource",
    value: function getResource(lng, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var ignoreJSONStructure = options.ignoreJSONStructure !== undefined ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
      var path = [lng, ns];
      if (key && typeof key !== 'string') path = path.concat(key);
      if (key && typeof key === 'string') path = path.concat(keySeparator ? key.split(keySeparator) : key);
      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
      }
      var result = getPath(this.data, path);
      if (result || !ignoreJSONStructure || typeof key !== 'string') return result;
      return deepFind(this.data && this.data[lng] && this.data[lng][ns], key, keySeparator);
    }
  }, {
    key: "addResource",
    value: function addResource(lng, ns, key, value) {
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
        silent: false
      };
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var path = [lng, ns];
      if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);
      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
        value = ns;
        ns = path[1];
      }
      this.addNamespaces(ns);
      setPath(this.data, path, value);
      if (!options.silent) this.emit('added', lng, ns, key, value);
    }
  }, {
    key: "addResources",
    value: function addResources(lng, ns, resources) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
        silent: false
      };
      for (var m in resources) {
        if (typeof resources[m] === 'string' || Object.prototype.toString.apply(resources[m]) === '[object Array]') this.addResource(lng, ns, m, resources[m], {
          silent: true
        });
      }
      if (!options.silent) this.emit('added', lng, ns, resources);
    }
  }, {
    key: "addResourceBundle",
    value: function addResourceBundle(lng, ns, resources, deep, overwrite) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
        silent: false
      };
      var path = [lng, ns];
      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
        deep = resources;
        resources = ns;
        ns = path[1];
      }
      this.addNamespaces(ns);
      var pack = getPath(this.data, path) || {};
      if (deep) {
        deepExtend(pack, resources, overwrite);
      } else {
        pack = _objectSpread$5(_objectSpread$5({}, pack), resources);
      }
      setPath(this.data, path, pack);
      if (!options.silent) this.emit('added', lng, ns, resources);
    }
  }, {
    key: "removeResourceBundle",
    value: function removeResourceBundle(lng, ns) {
      if (this.hasResourceBundle(lng, ns)) {
        delete this.data[lng][ns];
      }
      this.removeNamespaces(ns);
      this.emit('removed', lng, ns);
    }
  }, {
    key: "hasResourceBundle",
    value: function hasResourceBundle(lng, ns) {
      return this.getResource(lng, ns) !== undefined;
    }
  }, {
    key: "getResourceBundle",
    value: function getResourceBundle(lng, ns) {
      if (!ns) ns = this.options.defaultNS;
      if (this.options.compatibilityAPI === 'v1') return _objectSpread$5(_objectSpread$5({}, {}), this.getResource(lng, ns));
      return this.getResource(lng, ns);
    }
  }, {
    key: "getDataByLanguage",
    value: function getDataByLanguage(lng) {
      return this.data[lng];
    }
  }, {
    key: "hasLanguageSomeTranslations",
    value: function hasLanguageSomeTranslations(lng) {
      var data = this.getDataByLanguage(lng);
      var n = data && Object.keys(data) || [];
      return !!n.find(function (v) {
        return data[v] && Object.keys(data[v]).length > 0;
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.data;
    }
  }]);
  return ResourceStore;
}(EventEmitter);

var postProcessor = {
  processors: {},
  addPostProcessor: function addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle: function handle(processors, value, key, options, translator) {
    var _this = this;
    processors.forEach(function (processor) {
      if (_this.processors[processor]) value = _this.processors[processor].process(value, key, options, translator);
    });
    return value;
  }
};

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$4(Object(source), !0).forEach(function (key) { _defineProperty$2(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var checkedLoadedFor = {};
var Translator = function (_EventEmitter) {
  _inherits(Translator, _EventEmitter);
  var _super = _createSuper$2(Translator);
  function Translator(services) {
    var _this;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck$2(this, Translator);
    _this = _super.call(this);
    if (isIE10) {
      EventEmitter.call(_assertThisInitialized(_this));
    }
    copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'], services, _assertThisInitialized(_this));
    _this.options = options;
    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }
    _this.logger = baseLogger.create('translator');
    return _this;
  }
  _createClass$2(Translator, [{
    key: "changeLanguage",
    value: function changeLanguage(lng) {
      if (lng) this.language = lng;
    }
  }, {
    key: "exists",
    value: function exists(key) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        interpolation: {}
      };
      if (key === undefined || key === null) {
        return false;
      }
      var resolved = this.resolve(key, options);
      return resolved && resolved.res !== undefined;
    }
  }, {
    key: "extractFromKey",
    value: function extractFromKey(key, options) {
      var nsSeparator = options.nsSeparator !== undefined ? options.nsSeparator : this.options.nsSeparator;
      if (nsSeparator === undefined) nsSeparator = ':';
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var namespaces = options.ns || this.options.defaultNS || [];
      var wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
      var seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
      if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
        var m = key.match(this.interpolator.nestingRegexp);
        if (m && m.length > 0) {
          return {
            key: key,
            namespaces: namespaces
          };
        }
        var parts = key.split(nsSeparator);
        if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
        key = parts.join(keySeparator);
      }
      if (typeof namespaces === 'string') namespaces = [namespaces];
      return {
        key: key,
        namespaces: namespaces
      };
    }
  }, {
    key: "translate",
    value: function translate(keys, options, lastKey) {
      var _this2 = this;
      if (_typeof$4(options) !== 'object' && this.options.overloadTranslationOptionHandler) {
        options = this.options.overloadTranslationOptionHandler(arguments);
      }
      if (_typeof$4(options) === 'object') options = _objectSpread$4({}, options);
      if (!options) options = {};
      if (keys === undefined || keys === null) return '';
      if (!Array.isArray(keys)) keys = [String(keys)];
      var returnDetails = options.returnDetails !== undefined ? options.returnDetails : this.options.returnDetails;
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var _this$extractFromKey = this.extractFromKey(keys[keys.length - 1], options),
        key = _this$extractFromKey.key,
        namespaces = _this$extractFromKey.namespaces;
      var namespace = namespaces[namespaces.length - 1];
      var lng = options.lng || this.language;
      var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
      if (lng && lng.toLowerCase() === 'cimode') {
        if (appendNamespaceToCIMode) {
          var nsSeparator = options.nsSeparator || this.options.nsSeparator;
          if (returnDetails) {
            return {
              res: "".concat(namespace).concat(nsSeparator).concat(key),
              usedKey: key,
              exactUsedKey: key,
              usedLng: lng,
              usedNS: namespace
            };
          }
          return "".concat(namespace).concat(nsSeparator).concat(key);
        }
        if (returnDetails) {
          return {
            res: key,
            usedKey: key,
            exactUsedKey: key,
            usedLng: lng,
            usedNS: namespace
          };
        }
        return key;
      }
      var resolved = this.resolve(keys, options);
      var res = resolved && resolved.res;
      var resUsedKey = resolved && resolved.usedKey || key;
      var resExactUsedKey = resolved && resolved.exactUsedKey || key;
      var resType = Object.prototype.toString.apply(res);
      var noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
      var joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;
      var handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
      var handleAsObject = typeof res !== 'string' && typeof res !== 'boolean' && typeof res !== 'number';
      if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === 'string' && resType === '[object Array]')) {
        if (!options.returnObjects && !this.options.returnObjects) {
          if (!this.options.returnedObjectHandler) {
            this.logger.warn('accessing an object - but returnObjects options is not enabled!');
          }
          var r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, _objectSpread$4(_objectSpread$4({}, options), {}, {
            ns: namespaces
          })) : "key '".concat(key, " (").concat(this.language, ")' returned an object instead of string.");
          if (returnDetails) {
            resolved.res = r;
            return resolved;
          }
          return r;
        }
        if (keySeparator) {
          var resTypeIsArray = resType === '[object Array]';
          var copy = resTypeIsArray ? [] : {};
          var newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
          for (var m in res) {
            if (Object.prototype.hasOwnProperty.call(res, m)) {
              var deepKey = "".concat(newKeyToUse).concat(keySeparator).concat(m);
              copy[m] = this.translate(deepKey, _objectSpread$4(_objectSpread$4({}, options), {
                joinArrays: false,
                ns: namespaces
              }));
              if (copy[m] === deepKey) copy[m] = res[m];
            }
          }
          res = copy;
        }
      } else if (handleAsObjectInI18nFormat && typeof joinArrays === 'string' && resType === '[object Array]') {
        res = res.join(joinArrays);
        if (res) res = this.extendTranslation(res, keys, options, lastKey);
      } else {
        var usedDefault = false;
        var usedKey = false;
        var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
        var hasDefaultValue = Translator.hasDefaultValue(options);
        var defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : '';
        var defaultValue = options["defaultValue".concat(defaultValueSuffix)] || options.defaultValue;
        if (!this.isValidLookup(res) && hasDefaultValue) {
          usedDefault = true;
          res = defaultValue;
        }
        if (!this.isValidLookup(res)) {
          usedKey = true;
          res = key;
        }
        var missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
        var resForMissing = missingKeyNoValueFallbackToKey && usedKey ? undefined : res;
        var updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
        if (usedKey || usedDefault || updateMissing) {
          this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? defaultValue : res);
          if (keySeparator) {
            var fk = this.resolve(key, _objectSpread$4(_objectSpread$4({}, options), {}, {
              keySeparator: false
            }));
            if (fk && fk.res) this.logger.warn('Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.');
          }
          var lngs = [];
          var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
          if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
            for (var i = 0; i < fallbackLngs.length; i++) {
              lngs.push(fallbackLngs[i]);
            }
          } else if (this.options.saveMissingTo === 'all') {
            lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
          } else {
            lngs.push(options.lng || this.language);
          }
          var send = function send(l, k, specificDefaultValue) {
            var defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
            if (_this2.options.missingKeyHandler) {
              _this2.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, options);
            } else if (_this2.backendConnector && _this2.backendConnector.saveMissing) {
              _this2.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, options);
            }
            _this2.emit('missingKey', l, namespace, k, res);
          };
          if (this.options.saveMissing) {
            if (this.options.saveMissingPlurals && needsPluralHandling) {
              lngs.forEach(function (language) {
                _this2.pluralResolver.getSuffixes(language, options).forEach(function (suffix) {
                  send([language], key + suffix, options["defaultValue".concat(suffix)] || defaultValue);
                });
              });
            } else {
              send(lngs, key, defaultValue);
            }
          }
        }
        res = this.extendTranslation(res, keys, options, resolved, lastKey);
        if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = "".concat(namespace, ":").concat(key);
        if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
          if (this.options.compatibilityAPI !== 'v1') {
            res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(namespace, ":").concat(key) : key, usedDefault ? res : undefined);
          } else {
            res = this.options.parseMissingKeyHandler(res);
          }
        }
      }
      if (returnDetails) {
        resolved.res = res;
        return resolved;
      }
      return res;
    }
  }, {
    key: "extendTranslation",
    value: function extendTranslation(res, key, options, resolved, lastKey) {
      var _this3 = this;
      if (this.i18nFormat && this.i18nFormat.parse) {
        res = this.i18nFormat.parse(res, _objectSpread$4(_objectSpread$4({}, this.options.interpolation.defaultVariables), options), resolved.usedLng, resolved.usedNS, resolved.usedKey, {
          resolved: resolved
        });
      } else if (!options.skipInterpolation) {
        if (options.interpolation) this.interpolator.init(_objectSpread$4(_objectSpread$4({}, options), {
          interpolation: _objectSpread$4(_objectSpread$4({}, this.options.interpolation), options.interpolation)
        }));
        var skipOnVariables = typeof res === 'string' && (options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
        var nestBef;
        if (skipOnVariables) {
          var nb = res.match(this.interpolator.nestingRegexp);
          nestBef = nb && nb.length;
        }
        var data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
        if (this.options.interpolation.defaultVariables) data = _objectSpread$4(_objectSpread$4({}, this.options.interpolation.defaultVariables), data);
        res = this.interpolator.interpolate(res, data, options.lng || this.language, options);
        if (skipOnVariables) {
          var na = res.match(this.interpolator.nestingRegexp);
          var nestAft = na && na.length;
          if (nestBef < nestAft) options.nest = false;
        }
        if (!options.lng && this.options.compatibilityAPI !== 'v1' && resolved && resolved.res) options.lng = resolved.usedLng;
        if (options.nest !== false) res = this.interpolator.nest(res, function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          if (lastKey && lastKey[0] === args[0] && !options.context) {
            _this3.logger.warn("It seems you are nesting recursively key: ".concat(args[0], " in key: ").concat(key[0]));
            return null;
          }
          return _this3.translate.apply(_this3, args.concat([key]));
        }, options);
        if (options.interpolation) this.interpolator.reset();
      }
      var postProcess = options.postProcess || this.options.postProcess;
      var postProcessorNames = typeof postProcess === 'string' ? [postProcess] : postProcess;
      if (res !== undefined && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
        res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? _objectSpread$4({
          i18nResolved: resolved
        }, options) : options, this);
      }
      return res;
    }
  }, {
    key: "resolve",
    value: function resolve(keys) {
      var _this4 = this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var found;
      var usedKey;
      var exactUsedKey;
      var usedLng;
      var usedNS;
      if (typeof keys === 'string') keys = [keys];
      keys.forEach(function (k) {
        if (_this4.isValidLookup(found)) return;
        var extracted = _this4.extractFromKey(k, options);
        var key = extracted.key;
        usedKey = key;
        var namespaces = extracted.namespaces;
        if (_this4.options.fallbackNS) namespaces = namespaces.concat(_this4.options.fallbackNS);
        var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
        var needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && _this4.pluralResolver.shouldUseIntlApi();
        var needsContextHandling = options.context !== undefined && (typeof options.context === 'string' || typeof options.context === 'number') && options.context !== '';
        var codes = options.lngs ? options.lngs : _this4.languageUtils.toResolveHierarchy(options.lng || _this4.language, options.fallbackLng);
        namespaces.forEach(function (ns) {
          if (_this4.isValidLookup(found)) return;
          usedNS = ns;
          if (!checkedLoadedFor["".concat(codes[0], "-").concat(ns)] && _this4.utils && _this4.utils.hasLoadedNamespace && !_this4.utils.hasLoadedNamespace(usedNS)) {
            checkedLoadedFor["".concat(codes[0], "-").concat(ns)] = true;
            _this4.logger.warn("key \"".concat(usedKey, "\" for languages \"").concat(codes.join(', '), "\" won't get resolved as namespace \"").concat(usedNS, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
          }
          codes.forEach(function (code) {
            if (_this4.isValidLookup(found)) return;
            usedLng = code;
            var finalKeys = [key];
            if (_this4.i18nFormat && _this4.i18nFormat.addLookupKeys) {
              _this4.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
            } else {
              var pluralSuffix;
              if (needsPluralHandling) pluralSuffix = _this4.pluralResolver.getSuffix(code, options.count, options);
              var zeroSuffix = "".concat(_this4.options.pluralSeparator, "zero");
              if (needsPluralHandling) {
                finalKeys.push(key + pluralSuffix);
                if (needsZeroSuffixLookup) {
                  finalKeys.push(key + zeroSuffix);
                }
              }
              if (needsContextHandling) {
                var contextKey = "".concat(key).concat(_this4.options.contextSeparator).concat(options.context);
                finalKeys.push(contextKey);
                if (needsPluralHandling) {
                  finalKeys.push(contextKey + pluralSuffix);
                  if (needsZeroSuffixLookup) {
                    finalKeys.push(contextKey + zeroSuffix);
                  }
                }
              }
            }
            var possibleKey;
            while (possibleKey = finalKeys.pop()) {
              if (!_this4.isValidLookup(found)) {
                exactUsedKey = possibleKey;
                found = _this4.getResource(code, ns, possibleKey, options);
              }
            }
          });
        });
      });
      return {
        res: found,
        usedKey: usedKey,
        exactUsedKey: exactUsedKey,
        usedLng: usedLng,
        usedNS: usedNS
      };
    }
  }, {
    key: "isValidLookup",
    value: function isValidLookup(res) {
      return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
    }
  }, {
    key: "getResource",
    value: function getResource(code, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      if (this.i18nFormat && this.i18nFormat.getResource) return this.i18nFormat.getResource(code, ns, key, options);
      return this.resourceStore.getResource(code, ns, key, options);
    }
  }], [{
    key: "hasDefaultValue",
    value: function hasDefaultValue(options) {
      var prefix = 'defaultValue';
      for (var option in options) {
        if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && undefined !== options[option]) {
          return true;
        }
      }
      return false;
    }
  }]);
  return Translator;
}(EventEmitter);

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
var LanguageUtil = function () {
  function LanguageUtil(options) {
    _classCallCheck$2(this, LanguageUtil);
    this.options = options;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger.create('languageUtils');
  }
  _createClass$2(LanguageUtil, [{
    key: "getScriptPartFromCode",
    value: function getScriptPartFromCode(code) {
      if (!code || code.indexOf('-') < 0) return null;
      var p = code.split('-');
      if (p.length === 2) return null;
      p.pop();
      if (p[p.length - 1].toLowerCase() === 'x') return null;
      return this.formatLanguageCode(p.join('-'));
    }
  }, {
    key: "getLanguagePartFromCode",
    value: function getLanguagePartFromCode(code) {
      if (!code || code.indexOf('-') < 0) return code;
      var p = code.split('-');
      return this.formatLanguageCode(p[0]);
    }
  }, {
    key: "formatLanguageCode",
    value: function formatLanguageCode(code) {
      if (typeof code === 'string' && code.indexOf('-') > -1) {
        var specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
        var p = code.split('-');
        if (this.options.lowerCaseLng) {
          p = p.map(function (part) {
            return part.toLowerCase();
          });
        } else if (p.length === 2) {
          p[0] = p[0].toLowerCase();
          p[1] = p[1].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
        } else if (p.length === 3) {
          p[0] = p[0].toLowerCase();
          if (p[1].length === 2) p[1] = p[1].toUpperCase();
          if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
          if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
        }
        return p.join('-');
      }
      return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
    }
  }, {
    key: "isSupportedCode",
    value: function isSupportedCode(code) {
      if (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) {
        code = this.getLanguagePartFromCode(code);
      }
      return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
    }
  }, {
    key: "getBestMatchFromCodes",
    value: function getBestMatchFromCodes(codes) {
      var _this = this;
      if (!codes) return null;
      var found;
      codes.forEach(function (code) {
        if (found) return;
        var cleanedLng = _this.formatLanguageCode(code);
        if (!_this.options.supportedLngs || _this.isSupportedCode(cleanedLng)) found = cleanedLng;
      });
      if (!found && this.options.supportedLngs) {
        codes.forEach(function (code) {
          if (found) return;
          var lngOnly = _this.getLanguagePartFromCode(code);
          if (_this.isSupportedCode(lngOnly)) return found = lngOnly;
          found = _this.options.supportedLngs.find(function (supportedLng) {
            if (supportedLng === lngOnly) return supportedLng;
            if (supportedLng.indexOf('-') < 0 && lngOnly.indexOf('-') < 0) return;
            if (supportedLng.indexOf(lngOnly) === 0) return supportedLng;
          });
        });
      }
      if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
      return found;
    }
  }, {
    key: "getFallbackCodes",
    value: function getFallbackCodes(fallbacks, code) {
      if (!fallbacks) return [];
      if (typeof fallbacks === 'function') fallbacks = fallbacks(code);
      if (typeof fallbacks === 'string') fallbacks = [fallbacks];
      if (Object.prototype.toString.apply(fallbacks) === '[object Array]') return fallbacks;
      if (!code) return fallbacks["default"] || [];
      var found = fallbacks[code];
      if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
      if (!found) found = fallbacks[this.formatLanguageCode(code)];
      if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
      if (!found) found = fallbacks["default"];
      return found || [];
    }
  }, {
    key: "toResolveHierarchy",
    value: function toResolveHierarchy(code, fallbackCode) {
      var _this2 = this;
      var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
      var codes = [];
      var addCode = function addCode(c) {
        if (!c) return;
        if (_this2.isSupportedCode(c)) {
          codes.push(c);
        } else {
          _this2.logger.warn("rejecting language code not found in supportedLngs: ".concat(c));
        }
      };
      if (typeof code === 'string' && code.indexOf('-') > -1) {
        if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
        if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
        if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
      } else if (typeof code === 'string') {
        addCode(this.formatLanguageCode(code));
      }
      fallbackCodes.forEach(function (fc) {
        if (codes.indexOf(fc) < 0) addCode(_this2.formatLanguageCode(fc));
      });
      return codes;
    }
  }]);
  return LanguageUtil;
}();

var sets = [{
  lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'pt', 'pt-BR', 'tg', 'tl', 'ti', 'tr', 'uz', 'wa'],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'hi', 'hu', 'hy', 'ia', 'it', 'kk', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt-PT', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ['ay', 'bo', 'cgg', 'fa', 'ht', 'id', 'ja', 'jbo', 'ka', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'],
  nr: [1],
  fc: 3
}, {
  lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ['ar'],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ['cs', 'sk'],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ['csb', 'pl'],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ['cy'],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ['fr'],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ['ga'],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ['gd'],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ['is'],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ['jv'],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ['kw'],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ['lt'],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ['lv'],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ['mk'],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ['mnk'],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ['mt'],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ['or'],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ['ro'],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ['sl'],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ['he', 'iw'],
  nr: [1, 2, 20, 21],
  fc: 22
}];
var _rulesPluralsTypes = {
  1: function _(n) {
    return Number(n > 1);
  },
  2: function _(n) {
    return Number(n != 1);
  },
  3: function _(n) {
    return 0;
  },
  4: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  5: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
  },
  6: function _(n) {
    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
  },
  7: function _(n) {
    return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  8: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
  },
  9: function _(n) {
    return Number(n >= 2);
  },
  10: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
  },
  11: function _(n) {
    return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
  },
  12: function _(n) {
    return Number(n % 10 != 1 || n % 100 == 11);
  },
  13: function _(n) {
    return Number(n !== 0);
  },
  14: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
  },
  15: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  16: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
  },
  17: function _(n) {
    return Number(n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1);
  },
  18: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
  },
  19: function _(n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
  },
  20: function _(n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
  },
  21: function _(n) {
    return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
  },
  22: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
  }
};
var deprecatedJsonVersions = ['v1', 'v2', 'v3'];
var suffixesOrder = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function createRules() {
  var rules = {};
  sets.forEach(function (set) {
    set.lngs.forEach(function (l) {
      rules[l] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
}
var PluralResolver = function () {
  function PluralResolver(languageUtils) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck$2(this, PluralResolver);
    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create('pluralResolver');
    if ((!this.options.compatibilityJSON || this.options.compatibilityJSON === 'v4') && (typeof Intl === 'undefined' || !Intl.PluralRules)) {
      this.options.compatibilityJSON = 'v3';
      this.logger.error('Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.');
    }
    this.rules = createRules();
  }
  _createClass$2(PluralResolver, [{
    key: "addRule",
    value: function addRule(lng, obj) {
      this.rules[lng] = obj;
    }
  }, {
    key: "getRule",
    value: function getRule(code) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (this.shouldUseIntlApi()) {
        try {
          return new Intl.PluralRules(code, {
            type: options.ordinal ? 'ordinal' : 'cardinal'
          });
        } catch (_unused) {
          return;
        }
      }
      return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
    }
  }, {
    key: "needsPlural",
    value: function needsPlural(code) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var rule = this.getRule(code, options);
      if (this.shouldUseIntlApi()) {
        return rule && rule.resolvedOptions().pluralCategories.length > 1;
      }
      return rule && rule.numbers.length > 1;
    }
  }, {
    key: "getPluralFormsOfKey",
    value: function getPluralFormsOfKey(code, key) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.getSuffixes(code, options).map(function (suffix) {
        return "".concat(key).concat(suffix);
      });
    }
  }, {
    key: "getSuffixes",
    value: function getSuffixes(code) {
      var _this = this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var rule = this.getRule(code, options);
      if (!rule) {
        return [];
      }
      if (this.shouldUseIntlApi()) {
        return rule.resolvedOptions().pluralCategories.sort(function (pluralCategory1, pluralCategory2) {
          return suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2];
        }).map(function (pluralCategory) {
          return "".concat(_this.options.prepend).concat(pluralCategory);
        });
      }
      return rule.numbers.map(function (number) {
        return _this.getSuffix(code, number, options);
      });
    }
  }, {
    key: "getSuffix",
    value: function getSuffix(code, count) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var rule = this.getRule(code, options);
      if (rule) {
        if (this.shouldUseIntlApi()) {
          return "".concat(this.options.prepend).concat(rule.select(count));
        }
        return this.getSuffixRetroCompatible(rule, count);
      }
      this.logger.warn("no plural rule found for: ".concat(code));
      return '';
    }
  }, {
    key: "getSuffixRetroCompatible",
    value: function getSuffixRetroCompatible(rule, count) {
      var _this2 = this;
      var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
      var suffix = rule.numbers[idx];
      if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
        if (suffix === 2) {
          suffix = 'plural';
        } else if (suffix === 1) {
          suffix = '';
        }
      }
      var returnSuffix = function returnSuffix() {
        return _this2.options.prepend && suffix.toString() ? _this2.options.prepend + suffix.toString() : suffix.toString();
      };
      if (this.options.compatibilityJSON === 'v1') {
        if (suffix === 1) return '';
        if (typeof suffix === 'number') return "_plural_".concat(suffix.toString());
        return returnSuffix();
      } else if (this.options.compatibilityJSON === 'v2') {
        return returnSuffix();
      } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
        return returnSuffix();
      }
      return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
    }
  }, {
    key: "shouldUseIntlApi",
    value: function shouldUseIntlApi() {
      return !deprecatedJsonVersions.includes(this.options.compatibilityJSON);
    }
  }]);
  return PluralResolver;
}();

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { _defineProperty$2(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function deepFindWithDefaults(data, defaultData, key) {
  var keySeparator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.';
  var ignoreJSONStructure = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  var path = getPathWithDefaults(data, defaultData, key);
  if (!path && ignoreJSONStructure && typeof key === 'string') {
    path = deepFind(data, key, keySeparator);
    if (path === undefined) path = deepFind(defaultData, key, keySeparator);
  }
  return path;
}
var Interpolator = function () {
  function Interpolator() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck$2(this, Interpolator);
    this.logger = baseLogger.create('interpolator');
    this.options = options;
    this.format = options.interpolation && options.interpolation.format || function (value) {
      return value;
    };
    this.init(options);
  }
  _createClass$2(Interpolator, [{
    key: "init",
    value: function init() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!options.interpolation) options.interpolation = {
        escapeValue: true
      };
      var iOpts = options.interpolation;
      this.escape = iOpts.escape !== undefined ? iOpts.escape : escape;
      this.escapeValue = iOpts.escapeValue !== undefined ? iOpts.escapeValue : true;
      this.useRawValueToEscape = iOpts.useRawValueToEscape !== undefined ? iOpts.useRawValueToEscape : false;
      this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || '{{';
      this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || '}}';
      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
      this.unescapePrefix = iOpts.unescapeSuffix ? '' : iOpts.unescapePrefix || '-';
      this.unescapeSuffix = this.unescapePrefix ? '' : iOpts.unescapeSuffix || '';
      this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape('$t(');
      this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(')');
      this.nestingOptionsSeparator = iOpts.nestingOptionsSeparator ? iOpts.nestingOptionsSeparator : iOpts.nestingOptionsSeparator || ',';
      this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1000;
      this.alwaysFormat = iOpts.alwaysFormat !== undefined ? iOpts.alwaysFormat : false;
      this.resetRegExp();
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this.options) this.init(this.options);
    }
  }, {
    key: "resetRegExp",
    value: function resetRegExp() {
      var regexpStr = "".concat(this.prefix, "(.+?)").concat(this.suffix);
      this.regexp = new RegExp(regexpStr, 'g');
      var regexpUnescapeStr = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
      this.regexpUnescape = new RegExp(regexpUnescapeStr, 'g');
      var nestingRegexpStr = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
      this.nestingRegexp = new RegExp(nestingRegexpStr, 'g');
    }
  }, {
    key: "interpolate",
    value: function interpolate(str, data, lng, options) {
      var _this = this;
      var match;
      var value;
      var replaces;
      var defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
      function regexSafe(val) {
        return val.replace(/\$/g, '$$$$');
      }
      var handleFormat = function handleFormat(key) {
        if (key.indexOf(_this.formatSeparator) < 0) {
          var path = deepFindWithDefaults(data, defaultData, key, _this.options.keySeparator, _this.options.ignoreJSONStructure);
          return _this.alwaysFormat ? _this.format(path, undefined, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
            interpolationkey: key
          })) : path;
        }
        var p = key.split(_this.formatSeparator);
        var k = p.shift().trim();
        var f = p.join(_this.formatSeparator).trim();
        return _this.format(deepFindWithDefaults(data, defaultData, k, _this.options.keySeparator, _this.options.ignoreJSONStructure), f, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
          interpolationkey: k
        }));
      };
      this.resetRegExp();
      var missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
      var skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
      var todos = [{
        regex: this.regexpUnescape,
        safeValue: function safeValue(val) {
          return regexSafe(val);
        }
      }, {
        regex: this.regexp,
        safeValue: function safeValue(val) {
          return _this.escapeValue ? regexSafe(_this.escape(val)) : regexSafe(val);
        }
      }];
      todos.forEach(function (todo) {
        replaces = 0;
        while (match = todo.regex.exec(str)) {
          var matchedVar = match[1].trim();
          value = handleFormat(matchedVar);
          if (value === undefined) {
            if (typeof missingInterpolationHandler === 'function') {
              var temp = missingInterpolationHandler(str, match, options);
              value = typeof temp === 'string' ? temp : '';
            } else if (options && Object.prototype.hasOwnProperty.call(options, matchedVar)) {
              value = '';
            } else if (skipOnVariables) {
              value = match[0];
              continue;
            } else {
              _this.logger.warn("missed to pass in variable ".concat(matchedVar, " for interpolating ").concat(str));
              value = '';
            }
          } else if (typeof value !== 'string' && !_this.useRawValueToEscape) {
            value = makeString(value);
          }
          var safeValue = todo.safeValue(value);
          str = str.replace(match[0], safeValue);
          if (skipOnVariables) {
            todo.regex.lastIndex += value.length;
            todo.regex.lastIndex -= match[0].length;
          } else {
            todo.regex.lastIndex = 0;
          }
          replaces++;
          if (replaces >= _this.maxReplaces) {
            break;
          }
        }
      });
      return str;
    }
  }, {
    key: "nest",
    value: function nest(str, fc) {
      var _this2 = this;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var match;
      var value;
      var clonedOptions;
      function handleHasOptions(key, inheritedOptions) {
        var sep = this.nestingOptionsSeparator;
        if (key.indexOf(sep) < 0) return key;
        var c = key.split(new RegExp("".concat(sep, "[ ]*{")));
        var optionsString = "{".concat(c[1]);
        key = c[0];
        optionsString = this.interpolate(optionsString, clonedOptions);
        var matchedSingleQuotes = optionsString.match(/'/g);
        var matchedDoubleQuotes = optionsString.match(/"/g);
        if (matchedSingleQuotes && matchedSingleQuotes.length % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
          optionsString = optionsString.replace(/'/g, '"');
        }
        try {
          clonedOptions = JSON.parse(optionsString);
          if (inheritedOptions) clonedOptions = _objectSpread$3(_objectSpread$3({}, inheritedOptions), clonedOptions);
        } catch (e) {
          this.logger.warn("failed parsing options string in nesting for key ".concat(key), e);
          return "".concat(key).concat(sep).concat(optionsString);
        }
        delete clonedOptions.defaultValue;
        return key;
      }
      while (match = this.nestingRegexp.exec(str)) {
        var formatters = [];
        clonedOptions = _objectSpread$3({}, options);
        clonedOptions = clonedOptions.replace && typeof clonedOptions.replace !== 'string' ? clonedOptions.replace : clonedOptions;
        clonedOptions.applyPostProcessor = false;
        delete clonedOptions.defaultValue;
        var doReduce = false;
        if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
          var r = match[1].split(this.formatSeparator).map(function (elem) {
            return elem.trim();
          });
          match[1] = r.shift();
          formatters = r;
          doReduce = true;
        }
        value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
        if (value && match[0] === str && typeof value !== 'string') return value;
        if (typeof value !== 'string') value = makeString(value);
        if (!value) {
          this.logger.warn("missed to resolve ".concat(match[1], " for nesting ").concat(str));
          value = '';
        }
        if (doReduce) {
          value = formatters.reduce(function (v, f) {
            return _this2.format(v, f, options.lng, _objectSpread$3(_objectSpread$3({}, options), {}, {
              interpolationkey: match[1].trim()
            }));
          }, value.trim());
        }
        str = str.replace(match[0], value);
        this.regexp.lastIndex = 0;
      }
      return str;
    }
  }]);
  return Interpolator;
}();

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { _defineProperty$2(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function parseFormatStr(formatStr) {
  var formatName = formatStr.toLowerCase().trim();
  var formatOptions = {};
  if (formatStr.indexOf('(') > -1) {
    var p = formatStr.split('(');
    formatName = p[0].toLowerCase().trim();
    var optStr = p[1].substring(0, p[1].length - 1);
    if (formatName === 'currency' && optStr.indexOf(':') < 0) {
      if (!formatOptions.currency) formatOptions.currency = optStr.trim();
    } else if (formatName === 'relativetime' && optStr.indexOf(':') < 0) {
      if (!formatOptions.range) formatOptions.range = optStr.trim();
    } else {
      var opts = optStr.split(';');
      opts.forEach(function (opt) {
        if (!opt) return;
        var _opt$split = opt.split(':'),
          _opt$split2 = _toArray(_opt$split),
          key = _opt$split2[0],
          rest = _opt$split2.slice(1);
        var val = rest.join(':').trim().replace(/^'+|'+$/g, '');
        if (!formatOptions[key.trim()]) formatOptions[key.trim()] = val;
        if (val === 'false') formatOptions[key.trim()] = false;
        if (val === 'true') formatOptions[key.trim()] = true;
        if (!isNaN(val)) formatOptions[key.trim()] = parseInt(val, 10);
      });
    }
  }
  return {
    formatName: formatName,
    formatOptions: formatOptions
  };
}
function createCachedFormatter(fn) {
  var cache = {};
  return function invokeFormatter(val, lng, options) {
    var key = lng + JSON.stringify(options);
    var formatter = cache[key];
    if (!formatter) {
      formatter = fn(lng, options);
      cache[key] = formatter;
    }
    return formatter(val);
  };
}
var Formatter = function () {
  function Formatter() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck$2(this, Formatter);
    this.logger = baseLogger.create('formatter');
    this.options = options;
    this.formats = {
      number: createCachedFormatter(function (lng, opt) {
        var formatter = new Intl.NumberFormat(lng, _objectSpread$2({}, opt));
        return function (val) {
          return formatter.format(val);
        };
      }),
      currency: createCachedFormatter(function (lng, opt) {
        var formatter = new Intl.NumberFormat(lng, _objectSpread$2(_objectSpread$2({}, opt), {}, {
          style: 'currency'
        }));
        return function (val) {
          return formatter.format(val);
        };
      }),
      datetime: createCachedFormatter(function (lng, opt) {
        var formatter = new Intl.DateTimeFormat(lng, _objectSpread$2({}, opt));
        return function (val) {
          return formatter.format(val);
        };
      }),
      relativetime: createCachedFormatter(function (lng, opt) {
        var formatter = new Intl.RelativeTimeFormat(lng, _objectSpread$2({}, opt));
        return function (val) {
          return formatter.format(val, opt.range || 'day');
        };
      }),
      list: createCachedFormatter(function (lng, opt) {
        var formatter = new Intl.ListFormat(lng, _objectSpread$2({}, opt));
        return function (val) {
          return formatter.format(val);
        };
      })
    };
    this.init(options);
  }
  _createClass$2(Formatter, [{
    key: "init",
    value: function init(services) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        interpolation: {}
      };
      var iOpts = options.interpolation;
      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
    }
  }, {
    key: "add",
    value: function add(name, fc) {
      this.formats[name.toLowerCase().trim()] = fc;
    }
  }, {
    key: "addCached",
    value: function addCached(name, fc) {
      this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
    }
  }, {
    key: "format",
    value: function format(value, _format, lng) {
      var _this = this;
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var formats = _format.split(this.formatSeparator);
      var result = formats.reduce(function (mem, f) {
        var _parseFormatStr = parseFormatStr(f),
          formatName = _parseFormatStr.formatName,
          formatOptions = _parseFormatStr.formatOptions;
        if (_this.formats[formatName]) {
          var formatted = mem;
          try {
            var valOptions = options && options.formatParams && options.formatParams[options.interpolationkey] || {};
            var l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
            formatted = _this.formats[formatName](mem, l, _objectSpread$2(_objectSpread$2(_objectSpread$2({}, formatOptions), options), valOptions));
          } catch (error) {
            _this.logger.warn(error);
          }
          return formatted;
        } else {
          _this.logger.warn("there was no format function for ".concat(formatName));
        }
        return mem;
      }, value);
      return result;
    }
  }]);
  return Formatter;
}();

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty$2(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function removePending(q, name) {
  if (q.pending[name] !== undefined) {
    delete q.pending[name];
    q.pendingCount--;
  }
}
var Connector = function (_EventEmitter) {
  _inherits(Connector, _EventEmitter);
  var _super = _createSuper$1(Connector);
  function Connector(backend, store, services) {
    var _this;
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    _classCallCheck$2(this, Connector);
    _this = _super.call(this);
    if (isIE10) {
      EventEmitter.call(_assertThisInitialized(_this));
    }
    _this.backend = backend;
    _this.store = store;
    _this.services = services;
    _this.languageUtils = services.languageUtils;
    _this.options = options;
    _this.logger = baseLogger.create('backendConnector');
    _this.waitingReads = [];
    _this.maxParallelReads = options.maxParallelReads || 10;
    _this.readingCalls = 0;
    _this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
    _this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
    _this.state = {};
    _this.queue = [];
    if (_this.backend && _this.backend.init) {
      _this.backend.init(services, options.backend, options);
    }
    return _this;
  }
  _createClass$2(Connector, [{
    key: "queueLoad",
    value: function queueLoad(languages, namespaces, options, callback) {
      var _this2 = this;
      var toLoad = {};
      var pending = {};
      var toLoadLanguages = {};
      var toLoadNamespaces = {};
      languages.forEach(function (lng) {
        var hasAllNamespaces = true;
        namespaces.forEach(function (ns) {
          var name = "".concat(lng, "|").concat(ns);
          if (!options.reload && _this2.store.hasResourceBundle(lng, ns)) {
            _this2.state[name] = 2;
          } else if (_this2.state[name] < 0) ; else if (_this2.state[name] === 1) {
            if (pending[name] === undefined) pending[name] = true;
          } else {
            _this2.state[name] = 1;
            hasAllNamespaces = false;
            if (pending[name] === undefined) pending[name] = true;
            if (toLoad[name] === undefined) toLoad[name] = true;
            if (toLoadNamespaces[ns] === undefined) toLoadNamespaces[ns] = true;
          }
        });
        if (!hasAllNamespaces) toLoadLanguages[lng] = true;
      });
      if (Object.keys(toLoad).length || Object.keys(pending).length) {
        this.queue.push({
          pending: pending,
          pendingCount: Object.keys(pending).length,
          loaded: {},
          errors: [],
          callback: callback
        });
      }
      return {
        toLoad: Object.keys(toLoad),
        pending: Object.keys(pending),
        toLoadLanguages: Object.keys(toLoadLanguages),
        toLoadNamespaces: Object.keys(toLoadNamespaces)
      };
    }
  }, {
    key: "loaded",
    value: function loaded(name, err, data) {
      var s = name.split('|');
      var lng = s[0];
      var ns = s[1];
      if (err) this.emit('failedLoading', lng, ns, err);
      if (data) {
        this.store.addResourceBundle(lng, ns, data);
      }
      this.state[name] = err ? -1 : 2;
      var loaded = {};
      this.queue.forEach(function (q) {
        pushPath(q.loaded, [lng], ns);
        removePending(q, name);
        if (err) q.errors.push(err);
        if (q.pendingCount === 0 && !q.done) {
          Object.keys(q.loaded).forEach(function (l) {
            if (!loaded[l]) loaded[l] = {};
            var loadedKeys = q.loaded[l];
            if (loadedKeys.length) {
              loadedKeys.forEach(function (n) {
                if (loaded[l][n] === undefined) loaded[l][n] = true;
              });
            }
          });
          q.done = true;
          if (q.errors.length) {
            q.callback(q.errors);
          } else {
            q.callback();
          }
        }
      });
      this.emit('loaded', loaded);
      this.queue = this.queue.filter(function (q) {
        return !q.done;
      });
    }
  }, {
    key: "read",
    value: function read(lng, ns, fcName) {
      var _this3 = this;
      var tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.retryTimeout;
      var callback = arguments.length > 5 ? arguments[5] : undefined;
      if (!lng.length) return callback(null, {});
      if (this.readingCalls >= this.maxParallelReads) {
        this.waitingReads.push({
          lng: lng,
          ns: ns,
          fcName: fcName,
          tried: tried,
          wait: wait,
          callback: callback
        });
        return;
      }
      this.readingCalls++;
      var resolver = function resolver(err, data) {
        _this3.readingCalls--;
        if (_this3.waitingReads.length > 0) {
          var next = _this3.waitingReads.shift();
          _this3.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
        }
        if (err && data && tried < _this3.maxRetries) {
          setTimeout(function () {
            _this3.read.call(_this3, lng, ns, fcName, tried + 1, wait * 2, callback);
          }, wait);
          return;
        }
        callback(err, data);
      };
      var fc = this.backend[fcName].bind(this.backend);
      if (fc.length === 2) {
        try {
          var r = fc(lng, ns);
          if (r && typeof r.then === 'function') {
            r.then(function (data) {
              return resolver(null, data);
            })["catch"](resolver);
          } else {
            resolver(null, r);
          }
        } catch (err) {
          resolver(err);
        }
        return;
      }
      return fc(lng, ns, resolver);
    }
  }, {
    key: "prepareLoading",
    value: function prepareLoading(languages, namespaces) {
      var _this4 = this;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var callback = arguments.length > 3 ? arguments[3] : undefined;
      if (!this.backend) {
        this.logger.warn('No backend was added via i18next.use. Will not load resources.');
        return callback && callback();
      }
      if (typeof languages === 'string') languages = this.languageUtils.toResolveHierarchy(languages);
      if (typeof namespaces === 'string') namespaces = [namespaces];
      var toLoad = this.queueLoad(languages, namespaces, options, callback);
      if (!toLoad.toLoad.length) {
        if (!toLoad.pending.length) callback();
        return null;
      }
      toLoad.toLoad.forEach(function (name) {
        _this4.loadOne(name);
      });
    }
  }, {
    key: "load",
    value: function load(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {}, callback);
    }
  }, {
    key: "reload",
    value: function reload(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {
        reload: true
      }, callback);
    }
  }, {
    key: "loadOne",
    value: function loadOne(name) {
      var _this5 = this;
      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var s = name.split('|');
      var lng = s[0];
      var ns = s[1];
      this.read(lng, ns, 'read', undefined, undefined, function (err, data) {
        if (err) _this5.logger.warn("".concat(prefix, "loading namespace ").concat(ns, " for language ").concat(lng, " failed"), err);
        if (!err && data) _this5.logger.log("".concat(prefix, "loaded namespace ").concat(ns, " for language ").concat(lng), data);
        _this5.loaded(name, err, data);
      });
    }
  }, {
    key: "saveMissing",
    value: function saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
      var clb = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : function () {};
      if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
        this.logger.warn("did not save key \"".concat(key, "\" as the namespace \"").concat(namespace, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
        return;
      }
      if (key === undefined || key === null || key === '') return;
      if (this.backend && this.backend.create) {
        var opts = _objectSpread$1(_objectSpread$1({}, options), {}, {
          isUpdate: isUpdate
        });
        var fc = this.backend.create.bind(this.backend);
        if (fc.length < 6) {
          try {
            var r;
            if (fc.length === 5) {
              r = fc(languages, namespace, key, fallbackValue, opts);
            } else {
              r = fc(languages, namespace, key, fallbackValue);
            }
            if (r && typeof r.then === 'function') {
              r.then(function (data) {
                return clb(null, data);
              })["catch"](clb);
            } else {
              clb(null, r);
            }
          } catch (err) {
            clb(err);
          }
        } else {
          fc(languages, namespace, key, fallbackValue, clb, opts);
        }
      }
      if (!languages || !languages[0]) return;
      this.store.addResource(languages[0], namespace, key, fallbackValue);
    }
  }]);
  return Connector;
}(EventEmitter);

function get() {
  return {
    debug: false,
    initImmediate: true,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: false,
    supportedLngs: false,
    nonExplicitSupportedLngs: false,
    load: 'all',
    preload: false,
    simplifyPluralSuffix: true,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: false,
    saveMissing: false,
    updateMissing: false,
    saveMissingTo: 'fallback',
    saveMissingPlurals: true,
    missingKeyHandler: false,
    missingInterpolationHandler: false,
    postProcess: false,
    postProcessPassResolved: false,
    returnNull: true,
    returnEmptyString: true,
    returnObjects: false,
    joinArrays: false,
    returnedObjectHandler: false,
    parseMissingKeyHandler: false,
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler: function handle(args) {
      var ret = {};
      if (_typeof$4(args[1]) === 'object') ret = args[1];
      if (typeof args[1] === 'string') ret.defaultValue = args[1];
      if (typeof args[2] === 'string') ret.tDescription = args[2];
      if (_typeof$4(args[2]) === 'object' || _typeof$4(args[3]) === 'object') {
        var options = args[3] || args[2];
        Object.keys(options).forEach(function (key) {
          ret[key] = options[key];
        });
      }
      return ret;
    },
    interpolation: {
      escapeValue: true,
      format: function format(value, _format, lng, options) {
        return value;
      },
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1000,
      skipOnVariables: true
    }
  };
}
function transformOptions(options) {
  if (typeof options.ns === 'string') options.ns = [options.ns];
  if (typeof options.fallbackLng === 'string') options.fallbackLng = [options.fallbackLng];
  if (typeof options.fallbackNS === 'string') options.fallbackNS = [options.fallbackNS];
  if (options.supportedLngs && options.supportedLngs.indexOf('cimode') < 0) {
    options.supportedLngs = options.supportedLngs.concat(['cimode']);
  }
  return options;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty$2(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function noop() {}
function bindMemberFunctions(inst) {
  var mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
  mems.forEach(function (mem) {
    if (typeof inst[mem] === 'function') {
      inst[mem] = inst[mem].bind(inst);
    }
  });
}
var I18n = function (_EventEmitter) {
  _inherits(I18n, _EventEmitter);
  var _super = _createSuper(I18n);
  function I18n() {
    var _this;
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments.length > 1 ? arguments[1] : undefined;
    _classCallCheck$2(this, I18n);
    _this = _super.call(this);
    if (isIE10) {
      EventEmitter.call(_assertThisInitialized(_this));
    }
    _this.options = transformOptions(options);
    _this.services = {};
    _this.logger = baseLogger;
    _this.modules = {
      external: []
    };
    bindMemberFunctions(_assertThisInitialized(_this));
    if (callback && !_this.isInitialized && !options.isClone) {
      if (!_this.options.initImmediate) {
        _this.init(options, callback);
        return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
      }
      setTimeout(function () {
        _this.init(options, callback);
      }, 0);
    }
    return _this;
  }
  _createClass$2(I18n, [{
    key: "init",
    value: function init() {
      var _this2 = this;
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : undefined;
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (!options.defaultNS && options.defaultNS !== false && options.ns) {
        if (typeof options.ns === 'string') {
          options.defaultNS = options.ns;
        } else if (options.ns.indexOf('translation') < 0) {
          options.defaultNS = options.ns[0];
        }
      }
      var defOpts = get();
      this.options = _objectSpread(_objectSpread(_objectSpread({}, defOpts), this.options), transformOptions(options));
      if (this.options.compatibilityAPI !== 'v1') {
        this.options.interpolation = _objectSpread(_objectSpread({}, defOpts.interpolation), this.options.interpolation);
      }
      if (options.keySeparator !== undefined) {
        this.options.userDefinedKeySeparator = options.keySeparator;
      }
      if (options.nsSeparator !== undefined) {
        this.options.userDefinedNsSeparator = options.nsSeparator;
      }
      function createClassOnDemand(ClassOrObject) {
        if (!ClassOrObject) return null;
        if (typeof ClassOrObject === 'function') return new ClassOrObject();
        return ClassOrObject;
      }
      if (!this.options.isClone) {
        if (this.modules.logger) {
          baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
        } else {
          baseLogger.init(null, this.options);
        }
        var formatter;
        if (this.modules.formatter) {
          formatter = this.modules.formatter;
        } else if (typeof Intl !== 'undefined') {
          formatter = Formatter;
        }
        var lu = new LanguageUtil(this.options);
        this.store = new ResourceStore(this.options.resources, this.options);
        var s = this.services;
        s.logger = baseLogger;
        s.resourceStore = this.store;
        s.languageUtils = lu;
        s.pluralResolver = new PluralResolver(lu, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        });
        if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
          s.formatter = createClassOnDemand(formatter);
          s.formatter.init(s, this.options);
          this.options.interpolation.format = s.formatter.format.bind(s.formatter);
        }
        s.interpolator = new Interpolator(this.options);
        s.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        };
        s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
        s.backendConnector.on('*', function (event) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          _this2.emit.apply(_this2, [event].concat(args));
        });
        if (this.modules.languageDetector) {
          s.languageDetector = createClassOnDemand(this.modules.languageDetector);
          if (s.languageDetector.init) s.languageDetector.init(s, this.options.detection, this.options);
        }
        if (this.modules.i18nFormat) {
          s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
          if (s.i18nFormat.init) s.i18nFormat.init(this);
        }
        this.translator = new Translator(this.services, this.options);
        this.translator.on('*', function (event) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          _this2.emit.apply(_this2, [event].concat(args));
        });
        this.modules.external.forEach(function (m) {
          if (m.init) m.init(_this2);
        });
      }
      this.format = this.options.interpolation.format;
      if (!callback) callback = noop;
      if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
        var codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        if (codes.length > 0 && codes[0] !== 'dev') this.options.lng = codes[0];
      }
      if (!this.services.languageDetector && !this.options.lng) {
        this.logger.warn('init: no languageDetector is used and no lng is defined');
      }
      var storeApi = ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
      storeApi.forEach(function (fcName) {
        _this2[fcName] = function () {
          var _this2$store;
          return (_this2$store = _this2.store)[fcName].apply(_this2$store, arguments);
        };
      });
      var storeApiChained = ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'];
      storeApiChained.forEach(function (fcName) {
        _this2[fcName] = function () {
          var _this2$store2;
          (_this2$store2 = _this2.store)[fcName].apply(_this2$store2, arguments);
          return _this2;
        };
      });
      var deferred = defer();
      var load = function load() {
        var finish = function finish(err, t) {
          if (_this2.isInitialized && !_this2.initializedStoreOnce) _this2.logger.warn('init: i18next is already initialized. You should call init just once!');
          _this2.isInitialized = true;
          if (!_this2.options.isClone) _this2.logger.log('initialized', _this2.options);
          _this2.emit('initialized', _this2.options);
          deferred.resolve(t);
          callback(err, t);
        };
        if (_this2.languages && _this2.options.compatibilityAPI !== 'v1' && !_this2.isInitialized) return finish(null, _this2.t.bind(_this2));
        _this2.changeLanguage(_this2.options.lng, finish);
      };
      if (this.options.resources || !this.options.initImmediate) {
        load();
      } else {
        setTimeout(load, 0);
      }
      return deferred;
    }
  }, {
    key: "loadResources",
    value: function loadResources(language) {
      var _this3 = this;
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
      var usedCallback = callback;
      var usedLng = typeof language === 'string' ? language : this.language;
      if (typeof language === 'function') usedCallback = language;
      if (!this.options.resources || this.options.partialBundledLanguages) {
        if (usedLng && usedLng.toLowerCase() === 'cimode') return usedCallback();
        var toLoad = [];
        var append = function append(lng) {
          if (!lng) return;
          var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);
          lngs.forEach(function (l) {
            if (toLoad.indexOf(l) < 0) toLoad.push(l);
          });
        };
        if (!usedLng) {
          var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          fallbacks.forEach(function (l) {
            return append(l);
          });
        } else {
          append(usedLng);
        }
        if (this.options.preload) {
          this.options.preload.forEach(function (l) {
            return append(l);
          });
        }
        this.services.backendConnector.load(toLoad, this.options.ns, function (e) {
          if (!e && !_this3.resolvedLanguage && _this3.language) _this3.setResolvedLanguage(_this3.language);
          usedCallback(e);
        });
      } else {
        usedCallback(null);
      }
    }
  }, {
    key: "reloadResources",
    value: function reloadResources(lngs, ns, callback) {
      var deferred = defer();
      if (!lngs) lngs = this.languages;
      if (!ns) ns = this.options.ns;
      if (!callback) callback = noop;
      this.services.backendConnector.reload(lngs, ns, function (err) {
        deferred.resolve();
        callback(err);
      });
      return deferred;
    }
  }, {
    key: "use",
    value: function use(module) {
      if (!module) throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
      if (!module.type) throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');
      if (module.type === 'backend') {
        this.modules.backend = module;
      }
      if (module.type === 'logger' || module.log && module.warn && module.error) {
        this.modules.logger = module;
      }
      if (module.type === 'languageDetector') {
        this.modules.languageDetector = module;
      }
      if (module.type === 'i18nFormat') {
        this.modules.i18nFormat = module;
      }
      if (module.type === 'postProcessor') {
        postProcessor.addPostProcessor(module);
      }
      if (module.type === 'formatter') {
        this.modules.formatter = module;
      }
      if (module.type === '3rdParty') {
        this.modules.external.push(module);
      }
      return this;
    }
  }, {
    key: "setResolvedLanguage",
    value: function setResolvedLanguage(l) {
      if (!l || !this.languages) return;
      if (['cimode', 'dev'].indexOf(l) > -1) return;
      for (var li = 0; li < this.languages.length; li++) {
        var lngInLngs = this.languages[li];
        if (['cimode', 'dev'].indexOf(lngInLngs) > -1) continue;
        if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
          this.resolvedLanguage = lngInLngs;
          break;
        }
      }
    }
  }, {
    key: "changeLanguage",
    value: function changeLanguage(lng, callback) {
      var _this4 = this;
      this.isLanguageChangingTo = lng;
      var deferred = defer();
      this.emit('languageChanging', lng);
      var setLngProps = function setLngProps(l) {
        _this4.language = l;
        _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);
        _this4.resolvedLanguage = undefined;
        _this4.setResolvedLanguage(l);
      };
      var done = function done(err, l) {
        if (l) {
          setLngProps(l);
          _this4.translator.changeLanguage(l);
          _this4.isLanguageChangingTo = undefined;
          _this4.emit('languageChanged', l);
          _this4.logger.log('languageChanged', l);
        } else {
          _this4.isLanguageChangingTo = undefined;
        }
        deferred.resolve(function () {
          return _this4.t.apply(_this4, arguments);
        });
        if (callback) callback(err, function () {
          return _this4.t.apply(_this4, arguments);
        });
      };
      var setLng = function setLng(lngs) {
        if (!lng && !lngs && _this4.services.languageDetector) lngs = [];
        var l = typeof lngs === 'string' ? lngs : _this4.services.languageUtils.getBestMatchFromCodes(lngs);
        if (l) {
          if (!_this4.language) {
            setLngProps(l);
          }
          if (!_this4.translator.language) _this4.translator.changeLanguage(l);
          if (_this4.services.languageDetector && _this4.services.languageDetector.cacheUserLanguage) _this4.services.languageDetector.cacheUserLanguage(l);
        }
        _this4.loadResources(l, function (err) {
          done(err, l);
        });
      };
      if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
        setLng(this.services.languageDetector.detect());
      } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
        if (this.services.languageDetector.detect.length === 0) {
          this.services.languageDetector.detect().then(setLng);
        } else {
          this.services.languageDetector.detect(setLng);
        }
      } else {
        setLng(lng);
      }
      return deferred;
    }
  }, {
    key: "getFixedT",
    value: function getFixedT(lng, ns, keyPrefix) {
      var _this5 = this;
      var fixedT = function fixedT(key, opts) {
        var options;
        if (_typeof$4(opts) !== 'object') {
          for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
            rest[_key3 - 2] = arguments[_key3];
          }
          options = _this5.options.overloadTranslationOptionHandler([key, opts].concat(rest));
        } else {
          options = _objectSpread({}, opts);
        }
        options.lng = options.lng || fixedT.lng;
        options.lngs = options.lngs || fixedT.lngs;
        options.ns = options.ns || fixedT.ns;
        options.keyPrefix = options.keyPrefix || keyPrefix || fixedT.keyPrefix;
        var keySeparator = _this5.options.keySeparator || '.';
        var resultKey;
        if (options.keyPrefix && Array.isArray(key)) {
          resultKey = key.map(function (k) {
            return "".concat(options.keyPrefix).concat(keySeparator).concat(k);
          });
        } else {
          resultKey = options.keyPrefix ? "".concat(options.keyPrefix).concat(keySeparator).concat(key) : key;
        }
        return _this5.t(resultKey, options);
      };
      if (typeof lng === 'string') {
        fixedT.lng = lng;
      } else {
        fixedT.lngs = lng;
      }
      fixedT.ns = ns;
      fixedT.keyPrefix = keyPrefix;
      return fixedT;
    }
  }, {
    key: "t",
    value: function t() {
      var _this$translator;
      return this.translator && (_this$translator = this.translator).translate.apply(_this$translator, arguments);
    }
  }, {
    key: "exists",
    value: function exists() {
      var _this$translator2;
      return this.translator && (_this$translator2 = this.translator).exists.apply(_this$translator2, arguments);
    }
  }, {
    key: "setDefaultNamespace",
    value: function setDefaultNamespace(ns) {
      this.options.defaultNS = ns;
    }
  }, {
    key: "hasLoadedNamespace",
    value: function hasLoadedNamespace(ns) {
      var _this6 = this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!this.isInitialized) {
        this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages);
        return false;
      }
      if (!this.languages || !this.languages.length) {
        this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages);
        return false;
      }
      var lng = options.lng || this.resolvedLanguage || this.languages[0];
      var fallbackLng = this.options ? this.options.fallbackLng : false;
      var lastLng = this.languages[this.languages.length - 1];
      if (lng.toLowerCase() === 'cimode') return true;
      var loadNotPending = function loadNotPending(l, n) {
        var loadState = _this6.services.backendConnector.state["".concat(l, "|").concat(n)];
        return loadState === -1 || loadState === 2;
      };
      if (options.precheck) {
        var preResult = options.precheck(this, loadNotPending);
        if (preResult !== undefined) return preResult;
      }
      if (this.hasResourceBundle(lng, ns)) return true;
      if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages) return true;
      if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
      return false;
    }
  }, {
    key: "loadNamespaces",
    value: function loadNamespaces(ns, callback) {
      var _this7 = this;
      var deferred = defer();
      if (!this.options.ns) {
        if (callback) callback();
        return Promise.resolve();
      }
      if (typeof ns === 'string') ns = [ns];
      ns.forEach(function (n) {
        if (_this7.options.ns.indexOf(n) < 0) _this7.options.ns.push(n);
      });
      this.loadResources(function (err) {
        deferred.resolve();
        if (callback) callback(err);
      });
      return deferred;
    }
  }, {
    key: "loadLanguages",
    value: function loadLanguages(lngs, callback) {
      var deferred = defer();
      if (typeof lngs === 'string') lngs = [lngs];
      var preloaded = this.options.preload || [];
      var newLngs = lngs.filter(function (lng) {
        return preloaded.indexOf(lng) < 0;
      });
      if (!newLngs.length) {
        if (callback) callback();
        return Promise.resolve();
      }
      this.options.preload = preloaded.concat(newLngs);
      this.loadResources(function (err) {
        deferred.resolve();
        if (callback) callback(err);
      });
      return deferred;
    }
  }, {
    key: "dir",
    value: function dir(lng) {
      if (!lng) lng = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language);
      if (!lng) return 'rtl';
      var rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ug', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam', 'ckb'];
      var languageUtils = this.services && this.services.languageUtils || new LanguageUtil(get());
      return rtlLngs.indexOf(languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf('-arab') > 1 ? 'rtl' : 'ltr';
    }
  }, {
    key: "cloneInstance",
    value: function cloneInstance() {
      var _this8 = this;
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
      var mergedOptions = _objectSpread(_objectSpread(_objectSpread({}, this.options), options), {
        isClone: true
      });
      var clone = new I18n(mergedOptions);
      if (options.debug !== undefined || options.prefix !== undefined) {
        clone.logger = clone.logger.clone(options);
      }
      var membersToCopy = ['store', 'services', 'language'];
      membersToCopy.forEach(function (m) {
        clone[m] = _this8[m];
      });
      clone.services = _objectSpread({}, this.services);
      clone.services.utils = {
        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
      };
      clone.translator = new Translator(clone.services, clone.options);
      clone.translator.on('*', function (event) {
        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }
        clone.emit.apply(clone, [event].concat(args));
      });
      clone.init(mergedOptions, callback);
      clone.translator.options = clone.options;
      clone.translator.backendConnector.services.utils = {
        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
      };
      return clone;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        options: this.options,
        store: this.store,
        language: this.language,
        languages: this.languages,
        resolvedLanguage: this.resolvedLanguage
      };
    }
  }]);
  return I18n;
}(EventEmitter);
_defineProperty$2(I18n, "createInstance", function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var callback = arguments.length > 1 ? arguments[1] : undefined;
  return new I18n(options, callback);
});
var instance = I18n.createInstance();
instance.createInstance = I18n.createInstance;

instance.createInstance;
instance.dir;
instance.init;
instance.loadResources;
instance.reloadResources;
instance.use;
instance.changeLanguage;
instance.getFixedT;
instance.t;
instance.exists;
instance.setDefaultNamespace;
instance.hasLoadedNamespace;
instance.loadNamespaces;
instance.loadLanguages;

var arr$1 = [];
var each$1 = arr$1.forEach;
var slice$1 = arr$1.slice;
function defaults$1(obj) {
  each$1.call(slice$1.call(arguments, 1), function (source) {
    if (source) {
      for (var prop in source) {
        if (obj[prop] === undefined) obj[prop] = source[prop];
      }
    }
  });
  return obj;
}

// eslint-disable-next-line no-control-regex
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
var serializeCookie = function serializeCookie(name, val, options) {
  var opt = options || {};
  opt.path = opt.path || '/';
  var value = encodeURIComponent(val);
  var str = "".concat(name, "=").concat(value);
  if (opt.maxAge > 0) {
    var maxAge = opt.maxAge - 0;
    if (Number.isNaN(maxAge)) throw new Error('maxAge should be a Number');
    str += "; Max-Age=".concat(Math.floor(maxAge));
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }
    str += "; Domain=".concat(opt.domain);
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }
    str += "; Path=".concat(opt.path);
  }
  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }
    str += "; Expires=".concat(opt.expires.toUTCString());
  }
  if (opt.httpOnly) str += '; HttpOnly';
  if (opt.secure) str += '; Secure';
  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string' ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }
  return str;
};
var cookie = {
  create: function create(name, value, minutes, domain) {
    var cookieOptions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
      path: '/',
      sameSite: 'strict'
    };
    if (minutes) {
      cookieOptions.expires = new Date();
      cookieOptions.expires.setTime(cookieOptions.expires.getTime() + minutes * 60 * 1000);
    }
    if (domain) cookieOptions.domain = domain;
    document.cookie = serializeCookie(name, encodeURIComponent(value), cookieOptions);
  },
  read: function read(name) {
    var nameEQ = "".concat(name, "=");
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
  remove: function remove(name) {
    this.create(name, '', -1);
  }
};
var cookie$1 = {
  name: 'cookie',
  lookup: function lookup(options) {
    var found;
    if (options.lookupCookie && typeof document !== 'undefined') {
      var c = cookie.read(options.lookupCookie);
      if (c) found = c;
    }
    return found;
  },
  cacheUserLanguage: function cacheUserLanguage(lng, options) {
    if (options.lookupCookie && typeof document !== 'undefined') {
      cookie.create(options.lookupCookie, lng, options.cookieMinutes, options.cookieDomain, options.cookieOptions);
    }
  }
};

var querystring = {
  name: 'querystring',
  lookup: function lookup(options) {
    var found;
    if (typeof window !== 'undefined') {
      var search = window.location.search;
      if (!window.location.search && window.location.hash && window.location.hash.indexOf('?') > -1) {
        search = window.location.hash.substring(window.location.hash.indexOf('?'));
      }
      var query = search.substring(1);
      var params = query.split('&');
      for (var i = 0; i < params.length; i++) {
        var pos = params[i].indexOf('=');
        if (pos > 0) {
          var key = params[i].substring(0, pos);
          if (key === options.lookupQuerystring) {
            found = params[i].substring(pos + 1);
          }
        }
      }
    }
    return found;
  }
};

var hasLocalStorageSupport = null;
var localStorageAvailable = function localStorageAvailable() {
  if (hasLocalStorageSupport !== null) return hasLocalStorageSupport;
  try {
    hasLocalStorageSupport = window !== 'undefined' && window.localStorage !== null;
    var testKey = 'i18next.translate.boo';
    window.localStorage.setItem(testKey, 'foo');
    window.localStorage.removeItem(testKey);
  } catch (e) {
    hasLocalStorageSupport = false;
  }
  return hasLocalStorageSupport;
};
var localStorage$1 = {
  name: 'localStorage',
  lookup: function lookup(options) {
    var found;
    if (options.lookupLocalStorage && localStorageAvailable()) {
      var lng = window.localStorage.getItem(options.lookupLocalStorage);
      if (lng) found = lng;
    }
    return found;
  },
  cacheUserLanguage: function cacheUserLanguage(lng, options) {
    if (options.lookupLocalStorage && localStorageAvailable()) {
      window.localStorage.setItem(options.lookupLocalStorage, lng);
    }
  }
};

var hasSessionStorageSupport = null;
var sessionStorageAvailable = function sessionStorageAvailable() {
  if (hasSessionStorageSupport !== null) return hasSessionStorageSupport;
  try {
    hasSessionStorageSupport = window !== 'undefined' && window.sessionStorage !== null;
    var testKey = 'i18next.translate.boo';
    window.sessionStorage.setItem(testKey, 'foo');
    window.sessionStorage.removeItem(testKey);
  } catch (e) {
    hasSessionStorageSupport = false;
  }
  return hasSessionStorageSupport;
};
var sessionStorage = {
  name: 'sessionStorage',
  lookup: function lookup(options) {
    var found;
    if (options.lookupSessionStorage && sessionStorageAvailable()) {
      var lng = window.sessionStorage.getItem(options.lookupSessionStorage);
      if (lng) found = lng;
    }
    return found;
  },
  cacheUserLanguage: function cacheUserLanguage(lng, options) {
    if (options.lookupSessionStorage && sessionStorageAvailable()) {
      window.sessionStorage.setItem(options.lookupSessionStorage, lng);
    }
  }
};

var navigator$1 = {
  name: 'navigator',
  lookup: function lookup(options) {
    var found = [];
    if (typeof navigator !== 'undefined') {
      if (navigator.languages) {
        // chrome only; not an array, so can't use .push.apply instead of iterating
        for (var i = 0; i < navigator.languages.length; i++) {
          found.push(navigator.languages[i]);
        }
      }
      if (navigator.userLanguage) {
        found.push(navigator.userLanguage);
      }
      if (navigator.language) {
        found.push(navigator.language);
      }
    }
    return found.length > 0 ? found : undefined;
  }
};

var htmlTag = {
  name: 'htmlTag',
  lookup: function lookup(options) {
    var found;
    var htmlTag = options.htmlTag || (typeof document !== 'undefined' ? document.documentElement : null);
    if (htmlTag && typeof htmlTag.getAttribute === 'function') {
      found = htmlTag.getAttribute('lang');
    }
    return found;
  }
};

var path = {
  name: 'path',
  lookup: function lookup(options) {
    var found;
    if (typeof window !== 'undefined') {
      var language = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      if (language instanceof Array) {
        if (typeof options.lookupFromPathIndex === 'number') {
          if (typeof language[options.lookupFromPathIndex] !== 'string') {
            return undefined;
          }
          found = language[options.lookupFromPathIndex].replace('/', '');
        } else {
          found = language[0].replace('/', '');
        }
      }
    }
    return found;
  }
};

var subdomain = {
  name: 'subdomain',
  lookup: function lookup(options) {
    // If given get the subdomain index else 1
    var lookupFromSubdomainIndex = typeof options.lookupFromSubdomainIndex === 'number' ? options.lookupFromSubdomainIndex + 1 : 1;
    // get all matches if window.location. is existing
    // first item of match is the match itself and the second is the first group macht which sould be the first subdomain match
    // is the hostname no public domain get the or option of localhost
    var language = typeof window !== 'undefined' && window.location && window.location.hostname && window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);

    // if there is no match (null) return undefined
    if (!language) return undefined;
    // return the given group match
    return language[lookupFromSubdomainIndex];
  }
};

function getDefaults$1() {
  return {
    order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    lookupSessionStorage: 'i18nextLng',
    // cache user language
    caches: ['localStorage'],
    excludeCacheFor: ['cimode']
    // cookieMinutes: 10,
    // cookieDomain: 'myDomain'
  };
}
var Browser = /*#__PURE__*/function () {
  function Browser(services) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck$2(this, Browser);
    this.type = 'languageDetector';
    this.detectors = {};
    this.init(services, options);
  }
  _createClass$2(Browser, [{
    key: "init",
    value: function init(services) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var i18nOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.services = services || {
        languageUtils: {}
      }; // this way the language detector can be used without i18next
      this.options = defaults$1(options, this.options || {}, getDefaults$1());

      // backwards compatibility
      if (this.options.lookupFromUrlIndex) this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex;
      this.i18nOptions = i18nOptions;
      this.addDetector(cookie$1);
      this.addDetector(querystring);
      this.addDetector(localStorage$1);
      this.addDetector(sessionStorage);
      this.addDetector(navigator$1);
      this.addDetector(htmlTag);
      this.addDetector(path);
      this.addDetector(subdomain);
    }
  }, {
    key: "addDetector",
    value: function addDetector(detector) {
      this.detectors[detector.name] = detector;
    }
  }, {
    key: "detect",
    value: function detect(detectionOrder) {
      var _this = this;
      if (!detectionOrder) detectionOrder = this.options.order;
      var detected = [];
      detectionOrder.forEach(function (detectorName) {
        if (_this.detectors[detectorName]) {
          var lookup = _this.detectors[detectorName].lookup(_this.options);
          if (lookup && typeof lookup === 'string') lookup = [lookup];
          if (lookup) detected = detected.concat(lookup);
        }
      });
      if (this.services.languageUtils.getBestMatchFromCodes) return detected; // new i18next v19.5.0
      return detected.length > 0 ? detected[0] : null; // a little backward compatibility
    }
  }, {
    key: "cacheUserLanguage",
    value: function cacheUserLanguage(lng, caches) {
      var _this2 = this;
      if (!caches) caches = this.options.caches;
      if (!caches) return;
      if (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(lng) > -1) return;
      caches.forEach(function (cacheName) {
        if (_this2.detectors[cacheName]) _this2.detectors[cacheName].cacheUserLanguage(lng, _this2.options);
      });
    }
  }]);
  return Browser;
}();
Browser.type = 'languageDetector';

function _typeof$2(obj) { "@babel/helpers - typeof"; return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof$2(obj); }
var arr = [];
var each = arr.forEach;
var slice = arr.slice;
function defaults(obj) {
  each.call(slice.call(arguments, 1), function (source) {
    if (source) {
      for (var prop in source) {
        if (obj[prop] === undefined) obj[prop] = source[prop];
      }
    }
  });
  return obj;
}
function hasXMLHttpRequest() {
  return typeof XMLHttpRequest === 'function' || (typeof XMLHttpRequest === "undefined" ? "undefined" : _typeof$2(XMLHttpRequest)) === 'object';
}
function isPromise(maybePromise) {
  return !!maybePromise && typeof maybePromise.then === 'function';
}
function makePromise(maybePromise) {
  if (isPromise(maybePromise)) {
    return maybePromise;
  }
  return Promise.resolve(maybePromise);
}

function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var getFetch$1 = {exports: {}};

var browserPonyfill = {exports: {}};

var hasRequiredBrowserPonyfill;

function requireBrowserPonyfill () {
	if (hasRequiredBrowserPonyfill) return browserPonyfill.exports;
	hasRequiredBrowserPonyfill = 1;
	(function (module, exports) {
		var global = typeof self !== 'undefined' ? self : commonjsGlobal;
		var __self__ = (function () {
		function F() {
		this.fetch = false;
		this.DOMException = global.DOMException;
		}
		F.prototype = global;
		return new F();
		})();
		(function(self) {

		((function (exports) {

		  var support = {
		    searchParams: 'URLSearchParams' in self,
		    iterable: 'Symbol' in self && 'iterator' in Symbol,
		    blob:
		      'FileReader' in self &&
		      'Blob' in self &&
		      (function() {
		        try {
		          new Blob();
		          return true
		        } catch (e) {
		          return false
		        }
		      })(),
		    formData: 'FormData' in self,
		    arrayBuffer: 'ArrayBuffer' in self
		  };

		  function isDataView(obj) {
		    return obj && DataView.prototype.isPrototypeOf(obj)
		  }

		  if (support.arrayBuffer) {
		    var viewClasses = [
		      '[object Int8Array]',
		      '[object Uint8Array]',
		      '[object Uint8ClampedArray]',
		      '[object Int16Array]',
		      '[object Uint16Array]',
		      '[object Int32Array]',
		      '[object Uint32Array]',
		      '[object Float32Array]',
		      '[object Float64Array]'
		    ];

		    var isArrayBufferView =
		      ArrayBuffer.isView ||
		      function(obj) {
		        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
		      };
		  }

		  function normalizeName(name) {
		    if (typeof name !== 'string') {
		      name = String(name);
		    }
		    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
		      throw new TypeError('Invalid character in header field name')
		    }
		    return name.toLowerCase()
		  }

		  function normalizeValue(value) {
		    if (typeof value !== 'string') {
		      value = String(value);
		    }
		    return value
		  }

		  // Build a destructive iterator for the value list
		  function iteratorFor(items) {
		    var iterator = {
		      next: function() {
		        var value = items.shift();
		        return {done: value === undefined, value: value}
		      }
		    };

		    if (support.iterable) {
		      iterator[Symbol.iterator] = function() {
		        return iterator
		      };
		    }

		    return iterator
		  }

		  function Headers(headers) {
		    this.map = {};

		    if (headers instanceof Headers) {
		      headers.forEach(function(value, name) {
		        this.append(name, value);
		      }, this);
		    } else if (Array.isArray(headers)) {
		      headers.forEach(function(header) {
		        this.append(header[0], header[1]);
		      }, this);
		    } else if (headers) {
		      Object.getOwnPropertyNames(headers).forEach(function(name) {
		        this.append(name, headers[name]);
		      }, this);
		    }
		  }

		  Headers.prototype.append = function(name, value) {
		    name = normalizeName(name);
		    value = normalizeValue(value);
		    var oldValue = this.map[name];
		    this.map[name] = oldValue ? oldValue + ', ' + value : value;
		  };

		  Headers.prototype['delete'] = function(name) {
		    delete this.map[normalizeName(name)];
		  };

		  Headers.prototype.get = function(name) {
		    name = normalizeName(name);
		    return this.has(name) ? this.map[name] : null
		  };

		  Headers.prototype.has = function(name) {
		    return this.map.hasOwnProperty(normalizeName(name))
		  };

		  Headers.prototype.set = function(name, value) {
		    this.map[normalizeName(name)] = normalizeValue(value);
		  };

		  Headers.prototype.forEach = function(callback, thisArg) {
		    for (var name in this.map) {
		      if (this.map.hasOwnProperty(name)) {
		        callback.call(thisArg, this.map[name], name, this);
		      }
		    }
		  };

		  Headers.prototype.keys = function() {
		    var items = [];
		    this.forEach(function(value, name) {
		      items.push(name);
		    });
		    return iteratorFor(items)
		  };

		  Headers.prototype.values = function() {
		    var items = [];
		    this.forEach(function(value) {
		      items.push(value);
		    });
		    return iteratorFor(items)
		  };

		  Headers.prototype.entries = function() {
		    var items = [];
		    this.forEach(function(value, name) {
		      items.push([name, value]);
		    });
		    return iteratorFor(items)
		  };

		  if (support.iterable) {
		    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
		  }

		  function consumed(body) {
		    if (body.bodyUsed) {
		      return Promise.reject(new TypeError('Already read'))
		    }
		    body.bodyUsed = true;
		  }

		  function fileReaderReady(reader) {
		    return new Promise(function(resolve, reject) {
		      reader.onload = function() {
		        resolve(reader.result);
		      };
		      reader.onerror = function() {
		        reject(reader.error);
		      };
		    })
		  }

		  function readBlobAsArrayBuffer(blob) {
		    var reader = new FileReader();
		    var promise = fileReaderReady(reader);
		    reader.readAsArrayBuffer(blob);
		    return promise
		  }

		  function readBlobAsText(blob) {
		    var reader = new FileReader();
		    var promise = fileReaderReady(reader);
		    reader.readAsText(blob);
		    return promise
		  }

		  function readArrayBufferAsText(buf) {
		    var view = new Uint8Array(buf);
		    var chars = new Array(view.length);

		    for (var i = 0; i < view.length; i++) {
		      chars[i] = String.fromCharCode(view[i]);
		    }
		    return chars.join('')
		  }

		  function bufferClone(buf) {
		    if (buf.slice) {
		      return buf.slice(0)
		    } else {
		      var view = new Uint8Array(buf.byteLength);
		      view.set(new Uint8Array(buf));
		      return view.buffer
		    }
		  }

		  function Body() {
		    this.bodyUsed = false;

		    this._initBody = function(body) {
		      this._bodyInit = body;
		      if (!body) {
		        this._bodyText = '';
		      } else if (typeof body === 'string') {
		        this._bodyText = body;
		      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
		        this._bodyBlob = body;
		      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
		        this._bodyFormData = body;
		      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
		        this._bodyText = body.toString();
		      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
		        this._bodyArrayBuffer = bufferClone(body.buffer);
		        // IE 10-11 can't handle a DataView body.
		        this._bodyInit = new Blob([this._bodyArrayBuffer]);
		      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
		        this._bodyArrayBuffer = bufferClone(body);
		      } else {
		        this._bodyText = body = Object.prototype.toString.call(body);
		      }

		      if (!this.headers.get('content-type')) {
		        if (typeof body === 'string') {
		          this.headers.set('content-type', 'text/plain;charset=UTF-8');
		        } else if (this._bodyBlob && this._bodyBlob.type) {
		          this.headers.set('content-type', this._bodyBlob.type);
		        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
		          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
		        }
		      }
		    };

		    if (support.blob) {
		      this.blob = function() {
		        var rejected = consumed(this);
		        if (rejected) {
		          return rejected
		        }

		        if (this._bodyBlob) {
		          return Promise.resolve(this._bodyBlob)
		        } else if (this._bodyArrayBuffer) {
		          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
		        } else if (this._bodyFormData) {
		          throw new Error('could not read FormData body as blob')
		        } else {
		          return Promise.resolve(new Blob([this._bodyText]))
		        }
		      };

		      this.arrayBuffer = function() {
		        if (this._bodyArrayBuffer) {
		          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
		        } else {
		          return this.blob().then(readBlobAsArrayBuffer)
		        }
		      };
		    }

		    this.text = function() {
		      var rejected = consumed(this);
		      if (rejected) {
		        return rejected
		      }

		      if (this._bodyBlob) {
		        return readBlobAsText(this._bodyBlob)
		      } else if (this._bodyArrayBuffer) {
		        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
		      } else if (this._bodyFormData) {
		        throw new Error('could not read FormData body as text')
		      } else {
		        return Promise.resolve(this._bodyText)
		      }
		    };

		    if (support.formData) {
		      this.formData = function() {
		        return this.text().then(decode)
		      };
		    }

		    this.json = function() {
		      return this.text().then(JSON.parse)
		    };

		    return this
		  }

		  // HTTP methods whose capitalization should be normalized
		  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

		  function normalizeMethod(method) {
		    var upcased = method.toUpperCase();
		    return methods.indexOf(upcased) > -1 ? upcased : method
		  }

		  function Request(input, options) {
		    options = options || {};
		    var body = options.body;

		    if (input instanceof Request) {
		      if (input.bodyUsed) {
		        throw new TypeError('Already read')
		      }
		      this.url = input.url;
		      this.credentials = input.credentials;
		      if (!options.headers) {
		        this.headers = new Headers(input.headers);
		      }
		      this.method = input.method;
		      this.mode = input.mode;
		      this.signal = input.signal;
		      if (!body && input._bodyInit != null) {
		        body = input._bodyInit;
		        input.bodyUsed = true;
		      }
		    } else {
		      this.url = String(input);
		    }

		    this.credentials = options.credentials || this.credentials || 'same-origin';
		    if (options.headers || !this.headers) {
		      this.headers = new Headers(options.headers);
		    }
		    this.method = normalizeMethod(options.method || this.method || 'GET');
		    this.mode = options.mode || this.mode || null;
		    this.signal = options.signal || this.signal;
		    this.referrer = null;

		    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
		      throw new TypeError('Body not allowed for GET or HEAD requests')
		    }
		    this._initBody(body);
		  }

		  Request.prototype.clone = function() {
		    return new Request(this, {body: this._bodyInit})
		  };

		  function decode(body) {
		    var form = new FormData();
		    body
		      .trim()
		      .split('&')
		      .forEach(function(bytes) {
		        if (bytes) {
		          var split = bytes.split('=');
		          var name = split.shift().replace(/\+/g, ' ');
		          var value = split.join('=').replace(/\+/g, ' ');
		          form.append(decodeURIComponent(name), decodeURIComponent(value));
		        }
		      });
		    return form
		  }

		  function parseHeaders(rawHeaders) {
		    var headers = new Headers();
		    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
		    // https://tools.ietf.org/html/rfc7230#section-3.2
		    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
		    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
		      var parts = line.split(':');
		      var key = parts.shift().trim();
		      if (key) {
		        var value = parts.join(':').trim();
		        headers.append(key, value);
		      }
		    });
		    return headers
		  }

		  Body.call(Request.prototype);

		  function Response(bodyInit, options) {
		    if (!options) {
		      options = {};
		    }

		    this.type = 'default';
		    this.status = options.status === undefined ? 200 : options.status;
		    this.ok = this.status >= 200 && this.status < 300;
		    this.statusText = 'statusText' in options ? options.statusText : 'OK';
		    this.headers = new Headers(options.headers);
		    this.url = options.url || '';
		    this._initBody(bodyInit);
		  }

		  Body.call(Response.prototype);

		  Response.prototype.clone = function() {
		    return new Response(this._bodyInit, {
		      status: this.status,
		      statusText: this.statusText,
		      headers: new Headers(this.headers),
		      url: this.url
		    })
		  };

		  Response.error = function() {
		    var response = new Response(null, {status: 0, statusText: ''});
		    response.type = 'error';
		    return response
		  };

		  var redirectStatuses = [301, 302, 303, 307, 308];

		  Response.redirect = function(url, status) {
		    if (redirectStatuses.indexOf(status) === -1) {
		      throw new RangeError('Invalid status code')
		    }

		    return new Response(null, {status: status, headers: {location: url}})
		  };

		  exports.DOMException = self.DOMException;
		  try {
		    new exports.DOMException();
		  } catch (err) {
		    exports.DOMException = function(message, name) {
		      this.message = message;
		      this.name = name;
		      var error = Error(message);
		      this.stack = error.stack;
		    };
		    exports.DOMException.prototype = Object.create(Error.prototype);
		    exports.DOMException.prototype.constructor = exports.DOMException;
		  }

		  function fetch(input, init) {
		    return new Promise(function(resolve, reject) {
		      var request = new Request(input, init);

		      if (request.signal && request.signal.aborted) {
		        return reject(new exports.DOMException('Aborted', 'AbortError'))
		      }

		      var xhr = new XMLHttpRequest();

		      function abortXhr() {
		        xhr.abort();
		      }

		      xhr.onload = function() {
		        var options = {
		          status: xhr.status,
		          statusText: xhr.statusText,
		          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
		        };
		        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
		        var body = 'response' in xhr ? xhr.response : xhr.responseText;
		        resolve(new Response(body, options));
		      };

		      xhr.onerror = function() {
		        reject(new TypeError('Network request failed'));
		      };

		      xhr.ontimeout = function() {
		        reject(new TypeError('Network request failed'));
		      };

		      xhr.onabort = function() {
		        reject(new exports.DOMException('Aborted', 'AbortError'));
		      };

		      xhr.open(request.method, request.url, true);

		      if (request.credentials === 'include') {
		        xhr.withCredentials = true;
		      } else if (request.credentials === 'omit') {
		        xhr.withCredentials = false;
		      }

		      if ('responseType' in xhr && support.blob) {
		        xhr.responseType = 'blob';
		      }

		      request.headers.forEach(function(value, name) {
		        xhr.setRequestHeader(name, value);
		      });

		      if (request.signal) {
		        request.signal.addEventListener('abort', abortXhr);

		        xhr.onreadystatechange = function() {
		          // DONE (success or failure)
		          if (xhr.readyState === 4) {
		            request.signal.removeEventListener('abort', abortXhr);
		          }
		        };
		      }

		      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
		    })
		  }

		  fetch.polyfill = true;

		  if (!self.fetch) {
		    self.fetch = fetch;
		    self.Headers = Headers;
		    self.Request = Request;
		    self.Response = Response;
		  }

		  exports.Headers = Headers;
		  exports.Request = Request;
		  exports.Response = Response;
		  exports.fetch = fetch;

		  Object.defineProperty(exports, '__esModule', { value: true });

		  return exports;

		}))({});
		})(__self__);
		__self__.fetch.ponyfill = true;
		// Remove "polyfill" property added by whatwg-fetch
		delete __self__.fetch.polyfill;
		// Choose between native implementation (global) or custom implementation (__self__)
		// var ctx = global.fetch ? global : __self__;
		var ctx = __self__; // this line disable service worker support temporarily
		exports = ctx.fetch; // To enable: import fetch from 'cross-fetch'
		exports.default = ctx.fetch; // For TypeScript consumers without esModuleInterop.
		exports.fetch = ctx.fetch; // To enable: import {fetch} from 'cross-fetch'
		exports.Headers = ctx.Headers;
		exports.Request = ctx.Request;
		exports.Response = ctx.Response;
		module.exports = exports; 
	} (browserPonyfill, browserPonyfill.exports));
	return browserPonyfill.exports;
}

(function (module, exports) {
	var fetchApi;
	if (typeof fetch === 'function') {
	  if (typeof commonjsGlobal !== 'undefined' && commonjsGlobal.fetch) {
	    fetchApi = commonjsGlobal.fetch;
	  } else if (typeof window !== 'undefined' && window.fetch) {
	    fetchApi = window.fetch;
	  } else {
	    fetchApi = fetch;
	  }
	}

	if (typeof commonjsRequire !== 'undefined' && (typeof window === 'undefined' || typeof window.document === 'undefined')) {
	  var f = fetchApi || requireBrowserPonyfill();
	  if (f.default) f = f.default;
	  exports.default = f;
	  module.exports = exports.default;
	} 
} (getFetch$1, getFetch$1.exports));

var getFetchExports = getFetch$1.exports;
const getFetch = /*@__PURE__*/getDefaultExportFromCjs(getFetchExports);

const fetchNode = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: getFetch
}, [getFetchExports]);

function _typeof$1(obj) { "@babel/helpers - typeof"; return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof$1(obj); }
var fetchApi;
if (typeof fetch === 'function') {
  if (typeof global !== 'undefined' && global.fetch) {
    fetchApi = global.fetch;
  } else if (typeof window !== 'undefined' && window.fetch) {
    fetchApi = window.fetch;
  } else {
    fetchApi = fetch;
  }
}
var XmlHttpRequestApi;
if (hasXMLHttpRequest()) {
  if (typeof global !== 'undefined' && global.XMLHttpRequest) {
    XmlHttpRequestApi = global.XMLHttpRequest;
  } else if (typeof window !== 'undefined' && window.XMLHttpRequest) {
    XmlHttpRequestApi = window.XMLHttpRequest;
  }
}
var ActiveXObjectApi;
if (typeof ActiveXObject === 'function') {
  if (typeof global !== 'undefined' && global.ActiveXObject) {
    ActiveXObjectApi = global.ActiveXObject;
  } else if (typeof window !== 'undefined' && window.ActiveXObject) {
    ActiveXObjectApi = window.ActiveXObject;
  }
}
if (!fetchApi && fetchNode && !XmlHttpRequestApi && !ActiveXObjectApi) fetchApi = getFetch || fetchNode;
if (typeof fetchApi !== 'function') fetchApi = undefined;
var addQueryString = function addQueryString(url, params) {
  if (params && _typeof$1(params) === 'object') {
    var queryString = '';
    for (var paramName in params) {
      queryString += '&' + encodeURIComponent(paramName) + '=' + encodeURIComponent(params[paramName]);
    }
    if (!queryString) return url;
    url = url + (url.indexOf('?') !== -1 ? '&' : '?') + queryString.slice(1);
  }
  return url;
};
var fetchIt = function fetchIt(url, fetchOptions, callback) {
  fetchApi(url, fetchOptions).then(function (response) {
    if (!response.ok) return callback(response.statusText || 'Error', {
      status: response.status
    });
    response.text().then(function (data) {
      callback(null, {
        status: response.status,
        data: data
      });
    }).catch(callback);
  }).catch(callback);
};
var omitFetchOptions = false;
var requestWithFetch = function requestWithFetch(options, url, payload, callback) {
  if (options.queryStringParams) {
    url = addQueryString(url, options.queryStringParams);
  }
  var headers = defaults({}, typeof options.customHeaders === 'function' ? options.customHeaders() : options.customHeaders);
  if (payload) headers['Content-Type'] = 'application/json';
  var reqOptions = typeof options.requestOptions === 'function' ? options.requestOptions(payload) : options.requestOptions;
  var fetchOptions = defaults({
    method: payload ? 'POST' : 'GET',
    body: payload ? options.stringify(payload) : undefined,
    headers: headers
  }, omitFetchOptions ? {} : reqOptions);
  try {
    fetchIt(url, fetchOptions, callback);
  } catch (e) {
    if (!reqOptions || Object.keys(reqOptions).length === 0 || !e.message || e.message.indexOf('not implemented') < 0) {
      return callback(e);
    }
    try {
      Object.keys(reqOptions).forEach(function (opt) {
        delete fetchOptions[opt];
      });
      fetchIt(url, fetchOptions, callback);
      omitFetchOptions = true;
    } catch (err) {
      callback(err);
    }
  }
};
var requestWithXmlHttpRequest = function requestWithXmlHttpRequest(options, url, payload, callback) {
  if (payload && _typeof$1(payload) === 'object') {
    payload = addQueryString('', payload).slice(1);
  }
  if (options.queryStringParams) {
    url = addQueryString(url, options.queryStringParams);
  }
  try {
    var x;
    if (XmlHttpRequestApi) {
      x = new XmlHttpRequestApi();
    } else {
      x = new ActiveXObjectApi('MSXML2.XMLHTTP.3.0');
    }
    x.open(payload ? 'POST' : 'GET', url, 1);
    if (!options.crossDomain) {
      x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    }
    x.withCredentials = !!options.withCredentials;
    if (payload) {
      x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
    if (x.overrideMimeType) {
      x.overrideMimeType('application/json');
    }
    var h = options.customHeaders;
    h = typeof h === 'function' ? h() : h;
    if (h) {
      for (var i in h) {
        x.setRequestHeader(i, h[i]);
      }
    }
    x.onreadystatechange = function () {
      x.readyState > 3 && callback(x.status >= 400 ? x.statusText : null, {
        status: x.status,
        data: x.responseText
      });
    };
    x.send(payload);
  } catch (e) {
    console && console.log(e);
  }
};
var request = function request(options, url, payload, callback) {
  if (typeof payload === 'function') {
    callback = payload;
    payload = undefined;
  }
  callback = callback || function () {};
  if (fetchApi && url.indexOf('file:') !== 0) {
    return requestWithFetch(options, url, payload, callback);
  }
  if (hasXMLHttpRequest() || typeof ActiveXObject === 'function') {
    return requestWithXmlHttpRequest(options, url, payload, callback);
  }
  callback(new Error('No fetch and no xhr implementation found!'));
};

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var getDefaults = function getDefaults() {
  return {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
    addPath: '/locales/add/{{lng}}/{{ns}}',
    allowMultiLoading: false,
    parse: function parse(data) {
      return JSON.parse(data);
    },
    stringify: JSON.stringify,
    parsePayload: function parsePayload(namespace, key, fallbackValue) {
      return _defineProperty({}, key, fallbackValue || '');
    },
    parseLoadPayload: function parseLoadPayload(languages, namespaces) {
      return undefined;
    },
    request: request,
    reloadInterval: typeof window !== 'undefined' ? false : 60 * 60 * 1000,
    customHeaders: {},
    queryStringParams: {},
    crossDomain: false,
    withCredentials: false,
    overrideMimeType: false,
    requestOptions: {
      mode: 'cors',
      credentials: 'same-origin',
      cache: 'default'
    }
  };
};
var Backend = function () {
  function Backend(services) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var allOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    _classCallCheck(this, Backend);
    this.services = services;
    this.options = options;
    this.allOptions = allOptions;
    this.type = 'backend';
    this.init(services, options, allOptions);
  }
  _createClass(Backend, [{
    key: "init",
    value: function init(services) {
      var _this = this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var allOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.services = services;
      this.options = defaults(options, this.options || {}, getDefaults());
      this.allOptions = allOptions;
      if (this.services && this.options.reloadInterval) {
        setInterval(function () {
          return _this.reload();
        }, this.options.reloadInterval);
      }
    }
  }, {
    key: "readMulti",
    value: function readMulti(languages, namespaces, callback) {
      this._readAny(languages, languages, namespaces, namespaces, callback);
    }
  }, {
    key: "read",
    value: function read(language, namespace, callback) {
      this._readAny([language], language, [namespace], namespace, callback);
    }
  }, {
    key: "_readAny",
    value: function _readAny(languages, loadUrlLanguages, namespaces, loadUrlNamespaces, callback) {
      var _this2 = this;
      var loadPath = this.options.loadPath;
      if (typeof this.options.loadPath === 'function') {
        loadPath = this.options.loadPath(languages, namespaces);
      }
      loadPath = makePromise(loadPath);
      loadPath.then(function (resolvedLoadPath) {
        if (!resolvedLoadPath) return callback(null, {});
        var url = _this2.services.interpolator.interpolate(resolvedLoadPath, {
          lng: languages.join('+'),
          ns: namespaces.join('+')
        });
        _this2.loadUrl(url, callback, loadUrlLanguages, loadUrlNamespaces);
      });
    }
  }, {
    key: "loadUrl",
    value: function loadUrl(url, callback, languages, namespaces) {
      var _this3 = this;
      var lng = typeof languages === 'string' ? [languages] : languages;
      var ns = typeof namespaces === 'string' ? [namespaces] : namespaces;
      var payload = this.options.parseLoadPayload(lng, ns);
      this.options.request(this.options, url, payload, function (err, res) {
        if (res && (res.status >= 500 && res.status < 600 || !res.status)) return callback('failed loading ' + url + '; status code: ' + res.status, true);
        if (res && res.status >= 400 && res.status < 500) return callback('failed loading ' + url + '; status code: ' + res.status, false);
        if (!res && err && err.message && err.message.indexOf('Failed to fetch') > -1) return callback('failed loading ' + url + ': ' + err.message, true);
        if (err) return callback(err, false);
        var ret, parseErr;
        try {
          if (typeof res.data === 'string') {
            ret = _this3.options.parse(res.data, languages, namespaces);
          } else {
            ret = res.data;
          }
        } catch (e) {
          parseErr = 'failed parsing ' + url + ' to json';
        }
        if (parseErr) return callback(parseErr, false);
        callback(null, ret);
      });
    }
  }, {
    key: "create",
    value: function create(languages, namespace, key, fallbackValue, callback) {
      var _this4 = this;
      if (!this.options.addPath) return;
      if (typeof languages === 'string') languages = [languages];
      var payload = this.options.parsePayload(namespace, key, fallbackValue);
      var finished = 0;
      var dataArray = [];
      var resArray = [];
      languages.forEach(function (lng) {
        var addPath = _this4.options.addPath;
        if (typeof _this4.options.addPath === 'function') {
          addPath = _this4.options.addPath(lng, namespace);
        }
        var url = _this4.services.interpolator.interpolate(addPath, {
          lng: lng,
          ns: namespace
        });
        _this4.options.request(_this4.options, url, payload, function (data, res) {
          finished += 1;
          dataArray.push(data);
          resArray.push(res);
          if (finished === languages.length) {
            if (typeof callback === 'function') callback(dataArray, resArray);
          }
        });
      });
    }
  }, {
    key: "reload",
    value: function reload() {
      var _this5 = this;
      var _this$services = this.services,
        backendConnector = _this$services.backendConnector,
        languageUtils = _this$services.languageUtils,
        logger = _this$services.logger;
      var currentLanguage = backendConnector.language;
      if (currentLanguage && currentLanguage.toLowerCase() === 'cimode') return;
      var toLoad = [];
      var append = function append(lng) {
        var lngs = languageUtils.toResolveHierarchy(lng);
        lngs.forEach(function (l) {
          if (toLoad.indexOf(l) < 0) toLoad.push(l);
        });
      };
      append(currentLanguage);
      if (this.allOptions.preload) this.allOptions.preload.forEach(function (l) {
        return append(l);
      });
      toLoad.forEach(function (lng) {
        _this5.allOptions.ns.forEach(function (ns) {
          backendConnector.read(lng, ns, 'read', null, null, function (err, data) {
            if (err) logger.warn("loading namespace ".concat(ns, " for language ").concat(lng, " failed"), err);
            if (!err && data) logger.log("loaded namespace ".concat(ns, " for language ").concat(lng), data);
            backendConnector.loaded("".concat(lng, "|").concat(ns), err, data);
          });
        });
      });
    }
  }]);
  return Backend;
}();
Backend.type = 'backend';

instance.use(Backend).use(Browser).use(initReactI18next).init({
  fallbackLng: "en",
  debug: true,
  returnNull: false,
  interpolation: {
    escapeValue: false
  }
});

const index = '';

const container = document.getElementById("root");
if (!container) {
  throw new Error(
    "Контейнер root не найден. Не удалось вмонтировать реакт приложение"
  );
}
const root = createRoot(container);
root.render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserRouter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StoreProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) }) }) }) })
);

export { AiFillEye as $, AiFillStar as A, BrowserView_1 as B, Card$3 as C, Drawer as D, TextAlignEnum as E, Avatar$3 as F, Card$1 as G, HStack as H, Avatar$1 as I, useInitialEffect as J, TextSizeEnum as K, ListBox as L, Modal as M, createEntityAdapter as N, combineReducers as O, Page$1 as P, useNavigate as Q, getRouteArticleEdit as R, Skeleton$1 as S, TextComponent$1 as T, USER_LOCAL_STORAGE_KEY as U, VStack as V, Button$1 as W, AppLink$3 as X, getRouteProfile as Y, createSelector as Z, GenIcon as _, useParams as a, AppImage as a0, getRouteArticlesDetails as a1, AppLink$1 as a2, toggleFeatures as a3, useJsonSettings as a4, saveJsonSettings as a5, isMobile_1 as a6, ARTICLE_VIEW_LOCAL_STORAGE_KEY as a7, CardThemeEnum as a8, Flex$1 as a9, AiOutlineTable as aa, BsList as ab, useSearchParams as ac, useStore as b, useDispatch as c, classNames as d, useAppDispatch as e, useSelector as f, getUserAuthData as g, getFeatureFlag as h, importShared as i, jsxRuntimeExports as j, updateFeatureFlags as k, TextComponent$3 as l, Button$3 as m, ThemeButtonEnum as n, MobileView_1 as o, SizeButtonEnum as p, Skeleton$3 as q, rtkApi as r, createSlice as s, createAsyncThunk as t, useTranslation as u, userActions as v, TextThemeEnum as w, ToggleFeatures$1 as x, ListBoxDeprecated as y, Loader as z };
