(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(s){if(s.ep)return;s.ep=!0;const c=o(s);fetch(s.href,c)}})();function getDefaultExportFromCjs(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var jsxRuntime={exports:{}},reactJsxRuntime_production_min={},react={exports:{}},react_production_min={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l$1=Symbol.for("react.element"),n$1=Symbol.for("react.portal"),p$2=Symbol.for("react.fragment"),q$1=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v$1=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z$1=Symbol.iterator;function A$1(i){return i===null||typeof i!="object"?null:(i=z$1&&i[z$1]||i["@@iterator"],typeof i=="function"?i:null)}var B$1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C$1=Object.assign,D$1={};function E$1(i,e,o){this.props=i,this.context=e,this.refs=D$1,this.updater=o||B$1}E$1.prototype.isReactComponent={};E$1.prototype.setState=function(i,e){if(typeof i!="object"&&typeof i!="function"&&i!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,i,e,"setState")};E$1.prototype.forceUpdate=function(i){this.updater.enqueueForceUpdate(this,i,"forceUpdate")};function F(){}F.prototype=E$1.prototype;function G$1(i,e,o){this.props=i,this.context=e,this.refs=D$1,this.updater=o||B$1}var H$1=G$1.prototype=new F;H$1.constructor=G$1;C$1(H$1,E$1.prototype);H$1.isPureReactComponent=!0;var I$1=Array.isArray,J=Object.prototype.hasOwnProperty,K$1={current:null},L$1={key:!0,ref:!0,__self:!0,__source:!0};function M$1(i,e,o){var a,s={},c=null,d=null;if(e!=null)for(a in e.ref!==void 0&&(d=e.ref),e.key!==void 0&&(c=""+e.key),e)J.call(e,a)&&!L$1.hasOwnProperty(a)&&(s[a]=e[a]);var h=arguments.length-2;if(h===1)s.children=o;else if(1<h){for(var _=Array(h),g=0;g<h;g++)_[g]=arguments[g+2];s.children=_}if(i&&i.defaultProps)for(a in h=i.defaultProps,h)s[a]===void 0&&(s[a]=h[a]);return{$$typeof:l$1,type:i,key:c,ref:d,props:s,_owner:K$1.current}}function N$1(i,e){return{$$typeof:l$1,type:i.type,key:e,ref:i.ref,props:i.props,_owner:i._owner}}function O$1(i){return typeof i=="object"&&i!==null&&i.$$typeof===l$1}function escape(i){var e={"=":"=0",":":"=2"};return"$"+i.replace(/[=:]/g,function(o){return e[o]})}var P$1=/\/+/g;function Q$1(i,e){return typeof i=="object"&&i!==null&&i.key!=null?escape(""+i.key):e.toString(36)}function R$1(i,e,o,a,s){var c=typeof i;(c==="undefined"||c==="boolean")&&(i=null);var d=!1;if(i===null)d=!0;else switch(c){case"string":case"number":d=!0;break;case"object":switch(i.$$typeof){case l$1:case n$1:d=!0}}if(d)return d=i,s=s(d),i=a===""?"."+Q$1(d,0):a,I$1(s)?(o="",i!=null&&(o=i.replace(P$1,"$&/")+"/"),R$1(s,e,o,"",function(g){return g})):s!=null&&(O$1(s)&&(s=N$1(s,o+(!s.key||d&&d.key===s.key?"":(""+s.key).replace(P$1,"$&/")+"/")+i)),e.push(s)),1;if(d=0,a=a===""?".":a+":",I$1(i))for(var h=0;h<i.length;h++){c=i[h];var _=a+Q$1(c,h);d+=R$1(c,e,o,_,s)}else if(_=A$1(i),typeof _=="function")for(i=_.call(i),h=0;!(c=i.next()).done;)c=c.value,_=a+Q$1(c,h++),d+=R$1(c,e,o,_,s);else if(c==="object")throw e=String(i),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return d}function S$1(i,e,o){if(i==null)return i;var a=[],s=0;return R$1(i,a,"","",function(c){return e.call(o,c,s++)}),a}function T$1(i){if(i._status===-1){var e=i._result;e=e(),e.then(function(o){(i._status===0||i._status===-1)&&(i._status=1,i._result=o)},function(o){(i._status===0||i._status===-1)&&(i._status=2,i._result=o)}),i._status===-1&&(i._status=0,i._result=e)}if(i._status===1)return i._result.default;throw i._result}var U$1={current:null},V$1={transition:null},W$1={ReactCurrentDispatcher:U$1,ReactCurrentBatchConfig:V$1,ReactCurrentOwner:K$1};function X$1(){throw Error("act(...) is not supported in production builds of React.")}react_production_min.Children={map:S$1,forEach:function(i,e,o){S$1(i,function(){e.apply(this,arguments)},o)},count:function(i){var e=0;return S$1(i,function(){e++}),e},toArray:function(i){return S$1(i,function(e){return e})||[]},only:function(i){if(!O$1(i))throw Error("React.Children.only expected to receive a single React element child.");return i}};react_production_min.Component=E$1;react_production_min.Fragment=p$2;react_production_min.Profiler=r;react_production_min.PureComponent=G$1;react_production_min.StrictMode=q$1;react_production_min.Suspense=w;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W$1;react_production_min.act=X$1;react_production_min.cloneElement=function(i,e,o){if(i==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+i+".");var a=C$1({},i.props),s=i.key,c=i.ref,d=i._owner;if(e!=null){if(e.ref!==void 0&&(c=e.ref,d=K$1.current),e.key!==void 0&&(s=""+e.key),i.type&&i.type.defaultProps)var h=i.type.defaultProps;for(_ in e)J.call(e,_)&&!L$1.hasOwnProperty(_)&&(a[_]=e[_]===void 0&&h!==void 0?h[_]:e[_])}var _=arguments.length-2;if(_===1)a.children=o;else if(1<_){h=Array(_);for(var g=0;g<_;g++)h[g]=arguments[g+2];a.children=h}return{$$typeof:l$1,type:i.type,key:s,ref:c,props:a,_owner:d}};react_production_min.createContext=function(i){return i={$$typeof:u,_currentValue:i,_currentValue2:i,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},i.Provider={$$typeof:t,_context:i},i.Consumer=i};react_production_min.createElement=M$1;react_production_min.createFactory=function(i){var e=M$1.bind(null,i);return e.type=i,e};react_production_min.createRef=function(){return{current:null}};react_production_min.forwardRef=function(i){return{$$typeof:v$1,render:i}};react_production_min.isValidElement=O$1;react_production_min.lazy=function(i){return{$$typeof:y,_payload:{_status:-1,_result:i},_init:T$1}};react_production_min.memo=function(i,e){return{$$typeof:x,type:i,compare:e===void 0?null:e}};react_production_min.startTransition=function(i){var e=V$1.transition;V$1.transition={};try{i()}finally{V$1.transition=e}};react_production_min.unstable_act=X$1;react_production_min.useCallback=function(i,e){return U$1.current.useCallback(i,e)};react_production_min.useContext=function(i){return U$1.current.useContext(i)};react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(i){return U$1.current.useDeferredValue(i)};react_production_min.useEffect=function(i,e){return U$1.current.useEffect(i,e)};react_production_min.useId=function(){return U$1.current.useId()};react_production_min.useImperativeHandle=function(i,e,o){return U$1.current.useImperativeHandle(i,e,o)};react_production_min.useInsertionEffect=function(i,e){return U$1.current.useInsertionEffect(i,e)};react_production_min.useLayoutEffect=function(i,e){return U$1.current.useLayoutEffect(i,e)};react_production_min.useMemo=function(i,e){return U$1.current.useMemo(i,e)};react_production_min.useReducer=function(i,e,o){return U$1.current.useReducer(i,e,o)};react_production_min.useRef=function(i){return U$1.current.useRef(i)};react_production_min.useState=function(i){return U$1.current.useState(i)};react_production_min.useSyncExternalStore=function(i,e,o){return U$1.current.useSyncExternalStore(i,e,o)};react_production_min.useTransition=function(){return U$1.current.useTransition()};react_production_min.version="18.3.1";react.exports=react_production_min;var reactExports=react.exports;const React=getDefaultExportFromCjs(reactExports);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m$1=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p$1={key:!0,ref:!0,__self:!0,__source:!0};function q(i,e,o){var a,s={},c=null,d=null;o!==void 0&&(c=""+o),e.key!==void 0&&(c=""+e.key),e.ref!==void 0&&(d=e.ref);for(a in e)m$1.call(e,a)&&!p$1.hasOwnProperty(a)&&(s[a]=e[a]);if(i&&i.defaultProps)for(a in e=i.defaultProps,e)s[a]===void 0&&(s[a]=e[a]);return{$$typeof:k,type:i,key:c,ref:d,props:s,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;jsxRuntime.exports=reactJsxRuntime_production_min;var jsxRuntimeExports=jsxRuntime.exports,client={},reactDom={exports:{}},reactDom_production_min={},scheduler={exports:{}},scheduler_production_min={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(i){function e(vt,Ut){var Ft=vt.length;vt.push(Ut);e:for(;0<Ft;){var Ht=Ft-1>>>1,tn=vt[Ht];if(0<s(tn,Ut))vt[Ht]=Ut,vt[Ft]=tn,Ft=Ht;else break e}}function o(vt){return vt.length===0?null:vt[0]}function a(vt){if(vt.length===0)return null;var Ut=vt[0],Ft=vt.pop();if(Ft!==Ut){vt[0]=Ft;e:for(var Ht=0,tn=vt.length,xn=tn>>>1;Ht<xn;){var Ct=2*(Ht+1)-1,Bt=vt[Ct],Xt=Ct+1,jt=vt[Xt];if(0>s(Bt,Ft))Xt<tn&&0>s(jt,Bt)?(vt[Ht]=jt,vt[Xt]=Ft,Ht=Xt):(vt[Ht]=Bt,vt[Ct]=Ft,Ht=Ct);else if(Xt<tn&&0>s(jt,Ft))vt[Ht]=jt,vt[Xt]=Ft,Ht=Xt;else break e}}return Ut}function s(vt,Ut){var Ft=vt.sortIndex-Ut.sortIndex;return Ft!==0?Ft:vt.id-Ut.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();i.unstable_now=function(){return d.now()-h}}var _=[],g=[],$=1,_e=null,j=3,tt=!1,rt=!1,ot=!1,et=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,it=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function nt(vt){for(var Ut=o(g);Ut!==null;){if(Ut.callback===null)a(g);else if(Ut.startTime<=vt)a(g),Ut.sortIndex=Ut.expirationTime,e(_,Ut);else break;Ut=o(g)}}function ct(vt){if(ot=!1,nt(vt),!rt)if(o(_)!==null)rt=!0,Rt(mt);else{var Ut=o(g);Ut!==null&&It(ct,Ut.startTime-vt)}}function mt(vt,Ut){rt=!1,ot&&(ot=!1,b(gt),gt=-1),tt=!0;var Ft=j;try{for(nt(Ut),_e=o(_);_e!==null&&(!(_e.expirationTime>Ut)||vt&&!_t());){var Ht=_e.callback;if(typeof Ht=="function"){_e.callback=null,j=_e.priorityLevel;var tn=Ht(_e.expirationTime<=Ut);Ut=i.unstable_now(),typeof tn=="function"?_e.callback=tn:_e===o(_)&&a(_),nt(Ut)}else a(_);_e=o(_)}if(_e!==null)var xn=!0;else{var Ct=o(g);Ct!==null&&It(ct,Ct.startTime-Ut),xn=!1}return xn}finally{_e=null,j=Ft,tt=!1}}var dt=!1,ft=null,gt=-1,ut=5,at=-1;function _t(){return!(i.unstable_now()-at<ut)}function wt(){if(ft!==null){var vt=i.unstable_now();at=vt;var Ut=!0;try{Ut=ft(!0,vt)}finally{Ut?At():(dt=!1,ft=null)}}else dt=!1}var At;if(typeof it=="function")At=function(){it(wt)};else if(typeof MessageChannel<"u"){var Lt=new MessageChannel,Dt=Lt.port2;Lt.port1.onmessage=wt,At=function(){Dt.postMessage(null)}}else At=function(){et(wt,0)};function Rt(vt){ft=vt,dt||(dt=!0,At())}function It(vt,Ut){gt=et(function(){vt(i.unstable_now())},Ut)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(vt){vt.callback=null},i.unstable_continueExecution=function(){rt||tt||(rt=!0,Rt(mt))},i.unstable_forceFrameRate=function(vt){0>vt||125<vt?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ut=0<vt?Math.floor(1e3/vt):5},i.unstable_getCurrentPriorityLevel=function(){return j},i.unstable_getFirstCallbackNode=function(){return o(_)},i.unstable_next=function(vt){switch(j){case 1:case 2:case 3:var Ut=3;break;default:Ut=j}var Ft=j;j=Ut;try{return vt()}finally{j=Ft}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(vt,Ut){switch(vt){case 1:case 2:case 3:case 4:case 5:break;default:vt=3}var Ft=j;j=vt;try{return Ut()}finally{j=Ft}},i.unstable_scheduleCallback=function(vt,Ut,Ft){var Ht=i.unstable_now();switch(typeof Ft=="object"&&Ft!==null?(Ft=Ft.delay,Ft=typeof Ft=="number"&&0<Ft?Ht+Ft:Ht):Ft=Ht,vt){case 1:var tn=-1;break;case 2:tn=250;break;case 5:tn=1073741823;break;case 4:tn=1e4;break;default:tn=5e3}return tn=Ft+tn,vt={id:$++,callback:Ut,priorityLevel:vt,startTime:Ft,expirationTime:tn,sortIndex:-1},Ft>Ht?(vt.sortIndex=Ft,e(g,vt),o(_)===null&&vt===o(g)&&(ot?(b(gt),gt=-1):ot=!0,It(ct,Ft-Ht))):(vt.sortIndex=tn,e(_,vt),rt||tt||(rt=!0,Rt(mt))),vt},i.unstable_shouldYield=_t,i.unstable_wrapCallback=function(vt){var Ut=j;return function(){var Ft=j;j=Ut;try{return vt.apply(this,arguments)}finally{j=Ft}}}})(scheduler_production_min);scheduler.exports=scheduler_production_min;var schedulerExports=scheduler.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=reactExports,ca=schedulerExports;function p(i){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+i,o=1;o<arguments.length;o++)e+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+i+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(i,e){ha(i,e),ha(i+"Capture",e)}function ha(i,e){for(ea[i]=e,i=0;i<e.length;i++)da.add(e[i])}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la={},ma={};function oa(i){return ja.call(ma,i)?!0:ja.call(la,i)?!1:ka.test(i)?ma[i]=!0:(la[i]=!0,!1)}function pa(i,e,o,a){if(o!==null&&o.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function qa(i,e,o,a){if(e===null||typeof e>"u"||pa(i,e,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function v(i,e,o,a,s,c,d){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=a,this.attributeNamespace=s,this.mustUseProperty=o,this.propertyName=i,this.type=e,this.sanitizeURL=c,this.removeEmptyString=d}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){z[i]=new v(i,0,!1,i,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var e=i[0];z[e]=new v(e,1,!1,i[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(i){z[i]=new v(i,2,!1,i.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){z[i]=new v(i,2,!1,i,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){z[i]=new v(i,3,!1,i.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(i){z[i]=new v(i,3,!0,i,null,!1,!1)});["capture","download"].forEach(function(i){z[i]=new v(i,4,!1,i,null,!1,!1)});["cols","rows","size","span"].forEach(function(i){z[i]=new v(i,6,!1,i,null,!1,!1)});["rowSpan","start"].forEach(function(i){z[i]=new v(i,5,!1,i.toLowerCase(),null,!1,!1)});var ra=/[\-:]([a-z])/g;function sa(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var e=i.replace(ra,sa);z[e]=new v(e,1,!1,i,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var e=i.replace(ra,sa);z[e]=new v(e,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(i){var e=i.replace(ra,sa);z[e]=new v(e,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(i){z[i]=new v(i,1,!1,i.toLowerCase(),null,!1,!1)});z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(i){z[i]=new v(i,1,!1,i.toLowerCase(),null,!0,!0)});function ta(i,e,o,a){var s=z.hasOwnProperty(e)?z[e]:null;(s!==null?s.type!==0:a||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qa(e,o,s,a)&&(o=null),a||s===null?oa(e)&&(o===null?i.removeAttribute(e):i.setAttribute(e,""+o)):s.mustUseProperty?i[s.propertyName]=o===null?s.type===3?!1:"":o:(e=s.attributeName,a=s.attributeNamespace,o===null?i.removeAttribute(e):(s=s.type,o=s===3||s===4&&o===!0?"":""+o,a?i.setAttributeNS(a,e,o):i.setAttribute(e,o))))}var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy"),Ia=Symbol.for("react.offscreen"),Ja=Symbol.iterator;function Ka(i){return i===null||typeof i!="object"?null:(i=Ja&&i[Ja]||i["@@iterator"],typeof i=="function"?i:null)}var A=Object.assign,La;function Ma(i){if(La===void 0)try{throw Error()}catch(o){var e=o.stack.trim().match(/\n( *(at )?)/);La=e&&e[1]||""}return`
`+La+i}var Na=!1;function Oa(i,e){if(!i||Na)return"";Na=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(g){var a=g}Reflect.construct(i,[],e)}else{try{e.call()}catch(g){a=g}i.call(e.prototype)}else{try{throw Error()}catch(g){a=g}i()}}catch(g){if(g&&a&&typeof g.stack=="string"){for(var s=g.stack.split(`
`),c=a.stack.split(`
`),d=s.length-1,h=c.length-1;1<=d&&0<=h&&s[d]!==c[h];)h--;for(;1<=d&&0<=h;d--,h--)if(s[d]!==c[h]){if(d!==1||h!==1)do if(d--,h--,0>h||s[d]!==c[h]){var _=`
`+s[d].replace(" at new "," at ");return i.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",i.displayName)),_}while(1<=d&&0<=h);break}}}finally{Na=!1,Error.prepareStackTrace=o}return(i=i?i.displayName||i.name:"")?Ma(i):""}function Pa(i){switch(i.tag){case 5:return Ma(i.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return i=Oa(i.type,!1),i;case 11:return i=Oa(i.type.render,!1),i;case 1:return i=Oa(i.type,!0),i;default:return""}}function Qa(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case ya:return"Fragment";case wa:return"Portal";case Aa:return"Profiler";case za:return"StrictMode";case Ea:return"Suspense";case Fa:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case Ca:return(i.displayName||"Context")+".Consumer";case Ba:return(i._context.displayName||"Context")+".Provider";case Da:var e=i.render;return i=i.displayName,i||(i=e.displayName||e.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Ga:return e=i.displayName||null,e!==null?e:Qa(i.type)||"Memo";case Ha:e=i._payload,i=i._init;try{return Qa(i(e))}catch{}}return null}function Ra(i){var e=i.type;switch(i.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=e.render,i=i.displayName||i.name||"",e.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(e);case 8:return e===za?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sa(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ta(i){var e=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ua(i){var e=Ta(i)?"checked":"value",o=Object.getOwnPropertyDescriptor(i.constructor.prototype,e),a=""+i[e];if(!i.hasOwnProperty(e)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var s=o.get,c=o.set;return Object.defineProperty(i,e,{configurable:!0,get:function(){return s.call(this)},set:function(d){a=""+d,c.call(this,d)}}),Object.defineProperty(i,e,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){i._valueTracker=null,delete i[e]}}}}function Va(i){i._valueTracker||(i._valueTracker=Ua(i))}function Wa(i){if(!i)return!1;var e=i._valueTracker;if(!e)return!0;var o=e.getValue(),a="";return i&&(a=Ta(i)?i.checked?"true":"false":i.value),i=a,i!==o?(e.setValue(i),!0):!1}function Xa(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Ya(i,e){var o=e.checked;return A({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??i._wrapperState.initialChecked})}function Za(i,e){var o=e.defaultValue==null?"":e.defaultValue,a=e.checked!=null?e.checked:e.defaultChecked;o=Sa(e.value!=null?e.value:o),i._wrapperState={initialChecked:a,initialValue:o,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ab(i,e){e=e.checked,e!=null&&ta(i,"checked",e,!1)}function bb(i,e){ab(i,e);var o=Sa(e.value),a=e.type;if(o!=null)a==="number"?(o===0&&i.value===""||i.value!=o)&&(i.value=""+o):i.value!==""+o&&(i.value=""+o);else if(a==="submit"||a==="reset"){i.removeAttribute("value");return}e.hasOwnProperty("value")?cb(i,e.type,o):e.hasOwnProperty("defaultValue")&&cb(i,e.type,Sa(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(i.defaultChecked=!!e.defaultChecked)}function db(i,e,o){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var a=e.type;if(!(a!=="submit"&&a!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+i._wrapperState.initialValue,o||e===i.value||(i.value=e),i.defaultValue=e}o=i.name,o!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,o!==""&&(i.name=o)}function cb(i,e,o){(e!=="number"||Xa(i.ownerDocument)!==i)&&(o==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+o&&(i.defaultValue=""+o))}var eb=Array.isArray;function fb(i,e,o,a){if(i=i.options,e){e={};for(var s=0;s<o.length;s++)e["$"+o[s]]=!0;for(o=0;o<i.length;o++)s=e.hasOwnProperty("$"+i[o].value),i[o].selected!==s&&(i[o].selected=s),s&&a&&(i[o].defaultSelected=!0)}else{for(o=""+Sa(o),e=null,s=0;s<i.length;s++){if(i[s].value===o){i[s].selected=!0,a&&(i[s].defaultSelected=!0);return}e!==null||i[s].disabled||(e=i[s])}e!==null&&(e.selected=!0)}}function gb(i,e){if(e.dangerouslySetInnerHTML!=null)throw Error(p(91));return A({},e,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function hb(i,e){var o=e.value;if(o==null){if(o=e.children,e=e.defaultValue,o!=null){if(e!=null)throw Error(p(92));if(eb(o)){if(1<o.length)throw Error(p(93));o=o[0]}e=o}e==null&&(e=""),o=e}i._wrapperState={initialValue:Sa(o)}}function ib(i,e){var o=Sa(e.value),a=Sa(e.defaultValue);o!=null&&(o=""+o,o!==i.value&&(i.value=o),e.defaultValue==null&&i.defaultValue!==o&&(i.defaultValue=o)),a!=null&&(i.defaultValue=""+a)}function jb(i){var e=i.textContent;e===i._wrapperState.initialValue&&e!==""&&e!==null&&(i.value=e)}function kb(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lb(i,e){return i==null||i==="http://www.w3.org/1999/xhtml"?kb(e):i==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var mb,nb=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,o,a,s){MSApp.execUnsafeLocalFunction(function(){return i(e,o,a,s)})}:i}(function(i,e){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=e;else{for(mb=mb||document.createElement("div"),mb.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=mb.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;e.firstChild;)i.appendChild(e.firstChild)}});function ob(i,e){if(e){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=e;return}}i.textContent=e}var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(i){qb.forEach(function(e){e=e+i.charAt(0).toUpperCase()+i.substring(1),pb[e]=pb[i]})});function rb(i,e,o){return e==null||typeof e=="boolean"||e===""?"":o||typeof e!="number"||e===0||pb.hasOwnProperty(i)&&pb[i]?(""+e).trim():e+"px"}function sb(i,e){i=i.style;for(var o in e)if(e.hasOwnProperty(o)){var a=o.indexOf("--")===0,s=rb(o,e[o],a);o==="float"&&(o="cssFloat"),a?i.setProperty(o,s):i[o]=s}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ub(i,e){if(e){if(tb[i]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(p(137,i));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(p(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(p(61))}if(e.style!=null&&typeof e.style!="object")throw Error(p(62))}}function vb(i,e){if(i.indexOf("-")===-1)return typeof e.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wb=null;function xb(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var yb=null,zb=null,Ab=null;function Bb(i){if(i=Cb(i)){if(typeof yb!="function")throw Error(p(280));var e=i.stateNode;e&&(e=Db(e),yb(i.stateNode,i.type,e))}}function Eb(i){zb?Ab?Ab.push(i):Ab=[i]:zb=i}function Fb(){if(zb){var i=zb,e=Ab;if(Ab=zb=null,Bb(i),e)for(i=0;i<e.length;i++)Bb(e[i])}}function Gb(i,e){return i(e)}function Hb(){}var Ib=!1;function Jb(i,e,o){if(Ib)return i(e,o);Ib=!0;try{return Gb(i,e,o)}finally{Ib=!1,(zb!==null||Ab!==null)&&(Hb(),Fb())}}function Kb(i,e){var o=i.stateNode;if(o===null)return null;var a=Db(o);if(a===null)return null;o=a[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(i=i.type,a=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!a;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(p(231,e,typeof o));return o}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0}}),window.addEventListener("test",Mb,Mb),window.removeEventListener("test",Mb,Mb)}catch{Lb=!1}function Nb(i,e,o,a,s,c,d,h,_){var g=Array.prototype.slice.call(arguments,3);try{e.apply(o,g)}catch($){this.onError($)}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(i){Ob=!0,Pb=i}};function Tb(i,e,o,a,s,c,d,h,_){Ob=!1,Pb=null,Nb.apply(Sb,arguments)}function Ub(i,e,o,a,s,c,d,h,_){if(Tb.apply(this,arguments),Ob){if(Ob){var g=Pb;Ob=!1,Pb=null}else throw Error(p(198));Qb||(Qb=!0,Rb=g)}}function Vb(i){var e=i,o=i;if(i.alternate)for(;e.return;)e=e.return;else{i=e;do e=i,e.flags&4098&&(o=e.return),i=e.return;while(i)}return e.tag===3?o:null}function Wb(i){if(i.tag===13){var e=i.memoizedState;if(e===null&&(i=i.alternate,i!==null&&(e=i.memoizedState)),e!==null)return e.dehydrated}return null}function Xb(i){if(Vb(i)!==i)throw Error(p(188))}function Yb(i){var e=i.alternate;if(!e){if(e=Vb(i),e===null)throw Error(p(188));return e!==i?null:i}for(var o=i,a=e;;){var s=o.return;if(s===null)break;var c=s.alternate;if(c===null){if(a=s.return,a!==null){o=a;continue}break}if(s.child===c.child){for(c=s.child;c;){if(c===o)return Xb(s),i;if(c===a)return Xb(s),e;c=c.sibling}throw Error(p(188))}if(o.return!==a.return)o=s,a=c;else{for(var d=!1,h=s.child;h;){if(h===o){d=!0,o=s,a=c;break}if(h===a){d=!0,a=s,o=c;break}h=h.sibling}if(!d){for(h=c.child;h;){if(h===o){d=!0,o=c,a=s;break}if(h===a){d=!0,a=c,o=s;break}h=h.sibling}if(!d)throw Error(p(189))}}if(o.alternate!==a)throw Error(p(190))}if(o.tag!==3)throw Error(p(188));return o.stateNode.current===o?i:e}function Zb(i){return i=Yb(i),i!==null?$b(i):null}function $b(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var e=$b(i);if(e!==null)return e;i=i.sibling}return null}var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(i){if(lc&&typeof lc.onCommitFiberRoot=="function")try{lc.onCommitFiberRoot(kc,i,void 0,(i.current.flags&128)===128)}catch{}}var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(i){return i>>>=0,i===0?32:31-(pc(i)/qc|0)|0}var rc=64,sc=4194304;function tc(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function uc(i,e){var o=i.pendingLanes;if(o===0)return 0;var a=0,s=i.suspendedLanes,c=i.pingedLanes,d=o&268435455;if(d!==0){var h=d&~s;h!==0?a=tc(h):(c&=d,c!==0&&(a=tc(c)))}else d=o&~s,d!==0?a=tc(d):c!==0&&(a=tc(c));if(a===0)return 0;if(e!==0&&e!==a&&!(e&s)&&(s=a&-a,c=e&-e,s>=c||s===16&&(c&4194240)!==0))return e;if(a&4&&(a|=o&16),e=i.entangledLanes,e!==0)for(i=i.entanglements,e&=a;0<e;)o=31-oc(e),s=1<<o,a|=i[o],e&=~s;return a}function vc(i,e){switch(i){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wc(i,e){for(var o=i.suspendedLanes,a=i.pingedLanes,s=i.expirationTimes,c=i.pendingLanes;0<c;){var d=31-oc(c),h=1<<d,_=s[d];_===-1?(!(h&o)||h&a)&&(s[d]=vc(h,e)):_<=e&&(i.expiredLanes|=h),c&=~h}}function xc(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function yc(){var i=rc;return rc<<=1,!(rc&4194240)&&(rc=64),i}function zc(i){for(var e=[],o=0;31>o;o++)e.push(i);return e}function Ac(i,e,o){i.pendingLanes|=e,e!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,e=31-oc(e),i[e]=o}function Bc(i,e){var o=i.pendingLanes&~e;i.pendingLanes=e,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=e,i.mutableReadLanes&=e,i.entangledLanes&=e,e=i.entanglements;var a=i.eventTimes;for(i=i.expirationTimes;0<o;){var s=31-oc(o),c=1<<s;e[s]=0,a[s]=-1,i[s]=-1,o&=~c}}function Cc(i,e){var o=i.entangledLanes|=e;for(i=i.entanglements;o;){var a=31-oc(o),s=1<<a;s&e|i[a]&e&&(i[a]|=e),o&=~s}}var C=0;function Dc(i){return i&=-i,1<i?4<i?i&268435455?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sc(i,e){switch(i){case"focusin":case"focusout":Lc=null;break;case"dragenter":case"dragleave":Mc=null;break;case"mouseover":case"mouseout":Nc=null;break;case"pointerover":case"pointerout":Oc.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pc.delete(e.pointerId)}}function Tc(i,e,o,a,s,c){return i===null||i.nativeEvent!==c?(i={blockedOn:e,domEventName:o,eventSystemFlags:a,nativeEvent:c,targetContainers:[s]},e!==null&&(e=Cb(e),e!==null&&Fc(e)),i):(i.eventSystemFlags|=a,e=i.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),i)}function Uc(i,e,o,a,s){switch(e){case"focusin":return Lc=Tc(Lc,i,e,o,a,s),!0;case"dragenter":return Mc=Tc(Mc,i,e,o,a,s),!0;case"mouseover":return Nc=Tc(Nc,i,e,o,a,s),!0;case"pointerover":var c=s.pointerId;return Oc.set(c,Tc(Oc.get(c)||null,i,e,o,a,s)),!0;case"gotpointercapture":return c=s.pointerId,Pc.set(c,Tc(Pc.get(c)||null,i,e,o,a,s)),!0}return!1}function Vc(i){var e=Wc(i.target);if(e!==null){var o=Vb(e);if(o!==null){if(e=o.tag,e===13){if(e=Wb(o),e!==null){i.blockedOn=e,Ic(i.priority,function(){Gc(o)});return}}else if(e===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Xc(i){if(i.blockedOn!==null)return!1;for(var e=i.targetContainers;0<e.length;){var o=Yc(i.domEventName,i.eventSystemFlags,e[0],i.nativeEvent);if(o===null){o=i.nativeEvent;var a=new o.constructor(o.type,o);wb=a,o.target.dispatchEvent(a),wb=null}else return e=Cb(o),e!==null&&Fc(e),i.blockedOn=o,!1;e.shift()}return!0}function Zc(i,e,o){Xc(i)&&o.delete(e)}function $c(){Jc=!1,Lc!==null&&Xc(Lc)&&(Lc=null),Mc!==null&&Xc(Mc)&&(Mc=null),Nc!==null&&Xc(Nc)&&(Nc=null),Oc.forEach(Zc),Pc.forEach(Zc)}function ad(i,e){i.blockedOn===e&&(i.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)))}function bd(i){function e(s){return ad(s,i)}if(0<Kc.length){ad(Kc[0],i);for(var o=1;o<Kc.length;o++){var a=Kc[o];a.blockedOn===i&&(a.blockedOn=null)}}for(Lc!==null&&ad(Lc,i),Mc!==null&&ad(Mc,i),Nc!==null&&ad(Nc,i),Oc.forEach(e),Pc.forEach(e),o=0;o<Qc.length;o++)a=Qc[o],a.blockedOn===i&&(a.blockedOn=null);for(;0<Qc.length&&(o=Qc[0],o.blockedOn===null);)Vc(o),o.blockedOn===null&&Qc.shift()}var cd=ua.ReactCurrentBatchConfig,dd=!0;function ed(i,e,o,a){var s=C,c=cd.transition;cd.transition=null;try{C=1,fd(i,e,o,a)}finally{C=s,cd.transition=c}}function gd(i,e,o,a){var s=C,c=cd.transition;cd.transition=null;try{C=4,fd(i,e,o,a)}finally{C=s,cd.transition=c}}function fd(i,e,o,a){if(dd){var s=Yc(i,e,o,a);if(s===null)hd(i,e,a,id,o),Sc(i,a);else if(Uc(s,i,e,o,a))a.stopPropagation();else if(Sc(i,a),e&4&&-1<Rc.indexOf(i)){for(;s!==null;){var c=Cb(s);if(c!==null&&Ec(c),c=Yc(i,e,o,a),c===null&&hd(i,e,a,id,o),c===s)break;s=c}s!==null&&a.stopPropagation()}else hd(i,e,a,null,o)}}var id=null;function Yc(i,e,o,a){if(id=null,i=xb(a),i=Wc(i),i!==null)if(e=Vb(i),e===null)i=null;else if(o=e.tag,o===13){if(i=Wb(e),i!==null)return i;i=null}else if(o===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;i=null}else e!==i&&(i=null);return id=i,null}function jd(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var i,e=ld,o=e.length,a,s="value"in kd?kd.value:kd.textContent,c=s.length;for(i=0;i<o&&e[i]===s[i];i++);var d=o-i;for(a=1;a<=d&&e[o-a]===s[c-a];a++);return md=s.slice(i,1<a?1-a:void 0)}function od(i){var e=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&e===13&&(i=13)):i=e,i===10&&(i=13),32<=i||i===13?i:0}function pd(){return!0}function qd(){return!1}function rd(i){function e(o,a,s,c,d){this._reactName=o,this._targetInst=s,this.type=a,this.nativeEvent=c,this.target=d,this.currentTarget=null;for(var h in i)i.hasOwnProperty(h)&&(o=i[h],this[h]=o?o(c):c[h]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?pd:qd,this.isPropagationStopped=qd,this}return A(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd}),e}var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==yd&&(yd&&i.type==="mousemove"?(wd=i.screenX-yd.screenX,xd=i.screenY-yd.screenY):xd=wd=0,yd=i),wd)},movementY:function(i){return"movementY"in i?i.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(i){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(i):(i=Od[i])?!!e[i]:!1}function zd(){return Pd}var Qd=A({},ud,{key:function(i){if(i.key){var e=Md[i.key]||i.key;if(e!=="Unidentified")return e}return i.type==="keypress"?(i=od(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Nd[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(i){return i.type==="keypress"?od(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?od(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=" ",fe=!1;function ge(i,e){switch(i){case"keyup":return $d.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function he(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var ie=!1;function je(i,e){switch(i){case"compositionend":return he(e);case"keypress":return e.which!==32?null:(fe=!0,ee);case"textInput":return i=e.data,i===ee&&fe?null:i;default:return null}}function ke(i,e){if(ie)return i==="compositionend"||!ae&&ge(i,e)?(i=nd(),md=ld=kd=null,ie=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return de&&e.locale!=="ko"?null:e.data;default:return null}}var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(i){var e=i&&i.nodeName&&i.nodeName.toLowerCase();return e==="input"?!!le[i.type]:e==="textarea"}function ne(i,e,o,a){Eb(a),e=oe(e,"onChange"),0<e.length&&(o=new td("onChange","change",null,o,a),i.push({event:o,listeners:e}))}var pe=null,qe=null;function re(i){se(i,0)}function te(i){var e=ue(i);if(Wa(e))return i}function ve(i,e){if(i==="change")return e}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;"),ye=typeof ze.oninput=="function"}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(i){if(i.propertyName==="value"&&te(qe)){var e=[];ne(e,qe,i,xb(i)),Jb(re,e)}}function Ce(i,e,o){i==="focusin"?(Ae(),pe=e,qe=o,pe.attachEvent("onpropertychange",Be)):i==="focusout"&&Ae()}function De(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return te(qe)}function Ee(i,e){if(i==="click")return te(e)}function Fe(i,e){if(i==="input"||i==="change")return te(e)}function Ge(i,e){return i===e&&(i!==0||1/i===1/e)||i!==i&&e!==e}var He=typeof Object.is=="function"?Object.is:Ge;function Ie(i,e){if(He(i,e))return!0;if(typeof i!="object"||i===null||typeof e!="object"||e===null)return!1;var o=Object.keys(i),a=Object.keys(e);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var s=o[a];if(!ja.call(e,s)||!He(i[s],e[s]))return!1}return!0}function Je(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Ke(i,e){var o=Je(i);i=0;for(var a;o;){if(o.nodeType===3){if(a=i+o.textContent.length,i<=e&&a>=e)return{node:o,offset:e-i};i=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Je(o)}}function Le(i,e){return i&&e?i===e?!0:i&&i.nodeType===3?!1:e&&e.nodeType===3?Le(i,e.parentNode):"contains"in i?i.contains(e):i.compareDocumentPosition?!!(i.compareDocumentPosition(e)&16):!1:!1}function Me(){for(var i=window,e=Xa();e instanceof i.HTMLIFrameElement;){try{var o=typeof e.contentWindow.location.href=="string"}catch{o=!1}if(o)i=e.contentWindow;else break;e=Xa(i.document)}return e}function Ne(i){var e=i&&i.nodeName&&i.nodeName.toLowerCase();return e&&(e==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||e==="textarea"||i.contentEditable==="true")}function Oe(i){var e=Me(),o=i.focusedElem,a=i.selectionRange;if(e!==o&&o&&o.ownerDocument&&Le(o.ownerDocument.documentElement,o)){if(a!==null&&Ne(o)){if(e=a.start,i=a.end,i===void 0&&(i=e),"selectionStart"in o)o.selectionStart=e,o.selectionEnd=Math.min(i,o.value.length);else if(i=(e=o.ownerDocument||document)&&e.defaultView||window,i.getSelection){i=i.getSelection();var s=o.textContent.length,c=Math.min(a.start,s);a=a.end===void 0?c:Math.min(a.end,s),!i.extend&&c>a&&(s=a,a=c,c=s),s=Ke(o,c);var d=Ke(o,a);s&&d&&(i.rangeCount!==1||i.anchorNode!==s.node||i.anchorOffset!==s.offset||i.focusNode!==d.node||i.focusOffset!==d.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),i.removeAllRanges(),c>a?(i.addRange(e),i.extend(d.node,d.offset)):(e.setEnd(d.node,d.offset),i.addRange(e)))}}for(e=[],i=o;i=i.parentNode;)i.nodeType===1&&e.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<e.length;o++)i=e[o],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;function Ue(i,e,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Te||Qe==null||Qe!==Xa(a)||(a=Qe,"selectionStart"in a&&Ne(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Se&&Ie(Se,a)||(Se=a,a=oe(Re,"onSelect"),0<a.length&&(e=new td("onSelect","select",null,e,o),i.push({event:e,listeners:a}),e.target=Qe)))}function Ve(i,e){var o={};return o[i.toLowerCase()]=e.toLowerCase(),o["Webkit"+i]="webkit"+e,o["Moz"+i]="moz"+e,o}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(i){if(Xe[i])return Xe[i];if(!We[i])return i;var e=We[i],o;for(o in e)if(e.hasOwnProperty(o)&&o in Ye)return Xe[i]=e[o];return i}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ff(i,e){df.set(i,e),fa(e,[i])}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf)}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));function nf(i,e,o){var a=i.type||"unknown-event";i.currentTarget=o,Ub(a,e,void 0,i),i.currentTarget=null}function se(i,e){e=(e&4)!==0;for(var o=0;o<i.length;o++){var a=i[o],s=a.event;a=a.listeners;e:{var c=void 0;if(e)for(var d=a.length-1;0<=d;d--){var h=a[d],_=h.instance,g=h.currentTarget;if(h=h.listener,_!==c&&s.isPropagationStopped())break e;nf(s,h,g),c=_}else for(d=0;d<a.length;d++){if(h=a[d],_=h.instance,g=h.currentTarget,h=h.listener,_!==c&&s.isPropagationStopped())break e;nf(s,h,g),c=_}}}if(Qb)throw i=Rb,Qb=!1,Rb=null,i}function D(i,e){var o=e[of];o===void 0&&(o=e[of]=new Set);var a=i+"__bubble";o.has(a)||(pf(e,i,2,!1),o.add(a))}function qf(i,e,o){var a=0;e&&(a|=4),pf(o,i,a,e)}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(i){if(!i[rf]){i[rf]=!0,da.forEach(function(o){o!=="selectionchange"&&(mf.has(o)||qf(o,!1,i),qf(o,!0,i))});var e=i.nodeType===9?i:i.ownerDocument;e===null||e[rf]||(e[rf]=!0,qf("selectionchange",!1,e))}}function pf(i,e,o,a){switch(jd(e)){case 1:var s=ed;break;case 4:s=gd;break;default:s=fd}o=s.bind(null,e,o,i),s=void 0,!Lb||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),a?s!==void 0?i.addEventListener(e,o,{capture:!0,passive:s}):i.addEventListener(e,o,!0):s!==void 0?i.addEventListener(e,o,{passive:s}):i.addEventListener(e,o,!1)}function hd(i,e,o,a,s){var c=a;if(!(e&1)&&!(e&2)&&a!==null)e:for(;;){if(a===null)return;var d=a.tag;if(d===3||d===4){var h=a.stateNode.containerInfo;if(h===s||h.nodeType===8&&h.parentNode===s)break;if(d===4)for(d=a.return;d!==null;){var _=d.tag;if((_===3||_===4)&&(_=d.stateNode.containerInfo,_===s||_.nodeType===8&&_.parentNode===s))return;d=d.return}for(;h!==null;){if(d=Wc(h),d===null)return;if(_=d.tag,_===5||_===6){a=c=d;continue e}h=h.parentNode}}a=a.return}Jb(function(){var g=c,$=xb(o),_e=[];e:{var j=df.get(i);if(j!==void 0){var tt=td,rt=i;switch(i){case"keypress":if(od(o)===0)break e;case"keydown":case"keyup":tt=Rd;break;case"focusin":rt="focus",tt=Fd;break;case"focusout":rt="blur",tt=Fd;break;case"beforeblur":case"afterblur":tt=Fd;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":tt=Bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":tt=Dd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":tt=Vd;break;case $e:case af:case bf:tt=Hd;break;case cf:tt=Xd;break;case"scroll":tt=vd;break;case"wheel":tt=Zd;break;case"copy":case"cut":case"paste":tt=Jd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":tt=Td}var ot=(e&4)!==0,et=!ot&&i==="scroll",b=ot?j!==null?j+"Capture":null:j;ot=[];for(var it=g,nt;it!==null;){nt=it;var ct=nt.stateNode;if(nt.tag===5&&ct!==null&&(nt=ct,b!==null&&(ct=Kb(it,b),ct!=null&&ot.push(tf(it,ct,nt)))),et)break;it=it.return}0<ot.length&&(j=new tt(j,rt,null,o,$),_e.push({event:j,listeners:ot}))}}if(!(e&7)){e:{if(j=i==="mouseover"||i==="pointerover",tt=i==="mouseout"||i==="pointerout",j&&o!==wb&&(rt=o.relatedTarget||o.fromElement)&&(Wc(rt)||rt[uf]))break e;if((tt||j)&&(j=$.window===$?$:(j=$.ownerDocument)?j.defaultView||j.parentWindow:window,tt?(rt=o.relatedTarget||o.toElement,tt=g,rt=rt?Wc(rt):null,rt!==null&&(et=Vb(rt),rt!==et||rt.tag!==5&&rt.tag!==6)&&(rt=null)):(tt=null,rt=g),tt!==rt)){if(ot=Bd,ct="onMouseLeave",b="onMouseEnter",it="mouse",(i==="pointerout"||i==="pointerover")&&(ot=Td,ct="onPointerLeave",b="onPointerEnter",it="pointer"),et=tt==null?j:ue(tt),nt=rt==null?j:ue(rt),j=new ot(ct,it+"leave",tt,o,$),j.target=et,j.relatedTarget=nt,ct=null,Wc($)===g&&(ot=new ot(b,it+"enter",rt,o,$),ot.target=nt,ot.relatedTarget=et,ct=ot),et=ct,tt&&rt)t:{for(ot=tt,b=rt,it=0,nt=ot;nt;nt=vf(nt))it++;for(nt=0,ct=b;ct;ct=vf(ct))nt++;for(;0<it-nt;)ot=vf(ot),it--;for(;0<nt-it;)b=vf(b),nt--;for(;it--;){if(ot===b||b!==null&&ot===b.alternate)break t;ot=vf(ot),b=vf(b)}ot=null}else ot=null;tt!==null&&wf(_e,j,tt,ot,!1),rt!==null&&et!==null&&wf(_e,et,rt,ot,!0)}}e:{if(j=g?ue(g):window,tt=j.nodeName&&j.nodeName.toLowerCase(),tt==="select"||tt==="input"&&j.type==="file")var mt=ve;else if(me(j))if(we)mt=Fe;else{mt=De;var dt=Ce}else(tt=j.nodeName)&&tt.toLowerCase()==="input"&&(j.type==="checkbox"||j.type==="radio")&&(mt=Ee);if(mt&&(mt=mt(i,g))){ne(_e,mt,o,$);break e}dt&&dt(i,j,g),i==="focusout"&&(dt=j._wrapperState)&&dt.controlled&&j.type==="number"&&cb(j,"number",j.value)}switch(dt=g?ue(g):window,i){case"focusin":(me(dt)||dt.contentEditable==="true")&&(Qe=dt,Re=g,Se=null);break;case"focusout":Se=Re=Qe=null;break;case"mousedown":Te=!0;break;case"contextmenu":case"mouseup":case"dragend":Te=!1,Ue(_e,o,$);break;case"selectionchange":if(Pe)break;case"keydown":case"keyup":Ue(_e,o,$)}var ft;if(ae)e:{switch(i){case"compositionstart":var gt="onCompositionStart";break e;case"compositionend":gt="onCompositionEnd";break e;case"compositionupdate":gt="onCompositionUpdate";break e}gt=void 0}else ie?ge(i,o)&&(gt="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(gt="onCompositionStart");gt&&(de&&o.locale!=="ko"&&(ie||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&ie&&(ft=nd()):(kd=$,ld="value"in kd?kd.value:kd.textContent,ie=!0)),dt=oe(g,gt),0<dt.length&&(gt=new Ld(gt,i,null,o,$),_e.push({event:gt,listeners:dt}),ft?gt.data=ft:(ft=he(o),ft!==null&&(gt.data=ft)))),(ft=ce?je(i,o):ke(i,o))&&(g=oe(g,"onBeforeInput"),0<g.length&&($=new Ld("onBeforeInput","beforeinput",null,o,$),_e.push({event:$,listeners:g}),$.data=ft))}se(_e,e)})}function tf(i,e,o){return{instance:i,listener:e,currentTarget:o}}function oe(i,e){for(var o=e+"Capture",a=[];i!==null;){var s=i,c=s.stateNode;s.tag===5&&c!==null&&(s=c,c=Kb(i,o),c!=null&&a.unshift(tf(i,c,s)),c=Kb(i,e),c!=null&&a.push(tf(i,c,s))),i=i.return}return a}function vf(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function wf(i,e,o,a,s){for(var c=e._reactName,d=[];o!==null&&o!==a;){var h=o,_=h.alternate,g=h.stateNode;if(_!==null&&_===a)break;h.tag===5&&g!==null&&(h=g,s?(_=Kb(o,c),_!=null&&d.unshift(tf(o,_,h))):s||(_=Kb(o,c),_!=null&&d.push(tf(o,_,h)))),o=o.return}d.length!==0&&i.push({event:e,listeners:d})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(i){return(typeof i=="string"?i:""+i).replace(xf,`
`).replace(yf,"")}function Af(i,e,o){if(e=zf(e),zf(i)!==e&&o)throw Error(p(425))}function Bf(){}var Cf=null,Df=null;function Ef(i,e){return i==="textarea"||i==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ff=typeof setTimeout=="function"?setTimeout:void 0,Gf=typeof clearTimeout=="function"?clearTimeout:void 0,Hf=typeof Promise=="function"?Promise:void 0,Jf=typeof queueMicrotask=="function"?queueMicrotask:typeof Hf<"u"?function(i){return Hf.resolve(null).then(i).catch(If)}:Ff;function If(i){setTimeout(function(){throw i})}function Kf(i,e){var o=e,a=0;do{var s=o.nextSibling;if(i.removeChild(o),s&&s.nodeType===8)if(o=s.data,o==="/$"){if(a===0){i.removeChild(s),bd(e);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=s}while(o);bd(e)}function Lf(i){for(;i!=null;i=i.nextSibling){var e=i.nodeType;if(e===1||e===3)break;if(e===8){if(e=i.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return i}function Mf(i){i=i.previousSibling;for(var e=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"){if(e===0)return i;e--}else o==="/$"&&e++}i=i.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;function Wc(i){var e=i[Of];if(e)return e;for(var o=i.parentNode;o;){if(e=o[uf]||o[Of]){if(o=e.alternate,e.child!==null||o!==null&&o.child!==null)for(i=Mf(i);i!==null;){if(o=i[Of])return o;i=Mf(i)}return e}i=o,o=i.parentNode}return null}function Cb(i){return i=i[Of]||i[uf],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ue(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(p(33))}function Db(i){return i[Pf]||null}var Sf=[],Tf=-1;function Uf(i){return{current:i}}function E(i){0>Tf||(i.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G(i,e){Tf++,Sf[Tf]=i.current,i.current=e}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(i,e){var o=i.type.contextTypes;if(!o)return Vf;var a=i.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===e)return a.__reactInternalMemoizedMaskedChildContext;var s={},c;for(c in o)s[c]=e[c];return a&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=e,i.__reactInternalMemoizedMaskedChildContext=s),s}function Zf(i){return i=i.childContextTypes,i!=null}function $f(){E(Wf),E(H)}function ag(i,e,o){if(H.current!==Vf)throw Error(p(168));G(H,e),G(Wf,o)}function bg(i,e,o){var a=i.stateNode;if(e=e.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var s in a)if(!(s in e))throw Error(p(108,Ra(i)||"Unknown",s));return A({},o,a)}function cg(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Vf,Xf=H.current,G(H,i),G(Wf,Wf.current),!0}function dg(i,e,o){var a=i.stateNode;if(!a)throw Error(p(169));o?(i=bg(i,e,Xf),a.__reactInternalMemoizedMergedChildContext=i,E(Wf),E(H),G(H,i)):E(Wf),G(Wf,o)}var eg=null,fg=!1,gg=!1;function hg(i){eg===null?eg=[i]:eg.push(i)}function ig(i){fg=!0,hg(i)}function jg(){if(!gg&&eg!==null){gg=!0;var i=0,e=C;try{var o=eg;for(C=1;i<o.length;i++){var a=o[i];do a=a(!0);while(a!==null)}eg=null,fg=!1}catch(s){throw eg!==null&&(eg=eg.slice(i+1)),ac(fc,jg),s}finally{C=e,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(i,e){kg[lg++]=ng,kg[lg++]=mg,mg=i,ng=e}function ug(i,e,o){og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,qg=i;var a=rg;i=sg;var s=32-oc(a)-1;a&=~(1<<s),o+=1;var c=32-oc(e)+s;if(30<c){var d=s-s%5;c=(a&(1<<d)-1).toString(32),a>>=d,s-=d,rg=1<<32-oc(e)+s|o<<s|a,sg=c+i}else rg=1<<c|o<<s|a,sg=i}function vg(i){i.return!==null&&(tg(i,1),ug(i,1,0))}function wg(i){for(;i===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;i===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I=!1,zg=null;function Ag(i,e){var o=Bg(5,null,null,0);o.elementType="DELETED",o.stateNode=e,o.return=i,e=i.deletions,e===null?(i.deletions=[o],i.flags|=16):e.push(o)}function Cg(i,e){switch(i.tag){case 5:var o=i.type;return e=e.nodeType!==1||o.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(i.stateNode=e,xg=i,yg=Lf(e.firstChild),!0):!1;case 6:return e=i.pendingProps===""||e.nodeType!==3?null:e,e!==null?(i.stateNode=e,xg=i,yg=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(o=qg!==null?{id:rg,overflow:sg}:null,i.memoizedState={dehydrated:e,treeContext:o,retryLane:1073741824},o=Bg(18,null,null,0),o.stateNode=e,o.return=i,i.child=o,xg=i,yg=null,!0):!1;default:return!1}}function Dg(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Eg(i){if(I){var e=yg;if(e){var o=e;if(!Cg(i,e)){if(Dg(i))throw Error(p(418));e=Lf(o.nextSibling);var a=xg;e&&Cg(i,e)?Ag(a,o):(i.flags=i.flags&-4097|2,I=!1,xg=i)}}else{if(Dg(i))throw Error(p(418));i.flags=i.flags&-4097|2,I=!1,xg=i}}}function Fg(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;xg=i}function Gg(i){if(i!==xg)return!1;if(!I)return Fg(i),I=!0,!1;var e;if((e=i.tag!==3)&&!(e=i.tag!==5)&&(e=i.type,e=e!=="head"&&e!=="body"&&!Ef(i.type,i.memoizedProps)),e&&(e=yg)){if(Dg(i))throw Hg(),Error(p(418));for(;e;)Ag(i,e),e=Lf(e.nextSibling)}if(Fg(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(p(317));e:{for(i=i.nextSibling,e=0;i;){if(i.nodeType===8){var o=i.data;if(o==="/$"){if(e===0){yg=Lf(i.nextSibling);break e}e--}else o!=="$"&&o!=="$!"&&o!=="$?"||e++}i=i.nextSibling}yg=null}}else yg=xg?Lf(i.stateNode.nextSibling):null;return!0}function Hg(){for(var i=yg;i;)i=Lf(i.nextSibling)}function Ig(){yg=xg=null,I=!1}function Jg(i){zg===null?zg=[i]:zg.push(i)}var Kg=ua.ReactCurrentBatchConfig;function Lg(i,e,o){if(i=o.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(p(309));var a=o.stateNode}if(!a)throw Error(p(147,i));var s=a,c=""+i;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===c?e.ref:(e=function(d){var h=s.refs;d===null?delete h[c]:h[c]=d},e._stringRef=c,e)}if(typeof i!="string")throw Error(p(284));if(!o._owner)throw Error(p(290,i))}return i}function Mg(i,e){throw i=Object.prototype.toString.call(e),Error(p(31,i==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":i))}function Ng(i){var e=i._init;return e(i._payload)}function Og(i){function e(b,it){if(i){var nt=b.deletions;nt===null?(b.deletions=[it],b.flags|=16):nt.push(it)}}function o(b,it){if(!i)return null;for(;it!==null;)e(b,it),it=it.sibling;return null}function a(b,it){for(b=new Map;it!==null;)it.key!==null?b.set(it.key,it):b.set(it.index,it),it=it.sibling;return b}function s(b,it){return b=Pg(b,it),b.index=0,b.sibling=null,b}function c(b,it,nt){return b.index=nt,i?(nt=b.alternate,nt!==null?(nt=nt.index,nt<it?(b.flags|=2,it):nt):(b.flags|=2,it)):(b.flags|=1048576,it)}function d(b){return i&&b.alternate===null&&(b.flags|=2),b}function h(b,it,nt,ct){return it===null||it.tag!==6?(it=Qg(nt,b.mode,ct),it.return=b,it):(it=s(it,nt),it.return=b,it)}function _(b,it,nt,ct){var mt=nt.type;return mt===ya?$(b,it,nt.props.children,ct,nt.key):it!==null&&(it.elementType===mt||typeof mt=="object"&&mt!==null&&mt.$$typeof===Ha&&Ng(mt)===it.type)?(ct=s(it,nt.props),ct.ref=Lg(b,it,nt),ct.return=b,ct):(ct=Rg(nt.type,nt.key,nt.props,null,b.mode,ct),ct.ref=Lg(b,it,nt),ct.return=b,ct)}function g(b,it,nt,ct){return it===null||it.tag!==4||it.stateNode.containerInfo!==nt.containerInfo||it.stateNode.implementation!==nt.implementation?(it=Sg(nt,b.mode,ct),it.return=b,it):(it=s(it,nt.children||[]),it.return=b,it)}function $(b,it,nt,ct,mt){return it===null||it.tag!==7?(it=Tg(nt,b.mode,ct,mt),it.return=b,it):(it=s(it,nt),it.return=b,it)}function _e(b,it,nt){if(typeof it=="string"&&it!==""||typeof it=="number")return it=Qg(""+it,b.mode,nt),it.return=b,it;if(typeof it=="object"&&it!==null){switch(it.$$typeof){case va:return nt=Rg(it.type,it.key,it.props,null,b.mode,nt),nt.ref=Lg(b,null,it),nt.return=b,nt;case wa:return it=Sg(it,b.mode,nt),it.return=b,it;case Ha:var ct=it._init;return _e(b,ct(it._payload),nt)}if(eb(it)||Ka(it))return it=Tg(it,b.mode,nt,null),it.return=b,it;Mg(b,it)}return null}function j(b,it,nt,ct){var mt=it!==null?it.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number")return mt!==null?null:h(b,it,""+nt,ct);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case va:return nt.key===mt?_(b,it,nt,ct):null;case wa:return nt.key===mt?g(b,it,nt,ct):null;case Ha:return mt=nt._init,j(b,it,mt(nt._payload),ct)}if(eb(nt)||Ka(nt))return mt!==null?null:$(b,it,nt,ct,null);Mg(b,nt)}return null}function tt(b,it,nt,ct,mt){if(typeof ct=="string"&&ct!==""||typeof ct=="number")return b=b.get(nt)||null,h(it,b,""+ct,mt);if(typeof ct=="object"&&ct!==null){switch(ct.$$typeof){case va:return b=b.get(ct.key===null?nt:ct.key)||null,_(it,b,ct,mt);case wa:return b=b.get(ct.key===null?nt:ct.key)||null,g(it,b,ct,mt);case Ha:var dt=ct._init;return tt(b,it,nt,dt(ct._payload),mt)}if(eb(ct)||Ka(ct))return b=b.get(nt)||null,$(it,b,ct,mt,null);Mg(it,ct)}return null}function rt(b,it,nt,ct){for(var mt=null,dt=null,ft=it,gt=it=0,ut=null;ft!==null&&gt<nt.length;gt++){ft.index>gt?(ut=ft,ft=null):ut=ft.sibling;var at=j(b,ft,nt[gt],ct);if(at===null){ft===null&&(ft=ut);break}i&&ft&&at.alternate===null&&e(b,ft),it=c(at,it,gt),dt===null?mt=at:dt.sibling=at,dt=at,ft=ut}if(gt===nt.length)return o(b,ft),I&&tg(b,gt),mt;if(ft===null){for(;gt<nt.length;gt++)ft=_e(b,nt[gt],ct),ft!==null&&(it=c(ft,it,gt),dt===null?mt=ft:dt.sibling=ft,dt=ft);return I&&tg(b,gt),mt}for(ft=a(b,ft);gt<nt.length;gt++)ut=tt(ft,b,gt,nt[gt],ct),ut!==null&&(i&&ut.alternate!==null&&ft.delete(ut.key===null?gt:ut.key),it=c(ut,it,gt),dt===null?mt=ut:dt.sibling=ut,dt=ut);return i&&ft.forEach(function(_t){return e(b,_t)}),I&&tg(b,gt),mt}function ot(b,it,nt,ct){var mt=Ka(nt);if(typeof mt!="function")throw Error(p(150));if(nt=mt.call(nt),nt==null)throw Error(p(151));for(var dt=mt=null,ft=it,gt=it=0,ut=null,at=nt.next();ft!==null&&!at.done;gt++,at=nt.next()){ft.index>gt?(ut=ft,ft=null):ut=ft.sibling;var _t=j(b,ft,at.value,ct);if(_t===null){ft===null&&(ft=ut);break}i&&ft&&_t.alternate===null&&e(b,ft),it=c(_t,it,gt),dt===null?mt=_t:dt.sibling=_t,dt=_t,ft=ut}if(at.done)return o(b,ft),I&&tg(b,gt),mt;if(ft===null){for(;!at.done;gt++,at=nt.next())at=_e(b,at.value,ct),at!==null&&(it=c(at,it,gt),dt===null?mt=at:dt.sibling=at,dt=at);return I&&tg(b,gt),mt}for(ft=a(b,ft);!at.done;gt++,at=nt.next())at=tt(ft,b,gt,at.value,ct),at!==null&&(i&&at.alternate!==null&&ft.delete(at.key===null?gt:at.key),it=c(at,it,gt),dt===null?mt=at:dt.sibling=at,dt=at);return i&&ft.forEach(function(wt){return e(b,wt)}),I&&tg(b,gt),mt}function et(b,it,nt,ct){if(typeof nt=="object"&&nt!==null&&nt.type===ya&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case va:e:{for(var mt=nt.key,dt=it;dt!==null;){if(dt.key===mt){if(mt=nt.type,mt===ya){if(dt.tag===7){o(b,dt.sibling),it=s(dt,nt.props.children),it.return=b,b=it;break e}}else if(dt.elementType===mt||typeof mt=="object"&&mt!==null&&mt.$$typeof===Ha&&Ng(mt)===dt.type){o(b,dt.sibling),it=s(dt,nt.props),it.ref=Lg(b,dt,nt),it.return=b,b=it;break e}o(b,dt);break}else e(b,dt);dt=dt.sibling}nt.type===ya?(it=Tg(nt.props.children,b.mode,ct,nt.key),it.return=b,b=it):(ct=Rg(nt.type,nt.key,nt.props,null,b.mode,ct),ct.ref=Lg(b,it,nt),ct.return=b,b=ct)}return d(b);case wa:e:{for(dt=nt.key;it!==null;){if(it.key===dt)if(it.tag===4&&it.stateNode.containerInfo===nt.containerInfo&&it.stateNode.implementation===nt.implementation){o(b,it.sibling),it=s(it,nt.children||[]),it.return=b,b=it;break e}else{o(b,it);break}else e(b,it);it=it.sibling}it=Sg(nt,b.mode,ct),it.return=b,b=it}return d(b);case Ha:return dt=nt._init,et(b,it,dt(nt._payload),ct)}if(eb(nt))return rt(b,it,nt,ct);if(Ka(nt))return ot(b,it,nt,ct);Mg(b,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"?(nt=""+nt,it!==null&&it.tag===6?(o(b,it.sibling),it=s(it,nt),it.return=b,b=it):(o(b,it),it=Qg(nt,b.mode,ct),it.return=b,b=it),d(b)):o(b,it)}return et}var Ug=Og(!0),Vg=Og(!1),Wg=Uf(null),Xg=null,Yg=null,Zg=null;function $g(){Zg=Yg=Xg=null}function ah(i){var e=Wg.current;E(Wg),i._currentValue=e}function bh(i,e,o){for(;i!==null;){var a=i.alternate;if((i.childLanes&e)!==e?(i.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),i===o)break;i=i.return}}function ch(i,e){Xg=i,Zg=Yg=null,i=i.dependencies,i!==null&&i.firstContext!==null&&(i.lanes&e&&(dh=!0),i.firstContext=null)}function eh(i){var e=i._currentValue;if(Zg!==i)if(i={context:i,memoizedValue:e,next:null},Yg===null){if(Xg===null)throw Error(p(308));Yg=i,Xg.dependencies={lanes:0,firstContext:i}}else Yg=Yg.next=i;return e}var fh=null;function gh(i){fh===null?fh=[i]:fh.push(i)}function hh(i,e,o,a){var s=e.interleaved;return s===null?(o.next=o,gh(e)):(o.next=s.next,s.next=o),e.interleaved=o,ih(i,a)}function ih(i,e){i.lanes|=e;var o=i.alternate;for(o!==null&&(o.lanes|=e),o=i,i=i.return;i!==null;)i.childLanes|=e,o=i.alternate,o!==null&&(o.childLanes|=e),o=i,i=i.return;return o.tag===3?o.stateNode:null}var jh=!1;function kh(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lh(i,e){i=i.updateQueue,e.updateQueue===i&&(e.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function mh(i,e){return{eventTime:i,lane:e,tag:0,payload:null,callback:null,next:null}}function nh(i,e,o){var a=i.updateQueue;if(a===null)return null;if(a=a.shared,K&2){var s=a.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),a.pending=e,ih(i,o)}return s=a.interleaved,s===null?(e.next=e,gh(a)):(e.next=s.next,s.next=e),a.interleaved=e,ih(i,o)}function oh(i,e,o){if(e=e.updateQueue,e!==null&&(e=e.shared,(o&4194240)!==0)){var a=e.lanes;a&=i.pendingLanes,o|=a,e.lanes=o,Cc(i,o)}}function ph(i,e){var o=i.updateQueue,a=i.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var s=null,c=null;if(o=o.firstBaseUpdate,o!==null){do{var d={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};c===null?s=c=d:c=c.next=d,o=o.next}while(o!==null);c===null?s=c=e:c=c.next=e}else s=c=e;o={baseState:a.baseState,firstBaseUpdate:s,lastBaseUpdate:c,shared:a.shared,effects:a.effects},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=e:i.next=e,o.lastBaseUpdate=e}function qh(i,e,o,a){var s=i.updateQueue;jh=!1;var c=s.firstBaseUpdate,d=s.lastBaseUpdate,h=s.shared.pending;if(h!==null){s.shared.pending=null;var _=h,g=_.next;_.next=null,d===null?c=g:d.next=g,d=_;var $=i.alternate;$!==null&&($=$.updateQueue,h=$.lastBaseUpdate,h!==d&&(h===null?$.firstBaseUpdate=g:h.next=g,$.lastBaseUpdate=_))}if(c!==null){var _e=s.baseState;d=0,$=g=_=null,h=c;do{var j=h.lane,tt=h.eventTime;if((a&j)===j){$!==null&&($=$.next={eventTime:tt,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var rt=i,ot=h;switch(j=e,tt=o,ot.tag){case 1:if(rt=ot.payload,typeof rt=="function"){_e=rt.call(tt,_e,j);break e}_e=rt;break e;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=ot.payload,j=typeof rt=="function"?rt.call(tt,_e,j):rt,j==null)break e;_e=A({},_e,j);break e;case 2:jh=!0}}h.callback!==null&&h.lane!==0&&(i.flags|=64,j=s.effects,j===null?s.effects=[h]:j.push(h))}else tt={eventTime:tt,lane:j,tag:h.tag,payload:h.payload,callback:h.callback,next:null},$===null?(g=$=tt,_=_e):$=$.next=tt,d|=j;if(h=h.next,h===null){if(h=s.shared.pending,h===null)break;j=h,h=j.next,j.next=null,s.lastBaseUpdate=j,s.shared.pending=null}}while(!0);if($===null&&(_=_e),s.baseState=_,s.firstBaseUpdate=g,s.lastBaseUpdate=$,e=s.shared.interleaved,e!==null){s=e;do d|=s.lane,s=s.next;while(s!==e)}else c===null&&(s.shared.lanes=0);rh|=d,i.lanes=d,i.memoizedState=_e}}function sh(i,e,o){if(i=e.effects,e.effects=null,i!==null)for(e=0;e<i.length;e++){var a=i[e],s=a.callback;if(s!==null){if(a.callback=null,a=o,typeof s!="function")throw Error(p(191,s));s.call(a)}}}var th={},uh=Uf(th),vh=Uf(th),wh=Uf(th);function xh(i){if(i===th)throw Error(p(174));return i}function yh(i,e){switch(G(wh,e),G(vh,i),G(uh,th),i=e.nodeType,i){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lb(null,"");break;default:i=i===8?e.parentNode:e,e=i.namespaceURI||null,i=i.tagName,e=lb(e,i)}E(uh),G(uh,e)}function zh(){E(uh),E(vh),E(wh)}function Ah(i){xh(wh.current);var e=xh(uh.current),o=lb(e,i.type);e!==o&&(G(vh,i),G(uh,o))}function Bh(i){vh.current===i&&(E(uh),E(vh))}var L=Uf(0);function Ch(i){for(var e=i;e!==null;){if(e.tag===13){var o=e.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break;for(;e.sibling===null;){if(e.return===null||e.return===i)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Dh=[];function Eh(){for(var i=0;i<Dh.length;i++)Dh[i]._workInProgressVersionPrimary=null;Dh.length=0}var Fh=ua.ReactCurrentDispatcher,Gh=ua.ReactCurrentBatchConfig,Hh=0,M=null,N=null,O=null,Ih=!1,Jh=!1,Kh=0,Lh=0;function P(){throw Error(p(321))}function Mh(i,e){if(e===null)return!1;for(var o=0;o<e.length&&o<i.length;o++)if(!He(i[o],e[o]))return!1;return!0}function Nh(i,e,o,a,s,c){if(Hh=c,M=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fh.current=i===null||i.memoizedState===null?Oh:Ph,i=o(a,s),Jh){c=0;do{if(Jh=!1,Kh=0,25<=c)throw Error(p(301));c+=1,O=N=null,e.updateQueue=null,Fh.current=Qh,i=o(a,s)}while(Jh)}if(Fh.current=Rh,e=N!==null&&N.next!==null,Hh=0,O=N=M=null,Ih=!1,e)throw Error(p(300));return i}function Sh(){var i=Kh!==0;return Kh=0,i}function Th(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return O===null?M.memoizedState=O=i:O=O.next=i,O}function Uh(){if(N===null){var i=M.alternate;i=i!==null?i.memoizedState:null}else i=N.next;var e=O===null?M.memoizedState:O.next;if(e!==null)O=e,N=i;else{if(i===null)throw Error(p(310));N=i,i={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null},O===null?M.memoizedState=O=i:O=O.next=i}return O}function Vh(i,e){return typeof e=="function"?e(i):e}function Wh(i){var e=Uh(),o=e.queue;if(o===null)throw Error(p(311));o.lastRenderedReducer=i;var a=N,s=a.baseQueue,c=o.pending;if(c!==null){if(s!==null){var d=s.next;s.next=c.next,c.next=d}a.baseQueue=s=c,o.pending=null}if(s!==null){c=s.next,a=a.baseState;var h=d=null,_=null,g=c;do{var $=g.lane;if((Hh&$)===$)_!==null&&(_=_.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),a=g.hasEagerState?g.eagerState:i(a,g.action);else{var _e={lane:$,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};_===null?(h=_=_e,d=a):_=_.next=_e,M.lanes|=$,rh|=$}g=g.next}while(g!==null&&g!==c);_===null?d=a:_.next=h,He(a,e.memoizedState)||(dh=!0),e.memoizedState=a,e.baseState=d,e.baseQueue=_,o.lastRenderedState=a}if(i=o.interleaved,i!==null){s=i;do c=s.lane,M.lanes|=c,rh|=c,s=s.next;while(s!==i)}else s===null&&(o.lanes=0);return[e.memoizedState,o.dispatch]}function Xh(i){var e=Uh(),o=e.queue;if(o===null)throw Error(p(311));o.lastRenderedReducer=i;var a=o.dispatch,s=o.pending,c=e.memoizedState;if(s!==null){o.pending=null;var d=s=s.next;do c=i(c,d.action),d=d.next;while(d!==s);He(c,e.memoizedState)||(dh=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),o.lastRenderedState=c}return[c,a]}function Yh(){}function Zh(i,e){var o=M,a=Uh(),s=e(),c=!He(a.memoizedState,s);if(c&&(a.memoizedState=s,dh=!0),a=a.queue,$h(ai.bind(null,o,a,i),[i]),a.getSnapshot!==e||c||O!==null&&O.memoizedState.tag&1){if(o.flags|=2048,bi(9,ci.bind(null,o,a,s,e),void 0,null),Q===null)throw Error(p(349));Hh&30||di(o,e,s)}return s}function di(i,e,o){i.flags|=16384,i={getSnapshot:e,value:o},e=M.updateQueue,e===null?(e={lastEffect:null,stores:null},M.updateQueue=e,e.stores=[i]):(o=e.stores,o===null?e.stores=[i]:o.push(i))}function ci(i,e,o,a){e.value=o,e.getSnapshot=a,ei(e)&&fi(i)}function ai(i,e,o){return o(function(){ei(e)&&fi(i)})}function ei(i){var e=i.getSnapshot;i=i.value;try{var o=e();return!He(i,o)}catch{return!0}}function fi(i){var e=ih(i,1);e!==null&&gi(e,i,1,-1)}function hi(i){var e=Th();return typeof i=="function"&&(i=i()),e.memoizedState=e.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:i},e.queue=i,i=i.dispatch=ii.bind(null,M,i),[e.memoizedState,i]}function bi(i,e,o,a){return i={tag:i,create:e,destroy:o,deps:a,next:null},e=M.updateQueue,e===null?(e={lastEffect:null,stores:null},M.updateQueue=e,e.lastEffect=i.next=i):(o=e.lastEffect,o===null?e.lastEffect=i.next=i:(a=o.next,o.next=i,i.next=a,e.lastEffect=i)),i}function ji(){return Uh().memoizedState}function ki(i,e,o,a){var s=Th();M.flags|=i,s.memoizedState=bi(1|e,o,void 0,a===void 0?null:a)}function li(i,e,o,a){var s=Uh();a=a===void 0?null:a;var c=void 0;if(N!==null){var d=N.memoizedState;if(c=d.destroy,a!==null&&Mh(a,d.deps)){s.memoizedState=bi(e,o,c,a);return}}M.flags|=i,s.memoizedState=bi(1|e,o,c,a)}function mi(i,e){return ki(8390656,8,i,e)}function $h(i,e){return li(2048,8,i,e)}function ni(i,e){return li(4,2,i,e)}function oi(i,e){return li(4,4,i,e)}function pi(i,e){if(typeof e=="function")return i=i(),e(i),function(){e(null)};if(e!=null)return i=i(),e.current=i,function(){e.current=null}}function qi(i,e,o){return o=o!=null?o.concat([i]):null,li(4,4,pi.bind(null,e,i),o)}function ri(){}function si(i,e){var o=Uh();e=e===void 0?null:e;var a=o.memoizedState;return a!==null&&e!==null&&Mh(e,a[1])?a[0]:(o.memoizedState=[i,e],i)}function ti(i,e){var o=Uh();e=e===void 0?null:e;var a=o.memoizedState;return a!==null&&e!==null&&Mh(e,a[1])?a[0]:(i=i(),o.memoizedState=[i,e],i)}function ui(i,e,o){return Hh&21?(He(o,e)||(o=yc(),M.lanes|=o,rh|=o,i.baseState=!0),e):(i.baseState&&(i.baseState=!1,dh=!0),i.memoizedState=o)}function vi(i,e){var o=C;C=o!==0&&4>o?o:4,i(!0);var a=Gh.transition;Gh.transition={};try{i(!1),e()}finally{C=o,Gh.transition=a}}function wi(){return Uh().memoizedState}function xi(i,e,o){var a=yi(i);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},zi(i))Ai(e,o);else if(o=hh(i,e,o,a),o!==null){var s=R();gi(o,i,a,s),Bi(o,e,a)}}function ii(i,e,o){var a=yi(i),s={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(zi(i))Ai(e,s);else{var c=i.alternate;if(i.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var d=e.lastRenderedState,h=c(d,o);if(s.hasEagerState=!0,s.eagerState=h,He(h,d)){var _=e.interleaved;_===null?(s.next=s,gh(e)):(s.next=_.next,_.next=s),e.interleaved=s;return}}catch{}finally{}o=hh(i,e,s,a),o!==null&&(s=R(),gi(o,i,a,s),Bi(o,e,a))}}function zi(i){var e=i.alternate;return i===M||e!==null&&e===M}function Ai(i,e){Jh=Ih=!0;var o=i.pending;o===null?e.next=e:(e.next=o.next,o.next=e),i.pending=e}function Bi(i,e,o){if(o&4194240){var a=e.lanes;a&=i.pendingLanes,o|=a,e.lanes=o,Cc(i,o)}}var Rh={readContext:eh,useCallback:P,useContext:P,useEffect:P,useImperativeHandle:P,useInsertionEffect:P,useLayoutEffect:P,useMemo:P,useReducer:P,useRef:P,useState:P,useDebugValue:P,useDeferredValue:P,useTransition:P,useMutableSource:P,useSyncExternalStore:P,useId:P,unstable_isNewReconciler:!1},Oh={readContext:eh,useCallback:function(i,e){return Th().memoizedState=[i,e===void 0?null:e],i},useContext:eh,useEffect:mi,useImperativeHandle:function(i,e,o){return o=o!=null?o.concat([i]):null,ki(4194308,4,pi.bind(null,e,i),o)},useLayoutEffect:function(i,e){return ki(4194308,4,i,e)},useInsertionEffect:function(i,e){return ki(4,2,i,e)},useMemo:function(i,e){var o=Th();return e=e===void 0?null:e,i=i(),o.memoizedState=[i,e],i},useReducer:function(i,e,o){var a=Th();return e=o!==void 0?o(e):e,a.memoizedState=a.baseState=e,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:e},a.queue=i,i=i.dispatch=xi.bind(null,M,i),[a.memoizedState,i]},useRef:function(i){var e=Th();return i={current:i},e.memoizedState=i},useState:hi,useDebugValue:ri,useDeferredValue:function(i){return Th().memoizedState=i},useTransition:function(){var i=hi(!1),e=i[0];return i=vi.bind(null,i[1]),Th().memoizedState=i,[e,i]},useMutableSource:function(){},useSyncExternalStore:function(i,e,o){var a=M,s=Th();if(I){if(o===void 0)throw Error(p(407));o=o()}else{if(o=e(),Q===null)throw Error(p(349));Hh&30||di(a,e,o)}s.memoizedState=o;var c={value:o,getSnapshot:e};return s.queue=c,mi(ai.bind(null,a,c,i),[i]),a.flags|=2048,bi(9,ci.bind(null,a,c,o,e),void 0,null),o},useId:function(){var i=Th(),e=Q.identifierPrefix;if(I){var o=sg,a=rg;o=(a&~(1<<32-oc(a)-1)).toString(32)+o,e=":"+e+"R"+o,o=Kh++,0<o&&(e+="H"+o.toString(32)),e+=":"}else o=Lh++,e=":"+e+"r"+o.toString(32)+":";return i.memoizedState=e},unstable_isNewReconciler:!1},Ph={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Wh,useRef:ji,useState:function(){return Wh(Vh)},useDebugValue:ri,useDeferredValue:function(i){var e=Uh();return ui(e,N.memoizedState,i)},useTransition:function(){var i=Wh(Vh)[0],e=Uh().memoizedState;return[i,e]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1},Qh={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Xh,useRef:ji,useState:function(){return Xh(Vh)},useDebugValue:ri,useDeferredValue:function(i){var e=Uh();return N===null?e.memoizedState=i:ui(e,N.memoizedState,i)},useTransition:function(){var i=Xh(Vh)[0],e=Uh().memoizedState;return[i,e]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1};function Ci(i,e){if(i&&i.defaultProps){e=A({},e),i=i.defaultProps;for(var o in i)e[o]===void 0&&(e[o]=i[o]);return e}return e}function Di(i,e,o,a){e=i.memoizedState,o=o(a,e),o=o==null?e:A({},e,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var Ei={isMounted:function(i){return(i=i._reactInternals)?Vb(i)===i:!1},enqueueSetState:function(i,e,o){i=i._reactInternals;var a=R(),s=yi(i),c=mh(a,s);c.payload=e,o!=null&&(c.callback=o),e=nh(i,c,s),e!==null&&(gi(e,i,s,a),oh(e,i,s))},enqueueReplaceState:function(i,e,o){i=i._reactInternals;var a=R(),s=yi(i),c=mh(a,s);c.tag=1,c.payload=e,o!=null&&(c.callback=o),e=nh(i,c,s),e!==null&&(gi(e,i,s,a),oh(e,i,s))},enqueueForceUpdate:function(i,e){i=i._reactInternals;var o=R(),a=yi(i),s=mh(o,a);s.tag=2,e!=null&&(s.callback=e),e=nh(i,s,a),e!==null&&(gi(e,i,a,o),oh(e,i,a))}};function Fi(i,e,o,a,s,c,d){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(a,c,d):e.prototype&&e.prototype.isPureReactComponent?!Ie(o,a)||!Ie(s,c):!0}function Gi(i,e,o){var a=!1,s=Vf,c=e.contextType;return typeof c=="object"&&c!==null?c=eh(c):(s=Zf(e)?Xf:H.current,a=e.contextTypes,c=(a=a!=null)?Yf(i,s):Vf),e=new e(o,c),i.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ei,i.stateNode=e,e._reactInternals=i,a&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=c),e}function Hi(i,e,o,a){i=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(o,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(o,a),e.state!==i&&Ei.enqueueReplaceState(e,e.state,null)}function Ii(i,e,o,a){var s=i.stateNode;s.props=o,s.state=i.memoizedState,s.refs={},kh(i);var c=e.contextType;typeof c=="object"&&c!==null?s.context=eh(c):(c=Zf(e)?Xf:H.current,s.context=Yf(i,c)),s.state=i.memoizedState,c=e.getDerivedStateFromProps,typeof c=="function"&&(Di(i,e,c,o),s.state=i.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Ei.enqueueReplaceState(s,s.state,null),qh(i,o,s,a),s.state=i.memoizedState),typeof s.componentDidMount=="function"&&(i.flags|=4194308)}function Ji(i,e){try{var o="",a=e;do o+=Pa(a),a=a.return;while(a);var s=o}catch(c){s=`
Error generating stack: `+c.message+`
`+c.stack}return{value:i,source:e,stack:s,digest:null}}function Ki(i,e,o){return{value:i,source:null,stack:o??null,digest:e??null}}function Li(i,e){try{console.error(e.value)}catch(o){setTimeout(function(){throw o})}}var Mi=typeof WeakMap=="function"?WeakMap:Map;function Ni(i,e,o){o=mh(-1,o),o.tag=3,o.payload={element:null};var a=e.value;return o.callback=function(){Oi||(Oi=!0,Pi=a),Li(i,e)},o}function Qi(i,e,o){o=mh(-1,o),o.tag=3;var a=i.type.getDerivedStateFromError;if(typeof a=="function"){var s=e.value;o.payload=function(){return a(s)},o.callback=function(){Li(i,e)}}var c=i.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(o.callback=function(){Li(i,e),typeof a!="function"&&(Ri===null?Ri=new Set([this]):Ri.add(this));var d=e.stack;this.componentDidCatch(e.value,{componentStack:d!==null?d:""})}),o}function Si(i,e,o){var a=i.pingCache;if(a===null){a=i.pingCache=new Mi;var s=new Set;a.set(e,s)}else s=a.get(e),s===void 0&&(s=new Set,a.set(e,s));s.has(o)||(s.add(o),i=Ti.bind(null,i,e,o),e.then(i,i))}function Ui(i){do{var e;if((e=i.tag===13)&&(e=i.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return i;i=i.return}while(i!==null);return null}function Vi(i,e,o,a,s){return i.mode&1?(i.flags|=65536,i.lanes=s,i):(i===e?i.flags|=65536:(i.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(e=mh(-1,1),e.tag=2,nh(o,e,1))),o.lanes|=1),i)}var Wi=ua.ReactCurrentOwner,dh=!1;function Xi(i,e,o,a){e.child=i===null?Vg(e,null,o,a):Ug(e,i.child,o,a)}function Yi(i,e,o,a,s){o=o.render;var c=e.ref;return ch(e,s),a=Nh(i,e,o,a,c,s),o=Sh(),i!==null&&!dh?(e.updateQueue=i.updateQueue,e.flags&=-2053,i.lanes&=~s,Zi(i,e,s)):(I&&o&&vg(e),e.flags|=1,Xi(i,e,a,s),e.child)}function $i(i,e,o,a,s){if(i===null){var c=o.type;return typeof c=="function"&&!aj(c)&&c.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(e.tag=15,e.type=c,bj(i,e,c,a,s)):(i=Rg(o.type,null,a,e,e.mode,s),i.ref=e.ref,i.return=e,e.child=i)}if(c=i.child,!(i.lanes&s)){var d=c.memoizedProps;if(o=o.compare,o=o!==null?o:Ie,o(d,a)&&i.ref===e.ref)return Zi(i,e,s)}return e.flags|=1,i=Pg(c,a),i.ref=e.ref,i.return=e,e.child=i}function bj(i,e,o,a,s){if(i!==null){var c=i.memoizedProps;if(Ie(c,a)&&i.ref===e.ref)if(dh=!1,e.pendingProps=a=c,(i.lanes&s)!==0)i.flags&131072&&(dh=!0);else return e.lanes=i.lanes,Zi(i,e,s)}return cj(i,e,o,a,s)}function dj(i,e,o){var a=e.pendingProps,s=a.children,c=i!==null?i.memoizedState:null;if(a.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(ej,fj),fj|=o;else{if(!(o&1073741824))return i=c!==null?c.baseLanes|o:o,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:i,cachePool:null,transitions:null},e.updateQueue=null,G(ej,fj),fj|=i,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=c!==null?c.baseLanes:o,G(ej,fj),fj|=a}else c!==null?(a=c.baseLanes|o,e.memoizedState=null):a=o,G(ej,fj),fj|=a;return Xi(i,e,s,o),e.child}function gj(i,e){var o=e.ref;(i===null&&o!==null||i!==null&&i.ref!==o)&&(e.flags|=512,e.flags|=2097152)}function cj(i,e,o,a,s){var c=Zf(o)?Xf:H.current;return c=Yf(e,c),ch(e,s),o=Nh(i,e,o,a,c,s),a=Sh(),i!==null&&!dh?(e.updateQueue=i.updateQueue,e.flags&=-2053,i.lanes&=~s,Zi(i,e,s)):(I&&a&&vg(e),e.flags|=1,Xi(i,e,o,s),e.child)}function hj(i,e,o,a,s){if(Zf(o)){var c=!0;cg(e)}else c=!1;if(ch(e,s),e.stateNode===null)ij(i,e),Gi(e,o,a),Ii(e,o,a,s),a=!0;else if(i===null){var d=e.stateNode,h=e.memoizedProps;d.props=h;var _=d.context,g=o.contextType;typeof g=="object"&&g!==null?g=eh(g):(g=Zf(o)?Xf:H.current,g=Yf(e,g));var $=o.getDerivedStateFromProps,_e=typeof $=="function"||typeof d.getSnapshotBeforeUpdate=="function";_e||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==a||_!==g)&&Hi(e,d,a,g),jh=!1;var j=e.memoizedState;d.state=j,qh(e,a,d,s),_=e.memoizedState,h!==a||j!==_||Wf.current||jh?(typeof $=="function"&&(Di(e,o,$,a),_=e.memoizedState),(h=jh||Fi(e,o,h,a,j,_,g))?(_e||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(e.flags|=4194308)):(typeof d.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=_),d.props=a,d.state=_,d.context=g,a=h):(typeof d.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{d=e.stateNode,lh(i,e),h=e.memoizedProps,g=e.type===e.elementType?h:Ci(e.type,h),d.props=g,_e=e.pendingProps,j=d.context,_=o.contextType,typeof _=="object"&&_!==null?_=eh(_):(_=Zf(o)?Xf:H.current,_=Yf(e,_));var tt=o.getDerivedStateFromProps;($=typeof tt=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==_e||j!==_)&&Hi(e,d,a,_),jh=!1,j=e.memoizedState,d.state=j,qh(e,a,d,s);var rt=e.memoizedState;h!==_e||j!==rt||Wf.current||jh?(typeof tt=="function"&&(Di(e,o,tt,a),rt=e.memoizedState),(g=jh||Fi(e,o,g,a,j,rt,_)||!1)?($||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(a,rt,_),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(a,rt,_)),typeof d.componentDidUpdate=="function"&&(e.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof d.componentDidUpdate!="function"||h===i.memoizedProps&&j===i.memoizedState||(e.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===i.memoizedProps&&j===i.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=rt),d.props=a,d.state=rt,d.context=_,a=g):(typeof d.componentDidUpdate!="function"||h===i.memoizedProps&&j===i.memoizedState||(e.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===i.memoizedProps&&j===i.memoizedState||(e.flags|=1024),a=!1)}return jj(i,e,o,a,c,s)}function jj(i,e,o,a,s,c){gj(i,e);var d=(e.flags&128)!==0;if(!a&&!d)return s&&dg(e,o,!1),Zi(i,e,c);a=e.stateNode,Wi.current=e;var h=d&&typeof o.getDerivedStateFromError!="function"?null:a.render();return e.flags|=1,i!==null&&d?(e.child=Ug(e,i.child,null,c),e.child=Ug(e,null,h,c)):Xi(i,e,h,c),e.memoizedState=a.state,s&&dg(e,o,!0),e.child}function kj(i){var e=i.stateNode;e.pendingContext?ag(i,e.pendingContext,e.pendingContext!==e.context):e.context&&ag(i,e.context,!1),yh(i,e.containerInfo)}function lj(i,e,o,a,s){return Ig(),Jg(s),e.flags|=256,Xi(i,e,o,a),e.child}var mj={dehydrated:null,treeContext:null,retryLane:0};function nj(i){return{baseLanes:i,cachePool:null,transitions:null}}function oj(i,e,o){var a=e.pendingProps,s=L.current,c=!1,d=(e.flags&128)!==0,h;if((h=d)||(h=i!==null&&i.memoizedState===null?!1:(s&2)!==0),h?(c=!0,e.flags&=-129):(i===null||i.memoizedState!==null)&&(s|=1),G(L,s&1),i===null)return Eg(e),i=e.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?(e.mode&1?i.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(d=a.children,i=a.fallback,c?(a=e.mode,c=e.child,d={mode:"hidden",children:d},!(a&1)&&c!==null?(c.childLanes=0,c.pendingProps=d):c=pj(d,a,0,null),i=Tg(i,a,o,null),c.return=e,i.return=e,c.sibling=i,e.child=c,e.child.memoizedState=nj(o),e.memoizedState=mj,i):qj(e,d));if(s=i.memoizedState,s!==null&&(h=s.dehydrated,h!==null))return rj(i,e,d,a,h,s,o);if(c){c=a.fallback,d=e.mode,s=i.child,h=s.sibling;var _={mode:"hidden",children:a.children};return!(d&1)&&e.child!==s?(a=e.child,a.childLanes=0,a.pendingProps=_,e.deletions=null):(a=Pg(s,_),a.subtreeFlags=s.subtreeFlags&14680064),h!==null?c=Pg(h,c):(c=Tg(c,d,o,null),c.flags|=2),c.return=e,a.return=e,a.sibling=c,e.child=a,a=c,c=e.child,d=i.child.memoizedState,d=d===null?nj(o):{baseLanes:d.baseLanes|o,cachePool:null,transitions:d.transitions},c.memoizedState=d,c.childLanes=i.childLanes&~o,e.memoizedState=mj,a}return c=i.child,i=c.sibling,a=Pg(c,{mode:"visible",children:a.children}),!(e.mode&1)&&(a.lanes=o),a.return=e,a.sibling=null,i!==null&&(o=e.deletions,o===null?(e.deletions=[i],e.flags|=16):o.push(i)),e.child=a,e.memoizedState=null,a}function qj(i,e){return e=pj({mode:"visible",children:e},i.mode,0,null),e.return=i,i.child=e}function sj(i,e,o,a){return a!==null&&Jg(a),Ug(e,i.child,null,o),i=qj(e,e.pendingProps.children),i.flags|=2,e.memoizedState=null,i}function rj(i,e,o,a,s,c,d){if(o)return e.flags&256?(e.flags&=-257,a=Ki(Error(p(422))),sj(i,e,d,a)):e.memoizedState!==null?(e.child=i.child,e.flags|=128,null):(c=a.fallback,s=e.mode,a=pj({mode:"visible",children:a.children},s,0,null),c=Tg(c,s,d,null),c.flags|=2,a.return=e,c.return=e,a.sibling=c,e.child=a,e.mode&1&&Ug(e,i.child,null,d),e.child.memoizedState=nj(d),e.memoizedState=mj,c);if(!(e.mode&1))return sj(i,e,d,null);if(s.data==="$!"){if(a=s.nextSibling&&s.nextSibling.dataset,a)var h=a.dgst;return a=h,c=Error(p(419)),a=Ki(c,a,void 0),sj(i,e,d,a)}if(h=(d&i.childLanes)!==0,dh||h){if(a=Q,a!==null){switch(d&-d){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(a.suspendedLanes|d)?0:s,s!==0&&s!==c.retryLane&&(c.retryLane=s,ih(i,s),gi(a,i,s,-1))}return tj(),a=Ki(Error(p(421))),sj(i,e,d,a)}return s.data==="$?"?(e.flags|=128,e.child=i.child,e=uj.bind(null,i),s._reactRetry=e,null):(i=c.treeContext,yg=Lf(s.nextSibling),xg=e,I=!0,zg=null,i!==null&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=i.id,sg=i.overflow,qg=e),e=qj(e,a.children),e.flags|=4096,e)}function vj(i,e,o){i.lanes|=e;var a=i.alternate;a!==null&&(a.lanes|=e),bh(i.return,e,o)}function wj(i,e,o,a,s){var c=i.memoizedState;c===null?i.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:s}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=o,c.tailMode=s)}function xj(i,e,o){var a=e.pendingProps,s=a.revealOrder,c=a.tail;if(Xi(i,e,a.children,o),a=L.current,a&2)a=a&1|2,e.flags|=128;else{if(i!==null&&i.flags&128)e:for(i=e.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&vj(i,o,e);else if(i.tag===19)vj(i,o,e);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break e;for(;i.sibling===null;){if(i.return===null||i.return===e)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}a&=1}if(G(L,a),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(o=e.child,s=null;o!==null;)i=o.alternate,i!==null&&Ch(i)===null&&(s=o),o=o.sibling;o=s,o===null?(s=e.child,e.child=null):(s=o.sibling,o.sibling=null),wj(e,!1,s,o,c);break;case"backwards":for(o=null,s=e.child,e.child=null;s!==null;){if(i=s.alternate,i!==null&&Ch(i)===null){e.child=s;break}i=s.sibling,s.sibling=o,o=s,s=i}wj(e,!0,o,null,c);break;case"together":wj(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ij(i,e){!(e.mode&1)&&i!==null&&(i.alternate=null,e.alternate=null,e.flags|=2)}function Zi(i,e,o){if(i!==null&&(e.dependencies=i.dependencies),rh|=e.lanes,!(o&e.childLanes))return null;if(i!==null&&e.child!==i.child)throw Error(p(153));if(e.child!==null){for(i=e.child,o=Pg(i,i.pendingProps),e.child=o,o.return=e;i.sibling!==null;)i=i.sibling,o=o.sibling=Pg(i,i.pendingProps),o.return=e;o.sibling=null}return e.child}function yj(i,e,o){switch(e.tag){case 3:kj(e),Ig();break;case 5:Ah(e);break;case 1:Zf(e.type)&&cg(e);break;case 4:yh(e,e.stateNode.containerInfo);break;case 10:var a=e.type._context,s=e.memoizedProps.value;G(Wg,a._currentValue),a._currentValue=s;break;case 13:if(a=e.memoizedState,a!==null)return a.dehydrated!==null?(G(L,L.current&1),e.flags|=128,null):o&e.child.childLanes?oj(i,e,o):(G(L,L.current&1),i=Zi(i,e,o),i!==null?i.sibling:null);G(L,L.current&1);break;case 19:if(a=(o&e.childLanes)!==0,i.flags&128){if(a)return xj(i,e,o);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),G(L,L.current),a)break;return null;case 22:case 23:return e.lanes=0,dj(i,e,o)}return Zi(i,e,o)}var zj,Aj,Bj,Cj;zj=function(i,e){for(var o=e.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break;for(;o.sibling===null;){if(o.return===null||o.return===e)return;o=o.return}o.sibling.return=o.return,o=o.sibling}};Aj=function(){};Bj=function(i,e,o,a){var s=i.memoizedProps;if(s!==a){i=e.stateNode,xh(uh.current);var c=null;switch(o){case"input":s=Ya(i,s),a=Ya(i,a),c=[];break;case"select":s=A({},s,{value:void 0}),a=A({},a,{value:void 0}),c=[];break;case"textarea":s=gb(i,s),a=gb(i,a),c=[];break;default:typeof s.onClick!="function"&&typeof a.onClick=="function"&&(i.onclick=Bf)}ub(o,a);var d;o=null;for(g in s)if(!a.hasOwnProperty(g)&&s.hasOwnProperty(g)&&s[g]!=null)if(g==="style"){var h=s[g];for(d in h)h.hasOwnProperty(d)&&(o||(o={}),o[d]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(ea.hasOwnProperty(g)?c||(c=[]):(c=c||[]).push(g,null));for(g in a){var _=a[g];if(h=s!=null?s[g]:void 0,a.hasOwnProperty(g)&&_!==h&&(_!=null||h!=null))if(g==="style")if(h){for(d in h)!h.hasOwnProperty(d)||_&&_.hasOwnProperty(d)||(o||(o={}),o[d]="");for(d in _)_.hasOwnProperty(d)&&h[d]!==_[d]&&(o||(o={}),o[d]=_[d])}else o||(c||(c=[]),c.push(g,o)),o=_;else g==="dangerouslySetInnerHTML"?(_=_?_.__html:void 0,h=h?h.__html:void 0,_!=null&&h!==_&&(c=c||[]).push(g,_)):g==="children"?typeof _!="string"&&typeof _!="number"||(c=c||[]).push(g,""+_):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(ea.hasOwnProperty(g)?(_!=null&&g==="onScroll"&&D("scroll",i),c||h===_||(c=[])):(c=c||[]).push(g,_))}o&&(c=c||[]).push("style",o);var g=c;(e.updateQueue=g)&&(e.flags|=4)}};Cj=function(i,e,o,a){o!==a&&(e.flags|=4)};function Dj(i,e){if(!I)switch(i.tailMode){case"hidden":e=i.tail;for(var o=null;e!==null;)e.alternate!==null&&(o=e),e=e.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?e||i.tail===null?i.tail=null:i.tail.sibling=null:a.sibling=null}}function S(i){var e=i.alternate!==null&&i.alternate.child===i.child,o=0,a=0;if(e)for(var s=i.child;s!==null;)o|=s.lanes|s.childLanes,a|=s.subtreeFlags&14680064,a|=s.flags&14680064,s.return=i,s=s.sibling;else for(s=i.child;s!==null;)o|=s.lanes|s.childLanes,a|=s.subtreeFlags,a|=s.flags,s.return=i,s=s.sibling;return i.subtreeFlags|=a,i.childLanes=o,e}function Ej(i,e,o){var a=e.pendingProps;switch(wg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(e),null;case 1:return Zf(e.type)&&$f(),S(e),null;case 3:return a=e.stateNode,zh(),E(Wf),E(H),Eh(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(i===null||i.child===null)&&(Gg(e)?e.flags|=4:i===null||i.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zg!==null&&(Fj(zg),zg=null))),Aj(i,e),S(e),null;case 5:Bh(e);var s=xh(wh.current);if(o=e.type,i!==null&&e.stateNode!=null)Bj(i,e,o,a,s),i.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!a){if(e.stateNode===null)throw Error(p(166));return S(e),null}if(i=xh(uh.current),Gg(e)){a=e.stateNode,o=e.type;var c=e.memoizedProps;switch(a[Of]=e,a[Pf]=c,i=(e.mode&1)!==0,o){case"dialog":D("cancel",a),D("close",a);break;case"iframe":case"object":case"embed":D("load",a);break;case"video":case"audio":for(s=0;s<lf.length;s++)D(lf[s],a);break;case"source":D("error",a);break;case"img":case"image":case"link":D("error",a),D("load",a);break;case"details":D("toggle",a);break;case"input":Za(a,c),D("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!c.multiple},D("invalid",a);break;case"textarea":hb(a,c),D("invalid",a)}ub(o,c),s=null;for(var d in c)if(c.hasOwnProperty(d)){var h=c[d];d==="children"?typeof h=="string"?a.textContent!==h&&(c.suppressHydrationWarning!==!0&&Af(a.textContent,h,i),s=["children",h]):typeof h=="number"&&a.textContent!==""+h&&(c.suppressHydrationWarning!==!0&&Af(a.textContent,h,i),s=["children",""+h]):ea.hasOwnProperty(d)&&h!=null&&d==="onScroll"&&D("scroll",a)}switch(o){case"input":Va(a),db(a,c,!0);break;case"textarea":Va(a),jb(a);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(a.onclick=Bf)}a=s,e.updateQueue=a,a!==null&&(e.flags|=4)}else{d=s.nodeType===9?s:s.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=kb(o)),i==="http://www.w3.org/1999/xhtml"?o==="script"?(i=d.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof a.is=="string"?i=d.createElement(o,{is:a.is}):(i=d.createElement(o),o==="select"&&(d=i,a.multiple?d.multiple=!0:a.size&&(d.size=a.size))):i=d.createElementNS(i,o),i[Of]=e,i[Pf]=a,zj(i,e,!1,!1),e.stateNode=i;e:{switch(d=vb(o,a),o){case"dialog":D("cancel",i),D("close",i),s=a;break;case"iframe":case"object":case"embed":D("load",i),s=a;break;case"video":case"audio":for(s=0;s<lf.length;s++)D(lf[s],i);s=a;break;case"source":D("error",i),s=a;break;case"img":case"image":case"link":D("error",i),D("load",i),s=a;break;case"details":D("toggle",i),s=a;break;case"input":Za(i,a),s=Ya(i,a),D("invalid",i);break;case"option":s=a;break;case"select":i._wrapperState={wasMultiple:!!a.multiple},s=A({},a,{value:void 0}),D("invalid",i);break;case"textarea":hb(i,a),s=gb(i,a),D("invalid",i);break;default:s=a}ub(o,s),h=s;for(c in h)if(h.hasOwnProperty(c)){var _=h[c];c==="style"?sb(i,_):c==="dangerouslySetInnerHTML"?(_=_?_.__html:void 0,_!=null&&nb(i,_)):c==="children"?typeof _=="string"?(o!=="textarea"||_!=="")&&ob(i,_):typeof _=="number"&&ob(i,""+_):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ea.hasOwnProperty(c)?_!=null&&c==="onScroll"&&D("scroll",i):_!=null&&ta(i,c,_,d))}switch(o){case"input":Va(i),db(i,a,!1);break;case"textarea":Va(i),jb(i);break;case"option":a.value!=null&&i.setAttribute("value",""+Sa(a.value));break;case"select":i.multiple=!!a.multiple,c=a.value,c!=null?fb(i,!!a.multiple,c,!1):a.defaultValue!=null&&fb(i,!!a.multiple,a.defaultValue,!0);break;default:typeof s.onClick=="function"&&(i.onclick=Bf)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return S(e),null;case 6:if(i&&e.stateNode!=null)Cj(i,e,i.memoizedProps,a);else{if(typeof a!="string"&&e.stateNode===null)throw Error(p(166));if(o=xh(wh.current),xh(uh.current),Gg(e)){if(a=e.stateNode,o=e.memoizedProps,a[Of]=e,(c=a.nodeValue!==o)&&(i=xg,i!==null))switch(i.tag){case 3:Af(a.nodeValue,o,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Af(a.nodeValue,o,(i.mode&1)!==0)}c&&(e.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[Of]=e,e.stateNode=a}return S(e),null;case 13:if(E(L),a=e.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(I&&yg!==null&&e.mode&1&&!(e.flags&128))Hg(),Ig(),e.flags|=98560,c=!1;else if(c=Gg(e),a!==null&&a.dehydrated!==null){if(i===null){if(!c)throw Error(p(318));if(c=e.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(p(317));c[Of]=e}else Ig(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;S(e),c=!1}else zg!==null&&(Fj(zg),zg=null),c=!0;if(!c)return e.flags&65536?e:null}return e.flags&128?(e.lanes=o,e):(a=a!==null,a!==(i!==null&&i.memoizedState!==null)&&a&&(e.child.flags|=8192,e.mode&1&&(i===null||L.current&1?T===0&&(T=3):tj())),e.updateQueue!==null&&(e.flags|=4),S(e),null);case 4:return zh(),Aj(i,e),i===null&&sf(e.stateNode.containerInfo),S(e),null;case 10:return ah(e.type._context),S(e),null;case 17:return Zf(e.type)&&$f(),S(e),null;case 19:if(E(L),c=e.memoizedState,c===null)return S(e),null;if(a=(e.flags&128)!==0,d=c.rendering,d===null)if(a)Dj(c,!1);else{if(T!==0||i!==null&&i.flags&128)for(i=e.child;i!==null;){if(d=Ch(i),d!==null){for(e.flags|=128,Dj(c,!1),a=d.updateQueue,a!==null&&(e.updateQueue=a,e.flags|=4),e.subtreeFlags=0,a=o,o=e.child;o!==null;)c=o,i=a,c.flags&=14680066,d=c.alternate,d===null?(c.childLanes=0,c.lanes=i,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=d.childLanes,c.lanes=d.lanes,c.child=d.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=d.memoizedProps,c.memoizedState=d.memoizedState,c.updateQueue=d.updateQueue,c.type=d.type,i=d.dependencies,c.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),o=o.sibling;return G(L,L.current&1|2),e.child}i=i.sibling}c.tail!==null&&B()>Gj&&(e.flags|=128,a=!0,Dj(c,!1),e.lanes=4194304)}else{if(!a)if(i=Ch(d),i!==null){if(e.flags|=128,a=!0,o=i.updateQueue,o!==null&&(e.updateQueue=o,e.flags|=4),Dj(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!I)return S(e),null}else 2*B()-c.renderingStartTime>Gj&&o!==1073741824&&(e.flags|=128,a=!0,Dj(c,!1),e.lanes=4194304);c.isBackwards?(d.sibling=e.child,e.child=d):(o=c.last,o!==null?o.sibling=d:e.child=d,c.last=d)}return c.tail!==null?(e=c.tail,c.rendering=e,c.tail=e.sibling,c.renderingStartTime=B(),e.sibling=null,o=L.current,G(L,a?o&1|2:o&1),e):(S(e),null);case 22:case 23:return Hj(),a=e.memoizedState!==null,i!==null&&i.memoizedState!==null!==a&&(e.flags|=8192),a&&e.mode&1?fj&1073741824&&(S(e),e.subtreeFlags&6&&(e.flags|=8192)):S(e),null;case 24:return null;case 25:return null}throw Error(p(156,e.tag))}function Ij(i,e){switch(wg(e),e.tag){case 1:return Zf(e.type)&&$f(),i=e.flags,i&65536?(e.flags=i&-65537|128,e):null;case 3:return zh(),E(Wf),E(H),Eh(),i=e.flags,i&65536&&!(i&128)?(e.flags=i&-65537|128,e):null;case 5:return Bh(e),null;case 13:if(E(L),i=e.memoizedState,i!==null&&i.dehydrated!==null){if(e.alternate===null)throw Error(p(340));Ig()}return i=e.flags,i&65536?(e.flags=i&-65537|128,e):null;case 19:return E(L),null;case 4:return zh(),null;case 10:return ah(e.type._context),null;case 22:case 23:return Hj(),null;case 24:return null;default:return null}}var Jj=!1,U=!1,Kj=typeof WeakSet=="function"?WeakSet:Set,V=null;function Lj(i,e){var o=i.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){W(i,e,a)}else o.current=null}function Mj(i,e,o){try{o()}catch(a){W(i,e,a)}}var Nj=!1;function Oj(i,e){if(Cf=dd,i=Me(),Ne(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var s=a.anchorOffset,c=a.focusNode;a=a.focusOffset;try{o.nodeType,c.nodeType}catch{o=null;break e}var d=0,h=-1,_=-1,g=0,$=0,_e=i,j=null;t:for(;;){for(var tt;_e!==o||s!==0&&_e.nodeType!==3||(h=d+s),_e!==c||a!==0&&_e.nodeType!==3||(_=d+a),_e.nodeType===3&&(d+=_e.nodeValue.length),(tt=_e.firstChild)!==null;)j=_e,_e=tt;for(;;){if(_e===i)break t;if(j===o&&++g===s&&(h=d),j===c&&++$===a&&(_=d),(tt=_e.nextSibling)!==null)break;_e=j,j=_e.parentNode}_e=tt}o=h===-1||_===-1?null:{start:h,end:_}}else o=null}o=o||{start:0,end:0}}else o=null;for(Df={focusedElem:i,selectionRange:o},dd=!1,V=e;V!==null;)if(e=V,i=e.child,(e.subtreeFlags&1028)!==0&&i!==null)i.return=e,V=i;else for(;V!==null;){e=V;try{var rt=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(rt!==null){var ot=rt.memoizedProps,et=rt.memoizedState,b=e.stateNode,it=b.getSnapshotBeforeUpdate(e.elementType===e.type?ot:Ci(e.type,ot),et);b.__reactInternalSnapshotBeforeUpdate=it}break;case 3:var nt=e.stateNode.containerInfo;nt.nodeType===1?nt.textContent="":nt.nodeType===9&&nt.documentElement&&nt.removeChild(nt.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163))}}catch(ct){W(e,e.return,ct)}if(i=e.sibling,i!==null){i.return=e.return,V=i;break}V=e.return}return rt=Nj,Nj=!1,rt}function Pj(i,e,o){var a=e.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var s=a=a.next;do{if((s.tag&i)===i){var c=s.destroy;s.destroy=void 0,c!==void 0&&Mj(e,o,c)}s=s.next}while(s!==a)}}function Qj(i,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var o=e=e.next;do{if((o.tag&i)===i){var a=o.create;o.destroy=a()}o=o.next}while(o!==e)}}function Rj(i){var e=i.ref;if(e!==null){var o=i.stateNode;switch(i.tag){case 5:i=o;break;default:i=o}typeof e=="function"?e(i):e.current=i}}function Sj(i){var e=i.alternate;e!==null&&(i.alternate=null,Sj(e)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(e=i.stateNode,e!==null&&(delete e[Of],delete e[Pf],delete e[of],delete e[Qf],delete e[Rf])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Tj(i){return i.tag===5||i.tag===3||i.tag===4}function Uj(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Tj(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Vj(i,e,o){var a=i.tag;if(a===5||a===6)i=i.stateNode,e?o.nodeType===8?o.parentNode.insertBefore(i,e):o.insertBefore(i,e):(o.nodeType===8?(e=o.parentNode,e.insertBefore(i,o)):(e=o,e.appendChild(i)),o=o._reactRootContainer,o!=null||e.onclick!==null||(e.onclick=Bf));else if(a!==4&&(i=i.child,i!==null))for(Vj(i,e,o),i=i.sibling;i!==null;)Vj(i,e,o),i=i.sibling}function Wj(i,e,o){var a=i.tag;if(a===5||a===6)i=i.stateNode,e?o.insertBefore(i,e):o.appendChild(i);else if(a!==4&&(i=i.child,i!==null))for(Wj(i,e,o),i=i.sibling;i!==null;)Wj(i,e,o),i=i.sibling}var X=null,Xj=!1;function Yj(i,e,o){for(o=o.child;o!==null;)Zj(i,e,o),o=o.sibling}function Zj(i,e,o){if(lc&&typeof lc.onCommitFiberUnmount=="function")try{lc.onCommitFiberUnmount(kc,o)}catch{}switch(o.tag){case 5:U||Lj(o,e);case 6:var a=X,s=Xj;X=null,Yj(i,e,o),X=a,Xj=s,X!==null&&(Xj?(i=X,o=o.stateNode,i.nodeType===8?i.parentNode.removeChild(o):i.removeChild(o)):X.removeChild(o.stateNode));break;case 18:X!==null&&(Xj?(i=X,o=o.stateNode,i.nodeType===8?Kf(i.parentNode,o):i.nodeType===1&&Kf(i,o),bd(i)):Kf(X,o.stateNode));break;case 4:a=X,s=Xj,X=o.stateNode.containerInfo,Xj=!0,Yj(i,e,o),X=a,Xj=s;break;case 0:case 11:case 14:case 15:if(!U&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){s=a=a.next;do{var c=s,d=c.destroy;c=c.tag,d!==void 0&&(c&2||c&4)&&Mj(o,e,d),s=s.next}while(s!==a)}Yj(i,e,o);break;case 1:if(!U&&(Lj(o,e),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(h){W(o,e,h)}Yj(i,e,o);break;case 21:Yj(i,e,o);break;case 22:o.mode&1?(U=(a=U)||o.memoizedState!==null,Yj(i,e,o),U=a):Yj(i,e,o);break;default:Yj(i,e,o)}}function ak(i){var e=i.updateQueue;if(e!==null){i.updateQueue=null;var o=i.stateNode;o===null&&(o=i.stateNode=new Kj),e.forEach(function(a){var s=bk.bind(null,i,a);o.has(a)||(o.add(a),a.then(s,s))})}}function ck(i,e){var o=e.deletions;if(o!==null)for(var a=0;a<o.length;a++){var s=o[a];try{var c=i,d=e,h=d;e:for(;h!==null;){switch(h.tag){case 5:X=h.stateNode,Xj=!1;break e;case 3:X=h.stateNode.containerInfo,Xj=!0;break e;case 4:X=h.stateNode.containerInfo,Xj=!0;break e}h=h.return}if(X===null)throw Error(p(160));Zj(c,d,s),X=null,Xj=!1;var _=s.alternate;_!==null&&(_.return=null),s.return=null}catch(g){W(s,e,g)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dk(e,i),e=e.sibling}function dk(i,e){var o=i.alternate,a=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(ck(e,i),ek(i),a&4){try{Pj(3,i,i.return),Qj(3,i)}catch(ot){W(i,i.return,ot)}try{Pj(5,i,i.return)}catch(ot){W(i,i.return,ot)}}break;case 1:ck(e,i),ek(i),a&512&&o!==null&&Lj(o,o.return);break;case 5:if(ck(e,i),ek(i),a&512&&o!==null&&Lj(o,o.return),i.flags&32){var s=i.stateNode;try{ob(s,"")}catch(ot){W(i,i.return,ot)}}if(a&4&&(s=i.stateNode,s!=null)){var c=i.memoizedProps,d=o!==null?o.memoizedProps:c,h=i.type,_=i.updateQueue;if(i.updateQueue=null,_!==null)try{h==="input"&&c.type==="radio"&&c.name!=null&&ab(s,c),vb(h,d);var g=vb(h,c);for(d=0;d<_.length;d+=2){var $=_[d],_e=_[d+1];$==="style"?sb(s,_e):$==="dangerouslySetInnerHTML"?nb(s,_e):$==="children"?ob(s,_e):ta(s,$,_e,g)}switch(h){case"input":bb(s,c);break;case"textarea":ib(s,c);break;case"select":var j=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!c.multiple;var tt=c.value;tt!=null?fb(s,!!c.multiple,tt,!1):j!==!!c.multiple&&(c.defaultValue!=null?fb(s,!!c.multiple,c.defaultValue,!0):fb(s,!!c.multiple,c.multiple?[]:"",!1))}s[Pf]=c}catch(ot){W(i,i.return,ot)}}break;case 6:if(ck(e,i),ek(i),a&4){if(i.stateNode===null)throw Error(p(162));s=i.stateNode,c=i.memoizedProps;try{s.nodeValue=c}catch(ot){W(i,i.return,ot)}}break;case 3:if(ck(e,i),ek(i),a&4&&o!==null&&o.memoizedState.isDehydrated)try{bd(e.containerInfo)}catch(ot){W(i,i.return,ot)}break;case 4:ck(e,i),ek(i);break;case 13:ck(e,i),ek(i),s=i.child,s.flags&8192&&(c=s.memoizedState!==null,s.stateNode.isHidden=c,!c||s.alternate!==null&&s.alternate.memoizedState!==null||(fk=B())),a&4&&ak(i);break;case 22:if($=o!==null&&o.memoizedState!==null,i.mode&1?(U=(g=U)||$,ck(e,i),U=g):ck(e,i),ek(i),a&8192){if(g=i.memoizedState!==null,(i.stateNode.isHidden=g)&&!$&&i.mode&1)for(V=i,$=i.child;$!==null;){for(_e=V=$;V!==null;){switch(j=V,tt=j.child,j.tag){case 0:case 11:case 14:case 15:Pj(4,j,j.return);break;case 1:Lj(j,j.return);var rt=j.stateNode;if(typeof rt.componentWillUnmount=="function"){a=j,o=j.return;try{e=a,rt.props=e.memoizedProps,rt.state=e.memoizedState,rt.componentWillUnmount()}catch(ot){W(a,o,ot)}}break;case 5:Lj(j,j.return);break;case 22:if(j.memoizedState!==null){gk(_e);continue}}tt!==null?(tt.return=j,V=tt):gk(_e)}$=$.sibling}e:for($=null,_e=i;;){if(_e.tag===5){if($===null){$=_e;try{s=_e.stateNode,g?(c=s.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(h=_e.stateNode,_=_e.memoizedProps.style,d=_!=null&&_.hasOwnProperty("display")?_.display:null,h.style.display=rb("display",d))}catch(ot){W(i,i.return,ot)}}}else if(_e.tag===6){if($===null)try{_e.stateNode.nodeValue=g?"":_e.memoizedProps}catch(ot){W(i,i.return,ot)}}else if((_e.tag!==22&&_e.tag!==23||_e.memoizedState===null||_e===i)&&_e.child!==null){_e.child.return=_e,_e=_e.child;continue}if(_e===i)break e;for(;_e.sibling===null;){if(_e.return===null||_e.return===i)break e;$===_e&&($=null),_e=_e.return}$===_e&&($=null),_e.sibling.return=_e.return,_e=_e.sibling}}break;case 19:ck(e,i),ek(i),a&4&&ak(i);break;case 21:break;default:ck(e,i),ek(i)}}function ek(i){var e=i.flags;if(e&2){try{e:{for(var o=i.return;o!==null;){if(Tj(o)){var a=o;break e}o=o.return}throw Error(p(160))}switch(a.tag){case 5:var s=a.stateNode;a.flags&32&&(ob(s,""),a.flags&=-33);var c=Uj(i);Wj(i,c,s);break;case 3:case 4:var d=a.stateNode.containerInfo,h=Uj(i);Vj(i,h,d);break;default:throw Error(p(161))}}catch(_){W(i,i.return,_)}i.flags&=-3}e&4096&&(i.flags&=-4097)}function hk(i,e,o){V=i,ik(i)}function ik(i,e,o){for(var a=(i.mode&1)!==0;V!==null;){var s=V,c=s.child;if(s.tag===22&&a){var d=s.memoizedState!==null||Jj;if(!d){var h=s.alternate,_=h!==null&&h.memoizedState!==null||U;h=Jj;var g=U;if(Jj=d,(U=_)&&!g)for(V=s;V!==null;)d=V,_=d.child,d.tag===22&&d.memoizedState!==null?jk(s):_!==null?(_.return=d,V=_):jk(s);for(;c!==null;)V=c,ik(c),c=c.sibling;V=s,Jj=h,U=g}kk(i)}else s.subtreeFlags&8772&&c!==null?(c.return=s,V=c):kk(i)}}function kk(i){for(;V!==null;){var e=V;if(e.flags&8772){var o=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:U||Qj(5,e);break;case 1:var a=e.stateNode;if(e.flags&4&&!U)if(o===null)a.componentDidMount();else{var s=e.elementType===e.type?o.memoizedProps:Ci(e.type,o.memoizedProps);a.componentDidUpdate(s,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var c=e.updateQueue;c!==null&&sh(e,c,a);break;case 3:var d=e.updateQueue;if(d!==null){if(o=null,e.child!==null)switch(e.child.tag){case 5:o=e.child.stateNode;break;case 1:o=e.child.stateNode}sh(e,d,o)}break;case 5:var h=e.stateNode;if(o===null&&e.flags&4){o=h;var _=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":_.autoFocus&&o.focus();break;case"img":_.src&&(o.src=_.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var g=e.alternate;if(g!==null){var $=g.memoizedState;if($!==null){var _e=$.dehydrated;_e!==null&&bd(_e)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(p(163))}U||e.flags&512&&Rj(e)}catch(j){W(e,e.return,j)}}if(e===i){V=null;break}if(o=e.sibling,o!==null){o.return=e.return,V=o;break}V=e.return}}function gk(i){for(;V!==null;){var e=V;if(e===i){V=null;break}var o=e.sibling;if(o!==null){o.return=e.return,V=o;break}V=e.return}}function jk(i){for(;V!==null;){var e=V;try{switch(e.tag){case 0:case 11:case 15:var o=e.return;try{Qj(4,e)}catch(_){W(e,o,_)}break;case 1:var a=e.stateNode;if(typeof a.componentDidMount=="function"){var s=e.return;try{a.componentDidMount()}catch(_){W(e,s,_)}}var c=e.return;try{Rj(e)}catch(_){W(e,c,_)}break;case 5:var d=e.return;try{Rj(e)}catch(_){W(e,d,_)}}}catch(_){W(e,e.return,_)}if(e===i){V=null;break}var h=e.sibling;if(h!==null){h.return=e.return,V=h;break}V=e.return}}var lk=Math.ceil,mk=ua.ReactCurrentDispatcher,nk=ua.ReactCurrentOwner,ok=ua.ReactCurrentBatchConfig,K=0,Q=null,Y=null,Z=0,fj=0,ej=Uf(0),T=0,pk=null,rh=0,qk=0,rk=0,sk=null,tk=null,fk=0,Gj=1/0,uk=null,Oi=!1,Pi=null,Ri=null,vk=!1,wk=null,xk=0,yk=0,zk=null,Ak=-1,Bk=0;function R(){return K&6?B():Ak!==-1?Ak:Ak=B()}function yi(i){return i.mode&1?K&2&&Z!==0?Z&-Z:Kg.transition!==null?(Bk===0&&(Bk=yc()),Bk):(i=C,i!==0||(i=window.event,i=i===void 0?16:jd(i.type)),i):1}function gi(i,e,o,a){if(50<yk)throw yk=0,zk=null,Error(p(185));Ac(i,o,a),(!(K&2)||i!==Q)&&(i===Q&&(!(K&2)&&(qk|=o),T===4&&Ck(i,Z)),Dk(i,a),o===1&&K===0&&!(e.mode&1)&&(Gj=B()+500,fg&&jg()))}function Dk(i,e){var o=i.callbackNode;wc(i,e);var a=uc(i,i===Q?Z:0);if(a===0)o!==null&&bc(o),i.callbackNode=null,i.callbackPriority=0;else if(e=a&-a,i.callbackPriority!==e){if(o!=null&&bc(o),e===1)i.tag===0?ig(Ek.bind(null,i)):hg(Ek.bind(null,i)),Jf(function(){!(K&6)&&jg()}),o=null;else{switch(Dc(a)){case 1:o=fc;break;case 4:o=gc;break;case 16:o=hc;break;case 536870912:o=jc;break;default:o=hc}o=Fk(o,Gk.bind(null,i))}i.callbackPriority=e,i.callbackNode=o}}function Gk(i,e){if(Ak=-1,Bk=0,K&6)throw Error(p(327));var o=i.callbackNode;if(Hk()&&i.callbackNode!==o)return null;var a=uc(i,i===Q?Z:0);if(a===0)return null;if(a&30||a&i.expiredLanes||e)e=Ik(i,a);else{e=a;var s=K;K|=2;var c=Jk();(Q!==i||Z!==e)&&(uk=null,Gj=B()+500,Kk(i,e));do try{Lk();break}catch(h){Mk(i,h)}while(!0);$g(),mk.current=c,K=s,Y!==null?e=0:(Q=null,Z=0,e=T)}if(e!==0){if(e===2&&(s=xc(i),s!==0&&(a=s,e=Nk(i,s))),e===1)throw o=pk,Kk(i,0),Ck(i,a),Dk(i,B()),o;if(e===6)Ck(i,a);else{if(s=i.current.alternate,!(a&30)&&!Ok(s)&&(e=Ik(i,a),e===2&&(c=xc(i),c!==0&&(a=c,e=Nk(i,c))),e===1))throw o=pk,Kk(i,0),Ck(i,a),Dk(i,B()),o;switch(i.finishedWork=s,i.finishedLanes=a,e){case 0:case 1:throw Error(p(345));case 2:Pk(i,tk,uk);break;case 3:if(Ck(i,a),(a&130023424)===a&&(e=fk+500-B(),10<e)){if(uc(i,0)!==0)break;if(s=i.suspendedLanes,(s&a)!==a){R(),i.pingedLanes|=i.suspendedLanes&s;break}i.timeoutHandle=Ff(Pk.bind(null,i,tk,uk),e);break}Pk(i,tk,uk);break;case 4:if(Ck(i,a),(a&4194240)===a)break;for(e=i.eventTimes,s=-1;0<a;){var d=31-oc(a);c=1<<d,d=e[d],d>s&&(s=d),a&=~c}if(a=s,a=B()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*lk(a/1960))-a,10<a){i.timeoutHandle=Ff(Pk.bind(null,i,tk,uk),a);break}Pk(i,tk,uk);break;case 5:Pk(i,tk,uk);break;default:throw Error(p(329))}}}return Dk(i,B()),i.callbackNode===o?Gk.bind(null,i):null}function Nk(i,e){var o=sk;return i.current.memoizedState.isDehydrated&&(Kk(i,e).flags|=256),i=Ik(i,e),i!==2&&(e=tk,tk=o,e!==null&&Fj(e)),i}function Fj(i){tk===null?tk=i:tk.push.apply(tk,i)}function Ok(i){for(var e=i;;){if(e.flags&16384){var o=e.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var s=o[a],c=s.getSnapshot;s=s.value;try{if(!He(c(),s))return!1}catch{return!1}}}if(o=e.child,e.subtreeFlags&16384&&o!==null)o.return=e,e=o;else{if(e===i)break;for(;e.sibling===null;){if(e.return===null||e.return===i)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ck(i,e){for(e&=~rk,e&=~qk,i.suspendedLanes|=e,i.pingedLanes&=~e,i=i.expirationTimes;0<e;){var o=31-oc(e),a=1<<o;i[o]=-1,e&=~a}}function Ek(i){if(K&6)throw Error(p(327));Hk();var e=uc(i,0);if(!(e&1))return Dk(i,B()),null;var o=Ik(i,e);if(i.tag!==0&&o===2){var a=xc(i);a!==0&&(e=a,o=Nk(i,a))}if(o===1)throw o=pk,Kk(i,0),Ck(i,e),Dk(i,B()),o;if(o===6)throw Error(p(345));return i.finishedWork=i.current.alternate,i.finishedLanes=e,Pk(i,tk,uk),Dk(i,B()),null}function Qk(i,e){var o=K;K|=1;try{return i(e)}finally{K=o,K===0&&(Gj=B()+500,fg&&jg())}}function Rk(i){wk!==null&&wk.tag===0&&!(K&6)&&Hk();var e=K;K|=1;var o=ok.transition,a=C;try{if(ok.transition=null,C=1,i)return i()}finally{C=a,ok.transition=o,K=e,!(K&6)&&jg()}}function Hj(){fj=ej.current,E(ej)}function Kk(i,e){i.finishedWork=null,i.finishedLanes=0;var o=i.timeoutHandle;if(o!==-1&&(i.timeoutHandle=-1,Gf(o)),Y!==null)for(o=Y.return;o!==null;){var a=o;switch(wg(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&$f();break;case 3:zh(),E(Wf),E(H),Eh();break;case 5:Bh(a);break;case 4:zh();break;case 13:E(L);break;case 19:E(L);break;case 10:ah(a.type._context);break;case 22:case 23:Hj()}o=o.return}if(Q=i,Y=i=Pg(i.current,null),Z=fj=e,T=0,pk=null,rk=qk=rh=0,tk=sk=null,fh!==null){for(e=0;e<fh.length;e++)if(o=fh[e],a=o.interleaved,a!==null){o.interleaved=null;var s=a.next,c=o.pending;if(c!==null){var d=c.next;c.next=s,a.next=d}o.pending=a}fh=null}return i}function Mk(i,e){do{var o=Y;try{if($g(),Fh.current=Rh,Ih){for(var a=M.memoizedState;a!==null;){var s=a.queue;s!==null&&(s.pending=null),a=a.next}Ih=!1}if(Hh=0,O=N=M=null,Jh=!1,Kh=0,nk.current=null,o===null||o.return===null){T=1,pk=e,Y=null;break}e:{var c=i,d=o.return,h=o,_=e;if(e=Z,h.flags|=32768,_!==null&&typeof _=="object"&&typeof _.then=="function"){var g=_,$=h,_e=$.tag;if(!($.mode&1)&&(_e===0||_e===11||_e===15)){var j=$.alternate;j?($.updateQueue=j.updateQueue,$.memoizedState=j.memoizedState,$.lanes=j.lanes):($.updateQueue=null,$.memoizedState=null)}var tt=Ui(d);if(tt!==null){tt.flags&=-257,Vi(tt,d,h,c,e),tt.mode&1&&Si(c,g,e),e=tt,_=g;var rt=e.updateQueue;if(rt===null){var ot=new Set;ot.add(_),e.updateQueue=ot}else rt.add(_);break e}else{if(!(e&1)){Si(c,g,e),tj();break e}_=Error(p(426))}}else if(I&&h.mode&1){var et=Ui(d);if(et!==null){!(et.flags&65536)&&(et.flags|=256),Vi(et,d,h,c,e),Jg(Ji(_,h));break e}}c=_=Ji(_,h),T!==4&&(T=2),sk===null?sk=[c]:sk.push(c),c=d;do{switch(c.tag){case 3:c.flags|=65536,e&=-e,c.lanes|=e;var b=Ni(c,_,e);ph(c,b);break e;case 1:h=_;var it=c.type,nt=c.stateNode;if(!(c.flags&128)&&(typeof it.getDerivedStateFromError=="function"||nt!==null&&typeof nt.componentDidCatch=="function"&&(Ri===null||!Ri.has(nt)))){c.flags|=65536,e&=-e,c.lanes|=e;var ct=Qi(c,h,e);ph(c,ct);break e}}c=c.return}while(c!==null)}Sk(o)}catch(mt){e=mt,Y===o&&o!==null&&(Y=o=o.return);continue}break}while(!0)}function Jk(){var i=mk.current;return mk.current=Rh,i===null?Rh:i}function tj(){(T===0||T===3||T===2)&&(T=4),Q===null||!(rh&268435455)&&!(qk&268435455)||Ck(Q,Z)}function Ik(i,e){var o=K;K|=2;var a=Jk();(Q!==i||Z!==e)&&(uk=null,Kk(i,e));do try{Tk();break}catch(s){Mk(i,s)}while(!0);if($g(),K=o,mk.current=a,Y!==null)throw Error(p(261));return Q=null,Z=0,T}function Tk(){for(;Y!==null;)Uk(Y)}function Lk(){for(;Y!==null&&!cc();)Uk(Y)}function Uk(i){var e=Vk(i.alternate,i,fj);i.memoizedProps=i.pendingProps,e===null?Sk(i):Y=e,nk.current=null}function Sk(i){var e=i;do{var o=e.alternate;if(i=e.return,e.flags&32768){if(o=Ij(o,e),o!==null){o.flags&=32767,Y=o;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{T=6,Y=null;return}}else if(o=Ej(o,e,fj),o!==null){Y=o;return}if(e=e.sibling,e!==null){Y=e;return}Y=e=i}while(e!==null);T===0&&(T=5)}function Pk(i,e,o){var a=C,s=ok.transition;try{ok.transition=null,C=1,Wk(i,e,o,a)}finally{ok.transition=s,C=a}return null}function Wk(i,e,o,a){do Hk();while(wk!==null);if(K&6)throw Error(p(327));o=i.finishedWork;var s=i.finishedLanes;if(o===null)return null;if(i.finishedWork=null,i.finishedLanes=0,o===i.current)throw Error(p(177));i.callbackNode=null,i.callbackPriority=0;var c=o.lanes|o.childLanes;if(Bc(i,c),i===Q&&(Y=Q=null,Z=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||vk||(vk=!0,Fk(hc,function(){return Hk(),null})),c=(o.flags&15990)!==0,o.subtreeFlags&15990||c){c=ok.transition,ok.transition=null;var d=C;C=1;var h=K;K|=4,nk.current=null,Oj(i,o),dk(o,i),Oe(Df),dd=!!Cf,Df=Cf=null,i.current=o,hk(o),dc(),K=h,C=d,ok.transition=c}else i.current=o;if(vk&&(vk=!1,wk=i,xk=s),c=i.pendingLanes,c===0&&(Ri=null),mc(o.stateNode),Dk(i,B()),e!==null)for(a=i.onRecoverableError,o=0;o<e.length;o++)s=e[o],a(s.value,{componentStack:s.stack,digest:s.digest});if(Oi)throw Oi=!1,i=Pi,Pi=null,i;return xk&1&&i.tag!==0&&Hk(),c=i.pendingLanes,c&1?i===zk?yk++:(yk=0,zk=i):yk=0,jg(),null}function Hk(){if(wk!==null){var i=Dc(xk),e=ok.transition,o=C;try{if(ok.transition=null,C=16>i?16:i,wk===null)var a=!1;else{if(i=wk,wk=null,xk=0,K&6)throw Error(p(331));var s=K;for(K|=4,V=i.current;V!==null;){var c=V,d=c.child;if(V.flags&16){var h=c.deletions;if(h!==null){for(var _=0;_<h.length;_++){var g=h[_];for(V=g;V!==null;){var $=V;switch($.tag){case 0:case 11:case 15:Pj(8,$,c)}var _e=$.child;if(_e!==null)_e.return=$,V=_e;else for(;V!==null;){$=V;var j=$.sibling,tt=$.return;if(Sj($),$===g){V=null;break}if(j!==null){j.return=tt,V=j;break}V=tt}}}var rt=c.alternate;if(rt!==null){var ot=rt.child;if(ot!==null){rt.child=null;do{var et=ot.sibling;ot.sibling=null,ot=et}while(ot!==null)}}V=c}}if(c.subtreeFlags&2064&&d!==null)d.return=c,V=d;else e:for(;V!==null;){if(c=V,c.flags&2048)switch(c.tag){case 0:case 11:case 15:Pj(9,c,c.return)}var b=c.sibling;if(b!==null){b.return=c.return,V=b;break e}V=c.return}}var it=i.current;for(V=it;V!==null;){d=V;var nt=d.child;if(d.subtreeFlags&2064&&nt!==null)nt.return=d,V=nt;else e:for(d=it;V!==null;){if(h=V,h.flags&2048)try{switch(h.tag){case 0:case 11:case 15:Qj(9,h)}}catch(mt){W(h,h.return,mt)}if(h===d){V=null;break e}var ct=h.sibling;if(ct!==null){ct.return=h.return,V=ct;break e}V=h.return}}if(K=s,jg(),lc&&typeof lc.onPostCommitFiberRoot=="function")try{lc.onPostCommitFiberRoot(kc,i)}catch{}a=!0}return a}finally{C=o,ok.transition=e}}return!1}function Xk(i,e,o){e=Ji(o,e),e=Ni(i,e,1),i=nh(i,e,1),e=R(),i!==null&&(Ac(i,1,e),Dk(i,e))}function W(i,e,o){if(i.tag===3)Xk(i,i,o);else for(;e!==null;){if(e.tag===3){Xk(e,i,o);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ri===null||!Ri.has(a))){i=Ji(o,i),i=Qi(e,i,1),e=nh(e,i,1),i=R(),e!==null&&(Ac(e,1,i),Dk(e,i));break}}e=e.return}}function Ti(i,e,o){var a=i.pingCache;a!==null&&a.delete(e),e=R(),i.pingedLanes|=i.suspendedLanes&o,Q===i&&(Z&o)===o&&(T===4||T===3&&(Z&130023424)===Z&&500>B()-fk?Kk(i,0):rk|=o),Dk(i,e)}function Yk(i,e){e===0&&(i.mode&1?(e=sc,sc<<=1,!(sc&130023424)&&(sc=4194304)):e=1);var o=R();i=ih(i,e),i!==null&&(Ac(i,e,o),Dk(i,o))}function uj(i){var e=i.memoizedState,o=0;e!==null&&(o=e.retryLane),Yk(i,o)}function bk(i,e){var o=0;switch(i.tag){case 13:var a=i.stateNode,s=i.memoizedState;s!==null&&(o=s.retryLane);break;case 19:a=i.stateNode;break;default:throw Error(p(314))}a!==null&&a.delete(e),Yk(i,o)}var Vk;Vk=function(i,e,o){if(i!==null)if(i.memoizedProps!==e.pendingProps||Wf.current)dh=!0;else{if(!(i.lanes&o)&&!(e.flags&128))return dh=!1,yj(i,e,o);dh=!!(i.flags&131072)}else dh=!1,I&&e.flags&1048576&&ug(e,ng,e.index);switch(e.lanes=0,e.tag){case 2:var a=e.type;ij(i,e),i=e.pendingProps;var s=Yf(e,H.current);ch(e,o),s=Nh(null,e,a,i,s,o);var c=Sh();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Zf(a)?(c=!0,cg(e)):c=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,kh(e),s.updater=Ei,e.stateNode=s,s._reactInternals=e,Ii(e,a,i,o),e=jj(null,e,a,!0,c,o)):(e.tag=0,I&&c&&vg(e),Xi(null,e,s,o),e=e.child),e;case 16:a=e.elementType;e:{switch(ij(i,e),i=e.pendingProps,s=a._init,a=s(a._payload),e.type=a,s=e.tag=Zk(a),i=Ci(a,i),s){case 0:e=cj(null,e,a,i,o);break e;case 1:e=hj(null,e,a,i,o);break e;case 11:e=Yi(null,e,a,i,o);break e;case 14:e=$i(null,e,a,Ci(a.type,i),o);break e}throw Error(p(306,a,""))}return e;case 0:return a=e.type,s=e.pendingProps,s=e.elementType===a?s:Ci(a,s),cj(i,e,a,s,o);case 1:return a=e.type,s=e.pendingProps,s=e.elementType===a?s:Ci(a,s),hj(i,e,a,s,o);case 3:e:{if(kj(e),i===null)throw Error(p(387));a=e.pendingProps,c=e.memoizedState,s=c.element,lh(i,e),qh(e,a,null,o);var d=e.memoizedState;if(a=d.element,c.isDehydrated)if(c={element:a,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},e.updateQueue.baseState=c,e.memoizedState=c,e.flags&256){s=Ji(Error(p(423)),e),e=lj(i,e,a,o,s);break e}else if(a!==s){s=Ji(Error(p(424)),e),e=lj(i,e,a,o,s);break e}else for(yg=Lf(e.stateNode.containerInfo.firstChild),xg=e,I=!0,zg=null,o=Vg(e,null,a,o),e.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ig(),a===s){e=Zi(i,e,o);break e}Xi(i,e,a,o)}e=e.child}return e;case 5:return Ah(e),i===null&&Eg(e),a=e.type,s=e.pendingProps,c=i!==null?i.memoizedProps:null,d=s.children,Ef(a,s)?d=null:c!==null&&Ef(a,c)&&(e.flags|=32),gj(i,e),Xi(i,e,d,o),e.child;case 6:return i===null&&Eg(e),null;case 13:return oj(i,e,o);case 4:return yh(e,e.stateNode.containerInfo),a=e.pendingProps,i===null?e.child=Ug(e,null,a,o):Xi(i,e,a,o),e.child;case 11:return a=e.type,s=e.pendingProps,s=e.elementType===a?s:Ci(a,s),Yi(i,e,a,s,o);case 7:return Xi(i,e,e.pendingProps,o),e.child;case 8:return Xi(i,e,e.pendingProps.children,o),e.child;case 12:return Xi(i,e,e.pendingProps.children,o),e.child;case 10:e:{if(a=e.type._context,s=e.pendingProps,c=e.memoizedProps,d=s.value,G(Wg,a._currentValue),a._currentValue=d,c!==null)if(He(c.value,d)){if(c.children===s.children&&!Wf.current){e=Zi(i,e,o);break e}}else for(c=e.child,c!==null&&(c.return=e);c!==null;){var h=c.dependencies;if(h!==null){d=c.child;for(var _=h.firstContext;_!==null;){if(_.context===a){if(c.tag===1){_=mh(-1,o&-o),_.tag=2;var g=c.updateQueue;if(g!==null){g=g.shared;var $=g.pending;$===null?_.next=_:(_.next=$.next,$.next=_),g.pending=_}}c.lanes|=o,_=c.alternate,_!==null&&(_.lanes|=o),bh(c.return,o,e),h.lanes|=o;break}_=_.next}}else if(c.tag===10)d=c.type===e.type?null:c.child;else if(c.tag===18){if(d=c.return,d===null)throw Error(p(341));d.lanes|=o,h=d.alternate,h!==null&&(h.lanes|=o),bh(d,o,e),d=c.sibling}else d=c.child;if(d!==null)d.return=c;else for(d=c;d!==null;){if(d===e){d=null;break}if(c=d.sibling,c!==null){c.return=d.return,d=c;break}d=d.return}c=d}Xi(i,e,s.children,o),e=e.child}return e;case 9:return s=e.type,a=e.pendingProps.children,ch(e,o),s=eh(s),a=a(s),e.flags|=1,Xi(i,e,a,o),e.child;case 14:return a=e.type,s=Ci(a,e.pendingProps),s=Ci(a.type,s),$i(i,e,a,s,o);case 15:return bj(i,e,e.type,e.pendingProps,o);case 17:return a=e.type,s=e.pendingProps,s=e.elementType===a?s:Ci(a,s),ij(i,e),e.tag=1,Zf(a)?(i=!0,cg(e)):i=!1,ch(e,o),Gi(e,a,s),Ii(e,a,s,o),jj(null,e,a,!0,i,o);case 19:return xj(i,e,o);case 22:return dj(i,e,o)}throw Error(p(156,e.tag))};function Fk(i,e){return ac(i,e)}function $k(i,e,o,a){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bg(i,e,o,a){return new $k(i,e,o,a)}function aj(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Zk(i){if(typeof i=="function")return aj(i)?1:0;if(i!=null){if(i=i.$$typeof,i===Da)return 11;if(i===Ga)return 14}return 2}function Pg(i,e){var o=i.alternate;return o===null?(o=Bg(i.tag,e,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=e,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&14680064,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o}function Rg(i,e,o,a,s,c){var d=2;if(a=i,typeof i=="function")aj(i)&&(d=1);else if(typeof i=="string")d=5;else e:switch(i){case ya:return Tg(o.children,s,c,e);case za:d=8,s|=8;break;case Aa:return i=Bg(12,o,e,s|2),i.elementType=Aa,i.lanes=c,i;case Ea:return i=Bg(13,o,e,s),i.elementType=Ea,i.lanes=c,i;case Fa:return i=Bg(19,o,e,s),i.elementType=Fa,i.lanes=c,i;case Ia:return pj(o,s,c,e);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Ba:d=10;break e;case Ca:d=9;break e;case Da:d=11;break e;case Ga:d=14;break e;case Ha:d=16,a=null;break e}throw Error(p(130,i==null?i:typeof i,""))}return e=Bg(d,o,e,s),e.elementType=i,e.type=a,e.lanes=c,e}function Tg(i,e,o,a){return i=Bg(7,i,a,e),i.lanes=o,i}function pj(i,e,o,a){return i=Bg(22,i,a,e),i.elementType=Ia,i.lanes=o,i.stateNode={isHidden:!1},i}function Qg(i,e,o){return i=Bg(6,i,null,e),i.lanes=o,i}function Sg(i,e,o){return e=Bg(4,i.children!==null?i.children:[],i.key,e),e.lanes=o,e.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},e}function al(i,e,o,a,s){this.tag=e,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zc(0),this.expirationTimes=zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zc(0),this.identifierPrefix=a,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function bl(i,e,o,a,s,c,d,h,_){return i=new al(i,e,o,h,_),e===1?(e=1,c===!0&&(e|=8)):e=0,c=Bg(3,null,null,e),i.current=c,c.stateNode=i,c.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},kh(c),i}function cl(i,e,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wa,key:a==null?null:""+a,children:i,containerInfo:e,implementation:o}}function dl(i){if(!i)return Vf;i=i._reactInternals;e:{if(Vb(i)!==i||i.tag!==1)throw Error(p(170));var e=i;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Zf(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(p(171))}if(i.tag===1){var o=i.type;if(Zf(o))return bg(i,o,e)}return e}function el(i,e,o,a,s,c,d,h,_){return i=bl(o,a,!0,i,s,c,d,h,_),i.context=dl(null),o=i.current,a=R(),s=yi(o),c=mh(a,s),c.callback=e??null,nh(o,c,s),i.current.lanes=s,Ac(i,s,a),Dk(i,a),i}function fl(i,e,o,a){var s=e.current,c=R(),d=yi(s);return o=dl(o),e.context===null?e.context=o:e.pendingContext=o,e=mh(c,d),e.payload={element:i},a=a===void 0?null:a,a!==null&&(e.callback=a),i=nh(s,e,d),i!==null&&(gi(i,s,d,c),oh(i,s,d)),d}function gl(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function hl(i,e){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<e?o:e}}function il(i,e){hl(i,e),(i=i.alternate)&&hl(i,e)}function jl(){return null}var kl=typeof reportError=="function"?reportError:function(i){console.error(i)};function ll(i){this._internalRoot=i}ml.prototype.render=ll.prototype.render=function(i){var e=this._internalRoot;if(e===null)throw Error(p(409));fl(i,e,null,null)};ml.prototype.unmount=ll.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var e=i.containerInfo;Rk(function(){fl(null,i,null,null)}),e[uf]=null}};function ml(i){this._internalRoot=i}ml.prototype.unstable_scheduleHydration=function(i){if(i){var e=Hc();i={blockedOn:null,target:i,priority:e};for(var o=0;o<Qc.length&&e!==0&&e<Qc[o].priority;o++);Qc.splice(o,0,i),o===0&&Vc(i)}};function nl(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function ol(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function pl(){}function ql(i,e,o,a,s){if(s){if(typeof a=="function"){var c=a;a=function(){var g=gl(d);c.call(g)}}var d=el(e,a,i,0,null,!1,!1,"",pl);return i._reactRootContainer=d,i[uf]=d.current,sf(i.nodeType===8?i.parentNode:i),Rk(),d}for(;s=i.lastChild;)i.removeChild(s);if(typeof a=="function"){var h=a;a=function(){var g=gl(_);h.call(g)}}var _=bl(i,0,!1,null,null,!1,!1,"",pl);return i._reactRootContainer=_,i[uf]=_.current,sf(i.nodeType===8?i.parentNode:i),Rk(function(){fl(e,_,o,a)}),_}function rl(i,e,o,a,s){var c=o._reactRootContainer;if(c){var d=c;if(typeof s=="function"){var h=s;s=function(){var _=gl(d);h.call(_)}}fl(e,d,i,s)}else d=ql(o,e,i,s,a);return gl(d)}Ec=function(i){switch(i.tag){case 3:var e=i.stateNode;if(e.current.memoizedState.isDehydrated){var o=tc(e.pendingLanes);o!==0&&(Cc(e,o|1),Dk(e,B()),!(K&6)&&(Gj=B()+500,jg()))}break;case 13:Rk(function(){var a=ih(i,1);if(a!==null){var s=R();gi(a,i,1,s)}}),il(i,1)}};Fc=function(i){if(i.tag===13){var e=ih(i,134217728);if(e!==null){var o=R();gi(e,i,134217728,o)}il(i,134217728)}};Gc=function(i){if(i.tag===13){var e=yi(i),o=ih(i,e);if(o!==null){var a=R();gi(o,i,e,a)}il(i,e)}};Hc=function(){return C};Ic=function(i,e){var o=C;try{return C=i,e()}finally{C=o}};yb=function(i,e,o){switch(e){case"input":if(bb(i,o),e=o.name,o.type==="radio"&&e!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<o.length;e++){var a=o[e];if(a!==i&&a.form===i.form){var s=Db(a);if(!s)throw Error(p(90));Wa(a),bb(a,s)}}}break;case"textarea":ib(i,o);break;case"select":e=o.value,e!=null&&fb(i,!!o.multiple,e,!1)}};Gb=Qk;Hb=Rk;var sl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Qk]},tl={findFiberByHostInstance:Wc,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ul={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Zb(i),i===null?null:i.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||jl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{kc=vl.inject(ul),lc=vl}catch{}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sl;reactDom_production_min.createPortal=function(i,e){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nl(e))throw Error(p(200));return cl(i,e,null,o)};reactDom_production_min.createRoot=function(i,e){if(!nl(i))throw Error(p(299));var o=!1,a="",s=kl;return e!=null&&(e.unstable_strictMode===!0&&(o=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=bl(i,1,!1,null,null,o,!1,a,s),i[uf]=e.current,sf(i.nodeType===8?i.parentNode:i),new ll(e)};reactDom_production_min.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var e=i._reactInternals;if(e===void 0)throw typeof i.render=="function"?Error(p(188)):(i=Object.keys(i).join(","),Error(p(268,i)));return i=Zb(e),i=i===null?null:i.stateNode,i};reactDom_production_min.flushSync=function(i){return Rk(i)};reactDom_production_min.hydrate=function(i,e,o){if(!ol(e))throw Error(p(200));return rl(null,i,e,!0,o)};reactDom_production_min.hydrateRoot=function(i,e,o){if(!nl(i))throw Error(p(405));var a=o!=null&&o.hydratedSources||null,s=!1,c="",d=kl;if(o!=null&&(o.unstable_strictMode===!0&&(s=!0),o.identifierPrefix!==void 0&&(c=o.identifierPrefix),o.onRecoverableError!==void 0&&(d=o.onRecoverableError)),e=el(e,null,i,1,o??null,s,!1,c,d),i[uf]=e.current,sf(i),a)for(i=0;i<a.length;i++)o=a[i],s=o._getVersion,s=s(o._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[o,s]:e.mutableSourceEagerHydrationData.push(o,s);return new ml(e)};reactDom_production_min.render=function(i,e,o){if(!ol(e))throw Error(p(200));return rl(null,i,e,!1,o)};reactDom_production_min.unmountComponentAtNode=function(i){if(!ol(i))throw Error(p(40));return i._reactRootContainer?(Rk(function(){rl(null,null,i,!1,function(){i._reactRootContainer=null,i[uf]=null})}),!0):!1};reactDom_production_min.unstable_batchedUpdates=Qk;reactDom_production_min.unstable_renderSubtreeIntoContainer=function(i,e,o,a){if(!ol(o))throw Error(p(200));if(i==null||i._reactInternals===void 0)throw Error(p(38));return rl(i,e,o,!1,a)};reactDom_production_min.version="18.3.1-next-f1338f8080-20240426";function checkDCE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE)}catch(i){console.error(i)}}checkDCE(),reactDom.exports=reactDom_production_min;var reactDomExports=reactDom.exports,m=reactDomExports;client.createRoot=m.createRoot,client.hydrateRoot=m.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const REVISION="166",CullFaceNone=0,CullFaceBack=1,CullFaceFront=2,PCFShadowMap=1,PCFSoftShadowMap=2,VSMShadowMap=3,FrontSide=0,BackSide=1,DoubleSide=2,NoBlending=0,NormalBlending=1,AdditiveBlending=2,SubtractiveBlending=3,MultiplyBlending=4,CustomBlending=5,AddEquation=100,SubtractEquation=101,ReverseSubtractEquation=102,MinEquation=103,MaxEquation=104,ZeroFactor=200,OneFactor=201,SrcColorFactor=202,OneMinusSrcColorFactor=203,SrcAlphaFactor=204,OneMinusSrcAlphaFactor=205,DstAlphaFactor=206,OneMinusDstAlphaFactor=207,DstColorFactor=208,OneMinusDstColorFactor=209,SrcAlphaSaturateFactor=210,ConstantColorFactor=211,OneMinusConstantColorFactor=212,ConstantAlphaFactor=213,OneMinusConstantAlphaFactor=214,NeverDepth=0,AlwaysDepth=1,LessDepth=2,LessEqualDepth=3,EqualDepth=4,GreaterEqualDepth=5,GreaterDepth=6,NotEqualDepth=7,MultiplyOperation=0,MixOperation=1,AddOperation=2,NoToneMapping=0,LinearToneMapping=1,ReinhardToneMapping=2,CineonToneMapping=3,ACESFilmicToneMapping=4,CustomToneMapping=5,AgXToneMapping=6,NeutralToneMapping=7,UVMapping=300,CubeReflectionMapping=301,CubeRefractionMapping=302,EquirectangularReflectionMapping=303,EquirectangularRefractionMapping=304,CubeUVReflectionMapping=306,RepeatWrapping=1e3,ClampToEdgeWrapping=1001,MirroredRepeatWrapping=1002,NearestFilter=1003,NearestMipmapNearestFilter=1004,NearestMipmapLinearFilter=1005,LinearFilter=1006,LinearMipmapNearestFilter=1007,LinearMipmapLinearFilter=1008,UnsignedByteType=1009,ByteType=1010,ShortType=1011,UnsignedShortType=1012,IntType=1013,UnsignedIntType=1014,FloatType=1015,HalfFloatType=1016,UnsignedShort4444Type=1017,UnsignedShort5551Type=1018,UnsignedInt248Type=1020,UnsignedInt5999Type=35902,AlphaFormat=1021,RGBFormat=1022,RGBAFormat=1023,LuminanceFormat=1024,LuminanceAlphaFormat=1025,DepthFormat=1026,DepthStencilFormat=1027,RedFormat=1028,RedIntegerFormat=1029,RGFormat=1030,RGIntegerFormat=1031,RGBAIntegerFormat=1033,RGB_S3TC_DXT1_Format=33776,RGBA_S3TC_DXT1_Format=33777,RGBA_S3TC_DXT3_Format=33778,RGBA_S3TC_DXT5_Format=33779,RGB_PVRTC_4BPPV1_Format=35840,RGB_PVRTC_2BPPV1_Format=35841,RGBA_PVRTC_4BPPV1_Format=35842,RGBA_PVRTC_2BPPV1_Format=35843,RGB_ETC1_Format=36196,RGB_ETC2_Format=37492,RGBA_ETC2_EAC_Format=37496,RGBA_ASTC_4x4_Format=37808,RGBA_ASTC_5x4_Format=37809,RGBA_ASTC_5x5_Format=37810,RGBA_ASTC_6x5_Format=37811,RGBA_ASTC_6x6_Format=37812,RGBA_ASTC_8x5_Format=37813,RGBA_ASTC_8x6_Format=37814,RGBA_ASTC_8x8_Format=37815,RGBA_ASTC_10x5_Format=37816,RGBA_ASTC_10x6_Format=37817,RGBA_ASTC_10x8_Format=37818,RGBA_ASTC_10x10_Format=37819,RGBA_ASTC_12x10_Format=37820,RGBA_ASTC_12x12_Format=37821,RGBA_BPTC_Format=36492,RGB_BPTC_SIGNED_Format=36494,RGB_BPTC_UNSIGNED_Format=36495,RED_RGTC1_Format=36283,SIGNED_RED_RGTC1_Format=36284,RED_GREEN_RGTC2_Format=36285,SIGNED_RED_GREEN_RGTC2_Format=36286,BasicDepthPacking=3200,RGBADepthPacking=3201,TangentSpaceNormalMap=0,ObjectSpaceNormalMap=1,NoColorSpace="",SRGBColorSpace="srgb",LinearSRGBColorSpace="srgb-linear",DisplayP3ColorSpace="display-p3",LinearDisplayP3ColorSpace="display-p3-linear",LinearTransfer="linear",SRGBTransfer="srgb",Rec709Primaries="rec709",P3Primaries="p3",KeepStencilOp=7680,AlwaysStencilFunc=519,NeverCompare=512,LessCompare=513,EqualCompare=514,LessEqualCompare=515,GreaterCompare=516,NotEqualCompare=517,GreaterEqualCompare=518,AlwaysCompare=519,StaticDrawUsage=35044,GLSL3="300 es",WebGLCoordinateSystem=2e3,WebGPUCoordinateSystem=2001;class EventDispatcher{addEventListener(e,o){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(o)===-1&&a[e].push(o)}hasEventListener(e,o){if(this._listeners===void 0)return!1;const a=this._listeners;return a[e]!==void 0&&a[e].indexOf(o)!==-1}removeEventListener(e,o){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const c=s.indexOf(o);c!==-1&&s.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const a=this._listeners[e.type];if(a!==void 0){e.target=this;const s=a.slice(0);for(let c=0,d=s.length;c<d;c++)s[c].call(this,e);e.target=null}}}const _lut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],DEG2RAD=Math.PI/180,RAD2DEG=180/Math.PI;function generateUUID(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,o=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(_lut[i&255]+_lut[i>>8&255]+_lut[i>>16&255]+_lut[i>>24&255]+"-"+_lut[e&255]+_lut[e>>8&255]+"-"+_lut[e>>16&15|64]+_lut[e>>24&255]+"-"+_lut[o&63|128]+_lut[o>>8&255]+"-"+_lut[o>>16&255]+_lut[o>>24&255]+_lut[a&255]+_lut[a>>8&255]+_lut[a>>16&255]+_lut[a>>24&255]).toLowerCase()}function clamp(i,e,o){return Math.max(e,Math.min(o,i))}function euclideanModulo(i,e){return(i%e+e)%e}function lerp(i,e,o){return(1-o)*i+o*e}function denormalize(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function normalize(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Vector2{constructor(e=0,o=0){Vector2.prototype.isVector2=!0,this.x=e,this.y=o}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,o){return this.x=e,this.y=o,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,o){switch(e){case 0:this.x=o;break;case 1:this.y=o;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,o){return this.x=e.x+o.x,this.y=e.y+o.y,this}addScaledVector(e,o){return this.x+=e.x*o,this.y+=e.y*o,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,o){return this.x=e.x-o.x,this.y=e.y-o.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const o=this.x,a=this.y,s=e.elements;return this.x=s[0]*o+s[3]*a+s[6],this.y=s[1]*o+s[4]*a+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,o){return this.x=Math.max(e.x,Math.min(o.x,this.x)),this.y=Math.max(e.y,Math.min(o.y,this.y)),this}clampScalar(e,o){return this.x=Math.max(e,Math.min(o,this.x)),this.y=Math.max(e,Math.min(o,this.y)),this}clampLength(e,o){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(e,Math.min(o,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const o=Math.sqrt(this.lengthSq()*e.lengthSq());if(o===0)return Math.PI/2;const a=this.dot(e)/o;return Math.acos(clamp(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const o=this.x-e.x,a=this.y-e.y;return o*o+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,o){return this.x+=(e.x-this.x)*o,this.y+=(e.y-this.y)*o,this}lerpVectors(e,o,a){return this.x=e.x+(o.x-e.x)*a,this.y=e.y+(o.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,o=0){return this.x=e[o],this.y=e[o+1],this}toArray(e=[],o=0){return e[o]=this.x,e[o+1]=this.y,e}fromBufferAttribute(e,o){return this.x=e.getX(o),this.y=e.getY(o),this}rotateAround(e,o){const a=Math.cos(o),s=Math.sin(o),c=this.x-e.x,d=this.y-e.y;return this.x=c*a-d*s+e.x,this.y=c*s+d*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Matrix3{constructor(e,o,a,s,c,d,h,_,g){Matrix3.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,o,a,s,c,d,h,_,g)}set(e,o,a,s,c,d,h,_,g){const $=this.elements;return $[0]=e,$[1]=s,$[2]=h,$[3]=o,$[4]=c,$[5]=_,$[6]=a,$[7]=d,$[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const o=this.elements,a=e.elements;return o[0]=a[0],o[1]=a[1],o[2]=a[2],o[3]=a[3],o[4]=a[4],o[5]=a[5],o[6]=a[6],o[7]=a[7],o[8]=a[8],this}extractBasis(e,o,a){return e.setFromMatrix3Column(this,0),o.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const o=e.elements;return this.set(o[0],o[4],o[8],o[1],o[5],o[9],o[2],o[6],o[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,o){const a=e.elements,s=o.elements,c=this.elements,d=a[0],h=a[3],_=a[6],g=a[1],$=a[4],_e=a[7],j=a[2],tt=a[5],rt=a[8],ot=s[0],et=s[3],b=s[6],it=s[1],nt=s[4],ct=s[7],mt=s[2],dt=s[5],ft=s[8];return c[0]=d*ot+h*it+_*mt,c[3]=d*et+h*nt+_*dt,c[6]=d*b+h*ct+_*ft,c[1]=g*ot+$*it+_e*mt,c[4]=g*et+$*nt+_e*dt,c[7]=g*b+$*ct+_e*ft,c[2]=j*ot+tt*it+rt*mt,c[5]=j*et+tt*nt+rt*dt,c[8]=j*b+tt*ct+rt*ft,this}multiplyScalar(e){const o=this.elements;return o[0]*=e,o[3]*=e,o[6]*=e,o[1]*=e,o[4]*=e,o[7]*=e,o[2]*=e,o[5]*=e,o[8]*=e,this}determinant(){const e=this.elements,o=e[0],a=e[1],s=e[2],c=e[3],d=e[4],h=e[5],_=e[6],g=e[7],$=e[8];return o*d*$-o*h*g-a*c*$+a*h*_+s*c*g-s*d*_}invert(){const e=this.elements,o=e[0],a=e[1],s=e[2],c=e[3],d=e[4],h=e[5],_=e[6],g=e[7],$=e[8],_e=$*d-h*g,j=h*_-$*c,tt=g*c-d*_,rt=o*_e+a*j+s*tt;if(rt===0)return this.set(0,0,0,0,0,0,0,0,0);const ot=1/rt;return e[0]=_e*ot,e[1]=(s*g-$*a)*ot,e[2]=(h*a-s*d)*ot,e[3]=j*ot,e[4]=($*o-s*_)*ot,e[5]=(s*c-h*o)*ot,e[6]=tt*ot,e[7]=(a*_-g*o)*ot,e[8]=(d*o-a*c)*ot,this}transpose(){let e;const o=this.elements;return e=o[1],o[1]=o[3],o[3]=e,e=o[2],o[2]=o[6],o[6]=e,e=o[5],o[5]=o[7],o[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const o=this.elements;return e[0]=o[0],e[1]=o[3],e[2]=o[6],e[3]=o[1],e[4]=o[4],e[5]=o[7],e[6]=o[2],e[7]=o[5],e[8]=o[8],this}setUvTransform(e,o,a,s,c,d,h){const _=Math.cos(c),g=Math.sin(c);return this.set(a*_,a*g,-a*(_*d+g*h)+d+e,-s*g,s*_,-s*(-g*d+_*h)+h+o,0,0,1),this}scale(e,o){return this.premultiply(_m3.makeScale(e,o)),this}rotate(e){return this.premultiply(_m3.makeRotation(-e)),this}translate(e,o){return this.premultiply(_m3.makeTranslation(e,o)),this}makeTranslation(e,o){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,o,0,0,1),this}makeRotation(e){const o=Math.cos(e),a=Math.sin(e);return this.set(o,-a,0,a,o,0,0,0,1),this}makeScale(e,o){return this.set(e,0,0,0,o,0,0,0,1),this}equals(e){const o=this.elements,a=e.elements;for(let s=0;s<9;s++)if(o[s]!==a[s])return!1;return!0}fromArray(e,o=0){for(let a=0;a<9;a++)this.elements[a]=e[a+o];return this}toArray(e=[],o=0){const a=this.elements;return e[o]=a[0],e[o+1]=a[1],e[o+2]=a[2],e[o+3]=a[3],e[o+4]=a[4],e[o+5]=a[5],e[o+6]=a[6],e[o+7]=a[7],e[o+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _m3=new Matrix3;function arrayNeedsUint32(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function createElementNS(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function createCanvasElement(){const i=createElementNS("canvas");return i.style.display="block",i}const _cache={};function warnOnce(i){i in _cache||(_cache[i]=!0,console.warn(i))}function probeAsync(i,e,o){return new Promise(function(a,s){function c(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(c,o);break;default:a()}}setTimeout(c,o)})}const LINEAR_SRGB_TO_LINEAR_DISPLAY_P3=new Matrix3().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),LINEAR_DISPLAY_P3_TO_LINEAR_SRGB=new Matrix3().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),COLOR_SPACES={[LinearSRGBColorSpace]:{transfer:LinearTransfer,primaries:Rec709Primaries,toReference:i=>i,fromReference:i=>i},[SRGBColorSpace]:{transfer:SRGBTransfer,primaries:Rec709Primaries,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[LinearDisplayP3ColorSpace]:{transfer:LinearTransfer,primaries:P3Primaries,toReference:i=>i.applyMatrix3(LINEAR_DISPLAY_P3_TO_LINEAR_SRGB),fromReference:i=>i.applyMatrix3(LINEAR_SRGB_TO_LINEAR_DISPLAY_P3)},[DisplayP3ColorSpace]:{transfer:SRGBTransfer,primaries:P3Primaries,toReference:i=>i.convertSRGBToLinear().applyMatrix3(LINEAR_DISPLAY_P3_TO_LINEAR_SRGB),fromReference:i=>i.applyMatrix3(LINEAR_SRGB_TO_LINEAR_DISPLAY_P3).convertLinearToSRGB()}},SUPPORTED_WORKING_COLOR_SPACES=new Set([LinearSRGBColorSpace,LinearDisplayP3ColorSpace]),ColorManagement={enabled:!0,_workingColorSpace:LinearSRGBColorSpace,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!SUPPORTED_WORKING_COLOR_SPACES.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,o){if(this.enabled===!1||e===o||!e||!o)return i;const a=COLOR_SPACES[e].toReference,s=COLOR_SPACES[o].fromReference;return s(a(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return COLOR_SPACES[i].primaries},getTransfer:function(i){return i===NoColorSpace?LinearTransfer:COLOR_SPACES[i].transfer}};function SRGBToLinear(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function LinearToSRGB(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let _canvas;class ImageUtils{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let o;if(e instanceof HTMLCanvasElement)o=e;else{_canvas===void 0&&(_canvas=createElementNS("canvas")),_canvas.width=e.width,_canvas.height=e.height;const a=_canvas.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),o=_canvas}return o.width>2048||o.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),o.toDataURL("image/jpeg",.6)):o.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const o=createElementNS("canvas");o.width=e.width,o.height=e.height;const a=o.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const s=a.getImageData(0,0,e.width,e.height),c=s.data;for(let d=0;d<c.length;d++)c[d]=SRGBToLinear(c[d]/255)*255;return a.putImageData(s,0,0),o}else if(e.data){const o=e.data.slice(0);for(let a=0;a<o.length;a++)o instanceof Uint8Array||o instanceof Uint8ClampedArray?o[a]=Math.floor(SRGBToLinear(o[a]/255)*255):o[a]=SRGBToLinear(o[a]);return{data:o,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _sourceId=0;class Source{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_sourceId++}),this.uuid=generateUUID(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const o=e===void 0||typeof e=="string";if(!o&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let c;if(Array.isArray(s)){c=[];for(let d=0,h=s.length;d<h;d++)s[d].isDataTexture?c.push(serializeImage(s[d].image)):c.push(serializeImage(s[d]))}else c=serializeImage(s);a.url=c}return o||(e.images[this.uuid]=a),a}}function serializeImage(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ImageUtils.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _textureId=0;class Texture extends EventDispatcher{constructor(e=Texture.DEFAULT_IMAGE,o=Texture.DEFAULT_MAPPING,a=ClampToEdgeWrapping,s=ClampToEdgeWrapping,c=LinearFilter,d=LinearMipmapLinearFilter,h=RGBAFormat,_=UnsignedByteType,g=Texture.DEFAULT_ANISOTROPY,$=NoColorSpace){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_textureId++}),this.uuid=generateUUID(),this.name="",this.source=new Source(e),this.mipmaps=[],this.mapping=o,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=c,this.minFilter=d,this.anisotropy=g,this.format=h,this.internalFormat=null,this.type=_,this.offset=new Vector2(0,0),this.repeat=new Vector2(1,1),this.center=new Vector2(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Matrix3,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=$,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const o=e===void 0||typeof e=="string";if(!o&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),o||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==UVMapping)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case RepeatWrapping:e.x=e.x-Math.floor(e.x);break;case ClampToEdgeWrapping:e.x=e.x<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case RepeatWrapping:e.y=e.y-Math.floor(e.y);break;case ClampToEdgeWrapping:e.y=e.y<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Texture.DEFAULT_IMAGE=null;Texture.DEFAULT_MAPPING=UVMapping;Texture.DEFAULT_ANISOTROPY=1;class Vector4{constructor(e=0,o=0,a=0,s=1){Vector4.prototype.isVector4=!0,this.x=e,this.y=o,this.z=a,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,o,a,s){return this.x=e,this.y=o,this.z=a,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,o){switch(e){case 0:this.x=o;break;case 1:this.y=o;break;case 2:this.z=o;break;case 3:this.w=o;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,o){return this.x=e.x+o.x,this.y=e.y+o.y,this.z=e.z+o.z,this.w=e.w+o.w,this}addScaledVector(e,o){return this.x+=e.x*o,this.y+=e.y*o,this.z+=e.z*o,this.w+=e.w*o,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,o){return this.x=e.x-o.x,this.y=e.y-o.y,this.z=e.z-o.z,this.w=e.w-o.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const o=this.x,a=this.y,s=this.z,c=this.w,d=e.elements;return this.x=d[0]*o+d[4]*a+d[8]*s+d[12]*c,this.y=d[1]*o+d[5]*a+d[9]*s+d[13]*c,this.z=d[2]*o+d[6]*a+d[10]*s+d[14]*c,this.w=d[3]*o+d[7]*a+d[11]*s+d[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const o=Math.sqrt(1-e.w*e.w);return o<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/o,this.y=e.y/o,this.z=e.z/o),this}setAxisAngleFromRotationMatrix(e){let o,a,s,c;const _=e.elements,g=_[0],$=_[4],_e=_[8],j=_[1],tt=_[5],rt=_[9],ot=_[2],et=_[6],b=_[10];if(Math.abs($-j)<.01&&Math.abs(_e-ot)<.01&&Math.abs(rt-et)<.01){if(Math.abs($+j)<.1&&Math.abs(_e+ot)<.1&&Math.abs(rt+et)<.1&&Math.abs(g+tt+b-3)<.1)return this.set(1,0,0,0),this;o=Math.PI;const nt=(g+1)/2,ct=(tt+1)/2,mt=(b+1)/2,dt=($+j)/4,ft=(_e+ot)/4,gt=(rt+et)/4;return nt>ct&&nt>mt?nt<.01?(a=0,s=.707106781,c=.707106781):(a=Math.sqrt(nt),s=dt/a,c=ft/a):ct>mt?ct<.01?(a=.707106781,s=0,c=.707106781):(s=Math.sqrt(ct),a=dt/s,c=gt/s):mt<.01?(a=.707106781,s=.707106781,c=0):(c=Math.sqrt(mt),a=ft/c,s=gt/c),this.set(a,s,c,o),this}let it=Math.sqrt((et-rt)*(et-rt)+(_e-ot)*(_e-ot)+(j-$)*(j-$));return Math.abs(it)<.001&&(it=1),this.x=(et-rt)/it,this.y=(_e-ot)/it,this.z=(j-$)/it,this.w=Math.acos((g+tt+b-1)/2),this}setFromMatrixPosition(e){const o=e.elements;return this.x=o[12],this.y=o[13],this.z=o[14],this.w=o[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,o){return this.x=Math.max(e.x,Math.min(o.x,this.x)),this.y=Math.max(e.y,Math.min(o.y,this.y)),this.z=Math.max(e.z,Math.min(o.z,this.z)),this.w=Math.max(e.w,Math.min(o.w,this.w)),this}clampScalar(e,o){return this.x=Math.max(e,Math.min(o,this.x)),this.y=Math.max(e,Math.min(o,this.y)),this.z=Math.max(e,Math.min(o,this.z)),this.w=Math.max(e,Math.min(o,this.w)),this}clampLength(e,o){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(e,Math.min(o,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,o){return this.x+=(e.x-this.x)*o,this.y+=(e.y-this.y)*o,this.z+=(e.z-this.z)*o,this.w+=(e.w-this.w)*o,this}lerpVectors(e,o,a){return this.x=e.x+(o.x-e.x)*a,this.y=e.y+(o.y-e.y)*a,this.z=e.z+(o.z-e.z)*a,this.w=e.w+(o.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,o=0){return this.x=e[o],this.y=e[o+1],this.z=e[o+2],this.w=e[o+3],this}toArray(e=[],o=0){return e[o]=this.x,e[o+1]=this.y,e[o+2]=this.z,e[o+3]=this.w,e}fromBufferAttribute(e,o){return this.x=e.getX(o),this.y=e.getY(o),this.z=e.getZ(o),this.w=e.getW(o),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RenderTarget extends EventDispatcher{constructor(e=1,o=1,a={}){super(),this.isRenderTarget=!0,this.width=e,this.height=o,this.depth=1,this.scissor=new Vector4(0,0,e,o),this.scissorTest=!1,this.viewport=new Vector4(0,0,e,o);const s={width:e,height:o,depth:1};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:LinearFilter,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},a);const c=new Texture(s,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);c.flipY=!1,c.generateMipmaps=a.generateMipmaps,c.internalFormat=a.internalFormat,this.textures=[];const d=a.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this.depthTexture=a.depthTexture,this.samples=a.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,o,a=1){if(this.width!==e||this.height!==o||this.depth!==a){this.width=e,this.height=o,this.depth=a;for(let s=0,c=this.textures.length;s<c;s++)this.textures[s].image.width=e,this.textures[s].image.height=o,this.textures[s].image.depth=a;this.dispose()}this.viewport.set(0,0,e,o),this.scissor.set(0,0,e,o)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let a=0,s=e.textures.length;a<s;a++)this.textures[a]=e.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0;const o=Object.assign({},e.texture.image);return this.texture.source=new Source(o),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class WebGLRenderTarget extends RenderTarget{constructor(e=1,o=1,a={}){super(e,o,a),this.isWebGLRenderTarget=!0}}class DataArrayTexture extends Texture{constructor(e=null,o=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:o,height:a,depth:s},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Data3DTexture extends Texture{constructor(e=null,o=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:o,height:a,depth:s},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Quaternion{constructor(e=0,o=0,a=0,s=1){this.isQuaternion=!0,this._x=e,this._y=o,this._z=a,this._w=s}static slerpFlat(e,o,a,s,c,d,h){let _=a[s+0],g=a[s+1],$=a[s+2],_e=a[s+3];const j=c[d+0],tt=c[d+1],rt=c[d+2],ot=c[d+3];if(h===0){e[o+0]=_,e[o+1]=g,e[o+2]=$,e[o+3]=_e;return}if(h===1){e[o+0]=j,e[o+1]=tt,e[o+2]=rt,e[o+3]=ot;return}if(_e!==ot||_!==j||g!==tt||$!==rt){let et=1-h;const b=_*j+g*tt+$*rt+_e*ot,it=b>=0?1:-1,nt=1-b*b;if(nt>Number.EPSILON){const mt=Math.sqrt(nt),dt=Math.atan2(mt,b*it);et=Math.sin(et*dt)/mt,h=Math.sin(h*dt)/mt}const ct=h*it;if(_=_*et+j*ct,g=g*et+tt*ct,$=$*et+rt*ct,_e=_e*et+ot*ct,et===1-h){const mt=1/Math.sqrt(_*_+g*g+$*$+_e*_e);_*=mt,g*=mt,$*=mt,_e*=mt}}e[o]=_,e[o+1]=g,e[o+2]=$,e[o+3]=_e}static multiplyQuaternionsFlat(e,o,a,s,c,d){const h=a[s],_=a[s+1],g=a[s+2],$=a[s+3],_e=c[d],j=c[d+1],tt=c[d+2],rt=c[d+3];return e[o]=h*rt+$*_e+_*tt-g*j,e[o+1]=_*rt+$*j+g*_e-h*tt,e[o+2]=g*rt+$*tt+h*j-_*_e,e[o+3]=$*rt-h*_e-_*j-g*tt,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,o,a,s){return this._x=e,this._y=o,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,o=!0){const a=e._x,s=e._y,c=e._z,d=e._order,h=Math.cos,_=Math.sin,g=h(a/2),$=h(s/2),_e=h(c/2),j=_(a/2),tt=_(s/2),rt=_(c/2);switch(d){case"XYZ":this._x=j*$*_e+g*tt*rt,this._y=g*tt*_e-j*$*rt,this._z=g*$*rt+j*tt*_e,this._w=g*$*_e-j*tt*rt;break;case"YXZ":this._x=j*$*_e+g*tt*rt,this._y=g*tt*_e-j*$*rt,this._z=g*$*rt-j*tt*_e,this._w=g*$*_e+j*tt*rt;break;case"ZXY":this._x=j*$*_e-g*tt*rt,this._y=g*tt*_e+j*$*rt,this._z=g*$*rt+j*tt*_e,this._w=g*$*_e-j*tt*rt;break;case"ZYX":this._x=j*$*_e-g*tt*rt,this._y=g*tt*_e+j*$*rt,this._z=g*$*rt-j*tt*_e,this._w=g*$*_e+j*tt*rt;break;case"YZX":this._x=j*$*_e+g*tt*rt,this._y=g*tt*_e+j*$*rt,this._z=g*$*rt-j*tt*_e,this._w=g*$*_e-j*tt*rt;break;case"XZY":this._x=j*$*_e-g*tt*rt,this._y=g*tt*_e-j*$*rt,this._z=g*$*rt+j*tt*_e,this._w=g*$*_e+j*tt*rt;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return o===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,o){const a=o/2,s=Math.sin(a);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const o=e.elements,a=o[0],s=o[4],c=o[8],d=o[1],h=o[5],_=o[9],g=o[2],$=o[6],_e=o[10],j=a+h+_e;if(j>0){const tt=.5/Math.sqrt(j+1);this._w=.25/tt,this._x=($-_)*tt,this._y=(c-g)*tt,this._z=(d-s)*tt}else if(a>h&&a>_e){const tt=2*Math.sqrt(1+a-h-_e);this._w=($-_)/tt,this._x=.25*tt,this._y=(s+d)/tt,this._z=(c+g)/tt}else if(h>_e){const tt=2*Math.sqrt(1+h-a-_e);this._w=(c-g)/tt,this._x=(s+d)/tt,this._y=.25*tt,this._z=(_+$)/tt}else{const tt=2*Math.sqrt(1+_e-a-h);this._w=(d-s)/tt,this._x=(c+g)/tt,this._y=(_+$)/tt,this._z=.25*tt}return this._onChangeCallback(),this}setFromUnitVectors(e,o){let a=e.dot(o)+1;return a<Number.EPSILON?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*o.z-e.z*o.y,this._y=e.z*o.x-e.x*o.z,this._z=e.x*o.y-e.y*o.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(clamp(this.dot(e),-1,1)))}rotateTowards(e,o){const a=this.angleTo(e);if(a===0)return this;const s=Math.min(1,o/a);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,o){const a=e._x,s=e._y,c=e._z,d=e._w,h=o._x,_=o._y,g=o._z,$=o._w;return this._x=a*$+d*h+s*g-c*_,this._y=s*$+d*_+c*h-a*g,this._z=c*$+d*g+a*_-s*h,this._w=d*$-a*h-s*_-c*g,this._onChangeCallback(),this}slerp(e,o){if(o===0)return this;if(o===1)return this.copy(e);const a=this._x,s=this._y,c=this._z,d=this._w;let h=d*e._w+a*e._x+s*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=a,this._y=s,this._z=c,this;const _=1-h*h;if(_<=Number.EPSILON){const tt=1-o;return this._w=tt*d+o*this._w,this._x=tt*a+o*this._x,this._y=tt*s+o*this._y,this._z=tt*c+o*this._z,this.normalize(),this}const g=Math.sqrt(_),$=Math.atan2(g,h),_e=Math.sin((1-o)*$)/g,j=Math.sin(o*$)/g;return this._w=d*_e+this._w*j,this._x=a*_e+this._x*j,this._y=s*_e+this._y*j,this._z=c*_e+this._z*j,this._onChangeCallback(),this}slerpQuaternions(e,o,a){return this.copy(e).slerp(o,a)}random(){const e=2*Math.PI*Math.random(),o=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(s*Math.sin(e),s*Math.cos(e),c*Math.sin(o),c*Math.cos(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,o=0){return this._x=e[o],this._y=e[o+1],this._z=e[o+2],this._w=e[o+3],this._onChangeCallback(),this}toArray(e=[],o=0){return e[o]=this._x,e[o+1]=this._y,e[o+2]=this._z,e[o+3]=this._w,e}fromBufferAttribute(e,o){return this._x=e.getX(o),this._y=e.getY(o),this._z=e.getZ(o),this._w=e.getW(o),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Vector3{constructor(e=0,o=0,a=0){Vector3.prototype.isVector3=!0,this.x=e,this.y=o,this.z=a}set(e,o,a){return a===void 0&&(a=this.z),this.x=e,this.y=o,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,o){switch(e){case 0:this.x=o;break;case 1:this.y=o;break;case 2:this.z=o;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,o){return this.x=e.x+o.x,this.y=e.y+o.y,this.z=e.z+o.z,this}addScaledVector(e,o){return this.x+=e.x*o,this.y+=e.y*o,this.z+=e.z*o,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,o){return this.x=e.x-o.x,this.y=e.y-o.y,this.z=e.z-o.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,o){return this.x=e.x*o.x,this.y=e.y*o.y,this.z=e.z*o.z,this}applyEuler(e){return this.applyQuaternion(_quaternion$4.setFromEuler(e))}applyAxisAngle(e,o){return this.applyQuaternion(_quaternion$4.setFromAxisAngle(e,o))}applyMatrix3(e){const o=this.x,a=this.y,s=this.z,c=e.elements;return this.x=c[0]*o+c[3]*a+c[6]*s,this.y=c[1]*o+c[4]*a+c[7]*s,this.z=c[2]*o+c[5]*a+c[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const o=this.x,a=this.y,s=this.z,c=e.elements,d=1/(c[3]*o+c[7]*a+c[11]*s+c[15]);return this.x=(c[0]*o+c[4]*a+c[8]*s+c[12])*d,this.y=(c[1]*o+c[5]*a+c[9]*s+c[13])*d,this.z=(c[2]*o+c[6]*a+c[10]*s+c[14])*d,this}applyQuaternion(e){const o=this.x,a=this.y,s=this.z,c=e.x,d=e.y,h=e.z,_=e.w,g=2*(d*s-h*a),$=2*(h*o-c*s),_e=2*(c*a-d*o);return this.x=o+_*g+d*_e-h*$,this.y=a+_*$+h*g-c*_e,this.z=s+_*_e+c*$-d*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const o=this.x,a=this.y,s=this.z,c=e.elements;return this.x=c[0]*o+c[4]*a+c[8]*s,this.y=c[1]*o+c[5]*a+c[9]*s,this.z=c[2]*o+c[6]*a+c[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,o){return this.x=Math.max(e.x,Math.min(o.x,this.x)),this.y=Math.max(e.y,Math.min(o.y,this.y)),this.z=Math.max(e.z,Math.min(o.z,this.z)),this}clampScalar(e,o){return this.x=Math.max(e,Math.min(o,this.x)),this.y=Math.max(e,Math.min(o,this.y)),this.z=Math.max(e,Math.min(o,this.z)),this}clampLength(e,o){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(e,Math.min(o,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,o){return this.x+=(e.x-this.x)*o,this.y+=(e.y-this.y)*o,this.z+=(e.z-this.z)*o,this}lerpVectors(e,o,a){return this.x=e.x+(o.x-e.x)*a,this.y=e.y+(o.y-e.y)*a,this.z=e.z+(o.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,o){const a=e.x,s=e.y,c=e.z,d=o.x,h=o.y,_=o.z;return this.x=s*_-c*h,this.y=c*d-a*_,this.z=a*h-s*d,this}projectOnVector(e){const o=e.lengthSq();if(o===0)return this.set(0,0,0);const a=e.dot(this)/o;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return _vector$c.copy(this).projectOnVector(e),this.sub(_vector$c)}reflect(e){return this.sub(_vector$c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const o=Math.sqrt(this.lengthSq()*e.lengthSq());if(o===0)return Math.PI/2;const a=this.dot(e)/o;return Math.acos(clamp(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const o=this.x-e.x,a=this.y-e.y,s=this.z-e.z;return o*o+a*a+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,o,a){const s=Math.sin(o)*e;return this.x=s*Math.sin(a),this.y=Math.cos(o)*e,this.z=s*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,o,a){return this.x=e*Math.sin(o),this.y=a,this.z=e*Math.cos(o),this}setFromMatrixPosition(e){const o=e.elements;return this.x=o[12],this.y=o[13],this.z=o[14],this}setFromMatrixScale(e){const o=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=o,this.y=a,this.z=s,this}setFromMatrixColumn(e,o){return this.fromArray(e.elements,o*4)}setFromMatrix3Column(e,o){return this.fromArray(e.elements,o*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,o=0){return this.x=e[o],this.y=e[o+1],this.z=e[o+2],this}toArray(e=[],o=0){return e[o]=this.x,e[o+1]=this.y,e[o+2]=this.z,e}fromBufferAttribute(e,o){return this.x=e.getX(o),this.y=e.getY(o),this.z=e.getZ(o),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,o=Math.random()*2-1,a=Math.sqrt(1-o*o);return this.x=a*Math.cos(e),this.y=o,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _vector$c=new Vector3,_quaternion$4=new Quaternion;class Box3{constructor(e=new Vector3(1/0,1/0,1/0),o=new Vector3(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=o}set(e,o){return this.min.copy(e),this.max.copy(o),this}setFromArray(e){this.makeEmpty();for(let o=0,a=e.length;o<a;o+=3)this.expandByPoint(_vector$b.fromArray(e,o));return this}setFromBufferAttribute(e){this.makeEmpty();for(let o=0,a=e.count;o<a;o++)this.expandByPoint(_vector$b.fromBufferAttribute(e,o));return this}setFromPoints(e){this.makeEmpty();for(let o=0,a=e.length;o<a;o++)this.expandByPoint(e[o]);return this}setFromCenterAndSize(e,o){const a=_vector$b.copy(o).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,o=!1){return this.makeEmpty(),this.expandByObject(e,o)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,o=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(o===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,_vector$b):_vector$b.fromBufferAttribute(c,d),_vector$b.applyMatrix4(e.matrixWorld),this.expandByPoint(_vector$b);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_box$4.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),_box$4.copy(a.boundingBox)),_box$4.applyMatrix4(e.matrixWorld),this.union(_box$4)}const s=e.children;for(let c=0,d=s.length;c<d;c++)this.expandByObject(s[c],o);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,o){return o.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_vector$b),_vector$b.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let o,a;return e.normal.x>0?(o=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(o=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(o+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(o+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(o+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(o+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),o<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_center),_extents.subVectors(this.max,_center),_v0$2.subVectors(e.a,_center),_v1$7.subVectors(e.b,_center),_v2$4.subVectors(e.c,_center),_f0.subVectors(_v1$7,_v0$2),_f1.subVectors(_v2$4,_v1$7),_f2.subVectors(_v0$2,_v2$4);let o=[0,-_f0.z,_f0.y,0,-_f1.z,_f1.y,0,-_f2.z,_f2.y,_f0.z,0,-_f0.x,_f1.z,0,-_f1.x,_f2.z,0,-_f2.x,-_f0.y,_f0.x,0,-_f1.y,_f1.x,0,-_f2.y,_f2.x,0];return!satForAxes(o,_v0$2,_v1$7,_v2$4,_extents)||(o=[1,0,0,0,1,0,0,0,1],!satForAxes(o,_v0$2,_v1$7,_v2$4,_extents))?!1:(_triangleNormal.crossVectors(_f0,_f1),o=[_triangleNormal.x,_triangleNormal.y,_triangleNormal.z],satForAxes(o,_v0$2,_v1$7,_v2$4,_extents))}clampPoint(e,o){return o.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_vector$b).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_vector$b).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_points[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_points[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_points[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_points[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_points[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_points[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_points[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_points[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_points),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _points=[new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3],_vector$b=new Vector3,_box$4=new Box3,_v0$2=new Vector3,_v1$7=new Vector3,_v2$4=new Vector3,_f0=new Vector3,_f1=new Vector3,_f2=new Vector3,_center=new Vector3,_extents=new Vector3,_triangleNormal=new Vector3,_testAxis=new Vector3;function satForAxes(i,e,o,a,s){for(let c=0,d=i.length-3;c<=d;c+=3){_testAxis.fromArray(i,c);const h=s.x*Math.abs(_testAxis.x)+s.y*Math.abs(_testAxis.y)+s.z*Math.abs(_testAxis.z),_=e.dot(_testAxis),g=o.dot(_testAxis),$=a.dot(_testAxis);if(Math.max(-Math.max(_,g,$),Math.min(_,g,$))>h)return!1}return!0}const _box$3=new Box3,_v1$6=new Vector3,_v2$3=new Vector3;class Sphere{constructor(e=new Vector3,o=-1){this.isSphere=!0,this.center=e,this.radius=o}set(e,o){return this.center.copy(e),this.radius=o,this}setFromPoints(e,o){const a=this.center;o!==void 0?a.copy(o):_box$3.setFromPoints(e).getCenter(a);let s=0;for(let c=0,d=e.length;c<d;c++)s=Math.max(s,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const o=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=o*o}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,o){const a=this.center.distanceToSquared(e);return o.copy(e),a>this.radius*this.radius&&(o.sub(this.center).normalize(),o.multiplyScalar(this.radius).add(this.center)),o}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_v1$6.subVectors(e,this.center);const o=_v1$6.lengthSq();if(o>this.radius*this.radius){const a=Math.sqrt(o),s=(a-this.radius)*.5;this.center.addScaledVector(_v1$6,s/a),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_v2$3.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_v1$6.copy(e.center).add(_v2$3)),this.expandByPoint(_v1$6.copy(e.center).sub(_v2$3))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _vector$a=new Vector3,_segCenter=new Vector3,_segDir=new Vector3,_diff=new Vector3,_edge1=new Vector3,_edge2=new Vector3,_normal$1=new Vector3;class Ray{constructor(e=new Vector3,o=new Vector3(0,0,-1)){this.origin=e,this.direction=o}set(e,o){return this.origin.copy(e),this.direction.copy(o),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,o){return o.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_vector$a)),this}closestPointToPoint(e,o){o.subVectors(e,this.origin);const a=o.dot(this.direction);return a<0?o.copy(this.origin):o.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const o=_vector$a.subVectors(e,this.origin).dot(this.direction);return o<0?this.origin.distanceToSquared(e):(_vector$a.copy(this.origin).addScaledVector(this.direction,o),_vector$a.distanceToSquared(e))}distanceSqToSegment(e,o,a,s){_segCenter.copy(e).add(o).multiplyScalar(.5),_segDir.copy(o).sub(e).normalize(),_diff.copy(this.origin).sub(_segCenter);const c=e.distanceTo(o)*.5,d=-this.direction.dot(_segDir),h=_diff.dot(this.direction),_=-_diff.dot(_segDir),g=_diff.lengthSq(),$=Math.abs(1-d*d);let _e,j,tt,rt;if($>0)if(_e=d*_-h,j=d*h-_,rt=c*$,_e>=0)if(j>=-rt)if(j<=rt){const ot=1/$;_e*=ot,j*=ot,tt=_e*(_e+d*j+2*h)+j*(d*_e+j+2*_)+g}else j=c,_e=Math.max(0,-(d*j+h)),tt=-_e*_e+j*(j+2*_)+g;else j=-c,_e=Math.max(0,-(d*j+h)),tt=-_e*_e+j*(j+2*_)+g;else j<=-rt?(_e=Math.max(0,-(-d*c+h)),j=_e>0?-c:Math.min(Math.max(-c,-_),c),tt=-_e*_e+j*(j+2*_)+g):j<=rt?(_e=0,j=Math.min(Math.max(-c,-_),c),tt=j*(j+2*_)+g):(_e=Math.max(0,-(d*c+h)),j=_e>0?c:Math.min(Math.max(-c,-_),c),tt=-_e*_e+j*(j+2*_)+g);else j=d>0?-c:c,_e=Math.max(0,-(d*j+h)),tt=-_e*_e+j*(j+2*_)+g;return a&&a.copy(this.origin).addScaledVector(this.direction,_e),s&&s.copy(_segCenter).addScaledVector(_segDir,j),tt}intersectSphere(e,o){_vector$a.subVectors(e.center,this.origin);const a=_vector$a.dot(this.direction),s=_vector$a.dot(_vector$a)-a*a,c=e.radius*e.radius;if(s>c)return null;const d=Math.sqrt(c-s),h=a-d,_=a+d;return _<0?null:h<0?this.at(_,o):this.at(h,o)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const o=e.normal.dot(this.direction);if(o===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/o;return a>=0?a:null}intersectPlane(e,o){const a=this.distanceToPlane(e);return a===null?null:this.at(a,o)}intersectsPlane(e){const o=e.distanceToPoint(this.origin);return o===0||e.normal.dot(this.direction)*o<0}intersectBox(e,o){let a,s,c,d,h,_;const g=1/this.direction.x,$=1/this.direction.y,_e=1/this.direction.z,j=this.origin;return g>=0?(a=(e.min.x-j.x)*g,s=(e.max.x-j.x)*g):(a=(e.max.x-j.x)*g,s=(e.min.x-j.x)*g),$>=0?(c=(e.min.y-j.y)*$,d=(e.max.y-j.y)*$):(c=(e.max.y-j.y)*$,d=(e.min.y-j.y)*$),a>d||c>s||((c>a||isNaN(a))&&(a=c),(d<s||isNaN(s))&&(s=d),_e>=0?(h=(e.min.z-j.z)*_e,_=(e.max.z-j.z)*_e):(h=(e.max.z-j.z)*_e,_=(e.min.z-j.z)*_e),a>_||h>s)||((h>a||a!==a)&&(a=h),(_<s||s!==s)&&(s=_),s<0)?null:this.at(a>=0?a:s,o)}intersectsBox(e){return this.intersectBox(e,_vector$a)!==null}intersectTriangle(e,o,a,s,c){_edge1.subVectors(o,e),_edge2.subVectors(a,e),_normal$1.crossVectors(_edge1,_edge2);let d=this.direction.dot(_normal$1),h;if(d>0){if(s)return null;h=1}else if(d<0)h=-1,d=-d;else return null;_diff.subVectors(this.origin,e);const _=h*this.direction.dot(_edge2.crossVectors(_diff,_edge2));if(_<0)return null;const g=h*this.direction.dot(_edge1.cross(_diff));if(g<0||_+g>d)return null;const $=-h*_diff.dot(_normal$1);return $<0?null:this.at($/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Matrix4{constructor(e,o,a,s,c,d,h,_,g,$,_e,j,tt,rt,ot,et){Matrix4.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,o,a,s,c,d,h,_,g,$,_e,j,tt,rt,ot,et)}set(e,o,a,s,c,d,h,_,g,$,_e,j,tt,rt,ot,et){const b=this.elements;return b[0]=e,b[4]=o,b[8]=a,b[12]=s,b[1]=c,b[5]=d,b[9]=h,b[13]=_,b[2]=g,b[6]=$,b[10]=_e,b[14]=j,b[3]=tt,b[7]=rt,b[11]=ot,b[15]=et,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Matrix4().fromArray(this.elements)}copy(e){const o=this.elements,a=e.elements;return o[0]=a[0],o[1]=a[1],o[2]=a[2],o[3]=a[3],o[4]=a[4],o[5]=a[5],o[6]=a[6],o[7]=a[7],o[8]=a[8],o[9]=a[9],o[10]=a[10],o[11]=a[11],o[12]=a[12],o[13]=a[13],o[14]=a[14],o[15]=a[15],this}copyPosition(e){const o=this.elements,a=e.elements;return o[12]=a[12],o[13]=a[13],o[14]=a[14],this}setFromMatrix3(e){const o=e.elements;return this.set(o[0],o[3],o[6],0,o[1],o[4],o[7],0,o[2],o[5],o[8],0,0,0,0,1),this}extractBasis(e,o,a){return e.setFromMatrixColumn(this,0),o.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,o,a){return this.set(e.x,o.x,a.x,0,e.y,o.y,a.y,0,e.z,o.z,a.z,0,0,0,0,1),this}extractRotation(e){const o=this.elements,a=e.elements,s=1/_v1$5.setFromMatrixColumn(e,0).length(),c=1/_v1$5.setFromMatrixColumn(e,1).length(),d=1/_v1$5.setFromMatrixColumn(e,2).length();return o[0]=a[0]*s,o[1]=a[1]*s,o[2]=a[2]*s,o[3]=0,o[4]=a[4]*c,o[5]=a[5]*c,o[6]=a[6]*c,o[7]=0,o[8]=a[8]*d,o[9]=a[9]*d,o[10]=a[10]*d,o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1,this}makeRotationFromEuler(e){const o=this.elements,a=e.x,s=e.y,c=e.z,d=Math.cos(a),h=Math.sin(a),_=Math.cos(s),g=Math.sin(s),$=Math.cos(c),_e=Math.sin(c);if(e.order==="XYZ"){const j=d*$,tt=d*_e,rt=h*$,ot=h*_e;o[0]=_*$,o[4]=-_*_e,o[8]=g,o[1]=tt+rt*g,o[5]=j-ot*g,o[9]=-h*_,o[2]=ot-j*g,o[6]=rt+tt*g,o[10]=d*_}else if(e.order==="YXZ"){const j=_*$,tt=_*_e,rt=g*$,ot=g*_e;o[0]=j+ot*h,o[4]=rt*h-tt,o[8]=d*g,o[1]=d*_e,o[5]=d*$,o[9]=-h,o[2]=tt*h-rt,o[6]=ot+j*h,o[10]=d*_}else if(e.order==="ZXY"){const j=_*$,tt=_*_e,rt=g*$,ot=g*_e;o[0]=j-ot*h,o[4]=-d*_e,o[8]=rt+tt*h,o[1]=tt+rt*h,o[5]=d*$,o[9]=ot-j*h,o[2]=-d*g,o[6]=h,o[10]=d*_}else if(e.order==="ZYX"){const j=d*$,tt=d*_e,rt=h*$,ot=h*_e;o[0]=_*$,o[4]=rt*g-tt,o[8]=j*g+ot,o[1]=_*_e,o[5]=ot*g+j,o[9]=tt*g-rt,o[2]=-g,o[6]=h*_,o[10]=d*_}else if(e.order==="YZX"){const j=d*_,tt=d*g,rt=h*_,ot=h*g;o[0]=_*$,o[4]=ot-j*_e,o[8]=rt*_e+tt,o[1]=_e,o[5]=d*$,o[9]=-h*$,o[2]=-g*$,o[6]=tt*_e+rt,o[10]=j-ot*_e}else if(e.order==="XZY"){const j=d*_,tt=d*g,rt=h*_,ot=h*g;o[0]=_*$,o[4]=-_e,o[8]=g*$,o[1]=j*_e+ot,o[5]=d*$,o[9]=tt*_e-rt,o[2]=rt*_e-tt,o[6]=h*$,o[10]=ot*_e+j}return o[3]=0,o[7]=0,o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_zero,e,_one)}lookAt(e,o,a){const s=this.elements;return _z.subVectors(e,o),_z.lengthSq()===0&&(_z.z=1),_z.normalize(),_x.crossVectors(a,_z),_x.lengthSq()===0&&(Math.abs(a.z)===1?_z.x+=1e-4:_z.z+=1e-4,_z.normalize(),_x.crossVectors(a,_z)),_x.normalize(),_y.crossVectors(_z,_x),s[0]=_x.x,s[4]=_y.x,s[8]=_z.x,s[1]=_x.y,s[5]=_y.y,s[9]=_z.y,s[2]=_x.z,s[6]=_y.z,s[10]=_z.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,o){const a=e.elements,s=o.elements,c=this.elements,d=a[0],h=a[4],_=a[8],g=a[12],$=a[1],_e=a[5],j=a[9],tt=a[13],rt=a[2],ot=a[6],et=a[10],b=a[14],it=a[3],nt=a[7],ct=a[11],mt=a[15],dt=s[0],ft=s[4],gt=s[8],ut=s[12],at=s[1],_t=s[5],wt=s[9],At=s[13],Lt=s[2],Dt=s[6],Rt=s[10],It=s[14],vt=s[3],Ut=s[7],Ft=s[11],Ht=s[15];return c[0]=d*dt+h*at+_*Lt+g*vt,c[4]=d*ft+h*_t+_*Dt+g*Ut,c[8]=d*gt+h*wt+_*Rt+g*Ft,c[12]=d*ut+h*At+_*It+g*Ht,c[1]=$*dt+_e*at+j*Lt+tt*vt,c[5]=$*ft+_e*_t+j*Dt+tt*Ut,c[9]=$*gt+_e*wt+j*Rt+tt*Ft,c[13]=$*ut+_e*At+j*It+tt*Ht,c[2]=rt*dt+ot*at+et*Lt+b*vt,c[6]=rt*ft+ot*_t+et*Dt+b*Ut,c[10]=rt*gt+ot*wt+et*Rt+b*Ft,c[14]=rt*ut+ot*At+et*It+b*Ht,c[3]=it*dt+nt*at+ct*Lt+mt*vt,c[7]=it*ft+nt*_t+ct*Dt+mt*Ut,c[11]=it*gt+nt*wt+ct*Rt+mt*Ft,c[15]=it*ut+nt*At+ct*It+mt*Ht,this}multiplyScalar(e){const o=this.elements;return o[0]*=e,o[4]*=e,o[8]*=e,o[12]*=e,o[1]*=e,o[5]*=e,o[9]*=e,o[13]*=e,o[2]*=e,o[6]*=e,o[10]*=e,o[14]*=e,o[3]*=e,o[7]*=e,o[11]*=e,o[15]*=e,this}determinant(){const e=this.elements,o=e[0],a=e[4],s=e[8],c=e[12],d=e[1],h=e[5],_=e[9],g=e[13],$=e[2],_e=e[6],j=e[10],tt=e[14],rt=e[3],ot=e[7],et=e[11],b=e[15];return rt*(+c*_*_e-s*g*_e-c*h*j+a*g*j+s*h*tt-a*_*tt)+ot*(+o*_*tt-o*g*j+c*d*j-s*d*tt+s*g*$-c*_*$)+et*(+o*g*_e-o*h*tt-c*d*_e+a*d*tt+c*h*$-a*g*$)+b*(-s*h*$-o*_*_e+o*h*j+s*d*_e-a*d*j+a*_*$)}transpose(){const e=this.elements;let o;return o=e[1],e[1]=e[4],e[4]=o,o=e[2],e[2]=e[8],e[8]=o,o=e[6],e[6]=e[9],e[9]=o,o=e[3],e[3]=e[12],e[12]=o,o=e[7],e[7]=e[13],e[13]=o,o=e[11],e[11]=e[14],e[14]=o,this}setPosition(e,o,a){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=o,s[14]=a),this}invert(){const e=this.elements,o=e[0],a=e[1],s=e[2],c=e[3],d=e[4],h=e[5],_=e[6],g=e[7],$=e[8],_e=e[9],j=e[10],tt=e[11],rt=e[12],ot=e[13],et=e[14],b=e[15],it=_e*et*g-ot*j*g+ot*_*tt-h*et*tt-_e*_*b+h*j*b,nt=rt*j*g-$*et*g-rt*_*tt+d*et*tt+$*_*b-d*j*b,ct=$*ot*g-rt*_e*g+rt*h*tt-d*ot*tt-$*h*b+d*_e*b,mt=rt*_e*_-$*ot*_-rt*h*j+d*ot*j+$*h*et-d*_e*et,dt=o*it+a*nt+s*ct+c*mt;if(dt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ft=1/dt;return e[0]=it*ft,e[1]=(ot*j*c-_e*et*c-ot*s*tt+a*et*tt+_e*s*b-a*j*b)*ft,e[2]=(h*et*c-ot*_*c+ot*s*g-a*et*g-h*s*b+a*_*b)*ft,e[3]=(_e*_*c-h*j*c-_e*s*g+a*j*g+h*s*tt-a*_*tt)*ft,e[4]=nt*ft,e[5]=($*et*c-rt*j*c+rt*s*tt-o*et*tt-$*s*b+o*j*b)*ft,e[6]=(rt*_*c-d*et*c-rt*s*g+o*et*g+d*s*b-o*_*b)*ft,e[7]=(d*j*c-$*_*c+$*s*g-o*j*g-d*s*tt+o*_*tt)*ft,e[8]=ct*ft,e[9]=(rt*_e*c-$*ot*c-rt*a*tt+o*ot*tt+$*a*b-o*_e*b)*ft,e[10]=(d*ot*c-rt*h*c+rt*a*g-o*ot*g-d*a*b+o*h*b)*ft,e[11]=($*h*c-d*_e*c-$*a*g+o*_e*g+d*a*tt-o*h*tt)*ft,e[12]=mt*ft,e[13]=($*ot*s-rt*_e*s+rt*a*j-o*ot*j-$*a*et+o*_e*et)*ft,e[14]=(rt*h*s-d*ot*s-rt*a*_+o*ot*_+d*a*et-o*h*et)*ft,e[15]=(d*_e*s-$*h*s+$*a*_-o*_e*_-d*a*j+o*h*j)*ft,this}scale(e){const o=this.elements,a=e.x,s=e.y,c=e.z;return o[0]*=a,o[4]*=s,o[8]*=c,o[1]*=a,o[5]*=s,o[9]*=c,o[2]*=a,o[6]*=s,o[10]*=c,o[3]*=a,o[7]*=s,o[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,o=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(o,a,s))}makeTranslation(e,o,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,o,0,0,1,a,0,0,0,1),this}makeRotationX(e){const o=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,o,-a,0,0,a,o,0,0,0,0,1),this}makeRotationY(e){const o=Math.cos(e),a=Math.sin(e);return this.set(o,0,a,0,0,1,0,0,-a,0,o,0,0,0,0,1),this}makeRotationZ(e){const o=Math.cos(e),a=Math.sin(e);return this.set(o,-a,0,0,a,o,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,o){const a=Math.cos(o),s=Math.sin(o),c=1-a,d=e.x,h=e.y,_=e.z,g=c*d,$=c*h;return this.set(g*d+a,g*h-s*_,g*_+s*h,0,g*h+s*_,$*h+a,$*_-s*d,0,g*_-s*h,$*_+s*d,c*_*_+a,0,0,0,0,1),this}makeScale(e,o,a){return this.set(e,0,0,0,0,o,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,o,a,s,c,d){return this.set(1,a,c,0,e,1,d,0,o,s,1,0,0,0,0,1),this}compose(e,o,a){const s=this.elements,c=o._x,d=o._y,h=o._z,_=o._w,g=c+c,$=d+d,_e=h+h,j=c*g,tt=c*$,rt=c*_e,ot=d*$,et=d*_e,b=h*_e,it=_*g,nt=_*$,ct=_*_e,mt=a.x,dt=a.y,ft=a.z;return s[0]=(1-(ot+b))*mt,s[1]=(tt+ct)*mt,s[2]=(rt-nt)*mt,s[3]=0,s[4]=(tt-ct)*dt,s[5]=(1-(j+b))*dt,s[6]=(et+it)*dt,s[7]=0,s[8]=(rt+nt)*ft,s[9]=(et-it)*ft,s[10]=(1-(j+ot))*ft,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,o,a){const s=this.elements;let c=_v1$5.set(s[0],s[1],s[2]).length();const d=_v1$5.set(s[4],s[5],s[6]).length(),h=_v1$5.set(s[8],s[9],s[10]).length();this.determinant()<0&&(c=-c),e.x=s[12],e.y=s[13],e.z=s[14],_m1$4.copy(this);const g=1/c,$=1/d,_e=1/h;return _m1$4.elements[0]*=g,_m1$4.elements[1]*=g,_m1$4.elements[2]*=g,_m1$4.elements[4]*=$,_m1$4.elements[5]*=$,_m1$4.elements[6]*=$,_m1$4.elements[8]*=_e,_m1$4.elements[9]*=_e,_m1$4.elements[10]*=_e,o.setFromRotationMatrix(_m1$4),a.x=c,a.y=d,a.z=h,this}makePerspective(e,o,a,s,c,d,h=WebGLCoordinateSystem){const _=this.elements,g=2*c/(o-e),$=2*c/(a-s),_e=(o+e)/(o-e),j=(a+s)/(a-s);let tt,rt;if(h===WebGLCoordinateSystem)tt=-(d+c)/(d-c),rt=-2*d*c/(d-c);else if(h===WebGPUCoordinateSystem)tt=-d/(d-c),rt=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return _[0]=g,_[4]=0,_[8]=_e,_[12]=0,_[1]=0,_[5]=$,_[9]=j,_[13]=0,_[2]=0,_[6]=0,_[10]=tt,_[14]=rt,_[3]=0,_[7]=0,_[11]=-1,_[15]=0,this}makeOrthographic(e,o,a,s,c,d,h=WebGLCoordinateSystem){const _=this.elements,g=1/(o-e),$=1/(a-s),_e=1/(d-c),j=(o+e)*g,tt=(a+s)*$;let rt,ot;if(h===WebGLCoordinateSystem)rt=(d+c)*_e,ot=-2*_e;else if(h===WebGPUCoordinateSystem)rt=c*_e,ot=-1*_e;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return _[0]=2*g,_[4]=0,_[8]=0,_[12]=-j,_[1]=0,_[5]=2*$,_[9]=0,_[13]=-tt,_[2]=0,_[6]=0,_[10]=ot,_[14]=-rt,_[3]=0,_[7]=0,_[11]=0,_[15]=1,this}equals(e){const o=this.elements,a=e.elements;for(let s=0;s<16;s++)if(o[s]!==a[s])return!1;return!0}fromArray(e,o=0){for(let a=0;a<16;a++)this.elements[a]=e[a+o];return this}toArray(e=[],o=0){const a=this.elements;return e[o]=a[0],e[o+1]=a[1],e[o+2]=a[2],e[o+3]=a[3],e[o+4]=a[4],e[o+5]=a[5],e[o+6]=a[6],e[o+7]=a[7],e[o+8]=a[8],e[o+9]=a[9],e[o+10]=a[10],e[o+11]=a[11],e[o+12]=a[12],e[o+13]=a[13],e[o+14]=a[14],e[o+15]=a[15],e}}const _v1$5=new Vector3,_m1$4=new Matrix4,_zero=new Vector3(0,0,0),_one=new Vector3(1,1,1),_x=new Vector3,_y=new Vector3,_z=new Vector3,_matrix$2=new Matrix4,_quaternion$3=new Quaternion;class Euler{constructor(e=0,o=0,a=0,s=Euler.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=o,this._z=a,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,o,a,s=this._order){return this._x=e,this._y=o,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,o=this._order,a=!0){const s=e.elements,c=s[0],d=s[4],h=s[8],_=s[1],g=s[5],$=s[9],_e=s[2],j=s[6],tt=s[10];switch(o){case"XYZ":this._y=Math.asin(clamp(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-$,tt),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(j,g),this._z=0);break;case"YXZ":this._x=Math.asin(-clamp($,-1,1)),Math.abs($)<.9999999?(this._y=Math.atan2(h,tt),this._z=Math.atan2(_,g)):(this._y=Math.atan2(-_e,c),this._z=0);break;case"ZXY":this._x=Math.asin(clamp(j,-1,1)),Math.abs(j)<.9999999?(this._y=Math.atan2(-_e,tt),this._z=Math.atan2(-d,g)):(this._y=0,this._z=Math.atan2(_,c));break;case"ZYX":this._y=Math.asin(-clamp(_e,-1,1)),Math.abs(_e)<.9999999?(this._x=Math.atan2(j,tt),this._z=Math.atan2(_,c)):(this._x=0,this._z=Math.atan2(-d,g));break;case"YZX":this._z=Math.asin(clamp(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(-$,g),this._y=Math.atan2(-_e,c)):(this._x=0,this._y=Math.atan2(h,tt));break;case"XZY":this._z=Math.asin(-clamp(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(j,g),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-$,tt),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+o)}return this._order=o,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,o,a){return _matrix$2.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_matrix$2,o,a)}setFromVector3(e,o=this._order){return this.set(e.x,e.y,e.z,o)}reorder(e){return _quaternion$3.setFromEuler(this),this.setFromQuaternion(_quaternion$3,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],o=0){return e[o]=this._x,e[o+1]=this._y,e[o+2]=this._z,e[o+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Euler.DEFAULT_ORDER="XYZ";class Layers{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _object3DId=0;const _v1$4=new Vector3,_q1=new Quaternion,_m1$3=new Matrix4,_target=new Vector3,_position$3=new Vector3,_scale$2=new Vector3,_quaternion$2=new Quaternion,_xAxis=new Vector3(1,0,0),_yAxis=new Vector3(0,1,0),_zAxis=new Vector3(0,0,1),_addedEvent={type:"added"},_removedEvent={type:"removed"},_childaddedEvent={type:"childadded",child:null},_childremovedEvent={type:"childremoved",child:null};class Object3D extends EventDispatcher{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_object3DId++}),this.uuid=generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Object3D.DEFAULT_UP.clone();const e=new Vector3,o=new Euler,a=new Quaternion,s=new Vector3(1,1,1);function c(){a.setFromEuler(o,!1)}function d(){o.setFromQuaternion(a,void 0,!1)}o._onChange(c),a._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:o},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Matrix4},normalMatrix:{value:new Matrix3}}),this.matrix=new Matrix4,this.matrixWorld=new Matrix4,this.matrixAutoUpdate=Object3D.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Layers,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,o){this.quaternion.setFromAxisAngle(e,o)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,o){return _q1.setFromAxisAngle(e,o),this.quaternion.multiply(_q1),this}rotateOnWorldAxis(e,o){return _q1.setFromAxisAngle(e,o),this.quaternion.premultiply(_q1),this}rotateX(e){return this.rotateOnAxis(_xAxis,e)}rotateY(e){return this.rotateOnAxis(_yAxis,e)}rotateZ(e){return this.rotateOnAxis(_zAxis,e)}translateOnAxis(e,o){return _v1$4.copy(e).applyQuaternion(this.quaternion),this.position.add(_v1$4.multiplyScalar(o)),this}translateX(e){return this.translateOnAxis(_xAxis,e)}translateY(e){return this.translateOnAxis(_yAxis,e)}translateZ(e){return this.translateOnAxis(_zAxis,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_m1$3.copy(this.matrixWorld).invert())}lookAt(e,o,a){e.isVector3?_target.copy(e):_target.set(e,o,a);const s=this.parent;this.updateWorldMatrix(!0,!1),_position$3.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_m1$3.lookAt(_position$3,_target,this.up):_m1$3.lookAt(_target,_position$3,this.up),this.quaternion.setFromRotationMatrix(_m1$3),s&&(_m1$3.extractRotation(s.matrixWorld),_q1.setFromRotationMatrix(_m1$3),this.quaternion.premultiply(_q1.invert()))}add(e){if(arguments.length>1){for(let o=0;o<arguments.length;o++)this.add(arguments[o]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_addedEvent),_childaddedEvent.child=e,this.dispatchEvent(_childaddedEvent),_childaddedEvent.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const o=this.children.indexOf(e);return o!==-1&&(e.parent=null,this.children.splice(o,1),e.dispatchEvent(_removedEvent),_childremovedEvent.child=e,this.dispatchEvent(_childremovedEvent),_childremovedEvent.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_m1$3.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_m1$3.multiply(e.parent.matrixWorld)),e.applyMatrix4(_m1$3),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_addedEvent),_childaddedEvent.child=e,this.dispatchEvent(_childaddedEvent),_childaddedEvent.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,o){if(this[e]===o)return this;for(let a=0,s=this.children.length;a<s;a++){const d=this.children[a].getObjectByProperty(e,o);if(d!==void 0)return d}}getObjectsByProperty(e,o,a=[]){this[e]===o&&a.push(this);const s=this.children;for(let c=0,d=s.length;c<d;c++)s[c].getObjectsByProperty(e,o,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,e,_scale$2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,_quaternion$2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const o=this.matrixWorld.elements;return e.set(o[8],o[9],o[10]).normalize()}raycast(){}traverse(e){e(this);const o=this.children;for(let a=0,s=o.length;a<s;a++)o[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const o=this.children;for(let a=0,s=o.length;a<s;a++)o[a].traverseVisible(e)}traverseAncestors(e){const o=this.parent;o!==null&&(e(o),o.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const o=this.children;for(let a=0,s=o.length;a<s;a++)o[a].updateMatrixWorld(e)}updateWorldMatrix(e,o){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),o===!0){const s=this.children;for(let c=0,d=s.length;c<d;c++)s[c].updateWorldMatrix(!1,!0)}}toJSON(e){const o=e===void 0||typeof e=="string",a={};o&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function c(h,_){return h[_.uuid]===void 0&&(h[_.uuid]=_.toJSON(e)),_.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const _=h.shapes;if(Array.isArray(_))for(let g=0,$=_.length;g<$;g++){const _e=_[g];c(e.shapes,_e)}else c(e.shapes,_)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let _=0,g=this.material.length;_<g;_++)h.push(c(e.materials,this.material[_]));s.material=h}else s.material=c(e.materials,this.material);if(this.children.length>0){s.children=[];for(let h=0;h<this.children.length;h++)s.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let h=0;h<this.animations.length;h++){const _=this.animations[h];s.animations.push(c(e.animations,_))}}if(o){const h=d(e.geometries),_=d(e.materials),g=d(e.textures),$=d(e.images),_e=d(e.shapes),j=d(e.skeletons),tt=d(e.animations),rt=d(e.nodes);h.length>0&&(a.geometries=h),_.length>0&&(a.materials=_),g.length>0&&(a.textures=g),$.length>0&&(a.images=$),_e.length>0&&(a.shapes=_e),j.length>0&&(a.skeletons=j),tt.length>0&&(a.animations=tt),rt.length>0&&(a.nodes=rt)}return a.object=s,a;function d(h){const _=[];for(const g in h){const $=h[g];delete $.metadata,_.push($)}return _}}clone(e){return new this.constructor().copy(this,e)}copy(e,o=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),o===!0)for(let a=0;a<e.children.length;a++){const s=e.children[a];this.add(s.clone())}return this}}Object3D.DEFAULT_UP=new Vector3(0,1,0);Object3D.DEFAULT_MATRIX_AUTO_UPDATE=!0;Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _v0$1=new Vector3,_v1$3=new Vector3,_v2$2=new Vector3,_v3$2=new Vector3,_vab=new Vector3,_vac=new Vector3,_vbc=new Vector3,_vap=new Vector3,_vbp=new Vector3,_vcp=new Vector3;class Triangle{constructor(e=new Vector3,o=new Vector3,a=new Vector3){this.a=e,this.b=o,this.c=a}static getNormal(e,o,a,s){s.subVectors(a,o),_v0$1.subVectors(e,o),s.cross(_v0$1);const c=s.lengthSq();return c>0?s.multiplyScalar(1/Math.sqrt(c)):s.set(0,0,0)}static getBarycoord(e,o,a,s,c){_v0$1.subVectors(s,o),_v1$3.subVectors(a,o),_v2$2.subVectors(e,o);const d=_v0$1.dot(_v0$1),h=_v0$1.dot(_v1$3),_=_v0$1.dot(_v2$2),g=_v1$3.dot(_v1$3),$=_v1$3.dot(_v2$2),_e=d*g-h*h;if(_e===0)return c.set(0,0,0),null;const j=1/_e,tt=(g*_-h*$)*j,rt=(d*$-h*_)*j;return c.set(1-tt-rt,rt,tt)}static containsPoint(e,o,a,s){return this.getBarycoord(e,o,a,s,_v3$2)===null?!1:_v3$2.x>=0&&_v3$2.y>=0&&_v3$2.x+_v3$2.y<=1}static getInterpolation(e,o,a,s,c,d,h,_){return this.getBarycoord(e,o,a,s,_v3$2)===null?(_.x=0,_.y=0,"z"in _&&(_.z=0),"w"in _&&(_.w=0),null):(_.setScalar(0),_.addScaledVector(c,_v3$2.x),_.addScaledVector(d,_v3$2.y),_.addScaledVector(h,_v3$2.z),_)}static isFrontFacing(e,o,a,s){return _v0$1.subVectors(a,o),_v1$3.subVectors(e,o),_v0$1.cross(_v1$3).dot(s)<0}set(e,o,a){return this.a.copy(e),this.b.copy(o),this.c.copy(a),this}setFromPointsAndIndices(e,o,a,s){return this.a.copy(e[o]),this.b.copy(e[a]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,o,a,s){return this.a.fromBufferAttribute(e,o),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _v0$1.subVectors(this.c,this.b),_v1$3.subVectors(this.a,this.b),_v0$1.cross(_v1$3).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Triangle.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,o){return Triangle.getBarycoord(e,this.a,this.b,this.c,o)}getInterpolation(e,o,a,s,c){return Triangle.getInterpolation(e,this.a,this.b,this.c,o,a,s,c)}containsPoint(e){return Triangle.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Triangle.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,o){const a=this.a,s=this.b,c=this.c;let d,h;_vab.subVectors(s,a),_vac.subVectors(c,a),_vap.subVectors(e,a);const _=_vab.dot(_vap),g=_vac.dot(_vap);if(_<=0&&g<=0)return o.copy(a);_vbp.subVectors(e,s);const $=_vab.dot(_vbp),_e=_vac.dot(_vbp);if($>=0&&_e<=$)return o.copy(s);const j=_*_e-$*g;if(j<=0&&_>=0&&$<=0)return d=_/(_-$),o.copy(a).addScaledVector(_vab,d);_vcp.subVectors(e,c);const tt=_vab.dot(_vcp),rt=_vac.dot(_vcp);if(rt>=0&&tt<=rt)return o.copy(c);const ot=tt*g-_*rt;if(ot<=0&&g>=0&&rt<=0)return h=g/(g-rt),o.copy(a).addScaledVector(_vac,h);const et=$*rt-tt*_e;if(et<=0&&_e-$>=0&&tt-rt>=0)return _vbc.subVectors(c,s),h=(_e-$)/(_e-$+(tt-rt)),o.copy(s).addScaledVector(_vbc,h);const b=1/(et+ot+j);return d=ot*b,h=j*b,o.copy(a).addScaledVector(_vab,d).addScaledVector(_vac,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _colorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_hslA={h:0,s:0,l:0},_hslB={h:0,s:0,l:0};function hue2rgb(i,e,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?i+(e-i)*6*o:o<1/2?e:o<2/3?i+(e-i)*6*(2/3-o):i}class Color{constructor(e,o,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,o,a)}set(e,o,a){if(o===void 0&&a===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,o,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,o=SRGBColorSpace){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ColorManagement.toWorkingColorSpace(this,o),this}setRGB(e,o,a,s=ColorManagement.workingColorSpace){return this.r=e,this.g=o,this.b=a,ColorManagement.toWorkingColorSpace(this,s),this}setHSL(e,o,a,s=ColorManagement.workingColorSpace){if(e=euclideanModulo(e,1),o=clamp(o,0,1),a=clamp(a,0,1),o===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+o):a+o-a*o,d=2*a-c;this.r=hue2rgb(d,c,e+1/3),this.g=hue2rgb(d,c,e),this.b=hue2rgb(d,c,e-1/3)}return ColorManagement.toWorkingColorSpace(this,s),this}setStyle(e,o=SRGBColorSpace){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=s[1],h=s[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,o);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,o);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,o);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=s[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,o);if(d===6)return this.setHex(parseInt(c,16),o);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,o);return this}setColorName(e,o=SRGBColorSpace){const a=_colorKeywords[e.toLowerCase()];return a!==void 0?this.setHex(a,o):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=SRGBToLinear(e.r),this.g=SRGBToLinear(e.g),this.b=SRGBToLinear(e.b),this}copyLinearToSRGB(e){return this.r=LinearToSRGB(e.r),this.g=LinearToSRGB(e.g),this.b=LinearToSRGB(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=SRGBColorSpace){return ColorManagement.fromWorkingColorSpace(_color.copy(this),e),Math.round(clamp(_color.r*255,0,255))*65536+Math.round(clamp(_color.g*255,0,255))*256+Math.round(clamp(_color.b*255,0,255))}getHexString(e=SRGBColorSpace){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,o=ColorManagement.workingColorSpace){ColorManagement.fromWorkingColorSpace(_color.copy(this),o);const a=_color.r,s=_color.g,c=_color.b,d=Math.max(a,s,c),h=Math.min(a,s,c);let _,g;const $=(h+d)/2;if(h===d)_=0,g=0;else{const _e=d-h;switch(g=$<=.5?_e/(d+h):_e/(2-d-h),d){case a:_=(s-c)/_e+(s<c?6:0);break;case s:_=(c-a)/_e+2;break;case c:_=(a-s)/_e+4;break}_/=6}return e.h=_,e.s=g,e.l=$,e}getRGB(e,o=ColorManagement.workingColorSpace){return ColorManagement.fromWorkingColorSpace(_color.copy(this),o),e.r=_color.r,e.g=_color.g,e.b=_color.b,e}getStyle(e=SRGBColorSpace){ColorManagement.fromWorkingColorSpace(_color.copy(this),e);const o=_color.r,a=_color.g,s=_color.b;return e!==SRGBColorSpace?`color(${e} ${o.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(o*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(e,o,a){return this.getHSL(_hslA),this.setHSL(_hslA.h+e,_hslA.s+o,_hslA.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,o){return this.r=e.r+o.r,this.g=e.g+o.g,this.b=e.b+o.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,o){return this.r+=(e.r-this.r)*o,this.g+=(e.g-this.g)*o,this.b+=(e.b-this.b)*o,this}lerpColors(e,o,a){return this.r=e.r+(o.r-e.r)*a,this.g=e.g+(o.g-e.g)*a,this.b=e.b+(o.b-e.b)*a,this}lerpHSL(e,o){this.getHSL(_hslA),e.getHSL(_hslB);const a=lerp(_hslA.h,_hslB.h,o),s=lerp(_hslA.s,_hslB.s,o),c=lerp(_hslA.l,_hslB.l,o);return this.setHSL(a,s,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const o=this.r,a=this.g,s=this.b,c=e.elements;return this.r=c[0]*o+c[3]*a+c[6]*s,this.g=c[1]*o+c[4]*a+c[7]*s,this.b=c[2]*o+c[5]*a+c[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,o=0){return this.r=e[o],this.g=e[o+1],this.b=e[o+2],this}toArray(e=[],o=0){return e[o]=this.r,e[o+1]=this.g,e[o+2]=this.b,e}fromBufferAttribute(e,o){return this.r=e.getX(o),this.g=e.getY(o),this.b=e.getZ(o),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _color=new Color;Color.NAMES=_colorKeywords;let _materialId=0;class Material extends EventDispatcher{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_materialId++}),this.uuid=generateUUID(),this.name="",this.type="Material",this.blending=NormalBlending,this.side=FrontSide,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=SrcAlphaFactor,this.blendDst=OneMinusSrcAlphaFactor,this.blendEquation=AddEquation,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Color(0,0,0),this.blendAlpha=0,this.depthFunc=LessEqualDepth,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=AlwaysStencilFunc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=KeepStencilOp,this.stencilZFail=KeepStencilOp,this.stencilZPass=KeepStencilOp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const o in e){const a=e[o];if(a===void 0){console.warn(`THREE.Material: parameter '${o}' has value of undefined.`);continue}const s=this[o];if(s===void 0){console.warn(`THREE.Material: '${o}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[o]=a}}toJSON(e){const o=e===void 0||typeof e=="string";o&&(e={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==NormalBlending&&(a.blending=this.blending),this.side!==FrontSide&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==SrcAlphaFactor&&(a.blendSrc=this.blendSrc),this.blendDst!==OneMinusSrcAlphaFactor&&(a.blendDst=this.blendDst),this.blendEquation!==AddEquation&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==LessEqualDepth&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==AlwaysStencilFunc&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==KeepStencilOp&&(a.stencilFail=this.stencilFail),this.stencilZFail!==KeepStencilOp&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==KeepStencilOp&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(c){const d=[];for(const h in c){const _=c[h];delete _.metadata,d.push(_)}return d}if(o){const c=s(e.textures),d=s(e.images);c.length>0&&(a.textures=c),d.length>0&&(a.images=d)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const o=e.clippingPlanes;let a=null;if(o!==null){const s=o.length;a=new Array(s);for(let c=0;c!==s;++c)a[c]=o[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class MeshBasicMaterial extends Material{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Color(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Euler,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _vector$9=new Vector3,_vector2$1=new Vector2;class BufferAttribute{constructor(e,o,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=o,this.count=e!==void 0?e.length/o:0,this.normalized=a,this.usage=StaticDrawUsage,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=FloatType,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return warnOnce("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,o){this.updateRanges.push({start:e,count:o})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,o,a){e*=this.itemSize,a*=o.itemSize;for(let s=0,c=this.itemSize;s<c;s++)this.array[e+s]=o.array[a+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let o=0,a=this.count;o<a;o++)_vector2$1.fromBufferAttribute(this,o),_vector2$1.applyMatrix3(e),this.setXY(o,_vector2$1.x,_vector2$1.y);else if(this.itemSize===3)for(let o=0,a=this.count;o<a;o++)_vector$9.fromBufferAttribute(this,o),_vector$9.applyMatrix3(e),this.setXYZ(o,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyMatrix4(e){for(let o=0,a=this.count;o<a;o++)_vector$9.fromBufferAttribute(this,o),_vector$9.applyMatrix4(e),this.setXYZ(o,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyNormalMatrix(e){for(let o=0,a=this.count;o<a;o++)_vector$9.fromBufferAttribute(this,o),_vector$9.applyNormalMatrix(e),this.setXYZ(o,_vector$9.x,_vector$9.y,_vector$9.z);return this}transformDirection(e){for(let o=0,a=this.count;o<a;o++)_vector$9.fromBufferAttribute(this,o),_vector$9.transformDirection(e),this.setXYZ(o,_vector$9.x,_vector$9.y,_vector$9.z);return this}set(e,o=0){return this.array.set(e,o),this}getComponent(e,o){let a=this.array[e*this.itemSize+o];return this.normalized&&(a=denormalize(a,this.array)),a}setComponent(e,o,a){return this.normalized&&(a=normalize(a,this.array)),this.array[e*this.itemSize+o]=a,this}getX(e){let o=this.array[e*this.itemSize];return this.normalized&&(o=denormalize(o,this.array)),o}setX(e,o){return this.normalized&&(o=normalize(o,this.array)),this.array[e*this.itemSize]=o,this}getY(e){let o=this.array[e*this.itemSize+1];return this.normalized&&(o=denormalize(o,this.array)),o}setY(e,o){return this.normalized&&(o=normalize(o,this.array)),this.array[e*this.itemSize+1]=o,this}getZ(e){let o=this.array[e*this.itemSize+2];return this.normalized&&(o=denormalize(o,this.array)),o}setZ(e,o){return this.normalized&&(o=normalize(o,this.array)),this.array[e*this.itemSize+2]=o,this}getW(e){let o=this.array[e*this.itemSize+3];return this.normalized&&(o=denormalize(o,this.array)),o}setW(e,o){return this.normalized&&(o=normalize(o,this.array)),this.array[e*this.itemSize+3]=o,this}setXY(e,o,a){return e*=this.itemSize,this.normalized&&(o=normalize(o,this.array),a=normalize(a,this.array)),this.array[e+0]=o,this.array[e+1]=a,this}setXYZ(e,o,a,s){return e*=this.itemSize,this.normalized&&(o=normalize(o,this.array),a=normalize(a,this.array),s=normalize(s,this.array)),this.array[e+0]=o,this.array[e+1]=a,this.array[e+2]=s,this}setXYZW(e,o,a,s,c){return e*=this.itemSize,this.normalized&&(o=normalize(o,this.array),a=normalize(a,this.array),s=normalize(s,this.array),c=normalize(c,this.array)),this.array[e+0]=o,this.array[e+1]=a,this.array[e+2]=s,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==StaticDrawUsage&&(e.usage=this.usage),e}}class Uint16BufferAttribute extends BufferAttribute{constructor(e,o,a){super(new Uint16Array(e),o,a)}}class Uint32BufferAttribute extends BufferAttribute{constructor(e,o,a){super(new Uint32Array(e),o,a)}}class Float32BufferAttribute extends BufferAttribute{constructor(e,o,a){super(new Float32Array(e),o,a)}}let _id$2=0;const _m1$2=new Matrix4,_obj=new Object3D,_offset=new Vector3,_box$2=new Box3,_boxMorphTargets=new Box3,_vector$8=new Vector3;class BufferGeometry extends EventDispatcher{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_id$2++}),this.uuid=generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(arrayNeedsUint32(e)?Uint32BufferAttribute:Uint16BufferAttribute)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,o){return this.attributes[e]=o,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,o,a=0){this.groups.push({start:e,count:o,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,o){this.drawRange.start=e,this.drawRange.count=o}applyMatrix4(e){const o=this.attributes.position;o!==void 0&&(o.applyMatrix4(e),o.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new Matrix3().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _m1$2.makeRotationFromQuaternion(e),this.applyMatrix4(_m1$2),this}rotateX(e){return _m1$2.makeRotationX(e),this.applyMatrix4(_m1$2),this}rotateY(e){return _m1$2.makeRotationY(e),this.applyMatrix4(_m1$2),this}rotateZ(e){return _m1$2.makeRotationZ(e),this.applyMatrix4(_m1$2),this}translate(e,o,a){return _m1$2.makeTranslation(e,o,a),this.applyMatrix4(_m1$2),this}scale(e,o,a){return _m1$2.makeScale(e,o,a),this.applyMatrix4(_m1$2),this}lookAt(e){return _obj.lookAt(e),_obj.updateMatrix(),this.applyMatrix4(_obj.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_offset).negate(),this.translate(_offset.x,_offset.y,_offset.z),this}setFromPoints(e){const o=[];for(let a=0,s=e.length;a<s;a++){const c=e[a];o.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new Float32BufferAttribute(o,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Box3);const e=this.attributes.position,o=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Vector3(-1/0,-1/0,-1/0),new Vector3(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),o)for(let a=0,s=o.length;a<s;a++){const c=o[a];_box$2.setFromBufferAttribute(c),this.morphTargetsRelative?(_vector$8.addVectors(this.boundingBox.min,_box$2.min),this.boundingBox.expandByPoint(_vector$8),_vector$8.addVectors(this.boundingBox.max,_box$2.max),this.boundingBox.expandByPoint(_vector$8)):(this.boundingBox.expandByPoint(_box$2.min),this.boundingBox.expandByPoint(_box$2.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sphere);const e=this.attributes.position,o=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Vector3,1/0);return}if(e){const a=this.boundingSphere.center;if(_box$2.setFromBufferAttribute(e),o)for(let c=0,d=o.length;c<d;c++){const h=o[c];_boxMorphTargets.setFromBufferAttribute(h),this.morphTargetsRelative?(_vector$8.addVectors(_box$2.min,_boxMorphTargets.min),_box$2.expandByPoint(_vector$8),_vector$8.addVectors(_box$2.max,_boxMorphTargets.max),_box$2.expandByPoint(_vector$8)):(_box$2.expandByPoint(_boxMorphTargets.min),_box$2.expandByPoint(_boxMorphTargets.max))}_box$2.getCenter(a);let s=0;for(let c=0,d=e.count;c<d;c++)_vector$8.fromBufferAttribute(e,c),s=Math.max(s,a.distanceToSquared(_vector$8));if(o)for(let c=0,d=o.length;c<d;c++){const h=o[c],_=this.morphTargetsRelative;for(let g=0,$=h.count;g<$;g++)_vector$8.fromBufferAttribute(h,g),_&&(_offset.fromBufferAttribute(e,g),_vector$8.add(_offset)),s=Math.max(s,a.distanceToSquared(_vector$8))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,o=this.attributes;if(e===null||o.position===void 0||o.normal===void 0||o.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=o.position,s=o.normal,c=o.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new BufferAttribute(new Float32Array(4*a.count),4));const d=this.getAttribute("tangent"),h=[],_=[];for(let gt=0;gt<a.count;gt++)h[gt]=new Vector3,_[gt]=new Vector3;const g=new Vector3,$=new Vector3,_e=new Vector3,j=new Vector2,tt=new Vector2,rt=new Vector2,ot=new Vector3,et=new Vector3;function b(gt,ut,at){g.fromBufferAttribute(a,gt),$.fromBufferAttribute(a,ut),_e.fromBufferAttribute(a,at),j.fromBufferAttribute(c,gt),tt.fromBufferAttribute(c,ut),rt.fromBufferAttribute(c,at),$.sub(g),_e.sub(g),tt.sub(j),rt.sub(j);const _t=1/(tt.x*rt.y-rt.x*tt.y);isFinite(_t)&&(ot.copy($).multiplyScalar(rt.y).addScaledVector(_e,-tt.y).multiplyScalar(_t),et.copy(_e).multiplyScalar(tt.x).addScaledVector($,-rt.x).multiplyScalar(_t),h[gt].add(ot),h[ut].add(ot),h[at].add(ot),_[gt].add(et),_[ut].add(et),_[at].add(et))}let it=this.groups;it.length===0&&(it=[{start:0,count:e.count}]);for(let gt=0,ut=it.length;gt<ut;++gt){const at=it[gt],_t=at.start,wt=at.count;for(let At=_t,Lt=_t+wt;At<Lt;At+=3)b(e.getX(At+0),e.getX(At+1),e.getX(At+2))}const nt=new Vector3,ct=new Vector3,mt=new Vector3,dt=new Vector3;function ft(gt){mt.fromBufferAttribute(s,gt),dt.copy(mt);const ut=h[gt];nt.copy(ut),nt.sub(mt.multiplyScalar(mt.dot(ut))).normalize(),ct.crossVectors(dt,ut);const _t=ct.dot(_[gt])<0?-1:1;d.setXYZW(gt,nt.x,nt.y,nt.z,_t)}for(let gt=0,ut=it.length;gt<ut;++gt){const at=it[gt],_t=at.start,wt=at.count;for(let At=_t,Lt=_t+wt;At<Lt;At+=3)ft(e.getX(At+0)),ft(e.getX(At+1)),ft(e.getX(At+2))}}computeVertexNormals(){const e=this.index,o=this.getAttribute("position");if(o!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new BufferAttribute(new Float32Array(o.count*3),3),this.setAttribute("normal",a);else for(let j=0,tt=a.count;j<tt;j++)a.setXYZ(j,0,0,0);const s=new Vector3,c=new Vector3,d=new Vector3,h=new Vector3,_=new Vector3,g=new Vector3,$=new Vector3,_e=new Vector3;if(e)for(let j=0,tt=e.count;j<tt;j+=3){const rt=e.getX(j+0),ot=e.getX(j+1),et=e.getX(j+2);s.fromBufferAttribute(o,rt),c.fromBufferAttribute(o,ot),d.fromBufferAttribute(o,et),$.subVectors(d,c),_e.subVectors(s,c),$.cross(_e),h.fromBufferAttribute(a,rt),_.fromBufferAttribute(a,ot),g.fromBufferAttribute(a,et),h.add($),_.add($),g.add($),a.setXYZ(rt,h.x,h.y,h.z),a.setXYZ(ot,_.x,_.y,_.z),a.setXYZ(et,g.x,g.y,g.z)}else for(let j=0,tt=o.count;j<tt;j+=3)s.fromBufferAttribute(o,j+0),c.fromBufferAttribute(o,j+1),d.fromBufferAttribute(o,j+2),$.subVectors(d,c),_e.subVectors(s,c),$.cross(_e),a.setXYZ(j+0,$.x,$.y,$.z),a.setXYZ(j+1,$.x,$.y,$.z),a.setXYZ(j+2,$.x,$.y,$.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let o=0,a=e.count;o<a;o++)_vector$8.fromBufferAttribute(e,o),_vector$8.normalize(),e.setXYZ(o,_vector$8.x,_vector$8.y,_vector$8.z)}toNonIndexed(){function e(h,_){const g=h.array,$=h.itemSize,_e=h.normalized,j=new g.constructor(_.length*$);let tt=0,rt=0;for(let ot=0,et=_.length;ot<et;ot++){h.isInterleavedBufferAttribute?tt=_[ot]*h.data.stride+h.offset:tt=_[ot]*$;for(let b=0;b<$;b++)j[rt++]=g[tt++]}return new BufferAttribute(j,$,_e)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const o=new BufferGeometry,a=this.index.array,s=this.attributes;for(const h in s){const _=s[h],g=e(_,a);o.setAttribute(h,g)}const c=this.morphAttributes;for(const h in c){const _=[],g=c[h];for(let $=0,_e=g.length;$<_e;$++){const j=g[$],tt=e(j,a);_.push(tt)}o.morphAttributes[h]=_}o.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,_=d.length;h<_;h++){const g=d[h];o.addGroup(g.start,g.count,g.materialIndex)}return o}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const _=this.parameters;for(const g in _)_[g]!==void 0&&(e[g]=_[g]);return e}e.data={attributes:{}};const o=this.index;o!==null&&(e.data.index={type:o.array.constructor.name,array:Array.prototype.slice.call(o.array)});const a=this.attributes;for(const _ in a){const g=a[_];e.data.attributes[_]=g.toJSON(e.data)}const s={};let c=!1;for(const _ in this.morphAttributes){const g=this.morphAttributes[_],$=[];for(let _e=0,j=g.length;_e<j;_e++){const tt=g[_e];$.push(tt.toJSON(e.data))}$.length>0&&(s[_]=$,c=!0)}c&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const o={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone(o));const s=e.attributes;for(const g in s){const $=s[g];this.setAttribute(g,$.clone(o))}const c=e.morphAttributes;for(const g in c){const $=[],_e=c[g];for(let j=0,tt=_e.length;j<tt;j++)$.push(_e[j].clone(o));this.morphAttributes[g]=$}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let g=0,$=d.length;g<$;g++){const _e=d[g];this.addGroup(_e.start,_e.count,_e.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const _=e.boundingSphere;return _!==null&&(this.boundingSphere=_.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _inverseMatrix$3=new Matrix4,_ray$3=new Ray,_sphere$6=new Sphere,_sphereHitAt=new Vector3,_vA$1=new Vector3,_vB$1=new Vector3,_vC$1=new Vector3,_tempA=new Vector3,_morphA=new Vector3,_uvA$1=new Vector2,_uvB$1=new Vector2,_uvC$1=new Vector2,_normalA=new Vector3,_normalB=new Vector3,_normalC=new Vector3,_intersectionPoint=new Vector3,_intersectionPointWorld=new Vector3;class Mesh extends Object3D{constructor(e=new BufferGeometry,o=new MeshBasicMaterial){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=o,this.updateMorphTargets()}copy(e,o){return super.copy(e,o),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const o=this.geometry.morphAttributes,a=Object.keys(o);if(a.length>0){const s=o[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=s.length;c<d;c++){const h=s[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,o){const a=this.geometry,s=a.attributes.position,c=a.morphAttributes.position,d=a.morphTargetsRelative;o.fromBufferAttribute(s,e);const h=this.morphTargetInfluences;if(c&&h){_morphA.set(0,0,0);for(let _=0,g=c.length;_<g;_++){const $=h[_],_e=c[_];$!==0&&(_tempA.fromBufferAttribute(_e,e),d?_morphA.addScaledVector(_tempA,$):_morphA.addScaledVector(_tempA.sub(o),$))}o.add(_morphA)}return o}raycast(e,o){const a=this.geometry,s=this.material,c=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),_sphere$6.copy(a.boundingSphere),_sphere$6.applyMatrix4(c),_ray$3.copy(e.ray).recast(e.near),!(_sphere$6.containsPoint(_ray$3.origin)===!1&&(_ray$3.intersectSphere(_sphere$6,_sphereHitAt)===null||_ray$3.origin.distanceToSquared(_sphereHitAt)>(e.far-e.near)**2))&&(_inverseMatrix$3.copy(c).invert(),_ray$3.copy(e.ray).applyMatrix4(_inverseMatrix$3),!(a.boundingBox!==null&&_ray$3.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,o,_ray$3)))}_computeIntersections(e,o,a){let s;const c=this.geometry,d=this.material,h=c.index,_=c.attributes.position,g=c.attributes.uv,$=c.attributes.uv1,_e=c.attributes.normal,j=c.groups,tt=c.drawRange;if(h!==null)if(Array.isArray(d))for(let rt=0,ot=j.length;rt<ot;rt++){const et=j[rt],b=d[et.materialIndex],it=Math.max(et.start,tt.start),nt=Math.min(h.count,Math.min(et.start+et.count,tt.start+tt.count));for(let ct=it,mt=nt;ct<mt;ct+=3){const dt=h.getX(ct),ft=h.getX(ct+1),gt=h.getX(ct+2);s=checkGeometryIntersection(this,b,e,a,g,$,_e,dt,ft,gt),s&&(s.faceIndex=Math.floor(ct/3),s.face.materialIndex=et.materialIndex,o.push(s))}}else{const rt=Math.max(0,tt.start),ot=Math.min(h.count,tt.start+tt.count);for(let et=rt,b=ot;et<b;et+=3){const it=h.getX(et),nt=h.getX(et+1),ct=h.getX(et+2);s=checkGeometryIntersection(this,d,e,a,g,$,_e,it,nt,ct),s&&(s.faceIndex=Math.floor(et/3),o.push(s))}}else if(_!==void 0)if(Array.isArray(d))for(let rt=0,ot=j.length;rt<ot;rt++){const et=j[rt],b=d[et.materialIndex],it=Math.max(et.start,tt.start),nt=Math.min(_.count,Math.min(et.start+et.count,tt.start+tt.count));for(let ct=it,mt=nt;ct<mt;ct+=3){const dt=ct,ft=ct+1,gt=ct+2;s=checkGeometryIntersection(this,b,e,a,g,$,_e,dt,ft,gt),s&&(s.faceIndex=Math.floor(ct/3),s.face.materialIndex=et.materialIndex,o.push(s))}}else{const rt=Math.max(0,tt.start),ot=Math.min(_.count,tt.start+tt.count);for(let et=rt,b=ot;et<b;et+=3){const it=et,nt=et+1,ct=et+2;s=checkGeometryIntersection(this,d,e,a,g,$,_e,it,nt,ct),s&&(s.faceIndex=Math.floor(et/3),o.push(s))}}}}function checkIntersection$1(i,e,o,a,s,c,d,h){let _;if(e.side===BackSide?_=a.intersectTriangle(d,c,s,!0,h):_=a.intersectTriangle(s,c,d,e.side===FrontSide,h),_===null)return null;_intersectionPointWorld.copy(h),_intersectionPointWorld.applyMatrix4(i.matrixWorld);const g=o.ray.origin.distanceTo(_intersectionPointWorld);return g<o.near||g>o.far?null:{distance:g,point:_intersectionPointWorld.clone(),object:i}}function checkGeometryIntersection(i,e,o,a,s,c,d,h,_,g){i.getVertexPosition(h,_vA$1),i.getVertexPosition(_,_vB$1),i.getVertexPosition(g,_vC$1);const $=checkIntersection$1(i,e,o,a,_vA$1,_vB$1,_vC$1,_intersectionPoint);if($){s&&(_uvA$1.fromBufferAttribute(s,h),_uvB$1.fromBufferAttribute(s,_),_uvC$1.fromBufferAttribute(s,g),$.uv=Triangle.getInterpolation(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2)),c&&(_uvA$1.fromBufferAttribute(c,h),_uvB$1.fromBufferAttribute(c,_),_uvC$1.fromBufferAttribute(c,g),$.uv1=Triangle.getInterpolation(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2)),d&&(_normalA.fromBufferAttribute(d,h),_normalB.fromBufferAttribute(d,_),_normalC.fromBufferAttribute(d,g),$.normal=Triangle.getInterpolation(_intersectionPoint,_vA$1,_vB$1,_vC$1,_normalA,_normalB,_normalC,new Vector3),$.normal.dot(a.direction)>0&&$.normal.multiplyScalar(-1));const _e={a:h,b:_,c:g,normal:new Vector3,materialIndex:0};Triangle.getNormal(_vA$1,_vB$1,_vC$1,_e.normal),$.face=_e}return $}class BoxGeometry extends BufferGeometry{constructor(e=1,o=1,a=1,s=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:o,depth:a,widthSegments:s,heightSegments:c,depthSegments:d};const h=this;s=Math.floor(s),c=Math.floor(c),d=Math.floor(d);const _=[],g=[],$=[],_e=[];let j=0,tt=0;rt("z","y","x",-1,-1,a,o,e,d,c,0),rt("z","y","x",1,-1,a,o,-e,d,c,1),rt("x","z","y",1,1,e,a,o,s,d,2),rt("x","z","y",1,-1,e,a,-o,s,d,3),rt("x","y","z",1,-1,e,o,a,s,c,4),rt("x","y","z",-1,-1,e,o,-a,s,c,5),this.setIndex(_),this.setAttribute("position",new Float32BufferAttribute(g,3)),this.setAttribute("normal",new Float32BufferAttribute($,3)),this.setAttribute("uv",new Float32BufferAttribute(_e,2));function rt(ot,et,b,it,nt,ct,mt,dt,ft,gt,ut){const at=ct/ft,_t=mt/gt,wt=ct/2,At=mt/2,Lt=dt/2,Dt=ft+1,Rt=gt+1;let It=0,vt=0;const Ut=new Vector3;for(let Ft=0;Ft<Rt;Ft++){const Ht=Ft*_t-At;for(let tn=0;tn<Dt;tn++){const xn=tn*at-wt;Ut[ot]=xn*it,Ut[et]=Ht*nt,Ut[b]=Lt,g.push(Ut.x,Ut.y,Ut.z),Ut[ot]=0,Ut[et]=0,Ut[b]=dt>0?1:-1,$.push(Ut.x,Ut.y,Ut.z),_e.push(tn/ft),_e.push(1-Ft/gt),It+=1}}for(let Ft=0;Ft<gt;Ft++)for(let Ht=0;Ht<ft;Ht++){const tn=j+Ht+Dt*Ft,xn=j+Ht+Dt*(Ft+1),Ct=j+(Ht+1)+Dt*(Ft+1),Bt=j+(Ht+1)+Dt*Ft;_.push(tn,xn,Bt),_.push(xn,Ct,Bt),vt+=6}h.addGroup(tt,vt,ut),tt+=vt,j+=It}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new BoxGeometry(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cloneUniforms(i){const e={};for(const o in i){e[o]={};for(const a in i[o]){const s=i[o][a];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[o][a]=null):e[o][a]=s.clone():Array.isArray(s)?e[o][a]=s.slice():e[o][a]=s}}return e}function mergeUniforms(i){const e={};for(let o=0;o<i.length;o++){const a=cloneUniforms(i[o]);for(const s in a)e[s]=a[s]}return e}function cloneUniformsGroups(i){const e=[];for(let o=0;o<i.length;o++)e.push(i[o].clone());return e}function getUnlitUniformColorSpace(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ColorManagement.workingColorSpace}const UniformsUtils={clone:cloneUniforms,merge:mergeUniforms};var default_vertex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,default_fragment=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ShaderMaterial extends Material{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=default_vertex,this.fragmentShader=default_fragment,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cloneUniforms(e.uniforms),this.uniformsGroups=cloneUniformsGroups(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const o=super.toJSON(e);o.glslVersion=this.glslVersion,o.uniforms={};for(const s in this.uniforms){const d=this.uniforms[s].value;d&&d.isTexture?o.uniforms[s]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?o.uniforms[s]={type:"c",value:d.getHex()}:d&&d.isVector2?o.uniforms[s]={type:"v2",value:d.toArray()}:d&&d.isVector3?o.uniforms[s]={type:"v3",value:d.toArray()}:d&&d.isVector4?o.uniforms[s]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?o.uniforms[s]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?o.uniforms[s]={type:"m4",value:d.toArray()}:o.uniforms[s]={value:d}}Object.keys(this.defines).length>0&&(o.defines=this.defines),o.vertexShader=this.vertexShader,o.fragmentShader=this.fragmentShader,o.lights=this.lights,o.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(o.extensions=a),o}}class Camera extends Object3D{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Matrix4,this.projectionMatrix=new Matrix4,this.projectionMatrixInverse=new Matrix4,this.coordinateSystem=WebGLCoordinateSystem}copy(e,o){return super.copy(e,o),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,o){super.updateWorldMatrix(e,o),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _v3$1=new Vector3,_minTarget=new Vector2,_maxTarget=new Vector2;class PerspectiveCamera extends Camera{constructor(e=50,o=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=o,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,o){return super.copy(e,o),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const o=.5*this.getFilmHeight()/e;this.fov=RAD2DEG*2*Math.atan(o),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return RAD2DEG*2*Math.atan(Math.tan(DEG2RAD*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,o,a){_v3$1.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),o.set(_v3$1.x,_v3$1.y).multiplyScalar(-e/_v3$1.z),_v3$1.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(_v3$1.x,_v3$1.y).multiplyScalar(-e/_v3$1.z)}getViewSize(e,o){return this.getViewBounds(e,_minTarget,_maxTarget),o.subVectors(_maxTarget,_minTarget)}setViewOffset(e,o,a,s,c,d){this.aspect=e/o,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=o,this.view.offsetX=a,this.view.offsetY=s,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let o=e*Math.tan(DEG2RAD*.5*this.fov)/this.zoom,a=2*o,s=this.aspect*a,c=-.5*s;const d=this.view;if(this.view!==null&&this.view.enabled){const _=d.fullWidth,g=d.fullHeight;c+=d.offsetX*s/_,o-=d.offsetY*a/g,s*=d.width/_,a*=d.height/g}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+s,o,o-a,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const o=super.toJSON(e);return o.object.fov=this.fov,o.object.zoom=this.zoom,o.object.near=this.near,o.object.far=this.far,o.object.focus=this.focus,o.object.aspect=this.aspect,this.view!==null&&(o.object.view=Object.assign({},this.view)),o.object.filmGauge=this.filmGauge,o.object.filmOffset=this.filmOffset,o}}const fov=-90,aspect=1;class CubeCamera extends Object3D{constructor(e,o,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new PerspectiveCamera(fov,aspect,e,o);s.layers=this.layers,this.add(s);const c=new PerspectiveCamera(fov,aspect,e,o);c.layers=this.layers,this.add(c);const d=new PerspectiveCamera(fov,aspect,e,o);d.layers=this.layers,this.add(d);const h=new PerspectiveCamera(fov,aspect,e,o);h.layers=this.layers,this.add(h);const _=new PerspectiveCamera(fov,aspect,e,o);_.layers=this.layers,this.add(_);const g=new PerspectiveCamera(fov,aspect,e,o);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,o=this.children.concat(),[a,s,c,d,h,_]=o;for(const g of o)this.remove(g);if(e===WebGLCoordinateSystem)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),_.up.set(0,1,0),_.lookAt(0,0,-1);else if(e===WebGPUCoordinateSystem)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),_.up.set(0,-1,0),_.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of o)this.add(g),g.updateMatrixWorld()}update(e,o){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,_,g,$]=this.children,_e=e.getRenderTarget(),j=e.getActiveCubeFace(),tt=e.getActiveMipmapLevel(),rt=e.xr.enabled;e.xr.enabled=!1;const ot=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,s),e.render(o,c),e.setRenderTarget(a,1,s),e.render(o,d),e.setRenderTarget(a,2,s),e.render(o,h),e.setRenderTarget(a,3,s),e.render(o,_),e.setRenderTarget(a,4,s),e.render(o,g),a.texture.generateMipmaps=ot,e.setRenderTarget(a,5,s),e.render(o,$),e.setRenderTarget(_e,j,tt),e.xr.enabled=rt,a.texture.needsPMREMUpdate=!0}}class CubeTexture extends Texture{constructor(e,o,a,s,c,d,h,_,g,$){e=e!==void 0?e:[],o=o!==void 0?o:CubeReflectionMapping,super(e,o,a,s,c,d,h,_,g,$),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WebGLCubeRenderTarget extends WebGLRenderTarget{constructor(e=1,o={}){super(e,e,o),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},s=[a,a,a,a,a,a];this.texture=new CubeTexture(s,o.mapping,o.wrapS,o.wrapT,o.magFilter,o.minFilter,o.format,o.type,o.anisotropy,o.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=o.generateMipmaps!==void 0?o.generateMipmaps:!1,this.texture.minFilter=o.minFilter!==void 0?o.minFilter:LinearFilter}fromEquirectangularTexture(e,o){this.texture.type=o.type,this.texture.colorSpace=o.colorSpace,this.texture.generateMipmaps=o.generateMipmaps,this.texture.minFilter=o.minFilter,this.texture.magFilter=o.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new BoxGeometry(5,5,5),c=new ShaderMaterial({name:"CubemapFromEquirect",uniforms:cloneUniforms(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:BackSide,blending:NoBlending});c.uniforms.tEquirect.value=o;const d=new Mesh(s,c),h=o.minFilter;return o.minFilter===LinearMipmapLinearFilter&&(o.minFilter=LinearFilter),new CubeCamera(1,10,this).update(e,d),o.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,o,a,s){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(o,a,s);e.setRenderTarget(c)}}const _vector1=new Vector3,_vector2=new Vector3,_normalMatrix=new Matrix3;class Plane{constructor(e=new Vector3(1,0,0),o=0){this.isPlane=!0,this.normal=e,this.constant=o}set(e,o){return this.normal.copy(e),this.constant=o,this}setComponents(e,o,a,s){return this.normal.set(e,o,a),this.constant=s,this}setFromNormalAndCoplanarPoint(e,o){return this.normal.copy(e),this.constant=-o.dot(this.normal),this}setFromCoplanarPoints(e,o,a){const s=_vector1.subVectors(a,o).cross(_vector2.subVectors(e,o)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,o){return o.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,o){const a=e.delta(_vector1),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(e.start)===0?o.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/s;return c<0||c>1?null:o.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const o=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return o<0&&a>0||a<0&&o>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,o){const a=o||_normalMatrix.getNormalMatrix(e),s=this.coplanarPoint(_vector1).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _sphere$5=new Sphere,_vector$7=new Vector3;class Frustum{constructor(e=new Plane,o=new Plane,a=new Plane,s=new Plane,c=new Plane,d=new Plane){this.planes=[e,o,a,s,c,d]}set(e,o,a,s,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(o),h[2].copy(a),h[3].copy(s),h[4].copy(c),h[5].copy(d),this}copy(e){const o=this.planes;for(let a=0;a<6;a++)o[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,o=WebGLCoordinateSystem){const a=this.planes,s=e.elements,c=s[0],d=s[1],h=s[2],_=s[3],g=s[4],$=s[5],_e=s[6],j=s[7],tt=s[8],rt=s[9],ot=s[10],et=s[11],b=s[12],it=s[13],nt=s[14],ct=s[15];if(a[0].setComponents(_-c,j-g,et-tt,ct-b).normalize(),a[1].setComponents(_+c,j+g,et+tt,ct+b).normalize(),a[2].setComponents(_+d,j+$,et+rt,ct+it).normalize(),a[3].setComponents(_-d,j-$,et-rt,ct-it).normalize(),a[4].setComponents(_-h,j-_e,et-ot,ct-nt).normalize(),o===WebGLCoordinateSystem)a[5].setComponents(_+h,j+_e,et+ot,ct+nt).normalize();else if(o===WebGPUCoordinateSystem)a[5].setComponents(h,_e,ot,nt).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+o);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_sphere$5.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const o=e.geometry;o.boundingSphere===null&&o.computeBoundingSphere(),_sphere$5.copy(o.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_sphere$5)}intersectsSprite(e){return _sphere$5.center.set(0,0,0),_sphere$5.radius=.7071067811865476,_sphere$5.applyMatrix4(e.matrixWorld),this.intersectsSphere(_sphere$5)}intersectsSphere(e){const o=this.planes,a=e.center,s=-e.radius;for(let c=0;c<6;c++)if(o[c].distanceToPoint(a)<s)return!1;return!0}intersectsBox(e){const o=this.planes;for(let a=0;a<6;a++){const s=o[a];if(_vector$7.x=s.normal.x>0?e.max.x:e.min.x,_vector$7.y=s.normal.y>0?e.max.y:e.min.y,_vector$7.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_vector$7)<0)return!1}return!0}containsPoint(e){const o=this.planes;for(let a=0;a<6;a++)if(o[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function WebGLAnimation(){let i=null,e=!1,o=null,a=null;function s(c,d){o(c,d),a=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&o!==null&&(a=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){o=c},setContext:function(c){i=c}}}function WebGLAttributes(i){const e=new WeakMap;function o(h,_){const g=h.array,$=h.usage,_e=g.byteLength,j=i.createBuffer();i.bindBuffer(_,j),i.bufferData(_,g,$),h.onUploadCallback();let tt;if(g instanceof Float32Array)tt=i.FLOAT;else if(g instanceof Uint16Array)h.isFloat16BufferAttribute?tt=i.HALF_FLOAT:tt=i.UNSIGNED_SHORT;else if(g instanceof Int16Array)tt=i.SHORT;else if(g instanceof Uint32Array)tt=i.UNSIGNED_INT;else if(g instanceof Int32Array)tt=i.INT;else if(g instanceof Int8Array)tt=i.BYTE;else if(g instanceof Uint8Array)tt=i.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)tt=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:j,type:tt,bytesPerElement:g.BYTES_PER_ELEMENT,version:h.version,size:_e}}function a(h,_,g){const $=_.array,_e=_._updateRange,j=_.updateRanges;if(i.bindBuffer(g,h),_e.count===-1&&j.length===0&&i.bufferSubData(g,0,$),j.length!==0){for(let tt=0,rt=j.length;tt<rt;tt++){const ot=j[tt];i.bufferSubData(g,ot.start*$.BYTES_PER_ELEMENT,$,ot.start,ot.count)}_.clearUpdateRanges()}_e.count!==-1&&(i.bufferSubData(g,_e.offset*$.BYTES_PER_ELEMENT,$,_e.offset,_e.count),_e.count=-1),_.onUploadCallback()}function s(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const _=e.get(h);_&&(i.deleteBuffer(_.buffer),e.delete(h))}function d(h,_){if(h.isGLBufferAttribute){const $=e.get(h);(!$||$.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const g=e.get(h);if(g===void 0)e.set(h,o(h,_));else if(g.version<h.version){if(g.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(g.buffer,h,_),g.version=h.version}}return{get:s,remove:c,update:d}}class PlaneGeometry extends BufferGeometry{constructor(e=1,o=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:o,widthSegments:a,heightSegments:s};const c=e/2,d=o/2,h=Math.floor(a),_=Math.floor(s),g=h+1,$=_+1,_e=e/h,j=o/_,tt=[],rt=[],ot=[],et=[];for(let b=0;b<$;b++){const it=b*j-d;for(let nt=0;nt<g;nt++){const ct=nt*_e-c;rt.push(ct,-it,0),ot.push(0,0,1),et.push(nt/h),et.push(1-b/_)}}for(let b=0;b<_;b++)for(let it=0;it<h;it++){const nt=it+g*b,ct=it+g*(b+1),mt=it+1+g*(b+1),dt=it+1+g*b;tt.push(nt,ct,dt),tt.push(ct,mt,dt)}this.setIndex(tt),this.setAttribute("position",new Float32BufferAttribute(rt,3)),this.setAttribute("normal",new Float32BufferAttribute(ot,3)),this.setAttribute("uv",new Float32BufferAttribute(et,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new PlaneGeometry(e.width,e.height,e.widthSegments,e.heightSegments)}}var alphahash_fragment=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment="gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_vertex=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,envmap_physical_pars_fragment=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lights_toon_fragment=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vertex$h=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fragment$h=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$g=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$e=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fragment$e=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vertex$d=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fragment$d=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vertex$c=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fragment$c=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$b=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fragment$b=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vertex$a=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fragment$a=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$9=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$9=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$8=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fragment$8=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$7=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fragment$7=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vertex$6=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$6=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$5=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fragment$5=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$4=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fragment$3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vertex$2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vertex$1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fragment$1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ShaderChunk={alphahash_fragment,alphahash_pars_fragment,alphamap_fragment,alphamap_pars_fragment,alphatest_fragment,alphatest_pars_fragment,aomap_fragment,aomap_pars_fragment,batching_pars_vertex,batching_vertex,begin_vertex,beginnormal_vertex,bsdfs,iridescence_fragment,bumpmap_pars_fragment,clipping_planes_fragment,clipping_planes_pars_fragment,clipping_planes_pars_vertex,clipping_planes_vertex,color_fragment,color_pars_fragment,color_pars_vertex,color_vertex,common,cube_uv_reflection_fragment,defaultnormal_vertex,displacementmap_pars_vertex,displacementmap_vertex,emissivemap_fragment,emissivemap_pars_fragment,colorspace_fragment,colorspace_pars_fragment,envmap_fragment,envmap_common_pars_fragment,envmap_pars_fragment,envmap_pars_vertex,envmap_physical_pars_fragment,envmap_vertex,fog_vertex,fog_pars_vertex,fog_fragment,fog_pars_fragment,gradientmap_pars_fragment,lightmap_pars_fragment,lights_lambert_fragment,lights_lambert_pars_fragment,lights_pars_begin,lights_toon_fragment,lights_toon_pars_fragment,lights_phong_fragment,lights_phong_pars_fragment,lights_physical_fragment,lights_physical_pars_fragment,lights_fragment_begin,lights_fragment_maps,lights_fragment_end,logdepthbuf_fragment,logdepthbuf_pars_fragment,logdepthbuf_pars_vertex,logdepthbuf_vertex,map_fragment,map_pars_fragment,map_particle_fragment,map_particle_pars_fragment,metalnessmap_fragment,metalnessmap_pars_fragment,morphinstance_vertex,morphcolor_vertex,morphnormal_vertex,morphtarget_pars_vertex,morphtarget_vertex,normal_fragment_begin,normal_fragment_maps,normal_pars_fragment,normal_pars_vertex,normal_vertex,normalmap_pars_fragment,clearcoat_normal_fragment_begin,clearcoat_normal_fragment_maps,clearcoat_pars_fragment,iridescence_pars_fragment,opaque_fragment,packing,premultiplied_alpha_fragment,project_vertex,dithering_fragment,dithering_pars_fragment,roughnessmap_fragment,roughnessmap_pars_fragment,shadowmap_pars_fragment,shadowmap_pars_vertex,shadowmap_vertex,shadowmask_pars_fragment,skinbase_vertex,skinning_pars_vertex,skinning_vertex,skinnormal_vertex,specularmap_fragment,specularmap_pars_fragment,tonemapping_fragment,tonemapping_pars_fragment,transmission_fragment,transmission_pars_fragment,uv_pars_fragment,uv_pars_vertex,uv_vertex,worldpos_vertex,background_vert:vertex$h,background_frag:fragment$h,backgroundCube_vert:vertex$g,backgroundCube_frag:fragment$g,cube_vert:vertex$f,cube_frag:fragment$f,depth_vert:vertex$e,depth_frag:fragment$e,distanceRGBA_vert:vertex$d,distanceRGBA_frag:fragment$d,equirect_vert:vertex$c,equirect_frag:fragment$c,linedashed_vert:vertex$b,linedashed_frag:fragment$b,meshbasic_vert:vertex$a,meshbasic_frag:fragment$a,meshlambert_vert:vertex$9,meshlambert_frag:fragment$9,meshmatcap_vert:vertex$8,meshmatcap_frag:fragment$8,meshnormal_vert:vertex$7,meshnormal_frag:fragment$7,meshphong_vert:vertex$6,meshphong_frag:fragment$6,meshphysical_vert:vertex$5,meshphysical_frag:fragment$5,meshtoon_vert:vertex$4,meshtoon_frag:fragment$4,points_vert:vertex$3,points_frag:fragment$3,shadow_vert:vertex$2,shadow_frag:fragment$2,sprite_vert:vertex$1,sprite_frag:fragment$1},UniformsLib={common:{diffuse:{value:new Color(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Matrix3}},envmap:{envMap:{value:null},envMapRotation:{value:new Matrix3},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Matrix3}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Matrix3}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Matrix3},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Matrix3},normalScale:{value:new Vector2(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Matrix3},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Matrix3}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Matrix3}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Matrix3}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Color(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Color(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0},uvTransform:{value:new Matrix3}},sprite:{diffuse:{value:new Color(16777215)},opacity:{value:1},center:{value:new Vector2(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}}},ShaderLib={basic:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.fog]),vertexShader:ShaderChunk.meshbasic_vert,fragmentShader:ShaderChunk.meshbasic_frag},lambert:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshlambert_vert,fragmentShader:ShaderChunk.meshlambert_frag},phong:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},specular:{value:new Color(1118481)},shininess:{value:30}}]),vertexShader:ShaderChunk.meshphong_vert,fragmentShader:ShaderChunk.meshphong_frag},standard:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.roughnessmap,UniformsLib.metalnessmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag},toon:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.gradientmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshtoon_vert,fragmentShader:ShaderChunk.meshtoon_frag},matcap:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,{matcap:{value:null}}]),vertexShader:ShaderChunk.meshmatcap_vert,fragmentShader:ShaderChunk.meshmatcap_frag},points:{uniforms:mergeUniforms([UniformsLib.points,UniformsLib.fog]),vertexShader:ShaderChunk.points_vert,fragmentShader:ShaderChunk.points_frag},dashed:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ShaderChunk.linedashed_vert,fragmentShader:ShaderChunk.linedashed_frag},depth:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap]),vertexShader:ShaderChunk.depth_vert,fragmentShader:ShaderChunk.depth_frag},normal:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,{opacity:{value:1}}]),vertexShader:ShaderChunk.meshnormal_vert,fragmentShader:ShaderChunk.meshnormal_frag},sprite:{uniforms:mergeUniforms([UniformsLib.sprite,UniformsLib.fog]),vertexShader:ShaderChunk.sprite_vert,fragmentShader:ShaderChunk.sprite_frag},background:{uniforms:{uvTransform:{value:new Matrix3},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.background_vert,fragmentShader:ShaderChunk.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Matrix3}},vertexShader:ShaderChunk.backgroundCube_vert,fragmentShader:ShaderChunk.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ShaderChunk.cube_vert,fragmentShader:ShaderChunk.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ShaderChunk.equirect_vert,fragmentShader:ShaderChunk.equirect_frag},distanceRGBA:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap,{referencePosition:{value:new Vector3},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ShaderChunk.distanceRGBA_vert,fragmentShader:ShaderChunk.distanceRGBA_frag},shadow:{uniforms:mergeUniforms([UniformsLib.lights,UniformsLib.fog,{color:{value:new Color(0)},opacity:{value:1}}]),vertexShader:ShaderChunk.shadow_vert,fragmentShader:ShaderChunk.shadow_frag}};ShaderLib.physical={uniforms:mergeUniforms([ShaderLib.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Matrix3},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Matrix3},clearcoatNormalScale:{value:new Vector2(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Matrix3},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Matrix3},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Matrix3},sheen:{value:0},sheenColor:{value:new Color(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Matrix3},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Matrix3},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Matrix3},transmissionSamplerSize:{value:new Vector2},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Matrix3},attenuationDistance:{value:0},attenuationColor:{value:new Color(0)},specularColor:{value:new Color(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Matrix3},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Matrix3},anisotropyVector:{value:new Vector2},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Matrix3}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag};const _rgb={r:0,b:0,g:0},_e1$1=new Euler,_m1$1=new Matrix4;function WebGLBackground(i,e,o,a,s,c,d){const h=new Color(0);let _=c===!0?0:1,g,$,_e=null,j=0,tt=null;function rt(it){let nt=it.isScene===!0?it.background:null;return nt&&nt.isTexture&&(nt=(it.backgroundBlurriness>0?o:e).get(nt)),nt}function ot(it){let nt=!1;const ct=rt(it);ct===null?b(h,_):ct&&ct.isColor&&(b(ct,1),nt=!0);const mt=i.xr.getEnvironmentBlendMode();mt==="additive"?a.buffers.color.setClear(0,0,0,1,d):mt==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,d),(i.autoClear||nt)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function et(it,nt){const ct=rt(nt);ct&&(ct.isCubeTexture||ct.mapping===CubeUVReflectionMapping)?($===void 0&&($=new Mesh(new BoxGeometry(1,1,1),new ShaderMaterial({name:"BackgroundCubeMaterial",uniforms:cloneUniforms(ShaderLib.backgroundCube.uniforms),vertexShader:ShaderLib.backgroundCube.vertexShader,fragmentShader:ShaderLib.backgroundCube.fragmentShader,side:BackSide,depthTest:!1,depthWrite:!1,fog:!1})),$.geometry.deleteAttribute("normal"),$.geometry.deleteAttribute("uv"),$.onBeforeRender=function(mt,dt,ft){this.matrixWorld.copyPosition(ft.matrixWorld)},Object.defineProperty($.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update($)),_e1$1.copy(nt.backgroundRotation),_e1$1.x*=-1,_e1$1.y*=-1,_e1$1.z*=-1,ct.isCubeTexture&&ct.isRenderTargetTexture===!1&&(_e1$1.y*=-1,_e1$1.z*=-1),$.material.uniforms.envMap.value=ct,$.material.uniforms.flipEnvMap.value=ct.isCubeTexture&&ct.isRenderTargetTexture===!1?-1:1,$.material.uniforms.backgroundBlurriness.value=nt.backgroundBlurriness,$.material.uniforms.backgroundIntensity.value=nt.backgroundIntensity,$.material.uniforms.backgroundRotation.value.setFromMatrix4(_m1$1.makeRotationFromEuler(_e1$1)),$.material.toneMapped=ColorManagement.getTransfer(ct.colorSpace)!==SRGBTransfer,(_e!==ct||j!==ct.version||tt!==i.toneMapping)&&($.material.needsUpdate=!0,_e=ct,j=ct.version,tt=i.toneMapping),$.layers.enableAll(),it.unshift($,$.geometry,$.material,0,0,null)):ct&&ct.isTexture&&(g===void 0&&(g=new Mesh(new PlaneGeometry(2,2),new ShaderMaterial({name:"BackgroundMaterial",uniforms:cloneUniforms(ShaderLib.background.uniforms),vertexShader:ShaderLib.background.vertexShader,fragmentShader:ShaderLib.background.fragmentShader,side:FrontSide,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(g)),g.material.uniforms.t2D.value=ct,g.material.uniforms.backgroundIntensity.value=nt.backgroundIntensity,g.material.toneMapped=ColorManagement.getTransfer(ct.colorSpace)!==SRGBTransfer,ct.matrixAutoUpdate===!0&&ct.updateMatrix(),g.material.uniforms.uvTransform.value.copy(ct.matrix),(_e!==ct||j!==ct.version||tt!==i.toneMapping)&&(g.material.needsUpdate=!0,_e=ct,j=ct.version,tt=i.toneMapping),g.layers.enableAll(),it.unshift(g,g.geometry,g.material,0,0,null))}function b(it,nt){it.getRGB(_rgb,getUnlitUniformColorSpace(i)),a.buffers.color.setClear(_rgb.r,_rgb.g,_rgb.b,nt,d)}return{getClearColor:function(){return h},setClearColor:function(it,nt=1){h.set(it),_=nt,b(h,_)},getClearAlpha:function(){return _},setClearAlpha:function(it){_=it,b(h,_)},render:ot,addToRenderList:et}}function WebGLBindingStates(i,e){const o=i.getParameter(i.MAX_VERTEX_ATTRIBS),a={},s=j(null);let c=s,d=!1;function h(at,_t,wt,At,Lt){let Dt=!1;const Rt=_e(At,wt,_t);c!==Rt&&(c=Rt,g(c.object)),Dt=tt(at,At,wt,Lt),Dt&&rt(at,At,wt,Lt),Lt!==null&&e.update(Lt,i.ELEMENT_ARRAY_BUFFER),(Dt||d)&&(d=!1,ct(at,_t,wt,At),Lt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Lt).buffer))}function _(){return i.createVertexArray()}function g(at){return i.bindVertexArray(at)}function $(at){return i.deleteVertexArray(at)}function _e(at,_t,wt){const At=wt.wireframe===!0;let Lt=a[at.id];Lt===void 0&&(Lt={},a[at.id]=Lt);let Dt=Lt[_t.id];Dt===void 0&&(Dt={},Lt[_t.id]=Dt);let Rt=Dt[At];return Rt===void 0&&(Rt=j(_()),Dt[At]=Rt),Rt}function j(at){const _t=[],wt=[],At=[];for(let Lt=0;Lt<o;Lt++)_t[Lt]=0,wt[Lt]=0,At[Lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_t,enabledAttributes:wt,attributeDivisors:At,object:at,attributes:{},index:null}}function tt(at,_t,wt,At){const Lt=c.attributes,Dt=_t.attributes;let Rt=0;const It=wt.getAttributes();for(const vt in It)if(It[vt].location>=0){const Ft=Lt[vt];let Ht=Dt[vt];if(Ht===void 0&&(vt==="instanceMatrix"&&at.instanceMatrix&&(Ht=at.instanceMatrix),vt==="instanceColor"&&at.instanceColor&&(Ht=at.instanceColor)),Ft===void 0||Ft.attribute!==Ht||Ht&&Ft.data!==Ht.data)return!0;Rt++}return c.attributesNum!==Rt||c.index!==At}function rt(at,_t,wt,At){const Lt={},Dt=_t.attributes;let Rt=0;const It=wt.getAttributes();for(const vt in It)if(It[vt].location>=0){let Ft=Dt[vt];Ft===void 0&&(vt==="instanceMatrix"&&at.instanceMatrix&&(Ft=at.instanceMatrix),vt==="instanceColor"&&at.instanceColor&&(Ft=at.instanceColor));const Ht={};Ht.attribute=Ft,Ft&&Ft.data&&(Ht.data=Ft.data),Lt[vt]=Ht,Rt++}c.attributes=Lt,c.attributesNum=Rt,c.index=At}function ot(){const at=c.newAttributes;for(let _t=0,wt=at.length;_t<wt;_t++)at[_t]=0}function et(at){b(at,0)}function b(at,_t){const wt=c.newAttributes,At=c.enabledAttributes,Lt=c.attributeDivisors;wt[at]=1,At[at]===0&&(i.enableVertexAttribArray(at),At[at]=1),Lt[at]!==_t&&(i.vertexAttribDivisor(at,_t),Lt[at]=_t)}function it(){const at=c.newAttributes,_t=c.enabledAttributes;for(let wt=0,At=_t.length;wt<At;wt++)_t[wt]!==at[wt]&&(i.disableVertexAttribArray(wt),_t[wt]=0)}function nt(at,_t,wt,At,Lt,Dt,Rt){Rt===!0?i.vertexAttribIPointer(at,_t,wt,Lt,Dt):i.vertexAttribPointer(at,_t,wt,At,Lt,Dt)}function ct(at,_t,wt,At){ot();const Lt=At.attributes,Dt=wt.getAttributes(),Rt=_t.defaultAttributeValues;for(const It in Dt){const vt=Dt[It];if(vt.location>=0){let Ut=Lt[It];if(Ut===void 0&&(It==="instanceMatrix"&&at.instanceMatrix&&(Ut=at.instanceMatrix),It==="instanceColor"&&at.instanceColor&&(Ut=at.instanceColor)),Ut!==void 0){const Ft=Ut.normalized,Ht=Ut.itemSize,tn=e.get(Ut);if(tn===void 0)continue;const xn=tn.buffer,Ct=tn.type,Bt=tn.bytesPerElement,Xt=Ct===i.INT||Ct===i.UNSIGNED_INT||Ut.gpuType===IntType;if(Ut.isInterleavedBufferAttribute){const jt=Ut.data,dn=jt.stride,mn=Ut.offset;if(jt.isInstancedInterleavedBuffer){for(let gn=0;gn<vt.locationSize;gn++)b(vt.location+gn,jt.meshPerAttribute);at.isInstancedMesh!==!0&&At._maxInstanceCount===void 0&&(At._maxInstanceCount=jt.meshPerAttribute*jt.count)}else for(let gn=0;gn<vt.locationSize;gn++)et(vt.location+gn);i.bindBuffer(i.ARRAY_BUFFER,xn);for(let gn=0;gn<vt.locationSize;gn++)nt(vt.location+gn,Ht/vt.locationSize,Ct,Ft,dn*Bt,(mn+Ht/vt.locationSize*gn)*Bt,Xt)}else{if(Ut.isInstancedBufferAttribute){for(let jt=0;jt<vt.locationSize;jt++)b(vt.location+jt,Ut.meshPerAttribute);at.isInstancedMesh!==!0&&At._maxInstanceCount===void 0&&(At._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let jt=0;jt<vt.locationSize;jt++)et(vt.location+jt);i.bindBuffer(i.ARRAY_BUFFER,xn);for(let jt=0;jt<vt.locationSize;jt++)nt(vt.location+jt,Ht/vt.locationSize,Ct,Ft,Ht*Bt,Ht/vt.locationSize*jt*Bt,Xt)}}else if(Rt!==void 0){const Ft=Rt[It];if(Ft!==void 0)switch(Ft.length){case 2:i.vertexAttrib2fv(vt.location,Ft);break;case 3:i.vertexAttrib3fv(vt.location,Ft);break;case 4:i.vertexAttrib4fv(vt.location,Ft);break;default:i.vertexAttrib1fv(vt.location,Ft)}}}}it()}function mt(){gt();for(const at in a){const _t=a[at];for(const wt in _t){const At=_t[wt];for(const Lt in At)$(At[Lt].object),delete At[Lt];delete _t[wt]}delete a[at]}}function dt(at){if(a[at.id]===void 0)return;const _t=a[at.id];for(const wt in _t){const At=_t[wt];for(const Lt in At)$(At[Lt].object),delete At[Lt];delete _t[wt]}delete a[at.id]}function ft(at){for(const _t in a){const wt=a[_t];if(wt[at.id]===void 0)continue;const At=wt[at.id];for(const Lt in At)$(At[Lt].object),delete At[Lt];delete wt[at.id]}}function gt(){ut(),d=!0,c!==s&&(c=s,g(c.object))}function ut(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:h,reset:gt,resetDefaultState:ut,dispose:mt,releaseStatesOfGeometry:dt,releaseStatesOfProgram:ft,initAttributes:ot,enableAttribute:et,disableUnusedAttributes:it}}function WebGLBufferRenderer(i,e,o){let a;function s(g){a=g}function c(g,$){i.drawArrays(a,g,$),o.update($,a,1)}function d(g,$,_e){_e!==0&&(i.drawArraysInstanced(a,g,$,_e),o.update($,a,_e))}function h(g,$,_e){if(_e===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,g,0,$,0,_e);let tt=0;for(let rt=0;rt<_e;rt++)tt+=$[rt];o.update(tt,a,1)}function _(g,$,_e,j){if(_e===0)return;const tt=e.get("WEBGL_multi_draw");if(tt===null)for(let rt=0;rt<g.length;rt++)d(g[rt],$[rt],j[rt]);else{tt.multiDrawArraysInstancedWEBGL(a,g,0,$,0,j,0,_e);let rt=0;for(let ot=0;ot<_e;ot++)rt+=$[ot];for(let ot=0;ot<j.length;ot++)o.update(rt,a,j[ot])}}this.setMode=s,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=_}function WebGLCapabilities(i,e,o,a){let s;function c(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const dt=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(dt.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function d(dt){return!(dt!==RGBAFormat&&a.convert(dt)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(dt){const ft=dt===HalfFloatType&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(dt!==UnsignedByteType&&a.convert(dt)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&dt!==FloatType&&!ft)}function _(dt){if(dt==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";dt="mediump"}return dt==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=o.precision!==void 0?o.precision:"highp";const $=_(g);$!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",$,"instead."),g=$);const _e=o.logarithmicDepthBuffer===!0,j=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),tt=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),rt=i.getParameter(i.MAX_TEXTURE_SIZE),ot=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),et=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),it=i.getParameter(i.MAX_VARYING_VECTORS),nt=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),ct=tt>0,mt=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:_,textureFormatReadable:d,textureTypeReadable:h,precision:g,logarithmicDepthBuffer:_e,maxTextures:j,maxVertexTextures:tt,maxTextureSize:rt,maxCubemapSize:ot,maxAttributes:et,maxVertexUniforms:b,maxVaryings:it,maxFragmentUniforms:nt,vertexTextures:ct,maxSamples:mt}}function WebGLClipping(i){const e=this;let o=null,a=0,s=!1,c=!1;const d=new Plane,h=new Matrix3,_={value:null,needsUpdate:!1};this.uniform=_,this.numPlanes=0,this.numIntersection=0,this.init=function(_e,j){const tt=_e.length!==0||j||a!==0||s;return s=j,a=_e.length,tt},this.beginShadows=function(){c=!0,$(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_e,j){o=$(_e,j,0)},this.setState=function(_e,j,tt){const rt=_e.clippingPlanes,ot=_e.clipIntersection,et=_e.clipShadows,b=i.get(_e);if(!s||rt===null||rt.length===0||c&&!et)c?$(null):g();else{const it=c?0:a,nt=it*4;let ct=b.clippingState||null;_.value=ct,ct=$(rt,j,nt,tt);for(let mt=0;mt!==nt;++mt)ct[mt]=o[mt];b.clippingState=ct,this.numIntersection=ot?this.numPlanes:0,this.numPlanes+=it}};function g(){_.value!==o&&(_.value=o,_.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function $(_e,j,tt,rt){const ot=_e!==null?_e.length:0;let et=null;if(ot!==0){if(et=_.value,rt!==!0||et===null){const b=tt+ot*4,it=j.matrixWorldInverse;h.getNormalMatrix(it),(et===null||et.length<b)&&(et=new Float32Array(b));for(let nt=0,ct=tt;nt!==ot;++nt,ct+=4)d.copy(_e[nt]).applyMatrix4(it,h),d.normal.toArray(et,ct),et[ct+3]=d.constant}_.value=et,_.needsUpdate=!0}return e.numPlanes=ot,e.numIntersection=0,et}}function WebGLCubeMaps(i){let e=new WeakMap;function o(d,h){return h===EquirectangularReflectionMapping?d.mapping=CubeReflectionMapping:h===EquirectangularRefractionMapping&&(d.mapping=CubeRefractionMapping),d}function a(d){if(d&&d.isTexture){const h=d.mapping;if(h===EquirectangularReflectionMapping||h===EquirectangularRefractionMapping)if(e.has(d)){const _=e.get(d).texture;return o(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const g=new WebGLCubeRenderTarget(_.height);return g.fromEquirectangularTexture(i,d),e.set(d,g),d.addEventListener("dispose",s),o(g.texture,d.mapping)}else return null}}return d}function s(d){const h=d.target;h.removeEventListener("dispose",s);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function c(){e=new WeakMap}return{get:a,dispose:c}}class OrthographicCamera extends Camera{constructor(e=-1,o=1,a=1,s=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=o,this.top=a,this.bottom=s,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,o){return super.copy(e,o),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,o,a,s,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=o,this.view.offsetX=a,this.view.offsetY=s,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),o=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let c=a-e,d=a+e,h=s+o,_=s-o;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,$=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=g*this.view.offsetX,d=c+g*this.view.width,h-=$*this.view.offsetY,_=h-$*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,_,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const o=super.toJSON(e);return o.object.zoom=this.zoom,o.object.left=this.left,o.object.right=this.right,o.object.top=this.top,o.object.bottom=this.bottom,o.object.near=this.near,o.object.far=this.far,this.view!==null&&(o.object.view=Object.assign({},this.view)),o}}const LOD_MIN=4,EXTRA_LOD_SIGMA=[.125,.215,.35,.446,.526,.582],MAX_SAMPLES=20,_flatCamera=new OrthographicCamera,_clearColor=new Color;let _oldTarget=null,_oldActiveCubeFace=0,_oldActiveMipmapLevel=0,_oldXrEnabled=!1;const PHI=(1+Math.sqrt(5))/2,INV_PHI=1/PHI,_axisDirections=[new Vector3(-PHI,INV_PHI,0),new Vector3(PHI,INV_PHI,0),new Vector3(-INV_PHI,0,PHI),new Vector3(INV_PHI,0,PHI),new Vector3(0,PHI,-INV_PHI),new Vector3(0,PHI,INV_PHI),new Vector3(-1,1,-1),new Vector3(1,1,-1),new Vector3(-1,1,1),new Vector3(1,1,1)];class PMREMGenerator{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,o=0,a=.1,s=100){_oldTarget=this._renderer.getRenderTarget(),_oldActiveCubeFace=this._renderer.getActiveCubeFace(),_oldActiveMipmapLevel=this._renderer.getActiveMipmapLevel(),_oldXrEnabled=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,a,s,c),o>0&&this._blur(c,0,0,o),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,o=null){return this._fromTexture(e,o)}fromCubemap(e,o=null){return this._fromTexture(e,o)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_oldTarget,_oldActiveCubeFace,_oldActiveMipmapLevel),this._renderer.xr.enabled=_oldXrEnabled,e.scissorTest=!1,_setViewport(e,0,0,e.width,e.height)}_fromTexture(e,o){e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_oldTarget=this._renderer.getRenderTarget(),_oldActiveCubeFace=this._renderer.getActiveCubeFace(),_oldActiveMipmapLevel=this._renderer.getActiveMipmapLevel(),_oldXrEnabled=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=o||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),o=4*this._cubeSize,a={magFilter:LinearFilter,minFilter:LinearFilter,generateMipmaps:!1,type:HalfFloatType,format:RGBAFormat,colorSpace:LinearSRGBColorSpace,depthBuffer:!1},s=_createRenderTarget(e,o,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==o){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_createRenderTarget(e,o,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_createPlanes(c)),this._blurMaterial=_getBlurShader(c,e,o)}return s}_compileMaterial(e){const o=new Mesh(this._lodPlanes[0],e);this._renderer.compile(o,_flatCamera)}_sceneToCubeUV(e,o,a,s){const h=new PerspectiveCamera(90,1,o,a),_=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],$=this._renderer,_e=$.autoClear,j=$.toneMapping;$.getClearColor(_clearColor),$.toneMapping=NoToneMapping,$.autoClear=!1;const tt=new MeshBasicMaterial({name:"PMREM.Background",side:BackSide,depthWrite:!1,depthTest:!1}),rt=new Mesh(new BoxGeometry,tt);let ot=!1;const et=e.background;et?et.isColor&&(tt.color.copy(et),e.background=null,ot=!0):(tt.color.copy(_clearColor),ot=!0);for(let b=0;b<6;b++){const it=b%3;it===0?(h.up.set(0,_[b],0),h.lookAt(g[b],0,0)):it===1?(h.up.set(0,0,_[b]),h.lookAt(0,g[b],0)):(h.up.set(0,_[b],0),h.lookAt(0,0,g[b]));const nt=this._cubeSize;_setViewport(s,it*nt,b>2?nt:0,nt,nt),$.setRenderTarget(s),ot&&$.render(rt,h),$.render(e,h)}rt.geometry.dispose(),rt.material.dispose(),$.toneMapping=j,$.autoClear=_e,e.background=et}_textureToCubeUV(e,o){const a=this._renderer,s=e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial());const c=s?this._cubemapMaterial:this._equirectMaterial,d=new Mesh(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const _=this._cubeSize;_setViewport(o,0,0,3*_,2*_),a.setRenderTarget(o),a.render(d,_flatCamera)}_applyPMREM(e){const o=this._renderer,a=o.autoClear;o.autoClear=!1;const s=this._lodPlanes.length;for(let c=1;c<s;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=_axisDirections[(s-c-1)%_axisDirections.length];this._blur(e,c-1,c,d,h)}o.autoClear=a}_blur(e,o,a,s,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,o,a,s,"latitudinal",c),this._halfBlur(d,e,a,a,s,"longitudinal",c)}_halfBlur(e,o,a,s,c,d,h){const _=this._renderer,g=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const $=3,_e=new Mesh(this._lodPlanes[s],g),j=g.uniforms,tt=this._sizeLods[a]-1,rt=isFinite(c)?Math.PI/(2*tt):2*Math.PI/(2*MAX_SAMPLES-1),ot=c/rt,et=isFinite(c)?1+Math.floor($*ot):MAX_SAMPLES;et>MAX_SAMPLES&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${et} samples when the maximum is set to ${MAX_SAMPLES}`);const b=[];let it=0;for(let ft=0;ft<MAX_SAMPLES;++ft){const gt=ft/ot,ut=Math.exp(-gt*gt/2);b.push(ut),ft===0?it+=ut:ft<et&&(it+=2*ut)}for(let ft=0;ft<b.length;ft++)b[ft]=b[ft]/it;j.envMap.value=e.texture,j.samples.value=et,j.weights.value=b,j.latitudinal.value=d==="latitudinal",h&&(j.poleAxis.value=h);const{_lodMax:nt}=this;j.dTheta.value=rt,j.mipInt.value=nt-a;const ct=this._sizeLods[s],mt=3*ct*(s>nt-LOD_MIN?s-nt+LOD_MIN:0),dt=4*(this._cubeSize-ct);_setViewport(o,mt,dt,3*ct,2*ct),_.setRenderTarget(o),_.render(_e,_flatCamera)}}function _createPlanes(i){const e=[],o=[],a=[];let s=i;const c=i-LOD_MIN+1+EXTRA_LOD_SIGMA.length;for(let d=0;d<c;d++){const h=Math.pow(2,s);o.push(h);let _=1/h;d>i-LOD_MIN?_=EXTRA_LOD_SIGMA[d-i+LOD_MIN-1]:d===0&&(_=0),a.push(_);const g=1/(h-2),$=-g,_e=1+g,j=[$,$,_e,$,_e,_e,$,$,_e,_e,$,_e],tt=6,rt=6,ot=3,et=2,b=1,it=new Float32Array(ot*rt*tt),nt=new Float32Array(et*rt*tt),ct=new Float32Array(b*rt*tt);for(let dt=0;dt<tt;dt++){const ft=dt%3*2/3-1,gt=dt>2?0:-1,ut=[ft,gt,0,ft+2/3,gt,0,ft+2/3,gt+1,0,ft,gt,0,ft+2/3,gt+1,0,ft,gt+1,0];it.set(ut,ot*rt*dt),nt.set(j,et*rt*dt);const at=[dt,dt,dt,dt,dt,dt];ct.set(at,b*rt*dt)}const mt=new BufferGeometry;mt.setAttribute("position",new BufferAttribute(it,ot)),mt.setAttribute("uv",new BufferAttribute(nt,et)),mt.setAttribute("faceIndex",new BufferAttribute(ct,b)),e.push(mt),s>LOD_MIN&&s--}return{lodPlanes:e,sizeLods:o,sigmas:a}}function _createRenderTarget(i,e,o){const a=new WebGLRenderTarget(i,e,o);return a.texture.mapping=CubeUVReflectionMapping,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function _setViewport(i,e,o,a,s){i.viewport.set(e,o,a,s),i.scissor.set(e,o,a,s)}function _getBlurShader(i,e,o){const a=new Float32Array(MAX_SAMPLES),s=new Vector3(0,1,0);return new ShaderMaterial({name:"SphericalGaussianBlur",defines:{n:MAX_SAMPLES,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/o,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getEquirectMaterial(){return new ShaderMaterial({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCubemapMaterial(){return new ShaderMaterial({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCommonVertexShader(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function WebGLCubeUVMaps(i){let e=new WeakMap,o=null;function a(h){if(h&&h.isTexture){const _=h.mapping,g=_===EquirectangularReflectionMapping||_===EquirectangularRefractionMapping,$=_===CubeReflectionMapping||_===CubeRefractionMapping;if(g||$){let _e=e.get(h);const j=_e!==void 0?_e.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==j)return o===null&&(o=new PMREMGenerator(i)),_e=g?o.fromEquirectangular(h,_e):o.fromCubemap(h,_e),_e.texture.pmremVersion=h.pmremVersion,e.set(h,_e),_e.texture;if(_e!==void 0)return _e.texture;{const tt=h.image;return g&&tt&&tt.height>0||$&&tt&&s(tt)?(o===null&&(o=new PMREMGenerator(i)),_e=g?o.fromEquirectangular(h):o.fromCubemap(h),_e.texture.pmremVersion=h.pmremVersion,e.set(h,_e),h.addEventListener("dispose",c),_e.texture):null}}}return h}function s(h){let _=0;const g=6;for(let $=0;$<g;$++)h[$]!==void 0&&_++;return _===g}function c(h){const _=h.target;_.removeEventListener("dispose",c);const g=e.get(_);g!==void 0&&(e.delete(_),g.dispose())}function d(){e=new WeakMap,o!==null&&(o.dispose(),o=null)}return{get:a,dispose:d}}function WebGLExtensions(i){const e={};function o(a){if(e[a]!==void 0)return e[a];let s;switch(a){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(a)}return e[a]=s,s}return{has:function(a){return o(a)!==null},init:function(){o("EXT_color_buffer_float"),o("WEBGL_clip_cull_distance"),o("OES_texture_float_linear"),o("EXT_color_buffer_half_float"),o("WEBGL_multisampled_render_to_texture"),o("WEBGL_render_shared_exponent")},get:function(a){const s=o(a);return s===null&&warnOnce("THREE.WebGLRenderer: "+a+" extension not supported."),s}}}function WebGLGeometries(i,e,o,a){const s={},c=new WeakMap;function d(_e){const j=_e.target;j.index!==null&&e.remove(j.index);for(const rt in j.attributes)e.remove(j.attributes[rt]);for(const rt in j.morphAttributes){const ot=j.morphAttributes[rt];for(let et=0,b=ot.length;et<b;et++)e.remove(ot[et])}j.removeEventListener("dispose",d),delete s[j.id];const tt=c.get(j);tt&&(e.remove(tt),c.delete(j)),a.releaseStatesOfGeometry(j),j.isInstancedBufferGeometry===!0&&delete j._maxInstanceCount,o.memory.geometries--}function h(_e,j){return s[j.id]===!0||(j.addEventListener("dispose",d),s[j.id]=!0,o.memory.geometries++),j}function _(_e){const j=_e.attributes;for(const rt in j)e.update(j[rt],i.ARRAY_BUFFER);const tt=_e.morphAttributes;for(const rt in tt){const ot=tt[rt];for(let et=0,b=ot.length;et<b;et++)e.update(ot[et],i.ARRAY_BUFFER)}}function g(_e){const j=[],tt=_e.index,rt=_e.attributes.position;let ot=0;if(tt!==null){const it=tt.array;ot=tt.version;for(let nt=0,ct=it.length;nt<ct;nt+=3){const mt=it[nt+0],dt=it[nt+1],ft=it[nt+2];j.push(mt,dt,dt,ft,ft,mt)}}else if(rt!==void 0){const it=rt.array;ot=rt.version;for(let nt=0,ct=it.length/3-1;nt<ct;nt+=3){const mt=nt+0,dt=nt+1,ft=nt+2;j.push(mt,dt,dt,ft,ft,mt)}}else return;const et=new(arrayNeedsUint32(j)?Uint32BufferAttribute:Uint16BufferAttribute)(j,1);et.version=ot;const b=c.get(_e);b&&e.remove(b),c.set(_e,et)}function $(_e){const j=c.get(_e);if(j){const tt=_e.index;tt!==null&&j.version<tt.version&&g(_e)}else g(_e);return c.get(_e)}return{get:h,update:_,getWireframeAttribute:$}}function WebGLIndexedBufferRenderer(i,e,o){let a;function s(j){a=j}let c,d;function h(j){c=j.type,d=j.bytesPerElement}function _(j,tt){i.drawElements(a,tt,c,j*d),o.update(tt,a,1)}function g(j,tt,rt){rt!==0&&(i.drawElementsInstanced(a,tt,c,j*d,rt),o.update(tt,a,rt))}function $(j,tt,rt){if(rt===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,tt,0,c,j,0,rt);let et=0;for(let b=0;b<rt;b++)et+=tt[b];o.update(et,a,1)}function _e(j,tt,rt,ot){if(rt===0)return;const et=e.get("WEBGL_multi_draw");if(et===null)for(let b=0;b<j.length;b++)g(j[b]/d,tt[b],ot[b]);else{et.multiDrawElementsInstancedWEBGL(a,tt,0,c,j,0,ot,0,rt);let b=0;for(let it=0;it<rt;it++)b+=tt[it];for(let it=0;it<ot.length;it++)o.update(b,a,ot[it])}}this.setMode=s,this.setIndex=h,this.render=_,this.renderInstances=g,this.renderMultiDraw=$,this.renderMultiDrawInstances=_e}function WebGLInfo(i){const e={geometries:0,textures:0},o={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,d,h){switch(o.calls++,d){case i.TRIANGLES:o.triangles+=h*(c/3);break;case i.LINES:o.lines+=h*(c/2);break;case i.LINE_STRIP:o.lines+=h*(c-1);break;case i.LINE_LOOP:o.lines+=h*c;break;case i.POINTS:o.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function s(){o.calls=0,o.triangles=0,o.points=0,o.lines=0}return{memory:e,render:o,programs:null,autoReset:!0,reset:s,update:a}}function WebGLMorphtargets(i,e,o){const a=new WeakMap,s=new Vector4;function c(d,h,_){const g=d.morphTargetInfluences,$=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_e=$!==void 0?$.length:0;let j=a.get(h);if(j===void 0||j.count!==_e){let at=function(){gt.dispose(),a.delete(h),h.removeEventListener("dispose",at)};var tt=at;j!==void 0&&j.texture.dispose();const rt=h.morphAttributes.position!==void 0,ot=h.morphAttributes.normal!==void 0,et=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],it=h.morphAttributes.normal||[],nt=h.morphAttributes.color||[];let ct=0;rt===!0&&(ct=1),ot===!0&&(ct=2),et===!0&&(ct=3);let mt=h.attributes.position.count*ct,dt=1;mt>e.maxTextureSize&&(dt=Math.ceil(mt/e.maxTextureSize),mt=e.maxTextureSize);const ft=new Float32Array(mt*dt*4*_e),gt=new DataArrayTexture(ft,mt,dt,_e);gt.type=FloatType,gt.needsUpdate=!0;const ut=ct*4;for(let _t=0;_t<_e;_t++){const wt=b[_t],At=it[_t],Lt=nt[_t],Dt=mt*dt*4*_t;for(let Rt=0;Rt<wt.count;Rt++){const It=Rt*ut;rt===!0&&(s.fromBufferAttribute(wt,Rt),ft[Dt+It+0]=s.x,ft[Dt+It+1]=s.y,ft[Dt+It+2]=s.z,ft[Dt+It+3]=0),ot===!0&&(s.fromBufferAttribute(At,Rt),ft[Dt+It+4]=s.x,ft[Dt+It+5]=s.y,ft[Dt+It+6]=s.z,ft[Dt+It+7]=0),et===!0&&(s.fromBufferAttribute(Lt,Rt),ft[Dt+It+8]=s.x,ft[Dt+It+9]=s.y,ft[Dt+It+10]=s.z,ft[Dt+It+11]=Lt.itemSize===4?s.w:1)}}j={count:_e,texture:gt,size:new Vector2(mt,dt)},a.set(h,j),h.addEventListener("dispose",at)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)_.getUniforms().setValue(i,"morphTexture",d.morphTexture,o);else{let rt=0;for(let et=0;et<g.length;et++)rt+=g[et];const ot=h.morphTargetsRelative?1:1-rt;_.getUniforms().setValue(i,"morphTargetBaseInfluence",ot),_.getUniforms().setValue(i,"morphTargetInfluences",g)}_.getUniforms().setValue(i,"morphTargetsTexture",j.texture,o),_.getUniforms().setValue(i,"morphTargetsTextureSize",j.size)}return{update:c}}function WebGLObjects(i,e,o,a){let s=new WeakMap;function c(_){const g=a.render.frame,$=_.geometry,_e=e.get(_,$);if(s.get(_e)!==g&&(e.update(_e),s.set(_e,g)),_.isInstancedMesh&&(_.hasEventListener("dispose",h)===!1&&_.addEventListener("dispose",h),s.get(_)!==g&&(o.update(_.instanceMatrix,i.ARRAY_BUFFER),_.instanceColor!==null&&o.update(_.instanceColor,i.ARRAY_BUFFER),s.set(_,g))),_.isSkinnedMesh){const j=_.skeleton;s.get(j)!==g&&(j.update(),s.set(j,g))}return _e}function d(){s=new WeakMap}function h(_){const g=_.target;g.removeEventListener("dispose",h),o.remove(g.instanceMatrix),g.instanceColor!==null&&o.remove(g.instanceColor)}return{update:c,dispose:d}}class DepthTexture extends Texture{constructor(e,o,a,s,c,d,h,_,g,$=DepthFormat){if($!==DepthFormat&&$!==DepthStencilFormat)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");a===void 0&&$===DepthFormat&&(a=UnsignedIntType),a===void 0&&$===DepthStencilFormat&&(a=UnsignedInt248Type),super(null,s,c,d,h,_,$,a,g),this.isDepthTexture=!0,this.image={width:e,height:o},this.magFilter=h!==void 0?h:NearestFilter,this.minFilter=_!==void 0?_:NearestFilter,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const o=super.toJSON(e);return this.compareFunction!==null&&(o.compareFunction=this.compareFunction),o}}const emptyTexture=new Texture,emptyShadowTexture=new DepthTexture(1,1),emptyArrayTexture=new DataArrayTexture,empty3dTexture=new Data3DTexture,emptyCubeTexture=new CubeTexture,arrayCacheF32=[],arrayCacheI32=[],mat4array=new Float32Array(16),mat3array=new Float32Array(9),mat2array=new Float32Array(4);function flatten(i,e,o){const a=i[0];if(a<=0||a>0)return i;const s=e*o;let c=arrayCacheF32[s];if(c===void 0&&(c=new Float32Array(s),arrayCacheF32[s]=c),e!==0){a.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=o,i[d].toArray(c,h)}return c}function arraysEqual(i,e){if(i.length!==e.length)return!1;for(let o=0,a=i.length;o<a;o++)if(i[o]!==e[o])return!1;return!0}function copyArray(i,e){for(let o=0,a=e.length;o<a;o++)i[o]=e[o]}function allocTexUnits(i,e){let o=arrayCacheI32[e];o===void 0&&(o=new Int32Array(e),arrayCacheI32[e]=o);for(let a=0;a!==e;++a)o[a]=i.allocateTextureUnit();return o}function setValueV1f(i,e){const o=this.cache;o[0]!==e&&(i.uniform1f(this.addr,e),o[0]=e)}function setValueV2f(i,e){const o=this.cache;if(e.x!==void 0)(o[0]!==e.x||o[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),o[0]=e.x,o[1]=e.y);else{if(arraysEqual(o,e))return;i.uniform2fv(this.addr,e),copyArray(o,e)}}function setValueV3f(i,e){const o=this.cache;if(e.x!==void 0)(o[0]!==e.x||o[1]!==e.y||o[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),o[0]=e.x,o[1]=e.y,o[2]=e.z);else if(e.r!==void 0)(o[0]!==e.r||o[1]!==e.g||o[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),o[0]=e.r,o[1]=e.g,o[2]=e.b);else{if(arraysEqual(o,e))return;i.uniform3fv(this.addr,e),copyArray(o,e)}}function setValueV4f(i,e){const o=this.cache;if(e.x!==void 0)(o[0]!==e.x||o[1]!==e.y||o[2]!==e.z||o[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),o[0]=e.x,o[1]=e.y,o[2]=e.z,o[3]=e.w);else{if(arraysEqual(o,e))return;i.uniform4fv(this.addr,e),copyArray(o,e)}}function setValueM2(i,e){const o=this.cache,a=e.elements;if(a===void 0){if(arraysEqual(o,e))return;i.uniformMatrix2fv(this.addr,!1,e),copyArray(o,e)}else{if(arraysEqual(o,a))return;mat2array.set(a),i.uniformMatrix2fv(this.addr,!1,mat2array),copyArray(o,a)}}function setValueM3(i,e){const o=this.cache,a=e.elements;if(a===void 0){if(arraysEqual(o,e))return;i.uniformMatrix3fv(this.addr,!1,e),copyArray(o,e)}else{if(arraysEqual(o,a))return;mat3array.set(a),i.uniformMatrix3fv(this.addr,!1,mat3array),copyArray(o,a)}}function setValueM4(i,e){const o=this.cache,a=e.elements;if(a===void 0){if(arraysEqual(o,e))return;i.uniformMatrix4fv(this.addr,!1,e),copyArray(o,e)}else{if(arraysEqual(o,a))return;mat4array.set(a),i.uniformMatrix4fv(this.addr,!1,mat4array),copyArray(o,a)}}function setValueV1i(i,e){const o=this.cache;o[0]!==e&&(i.uniform1i(this.addr,e),o[0]=e)}function setValueV2i(i,e){const o=this.cache;if(e.x!==void 0)(o[0]!==e.x||o[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),o[0]=e.x,o[1]=e.y);else{if(arraysEqual(o,e))return;i.uniform2iv(this.addr,e),copyArray(o,e)}}function setValueV3i(i,e){const o=this.cache;if(e.x!==void 0)(o[0]!==e.x||o[1]!==e.y||o[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),o[0]=e.x,o[1]=e.y,o[2]=e.z);else{if(arraysEqual(o,e))return;i.uniform3iv(this.addr,e),copyArray(o,e)}}function setValueV4i(i,e){const o=this.cache;if(e.x!==void 0)(o[0]!==e.x||o[1]!==e.y||o[2]!==e.z||o[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),o[0]=e.x,o[1]=e.y,o[2]=e.z,o[3]=e.w);else{if(arraysEqual(o,e))return;i.uniform4iv(this.addr,e),copyArray(o,e)}}function setValueV1ui(i,e){const o=this.cache;o[0]!==e&&(i.uniform1ui(this.addr,e),o[0]=e)}function setValueV2ui(i,e){const o=this.cache;if(e.x!==void 0)(o[0]!==e.x||o[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),o[0]=e.x,o[1]=e.y);else{if(arraysEqual(o,e))return;i.uniform2uiv(this.addr,e),copyArray(o,e)}}function setValueV3ui(i,e){const o=this.cache;if(e.x!==void 0)(o[0]!==e.x||o[1]!==e.y||o[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),o[0]=e.x,o[1]=e.y,o[2]=e.z);else{if(arraysEqual(o,e))return;i.uniform3uiv(this.addr,e),copyArray(o,e)}}function setValueV4ui(i,e){const o=this.cache;if(e.x!==void 0)(o[0]!==e.x||o[1]!==e.y||o[2]!==e.z||o[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),o[0]=e.x,o[1]=e.y,o[2]=e.z,o[3]=e.w);else{if(arraysEqual(o,e))return;i.uniform4uiv(this.addr,e),copyArray(o,e)}}function setValueT1(i,e,o){const a=this.cache,s=o.allocateTextureUnit();a[0]!==s&&(i.uniform1i(this.addr,s),a[0]=s);let c;this.type===i.SAMPLER_2D_SHADOW?(emptyShadowTexture.compareFunction=LessEqualCompare,c=emptyShadowTexture):c=emptyTexture,o.setTexture2D(e||c,s)}function setValueT3D1(i,e,o){const a=this.cache,s=o.allocateTextureUnit();a[0]!==s&&(i.uniform1i(this.addr,s),a[0]=s),o.setTexture3D(e||empty3dTexture,s)}function setValueT6(i,e,o){const a=this.cache,s=o.allocateTextureUnit();a[0]!==s&&(i.uniform1i(this.addr,s),a[0]=s),o.setTextureCube(e||emptyCubeTexture,s)}function setValueT2DArray1(i,e,o){const a=this.cache,s=o.allocateTextureUnit();a[0]!==s&&(i.uniform1i(this.addr,s),a[0]=s),o.setTexture2DArray(e||emptyArrayTexture,s)}function getSingularSetter(i){switch(i){case 5126:return setValueV1f;case 35664:return setValueV2f;case 35665:return setValueV3f;case 35666:return setValueV4f;case 35674:return setValueM2;case 35675:return setValueM3;case 35676:return setValueM4;case 5124:case 35670:return setValueV1i;case 35667:case 35671:return setValueV2i;case 35668:case 35672:return setValueV3i;case 35669:case 35673:return setValueV4i;case 5125:return setValueV1ui;case 36294:return setValueV2ui;case 36295:return setValueV3ui;case 36296:return setValueV4ui;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1;case 35679:case 36299:case 36307:return setValueT3D1;case 35680:case 36300:case 36308:case 36293:return setValueT6;case 36289:case 36303:case 36311:case 36292:return setValueT2DArray1}}function setValueV1fArray(i,e){i.uniform1fv(this.addr,e)}function setValueV2fArray(i,e){const o=flatten(e,this.size,2);i.uniform2fv(this.addr,o)}function setValueV3fArray(i,e){const o=flatten(e,this.size,3);i.uniform3fv(this.addr,o)}function setValueV4fArray(i,e){const o=flatten(e,this.size,4);i.uniform4fv(this.addr,o)}function setValueM2Array(i,e){const o=flatten(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,o)}function setValueM3Array(i,e){const o=flatten(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,o)}function setValueM4Array(i,e){const o=flatten(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,o)}function setValueV1iArray(i,e){i.uniform1iv(this.addr,e)}function setValueV2iArray(i,e){i.uniform2iv(this.addr,e)}function setValueV3iArray(i,e){i.uniform3iv(this.addr,e)}function setValueV4iArray(i,e){i.uniform4iv(this.addr,e)}function setValueV1uiArray(i,e){i.uniform1uiv(this.addr,e)}function setValueV2uiArray(i,e){i.uniform2uiv(this.addr,e)}function setValueV3uiArray(i,e){i.uniform3uiv(this.addr,e)}function setValueV4uiArray(i,e){i.uniform4uiv(this.addr,e)}function setValueT1Array(i,e,o){const a=this.cache,s=e.length,c=allocTexUnits(o,s);arraysEqual(a,c)||(i.uniform1iv(this.addr,c),copyArray(a,c));for(let d=0;d!==s;++d)o.setTexture2D(e[d]||emptyTexture,c[d])}function setValueT3DArray(i,e,o){const a=this.cache,s=e.length,c=allocTexUnits(o,s);arraysEqual(a,c)||(i.uniform1iv(this.addr,c),copyArray(a,c));for(let d=0;d!==s;++d)o.setTexture3D(e[d]||empty3dTexture,c[d])}function setValueT6Array(i,e,o){const a=this.cache,s=e.length,c=allocTexUnits(o,s);arraysEqual(a,c)||(i.uniform1iv(this.addr,c),copyArray(a,c));for(let d=0;d!==s;++d)o.setTextureCube(e[d]||emptyCubeTexture,c[d])}function setValueT2DArrayArray(i,e,o){const a=this.cache,s=e.length,c=allocTexUnits(o,s);arraysEqual(a,c)||(i.uniform1iv(this.addr,c),copyArray(a,c));for(let d=0;d!==s;++d)o.setTexture2DArray(e[d]||emptyArrayTexture,c[d])}function getPureArraySetter(i){switch(i){case 5126:return setValueV1fArray;case 35664:return setValueV2fArray;case 35665:return setValueV3fArray;case 35666:return setValueV4fArray;case 35674:return setValueM2Array;case 35675:return setValueM3Array;case 35676:return setValueM4Array;case 5124:case 35670:return setValueV1iArray;case 35667:case 35671:return setValueV2iArray;case 35668:case 35672:return setValueV3iArray;case 35669:case 35673:return setValueV4iArray;case 5125:return setValueV1uiArray;case 36294:return setValueV2uiArray;case 36295:return setValueV3uiArray;case 36296:return setValueV4uiArray;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1Array;case 35679:case 36299:case 36307:return setValueT3DArray;case 35680:case 36300:case 36308:case 36293:return setValueT6Array;case 36289:case 36303:case 36311:case 36292:return setValueT2DArrayArray}}class SingleUniform{constructor(e,o,a){this.id=e,this.addr=a,this.cache=[],this.type=o.type,this.setValue=getSingularSetter(o.type)}}class PureArrayUniform{constructor(e,o,a){this.id=e,this.addr=a,this.cache=[],this.type=o.type,this.size=o.size,this.setValue=getPureArraySetter(o.type)}}class StructuredUniform{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,o,a){const s=this.seq;for(let c=0,d=s.length;c!==d;++c){const h=s[c];h.setValue(e,o[h.id],a)}}}const RePathPart=/(\w+)(\])?(\[|\.)?/g;function addUniform(i,e){i.seq.push(e),i.map[e.id]=e}function parseUniform(i,e,o){const a=i.name,s=a.length;for(RePathPart.lastIndex=0;;){const c=RePathPart.exec(a),d=RePathPart.lastIndex;let h=c[1];const _=c[2]==="]",g=c[3];if(_&&(h=h|0),g===void 0||g==="["&&d+2===s){addUniform(o,g===void 0?new SingleUniform(h,i,e):new PureArrayUniform(h,i,e));break}else{let _e=o.map[h];_e===void 0&&(_e=new StructuredUniform(h),addUniform(o,_e)),o=_e}}}class WebGLUniforms{constructor(e,o){this.seq=[],this.map={};const a=e.getProgramParameter(o,e.ACTIVE_UNIFORMS);for(let s=0;s<a;++s){const c=e.getActiveUniform(o,s),d=e.getUniformLocation(o,c.name);parseUniform(c,d,this)}}setValue(e,o,a,s){const c=this.map[o];c!==void 0&&c.setValue(e,a,s)}setOptional(e,o,a){const s=o[a];s!==void 0&&this.setValue(e,a,s)}static upload(e,o,a,s){for(let c=0,d=o.length;c!==d;++c){const h=o[c],_=a[h.id];_.needsUpdate!==!1&&h.setValue(e,_.value,s)}}static seqWithValue(e,o){const a=[];for(let s=0,c=e.length;s!==c;++s){const d=e[s];d.id in o&&a.push(d)}return a}}function WebGLShader(i,e,o){const a=i.createShader(e);return i.shaderSource(a,o),i.compileShader(a),a}const COMPLETION_STATUS_KHR=37297;let programIdCount=0;function handleSource(i,e){const o=i.split(`
`),a=[],s=Math.max(e-6,0),c=Math.min(e+6,o.length);for(let d=s;d<c;d++){const h=d+1;a.push(`${h===e?">":" "} ${h}: ${o[d]}`)}return a.join(`
`)}function getEncodingComponents(i){const e=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),o=ColorManagement.getPrimaries(i);let a;switch(e===o?a="":e===P3Primaries&&o===Rec709Primaries?a="LinearDisplayP3ToLinearSRGB":e===Rec709Primaries&&o===P3Primaries&&(a="LinearSRGBToLinearDisplayP3"),i){case LinearSRGBColorSpace:case LinearDisplayP3ColorSpace:return[a,"LinearTransferOETF"];case SRGBColorSpace:case DisplayP3ColorSpace:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[a,"LinearTransferOETF"]}}function getShaderErrors(i,e,o){const a=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(a&&s==="")return"";const c=/ERROR: 0:(\d+)/.exec(s);if(c){const d=parseInt(c[1]);return o.toUpperCase()+`

`+s+`

`+handleSource(i.getShaderSource(e),d)}else return s}function getTexelEncodingFunction(i,e){const o=getEncodingComponents(e);return`vec4 ${i}( vec4 value ) { return ${o[0]}( ${o[1]}( value ) ); }`}function getToneMappingFunction(i,e){let o;switch(e){case LinearToneMapping:o="Linear";break;case ReinhardToneMapping:o="Reinhard";break;case CineonToneMapping:o="OptimizedCineon";break;case ACESFilmicToneMapping:o="ACESFilmic";break;case AgXToneMapping:o="AgX";break;case NeutralToneMapping:o="Neutral";break;case CustomToneMapping:o="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),o="Linear"}return"vec3 "+i+"( vec3 color ) { return "+o+"ToneMapping( color ); }"}function generateVertexExtensions(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(filterEmptyLine).join(`
`)}function generateDefines(i){const e=[];for(const o in i){const a=i[o];a!==!1&&e.push("#define "+o+" "+a)}return e.join(`
`)}function fetchAttributeLocations(i,e){const o={},a=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const c=i.getActiveAttrib(e,s),d=c.name;let h=1;c.type===i.FLOAT_MAT2&&(h=2),c.type===i.FLOAT_MAT3&&(h=3),c.type===i.FLOAT_MAT4&&(h=4),o[d]={type:c.type,location:i.getAttribLocation(e,d),locationSize:h}}return o}function filterEmptyLine(i){return i!==""}function replaceLightNums(i,e){const o=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,o).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function replaceClippingPlaneNums(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const includePattern=/^[ \t]*#include +<([\w\d./]+)>/gm;function resolveIncludes(i){return i.replace(includePattern,includeReplacer)}const shaderChunkMap=new Map;function includeReplacer(i,e){let o=ShaderChunk[e];if(o===void 0){const a=shaderChunkMap.get(e);if(a!==void 0)o=ShaderChunk[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return resolveIncludes(o)}const unrollLoopPattern=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function unrollLoops(i){return i.replace(unrollLoopPattern,loopReplacer)}function loopReplacer(i,e,o,a){let s="";for(let c=parseInt(e);c<parseInt(o);c++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return s}function generatePrecision(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function generateShadowMapTypeDefine(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===PCFShadowMap?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===PCFSoftShadowMap?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===VSMShadowMap&&(e="SHADOWMAP_TYPE_VSM"),e}function generateEnvMapTypeDefine(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case CubeReflectionMapping:case CubeRefractionMapping:e="ENVMAP_TYPE_CUBE";break;case CubeUVReflectionMapping:e="ENVMAP_TYPE_CUBE_UV";break}return e}function generateEnvMapModeDefine(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case CubeRefractionMapping:e="ENVMAP_MODE_REFRACTION";break}return e}function generateEnvMapBlendingDefine(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case MultiplyOperation:e="ENVMAP_BLENDING_MULTIPLY";break;case MixOperation:e="ENVMAP_BLENDING_MIX";break;case AddOperation:e="ENVMAP_BLENDING_ADD";break}return e}function generateCubeUVSize(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const o=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,o),7*16)),texelHeight:a,maxMip:o}}function WebGLProgram(i,e,o,a){const s=i.getContext(),c=o.defines;let d=o.vertexShader,h=o.fragmentShader;const _=generateShadowMapTypeDefine(o),g=generateEnvMapTypeDefine(o),$=generateEnvMapModeDefine(o),_e=generateEnvMapBlendingDefine(o),j=generateCubeUVSize(o),tt=generateVertexExtensions(o),rt=generateDefines(c),ot=s.createProgram();let et,b,it=o.glslVersion?"#version "+o.glslVersion+`
`:"";o.isRawShaderMaterial?(et=["#define SHADER_TYPE "+o.shaderType,"#define SHADER_NAME "+o.shaderName,rt].filter(filterEmptyLine).join(`
`),et.length>0&&(et+=`
`),b=["#define SHADER_TYPE "+o.shaderType,"#define SHADER_NAME "+o.shaderName,rt].filter(filterEmptyLine).join(`
`),b.length>0&&(b+=`
`)):(et=[generatePrecision(o),"#define SHADER_TYPE "+o.shaderType,"#define SHADER_NAME "+o.shaderName,rt,o.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",o.batching?"#define USE_BATCHING":"",o.batchingColor?"#define USE_BATCHING_COLOR":"",o.instancing?"#define USE_INSTANCING":"",o.instancingColor?"#define USE_INSTANCING_COLOR":"",o.instancingMorph?"#define USE_INSTANCING_MORPH":"",o.useFog&&o.fog?"#define USE_FOG":"",o.useFog&&o.fogExp2?"#define FOG_EXP2":"",o.map?"#define USE_MAP":"",o.envMap?"#define USE_ENVMAP":"",o.envMap?"#define "+$:"",o.lightMap?"#define USE_LIGHTMAP":"",o.aoMap?"#define USE_AOMAP":"",o.bumpMap?"#define USE_BUMPMAP":"",o.normalMap?"#define USE_NORMALMAP":"",o.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",o.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",o.displacementMap?"#define USE_DISPLACEMENTMAP":"",o.emissiveMap?"#define USE_EMISSIVEMAP":"",o.anisotropy?"#define USE_ANISOTROPY":"",o.anisotropyMap?"#define USE_ANISOTROPYMAP":"",o.clearcoatMap?"#define USE_CLEARCOATMAP":"",o.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",o.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",o.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",o.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",o.specularMap?"#define USE_SPECULARMAP":"",o.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",o.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",o.roughnessMap?"#define USE_ROUGHNESSMAP":"",o.metalnessMap?"#define USE_METALNESSMAP":"",o.alphaMap?"#define USE_ALPHAMAP":"",o.alphaHash?"#define USE_ALPHAHASH":"",o.transmission?"#define USE_TRANSMISSION":"",o.transmissionMap?"#define USE_TRANSMISSIONMAP":"",o.thicknessMap?"#define USE_THICKNESSMAP":"",o.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",o.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",o.mapUv?"#define MAP_UV "+o.mapUv:"",o.alphaMapUv?"#define ALPHAMAP_UV "+o.alphaMapUv:"",o.lightMapUv?"#define LIGHTMAP_UV "+o.lightMapUv:"",o.aoMapUv?"#define AOMAP_UV "+o.aoMapUv:"",o.emissiveMapUv?"#define EMISSIVEMAP_UV "+o.emissiveMapUv:"",o.bumpMapUv?"#define BUMPMAP_UV "+o.bumpMapUv:"",o.normalMapUv?"#define NORMALMAP_UV "+o.normalMapUv:"",o.displacementMapUv?"#define DISPLACEMENTMAP_UV "+o.displacementMapUv:"",o.metalnessMapUv?"#define METALNESSMAP_UV "+o.metalnessMapUv:"",o.roughnessMapUv?"#define ROUGHNESSMAP_UV "+o.roughnessMapUv:"",o.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+o.anisotropyMapUv:"",o.clearcoatMapUv?"#define CLEARCOATMAP_UV "+o.clearcoatMapUv:"",o.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+o.clearcoatNormalMapUv:"",o.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+o.clearcoatRoughnessMapUv:"",o.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+o.iridescenceMapUv:"",o.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+o.iridescenceThicknessMapUv:"",o.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+o.sheenColorMapUv:"",o.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+o.sheenRoughnessMapUv:"",o.specularMapUv?"#define SPECULARMAP_UV "+o.specularMapUv:"",o.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+o.specularColorMapUv:"",o.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+o.specularIntensityMapUv:"",o.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+o.transmissionMapUv:"",o.thicknessMapUv?"#define THICKNESSMAP_UV "+o.thicknessMapUv:"",o.vertexTangents&&o.flatShading===!1?"#define USE_TANGENT":"",o.vertexColors?"#define USE_COLOR":"",o.vertexAlphas?"#define USE_COLOR_ALPHA":"",o.vertexUv1s?"#define USE_UV1":"",o.vertexUv2s?"#define USE_UV2":"",o.vertexUv3s?"#define USE_UV3":"",o.pointsUvs?"#define USE_POINTS_UV":"",o.flatShading?"#define FLAT_SHADED":"",o.skinning?"#define USE_SKINNING":"",o.morphTargets?"#define USE_MORPHTARGETS":"",o.morphNormals&&o.flatShading===!1?"#define USE_MORPHNORMALS":"",o.morphColors?"#define USE_MORPHCOLORS":"",o.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+o.morphTextureStride:"",o.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+o.morphTargetsCount:"",o.doubleSided?"#define DOUBLE_SIDED":"",o.flipSided?"#define FLIP_SIDED":"",o.shadowMapEnabled?"#define USE_SHADOWMAP":"",o.shadowMapEnabled?"#define "+_:"",o.sizeAttenuation?"#define USE_SIZEATTENUATION":"",o.numLightProbes>0?"#define USE_LIGHT_PROBES":"",o.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(filterEmptyLine).join(`
`),b=[generatePrecision(o),"#define SHADER_TYPE "+o.shaderType,"#define SHADER_NAME "+o.shaderName,rt,o.useFog&&o.fog?"#define USE_FOG":"",o.useFog&&o.fogExp2?"#define FOG_EXP2":"",o.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",o.map?"#define USE_MAP":"",o.matcap?"#define USE_MATCAP":"",o.envMap?"#define USE_ENVMAP":"",o.envMap?"#define "+g:"",o.envMap?"#define "+$:"",o.envMap?"#define "+_e:"",j?"#define CUBEUV_TEXEL_WIDTH "+j.texelWidth:"",j?"#define CUBEUV_TEXEL_HEIGHT "+j.texelHeight:"",j?"#define CUBEUV_MAX_MIP "+j.maxMip+".0":"",o.lightMap?"#define USE_LIGHTMAP":"",o.aoMap?"#define USE_AOMAP":"",o.bumpMap?"#define USE_BUMPMAP":"",o.normalMap?"#define USE_NORMALMAP":"",o.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",o.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",o.emissiveMap?"#define USE_EMISSIVEMAP":"",o.anisotropy?"#define USE_ANISOTROPY":"",o.anisotropyMap?"#define USE_ANISOTROPYMAP":"",o.clearcoat?"#define USE_CLEARCOAT":"",o.clearcoatMap?"#define USE_CLEARCOATMAP":"",o.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",o.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",o.dispersion?"#define USE_DISPERSION":"",o.iridescence?"#define USE_IRIDESCENCE":"",o.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",o.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",o.specularMap?"#define USE_SPECULARMAP":"",o.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",o.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",o.roughnessMap?"#define USE_ROUGHNESSMAP":"",o.metalnessMap?"#define USE_METALNESSMAP":"",o.alphaMap?"#define USE_ALPHAMAP":"",o.alphaTest?"#define USE_ALPHATEST":"",o.alphaHash?"#define USE_ALPHAHASH":"",o.sheen?"#define USE_SHEEN":"",o.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",o.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",o.transmission?"#define USE_TRANSMISSION":"",o.transmissionMap?"#define USE_TRANSMISSIONMAP":"",o.thicknessMap?"#define USE_THICKNESSMAP":"",o.vertexTangents&&o.flatShading===!1?"#define USE_TANGENT":"",o.vertexColors||o.instancingColor||o.batchingColor?"#define USE_COLOR":"",o.vertexAlphas?"#define USE_COLOR_ALPHA":"",o.vertexUv1s?"#define USE_UV1":"",o.vertexUv2s?"#define USE_UV2":"",o.vertexUv3s?"#define USE_UV3":"",o.pointsUvs?"#define USE_POINTS_UV":"",o.gradientMap?"#define USE_GRADIENTMAP":"",o.flatShading?"#define FLAT_SHADED":"",o.doubleSided?"#define DOUBLE_SIDED":"",o.flipSided?"#define FLIP_SIDED":"",o.shadowMapEnabled?"#define USE_SHADOWMAP":"",o.shadowMapEnabled?"#define "+_:"",o.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",o.numLightProbes>0?"#define USE_LIGHT_PROBES":"",o.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",o.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",o.toneMapping!==NoToneMapping?"#define TONE_MAPPING":"",o.toneMapping!==NoToneMapping?ShaderChunk.tonemapping_pars_fragment:"",o.toneMapping!==NoToneMapping?getToneMappingFunction("toneMapping",o.toneMapping):"",o.dithering?"#define DITHERING":"",o.opaque?"#define OPAQUE":"",ShaderChunk.colorspace_pars_fragment,getTexelEncodingFunction("linearToOutputTexel",o.outputColorSpace),o.useDepthPacking?"#define DEPTH_PACKING "+o.depthPacking:"",`
`].filter(filterEmptyLine).join(`
`)),d=resolveIncludes(d),d=replaceLightNums(d,o),d=replaceClippingPlaneNums(d,o),h=resolveIncludes(h),h=replaceLightNums(h,o),h=replaceClippingPlaneNums(h,o),d=unrollLoops(d),h=unrollLoops(h),o.isRawShaderMaterial!==!0&&(it=`#version 300 es
`,et=[tt,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+et,b=["#define varying in",o.glslVersion===GLSL3?"":"layout(location = 0) out highp vec4 pc_fragColor;",o.glslVersion===GLSL3?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const nt=it+et+d,ct=it+b+h,mt=WebGLShader(s,s.VERTEX_SHADER,nt),dt=WebGLShader(s,s.FRAGMENT_SHADER,ct);s.attachShader(ot,mt),s.attachShader(ot,dt),o.index0AttributeName!==void 0?s.bindAttribLocation(ot,0,o.index0AttributeName):o.morphTargets===!0&&s.bindAttribLocation(ot,0,"position"),s.linkProgram(ot);function ft(_t){if(i.debug.checkShaderErrors){const wt=s.getProgramInfoLog(ot).trim(),At=s.getShaderInfoLog(mt).trim(),Lt=s.getShaderInfoLog(dt).trim();let Dt=!0,Rt=!0;if(s.getProgramParameter(ot,s.LINK_STATUS)===!1)if(Dt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,ot,mt,dt);else{const It=getShaderErrors(s,mt,"vertex"),vt=getShaderErrors(s,dt,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(ot,s.VALIDATE_STATUS)+`

Material Name: `+_t.name+`
Material Type: `+_t.type+`

Program Info Log: `+wt+`
`+It+`
`+vt)}else wt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",wt):(At===""||Lt==="")&&(Rt=!1);Rt&&(_t.diagnostics={runnable:Dt,programLog:wt,vertexShader:{log:At,prefix:et},fragmentShader:{log:Lt,prefix:b}})}s.deleteShader(mt),s.deleteShader(dt),gt=new WebGLUniforms(s,ot),ut=fetchAttributeLocations(s,ot)}let gt;this.getUniforms=function(){return gt===void 0&&ft(this),gt};let ut;this.getAttributes=function(){return ut===void 0&&ft(this),ut};let at=o.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return at===!1&&(at=s.getProgramParameter(ot,COMPLETION_STATUS_KHR)),at},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(ot),this.program=void 0},this.type=o.shaderType,this.name=o.shaderName,this.id=programIdCount++,this.cacheKey=e,this.usedTimes=1,this.program=ot,this.vertexShader=mt,this.fragmentShader=dt,this}let _id$1=0;class WebGLShaderCache{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const o=e.vertexShader,a=e.fragmentShader,s=this._getShaderStage(o),c=this._getShaderStage(a),d=this._getShaderCacheForMaterial(e);return d.has(s)===!1&&(d.add(s),s.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const o=this.materialCache.get(e);for(const a of o)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const o=this.materialCache;let a=o.get(e);return a===void 0&&(a=new Set,o.set(e,a)),a}_getShaderStage(e){const o=this.shaderCache;let a=o.get(e);return a===void 0&&(a=new WebGLShaderStage(e),o.set(e,a)),a}}class WebGLShaderStage{constructor(e){this.id=_id$1++,this.code=e,this.usedTimes=0}}function WebGLPrograms(i,e,o,a,s,c,d){const h=new Layers,_=new WebGLShaderCache,g=new Set,$=[],_e=s.logarithmicDepthBuffer,j=s.vertexTextures;let tt=s.precision;const rt={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function ot(ut){return g.add(ut),ut===0?"uv":`uv${ut}`}function et(ut,at,_t,wt,At){const Lt=wt.fog,Dt=At.geometry,Rt=ut.isMeshStandardMaterial?wt.environment:null,It=(ut.isMeshStandardMaterial?o:e).get(ut.envMap||Rt),vt=It&&It.mapping===CubeUVReflectionMapping?It.image.height:null,Ut=rt[ut.type];ut.precision!==null&&(tt=s.getMaxPrecision(ut.precision),tt!==ut.precision&&console.warn("THREE.WebGLProgram.getParameters:",ut.precision,"not supported, using",tt,"instead."));const Ft=Dt.morphAttributes.position||Dt.morphAttributes.normal||Dt.morphAttributes.color,Ht=Ft!==void 0?Ft.length:0;let tn=0;Dt.morphAttributes.position!==void 0&&(tn=1),Dt.morphAttributes.normal!==void 0&&(tn=2),Dt.morphAttributes.color!==void 0&&(tn=3);let xn,Ct,Bt,Xt;if(Ut){const yn=ShaderLib[Ut];xn=yn.vertexShader,Ct=yn.fragmentShader}else xn=ut.vertexShader,Ct=ut.fragmentShader,_.update(ut),Bt=_.getVertexShaderID(ut),Xt=_.getFragmentShaderID(ut);const jt=i.getRenderTarget(),dn=At.isInstancedMesh===!0,mn=At.isBatchedMesh===!0,gn=!!ut.map,Rn=!!ut.matcap,pt=!!It,Ln=!!ut.aoMap,An=!!ut.lightMap,Cn=!!ut.bumpMap,nn=!!ut.normalMap,Dn=!!ut.displacementMap,un=!!ut.emissiveMap,hn=!!ut.metalnessMap,ht=!!ut.roughnessMap,st=ut.anisotropy>0,Tt=ut.clearcoat>0,kt=ut.dispersion>0,Ot=ut.iridescence>0,Nt=ut.sheen>0,rn=ut.transmission>0,$t=st&&!!ut.anisotropyMap,Kt=Tt&&!!ut.clearcoatMap,pn=Tt&&!!ut.clearcoatNormalMap,Vt=Tt&&!!ut.clearcoatRoughnessMap,qt=Ot&&!!ut.iridescenceMap,vn=Ot&&!!ut.iridescenceThicknessMap,cn=Nt&&!!ut.sheenColorMap,Zt=Nt&&!!ut.sheenRoughnessMap,fn=!!ut.specularMap,_n=!!ut.specularColorMap,wn=!!ut.specularIntensityMap,xt=rn&&!!ut.transmissionMap,zt=rn&&!!ut.thicknessMap,bt=!!ut.gradientMap,Pt=!!ut.alphaMap,Wt=ut.alphaTest>0,an=!!ut.alphaHash,Sn=!!ut.extensions;let Un=NoToneMapping;ut.toneMapped&&(jt===null||jt.isXRRenderTarget===!0)&&(Un=i.toneMapping);const Nn={shaderID:Ut,shaderType:ut.type,shaderName:ut.name,vertexShader:xn,fragmentShader:Ct,defines:ut.defines,customVertexShaderID:Bt,customFragmentShaderID:Xt,isRawShaderMaterial:ut.isRawShaderMaterial===!0,glslVersion:ut.glslVersion,precision:tt,batching:mn,batchingColor:mn&&At._colorsTexture!==null,instancing:dn,instancingColor:dn&&At.instanceColor!==null,instancingMorph:dn&&At.morphTexture!==null,supportsVertexTextures:j,outputColorSpace:jt===null?i.outputColorSpace:jt.isXRRenderTarget===!0?jt.texture.colorSpace:LinearSRGBColorSpace,alphaToCoverage:!!ut.alphaToCoverage,map:gn,matcap:Rn,envMap:pt,envMapMode:pt&&It.mapping,envMapCubeUVHeight:vt,aoMap:Ln,lightMap:An,bumpMap:Cn,normalMap:nn,displacementMap:j&&Dn,emissiveMap:un,normalMapObjectSpace:nn&&ut.normalMapType===ObjectSpaceNormalMap,normalMapTangentSpace:nn&&ut.normalMapType===TangentSpaceNormalMap,metalnessMap:hn,roughnessMap:ht,anisotropy:st,anisotropyMap:$t,clearcoat:Tt,clearcoatMap:Kt,clearcoatNormalMap:pn,clearcoatRoughnessMap:Vt,dispersion:kt,iridescence:Ot,iridescenceMap:qt,iridescenceThicknessMap:vn,sheen:Nt,sheenColorMap:cn,sheenRoughnessMap:Zt,specularMap:fn,specularColorMap:_n,specularIntensityMap:wn,transmission:rn,transmissionMap:xt,thicknessMap:zt,gradientMap:bt,opaque:ut.transparent===!1&&ut.blending===NormalBlending&&ut.alphaToCoverage===!1,alphaMap:Pt,alphaTest:Wt,alphaHash:an,combine:ut.combine,mapUv:gn&&ot(ut.map.channel),aoMapUv:Ln&&ot(ut.aoMap.channel),lightMapUv:An&&ot(ut.lightMap.channel),bumpMapUv:Cn&&ot(ut.bumpMap.channel),normalMapUv:nn&&ot(ut.normalMap.channel),displacementMapUv:Dn&&ot(ut.displacementMap.channel),emissiveMapUv:un&&ot(ut.emissiveMap.channel),metalnessMapUv:hn&&ot(ut.metalnessMap.channel),roughnessMapUv:ht&&ot(ut.roughnessMap.channel),anisotropyMapUv:$t&&ot(ut.anisotropyMap.channel),clearcoatMapUv:Kt&&ot(ut.clearcoatMap.channel),clearcoatNormalMapUv:pn&&ot(ut.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Vt&&ot(ut.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&ot(ut.iridescenceMap.channel),iridescenceThicknessMapUv:vn&&ot(ut.iridescenceThicknessMap.channel),sheenColorMapUv:cn&&ot(ut.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&ot(ut.sheenRoughnessMap.channel),specularMapUv:fn&&ot(ut.specularMap.channel),specularColorMapUv:_n&&ot(ut.specularColorMap.channel),specularIntensityMapUv:wn&&ot(ut.specularIntensityMap.channel),transmissionMapUv:xt&&ot(ut.transmissionMap.channel),thicknessMapUv:zt&&ot(ut.thicknessMap.channel),alphaMapUv:Pt&&ot(ut.alphaMap.channel),vertexTangents:!!Dt.attributes.tangent&&(nn||st),vertexColors:ut.vertexColors,vertexAlphas:ut.vertexColors===!0&&!!Dt.attributes.color&&Dt.attributes.color.itemSize===4,pointsUvs:At.isPoints===!0&&!!Dt.attributes.uv&&(gn||Pt),fog:!!Lt,useFog:ut.fog===!0,fogExp2:!!Lt&&Lt.isFogExp2,flatShading:ut.flatShading===!0,sizeAttenuation:ut.sizeAttenuation===!0,logarithmicDepthBuffer:_e,skinning:At.isSkinnedMesh===!0,morphTargets:Dt.morphAttributes.position!==void 0,morphNormals:Dt.morphAttributes.normal!==void 0,morphColors:Dt.morphAttributes.color!==void 0,morphTargetsCount:Ht,morphTextureStride:tn,numDirLights:at.directional.length,numPointLights:at.point.length,numSpotLights:at.spot.length,numSpotLightMaps:at.spotLightMap.length,numRectAreaLights:at.rectArea.length,numHemiLights:at.hemi.length,numDirLightShadows:at.directionalShadowMap.length,numPointLightShadows:at.pointShadowMap.length,numSpotLightShadows:at.spotShadowMap.length,numSpotLightShadowsWithMaps:at.numSpotLightShadowsWithMaps,numLightProbes:at.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:ut.dithering,shadowMapEnabled:i.shadowMap.enabled&&_t.length>0,shadowMapType:i.shadowMap.type,toneMapping:Un,decodeVideoTexture:gn&&ut.map.isVideoTexture===!0&&ColorManagement.getTransfer(ut.map.colorSpace)===SRGBTransfer,premultipliedAlpha:ut.premultipliedAlpha,doubleSided:ut.side===DoubleSide,flipSided:ut.side===BackSide,useDepthPacking:ut.depthPacking>=0,depthPacking:ut.depthPacking||0,index0AttributeName:ut.index0AttributeName,extensionClipCullDistance:Sn&&ut.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Sn&&ut.extensions.multiDraw===!0||mn)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:ut.customProgramCacheKey()};return Nn.vertexUv1s=g.has(1),Nn.vertexUv2s=g.has(2),Nn.vertexUv3s=g.has(3),g.clear(),Nn}function b(ut){const at=[];if(ut.shaderID?at.push(ut.shaderID):(at.push(ut.customVertexShaderID),at.push(ut.customFragmentShaderID)),ut.defines!==void 0)for(const _t in ut.defines)at.push(_t),at.push(ut.defines[_t]);return ut.isRawShaderMaterial===!1&&(it(at,ut),nt(at,ut),at.push(i.outputColorSpace)),at.push(ut.customProgramCacheKey),at.join()}function it(ut,at){ut.push(at.precision),ut.push(at.outputColorSpace),ut.push(at.envMapMode),ut.push(at.envMapCubeUVHeight),ut.push(at.mapUv),ut.push(at.alphaMapUv),ut.push(at.lightMapUv),ut.push(at.aoMapUv),ut.push(at.bumpMapUv),ut.push(at.normalMapUv),ut.push(at.displacementMapUv),ut.push(at.emissiveMapUv),ut.push(at.metalnessMapUv),ut.push(at.roughnessMapUv),ut.push(at.anisotropyMapUv),ut.push(at.clearcoatMapUv),ut.push(at.clearcoatNormalMapUv),ut.push(at.clearcoatRoughnessMapUv),ut.push(at.iridescenceMapUv),ut.push(at.iridescenceThicknessMapUv),ut.push(at.sheenColorMapUv),ut.push(at.sheenRoughnessMapUv),ut.push(at.specularMapUv),ut.push(at.specularColorMapUv),ut.push(at.specularIntensityMapUv),ut.push(at.transmissionMapUv),ut.push(at.thicknessMapUv),ut.push(at.combine),ut.push(at.fogExp2),ut.push(at.sizeAttenuation),ut.push(at.morphTargetsCount),ut.push(at.morphAttributeCount),ut.push(at.numDirLights),ut.push(at.numPointLights),ut.push(at.numSpotLights),ut.push(at.numSpotLightMaps),ut.push(at.numHemiLights),ut.push(at.numRectAreaLights),ut.push(at.numDirLightShadows),ut.push(at.numPointLightShadows),ut.push(at.numSpotLightShadows),ut.push(at.numSpotLightShadowsWithMaps),ut.push(at.numLightProbes),ut.push(at.shadowMapType),ut.push(at.toneMapping),ut.push(at.numClippingPlanes),ut.push(at.numClipIntersection),ut.push(at.depthPacking)}function nt(ut,at){h.disableAll(),at.supportsVertexTextures&&h.enable(0),at.instancing&&h.enable(1),at.instancingColor&&h.enable(2),at.instancingMorph&&h.enable(3),at.matcap&&h.enable(4),at.envMap&&h.enable(5),at.normalMapObjectSpace&&h.enable(6),at.normalMapTangentSpace&&h.enable(7),at.clearcoat&&h.enable(8),at.iridescence&&h.enable(9),at.alphaTest&&h.enable(10),at.vertexColors&&h.enable(11),at.vertexAlphas&&h.enable(12),at.vertexUv1s&&h.enable(13),at.vertexUv2s&&h.enable(14),at.vertexUv3s&&h.enable(15),at.vertexTangents&&h.enable(16),at.anisotropy&&h.enable(17),at.alphaHash&&h.enable(18),at.batching&&h.enable(19),at.dispersion&&h.enable(20),at.batchingColor&&h.enable(21),ut.push(h.mask),h.disableAll(),at.fog&&h.enable(0),at.useFog&&h.enable(1),at.flatShading&&h.enable(2),at.logarithmicDepthBuffer&&h.enable(3),at.skinning&&h.enable(4),at.morphTargets&&h.enable(5),at.morphNormals&&h.enable(6),at.morphColors&&h.enable(7),at.premultipliedAlpha&&h.enable(8),at.shadowMapEnabled&&h.enable(9),at.doubleSided&&h.enable(10),at.flipSided&&h.enable(11),at.useDepthPacking&&h.enable(12),at.dithering&&h.enable(13),at.transmission&&h.enable(14),at.sheen&&h.enable(15),at.opaque&&h.enable(16),at.pointsUvs&&h.enable(17),at.decodeVideoTexture&&h.enable(18),at.alphaToCoverage&&h.enable(19),ut.push(h.mask)}function ct(ut){const at=rt[ut.type];let _t;if(at){const wt=ShaderLib[at];_t=UniformsUtils.clone(wt.uniforms)}else _t=ut.uniforms;return _t}function mt(ut,at){let _t;for(let wt=0,At=$.length;wt<At;wt++){const Lt=$[wt];if(Lt.cacheKey===at){_t=Lt,++_t.usedTimes;break}}return _t===void 0&&(_t=new WebGLProgram(i,at,ut,c),$.push(_t)),_t}function dt(ut){if(--ut.usedTimes===0){const at=$.indexOf(ut);$[at]=$[$.length-1],$.pop(),ut.destroy()}}function ft(ut){_.remove(ut)}function gt(){_.dispose()}return{getParameters:et,getProgramCacheKey:b,getUniforms:ct,acquireProgram:mt,releaseProgram:dt,releaseShaderCache:ft,programs:$,dispose:gt}}function WebGLProperties(){let i=new WeakMap;function e(c){let d=i.get(c);return d===void 0&&(d={},i.set(c,d)),d}function o(c){i.delete(c)}function a(c,d,h){i.get(c)[d]=h}function s(){i=new WeakMap}return{get:e,remove:o,update:a,dispose:s}}function painterSortStable(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function reversePainterSortStable(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function WebGLRenderList(){const i=[];let e=0;const o=[],a=[],s=[];function c(){e=0,o.length=0,a.length=0,s.length=0}function d(_e,j,tt,rt,ot,et){let b=i[e];return b===void 0?(b={id:_e.id,object:_e,geometry:j,material:tt,groupOrder:rt,renderOrder:_e.renderOrder,z:ot,group:et},i[e]=b):(b.id=_e.id,b.object=_e,b.geometry=j,b.material=tt,b.groupOrder=rt,b.renderOrder=_e.renderOrder,b.z=ot,b.group=et),e++,b}function h(_e,j,tt,rt,ot,et){const b=d(_e,j,tt,rt,ot,et);tt.transmission>0?a.push(b):tt.transparent===!0?s.push(b):o.push(b)}function _(_e,j,tt,rt,ot,et){const b=d(_e,j,tt,rt,ot,et);tt.transmission>0?a.unshift(b):tt.transparent===!0?s.unshift(b):o.unshift(b)}function g(_e,j){o.length>1&&o.sort(_e||painterSortStable),a.length>1&&a.sort(j||reversePainterSortStable),s.length>1&&s.sort(j||reversePainterSortStable)}function $(){for(let _e=e,j=i.length;_e<j;_e++){const tt=i[_e];if(tt.id===null)break;tt.id=null,tt.object=null,tt.geometry=null,tt.material=null,tt.group=null}}return{opaque:o,transmissive:a,transparent:s,init:c,push:h,unshift:_,finish:$,sort:g}}function WebGLRenderLists(){let i=new WeakMap;function e(a,s){const c=i.get(a);let d;return c===void 0?(d=new WebGLRenderList,i.set(a,[d])):s>=c.length?(d=new WebGLRenderList,c.push(d)):d=c[s],d}function o(){i=new WeakMap}return{get:e,dispose:o}}function UniformsCache(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let o;switch(e.type){case"DirectionalLight":o={direction:new Vector3,color:new Color};break;case"SpotLight":o={position:new Vector3,direction:new Vector3,color:new Color,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":o={position:new Vector3,color:new Color,distance:0,decay:0};break;case"HemisphereLight":o={direction:new Vector3,skyColor:new Color,groundColor:new Color};break;case"RectAreaLight":o={color:new Color,position:new Vector3,halfWidth:new Vector3,halfHeight:new Vector3};break}return i[e.id]=o,o}}}function ShadowUniformsCache(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let o;switch(e.type){case"DirectionalLight":o={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"SpotLight":o={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"PointLight":o={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=o,o}}}let nextVersion=0;function shadowCastingAndTexturingLightsFirst(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function WebGLLights(i){const e=new UniformsCache,o=ShadowUniformsCache(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)a.probe.push(new Vector3);const s=new Vector3,c=new Matrix4,d=new Matrix4;function h(g){let $=0,_e=0,j=0;for(let ut=0;ut<9;ut++)a.probe[ut].set(0,0,0);let tt=0,rt=0,ot=0,et=0,b=0,it=0,nt=0,ct=0,mt=0,dt=0,ft=0;g.sort(shadowCastingAndTexturingLightsFirst);for(let ut=0,at=g.length;ut<at;ut++){const _t=g[ut],wt=_t.color,At=_t.intensity,Lt=_t.distance,Dt=_t.shadow&&_t.shadow.map?_t.shadow.map.texture:null;if(_t.isAmbientLight)$+=wt.r*At,_e+=wt.g*At,j+=wt.b*At;else if(_t.isLightProbe){for(let Rt=0;Rt<9;Rt++)a.probe[Rt].addScaledVector(_t.sh.coefficients[Rt],At);ft++}else if(_t.isDirectionalLight){const Rt=e.get(_t);if(Rt.color.copy(_t.color).multiplyScalar(_t.intensity),_t.castShadow){const It=_t.shadow,vt=o.get(_t);vt.shadowIntensity=It.intensity,vt.shadowBias=It.bias,vt.shadowNormalBias=It.normalBias,vt.shadowRadius=It.radius,vt.shadowMapSize=It.mapSize,a.directionalShadow[tt]=vt,a.directionalShadowMap[tt]=Dt,a.directionalShadowMatrix[tt]=_t.shadow.matrix,it++}a.directional[tt]=Rt,tt++}else if(_t.isSpotLight){const Rt=e.get(_t);Rt.position.setFromMatrixPosition(_t.matrixWorld),Rt.color.copy(wt).multiplyScalar(At),Rt.distance=Lt,Rt.coneCos=Math.cos(_t.angle),Rt.penumbraCos=Math.cos(_t.angle*(1-_t.penumbra)),Rt.decay=_t.decay,a.spot[ot]=Rt;const It=_t.shadow;if(_t.map&&(a.spotLightMap[mt]=_t.map,mt++,It.updateMatrices(_t),_t.castShadow&&dt++),a.spotLightMatrix[ot]=It.matrix,_t.castShadow){const vt=o.get(_t);vt.shadowIntensity=It.intensity,vt.shadowBias=It.bias,vt.shadowNormalBias=It.normalBias,vt.shadowRadius=It.radius,vt.shadowMapSize=It.mapSize,a.spotShadow[ot]=vt,a.spotShadowMap[ot]=Dt,ct++}ot++}else if(_t.isRectAreaLight){const Rt=e.get(_t);Rt.color.copy(wt).multiplyScalar(At),Rt.halfWidth.set(_t.width*.5,0,0),Rt.halfHeight.set(0,_t.height*.5,0),a.rectArea[et]=Rt,et++}else if(_t.isPointLight){const Rt=e.get(_t);if(Rt.color.copy(_t.color).multiplyScalar(_t.intensity),Rt.distance=_t.distance,Rt.decay=_t.decay,_t.castShadow){const It=_t.shadow,vt=o.get(_t);vt.shadowIntensity=It.intensity,vt.shadowBias=It.bias,vt.shadowNormalBias=It.normalBias,vt.shadowRadius=It.radius,vt.shadowMapSize=It.mapSize,vt.shadowCameraNear=It.camera.near,vt.shadowCameraFar=It.camera.far,a.pointShadow[rt]=vt,a.pointShadowMap[rt]=Dt,a.pointShadowMatrix[rt]=_t.shadow.matrix,nt++}a.point[rt]=Rt,rt++}else if(_t.isHemisphereLight){const Rt=e.get(_t);Rt.skyColor.copy(_t.color).multiplyScalar(At),Rt.groundColor.copy(_t.groundColor).multiplyScalar(At),a.hemi[b]=Rt,b++}}et>0&&(i.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=UniformsLib.LTC_FLOAT_1,a.rectAreaLTC2=UniformsLib.LTC_FLOAT_2):(a.rectAreaLTC1=UniformsLib.LTC_HALF_1,a.rectAreaLTC2=UniformsLib.LTC_HALF_2)),a.ambient[0]=$,a.ambient[1]=_e,a.ambient[2]=j;const gt=a.hash;(gt.directionalLength!==tt||gt.pointLength!==rt||gt.spotLength!==ot||gt.rectAreaLength!==et||gt.hemiLength!==b||gt.numDirectionalShadows!==it||gt.numPointShadows!==nt||gt.numSpotShadows!==ct||gt.numSpotMaps!==mt||gt.numLightProbes!==ft)&&(a.directional.length=tt,a.spot.length=ot,a.rectArea.length=et,a.point.length=rt,a.hemi.length=b,a.directionalShadow.length=it,a.directionalShadowMap.length=it,a.pointShadow.length=nt,a.pointShadowMap.length=nt,a.spotShadow.length=ct,a.spotShadowMap.length=ct,a.directionalShadowMatrix.length=it,a.pointShadowMatrix.length=nt,a.spotLightMatrix.length=ct+mt-dt,a.spotLightMap.length=mt,a.numSpotLightShadowsWithMaps=dt,a.numLightProbes=ft,gt.directionalLength=tt,gt.pointLength=rt,gt.spotLength=ot,gt.rectAreaLength=et,gt.hemiLength=b,gt.numDirectionalShadows=it,gt.numPointShadows=nt,gt.numSpotShadows=ct,gt.numSpotMaps=mt,gt.numLightProbes=ft,a.version=nextVersion++)}function _(g,$){let _e=0,j=0,tt=0,rt=0,ot=0;const et=$.matrixWorldInverse;for(let b=0,it=g.length;b<it;b++){const nt=g[b];if(nt.isDirectionalLight){const ct=a.directional[_e];ct.direction.setFromMatrixPosition(nt.matrixWorld),s.setFromMatrixPosition(nt.target.matrixWorld),ct.direction.sub(s),ct.direction.transformDirection(et),_e++}else if(nt.isSpotLight){const ct=a.spot[tt];ct.position.setFromMatrixPosition(nt.matrixWorld),ct.position.applyMatrix4(et),ct.direction.setFromMatrixPosition(nt.matrixWorld),s.setFromMatrixPosition(nt.target.matrixWorld),ct.direction.sub(s),ct.direction.transformDirection(et),tt++}else if(nt.isRectAreaLight){const ct=a.rectArea[rt];ct.position.setFromMatrixPosition(nt.matrixWorld),ct.position.applyMatrix4(et),d.identity(),c.copy(nt.matrixWorld),c.premultiply(et),d.extractRotation(c),ct.halfWidth.set(nt.width*.5,0,0),ct.halfHeight.set(0,nt.height*.5,0),ct.halfWidth.applyMatrix4(d),ct.halfHeight.applyMatrix4(d),rt++}else if(nt.isPointLight){const ct=a.point[j];ct.position.setFromMatrixPosition(nt.matrixWorld),ct.position.applyMatrix4(et),j++}else if(nt.isHemisphereLight){const ct=a.hemi[ot];ct.direction.setFromMatrixPosition(nt.matrixWorld),ct.direction.transformDirection(et),ot++}}}return{setup:h,setupView:_,state:a}}function WebGLRenderState(i){const e=new WebGLLights(i),o=[],a=[];function s($){g.camera=$,o.length=0,a.length=0}function c($){o.push($)}function d($){a.push($)}function h(){e.setup(o)}function _($){e.setupView(o,$)}const g={lightsArray:o,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:g,setupLights:h,setupLightsView:_,pushLight:c,pushShadow:d}}function WebGLRenderStates(i){let e=new WeakMap;function o(s,c=0){const d=e.get(s);let h;return d===void 0?(h=new WebGLRenderState(i),e.set(s,[h])):c>=d.length?(h=new WebGLRenderState(i),d.push(h)):h=d[c],h}function a(){e=new WeakMap}return{get:o,dispose:a}}class MeshDepthMaterial extends Material{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BasicDepthPacking,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MeshDistanceMaterial extends Material{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vertex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragment=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WebGLShadowMap(i,e,o){let a=new Frustum;const s=new Vector2,c=new Vector2,d=new Vector4,h=new MeshDepthMaterial({depthPacking:RGBADepthPacking}),_=new MeshDistanceMaterial,g={},$=o.maxTextureSize,_e={[FrontSide]:BackSide,[BackSide]:FrontSide,[DoubleSide]:DoubleSide},j=new ShaderMaterial({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vector2},radius:{value:4}},vertexShader:vertex,fragmentShader:fragment}),tt=j.clone();tt.defines.HORIZONTAL_PASS=1;const rt=new BufferGeometry;rt.setAttribute("position",new BufferAttribute(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const ot=new Mesh(rt,j),et=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=PCFShadowMap;let b=this.type;this.render=function(dt,ft,gt){if(et.enabled===!1||et.autoUpdate===!1&&et.needsUpdate===!1||dt.length===0)return;const ut=i.getRenderTarget(),at=i.getActiveCubeFace(),_t=i.getActiveMipmapLevel(),wt=i.state;wt.setBlending(NoBlending),wt.buffers.color.setClear(1,1,1,1),wt.buffers.depth.setTest(!0),wt.setScissorTest(!1);const At=b!==VSMShadowMap&&this.type===VSMShadowMap,Lt=b===VSMShadowMap&&this.type!==VSMShadowMap;for(let Dt=0,Rt=dt.length;Dt<Rt;Dt++){const It=dt[Dt],vt=It.shadow;if(vt===void 0){console.warn("THREE.WebGLShadowMap:",It,"has no shadow.");continue}if(vt.autoUpdate===!1&&vt.needsUpdate===!1)continue;s.copy(vt.mapSize);const Ut=vt.getFrameExtents();if(s.multiply(Ut),c.copy(vt.mapSize),(s.x>$||s.y>$)&&(s.x>$&&(c.x=Math.floor($/Ut.x),s.x=c.x*Ut.x,vt.mapSize.x=c.x),s.y>$&&(c.y=Math.floor($/Ut.y),s.y=c.y*Ut.y,vt.mapSize.y=c.y)),vt.map===null||At===!0||Lt===!0){const Ht=this.type!==VSMShadowMap?{minFilter:NearestFilter,magFilter:NearestFilter}:{};vt.map!==null&&vt.map.dispose(),vt.map=new WebGLRenderTarget(s.x,s.y,Ht),vt.map.texture.name=It.name+".shadowMap",vt.camera.updateProjectionMatrix()}i.setRenderTarget(vt.map),i.clear();const Ft=vt.getViewportCount();for(let Ht=0;Ht<Ft;Ht++){const tn=vt.getViewport(Ht);d.set(c.x*tn.x,c.y*tn.y,c.x*tn.z,c.y*tn.w),wt.viewport(d),vt.updateMatrices(It,Ht),a=vt.getFrustum(),ct(ft,gt,vt.camera,It,this.type)}vt.isPointLightShadow!==!0&&this.type===VSMShadowMap&&it(vt,gt),vt.needsUpdate=!1}b=this.type,et.needsUpdate=!1,i.setRenderTarget(ut,at,_t)};function it(dt,ft){const gt=e.update(ot);j.defines.VSM_SAMPLES!==dt.blurSamples&&(j.defines.VSM_SAMPLES=dt.blurSamples,tt.defines.VSM_SAMPLES=dt.blurSamples,j.needsUpdate=!0,tt.needsUpdate=!0),dt.mapPass===null&&(dt.mapPass=new WebGLRenderTarget(s.x,s.y)),j.uniforms.shadow_pass.value=dt.map.texture,j.uniforms.resolution.value=dt.mapSize,j.uniforms.radius.value=dt.radius,i.setRenderTarget(dt.mapPass),i.clear(),i.renderBufferDirect(ft,null,gt,j,ot,null),tt.uniforms.shadow_pass.value=dt.mapPass.texture,tt.uniforms.resolution.value=dt.mapSize,tt.uniforms.radius.value=dt.radius,i.setRenderTarget(dt.map),i.clear(),i.renderBufferDirect(ft,null,gt,tt,ot,null)}function nt(dt,ft,gt,ut){let at=null;const _t=gt.isPointLight===!0?dt.customDistanceMaterial:dt.customDepthMaterial;if(_t!==void 0)at=_t;else if(at=gt.isPointLight===!0?_:h,i.localClippingEnabled&&ft.clipShadows===!0&&Array.isArray(ft.clippingPlanes)&&ft.clippingPlanes.length!==0||ft.displacementMap&&ft.displacementScale!==0||ft.alphaMap&&ft.alphaTest>0||ft.map&&ft.alphaTest>0){const wt=at.uuid,At=ft.uuid;let Lt=g[wt];Lt===void 0&&(Lt={},g[wt]=Lt);let Dt=Lt[At];Dt===void 0&&(Dt=at.clone(),Lt[At]=Dt,ft.addEventListener("dispose",mt)),at=Dt}if(at.visible=ft.visible,at.wireframe=ft.wireframe,ut===VSMShadowMap?at.side=ft.shadowSide!==null?ft.shadowSide:ft.side:at.side=ft.shadowSide!==null?ft.shadowSide:_e[ft.side],at.alphaMap=ft.alphaMap,at.alphaTest=ft.alphaTest,at.map=ft.map,at.clipShadows=ft.clipShadows,at.clippingPlanes=ft.clippingPlanes,at.clipIntersection=ft.clipIntersection,at.displacementMap=ft.displacementMap,at.displacementScale=ft.displacementScale,at.displacementBias=ft.displacementBias,at.wireframeLinewidth=ft.wireframeLinewidth,at.linewidth=ft.linewidth,gt.isPointLight===!0&&at.isMeshDistanceMaterial===!0){const wt=i.properties.get(at);wt.light=gt}return at}function ct(dt,ft,gt,ut,at){if(dt.visible===!1)return;if(dt.layers.test(ft.layers)&&(dt.isMesh||dt.isLine||dt.isPoints)&&(dt.castShadow||dt.receiveShadow&&at===VSMShadowMap)&&(!dt.frustumCulled||a.intersectsObject(dt))){dt.modelViewMatrix.multiplyMatrices(gt.matrixWorldInverse,dt.matrixWorld);const At=e.update(dt),Lt=dt.material;if(Array.isArray(Lt)){const Dt=At.groups;for(let Rt=0,It=Dt.length;Rt<It;Rt++){const vt=Dt[Rt],Ut=Lt[vt.materialIndex];if(Ut&&Ut.visible){const Ft=nt(dt,Ut,ut,at);dt.onBeforeShadow(i,dt,ft,gt,At,Ft,vt),i.renderBufferDirect(gt,null,At,Ft,dt,vt),dt.onAfterShadow(i,dt,ft,gt,At,Ft,vt)}}}else if(Lt.visible){const Dt=nt(dt,Lt,ut,at);dt.onBeforeShadow(i,dt,ft,gt,At,Dt,null),i.renderBufferDirect(gt,null,At,Dt,dt,null),dt.onAfterShadow(i,dt,ft,gt,At,Dt,null)}}const wt=dt.children;for(let At=0,Lt=wt.length;At<Lt;At++)ct(wt[At],ft,gt,ut,at)}function mt(dt){dt.target.removeEventListener("dispose",mt);for(const gt in g){const ut=g[gt],at=dt.target.uuid;at in ut&&(ut[at].dispose(),delete ut[at])}}}function WebGLState(i){function e(){let xt=!1;const zt=new Vector4;let bt=null;const Pt=new Vector4(0,0,0,0);return{setMask:function(Wt){bt!==Wt&&!xt&&(i.colorMask(Wt,Wt,Wt,Wt),bt=Wt)},setLocked:function(Wt){xt=Wt},setClear:function(Wt,an,Sn,Un,Nn){Nn===!0&&(Wt*=Un,an*=Un,Sn*=Un),zt.set(Wt,an,Sn,Un),Pt.equals(zt)===!1&&(i.clearColor(Wt,an,Sn,Un),Pt.copy(zt))},reset:function(){xt=!1,bt=null,Pt.set(-1,0,0,0)}}}function o(){let xt=!1,zt=null,bt=null,Pt=null;return{setTest:function(Wt){Wt?Xt(i.DEPTH_TEST):jt(i.DEPTH_TEST)},setMask:function(Wt){zt!==Wt&&!xt&&(i.depthMask(Wt),zt=Wt)},setFunc:function(Wt){if(bt!==Wt){switch(Wt){case NeverDepth:i.depthFunc(i.NEVER);break;case AlwaysDepth:i.depthFunc(i.ALWAYS);break;case LessDepth:i.depthFunc(i.LESS);break;case LessEqualDepth:i.depthFunc(i.LEQUAL);break;case EqualDepth:i.depthFunc(i.EQUAL);break;case GreaterEqualDepth:i.depthFunc(i.GEQUAL);break;case GreaterDepth:i.depthFunc(i.GREATER);break;case NotEqualDepth:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}bt=Wt}},setLocked:function(Wt){xt=Wt},setClear:function(Wt){Pt!==Wt&&(i.clearDepth(Wt),Pt=Wt)},reset:function(){xt=!1,zt=null,bt=null,Pt=null}}}function a(){let xt=!1,zt=null,bt=null,Pt=null,Wt=null,an=null,Sn=null,Un=null,Nn=null;return{setTest:function(yn){xt||(yn?Xt(i.STENCIL_TEST):jt(i.STENCIL_TEST))},setMask:function(yn){zt!==yn&&!xt&&(i.stencilMask(yn),zt=yn)},setFunc:function(yn,Gn,zn){(bt!==yn||Pt!==Gn||Wt!==zn)&&(i.stencilFunc(yn,Gn,zn),bt=yn,Pt=Gn,Wt=zn)},setOp:function(yn,Gn,zn){(an!==yn||Sn!==Gn||Un!==zn)&&(i.stencilOp(yn,Gn,zn),an=yn,Sn=Gn,Un=zn)},setLocked:function(yn){xt=yn},setClear:function(yn){Nn!==yn&&(i.clearStencil(yn),Nn=yn)},reset:function(){xt=!1,zt=null,bt=null,Pt=null,Wt=null,an=null,Sn=null,Un=null,Nn=null}}}const s=new e,c=new o,d=new a,h=new WeakMap,_=new WeakMap;let g={},$={},_e=new WeakMap,j=[],tt=null,rt=!1,ot=null,et=null,b=null,it=null,nt=null,ct=null,mt=null,dt=new Color(0,0,0),ft=0,gt=!1,ut=null,at=null,_t=null,wt=null,At=null;const Lt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Dt=!1,Rt=0;const It=i.getParameter(i.VERSION);It.indexOf("WebGL")!==-1?(Rt=parseFloat(/^WebGL (\d)/.exec(It)[1]),Dt=Rt>=1):It.indexOf("OpenGL ES")!==-1&&(Rt=parseFloat(/^OpenGL ES (\d)/.exec(It)[1]),Dt=Rt>=2);let vt=null,Ut={};const Ft=i.getParameter(i.SCISSOR_BOX),Ht=i.getParameter(i.VIEWPORT),tn=new Vector4().fromArray(Ft),xn=new Vector4().fromArray(Ht);function Ct(xt,zt,bt,Pt){const Wt=new Uint8Array(4),an=i.createTexture();i.bindTexture(xt,an),i.texParameteri(xt,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(xt,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Sn=0;Sn<bt;Sn++)xt===i.TEXTURE_3D||xt===i.TEXTURE_2D_ARRAY?i.texImage3D(zt,0,i.RGBA,1,1,Pt,0,i.RGBA,i.UNSIGNED_BYTE,Wt):i.texImage2D(zt+Sn,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Wt);return an}const Bt={};Bt[i.TEXTURE_2D]=Ct(i.TEXTURE_2D,i.TEXTURE_2D,1),Bt[i.TEXTURE_CUBE_MAP]=Ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Bt[i.TEXTURE_2D_ARRAY]=Ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Bt[i.TEXTURE_3D]=Ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),c.setClear(1),d.setClear(0),Xt(i.DEPTH_TEST),c.setFunc(LessEqualDepth),Cn(!1),nn(CullFaceBack),Xt(i.CULL_FACE),Ln(NoBlending);function Xt(xt){g[xt]!==!0&&(i.enable(xt),g[xt]=!0)}function jt(xt){g[xt]!==!1&&(i.disable(xt),g[xt]=!1)}function dn(xt,zt){return $[xt]!==zt?(i.bindFramebuffer(xt,zt),$[xt]=zt,xt===i.DRAW_FRAMEBUFFER&&($[i.FRAMEBUFFER]=zt),xt===i.FRAMEBUFFER&&($[i.DRAW_FRAMEBUFFER]=zt),!0):!1}function mn(xt,zt){let bt=j,Pt=!1;if(xt){bt=_e.get(zt),bt===void 0&&(bt=[],_e.set(zt,bt));const Wt=xt.textures;if(bt.length!==Wt.length||bt[0]!==i.COLOR_ATTACHMENT0){for(let an=0,Sn=Wt.length;an<Sn;an++)bt[an]=i.COLOR_ATTACHMENT0+an;bt.length=Wt.length,Pt=!0}}else bt[0]!==i.BACK&&(bt[0]=i.BACK,Pt=!0);Pt&&i.drawBuffers(bt)}function gn(xt){return tt!==xt?(i.useProgram(xt),tt=xt,!0):!1}const Rn={[AddEquation]:i.FUNC_ADD,[SubtractEquation]:i.FUNC_SUBTRACT,[ReverseSubtractEquation]:i.FUNC_REVERSE_SUBTRACT};Rn[MinEquation]=i.MIN,Rn[MaxEquation]=i.MAX;const pt={[ZeroFactor]:i.ZERO,[OneFactor]:i.ONE,[SrcColorFactor]:i.SRC_COLOR,[SrcAlphaFactor]:i.SRC_ALPHA,[SrcAlphaSaturateFactor]:i.SRC_ALPHA_SATURATE,[DstColorFactor]:i.DST_COLOR,[DstAlphaFactor]:i.DST_ALPHA,[OneMinusSrcColorFactor]:i.ONE_MINUS_SRC_COLOR,[OneMinusSrcAlphaFactor]:i.ONE_MINUS_SRC_ALPHA,[OneMinusDstColorFactor]:i.ONE_MINUS_DST_COLOR,[OneMinusDstAlphaFactor]:i.ONE_MINUS_DST_ALPHA,[ConstantColorFactor]:i.CONSTANT_COLOR,[OneMinusConstantColorFactor]:i.ONE_MINUS_CONSTANT_COLOR,[ConstantAlphaFactor]:i.CONSTANT_ALPHA,[OneMinusConstantAlphaFactor]:i.ONE_MINUS_CONSTANT_ALPHA};function Ln(xt,zt,bt,Pt,Wt,an,Sn,Un,Nn,yn){if(xt===NoBlending){rt===!0&&(jt(i.BLEND),rt=!1);return}if(rt===!1&&(Xt(i.BLEND),rt=!0),xt!==CustomBlending){if(xt!==ot||yn!==gt){if((et!==AddEquation||nt!==AddEquation)&&(i.blendEquation(i.FUNC_ADD),et=AddEquation,nt=AddEquation),yn)switch(xt){case NormalBlending:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:i.blendFunc(i.ONE,i.ONE);break;case SubtractiveBlending:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case MultiplyBlending:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",xt);break}else switch(xt){case NormalBlending:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case SubtractiveBlending:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case MultiplyBlending:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",xt);break}b=null,it=null,ct=null,mt=null,dt.set(0,0,0),ft=0,ot=xt,gt=yn}return}Wt=Wt||zt,an=an||bt,Sn=Sn||Pt,(zt!==et||Wt!==nt)&&(i.blendEquationSeparate(Rn[zt],Rn[Wt]),et=zt,nt=Wt),(bt!==b||Pt!==it||an!==ct||Sn!==mt)&&(i.blendFuncSeparate(pt[bt],pt[Pt],pt[an],pt[Sn]),b=bt,it=Pt,ct=an,mt=Sn),(Un.equals(dt)===!1||Nn!==ft)&&(i.blendColor(Un.r,Un.g,Un.b,Nn),dt.copy(Un),ft=Nn),ot=xt,gt=!1}function An(xt,zt){xt.side===DoubleSide?jt(i.CULL_FACE):Xt(i.CULL_FACE);let bt=xt.side===BackSide;zt&&(bt=!bt),Cn(bt),xt.blending===NormalBlending&&xt.transparent===!1?Ln(NoBlending):Ln(xt.blending,xt.blendEquation,xt.blendSrc,xt.blendDst,xt.blendEquationAlpha,xt.blendSrcAlpha,xt.blendDstAlpha,xt.blendColor,xt.blendAlpha,xt.premultipliedAlpha),c.setFunc(xt.depthFunc),c.setTest(xt.depthTest),c.setMask(xt.depthWrite),s.setMask(xt.colorWrite);const Pt=xt.stencilWrite;d.setTest(Pt),Pt&&(d.setMask(xt.stencilWriteMask),d.setFunc(xt.stencilFunc,xt.stencilRef,xt.stencilFuncMask),d.setOp(xt.stencilFail,xt.stencilZFail,xt.stencilZPass)),un(xt.polygonOffset,xt.polygonOffsetFactor,xt.polygonOffsetUnits),xt.alphaToCoverage===!0?Xt(i.SAMPLE_ALPHA_TO_COVERAGE):jt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Cn(xt){ut!==xt&&(xt?i.frontFace(i.CW):i.frontFace(i.CCW),ut=xt)}function nn(xt){xt!==CullFaceNone?(Xt(i.CULL_FACE),xt!==at&&(xt===CullFaceBack?i.cullFace(i.BACK):xt===CullFaceFront?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):jt(i.CULL_FACE),at=xt}function Dn(xt){xt!==_t&&(Dt&&i.lineWidth(xt),_t=xt)}function un(xt,zt,bt){xt?(Xt(i.POLYGON_OFFSET_FILL),(wt!==zt||At!==bt)&&(i.polygonOffset(zt,bt),wt=zt,At=bt)):jt(i.POLYGON_OFFSET_FILL)}function hn(xt){xt?Xt(i.SCISSOR_TEST):jt(i.SCISSOR_TEST)}function ht(xt){xt===void 0&&(xt=i.TEXTURE0+Lt-1),vt!==xt&&(i.activeTexture(xt),vt=xt)}function st(xt,zt,bt){bt===void 0&&(vt===null?bt=i.TEXTURE0+Lt-1:bt=vt);let Pt=Ut[bt];Pt===void 0&&(Pt={type:void 0,texture:void 0},Ut[bt]=Pt),(Pt.type!==xt||Pt.texture!==zt)&&(vt!==bt&&(i.activeTexture(bt),vt=bt),i.bindTexture(xt,zt||Bt[xt]),Pt.type=xt,Pt.texture=zt)}function Tt(){const xt=Ut[vt];xt!==void 0&&xt.type!==void 0&&(i.bindTexture(xt.type,null),xt.type=void 0,xt.texture=void 0)}function kt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(xt){console.error("THREE.WebGLState:",xt)}}function Ot(){try{i.compressedTexImage3D.apply(i,arguments)}catch(xt){console.error("THREE.WebGLState:",xt)}}function Nt(){try{i.texSubImage2D.apply(i,arguments)}catch(xt){console.error("THREE.WebGLState:",xt)}}function rn(){try{i.texSubImage3D.apply(i,arguments)}catch(xt){console.error("THREE.WebGLState:",xt)}}function $t(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(xt){console.error("THREE.WebGLState:",xt)}}function Kt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(xt){console.error("THREE.WebGLState:",xt)}}function pn(){try{i.texStorage2D.apply(i,arguments)}catch(xt){console.error("THREE.WebGLState:",xt)}}function Vt(){try{i.texStorage3D.apply(i,arguments)}catch(xt){console.error("THREE.WebGLState:",xt)}}function qt(){try{i.texImage2D.apply(i,arguments)}catch(xt){console.error("THREE.WebGLState:",xt)}}function vn(){try{i.texImage3D.apply(i,arguments)}catch(xt){console.error("THREE.WebGLState:",xt)}}function cn(xt){tn.equals(xt)===!1&&(i.scissor(xt.x,xt.y,xt.z,xt.w),tn.copy(xt))}function Zt(xt){xn.equals(xt)===!1&&(i.viewport(xt.x,xt.y,xt.z,xt.w),xn.copy(xt))}function fn(xt,zt){let bt=_.get(zt);bt===void 0&&(bt=new WeakMap,_.set(zt,bt));let Pt=bt.get(xt);Pt===void 0&&(Pt=i.getUniformBlockIndex(zt,xt.name),bt.set(xt,Pt))}function _n(xt,zt){const Pt=_.get(zt).get(xt);h.get(zt)!==Pt&&(i.uniformBlockBinding(zt,Pt,xt.__bindingPointIndex),h.set(zt,Pt))}function wn(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),g={},vt=null,Ut={},$={},_e=new WeakMap,j=[],tt=null,rt=!1,ot=null,et=null,b=null,it=null,nt=null,ct=null,mt=null,dt=new Color(0,0,0),ft=0,gt=!1,ut=null,at=null,_t=null,wt=null,At=null,tn.set(0,0,i.canvas.width,i.canvas.height),xn.set(0,0,i.canvas.width,i.canvas.height),s.reset(),c.reset(),d.reset()}return{buffers:{color:s,depth:c,stencil:d},enable:Xt,disable:jt,bindFramebuffer:dn,drawBuffers:mn,useProgram:gn,setBlending:Ln,setMaterial:An,setFlipSided:Cn,setCullFace:nn,setLineWidth:Dn,setPolygonOffset:un,setScissorTest:hn,activeTexture:ht,bindTexture:st,unbindTexture:Tt,compressedTexImage2D:kt,compressedTexImage3D:Ot,texImage2D:qt,texImage3D:vn,updateUBOMapping:fn,uniformBlockBinding:_n,texStorage2D:pn,texStorage3D:Vt,texSubImage2D:Nt,texSubImage3D:rn,compressedTexSubImage2D:$t,compressedTexSubImage3D:Kt,scissor:cn,viewport:Zt,reset:wn}}function getByteLength(i,e,o,a){const s=getTextureTypeByteLength(a);switch(o){case AlphaFormat:return i*e;case LuminanceFormat:return i*e;case LuminanceAlphaFormat:return i*e*2;case RedFormat:return i*e/s.components*s.byteLength;case RedIntegerFormat:return i*e/s.components*s.byteLength;case RGFormat:return i*e*2/s.components*s.byteLength;case RGIntegerFormat:return i*e*2/s.components*s.byteLength;case RGBFormat:return i*e*3/s.components*s.byteLength;case RGBAFormat:return i*e*4/s.components*s.byteLength;case RGBAIntegerFormat:return i*e*4/s.components*s.byteLength;case RGB_S3TC_DXT1_Format:case RGBA_S3TC_DXT1_Format:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case RGBA_S3TC_DXT3_Format:case RGBA_S3TC_DXT5_Format:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case RGB_PVRTC_2BPPV1_Format:case RGBA_PVRTC_2BPPV1_Format:return Math.max(i,16)*Math.max(e,8)/4;case RGB_PVRTC_4BPPV1_Format:case RGBA_PVRTC_4BPPV1_Format:return Math.max(i,8)*Math.max(e,8)/2;case RGB_ETC1_Format:case RGB_ETC2_Format:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case RGBA_ETC2_EAC_Format:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case RGBA_ASTC_4x4_Format:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case RGBA_ASTC_5x4_Format:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case RGBA_ASTC_5x5_Format:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case RGBA_ASTC_6x5_Format:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case RGBA_ASTC_6x6_Format:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case RGBA_ASTC_8x5_Format:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case RGBA_ASTC_8x6_Format:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case RGBA_ASTC_8x8_Format:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case RGBA_ASTC_10x5_Format:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case RGBA_ASTC_10x6_Format:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case RGBA_ASTC_10x8_Format:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case RGBA_ASTC_10x10_Format:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case RGBA_ASTC_12x10_Format:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case RGBA_ASTC_12x12_Format:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case RGBA_BPTC_Format:case RGB_BPTC_SIGNED_Format:case RGB_BPTC_UNSIGNED_Format:return Math.ceil(i/4)*Math.ceil(e/4)*16;case RED_RGTC1_Format:case SIGNED_RED_RGTC1_Format:return Math.ceil(i/4)*Math.ceil(e/4)*8;case RED_GREEN_RGTC2_Format:case SIGNED_RED_GREEN_RGTC2_Format:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${o} format.`)}function getTextureTypeByteLength(i){switch(i){case UnsignedByteType:case ByteType:return{byteLength:1,components:1};case UnsignedShortType:case ShortType:case HalfFloatType:return{byteLength:2,components:1};case UnsignedShort4444Type:case UnsignedShort5551Type:return{byteLength:2,components:4};case UnsignedIntType:case IntType:case FloatType:return{byteLength:4,components:1};case UnsignedInt5999Type:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function WebGLTextures(i,e,o,a,s,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Vector2,$=new WeakMap;let _e;const j=new WeakMap;let tt=!1;try{tt=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function rt(ht,st){return tt?new OffscreenCanvas(ht,st):createElementNS("canvas")}function ot(ht,st,Tt){let kt=1;const Ot=hn(ht);if((Ot.width>Tt||Ot.height>Tt)&&(kt=Tt/Math.max(Ot.width,Ot.height)),kt<1)if(typeof HTMLImageElement<"u"&&ht instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&ht instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&ht instanceof ImageBitmap||typeof VideoFrame<"u"&&ht instanceof VideoFrame){const Nt=Math.floor(kt*Ot.width),rn=Math.floor(kt*Ot.height);_e===void 0&&(_e=rt(Nt,rn));const $t=st?rt(Nt,rn):_e;return $t.width=Nt,$t.height=rn,$t.getContext("2d").drawImage(ht,0,0,Nt,rn),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ot.width+"x"+Ot.height+") to ("+Nt+"x"+rn+")."),$t}else return"data"in ht&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ot.width+"x"+Ot.height+")."),ht;return ht}function et(ht){return ht.generateMipmaps&&ht.minFilter!==NearestFilter&&ht.minFilter!==LinearFilter}function b(ht){i.generateMipmap(ht)}function it(ht,st,Tt,kt,Ot=!1){if(ht!==null){if(i[ht]!==void 0)return i[ht];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+ht+"'")}let Nt=st;if(st===i.RED&&(Tt===i.FLOAT&&(Nt=i.R32F),Tt===i.HALF_FLOAT&&(Nt=i.R16F),Tt===i.UNSIGNED_BYTE&&(Nt=i.R8)),st===i.RED_INTEGER&&(Tt===i.UNSIGNED_BYTE&&(Nt=i.R8UI),Tt===i.UNSIGNED_SHORT&&(Nt=i.R16UI),Tt===i.UNSIGNED_INT&&(Nt=i.R32UI),Tt===i.BYTE&&(Nt=i.R8I),Tt===i.SHORT&&(Nt=i.R16I),Tt===i.INT&&(Nt=i.R32I)),st===i.RG&&(Tt===i.FLOAT&&(Nt=i.RG32F),Tt===i.HALF_FLOAT&&(Nt=i.RG16F),Tt===i.UNSIGNED_BYTE&&(Nt=i.RG8)),st===i.RG_INTEGER&&(Tt===i.UNSIGNED_BYTE&&(Nt=i.RG8UI),Tt===i.UNSIGNED_SHORT&&(Nt=i.RG16UI),Tt===i.UNSIGNED_INT&&(Nt=i.RG32UI),Tt===i.BYTE&&(Nt=i.RG8I),Tt===i.SHORT&&(Nt=i.RG16I),Tt===i.INT&&(Nt=i.RG32I)),st===i.RGB&&Tt===i.UNSIGNED_INT_5_9_9_9_REV&&(Nt=i.RGB9_E5),st===i.RGBA){const rn=Ot?LinearTransfer:ColorManagement.getTransfer(kt);Tt===i.FLOAT&&(Nt=i.RGBA32F),Tt===i.HALF_FLOAT&&(Nt=i.RGBA16F),Tt===i.UNSIGNED_BYTE&&(Nt=rn===SRGBTransfer?i.SRGB8_ALPHA8:i.RGBA8),Tt===i.UNSIGNED_SHORT_4_4_4_4&&(Nt=i.RGBA4),Tt===i.UNSIGNED_SHORT_5_5_5_1&&(Nt=i.RGB5_A1)}return(Nt===i.R16F||Nt===i.R32F||Nt===i.RG16F||Nt===i.RG32F||Nt===i.RGBA16F||Nt===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Nt}function nt(ht,st){let Tt;return ht?st===null||st===UnsignedIntType||st===UnsignedInt248Type?Tt=i.DEPTH24_STENCIL8:st===FloatType?Tt=i.DEPTH32F_STENCIL8:st===UnsignedShortType&&(Tt=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):st===null||st===UnsignedIntType||st===UnsignedInt248Type?Tt=i.DEPTH_COMPONENT24:st===FloatType?Tt=i.DEPTH_COMPONENT32F:st===UnsignedShortType&&(Tt=i.DEPTH_COMPONENT16),Tt}function ct(ht,st){return et(ht)===!0||ht.isFramebufferTexture&&ht.minFilter!==NearestFilter&&ht.minFilter!==LinearFilter?Math.log2(Math.max(st.width,st.height))+1:ht.mipmaps!==void 0&&ht.mipmaps.length>0?ht.mipmaps.length:ht.isCompressedTexture&&Array.isArray(ht.image)?st.mipmaps.length:1}function mt(ht){const st=ht.target;st.removeEventListener("dispose",mt),ft(st),st.isVideoTexture&&$.delete(st)}function dt(ht){const st=ht.target;st.removeEventListener("dispose",dt),ut(st)}function ft(ht){const st=a.get(ht);if(st.__webglInit===void 0)return;const Tt=ht.source,kt=j.get(Tt);if(kt){const Ot=kt[st.__cacheKey];Ot.usedTimes--,Ot.usedTimes===0&&gt(ht),Object.keys(kt).length===0&&j.delete(Tt)}a.remove(ht)}function gt(ht){const st=a.get(ht);i.deleteTexture(st.__webglTexture);const Tt=ht.source,kt=j.get(Tt);delete kt[st.__cacheKey],d.memory.textures--}function ut(ht){const st=a.get(ht);if(ht.depthTexture&&ht.depthTexture.dispose(),ht.isWebGLCubeRenderTarget)for(let kt=0;kt<6;kt++){if(Array.isArray(st.__webglFramebuffer[kt]))for(let Ot=0;Ot<st.__webglFramebuffer[kt].length;Ot++)i.deleteFramebuffer(st.__webglFramebuffer[kt][Ot]);else i.deleteFramebuffer(st.__webglFramebuffer[kt]);st.__webglDepthbuffer&&i.deleteRenderbuffer(st.__webglDepthbuffer[kt])}else{if(Array.isArray(st.__webglFramebuffer))for(let kt=0;kt<st.__webglFramebuffer.length;kt++)i.deleteFramebuffer(st.__webglFramebuffer[kt]);else i.deleteFramebuffer(st.__webglFramebuffer);if(st.__webglDepthbuffer&&i.deleteRenderbuffer(st.__webglDepthbuffer),st.__webglMultisampledFramebuffer&&i.deleteFramebuffer(st.__webglMultisampledFramebuffer),st.__webglColorRenderbuffer)for(let kt=0;kt<st.__webglColorRenderbuffer.length;kt++)st.__webglColorRenderbuffer[kt]&&i.deleteRenderbuffer(st.__webglColorRenderbuffer[kt]);st.__webglDepthRenderbuffer&&i.deleteRenderbuffer(st.__webglDepthRenderbuffer)}const Tt=ht.textures;for(let kt=0,Ot=Tt.length;kt<Ot;kt++){const Nt=a.get(Tt[kt]);Nt.__webglTexture&&(i.deleteTexture(Nt.__webglTexture),d.memory.textures--),a.remove(Tt[kt])}a.remove(ht)}let at=0;function _t(){at=0}function wt(){const ht=at;return ht>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+ht+" texture units while this GPU supports only "+s.maxTextures),at+=1,ht}function At(ht){const st=[];return st.push(ht.wrapS),st.push(ht.wrapT),st.push(ht.wrapR||0),st.push(ht.magFilter),st.push(ht.minFilter),st.push(ht.anisotropy),st.push(ht.internalFormat),st.push(ht.format),st.push(ht.type),st.push(ht.generateMipmaps),st.push(ht.premultiplyAlpha),st.push(ht.flipY),st.push(ht.unpackAlignment),st.push(ht.colorSpace),st.join()}function Lt(ht,st){const Tt=a.get(ht);if(ht.isVideoTexture&&Dn(ht),ht.isRenderTargetTexture===!1&&ht.version>0&&Tt.__version!==ht.version){const kt=ht.image;if(kt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(kt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xn(Tt,ht,st);return}}o.bindTexture(i.TEXTURE_2D,Tt.__webglTexture,i.TEXTURE0+st)}function Dt(ht,st){const Tt=a.get(ht);if(ht.version>0&&Tt.__version!==ht.version){xn(Tt,ht,st);return}o.bindTexture(i.TEXTURE_2D_ARRAY,Tt.__webglTexture,i.TEXTURE0+st)}function Rt(ht,st){const Tt=a.get(ht);if(ht.version>0&&Tt.__version!==ht.version){xn(Tt,ht,st);return}o.bindTexture(i.TEXTURE_3D,Tt.__webglTexture,i.TEXTURE0+st)}function It(ht,st){const Tt=a.get(ht);if(ht.version>0&&Tt.__version!==ht.version){Ct(Tt,ht,st);return}o.bindTexture(i.TEXTURE_CUBE_MAP,Tt.__webglTexture,i.TEXTURE0+st)}const vt={[RepeatWrapping]:i.REPEAT,[ClampToEdgeWrapping]:i.CLAMP_TO_EDGE,[MirroredRepeatWrapping]:i.MIRRORED_REPEAT},Ut={[NearestFilter]:i.NEAREST,[NearestMipmapNearestFilter]:i.NEAREST_MIPMAP_NEAREST,[NearestMipmapLinearFilter]:i.NEAREST_MIPMAP_LINEAR,[LinearFilter]:i.LINEAR,[LinearMipmapNearestFilter]:i.LINEAR_MIPMAP_NEAREST,[LinearMipmapLinearFilter]:i.LINEAR_MIPMAP_LINEAR},Ft={[NeverCompare]:i.NEVER,[AlwaysCompare]:i.ALWAYS,[LessCompare]:i.LESS,[LessEqualCompare]:i.LEQUAL,[EqualCompare]:i.EQUAL,[GreaterEqualCompare]:i.GEQUAL,[GreaterCompare]:i.GREATER,[NotEqualCompare]:i.NOTEQUAL};function Ht(ht,st){if(st.type===FloatType&&e.has("OES_texture_float_linear")===!1&&(st.magFilter===LinearFilter||st.magFilter===LinearMipmapNearestFilter||st.magFilter===NearestMipmapLinearFilter||st.magFilter===LinearMipmapLinearFilter||st.minFilter===LinearFilter||st.minFilter===LinearMipmapNearestFilter||st.minFilter===NearestMipmapLinearFilter||st.minFilter===LinearMipmapLinearFilter)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(ht,i.TEXTURE_WRAP_S,vt[st.wrapS]),i.texParameteri(ht,i.TEXTURE_WRAP_T,vt[st.wrapT]),(ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY)&&i.texParameteri(ht,i.TEXTURE_WRAP_R,vt[st.wrapR]),i.texParameteri(ht,i.TEXTURE_MAG_FILTER,Ut[st.magFilter]),i.texParameteri(ht,i.TEXTURE_MIN_FILTER,Ut[st.minFilter]),st.compareFunction&&(i.texParameteri(ht,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(ht,i.TEXTURE_COMPARE_FUNC,Ft[st.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(st.magFilter===NearestFilter||st.minFilter!==NearestMipmapLinearFilter&&st.minFilter!==LinearMipmapLinearFilter||st.type===FloatType&&e.has("OES_texture_float_linear")===!1)return;if(st.anisotropy>1||a.get(st).__currentAnisotropy){const Tt=e.get("EXT_texture_filter_anisotropic");i.texParameterf(ht,Tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(st.anisotropy,s.getMaxAnisotropy())),a.get(st).__currentAnisotropy=st.anisotropy}}}function tn(ht,st){let Tt=!1;ht.__webglInit===void 0&&(ht.__webglInit=!0,st.addEventListener("dispose",mt));const kt=st.source;let Ot=j.get(kt);Ot===void 0&&(Ot={},j.set(kt,Ot));const Nt=At(st);if(Nt!==ht.__cacheKey){Ot[Nt]===void 0&&(Ot[Nt]={texture:i.createTexture(),usedTimes:0},d.memory.textures++,Tt=!0),Ot[Nt].usedTimes++;const rn=Ot[ht.__cacheKey];rn!==void 0&&(Ot[ht.__cacheKey].usedTimes--,rn.usedTimes===0&&gt(st)),ht.__cacheKey=Nt,ht.__webglTexture=Ot[Nt].texture}return Tt}function xn(ht,st,Tt){let kt=i.TEXTURE_2D;(st.isDataArrayTexture||st.isCompressedArrayTexture)&&(kt=i.TEXTURE_2D_ARRAY),st.isData3DTexture&&(kt=i.TEXTURE_3D);const Ot=tn(ht,st),Nt=st.source;o.bindTexture(kt,ht.__webglTexture,i.TEXTURE0+Tt);const rn=a.get(Nt);if(Nt.version!==rn.__version||Ot===!0){o.activeTexture(i.TEXTURE0+Tt);const $t=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),Kt=st.colorSpace===NoColorSpace?null:ColorManagement.getPrimaries(st.colorSpace),pn=st.colorSpace===NoColorSpace||$t===Kt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,st.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,st.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,st.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pn);let Vt=ot(st.image,!1,s.maxTextureSize);Vt=un(st,Vt);const qt=c.convert(st.format,st.colorSpace),vn=c.convert(st.type);let cn=it(st.internalFormat,qt,vn,st.colorSpace,st.isVideoTexture);Ht(kt,st);let Zt;const fn=st.mipmaps,_n=st.isVideoTexture!==!0,wn=rn.__version===void 0||Ot===!0,xt=Nt.dataReady,zt=ct(st,Vt);if(st.isDepthTexture)cn=nt(st.format===DepthStencilFormat,st.type),wn&&(_n?o.texStorage2D(i.TEXTURE_2D,1,cn,Vt.width,Vt.height):o.texImage2D(i.TEXTURE_2D,0,cn,Vt.width,Vt.height,0,qt,vn,null));else if(st.isDataTexture)if(fn.length>0){_n&&wn&&o.texStorage2D(i.TEXTURE_2D,zt,cn,fn[0].width,fn[0].height);for(let bt=0,Pt=fn.length;bt<Pt;bt++)Zt=fn[bt],_n?xt&&o.texSubImage2D(i.TEXTURE_2D,bt,0,0,Zt.width,Zt.height,qt,vn,Zt.data):o.texImage2D(i.TEXTURE_2D,bt,cn,Zt.width,Zt.height,0,qt,vn,Zt.data);st.generateMipmaps=!1}else _n?(wn&&o.texStorage2D(i.TEXTURE_2D,zt,cn,Vt.width,Vt.height),xt&&o.texSubImage2D(i.TEXTURE_2D,0,0,0,Vt.width,Vt.height,qt,vn,Vt.data)):o.texImage2D(i.TEXTURE_2D,0,cn,Vt.width,Vt.height,0,qt,vn,Vt.data);else if(st.isCompressedTexture)if(st.isCompressedArrayTexture){_n&&wn&&o.texStorage3D(i.TEXTURE_2D_ARRAY,zt,cn,fn[0].width,fn[0].height,Vt.depth);for(let bt=0,Pt=fn.length;bt<Pt;bt++)if(Zt=fn[bt],st.format!==RGBAFormat)if(qt!==null)if(_n){if(xt)if(st.layerUpdates.size>0){const Wt=getByteLength(Zt.width,Zt.height,st.format,st.type);for(const an of st.layerUpdates){const Sn=Zt.data.subarray(an*Wt/Zt.data.BYTES_PER_ELEMENT,(an+1)*Wt/Zt.data.BYTES_PER_ELEMENT);o.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,bt,0,0,an,Zt.width,Zt.height,1,qt,Sn,0,0)}st.clearLayerUpdates()}else o.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,bt,0,0,0,Zt.width,Zt.height,Vt.depth,qt,Zt.data,0,0)}else o.compressedTexImage3D(i.TEXTURE_2D_ARRAY,bt,cn,Zt.width,Zt.height,Vt.depth,0,Zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _n?xt&&o.texSubImage3D(i.TEXTURE_2D_ARRAY,bt,0,0,0,Zt.width,Zt.height,Vt.depth,qt,vn,Zt.data):o.texImage3D(i.TEXTURE_2D_ARRAY,bt,cn,Zt.width,Zt.height,Vt.depth,0,qt,vn,Zt.data)}else{_n&&wn&&o.texStorage2D(i.TEXTURE_2D,zt,cn,fn[0].width,fn[0].height);for(let bt=0,Pt=fn.length;bt<Pt;bt++)Zt=fn[bt],st.format!==RGBAFormat?qt!==null?_n?xt&&o.compressedTexSubImage2D(i.TEXTURE_2D,bt,0,0,Zt.width,Zt.height,qt,Zt.data):o.compressedTexImage2D(i.TEXTURE_2D,bt,cn,Zt.width,Zt.height,0,Zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_n?xt&&o.texSubImage2D(i.TEXTURE_2D,bt,0,0,Zt.width,Zt.height,qt,vn,Zt.data):o.texImage2D(i.TEXTURE_2D,bt,cn,Zt.width,Zt.height,0,qt,vn,Zt.data)}else if(st.isDataArrayTexture)if(_n){if(wn&&o.texStorage3D(i.TEXTURE_2D_ARRAY,zt,cn,Vt.width,Vt.height,Vt.depth),xt)if(st.layerUpdates.size>0){const bt=getByteLength(Vt.width,Vt.height,st.format,st.type);for(const Pt of st.layerUpdates){const Wt=Vt.data.subarray(Pt*bt/Vt.data.BYTES_PER_ELEMENT,(Pt+1)*bt/Vt.data.BYTES_PER_ELEMENT);o.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Pt,Vt.width,Vt.height,1,qt,vn,Wt)}st.clearLayerUpdates()}else o.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Vt.width,Vt.height,Vt.depth,qt,vn,Vt.data)}else o.texImage3D(i.TEXTURE_2D_ARRAY,0,cn,Vt.width,Vt.height,Vt.depth,0,qt,vn,Vt.data);else if(st.isData3DTexture)_n?(wn&&o.texStorage3D(i.TEXTURE_3D,zt,cn,Vt.width,Vt.height,Vt.depth),xt&&o.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Vt.width,Vt.height,Vt.depth,qt,vn,Vt.data)):o.texImage3D(i.TEXTURE_3D,0,cn,Vt.width,Vt.height,Vt.depth,0,qt,vn,Vt.data);else if(st.isFramebufferTexture){if(wn)if(_n)o.texStorage2D(i.TEXTURE_2D,zt,cn,Vt.width,Vt.height);else{let bt=Vt.width,Pt=Vt.height;for(let Wt=0;Wt<zt;Wt++)o.texImage2D(i.TEXTURE_2D,Wt,cn,bt,Pt,0,qt,vn,null),bt>>=1,Pt>>=1}}else if(fn.length>0){if(_n&&wn){const bt=hn(fn[0]);o.texStorage2D(i.TEXTURE_2D,zt,cn,bt.width,bt.height)}for(let bt=0,Pt=fn.length;bt<Pt;bt++)Zt=fn[bt],_n?xt&&o.texSubImage2D(i.TEXTURE_2D,bt,0,0,qt,vn,Zt):o.texImage2D(i.TEXTURE_2D,bt,cn,qt,vn,Zt);st.generateMipmaps=!1}else if(_n){if(wn){const bt=hn(Vt);o.texStorage2D(i.TEXTURE_2D,zt,cn,bt.width,bt.height)}xt&&o.texSubImage2D(i.TEXTURE_2D,0,0,0,qt,vn,Vt)}else o.texImage2D(i.TEXTURE_2D,0,cn,qt,vn,Vt);et(st)&&b(kt),rn.__version=Nt.version,st.onUpdate&&st.onUpdate(st)}ht.__version=st.version}function Ct(ht,st,Tt){if(st.image.length!==6)return;const kt=tn(ht,st),Ot=st.source;o.bindTexture(i.TEXTURE_CUBE_MAP,ht.__webglTexture,i.TEXTURE0+Tt);const Nt=a.get(Ot);if(Ot.version!==Nt.__version||kt===!0){o.activeTexture(i.TEXTURE0+Tt);const rn=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),$t=st.colorSpace===NoColorSpace?null:ColorManagement.getPrimaries(st.colorSpace),Kt=st.colorSpace===NoColorSpace||rn===$t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,st.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,st.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,st.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const pn=st.isCompressedTexture||st.image[0].isCompressedTexture,Vt=st.image[0]&&st.image[0].isDataTexture,qt=[];for(let Pt=0;Pt<6;Pt++)!pn&&!Vt?qt[Pt]=ot(st.image[Pt],!0,s.maxCubemapSize):qt[Pt]=Vt?st.image[Pt].image:st.image[Pt],qt[Pt]=un(st,qt[Pt]);const vn=qt[0],cn=c.convert(st.format,st.colorSpace),Zt=c.convert(st.type),fn=it(st.internalFormat,cn,Zt,st.colorSpace),_n=st.isVideoTexture!==!0,wn=Nt.__version===void 0||kt===!0,xt=Ot.dataReady;let zt=ct(st,vn);Ht(i.TEXTURE_CUBE_MAP,st);let bt;if(pn){_n&&wn&&o.texStorage2D(i.TEXTURE_CUBE_MAP,zt,fn,vn.width,vn.height);for(let Pt=0;Pt<6;Pt++){bt=qt[Pt].mipmaps;for(let Wt=0;Wt<bt.length;Wt++){const an=bt[Wt];st.format!==RGBAFormat?cn!==null?_n?xt&&o.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Wt,0,0,an.width,an.height,cn,an.data):o.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Wt,fn,an.width,an.height,0,an.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_n?xt&&o.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Wt,0,0,an.width,an.height,cn,Zt,an.data):o.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Wt,fn,an.width,an.height,0,cn,Zt,an.data)}}}else{if(bt=st.mipmaps,_n&&wn){bt.length>0&&zt++;const Pt=hn(qt[0]);o.texStorage2D(i.TEXTURE_CUBE_MAP,zt,fn,Pt.width,Pt.height)}for(let Pt=0;Pt<6;Pt++)if(Vt){_n?xt&&o.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,0,0,qt[Pt].width,qt[Pt].height,cn,Zt,qt[Pt].data):o.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,fn,qt[Pt].width,qt[Pt].height,0,cn,Zt,qt[Pt].data);for(let Wt=0;Wt<bt.length;Wt++){const Sn=bt[Wt].image[Pt].image;_n?xt&&o.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Wt+1,0,0,Sn.width,Sn.height,cn,Zt,Sn.data):o.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Wt+1,fn,Sn.width,Sn.height,0,cn,Zt,Sn.data)}}else{_n?xt&&o.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,0,0,cn,Zt,qt[Pt]):o.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,fn,cn,Zt,qt[Pt]);for(let Wt=0;Wt<bt.length;Wt++){const an=bt[Wt];_n?xt&&o.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Wt+1,0,0,cn,Zt,an.image[Pt]):o.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Wt+1,fn,cn,Zt,an.image[Pt])}}}et(st)&&b(i.TEXTURE_CUBE_MAP),Nt.__version=Ot.version,st.onUpdate&&st.onUpdate(st)}ht.__version=st.version}function Bt(ht,st,Tt,kt,Ot,Nt){const rn=c.convert(Tt.format,Tt.colorSpace),$t=c.convert(Tt.type),Kt=it(Tt.internalFormat,rn,$t,Tt.colorSpace);if(!a.get(st).__hasExternalTextures){const Vt=Math.max(1,st.width>>Nt),qt=Math.max(1,st.height>>Nt);Ot===i.TEXTURE_3D||Ot===i.TEXTURE_2D_ARRAY?o.texImage3D(Ot,Nt,Kt,Vt,qt,st.depth,0,rn,$t,null):o.texImage2D(Ot,Nt,Kt,Vt,qt,0,rn,$t,null)}o.bindFramebuffer(i.FRAMEBUFFER,ht),nn(st)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,kt,Ot,a.get(Tt).__webglTexture,0,Cn(st)):(Ot===i.TEXTURE_2D||Ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,kt,Ot,a.get(Tt).__webglTexture,Nt),o.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(ht,st,Tt){if(i.bindRenderbuffer(i.RENDERBUFFER,ht),st.depthBuffer){const kt=st.depthTexture,Ot=kt&&kt.isDepthTexture?kt.type:null,Nt=nt(st.stencilBuffer,Ot),rn=st.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$t=Cn(st);nn(st)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t,Nt,st.width,st.height):Tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,Nt,st.width,st.height):i.renderbufferStorage(i.RENDERBUFFER,Nt,st.width,st.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,rn,i.RENDERBUFFER,ht)}else{const kt=st.textures;for(let Ot=0;Ot<kt.length;Ot++){const Nt=kt[Ot],rn=c.convert(Nt.format,Nt.colorSpace),$t=c.convert(Nt.type),Kt=it(Nt.internalFormat,rn,$t,Nt.colorSpace),pn=Cn(st);Tt&&nn(st)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,pn,Kt,st.width,st.height):nn(st)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pn,Kt,st.width,st.height):i.renderbufferStorage(i.RENDERBUFFER,Kt,st.width,st.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function jt(ht,st){if(st&&st.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(o.bindFramebuffer(i.FRAMEBUFFER,ht),!(st.depthTexture&&st.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!a.get(st.depthTexture).__webglTexture||st.depthTexture.image.width!==st.width||st.depthTexture.image.height!==st.height)&&(st.depthTexture.image.width=st.width,st.depthTexture.image.height=st.height,st.depthTexture.needsUpdate=!0),Lt(st.depthTexture,0);const kt=a.get(st.depthTexture).__webglTexture,Ot=Cn(st);if(st.depthTexture.format===DepthFormat)nn(st)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,kt,0,Ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,kt,0);else if(st.depthTexture.format===DepthStencilFormat)nn(st)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,kt,0,Ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,kt,0);else throw new Error("Unknown depthTexture format")}function dn(ht){const st=a.get(ht),Tt=ht.isWebGLCubeRenderTarget===!0;if(ht.depthTexture&&!st.__autoAllocateDepthBuffer){if(Tt)throw new Error("target.depthTexture not supported in Cube render targets");jt(st.__webglFramebuffer,ht)}else if(Tt){st.__webglDepthbuffer=[];for(let kt=0;kt<6;kt++)o.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer[kt]),st.__webglDepthbuffer[kt]=i.createRenderbuffer(),Xt(st.__webglDepthbuffer[kt],ht,!1)}else o.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),st.__webglDepthbuffer=i.createRenderbuffer(),Xt(st.__webglDepthbuffer,ht,!1);o.bindFramebuffer(i.FRAMEBUFFER,null)}function mn(ht,st,Tt){const kt=a.get(ht);st!==void 0&&Bt(kt.__webglFramebuffer,ht,ht.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Tt!==void 0&&dn(ht)}function gn(ht){const st=ht.texture,Tt=a.get(ht),kt=a.get(st);ht.addEventListener("dispose",dt);const Ot=ht.textures,Nt=ht.isWebGLCubeRenderTarget===!0,rn=Ot.length>1;if(rn||(kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture()),kt.__version=st.version,d.memory.textures++),Nt){Tt.__webglFramebuffer=[];for(let $t=0;$t<6;$t++)if(st.mipmaps&&st.mipmaps.length>0){Tt.__webglFramebuffer[$t]=[];for(let Kt=0;Kt<st.mipmaps.length;Kt++)Tt.__webglFramebuffer[$t][Kt]=i.createFramebuffer()}else Tt.__webglFramebuffer[$t]=i.createFramebuffer()}else{if(st.mipmaps&&st.mipmaps.length>0){Tt.__webglFramebuffer=[];for(let $t=0;$t<st.mipmaps.length;$t++)Tt.__webglFramebuffer[$t]=i.createFramebuffer()}else Tt.__webglFramebuffer=i.createFramebuffer();if(rn)for(let $t=0,Kt=Ot.length;$t<Kt;$t++){const pn=a.get(Ot[$t]);pn.__webglTexture===void 0&&(pn.__webglTexture=i.createTexture(),d.memory.textures++)}if(ht.samples>0&&nn(ht)===!1){Tt.__webglMultisampledFramebuffer=i.createFramebuffer(),Tt.__webglColorRenderbuffer=[],o.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);for(let $t=0;$t<Ot.length;$t++){const Kt=Ot[$t];Tt.__webglColorRenderbuffer[$t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Tt.__webglColorRenderbuffer[$t]);const pn=c.convert(Kt.format,Kt.colorSpace),Vt=c.convert(Kt.type),qt=it(Kt.internalFormat,pn,Vt,Kt.colorSpace,ht.isXRRenderTarget===!0),vn=Cn(ht);i.renderbufferStorageMultisample(i.RENDERBUFFER,vn,qt,ht.width,ht.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$t,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[$t])}i.bindRenderbuffer(i.RENDERBUFFER,null),ht.depthBuffer&&(Tt.__webglDepthRenderbuffer=i.createRenderbuffer(),Xt(Tt.__webglDepthRenderbuffer,ht,!0)),o.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Nt){o.bindTexture(i.TEXTURE_CUBE_MAP,kt.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,st);for(let $t=0;$t<6;$t++)if(st.mipmaps&&st.mipmaps.length>0)for(let Kt=0;Kt<st.mipmaps.length;Kt++)Bt(Tt.__webglFramebuffer[$t][Kt],ht,st,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$t,Kt);else Bt(Tt.__webglFramebuffer[$t],ht,st,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$t,0);et(st)&&b(i.TEXTURE_CUBE_MAP),o.unbindTexture()}else if(rn){for(let $t=0,Kt=Ot.length;$t<Kt;$t++){const pn=Ot[$t],Vt=a.get(pn);o.bindTexture(i.TEXTURE_2D,Vt.__webglTexture),Ht(i.TEXTURE_2D,pn),Bt(Tt.__webglFramebuffer,ht,pn,i.COLOR_ATTACHMENT0+$t,i.TEXTURE_2D,0),et(pn)&&b(i.TEXTURE_2D)}o.unbindTexture()}else{let $t=i.TEXTURE_2D;if((ht.isWebGL3DRenderTarget||ht.isWebGLArrayRenderTarget)&&($t=ht.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),o.bindTexture($t,kt.__webglTexture),Ht($t,st),st.mipmaps&&st.mipmaps.length>0)for(let Kt=0;Kt<st.mipmaps.length;Kt++)Bt(Tt.__webglFramebuffer[Kt],ht,st,i.COLOR_ATTACHMENT0,$t,Kt);else Bt(Tt.__webglFramebuffer,ht,st,i.COLOR_ATTACHMENT0,$t,0);et(st)&&b($t),o.unbindTexture()}ht.depthBuffer&&dn(ht)}function Rn(ht){const st=ht.textures;for(let Tt=0,kt=st.length;Tt<kt;Tt++){const Ot=st[Tt];if(et(Ot)){const Nt=ht.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,rn=a.get(Ot).__webglTexture;o.bindTexture(Nt,rn),b(Nt),o.unbindTexture()}}}const pt=[],Ln=[];function An(ht){if(ht.samples>0){if(nn(ht)===!1){const st=ht.textures,Tt=ht.width,kt=ht.height;let Ot=i.COLOR_BUFFER_BIT;const Nt=ht.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rn=a.get(ht),$t=st.length>1;if($t)for(let Kt=0;Kt<st.length;Kt++)o.bindFramebuffer(i.FRAMEBUFFER,rn.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Kt,i.RENDERBUFFER,null),o.bindFramebuffer(i.FRAMEBUFFER,rn.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Kt,i.TEXTURE_2D,null,0);o.bindFramebuffer(i.READ_FRAMEBUFFER,rn.__webglMultisampledFramebuffer),o.bindFramebuffer(i.DRAW_FRAMEBUFFER,rn.__webglFramebuffer);for(let Kt=0;Kt<st.length;Kt++){if(ht.resolveDepthBuffer&&(ht.depthBuffer&&(Ot|=i.DEPTH_BUFFER_BIT),ht.stencilBuffer&&ht.resolveStencilBuffer&&(Ot|=i.STENCIL_BUFFER_BIT)),$t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,rn.__webglColorRenderbuffer[Kt]);const pn=a.get(st[Kt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pn,0)}i.blitFramebuffer(0,0,Tt,kt,0,0,Tt,kt,Ot,i.NEAREST),_===!0&&(pt.length=0,Ln.length=0,pt.push(i.COLOR_ATTACHMENT0+Kt),ht.depthBuffer&&ht.resolveDepthBuffer===!1&&(pt.push(Nt),Ln.push(Nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ln)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(o.bindFramebuffer(i.READ_FRAMEBUFFER,null),o.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$t)for(let Kt=0;Kt<st.length;Kt++){o.bindFramebuffer(i.FRAMEBUFFER,rn.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Kt,i.RENDERBUFFER,rn.__webglColorRenderbuffer[Kt]);const pn=a.get(st[Kt]).__webglTexture;o.bindFramebuffer(i.FRAMEBUFFER,rn.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Kt,i.TEXTURE_2D,pn,0)}o.bindFramebuffer(i.DRAW_FRAMEBUFFER,rn.__webglMultisampledFramebuffer)}else if(ht.depthBuffer&&ht.resolveDepthBuffer===!1&&_){const st=ht.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[st])}}}function Cn(ht){return Math.min(s.maxSamples,ht.samples)}function nn(ht){const st=a.get(ht);return ht.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&st.__useRenderToTexture!==!1}function Dn(ht){const st=d.render.frame;$.get(ht)!==st&&($.set(ht,st),ht.update())}function un(ht,st){const Tt=ht.colorSpace,kt=ht.format,Ot=ht.type;return ht.isCompressedTexture===!0||ht.isVideoTexture===!0||Tt!==LinearSRGBColorSpace&&Tt!==NoColorSpace&&(ColorManagement.getTransfer(Tt)===SRGBTransfer?(kt!==RGBAFormat||Ot!==UnsignedByteType)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Tt)),st}function hn(ht){return typeof HTMLImageElement<"u"&&ht instanceof HTMLImageElement?(g.width=ht.naturalWidth||ht.width,g.height=ht.naturalHeight||ht.height):typeof VideoFrame<"u"&&ht instanceof VideoFrame?(g.width=ht.displayWidth,g.height=ht.displayHeight):(g.width=ht.width,g.height=ht.height),g}this.allocateTextureUnit=wt,this.resetTextureUnits=_t,this.setTexture2D=Lt,this.setTexture2DArray=Dt,this.setTexture3D=Rt,this.setTextureCube=It,this.rebindTextures=mn,this.setupRenderTarget=gn,this.updateRenderTargetMipmap=Rn,this.updateMultisampleRenderTarget=An,this.setupDepthRenderbuffer=dn,this.setupFrameBufferTexture=Bt,this.useMultisampledRTT=nn}function WebGLUtils(i,e){function o(a,s=NoColorSpace){let c;const d=ColorManagement.getTransfer(s);if(a===UnsignedByteType)return i.UNSIGNED_BYTE;if(a===UnsignedShort4444Type)return i.UNSIGNED_SHORT_4_4_4_4;if(a===UnsignedShort5551Type)return i.UNSIGNED_SHORT_5_5_5_1;if(a===UnsignedInt5999Type)return i.UNSIGNED_INT_5_9_9_9_REV;if(a===ByteType)return i.BYTE;if(a===ShortType)return i.SHORT;if(a===UnsignedShortType)return i.UNSIGNED_SHORT;if(a===IntType)return i.INT;if(a===UnsignedIntType)return i.UNSIGNED_INT;if(a===FloatType)return i.FLOAT;if(a===HalfFloatType)return i.HALF_FLOAT;if(a===AlphaFormat)return i.ALPHA;if(a===RGBFormat)return i.RGB;if(a===RGBAFormat)return i.RGBA;if(a===LuminanceFormat)return i.LUMINANCE;if(a===LuminanceAlphaFormat)return i.LUMINANCE_ALPHA;if(a===DepthFormat)return i.DEPTH_COMPONENT;if(a===DepthStencilFormat)return i.DEPTH_STENCIL;if(a===RedFormat)return i.RED;if(a===RedIntegerFormat)return i.RED_INTEGER;if(a===RGFormat)return i.RG;if(a===RGIntegerFormat)return i.RG_INTEGER;if(a===RGBAIntegerFormat)return i.RGBA_INTEGER;if(a===RGB_S3TC_DXT1_Format||a===RGBA_S3TC_DXT1_Format||a===RGBA_S3TC_DXT3_Format||a===RGBA_S3TC_DXT5_Format)if(d===SRGBTransfer)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===RGB_S3TC_DXT1_Format)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===RGBA_S3TC_DXT1_Format)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===RGBA_S3TC_DXT3_Format)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===RGBA_S3TC_DXT5_Format)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===RGB_S3TC_DXT1_Format)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===RGBA_S3TC_DXT1_Format)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===RGBA_S3TC_DXT3_Format)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===RGBA_S3TC_DXT5_Format)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===RGB_PVRTC_4BPPV1_Format||a===RGB_PVRTC_2BPPV1_Format||a===RGBA_PVRTC_4BPPV1_Format||a===RGBA_PVRTC_2BPPV1_Format)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===RGB_PVRTC_4BPPV1_Format)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===RGB_PVRTC_2BPPV1_Format)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===RGBA_PVRTC_4BPPV1_Format)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===RGBA_PVRTC_2BPPV1_Format)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===RGB_ETC1_Format||a===RGB_ETC2_Format||a===RGBA_ETC2_EAC_Format)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===RGB_ETC1_Format||a===RGB_ETC2_Format)return d===SRGBTransfer?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===RGBA_ETC2_EAC_Format)return d===SRGBTransfer?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===RGBA_ASTC_4x4_Format||a===RGBA_ASTC_5x4_Format||a===RGBA_ASTC_5x5_Format||a===RGBA_ASTC_6x5_Format||a===RGBA_ASTC_6x6_Format||a===RGBA_ASTC_8x5_Format||a===RGBA_ASTC_8x6_Format||a===RGBA_ASTC_8x8_Format||a===RGBA_ASTC_10x5_Format||a===RGBA_ASTC_10x6_Format||a===RGBA_ASTC_10x8_Format||a===RGBA_ASTC_10x10_Format||a===RGBA_ASTC_12x10_Format||a===RGBA_ASTC_12x12_Format)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===RGBA_ASTC_4x4_Format)return d===SRGBTransfer?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===RGBA_ASTC_5x4_Format)return d===SRGBTransfer?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===RGBA_ASTC_5x5_Format)return d===SRGBTransfer?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===RGBA_ASTC_6x5_Format)return d===SRGBTransfer?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===RGBA_ASTC_6x6_Format)return d===SRGBTransfer?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===RGBA_ASTC_8x5_Format)return d===SRGBTransfer?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===RGBA_ASTC_8x6_Format)return d===SRGBTransfer?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===RGBA_ASTC_8x8_Format)return d===SRGBTransfer?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===RGBA_ASTC_10x5_Format)return d===SRGBTransfer?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===RGBA_ASTC_10x6_Format)return d===SRGBTransfer?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===RGBA_ASTC_10x8_Format)return d===SRGBTransfer?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===RGBA_ASTC_10x10_Format)return d===SRGBTransfer?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===RGBA_ASTC_12x10_Format)return d===SRGBTransfer?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===RGBA_ASTC_12x12_Format)return d===SRGBTransfer?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===RGBA_BPTC_Format||a===RGB_BPTC_SIGNED_Format||a===RGB_BPTC_UNSIGNED_Format)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===RGBA_BPTC_Format)return d===SRGBTransfer?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===RGB_BPTC_SIGNED_Format)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===RGB_BPTC_UNSIGNED_Format)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===RED_RGTC1_Format||a===SIGNED_RED_RGTC1_Format||a===RED_GREEN_RGTC2_Format||a===SIGNED_RED_GREEN_RGTC2_Format)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===RGBA_BPTC_Format)return c.COMPRESSED_RED_RGTC1_EXT;if(a===SIGNED_RED_RGTC1_Format)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===RED_GREEN_RGTC2_Format)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===SIGNED_RED_GREEN_RGTC2_Format)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===UnsignedInt248Type?i.UNSIGNED_INT_24_8:i[a]!==void 0?i[a]:null}return{convert:o}}class ArrayCamera extends PerspectiveCamera{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Group extends Object3D{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _moveEvent={type:"move"};class WebXRController{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Group,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Group,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Vector3,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Vector3),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Group,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Vector3,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Vector3),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const o=this._hand;if(o)for(const a of e.hand.values())this._getHandJoint(o,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,o,a){let s=null,c=null,d=null;const h=this._targetRay,_=this._grip,g=this._hand;if(e&&o.session.visibilityState!=="visible-blurred"){if(g&&e.hand){d=!0;for(const ot of e.hand.values()){const et=o.getJointPose(ot,a),b=this._getHandJoint(g,ot);et!==null&&(b.matrix.fromArray(et.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=et.radius),b.visible=et!==null}const $=g.joints["index-finger-tip"],_e=g.joints["thumb-tip"],j=$.position.distanceTo(_e.position),tt=.02,rt=.005;g.inputState.pinching&&j>tt+rt?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&j<=tt-rt&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else _!==null&&e.gripSpace&&(c=o.getPose(e.gripSpace,a),c!==null&&(_.matrix.fromArray(c.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,c.linearVelocity?(_.hasLinearVelocity=!0,_.linearVelocity.copy(c.linearVelocity)):_.hasLinearVelocity=!1,c.angularVelocity?(_.hasAngularVelocity=!0,_.angularVelocity.copy(c.angularVelocity)):_.hasAngularVelocity=!1));h!==null&&(s=o.getPose(e.targetRaySpace,a),s===null&&c!==null&&(s=c),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(_moveEvent)))}return h!==null&&(h.visible=s!==null),_!==null&&(_.visible=c!==null),g!==null&&(g.visible=d!==null),this}_getHandJoint(e,o){if(e.joints[o.jointName]===void 0){const a=new Group;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[o.jointName]=a,e.add(a)}return e.joints[o.jointName]}}const _occlusion_vertex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_occlusion_fragment=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class WebXRDepthSensing{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,o,a){if(this.texture===null){const s=new Texture,c=e.properties.get(s);c.__webglTexture=o.texture,(o.depthNear!=a.depthNear||o.depthFar!=a.depthFar)&&(this.depthNear=o.depthNear,this.depthFar=o.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const o=e.cameras[0].viewport,a=new ShaderMaterial({vertexShader:_occlusion_vertex,fragmentShader:_occlusion_fragment,uniforms:{depthColor:{value:this.texture},depthWidth:{value:o.z},depthHeight:{value:o.w}}});this.mesh=new Mesh(new PlaneGeometry(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WebXRManager extends EventDispatcher{constructor(e,o){super();const a=this;let s=null,c=1,d=null,h="local-floor",_=1,g=null,$=null,_e=null,j=null,tt=null,rt=null;const ot=new WebXRDepthSensing,et=o.getContextAttributes();let b=null,it=null;const nt=[],ct=[],mt=new Vector2;let dt=null;const ft=new PerspectiveCamera;ft.layers.enable(1),ft.viewport=new Vector4;const gt=new PerspectiveCamera;gt.layers.enable(2),gt.viewport=new Vector4;const ut=[ft,gt],at=new ArrayCamera;at.layers.enable(1),at.layers.enable(2);let _t=null,wt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Ct){let Bt=nt[Ct];return Bt===void 0&&(Bt=new WebXRController,nt[Ct]=Bt),Bt.getTargetRaySpace()},this.getControllerGrip=function(Ct){let Bt=nt[Ct];return Bt===void 0&&(Bt=new WebXRController,nt[Ct]=Bt),Bt.getGripSpace()},this.getHand=function(Ct){let Bt=nt[Ct];return Bt===void 0&&(Bt=new WebXRController,nt[Ct]=Bt),Bt.getHandSpace()};function At(Ct){const Bt=ct.indexOf(Ct.inputSource);if(Bt===-1)return;const Xt=nt[Bt];Xt!==void 0&&(Xt.update(Ct.inputSource,Ct.frame,g||d),Xt.dispatchEvent({type:Ct.type,data:Ct.inputSource}))}function Lt(){s.removeEventListener("select",At),s.removeEventListener("selectstart",At),s.removeEventListener("selectend",At),s.removeEventListener("squeeze",At),s.removeEventListener("squeezestart",At),s.removeEventListener("squeezeend",At),s.removeEventListener("end",Lt),s.removeEventListener("inputsourceschange",Dt);for(let Ct=0;Ct<nt.length;Ct++){const Bt=ct[Ct];Bt!==null&&(ct[Ct]=null,nt[Ct].disconnect(Bt))}_t=null,wt=null,ot.reset(),e.setRenderTarget(b),tt=null,j=null,_e=null,s=null,it=null,xn.stop(),a.isPresenting=!1,e.setPixelRatio(dt),e.setSize(mt.width,mt.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Ct){c=Ct,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Ct){h=Ct,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||d},this.setReferenceSpace=function(Ct){g=Ct},this.getBaseLayer=function(){return j!==null?j:tt},this.getBinding=function(){return _e},this.getFrame=function(){return rt},this.getSession=function(){return s},this.setSession=async function(Ct){if(s=Ct,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",At),s.addEventListener("selectstart",At),s.addEventListener("selectend",At),s.addEventListener("squeeze",At),s.addEventListener("squeezestart",At),s.addEventListener("squeezeend",At),s.addEventListener("end",Lt),s.addEventListener("inputsourceschange",Dt),et.xrCompatible!==!0&&await o.makeXRCompatible(),dt=e.getPixelRatio(),e.getSize(mt),s.renderState.layers===void 0){const Bt={antialias:et.antialias,alpha:!0,depth:et.depth,stencil:et.stencil,framebufferScaleFactor:c};tt=new XRWebGLLayer(s,o,Bt),s.updateRenderState({baseLayer:tt}),e.setPixelRatio(1),e.setSize(tt.framebufferWidth,tt.framebufferHeight,!1),it=new WebGLRenderTarget(tt.framebufferWidth,tt.framebufferHeight,{format:RGBAFormat,type:UnsignedByteType,colorSpace:e.outputColorSpace,stencilBuffer:et.stencil})}else{let Bt=null,Xt=null,jt=null;et.depth&&(jt=et.stencil?o.DEPTH24_STENCIL8:o.DEPTH_COMPONENT24,Bt=et.stencil?DepthStencilFormat:DepthFormat,Xt=et.stencil?UnsignedInt248Type:UnsignedIntType);const dn={colorFormat:o.RGBA8,depthFormat:jt,scaleFactor:c};_e=new XRWebGLBinding(s,o),j=_e.createProjectionLayer(dn),s.updateRenderState({layers:[j]}),e.setPixelRatio(1),e.setSize(j.textureWidth,j.textureHeight,!1),it=new WebGLRenderTarget(j.textureWidth,j.textureHeight,{format:RGBAFormat,type:UnsignedByteType,depthTexture:new DepthTexture(j.textureWidth,j.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,Bt),stencilBuffer:et.stencil,colorSpace:e.outputColorSpace,samples:et.antialias?4:0,resolveDepthBuffer:j.ignoreDepthValues===!1})}it.isXRRenderTarget=!0,this.setFoveation(_),g=null,d=await s.requestReferenceSpace(h),xn.setContext(s),xn.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return ot.getDepthTexture()};function Dt(Ct){for(let Bt=0;Bt<Ct.removed.length;Bt++){const Xt=Ct.removed[Bt],jt=ct.indexOf(Xt);jt>=0&&(ct[jt]=null,nt[jt].disconnect(Xt))}for(let Bt=0;Bt<Ct.added.length;Bt++){const Xt=Ct.added[Bt];let jt=ct.indexOf(Xt);if(jt===-1){for(let mn=0;mn<nt.length;mn++)if(mn>=ct.length){ct.push(Xt),jt=mn;break}else if(ct[mn]===null){ct[mn]=Xt,jt=mn;break}if(jt===-1)break}const dn=nt[jt];dn&&dn.connect(Xt)}}const Rt=new Vector3,It=new Vector3;function vt(Ct,Bt,Xt){Rt.setFromMatrixPosition(Bt.matrixWorld),It.setFromMatrixPosition(Xt.matrixWorld);const jt=Rt.distanceTo(It),dn=Bt.projectionMatrix.elements,mn=Xt.projectionMatrix.elements,gn=dn[14]/(dn[10]-1),Rn=dn[14]/(dn[10]+1),pt=(dn[9]+1)/dn[5],Ln=(dn[9]-1)/dn[5],An=(dn[8]-1)/dn[0],Cn=(mn[8]+1)/mn[0],nn=gn*An,Dn=gn*Cn,un=jt/(-An+Cn),hn=un*-An;Bt.matrixWorld.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.translateX(hn),Ct.translateZ(un),Ct.matrixWorld.compose(Ct.position,Ct.quaternion,Ct.scale),Ct.matrixWorldInverse.copy(Ct.matrixWorld).invert();const ht=gn+un,st=Rn+un,Tt=nn-hn,kt=Dn+(jt-hn),Ot=pt*Rn/st*ht,Nt=Ln*Rn/st*ht;Ct.projectionMatrix.makePerspective(Tt,kt,Ot,Nt,ht,st),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert()}function Ut(Ct,Bt){Bt===null?Ct.matrixWorld.copy(Ct.matrix):Ct.matrixWorld.multiplyMatrices(Bt.matrixWorld,Ct.matrix),Ct.matrixWorldInverse.copy(Ct.matrixWorld).invert()}this.updateCamera=function(Ct){if(s===null)return;ot.texture!==null&&(Ct.near=ot.depthNear,Ct.far=ot.depthFar),at.near=gt.near=ft.near=Ct.near,at.far=gt.far=ft.far=Ct.far,(_t!==at.near||wt!==at.far)&&(s.updateRenderState({depthNear:at.near,depthFar:at.far}),_t=at.near,wt=at.far,ft.near=_t,ft.far=wt,gt.near=_t,gt.far=wt,ft.updateProjectionMatrix(),gt.updateProjectionMatrix(),Ct.updateProjectionMatrix());const Bt=Ct.parent,Xt=at.cameras;Ut(at,Bt);for(let jt=0;jt<Xt.length;jt++)Ut(Xt[jt],Bt);Xt.length===2?vt(at,ft,gt):at.projectionMatrix.copy(ft.projectionMatrix),Ft(Ct,at,Bt)};function Ft(Ct,Bt,Xt){Xt===null?Ct.matrix.copy(Bt.matrixWorld):(Ct.matrix.copy(Xt.matrixWorld),Ct.matrix.invert(),Ct.matrix.multiply(Bt.matrixWorld)),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.updateMatrixWorld(!0),Ct.projectionMatrix.copy(Bt.projectionMatrix),Ct.projectionMatrixInverse.copy(Bt.projectionMatrixInverse),Ct.isPerspectiveCamera&&(Ct.fov=RAD2DEG*2*Math.atan(1/Ct.projectionMatrix.elements[5]),Ct.zoom=1)}this.getCamera=function(){return at},this.getFoveation=function(){if(!(j===null&&tt===null))return _},this.setFoveation=function(Ct){_=Ct,j!==null&&(j.fixedFoveation=Ct),tt!==null&&tt.fixedFoveation!==void 0&&(tt.fixedFoveation=Ct)},this.hasDepthSensing=function(){return ot.texture!==null},this.getDepthSensingMesh=function(){return ot.getMesh(at)};let Ht=null;function tn(Ct,Bt){if($=Bt.getViewerPose(g||d),rt=Bt,$!==null){const Xt=$.views;tt!==null&&(e.setRenderTargetFramebuffer(it,tt.framebuffer),e.setRenderTarget(it));let jt=!1;Xt.length!==at.cameras.length&&(at.cameras.length=0,jt=!0);for(let mn=0;mn<Xt.length;mn++){const gn=Xt[mn];let Rn=null;if(tt!==null)Rn=tt.getViewport(gn);else{const Ln=_e.getViewSubImage(j,gn);Rn=Ln.viewport,mn===0&&(e.setRenderTargetTextures(it,Ln.colorTexture,j.ignoreDepthValues?void 0:Ln.depthStencilTexture),e.setRenderTarget(it))}let pt=ut[mn];pt===void 0&&(pt=new PerspectiveCamera,pt.layers.enable(mn),pt.viewport=new Vector4,ut[mn]=pt),pt.matrix.fromArray(gn.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(gn.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Rn.x,Rn.y,Rn.width,Rn.height),mn===0&&(at.matrix.copy(pt.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale)),jt===!0&&at.cameras.push(pt)}const dn=s.enabledFeatures;if(dn&&dn.includes("depth-sensing")){const mn=_e.getDepthInformation(Xt[0]);mn&&mn.isValid&&mn.texture&&ot.init(e,mn,s.renderState)}}for(let Xt=0;Xt<nt.length;Xt++){const jt=ct[Xt],dn=nt[Xt];jt!==null&&dn!==void 0&&dn.update(jt,Bt,g||d)}Ht&&Ht(Ct,Bt),Bt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:Bt}),rt=null}const xn=new WebGLAnimation;xn.setAnimationLoop(tn),this.setAnimationLoop=function(Ct){Ht=Ct},this.dispose=function(){}}}const _e1=new Euler,_m1=new Matrix4;function WebGLMaterials(i,e){function o(et,b){et.matrixAutoUpdate===!0&&et.updateMatrix(),b.value.copy(et.matrix)}function a(et,b){b.color.getRGB(et.fogColor.value,getUnlitUniformColorSpace(i)),b.isFog?(et.fogNear.value=b.near,et.fogFar.value=b.far):b.isFogExp2&&(et.fogDensity.value=b.density)}function s(et,b,it,nt,ct){b.isMeshBasicMaterial||b.isMeshLambertMaterial?c(et,b):b.isMeshToonMaterial?(c(et,b),_e(et,b)):b.isMeshPhongMaterial?(c(et,b),$(et,b)):b.isMeshStandardMaterial?(c(et,b),j(et,b),b.isMeshPhysicalMaterial&&tt(et,b,ct)):b.isMeshMatcapMaterial?(c(et,b),rt(et,b)):b.isMeshDepthMaterial?c(et,b):b.isMeshDistanceMaterial?(c(et,b),ot(et,b)):b.isMeshNormalMaterial?c(et,b):b.isLineBasicMaterial?(d(et,b),b.isLineDashedMaterial&&h(et,b)):b.isPointsMaterial?_(et,b,it,nt):b.isSpriteMaterial?g(et,b):b.isShadowMaterial?(et.color.value.copy(b.color),et.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}function c(et,b){et.opacity.value=b.opacity,b.color&&et.diffuse.value.copy(b.color),b.emissive&&et.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(et.map.value=b.map,o(b.map,et.mapTransform)),b.alphaMap&&(et.alphaMap.value=b.alphaMap,o(b.alphaMap,et.alphaMapTransform)),b.bumpMap&&(et.bumpMap.value=b.bumpMap,o(b.bumpMap,et.bumpMapTransform),et.bumpScale.value=b.bumpScale,b.side===BackSide&&(et.bumpScale.value*=-1)),b.normalMap&&(et.normalMap.value=b.normalMap,o(b.normalMap,et.normalMapTransform),et.normalScale.value.copy(b.normalScale),b.side===BackSide&&et.normalScale.value.negate()),b.displacementMap&&(et.displacementMap.value=b.displacementMap,o(b.displacementMap,et.displacementMapTransform),et.displacementScale.value=b.displacementScale,et.displacementBias.value=b.displacementBias),b.emissiveMap&&(et.emissiveMap.value=b.emissiveMap,o(b.emissiveMap,et.emissiveMapTransform)),b.specularMap&&(et.specularMap.value=b.specularMap,o(b.specularMap,et.specularMapTransform)),b.alphaTest>0&&(et.alphaTest.value=b.alphaTest);const it=e.get(b),nt=it.envMap,ct=it.envMapRotation;nt&&(et.envMap.value=nt,_e1.copy(ct),_e1.x*=-1,_e1.y*=-1,_e1.z*=-1,nt.isCubeTexture&&nt.isRenderTargetTexture===!1&&(_e1.y*=-1,_e1.z*=-1),et.envMapRotation.value.setFromMatrix4(_m1.makeRotationFromEuler(_e1)),et.flipEnvMap.value=nt.isCubeTexture&&nt.isRenderTargetTexture===!1?-1:1,et.reflectivity.value=b.reflectivity,et.ior.value=b.ior,et.refractionRatio.value=b.refractionRatio),b.lightMap&&(et.lightMap.value=b.lightMap,et.lightMapIntensity.value=b.lightMapIntensity,o(b.lightMap,et.lightMapTransform)),b.aoMap&&(et.aoMap.value=b.aoMap,et.aoMapIntensity.value=b.aoMapIntensity,o(b.aoMap,et.aoMapTransform))}function d(et,b){et.diffuse.value.copy(b.color),et.opacity.value=b.opacity,b.map&&(et.map.value=b.map,o(b.map,et.mapTransform))}function h(et,b){et.dashSize.value=b.dashSize,et.totalSize.value=b.dashSize+b.gapSize,et.scale.value=b.scale}function _(et,b,it,nt){et.diffuse.value.copy(b.color),et.opacity.value=b.opacity,et.size.value=b.size*it,et.scale.value=nt*.5,b.map&&(et.map.value=b.map,o(b.map,et.uvTransform)),b.alphaMap&&(et.alphaMap.value=b.alphaMap,o(b.alphaMap,et.alphaMapTransform)),b.alphaTest>0&&(et.alphaTest.value=b.alphaTest)}function g(et,b){et.diffuse.value.copy(b.color),et.opacity.value=b.opacity,et.rotation.value=b.rotation,b.map&&(et.map.value=b.map,o(b.map,et.mapTransform)),b.alphaMap&&(et.alphaMap.value=b.alphaMap,o(b.alphaMap,et.alphaMapTransform)),b.alphaTest>0&&(et.alphaTest.value=b.alphaTest)}function $(et,b){et.specular.value.copy(b.specular),et.shininess.value=Math.max(b.shininess,1e-4)}function _e(et,b){b.gradientMap&&(et.gradientMap.value=b.gradientMap)}function j(et,b){et.metalness.value=b.metalness,b.metalnessMap&&(et.metalnessMap.value=b.metalnessMap,o(b.metalnessMap,et.metalnessMapTransform)),et.roughness.value=b.roughness,b.roughnessMap&&(et.roughnessMap.value=b.roughnessMap,o(b.roughnessMap,et.roughnessMapTransform)),b.envMap&&(et.envMapIntensity.value=b.envMapIntensity)}function tt(et,b,it){et.ior.value=b.ior,b.sheen>0&&(et.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),et.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(et.sheenColorMap.value=b.sheenColorMap,o(b.sheenColorMap,et.sheenColorMapTransform)),b.sheenRoughnessMap&&(et.sheenRoughnessMap.value=b.sheenRoughnessMap,o(b.sheenRoughnessMap,et.sheenRoughnessMapTransform))),b.clearcoat>0&&(et.clearcoat.value=b.clearcoat,et.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(et.clearcoatMap.value=b.clearcoatMap,o(b.clearcoatMap,et.clearcoatMapTransform)),b.clearcoatRoughnessMap&&(et.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap,o(b.clearcoatRoughnessMap,et.clearcoatRoughnessMapTransform)),b.clearcoatNormalMap&&(et.clearcoatNormalMap.value=b.clearcoatNormalMap,o(b.clearcoatNormalMap,et.clearcoatNormalMapTransform),et.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),b.side===BackSide&&et.clearcoatNormalScale.value.negate())),b.dispersion>0&&(et.dispersion.value=b.dispersion),b.iridescence>0&&(et.iridescence.value=b.iridescence,et.iridescenceIOR.value=b.iridescenceIOR,et.iridescenceThicknessMinimum.value=b.iridescenceThicknessRange[0],et.iridescenceThicknessMaximum.value=b.iridescenceThicknessRange[1],b.iridescenceMap&&(et.iridescenceMap.value=b.iridescenceMap,o(b.iridescenceMap,et.iridescenceMapTransform)),b.iridescenceThicknessMap&&(et.iridescenceThicknessMap.value=b.iridescenceThicknessMap,o(b.iridescenceThicknessMap,et.iridescenceThicknessMapTransform))),b.transmission>0&&(et.transmission.value=b.transmission,et.transmissionSamplerMap.value=it.texture,et.transmissionSamplerSize.value.set(it.width,it.height),b.transmissionMap&&(et.transmissionMap.value=b.transmissionMap,o(b.transmissionMap,et.transmissionMapTransform)),et.thickness.value=b.thickness,b.thicknessMap&&(et.thicknessMap.value=b.thicknessMap,o(b.thicknessMap,et.thicknessMapTransform)),et.attenuationDistance.value=b.attenuationDistance,et.attenuationColor.value.copy(b.attenuationColor)),b.anisotropy>0&&(et.anisotropyVector.value.set(b.anisotropy*Math.cos(b.anisotropyRotation),b.anisotropy*Math.sin(b.anisotropyRotation)),b.anisotropyMap&&(et.anisotropyMap.value=b.anisotropyMap,o(b.anisotropyMap,et.anisotropyMapTransform))),et.specularIntensity.value=b.specularIntensity,et.specularColor.value.copy(b.specularColor),b.specularColorMap&&(et.specularColorMap.value=b.specularColorMap,o(b.specularColorMap,et.specularColorMapTransform)),b.specularIntensityMap&&(et.specularIntensityMap.value=b.specularIntensityMap,o(b.specularIntensityMap,et.specularIntensityMapTransform))}function rt(et,b){b.matcap&&(et.matcap.value=b.matcap)}function ot(et,b){const it=e.get(b).light;et.referencePosition.value.setFromMatrixPosition(it.matrixWorld),et.nearDistance.value=it.shadow.camera.near,et.farDistance.value=it.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function WebGLUniformsGroups(i,e,o,a){let s={},c={},d=[];const h=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function _(it,nt){const ct=nt.program;a.uniformBlockBinding(it,ct)}function g(it,nt){let ct=s[it.id];ct===void 0&&(rt(it),ct=$(it),s[it.id]=ct,it.addEventListener("dispose",et));const mt=nt.program;a.updateUBOMapping(it,mt);const dt=e.render.frame;c[it.id]!==dt&&(j(it),c[it.id]=dt)}function $(it){const nt=_e();it.__bindingPointIndex=nt;const ct=i.createBuffer(),mt=it.__size,dt=it.usage;return i.bindBuffer(i.UNIFORM_BUFFER,ct),i.bufferData(i.UNIFORM_BUFFER,mt,dt),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,nt,ct),ct}function _e(){for(let it=0;it<h;it++)if(d.indexOf(it)===-1)return d.push(it),it;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function j(it){const nt=s[it.id],ct=it.uniforms,mt=it.__cache;i.bindBuffer(i.UNIFORM_BUFFER,nt);for(let dt=0,ft=ct.length;dt<ft;dt++){const gt=Array.isArray(ct[dt])?ct[dt]:[ct[dt]];for(let ut=0,at=gt.length;ut<at;ut++){const _t=gt[ut];if(tt(_t,dt,ut,mt)===!0){const wt=_t.__offset,At=Array.isArray(_t.value)?_t.value:[_t.value];let Lt=0;for(let Dt=0;Dt<At.length;Dt++){const Rt=At[Dt],It=ot(Rt);typeof Rt=="number"||typeof Rt=="boolean"?(_t.__data[0]=Rt,i.bufferSubData(i.UNIFORM_BUFFER,wt+Lt,_t.__data)):Rt.isMatrix3?(_t.__data[0]=Rt.elements[0],_t.__data[1]=Rt.elements[1],_t.__data[2]=Rt.elements[2],_t.__data[3]=0,_t.__data[4]=Rt.elements[3],_t.__data[5]=Rt.elements[4],_t.__data[6]=Rt.elements[5],_t.__data[7]=0,_t.__data[8]=Rt.elements[6],_t.__data[9]=Rt.elements[7],_t.__data[10]=Rt.elements[8],_t.__data[11]=0):(Rt.toArray(_t.__data,Lt),Lt+=It.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,wt,_t.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function tt(it,nt,ct,mt){const dt=it.value,ft=nt+"_"+ct;if(mt[ft]===void 0)return typeof dt=="number"||typeof dt=="boolean"?mt[ft]=dt:mt[ft]=dt.clone(),!0;{const gt=mt[ft];if(typeof dt=="number"||typeof dt=="boolean"){if(gt!==dt)return mt[ft]=dt,!0}else if(gt.equals(dt)===!1)return gt.copy(dt),!0}return!1}function rt(it){const nt=it.uniforms;let ct=0;const mt=16;for(let ft=0,gt=nt.length;ft<gt;ft++){const ut=Array.isArray(nt[ft])?nt[ft]:[nt[ft]];for(let at=0,_t=ut.length;at<_t;at++){const wt=ut[at],At=Array.isArray(wt.value)?wt.value:[wt.value];for(let Lt=0,Dt=At.length;Lt<Dt;Lt++){const Rt=At[Lt],It=ot(Rt),vt=ct%mt;vt!==0&&mt-vt<It.boundary&&(ct+=mt-vt),wt.__data=new Float32Array(It.storage/Float32Array.BYTES_PER_ELEMENT),wt.__offset=ct,ct+=It.storage}}}const dt=ct%mt;return dt>0&&(ct+=mt-dt),it.__size=ct,it.__cache={},this}function ot(it){const nt={boundary:0,storage:0};return typeof it=="number"||typeof it=="boolean"?(nt.boundary=4,nt.storage=4):it.isVector2?(nt.boundary=8,nt.storage=8):it.isVector3||it.isColor?(nt.boundary=16,nt.storage=12):it.isVector4?(nt.boundary=16,nt.storage=16):it.isMatrix3?(nt.boundary=48,nt.storage=48):it.isMatrix4?(nt.boundary=64,nt.storage=64):it.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",it),nt}function et(it){const nt=it.target;nt.removeEventListener("dispose",et);const ct=d.indexOf(nt.__bindingPointIndex);d.splice(ct,1),i.deleteBuffer(s[nt.id]),delete s[nt.id],delete c[nt.id]}function b(){for(const it in s)i.deleteBuffer(s[it]);d=[],s={},c={}}return{bind:_,update:g,dispose:b}}class WebGLRenderer{constructor(e={}){const{canvas:o=createCanvasElement(),context:a=null,depth:s=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:_=!0,preserveDrawingBuffer:g=!1,powerPreference:$="default",failIfMajorPerformanceCaveat:_e=!1}=e;this.isWebGLRenderer=!0;let j;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");j=a.getContextAttributes().alpha}else j=d;const tt=new Uint32Array(4),rt=new Int32Array(4);let ot=null,et=null;const b=[],it=[];this.domElement=o,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=SRGBColorSpace,this.toneMapping=NoToneMapping,this.toneMappingExposure=1;const nt=this;let ct=!1,mt=0,dt=0,ft=null,gt=-1,ut=null;const at=new Vector4,_t=new Vector4;let wt=null;const At=new Color(0);let Lt=0,Dt=o.width,Rt=o.height,It=1,vt=null,Ut=null;const Ft=new Vector4(0,0,Dt,Rt),Ht=new Vector4(0,0,Dt,Rt);let tn=!1;const xn=new Frustum;let Ct=!1,Bt=!1;const Xt=new Matrix4,jt=new Vector3,dn=new Vector4,mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gn=!1;function Rn(){return ft===null?It:1}let pt=a;function Ln(lt,St){return o.getContext(lt,St)}try{const lt={alpha:!0,depth:s,stencil:c,antialias:h,premultipliedAlpha:_,preserveDrawingBuffer:g,powerPreference:$,failIfMajorPerformanceCaveat:_e};if("setAttribute"in o&&o.setAttribute("data-engine",`three.js r${REVISION}`),o.addEventListener("webglcontextlost",bt,!1),o.addEventListener("webglcontextrestored",Pt,!1),o.addEventListener("webglcontextcreationerror",Wt,!1),pt===null){const St="webgl2";if(pt=Ln(St,lt),pt===null)throw Ln(St)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(lt){throw console.error("THREE.WebGLRenderer: "+lt.message),lt}let An,Cn,nn,Dn,un,hn,ht,st,Tt,kt,Ot,Nt,rn,$t,Kt,pn,Vt,qt,vn,cn,Zt,fn,_n,wn;function xt(){An=new WebGLExtensions(pt),An.init(),fn=new WebGLUtils(pt,An),Cn=new WebGLCapabilities(pt,An,e,fn),nn=new WebGLState(pt),Dn=new WebGLInfo(pt),un=new WebGLProperties,hn=new WebGLTextures(pt,An,nn,un,Cn,fn,Dn),ht=new WebGLCubeMaps(nt),st=new WebGLCubeUVMaps(nt),Tt=new WebGLAttributes(pt),_n=new WebGLBindingStates(pt,Tt),kt=new WebGLGeometries(pt,Tt,Dn,_n),Ot=new WebGLObjects(pt,kt,Tt,Dn),vn=new WebGLMorphtargets(pt,Cn,hn),pn=new WebGLClipping(un),Nt=new WebGLPrograms(nt,ht,st,An,Cn,_n,pn),rn=new WebGLMaterials(nt,un),$t=new WebGLRenderLists,Kt=new WebGLRenderStates(An),qt=new WebGLBackground(nt,ht,st,nn,Ot,j,_),Vt=new WebGLShadowMap(nt,Ot,Cn),wn=new WebGLUniformsGroups(pt,Dn,Cn,nn),cn=new WebGLBufferRenderer(pt,An,Dn),Zt=new WebGLIndexedBufferRenderer(pt,An,Dn),Dn.programs=Nt.programs,nt.capabilities=Cn,nt.extensions=An,nt.properties=un,nt.renderLists=$t,nt.shadowMap=Vt,nt.state=nn,nt.info=Dn}xt();const zt=new WebXRManager(nt,pt);this.xr=zt,this.getContext=function(){return pt},this.getContextAttributes=function(){return pt.getContextAttributes()},this.forceContextLoss=function(){const lt=An.get("WEBGL_lose_context");lt&&lt.loseContext()},this.forceContextRestore=function(){const lt=An.get("WEBGL_lose_context");lt&&lt.restoreContext()},this.getPixelRatio=function(){return It},this.setPixelRatio=function(lt){lt!==void 0&&(It=lt,this.setSize(Dt,Rt,!1))},this.getSize=function(lt){return lt.set(Dt,Rt)},this.setSize=function(lt,St,Mt=!0){if(zt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Dt=lt,Rt=St,o.width=Math.floor(lt*It),o.height=Math.floor(St*It),Mt===!0&&(o.style.width=lt+"px",o.style.height=St+"px"),this.setViewport(0,0,lt,St)},this.getDrawingBufferSize=function(lt){return lt.set(Dt*It,Rt*It).floor()},this.setDrawingBufferSize=function(lt,St,Mt){Dt=lt,Rt=St,It=Mt,o.width=Math.floor(lt*Mt),o.height=Math.floor(St*Mt),this.setViewport(0,0,lt,St)},this.getCurrentViewport=function(lt){return lt.copy(at)},this.getViewport=function(lt){return lt.copy(Ft)},this.setViewport=function(lt,St,Mt,Et){lt.isVector4?Ft.set(lt.x,lt.y,lt.z,lt.w):Ft.set(lt,St,Mt,Et),nn.viewport(at.copy(Ft).multiplyScalar(It).round())},this.getScissor=function(lt){return lt.copy(Ht)},this.setScissor=function(lt,St,Mt,Et){lt.isVector4?Ht.set(lt.x,lt.y,lt.z,lt.w):Ht.set(lt,St,Mt,Et),nn.scissor(_t.copy(Ht).multiplyScalar(It).round())},this.getScissorTest=function(){return tn},this.setScissorTest=function(lt){nn.setScissorTest(tn=lt)},this.setOpaqueSort=function(lt){vt=lt},this.setTransparentSort=function(lt){Ut=lt},this.getClearColor=function(lt){return lt.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(lt=!0,St=!0,Mt=!0){let Et=0;if(lt){let yt=!1;if(ft!==null){const Gt=ft.texture.format;yt=Gt===RGBAIntegerFormat||Gt===RGIntegerFormat||Gt===RedIntegerFormat}if(yt){const Gt=ft.texture.type,Yt=Gt===UnsignedByteType||Gt===UnsignedIntType||Gt===UnsignedShortType||Gt===UnsignedInt248Type||Gt===UnsignedShort4444Type||Gt===UnsignedShort5551Type,Qt=qt.getClearColor(),Jt=qt.getClearAlpha(),sn=Qt.r,ln=Qt.g,on=Qt.b;Yt?(tt[0]=sn,tt[1]=ln,tt[2]=on,tt[3]=Jt,pt.clearBufferuiv(pt.COLOR,0,tt)):(rt[0]=sn,rt[1]=ln,rt[2]=on,rt[3]=Jt,pt.clearBufferiv(pt.COLOR,0,rt))}else Et|=pt.COLOR_BUFFER_BIT}St&&(Et|=pt.DEPTH_BUFFER_BIT),Mt&&(Et|=pt.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),pt.clear(Et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){o.removeEventListener("webglcontextlost",bt,!1),o.removeEventListener("webglcontextrestored",Pt,!1),o.removeEventListener("webglcontextcreationerror",Wt,!1),$t.dispose(),Kt.dispose(),un.dispose(),ht.dispose(),st.dispose(),Ot.dispose(),_n.dispose(),wn.dispose(),Nt.dispose(),zt.dispose(),zt.removeEventListener("sessionstart",zn),zt.removeEventListener("sessionend",Qn),Wn.stop()};function bt(lt){lt.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),ct=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),ct=!1;const lt=Dn.autoReset,St=Vt.enabled,Mt=Vt.autoUpdate,Et=Vt.needsUpdate,yt=Vt.type;xt(),Dn.autoReset=lt,Vt.enabled=St,Vt.autoUpdate=Mt,Vt.needsUpdate=Et,Vt.type=yt}function Wt(lt){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",lt.statusMessage)}function an(lt){const St=lt.target;St.removeEventListener("dispose",an),Sn(St)}function Sn(lt){Un(lt),un.remove(lt)}function Un(lt){const St=un.get(lt).programs;St!==void 0&&(St.forEach(function(Mt){Nt.releaseProgram(Mt)}),lt.isShaderMaterial&&Nt.releaseShaderCache(lt))}this.renderBufferDirect=function(lt,St,Mt,Et,yt,Gt){St===null&&(St=mn);const Yt=yt.isMesh&&yt.matrixWorld.determinant()<0,Qt=rr(lt,St,Mt,Et,yt);nn.setMaterial(Et,Yt);let Jt=Mt.index,sn=1;if(Et.wireframe===!0){if(Jt=kt.getWireframeAttribute(Mt),Jt===void 0)return;sn=2}const ln=Mt.drawRange,on=Mt.attributes.position;let Mn=ln.start*sn,bn=(ln.start+ln.count)*sn;Gt!==null&&(Mn=Math.max(Mn,Gt.start*sn),bn=Math.min(bn,(Gt.start+Gt.count)*sn)),Jt!==null?(Mn=Math.max(Mn,0),bn=Math.min(bn,Jt.count)):on!=null&&(Mn=Math.max(Mn,0),bn=Math.min(bn,on.count));const Pn=bn-Mn;if(Pn<0||Pn===1/0)return;_n.setup(yt,Et,Qt,Mt,Jt);let kn,En=cn;if(Jt!==null&&(kn=Tt.get(Jt),En=Zt,En.setIndex(kn)),yt.isMesh)Et.wireframe===!0?(nn.setLineWidth(Et.wireframeLinewidth*Rn()),En.setMode(pt.LINES)):En.setMode(pt.TRIANGLES);else if(yt.isLine){let en=Et.linewidth;en===void 0&&(en=1),nn.setLineWidth(en*Rn()),yt.isLineSegments?En.setMode(pt.LINES):yt.isLineLoop?En.setMode(pt.LINE_LOOP):En.setMode(pt.LINE_STRIP)}else yt.isPoints?En.setMode(pt.POINTS):yt.isSprite&&En.setMode(pt.TRIANGLES);if(yt.isBatchedMesh)if(yt._multiDrawInstances!==null)En.renderMultiDrawInstances(yt._multiDrawStarts,yt._multiDrawCounts,yt._multiDrawCount,yt._multiDrawInstances);else if(An.get("WEBGL_multi_draw"))En.renderMultiDraw(yt._multiDrawStarts,yt._multiDrawCounts,yt._multiDrawCount);else{const en=yt._multiDrawStarts,Fn=yt._multiDrawCounts,Tn=yt._multiDrawCount,Vn=Jt?Tt.get(Jt).bytesPerElement:1,$n=un.get(Et).currentProgram.getUniforms();for(let On=0;On<Tn;On++)$n.setValue(pt,"_gl_DrawID",On),En.render(en[On]/Vn,Fn[On])}else if(yt.isInstancedMesh)En.renderInstances(Mn,Pn,yt.count);else if(Mt.isInstancedBufferGeometry){const en=Mt._maxInstanceCount!==void 0?Mt._maxInstanceCount:1/0,Fn=Math.min(Mt.instanceCount,en);En.renderInstances(Mn,Pn,Fn)}else En.render(Mn,Pn)};function Nn(lt,St,Mt){lt.transparent===!0&&lt.side===DoubleSide&&lt.forceSinglePass===!1?(lt.side=BackSide,lt.needsUpdate=!0,jn(lt,St,Mt),lt.side=FrontSide,lt.needsUpdate=!0,jn(lt,St,Mt),lt.side=DoubleSide):jn(lt,St,Mt)}this.compile=function(lt,St,Mt=null){Mt===null&&(Mt=lt),et=Kt.get(Mt),et.init(St),it.push(et),Mt.traverseVisible(function(yt){yt.isLight&&yt.layers.test(St.layers)&&(et.pushLight(yt),yt.castShadow&&et.pushShadow(yt))}),lt!==Mt&&lt.traverseVisible(function(yt){yt.isLight&&yt.layers.test(St.layers)&&(et.pushLight(yt),yt.castShadow&&et.pushShadow(yt))}),et.setupLights();const Et=new Set;return lt.traverse(function(yt){const Gt=yt.material;if(Gt)if(Array.isArray(Gt))for(let Yt=0;Yt<Gt.length;Yt++){const Qt=Gt[Yt];Nn(Qt,Mt,yt),Et.add(Qt)}else Nn(Gt,Mt,yt),Et.add(Gt)}),it.pop(),et=null,Et},this.compileAsync=function(lt,St,Mt=null){const Et=this.compile(lt,St,Mt);return new Promise(yt=>{function Gt(){if(Et.forEach(function(Yt){un.get(Yt).currentProgram.isReady()&&Et.delete(Yt)}),Et.size===0){yt(lt);return}setTimeout(Gt,10)}An.get("KHR_parallel_shader_compile")!==null?Gt():setTimeout(Gt,10)})};let yn=null;function Gn(lt){yn&&yn(lt)}function zn(){Wn.stop()}function Qn(){Wn.start()}const Wn=new WebGLAnimation;Wn.setAnimationLoop(Gn),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(lt){yn=lt,zt.setAnimationLoop(lt),lt===null?Wn.stop():Wn.start()},zt.addEventListener("sessionstart",zn),zt.addEventListener("sessionend",Qn),this.render=function(lt,St){if(St!==void 0&&St.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ct===!0)return;if(lt.matrixWorldAutoUpdate===!0&&lt.updateMatrixWorld(),St.parent===null&&St.matrixWorldAutoUpdate===!0&&St.updateMatrixWorld(),zt.enabled===!0&&zt.isPresenting===!0&&(zt.cameraAutoUpdate===!0&&zt.updateCamera(St),St=zt.getCamera()),lt.isScene===!0&&lt.onBeforeRender(nt,lt,St,ft),et=Kt.get(lt,it.length),et.init(St),it.push(et),Xt.multiplyMatrices(St.projectionMatrix,St.matrixWorldInverse),xn.setFromProjectionMatrix(Xt),Bt=this.localClippingEnabled,Ct=pn.init(this.clippingPlanes,Bt),ot=$t.get(lt,b.length),ot.init(),b.push(ot),zt.enabled===!0&&zt.isPresenting===!0){const Gt=nt.xr.getDepthSensingMesh();Gt!==null&&Yn(Gt,St,-1/0,nt.sortObjects)}Yn(lt,St,0,nt.sortObjects),ot.finish(),nt.sortObjects===!0&&ot.sort(vt,Ut),gn=zt.enabled===!1||zt.isPresenting===!1||zt.hasDepthSensing()===!1,gn&&qt.addToRenderList(ot,lt),this.info.render.frame++,Ct===!0&&pn.beginShadows();const Mt=et.state.shadowsArray;Vt.render(Mt,lt,St),Ct===!0&&pn.endShadows(),this.info.autoReset===!0&&this.info.reset();const Et=ot.opaque,yt=ot.transmissive;if(et.setupLights(),St.isArrayCamera){const Gt=St.cameras;if(yt.length>0)for(let Yt=0,Qt=Gt.length;Yt<Qt;Yt++){const Jt=Gt[Yt];_i(Et,yt,lt,Jt)}gn&&qt.render(lt);for(let Yt=0,Qt=Gt.length;Yt<Qt;Yt++){const Jt=Gt[Yt];Jn(ot,lt,Jt,Jt.viewport)}}else yt.length>0&&_i(Et,yt,lt,St),gn&&qt.render(lt),Jn(ot,lt,St);ft!==null&&(hn.updateMultisampleRenderTarget(ft),hn.updateRenderTargetMipmap(ft)),lt.isScene===!0&&lt.onAfterRender(nt,lt,St),_n.resetDefaultState(),gt=-1,ut=null,it.pop(),it.length>0?(et=it[it.length-1],Ct===!0&&pn.setGlobalState(nt.clippingPlanes,et.state.camera)):et=null,b.pop(),b.length>0?ot=b[b.length-1]:ot=null};function Yn(lt,St,Mt,Et){if(lt.visible===!1)return;if(lt.layers.test(St.layers)){if(lt.isGroup)Mt=lt.renderOrder;else if(lt.isLOD)lt.autoUpdate===!0&&lt.update(St);else if(lt.isLight)et.pushLight(lt),lt.castShadow&&et.pushShadow(lt);else if(lt.isSprite){if(!lt.frustumCulled||xn.intersectsSprite(lt)){Et&&dn.setFromMatrixPosition(lt.matrixWorld).applyMatrix4(Xt);const Yt=Ot.update(lt),Qt=lt.material;Qt.visible&&ot.push(lt,Yt,Qt,Mt,dn.z,null)}}else if((lt.isMesh||lt.isLine||lt.isPoints)&&(!lt.frustumCulled||xn.intersectsObject(lt))){const Yt=Ot.update(lt),Qt=lt.material;if(Et&&(lt.boundingSphere!==void 0?(lt.boundingSphere===null&&lt.computeBoundingSphere(),dn.copy(lt.boundingSphere.center)):(Yt.boundingSphere===null&&Yt.computeBoundingSphere(),dn.copy(Yt.boundingSphere.center)),dn.applyMatrix4(lt.matrixWorld).applyMatrix4(Xt)),Array.isArray(Qt)){const Jt=Yt.groups;for(let sn=0,ln=Jt.length;sn<ln;sn++){const on=Jt[sn],Mn=Qt[on.materialIndex];Mn&&Mn.visible&&ot.push(lt,Yt,Mn,Mt,dn.z,on)}}else Qt.visible&&ot.push(lt,Yt,Qt,Mt,dn.z,null)}}const Gt=lt.children;for(let Yt=0,Qt=Gt.length;Yt<Qt;Yt++)Yn(Gt[Yt],St,Mt,Et)}function Jn(lt,St,Mt,Et){const yt=lt.opaque,Gt=lt.transmissive,Yt=lt.transparent;et.setupLightsView(Mt),Ct===!0&&pn.setGlobalState(nt.clippingPlanes,Mt),Et&&nn.viewport(at.copy(Et)),yt.length>0&&Xn(yt,St,Mt),Gt.length>0&&Xn(Gt,St,Mt),Yt.length>0&&Xn(Yt,St,Mt),nn.buffers.depth.setTest(!0),nn.buffers.depth.setMask(!0),nn.buffers.color.setMask(!0),nn.setPolygonOffset(!1)}function _i(lt,St,Mt,Et){if((Mt.isScene===!0?Mt.overrideMaterial:null)!==null)return;et.state.transmissionRenderTarget[Et.id]===void 0&&(et.state.transmissionRenderTarget[Et.id]=new WebGLRenderTarget(1,1,{generateMipmaps:!0,type:An.has("EXT_color_buffer_half_float")||An.has("EXT_color_buffer_float")?HalfFloatType:UnsignedByteType,minFilter:LinearMipmapLinearFilter,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ColorManagement.workingColorSpace}));const Gt=et.state.transmissionRenderTarget[Et.id],Yt=Et.viewport||at;Gt.setSize(Yt.z,Yt.w);const Qt=nt.getRenderTarget();nt.setRenderTarget(Gt),nt.getClearColor(At),Lt=nt.getClearAlpha(),Lt<1&&nt.setClearColor(16777215,.5),gn?qt.render(Mt):nt.clear();const Jt=nt.toneMapping;nt.toneMapping=NoToneMapping;const sn=Et.viewport;if(Et.viewport!==void 0&&(Et.viewport=void 0),et.setupLightsView(Et),Ct===!0&&pn.setGlobalState(nt.clippingPlanes,Et),Xn(lt,Mt,Et),hn.updateMultisampleRenderTarget(Gt),hn.updateRenderTargetMipmap(Gt),An.has("WEBGL_multisampled_render_to_texture")===!1){let ln=!1;for(let on=0,Mn=St.length;on<Mn;on++){const bn=St[on],Pn=bn.object,kn=bn.geometry,En=bn.material,en=bn.group;if(En.side===DoubleSide&&Pn.layers.test(Et.layers)){const Fn=En.side;En.side=BackSide,En.needsUpdate=!0,er(Pn,Mt,Et,kn,En,en),En.side=Fn,En.needsUpdate=!0,ln=!0}}ln===!0&&(hn.updateMultisampleRenderTarget(Gt),hn.updateRenderTargetMipmap(Gt))}nt.setRenderTarget(Qt),nt.setClearColor(At,Lt),sn!==void 0&&(Et.viewport=sn),nt.toneMapping=Jt}function Xn(lt,St,Mt){const Et=St.isScene===!0?St.overrideMaterial:null;for(let yt=0,Gt=lt.length;yt<Gt;yt++){const Yt=lt[yt],Qt=Yt.object,Jt=Yt.geometry,sn=Et===null?Yt.material:Et,ln=Yt.group;Qt.layers.test(Mt.layers)&&er(Qt,St,Mt,Jt,sn,ln)}}function er(lt,St,Mt,Et,yt,Gt){lt.onBeforeRender(nt,St,Mt,Et,yt,Gt),lt.modelViewMatrix.multiplyMatrices(Mt.matrixWorldInverse,lt.matrixWorld),lt.normalMatrix.getNormalMatrix(lt.modelViewMatrix),yt.transparent===!0&&yt.side===DoubleSide&&yt.forceSinglePass===!1?(yt.side=BackSide,yt.needsUpdate=!0,nt.renderBufferDirect(Mt,St,Et,yt,lt,Gt),yt.side=FrontSide,yt.needsUpdate=!0,nt.renderBufferDirect(Mt,St,Et,yt,lt,Gt),yt.side=DoubleSide):nt.renderBufferDirect(Mt,St,Et,yt,lt,Gt),lt.onAfterRender(nt,St,Mt,Et,yt,Gt)}function jn(lt,St,Mt){St.isScene!==!0&&(St=mn);const Et=un.get(lt),yt=et.state.lights,Gt=et.state.shadowsArray,Yt=yt.state.version,Qt=Nt.getParameters(lt,yt.state,Gt,St,Mt),Jt=Nt.getProgramCacheKey(Qt);let sn=Et.programs;Et.environment=lt.isMeshStandardMaterial?St.environment:null,Et.fog=St.fog,Et.envMap=(lt.isMeshStandardMaterial?st:ht).get(lt.envMap||Et.environment),Et.envMapRotation=Et.environment!==null&&lt.envMap===null?St.environmentRotation:lt.envMapRotation,sn===void 0&&(lt.addEventListener("dispose",an),sn=new Map,Et.programs=sn);let ln=sn.get(Jt);if(ln!==void 0){if(Et.currentProgram===ln&&Et.lightsStateVersion===Yt)return nr(lt,Qt),ln}else Qt.uniforms=Nt.getUniforms(lt),lt.onBeforeCompile(Qt,nt),ln=Nt.acquireProgram(Qt,Jt),sn.set(Jt,ln),Et.uniforms=Qt.uniforms;const on=Et.uniforms;return(!lt.isShaderMaterial&&!lt.isRawShaderMaterial||lt.clipping===!0)&&(on.clippingPlanes=pn.uniform),nr(lt,Qt),Et.needsLights=ar(lt),Et.lightsStateVersion=Yt,Et.needsLights&&(on.ambientLightColor.value=yt.state.ambient,on.lightProbe.value=yt.state.probe,on.directionalLights.value=yt.state.directional,on.directionalLightShadows.value=yt.state.directionalShadow,on.spotLights.value=yt.state.spot,on.spotLightShadows.value=yt.state.spotShadow,on.rectAreaLights.value=yt.state.rectArea,on.ltc_1.value=yt.state.rectAreaLTC1,on.ltc_2.value=yt.state.rectAreaLTC2,on.pointLights.value=yt.state.point,on.pointLightShadows.value=yt.state.pointShadow,on.hemisphereLights.value=yt.state.hemi,on.directionalShadowMap.value=yt.state.directionalShadowMap,on.directionalShadowMatrix.value=yt.state.directionalShadowMatrix,on.spotShadowMap.value=yt.state.spotShadowMap,on.spotLightMatrix.value=yt.state.spotLightMatrix,on.spotLightMap.value=yt.state.spotLightMap,on.pointShadowMap.value=yt.state.pointShadowMap,on.pointShadowMatrix.value=yt.state.pointShadowMatrix),Et.currentProgram=ln,Et.uniformsList=null,ln}function tr(lt){if(lt.uniformsList===null){const St=lt.currentProgram.getUniforms();lt.uniformsList=WebGLUniforms.seqWithValue(St.seq,lt.uniforms)}return lt.uniformsList}function nr(lt,St){const Mt=un.get(lt);Mt.outputColorSpace=St.outputColorSpace,Mt.batching=St.batching,Mt.batchingColor=St.batchingColor,Mt.instancing=St.instancing,Mt.instancingColor=St.instancingColor,Mt.instancingMorph=St.instancingMorph,Mt.skinning=St.skinning,Mt.morphTargets=St.morphTargets,Mt.morphNormals=St.morphNormals,Mt.morphColors=St.morphColors,Mt.morphTargetsCount=St.morphTargetsCount,Mt.numClippingPlanes=St.numClippingPlanes,Mt.numIntersection=St.numClipIntersection,Mt.vertexAlphas=St.vertexAlphas,Mt.vertexTangents=St.vertexTangents,Mt.toneMapping=St.toneMapping}function rr(lt,St,Mt,Et,yt){St.isScene!==!0&&(St=mn),hn.resetTextureUnits();const Gt=St.fog,Yt=Et.isMeshStandardMaterial?St.environment:null,Qt=ft===null?nt.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:LinearSRGBColorSpace,Jt=(Et.isMeshStandardMaterial?st:ht).get(Et.envMap||Yt),sn=Et.vertexColors===!0&&!!Mt.attributes.color&&Mt.attributes.color.itemSize===4,ln=!!Mt.attributes.tangent&&(!!Et.normalMap||Et.anisotropy>0),on=!!Mt.morphAttributes.position,Mn=!!Mt.morphAttributes.normal,bn=!!Mt.morphAttributes.color;let Pn=NoToneMapping;Et.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Pn=nt.toneMapping);const kn=Mt.morphAttributes.position||Mt.morphAttributes.normal||Mt.morphAttributes.color,En=kn!==void 0?kn.length:0,en=un.get(Et),Fn=et.state.lights;if(Ct===!0&&(Bt===!0||lt!==ut)){const Bn=lt===ut&&Et.id===gt;pn.setState(Et,lt,Bn)}let Tn=!1;Et.version===en.__version?(en.needsLights&&en.lightsStateVersion!==Fn.state.version||en.outputColorSpace!==Qt||yt.isBatchedMesh&&en.batching===!1||!yt.isBatchedMesh&&en.batching===!0||yt.isBatchedMesh&&en.batchingColor===!0&&yt.colorTexture===null||yt.isBatchedMesh&&en.batchingColor===!1&&yt.colorTexture!==null||yt.isInstancedMesh&&en.instancing===!1||!yt.isInstancedMesh&&en.instancing===!0||yt.isSkinnedMesh&&en.skinning===!1||!yt.isSkinnedMesh&&en.skinning===!0||yt.isInstancedMesh&&en.instancingColor===!0&&yt.instanceColor===null||yt.isInstancedMesh&&en.instancingColor===!1&&yt.instanceColor!==null||yt.isInstancedMesh&&en.instancingMorph===!0&&yt.morphTexture===null||yt.isInstancedMesh&&en.instancingMorph===!1&&yt.morphTexture!==null||en.envMap!==Jt||Et.fog===!0&&en.fog!==Gt||en.numClippingPlanes!==void 0&&(en.numClippingPlanes!==pn.numPlanes||en.numIntersection!==pn.numIntersection)||en.vertexAlphas!==sn||en.vertexTangents!==ln||en.morphTargets!==on||en.morphNormals!==Mn||en.morphColors!==bn||en.toneMapping!==Pn||en.morphTargetsCount!==En)&&(Tn=!0):(Tn=!0,en.__version=Et.version);let Vn=en.currentProgram;Tn===!0&&(Vn=jn(Et,St,yt));let $n=!1,On=!1,qn=!1;const In=Vn.getUniforms(),Hn=en.uniforms;if(nn.useProgram(Vn.program)&&($n=!0,On=!0,qn=!0),Et.id!==gt&&(gt=Et.id,On=!0),$n||ut!==lt){In.setValue(pt,"projectionMatrix",lt.projectionMatrix),In.setValue(pt,"viewMatrix",lt.matrixWorldInverse);const Bn=In.map.cameraPosition;Bn!==void 0&&Bn.setValue(pt,jt.setFromMatrixPosition(lt.matrixWorld)),Cn.logarithmicDepthBuffer&&In.setValue(pt,"logDepthBufFC",2/(Math.log(lt.far+1)/Math.LN2)),(Et.isMeshPhongMaterial||Et.isMeshToonMaterial||Et.isMeshLambertMaterial||Et.isMeshBasicMaterial||Et.isMeshStandardMaterial||Et.isShaderMaterial)&&In.setValue(pt,"isOrthographic",lt.isOrthographicCamera===!0),ut!==lt&&(ut=lt,On=!0,qn=!0)}if(yt.isSkinnedMesh){In.setOptional(pt,yt,"bindMatrix"),In.setOptional(pt,yt,"bindMatrixInverse");const Bn=yt.skeleton;Bn&&(Bn.boneTexture===null&&Bn.computeBoneTexture(),In.setValue(pt,"boneTexture",Bn.boneTexture,hn))}yt.isBatchedMesh&&(In.setOptional(pt,yt,"batchingTexture"),In.setValue(pt,"batchingTexture",yt._matricesTexture,hn),In.setOptional(pt,yt,"batchingIdTexture"),In.setValue(pt,"batchingIdTexture",yt._indirectTexture,hn),In.setOptional(pt,yt,"batchingColorTexture"),yt._colorsTexture!==null&&In.setValue(pt,"batchingColorTexture",yt._colorsTexture,hn));const Kn=Mt.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&vn.update(yt,Mt,Vn),(On||en.receiveShadow!==yt.receiveShadow)&&(en.receiveShadow=yt.receiveShadow,In.setValue(pt,"receiveShadow",yt.receiveShadow)),Et.isMeshGouraudMaterial&&Et.envMap!==null&&(Hn.envMap.value=Jt,Hn.flipEnvMap.value=Jt.isCubeTexture&&Jt.isRenderTargetTexture===!1?-1:1),Et.isMeshStandardMaterial&&Et.envMap===null&&St.environment!==null&&(Hn.envMapIntensity.value=St.environmentIntensity),On&&(In.setValue(pt,"toneMappingExposure",nt.toneMappingExposure),en.needsLights&&or(Hn,qn),Gt&&Et.fog===!0&&rn.refreshFogUniforms(Hn,Gt),rn.refreshMaterialUniforms(Hn,Et,It,Rt,et.state.transmissionRenderTarget[lt.id]),WebGLUniforms.upload(pt,tr(en),Hn,hn)),Et.isShaderMaterial&&Et.uniformsNeedUpdate===!0&&(WebGLUniforms.upload(pt,tr(en),Hn,hn),Et.uniformsNeedUpdate=!1),Et.isSpriteMaterial&&In.setValue(pt,"center",yt.center),In.setValue(pt,"modelViewMatrix",yt.modelViewMatrix),In.setValue(pt,"normalMatrix",yt.normalMatrix),In.setValue(pt,"modelMatrix",yt.matrixWorld),Et.isShaderMaterial||Et.isRawShaderMaterial){const Bn=Et.uniformsGroups;for(let Zn=0,sr=Bn.length;Zn<sr;Zn++){const ir=Bn[Zn];wn.update(ir,Vn),wn.bind(ir,Vn)}}return Vn}function or(lt,St){lt.ambientLightColor.needsUpdate=St,lt.lightProbe.needsUpdate=St,lt.directionalLights.needsUpdate=St,lt.directionalLightShadows.needsUpdate=St,lt.pointLights.needsUpdate=St,lt.pointLightShadows.needsUpdate=St,lt.spotLights.needsUpdate=St,lt.spotLightShadows.needsUpdate=St,lt.rectAreaLights.needsUpdate=St,lt.hemisphereLights.needsUpdate=St}function ar(lt){return lt.isMeshLambertMaterial||lt.isMeshToonMaterial||lt.isMeshPhongMaterial||lt.isMeshStandardMaterial||lt.isShadowMaterial||lt.isShaderMaterial&&lt.lights===!0}this.getActiveCubeFace=function(){return mt},this.getActiveMipmapLevel=function(){return dt},this.getRenderTarget=function(){return ft},this.setRenderTargetTextures=function(lt,St,Mt){un.get(lt.texture).__webglTexture=St,un.get(lt.depthTexture).__webglTexture=Mt;const Et=un.get(lt);Et.__hasExternalTextures=!0,Et.__autoAllocateDepthBuffer=Mt===void 0,Et.__autoAllocateDepthBuffer||An.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Et.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(lt,St){const Mt=un.get(lt);Mt.__webglFramebuffer=St,Mt.__useDefaultFramebuffer=St===void 0},this.setRenderTarget=function(lt,St=0,Mt=0){ft=lt,mt=St,dt=Mt;let Et=!0,yt=null,Gt=!1,Yt=!1;if(lt){const Jt=un.get(lt);Jt.__useDefaultFramebuffer!==void 0?(nn.bindFramebuffer(pt.FRAMEBUFFER,null),Et=!1):Jt.__webglFramebuffer===void 0?hn.setupRenderTarget(lt):Jt.__hasExternalTextures&&hn.rebindTextures(lt,un.get(lt.texture).__webglTexture,un.get(lt.depthTexture).__webglTexture);const sn=lt.texture;(sn.isData3DTexture||sn.isDataArrayTexture||sn.isCompressedArrayTexture)&&(Yt=!0);const ln=un.get(lt).__webglFramebuffer;lt.isWebGLCubeRenderTarget?(Array.isArray(ln[St])?yt=ln[St][Mt]:yt=ln[St],Gt=!0):lt.samples>0&&hn.useMultisampledRTT(lt)===!1?yt=un.get(lt).__webglMultisampledFramebuffer:Array.isArray(ln)?yt=ln[Mt]:yt=ln,at.copy(lt.viewport),_t.copy(lt.scissor),wt=lt.scissorTest}else at.copy(Ft).multiplyScalar(It).floor(),_t.copy(Ht).multiplyScalar(It).floor(),wt=tn;if(nn.bindFramebuffer(pt.FRAMEBUFFER,yt)&&Et&&nn.drawBuffers(lt,yt),nn.viewport(at),nn.scissor(_t),nn.setScissorTest(wt),Gt){const Jt=un.get(lt.texture);pt.framebufferTexture2D(pt.FRAMEBUFFER,pt.COLOR_ATTACHMENT0,pt.TEXTURE_CUBE_MAP_POSITIVE_X+St,Jt.__webglTexture,Mt)}else if(Yt){const Jt=un.get(lt.texture),sn=St||0;pt.framebufferTextureLayer(pt.FRAMEBUFFER,pt.COLOR_ATTACHMENT0,Jt.__webglTexture,Mt||0,sn)}gt=-1},this.readRenderTargetPixels=function(lt,St,Mt,Et,yt,Gt,Yt){if(!(lt&&lt.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qt=un.get(lt).__webglFramebuffer;if(lt.isWebGLCubeRenderTarget&&Yt!==void 0&&(Qt=Qt[Yt]),Qt){nn.bindFramebuffer(pt.FRAMEBUFFER,Qt);try{const Jt=lt.texture,sn=Jt.format,ln=Jt.type;if(!Cn.textureFormatReadable(sn)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Cn.textureTypeReadable(ln)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}St>=0&&St<=lt.width-Et&&Mt>=0&&Mt<=lt.height-yt&&pt.readPixels(St,Mt,Et,yt,fn.convert(sn),fn.convert(ln),Gt)}finally{const Jt=ft!==null?un.get(ft).__webglFramebuffer:null;nn.bindFramebuffer(pt.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(lt,St,Mt,Et,yt,Gt,Yt){if(!(lt&&lt.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qt=un.get(lt).__webglFramebuffer;if(lt.isWebGLCubeRenderTarget&&Yt!==void 0&&(Qt=Qt[Yt]),Qt){nn.bindFramebuffer(pt.FRAMEBUFFER,Qt);try{const Jt=lt.texture,sn=Jt.format,ln=Jt.type;if(!Cn.textureFormatReadable(sn))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Cn.textureTypeReadable(ln))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(St>=0&&St<=lt.width-Et&&Mt>=0&&Mt<=lt.height-yt){const on=pt.createBuffer();pt.bindBuffer(pt.PIXEL_PACK_BUFFER,on),pt.bufferData(pt.PIXEL_PACK_BUFFER,Gt.byteLength,pt.STREAM_READ),pt.readPixels(St,Mt,Et,yt,fn.convert(sn),fn.convert(ln),0),pt.flush();const Mn=pt.fenceSync(pt.SYNC_GPU_COMMANDS_COMPLETE,0);await probeAsync(pt,Mn,4);try{pt.bindBuffer(pt.PIXEL_PACK_BUFFER,on),pt.getBufferSubData(pt.PIXEL_PACK_BUFFER,0,Gt)}finally{pt.deleteBuffer(on),pt.deleteSync(Mn)}return Gt}}finally{const Jt=ft!==null?un.get(ft).__webglFramebuffer:null;nn.bindFramebuffer(pt.FRAMEBUFFER,Jt)}}},this.copyFramebufferToTexture=function(lt,St=null,Mt=0){lt.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),St=arguments[0]||null,lt=arguments[1]);const Et=Math.pow(2,-Mt),yt=Math.floor(lt.image.width*Et),Gt=Math.floor(lt.image.height*Et),Yt=St!==null?St.x:0,Qt=St!==null?St.y:0;hn.setTexture2D(lt,0),pt.copyTexSubImage2D(pt.TEXTURE_2D,Mt,0,0,Yt,Qt,yt,Gt),nn.unbindTexture()},this.copyTextureToTexture=function(lt,St,Mt=null,Et=null,yt=0){lt.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),Et=arguments[0]||null,lt=arguments[1],St=arguments[2],yt=arguments[3]||0,Mt=null);let Gt,Yt,Qt,Jt,sn,ln;Mt!==null?(Gt=Mt.max.x-Mt.min.x,Yt=Mt.max.y-Mt.min.y,Qt=Mt.min.x,Jt=Mt.min.y):(Gt=lt.image.width,Yt=lt.image.height,Qt=0,Jt=0),Et!==null?(sn=Et.x,ln=Et.y):(sn=0,ln=0);const on=fn.convert(St.format),Mn=fn.convert(St.type);hn.setTexture2D(St,0),pt.pixelStorei(pt.UNPACK_FLIP_Y_WEBGL,St.flipY),pt.pixelStorei(pt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,St.premultiplyAlpha),pt.pixelStorei(pt.UNPACK_ALIGNMENT,St.unpackAlignment);const bn=pt.getParameter(pt.UNPACK_ROW_LENGTH),Pn=pt.getParameter(pt.UNPACK_IMAGE_HEIGHT),kn=pt.getParameter(pt.UNPACK_SKIP_PIXELS),En=pt.getParameter(pt.UNPACK_SKIP_ROWS),en=pt.getParameter(pt.UNPACK_SKIP_IMAGES),Fn=lt.isCompressedTexture?lt.mipmaps[yt]:lt.image;pt.pixelStorei(pt.UNPACK_ROW_LENGTH,Fn.width),pt.pixelStorei(pt.UNPACK_IMAGE_HEIGHT,Fn.height),pt.pixelStorei(pt.UNPACK_SKIP_PIXELS,Qt),pt.pixelStorei(pt.UNPACK_SKIP_ROWS,Jt),lt.isDataTexture?pt.texSubImage2D(pt.TEXTURE_2D,yt,sn,ln,Gt,Yt,on,Mn,Fn.data):lt.isCompressedTexture?pt.compressedTexSubImage2D(pt.TEXTURE_2D,yt,sn,ln,Fn.width,Fn.height,on,Fn.data):pt.texSubImage2D(pt.TEXTURE_2D,yt,sn,ln,Gt,Yt,on,Mn,Fn),pt.pixelStorei(pt.UNPACK_ROW_LENGTH,bn),pt.pixelStorei(pt.UNPACK_IMAGE_HEIGHT,Pn),pt.pixelStorei(pt.UNPACK_SKIP_PIXELS,kn),pt.pixelStorei(pt.UNPACK_SKIP_ROWS,En),pt.pixelStorei(pt.UNPACK_SKIP_IMAGES,en),yt===0&&St.generateMipmaps&&pt.generateMipmap(pt.TEXTURE_2D),nn.unbindTexture()},this.copyTextureToTexture3D=function(lt,St,Mt=null,Et=null,yt=0){lt.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Mt=arguments[0]||null,Et=arguments[1]||null,lt=arguments[2],St=arguments[3],yt=arguments[4]||0);let Gt,Yt,Qt,Jt,sn,ln,on,Mn,bn;const Pn=lt.isCompressedTexture?lt.mipmaps[yt]:lt.image;Mt!==null?(Gt=Mt.max.x-Mt.min.x,Yt=Mt.max.y-Mt.min.y,Qt=Mt.max.z-Mt.min.z,Jt=Mt.min.x,sn=Mt.min.y,ln=Mt.min.z):(Gt=Pn.width,Yt=Pn.height,Qt=Pn.depth,Jt=0,sn=0,ln=0),Et!==null?(on=Et.x,Mn=Et.y,bn=Et.z):(on=0,Mn=0,bn=0);const kn=fn.convert(St.format),En=fn.convert(St.type);let en;if(St.isData3DTexture)hn.setTexture3D(St,0),en=pt.TEXTURE_3D;else if(St.isDataArrayTexture||St.isCompressedArrayTexture)hn.setTexture2DArray(St,0),en=pt.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}pt.pixelStorei(pt.UNPACK_FLIP_Y_WEBGL,St.flipY),pt.pixelStorei(pt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,St.premultiplyAlpha),pt.pixelStorei(pt.UNPACK_ALIGNMENT,St.unpackAlignment);const Fn=pt.getParameter(pt.UNPACK_ROW_LENGTH),Tn=pt.getParameter(pt.UNPACK_IMAGE_HEIGHT),Vn=pt.getParameter(pt.UNPACK_SKIP_PIXELS),$n=pt.getParameter(pt.UNPACK_SKIP_ROWS),On=pt.getParameter(pt.UNPACK_SKIP_IMAGES);pt.pixelStorei(pt.UNPACK_ROW_LENGTH,Pn.width),pt.pixelStorei(pt.UNPACK_IMAGE_HEIGHT,Pn.height),pt.pixelStorei(pt.UNPACK_SKIP_PIXELS,Jt),pt.pixelStorei(pt.UNPACK_SKIP_ROWS,sn),pt.pixelStorei(pt.UNPACK_SKIP_IMAGES,ln),lt.isDataTexture||lt.isData3DTexture?pt.texSubImage3D(en,yt,on,Mn,bn,Gt,Yt,Qt,kn,En,Pn.data):St.isCompressedArrayTexture?pt.compressedTexSubImage3D(en,yt,on,Mn,bn,Gt,Yt,Qt,kn,Pn.data):pt.texSubImage3D(en,yt,on,Mn,bn,Gt,Yt,Qt,kn,En,Pn),pt.pixelStorei(pt.UNPACK_ROW_LENGTH,Fn),pt.pixelStorei(pt.UNPACK_IMAGE_HEIGHT,Tn),pt.pixelStorei(pt.UNPACK_SKIP_PIXELS,Vn),pt.pixelStorei(pt.UNPACK_SKIP_ROWS,$n),pt.pixelStorei(pt.UNPACK_SKIP_IMAGES,On),yt===0&&St.generateMipmaps&&pt.generateMipmap(en),nn.unbindTexture()},this.initRenderTarget=function(lt){un.get(lt).__webglFramebuffer===void 0&&hn.setupRenderTarget(lt)},this.initTexture=function(lt){lt.isCubeTexture?hn.setTextureCube(lt,0):lt.isData3DTexture?hn.setTexture3D(lt,0):lt.isDataArrayTexture||lt.isCompressedArrayTexture?hn.setTexture2DArray(lt,0):hn.setTexture2D(lt,0),nn.unbindTexture()},this.resetState=function(){mt=0,dt=0,ft=null,nn.reset(),_n.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return WebGLCoordinateSystem}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const o=this.getContext();o.drawingBufferColorSpace=e===DisplayP3ColorSpace?"display-p3":"srgb",o.unpackColorSpace=ColorManagement.workingColorSpace===LinearDisplayP3ColorSpace?"display-p3":"srgb"}}class Scene extends Object3D{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Euler,this.environmentIntensity=1,this.environmentRotation=new Euler,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,o){return super.copy(e,o),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const o=super.toJSON(e);return this.fog!==null&&(o.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(o.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(o.object.backgroundIntensity=this.backgroundIntensity),o.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(o.object.environmentIntensity=this.environmentIntensity),o.object.environmentRotation=this.environmentRotation.toArray(),o}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:REVISION}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=REVISION);const _changeEvent={type:"change"};class FlyControls extends EventDispatcher{constructor(e,o){super(),this.object=e,this.domElement=o,this.enabled=!0,this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1;const a=this,s=1e-6,c=new Quaternion,d=new Vector3;this.tmpQuaternion=new Quaternion,this.status=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new Vector3(0,0,0),this.rotationVector=new Vector3(0,0,0),this.keydown=function(rt){if(!(rt.altKey||this.enabled===!1)){switch(rt.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyR":this.moveState.up=1;break;case"KeyF":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break;case"KeyQ":this.moveState.rollLeft=1;break;case"KeyE":this.moveState.rollRight=1;break}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(rt){if(this.enabled!==!1){switch(rt.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyR":this.moveState.up=0;break;case"KeyF":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break;case"KeyQ":this.moveState.rollLeft=0;break;case"KeyE":this.moveState.rollRight=0;break}this.updateMovementVector(),this.updateRotationVector()}},this.pointerdown=function(rt){if(this.enabled!==!1)if(this.dragToLook)this.status++;else{switch(rt.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1;break}this.updateMovementVector()}},this.pointermove=function(rt){if(this.enabled!==!1&&(!this.dragToLook||this.status>0)){const ot=this.getContainerDimensions(),et=ot.size[0]/2,b=ot.size[1]/2;this.moveState.yawLeft=-(rt.pageX-ot.offset[0]-et)/et,this.moveState.pitchDown=(rt.pageY-ot.offset[1]-b)/b,this.updateRotationVector()}},this.pointerup=function(rt){if(this.enabled!==!1){if(this.dragToLook)this.status--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(rt.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0;break}this.updateMovementVector()}this.updateRotationVector()}},this.pointercancel=function(){this.enabled!==!1&&(this.dragToLook?(this.status=0,this.moveState.yawLeft=this.moveState.pitchDown=0):(this.moveState.forward=0,this.moveState.back=0,this.updateMovementVector()),this.updateRotationVector())},this.contextMenu=function(rt){this.enabled!==!1&&rt.preventDefault()},this.update=function(rt){if(this.enabled===!1)return;const ot=rt*a.movementSpeed,et=rt*a.rollSpeed;a.object.translateX(a.moveVector.x*ot),a.object.translateY(a.moveVector.y*ot),a.object.translateZ(a.moveVector.z*ot),a.tmpQuaternion.set(a.rotationVector.x*et,a.rotationVector.y*et,a.rotationVector.z*et,1).normalize(),a.object.quaternion.multiply(a.tmpQuaternion),(d.distanceToSquared(a.object.position)>s||8*(1-c.dot(a.object.quaternion))>s)&&(a.dispatchEvent(_changeEvent),c.copy(a.object.quaternion),d.copy(a.object.position))},this.updateMovementVector=function(){const rt=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-rt+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",h),this.domElement.removeEventListener("pointerdown",g),this.domElement.removeEventListener("pointermove",_),this.domElement.removeEventListener("pointerup",$),this.domElement.removeEventListener("pointercancel",_e),window.removeEventListener("keydown",j),window.removeEventListener("keyup",tt)};const h=this.contextMenu.bind(this),_=this.pointermove.bind(this),g=this.pointerdown.bind(this),$=this.pointerup.bind(this),_e=this.pointercancel.bind(this),j=this.keydown.bind(this),tt=this.keyup.bind(this);this.domElement.addEventListener("contextmenu",h),this.domElement.addEventListener("pointerdown",g),this.domElement.addEventListener("pointermove",_),this.domElement.addEventListener("pointerup",$),this.domElement.addEventListener("pointercancel",_e),window.addEventListener("keydown",j),window.addEventListener("keyup",tt),this.updateMovementVector(),this.updateRotationVector()}}function createCube(i,{x:e,y:o,z:a,color:s}){console.log(s);const c=new BoxGeometry,d=new MeshBasicMaterial({color:s}),h=new Mesh(c,d);h.position.set(e,o,a),i.add(h)}function ProjectEquation(scene,{equation,z,start,end,step,color}){if(equation.includes("x=")||equation.includes("x ="))for(let y=start;y<=end;y+=step)try{const x=eval(equation.replace("y",`(${y})`).replace("x=","").replace("x =","").replace("sqrt","Math.sqrt").replace("sin","Math.sin").replace("cos","Math.cos").replace("tan","Math.tan"));createCube(scene,{x,y,z,color})}catch{}else for(let x=start;x<=end;x+=step)try{const y=eval(equation.replace("x",`(${x})`).replace("y=","").replace("y =","").replace("sqrt","Math.sqrt").replace("sin","Math.sin").replace("cos","Math.cos").replace("tan","Math.tan"));createCube(scene,{x,y,z,color})}catch{}}function ThreeScene({equations:i}){const e=reactExports.useRef(null),o=reactExports.useRef(null);return reactExports.useEffect(()=>{const a=e.current;if(a){const s=new Scene;s.background=new Color(16777215),o.current=s;const c=new PerspectiveCamera(75,a.clientWidth/a.clientHeight,.1,1e3);c.position.z=5;const d=new WebGLRenderer;d.setSize(a.clientWidth,a.clientHeight),a.appendChild(d.domElement);const h=new FlyControls(c,d.domElement);h.autoForward=!1,h.dragToLook=!0,h.rollSpeed=1,h.yawSpeed=2,h.pitchSpeed=2,h.movementSpeed=10;const _=()=>{requestAnimationFrame(_),h.update(.01),d.render(s,c)};return _(),()=>{a.removeChild(d.domElement),h.dispose()}}},[]),reactExports.useEffect(()=>{const a=o.current;a&&(a.clear(),i.forEach(s=>{ProjectEquation(a,{equation:s.equation,z:Number(s.z),start:Number(s.start),end:Number(s.end),step:Math.abs(Number(s.step))||1,color:s.color})}))},[i]),jsxRuntimeExports.jsx("div",{ref:e,style:{width:"100%",height:"100vh"}})}function InputPanel({equations:i,setEquations:e}){return jsxRuntimeExports.jsxs("div",{className:"container",children:[i.map(o=>jsxRuntimeExports.jsxs("div",{className:"input-group my-1",children:[jsxRuntimeExports.jsx("input",{type:"text",onChange:a=>{e(i.map(s=>s.id===o.id?{...s,equation:a.target.value}:s))},className:"form-control",placeholder:"equation",value:o.equation||""}),jsxRuntimeExports.jsx("input",{type:"number",onChange:a=>{e(i.map(s=>s.id===o.id?{...s,z:a.target.value}:s))},className:"form-control",placeholder:"z axis",value:o.z||""}),jsxRuntimeExports.jsx("input",{type:"number",onChange:a=>{e(i.map(s=>s.id===o.id?{...s,start:a.target.value}:s))},className:"form-control",placeholder:"start",value:o.start||""}),jsxRuntimeExports.jsx("input",{type:"number",onChange:a=>{e(i.map(s=>s.id===o.id?{...s,end:a.target.value}:s)),console.log(i)},className:"form-control",placeholder:"end",value:o.end||""}),jsxRuntimeExports.jsx("input",{type:"number",onChange:a=>{e(i.map(s=>s.id===o.id?{...s,step:a.target.value}:s)),console.log(i)},step:.1,className:"form-control",placeholder:"step",value:o.step||""}),jsxRuntimeExports.jsx("input",{type:"color",onChange:a=>{e(i.map(s=>s.id===o.id?{...s,color:a.target.value}:s))},className:"form-control form-control-color",placeholder:"step",value:o.color||""}),jsxRuntimeExports.jsx("button",{className:"btn btn-light mx-1",onClick:()=>{const a=i.filter(s=>s.id===o.id)[0];e([...i,{...a,id:Math.random()*1e6}])},children:"Duplicate"}),jsxRuntimeExports.jsx("button",{className:"btn btn-danger",onClick:()=>{e(i.filter(a=>a.id!==o.id))},children:"Delete"})]})),jsxRuntimeExports.jsx("button",{className:"btn btn-primary",onClick:()=>{e([...i,{equation:"y=x",z:0,start:0,end:0,step:1,id:Math.random()*1e6,color:"#000000"}])},children:"Add Equation"}),jsxRuntimeExports.jsx("br",{}),jsxRuntimeExports.jsx("br",{}),jsxRuntimeExports.jsxs("div",{className:"container",children:[jsxRuntimeExports.jsx("div",{className:"lead",children:"Controls:"}),jsxRuntimeExports.jsxs("ul",{children:[jsxRuntimeExports.jsx("li",{className:"lead fs-6",children:"W,A,S,D to move"}),jsxRuntimeExports.jsx("li",{className:"lead fs-6",children:"Click and drag to move camera"}),jsxRuntimeExports.jsx("li",{className:"lead fs-6",children:"Q,E for rotating camera (to fix camera bugs)"})]})]}),jsxRuntimeExports.jsxs("div",{className:"container",children:[jsxRuntimeExports.jsx("div",{className:"lead",children:"Equation keywords:"}),jsxRuntimeExports.jsxs("ul",{children:[jsxRuntimeExports.jsx("li",{className:"lead fs-6",children:"example: y=sqrt(x)"}),jsxRuntimeExports.jsx("li",{className:"lead fs-6",children:"sqrt"}),jsxRuntimeExports.jsx("li",{className:"lead fs-6",children:"sin"}),jsxRuntimeExports.jsx("li",{className:"lead fs-6",children:"cos"}),jsxRuntimeExports.jsx("li",{className:"lead fs-6",children:"tan"})]})]})]})}function App(){const[i,e]=reactExports.useState([{id:0,equation:"x=0",z:-10,start:-2,end:8,step:1,color:"#000000"},{id:1,equation:"y=x-6",z:-15,start:0,end:4,step:1,color:"#000000"},{id:2,equation:"y=-x-6",z:-15,start:-4,end:0,step:1,color:"#000000"}]);return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(ThreeScene,{equations:i}),jsxRuntimeExports.jsx(InputPanel,{equations:i,setEquations:e})]})}client.createRoot(document.getElementById("root")).render(jsxRuntimeExports.jsx(React.StrictMode,{children:jsxRuntimeExports.jsx(App,{})}));
