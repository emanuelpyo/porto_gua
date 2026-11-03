var tT=Object.create;var uv=Object.defineProperty;var eT=Object.getOwnPropertyDescriptor;var nT=Object.getOwnPropertyNames;var iT=Object.getPrototypeOf,sT=Object.prototype.hasOwnProperty;var is=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var aT=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of nT(t))!sT.call(e,s)&&s!==n&&uv(e,s,{get:()=>t[s],enumerable:!(i=eT(t,s))||i.enumerable});return e};var kr=(e,t,n)=>(n=e!=null?tT(iT(e)):{},aT(t||!e||!e.__esModule?uv(n,"default",{value:e,enumerable:!0}):n,e));var xv=is(Ge=>{"use strict";function Ap(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<Ou(s,t))e[i]=t,e[n]=s,n=i;else break t}}function ss(e){return e.length===0?null:e[0]}function Pu(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Ou(o,n))l<s&&0>Ou(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>Ou(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Ou(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Ge.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(hv=performance,Ge.unstable_now=function(){return hv.now()}):(bp=Date,fv=bp.now(),Ge.unstable_now=function(){return bp.now()-fv});var hv,bp,fv,Cs=[],aa=[],rT=1,bi=null,Un=3,wp=!1,Pl=!1,Bl=!1,Rp=!1,mv=typeof setTimeout=="function"?setTimeout:null,gv=typeof clearTimeout=="function"?clearTimeout:null,dv=typeof setImmediate<"u"?setImmediate:null;function Iu(e){for(var t=ss(aa);t!==null;){if(t.callback===null)Pu(aa);else if(t.startTime<=e)Pu(aa),t.sortIndex=t.expirationTime,Ap(Cs,t);else break;t=ss(aa)}}function Cp(e){if(Bl=!1,Iu(e),!Pl)if(ss(Cs)!==null)Pl=!0,Wr||(Wr=!0,Xr());else{var t=ss(aa);t!==null&&Np(Cp,t.startTime-e)}}var Wr=!1,zl=-1,_v=5,vv=-1;function yv(){return Rp?!0:!(Ge.unstable_now()-vv<_v)}function Ep(){if(Rp=!1,Wr){var e=Ge.unstable_now();vv=e;var t=!0;try{t:{Pl=!1,Bl&&(Bl=!1,gv(zl),zl=-1),wp=!0;var n=Un;try{e:{for(Iu(e),bi=ss(Cs);bi!==null&&!(bi.expirationTime>e&&yv());){var i=bi.callback;if(typeof i=="function"){bi.callback=null,Un=bi.priorityLevel;var s=i(bi.expirationTime<=e);if(e=Ge.unstable_now(),typeof s=="function"){bi.callback=s,Iu(e),t=!0;break e}bi===ss(Cs)&&Pu(Cs),Iu(e)}else Pu(Cs);bi=ss(Cs)}if(bi!==null)t=!0;else{var a=ss(aa);a!==null&&Np(Cp,a.startTime-e),t=!1}}break t}finally{bi=null,Un=n,wp=!1}t=void 0}}finally{t?Xr():Wr=!1}}}var Xr;typeof dv=="function"?Xr=function(){dv(Ep)}:typeof MessageChannel<"u"?(Tp=new MessageChannel,pv=Tp.port2,Tp.port1.onmessage=Ep,Xr=function(){pv.postMessage(null)}):Xr=function(){mv(Ep,0)};var Tp,pv;function Np(e,t){zl=mv(function(){e(Ge.unstable_now())},t)}Ge.unstable_IdlePriority=5;Ge.unstable_ImmediatePriority=1;Ge.unstable_LowPriority=4;Ge.unstable_NormalPriority=3;Ge.unstable_Profiling=null;Ge.unstable_UserBlockingPriority=2;Ge.unstable_cancelCallback=function(e){e.callback=null};Ge.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_v=0<e?Math.floor(1e3/e):5};Ge.unstable_getCurrentPriorityLevel=function(){return Un};Ge.unstable_next=function(e){switch(Un){case 1:case 2:case 3:var t=3;break;default:t=Un}var n=Un;Un=t;try{return e()}finally{Un=n}};Ge.unstable_requestPaint=function(){Rp=!0};Ge.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Un;Un=e;try{return t()}finally{Un=n}};Ge.unstable_scheduleCallback=function(e,t,n){var i=Ge.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:rT++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,Ap(aa,e),ss(Cs)===null&&e===ss(aa)&&(Bl?(gv(zl),zl=-1):Bl=!0,Np(Cp,n-i))):(e.sortIndex=s,Ap(Cs,e),Pl||wp||(Pl=!0,Wr||(Wr=!0,Xr()))),e};Ge.unstable_shouldYield=yv;Ge.unstable_wrapCallback=function(e){var t=Un;return function(){var n=Un;Un=t;try{return e.apply(this,arguments)}finally{Un=n}}}});var Mv=is((nU,Sv)=>{"use strict";Sv.exports=xv()});var Iv=is(Qt=>{"use strict";var Up=Symbol.for("react.transitional.element"),oT=Symbol.for("react.portal"),lT=Symbol.for("react.fragment"),cT=Symbol.for("react.strict_mode"),uT=Symbol.for("react.profiler"),hT=Symbol.for("react.consumer"),fT=Symbol.for("react.context"),dT=Symbol.for("react.forward_ref"),pT=Symbol.for("react.suspense"),mT=Symbol.for("react.memo"),wv=Symbol.for("react.lazy"),gT=Symbol.for("react.activity"),_T=Symbol.for("react.view_transition"),bv=Symbol.iterator;function vT(e){return e===null||typeof e!="object"?null:(e=bv&&e[bv]||e["@@iterator"],typeof e=="function"?e:null)}var Rv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cv=Object.assign,Nv={};function Yr(e,t,n){this.props=e,this.context=t,this.refs=Nv,this.updater=n||Rv}Yr.prototype.isReactComponent={};Yr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Dv(){}Dv.prototype=Yr.prototype;function Op(e,t,n){this.props=e,this.context=t,this.refs=Nv,this.updater=n||Rv}var Ip=Op.prototype=new Dv;Ip.constructor=Op;Cv(Ip,Yr.prototype);Ip.isPureReactComponent=!0;var Ev=Array.isArray;function Lp(){}var Be={H:null,A:null,T:null,S:null},Lv=Object.prototype.hasOwnProperty;function Pp(e,t,n){var i=n.ref;return{$$typeof:Up,type:e,key:t,ref:i!==void 0?i:null,props:n}}function yT(e,t){return Pp(e.type,t,e.props)}function Bp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Up}function xT(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Tv=/\/+/g;function Dp(e,t){return typeof e=="object"&&e!==null&&e.key!=null?xT(""+e.key):t.toString(36)}function ST(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Lp,Lp):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function qr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Up:case oT:r=!0;break;case wv:return r=e._init,qr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+Dp(e,0):i,Ev(s)?(n="",r!=null&&(n=r.replace(Tv,"$&/")+"/"),qr(s,t,n,"",function(c){return c})):s!=null&&(Bp(s)&&(s=yT(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(Tv,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(Ev(e))for(var l=0;l<e.length;l++)i=e[l],a=o+Dp(i,l),r+=qr(i,t,n,a,s);else if(l=vT(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+Dp(i,l++),r+=qr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return qr(ST(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Bu(e,t,n){if(e==null)return e;var i=[],s=0;return qr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function MT(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Av=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Uv(e){var t=Be.T,n={};n.types=t!==null?t.types:null,Be.T=n;try{var i=e(),s=Be.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Lp,Av)}catch(a){Av(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),Be.T=t}}function Ov(e){var t=Be.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else Uv(Ov.bind(null,e))}var bT={map:Bu,forEach:function(e,t,n){Bu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Bu(e,function(){t++}),t},toArray:function(e){return Bu(e,function(t){return t})||[]},only:function(e){if(!Bp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Qt.Activity=gT;Qt.Children=bT;Qt.Component=Yr;Qt.Fragment=lT;Qt.Profiler=uT;Qt.PureComponent=Op;Qt.StrictMode=cT;Qt.Suspense=pT;Qt.ViewTransition=_T;Qt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Be;Qt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Be.H.useMemoCache(e)}};Qt.addTransitionType=Ov;Qt.cache=function(e){return function(){return e.apply(null,arguments)}};Qt.cacheSignal=function(){return null};Qt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=Cv({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!Lv.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return Pp(e.type,s,i)};Qt.createContext=function(e){return e={$$typeof:fT,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:hT,_context:e},e};Qt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)Lv.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return Pp(e,a,s)};Qt.createRef=function(){return{current:null}};Qt.forwardRef=function(e){return{$$typeof:dT,render:e}};Qt.isValidElement=Bp;Qt.lazy=function(e){return{$$typeof:wv,_payload:{_status:-1,_result:e},_init:MT}};Qt.memo=function(e,t){return{$$typeof:mT,type:e,compare:t===void 0?null:t}};Qt.startTransition=Uv;Qt.unstable_useCacheRefresh=function(){return Be.H.useCacheRefresh()};Qt.use=function(e){return Be.H.use(e)};Qt.useActionState=function(e,t,n){return Be.H.useActionState(e,t,n)};Qt.useCallback=function(e,t){return Be.H.useCallback(e,t)};Qt.useContext=function(e){return Be.H.useContext(e)};Qt.useDebugValue=function(){};Qt.useDeferredValue=function(e,t){return Be.H.useDeferredValue(e,t)};Qt.useEffect=function(e,t){return Be.H.useEffect(e,t)};Qt.useEffectEvent=function(e){return Be.H.useEffectEvent(e)};Qt.useId=function(){return Be.H.useId()};Qt.useImperativeHandle=function(e,t,n){return Be.H.useImperativeHandle(e,t,n)};Qt.useInsertionEffect=function(e,t){return Be.H.useInsertionEffect(e,t)};Qt.useLayoutEffect=function(e,t){return Be.H.useLayoutEffect(e,t)};Qt.useMemo=function(e,t){return Be.H.useMemo(e,t)};Qt.useOptimistic=function(e,t){return Be.H.useOptimistic(e,t)};Qt.useReducer=function(e,t,n){return Be.H.useReducer(e,t,n)};Qt.useRef=function(e){return Be.H.useRef(e)};Qt.useState=function(e){return Be.H.useState(e)};Qt.useSyncExternalStore=function(e,t,n){return Be.H.useSyncExternalStore(e,t,n)};Qt.useTransition=function(){return Be.H.useTransition()};Qt.version="19.3.1"});var zu=is((sU,Pv)=>{"use strict";Pv.exports=Iv()});var Fv=is(On=>{"use strict";var ET=zu();function zv(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ra(){}var Fn={d:{f:ra,r:function(){throw Error(zv(522))},D:ra,C:ra,L:ra,m:ra,X:ra,S:ra,M:ra},p:0,findDOMNode:null},TT=Symbol.for("react.portal"),AT=Symbol.for("react.recoverable"),Bv=Symbol.for("react.optimistic_key");function wT(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:TT,key:i==null?null:i===Bv?Bv:""+i,children:e,containerInfo:t,implementation:n}}var Fl=ET.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Fu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Fn;On.browser=function(e){return{$$typeof:AT,_reason:e}};On.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(zv(299));return wT(e,t,null,n)};On.flushSync=function(e){var t=Fl.T,n=Fn.p;try{if(Fl.T=null,Fn.p=2,e)return e()}finally{Fl.T=t,Fn.p=n,Fn.d.f()}};On.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Fn.d.C(e,t))};On.prefetchDNS=function(e){typeof e=="string"&&Fn.d.D(e)};On.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Fu(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Fn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&Fn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};On.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Fu(t.as,t.crossOrigin);Fn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&Fn.d.M(e)};On.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Fu(n,t.crossOrigin);Fn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};On.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Fu(t.as,t.crossOrigin);Fn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else Fn.d.m(e)};On.requestFormReset=function(e){Fn.d.r(e)};On.unstable_batchedUpdates=function(e,t){return e(t)};On.useFormState=function(e,t,n){return Fl.H.useFormState(e,t,n)};On.useFormStatus=function(){return Fl.H.useHostTransitionStatus()};On.version="19.3.1"});var Gv=is((rU,Vv)=>{"use strict";function Hv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hv)}catch(e){console.error(e)}}Hv(),Vv.exports=Fv()});var Rb=is(Sf=>{"use strict";var un=Mv(),wx=zu(),RT=Gv();function $(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Rx(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ac(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function Cx(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Nx(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function kv(e){if(Ac(e)!==e)throw Error($(188))}function CT(e){var t=e.alternate;if(!t){if(t=Ac(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return kv(s),e;if(a===i)return kv(s),t;a=a.sibling}throw Error($(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error($(189))}}if(n.alternate!==i)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function Dx(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Dx(e),t!==null)return t;e=e.sibling}return null}function ei(e,t,n,i,s,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&ei(e.child,t,n,i,s,a))return!0;e=e.sibling}return!1}function Sr(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function Xv(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function Lx(e){var t=[null,null],n=Sr(e);return n===null||Ux(t,e,n.child,{foundSelf:!1}),t}function Ux(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&Ux(e,t,n.child,i))return!0;n=n.sibling}return!1}function cn(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error($(559))}}var to=null,mm=null;function NT(e,t,n){return e===n?!0:e===t?(to=e,!0):!1}function DT(e,t,n){return e===n?(mm=e,!1):e===t?(mm!==null&&(to=e),!0):!1}function Wv(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function gm(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var a=t;a;a=n(a))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var Ie=Object.assign,LT=Symbol.for("react.element"),Hu=Symbol.for("react.transitional.element"),ql=Symbol.for("react.portal"),eo=Symbol.for("react.fragment"),Ox=Symbol.for("react.strict_mode"),_m=Symbol.for("react.profiler"),Ix=Symbol.for("react.consumer"),us=Symbol.for("react.context"),Ag=Symbol.for("react.forward_ref"),vm=Symbol.for("react.suspense"),ym=Symbol.for("react.suspense_list"),wg=Symbol.for("react.memo"),ua=Symbol.for("react.lazy"),xm=Symbol.for("react.activity"),UT=Symbol.for("react.legacy_hidden"),OT=Symbol.for("react.memo_cache_sentinel"),Sm=Symbol.for("react.view_transition"),IT=Symbol.for("react.recoverable"),qv=Symbol.iterator;function Hl(e){return e===null||typeof e!="object"?null:(e=qv&&e[qv]||e["@@iterator"],typeof e=="function"?e:null)}var PT=Symbol.for("react.client.reference");function Mm(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===PT?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case eo:return"Fragment";case _m:return"Profiler";case Ox:return"StrictMode";case vm:return"Suspense";case ym:return"SuspenseList";case xm:return"Activity";case Sm:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case ql:return"Portal";case us:return e.displayName||"Context";case Ix:return(e._context.displayName||"Context")+".Consumer";case Ag:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wg:return t=e.displayName||null,t!==null?t:Mm(e.type)||"Memo";case ua:t=e._payload,e=e._init;try{return Mm(e(t))}catch{}}return null}var Yl=Array.isArray,qt=wx.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Me=RT.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,lr={pending:!1,data:null,method:null,action:null},bm=[],no=-1;function _s(e){return{current:e}}function An(e){0>no||(e.current=bm[no],bm[no]=null,no--)}function He(e,t){no++,bm[no]=e.current,e.current=t}var ps=_s(null),uc=_s(null),ya=_s(null),Ah=_s(null);function wh(e,t){switch(He(ya,t),He(uc,e),He(ps,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?rx(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=rx(t),e=ib(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}An(ps),He(ps,e)}function bo(){An(ps),An(uc),An(ya)}function Em(e){var t=e.memoizedState;t!==null&&(Uo._currentValue=t.memoizedState,He(Ah,e)),t=ps.current;var n=ib(t,e.type);t!==n&&(He(uc,e),He(ps,n))}function Rh(e){uc.current===e&&(An(ps),An(uc)),Ah.current===e&&(An(Ah),Uo._currentValue=lr)}var zp,Yv;function la(e){if(zp===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zp=t&&t[1]||"",Yv=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zp+e+Yv}var Fp=!1;function Hp(e,t){if(!e||Fp)return"";Fp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(_){var u=_}Reflect.construct(e,[],p)}else{try{p.call()}catch(_){u=_}p=!1;try{var f=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),p=!0,new e}finally{p&&(f!==void 0?Object.defineProperty(e.prototype,"props",f):delete e.prototype.props)}}}else{try{throw Error()}catch(_){u=_}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(_){if(_&&u&&typeof _.stack=="string")return[_.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=s);break}}}finally{Fp=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?la(n):""}function BT(e,t){switch(e.tag){case 26:case 27:case 5:return la(e.type);case 16:return la("Lazy");case 13:return e.child!==t&&t!==null?la("Suspense Fallback"):la("Suspense");case 19:return la("SuspenseList");case 0:case 15:return Hp(e.type,!1);case 11:return Hp(e.type.render,!1);case 1:return Hp(e.type,!0);case 31:return la("Activity");case 30:return la("ViewTransition");default:return""}}function Zv(e){try{var t="",n=null;do t+=BT(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Tm=Object.prototype.hasOwnProperty,Rg=un.unstable_scheduleCallback,Vp=un.unstable_cancelCallback,zT=un.unstable_shouldYield,FT=un.unstable_requestPaint,ui=un.unstable_now,HT=un.unstable_getCurrentPriorityLevel,Px=un.unstable_ImmediatePriority,Bx=un.unstable_UserBlockingPriority,Ch=un.unstable_NormalPriority,VT=un.unstable_LowPriority,zx=un.unstable_IdlePriority,GT=un.log,kT=un.unstable_setDisableYieldValue,wc=null,hi=null;function da(e){if(typeof GT=="function"&&kT(e),hi&&typeof hi.setStrictMode=="function")try{hi.setStrictMode(wc,e)}catch{}}var fi=Math.clz32?Math.clz32:qT,XT=Math.log,WT=Math.LN2;function qT(e){return e>>>=0,e===0?32:31-(XT(e)/WT|0)|0}var Vu=256,Gu=262144,ku=4194304;function ir(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ef(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=ir(i):(r&=o,r!==0?s=ir(r):n||(n=o&~e,n!==0&&(s=ir(n))))):(o=i&~a,o!==0?s=ir(o):r!==0?s=ir(r):n||(n=i&~e,n!==0&&(s=ir(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function Rc(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Fx(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-fi(n),s=1<<i;t|=e[i],n&=~s}return t}function YT(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hx(){var e=ku;return ku<<=1,(ku&62914560)===0&&(ku=4194304),e}function Gp(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Cc(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ZT(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var h=31-fi(n),p=1<<h;o[h]=0,l[h]=-1;var u=c[h];if(u!==null)for(c[h]=null,h=0;h<u.length;h++){var f=u[h];f!==null&&(f.lane&=-536870913)}n&=~p}i!==0&&Vx(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function Vx(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-fi(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Gx(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-fi(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function kx(e,t){var n=t&-t;return n=(n&42)!==0?1:Cg(n),(n&(e.suspendedLanes|t))!==0?0:n}function Cg(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ng(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Xx(){var e=Me.p;return e!==0?e:(e=window.event,e===void 0?32:Tb(e.type))}function Jv(e,t){var n=Me.p;try{return Me.p=e,t()}finally{Me.p=n}}var Gs=Math.random().toString(36).slice(2),En="__reactFiber$"+Gs,ni="__reactProps$"+Gs,Po="__reactContainer$"+Gs,Kv="__reactEvents$"+Gs,JT="__reactListeners$"+Gs,KT="__reactHandles$"+Gs,Qv="__reactResources$"+Gs,Nc="__reactMarker$"+Gs,Nh="__reactLoad$"+Gs;function nf(e){delete e[En],delete e[ni],delete e[JT],delete e[KT]}function rr(e){var t;if(t=e[En])return t;for(var n=e.parentNode;n;){if(t=n[Po]||n[En]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=px(e);e!==null;){if(n=e[En])return n;e=px(e)}return t}e=n,n=e.parentNode}return null}function Bo(e){if(e=e[En]||e[Po]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Zl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error($(33))}function fo(e){var t=e[Qv];return t||(t=e[Qv]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function _n(e){e[Nc]=!0}function Wx(e){e[Nh]=void 0}var qx=new Set,Yx={};function Mr(e,t){Eo(e,t),Eo(e+"Capture",t)}function Eo(e,t){for(Yx[e]=t,e=0;e<t.length;e++)qx.add(t[e])}var QT=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jv={},$v={};function jT(e){return Tm.call($v,e)?!0:Tm.call(jv,e)?!1:QT.test(e)?$v[e]=!0:(jv[e]=!0,!1)}var ye=!1;function ty(){var e=ye;return ye=!1,e}function oh(e,t,n){if(jT(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function Xu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function Ns(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function ri(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zx(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $T(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Am(e){if(!e._valueTracker){var t=Zx(e)?"checked":"value";e._valueTracker=$T(e,t,""+e[t])}}function Jx(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Zx(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var tA=/[\n"\\]/g;function Ri(e){return e.replace(tA,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function wm(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ri(t)):e.value!==""+ri(t)&&(e.value=""+ri(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?kp(e,ri(e.value)):kp(e,ri(t)):n!=null?kp(e,ri(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ri(o):e.removeAttribute("name")}function Kx(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){Am(e);return}n=n!=null?""+ri(n):"",t=t!=null?""+ri(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Am(e)}function kp(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function po(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ri(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Qx(e,t,n){if(t!=null&&(t=""+ri(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ri(n):""}function jx(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error($(92));if(Yl(i)){if(1<i.length)throw Error($(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=ri(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Am(e)}function To(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var eA=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ey(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||eA.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function $x(e,t,n){if(t!=null&&typeof t!="object")throw Error($(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",ye=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(ey(e,s,i),ye=!0)}else for(var a in t)t.hasOwnProperty(a)&&ey(e,a,t[a])}function Dg(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nA=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),iA=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function lh(e){return iA.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function hs(){}var Rm=null;function Lg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var io=null,mo=null;function ny(e){var t=Bo(e);if(t&&(e=t.stateNode)){var n=e[ni]||null;t:switch(e=t.stateNode,t.type){case"input":if(wm(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ri(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[ni]||null;if(!s)throw Error($(90));wm(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Jx(i)}break t;case"textarea":Qx(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&po(e,!!n.multiple,t,!1)}}}var Xp=!1;function tS(e,t,n){if(Xp)return e(t,n);Xp=!0;try{var i=e(t);return i}finally{if(Xp=!1,(io!==null||mo!==null)&&(_f(),io&&(t=io,e=mo,mo=io=null,ny(t),e)))for(t=0;t<e.length;t++)ny(e[t])}}function hc(e,t){var n=e.stateNode;if(n===null)return null;var i=n[ni]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var Ps=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cm=!1;if(Ps)try{Zr={},Object.defineProperty(Zr,"passive",{get:function(){Cm=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{Cm=!1}var Zr,pa=null,Ug=null,ch=null;function eS(){if(ch)return ch;var e,t=Ug,n=t.length,i,s="value"in pa?pa.value:pa.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return ch=s.slice(e,1<i?1-i:void 0)}function uh(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wu(){return!0}function iy(){return!1}function kn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Wu:iy,this.isPropagationStopped=iy,this}return Ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wu)},persist:function(){},isPersistent:Wu}),t}var Oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sf=kn(Oa),Dc=Ie({},Oa,{view:0,detail:0}),sA=kn(Dc),Wp,qp,Vl,af=Ie({},Dc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Og,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vl&&(Vl&&e.type==="mousemove"?(Wp=e.screenX-Vl.screenX,qp=e.screenY-Vl.screenY):qp=Wp=0,Vl=e),Wp)},movementY:function(e){return"movementY"in e?e.movementY:qp}}),sy=kn(af),aA=Ie({},af,{dataTransfer:0}),rA=kn(aA),oA=Ie({},Dc,{relatedTarget:0}),Yp=kn(oA),lA=Ie({},Oa,{animationName:0,elapsedTime:0,pseudoElement:0}),cA=kn(lA),uA=Ie({},Oa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hA=kn(uA),fA=Ie({},Oa,{data:0}),ay=kn(fA),dA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gA(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mA[e])?!!t[e]:!1}function Og(){return gA}var _A=Ie({},Dc,{key:function(e){if(e.key){var t=dA[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=uh(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pA[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Og,charCode:function(e){return e.type==="keypress"?uh(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?uh(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vA=kn(_A),yA=Ie({},af,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ry=kn(yA),xA=Ie({},Oa,{submitter:0}),SA=kn(xA),MA=Ie({},Dc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Og}),bA=kn(MA),EA=Ie({},Oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),TA=kn(EA),AA=Ie({},af,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wA=kn(AA),RA=Ie({},Oa,{newState:0,oldState:0,source:0}),CA=kn(RA),NA=[9,13,27,32],Ig=Ps&&"CompositionEvent"in window,Ql=null;Ps&&"documentMode"in document&&(Ql=document.documentMode);var DA=Ps&&"TextEvent"in window&&!Ql,nS=Ps&&(!Ig||Ql&&8<Ql&&11>=Ql),oy=" ",ly=!1;function iS(e,t){switch(e){case"keyup":return NA.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sS(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var so=!1;function LA(e,t){switch(e){case"compositionend":return sS(t);case"keypress":return t.which!==32?null:(ly=!0,oy);case"textInput":return e=t.data,e===oy&&ly?null:e;default:return null}}function UA(e,t){if(so)return e==="compositionend"||!Ig&&iS(e,t)?(e=eS(),ch=Ug=pa=null,so=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nS&&t.locale!=="ko"?null:t.data;default:return null}}var OA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cy(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!OA[e.type]:t==="textarea"}function aS(e,t,n,i){io?mo?mo.push(i):mo=[i]:io=i,t=jh(t,"onChange"),0<t.length&&(n=new sf("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var jl=null,fc=null;function IA(e){tb(e,0)}function rf(e){var t=Zl(e);if(Jx(t))return e}function uy(e,t){if(e==="change")return t}var rS=!1;Ps&&(Ps?(Yu="oninput"in document,Yu||(Zp=document.createElement("div"),Zp.setAttribute("oninput","return;"),Yu=typeof Zp.oninput=="function"),qu=Yu):qu=!1,rS=qu&&(!document.documentMode||9<document.documentMode));var qu,Yu,Zp;function hy(){jl&&(jl.detachEvent("onpropertychange",oS),fc=jl=null)}function oS(e){if(e.propertyName==="value"&&rf(fc)){var t=[];aS(t,fc,e,Lg(e)),tS(IA,t)}}function PA(e,t,n){e==="focusin"?(hy(),jl=t,fc=n,jl.attachEvent("onpropertychange",oS)):e==="focusout"&&hy()}function BA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rf(fc)}function zA(e,t){if(e==="click")return rf(t)}function FA(e,t){if(e==="input"||e==="change")return rf(t)}function HA(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pi=typeof Object.is=="function"?Object.is:HA;function dc(e,t){if(pi(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Tm.call(t,s)||!pi(e[s],t[s]))return!1}return!0}function Nm(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fy(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dy(e,t){var n=fy(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=fy(n)}}function lS(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lS(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cS(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Nm(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Nm(e.document)}return t}function Pg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var VA=Ps&&"documentMode"in document&&11>=document.documentMode,ao=null,Dm=null,$l=null,Lm=!1;function py(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lm||ao==null||ao!==Nm(i)||(i=ao,"selectionStart"in i&&Pg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$l&&dc($l,i)||($l=i,i=jh(Dm,"onSelect"),0<i.length&&(t=new sf("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=ao)))}function er(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ro={animationend:er("Animation","AnimationEnd"),animationiteration:er("Animation","AnimationIteration"),animationstart:er("Animation","AnimationStart"),transitionrun:er("Transition","TransitionRun"),transitionstart:er("Transition","TransitionStart"),transitioncancel:er("Transition","TransitionCancel"),transitionend:er("Transition","TransitionEnd")},Jp={},uS={};Ps&&(uS=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function br(e){if(Jp[e])return Jp[e];if(!ro[e])return e;var t=ro[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in uS)return Jp[e]=t[n];return e}var hS=br("animationend"),fS=br("animationiteration"),dS=br("animationstart"),GA=br("transitionrun"),kA=br("transitionstart"),XA=br("transitioncancel"),pS=br("transitionend"),mS=new Map,Um="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Um.push("scrollEnd");function Yi(e,t){mS.set(e,t),Mr(t,[e])}var WA=0;function Bs(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=qi.identifierPrefix;var n=WA++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function my(e){if(e==null||typeof e=="string")return e;var t=null,n=Mo;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t??e.default}function ks(e,t){return e=my(e),t=my(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Dh=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ti=[],oo=0,Bg=0;function of(){for(var e=oo,t=Bg=oo=0;t<e;){var n=Ti[t];Ti[t++]=null;var i=Ti[t];Ti[t++]=null;var s=Ti[t];Ti[t++]=null;var a=Ti[t];if(Ti[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&gS(n,s,a)}}function lf(e,t,n,i){Ti[oo++]=e,Ti[oo++]=t,Ti[oo++]=n,Ti[oo++]=i,Bg|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function zg(e,t,n,i){return lf(e,t,n,i),Lh(e)}function Er(e,t){return lf(e,null,null,t),Lh(e)}function gS(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-fi(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function Lh(e){if(50<cc)throw cc=0,xh=null,Error($(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var lo={};function qA(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(e,t,n,i){return new qA(e,t,n,i)}function Fg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Os(e,t){var n=e.alternate;return n===null?(n=$n(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function _S(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function hh(e,t,n,i,s,a){var r=0;if(i=e,typeof i=="function")Fg(i)&&(r=1);else if(typeof i=="string")r=vR(e,n,ps.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case xm:return e=$n(31,n,t,s),e.elementType=xm,e.lanes=a,e;case eo:return cr(n.children,s,a,t);case Ox:r=8,s|=24;break;case _m:return e=$n(12,n,t,s|2),e.elementType=_m,e.lanes=a,e;case vm:return e=$n(13,n,t,s),e.elementType=vm,e.lanes=a,e;case ym:return e=$n(19,n,t,s),e.elementType=ym,e.lanes=a,e;case UT:case Sm:return e=s|32,e=$n(30,n,t,e),e.elementType=Sm,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case us:r=10;break t;case Ix:r=9;break t;case Ag:r=11;break t;case wg:r=14;break t;case ua:r=16,i=null;break t}r=29,n=Error($(130,e===null?"null":typeof e,"")),i=null}return t=$n(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function cr(e,t,n,i){return e=$n(7,e,i,t),e.lanes=n,e}function Kp(e,t,n){return e=$n(6,e,null,t),e.lanes=n,e}function vS(e){var t=$n(18,null,null,0);return t.stateNode=e,t}function Qp(e,t,n){return t=$n(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var gy=new WeakMap;function Ci(e,t){if(typeof e=="object"&&e!==null){var n=gy.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Zv(t)},gy.set(e,t),t)}return{value:e,source:t,stack:Zv(t)}}var co=[],uo=0,Uh=null,pc=0,Ai=[],wi=0,Ca=null,fs=1,ds="";function Ls(e,t){co[uo++]=pc,co[uo++]=Uh,Uh=e,pc=t}function yS(e,t,n){Ai[wi++]=fs,Ai[wi++]=ds,Ai[wi++]=Ca,Ca=e;var i=fs;e=ds;var s=32-fi(i)-1;i&=~(1<<s),n+=1;var a=32-fi(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,fs=1<<32-fi(t)+s|n<<s|i,ds=a+e}else fs=1<<a|n<<s|i,ds=e}function cf(e){e.return!==null&&(Ls(e,1),yS(e,1,0))}function Hg(e){for(;e===Uh;)Uh=co[--uo],co[uo]=null,pc=co[--uo],co[uo]=null;for(;e===Ca;)Ca=Ai[--wi],Ai[wi]=null,ds=Ai[--wi],Ai[wi]=null,fs=Ai[--wi],Ai[wi]=null}function xS(e,t){Ai[wi++]=fs,Ai[wi++]=ds,Ai[wi++]=Ca,fs=t.id,ds=t.overflow,Ca=e}var vn=null,Fe=null,oe=!1,xa=null,Ni=!1,Om=Error($(519));function Na(e){var t=Error($(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mc(Ci(t,e)),Om}function _y(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[En]=e,t[ni]=i,n){case"dialog":ue("cancel",t),ue("close",t);break;case"iframe":case"object":case"embed":ue("load",t);break;case"video":case"audio":for(n=0;n<yc.length;n++)ue(yc[n],t);break;case"source":ue("error",t);break;case"img":case"image":case"link":ue("error",t),ue("load",t);break;case"details":ue("toggle",t);break;case"input":ue("invalid",t),Kx(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ue("invalid",t);break;case"textarea":ue("invalid",t),jx(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||nb(t.textContent,n)?(i.popover!=null&&(ue("beforetoggle",t),ue("toggle",t)),i.onScroll!=null&&ue("scroll",t),i.onScrollEnd!=null&&ue("scrollend",t),i.onClick!=null&&(t.onclick=hs),t=!0):t=!1,t||Na(e,!0)}function Oh(e){for(vn=e.return;vn;)switch(vn.tag){case 5:case 31:case 13:Ni=!1;return;case 27:case 3:Ni=!0;return;default:vn=vn.return}}function Jr(e){if(e!==vn)return!1;if(!oe)return Oh(e),oe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||vg(e.type,e.memoizedProps)),n=!n),n&&Fe&&Na(e),Oh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));Fe=dx(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));Fe=dx(e)}else t===27?(t=Fe,Ia(e.type)?(e=Mg,Mg=null,Fe=e):Fe=t):Fe=vn?Di(e.stateNode.nextSibling):null;return!0}function dr(){Fe=vn=null,oe=!1}function jp(){var e=xa;return e!==null&&(Qn===null?Qn=e:Qn.push.apply(Qn,e),xa=null),e}function mc(e){xa===null?xa=[e]:xa.push(e)}var Im=_s(null),Tr=null,Us=null;function ma(e,t,n){He(Im,t._currentValue),t._currentValue=n}function Is(e){e._currentValue=Im.current,An(Im)}function fh(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Pm(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),fh(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error($(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),fh(r,n,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),fh(s.return,n,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function pr(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error($(387));if(r=r.memoizedProps,r!==null){var o=s.type;pi(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===Ah.current){if(r=s.alternate,r===null)throw Error($(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Uo):e=[Uo])}s=s.return}return e!==null&&Pm(t,e,n,i),t.flags|=262144,e!==null}function Ih(e){for(e=e.firstContext;e!==null;){if(!pi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function mr(e){Tr=e,Us=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return SS(Tr,e)}function Zu(e,t){return Tr===null&&mr(e),SS(e,t)}function SS(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Us===null){if(e===null)throw Error($(308));Us=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Us=Us.next=t;return n}var YA=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},ZA=un.unstable_scheduleCallback,JA=un.unstable_NormalPriority,en={$$typeof:us,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vg(){return{controller:new YA,data:new Map,refCount:0}}function Lc(e){e.refCount--,e.refCount===0&&ZA(JA,function(){e.controller.abort()})}function vy(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var Jl=null;function KA(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var tc=null,Bm=0,gr=0,go=null;function QA(e,t){if(tc===null){var n=tc=[];Bm=0,gr=m0(),go={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Bm++,t.then(yy,yy),t}function yy(){if(--Bm===0&&(Jl=null,tc!==null)){go!==null&&(go.status="fulfilled");var e=tc;tc=null,gr=0,go=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function jA(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var xy=qt.S;qt.S=function(e,t){if(FM=ui(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&QA(e,t),Jl!==null)for(var n=No;n!==null;)vy(n,Jl),n=n.next;if(n=e.types,n!==null){for(var i=No;i!==null;)vy(i,n),i=i.next;if(gr!==0){i=Jl,i===null&&(i=Jl=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}xy!==null&&xy(e,t)};var ur=_s(null);function Gg(){var e=ur.current;return e!==null?e:Oe.pooledCache}function dh(e,t){t===null?He(ur,ur.current):He(ur,t.pool)}function MS(){var e=Gg();return e===null?null:{parent:en._currentValue,pool:e}}var zo=Error($(460)),kg=Error($(474)),uf=Error($(542)),Ph={then:function(){}};function Sy(e){return e=e.status,e==="fulfilled"||e==="rejected"}function bS(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(hs,hs),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,by(e),e===void 0&&!("reason"in t)?Error($(600)):e;default:if(typeof t.status=="string")t.then(hs,hs);else{if(e=Oe,e!==null&&100<e.shellSuspendCounter)throw Error($(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,by(e),e}throw hr=t,zo}}function sr(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(hr=n,zo):n}}var hr=null;function My(){if(hr===null)throw Error($(459));var e=hr;return hr=null,e}function by(e){if(e===zo||e===uf)throw Error($(483))}var _o=null,gc=0;function Ju(e){var t=gc;return gc+=1,_o===null&&(_o=[]),bS(_o,e,t)}function oa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ku(e,t){throw t.$$typeof===LT?Error($(525)):(e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ES(e){function t(d,m){if(e){var x=d.deletions;x===null?(d.deletions=[m],d.flags|=16):x.push(m)}}function n(d,m){if(!e)return null;for(;m!==null;)t(d,m),m=m.sibling;return null}function i(d){for(var m=new Map;d!==null;)d.key===null?m.set(d.index,d):m.set(d.key,d),d=d.sibling;return m}function s(d,m){return d=Os(d,m),d.index=0,d.sibling=null,d}function a(d,m,x){return d.index=x,e?(x=d.alternate,x!==null?(x=x.index,x<m?(d.flags|=2,m):x):(d.flags|=134217730,m)):(d.flags|=1048576,m)}function r(d){return e&&d.alternate===null&&(d.flags|=134217730),d}function o(d,m,x,y){return m===null||m.tag!==6?(m=Kp(x,d.mode,y),m.return=d,m):(m=s(m,x),m.return=d,m)}function l(d,m,x,y){var T=x.type;return T===eo?(d=h(d,m,x.props.children,y,x.key),oa(d,x),d):m!==null&&(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ua&&sr(T)===m.type)?(m=s(m,x.props),oa(m,x),m.return=d,m):(m=hh(x.type,x.key,x.props,null,d.mode,y),oa(m,x),m.return=d,m)}function c(d,m,x,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=Qp(x,d.mode,y),m.return=d,m):(m=s(m,x.children||[]),m.return=d,m)}function h(d,m,x,y,T){return m===null||m.tag!==7?(m=cr(x,d.mode,y,T),m.return=d,m):(m=s(m,x),m.return=d,m)}function p(d,m,x){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Kp(""+m,d.mode,x),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Hu:return x=hh(m.type,m.key,m.props,null,d.mode,x),oa(x,m),x.return=d,x;case ql:return m=Qp(m,d.mode,x),m.return=d,m;case ua:return m=sr(m),p(d,m,x)}if(Yl(m)||Hl(m))return m=cr(m,d.mode,x,null),m.return=d,m;if(typeof m.then=="function")return p(d,Ju(m),x);if(m.$$typeof===us)return p(d,Zu(d,m),x);Ku(d,m)}return null}function u(d,m,x,y){var T=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return T!==null?null:o(d,m,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Hu:return x.key===T?l(d,m,x,y):null;case ql:return x.key===T?c(d,m,x,y):null;case ua:return x=sr(x),u(d,m,x,y)}if(Yl(x)||Hl(x))return T!==null?null:h(d,m,x,y,null);if(typeof x.then=="function")return u(d,m,Ju(x),y);if(x.$$typeof===us)return u(d,m,Zu(d,x),y);Ku(d,x)}return null}function f(d,m,x,y,T){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return d=d.get(x)||null,o(m,d,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Hu:return d=d.get(y.key===null?x:y.key)||null,l(m,d,y,T);case ql:return d=d.get(y.key===null?x:y.key)||null,c(m,d,y,T);case ua:return y=sr(y),f(d,m,x,y,T)}if(Yl(y)||Hl(y))return d=d.get(x)||null,h(m,d,y,T,null);if(typeof y.then=="function")return f(d,m,x,Ju(y),T);if(y.$$typeof===us)return f(d,m,x,Zu(m,y),T);Ku(m,y)}return null}function _(d,m,x,y){for(var T=null,w=null,v=m,E=m=0,I=null;v!==null&&E<x.length;E++){v.index>E?(I=v,v=null):I=v.sibling;var R=u(d,v,x[E],y);if(R===null){v===null&&(v=I);break}e&&v&&R.alternate===null&&t(d,v),m=a(R,m,E),w===null?T=R:w.sibling=R,w=R,v=I}if(E===x.length)return n(d,v),oe&&Ls(d,E),T;if(v===null){for(;E<x.length;E++)v=p(d,x[E],y),v!==null&&(m=a(v,m,E),w===null?T=v:w.sibling=v,w=v);return oe&&Ls(d,E),T}for(v=i(v);E<x.length;E++)I=f(v,d,E,x[E],y),I!==null&&(e&&(R=I.alternate,R!==null&&v.delete(R.key===null?E:R.key)),m=a(I,m,E),w===null?T=I:w.sibling=I,w=I);return e&&v.forEach(function(C){return t(d,C)}),oe&&Ls(d,E),T}function M(d,m,x,y){if(x==null)throw Error($(151));for(var T=null,w=null,v=m,E=m=0,I=null,R=x.next();v!==null&&!R.done;E++,R=x.next()){v.index>E?(I=v,v=null):I=v.sibling;var C=u(d,v,R.value,y);if(C===null){v===null&&(v=I);break}e&&v&&C.alternate===null&&t(d,v),m=a(C,m,E),w===null?T=C:w.sibling=C,w=C,v=I}if(R.done)return n(d,v),oe&&Ls(d,E),T;if(v===null){for(;!R.done;E++,R=x.next())R=p(d,R.value,y),R!==null&&(m=a(R,m,E),w===null?T=R:w.sibling=R,w=R);return oe&&Ls(d,E),T}for(v=i(v);!R.done;E++,R=x.next())R=f(v,d,E,R.value,y),R!==null&&(e&&(I=R.alternate,I!==null&&v.delete(I.key===null?E:I.key)),m=a(R,m,E),w===null?T=R:w.sibling=R,w=R);return e&&v.forEach(function(H){return t(d,H)}),oe&&Ls(d,E),T}function g(d,m,x,y){if(typeof x=="object"&&x!==null&&x.type===eo&&x.key===null&&x.props.ref===void 0&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Hu:t:{for(var T=x.key;m!==null;){if(m.key===T){if(T=x.type,T===eo){if(m.tag===7){n(d,m.sibling),y=s(m,x.props.children),oa(y,x),y.return=d,d=y;break t}}else if(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ua&&sr(T)===m.type){n(d,m.sibling),y=s(m,x.props),oa(y,x),y.return=d,d=y;break t}n(d,m);break}else t(d,m);m=m.sibling}x.type===eo?(y=cr(x.props.children,d.mode,y,x.key),oa(y,x),y.return=d,d=y):(y=hh(x.type,x.key,x.props,null,d.mode,y),oa(y,x),y.return=d,d=y)}return r(d);case ql:t:{for(T=x.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(d,m.sibling),y=s(m,x.children||[]),y.return=d,d=y;break t}else{n(d,m);break}else t(d,m);m=m.sibling}y=Qp(x,d.mode,y),y.return=d,d=y}return r(d);case ua:return x=sr(x),g(d,m,x,y)}if(Yl(x))return _(d,m,x,y);if(Hl(x)){if(T=Hl(x),typeof T!="function")throw Error($(150));return x=T.call(x),M(d,m,x,y)}if(typeof x.then=="function")return g(d,m,Ju(x),y);if(x.$$typeof===us)return g(d,m,Zu(d,x),y);Ku(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,m!==null&&m.tag===6?(n(d,m.sibling),y=s(m,x),y.return=d,d=y):(n(d,m),y=Kp(x,d.mode,y),y.return=d,d=y),r(d)):n(d,m)}return function(d,m,x,y){try{gc=0;var T=g(d,m,x,y);return _o=null,T}catch(v){if(v===zo||v===uf)throw v;var w=$n(29,v,null,d.mode);return w.lanes=y,w.return=d,w}}}var _r=ES(!0),TS=ES(!1),ha=!1;function Xg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ma(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Se&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Lh(e),gS(e,null,n),t}return lf(e,i,t,n),Lh(e)}function ec(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Gx(e,n)}}function $p(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Fm=!1;function nc(){if(Fm){var e=go;if(e!==null)throw e}}function ic(e,t,n,i){Fm=!1;var s=e.updateQueue;ha=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(a!==null){var p=s.baseState;r=0,h=c=l=null,o=a;do{var u=o.lane&-536870913,f=u!==o.lane;if(f?(fe&u)===u:(i&u)===u){u!==0&&u===gr&&(Fm=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var _=e,M=o;u=t;var g=n;switch(M.tag){case 1:if(_=M.payload,typeof _=="function"){p=_.call(g,p,u);break t}p=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=M.payload,u=typeof _=="function"?_.call(g,p,u):_,u==null)break t;p=Ie({},p,u);break t;case 2:ha=!0}}u=o.callback,u!==null&&(e.flags|=64,f&&(e.flags|=8192),f=s.callbacks,f===null?s.callbacks=[u]:f.push(u))}else f={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=f,l=p):h=h.next=f,r|=u;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;f=o,o=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);h===null&&(l=p),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=h,a===null&&(s.shared.lanes=0),Ua|=r,e.lanes=r,e.memoizedState=p}}function AS(e,t){if(typeof e!="function")throw Error($(191,e));e.call(t)}function wS(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)AS(n[e],t)}var Da=_s(null),Bh=_s(0);function Ey(e,t){e=Vs,He(Bh,e),He(Da,t),Vs=e|t.baseLanes}function Hm(){He(Bh,Vs),He(Da,Da.current)}function Wg(){Vs=Bh.current,An(Da),An(Bh)}var Cn=_s(null),In=null;function ba(e){var t=e.alternate;He(wn,wn.current&1),He(Cn,e),In===null&&(t===null||Da.current!==null||t.memoizedState!==null)&&(In=e)}function Vm(e){He(wn,wn.current),He(Cn,e),In===null&&(In=e)}function RS(e){e.tag===22?(He(wn,wn.current),He(Cn,e),In===null&&(In=e)):Ea()}function Ea(){He(wn,wn.current),He(Cn,Cn.current)}function oi(e){An(Cn),In===e&&(In=null),An(wn)}var wn=_s(0);function _c(e,t){He(Cn,Cn.current),He(wn,t)}function qg(e){An(wn),An(Cn),In===e&&(In=null)}function zh(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Sg(n)||y0(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var zs=0,ne=null,Le=null,tn=null,Fh=!1,vo=!1,vr=!1,Hh=0,vc=0,yo=null,$A=0;function Ke(){throw Error($(321))}function Yg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pi(e[n],t[n]))return!1;return!0}function Zg(e,t,n,i,s,a){return zs=a,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qt.H=e===null||e.memoizedState===null?aM:rM,vr=!1,a=n(i,s),vr=!1,vo&&(a=NS(t,n,i,s)),CS(e),a}function CS(e){qt.H=Vh;var t=Le!==null&&Le.next!==null;if(zs=0,tn=Le=ne=null,Fh=!1,vc=0,yo=null,t)throw Error($(300));e===null||nn||(e=e.dependencies,e!==null&&Ih(e)&&(nn=!0))}function NS(e,t,n,i){ne=e;var s=0;do{if(vo&&(yo=null),vc=0,vo=!1,25<=s)throw Error($(301));if(s+=1,tn=Le=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}qt.H=ow,a=t(n,i)}while(vo);return a}function tw(){var e=qt.H,t=e.useState()[0];return t=typeof t.then=="function"?Uc(t):t,e=e.useState()[0],(Le!==null?Le.memoizedState:null)!==e&&(ne.flags|=1024),t}function Jg(){var e=Hh!==0;return Hh=0,e}function Kg(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Qg(e){if(Fh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Fh=!1}zs=0,tn=Le=ne=null,vo=!1,vc=Hh=0,yo=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?ne.memoizedState=tn=e:tn=tn.next=e,tn}function je(){if(Le===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=tn===null?ne.memoizedState:tn.next;if(t!==null)tn=t,Le=e;else{if(e===null)throw ne.alternate===null?Error($(467)):Error($(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},tn===null?ne.memoizedState=tn=e:tn=tn.next=e}return tn}function hf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Uc(e){var t=vc;return vc+=1,yo===null&&(yo=[]),e=bS(yo,e,t),t=ne,(tn===null?t.memoizedState:tn.next)===null&&(t=t.alternate,qt.H=t===null||t.memoizedState===null?aM:rM),e}function ff(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Uc(e);if(e.$$typeof===IT)return;if(e.$$typeof===us)return Tn(e)}throw Error($(438,String(e)))}function jg(e){var t=null,n=ne.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=ne.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=hf(),ne.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=OT;return t.index++,n}function Fs(e,t){return typeof t=="function"?t(e):t}function ph(e){var t=je();return $g(t,Le,e)}function $g(e,t,n){var i=e.queue;if(i===null)throw Error($(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,h=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(fe&p)===p:(zs&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===gr&&(h=!0);else if((zs&u)===u){c=c.next,u===gr&&(h=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=a):l=l.next=p,ne.lanes|=u,Ua|=u;p=c.action,vr&&n(a,p),a=c.hasEagerState?c.eagerState:n(a,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=a):l=l.next=u,ne.lanes|=p,Ua|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!pi(a,e.memoizedState)&&(nn=!0,h&&(n=go,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function tm(e){var t=je(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);pi(a,t.memoizedState)||(nn=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function DS(e,t,n){var i=ne,s=je(),a=oe;if(a){if(n===void 0)throw Error($(407));n=n()}else n=t();var r=!pi((Le||s).memoizedState,n);if(r&&(s.memoizedState=n,nn=!0),s=s.queue,t0(OS.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||r||tn!==null&&(tn.memoizedState.tag&1)!==0,Ao(e?9:8,{destroy:void 0},US.bind(null,i,s,n,t),null),e){if(i.flags|=2048,Oe===null)throw Error($(349));a||(zs&127)!==0||LS(i,t,n)}return n}function LS(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t=hf(),ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function US(e,t,n,i){t.value=n,t.getSnapshot=i,IS(t)&&PS(e)}function OS(e,t,n){return n(function(){IS(t)&&PS(e)})}function IS(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pi(e,n)}catch{return!0}}function PS(e){var t=Er(e,2);t!==null&&ti(t,e,2)}function Gm(e){var t=Gn();if(typeof e=="function"){var n=e;if(e=n(),vr){da(!0);try{n()}finally{da(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fs,lastRenderedState:e},t}function BS(e,t,n,i){return e.baseState=n,$g(e,Le,typeof i=="function"?i:Fs)}function ew(e,t,n,i,s){if(pf(e))throw Error($(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};qt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,zS(t,a)):(a.next=n.next,t.pending=n.next=a)}}function zS(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=qt.T,r={};r.types=a!==null?a.types:null,qt.T=r;try{var o=n(s,i),l=qt.S;l!==null&&l(r,o),Ty(e,t,o)}catch(c){km(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),qt.T=a}}else try{a=n(s,i),Ty(e,t,a)}catch(c){km(e,t,c)}}function Ty(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Ay(e,t,i)},function(i){return km(e,t,i)}):Ay(e,t,n)}function Ay(e,t,n){t.status="fulfilled",t.value=n,FS(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,zS(e,n)))}function km(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,FS(t),t=t.next;while(t!==i)}e.action=null}function FS(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function HS(e,t){return t}function wy(e,t){if(oe){var n=Oe.formState;if(n!==null){t:{var i=ne;if(oe){if(Fe){e:{for(var s=Fe,a=Ni;s.nodeType!==8;){if(!a){s=null;break e}if(s=Di(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Fe=Di(s.nextSibling),i=s.data==="F!";break t}}Na(i)}i=!1}i&&(t=n[0])}}return n=Gn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:HS,lastRenderedState:t},n.queue=i,n=nM.bind(null,ne,i),i.dispatch=n,i=Gm(!1),a=s0.bind(null,ne,!1,i.queue),i=Gn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=ew.bind(null,ne,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function Ry(e){var t=je();return VS(t,Le,e)}function VS(e,t,n){if(t=$g(e,t,HS)[0],e=ph(Fs)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Uc(t)}catch(r){throw r===zo?uf:r}else i=t;t=je();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(ne.flags|=2048,Ao(9,{destroy:void 0},nw.bind(null,s,n),null)),[i,a,e]}function nw(e,t){e.action=t}function Cy(e){var t=je(),n=Le;if(n!==null)return VS(t,n,e);je(),t=t.memoizedState,n=je();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Ao(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=ne.updateQueue,t===null&&(t=hf(),ne.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function GS(){return je().memoizedState}function mh(e,t,n,i){var s=Gn();ne.flags|=e,s.memoizedState=Ao(1|t,{destroy:void 0},n,i===void 0?null:i)}function df(e,t,n,i){var s=je();i=i===void 0?null:i;var a=s.memoizedState.inst;Le!==null&&i!==null&&Yg(i,Le.memoizedState.deps)?s.memoizedState=Ao(t,a,n,i):(ne.flags|=e,s.memoizedState=Ao(1|t,a,n,i))}function Ny(e,t){mh(8390656,8,e,t)}function t0(e,t){df(2048,8,e,t)}function iw(e){ne.flags|=4;var t=ne.updateQueue;if(t===null)t=hf(),ne.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function kS(e){var t=je().memoizedState;return iw({ref:t,nextImpl:e}),function(){if((Se&2)!==0)throw Error($(440));return t.impl.apply(void 0,arguments)}}function XS(e,t){return df(4,2,e,t)}function WS(e,t){return df(4,4,e,t)}function qS(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function YS(e,t,n){n=n!=null?n.concat([e]):null,df(4,4,qS.bind(null,t,e),n)}function e0(){}function ZS(e,t){var n=je();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Yg(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function JS(e,t){var n=je();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Yg(t,i[1]))return i[0];if(i=e(),vr){da(!0);try{e()}finally{da(!1)}}return n.memoizedState=[i,t],i}function n0(e,t,n){return n===void 0||(zs&1073741824)!==0&&(fe&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=VM(),ne.lanes|=e,Ua|=e,n)}function KS(e,t,n,i){return pi(n,t)?n:Da.current!==null?(e=n0(e,n,i),pi(e,t)||(nn=!0),e):(zs&106)===0||(zs&1073741824)!==0&&(fe&261930)===0?(nn=!0,e.memoizedState=n):(e=VM(),ne.lanes|=e,Ua|=e,t)}function QS(e,t,n,i,s){var a=Me.p;Me.p=a!==0&&8>a?a:8;var r=qt.T,o={};o.types=r!==null?r.types:null,qt.T=o,s0(e,!1,t,n);try{var l=s(),c=qt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=jA(l,i);sc(e,t,h,di(e))}else sc(e,t,i,di(e))}catch(p){sc(e,t,{then:function(){},status:"rejected",reason:p},di())}finally{Me.p=a,r!==null&&o.types!==null&&(r.types=o.types),qt.T=r}}function sw(){}function Xm(e,t,n,i){if(e.tag!==5)throw Error($(476));var s=jS(e).queue;QS(e,s,t,lr,n===null?sw:function(){return $S(e),n(i)})}function jS(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:lr,baseState:lr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fs,lastRenderedState:lr},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function $S(e){var t=jS(e);t.next===null&&(t=e.alternate.memoizedState),sc(e,t.next.queue,{},di())}function i0(){return Tn(Uo)}function tM(){return je().memoizedState}function eM(){return je().memoizedState}function aw(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=di();e=Sa(n);var i=Ma(t,e,n);i!==null&&(ti(i,t,n),ec(i,t,n)),t={cache:Vg()},e.payload=t;return}t=t.return}}function rw(e,t,n){var i=di();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},pf(e)?iM(t,n):(n=zg(e,t,n,i),n!==null&&(ti(n,e,i),sM(n,t,i)))}function nM(e,t,n){var i=di();sc(e,t,n,i)}function sc(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(pf(e))iM(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,pi(o,r))return lf(e,t,s,0),Oe===null&&of(),!1}catch{}if(n=zg(e,t,s,i),n!==null)return ti(n,e,i),sM(n,t,i),!0}return!1}function s0(e,t,n,i){if(i={lane:2,revertLane:m0(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},pf(e)){if(t)throw Error($(479))}else t=zg(e,n,i,2),t!==null&&ti(t,e,2)}function pf(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function iM(e,t){vo=Fh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sM(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Gx(e,n)}}var Vh={readContext:Tn,use:ff,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke,useEffectEvent:Ke},aM={readContext:Tn,use:ff,useCallback:function(e,t){return Gn().memoizedState=[e,t===void 0?null:t],e},useContext:Tn,useEffect:Ny,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,mh(4194308,4,qS.bind(null,t,e),n)},useLayoutEffect:function(e,t){return mh(4194308,4,e,t)},useInsertionEffect:function(e,t){mh(4,2,e,t)},useMemo:function(e,t){var n=Gn();t=t===void 0?null:t;var i=e();if(vr){da(!0);try{e()}finally{da(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Gn();if(n!==void 0){var s=n(t);if(vr){da(!0);try{n(t)}finally{da(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=rw.bind(null,ne,e),[i.memoizedState,e]},useRef:function(e){var t=Gn();return e={current:e},t.memoizedState=e},useState:function(e){e=Gm(e);var t=e.queue,n=nM.bind(null,ne,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:e0,useDeferredValue:function(e,t){var n=Gn();return n0(n,e,t)},useTransition:function(){var e=Gm(!1);return e=QS.bind(null,ne,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=ne,s=Gn();if(oe){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),Oe===null)throw Error($(349));(fe&127)!==0||LS(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,Ny(OS.bind(null,i,a,e),[e]),i.flags|=2048,Ao(9,{destroy:void 0},US.bind(null,i,a,n,t),null),n},useId:function(){var e=Gn(),t=Oe.identifierPrefix;if(oe){var n=ds,i=fs;n=(i&~(1<<32-fi(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Hh++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=$A++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:i0,useFormState:wy,useActionState:wy,useOptimistic:function(e){var t=Gn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=s0.bind(null,ne,!0,n),n.dispatch=t,[e,t]},useMemoCache:jg,useCacheRefresh:function(){return Gn().memoizedState=aw.bind(null,ne)},useEffectEvent:function(e){var t=Gn(),n={impl:e};return t.memoizedState=n,function(){if((Se&2)!==0)throw Error($(440));return n.impl.apply(void 0,arguments)}}},rM={readContext:Tn,use:ff,useCallback:ZS,useContext:Tn,useEffect:t0,useImperativeHandle:YS,useInsertionEffect:XS,useLayoutEffect:WS,useMemo:JS,useReducer:ph,useRef:GS,useState:function(){return ph(Fs)},useDebugValue:e0,useDeferredValue:function(e,t){var n=je();return KS(n,Le.memoizedState,e,t)},useTransition:function(){var e=ph(Fs)[0],t=je().memoizedState;return[typeof e=="boolean"?e:Uc(e),t]},useSyncExternalStore:DS,useId:tM,useHostTransitionStatus:i0,useFormState:Ry,useActionState:Ry,useOptimistic:function(e,t){var n=je();return BS(n,Le,e,t)},useMemoCache:jg,useCacheRefresh:eM,useEffectEvent:kS},ow={readContext:Tn,use:ff,useCallback:ZS,useContext:Tn,useEffect:t0,useImperativeHandle:YS,useInsertionEffect:XS,useLayoutEffect:WS,useMemo:JS,useReducer:tm,useRef:GS,useState:function(){return tm(Fs)},useDebugValue:e0,useDeferredValue:function(e,t){var n=je();return Le===null?n0(n,e,t):KS(n,Le.memoizedState,e,t)},useTransition:function(){var e=tm(Fs)[0],t=je().memoizedState;return[typeof e=="boolean"?e:Uc(e),t]},useSyncExternalStore:DS,useId:tM,useHostTransitionStatus:i0,useFormState:Cy,useActionState:Cy,useOptimistic:function(e,t){var n=je();return Le!==null?BS(n,Le,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:jg,useCacheRefresh:eM,useEffectEvent:kS};function em(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Wm={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=di(),s=Sa(i);s.payload=t,n!=null&&(s.callback=n),t=Ma(e,s,i),t!==null&&(ti(t,e,i),ec(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=di(),s=Sa(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Ma(e,s,i),t!==null&&(ti(t,e,i),ec(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=di(),i=Sa(n);i.tag=2,t!=null&&(i.callback=t),t=Ma(e,i,n),t!==null&&(ti(t,e,n),ec(t,e,n))}};function Dy(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!dc(n,i)||!dc(s,a):!0}function Ly(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Wm.enqueueReplaceState(t,t.state,null)}function yr(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Ie({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function oM(e){Dh(e)}function lM(e){console.error(e)}function cM(e){Dh(e)}function Gh(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Uy(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function qm(e,t,n){return n=Sa(n),n.tag=3,n.payload={element:null},n.callback=function(){Gh(e,t)},n}function uM(e){return e=Sa(e),e.tag=3,e}function hM(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){Uy(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Uy(t,n,i),typeof s!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function lw(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&pr(t,n,s,!0),n=Cn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return In===null?Kh():n.alternate===null&&Qe===0&&(Qe=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Ph?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),lm(e,i,s)),!1;case 22:return n.flags|=65536,i===Ph?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),lm(e,i,s)),!1}throw Error($(435,n.tag))}return lm(e,i,s),Kh(),!1}if(oe)return t=Cn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==Om&&(e=Error($(422),{cause:i}),mc(Ci(e,n)))):(i!==Om&&(t=Error($(423),{cause:i}),mc(Ci(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Ci(i,n),s=qm(e.stateNode,i,s),$p(e,s),Qe!==4&&(Qe=2)),!1;var a=Error($(520),{cause:i});if(a=Ci(a,n),lc===null?lc=[a]:lc.push(a),Qe!==4&&(Qe=2),t===null)return!0;i=Ci(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=qm(n.stateNode,i,e),$p(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Ta===null||!Ta.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=uM(s),hM(s,e,n,i),$p(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var a0=Error($(461)),nn=!1;function ln(e,t,n,i){t.child=e===null?TS(t,null,n,i):_r(t,e.child,n,i)}function Oy(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return mr(t),i=Zg(e,t,n,r,a,s),o=Jg(),e!==null&&!nn?(Kg(e,t,s),Hs(e,t,s)):(oe&&o&&cf(t),t.flags|=1,ln(e,t,i,s),t.child)}function Iy(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Fg(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,fM(e,t,a,i,s)):(e=hh(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!o0(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:dc,n(r,i)&&e.ref===t.ref)return Hs(e,t,s)}return t.flags|=1,e=Os(a,i),e.ref=t.ref,e.return=t,t.child=e}function fM(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(dc(a,i)&&e.ref===t.ref)if(nn=!1,t.pendingProps=i=a,o0(e,s))(e.flags&131072)!==0&&(nn=!0);else return t.lanes=e.lanes,Hs(e,t,s)}return Ym(e,t,n,i,s)}function dM(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return Py(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&dh(t,a!==null?a.cachePool:null),a!==null?Ey(t,a):Hm(),RS(t);else return i=t.lanes=536870912,Py(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(dh(t,a.cachePool),Ey(t,a),Ea(),t.memoizedState=null):(e!==null&&dh(t,null),Hm(),Ea());return ln(e,t,s,n),t.child}function ac(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Py(e,t,n,i,s){var a=Gg();return a=a===null?null:{parent:en._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&dh(t,null),Hm(),RS(t),e!==null&&pr(e,t,i,!0),t.childLanes=s,null}function gh(e,t){return t=mf({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function By(e,t,n){return _r(t,e.child,null,n),e=gh(t,t.pendingProps),e.flags|=2,oi(t),t.memoizedState=null,e}function cw(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(oe){if(i.mode==="hidden")return e=gh(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},ac(null,e);if(Vm(t),(e=Fe)?(e=db(e,Ni),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:fs,overflow:ds}:null,retryLane:536870912,hydrationErrors:null},n=vS(e),n.return=t,t.child=n,vn=t,Fe=null)):e=null,e===null)throw Na(t);return t.lanes=536870912,null}return gh(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(Vm(t),s)if(t.flags&256)t.flags&=-257,t=By(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error($(558));else if(nn||pr(e,t,n,!1),s=(n&e.childLanes)!==0,nn||s){if(Da.current===null){if(i=Oe,i!==null&&(r=kx(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,Er(e,r),ti(i,e,r),a0;Kh()}t=By(e,t,n)}else e=a.treeContext,Fe=Di(r.nextSibling),vn=t,oe=!0,xa=null,Ni=!1,e!==null&&xS(t,e),t=gh(t,i),t.flags|=134221824;return t}return e=Os(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Qr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error($(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ym(e,t,n,i,s){return mr(t),n=Zg(e,t,n,i,void 0,s),i=Jg(),e!==null&&!nn?(Kg(e,t,s),Hs(e,t,s)):(oe&&i&&cf(t),t.flags|=1,ln(e,t,n,s),t.child)}function zy(e,t,n,i,s,a){return mr(t),t.updateQueue=null,n=NS(t,i,n,s),CS(e),i=Jg(),e!==null&&!nn?(Kg(e,t,a),Hs(e,t,a)):(oe&&i&&cf(t),t.flags|=1,ln(e,t,n,a),t.child)}function Fy(e,t,n,i,s){if(mr(t),t.stateNode===null){var a=lo,r=n.contextType;typeof r=="object"&&r!==null&&(a=Tn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Wm,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},Xg(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?Tn(r):lo,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(em(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&Wm.enqueueReplaceState(a,a.state,null),ic(t,i,a,s),nc(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=yr(n,o);a.props=l;var c=a.context,h=n.contextType;r=lo,typeof h=="object"&&h!==null&&(r=Tn(h));var p=n.getDerivedStateFromProps;h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&Ly(t,a,i,r),ha=!1;var u=t.memoizedState;a.state=u,ic(t,i,a,s),nc(),c=t.memoizedState,o||u!==c||ha?(typeof p=="function"&&(em(t,n,p,i),c=t.memoizedState),(l=ha||Dy(t,n,l,i,u,c,r))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,zm(e,t),r=t.memoizedProps,h=yr(n,r),a.props=h,p=t.pendingProps,u=a.context,c=n.contextType,l=lo,typeof c=="object"&&c!==null&&(l=Tn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==p||u!==l)&&Ly(t,a,i,l),ha=!1,u=t.memoizedState,a.state=u,ic(t,i,a,s),nc();var f=t.memoizedState;r!==p||u!==f||ha||e!==null&&e.dependencies!==null&&Ih(e.dependencies)?(typeof o=="function"&&(em(t,n,o,i),f=t.memoizedState),(h=ha||Dy(t,n,h,i,u,f,l)||e!==null&&e.dependencies!==null&&Ih(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,f,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,f,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=f),a.props=i,a.state=f,a.context=l,i=h):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Qr(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=_r(t,e.child,null,s),t.child=_r(t,null,n,s)):ln(e,t,n,s),t.memoizedState=a.state,e=t.child):e=Hs(e,t,s),e}function Hy(e,t,n,i){return dr(),t.flags|=256,ln(e,t,n,i),t.child}var Zm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Jm(e){return{baseLanes:e,cachePool:MS()}}function Km(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=ci),e}function pM(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(wn.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(oe){if(s?ba(t):Ea(),(e=Fe)?(e=db(e,Ni),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:fs,overflow:ds}:null,retryLane:536870912,hydrationErrors:null},n=vS(e),n.return=t,t.child=n,vn=t,Fe=null)):e=null,e===null)throw Na(t);return y0(e)?t.lanes=32:t.lanes=536870912,null}return a=i.children,i=i.fallback,s?(Ea(),s=t.mode,a=mf({mode:"hidden",children:a},s),i=cr(i,s,n,null),a.return=t,i.return=t,a.sibling=i,t.child=a,i=t.child,i.memoizedState=Jm(n),i.childLanes=Km(e,r,n),t.memoizedState=Zm,ac(null,i)):(ba(t),r0(t,a))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return uw(e,t,a,r,i,l,o,n)}return s?(Ea(),s=i.fallback,a=t.mode,o=e.child,l=o.sibling,i=Os(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=Os(l,s):(s=cr(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,ac(null,i),i=t.child,s=e.child.memoizedState,s===null?s=Jm(n):(a=s.cachePool,a!==null?(o=en._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=MS(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=Km(e,r,n),t.memoizedState=Zm,ac(e.child,i)):(ba(t),n=e.child,e=n.sibling,n=Os(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function r0(e,t){return t=mf({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function mf(e,t){return e=$n(22,e,null,t),e.lanes=0,e}function Qu(e,t,n){return _r(t,e.child,null,n),e=r0(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function uw(e,t,n,i,s,a,r,o){if(n)return t.flags&256?(ba(t),t.flags&=-257,Qu(e,t,o)):t.memoizedState!==null?(Ea(),t.child=e.child,t.flags|=128,null):(Ea(),a=s.fallback,r=t.mode,s=mf({mode:"visible",children:s.children},r),a=cr(a,r,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,_r(t,e.child,null,o),s=t.child,s.memoizedState=Jm(o),s.childLanes=Km(e,i,o),t.memoizedState=Zm,ac(null,s));if(ba(t),y0(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error($(419)),s.stack="",s.digest=i,mc({value:s,source:null,stack:null})),Qu(e,t,o)}if(nn||pr(e,t,o,!1),i=(o&e.childLanes)!==0,nn||i){if(Da.current!==null)return Qu(e,t,o);if(i=Oe,i!==null&&(s=kx(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,Er(e,s),ti(i,e,s),a0;return Sg(a)||Kh(),Qu(e,t,o)}return Sg(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,Fe=Di(a.nextSibling),vn=t,oe=!0,xa=null,Ni=!1,e!==null&&xS(t,e),t=r0(t,s.children),t.flags|=134221824,t)}function Vy(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),fh(e.return,t,n)}function Gy(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&zh(n)===null&&(t=e),e=e.sibling}return t}function ju(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function nm(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Qm(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=wn.current;if(t.flags&128)return _c(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,_c(t,r),s==="backwards"&&e!==null?(nm(e),ln(e,t,i,n),nm(e)):ln(e,t,i,n),i=oe?pc:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vy(e,n,t);else if(e.tag===19)Vy(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=Gy(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,nm(t)),ju(t,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&zh(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}ju(t,!0,n,null,a,i);break;case"together":ju(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=Gy(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),ju(t,!1,s,n,a,i)}return t.child}function ky(e,t,n){var i=t.pendingProps;return ma(t,t.type,i.value),ln(e,t,i.children,n),t.child}function Hs(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ua|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(pr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=Os(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Os(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function o0(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ih(e)))}function hw(e,t,n){switch(t.tag){case 3:wh(t,t.stateNode.containerInfo),ma(t,en,e.memoizedState.cache),dr();break;case 27:case 5:Em(t);break;case 4:wh(t,t.stateNode.containerInfo);break;case 10:ma(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Vm(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return ba(t),t.flags|=128,null;i=pr(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?pM(e,t,n):(ba(t),e=Hs(e,t,n),e!==null?e.sibling:null)}ba(t);break;case 19:if(t.flags&128)return Qm(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(pr(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return Qm(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),_c(t,wn.current),i)break;return null;case 22:return t.lanes=0,dM(e,t,n,t.pendingProps);case 24:ma(t,en,e.memoizedState.cache)}return Hs(e,t,n)}function mM(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)nn=!0;else{if(!o0(e,n)&&(t.flags&128)===0)return nn=!1,hw(e,t,n);nn=(e.flags&131072)!==0}else nn=!1,oe&&(t.flags&1048576)!==0&&yS(t,pc,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=sr(t.elementType),t.type=e,typeof e=="function")Fg(e)?(i=yr(e,i),t.tag=1,t=Fy(null,t,e,i,n)):(t.tag=0,t=Ym(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Ag){t.tag=11,t=Oy(null,t,e,i,n);break t}else if(s===wg){t.tag=14,t=Iy(null,t,e,i,n);break t}else if(s===us){t.tag=10,t.type=e,t=ky(null,t,n);break t}}throw t=Mm(e)||e,Error($(306,t,""))}}return t;case 0:return Ym(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=yr(i,t.pendingProps),Fy(e,t,i,s,n);case 3:t:{if(wh(t,t.stateNode.containerInfo),e===null)throw Error($(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,zm(e,t),ic(t,i,null,n);var r=t.memoizedState;if(i=r.cache,ma(t,en,i),i!==a.cache&&Pm(t,[en],n,!0),nc(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Hy(e,t,i,n);break t}else if(i!==s){s=Ci(Error($(424)),t),mc(s),t=Hy(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Fe=Di(e.firstChild),vn=t,oe=!0,xa=null,Ni=!0,n=TS(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if(dr(),i===s){t=Hs(e,t,n);break t}ln(e,t,i,n)}t=t.child}return t;case 26:return Qr(e,t),e===null?(n=gx(t.type,null,t.pendingProps,null))?t.memoizedState=n:oe||(t.stateNode=sb(t.type,t.pendingProps,ya.current,t)):t.memoizedState=gx(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Em(t),e===null&&oe&&(i=t.stateNode=pb(t.type,t.pendingProps,ya.current),vn=t,Ni=!0,s=Fe,Ia(t.type)?(Mg=s,Fe=Di(i.firstChild)):Fe=s),ln(e,t,t.pendingProps.children,n),Qr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&oe&&((s=i=Fe)&&(i=iR(i,t.type,t.pendingProps,Ni),i!==null?(t.stateNode=i,vn=t,Fe=Di(i.firstChild),Ni=!1,s=!0):s=!1),s||Na(t)),Em(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,vg(s,a)?i=null:r!==null&&vg(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=Zg(e,t,tw,null,null,n),Uo._currentValue=s),Qr(e,t),ln(e,t,i,n),t.child;case 6:return e===null&&oe&&((e=n=Fe)&&(n=sR(n,t.pendingProps,Ni),n!==null?(t.stateNode=n,vn=t,Fe=null,e=!0):e=!1),e||Na(t)),null;case 13:return pM(e,t,n);case 4:return wh(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=_r(t,null,i,n):ln(e,t,i,n),t.child;case 11:return Oy(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,Qr(e,t),ln(e,t,i,n),t.child;case 8:return ln(e,t,t.pendingProps.children,n),t.child;case 12:return ln(e,t,t.pendingProps.children,n),t.child;case 10:return ky(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,mr(t),s=Tn(s),i=i(s),t.flags|=1,ln(e,t,i,n),t.child;case 14:return Iy(e,t,t.type,t.pendingProps,n);case 15:return fM(e,t,t.type,t.pendingProps,n);case 19:return Qm(e,t,n);case 31:return cw(e,t,n);case 22:return dM(e,t,n,t.pendingProps);case 24:return mr(t),i=Tn(en),e===null?(s=Gg(),s===null&&(s=Oe,a=Vg(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},Xg(t),ma(t,en,s)):((e.lanes&n)!==0&&(zm(e,t),ic(t,null,null,n),nc()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),ma(t,en,i)):(i=a.cache,ma(t,en,i),i!==s.cache&&Pm(t,[en],n,!0))),ln(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:oe&&cf(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:Qr(e,t),ln(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error($(156,t.tag))}function Ds(e){e.flags|=4}function im(e,t,n,i,s){var a;if((a=(e.mode&32)!==0)&&(a=n===null?yx(t,i):yx(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(XM())e.flags|=8192;else throw hr=Ph,kg}else e.flags&=-16777217}function Xy(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!vb(t))if(XM())e.flags|=8192;else throw hr=Ph,kg}function $u(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Hx():536870912,e.lanes|=t,wo|=t)}function Gl(e,t){if(!oe)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function fw(e,t,n){var i=t.pendingProps;switch(Hg(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Is(en),bo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Jr(t)?Ds(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,jp())),ze(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(Ds(t),a!==null?(ze(t),Xy(t,a)):(ze(t),im(t,s,null,i,n))):a?a!==e.memoizedState?(Ds(t),ze(t),Xy(t,a)):(ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Ds(t),ze(t),im(t,s,e,i,n)),null;case 27:if(Rh(t),n=ya.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ds(t);else{if(!i){if(t.stateNode===null)throw Error($(166));return ze(t),t.subtreeFlags&=-33554433,null}e=ps.current,Jr(t)?_y(t,e):(e=pb(s,i,n),t.stateNode=e,Ds(t))}return ze(t),t.subtreeFlags&=-33554433,null;case 5:if(Rh(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ds(t);else{if(!i){if(t.stateNode===null)throw Error($(166));return ze(t),t.subtreeFlags&=-33554433,null}if(a=ps.current,Jr(t))_y(t,a);else{var r=Sc(ya.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[En]=t,a[ni]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(Rn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Ds(t)}}return ze(t),t.subtreeFlags&=-33554433,im(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Ds(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error($(166));if(e=ya.current,Jr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=vn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[En]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||nb(e.nodeValue,n)),e||Na(t,!0)}else e=Sc(e).createTextNode(i),e[En]=t,t.stateNode=e}return ze(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Jr(t),n!==null){if(e===null){if(!i)throw Error($(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(557));e[En]=t}else dr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),e=!1}else n=jp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(oi(t),t):(oi(t),null);if((t.flags&128)!==0)throw Error($(558))}return ze(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Jr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error($(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[En]=t}else dr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),s=!1}else s=jp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(oi(t),t):(oi(t),null)}return oi(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),$u(t,t.updateQueue),ze(t),null);case 4:return bo(),e===null&&g0(t.stateNode.containerInfo),t.flags|=67108864,ze(t),null;case 10:return Is(t.type),ze(t),null;case 19:if(qg(t),i=t.memoizedState,i===null)return ze(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)Gl(i,!1);else{if(Qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=zh(e),a!==null){for(t.flags|=128,Gl(i,!1),e=a.updateQueue,t.updateQueue=e,$u(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)_S(n,e),n=n.sibling;return _c(t,wn.current&1|2),oe&&Ls(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&ui()>Zh&&(t.flags|=128,s=!0,Gl(i,!1),t.lanes=4194304)}else{if(!s)if(e=zh(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,$u(t,e),Gl(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!oe)return ze(t),null}else 2*ui()-i.renderingStartTime>Zh&&n!==536870912&&(t.flags|=128,s=!0,Gl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ui(),e.sibling=null,a=wn.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||oe?_c(t,a):(n=a,He(Cn,t),He(wn,n),In===null&&(In=t)),oe&&Ls(t,i.treeForkCount),e}return ze(t),null;case 22:case 23:return oi(t),Wg(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),n=t.updateQueue,n!==null&&$u(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&An(ur),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Is(en),ze(t),null;case 25:return null;case 30:return t.flags|=33554432,ze(t),null}throw Error($(156,t.tag))}function dw(e,t){switch(Hg(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Is(en),bo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Rh(t),null;case 31:if(t.memoizedState!==null){if(oi(t),t.alternate===null)throw Error($(340));dr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(oi(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));dr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return qg(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return bo(),null;case 10:return Is(t.type),null;case 22:case 23:return oi(t),Wg(),e!==null&&An(ur),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Is(en),null;case 25:return null;default:return null}}function gM(e,t){switch(Hg(t),t.tag){case 3:Is(en),bo();break;case 26:case 27:case 5:Rh(t);break;case 4:bo();break;case 31:t.memoizedState!==null&&oi(t);break;case 13:oi(t);break;case 19:qg(t);break;case 10:Is(t.type);break;case 22:case 23:oi(t),Wg(),e!==null&&An(ur);break;case 24:Is(en)}}function Oc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){Ne(t,t.return,o)}}function La(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(h){Ne(s,l,h)}}}i=i.next}while(i!==a)}}catch(h){Ne(t,t.return,h)}}function _M(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{wS(t,n)}catch(i){Ne(e,e.return,i)}}}function vM(e,t,n){n.props=yr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Ne(e,t,i)}}function ls(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,a=Bs(e.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=lb(a)),i=s.ref;break;case 7:if(e.stateNode===null){var r=new mi(e);ei(e.child,!1,eR,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){Ne(e,t,o)}}function bn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){Ne(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){Ne(e,t,s)}else n.current=null}function kh(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)fb(e.stateNode,t[n])}function Wy(e){for(var t=e.return;t!==null&&(c0(t)&&fb(e.stateNode,t.stateNode),!l0(t));)t=t.return}function rc(e){for(var t=e.return;t!==null&&(c0(t)&&nR(e.stateNode,t.stateNode),!l0(t));)t=t.return}function l0(e){return e.tag===5||e.tag===3||e.tag===27}function c0(e){return e&&e.tag===7&&e.stateNode!==null}function jm(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){Ne(e,e.return,s)}}function sm(e,t,n){try{var i=e.stateNode;Bw(i,e.type,n,t),i[ni]=t}catch(s){Ne(e,e.return,s)}}function yM(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ia(e.type)||e.tag===4}function am(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||yM(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $m(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hs)),kh(e,i),ye=!0;else if(s!==4&&(s===27&&(kh(e,i),i=null,Ia(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for($m(e,t,n,i),e=e.sibling;e!==null;)$m(e,t,n,i),e=e.sibling}function Xh(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),kh(e,i),ye=!0;else if(s!==4&&(s===27&&(kh(e,i),i=null,Ia(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Xh(e,t,n,i),e=e.sibling;e!==null;)Xh(e,t,n,i),e=e.sibling}function xM(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Rn(t,i,n),t[En]=e,t[ni]=n}catch(a){Ne(e,e.return,a)}}var Wh=!1,li=null;function qy(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Wh=!0)}var cs=null;function Yy(){var e=cs;return cs=null,e}var jn=0;function Fo(e,t,n,i,s){return jn=0,SM(e.child,t,n,i,s)}function SM(e,t,n,i,s){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=yg(r);i.push(o),o.view&&(a=!0)}else a||yg(r).view&&(a=!0);Wh=!0,ab(r,jn===0?t:t+"_"+jn,n),jn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||SM(e.child,t,n,i,s)&&(a=!0));e=e.sibling}return a}function gs(e,t){for(;e!==null;)e.tag===5?rb(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||gs(e.child,t)),e=e.sibling}function _h(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(_h(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error($(544));var n=t.name;t=ks(t.default,t.share),t!=="none"&&(Fo(e,n,t,null,!1)||gs(e.child,!1))}e=e.sibling}}function tg(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=Bs(i,n),a=ks(i.default,n.paired?i.share:i.enter);a!=="none"?Fo(e,s,a,null,!1)?(_h(e),n.paired||t||Ro(e,i.onEnter)):gs(e.child,!1):_h(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)tg(e,t),e=e.sibling;else _h(e)}function eg(e){if(li!==null&&li.size!==0){var t=li;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var a=ks(n.default,n.share);if(a!=="none"&&(Fo(e,i,a,null,!1)?(a=e.stateNode,s.paired=a,a.paired=s,Ro(e,n.onShare)):gs(e.child,!1)),t.delete(i),t.size===0)break}}}eg(e)}e=e.sibling}}}function ng(e){if(e.tag===30){var t=e.memoizedProps,n=Bs(t,e.stateNode),i=li!==null?li.get(n):void 0,s=ks(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(Fo(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,li.delete(n),Ro(e,t.onShare)):Ro(e,t.onExit):gs(e.child,!1)),li!==null&&eg(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)ng(e),e=e.sibling;else li!==null&&eg(e)}function MM(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Bs(t,e.stateNode);t=ks(t.default,t.update),e.flags&=-5,t!=="none"&&Fo(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&MM(e);e=e.sibling}}function ig(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,gs(e.child,!1))}ig(e)}e=e.sibling}}function vh(e){if(e.tag===30)e.stateNode.paired=null,gs(e.child,!1),ig(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)vh(e),e=e.sibling;else ig(e)}function bM(e){for(e=e.child;e!==null;)e.tag===30?gs(e.child,!1):(e.subtreeFlags&33554432)!==0&&bM(e),e=e.sibling}function u0(e,t,n,i,s,a,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(a!==null&&jn<a.length){var c=a[jn],h=yg(l);(c.view||h.view)&&(o=!0);var p;if(p=(e.flags&4)===0)if(h.clip)p=!0;else{p=c.rect;var u=h.rect;p=p.y!==u.y||p.x!==u.x||p.height!==u.height||p.width!==u.width}p&&(e.flags|=4),h.abs?h=!c.abs:(c=c.rect,h=h.rect,h=c.height!==h.height||c.width!==h.width),h&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&ab(l,jn===0?n:n+"_"+jn,s),o&&(e.flags&4)!==0||(cs===null&&(cs=[]),cs.push(l,jn===0?i:i+"_"+jn,t.memoizedProps)),jn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:u0(e,t.child,n,i,s,a,r)&&(o=!0));t=t.sibling}return o}function EM(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=Bs(n,i),a=ks(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(kw)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;jn=0,s=u0(i,o,s,s,a,r,!1),(e.flags&4)!==0&&s&&(t||Ro(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&EM(e,t);e=e.sibling}}var mn=!1,Te=!1,as=!1,rm=!1,Zy=typeof WeakSet=="function"?WeakSet:Set,gn=null,rs=!1,Kl=!1,qh=!1,sg=!1;function pw(e,t,n){if(e=e.containerInfo,gg=Oo,e=cS(e),Pg(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,h=0,p=0,u=e,f=null;e:for(;;){for(var _;u!==i||a!==0&&u.nodeType!==3||(l=o+a),u!==r||s!==0&&u.nodeType!==3||(c=o+s),u.nodeType===3&&(o+=u.nodeValue.length),(_=u.firstChild)!==null;)f=u,u=_;for(;;){if(u===e)break e;if(f===i&&++h===a&&(l=o),f===r&&++p===s&&(c=o),(_=u.nextSibling)!==null)break;u=f,f=u.parentNode}u=_}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(_g={focusedElem:e,selectionRange:i},Oo=!1,n=(n&335544064)===n,gn=t,t=n?9270:1024;gn!==null;){if(e=gn,n&&(i=e.deletions,i!==null))for(a=0;a<i.length;a++)n&&ng(i[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&qy(e),th(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&ng(i),th(n);continue}else if(i!==null&&i.memoizedState!==null){n&&qy(e),th(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,gn=i):(n&&MM(e),th(n))}}li=null}function th(e){for(;gn!==null;){var t=gn,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=t.stateNode;try{var r=yr(t.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){Ne(t,t.return,o)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)xg(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":xg(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=Bs(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=ks(s.default,s.update),s!=="none"&&Fo(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error($(163))}if(i=t.sibling,i!==null){i.return=t.return,gn=i;break}gn=t.return}}function TM(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:os(e,n),i&4&&Oc(5,n);break;case 1:if(os(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){Ne(n,n.return,r)}else{var s=yr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Ne(n,n.return,r)}}i&64&&_M(n),i&512&&ls(n,n.return);break;case 3:if(os(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{wS(e,t)}catch(r){Ne(n,n.return,r)}}break;case 27:t===null&&i&4&&xM(n);case 26:case 5:os(e,n),t===null&&i&4&&jm(n),i&512&&ls(n,n.return);break;case 12:os(e,n);break;case 31:os(e,n),i&4&&CM(e,n);break;case 13:os(e,n),i&4&&NM(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Aw.bind(null,n),aR(e,n))));break;case 22:if(i=n.memoizedState!==null||mn,!i){var a=t!==null&&t.memoizedState!==null||Te;t=mn,s=Te,mn=i,(Te=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),ki(e,n,i)):os(e,n),mn=t,Te=s}break;case 30:os(e,n),i&512&&ls(n,n.return);break;case 7:i&512&&ls(n,n.return);default:os(e,n)}}function ag(e,t){for(e=e.child;e!==null;)AM(e,t),e=e.sibling}function AM(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,a=e.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){Ne(e,e.return,l)}rg(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,ye=!0}catch(l){Ne(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?ux(o,!0):ux(e.stateNode,!1)}catch(l){Ne(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&ag(e,t);break;default:ag(e,t)}}function rg(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:AM(n,i);break t;case 22:n.memoizedState===null&&rg(n,i);break t;default:rg(n,i)}}e=e.sibling}}function wM(e){var t=e.alternate;t!==null&&(e.alternate=null,wM(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&nf(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ke=null,Kn=!1;function Gi(e,t,n){for(n=n.child;n!==null;)RM(e,t,n),n=n.sibling}function RM(e,t,n){if(hi&&typeof hi.onCommitFiberUnmount=="function")try{hi.onCommitFiberUnmount(wc,n)}catch{}switch(n.tag){case 26:Te||bn(n,t),Gi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!Te&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Te||bn(n,t),rc(n);var i=ke,s=Kn;Ia(n.type)&&(ke=n.stateNode,Kn=!1),Gi(e,t,n),mb(n.stateNode,n.type,n.memoizedProps),ke=i,Kn=s;break;case 5:Te||bn(n,t),rc(n);case 6:if(n.tag===6&&rc(n),i=ke,s=Kn,ke=null,Gi(e,t,n),ke=i,Kn=s,ke!==null)if(Kn)try{(ke.nodeType===9?ke.body:ke.nodeName==="HTML"?ke.ownerDocument.body:ke).removeChild(n.stateNode),ye=!0}catch(a){Ne(n,t,a)}else try{ke.removeChild(n.stateNode),ye=!0}catch(a){Ne(n,t,a)}break;case 18:ke!==null&&(Kn?(e=ke,cx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Io(e)):cx(ke,n.stateNode));break;case 4:i=ke,s=Kn,ke=n.stateNode.containerInfo,Kn=!0,Gi(e,t,n),ke=i,Kn=s;break;case 0:case 11:case 14:case 15:La(2,n,t),Te||La(4,n,t),Gi(e,t,n);break;case 1:Te||(bn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&vM(n,t,i)),Gi(e,t,n);break;case 21:Gi(e,t,n);break;case 22:Te=(i=Te)||n.memoizedState!==null,Gi(e,t,n),Te=i;break;case 30:bn(n,t),Gi(e,t,n);break;case 7:Te||bn(n,t),Gi(e,t,n);break;default:Gi(e,t,n)}}function CM(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Io(e)}catch(n){Ne(t,t.return,n)}}}function NM(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Io(e)}catch(n){Ne(t,t.return,n)}}function mw(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Zy),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Zy),t;default:throw Error($(435,e.tag))}}function eh(e,t){var n=mw(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=ww.bind(null,e,i);i.then(s,s)}})}function Hn(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(Ia(l.type)){ke=l.stateNode,Kn=!1;break t}break;case 5:ke=l.stateNode,Kn=!1;break t;case 3:case 4:ke=l.stateNode.containerInfo,Kn=!0;break t}l=l.return}if(ke===null)throw Error($(160));RM(r,o,a),ke=null,Kn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)DM(t,e,n),t=t.sibling}var Xi=null;function DM(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}Hn(t,e,n),Vn(e),s&4&&(La(3,e,e.return),Oc(3,e),La(5,e,e.return));break;case 1:Hn(t,e,n),Vn(e),s&512&&(Te||i===null||bn(i,i.return)),s&64&&mn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=Xi,Hn(t,e,n),Vn(e),s&512&&(Te||i===null||bn(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(mn)e.stateNode=sb(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,s=a.ownerDocument||a;e:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[Nc]||i[En]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),Rn(i,t,n),i[En]=e,_n(i),t=i;break t;case"link":if(a=vx("link","href",s).get(t+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break e}}i=s.createElement(t),Rn(i,t,n),s.head.appendChild(i);break;case"meta":if(a=vx("meta","content",s).get(t+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break e}}i=s.createElement(t),Rn(i,t,n),s.head.appendChild(i);break;default:throw Error($(468,t))}i[En]=e,_n(i),t=i}e.stateNode=t}else mn||bg(a,e.type,e.stateNode);else e.stateNode=_x(a,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||Te||t.parentNode.removeChild(t)):s.count--,n===null?mn||bg(a,e.type,e.stateNode):_x(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&sm(e,e.memoizedProps,i.memoizedProps);break;case 27:Hn(t,e,n),Vn(e),s&512&&(Te||i===null||bn(i,i.return)),i!==null&&s&4&&sm(e,e.memoizedProps,i.memoizedProps);break;case 5:if(a=as,as=!1,Hn(t,e,n),as=a,Vn(e),s&512&&(Te||i===null||bn(i,i.return)),e.flags&32){t=e.stateNode;try{To(t,""),ye=!0}catch(h){Ne(e,e.return,h)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,sm(e,t,i!==null?i.memoizedProps:t)),s&1024&&(rm=!0);break;case 6:if(Hn(t,e,n),Vn(e),s&4){if(e.stateNode===null)throw Error($(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,ye=!0}catch(h){Ne(e,e.return,h)}}break;case 3:if(ye=!1,Mh=null,a=Xi,Xi=Mc(t.containerInfo),Hn(t,e,n),Xi=a,Vn(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{Io(t.containerInfo)}catch(h){Ne(e,e.return,h)}rm&&(rm=!1,LM(e)),ye=!1;break;case 4:s=as,as=mn,i=ty(),a=Xi,Xi=Mc(e.stateNode.containerInfo),Hn(t,e,n),Vn(e),Xi=a,ye&&Kl&&(qh=!0),ye=i,as=s;break;case 12:Hn(t,e,n),Vn(e);break;case 31:Hn(t,e,n),Vn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,eh(e,t)));break;case 13:Hn(t,e,n),Vn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(gf=ui()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,eh(e,t)));break;case 22:a=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=mn,l=Te,c=as;mn=o||a,as=c||a,Te=l||r,Hn(t,e,n),Te=l,as=c,mn=o,Vn(e),s&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||i===null||r||mn||Te||(t=r||Te,n=mn,i=Te,mn=a||mn,Te=t,ca(e,2),mn=n,Te=i),!a&&as||ag(e,a)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,eh(e,n))));break;case 19:Hn(t,e,n),Vn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,eh(e,t)));break;case 30:s&512&&(Te||i===null||bn(i,i.return)),s=ty(),a=Kl,r=(n&335544064)===n,o=e.memoizedProps,Kl=r&&ks(o.default,o.update)!=="none",Hn(t,e,n),Vn(e),r&&i!==null&&ye&&(e.flags|=4),Kl=a,ye=s;break;case 21:break;case 7:s&512&&(Te||i===null||bn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:Hn(t,e,n),Vn(e)}}function Vn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(yM(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if(c0(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(l0(s))break;s=s.return}var r=i;if(n==null)throw Error($(160));switch(n.tag){case 27:var o=n.stateNode,l=am(e);Xh(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(To(c,""),n.flags&=-33);var h=am(e);Xh(e,h,c,r);break;case 3:case 4:var p=n.stateNode.containerInfo,u=am(e);$m(e,u,p,r);break;default:throw Error($(161))}}catch(f){Ne(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function LM(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;LM(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Oo=!0,t.reset(),Oo=!1),e=e.sibling}}function Kr(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)UM(t,e),t=t.sibling;else EM(t,!1)}function UM(e,t){var n=e.alternate;if(n===null)tg(e,!1);else switch(e.tag){case 3:if(sg=rs=!1,Yy(),Kr(t,e),!rs&&!qh){if(e=cs,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];rb(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),sg=!0}cs=null;break;case 5:Kr(t,e);break;case 4:i=rs,rs=!1,Kr(t,e),rs&&(qh=!0),rs=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?tg(e,!1):Kr(t,e));break;case 30:i=rs,s=Yy(),rs=!1,Kr(t,e),rs&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=Bs(a,r),r=Bs(n.memoizedProps,r);var o=ks(a.default,a.update);o==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,jn=0,t=u0(e,n,t,r,o,a,!0),jn!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Ro(e,e.memoizedProps.onUpdate),cs=s):s!==null&&(s.push.apply(s,cs),cs=s),rs=(e.flags&32)!==0?!0:i;break;default:Kr(t,e)}}function os(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)TM(e,t.alternate,t),t=t.sibling}function ca(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:La(4,n,n.return),ca(n,i);break;case 1:bn(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&vM(n,n.return,s),ca(n,i);break;case 27:(i&2)!==0&&mb(n.stateNode,n.type,n.memoizedProps);case 5:bn(n,n.return),n.tag!==5&&n.tag!==27||rc(n),ca(n,i);break;case 6:rc(n);break;case 26:bn(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||Te||s.parentNode.removeChild(s),ca(n,i);break;case 22:n.memoizedState===null&&ca(n,i);break;case 30:bn(n,n.return),ca(n,i);break;case 7:bn(n,n.return);default:ca(n,i)}e=e.sibling}}function ki(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:ki(s,a,n),Oc(4,a);break;case 1:if(ki(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(h){Ne(i,i.return,h)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)AS(c[s],l)}catch(h){Ne(i,i.return,h)}}o&&r&64&&_M(a),ls(a,a.return);break;case 27:(n&2)!==0&&xM(a);case 5:a.tag!==5&&a.tag!==27||Wy(a),ki(s,a,n),o&&i===null&&r&4&&jm(a),ls(a,a.return);break;case 6:Wy(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||mn||bg(Mc(l.ownerDocument),a.type,l),ki(s,a,n),o&&i===null&&r&4&&jm(a),ls(a,a.return);break;case 12:ki(s,a,n);break;case 31:ki(s,a,n),o&&r&4&&CM(s,a);break;case 13:ki(s,a,n),o&&r&4&&NM(s,a);break;case 22:a.memoizedState===null&&ki(s,a,n),ls(a,a.return);break;case 30:ki(s,a,n),ls(a,a.return);break;case 7:ls(a,a.return);default:ki(s,a,n)}t=t.sibling}}function h0(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Lc(n))}function f0(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Lc(e))}function Ei(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)OM(e,t,n,i),t=t.sibling;else s&&bM(t)}function OM(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&vh(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Ei(e,t,n,i),a&2048&&Oc(9,t);break;case 1:Ei(e,t,n,i);break;case 3:Ei(e,t,n,i),s&&sg&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Lc(a)));break;case 12:if(a&2048){Ei(e,t,n,i),a=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){Ne(t,t.return,c)}}else Ei(e,t,n,i);break;case 31:Ei(e,t,n,i);break;case 13:Ei(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&vh(o),r._visibility&2?Ei(e,t,n,i):oc(e,t)):(s&&o!==null&&o.memoizedState!==null&&vh(t),r._visibility&2?Ei(e,t,n,i):(r._visibility|=2,jr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),a&2048&&h0(o,t);break;case 24:Ei(e,t,n,i),a&2048&&f0(t.alternate,t);break;case 30:s&&(a=t.alternate,a!==null&&(gs(a.child,!0),gs(t.child,!0))),Ei(e,t,n,i);break;default:Ei(e,t,n,i)}}function jr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:jr(a,r,o,l,s),Oc(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?jr(a,r,o,l,s):oc(a,r):(h._visibility|=2,jr(a,r,o,l,s)),s&&c&2048&&h0(r.alternate,r);break;case 24:jr(a,r,o,l,s),s&&c&2048&&f0(r.alternate,r);break;default:jr(a,r,o,l,s)}t=t.sibling}}function oc(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:oc(n,i),s&2048&&h0(i.alternate,i);break;case 24:oc(n,i),s&2048&&f0(i.alternate,i);break;default:oc(n,i)}t=t.sibling}}var ar=8192;function nr(e,t,n){if(e.subtreeFlags&ar)for(e=e.child;e!==null;)IM(e,t,n),e=e.sibling}function IM(e,t,n){switch(e.tag){case 26:nr(e,t,n),e.flags&ar&&(e.memoizedState!==null?yR(n,Xi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&xx(n,e)));break;case 5:nr(e,t,n),e.flags&ar&&(e=e.stateNode,(t&335544128)===t&&xx(n,e));break;case 3:case 4:var i=Xi;Xi=Mc(e.stateNode.containerInfo),nr(e,t,n),Xi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ar,ar=16777216,nr(e,t,n),ar=i):nr(e,t,n));break;case 30:if((e.flags&ar)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,li===null&&(li=new Map),li.set(i,s)}nr(e,t,n);break;default:nr(e,t,n)}}function PM(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function kl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];gn=i,zM(i,e)}PM(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)BM(e),e=e.sibling}function BM(e){switch(e.tag){case 0:case 11:case 15:kl(e),e.flags&2048&&La(9,e,e.return);break;case 3:kl(e);break;case 12:kl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,yh(e)):kl(e);break;default:kl(e)}}function yh(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];gn=i,zM(i,e)}PM(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:La(8,t,t.return),yh(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,yh(t));break;default:yh(t)}e=e.sibling}}function zM(e,t){for(;gn!==null;){var n=gn;switch(n.tag){case 0:case 11:case 15:La(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Lc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,gn=i;else t:for(n=e;gn!==null;){i=gn;var s=i.sibling,a=i.return;if(wM(i),i===n){gn=null;break t}if(s!==null){s.return=a,gn=s;break t}gn=a}}}var gw={getCacheForType:function(e){var t=Tn(en),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Tn(en).controller.signal}},_w=typeof WeakMap=="function"?WeakMap:Map,Se=0,Oe=null,he=null,fe=0,Re=0,ai=null,ga=!1,Ho=!1,d0=!1,Vs=0,Qe=0,Ua=0,fr=0,Yh=0,ci=0,wo=0,lc=null,Qn=null,og=!1,gf=0,FM=0,Zh=1/0,Jh=null,Ta=null,Ze=0,qi=null,xr=null,ms=0,lg=0,cg=null,HM=null,xo=null,So=null,Mo=null,cc=0,xh=null;function di(){return(Se&2)!==0&&fe!==0?fe&-fe:qt.T!==null?m0():Xx()}function VM(){if(ci===0)if((fe&536870912)===0||oe){var e=Gu;Gu<<=1,(Gu&3932160)===0&&(Gu=262144),ci=e}else ci=536870912;return e=Cn.current,e!==null&&(e.flags|=32),ci}function Ro(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=lb(Bs(e.memoizedProps,n))),So===null&&(So=[]),So.push(t.bind(null,i))}}function ti(e,t,n){(e===Oe&&(Re===2||Re===9)||e.cancelPendingCommit!==null)&&(Co(e,0),_a(e,fe,ci,!1)),Cc(e,n),((Se&2)===0||e!==Oe)&&(e===Oe&&((Se&2)===0&&(fr|=n),Qe===4&&_a(e,fe,ci,!1)),vs(e))}function GM(e,t,n){if((Se&6)!==0)throw Error($(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Rc(e,t),s=i?xw(e,t):om(e,t,!0),a=i;do{if(s===0){Ho&&!i&&_a(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!vw(n)){s=om(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=lc;var l=o.current.memoizedState.isDehydrated;if(l&&(Co(o,r).flags|=256),r=om(o,r,!1),r!==2&&r!==6){if(d0&&!l){o.errorRecoveryDisabledLanes|=a,fr|=a,s=4;break t}a=Qn,Qn=s,a!==null&&(Qn===null?Qn=a:Qn.push.apply(Qn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){Co(e,0),_a(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error($(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:_a(i,t,ci,!ga);break t;case 2:Qn=null;break;case 3:case 5:break;default:throw Error($(329))}if((t&62914560)===t&&(s=gf+300-ui(),10<s)){if(_a(i,t,ci,!ga),ef(i,0,!0)!==0)break t;ms=t,i.timeoutHandle=_0(Jy.bind(null,i,n,Qn,Jh,og,t,ci,fr,wo,ga,a,"Throttled",-0,0),s);break t}Jy(i,n,Qn,Jh,og,t,ci,fr,wo,ga,a,null,-0,0)}}break}while(!0);vs(e)}function Jy(e,t,n,i,s,a,r,o,l,c,h,p,u,f){e.timeoutHandle=-1;var _=t.subtreeFlags,M=(a&335544064)===a;if(p=null,(M||_&8192||(_&16785408)===16785408)&&(p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:hs},li=null,IM(t,a,p),M&&(_=p,M=e.containerInfo,M=(M.nodeType===9?M:M.ownerDocument).__reactViewTransition,M!=null&&(_.count++,_.waitingForViewTransition=!0,_=bc.bind(_),M.finished.then(_,_))),_=(a&62914560)===a?gf-ui():(a&4194048)===a?FM-ui():0,_=xR(p,_),_!==null)){ms=a,e.cancelPendingCommit=_(Qy.bind(null,e,t,a,n,i,s,r,o,l,c,h,p,null,u,f)),_a(e,a,r,!c);return}Qy(e,t,a,n,i,s,r,o,l,c,h,p)}function vw(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!pi(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _a(e,t,n,i){t=Fx(e,t),t&=~Yh,t&=~fr,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-fi(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&Vx(e,n,t)}function _f(){return(Se&6)===0?(Ic(0,!1),!1):!0}function p0(){if(he!==null){if(Re===0)var e=he.return;else e=he,Us=Tr=null,Qg(e),_o=null,gc=0,e=he;for(;e!==null;)gM(e.alternate,e),e=e.return;he=null}}function Co(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,Hw(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ms=0,p0(),Oe=e,he=n=Os(e.current,null),fe=t,Re=0,ai=null,ga=!1,Ho=Rc(e,t),d0=!1,wo=ci=Yh=fr=Ua=Qe=0,Qn=lc=null,og=!1,Vs=Fx(e,t),of(),n}function kM(e,t){ne=null,qt.H=Vh,t===zo||t===uf?(t=My(),Re=3):t===kg?(t=My(),Re=4):Re=t===a0?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ai=t,he===null&&(Qe=1,Gh(e,Ci(t,e.current)))}function XM(){var e=Cn.current;return e===null?!0:(fe&4194048)===fe?In===null:(fe&62914560)===fe||(fe&536870912)!==0?e===In:!1}function WM(){var e=qt.H;return qt.H=Vh,e===null?Vh:e}function qM(){var e=qt.A;return qt.A=gw,e}function Kh(){Qe=4,ga||(fe&4194048)!==fe&&Cn.current!==null||(Ho=!0),(Ua&134217727)===0&&(fr&134217727)===0||Oe===null||_a(Oe,fe,ci,!1)}function om(e,t,n){var i=Se;Se|=2;var s=WM(),a=qM();(Oe!==e||fe!==t)&&(Jh=null,Co(e,t)),t=!1;var r=Qe;t:do try{if(Re!==0&&he!==null){var o=he,l=ai;switch(Re){case 8:p0(),r=6;break t;case 3:case 2:case 9:case 6:Cn.current===null&&(t=!0);var c=Re;if(Re=0,ai=null,ho(e,o,l,c),n&&Ho){r=0;break t}break;default:c=Re,Re=0,ai=null,ho(e,o,l,c)}}yw(),r=Qe;break}catch(h){kM(e,h)}while(!0);return t&&e.shellSuspendCounter++,Us=Tr=null,Se=i,qt.H=s,qt.A=a,he===null&&(Oe=null,fe=0,of()),r}function yw(){for(;he!==null;)YM(he)}function xw(e,t){var n=Se;Se|=2;var i=WM(),s=qM();Oe!==e||fe!==t?(Jh=null,Zh=ui()+500,Co(e,t)):Ho=Rc(e,t);t:do try{if(Re!==0&&he!==null){t=he;var a=ai;e:switch(Re){case 1:Re=0,ai=null,ho(e,t,a,1);break;case 2:case 9:if(Sy(a)){Re=0,ai=null,Ky(t);break}t=function(){Re!==2&&Re!==9||Oe!==e||(Re=7),vs(e)},a.then(t,t);break t;case 3:Re=7;break t;case 4:Re=5;break t;case 7:Sy(a)?(Re=0,ai=null,Ky(t)):(Re=0,ai=null,ho(e,t,a,7));break;case 5:var r=null;switch(he.tag){case 26:r=he.memoizedState;case 5:case 27:var o=he;if(r?vb(r):o.stateNode.complete){Re=0,ai=null;var l=o.sibling;if(l!==null)he=l;else{var c=o.return;c!==null?(he=c,vf(c)):he=null}break e}}Re=0,ai=null,ho(e,t,a,5);break;case 6:Re=0,ai=null,ho(e,t,a,6);break;case 8:p0(),Qe=6;break t;default:throw Error($(462))}}Sw();break}catch(h){kM(e,h)}while(!0);return Us=Tr=null,qt.H=i,qt.A=s,Se=n,he!==null?0:(Oe=null,fe=0,of(),Qe)}function Sw(){for(;he!==null&&!zT();)YM(he)}function YM(e){var t=mM(e.alternate,e,Vs);e.memoizedProps=e.pendingProps,t===null?vf(e):he=t}function Ky(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=zy(n,t,t.pendingProps,t.type,void 0,fe);break;case 11:t=zy(n,t,t.pendingProps,t.type.render,t.ref,fe);break;case 5:Qg(t);var i=t;i===vn&&(oe?(Oh(i),i.tag===5&&i.stateNode!=null&&(Fe=i.stateNode)):(Oh(i),oe=!0));default:gM(n,t),t=he=_S(t,Vs),t=mM(n,t,Vs)}e.memoizedProps=e.pendingProps,t===null?vf(e):he=t}function ho(e,t,n,i){Us=Tr=null,Qg(t),_o=null,gc=0;var s=t.return;try{if(lw(e,s,t,n,fe)){Qe=1,Gh(e,Ci(n,e.current)),he=null;return}}catch(a){if(s!==null)throw he=s,a;Qe=1,Gh(e,Ci(n,e.current)),he=null;return}t.flags&32768?(oe||i===1?e=!0:Ho||(fe&536870912)!==0?e=!1:(ga=e=!0,(i===2||i===9||i===3||i===6)&&(i=Cn.current,i!==null&&i.tag===13&&(i.flags|=16384))),ZM(t,e)):vf(t)}function vf(e){var t=e;do{if((t.flags&32768)!==0){ZM(t,ga);return}e=t.return;var n=fw(t.alternate,t,Vs);if(n!==null){he=n;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);Qe===0&&(Qe=5)}function ZM(e,t){do{var n=dw(e.alternate,e);if(n!==null){n.flags&=32767,he=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){he=e;return}he=e=n}while(e!==null);Qe=6,he=null}function Qy(e,t,n,i,s,a,r,o,l,c,h,p){e.cancelPendingCommit=null;do yf();while(Ze!==0);if((Se&6)!==0)throw Error($(327));if(t!==null){if(t===e.current)throw Error($(177));e===Oe&&(he=Oe=null,fe=0),xr=t,qi=e,ms=n,cg=s,HM=i,Mw(e,t,n,r,o,l,p)}}function Mw(e,t,n,i,s,a,r){var o=t.lanes|t.childLanes;if(lg=o,o|=Bg,ZT(e,n,o,i,s,a),So=null,(n&335544064)===n?(Mo=KA(e),i=10262):(Mo=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,Rw(Ch,function(){return dg(),null})):(e.callbackNode=null,e.callbackPriority=0),Wh=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=qt.T,qt.T=null,s=Me.p,Me.p=2,a=Se,Se|=4;try{pw(e,t,n)}finally{Se=a,Me.p=s,qt.T=i}}Ze=1,Wh?xo=qw(r,e.containerInfo,Mo,ug,hg,Ew,fg,dg,bw,null,null):(ug(),hg(),fg())}function bw(e){if(Ze!==0){var t=qi.onRecoverableError;t(e,{componentStack:null})}}function Ew(){Ze===3&&(Ze=0,UM(xr,qi),Ze=4)}function ug(){if(Ze===1){Ze=0;var e=qi,t=xr,n=ms,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=qt.T,qt.T=null;var s=Me.p;Me.p=2;var a=Se;Se|=4;try{Kl=qh=!1,DM(t,e,n),n=_g;var r=cS(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&lS(o.ownerDocument.documentElement,o)){if(l!==null&&Pg(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var f=u.getSelection(),_=o.textContent.length,M=Math.min(l.start,_),g=l.end===void 0?M:Math.min(l.end,_);!f.extend&&M>g&&(r=g,g=M,M=r);var d=dy(o,M),m=dy(o,g);if(d&&m&&(f.rangeCount!==1||f.anchorNode!==d.node||f.anchorOffset!==d.offset||f.focusNode!==m.node||f.focusOffset!==m.offset)){var x=p.createRange();x.setStart(d.node,d.offset),f.removeAllRanges(),M>g?(f.addRange(x),f.extend(m.node,m.offset)):(x.setEnd(m.node,m.offset),f.addRange(x))}}}}for(p=[],f=o;f=f.parentNode;)f.nodeType===1&&p.push({element:f,left:f.scrollLeft,top:f.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var y=p[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}Oo=!!gg,_g=gg=null}finally{Se=a,Me.p=s,qt.T=i}}e.current=t,Ze=2}}function hg(){if(Ze===2){Ze=0;var e=qi,t=xr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=qt.T,qt.T=null;var i=Me.p;Me.p=2;var s=Se;Se|=4;try{TM(e,t.alternate,t)}finally{Se=s,Me.p=i,qt.T=n}}Ze=3}}function fg(){if(Ze===4||Ze===3){Ze=0;var e=xo;xo=null,FT();var t=qi,n=xr,i=ms,s=HM,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?Ze=5:(Ze=0,xr=qi=null,JM(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(Ta=null),Ng(i),n=n.stateNode,hi&&typeof hi.onCommitFiberRoot=="function")try{hi.onCommitFiberRoot(wc,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=qt.T,a=Me.p,Me.p=2,qt.T=null;try{for(var r=t.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{qt.T=n,Me.p=a}}if(s=So,r=Mo,Mo=null,s!==null&&(So=null,r===null&&(r=[]),e!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&e.finished.finally(n);(ms&3)!==0&&yf(),vs(t),a=t.pendingLanes,(i&261930)!==0&&(a&42)!==0?t===xh?cc++:(cc=0,xh=t):(cc=0,xh=null),Ic(0,!1)}}function JM(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Lc(t)))}function yf(){return xo!==null&&(xo.skipTransition(),xo=null),ug(),hg(),fg(),dg()}function dg(){if(Ze!==5)return!1;var e=qi,t=lg;lg=0;var n=Ng(ms),i=qt.T,s=Me.p;try{Me.p=32>n?32:n,qt.T=null,n=cg,cg=null;var a=qi,r=ms;if(Ze=0,xr=qi=null,ms=0,(Se&6)!==0)throw Error($(331));var o=Se;if(Se|=4,BM(a.current),OM(a,a.current,r,n),Se=o,Ic(0,!1),hi&&typeof hi.onPostCommitFiberRoot=="function")try{hi.onPostCommitFiberRoot(wc,a)}catch{}return!0}finally{Me.p=s,qt.T=i,JM(e,t)}}function jy(e,t,n){t=Ci(n,t),t=qm(e.stateNode,t,2),e=Ma(e,t,2),e!==null&&(Cc(e,2),vs(e))}function Ne(e,t,n){if(e.tag===3)jy(e,e,n);else for(;t!==null;){if(t.tag===3){jy(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ta===null||!Ta.has(i))){e=Ci(n,e),n=uM(2),i=Ma(t,n,2),i!==null&&(hM(n,i,t,e),Cc(i,2),vs(i));break}}t=t.return}}function lm(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new _w;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(d0=!0,s.add(n),e=Tw.bind(null,e,t,n),t.then(e,e))}function Tw(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Oe===e&&(fe&n)===n&&((Qe===4||Qe===3&&(fe&62914560)===fe&&300>ui()-gf)&&(Se&2)===0?Co(e,0):Yh|=n,wo===fe&&(wo=0)),vs(e)}function KM(e,t){t===0&&(t=Hx()),e=Er(e,t),e!==null&&(Cc(e,t),vs(e))}function Aw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),KM(e,n)}function ww(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error($(314))}i!==null&&i.delete(t),KM(e,n)}function Rw(e,t){return Rg(e,t)}var No=null,$r=null,pg=!1,Qh=!1,cm=!1,va=0;function vs(e){e!==$r&&e.next===null&&($r===null?No=$r=e:$r=$r.next=e),Qh=!0,pg||(pg=!0,Nw())}function Ic(e,t){if(!cm&&Qh){cm=!0;do for(var n=!1,i=No;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-fi(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,$y(i,a))}else a=fe,a=ef(i,i===Oe?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||Rc(i,a)||(n=!0,$y(i,a));i=i.next}while(n);cm=!1}}function Cw(){QM()}function QM(){Qh=pg=!1;var e=0;va!==0&&Fw()&&(e=va);for(var t=ui(),n=null,i=No;i!==null;){var s=i.next,a=jM(i,t);a===0?(i.next=null,n===null?No=s:n.next=s,s===null&&($r=n)):(n=i,(e!==0||(a&3)!==0)&&(Qh=!0)),i=s}Ze!==0&&Ze!==5||Ic(e,!1),va!==0&&(va=0)}function jM(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-fi(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=YT(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=Oe,n=fe,n=ef(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Re===2||Re===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Vp(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Rc(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Vp(i),Ng(n)){case 2:case 8:n=Bx;break;case 32:n=Ch;break;case 268435456:n=zx;break;default:n=Ch}return i=$M.bind(null,e),n=Rg(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Vp(i),e.callbackPriority=2,e.callbackNode=null,2}function $M(e,t){if(Ze!==0&&Ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(yf()&&e.callbackNode!==n)return null;var i=fe;return i=ef(e,e===Oe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(GM(e,i,t),jM(e,ui()),e.callbackNode!=null&&e.callbackNode===n?$M.bind(null,e):null)}function $y(e,t){if(yf())return null;GM(e,t,!0)}function Nw(){Vw(function(){(Se&6)!==0?Rg(Px,Cw):QM()})}function m0(){if(va===0){var e=gr;e===0&&(e=Vu,Vu<<=1,(Vu&261888)===0&&(Vu=256)),va=e}return va}function tx(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:lh(e)}function Dw(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=tx((s[ni]||null).action),r=i.submitter;r&&(t=(t=r[ni]||null)?tx(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new sf("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(va!==0){var l=new FormData(s,r);Xm(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),Xm(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(nh=0;nh<Um.length;nh++)ih=Um[nh],ex=ih.toLowerCase(),nx=ih[0].toUpperCase()+ih.slice(1),Yi(ex,"on"+nx);var ih,ex,nx,nh;Yi(hS,"onAnimationEnd");Yi(fS,"onAnimationIteration");Yi(dS,"onAnimationStart");Yi("dblclick","onDoubleClick");Yi("focusin","onFocus");Yi("focusout","onBlur");Yi(GA,"onTransitionRun");Yi(kA,"onTransitionStart");Yi(XA,"onTransitionCancel");Yi(pS,"onTransitionEnd");Eo("onMouseEnter",["mouseout","mouseover"]);Eo("onMouseLeave",["mouseout","mouseover"]);Eo("onPointerEnter",["pointerout","pointerover"]);Eo("onPointerLeave",["pointerout","pointerover"]);Mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yc));function tb(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){Dh(h)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){Dh(h)}s.currentTarget=null,a=l}}}}function ue(e,t){var n=t[Kv];n===void 0&&(n=t[Kv]=new Set);var i=e+"__bubble";n.has(i)||(eb(t,e,2,!1),n.add(i))}function um(e,t,n){var i=0;t&&(i|=4),eb(n,e,i,t)}var sh="_reactListening"+Math.random().toString(36).slice(2);function g0(e){if(!e[sh]){e[sh]=!0,qx.forEach(function(n){n!=="selectionchange"&&(Lw.has(n)||um(n,!1,e),um(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[sh]||(t[sh]=!0,um("selectionchange",!1,t))}}function eb(e,t,n,i){switch(Tb(t)){case 2:var s=ER;break;case 8:s=TR;break;default:s=b0}n=s.bind(null,t,n,e),s=void 0,!Cm||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function hm(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=rr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}tS(function(){var c=a,h=Lg(n),p=[];t:{var u=mS.get(e);if(u!==void 0){var f=sf,_=e;switch(e){case"keypress":if(uh(n)===0)break t;case"keydown":case"keyup":f=vA;break;case"focusin":_="focus",f=Yp;break;case"focusout":_="blur",f=Yp;break;case"beforeblur":case"afterblur":f=Yp;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=sy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=rA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=bA;break;case hS:case fS:case dS:f=cA;break;case pS:f=TA;break;case"scroll":case"scrollend":f=sA;break;case"wheel":f=wA;break;case"copy":case"cut":case"paste":f=hA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=ry;break;case"submit":f=SA;break;case"toggle":case"beforetoggle":f=CA}var M=(t&4)!==0,g=!M&&(e==="scroll"||e==="scrollend"),d=M?u!==null?u+"Capture":null:u;M=[];for(var m=c,x;m!==null;){var y=m;if(x=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||x===null||d===null||(y=hc(m,d),y!=null&&M.push(xc(m,y,x))),g)break;m=m.return}0<M.length&&(u=new f(u,_,null,n,h),p.push({event:u,listeners:M}))}}if((t&7)===0){t:{if(f=e==="mouseover"||e==="pointerover",u=e==="mouseout"||e==="pointerout",f&&n!==Rm&&(_=n.relatedTarget||n.fromElement)&&(rr(_)||_[Po]))break t;(u||f)&&(_=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,u?(f=n.relatedTarget||n.toElement,u=c,f=f?rr(f):null,f!==null&&(g=Ac(f),M=f.tag,f!==g||M!==5&&M!==27&&M!==6)&&(f=null)):(u=null,f=c),u!==f&&(M=sy,y="onMouseLeave",d="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(M=ry,y="onPointerLeave",d="onPointerEnter",m="pointer"),g=u==null?_:Zl(u),x=f==null?_:Zl(f),_=new M(y,m+"leave",u,n,h),_.target=g,_.relatedTarget=x,y=null,rr(h)===c&&(M=new M(d,m+"enter",f,n,h),M.target=x,M.relatedTarget=g,y=M),g=y,M=u&&f?gm(u,f,Uw):null,u!==null&&ix(p,_,u,M,!1),f!==null&&g!==null&&ix(p,g,f,M,!0)))}t:{if(u=c?Zl(c):window,f=u.nodeName&&u.nodeName.toLowerCase(),f==="select"||f==="input"&&u.type==="file")var T=uy;else if(cy(u))if(rS)T=FA;else{T=BA;var w=PA}else f=u.nodeName,!f||f.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&Dg(c.elementType)&&(T=uy):T=zA;if(T&&(T=T(e,c))){aS(p,T,n,h);break t}w&&w(e,u,c)}switch(w=c?Zl(c):window,e){case"focusin":(cy(w)||w.contentEditable==="true")&&(ao=w,Dm=c,$l=null);break;case"focusout":$l=Dm=ao=null;break;case"mousedown":Lm=!0;break;case"contextmenu":case"mouseup":case"dragend":Lm=!1,py(p,n,h);break;case"selectionchange":if(VA)break;case"keydown":case"keyup":py(p,n,h)}var v;if(Ig)t:{switch(e){case"compositionstart":var E="onCompositionStart";break t;case"compositionend":E="onCompositionEnd";break t;case"compositionupdate":E="onCompositionUpdate";break t}E=void 0}else so?iS(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(nS&&n.locale!=="ko"&&(so||E!=="onCompositionStart"?E==="onCompositionEnd"&&so&&(v=eS()):(pa=h,Ug="value"in pa?pa.value:pa.textContent,so=!0)),w=jh(c,E),0<w.length&&(E=new ay(E,e,null,n,h),p.push({event:E,listeners:w}),v?E.data=v:(v=sS(n),v!==null&&(E.data=v)))),(v=DA?LA(e,n):UA(e,n))&&(E=jh(c,"onBeforeInput"),0<E.length&&(w=new ay("onBeforeInput","beforeinput",null,n,h),p.push({event:w,listeners:E}),w.data=v)),Dw(p,e,c,n,h)}tb(p,t)})}function xc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function jh(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=hc(e,n),s!=null&&i.unshift(xc(e,s,a)),s=hc(e,t),s!=null&&i.push(xc(e,s,a))),e.tag===3)return i;e=e.return}return[]}function Uw(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ix(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=hc(n,a),c!=null&&r.unshift(xc(n,c,l))):s||(c=hc(n,a),c!=null&&r.push(xc(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var Ow=/\r\n?/g,Iw=/\u0000|\uFFFD/g;function sx(e){return(typeof e=="string"?e:""+e).replace(Ow,`
`).replace(Iw,"")}function nb(e,t){return t=sx(t),sx(e)===t}function Ce(e,t,n,i,s,a){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||To(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&To(e,""+i);else return;break;case"className":Xu(e,"class",i);break;case"tabIndex":Xu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Xu(e,n,i);break;case"style":$x(e,i,a);return;case"data":if(t!=="object"){Xu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=lh(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&Ce(e,t,"name",s.name,s,null),Ce(e,t,"formEncType",s.formEncType,s,null),Ce(e,t,"formMethod",s.formMethod,s,null),Ce(e,t,"formTarget",s.formTarget,s,null)):(Ce(e,t,"encType",s.encType,s,null),Ce(e,t,"method",s.method,s,null),Ce(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=lh(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=hs);return;case"onScroll":i!=null&&ue("scroll",e);return;case"onScrollEnd":i!=null&&ue("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error($(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error($(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=lh(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":ue("beforetoggle",e),ue("toggle",e),oh(e,"popover",i);break;case"xlinkActuate":Ns(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ns(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ns(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ns(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ns(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ns(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ns(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ns(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ns(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":oh(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=nA.get(n)||n,oh(e,n,i);else return}ye=!0}function mg(e,t,n,i,s,a){switch(n){case"style":$x(e,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error($(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error($(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")To(e,i);else if(typeof i=="number"||typeof i=="bigint")To(e,""+i);else return;break;case"onScroll":i!=null&&ue("scroll",e);return;case"onScrollEnd":i!=null&&ue("scrollend",e);return;case"onClick":i!=null&&(e.onclick=hs);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Yx.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),t=e[ni]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,s);break t}ye=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):oh(e,n,i)}return}ye=!0}function Rn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ue("error",e),ue("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error($(137,t));default:Ce(e,t,a,r,n,null)}}s&&Ce(e,t,"srcSet",n.srcSet,n,null),i&&Ce(e,t,"src",n.src,n,null);return;case"input":ue("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":s=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":a=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error($(137,t));break;default:Ce(e,t,i,h,n,null)}}Kx(e,a,o,l,c,r,s,!1);return;case"select":ue("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:Ce(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?po(e,!!i,t,!1):n!=null&&po(e,!!i,n,!0);return;case"textarea":ue("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error($(91));break;default:Ce(e,t,r,o,n,null)}jx(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Ce(e,t,l,i,n,null));return;case"dialog":ue("beforetoggle",e),ue("toggle",e),ue("cancel",e),ue("close",e);break;case"iframe":case"object":ue("load",e);break;case"video":case"audio":for(i=0;i<yc.length;i++)ue(yc[i],e);break;case"image":ue("error",e),ue("load",e);break;case"details":ue("toggle",e);break;case"embed":case"source":case"link":ue("error",e),ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error($(137,t));default:Ce(e,t,c,i,n,null)}return;default:if(Dg(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&mg(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&Ce(e,t,o,i,n,null))}var Pw={};function Bw(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,h=null;for(f in n){var p=n[f];if(n.hasOwnProperty(f)&&p!=null)switch(f){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(f)||Ce(e,t,f,null,i,p)}}for(var u in i){var f=i[u];if(p=n[u],i.hasOwnProperty(u)&&(f!=null||p!=null))switch(u){case"type":f!==p&&(ye=!0),a=f;break;case"name":f!==p&&(ye=!0),s=f;break;case"checked":f!==p&&(ye=!0),c=f;break;case"defaultChecked":f!==p&&(ye=!0),h=f;break;case"value":f!==p&&(ye=!0),r=f;break;case"defaultValue":f!==p&&(ye=!0),o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error($(137,t));break;default:f!==p&&Ce(e,t,u,f,i,p)}}wm(e,r,o,l,c,h,a,s);return;case"select":f=r=o=u=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":f=l;default:i.hasOwnProperty(a)||Ce(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&(ye=!0),u=a;break;case"defaultValue":a!==l&&(ye=!0),o=a;break;case"multiple":a!==l&&(ye=!0),r=a;default:a!==l&&Ce(e,t,s,a,i,l)}t=o,n=r,i=f,u!=null?po(e,!!n,u,!1):!!i!=!!n&&(t!=null?po(e,!!n,t,!0):po(e,!!n,n?[]:"",!1));return;case"textarea":f=u=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Ce(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&(ye=!0),u=s;break;case"defaultValue":s!==a&&(ye=!0),f=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error($(91));break;default:s!==a&&Ce(e,t,r,s,i,a)}Qx(e,u,f);return;case"option":for(var _ in n)u=n[_],n.hasOwnProperty(_)&&u!=null&&!i.hasOwnProperty(_)&&(_==="selected"?e.selected=!1:Ce(e,t,_,null,i,u));for(l in i)u=i[l],f=n[l],i.hasOwnProperty(l)&&u!==f&&(u!=null||f!=null)&&(l==="selected"?(u!==f&&(ye=!0),e.selected=u&&typeof u!="function"&&typeof u!="symbol"):Ce(e,t,l,u,i,f));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in n)u=n[M],n.hasOwnProperty(M)&&u!=null&&!i.hasOwnProperty(M)&&Ce(e,t,M,null,i,u);for(c in i)if(u=i[c],f=n[c],i.hasOwnProperty(c)&&u!==f&&(u!=null||f!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error($(137,t));break;default:Ce(e,t,c,u,i,f)}return;default:if(Dg(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&mg(e,t,g,void 0,i,u);for(h in i)u=i[h],f=n[h],!i.hasOwnProperty(h)||u===f||u===void 0&&f===void 0||mg(e,t,h,u,i,f);return}}for(var d in n)u=n[d],n.hasOwnProperty(d)&&u!=null&&!i.hasOwnProperty(d)&&Ce(e,t,d,null,i,u);for(p in i)u=i[p],f=n[p],!i.hasOwnProperty(p)||u===f||u==null&&f==null||Ce(e,t,p,u,i,f)}function ax(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zw(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&ax(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,p=l.initiatorType;h&&ax(p)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var gg=null,_g=null;function Sc(e){return e.nodeType===9?e:e.ownerDocument}function rx(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ib(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function sb(e,t,n,i){return n=Sc(n).createElement(e),n[En]=i,n[ni]=t,Rn(n,e,t),_n(n),n}function vg(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fm=null;function Fw(){var e=window.event;return e&&e.type==="popstate"?e===fm?!1:(fm=e,!0):(fm=null,!1)}var _0=typeof setTimeout=="function"?setTimeout:void 0,Hw=typeof clearTimeout=="function"?clearTimeout:void 0,ox=typeof Promise=="function"?Promise:void 0,lx=typeof requestAnimationFrame=="function"?requestAnimationFrame:_0,Vw=typeof queueMicrotask=="function"?queueMicrotask:typeof ox<"u"?function(e){return ox.resolve(null).then(e).catch(Gw)}:_0;function Gw(e){setTimeout(function(){throw e})}function Ia(e){return e==="head"}function cx(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Io(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")pm(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,pm(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[Nc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&pm(e.ownerDocument.body);n=s}while(n);Io(t)}function ux(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function ab(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var a=t[s];0<a.width&&0<a.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function rb(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function ob(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function yg(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return ob(t,n,e)}function kw(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return ob(t,n,e)}function Xw(e){return e.documentElement.clientHeight}function Ww(e){this.addEventListener("load",e),this.addEventListener("error",e)}function qw(e,t,n,i,s,a,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var h=c.startViewTransition({update:function(){var u=c.defaultView,f=u.navigation&&u.navigation.transition,_=c.fonts.status;i();var M=[];if(_==="loaded"&&(Xw(c),c.fonts.status==="loading"&&M.push(c.fonts.ready)),_=M.length,e!==null)for(var g=e.suspenseyImages,d=0,m=0;m<g.length;m++){var x=g[m];if(!x.complete){var y=x.getBoundingClientRect();if(0<y.bottom&&0<y.right&&y.top<u.innerHeight&&y.left<u.innerWidth){if(d+=yb(x),d>bh){M.length=_;break}x=new Promise(Ww.bind(x)),M.push(x)}}}if(0<M.length)return u=Promise.race([Promise.all(M),new Promise(function(T){return setTimeout(T,500)})]).then(s,s),(f?Promise.allSettled([f.finished,u]):u).then(a,a);if(s(),f)return f.finished.then(a,a);a()},types:n});c.__reactViewTransition=h;var p=[];return h.ready.then(function(){for(var u=c.documentElement.getAnimations({subtree:!0}),f=0;f<u.length;f++){var _=u[f],M=_.effect,g=M.pseudoElement;if(g!=null&&g.startsWith("::view-transition")){p.push(_),_=M.getKeyframes();for(var d=g=void 0,m=!0,x=0;x<_.length;x++){var y=_[x],T=y.width;if(g===void 0)g=T;else if(g!==T){m=!1;break}if(T=y.height,d===void 0)d=T;else if(d!==T){m=!1;break}delete y.width,delete y.height,y.transform==="none"&&delete y.transform}m&&g!==void 0&&d!==void 0&&(M.setKeyframes(_),m=getComputedStyle(M.target,M.pseudoElement),m.width!==g||m.height!==d)&&(m=_[0],m.width=g,m.height=d,m=_[_.length-1],m.width=g,m.height=d,M.setKeyframes(_))}}r()},function(u){c.__reactViewTransition===h&&(c.__reactViewTransition=null);try{typeof u=="object"&&u!==null&&u.name==="InvalidStateError"&&(u.message==="View transition was skipped because document visibility state is hidden."||u.message==="Skipping view transition because document visibility state has become hidden."||u.message==="Skipping view transition because viewport size changed."||u.message==="Transition was aborted because of invalid state")&&(u=null),u!==null&&l(u)}finally{i(),s(),r()}}),h.finished.finally(function(){for(var u=0;u<p.length;u++)p[u].cancel();c.__reactViewTransition===h&&(c.__reactViewTransition=null),o()}),h}catch{return i(),s(),r(),null}}function or(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}or.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:Ie({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};or.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===e&&a.pseudoElement===t&&i.push(n[s])}return i};or.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function lb(e){return{name:e,group:new or("group",e),imagePair:new or("image-pair",e),old:new or("old",e),new:new or("new",e)}}function mi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}mi.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(cb(a,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=Do(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),ei(this._fragmentFiber.child,!1,Yw,e,o,i)}this._eventListeners=a}};function Yw(e,t,n,i){return cn(e).addEventListener(t,n,i),!1}mi.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=cb(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var a=s.cleanup;s=Do(s.optionsOrUseCapture),ei(this._fragmentFiber.child,!1,Zw,e,n,s),i.splice(t,1),a!==null&&a()}};function Zw(e,t,n,i){return cn(e).removeEventListener(t,n,i),!1}function Do(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function hx(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function cb(e,t,n,i){if(e.length===0)return-1;i=hx(i);for(var s=0;s<e.length;s++){var a=e[s];if(a.type===t&&a.listener===n&&hx(a.optionsOrUseCapture)===i)return s}return-1}mi.prototype.dispatchEvent=function(e){var t=Sr(this._fragmentFiber);if(t===null)return!0;t=cn(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,Do(a.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,Do(a.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};mi.prototype.focus=function(e){ei(this._fragmentFiber.child,!0,ub,e,void 0,void 0)};function ub(e,t){return e.tag===6?!1:(e=cn(e),rR(e,t))}mi.prototype.focusLast=function(e){var t=[];ei(this._fragmentFiber.child,!0,v0,t,void 0,void 0);for(var n=t.length-1;0<=n&&!ub(t[n],e);n--);};function v0(e,t){return t.push(e),!1}mi.prototype.blur=function(){var e=Sr(this._fragmentFiber);e!==null&&(e=cn(e),e=Sc(e).activeElement,e!==null&&ei(this._fragmentFiber.child,!1,Jw,e,void 0,void 0))};function Jw(e,t){return e.tag===6?!1:(e=cn(e),e===t||e.contains(t)?(t.blur(),!0):!1)}mi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),ei(this._fragmentFiber.child,!1,Kw,e,void 0,void 0)};function Kw(e,t){return e.tag===6||(e=cn(e),t.observe(e)),!1}mi.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),ei(this._fragmentFiber.child,!1,Qw,e,void 0,void 0);for(var n=t=0;n<Wi.length;n++){var i=Wi[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Wi[t++]=i}Wi.length=t}};function Qw(e,t){return e.tag===6||(e=cn(e),t.unobserve(e)),!1}var Wi=[],dm=!1;function jw(e,t,n){Wi.push({fragmentInstance:e,observer:t,instance:n}),dm||(dm=!0,oR(function(){dm=!1;var i=Wi;Wi=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}mi.prototype.getClientRects=function(){var e=[];return ei(this._fragmentFiber.child,!1,$w,e,void 0,void 0),e};function $w(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=cn(e),t.push.apply(t,e.getClientRects());return!1}mi.prototype.getRootNode=function(e){var t=Sr(this._fragmentFiber);return t===null?this:cn(t).getRootNode(e)};mi.prototype.compareDocumentPosition=function(e){var t=Sr(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];ei(this._fragmentFiber.child,!1,v0,n,void 0,void 0);var i=cn(t);if(n.length===0){if(n=i,Xv(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=Lx(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=cn(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=cn(n[0]),s=cn(n[n.length-1]);var a=Xv(this._fragmentFiber)?t.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=s.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||a&&s===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!a&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||tR(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function tR(e,t,n,i,s){var a=rr(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break t}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;t:{for(a=t,t=Sr(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break t}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=gm(n,a,Wv),t===null?t=!1:(ei(t,!0,NT,a,n),a=to,to=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===i)&&(t=gm(i,a,Wv),t===null?t=!1:(ei(t,!0,DT,a,i),a=to,mm=to=null,t=a!==null)),t):!1}function fx(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}mi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error($(566));var t=[];ei(this._fragmentFiber.child,!1,v0,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=Lx(this._fragmentFiber);if(i=n?i[1]||i[0]||Sr(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=cn(i),fx(e,n);return}if(i=cn(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=cn(s),fx(s,n)):cn(s).scrollIntoView(e),i+=n?-1:1}};function eR(e,t){return e=cn(e),hb(e,t),!1}function hb(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function fb(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,Do(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<Wi.length;o++){var l=Wi[o];(l.fragmentInstance!==t||l.observer!==a||l.instance!==e)&&(Wi[r++]=l)}Wi.length=r,a.observe(e)}),hb(e,t))}function nR(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,Do(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?jw(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function xg(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":xg(n),nf(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function iR(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Nc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=Di(e.nextSibling),e===null)break}return null}function sR(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Di(e.nextSibling),e===null))return null;return e}function db(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Di(e.nextSibling),e===null))return null;return e}function Sg(e){return e.data==="$?"||e.data==="$~"}function y0(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function aR(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Di(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Mg=null;function dx(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Di(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function px(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function rR(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function oR(e){lx(function(){lx(function(t){return e(t)})})}function pb(e,t,n){switch(t=Sc(n),e){case"html":if(e=t.documentElement,!e)throw Error($(452));return e;case"head":if(e=t.head,!e)throw Error($(453));return e;case"body":if(e=t.body,!e)throw Error($(454));return e;default:throw Error($(451))}}function mb(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&Ce(e,t,i,null,Pw,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===hs&&(e.onclick=null),nf(e)}function pm(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);nf(e)}var Li=new Map,mx=new Set;function Mc(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Xs=Me.d;Me.d={f:lR,r:cR,D:uR,C:hR,L:fR,m:dR,X:mR,S:pR,M:gR};function lR(){var e=Xs.f(),t=_f();return e||t}function cR(e){var t=Bo(e);t!==null&&t.tag===5&&t.type==="form"?$S(t):Xs.r(e)}var Vo=typeof document>"u"?null:document;function gb(e,t,n){var i=Vo;if(i&&typeof t=="string"&&t){var s=Ri(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),mx.has(s)||(mx.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),Rn(t,"link",e),_n(t),i.head.appendChild(t)))}}function uR(e){Xs.D(e),gb("dns-prefetch",e,null)}function hR(e,t){Xs.C(e,t),gb("preconnect",e,t)}function fR(e,t,n){Xs.L(e,t,n);var i=Vo;if(i&&e&&t){var s='link[rel="preload"][as="'+Ri(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Ri(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Ri(n.imageSizes)+'"]')):s+='[href="'+Ri(e)+'"]';var a=s;switch(t){case"style":a=Lo(e);break;case"script":a=Go(e)}if(!(Li.has(a)||(e=Ie({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Li.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Pc(a))||t==="script"&&i.querySelector(Bc(a))))){var r=i.createElement("link");Rn(r,"link",e),t==="style"&&(r[Nh]=!0,r.onload=r.onerror=function(){Wx(r)}),_n(r),i.head.appendChild(r)}}}function dR(e,t){Xs.m(e,t);var n=Vo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Ri(i)+'"][href="'+Ri(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Go(e)}if(!Li.has(a)&&(e=Ie({rel:"modulepreload",href:e},t),Li.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Bc(a)))return}i=n.createElement("link"),Rn(i,"link",e),_n(i),n.head.appendChild(i)}}}function pR(e,t,n){Xs.S(e,t,n);var i=Vo;if(i&&e){var s=fo(i).hoistableStyles,a=Lo(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Pc(a)))o.loading=5;else{e=Ie({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Li.get(a))&&x0(e,n);var l=r=i.createElement("link");_n(l),Rn(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Sh(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function mR(e,t){Xs.X(e,t);var n=Vo;if(n&&e){var i=fo(n).hoistableScripts,s=Go(e),a=i.get(s);a||(a=n.querySelector(Bc(s)),a||(e=Ie({src:e,async:!0},t),(t=Li.get(s))&&S0(e,t),a=n.createElement("script"),_n(a),Rn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function gR(e,t){Xs.M(e,t);var n=Vo;if(n&&e){var i=fo(n).hoistableScripts,s=Go(e),a=i.get(s);a||(a=n.querySelector(Bc(s)),a||(e=Ie({src:e,async:!0,type:"module"},t),(t=Li.get(s))&&S0(e,t),a=n.createElement("script"),_n(a),Rn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function gx(e,t,n,i){var s=(s=ya.current)?Mc(s):null;if(!s)throw Error($(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=Lo(n.href),t=fo(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Lo(n.href);var a=fo(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(Pc(e)))?a._p||(r.instance=a,r.state.loading=5):(a=Li.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Li.set(e,a)),_R(s,e,a,r.state))),t&&i===null)throw Error($(528,""));return r}if(t&&i!==null)throw Error($(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=Go(n),t=fo(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error($(444,e))}}function Lo(e){return'href="'+Ri(e)+'"'}function Pc(e){return'link[rel="stylesheet"]['+e+"]"}function _b(e){return Ie({},e,{"data-precedence":e.precedence,precedence:null})}function _R(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Nh]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[Nh]=!0,t.onload=t.onerror=Wx.bind(null,t),Rn(t,"link",n),_n(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function Go(e){return'[src="'+Ri(e)+'"]'}function Bc(e){return"script[async]"+e}function _x(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ri(n.href)+'"]');if(i)return t.instance=i,_n(i),i;var s=Ie({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),_n(i),Rn(i,"style",s),Sh(i,n.precedence,e),t.instance=i;case"stylesheet":s=Lo(n.href);var a=e.querySelector(Pc(s));if(a)return t.state.loading|=4,t.instance=a,_n(a),a;i=_b(n),(s=Li.get(s))&&x0(i,s),a=(e.ownerDocument||e).createElement("link"),_n(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Rn(a,"link",i),t.state.loading|=4,Sh(a,n.precedence,e),t.instance=a;case"script":return a=Go(n.src),(s=e.querySelector(Bc(a)))?(t.instance=s,_n(s),s):(i=n,(s=Li.get(a))&&(i=Ie({},n),S0(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),_n(s),Rn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error($(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Sh(i,n.precedence,e));return t.instance}function Sh(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function x0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function S0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Mh=null;function vx(e,t,n){if(Mh===null){var i=new Map,s=Mh=new Map;s.set(n,i)}else s=Mh,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[Nc]||a[En]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function bg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function vR(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function yx(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function vb(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function yb(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function xx(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=yb(t),e.suspenseyImages.push(t)),e=SR.bind(e),t.decode().then(e,e))}function yR(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=Lo(i.href),a=t.querySelector(Pc(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=bc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,_n(a);return}a=t.ownerDocument||t,i=_b(i),(s=Li.get(s))&&x0(i,s),a=a.createElement("link"),_n(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Rn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=bc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var bh=0;function xR(e,t){return e.stylesheets&&e.count===0&&Eh(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Eh(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&bh===0&&(bh=62500*zw());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Eh(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>bh?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function xb(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Eh(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function bc(){this.count--,xb(this)}function SR(){this.imgCount--,xb(this)}var $h=null;function Eh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$h=new Map,t.forEach(MR,e),$h=null,bc.call(e))}function MR(e,t){if(!(t.state.loading&4)){var n=$h.get(e);if(n)var i=n.get(null);else{n=new Map,$h.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=bc.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var Uo={$$typeof:us,Provider:null,Consumer:null,_currentValue:lr,_currentValue2:lr,_threadCount:0};function bR(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Gp(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gp(0),this.hiddenUpdates=Gp(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function Sb(e,t,n,i,s,a,r,o,l,c,h,p){return e=new bR(e,t,n,r,l,c,h,p,o),t=1,a===!0&&(t|=24),a=$n(3,null,null,t),e.current=a,a.stateNode=e,t=Vg(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},Xg(a),e}function Mb(e){return e?(e=lo,e):lo}function bb(e,t,n,i,s,a){s=Mb(s),i.context===null?i.context=s:i.pendingContext=s,i=Sa(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=Ma(e,i,t),n!==null&&(ti(n,e,t),ec(n,e,t))}function Sx(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function M0(e,t){Sx(e,t),(e=e.alternate)&&Sx(e,t)}function Eb(e){if(e.tag===13||e.tag===31){var t=Er(e,67108864);t!==null&&ti(t,e,67108864),M0(e,67108864)}}function Mx(e){if(e.tag===13||e.tag===31){var t=di();t=Cg(t);var n=Er(e,t);n!==null&&ti(n,e,t),M0(e,t)}}var Oo=!0;function ER(e,t,n,i){var s=qt.T;qt.T=null;var a=Me.p;try{Me.p=2,b0(e,t,n,i)}finally{Me.p=a,qt.T=s}}function TR(e,t,n,i){var s=qt.T;qt.T=null;var a=Me.p;try{Me.p=8,b0(e,t,n,i)}finally{Me.p=a,qt.T=s}}function b0(e,t,n,i){if(Oo){var s=Eg(i);if(s===null)hm(e,t,i,tf,n),bx(e,i);else if(wR(s,e,t,n,i))i.stopPropagation();else if(bx(e,i),t&4&&-1<AR.indexOf(e)){for(;s!==null;){var a=Bo(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=ir(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-fi(r);o.entanglements[1]|=l,r&=~l}vs(a),(Se&6)===0&&(Zh=ui()+500,Ic(0,!1))}}break;case 31:case 13:o=Er(a,2),o!==null&&ti(o,a,2),_f(),M0(a,2)}if(a=Eg(i),a===null&&hm(e,t,i,tf,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else hm(e,t,i,null,n)}}function Eg(e){return e=Lg(e),E0(e)}var tf=null;function E0(e){if(tf=null,e=rr(e),e!==null){var t=Ac(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Cx(t),e!==null)return e;e=null}else if(n===31){if(e=Nx(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return tf=e,null}function Tb(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(HT()){case Px:return 2;case Bx:return 8;case Ch:case VT:return 32;case zx:return 268435456;default:return 32}default:return 32}}var Tg=!1,Aa=null,wa=null,Ra=null,Ec=new Map,Tc=new Map,fa=[],AR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bx(e,t){switch(e){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":Ec.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tc.delete(t.pointerId)}}function Xl(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Bo(t),t!==null&&Eb(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function wR(e,t,n,i,s){switch(t){case"focusin":return Aa=Xl(Aa,e,t,n,i,s),!0;case"dragenter":return wa=Xl(wa,e,t,n,i,s),!0;case"mouseover":return Ra=Xl(Ra,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return Ec.set(a,Xl(Ec.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,Tc.set(a,Xl(Tc.get(a)||null,e,t,n,i,s)),!0}return!1}function Ab(e){var t=rr(e.target);if(t!==null){var n=Ac(t);if(n!==null){if(t=n.tag,t===13){if(t=Cx(n),t!==null){e.blockedOn=t,Jv(e.priority,function(){Mx(n)});return}}else if(t===31){if(t=Nx(n),t!==null){e.blockedOn=t,Jv(e.priority,function(){Mx(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Th(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Eg(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Rm=i,n.target.dispatchEvent(i),Rm=null}else return t=Bo(n),t!==null&&Eb(t),e.blockedOn=n,!1;t.shift()}return!0}function Ex(e,t,n){Th(e)&&n.delete(t)}function RR(){Tg=!1,Aa!==null&&Th(Aa)&&(Aa=null),wa!==null&&Th(wa)&&(wa=null),Ra!==null&&Th(Ra)&&(Ra=null),Ec.forEach(Ex),Tc.forEach(Ex)}function ah(e,t){e.blockedOn===t&&(e.blockedOn=null,Tg||(Tg=!0,un.unstable_scheduleCallback(un.unstable_NormalPriority,RR)))}var rh=null;function Tx(e){rh!==e&&(rh=e,un.unstable_scheduleCallback(un.unstable_NormalPriority,function(){rh===e&&(rh=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(E0(i||n)===null)continue;break}var a=Bo(n);a!==null&&(e.splice(t,3),t-=3,Xm(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Io(e){function t(l){return ah(l,e)}Aa!==null&&ah(Aa,e),wa!==null&&ah(wa,e),Ra!==null&&ah(Ra,e),Ec.forEach(t),Tc.forEach(t);for(var n=0;n<fa.length;n++){var i=fa[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<fa.length&&(n=fa[0],n.blockedOn===null);)Ab(n),n.blockedOn===null&&fa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[ni]||null;if(typeof a=="function")r||Tx(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[ni]||null)o=r.formAction;else if(E0(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Tx(n)}}}function wb(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function T0(e){this._internalRoot=e}xf.prototype.render=T0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));var n=t.current,i=di();bb(n,i,e,t,null,null)};xf.prototype.unmount=T0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bb(e.current,2,null,e,null,null),_f(),t[Po]=null}};function xf(e){this._internalRoot=e}xf.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<fa.length&&t!==0&&t<fa[n].priority;n++);fa.splice(n,0,e),n===0&&Ab(e)}};var Ax=wx.version;if(Ax!=="19.3.1")throw Error($(527,Ax,"19.3.1"));Me.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=CT(t),e=e!==null?Dx(e):null,e=e===null?null:e.stateNode,e};var CR={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:qt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Wl.isDisabled&&Wl.supportsFiber))try{wc=Wl.inject(CR),hi=Wl}catch{}var Wl;Sf.createRoot=function(e,t){if(!Rx(e))throw Error($(299));var n=!1,i="",s=oM,a=lM,r=cM;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Sb(e,1,!1,null,null,n,i,null,s,a,r,wb),e[Po]=t.current,g0(e),new T0(t)};Sf.hydrateRoot=function(e,t,n){if(!Rx(e))throw Error($(299));var i=!1,s="",a=oM,r=lM,o=cM,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=Sb(e,1,!0,t,n??null,i,s,l,a,r,o,wb),t.context=Mb(null),n=t.current,i=di(),i=Cg(i),s=Sa(i),s.callback=null,Ma(n,s,i),n=i,t.current.lanes=n,Cc(t,n),vs(t),e[Po]=t.current,g0(e),new xf(t)};Sf.version="19.3.1"});var Db=is((lU,Nb)=>{"use strict";function Cb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cb)}catch(e){console.error(e)}}Cb(),Nb.exports=Rb()});var OE=is(yp=>{"use strict";var wL=Symbol.for("react.transitional.element"),RL=Symbol.for("react.fragment");function UE(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:wL,type:e,key:i,ref:t!==void 0?t:null,props:n}}yp.Fragment=RL;yp.jsx=UE;yp.jsxs=UE});var wu=is((DP,IE)=>{"use strict";IE.exports=OE()});var jE=kr(Db(),1);var Hr=kr(zu(),1);var c1=0,c_=1,u1=2;var pu=1,h1=2,Ml=3,Ka=0,Zn=1,Mi=2,Ir=0,bl=1,u_=2,h_=3,f_=4,f1=5;var Pr=100,d1=101,p1=102,m1=103,g1=104,_1=200,v1=201,y1=202,x1=203,d_=204,p_=205,S1=206,M1=207,b1=208,E1=209,T1=210,A1=211,w1=212,R1=213,C1=214,qf=0,Yf=1,Zf=2,il=3,Jf=4,Kf=5,Qf=6,jf=7,m_=0,N1=1,D1=2,Ts=0,g_=1,__=2,v_=3,y_=4,x_=5,S_=6,mu=7;var M_=300,Br=301,El=302,Rd=303,Cd=304,Ms=1e3,Oi=1001,$f=1002,xn=1003,L1=1004;var gu=1005;var Dn=1006,Nd=1007;var ji=1008;var si=1009,b_=1010,E_=1011,Tl=1012,Dd=1013,$i=1014,ts=1015,es=1016,Ld=1017,Ud=1018,zr=1020,T_=35902,A_=35899,w_=1021,R_=1022,ns=1023,Qs=1026,ta=1027,C_=1028,Od=1029,Qa=1030,Id=1031;var Pd=1033,_u=33776,vu=33777,yu=33778,xu=33779,Bd=35840,zd=35841,Fd=35842,Hd=35843,Vd=36196,Gd=37492,kd=37496,Xd=37488,Wd=37489,Su=37490,qd=37491,Yd=37808,Zd=37809,Jd=37810,Kd=37811,Qd=37812,jd=37813,$d=37814,tp=37815,ep=37816,np=37817,ip=37818,sp=37819,ap=37820,rp=37821,op=36492,lp=36494,cp=36495,up=36283,hp=36284,Mu=36285,fp=36286;var Wc=2300,td=2301,Xf=2302,Q0=2303,j0=2400,$0=2401,t_=2402;var U1=3200;var dp=0,O1=1,ea="",Nn="srgb",qc="srgb-linear",Yc="linear",Ae="srgb";var Wf=7680;var I1=519,P1=512,B1=513,z1=514,N_=515,F1=516,H1=517,D_=518,L_=519,V1=35044;var U_="300 es",Ii=2e3,sl=2001;function NR(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function DR(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Zc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function G1(){let e=Zc("canvas");return e.style.display="block",e}var Lb={},al=null;function O_(...e){let t="THREE."+e.shift();al?al("log",t,...e):console.log(t,...e)}function k1(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Gt(...e){e=k1(e);let t="THREE."+e.shift();if(al)al("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Xt(...e){e=k1(e);let t="THREE."+e.shift();if(al)al("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Nr(...e){let t=e.join(" ");t in Lb||(Lb[t]=!0,Gt(...e))}function X1(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var W1={[qf]:qf,[Zf]:Qf,[Jf]:Jf,[il]:Kf,[Yf]:Yf,[Qf]:Zf,[jf]:jf,[Kf]:il},bs=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var A0=Math.PI/180,ed=180/Math.PI;function Al(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pn[e&255]+Pn[e>>8&255]+Pn[e>>16&255]+Pn[e>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]).toLowerCase()}function ce(e,t,n){return Math.max(t,Math.min(n,e))}function LR(e,t){return(e%t+t)%t}function w0(e,t,n){return(1-n)*e+n*t}function q1(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function I_(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function UR(e,t){if(t.constructor===Float32Array)return e;let n=I_(t);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(e/n,-1)}function OR(e,t){if(t.constructor===Float32Array)return e;let n=I_(t);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(e*n)}var V_=class V_{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ce(this.x,t.x,n.x),this.y=ce(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ce(this.x,t,n),this.y=ce(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};V_.prototype.isVector2=!0;var vt=V_,Wn=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],h=i[s+2],p=i[s+3],u=a[r+0],f=a[r+1],_=a[r+2],M=a[r+3];if(p!==M||l!==u||c!==f||h!==_){let g=l*u+c*f+h*_+p*M;g<0&&(u=-u,f=-f,_=-_,M=-M,g=-g);let d=1-o;if(g<.9995){let m=Math.acos(g),x=Math.sin(m);d=Math.sin(d*m)/x,o=Math.sin(o*m)/x,l=l*d+u*o,c=c*d+f*o,h=h*d+_*o,p=p*d+M*o}else{l=l*d+u*o,c=c*d+f*o,h=h*d+_*o,p=p*d+M*o;let m=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=m,c*=m,h*=m,p*=m}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],p=a[r],u=a[r+1],f=a[r+2],_=a[r+3];return t[n]=o*_+h*p+l*f-c*u,t[n+1]=l*_+h*u+c*p-o*f,t[n+2]=c*_+h*f+o*u-l*p,t[n+3]=h*_-o*p-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),p=o(a/2),u=l(i/2),f=l(s/2),_=l(a/2);switch(r){case"XYZ":this._x=u*h*p+c*f*_,this._y=c*f*p-u*h*_,this._z=c*h*_+u*f*p,this._w=c*h*p-u*f*_;break;case"YXZ":this._x=u*h*p+c*f*_,this._y=c*f*p-u*h*_,this._z=c*h*_-u*f*p,this._w=c*h*p+u*f*_;break;case"ZXY":this._x=u*h*p-c*f*_,this._y=c*f*p+u*h*_,this._z=c*h*_+u*f*p,this._w=c*h*p-u*f*_;break;case"ZYX":this._x=u*h*p-c*f*_,this._y=c*f*p+u*h*_,this._z=c*h*_-u*f*p,this._w=c*h*p+u*f*_;break;case"YZX":this._x=u*h*p+c*f*_,this._y=c*f*p+u*h*_,this._z=c*h*_-u*f*p,this._w=c*h*p-u*f*_;break;case"XZY":this._x=u*h*p-c*f*_,this._y=c*f*p-u*h*_,this._z=c*h*_+u*f*p,this._w=c*h*p+u*f*_;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],p=n[10],u=i+o+p;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(a-c)*f,this._z=(r-s)*f}else if(i>o&&i>p){let f=2*Math.sqrt(1+i-o-p);this._w=(h-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(a+c)/f}else if(o>p){let f=2*Math.sqrt(1+o-i-p);this._w=(a-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+p-i-o);this._w=(r-s)/f,this._x=(a+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-i*c,this._z=a*h+r*c+i*l-s*o,this._w=r*h-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G_=class G_{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Ub.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Ub.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),h=2*(o*n-a*s),p=2*(a*i-r*n);return this.x=n+l*c+r*p-o*h,this.y=i+l*h+o*c-a*p,this.z=s+l*p+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ce(this.x,t.x,n.x),this.y=ce(this.y,t.y,n.y),this.z=ce(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ce(this.x,t,n),this.y=ce(this.y,t,n),this.z=ce(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return R0.copy(this).projectOnVector(t),this.sub(R0)}reflect(t){return this.sub(R0.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};G_.prototype.isVector3=!0;var O=G_,R0=new O,Ub=new Wn,k_=class k_{constructor(t,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=n,h[4]=a,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],u=i[2],f=i[5],_=i[8],M=s[0],g=s[3],d=s[6],m=s[1],x=s[4],y=s[7],T=s[2],w=s[5],v=s[8];return a[0]=r*M+o*m+l*T,a[3]=r*g+o*x+l*w,a[6]=r*d+o*y+l*v,a[1]=c*M+h*m+p*T,a[4]=c*g+h*x+p*w,a[7]=c*d+h*y+p*v,a[2]=u*M+f*m+_*T,a[5]=u*g+f*x+_*w,a[8]=u*d+f*y+_*v,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*r*h-n*o*c-i*a*h+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*r-o*c,u=o*l-h*a,f=c*a-r*l,_=n*p+i*u+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/_;return t[0]=p*M,t[1]=(s*c-h*i)*M,t[2]=(o*i-s*r)*M,t[3]=u*M,t[4]=(h*n-s*l)*M,t[5]=(s*a-o*n)*M,t[6]=f*M,t[7]=(i*l-c*n)*M,t[8]=(r*n-i*a)*M,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return Nr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(C0.makeScale(t,n)),this}rotate(t){return Nr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(C0.makeRotation(-t)),this}translate(t,n){return Nr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(C0.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};k_.prototype.isMatrix3=!0;var Jt=k_,C0=new Jt,Ob=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ib=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function IR(){let e={enabled:!0,workingColorSpace:qc,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===Ae&&(s.r=Ks(s.r),s.g=Ks(s.g),s.b=Ks(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Ae&&(s.r=nl(s.r),s.g=nl(s.g),s.b=nl(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ea?Yc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[r].fromXYZ).multiply(this.spaces[a].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[qc]:{primaries:t,whitePoint:i,transfer:Yc,toXYZ:Ob,fromXYZ:Ib,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:t,whitePoint:i,transfer:Ae,toXYZ:Ob,fromXYZ:Ib,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),e}var de=IR();function Ks(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function nl(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var ko,nd=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ko===void 0&&(ko=Zc("canvas")),ko.width=t.width,ko.height=t.height;let s=ko.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ko}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Zc("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Ks(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ks(n[i]/255)*255):n[i]=Ks(n[i]);return{data:n,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},PR=0,rl=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:PR++}),this.uuid=Al(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width||0,n.height||0,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(N0(s[r].image)):a.push(N0(s[r]))}else a=N0(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function N0(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?nd.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}var BR=0,D0=new O,qn=class e extends bs{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Oi,s=Oi,a=Dn,r=ji,o=ns,l=si,c=e.DEFAULT_ANISOTROPY,h=ea){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BR++}),this.uuid=Al(),this.name="",this.source=new rl(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(D0).x}get height(){return this.source.getSize(D0).y}get depth(){return this.source.getSize(D0).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Gt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Gt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==M_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ms:t.x=t.x-Math.floor(t.x);break;case Oi:t.x=t.x<0?0:1;break;case $f:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ms:t.y=t.y-Math.floor(t.y);break;case Oi:t.y=t.y<0?0:1;break;case $f:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=M_;qn.DEFAULT_ANISOTROPY=1;var X_=class X_{constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],h=l[4],p=l[8],u=l[1],f=l[5],_=l[9],M=l[2],g=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-M)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+M)<.1&&Math.abs(_+g)<.1&&Math.abs(c+f+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let x=(c+1)/2,y=(f+1)/2,T=(d+1)/2,w=(h+u)/4,v=(p+M)/4,E=(_+g)/4;return x>y&&x>T?x<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(x),s=w/i,a=v/i):y>T?y<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),i=w/s,a=E/s):T<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(T),i=v/a,s=E/a),this.set(i,s,a,n),this}let m=Math.sqrt((g-_)*(g-_)+(p-M)*(p-M)+(u-h)*(u-h));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(p-M)/m,this.z=(u-h)/m,this.w=Math.acos((c+f+d-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ce(this.x,t.x,n.x),this.y=ce(this.y,t.y,n.y),this.z=ce(this.z,t.z,n.z),this.w=ce(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ce(this.x,t,n),this.y=ce(this.y,t,n),this.z=ce(this.z,t,n),this.w=ce(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};X_.prototype.isVector4=!0;var Xe=X_,id=class extends bs{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Xe(0,0,t,n),this.scissorTest=!1,this.viewport=new Xe(0,0,t,n),this.textures=[];let s=i.count;for(let a=0;a<s;a++)this.textures[a]=new qn({width:t,height:n,depth:i.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new rl(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},vi=class extends id{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Jc=class extends qn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var sd=class extends qn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var wd=class wd{constructor(t,n,i,s,a,r,o,l,c,h,p,u,f,_,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,h,p,u,f,_,M,g)}set(t,n,i,s,a,r,o,l,c,h,p,u,f,_,M,g){let d=this.elements;return d[0]=t,d[4]=n,d[8]=i,d[12]=s,d[1]=a,d[5]=r,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=u,d[3]=f,d[7]=_,d[11]=M,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wd().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/Xo.setFromMatrixColumn(t,0).length(),a=1/Xo.setFromMatrixColumn(t,1).length(),r=1/Xo.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){let u=r*h,f=r*p,_=o*h,M=o*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=f+_*c,n[5]=u-M*c,n[9]=-o*l,n[2]=M-u*c,n[6]=_+f*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*h,f=l*p,_=c*h,M=c*p;n[0]=u+M*o,n[4]=_*o-f,n[8]=r*c,n[1]=r*p,n[5]=r*h,n[9]=-o,n[2]=f*o-_,n[6]=M+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*h,f=l*p,_=c*h,M=c*p;n[0]=u-M*o,n[4]=-r*p,n[8]=_+f*o,n[1]=f+_*o,n[5]=r*h,n[9]=M-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*h,f=r*p,_=o*h,M=o*p;n[0]=l*h,n[4]=_*c-f,n[8]=u*c+M,n[1]=l*p,n[5]=M*c+u,n[9]=f*c-_,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,f=r*c,_=o*l,M=o*c;n[0]=l*h,n[4]=M-u*p,n[8]=_*p+f,n[1]=p,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=f*p+_,n[10]=u-M*p}else if(t.order==="XZY"){let u=r*l,f=r*c,_=o*l,M=o*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=u*p+M,n[5]=r*h,n[9]=f*p-_,n[2]=_*p-f,n[6]=o*h,n[10]=M*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zR,t,FR)}lookAt(t,n,i){let s=this.elements;return gi.subVectors(t,n),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),Pa.crossVectors(i,gi),Pa.lengthSq()===0&&(Math.abs(i.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),Pa.crossVectors(i,gi)),Pa.normalize(),Mf.crossVectors(gi,Pa),s[0]=Pa.x,s[4]=Mf.x,s[8]=gi.x,s[1]=Pa.y,s[5]=Mf.y,s[9]=gi.y,s[2]=Pa.z,s[6]=Mf.z,s[10]=gi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],u=i[9],f=i[13],_=i[2],M=i[6],g=i[10],d=i[14],m=i[3],x=i[7],y=i[11],T=i[15],w=s[0],v=s[4],E=s[8],I=s[12],R=s[1],C=s[5],H=s[9],W=s[13],L=s[2],F=s[6],Z=s[10],V=s[14],it=s[3],k=s[7],Q=s[11],et=s[15];return a[0]=r*w+o*R+l*L+c*it,a[4]=r*v+o*C+l*F+c*k,a[8]=r*E+o*H+l*Z+c*Q,a[12]=r*I+o*W+l*V+c*et,a[1]=h*w+p*R+u*L+f*it,a[5]=h*v+p*C+u*F+f*k,a[9]=h*E+p*H+u*Z+f*Q,a[13]=h*I+p*W+u*V+f*et,a[2]=_*w+M*R+g*L+d*it,a[6]=_*v+M*C+g*F+d*k,a[10]=_*E+M*H+g*Z+d*Q,a[14]=_*I+M*W+g*V+d*et,a[3]=m*w+x*R+y*L+T*it,a[7]=m*v+x*C+y*F+T*k,a[11]=m*E+x*H+y*Z+T*Q,a[15]=m*I+x*W+y*V+T*et,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],u=t[10],f=t[14],_=t[3],M=t[7],g=t[11],d=t[15],m=l*f-c*u,x=o*f-c*p,y=o*u-l*p,T=r*f-c*h,w=r*u-l*h,v=r*p-o*h;return n*(M*m-g*x+d*y)-i*(_*m-g*T+d*w)+s*(_*x-M*T+d*v)-a*(_*y-M*w+g*v)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return n*(r*h-o*c)-i*(a*h-o*l)+s*(a*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],u=t[10],f=t[11],_=t[12],M=t[13],g=t[14],d=t[15],m=n*o-i*r,x=n*l-s*r,y=n*c-a*r,T=i*l-s*o,w=i*c-a*o,v=s*c-a*l,E=h*M-p*_,I=h*g-u*_,R=h*d-f*_,C=p*g-u*M,H=p*d-f*M,W=u*d-f*g,L=m*W-x*H+y*C+T*R-w*I+v*E;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/L;return t[0]=(o*W-l*H+c*C)*F,t[1]=(s*H-i*W-a*C)*F,t[2]=(M*v-g*w+d*T)*F,t[3]=(u*w-p*v-f*T)*F,t[4]=(l*R-r*W-c*I)*F,t[5]=(n*W-s*R+a*I)*F,t[6]=(g*y-_*v-d*x)*F,t[7]=(h*v-u*y+f*x)*F,t[8]=(r*H-o*R+c*E)*F,t[9]=(i*R-n*H-a*E)*F,t[10]=(_*w-M*y+d*m)*F,t[11]=(p*y-h*w-f*m)*F,t[12]=(o*I-r*C-l*E)*F,t[13]=(n*C-i*I+s*E)*F,t[14]=(M*x-_*T-g*m)*F,t[15]=(h*T-p*x+u*m)*F,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,h=r+r,p=o+o,u=a*c,f=a*h,_=a*p,M=r*h,g=r*p,d=o*p,m=l*c,x=l*h,y=l*p,T=i.x,w=i.y,v=i.z;return s[0]=(1-(M+d))*T,s[1]=(f+y)*T,s[2]=(_-x)*T,s[3]=0,s[4]=(f-y)*w,s[5]=(1-(u+d))*w,s[6]=(g+m)*w,s[7]=0,s[8]=(_+x)*v,s[9]=(g-m)*v,s[10]=(1-(u+M))*v,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let r=Xo.set(s[0],s[1],s[2]).length(),o=Xo.set(s[4],s[5],s[6]).length(),l=Xo.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Zi.copy(this);let c=1/r,h=1/o,p=1/l;return Zi.elements[0]*=c,Zi.elements[1]*=c,Zi.elements[2]*=c,Zi.elements[4]*=h,Zi.elements[5]*=h,Zi.elements[6]*=h,Zi.elements[8]*=p,Zi.elements[9]*=p,Zi.elements[10]*=p,n.setFromRotationMatrix(Zi),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=Ii,l=!1){let c=this.elements,h=2*a/(n-t),p=2*a/(i-s),u=(n+t)/(n-t),f=(i+s)/(i-s),_,M;if(l)_=a/(r-a),M=r*a/(r-a);else if(o===Ii)_=-(r+a)/(r-a),M=-2*r*a/(r-a);else if(o===sl)_=-r/(r-a),M=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=Ii,l=!1){let c=this.elements,h=2/(n-t),p=2/(i-s),u=-(n+t)/(n-t),f=-(i+s)/(i-s),_,M;if(l)_=1/(r-a),M=r/(r-a);else if(o===Ii)_=-2/(r-a),M=-(r+a)/(r-a);else if(o===sl)_=-1/(r-a),M=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};wd.prototype.isMatrix4=!0;var Ue=wd,Xo=new O,Zi=new Ue,zR=new O(0,0,0),FR=new O(1,1,1),Pa=new O,Mf=new O,gi=new O,Pb=new Ue,Bb=new Wn,js=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],u=s[6],f=s[10];switch(n){case"XYZ":this._y=Math.asin(ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ce(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ce(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Pb.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pb,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Bb.setFromEuler(this),this.setFromQuaternion(Bb,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};js.DEFAULT_ORDER="XYZ";var ol=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},HR=0,zb=new O,Wo=new Wn,Ws=new Ue,bf=new O,zc=new O,VR=new O,GR=new Wn,Fb=new O(1,0,0),Hb=new O(0,1,0),Vb=new O(0,0,1),Gb={type:"added"},kR={type:"removed"},qo={type:"childadded",child:null},L0={type:"childremoved",child:null},Yn=class e extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HR++}),this.uuid=Al(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new O,n=new js,i=new Wn,s=new O(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Jt}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Wo.setFromAxisAngle(t,n),this.quaternion.multiply(Wo),this}rotateOnWorldAxis(t,n){return Wo.setFromAxisAngle(t,n),this.quaternion.premultiply(Wo),this}rotateX(t){return this.rotateOnAxis(Fb,t)}rotateY(t){return this.rotateOnAxis(Hb,t)}rotateZ(t){return this.rotateOnAxis(Vb,t)}translateOnAxis(t,n){return zb.copy(t).applyQuaternion(this.quaternion),this.position.add(zb.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Fb,t)}translateY(t){return this.translateOnAxis(Hb,t)}translateZ(t){return this.translateOnAxis(Vb,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ws.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?bf.copy(t):bf.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),zc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ws.lookAt(zc,bf,this.up):Ws.lookAt(bf,zc,this.up),this.quaternion.setFromRotationMatrix(Ws),s&&(Ws.extractRotation(s.matrixWorld),Wo.setFromRotationMatrix(Ws),this.quaternion.premultiply(Wo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Xt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gb),qo.child=t,this.dispatchEvent(qo),qo.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(kR),L0.child=t,this.dispatchEvent(L0),L0.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ws.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ws.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ws),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gb),qo.child=t,this.dispatchEvent(qo),qo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zc,t,VR),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zc,GR,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),p=r(t.shapes),u=r(t.skeletons),f=r(t.animations),_=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Yn.DEFAULT_UP=new O(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xs=class extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},XR={type:"move"},ll=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let M of t.hand.values()){let g=n.getJointPose(M,i),d=this._getHandJoint(c,M);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),f=.02,_=.005;c.inputState.pinching&&u>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(XR)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new xs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},Y1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ba={h:0,s:0,l:0},Ef={h:0,s:0,l:0};function U0(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var ee=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=de.workingColorSpace){return this.r=t,this.g=n,this.b=i,de.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=de.workingColorSpace){if(t=LR(t,1),n=ce(n,0,1),i=ce(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=U0(r,a,t+1/3),this.g=U0(r,a,t),this.b=U0(r,a,t-1/3)}return de.colorSpaceToWorking(this,s),this}setStyle(t,n=Nn){function i(a){a!==void 0&&parseFloat(a)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,n);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Gt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Nn){let i=Y1[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}copyLinearToSRGB(t){return this.r=nl(t.r),this.g=nl(t.g),this.b=nl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Nn){return de.workingToColorSpace(Bn.copy(this),t),Math.round(ce(Bn.r*255,0,255))*65536+Math.round(ce(Bn.g*255,0,255))*256+Math.round(ce(Bn.b*255,0,255))}getHexString(t=Nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=de.workingColorSpace){de.workingToColorSpace(Bn.copy(this),n);let i=Bn.r,s=Bn.g,a=Bn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,h=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=h<=.5?p/(r+o):p/(2-r-o),r){case i:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-i)/p+2;break;case a:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=de.workingColorSpace){return de.workingToColorSpace(Bn.copy(this),n),t.r=Bn.r,t.g=Bn.g,t.b=Bn.b,t}getStyle(t=Nn){de.workingToColorSpace(Bn.copy(this),t);let n=Bn.r,i=Bn.g,s=Bn.b;return t!==Nn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Ba),this.setHSL(Ba.h+t,Ba.s+n,Ba.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Ba),t.getHSL(Ef);let i=w0(Ba.h,Ef.h,n),s=w0(Ba.s,Ef.s,n),a=w0(Ba.l,Ef.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bn=new ee;ee.NAMES=Y1;var cl=class extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new js,this.environmentIntensity=1,this.environmentRotation=new js,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},Ji=new O,qs=new O,O0=new O,Ys=new O,Yo=new O,Zo=new O,kb=new O,I0=new O,P0=new O,B0=new O,z0=new Xe,F0=new Xe,H0=new Xe,Va=class e{constructor(t=new O,n=new O,i=new O){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Ji.subVectors(t,n),s.cross(Ji);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){Ji.subVectors(s,n),qs.subVectors(i,n),O0.subVectors(t,n);let r=Ji.dot(Ji),o=Ji.dot(qs),l=Ji.dot(O0),c=qs.dot(qs),h=qs.dot(O0),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;let u=1/p,f=(c*l-o*h)*u,_=(r*h-o*l)*u;return a.set(1-f-_,_,f)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Ys)===null?!1:Ys.x>=0&&Ys.y>=0&&Ys.x+Ys.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Ys)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ys.x),l.addScaledVector(r,Ys.y),l.addScaledVector(o,Ys.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return z0.setScalar(0),F0.setScalar(0),H0.setScalar(0),z0.fromBufferAttribute(t,n),F0.fromBufferAttribute(t,i),H0.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(z0,a.x),r.addScaledVector(F0,a.y),r.addScaledVector(H0,a.z),r}static isFrontFacing(t,n,i,s){return Ji.subVectors(i,n),qs.subVectors(t,n),Ji.cross(qs).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ji.subVectors(this.c,this.b),qs.subVectors(this.a,this.b),Ji.cross(qs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;Yo.subVectors(s,i),Zo.subVectors(a,i),I0.subVectors(t,i);let l=Yo.dot(I0),c=Zo.dot(I0);if(l<=0&&c<=0)return n.copy(i);P0.subVectors(t,s);let h=Yo.dot(P0),p=Zo.dot(P0);if(h>=0&&p<=h)return n.copy(s);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return r=l/(l-h),n.copy(i).addScaledVector(Yo,r);B0.subVectors(t,a);let f=Yo.dot(B0),_=Zo.dot(B0);if(_>=0&&f<=_)return n.copy(a);let M=f*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Zo,o);let g=h*_-f*p;if(g<=0&&p-h>=0&&f-_>=0)return kb.subVectors(a,s),o=(p-h)/(p-h+(f-_)),n.copy(s).addScaledVector(kb,o);let d=1/(g+M+u);return r=M*d,o=u*d,n.copy(i).addScaledVector(Yo,r).addScaledVector(Zo,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ga=class{constructor(t=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Ki.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Ki.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Ki.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Ki):Ki.fromBufferAttribute(a,r),Ki.applyMatrix4(t.matrixWorld),this.expandByPoint(Ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tf.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Tf.copy(i.boundingBox)),Tf.applyMatrix4(t.matrixWorld),this.union(Tf)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ki),Ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fc),Af.subVectors(this.max,Fc),Jo.subVectors(t.a,Fc),Ko.subVectors(t.b,Fc),Qo.subVectors(t.c,Fc),za.subVectors(Ko,Jo),Fa.subVectors(Qo,Ko),Ar.subVectors(Jo,Qo);let n=[0,-za.z,za.y,0,-Fa.z,Fa.y,0,-Ar.z,Ar.y,za.z,0,-za.x,Fa.z,0,-Fa.x,Ar.z,0,-Ar.x,-za.y,za.x,0,-Fa.y,Fa.x,0,-Ar.y,Ar.x,0];return!V0(n,Jo,Ko,Qo,Af)||(n=[1,0,0,0,1,0,0,0,1],!V0(n,Jo,Ko,Qo,Af))?!1:(wf.crossVectors(za,Fa),n=[wf.x,wf.y,wf.z],V0(n,Jo,Ko,Qo,Af))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Zs=[new O,new O,new O,new O,new O,new O,new O,new O],Ki=new O,Tf=new Ga,Jo=new O,Ko=new O,Qo=new O,za=new O,Fa=new O,Ar=new O,Fc=new O,Af=new O,wf=new O,wr=new O;function V0(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){wr.fromArray(e,a);let o=s.x*Math.abs(wr.x)+s.y*Math.abs(wr.y)+s.z*Math.abs(wr.z),l=t.dot(wr),c=n.dot(wr),h=i.dot(wr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var sn=new O,Rf=new vt,WR=0,ii=class extends bs{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:WR++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=V1,this.updateRanges=[],this.gpuType=ts,this.version=0,this._normalizationScale=t!==void 0?I_(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Rf.fromBufferAttribute(this,n),Rf.applyMatrix3(t),this.setXY(n,Rf.x,Rf.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix3(t),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix4(t),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.applyNormalMatrix(t),this.setXYZ(n,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.transformDirection(t),this.setXYZ(n,sn.x,sn.y,sn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,n,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s),a=this._normalize(a)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let n=this._normalizationScale;return n!==void 0?Math.max(t/n,-1):UR(t,this.array)}_normalize(t){let n=this._normalizationScale;return n!==void 0?Math.round(t*n):OR(t,this.array)}};var Kc=class extends ii{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var Qc=class extends ii{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var an=class extends ii{constructor(t,n,i){super(new Float32Array(t),n,i)}},qR=new Ga,Hc=new O,G0=new O,ul=class{constructor(t=new O,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):qR.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Hc.subVectors(t,this.center);let n=Hc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Hc,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(G0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Hc.copy(t.center).add(G0)),this.expandByPoint(Hc.copy(t.center).sub(G0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},YR=0,Ui=new Ue,k0=new Yn,jo=new O,_i=new Ga,Vc=new Ga,yn=new O,yi=class e extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YR++}),this.uuid=Al(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(NR(t)?Qc:Kc)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Jt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ui.makeRotationFromQuaternion(t),this.applyMatrix4(Ui),this}rotateX(t){return Ui.makeRotationX(t),this.applyMatrix4(Ui),this}rotateY(t){return Ui.makeRotationY(t),this.applyMatrix4(Ui),this}rotateZ(t){return Ui.makeRotationZ(t),this.applyMatrix4(Ui),this}translate(t,n,i){return Ui.makeTranslation(t,n,i),this.applyMatrix4(Ui),this}scale(t,n,i){return Ui.makeScale(t,n,i),this.applyMatrix4(Ui),this}lookAt(t){return k0.lookAt(t),k0.updateMatrix(),this.applyMatrix4(k0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jo).negate(),this.translate(jo.x,jo.y,jo.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new an(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ga);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];_i.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ul);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let i=this.boundingSphere.center;if(_i.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];Vc.setFromBufferAttribute(o),this.morphTargetsRelative?(yn.addVectors(_i.min,Vc.min),_i.expandByPoint(yn),yn.addVectors(_i.max,Vc.max),_i.expandByPoint(yn)):(_i.expandByPoint(Vc.min),_i.expandByPoint(Vc.max))}_i.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)yn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(yn));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)yn.fromBufferAttribute(o,c),l&&(jo.fromBufferAttribute(t,c),yn.add(jo)),s=Math.max(s,i.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new ii(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[],c=new Uint8Array(i.count);for(let I=0;I<i.count;I++)o[I]=new O,l[I]=new O;let h=new O,p=new O,u=new O,f=new vt,_=new vt,M=new vt,g=new O,d=new O;function m(I,R,C){c[I]=c[R]=c[C]=1,h.fromBufferAttribute(i,I),p.fromBufferAttribute(i,R),u.fromBufferAttribute(i,C),f.fromBufferAttribute(a,I),_.fromBufferAttribute(a,R),M.fromBufferAttribute(a,C),p.sub(h),u.sub(h),_.sub(f),M.sub(f);let H=1/(_.x*M.y-M.x*_.y);isFinite(H)&&(g.copy(p).multiplyScalar(M.y).addScaledVector(u,-_.y).multiplyScalar(H),d.copy(u).multiplyScalar(_.x).addScaledVector(p,-M.x).multiplyScalar(H),o[I].add(g),o[R].add(g),o[C].add(g),l[I].add(d),l[R].add(d),l[C].add(d))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let I=0,R=x.length;I<R;++I){let C=x[I],H=C.start,W=C.count;for(let L=H,F=H+W;L<F;L+=3)m(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let y=new O,T=new O,w=new O,v=new O;function E(I){w.fromBufferAttribute(s,I),v.copy(w);let R=o[I];y.copy(R),y.sub(w.multiplyScalar(w.dot(R))).normalize(),T.crossVectors(v,R);let H=T.dot(l[I])<0?-1:1;r.setXYZW(I,y.x,y.y,y.z,H)}for(let I=0,R=i.count;I<R;++I)c[I]&&E(I);this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new ii(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new O,a=new O,r=new O,o=new O,l=new O,c=new O,h=new O,p=new O;if(t)for(let u=0,f=t.count;u<f;u+=3){let _=t.getX(u+0),M=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,M),r.fromBufferAttribute(n,g),h.subVectors(r,a),p.subVectors(s,a),h.cross(p),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=n.count;u<f;u+=3)s.fromBufferAttribute(n,u+0),a.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),h.subVectors(r,a),p.subVectors(s,a),h.cross(p),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)yn.fromBufferAttribute(t,n),yn.normalize(),t.setXYZ(n,yn.x,yn.y,yn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h),f=0,_=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?f=l[M]*o.data.stride+o.offset:f=l[M]*h;for(let d=0;d<h;d++)u[_++]=c[f++]}return new ii(u,h,p)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let h=0,p=c.length;h<p;h++){let u=c[h],f=t(u,i);l.push(f)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let f=c[p];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let a=t.morphAttributes;for(let c in a){let h=[],p=a[c];for(let u=0,f=p.length;u<f;u++)h.push(p[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var X0=new O,ZR=new O,JR=new Jt,Qi=class{constructor(t=new O(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=X0.subVectors(i,n).cross(ZR.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(X0),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||JR.getNormalMatrix(t),s=this.coplanarPoint(X0).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},KR=0,ka=class extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KR++}),this.uuid=Al(),this.name="",this.type="Material",this.blending=bl,this.side=Ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=d_,this.blendDst=p_,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=I1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wf,this.stencilZFail=Wf,this.stencilZPass=Wf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Gt(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Gt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ee().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Qi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new vt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new vt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Js=new O,W0=new O,Cf=new O,Nf=new O,jc=class{constructor(t=new O,n=new O(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Js)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Js.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Js.copy(this.origin).addScaledVector(this.direction,n),Js.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){W0.copy(t).add(n).multiplyScalar(.5),Cf.copy(n).sub(t).normalize(),Nf.copy(this.origin).sub(W0);let a=t.distanceTo(n)*.5,r=-this.direction.dot(Cf),o=Nf.dot(this.direction),l=-Nf.dot(Cf),c=Nf.lengthSq(),h=Math.abs(1-r*r),p,u,f,_;if(h>0)if(p=r*l-o,u=r*o-l,_=a*h,p>=0)if(u>=-_)if(u<=_){let M=1/h;p*=M,u*=M,f=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=a,p=Math.max(0,-(r*u+o)),f=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(r*u+o)),f=-p*p+u*(u+2*l)+c;else u<=-_?(p=Math.max(0,-(-r*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),f=-p*p+u*(u+2*l)+c):u<=_?(p=0,u=Math.min(Math.max(-a,-l),a),f=u*(u+2*l)+c):(p=Math.max(0,-(r*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),f=-p*p+u*(u+2*l)+c);else u=r>0?-a:a,p=Math.max(0,-(r*u+o)),f=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(W0).addScaledVector(Cf,u),f}intersectSphere(t,n){if(t.radius<0)return null;Js.subVectors(t.center,this.origin);let i=Js.dot(this.direction),s=Js.dot(Js)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(a=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(a=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Js)!==null}intersectTriangle(t,n,i,s,a){let r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=t.x-r.x,u=t.y-r.y,f=t.z-r.z,_=n.x-r.x,M=n.y-r.y,g=n.z-r.z,d=i.x-r.x,m=i.y-r.y,x=i.z-r.z,y=Math.abs(l),T=Math.abs(c),w=Math.abs(h),v,E,I,R,C,H,W,L,F,Z,V,it;if(y>=T&&y>=w?(I=l,H=p,F=_,it=d,l>=0?(v=c,E=h,R=u,C=f,W=M,L=g,Z=m,V=x):(v=h,E=c,R=f,C=u,W=g,L=M,Z=x,V=m)):T>=w?(I=c,H=u,F=M,it=m,c>=0?(v=h,E=l,R=f,C=p,W=g,L=_,Z=x,V=d):(v=l,E=h,R=p,C=f,W=_,L=g,Z=d,V=x)):(I=h,H=f,F=g,it=x,h>=0?(v=l,E=c,R=p,C=u,W=_,L=M,Z=d,V=m):(v=c,E=l,R=u,C=p,W=M,L=_,Z=m,V=d)),I===0)return null;let k=v/I,Q=E/I,et=1/I,wt=R-k*H,Pt=C-Q*H,q=W-k*F,yt=L-Q*F,At=Z-k*it,Bt=V-Q*it,St=At*yt-Bt*q,Ft=wt*Bt-Pt*At,be=q*Pt-yt*wt;if(s){if(St<0||Ft<0||be<0)return null}else if((St<0||Ft<0||be<0)&&(St>0||Ft>0||be>0))return null;let Ht=St+Ft+be;if(Ht===0)return null;let Yt=et*(St*H+Ft*F+be*it);return(Ht>0?Yt<0:Yt>0)?null:this.at(Yt/Ht,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},hl=class extends ka{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new js,this.combine=m_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Xb=new Ue,Rr=new jc,Df=new ul,Wb=new O,Lf=new O,Uf=new O,Of=new O,q0=new O,If=new O,qb=new O,Pf=new O,hn=class extends Yn{constructor(t=new yi,n=new hl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){If.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let h=o[l],p=a[l];h!==0&&(q0.fromBufferAttribute(p,t),r?If.addScaledVector(q0,h):If.addScaledVector(q0.sub(n),h))}n.add(If)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Df.copy(i.boundingSphere),Df.applyMatrix4(a),Rr.copy(t.ray).recast(t.near),!(Df.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(Df,Wb)===null||Rr.origin.distanceToSquared(Wb)>(t.far-t.near)**2))&&(Xb.copy(a).invert(),Rr.copy(t.ray).applyMatrix4(Xb),!(i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Rr)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,p=a.attributes.normal,u=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,M=u.length;_<M;_++){let g=u[_],d=r[g.materialIndex],m=Math.max(g.start,f.start),x=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=m,T=x;y<T;y+=3){let w=o.getX(y),v=o.getX(y+1),E=o.getX(y+2);s=Bf(this,d,t,i,c,h,p,w,v,E),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let _=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let g=_,d=M;g<d;g+=3){let m=o.getX(g),x=o.getX(g+1),y=o.getX(g+2);s=Bf(this,r,t,i,c,h,p,m,x,y),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,M=u.length;_<M;_++){let g=u[_],d=r[g.materialIndex],m=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=m,T=x;y<T;y+=3){let w=y,v=y+1,E=y+2;s=Bf(this,d,t,i,c,h,p,w,v,E),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let _=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let g=_,d=M;g<d;g+=3){let m=g,x=g+1,y=g+2;s=Bf(this,r,t,i,c,h,p,m,x,y),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}}};function QR(e,t,n,i,s,a,r,o){let l;if(t.side===Zn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Ka,o),l===null)return null;Pf.copy(o),Pf.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Pf);return c<n.near||c>n.far?null:{distance:c,point:Pf.clone(),object:e}}function Bf(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,Lf),e.getVertexPosition(l,Uf),e.getVertexPosition(c,Of);let h=QR(e,t,n,i,Lf,Uf,Of,qb);if(h){let p=new O;Va.getBarycoord(qb,Lf,Uf,Of,p),s&&(h.uv=Va.getInterpolatedAttribute(s,o,l,c,p,new vt)),a&&(h.uv1=Va.getInterpolatedAttribute(a,o,l,c,p,new vt)),r&&(h.normal=Va.getInterpolatedAttribute(r,o,l,c,p,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new O,materialIndex:0};Va.getNormal(Lf,Uf,Of,u.normal),h.face=u,h.barycoord=p}return h}var fl=class extends qn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=xn,h=xn,p,u){super(null,r,o,l,c,h,s,a,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cr=new ul,jR=new vt(.5,.5),zf=new O,Xa=class{constructor(t=new Qi,n=new Qi,i=new Qi,s=new Qi,a=new Qi,r=new Qi){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Ii,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],p=a[5],u=a[6],f=a[7],_=a[8],M=a[9],g=a[10],d=a[11],m=a[12],x=a[13],y=a[14],T=a[15];if(s[0].setComponents(c-r,f-h,d-_,T-m).normalize(),s[1].setComponents(c+r,f+h,d+_,T+m).normalize(),s[2].setComponents(c+o,f+p,d+M,T+x).normalize(),s[3].setComponents(c-o,f-p,d-M,T-x).normalize(),i)s[4].setComponents(l,u,g,y).normalize(),s[5].setComponents(c-l,f-u,d-g,T-y).normalize();else if(s[4].setComponents(c-l,f-u,d-g,T-y).normalize(),n===Ii)s[5].setComponents(c+l,f+u,d+g,T+y).normalize();else if(n===sl)s[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(t){Cr.center.set(0,0,0);let n=jR.distanceTo(t.center);return Cr.radius=.7071067811865476+n,Cr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(zf.x=s.normal.x>0?t.max.x:t.min.x,zf.y=s.normal.y>0?t.max.y:t.min.y,zf.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(zf)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Yb=new Ue,ad=class e{constructor(){this.coordinateSystem=Ii,this._frustums=[],this._count=0}setFromArrayCamera(t){let n=t.cameras,i=this._frustums;for(let s=0;s<n.length;s++){let a=n[s];Yb.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),i[s]===void 0&&(i[s]=new Xa),i[s].setFromProjectionMatrix(Yb,a.coordinateSystem,a.reversedDepth)}return this._count=n.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(t))return!0;return!1}containsPoint(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let n=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)n[s]===void 0&&(n[s]=new Xa),n[s].copy(i[s]);return this._count=t._count,this}clone(){return new e().copy(this)}};var $c=class extends qn{constructor(t=[],n=Br,i,s,a,r,o,l,c,h){super(t,n,i,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Dr=class extends qn{constructor(t,n,i,s,a,r,o,l,c){super(t,n,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var $s=class extends qn{constructor(t,n,i=$i,s,a,r,o=xn,l=xn,c,h=Qs,p=1){if(h!==Qs&&h!==ta)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,s,a,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new rl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},tu=class extends $s{constructor(t,n=$i,i=Br,s,a,r=xn,o=xn,l,c=Qs){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,n,i,s,a,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},eu=class extends qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},dl=class e extends yi{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],h=[],p=[],u=0,f=0;_("z","y","x",-1,-1,i,n,t,r,a,0),_("z","y","x",1,-1,i,n,-t,r,a,1),_("x","z","y",1,1,t,i,n,s,r,2),_("x","z","y",1,-1,t,i,-n,s,r,3),_("x","y","z",1,-1,t,n,i,s,a,4),_("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(h,3)),this.setAttribute("uv",new an(p,2));function _(M,g,d,m,x,y,T,w,v,E,I){let R=y/v,C=T/E,H=y/2,W=T/2,L=w/2,F=v+1,Z=E+1,V=0,it=0,k=new O;for(let Q=0;Q<Z;Q++){let et=Q*C-W;for(let wt=0;wt<F;wt++){let Pt=wt*R-H;k[M]=Pt*m,k[g]=et*x,k[d]=L,c.push(k.x,k.y,k.z),k[M]=0,k[g]=0,k[d]=w>0?1:-1,h.push(k.x,k.y,k.z),p.push(wt/v),p.push(1-Q/E),V+=1}}for(let Q=0;Q<E;Q++)for(let et=0;et<v;et++){let wt=u+et+F*Q,Pt=u+et+F*(Q+1),q=u+(et+1)+F*(Q+1),yt=u+(et+1)+F*Q;l.push(wt,Pt,yt),l.push(Pt,q,yt),it+=6}o.addGroup(f,it,I),f+=it,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var xi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Gt("Curve: .getPoint() not implemented.")}getPointAt(t,n){let i=this.getUtoTmapping(t);return this.getPoint(i,n)}getPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return n}getSpacedPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPointAt(i/t));return n}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,s=this.getPoint(0),a=0;n.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),a+=i.distanceTo(s),n.push(a),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){let i=this.getLengths(),s=0,a=i.length,r;n?r=n:r=t*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===r)return s/(a-1);let h=i[s],u=i[s+1]-h,f=(r-h)/u;return(s+f)/(a-1)}getTangent(t,n){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);let r=this.getPoint(s),o=this.getPoint(a),l=n||(r.isVector2?new vt:new O);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,n){let i=this.getUtoTmapping(t);return this.getTangent(i,n)}computeFrenetFrames(t,n=!1){let i=new O,s=[],a=[],r=[],o=new O,l=new Ue;for(let f=0;f<=t;f++){let _=f/t;s[f]=this.getTangentAt(_,new O)}a[0]=new O,r[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let f=1;f<=t;f++){if(a[f]=a[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(ce(s[f-1].dot(s[f]),-1,1));a[f].applyMatrix4(l.makeRotationAxis(o,_))}r[f].crossVectors(s[f],a[f])}if(n===!0){let f=Math.acos(ce(a[0].dot(a[t]),-1,1));f/=t,s[0].dot(o.crossVectors(a[0],a[t]))>0&&(f=-f);for(let _=1;_<=t;_++)a[_].applyMatrix4(l.makeRotationAxis(s[_],f*_)),r[_].crossVectors(s[_],a[_])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},pl=class extends xi{constructor(t=0,n=0,i=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,n=new vt){let i=n,s=Math.PI*2,a=this.aEndAngle-this.aStartAngle,r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);let o=this.aStartAngle+t*a,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*p+this.aX,c=u*p+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},rd=class extends pl{constructor(t,n,i,s,a,r){super(t,n,i,i,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}};function P_(){let e=0,t=0,n=0,i=0;function s(a,r,o,l){e=a,t=o,n=-3*a+3*r-2*o-l,i=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){s(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,h,p){let u=(r-a)/c-(o-a)/(c+h)+(o-r)/h,f=(o-r)/h-(l-r)/(h+p)+(l-o)/p;u*=h,f*=h,s(r,o,u,f)},calc:function(a){let r=a*a,o=r*a;return e+t*a+n*r+i*o}}}var Zb=new O,Jb=new O,Y0=new P_,Z0=new P_,J0=new P_,ml=class extends xi{constructor(t=[],n=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=i,this.tension=s}getPoint(t,n=new O){let i=n,s=this.points,a=s.length,r=(a-(this.closed?0:1))*t,o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%a]:(Jb.subVectors(s[0],s[1]).add(s[0]),c=Jb);let p=s[o%a],u=s[(o+1)%a];if(this.closed||o+2<a?h=s[(o+2)%a]:(Zb.subVectors(s[a-1],s[a-2]).add(s[a-1]),h=Zb),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(p),f),M=Math.pow(p.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);M<1e-4&&(M=1),_<1e-4&&(_=M),g<1e-4&&(g=M),Y0.initNonuniformCatmullRom(c.x,p.x,u.x,h.x,_,M,g),Z0.initNonuniformCatmullRom(c.y,p.y,u.y,h.y,_,M,g),J0.initNonuniformCatmullRom(c.z,p.z,u.z,h.z,_,M,g)}else this.curveType==="catmullrom"&&(Y0.initCatmullRom(c.x,p.x,u.x,h.x,this.tension),Z0.initCatmullRom(c.y,p.y,u.y,h.y,this.tension),J0.initCatmullRom(c.z,p.z,u.z,h.z,this.tension));return i.set(Y0.calc(l),Z0.calc(l),J0.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Kb(e,t,n,i,s){let a=(i-t)*.5,r=(s-n)*.5,o=e*e,l=e*o;return(2*n-2*i+a+r)*l+(-3*n+3*i-2*a-r)*o+a*e+n}function $R(e,t){let n=1-e;return n*n*t}function tC(e,t){return 2*(1-e)*e*t}function eC(e,t){return e*e*t}function kc(e,t,n,i){return $R(e,t)+tC(e,n)+eC(e,i)}function nC(e,t){let n=1-e;return n*n*n*t}function iC(e,t){let n=1-e;return 3*n*n*e*t}function sC(e,t){return 3*(1-e)*e*e*t}function aC(e,t){return e*e*e*t}function Xc(e,t,n,i,s){return nC(e,t)+iC(e,n)+sC(e,i)+aC(e,s)}var nu=class extends xi{constructor(t=new vt,n=new vt,i=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new vt){let i=n,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(Xc(t,s.x,a.x,r.x,o.x),Xc(t,s.y,a.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},od=class extends xi{constructor(t=new O,n=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new O){let i=n,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(Xc(t,s.x,a.x,r.x,o.x),Xc(t,s.y,a.y,r.y,o.y),Xc(t,s.z,a.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},iu=class extends xi{constructor(t=new vt,n=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new vt){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new vt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ld=class extends xi{constructor(t=new O,n=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new O){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new O){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},su=class extends xi{constructor(t=new vt,n=new vt,i=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new vt){let i=n,s=this.v0,a=this.v1,r=this.v2;return i.set(kc(t,s.x,a.x,r.x),kc(t,s.y,a.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},cd=class extends xi{constructor(t=new O,n=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new O){let i=n,s=this.v0,a=this.v1,r=this.v2;return i.set(kc(t,s.x,a.x,r.x),kc(t,s.y,a.y,r.y),kc(t,s.z,a.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},au=class extends xi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new vt){let i=n,s=this.points,a=(s.length-1)*t,r=Math.floor(a),o=a-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],p=s[r>s.length-3?s.length-1:r+2];return i.set(Kb(o,l.x,c.x,h.x,p.x),Kb(o,l.y,c.y,h.y,p.y)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new vt().fromArray(s))}return this}},e_=Object.freeze({__proto__:null,ArcCurve:rd,CatmullRomCurve3:ml,CubicBezierCurve:nu,CubicBezierCurve3:od,EllipseCurve:pl,LineCurve:iu,LineCurve3:ld,QuadraticBezierCurve:su,QuadraticBezierCurve3:cd,SplineCurve:au}),ud=class extends xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new e_[i](n,t))}return this}getPoint(t,n){let i=t*this.getLength(),s=this.getCurveLengths(),a=0;for(;a<s.length;){if(s[a]>=i){let r=s[a]-i,o=this.curves[a],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,n)}a++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],n=0;for(let i=0,s=this.curves.length;i<s;i++)n+=this.curves[i].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){let n=[],i;for(let s=0,a=this.curves;s<a.length;s++){let r=a[s],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(n.push(h),i=h)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){let s=t.curves[n];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,i=this.curves.length;n<i;n++){let s=this.curves[n];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){let s=t.curves[n];this.curves.push(new e_[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Lr=class extends ud{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,i=t.length;n<i;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){let i=new iu(this.currentPoint.clone(),new vt(t,n));return this.curves.push(i),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,i,s){let a=new su(this.currentPoint.clone(),new vt(t,n),new vt(i,s));return this.curves.push(a),this.currentPoint.set(i,s),this}bezierCurveTo(t,n,i,s,a,r){let o=new nu(this.currentPoint.clone(),new vt(t,n),new vt(i,s),new vt(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(t){let n=[this.currentPoint.clone()].concat(t),i=new au(n);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,i,s,a,r){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,n+l,i,s,a,r),this}absarc(t,n,i,s,a,r){return this.absellipse(t,n,i,i,s,a,r),this}ellipse(t,n,i,s,a,r,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,n+h,i,s,a,r,o,l),this}absellipse(t,n,i,s,a,r,o,l){let c=new pl(t,n,i,s,a,r,o,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Wa=class extends Lr{constructor(t){super(t),this.uuid=Al(),this.type="Shape",this.holes=[]}getPointsHoles(t){let n=[];for(let i=0,s=this.holes.length;i<s;i++)n[i]=this.holes[i].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){let s=t.holes[n];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,i=this.holes.length;n<i;n++){let s=this.holes[n];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){let s=t.holes[n];this.holes.push(new Lr().fromJSON(s))}return this}};function rC(e,t,n=2){let i=t&&t.length,s=i?t[0]*n:e.length,a=Z1(e,0,s,n,!0),r=[];if(!a||a.next===a.prev)return r;let o,l,c;if(i&&(a=hC(e,t,a,n)),e.length>80*n){o=e[0],l=e[1];let h=o,p=l;for(let u=n;u<s;u+=n){let f=e[u],_=e[u+1];f<o&&(o=f),_<l&&(l=_),f>h&&(h=f),_>p&&(p=_)}c=Math.max(h-o,p-l),c=c!==0?32767/c:0}return ru(a,r,n,o,l,c,0),r}function Z1(e,t,n,i,s){let a;if(s===MC(e,t,n,i)>0)for(let r=t;r<n;r+=i)a=Qb(r/i|0,e[r],e[r+1],a);else for(let r=n-i;r>=t;r-=i)a=Qb(r/i|0,e[r],e[r+1],a);return a&&gl(a,a.next)&&(lu(a),a=a.next),a}function Ur(e,t){if(!e)return e;t||(t=e);let n=e,i;do if(i=!1,!n.steiner&&(gl(n,n.next)||Je(n.prev,n,n.next)===0)){if(lu(n),n=t=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==t);return t}function ru(e,t,n,i,s,a,r){if(!e)return;!r&&a&&gC(e,i,s,a);let o=e;for(;e.prev!==e.next;){let l=e.prev,c=e.next;if(a?lC(e,i,s,a):oC(e)){t.push(l.i,e.i,c.i),lu(e),e=c.next,o=c.next;continue}if(e=c,e===o){r?r===1?(e=cC(Ur(e),t),ru(e,t,n,i,s,a,2)):r===2&&uC(e,t,n,i,s,a):ru(Ur(e),t,n,i,s,a,1);break}}}function oC(e){let t=e.prev,n=e,i=e.next;if(Je(t,n,i)>=0)return!1;let s=t.x,a=n.x,r=i.x,o=t.y,l=n.y,c=i.y,h=Math.min(s,a,r),p=Math.min(o,l,c),u=Math.max(s,a,r),f=Math.max(o,l,c),_=i.next;for(;_!==t;){if(_.x>=h&&_.x<=u&&_.y>=p&&_.y<=f&&Gc(s,o,a,l,r,c,_.x,_.y)&&Je(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function lC(e,t,n,i){let s=e.prev,a=e,r=e.next;if(Je(s,a,r)>=0)return!1;let o=s.x,l=a.x,c=r.x,h=s.y,p=a.y,u=r.y,f=Math.min(o,l,c),_=Math.min(h,p,u),M=Math.max(o,l,c),g=Math.max(h,p,u),d=n_(f,_,t,n,i),m=n_(M,g,t,n,i),x=e.prevZ,y=e.nextZ;for(;x&&x.z>=d&&y&&y.z<=m;){if(x.x>=f&&x.x<=M&&x.y>=_&&x.y<=g&&x!==s&&x!==r&&Gc(o,h,l,p,c,u,x.x,x.y)&&Je(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=f&&y.x<=M&&y.y>=_&&y.y<=g&&y!==s&&y!==r&&Gc(o,h,l,p,c,u,y.x,y.y)&&Je(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=d;){if(x.x>=f&&x.x<=M&&x.y>=_&&x.y<=g&&x!==s&&x!==r&&Gc(o,h,l,p,c,u,x.x,x.y)&&Je(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=m;){if(y.x>=f&&y.x<=M&&y.y>=_&&y.y<=g&&y!==s&&y!==r&&Gc(o,h,l,p,c,u,y.x,y.y)&&Je(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function cC(e,t){let n=e;do{let i=n.prev,s=n.next.next;!gl(i,s)&&K1(i,n,n.next,s)&&ou(i,s)&&ou(s,i)&&(t.push(i.i,n.i,s.i),lu(n),lu(n.next),n=e=s),n=n.next}while(n!==e);return Ur(n)}function uC(e,t,n,i,s,a){let r=e;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&yC(r,o)){let l=Q1(r,o);r=Ur(r,r.next),l=Ur(l,l.next),ru(r,t,n,i,s,a,0),ru(l,t,n,i,s,a,0);return}o=o.next}r=r.next}while(r!==e)}function hC(e,t,n,i){let s=[];for(let a=0,r=t.length;a<r;a++){let o=t[a]*i,l=a<r-1?t[a+1]*i:e.length,c=Z1(e,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(vC(c))}s.sort(fC);for(let a=0;a<s.length;a++)n=dC(s[a],n);return n}function fC(e,t){let n=e.x-t.x;if(n===0&&(n=e.y-t.y,n===0)){let i=(e.next.y-e.y)/(e.next.x-e.x),s=(t.next.y-t.y)/(t.next.x-t.x);n=i-s}return n}function dC(e,t){let n=pC(e,t);if(!n)return t;let i=Q1(n,e);return Ur(i,i.next),Ur(n,n.next)}function pC(e,t){let n=t,i=e.x,s=e.y,a=-1/0,r;if(gl(e,n))return n;do{if(gl(e,n.next))return n.next;if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){let p=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(p<=i&&p>a&&(a=p,r=n.x<n.next.x?n:n.next,p===i))return r}n=n.next}while(n!==t);if(!r)return null;let o=r,l=r.x,c=r.y,h=1/0;n=r;do{if(i>=n.x&&n.x>=l&&i!==n.x&&J1(s<c?i:a,s,l,c,s<c?a:i,s,n.x,n.y)){let p=Math.abs(s-n.y)/(i-n.x);ou(n,e)&&(p<h||p===h&&(n.x>r.x||n.x===r.x&&mC(r,n)))&&(r=n,h=p)}n=n.next}while(n!==o);return r}function mC(e,t){return Je(e.prev,e,t.prev)<0&&Je(t.next,e,e.next)<0}function gC(e,t,n,i){let s=e;do s.z===0&&(s.z=n_(s.x,s.y,t,n,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==e);s.prevZ.nextZ=null,s.prevZ=null,_C(s)}function _C(e){let t,n=1;do{let i=e,s;e=null;let a=null;for(t=0;i;){t++;let r=i,o=0;for(let c=0;c<n&&(o++,r=r.nextZ,!!r);c++);let l=n;for(;o>0||l>0&&r;)o!==0&&(l===0||!r||i.z<=r.z)?(s=i,i=i.nextZ,o--):(s=r,r=r.nextZ,l--),a?a.nextZ=s:e=s,s.prevZ=a,a=s;i=r}a.nextZ=null,n*=2}while(t>1);return e}function n_(e,t,n,i,s){return e=(e-n)*s|0,t=(t-i)*s|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function vC(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function J1(e,t,n,i,s,a,r,o){return(s-r)*(t-o)>=(e-r)*(a-o)&&(e-r)*(i-o)>=(n-r)*(t-o)&&(n-r)*(a-o)>=(s-r)*(i-o)}function Gc(e,t,n,i,s,a,r,o){return!(e===r&&t===o)&&J1(e,t,n,i,s,a,r,o)}function yC(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!xC(e,t)&&(ou(e,t)&&ou(t,e)&&SC(e,t)&&(Je(e.prev,e,t.prev)||Je(e,t.prev,t))||gl(e,t)&&Je(e.prev,e,e.next)>0&&Je(t.prev,t,t.next)>0)}function Je(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function gl(e,t){return e.x===t.x&&e.y===t.y}function K1(e,t,n,i){let s=Hf(Je(e,t,n)),a=Hf(Je(e,t,i)),r=Hf(Je(n,i,e)),o=Hf(Je(n,i,t));return!!(s!==a&&r!==o||s===0&&Ff(e,n,t)||a===0&&Ff(e,i,t)||r===0&&Ff(n,e,i)||o===0&&Ff(n,t,i))}function Ff(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Hf(e){return e>0?1:e<0?-1:0}function xC(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&K1(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function ou(e,t){return Je(e.prev,e,e.next)<0?Je(e,t,e.next)>=0&&Je(e,e.prev,t)>=0:Je(e,t,e.prev)<0||Je(e,e.next,t)<0}function SC(e,t){let n=e,i=!1,s=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&s<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==e);return i}function Q1(e,t){let n=i_(e.i,e.x,e.y),i=i_(t.i,t.x,t.y),s=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=s,s.prev=n,i.next=n,n.prev=i,a.next=i,i.prev=a,i}function Qb(e,t,n,i){let s=i_(e,t,n);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function lu(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function i_(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function MC(e,t,n,i){let s=0;for(let a=t,r=n-i;a<n;a+=i)s+=(e[r]-e[a])*(e[a+1]+e[r+1]),r=a;return s}var s_=class{static triangulate(t,n,i=2){return rC(t,n,i)}},Ss=class e{static area(t){let n=t.length,i=0;for(let s=n-1,a=0;a<n;s=a++)i+=t[s].x*t[a].y-t[a].x*t[s].y;return i*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(t,n){let i=[],s=[],a=[];jb(t),$b(i,t);let r=t.length;n.forEach(jb);for(let l=0;l<n.length;l++)s.push(r),r+=n[l].length,$b(i,n[l]);let o=s_.triangulate(i,s);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}};function jb(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function $b(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var _l=class e extends yi{constructor(t=new Wa([new vt(.5,.5),new vt(-.5,.5),new vt(-.5,-.5),new vt(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];let i=this,s=[],a=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];r(c)}this.setAttribute("position",new an(s,3)),this.setAttribute("uv",new an(a,2)),this.computeVertexNormals();function r(o){let l=[],c=n.curveSegments!==void 0?n.curveSegments:12,h=n.steps!==void 0?n.steps:1,p=n.depth!==void 0?n.depth:1,u=n.bevelEnabled!==void 0?n.bevelEnabled:!0,f=n.bevelThickness!==void 0?n.bevelThickness:.2,_=n.bevelSize!==void 0?n.bevelSize:f-.1,M=n.bevelOffset!==void 0?n.bevelOffset:0,g=n.bevelSegments!==void 0?n.bevelSegments:3,d=n.extrudePath,m=n.UVGenerator!==void 0?n.UVGenerator:bC,x,y=!1,T,w,v,E;if(d){x=d.getSpacedPoints(h),y=!0,u=!1;let tt=d.isCatmullRomCurve3?d.closed:!1;T=d.computeFrenetFrames(h,tt),w=new O,v=new O,E=new O}u||(g=0,f=0,_=0,M=0);let I=o.extractPoints(c),R=I.shape,C=I.holes;if(!Ss.isClockWise(R)){R=R.reverse();for(let tt=0,lt=C.length;tt<lt;tt++){let ot=C[tt];Ss.isClockWise(ot)&&(C[tt]=ot.reverse())}}function W(tt){let ot=10000000000000001e-36,Et=tt[0];for(let ct=1;ct<=tt.length;ct++){let Wt=ct%tt.length,Nt=tt[Wt],ie=Nt.x-Et.x,se=Nt.y-Et.y,le=ie*ie+se*se,U=Math.max(Math.abs(Nt.x),Math.abs(Nt.y),Math.abs(Et.x),Math.abs(Et.y)),It=ot*U*U;if(le<=It){tt.splice(Wt,1),ct--;continue}Et=Nt}}W(R),C.forEach(W);let L=C.length,F=R;for(let tt=0;tt<L;tt++){let lt=C[tt];R=R.concat(lt)}function Z(tt,lt,ot){return lt||Xt("ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(lt,ot)}let V=R.length;function it(tt,lt,ot){let Et,ct,Wt,Nt=tt.x-lt.x,ie=tt.y-lt.y,se=ot.x-tt.x,le=ot.y-tt.y,U=Nt*Nt+ie*ie,It=Nt*le-ie*se;if(Math.abs(It)>Number.EPSILON){let te=Math.sqrt(U),xe=Math.sqrt(se*se+le*le),_t=lt.x-ie/te,Pe=lt.y+Nt/te,Ut=ot.x-le/xe,Dt=ot.y+se/xe,A=((Ut-_t)*le-(Dt-Pe)*se)/(Nt*le-ie*se);Et=_t+Nt*A-tt.x,ct=Pe+ie*A-tt.y;let S=Et*Et+ct*ct;if(S<=2)return new vt(Et,ct);Wt=Math.sqrt(S/2)}else{let te=!1;Nt>Number.EPSILON?se>Number.EPSILON&&(te=!0):Nt<-Number.EPSILON?se<-Number.EPSILON&&(te=!0):Math.sign(ie)===Math.sign(le)&&(te=!0),te?(Et=-ie,ct=Nt,Wt=Math.sqrt(U)):(Et=Nt,ct=ie,Wt=Math.sqrt(U/2))}return new vt(Et/Wt,ct/Wt)}let k=[];for(let tt=0,lt=F.length,ot=lt-1,Et=tt+1;tt<lt;tt++,ot++,Et++)ot===lt&&(ot=0),Et===lt&&(Et=0),k[tt]=it(F[tt],F[ot],F[Et]);let Q=[],et,wt=k.concat();for(let tt=0,lt=L;tt<lt;tt++){let ot=C[tt];et=[];for(let Et=0,ct=ot.length,Wt=ct-1,Nt=Et+1;Et<ct;Et++,Wt++,Nt++)Wt===ct&&(Wt=0),Nt===ct&&(Nt=0),et[Et]=it(ot[Et],ot[Wt],ot[Nt]);Q.push(et),wt=wt.concat(et)}let Pt;if(g===0)Pt=Ss.triangulateShape(F,C);else{let tt=[],lt=[];for(let ot=0;ot<g;ot++){let Et=ot/g,ct=f*Math.cos(Et*Math.PI/2),Wt=_*Math.sin(Et*Math.PI/2)+M;for(let Nt=0,ie=F.length;Nt<ie;Nt++){let se=Z(F[Nt],k[Nt],Wt);Ft(se.x,se.y,-ct),Et===0&&tt.push(se)}for(let Nt=0,ie=L;Nt<ie;Nt++){let se=C[Nt];et=Q[Nt];let le=[];for(let U=0,It=se.length;U<It;U++){let te=Z(se[U],et[U],Wt);Ft(te.x,te.y,-ct),Et===0&&le.push(te)}Et===0&&lt.push(le)}}Pt=Ss.triangulateShape(tt,lt)}let q=Pt.length,yt=_+M;for(let tt=0;tt<V;tt++){let lt=u?Z(R[tt],wt[tt],yt):R[tt];y?(v.copy(T.normals[0]).multiplyScalar(lt.x),w.copy(T.binormals[0]).multiplyScalar(lt.y),E.copy(x[0]).add(v).add(w),Ft(E.x,E.y,E.z)):Ft(lt.x,lt.y,0)}for(let tt=1;tt<=h;tt++)for(let lt=0;lt<V;lt++){let ot=u?Z(R[lt],wt[lt],yt):R[lt];y?(v.copy(T.normals[tt]).multiplyScalar(ot.x),w.copy(T.binormals[tt]).multiplyScalar(ot.y),E.copy(x[tt]).add(v).add(w),Ft(E.x,E.y,E.z)):Ft(ot.x,ot.y,p/h*tt)}for(let tt=g-1;tt>=0;tt--){let lt=tt/g,ot=f*Math.cos(lt*Math.PI/2),Et=_*Math.sin(lt*Math.PI/2)+M;for(let ct=0,Wt=F.length;ct<Wt;ct++){let Nt=Z(F[ct],k[ct],Et);Ft(Nt.x,Nt.y,p+ot)}for(let ct=0,Wt=C.length;ct<Wt;ct++){let Nt=C[ct];et=Q[ct];for(let ie=0,se=Nt.length;ie<se;ie++){let le=Z(Nt[ie],et[ie],Et);y?Ft(le.x,le.y+x[h-1].y,x[h-1].x+ot):Ft(le.x,le.y,p+ot)}}}At(),Bt();function At(){let tt=s.length/3;if(u){let lt=0,ot=V*lt;for(let Et=0;Et<q;Et++){let ct=Pt[Et];be(ct[2]+ot,ct[1]+ot,ct[0]+ot)}lt=h+g*2,ot=V*lt;for(let Et=0;Et<q;Et++){let ct=Pt[Et];be(ct[0]+ot,ct[1]+ot,ct[2]+ot)}}else{for(let lt=0;lt<q;lt++){let ot=Pt[lt];be(ot[2],ot[1],ot[0])}for(let lt=0;lt<q;lt++){let ot=Pt[lt];be(ot[0]+V*h,ot[1]+V*h,ot[2]+V*h)}}i.addGroup(tt,s.length/3-tt,0)}function Bt(){let tt=s.length/3,lt=0;St(F,lt),lt+=F.length;for(let ot=0,Et=C.length;ot<Et;ot++){let ct=C[ot];St(ct,lt),lt+=ct.length}i.addGroup(tt,s.length/3-tt,1)}function St(tt,lt){let ot=tt.length;for(;--ot>=0;){let Et=ot,ct=ot-1;ct<0&&(ct=tt.length-1);for(let Wt=0,Nt=h+g*2;Wt<Nt;Wt++){let ie=V*Wt,se=V*(Wt+1),le=lt+Et+ie,U=lt+ct+ie,It=lt+ct+se,te=lt+Et+se;Ht(le,U,It,te)}}}function Ft(tt,lt,ot){l.push(tt),l.push(lt),l.push(ot)}function be(tt,lt,ot){Yt(tt),Yt(lt),Yt(ot);let Et=s.length/3,ct=m.generateTopUV(i,s,Et-3,Et-2,Et-1);jt(ct[0]),jt(ct[1]),jt(ct[2])}function Ht(tt,lt,ot,Et){Yt(tt),Yt(lt),Yt(Et),Yt(lt),Yt(ot),Yt(Et);let ct=s.length/3,Wt=m.generateSideWallUV(i,s,ct-6,ct-3,ct-2,ct-1);jt(Wt[0]),jt(Wt[1]),jt(Wt[3]),jt(Wt[1]),jt(Wt[2]),jt(Wt[3])}function Yt(tt){s.push(l[tt*3+0]),s.push(l[tt*3+1]),s.push(l[tt*3+2])}function jt(tt){a.push(tt.x),a.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return EC(n,i,t)}static fromJSON(t,n){let i=[];for(let a=0,r=t.shapes.length;a<r;a++){let o=n[t.shapes[a]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new e_[s.type]().fromJSON(s)),new e(i,t.options)}},bC={generateTopUV:function(e,t,n,i,s){let a=t[n*3],r=t[n*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new vt(a,r),new vt(o,l),new vt(c,h)]},generateSideWallUV:function(e,t,n,i,s,a){let r=t[n*3],o=t[n*3+1],l=t[n*3+2],c=t[i*3],h=t[i*3+1],p=t[i*3+2],u=t[s*3],f=t[s*3+1],_=t[s*3+2],M=t[a*3],g=t[a*3+1],d=t[a*3+2];return Math.abs(o-h)<Math.abs(r-c)?[new vt(r,1-l),new vt(c,1-p),new vt(u,1-_),new vt(M,1-d)]:[new vt(o,1-l),new vt(h,1-p),new vt(f,1-_),new vt(g,1-d)]}};function EC(e,t,n){if(n.shapes=[],Array.isArray(e))for(let i=0,s=e.length;i<s;i++){let a=e[i];n.shapes.push(a.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Or=class e extends yi{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,p=t/o,u=n/l,f=[],_=[],M=[],g=[];for(let d=0;d<h;d++){let m=d*u-r;for(let x=0;x<c;x++){let y=x*p-a;_.push(y,-m,0),M.push(0,0,1),g.push(x/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let m=0;m<o;m++){let x=m+c*d,y=m+c*(d+1),T=m+1+c*(d+1),w=m+1+c*d;f.push(x,y,w),f.push(y,T,w)}this.setIndex(f),this.setAttribute("position",new an(_,3)),this.setAttribute("normal",new an(M,3)),this.setAttribute("uv",new an(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var cu=class e extends yi{constructor(t=new Wa([new vt(0,.5),new vt(-.5,-.5),new vt(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:n};let i=[],s=[],a=[],r=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new an(s,3)),this.setAttribute("normal",new an(a,3)),this.setAttribute("uv",new an(r,2));function c(h){let p=s.length/3,u=h.extractPoints(n),f=u.shape,_=u.holes;Ss.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,d=_.length;g<d;g++){let m=_[g];Ss.isClockWise(m)===!0&&(_[g]=m.reverse())}let M=Ss.triangulateShape(f,_);for(let g=0,d=_.length;g<d;g++){let m=_[g];f=f.concat(m)}for(let g=0,d=f.length;g<d;g++){let m=f[g];s.push(m.x,m.y,0),a.push(0,0,1),r.push(m.x,m.y)}for(let g=0,d=M.length;g<d;g++){let m=M[g],x=m[0]+p,y=m[1]+p,T=m[2]+p;i.push(x,y,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),n=this.parameters.shapes;return TC(n,t)}static fromJSON(t,n){let i=[];for(let s=0,a=t.shapes.length;s<a;s++){let r=n[t.shapes[s]];i.push(r)}return new e(i,t.curveSegments)}};function TC(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,i=e.length;n<i;n++){let s=e[n];t.shapes.push(s.uuid)}else t.shapes.push(e.uuid);return t}var vl=class e extends yi{constructor(t=1,n=.4,i=12,s=48,a=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:s,arc:a,thetaStart:r,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],p=[],u=new O,f=new O,_=new O;for(let M=0;M<=i;M++){let g=r+M/i*o;for(let d=0;d<=s;d++){let m=d/s*a;f.x=(t+n*Math.cos(g))*Math.cos(m),f.y=(t+n*Math.cos(g))*Math.sin(m),f.z=n*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(m),u.y=t*Math.sin(m),_.subVectors(f,u).normalize(),h.push(_.x,_.y,_.z),p.push(d/s),p.push(M/i)}}for(let M=1;M<=i;M++)for(let g=1;g<=s;g++){let d=(s+1)*M+g-1,m=(s+1)*(M-1)+g-1,x=(s+1)*(M-1)+g,y=(s+1)*M+g;l.push(d,m,y),l.push(m,x,y)}this.setIndex(l),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(h,3)),this.setAttribute("uv",new an(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Fr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(t1(s))s.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(t1(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[n][i]=a}else t[n][i]=s.slice();else t[n][i]=s}}return t}function zn(e){let t={};for(let n=0;n<e.length;n++){let i=Fr(e[n]);for(let s in i)t[s]=i[s]}return t}function t1(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function AC(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function B_(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}var j1={clone:Fr,merge:zn},wC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Es=class extends ka{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wC,this.fragmentShader=RC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fr(t.uniforms),this.uniformsGroups=AC(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new ee().setHex(s.value);break;case"v2":this.uniforms[i].value=new vt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new O().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Xe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Jt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ue().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},hd=class extends Es{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},yl=class extends ka{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dp,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new js,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},qa=class extends yl{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new vt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ce(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Nr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Nr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var fd=class extends ka{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=U1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},dd=class extends ka{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function $o(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Vf(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ya=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},pd=class extends Ya{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:j0,endingEnd:j0}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case $0:a=t,o=2*n-i;break;case t_:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case $0:r=t,l=2*i-n;break;case t_:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*h,this._offsetNext=r*h}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,f=this._weightNext,_=(i-n)/(s-n),M=_*_,g=M*_,d=-u*g+2*u*M-u*_,m=(1+u)*g+(-1.5-2*u)*M+(-.5+u)*_+1,x=(-1-f)*g+(1.5+f)*M+.5*_,y=f*g-f*M;for(let T=0;T!==o;++T)a[T]=d*r[h+T]+m*r[c+T]+x*r[l+T]+y*r[p+T];return a}},md=class extends Ya{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-n)/(s-n),p=1-h;for(let u=0;u!==o;++u)a[u]=r[c+u]*p+r[l+u]*h;return a}},gd=class extends Ya{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},_d=class extends Ya{interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let _=(i-n)/(s-n),M=1-_;for(let g=0;g!==o;++g)a[g]=r[c+g]*M+r[l+g]*_;return a}let u=o*2,f=t-1;for(let _=0;_!==o;++_){let M=r[c+_],g=r[l+_],d=f*u+_*2,m=p[d],x=p[d+1],y=t*u+_*2,T=h[y],w=h[y+1],v=NC(i,n,m,T,s);a[_]=$1(v,M,x,w,g)}return a}};function $1(e,t,n,i,s){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*i+e*e*e*s}function CC(e,t,n,i,s){let a=1-e;return 3*a*a*(n-t)+6*a*e*(i-n)+3*e*e*(s-i)}function NC(e,t,n,i,s){let a=(e-t)/(s-t);for(let r=0;r<8;r++){let o=$1(a,t,n,i,s)-e;if(Math.abs(o)<1e-10)break;let l=CC(a,t,n,i,s);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}var Si=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$o(n,this.TimeBufferType),this.values=$o(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:$o(t.times,Array),values:$o(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Vf(t.settings)&&(i.settings={inTangents:$o(t.settings.inTangents,Array),outTangents:$o(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new gd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new md(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new _d(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case Wc:n=this.InterpolantFactoryMethodDiscrete;break;case td:n=this.InterpolantFactoryMethodLinear;break;case Xf:n=this.InterpolantFactoryMethodSmooth;break;case Q0:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Gt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wc;case this.InterpolantFactoryMethodLinear:return td;case this.InterpolantFactoryMethodSmooth:return Xf;case this.InterpolantFactoryMethodBezier:return Q0}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t;Vf(this.settings)&&(e1(this.settings.inTangents,t),e1(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t;Vf(this.settings)&&(n1(this.settings.inTangents,t),n1(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Xt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Xt("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Xt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Xt("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&DR(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Xt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Xf,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,u=p-i,f=p+i;for(let _=0;_!==i;++_){let M=n[p+_];if(M!==n[u+_]||M!==n[f+_]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,u=r*i;for(let f=0;f!==i;++f)n[u+f]=n[p+f]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,Vf(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function e1(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]+=t}function n1(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}Si.prototype.ValueTypeName="";Si.prototype.TimeBufferType=Float32Array;Si.prototype.ValueBufferType=Float32Array;Si.prototype.DefaultInterpolation=td;var Za=class extends Si{constructor(t,n,i){super(t,n,i)}};Za.prototype.ValueTypeName="bool";Za.prototype.ValueBufferType=Array;Za.prototype.DefaultInterpolation=Wc;Za.prototype.InterpolantFactoryMethodLinear=void 0;Za.prototype.InterpolantFactoryMethodSmooth=void 0;var vd=class extends Si{constructor(t,n,i,s){super(t,n,i,s)}};vd.prototype.ValueTypeName="color";var yd=class extends Si{constructor(t,n,i,s){super(t,n,i,s)}};yd.prototype.ValueTypeName="number";var xd=class extends Ya{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let h=c+o;c!==h;c+=4)Wn.slerpFlat(a,0,r,c-o,r,c,l);return a}},uu=class extends Si{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new xd(this.times,this.values,this.getValueSize(),t)}};uu.prototype.ValueTypeName="quaternion";uu.prototype.InterpolantFactoryMethodSmooth=void 0;var Ja=class extends Si{constructor(t,n,i){super(t,n,i)}};Ja.prototype.ValueTypeName="string";Ja.prototype.ValueBufferType=Array;Ja.prototype.DefaultInterpolation=Wc;Ja.prototype.InterpolantFactoryMethodLinear=void 0;Ja.prototype.InterpolantFactoryMethodSmooth=void 0;var Sd=class extends Si{constructor(t,n,i,s){super(t,n,i,s)}};Sd.prototype.ValueTypeName="vector";var Md=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){let f=c[p],_=c[p+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},tE=new Md,bd=class{constructor(t){this.manager=t!==void 0?t:tE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};bd.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ed=class extends Yn{static registerNode(t){this.prototype._lightNode=t}constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=n}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}};var K0=new Ue,i1=new O,s1=new O,Td=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xa,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera;i1.setFromMatrixPosition(t.matrixWorld),n.position.copy(i1),s1.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(s1),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(t,n,i,s){K0.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(K0,t.coordinateSystem,t.reversedDepth);let a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,l=s?s.x/a.x:0,c=s?s.y/a.y:0;t.coordinateSystem===sl||t.reversedDepth?n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(K0)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Gf=new O,kf=new Wn,ys=new O,hu=class extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Gf,kf,ys),ys.x===1&&ys.y===1&&ys.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gf,kf,ys.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(Gf,kf,ys),ys.x===1&&ys.y===1&&ys.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gf,kf,ys.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ha=new O,a1=new vt,r1=new vt,Xn=class extends hu{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=ed*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(A0*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ed*2*Math.atan(Math.tan(A0*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z),Ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z)}getViewSize(t,n){return this.getViewBounds(t,a1,r1),n.subVectors(r1,a1)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(A0*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var fu=class extends hu{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},a_=class extends Td{constructor(){super(new fu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xl=class extends Ed{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yn.DEFAULT_UP),this.updateMatrix(),this.target=new Yn,this.shadow=new a_}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}};var tl=-90,el=1,Sl=class extends Yn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xn(tl,el,t,n);s.layers=this.layers,this.add(s);let a=new Xn(tl,el,t,n);a.layers=this.layers,this.add(a);let r=new Xn(tl,el,t,n);r.layers=this.layers,this.add(r);let o=new Xn(tl,el,t,n);o.layers=this.layers,this.add(o);let l=new Xn(tl,el,t,n);l.layers=this.layers,this.add(l);let c=new Xn(tl,el,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===sl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,h]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.mipmapsAutoUpdate=M,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(p,u,f),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Ad=class extends Xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var z_="\\[\\]\\.:\\/",DC=new RegExp("["+z_+"]","g"),F_="[^"+z_+"]",LC="[^"+z_.replace("\\.","")+"]",UC=/((?:WC+[\/:])*)/.source.replace("WC",F_),OC=/(WCOD+)?/.source.replace("WCOD",LC),IC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",F_),PC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",F_),BC=new RegExp("^"+UC+OC+IC+PC+"$"),zC=["material","materials","bones","map"],r_=class{constructor(t,n,i){let s=i||Ve.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Ve=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(DC,"")}static parseTrackName(t){let n=BC.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);zC.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Gt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Xt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Xt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Xt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Xt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Xt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;Xt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ve.Composite=r_;Ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ve.prototype.GetterByBindingType=[Ve.prototype._getValue_direct,Ve.prototype._getValue_array,Ve.prototype._getValue_arrayElement,Ve.prototype._getValue_toArray];Ve.prototype.SetterByBindingTypeAndVersioning=[[Ve.prototype._setValue_direct,Ve.prototype._setValue_direct_setNeedsUpdate,Ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_array,Ve.prototype._setValue_array_setNeedsUpdate,Ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_arrayElement,Ve.prototype._setValue_arrayElement_setNeedsUpdate,Ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_fromArray,Ve.prototype._setValue_fromArray_setNeedsUpdate,Ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cU=new Float32Array(1);var o1=new Ue,du=class{constructor(t,n,i=0,s=1/0){this.ray=new jc(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new ol,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Xt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return o1.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(o1),this}intersectObject(t,n=!0,i=[]){return o_(t,this,i,n),i.sort(l1),i}intersectObjects(t,n=!0,i=[]){for(let s=0,a=t.length;s<a;s++)o_(t[s],this,i,n);return i.sort(l1),i}};function l1(e,t){return e.distance-t.distance}function o_(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){let a=e.children;for(let r=0,o=a.length;r<o;r++)o_(a[r],t,n,!0)}}var W_=class W_{constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let a=this.elements;return a[0]=t,a[2]=n,a[1]=i,a[3]=s,this}};W_.prototype.isMatrix2=!0;var l_=W_;function H_(e,t,n,i){let s=FC(i);switch(n){case w_:return e*t;case C_:return e*t/s.components*s.byteLength;case Od:return e*t/s.components*s.byteLength;case Qa:return e*t*2/s.components*s.byteLength;case Id:return e*t*2/s.components*s.byteLength;case R_:return e*t*3/s.components*s.byteLength;case ns:return e*t*4/s.components*s.byteLength;case Pd:return e*t*4/s.components*s.byteLength;case _u:case vu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case yu:case xu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case zd:case Hd:return Math.max(e,16)*Math.max(t,8)/4;case Bd:case Fd:return Math.max(e,8)*Math.max(t,8)/2;case Vd:case Gd:case Xd:case Wd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case kd:case Su:case qd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Yd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Zd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Jd:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Kd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Qd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case jd:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case $d:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case tp:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ep:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case np:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ip:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case sp:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case ap:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case rp:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case op:case lp:case cp:return Math.ceil(e/4)*Math.ceil(t/4)*16;case up:case hp:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Mu:case fp:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function FC(e){switch(e){case si:case b_:return{byteLength:1,components:1};case Tl:case E_:case es:return{byteLength:2,components:1};case Ld:case Ud:return{byteLength:2,components:4};case $i:case Dd:case ts:return{byteLength:4,components:1};case T_:case A_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function ME(){let e=null,t=!1,n=null,i=null;function s(a,r){i=e.requestAnimationFrame(s),n(a,r)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function VC(e){let t=new WeakMap;function n(o,l){let c=o.array,h=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=e.SHORT;else if(c instanceof Uint32Array)f=e.UNSIGNED_INT;else if(c instanceof Int32Array)f=e.INT;else if(c instanceof Int8Array)f=e.BYTE;else if(c instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let h=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,h);else{p.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<p.length;f++){let _=p[u],M=p[f];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++u,p[u]=M)}p.length=u+1;for(let f=0,_=p.length;f<_;f++){let M=p[f];e.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var GC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kC=`#ifdef USE_ALPHAHASH
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
#endif`,XC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZC=`#ifdef USE_AOMAP
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
#endif`,JC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KC=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,QC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$C=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t3=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,e3=`#ifdef USE_IRIDESCENCE
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
#endif`,n3=`#ifdef USE_BUMPMAP
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
#endif`,i3=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,s3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,l3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,c3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,u3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,h3=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,f3=`vec3 transformedNormal = objectNormal;
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
#endif`,d3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,m3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_3="gl_FragColor = linearToOutputTexel( gl_FragColor );",v3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,y3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,x3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,S3=`#ifdef USE_ENVMAP
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
#endif`,M3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,E3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,T3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R3=`#ifdef USE_GRADIENTMAP
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
}`,C3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,N3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L3=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,U3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,O3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,I3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,F3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,H3=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,V3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,G3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,k3=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,X3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Z3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,J3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Q3=`#if defined( USE_POINTS_UV )
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
#endif`,j3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e2=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i2=`#ifdef USE_MORPHTARGETS
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
#endif`,s2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,r2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,o2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,u2=`#ifdef USE_NORMALMAP
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
#endif`,h2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,p2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,E2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,T2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,A2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,w2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R2=`#ifdef USE_SKINNING
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
#endif`,C2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N2=`#ifdef USE_SKINNING
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
#endif`,D2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O2=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,I2=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,P2=`#ifdef USE_TRANSMISSION
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
#endif`,B2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,z2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,F2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,H2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,V2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G2=`uniform sampler2D t2D;
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
}`,k2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X2=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y2=`#include <common>
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
}`,Z2=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,J2=`#define DISTANCE
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
}`,K2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Q2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$2=`uniform float scale;
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
}`,tN=`uniform vec3 diffuse;
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
}`,eN=`#include <common>
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
}`,nN=`uniform vec3 diffuse;
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
}`,iN=`#define LAMBERT
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
}`,sN=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,aN=`#define MATCAP
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
}`,rN=`#define MATCAP
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
}`,oN=`#define NORMAL
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
}`,lN=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cN=`#define PHONG
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
}`,uN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,hN=`#define STANDARD
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
}`,fN=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,dN=`#define TOON
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
}`,pN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,mN=`uniform float size;
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
}`,gN=`uniform vec3 diffuse;
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
}`,_N=`#include <common>
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
}`,vN=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,yN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,xN=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:GC,alphahash_pars_fragment:kC,alphamap_fragment:XC,alphamap_pars_fragment:WC,alphatest_fragment:qC,alphatest_pars_fragment:YC,aomap_fragment:ZC,aomap_pars_fragment:JC,batching_pars_vertex:KC,batching_vertex:QC,begin_vertex:jC,beginnormal_vertex:$C,bsdfs:t3,iridescence_fragment:e3,bumpmap_pars_fragment:n3,clipping_planes_fragment:i3,clipping_planes_pars_fragment:s3,clipping_planes_pars_vertex:a3,clipping_planes_vertex:r3,color_fragment:o3,color_pars_fragment:l3,color_pars_vertex:c3,color_vertex:u3,common:h3,defaultnormal_vertex:f3,displacementmap_pars_vertex:d3,displacementmap_vertex:p3,emissivemap_fragment:m3,emissivemap_pars_fragment:g3,colorspace_fragment:_3,colorspace_pars_fragment:v3,envmap_fragment:y3,envmap_common_pars_fragment:x3,envmap_pars_fragment:S3,envmap_pars_vertex:M3,envmap_physical_pars_fragment:U3,envmap_vertex:b3,fog_vertex:E3,fog_pars_vertex:T3,fog_fragment:A3,fog_pars_fragment:w3,gradientmap_pars_fragment:R3,lightmap_pars_fragment:C3,lights_lambert_fragment:N3,lights_lambert_pars_fragment:D3,lights_pars_begin:L3,lights_toon_fragment:O3,lights_toon_pars_fragment:I3,lights_phong_fragment:P3,lights_phong_pars_fragment:B3,lights_physical_fragment:z3,lights_physical_pars_fragment:F3,lights_fragment_begin:H3,lights_fragment_maps:V3,lights_fragment_end:G3,lightprobes_pars_fragment:k3,logdepthbuf_fragment:X3,logdepthbuf_pars_fragment:W3,logdepthbuf_pars_vertex:q3,logdepthbuf_vertex:Y3,map_fragment:Z3,map_pars_fragment:J3,map_particle_fragment:K3,map_particle_pars_fragment:Q3,metalnessmap_fragment:j3,metalnessmap_pars_fragment:$3,morphinstance_vertex:t2,morphcolor_vertex:e2,morphnormal_vertex:n2,morphtarget_pars_vertex:i2,morphtarget_vertex:s2,normal_fragment_begin:a2,normal_fragment_maps:r2,normal_pars_fragment:o2,normal_pars_vertex:l2,normal_vertex:c2,normalmap_pars_fragment:u2,clearcoat_normal_fragment_begin:h2,clearcoat_normal_fragment_maps:f2,clearcoat_pars_fragment:d2,iridescence_pars_fragment:p2,opaque_fragment:m2,packing:g2,premultiplied_alpha_fragment:_2,project_vertex:v2,dithering_fragment:y2,dithering_pars_fragment:x2,roughnessmap_fragment:S2,roughnessmap_pars_fragment:M2,shadowmap_pars_fragment:b2,shadowmap_pars_vertex:E2,shadowmap_vertex:T2,shadowmask_pars_fragment:A2,skinbase_vertex:w2,skinning_pars_vertex:R2,skinning_vertex:C2,skinnormal_vertex:N2,specularmap_fragment:D2,specularmap_pars_fragment:L2,tonemapping_fragment:U2,tonemapping_pars_fragment:O2,transmission_fragment:I2,transmission_pars_fragment:P2,uv_pars_fragment:B2,uv_pars_vertex:z2,uv_vertex:F2,worldpos_vertex:H2,background_vert:V2,background_frag:G2,backgroundCube_vert:k2,backgroundCube_frag:X2,cube_vert:W2,cube_frag:q2,depth_vert:Y2,depth_frag:Z2,distance_vert:J2,distance_frag:K2,equirect_vert:Q2,equirect_frag:j2,linedashed_vert:$2,linedashed_frag:tN,meshbasic_vert:eN,meshbasic_frag:nN,meshlambert_vert:iN,meshlambert_frag:sN,meshmatcap_vert:aN,meshmatcap_frag:rN,meshnormal_vert:oN,meshnormal_frag:lN,meshphong_vert:cN,meshphong_frag:uN,meshphysical_vert:hN,meshphysical_frag:fN,meshtoon_vert:dN,meshtoon_frag:pN,points_vert:mN,points_frag:gN,shadow_vert:_N,shadow_frag:vN,sprite_vert:yN,sprite_frag:xN},Tt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},ws={basic:{uniforms:zn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:zn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new ee(0)},envMapIntensity:{value:1}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:zn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:zn([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:zn([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new ee(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:zn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:zn([Tt.points,Tt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:zn([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:zn([Tt.common,Tt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:zn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:zn([Tt.sprite,Tt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distance:{uniforms:zn([Tt.common,Tt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distance_vert,fragmentShader:re.distance_frag},shadow:{uniforms:zn([Tt.lights,Tt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};ws.physical={uniforms:zn([ws.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};var pp={r:0,b:0,g:0},SN=new Ue,bE=new Jt;bE.set(-1,0,0,0,1,0,0,0,1);function MN(e,t,n,i,s,a){let r=new ee(0),o=s===!0?0:1,l,c,h=null,p=0,u=null;function f(m){let x=m.isScene===!0?m.background:null;if(x&&x.isTexture){let y=m.backgroundBlurriness>0;x=t.get(x,y)}return x}function _(m){let x=!1,y=f(m);y===null?g(r,o):y&&y.isColor&&(g(y,1),x=!0);let T=e.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function M(m,x){let y=f(x);y&&y.isCubeTexture?(c===void 0&&(c=new hn(new dl(1,1,1),new Es({name:"BackgroundCubeMaterial",uniforms:Fr(ws.backgroundCube.uniforms),vertexShader:ws.backgroundCube.vertexShader,fragmentShader:ws.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(SN.makeRotationFromEuler(x.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(bE),c.material.toneMapped=de.getTransfer(y.colorSpace)!==Ae,(h!==y||p!==y.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=y,p=y.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new hn(new Or(2,2),new Es({name:"BackgroundMaterial",uniforms:Fr(ws.background.uniforms),vertexShader:ws.background.vertexShader,fragmentShader:ws.background.fragmentShader,side:Ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=de.getTransfer(y.colorSpace)!==Ae,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||p!==y.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=y,p=y.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,x){m.getRGB(pp,B_(e)),n.buffers.color.setClear(pp.r,pp.g,pp.b,x,a)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,x=1){r.set(m),o=x,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:_,addToRenderList:M,dispose:d}}function bN(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,r=!1;function o(C,H,W,L,F){let Z=!1,V=p(C,L,W,H);a!==V&&(a=V,c(a.object)),Z=f(C,L,W,F),Z&&_(C,L,W,F),F!==null&&t.update(F,e.ELEMENT_ARRAY_BUFFER),(Z||r)&&(r=!1,y(C,H,W,L),F!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return e.createVertexArray()}function c(C){return e.bindVertexArray(C)}function h(C){return e.deleteVertexArray(C)}function p(C,H,W,L){let F=L.wireframe===!0,Z=i[H.id];Z===void 0&&(Z={},i[H.id]=Z);let V=C.isInstancedMesh===!0?C.id:0,it=Z[V];it===void 0&&(it={},Z[V]=it);let k=it[W.id];k===void 0&&(k={},it[W.id]=k);let Q=k[F];return Q===void 0&&(Q=u(l()),k[F]=Q),Q}function u(C){let H=[],W=[],L=[];for(let F=0;F<n;F++)H[F]=0,W[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:W,attributeDivisors:L,object:C,attributes:{},index:null}}function f(C,H,W,L){let F=a.attributes,Z=H.attributes,V=0,it=W.getAttributes();for(let k in it)if(it[k].location>=0){let et=F[k],wt=Z[k];if(wt===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(wt=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(wt=C.instanceColor)),et===void 0||et.attribute!==wt||wt&&et.data!==wt.data)return!0;V++}return a.attributesNum!==V||a.index!==L}function _(C,H,W,L){let F={},Z=H.attributes,V=0,it=W.getAttributes();for(let k in it)if(it[k].location>=0){let et=Z[k];et===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(et=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(et=C.instanceColor));let wt={};wt.attribute=et,et&&et.data&&(wt.data=et.data),F[k]=wt,V++}a.attributes=F,a.attributesNum=V,a.index=L}function M(){let C=a.newAttributes;for(let H=0,W=C.length;H<W;H++)C[H]=0}function g(C){d(C,0)}function d(C,H){let W=a.newAttributes,L=a.enabledAttributes,F=a.attributeDivisors;W[C]=1,L[C]===0&&(e.enableVertexAttribArray(C),L[C]=1),F[C]!==H&&(e.vertexAttribDivisor(C,H),F[C]=H)}function m(){let C=a.newAttributes,H=a.enabledAttributes;for(let W=0,L=H.length;W<L;W++)H[W]!==C[W]&&(e.disableVertexAttribArray(W),H[W]=0)}function x(C,H,W,L,F,Z,V){V===!0?e.vertexAttribIPointer(C,H,W,F,Z):e.vertexAttribPointer(C,H,W,L,F,Z)}function y(C,H,W,L){M();let F=L.attributes,Z=W.getAttributes(),V=H.defaultAttributeValues;for(let it in Z){let k=Z[it];if(k.location>=0){let Q=F[it];if(Q===void 0&&(it==="instanceMatrix"&&C.instanceMatrix&&(Q=C.instanceMatrix),it==="instanceColor"&&C.instanceColor&&(Q=C.instanceColor)),Q!==void 0){let et=Q.normalized,wt=Q.itemSize,Pt=t.get(Q);if(Pt===void 0)continue;let q=Pt.buffer,yt=Pt.type,At=Pt.bytesPerElement,Bt=yt===e.INT||yt===e.UNSIGNED_INT||Q.gpuType===Dd;if(Q.isInterleavedBufferAttribute){let St=Q.data,Ft=St.isInterleavedBuffer===!0?St.stride:St.itemSize,be=Q.offset;if(St.isInstancedInterleavedBuffer||St.isInstancedBufferAttribute){for(let Ht=0;Ht<k.locationSize;Ht++)d(k.location+Ht,St.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Ht=0;Ht<k.locationSize;Ht++)g(k.location+Ht);e.bindBuffer(e.ARRAY_BUFFER,q);for(let Ht=0;Ht<k.locationSize;Ht++)x(k.location+Ht,wt/k.locationSize,yt,et,Ft*At,(be+wt/k.locationSize*Ht)*At,Bt)}else{if(Q.isInstancedBufferAttribute){for(let St=0;St<k.locationSize;St++)d(k.location+St,Q.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let St=0;St<k.locationSize;St++)g(k.location+St);e.bindBuffer(e.ARRAY_BUFFER,q);for(let St=0;St<k.locationSize;St++)x(k.location+St,wt/k.locationSize,yt,et,wt*At,wt/k.locationSize*St*At,Bt)}}else if(V!==void 0){let et=V[it];if(et!==void 0)switch(et.length){case 2:e.vertexAttrib2fv(k.location,et);break;case 3:e.vertexAttrib3fv(k.location,et);break;case 4:e.vertexAttrib4fv(k.location,et);break;default:e.vertexAttrib1fv(k.location,et)}}}}m()}function T(){I();for(let C in i){let H=i[C];for(let W in H){let L=H[W];for(let F in L){let Z=L[F];for(let V in Z)h(Z[V].object),delete Z[V];delete L[F]}}delete i[C]}}function w(C){if(i[C.id]===void 0)return;let H=i[C.id];for(let W in H){let L=H[W];for(let F in L){let Z=L[F];for(let V in Z)h(Z[V].object),delete Z[V];delete L[F]}}delete i[C.id]}function v(C){for(let H in i){let W=i[H];for(let L in W){let F=W[L];if(F[C.id]===void 0)continue;let Z=F[C.id];for(let V in Z)h(Z[V].object),delete Z[V];delete F[C.id]}}}function E(C){for(let H in i){let W=i[H],L=C.isInstancedMesh===!0?C.id:0,F=W[L];if(F!==void 0){for(let Z in F){let V=F[Z];for(let it in V)h(V[it].object),delete V[it];delete F[Z]}delete W[L],Object.keys(W).length===0&&delete i[H]}}}function I(){R(),r=!0,a!==s&&(a=s,c(a.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:E,releaseStatesOfProgram:v,initAttributes:M,enableAttribute:g,disableUnusedAttributes:m}}function EN(e,t,n){let i;function s(l){i=l}function a(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,h){h!==0&&(e.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];n.update(u,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function TN(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let v=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(v){return!(v!==ns&&i.convert(v)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){let E=v===es&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==si&&v!==ts&&!E&&i.convert(v)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(Gt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=n.logarithmicDepthBuffer===!0&&p===!1;n.reversedDepthBuffer===!0&&p===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&p===!0&&Gt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),d=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),x=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),w=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:y,maxSamples:T,samples:w}}function AN(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Qi,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let f=p.length!==0||u||i!==0||s;return s=u,i=p.length,f},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){n=h(p,u,0)},this.setState=function(p,u,f){let _=p.clippingPlanes,M=p.clipIntersection,g=p.clipShadows,d=e.get(p);if(!s||_===null||_.length===0||a&&!g)a?h(null):c();else{let m=a?0:i,x=m*4,y=d.clippingState||null;l.value=y,y=h(_,u,x,f);for(let T=0;T!==x;++T)y[T]=n[T];d.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(p,u,f,_){let M=p!==null?p.length:0,g=null;if(M!==0){if(g=l.value,_!==!0||g===null){let d=f+M*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<d)&&(g=new Float32Array(d));for(let x=0,y=f;x!==M;++x,y+=4)r.copy(p[x]).applyMatrix4(m,o),r.normal.toArray(g,y),g[y+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}var Tu=class extends vi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new $c(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dl(5,5,5),a=new Es({name:"CubemapFromEquirect",uniforms:Fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zn,blending:Ir});a.uniforms.tEquirect.value=n;let r=new hn(s,a),o=n.minFilter;return n.minFilter===ji&&(n.minFilter=Dn),new Sl(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},eE=256,wN=3,RN=20,EE=256,TE=16,CN=3,NN=new O,DN=new ee,Rl=class e{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Sl(1,10,null),this._boxMesh=new hn(new dl(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=NN}=a,l=this._renderer;this._setSize(r);let c=this._allocateTarget(),h=this._getSourceTarget(!0);n>0&&(h.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,_=l.autoClearStencil,M=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(t.background=l.getClearColor(DN));let g=new Sl(i,s,h);return g.position.copy(o),g.update(l,t),l.autoClear=p,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=_,t.background=M,n>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sE(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iE(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,n){return n>0?1-Math.sqrt(1-t/n):0}_setSize(t){this._cubeSize=Math.max(eE,q1(t))}_fromTexture(t,n){t.mapping===Br||t.mapping===El?this._setSize(t.image.length===0?eE:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=n||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,n=nE(t,!1,!1),i=Math.log2(t)-wN;for(let s=0;s<=i;s++)n.texture.mipmaps.push({width:t>>s,height:t>>s});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(t=!1){let n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=nE(n,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,n,i){let s=this._boxMesh,a=this._cubeCamera;s.material=i,a.renderTarget=t,a.activeMipmapLevel=n;let r=t.width>>n;t.viewport.set(0,0,r,r),a.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let n;t.mapping===Br||t.mapping===El?(this._cubemapMaterial===null&&(this._cubemapMaterial=sE()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=iE()),n=this._equirectMaterial),n.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=LN(),this._integrationMaterial=UN());let n=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/TE);for(let r=0;r<=i;r++){let o=e.lodToRoughness(r,i);if(r>i-CN)a.roughness.value=o,this._renderCube(t,r,this._integrationMaterial);else{let l=o>0?Math.log2(n)+.5*Math.log2(6/(EE*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,r,this._ggxMaterial)}}}_blur(t,n){this._blurMaterial===null&&(this._blurMaterial=ON());let i=this._blurMaterial,s=i.uniforms,a=this._sourceTarget;s.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,s.envMap.value=a.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(a,0,i)}};function nE(e,t,n){return new Tu(e,{minFilter:ji,generateMipmaps:t,type:es,colorSpace:qc,depthBuffer:n})}function Au(e,t,n){return new Es({name:e,uniforms:t,vertexShader:re.cube_vert,fragmentShader:n,side:Zn,blending:Ir,depthTest:!1,depthWrite:!1})}function LN(){return Au("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${EE}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function UN(){return Au("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:TE}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ON(){return Au("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${RN}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function iE(){return Au("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function sE(){return Au("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function IN(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?r(u):a(u)}function a(u){if(u&&u.isTexture){let f=u.mapping;if(f===Rd||f===Cd)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let M=new Tu(_.height);return M.fromEquirectangularTexture(e,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,_=f===Rd||f===Cd,M=f===Br||f===El;if(_||M){let g=n.get(u),d=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new Rl(e)),g=_?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{let m=u.image;return _&&m&&m.height>0||M&&m&&l(m)?(i===null&&(i=new Rl(e)),g=_?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===Rd?u.mapping=Br:f===Cd&&(u.mapping=El),u}function l(u){let f=0,_=6;for(let M=0;M<_;M++)u[M]!==void 0&&f++;return f===_}function c(u){let f=u.target;f.removeEventListener("dispose",c);let _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let _=n.get(f);_!==void 0&&(n.delete(f),_.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function PN(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Nr("WebGLRenderer: "+i+" extension not supported."),s}}}function BN(e,t,n,i){let s={},a=new WeakMap,r=new FinalizationRegistry(_=>delete s[_]);function o(_){l(_.target)}function l(_){_.index!==null&&t.remove(_.index);for(let g in _.attributes)t.remove(_.attributes[g]);_.removeEventListener("dispose",o),delete s[_.id],r.unregister(_);let M=a.get(_);M&&(t.remove(M),a.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function c(_,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),r.register(M,M.id,M),n.memory.geometries++),M}function h(_){let M=_.attributes;for(let g in M)t.update(M[g],e.ARRAY_BUFFER)}function p(_){let M=_.index,g=_.attributes.position,d=0;if(g===void 0)return;let m=M!==null?M.array.length:g.array.length/3-1,x=g.count>=65535?Qc:Kc,y=new x(Math.ceil(m/3)*6,1),T=y.array;if(M!==null){let v=M.array;d=M.version;for(let E=0,I=0;E<m;E+=3){let R=v[E+0],C=v[E+1],H=v[E+2];T[I++]=R,T[I++]=C,T[I++]=C,T[I++]=H,T[I++]=H,T[I++]=R}}else{d=g.version;for(let v=0,E=0;v<m;v+=3){let I=v+0,R=v+1,C=v+2;T[E++]=I,T[E++]=R,T[E++]=R,T[E++]=C,T[E++]=C,T[E++]=I}}y.version=d;let w=a.get(_);w&&t.remove(w),a.set(_,y)}function u(_){let M=a.get(_);if(M){let g=_.index;g!==null&&M.version<g.version&&p(_)}else p(_);return a.get(_)}function f(){for(let _ in s){let M=s[_].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function zN(e,t,n){let i;function s(p){i=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,a,p*r),n.update(u,i,1)}function c(p,u,f){f!==0&&(e.drawElementsInstanced(i,u,a,p*r,f),n.update(u,i,f))}function h(p,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,p,0,f);let M=0;for(let g=0;g<f;g++)M+=u[g];n.update(M,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function FN(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:Xt("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function HN(e,t,n){let i=new WeakMap,s=new Xe;function a(r,o,l){let c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==p){let I=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",I)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],x=0;f===!0&&(x=1),_===!0&&(x=2),M===!0&&(x=3);let y=o.attributes.position.count*x,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*T*4*p),v=new Jc(w,y,T,p);v.type=ts,v.needsUpdate=!0;let E=x*4;for(let R=0;R<p;R++){let C=g[R],H=d[R],W=m[R],L=y*T*4*R;for(let F=0;F<C.count;F++){let Z=F*E;f===!0&&(s.fromBufferAttribute(C,F),w[L+Z+0]=s.x,w[L+Z+1]=s.y,w[L+Z+2]=s.z,w[L+Z+3]=0),_===!0&&(s.fromBufferAttribute(H,F),w[L+Z+4]=s.x,w[L+Z+5]=s.y,w[L+Z+6]=s.z,w[L+Z+7]=0),M===!0&&(s.fromBufferAttribute(W,F),w[L+Z+8]=s.x,w[L+Z+9]=s.y,w[L+Z+10]=s.z,w[L+Z+11]=W.itemSize===4?s.w:1)}}u={count:p,texture:v,size:new vt(y,T)},i.set(o,u),o.addEventListener("dispose",I)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];let _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:a}}function VN(e,t,n,i,s){let a=new WeakMap;function r(c){let h=s.render.frame,p=c.geometry,u=t.get(c,p);if(a.get(u)!==h&&(t.update(u),a.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==h&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;a.get(f)!==h&&(f.update(),a.set(f,h))}return u}function o(){a=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:r,dispose:o}}var GN={[g_]:"LINEAR_TONE_MAPPING",[__]:"REINHARD_TONE_MAPPING",[v_]:"CINEON_TONE_MAPPING",[y_]:"ACES_FILMIC_TONE_MAPPING",[S_]:"AGX_TONE_MAPPING",[mu]:"NEUTRAL_TONE_MAPPING",[x_]:"CUSTOM_TONE_MAPPING"};function kN(e,t,n,i,s,a){let r=new vi(t,n,{type:e,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new yi;h.setAttribute("position",new an([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new an([0,2,0,0,2,0],2));let p=new hd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new hn(h,p),f=new fu(-1,1,1,-1,0,1),_=null,M=null,g=!1,d,m=null,x=[],y=!1;this.setSize=function(T,w){r.setSize(T,w),o!==null&&o.setSize(T,w),l!==null&&l.setSize(T,w);for(let v=0;v<x.length;v++){let E=x[v];E.setSize&&E.setSize(T,w)}},this.setEffects=function(T){x=T,y=x.length>0&&x[0].isRenderPass===!0;let w=r.width,v=r.height;x.length>0&&o===null&&(o=new vi(w,v,{type:es,depthBuffer:!1,stencilBuffer:!1}),l=new vi(w,v,{type:es,depthBuffer:!1,stencilBuffer:!1}));let E=s===!0&&x.some(I=>I.needsDepthTexture===!0);E!==(r.depthTexture!==null)&&(E===!0&&c===null&&(c=new $s(w,v),a===!0&&(c.format=ta,c.type=zr)),r.dispose(),r.depthTexture=E?c:null,r.resolveDepthBuffer=E,r.storeMultisampledDepthBuffer=E);for(let I=0;I<x.length;I++){let R=x[I];R.setSize&&R.setSize(w,v),E&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(T,w){if(g||T.toneMapping===Ts&&x.length===0)return!1;if(m=w,w!==null){let v=w.width,E=w.height;(r.width!==v||r.height!==E)&&this.setSize(v,E)}return y===!1&&T.setRenderTarget(r),d=T.toneMapping,T.toneMapping=Ts,!0},this.hasRenderPass=function(){return y},this.end=function(T,w){T.toneMapping=d,g=!0;let v=r,E=o;for(let I=0;I<x.length;I++){let R=x[I];R.enabled!==!1&&(R.render(T,E,v,w),R.needsSwap!==!1&&(v=E,E=E===o?l:o))}if(_!==T.outputColorSpace||M!==T.toneMapping){_=T.outputColorSpace,M=T.toneMapping,p.defines={},de.getTransfer(_)===Ae&&(p.defines.SRGB_TRANSFER="");let I=GN[M];I&&(p.defines[I]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=v.texture,T.setRenderTarget(m),T.render(u,f),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),p.dispose()}}var AE=new qn,wE=new $s(1,1),RE=new tu(1),CE=new Jc,NE=new sd,DE=new $c,aE=[],rE=[],oE=new Float32Array(16),lE=new Float32Array(9),cE=new Float32Array(4);function Cl(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=aE[s];if(a===void 0&&(a=new Float32Array(s),aE[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function fn(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function dn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function _p(e,t){let n=rE[t];n===void 0&&(n=new Int32Array(t),rE[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function XN(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function WN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fn(n,t))return;e.uniform2fv(this.addr,t),dn(n,t)}}function qN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(fn(n,t))return;e.uniform3fv(this.addr,t),dn(n,t)}}function YN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fn(n,t))return;e.uniform4fv(this.addr,t),dn(n,t)}}function ZN(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(fn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),dn(n,t)}else{if(fn(n,i))return;cE.set(i),e.uniformMatrix2fv(this.addr,!1,cE),dn(n,i)}}function JN(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(fn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),dn(n,t)}else{if(fn(n,i))return;lE.set(i),e.uniformMatrix3fv(this.addr,!1,lE),dn(n,i)}}function KN(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(fn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),dn(n,t)}else{if(fn(n,i))return;oE.set(i),e.uniformMatrix4fv(this.addr,!1,oE),dn(n,i)}}function QN(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function jN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fn(n,t))return;e.uniform2iv(this.addr,t),dn(n,t)}}function $N(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(fn(n,t))return;e.uniform3iv(this.addr,t),dn(n,t)}}function tD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fn(n,t))return;e.uniform4iv(this.addr,t),dn(n,t)}}function eD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function nD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fn(n,t))return;e.uniform2uiv(this.addr,t),dn(n,t)}}function iD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(fn(n,t))return;e.uniform3uiv(this.addr,t),dn(n,t)}}function sD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fn(n,t))return;e.uniform4uiv(this.addr,t),dn(n,t)}}function vp(e){return e.version===0&&(e.compareFunction=L_,e.needsUpdate=!0),e}function aD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?a=vp(wE):a=AE,n.setTexture2D(t||a,s)}function rD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||NE,s)}function oD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_CUBE_SHADOW?a=vp(RE):a=DE,n.setTextureCube(t||a,s)}function lD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||CE,s)}function cD(e){switch(e){case 5126:return XN;case 35664:return WN;case 35665:return qN;case 35666:return YN;case 35674:return ZN;case 35675:return JN;case 35676:return KN;case 5124:case 35670:return QN;case 35667:case 35671:return jN;case 35668:case 35672:return $N;case 35669:case 35673:return tD;case 5125:return eD;case 36294:return nD;case 36295:return iD;case 36296:return sD;case 35678:case 36198:case 36298:case 36306:case 35682:return aD;case 35679:case 36299:case 36307:return rD;case 35680:case 36300:case 36308:case 36293:return oD;case 36289:case 36303:case 36311:case 36292:return lD}}function uD(e,t){e.uniform1fv(this.addr,t)}function hD(e,t){let n=Cl(t,this.size,2);e.uniform2fv(this.addr,n)}function fD(e,t){let n=Cl(t,this.size,3);e.uniform3fv(this.addr,n)}function dD(e,t){let n=Cl(t,this.size,4);e.uniform4fv(this.addr,n)}function pD(e,t){let n=Cl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function mD(e,t){let n=Cl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function gD(e,t){let n=Cl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function _D(e,t){e.uniform1iv(this.addr,t)}function vD(e,t){e.uniform2iv(this.addr,t)}function yD(e,t){e.uniform3iv(this.addr,t)}function xD(e,t){e.uniform4iv(this.addr,t)}function SD(e,t){e.uniform1uiv(this.addr,t)}function MD(e,t){e.uniform2uiv(this.addr,t)}function bD(e,t){e.uniform3uiv(this.addr,t)}function ED(e,t){e.uniform4uiv(this.addr,t)}function TD(e,t,n){let i=this.cache,s=t.length,a=_p(n,s);fn(i,a)||(e.uniform1iv(this.addr,a),dn(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=vp(wE):r=AE;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function AD(e,t,n){let i=this.cache,s=t.length,a=_p(n,s);fn(i,a)||(e.uniform1iv(this.addr,a),dn(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||NE,a[r])}function wD(e,t,n){let i=this.cache,s=t.length,a=_p(n,s);fn(i,a)||(e.uniform1iv(this.addr,a),dn(i,a));let r;this.type===e.SAMPLER_CUBE_SHADOW?r=vp(RE):r=DE;for(let o=0;o!==s;++o)n.setTextureCube(t[o]||r,a[o])}function RD(e,t,n){let i=this.cache,s=t.length,a=_p(n,s);fn(i,a)||(e.uniform1iv(this.addr,a),dn(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||CE,a[r])}function CD(e){switch(e){case 5126:return uD;case 35664:return hD;case 35665:return fD;case 35666:return dD;case 35674:return pD;case 35675:return mD;case 35676:return gD;case 5124:case 35670:return _D;case 35667:case 35671:return vD;case 35668:case 35672:return yD;case 35669:case 35673:return xD;case 5125:return SD;case 36294:return MD;case 36295:return bD;case 36296:return ED;case 35678:case 36198:case 36298:case 36306:case 35682:return TD;case 35679:case 36299:case 36307:return AD;case 35680:case 36300:case 36308:case 36293:return wD;case 36289:case 36303:case 36311:case 36292:return RD}}var Z_=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=cD(n.type)}},J_=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=CD(n.type)}},K_=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},q_=/(\w+)(\])?(\[|\.)?/g;function uE(e,t){e.seq.push(t),e.map[t.id]=t}function ND(e,t,n){let i=e.name,s=i.length;for(q_.lastIndex=0;;){let a=q_.exec(i),r=q_.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){uE(n,c===void 0?new Z_(o,e,t):new J_(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new K_(o),uE(n,p)),n=p}}}var wl=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);ND(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function hE(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var DD=37297,LD=0;function UD(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var fE=new Jt;function OD(e){de._getMatrix(fE,de.workingColorSpace,e);let t=`mat3( ${fE.elements.map(n=>n.toFixed(4))} )`;switch(de.getTransfer(e)){case Yc:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function dE(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+UD(e.getShaderSource(t),o)}else return a}function ID(e,t){let n=OD(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var PD={[g_]:"Linear",[__]:"Reinhard",[v_]:"Cineon",[y_]:"ACESFilmic",[S_]:"AgX",[mu]:"Neutral",[x_]:"Custom"};function BD(e,t){let n=PD[t];return n===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var mp=new O;function zD(){de.getLuminanceCoefficients(mp);let e=mp.x.toFixed(4),t=mp.y.toFixed(4),n=mp.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function FD(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eu).join(`
`)}function HD(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function VD(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Eu(e){return e!==""}function pE(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function mE(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var GD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Q_(e){return e.replace(GD,kD)}function kD(e,t){let n=re[t];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Q_(n)}var XD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gE(e){return e.replace(XD,WD)}function WD(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function _E(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var qD={[pu]:"SHADOWMAP_TYPE_PCF",[Ml]:"SHADOWMAP_TYPE_VSM"};function YD(e){return qD[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ZD={[El]:"ENVMAP_MODE_REFRACTION"};function JD(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":ZD[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var KD={[m_]:"ENVMAP_BLENDING_MULTIPLY",[N1]:"ENVMAP_BLENDING_MIX",[D1]:"ENVMAP_BLENDING_ADD"};function QD(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":KD[e.combine]||"ENVMAP_BLENDING_NONE"}function jD(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=YD(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=JD(n),p=QD(n),u=FD(n),f=HD(a),_=s.createProgram(),M,g,d=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(Eu).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(Eu).join(`
`),g.length>0&&(g+=`
`)):(M=[_E(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eu).join(`
`),g=[_E(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ts?"#define TONE_MAPPING":"",n.toneMapping!==Ts?re.tonemapping_pars_fragment:"",n.toneMapping!==Ts?BD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,ID("linearToOutputTexel",n.outputColorSpace),zD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Eu).join(`
`)),r=Q_(r),r=pE(r,n),r=mE(r,n),o=Q_(o),o=pE(o,n),o=mE(o,n),r=gE(r),o=gE(o),n.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",n.glslVersion===U_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===U_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let m=d+M+r,x=d+g+o,y=hE(s,s.VERTEX_SHADER,m),T=hE(s,s.FRAGMENT_SHADER,x);s.attachShader(_,y),s.attachShader(_,T),n.index0AttributeName!==void 0?s.bindAttribLocation(_,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(R){if(e.debug.checkShaderErrors){let C=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(y)||"",W=s.getShaderInfoLog(T)||"",L=C.trim(),F=H.trim(),Z=W.trim(),V=!0,it=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,_,y,T);else{let k=dE(s,y,"vertex"),Q=dE(s,T,"fragment");Xt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+k+`
`+Q)}else L!==""?Gt("WebGLProgram: Program Info Log:",L):(F===""||Z==="")&&(it=!1);it&&(R.diagnostics={runnable:V,programLog:L,vertexShader:{log:F,prefix:M},fragmentShader:{log:Z,prefix:g}})}s.deleteShader(y),s.deleteShader(T),v=new wl(s,_),E=VD(s,_)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(_,DD)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=LD++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=T,this}var $D=0,j_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new $_(t),n.set(t,i)),i}},$_=class{constructor(t){this.id=$D++,this.code=t,this.usedTimes=0}};function tL(e){return e===Qa||e===Su||e===Mu}function eL(e,t,n,i,s,a){let r=new ol,o=new j_,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,E,I,R,C,H){let W=R.fog,L=C.geometry,F=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,V=t.get(v.envMap||F,Z),it=u[v.type],k=i.precision;v.precision!==null&&(k=i.getMaxPrecision(v.precision),k!==v.precision&&Gt("WebGLProgram.getParameters:",v.precision,"not supported, using",k,"instead."));let Q=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,et=Q!==void 0?Q.length:0,wt=0;L.morphAttributes.position!==void 0&&(wt=1),L.morphAttributes.normal!==void 0&&(wt=2),L.morphAttributes.color!==void 0&&(wt=3);let Pt,q,yt,At;if(it){let bt=ws[it];Pt=bt.vertexShader,q=bt.fragmentShader}else{Pt=v.vertexShader,q=v.fragmentShader;let bt=o.getVertexShaderStage(v),ve=o.getFragmentShaderStage(v);o.update(v,bt,ve),yt=bt.id,At=ve.id}let Bt=e.getRenderTarget(),St=e.state.buffers.depth.getReversed(),Ft=C.isInstancedMesh===!0,be=C.isBatchedMesh===!0,Ht=!!v.map,Yt=!!v.matcap,jt=!!V,tt=jt&&V.isPMREMTexture===!0,lt=!!v.aoMap,ot=!!v.lightMap,Et=!!v.bumpMap&&v.wireframe===!1,ct=!!v.normalMap,Wt=!!v.displacementMap,Nt=!!v.emissiveMap,ie=!!v.metalnessMap,se=!!v.roughnessMap,le=v.anisotropy>0,U=v.clearcoat>0,It=v.diffuseRoughness>0,te=v.dispersion>0,xe=v.retroreflectivity>0,_t=v.iridescence>0,Pe=v.sheen>0,Ut=v.transmission>0,Dt=le&&!!v.anisotropyMap,A=U&&!!v.clearcoatMap,S=U&&!!v.clearcoatNormalMap,B=U&&!!v.clearcoatRoughnessMap,nt=It&&!!v.diffuseRoughnessMap,j=_t&&!!v.iridescenceMap,ut=_t&&!!v.iridescenceThicknessMap,dt=Pe&&!!v.sheenColorMap,Y=Pe&&!!v.sheenRoughnessMap,J=!!v.specularMap,ht=!!v.specularColorMap,N=!!v.specularIntensityMap,K=Ut&&!!v.transmissionMap,X=Ut&&!!v.thicknessMap,pt=!!v.gradientMap,rt=!!v.alphaMap,mt=v.alphaTest>0,Ot=!!v.alphaHash,Zt=!!v.extensions,at=Ts;v.toneMapped&&(Bt===null||Bt.isXRRenderTarget===!0)&&(at=e.toneMapping);let Vt=tt?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,kt={shaderID:it,shaderType:v.type,shaderName:v.name,vertexShader:Pt,fragmentShader:q,defines:v.defines,customVertexShaderID:yt,customFragmentShaderID:At,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:k,batching:be,batchingColor:be&&C._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&C.instanceColor!==null,instancingMorph:Ft&&C.morphTexture!==null,outputColorSpace:Bt===null?e.outputColorSpace:Bt.isXRRenderTarget===!0?Bt.texture.colorSpace:de.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ht,matcap:Yt,envMap:jt,envMapMode:jt&&V.mapping,envMapPMREM:tt,envMapMaxLod:tt?Vt.length-1:null,envMapSize:tt?Vt[0].width:null,aoMap:lt,lightMap:ot,bumpMap:Et,normalMap:ct,displacementMap:Wt,emissiveMap:Nt,normalMapObjectSpace:ct&&v.normalMapType===O1,normalMapTangentSpace:ct&&v.normalMapType===dp,packedNormalMap:ct&&v.normalMapType===dp&&tL(v.normalMap.format),metalnessMap:ie,roughnessMap:se,anisotropy:le,anisotropyMap:Dt,clearcoat:U,clearcoatMap:A,clearcoatNormalMap:S,clearcoatRoughnessMap:B,diffuseRoughness:It,diffuseRoughnessMap:nt,dispersion:te,retroreflection:xe,iridescence:_t,iridescenceMap:j,iridescenceThicknessMap:ut,sheen:Pe,sheenColorMap:dt,sheenRoughnessMap:Y,specularMap:J,specularColorMap:ht,specularIntensityMap:N,transmission:Ut,transmissionMap:K,thicknessMap:X,gradientMap:pt,opaque:v.transparent===!1&&v.blending===bl&&v.alphaToCoverage===!1,alphaMap:rt,alphaTest:mt,alphaHash:Ot,combine:v.combine,mapUv:Ht&&f(v.map.channel),aoMapUv:lt&&f(v.aoMap.channel),lightMapUv:ot&&f(v.lightMap.channel),bumpMapUv:Et&&f(v.bumpMap.channel),normalMapUv:ct&&f(v.normalMap.channel),displacementMapUv:Wt&&f(v.displacementMap.channel),emissiveMapUv:Nt&&f(v.emissiveMap.channel),metalnessMapUv:ie&&f(v.metalnessMap.channel),roughnessMapUv:se&&f(v.roughnessMap.channel),anisotropyMapUv:Dt&&f(v.anisotropyMap.channel),clearcoatMapUv:A&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:nt&&f(v.diffuseRoughnessMap.channel),iridescenceMapUv:j&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:Y&&f(v.sheenRoughnessMap.channel),specularMapUv:J&&f(v.specularMap.channel),specularColorMapUv:ht&&f(v.specularColorMap.channel),specularIntensityMapUv:N&&f(v.specularIntensityMap.channel),transmissionMapUv:K&&f(v.transmissionMap.channel),thicknessMapUv:X&&f(v.thicknessMap.channel),alphaMapUv:rt&&f(v.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ct||le),vertexNormals:!!L.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!L.attributes.uv&&(Ht||rt),fog:!!W,useFog:v.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||L.attributes.normal===void 0&&ct===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:St,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:wt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:H.filter(bt=>bt.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:e.shadowMap.enabled&&I.length>0,shadowMapType:e.shadowMap.type,toneMapping:at,decodeVideoTexture:Ht&&v.map.isVideoTexture===!0&&de.getTransfer(v.map.colorSpace)===Ae,decodeVideoTextureEmissive:Nt&&v.emissiveMap.isVideoTexture===!0&&de.getTransfer(v.emissiveMap.colorSpace)===Ae,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Mi,flipSided:v.side===Zn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Zt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&v.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return kt.vertexUv1s=l.has(1),kt.vertexUv2s=l.has(2),kt.vertexUv3s=l.has(3),l.clear(),kt}function M(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)E.push(I),E.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(g(E,v),d(E,v),E.push(e.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function g(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapPMREM),v.push(E.envMapMaxLod),v.push(E.envMapSize),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.diffuseRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.numLightProbeGrids),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function d(v,E){r.disableAll(),E.instancing&&r.enable(0),E.instancingColor&&r.enable(1),E.instancingMorph&&r.enable(2),E.matcap&&r.enable(3),E.envMap&&r.enable(4),E.normalMapObjectSpace&&r.enable(5),E.normalMapTangentSpace&&r.enable(6),E.clearcoat&&r.enable(7),E.iridescence&&r.enable(8),E.alphaTest&&r.enable(9),E.vertexColors&&r.enable(10),E.vertexAlphas&&r.enable(11),E.vertexUv1s&&r.enable(12),E.vertexUv2s&&r.enable(13),E.vertexUv3s&&r.enable(14),E.vertexTangents&&r.enable(15),E.anisotropy&&r.enable(16),E.alphaHash&&r.enable(17),E.batching&&r.enable(18),E.dispersion&&r.enable(19),E.retroreflection&&r.enable(24),E.diffuseRoughness&&r.enable(25),E.batchingColor&&r.enable(20),E.gradientMap&&r.enable(21),E.packedNormalMap&&r.enable(22),E.vertexNormals&&r.enable(23),v.push(r.mask),r.disableAll(),E.fog&&r.enable(0),E.useFog&&r.enable(1),E.flatShading&&r.enable(2),E.logarithmicDepthBuffer&&r.enable(3),E.reversedDepthBuffer&&r.enable(4),E.skinning&&r.enable(5),E.morphTargets&&r.enable(6),E.morphNormals&&r.enable(7),E.morphColors&&r.enable(8),E.premultipliedAlpha&&r.enable(9),E.shadowMapEnabled&&r.enable(10),E.doubleSided&&r.enable(11),E.flipSided&&r.enable(12),E.useDepthPacking&&r.enable(13),E.dithering&&r.enable(14),E.transmission&&r.enable(15),E.sheen&&r.enable(16),E.opaque&&r.enable(17),E.pointsUvs&&r.enable(18),E.decodeVideoTexture&&r.enable(19),E.decodeVideoTextureEmissive&&r.enable(20),E.alphaToCoverage&&r.enable(21),E.numLightProbeGrids>0&&r.enable(22),E.hasPositionAttribute&&r.enable(23),v.push(r.mask)}function m(v){let E=u[v.type],I;if(E){let R=ws[E];I=j1.clone(R.uniforms)}else I=v.uniforms;return I}function x(v,E){let I=h.get(E);return I!==void 0?++I.usedTimes:(I=new jD(e,E,v,s),c.push(I),h.set(E,I)),I}function y(v){if(--v.usedTimes===0){let E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function w(){o.dispose()}return{getParameters:_,getProgramCacheKey:M,getUniforms:m,acquireProgram:x,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:w}}function nL(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function iL(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function vE(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function yE(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,_,M,g,d){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:_,materialVariant:r(u),groupOrder:M,renderOrder:u.renderOrder,z:g,group:d},e[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=_,m.materialVariant=r(u),m.groupOrder=M,m.renderOrder=u.renderOrder,m.z=g,m.group=d),t++,m}function l(u,f,_,M,g,d,m){m.reversedDepth===!0&&(g=-g);let x=o(u,f,_,M,g,d);_.transmission>0?i.push(x):_.transparent===!0?s.push(x):n.push(x)}function c(u,f,_,M,g,d){let m=o(u,f,_,M,g,d);_.transmission>0?i.unshift(m):_.transparent===!0?s.unshift(m):n.unshift(m)}function h(u,f){n.length>1&&n.sort(u||iL),i.length>1&&i.sort(f||vE),s.length>1&&s.sort(f||vE)}function p(){for(let u=t,f=e.length;u<f;u++){let _=e[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:p,sort:h}}function sL(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new yE,e.set(i,[r])):s>=a.length?(r=new yE,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function aL(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new O,color:new ee};break;case"SpotLight":n={position:new O,direction:new O,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new ee,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":n={color:new ee,position:new O,halfWidth:new O,halfHeight:new O};break}return e[t.id]=n,n}}}function rL(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var oL=0;function lL(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function cL(e){let t=new aL,n=rL(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);let s=new O,a=new Ue,r=new Ue;function o(c){let h=0,p=0,u=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let f=0,_=0,M=0,g=0,d=0,m=0,x=0,y=0,T=0,w=0,v=0,E=0,I=0,R=0;c.sort(lL);for(let H=0,W=c.length;H<W;H++){let L=c[H],F=L.color,Z=L.intensity,V=L.distance,it=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Qa?it=L.shadow.map.texture:it=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=F.r*Z,p+=F.g*Z,u+=F.b*Z;else if(L.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(L.sh.coefficients[k],Z);R++}else if(L.isSunLight){let k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Q=L.shadow,et=n.get(L);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[_]=et,i.sunShadowMap[_]=it;let wt=Q.getViewportCount();for(let Pt=0;Pt<wt;Pt++)i.sunShadowMatrix[M+Pt]=Q.getMatrix(Pt),i.sunShadowCascade[M+Pt]=Q._cascadeData[Pt];M+=wt,_++}i.sun[f]=k,f++}else if(L.isDirectionalLight){let k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Q=L.shadow,et=n.get(L);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,i.directionalShadow[g]=et,i.directionalShadowMap[g]=it,i.directionalShadowMatrix[g]=L.shadow.matrix,T++}i.directional[g]=k,g++}else if(L.isSpotLight){let k=t.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(F).multiplyScalar(Z),k.distance=V,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,i.spot[m]=k;let Q=L.shadow;if(L.map&&(i.spotLightMap[E]=L.map,E++,Q.updateMatrices(L),L.castShadow&&I++),i.spotLightMatrix[m]=Q.matrix,L.castShadow){let et=n.get(L);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,i.spotShadow[m]=et,i.spotShadowMap[m]=it,v++}m++}else if(L.isRectAreaLight){let k=t.get(L);k.color.copy(F).multiplyScalar(Z),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),i.rectArea[x]=k,x++}else if(L.isPointLight){let k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){let Q=L.shadow,et=n.get(L);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,et.shadowCameraNear=Q.camera.near,et.shadowCameraFar=Q.camera.far,i.pointShadow[d]=et,i.pointShadowMap[d]=it,i.pointShadowMatrix[d]=L.shadow.matrix,w++}i.point[d]=k,d++}else if(L.isHemisphereLight){let k=t.get(L);k.skyColor.copy(L.color).multiplyScalar(Z),k.groundColor.copy(L.groundColor).multiplyScalar(Z),i.hemi[y]=k,y++}}x>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Tt.LTC_FLOAT_1,i.rectAreaLTC2=Tt.LTC_FLOAT_2):(i.rectAreaLTC1=Tt.LTC_HALF_1,i.rectAreaLTC2=Tt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=u;let C=i.hash;(C.sunLength!==f||C.directionalLength!==g||C.pointLength!==d||C.spotLength!==m||C.rectAreaLength!==x||C.hemiLength!==y||C.numSunShadows!==_||C.numDirectionalShadows!==T||C.numPointShadows!==w||C.numSpotShadows!==v||C.numSpotMaps!==E||C.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=g,i.spot.length=m,i.rectArea.length=x,i.point.length=d,i.hemi.length=y,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+E-I,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=R,C.sunLength=f,C.directionalLength=g,C.pointLength=d,C.spotLength=m,C.rectAreaLength=x,C.hemiLength=y,C.numSunShadows=_,C.numDirectionalShadows=T,C.numPointShadows=w,C.numSpotShadows=v,C.numSpotMaps=E,C.numLightProbes=R,i.version=oL++)}function l(c,h){let p=0,u=0,f=0,_=0,M=0,g=0,d=h.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){let y=c[m];if(y.isSunLight){let T=i.sun[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(d),p++}else if(y.isDirectionalLight){let T=i.directional[u];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),u++}else if(y.isSpotLight){let T=i.spot[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),_++}else if(y.isRectAreaLight){let T=i.rectArea[M];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),r.identity(),a.copy(y.matrixWorld),a.premultiply(d),r.extractRotation(a),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(r),T.halfHeight.applyMatrix4(r),M++}else if(y.isPointLight){let T=i.point[f];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),f++}else if(y.isHemisphereLight){let T=i.hemi[g];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(d),g++}}}return{setup:o,setupView:l,state:i}}function xE(e){let t=new cL(e),n=[],i=[],s=[];function a(p){h.camera=p,n.length=0,i.length=0,s.length=0}function r(p){p.isLightProbeGrid?s.push(p):n.push(p)}function o(p){i.push(p)}function l(){t.setup(n),s.sort((p,u)=>p.priority-u.priority||p.id-u.id)}function c(p){t.setupView(n,p)}let h={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:h,setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function uL(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new xE(e),t.set(s,[o])):a>=r.length?(o=new xE(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var hL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,dL=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],pL=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],SE=new Ue,bu=new O,Y_=new O;function mL(e,t,n){let i=new Xa,s=new vt,a=new vt,r=new Xe,o=new fd,l=new dd,c={},h=n.maxTextureSize,p={[Ka]:Zn,[Zn]:Ka,[Mi]:Mi},u=new Es({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:hL,fragmentShader:fL}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let _=new yi;_.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new hn(_,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pu;let d=this.type;this.render=function(w,v,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===h1&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=pu);let I=e.getRenderTarget(),R=e.getActiveCubeFace(),C=e.getActiveMipmapLevel(),H=e.state;H.setBlending(Ir),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let W=d!==this.type;W&&v.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(F=>F.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,F=w.length;L<F;L++){let Z=w[L],V=Z.shadow;if(V===void 0){Gt("WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let it=V.getFrameExtents();s.multiply(it),a.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/it.x),s.x=a.x*it.x,V.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/it.y),s.y=a.y*it.y,V.mapSize.y=a.y));let k=e.state.buffers.depth.getReversed();if(V.camera._reversedDepth=k,V.map===null||W===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Ml){if(Z.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new vi(s.x,s.y,{format:Qa,type:es,minFilter:Dn,magFilter:Dn,generateMipmaps:!1}),V.map.texture.name=Z.name+".shadowMap",V.map.depthTexture=new $s(s.x,s.y,ts),V.map.depthTexture.name=Z.name+".shadowMapDepth",V.map.depthTexture.format=Qs,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=xn,V.map.depthTexture.magFilter=xn}else Z.isPointLight?(V.map=new Tu(s.x),V.map.depthTexture=new tu(s.x,$i)):(V.map=new vi(s.x,s.y),V.map.depthTexture=new $s(s.x,s.y,$i)),V.map.depthTexture.name=Z.name+".shadowMap",V.map.depthTexture.format=Qs,this.type===pu?(V.map.depthTexture.compareFunction=k?D_:N_,V.map.depthTexture.minFilter=Dn,V.map.depthTexture.magFilter=Dn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=xn,V.map.depthTexture.magFilter=xn);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let Q=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();Z.isPointLight!==!0&&V.updateMatrices(Z,E);let et=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:E.layers;for(let wt=0;wt<Q;wt++){let Pt=V.getCamera(wt);if(Z.isPointLight){let q=V.camera,yt=V.matrix,At=Z.distance||q.far;At!==q.far&&(q.far=At,q.updateProjectionMatrix()),bu.setFromMatrixPosition(Z.matrixWorld),q.position.copy(bu),Y_.copy(q.position),Y_.add(dL[wt]),q.up.copy(pL[wt]),q.lookAt(Y_),q.updateMatrixWorld(),yt.makeTranslation(-bu.x,-bu.y,-bu.z),SE.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),V._frustum.setFromProjectionMatrix(SE,q.coordinateSystem,q.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)e.setRenderTarget(V.map,wt),e.clear();else{wt===0&&(e.setRenderTarget(V.map),e.clear());let q=V.getViewport(wt);r.set(a.x*q.x,a.y*q.y,a.x*q.z,a.y*q.w),H.viewport(r)}i=V.getFrustum(wt),y(v,E,Pt,Z,et,this.type)}V.isPointLightShadow!==!0&&this.type===Ml&&m(V,E),V.needsUpdate=!1}d=this.type,g.needsUpdate=!1,e.setRenderTarget(I,R,C)};function m(w,v){let E=t.update(M);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new vi(s.x,s.y,{format:Qa,type:es}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(v,null,E,u,M,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(v,null,E,f,M,null)}function x(w,v,E,I){let R=null,C=E.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)R=C;else if(R=E.isPointLight===!0?l:o,e.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let H=R.uuid,W=v.uuid,L=c[H];L===void 0&&(L={},c[H]=L);let F=L[W];F===void 0&&(F=R.clone(),L[W]=F,v.addEventListener("dispose",T)),R=F}if(R.visible=v.visible,R.wireframe=v.wireframe,I===Ml?R.side=v.shadowSide!==null?v.shadowSide:v.side:R.side=v.shadowSide!==null?v.shadowSide:p[v.side],R.alphaMap=v.alphaMap,R.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,R.map=v.map,R.clipShadows=v.clipShadows,R.clippingPlanes=v.clippingPlanes,R.clipIntersection=v.clipIntersection,R.displacementMap=v.displacementMap,R.displacementScale=v.displacementScale,R.displacementBias=v.displacementBias,R.wireframeLinewidth=v.wireframeLinewidth,R.linewidth=v.linewidth,E.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let H=e.properties.get(R);H.light=E}return R}function y(w,v,E,I,R,C){if(w.visible===!1)return;if(w.layers.test(R)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===Ml)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,w.matrixWorld);let L=t.update(w),F=w.material;if(Array.isArray(F)){let Z=L.groups;for(let V=0,it=Z.length;V<it;V++){let k=Z[V],Q=F[k.materialIndex];if(Q&&Q.visible){let et=x(w,Q,I,C);w.onBeforeShadow(e,w,v,E,L,et,k),e.renderBufferDirect(E,null,L,et,w,k),w.onAfterShadow(e,w,v,E,L,et,k)}}}else if(F.visible){let Z=x(w,F,I,C);w.onBeforeShadow(e,w,v,E,L,Z,null),e.renderBufferDirect(E,null,L,Z,w,null),w.onAfterShadow(e,w,v,E,L,Z,null)}}let W=w.children;for(let L=0,F=W.length;L<F;L++)y(W[L],v,E,I,R,C)}function T(w){w.target.removeEventListener("dispose",T);for(let E in c){let I=c[E],R=w.target.uuid;R in I&&(I[R].dispose(),delete I[R])}}}function gL(e,t){function n(){let N=!1,K=new Xe,X=null,pt=new Xe(0,0,0,0);return{setMask:function(rt){X!==rt&&!N&&(e.colorMask(rt,rt,rt,rt),X=rt)},setLocked:function(rt){N=rt},setClear:function(rt,mt,Ot,Zt,at){at===!0&&(rt*=Zt,mt*=Zt,Ot*=Zt),K.set(rt,mt,Ot,Zt),pt.equals(K)===!1&&(e.clearColor(rt,mt,Ot,Zt),pt.copy(K))},reset:function(){N=!1,X=null,pt.set(-1,0,0,0)}}}function i(){let N=!1,K=!1,X=null,pt=null,rt=null;return{setReversed:function(mt){if(K!==mt){let Ot=t.get("EXT_clip_control");mt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),K=mt;let Zt=rt;rt=null,this.setClear(Zt)}},getReversed:function(){return K},setTest:function(mt){mt?St(e.DEPTH_TEST):Ft(e.DEPTH_TEST)},setMask:function(mt){X!==mt&&!N&&(e.depthMask(mt),X=mt)},setFunc:function(mt){if(K&&(mt=W1[mt]),pt!==mt){switch(mt){case qf:e.depthFunc(e.NEVER);break;case Yf:e.depthFunc(e.ALWAYS);break;case Zf:e.depthFunc(e.LESS);break;case il:e.depthFunc(e.LEQUAL);break;case Jf:e.depthFunc(e.EQUAL);break;case Kf:e.depthFunc(e.GEQUAL);break;case Qf:e.depthFunc(e.GREATER);break;case jf:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}pt=mt}},setLocked:function(mt){N=mt},setClear:function(mt){rt!==mt&&(rt=mt,K&&(mt=1-mt),e.clearDepth(mt))},reset:function(){N=!1,X=null,pt=null,rt=null,K=!1}}}function s(){let N=!1,K=null,X=null,pt=null,rt=null,mt=null,Ot=null,Zt=null,at=null;return{setTest:function(Vt){N||(Vt?St(e.STENCIL_TEST):Ft(e.STENCIL_TEST))},setMask:function(Vt){K!==Vt&&!N&&(e.stencilMask(Vt),K=Vt)},setFunc:function(Vt,kt,bt){(X!==Vt||pt!==kt||rt!==bt)&&(e.stencilFunc(Vt,kt,bt),X=Vt,pt=kt,rt=bt)},setOp:function(Vt,kt,bt){(mt!==Vt||Ot!==kt||Zt!==bt)&&(e.stencilOp(Vt,kt,bt),mt=Vt,Ot=kt,Zt=bt)},setLocked:function(Vt){N=Vt},setClear:function(Vt){at!==Vt&&(e.clearStencil(Vt),at=Vt)},reset:function(){N=!1,K=null,X=null,pt=null,rt=null,mt=null,Ot=null,Zt=null,at=null}}}let a=new n,r=new i,o=new s,l={},c=new WeakMap,h={},p={},u={},f=new WeakMap,_=[],M=null,g=!1,d=null,m=null,x=null,y=null,T=null,w=null,v=null,E=new ee(0,0,0),I=0,R=!1,C=null,H=null,W=null,L=null,F=null,Z=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,it=0,k=e.getParameter(e.VERSION);k.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(k)[1]),V=it>=1):k.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),V=it>=2);let Q=null,et={},wt=e.getParameter(e.SCISSOR_BOX),Pt=e.getParameter(e.VIEWPORT),q=new Xe().fromArray(wt),yt=new Xe().fromArray(Pt);function At(N,K,X,pt){let rt=new Uint8Array(4),mt=e.createTexture();e.bindTexture(N,mt),e.texParameteri(N,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(N,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ot=0;Ot<X;Ot++)N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY?e.texImage3D(K,0,e.RGBA,1,1,pt,0,e.RGBA,e.UNSIGNED_BYTE,rt):e.texImage2D(K+Ot,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,rt);return mt}let Bt={};Bt[e.TEXTURE_2D]=At(e.TEXTURE_2D,e.TEXTURE_2D,1),Bt[e.TEXTURE_CUBE_MAP]=At(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Bt[e.TEXTURE_2D_ARRAY]=At(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Bt[e.TEXTURE_3D]=At(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),St(e.DEPTH_TEST),r.setFunc(il),Et(!1),ct(c_),St(e.CULL_FACE),lt(Ir);function St(N){h[N]!==!0&&(e.enable(N),h[N]=!0)}function Ft(N){h[N]!==!1&&(e.disable(N),h[N]=!1)}function be(N,K){return u[N]!==K?(e.bindFramebuffer(N,K),u[N]=K,N===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=K),N===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=K),!0):!1}function Ht(N,K){let X=_,pt=!1;if(N){X=f.get(K),X===void 0&&(X=[],f.set(K,X));let rt=N.textures;if(X.length!==rt.length||X[0]!==e.COLOR_ATTACHMENT0){for(let mt=0,Ot=rt.length;mt<Ot;mt++)X[mt]=e.COLOR_ATTACHMENT0+mt;X.length=rt.length,pt=!0}}else X[0]!==e.BACK&&(X[0]=e.BACK,pt=!0);pt&&e.drawBuffers(X)}function Yt(N){return M!==N?(e.useProgram(N),M=N,!0):!1}let jt={[Pr]:e.FUNC_ADD,[d1]:e.FUNC_SUBTRACT,[p1]:e.FUNC_REVERSE_SUBTRACT};jt[m1]=e.MIN,jt[g1]=e.MAX;let tt={[_1]:e.ZERO,[v1]:e.ONE,[y1]:e.SRC_COLOR,[d_]:e.SRC_ALPHA,[T1]:e.SRC_ALPHA_SATURATE,[b1]:e.DST_COLOR,[S1]:e.DST_ALPHA,[x1]:e.ONE_MINUS_SRC_COLOR,[p_]:e.ONE_MINUS_SRC_ALPHA,[E1]:e.ONE_MINUS_DST_COLOR,[M1]:e.ONE_MINUS_DST_ALPHA,[A1]:e.CONSTANT_COLOR,[w1]:e.ONE_MINUS_CONSTANT_COLOR,[R1]:e.CONSTANT_ALPHA,[C1]:e.ONE_MINUS_CONSTANT_ALPHA};function lt(N,K,X,pt,rt,mt,Ot,Zt,at,Vt){if(N===Ir){g===!0&&(Ft(e.BLEND),g=!1);return}if(g===!1&&(St(e.BLEND),g=!0),N!==f1){if(N!==d||Vt!==R){if((m!==Pr||T!==Pr)&&(e.blendEquation(e.FUNC_ADD),m=Pr,T=Pr),Vt)switch(N){case bl:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case u_:e.blendFunc(e.ONE,e.ONE);break;case h_:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case f_:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Xt("WebGLState: Invalid blending: ",N);break}else switch(N){case bl:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case u_:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case h_:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case f_:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",N);break}x=null,y=null,w=null,v=null,E.set(0,0,0),I=0,d=N,R=Vt}return}rt=rt||K,mt=mt||X,Ot=Ot||pt,(K!==m||rt!==T)&&(e.blendEquationSeparate(jt[K],jt[rt]),m=K,T=rt),(X!==x||pt!==y||mt!==w||Ot!==v)&&(e.blendFuncSeparate(tt[X],tt[pt],tt[mt],tt[Ot]),x=X,y=pt,w=mt,v=Ot),(Zt.equals(E)===!1||at!==I)&&(e.blendColor(Zt.r,Zt.g,Zt.b,at),E.copy(Zt),I=at),d=N,R=!1}function ot(N,K){N.side===Mi?Ft(e.CULL_FACE):St(e.CULL_FACE);let X=N.side===Zn;K&&(X=!X),Et(X),N.blending===bl&&N.transparent===!1?lt(Ir):lt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),a.setMask(N.colorWrite);let pt=N.stencilWrite;o.setTest(pt),pt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Nt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?St(e.SAMPLE_ALPHA_TO_COVERAGE):Ft(e.SAMPLE_ALPHA_TO_COVERAGE)}function Et(N){C!==N&&(N?e.frontFace(e.CW):e.frontFace(e.CCW),C=N)}function ct(N){N!==c1?(St(e.CULL_FACE),N!==H&&(N===c_?e.cullFace(e.BACK):N===u1?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ft(e.CULL_FACE),H=N}function Wt(N){N!==W&&(V&&e.lineWidth(N),W=N)}function Nt(N,K,X){N?(St(e.POLYGON_OFFSET_FILL),(L!==K||F!==X)&&(L=K,F=X,r.getReversed()&&(K=-K,X=-X),e.polygonOffset(K,X))):Ft(e.POLYGON_OFFSET_FILL)}function ie(N){N?St(e.SCISSOR_TEST):Ft(e.SCISSOR_TEST)}function se(N){N===void 0&&(N=e.TEXTURE0+Z-1),Q!==N&&(e.activeTexture(N),Q=N)}function le(N,K,X){X===void 0&&(Q===null?X=e.TEXTURE0+Z-1:X=Q);let pt=et[X];pt===void 0&&(pt={type:void 0,texture:void 0},et[X]=pt),(pt.type!==N||pt.texture!==K)&&(Q!==X&&(e.activeTexture(X),Q=X),e.bindTexture(N,K||Bt[N]),pt.type=N,pt.texture=K)}function U(){let N=et[Q];N!==void 0&&N.type!==void 0&&(e.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function It(){try{e.compressedTexImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function te(){try{e.compressedTexImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function xe(){try{e.texSubImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function _t(){try{e.texSubImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function Pe(){try{e.compressedTexSubImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function Ut(){try{e.compressedTexSubImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function Dt(){try{e.texStorage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function A(){try{e.texStorage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function S(){try{e.texImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function B(){try{e.texImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function nt(N){return p[N]!==void 0?p[N]:e.getParameter(N)}function j(N,K){p[N]!==K&&(e.pixelStorei(N,K),p[N]=K)}function ut(N){q.equals(N)===!1&&(e.scissor(N.x,N.y,N.z,N.w),q.copy(N))}function dt(N){yt.equals(N)===!1&&(e.viewport(N.x,N.y,N.z,N.w),yt.copy(N))}function Y(N,K){let X=c.get(K);X===void 0&&(X=new WeakMap,c.set(K,X));let pt=X.get(N);pt===void 0&&(pt=e.getUniformBlockIndex(K,N.name),e.uniformBlockBinding(K,pt,pt),X.set(N,pt))}function J(N,K,X){let rt=c.get(K).get(N);l[rt]!==X&&(e.bindBufferBase(e.UNIFORM_BUFFER,rt,X),l[rt]=X)}function ht(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},p={},Q=null,et={},u={},l={},f=new WeakMap,_=[],M=null,g=!1,d=null,m=null,x=null,y=null,T=null,w=null,v=null,E=new ee(0,0,0),I=0,R=!1,C=null,H=null,W=null,L=null,F=null,q.set(0,0,e.canvas.width,e.canvas.height),yt.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:St,disable:Ft,bindFramebuffer:be,drawBuffers:Ht,useProgram:Yt,setBlending:lt,setMaterial:ot,setFlipSided:Et,setCullFace:ct,setLineWidth:Wt,setPolygonOffset:Nt,setScissorTest:ie,activeTexture:se,bindTexture:le,unbindTexture:U,compressedTexImage2D:It,compressedTexImage3D:te,texImage2D:S,texImage3D:B,pixelStorei:j,getParameter:nt,updateUBOMapping:Y,uniformBlockBinding:J,texStorage2D:Dt,texStorage3D:A,texSubImage2D:xe,texSubImage3D:_t,compressedTexSubImage2D:Pe,compressedTexSubImage3D:Ut,scissor:ut,viewport:dt,reset:ht}}function _L(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,h=new WeakMap,p=new Set,u,f=new WeakMap,_=new Set,M=new FinalizationRegistry(A=>_.delete(A)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(A,S){return g?new OffscreenCanvas(A,S):Zc("canvas")}function m(A,S,B){let nt=1,j=Dt(A);if((j.width>B||j.height>B)&&(nt=B/Math.max(j.width,j.height)),nt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ut=Math.floor(nt*j.width),dt=Math.floor(nt*j.height);u===void 0&&(u=d(ut,dt));let Y=S?d(ut,dt):u;return Y.width=ut,Y.height=dt,Y.getContext("2d").drawImage(A,0,0,ut,dt),Gt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ut+"x"+dt+")."),Y}else return"data"in A&&Gt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function x(A){return A.generateMipmaps}function y(A){e.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function w(A,S,B,nt,j,ut=!1){if(A!==null){if(e[A]!==void 0)return e[A];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let dt;nt&&(dt=t.get("EXT_texture_norm16"),dt||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=S;if(S===e.RED&&(B===e.FLOAT&&(Y=e.R32F),B===e.HALF_FLOAT&&(Y=e.R16F),B===e.UNSIGNED_BYTE&&(Y=e.R8),B===e.UNSIGNED_SHORT&&dt&&(Y=dt.R16_EXT),B===e.SHORT&&dt&&(Y=dt.R16_SNORM_EXT)),S===e.RED_INTEGER&&(B===e.UNSIGNED_BYTE&&(Y=e.R8UI),B===e.UNSIGNED_SHORT&&(Y=e.R16UI),B===e.UNSIGNED_INT&&(Y=e.R32UI),B===e.BYTE&&(Y=e.R8I),B===e.SHORT&&(Y=e.R16I),B===e.INT&&(Y=e.R32I)),S===e.RG&&(B===e.FLOAT&&(Y=e.RG32F),B===e.HALF_FLOAT&&(Y=e.RG16F),B===e.UNSIGNED_BYTE&&(Y=e.RG8),B===e.UNSIGNED_SHORT&&dt&&(Y=dt.RG16_EXT),B===e.SHORT&&dt&&(Y=dt.RG16_SNORM_EXT)),S===e.RG_INTEGER&&(B===e.UNSIGNED_BYTE&&(Y=e.RG8UI),B===e.UNSIGNED_SHORT&&(Y=e.RG16UI),B===e.UNSIGNED_INT&&(Y=e.RG32UI),B===e.BYTE&&(Y=e.RG8I),B===e.SHORT&&(Y=e.RG16I),B===e.INT&&(Y=e.RG32I)),S===e.RGB_INTEGER&&(B===e.UNSIGNED_BYTE&&(Y=e.RGB8UI),B===e.UNSIGNED_SHORT&&(Y=e.RGB16UI),B===e.UNSIGNED_INT&&(Y=e.RGB32UI),B===e.BYTE&&(Y=e.RGB8I),B===e.SHORT&&(Y=e.RGB16I),B===e.INT&&(Y=e.RGB32I)),S===e.RGBA_INTEGER&&(B===e.UNSIGNED_BYTE&&(Y=e.RGBA8UI),B===e.UNSIGNED_SHORT&&(Y=e.RGBA16UI),B===e.UNSIGNED_INT&&(Y=e.RGBA32UI),B===e.BYTE&&(Y=e.RGBA8I),B===e.SHORT&&(Y=e.RGBA16I),B===e.INT&&(Y=e.RGBA32I)),S===e.RGB&&(B===e.UNSIGNED_SHORT&&dt&&(Y=dt.RGB16_EXT),B===e.SHORT&&dt&&(Y=dt.RGB16_SNORM_EXT),B===e.UNSIGNED_INT_5_9_9_9_REV&&(Y=e.RGB9_E5),B===e.UNSIGNED_INT_10F_11F_11F_REV&&(Y=e.R11F_G11F_B10F)),S===e.RGBA){let J=ut?Yc:de.getTransfer(j);B===e.FLOAT&&(Y=e.RGBA32F),B===e.HALF_FLOAT&&(Y=e.RGBA16F),B===e.UNSIGNED_BYTE&&(Y=J===Ae?e.SRGB8_ALPHA8:e.RGBA8),B===e.UNSIGNED_SHORT&&dt&&(Y=dt.RGBA16_EXT),B===e.SHORT&&dt&&(Y=dt.RGBA16_SNORM_EXT),B===e.UNSIGNED_SHORT_4_4_4_4&&(Y=e.RGBA4),B===e.UNSIGNED_SHORT_5_5_5_1&&(Y=e.RGB5_A1)}return(Y===e.R16F||Y===e.R32F||Y===e.RG16F||Y===e.RG32F||Y===e.RGBA16F||Y===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(A,S){let B;return A?S===null||S===$i||S===zr?B=e.DEPTH24_STENCIL8:S===ts?B=e.DEPTH32F_STENCIL8:S===Tl&&(B=e.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===$i||S===zr?B=e.DEPTH_COMPONENT24:S===ts?B=e.DEPTH_COMPONENT32F:S===Tl&&(B=e.DEPTH_COMPONENT16),B}function E(A,S){return x(A)===!0||A.isFramebufferTexture&&A.minFilter!==xn&&A.minFilter!==Dn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function I(A){let S=new WeakRef(A);i.get(A).__ref=S,_.add(S),M.register(A,S,S)}function R(A){let S=i.get(A).__ref;S!==void 0&&(_.delete(S),M.unregister(S))}function C(A){W(A.target)}function H(A){L(A.target)}function W(A){A.removeEventListener("dispose",C),R(A),Z(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&p.delete(A)}function L(A){A.removeEventListener("dispose",H),R(A),it(A)}function F(){for(let A of _){let S=A.deref();S!==void 0&&(S.isRenderTarget===!0?L(S):W(S))}_.clear(),p.clear()}function Z(A){let S=i.get(A);if(S.__webglInit===void 0)return;let B=A.source,nt=f.get(B);if(nt){let j=nt[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&V(A),Object.keys(nt).length===0&&f.delete(B)}i.remove(A)}function V(A){let S=i.get(A);e.deleteTexture(S.__webglTexture);let B=A.source,nt=f.get(B);delete nt[S.__cacheKey],r.memory.textures--}function it(A){let S=i.get(A);S.__depthDisposeCallback&&S.__depthDisposeCallback();let B=A.depthTexture;if(B&&B.renderTarget===A&&W(B),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let ut=0;ut<S.__webglFramebuffer[j].length;ut++)e.deleteFramebuffer(S.__webglFramebuffer[j][ut]);else e.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)e.deleteFramebuffer(S.__webglFramebuffer[j]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let nt=A.textures;for(let j=0,ut=nt.length;j<ut;j++){let dt=i.get(nt[j]);dt.__webglTexture&&(e.deleteTexture(dt.__webglTexture),r.memory.textures--),i.remove(nt[j])}i.remove(A)}let k=0;function Q(){k=0}function et(){return k}function wt(A){k=A}function Pt(){let A=k;return A>=s.maxTextures&&Gt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,A}function q(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.mipmapsAutoUpdate),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function yt(A,S){let B=i.get(A);if(A.isVideoTexture&&Pe(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let nt=A.image;if(nt===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{ot(B,A,S);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,B.__webglTexture,e.TEXTURE0+S)}function At(A,S){let B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){ot(B,A,S);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,B.__webglTexture,e.TEXTURE0+S)}function Bt(A,S){let B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){ot(B,A,S);return}n.bindTexture(e.TEXTURE_3D,B.__webglTexture,e.TEXTURE0+S)}function St(A,S){let B=i.get(A);if(A.version>0&&B.__version!==A.version){Et(B,A,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,B.__webglTexture,e.TEXTURE0+S)}let Ft={[Ms]:e.REPEAT,[Oi]:e.CLAMP_TO_EDGE,[$f]:e.MIRRORED_REPEAT},be={[xn]:e.NEAREST,[L1]:e.NEAREST_MIPMAP_NEAREST,[gu]:e.NEAREST_MIPMAP_LINEAR,[Dn]:e.LINEAR,[Nd]:e.LINEAR_MIPMAP_NEAREST,[ji]:e.LINEAR_MIPMAP_LINEAR},Ht={[P1]:e.NEVER,[L_]:e.ALWAYS,[B1]:e.LESS,[N_]:e.LEQUAL,[z1]:e.EQUAL,[D_]:e.GEQUAL,[F1]:e.GREATER,[H1]:e.NOTEQUAL};function Yt(A,S){if(S.type===ts&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Dn||S.magFilter===Nd||S.magFilter===gu||S.magFilter===ji||S.minFilter===Dn||S.minFilter===Nd||S.minFilter===gu||S.minFilter===ji)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,Ft[S.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,Ft[S.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,Ft[S.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,be[S.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,be[S.minFilter]),S.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,Ht[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===xn||S.minFilter!==gu&&S.minFilter!==ji||S.type===ts&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function jt(A,S){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",C),I(S));let nt=S.source,j=f.get(nt);j===void 0&&(j={},f.set(nt,j));let ut=q(S);if(ut!==A.__cacheKey){j[ut]===void 0&&(j[ut]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,B=!0),j[ut].usedTimes++;let dt=j[A.__cacheKey];dt!==void 0&&(j[A.__cacheKey].usedTimes--,dt.usedTimes===0&&V(S)),A.__cacheKey=ut,A.__webglTexture=j[ut].texture}return B}function tt(A,S,B){return Math.floor(Math.floor(A/B)/S)}function lt(A,S,B,nt){let ut=A.updateRanges;if(ut.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,B,nt,S.data);else{ut.sort((N,K)=>N.start-K.start);let dt=0;for(let N=1;N<ut.length;N++){let K=ut[dt],X=ut[N],pt=K.start+K.count,rt=tt(X.start,S.width,4),mt=tt(K.start,S.width,4);X.start<=pt+1&&rt===mt&&tt(X.start+X.count-1,S.width,4)===rt?K.count=Math.max(K.count,X.start+X.count-K.start):(++dt,ut[dt]=X)}ut.length=dt+1;let Y=n.getParameter(e.UNPACK_ROW_LENGTH),J=n.getParameter(e.UNPACK_SKIP_PIXELS),ht=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let N=0,K=ut.length;N<K;N++){let X=ut[N],pt=Math.floor(X.start/4),rt=Math.ceil(X.count/4),mt=pt%S.width,Ot=Math.floor(pt/S.width),Zt=rt,at=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,mt),n.pixelStorei(e.UNPACK_SKIP_ROWS,Ot),n.texSubImage2D(e.TEXTURE_2D,0,mt,Ot,Zt,at,B,nt,S.data)}A.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,Y),n.pixelStorei(e.UNPACK_SKIP_PIXELS,J),n.pixelStorei(e.UNPACK_SKIP_ROWS,ht)}}function ot(A,S,B){let nt=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(nt=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(nt=e.TEXTURE_3D);let j=jt(A,S),ut=S.source;n.bindTexture(nt,A.__webglTexture,e.TEXTURE0+B);let dt=i.get(ut);if(ut.version!==dt.__version||j===!0){if(n.activeTexture(e.TEXTURE0+B),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let at=de.getPrimaries(de.workingColorSpace),Vt=S.colorSpace===ea?null:de.getPrimaries(S.colorSpace),kt=S.colorSpace===ea||at===Vt?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt)}n.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment);let J=m(S.image,!1,s.maxTextureSize);J=Ut(S,J);let ht=a.convert(S.format,S.colorSpace),N=a.convert(S.type),K=w(S.internalFormat,ht,N,S.normalized,S.colorSpace,S.isVideoTexture);Yt(nt,S);let X,pt=S.mipmaps,rt=S.isVideoTexture!==!0,mt=dt.__version===void 0||j===!0,Ot=ut.dataReady,Zt=E(S,J);if(S.isDepthTexture)K=v(S.format===ta,S.type),mt&&(rt?n.texStorage2D(e.TEXTURE_2D,1,K,J.width,J.height):n.texImage2D(e.TEXTURE_2D,0,K,J.width,J.height,0,ht,N,null));else if(S.isDataTexture)if(pt.length>0){rt&&mt&&n.texStorage2D(e.TEXTURE_2D,Zt,K,pt[0].width,pt[0].height);for(let at=0,Vt=pt.length;at<Vt;at++)X=pt[at],rt?Ot&&n.texSubImage2D(e.TEXTURE_2D,at,0,0,X.width,X.height,ht,N,X.data):n.texImage2D(e.TEXTURE_2D,at,K,X.width,X.height,0,ht,N,X.data);S.generateMipmaps=!1}else rt?(mt&&n.texStorage2D(e.TEXTURE_2D,Zt,K,J.width,J.height),Ot&&lt(S,J,ht,N)):n.texImage2D(e.TEXTURE_2D,0,K,J.width,J.height,0,ht,N,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){rt&&mt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Zt,K,pt[0].width,pt[0].height,J.depth);for(let at=0,Vt=pt.length;at<Vt;at++)if(X=pt[at],S.format!==ns)if(ht!==null)if(rt){if(Ot)if(S.layerUpdates.size>0){let kt=H_(X.width,X.height,S.format,S.type);for(let bt of S.layerUpdates){let ve=X.data.subarray(bt*kt/X.data.BYTES_PER_ELEMENT,(bt+1)*kt/X.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,at,0,0,bt,X.width,X.height,1,ht,ve)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,at,0,0,0,X.width,X.height,J.depth,ht,X.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,at,K,X.width,X.height,J.depth,0,X.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?Ot&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,at,0,0,0,X.width,X.height,J.depth,ht,N,X.data):n.texImage3D(e.TEXTURE_2D_ARRAY,at,K,X.width,X.height,J.depth,0,ht,N,X.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{rt&&mt&&n.texStorage2D(e.TEXTURE_2D,Zt,K,pt[0].width,pt[0].height);for(let at=0,Vt=pt.length;at<Vt;at++)X=pt[at],S.format!==ns?ht!==null?rt?Ot&&n.compressedTexSubImage2D(e.TEXTURE_2D,at,0,0,X.width,X.height,ht,X.data):n.compressedTexImage2D(e.TEXTURE_2D,at,K,X.width,X.height,0,X.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?Ot&&n.texSubImage2D(e.TEXTURE_2D,at,0,0,X.width,X.height,ht,N,X.data):n.texImage2D(e.TEXTURE_2D,at,K,X.width,X.height,0,ht,N,X.data)}else if(S.isDataArrayTexture)if(rt){if(mt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Zt,K,J.width,J.height,J.depth),Ot)if(S.layerUpdates.size>0){let at=H_(J.width,J.height,S.format,S.type);for(let Vt of S.layerUpdates){let kt=J.data.subarray(Vt*at/J.data.BYTES_PER_ELEMENT,(Vt+1)*at/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Vt,J.width,J.height,1,ht,N,kt)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ht,N,J.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,K,J.width,J.height,J.depth,0,ht,N,J.data);else if(S.isData3DTexture)rt?(mt&&n.texStorage3D(e.TEXTURE_3D,Zt,K,J.width,J.height,J.depth),Ot&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ht,N,J.data)):n.texImage3D(e.TEXTURE_3D,0,K,J.width,J.height,J.depth,0,ht,N,J.data);else if(S.isFramebufferTexture){if(mt)if(rt)n.texStorage2D(e.TEXTURE_2D,Zt,K,J.width,J.height);else{let at=J.width,Vt=J.height;for(let kt=0;kt<Zt;kt++)n.texImage2D(e.TEXTURE_2D,kt,K,at,Vt,0,ht,N,null),at>>=1,Vt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in e){let at=e.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),J.parentNode!==at){at.appendChild(J),p.add(S),at.onpaint=Vt=>{let kt=Vt.changedElements;for(let bt of p)kt.includes(bt.image)&&(bt.needsUpdate=!0)},at.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,J);else{let kt=e.RGBA,bt=e.RGBA,ve=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,kt,bt,ve,J)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(pt.length>0){if(rt&&mt){let at=Dt(pt[0]);n.texStorage2D(e.TEXTURE_2D,Zt,K,at.width,at.height)}for(let at=0,Vt=pt.length;at<Vt;at++)X=pt[at],rt?Ot&&n.texSubImage2D(e.TEXTURE_2D,at,0,0,ht,N,X):n.texImage2D(e.TEXTURE_2D,at,K,ht,N,X);S.generateMipmaps=!1}else if(rt){if(mt){let at=Dt(J);n.texStorage2D(e.TEXTURE_2D,Zt,K,at.width,at.height)}Ot&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ht,N,J)}else n.texImage2D(e.TEXTURE_2D,0,K,ht,N,J);x(S)&&S.mipmapsAutoUpdate===!0&&y(nt),dt.__version=ut.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Et(A,S,B){if(S.image.length!==6)return;let nt=jt(A,S),j=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+B);let ut=i.get(j);if(j.version!==ut.__version||nt===!0){n.activeTexture(e.TEXTURE0+B);let dt=de.getPrimaries(de.workingColorSpace),Y=S.colorSpace===ea?null:de.getPrimaries(S.colorSpace),J=S.colorSpace===ea||dt===Y?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ht=S.isCompressedTexture||S.image[0].isCompressedTexture,N=S.image[0]&&S.image[0].isDataTexture,K=[];for(let bt=0;bt<6;bt++)!ht&&!N?K[bt]=m(S.image[bt],!0,s.maxCubemapSize):K[bt]=N?S.image[bt].image:S.image[bt],K[bt]=Ut(S,K[bt]);let X=K[0],pt=a.convert(S.format,S.colorSpace),rt=a.convert(S.type),mt=w(S.internalFormat,pt,rt,S.normalized,S.colorSpace),Ot=S.isVideoTexture!==!0,Zt=ut.__version===void 0||nt===!0,at=j.dataReady,Vt=E(S,X);Yt(e.TEXTURE_CUBE_MAP,S);let kt;if(S.isDepthTexture){if(mt=v(S.format===ta,S.type),Zt)if(Ot)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,mt,X.width,X.height);else for(let bt=0;bt<6;bt++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,mt,X.width,X.height,0,pt,rt,null)}else if(ht){Ot&&Zt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,Vt,mt,X.width,X.height);for(let bt=0;bt<6;bt++){kt=K[bt].mipmaps;for(let ve=0;ve<kt.length;ve++){let $e=kt[ve];S.format!==ns?pt!==null?Ot?at&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ve,0,0,$e.width,$e.height,pt,$e.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ve,mt,$e.width,$e.height,0,$e.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ve,0,0,$e.width,$e.height,pt,rt,$e.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ve,mt,$e.width,$e.height,0,pt,rt,$e.data)}}}else{if(kt=S.mipmaps,Ot&&Zt){kt.length>0&&Vt++;let bt=Dt(K[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,Vt,mt,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(N){Ot?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,K[bt].width,K[bt].height,pt,rt,K[bt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,mt,K[bt].width,K[bt].height,0,pt,rt,K[bt].data);for(let ve=0;ve<kt.length;ve++){let Pi=kt[ve].image[bt].image;Ot?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ve+1,0,0,Pi.width,Pi.height,pt,rt,Pi.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ve+1,mt,Pi.width,Pi.height,0,pt,rt,Pi.data)}}else{Ot?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,pt,rt,K[bt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,mt,pt,rt,K[bt]);for(let ve=0;ve<kt.length;ve++){let $e=kt[ve];Ot?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ve+1,0,0,pt,rt,$e.image[bt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ve+1,mt,pt,rt,$e.image[bt])}}}x(S)&&S.mipmapsAutoUpdate===!0&&y(e.TEXTURE_CUBE_MAP),ut.__version=j.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ct(A,S,B,nt,j,ut){let dt=a.convert(B.format,B.colorSpace),Y=a.convert(B.type),J=w(B.internalFormat,dt,Y,B.normalized,B.colorSpace),ht=i.get(S),N=i.get(B);if(N.__renderTarget=S,!ht.__hasExternalTextures){let K=Math.max(1,S.width>>ut),X=Math.max(1,S.height>>ut);j===e.TEXTURE_3D||j===e.TEXTURE_2D_ARRAY?n.texImage3D(j,ut,J,K,X,S.depth,0,dt,Y,null):n.texImage2D(j,ut,J,K,X,0,dt,Y,null)}n.bindFramebuffer(e.FRAMEBUFFER,A),_t(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,nt,j,N.__webglTexture,0,xe(S)):(j===e.TEXTURE_2D||j>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,nt,j,N.__webglTexture,ut),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Wt(A,S,B){if(e.bindRenderbuffer(e.RENDERBUFFER,A),S.depthBuffer){let nt=S.depthTexture,j=nt&&nt.isDepthTexture?nt.type:null,ut=v(S.stencilBuffer,j),dt=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;_t(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,xe(S),ut,S.width,S.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,xe(S),ut,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,ut,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,dt,e.RENDERBUFFER,A)}else{let nt=S.textures;for(let j=0;j<nt.length;j++){let ut=nt[j],dt=a.convert(ut.format,ut.colorSpace),Y=a.convert(ut.type),J=w(ut.internalFormat,dt,Y,ut.normalized,ut.colorSpace);_t(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,xe(S),J,S.width,S.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,xe(S),J,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,J,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Nt(A,S,B){let nt=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=i.get(S.depthTexture);j.__renderTarget=S;let ut=nt?S.depthTexture.image[0]:S.depthTexture.image;(!j.__webglTexture||ut.width!==S.width||ut.height!==S.height)&&(ut.width=S.width,ut.height=S.height,S.depthTexture.needsUpdate=!0),nt?St(S.depthTexture,0):yt(S.depthTexture,0);let dt=j.__webglTexture,Y=xe(S),J=nt?e.TEXTURE_CUBE_MAP_POSITIVE_X+B:e.TEXTURE_2D,ht=S.depthTexture.format===ta?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(S.depthTexture.format===Qs)_t(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ht,J,dt,0,Y):e.framebufferTexture2D(e.FRAMEBUFFER,ht,J,dt,0);else if(S.depthTexture.format===ta)_t(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ht,J,dt,0,Y):e.framebufferTexture2D(e.FRAMEBUFFER,ht,J,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ie(A){let S=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let nt=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),nt){let j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,nt.removeEventListener("dispose",j)};nt.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=nt}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(B)for(let nt=0;nt<6;nt++)Nt(S.__webglFramebuffer[nt],A,nt);else A.texture.mipmaps.length>0?Nt(S.__webglFramebuffer[0],A,0):Nt(S.__webglFramebuffer,A,0);else if(B){S.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[nt]),S.__webglDepthbuffer[nt]===void 0)S.__webglDepthbuffer[nt]=e.createRenderbuffer(),Wt(S.__webglDepthbuffer[nt],A,!1);else{let j=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ut=S.__webglDepthbuffer[nt];e.bindRenderbuffer(e.RENDERBUFFER,ut),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,ut)}}else if(A.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),Wt(S.__webglDepthbuffer,A,!1);else{let j=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ut=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ut),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,ut)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function se(A,S,B){let nt=i.get(A);S!==void 0&&ct(nt.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),B!==void 0&&ie(A)}function le(A){let S=A.texture,B=i.get(A),nt=i.get(S);A.addEventListener("dispose",H),I(A);let j=A.textures,ut=A.isWebGLCubeRenderTarget===!0,dt=j.length>1;if(dt||(nt.__webglTexture===void 0&&(nt.__webglTexture=e.createTexture()),nt.__version=S.version,r.memory.textures++),ut){B.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(S.mipmaps.length>0){B.__webglFramebuffer[Y]=[];for(let J=0;J<S.mipmaps.length;J++)B.__webglFramebuffer[Y][J]=e.createFramebuffer()}else B.__webglFramebuffer[Y]=e.createFramebuffer()}else{if(S.mipmaps.length>0){B.__webglFramebuffer=[];for(let Y=0;Y<S.mipmaps.length;Y++)B.__webglFramebuffer[Y]=e.createFramebuffer()}else B.__webglFramebuffer=e.createFramebuffer();if(dt)for(let Y=0,J=j.length;Y<J;Y++){let ht=i.get(j[Y]);ht.__webglTexture===void 0&&(ht.__webglTexture=e.createTexture(),r.memory.textures++)}if(A.samples>0&&_t(A)===!1){B.__webglMultisampledFramebuffer=e.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Y=0;Y<j.length;Y++){let J=j[Y];B.__webglColorRenderbuffer[Y]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,B.__webglColorRenderbuffer[Y]);let ht=a.convert(J.format,J.colorSpace),N=a.convert(J.type),K=w(J.internalFormat,ht,N,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),X=xe(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,X,K,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Y,e.RENDERBUFFER,B.__webglColorRenderbuffer[Y])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=e.createRenderbuffer(),Wt(B.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ut){n.bindTexture(e.TEXTURE_CUBE_MAP,nt.__webglTexture),Yt(e.TEXTURE_CUBE_MAP,S);for(let Y=0;Y<6;Y++)if(S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)ct(B.__webglFramebuffer[Y][J],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else ct(B.__webglFramebuffer[Y],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);x(S)?y(e.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),n.unbindTexture()}else if(dt){for(let Y=0,J=j.length;Y<J;Y++){let ht=j[Y],N=i.get(ht),K=e.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(K,N.__webglTexture),Yt(K,ht),ct(B.__webglFramebuffer,A,ht,e.COLOR_ATTACHMENT0+Y,K,0),x(ht)&&y(K)}n.unbindTexture()}else{let Y=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Y,nt.__webglTexture),Yt(Y,S),S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)ct(B.__webglFramebuffer[J],A,S,e.COLOR_ATTACHMENT0,Y,J);else ct(B.__webglFramebuffer,A,S,e.COLOR_ATTACHMENT0,Y,0);x(S)?y(Y):S.mipmaps.length>0&&e.texParameteri(Y,e.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),n.unbindTexture()}A.depthBuffer&&ie(A)}function U(A){let S=A.textures;for(let B=0,nt=S.length;B<nt;B++){let j=S[B];if(x(j)&&j.mipmapsAutoUpdate===!0){let ut=T(A),dt=i.get(j).__webglTexture;n.bindTexture(ut,dt),y(ut),n.unbindTexture()}}}let It=[];function te(A){if(A.samples>0){if(_t(A)===!1){let S=A.textures,B=A.width,nt=A.height,j=e.COLOR_BUFFER_BIT,ut=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,dt=i.get(A),Y=S.length>1;if(Y)for(let ht=0;ht<S.length;ht++)n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let ht=0;ht<S.length;ht++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=e.STENCIL_BUFFER_BIT)),Y){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,dt.__webglColorRenderbuffer[ht]);let N=i.get(S[ht]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,N,0)}e.blitFramebuffer(0,0,B,nt,0,0,B,nt,j,e.NEAREST),l===!0&&(It.length=0,It.push(e.COLOR_ATTACHMENT0+ht),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&It.push(ut),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,It))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Y)for(let ht=0;ht<S.length;ht++){n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.RENDERBUFFER,dt.__webglColorRenderbuffer[ht]);let N=i.get(S[ht]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.TEXTURE_2D,N,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let S=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function xe(A){return Math.min(s.maxSamples,A.samples)}function _t(A){let S=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Pe(A){let S=r.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Ut(A,S){let B=A.colorSpace,nt=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==qc&&B!==ea&&(de.getTransfer(B)===Ae?(nt!==ns||j!==si)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",B)),S}function Dt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Pt,this.resetTextureUnits=Q,this.getTextureUnits=et,this.setTextureUnits=wt,this.setTexture2D=yt,this.setTexture2DArray=At,this.setTexture3D=Bt,this.setTextureCube=St,this.rebindTextures=se,this.setupRenderTarget=le,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=_t,this.dispose=F}function vL(e,t){function n(i,s=ea){let a,r=de.getTransfer(s);if(i===si)return e.UNSIGNED_BYTE;if(i===Ld)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Ud)return e.UNSIGNED_SHORT_5_5_5_1;if(i===T_)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===A_)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===b_)return e.BYTE;if(i===E_)return e.SHORT;if(i===Tl)return e.UNSIGNED_SHORT;if(i===Dd)return e.INT;if(i===$i)return e.UNSIGNED_INT;if(i===ts)return e.FLOAT;if(i===es)return e.HALF_FLOAT;if(i===w_)return e.ALPHA;if(i===R_)return e.RGB;if(i===ns)return e.RGBA;if(i===Qs)return e.DEPTH_COMPONENT;if(i===ta)return e.DEPTH_STENCIL;if(i===C_)return e.RED;if(i===Od)return e.RED_INTEGER;if(i===Qa)return e.RG;if(i===Id)return e.RG_INTEGER;if(i===Pd)return e.RGBA_INTEGER;if(i===_u||i===vu||i===yu||i===xu)if(r===Ae)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===_u)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===_u)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bd||i===zd||i===Fd||i===Hd)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Bd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vd||i===Gd||i===kd||i===Xd||i===Wd||i===Su||i===qd)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Vd||i===Gd)return r===Ae?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===kd)return r===Ae?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xd)return a.COMPRESSED_R11_EAC;if(i===Wd)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Su)return a.COMPRESSED_RG11_EAC;if(i===qd)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Yd||i===Zd||i===Jd||i===Kd||i===Qd||i===jd||i===$d||i===tp||i===ep||i===np||i===ip||i===sp||i===ap||i===rp)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Yd)return r===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Zd)return r===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jd)return r===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kd)return r===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qd)return r===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jd)return r===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$d)return r===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tp)return r===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ep)return r===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===np)return r===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ip)return r===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sp)return r===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ap)return r===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rp)return r===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===op||i===lp||i===cp)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===op)return r===Ae?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===up||i===hp||i===Mu||i===fp)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===up)return a.COMPRESSED_RED_RGTC1_EXT;if(i===hp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zr?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var yL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xL=`
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

}`,tv=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new eu(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new Es({vertexShader:yL,fragmentShader:xL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new hn(new Or(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ev=class extends bs{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,f=null,_=null,M=typeof XRWebGLBinding<"u",g=new tv,d={},m=n.getContextAttributes(),x=null,y=null,T=[],w=[],v=new vt,E=null,I=null,R=new Xn;R.viewport=new Xe;let C=new Xn;C.viewport=new Xe;let H=[R,C],W=new Ad,L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let yt=T[q];return yt===void 0&&(yt=new ll,T[q]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(q){let yt=T[q];return yt===void 0&&(yt=new ll,T[q]=yt),yt.getGripSpace()},this.getHand=function(q){let yt=T[q];return yt===void 0&&(yt=new ll,T[q]=yt),yt.getHandSpace()};function Z(q){let yt=w.indexOf(q.inputSource);if(yt===-1)return;let At=T[yt];At!==void 0&&(At.update(q.inputSource,q.frame,c||r),At.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",it);for(let q=0;q<T.length;q++){let yt=w[q];yt!==null&&(w[q]=null,T[q].disconnect(yt))}L=null,F=null,g.reset();for(let q in d)delete d[q];if(t.setRenderTarget(x),f=null,u=null,p=null,s=null,y=null,Pt.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(v.width,v.height,!1),I!==null){let q=I.camera;q.fov=I.fov,q.zoom=I.zoom,q.updateProjectionMatrix(),I=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,i.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(s,n)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",V),s.addEventListener("inputsourceschange",it),m.xrCompatible!==!0&&await n.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(v),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Bt=null,St=null;m.depth&&(St=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,At=m.stencil?ta:Qs,Bt=m.stencil?zr:$i);let Ft={colorFormat:n.RGBA8,depthFormat:St,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(Ft),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new vi(u.textureWidth,u.textureHeight,{format:ns,type:si,depthTexture:new $s(u.textureWidth,u.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let At={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,n,At),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new vi(f.framebufferWidth,f.framebufferHeight,{format:ns,type:si,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Pt.setContext(s),Pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function it(q){for(let yt=0;yt<q.removed.length;yt++){let At=q.removed[yt],Bt=w.indexOf(At);Bt>=0&&(w[Bt]=null,T[Bt].disconnect(At))}for(let yt=0;yt<q.added.length;yt++){let At=q.added[yt],Bt=w.indexOf(At);if(Bt===-1){for(let Ft=0;Ft<T.length;Ft++)if(Ft>=w.length){w.push(At),Bt=Ft;break}else if(w[Ft]===null){w[Ft]=At,Bt=Ft;break}if(Bt===-1)break}let St=T[Bt];St&&St.connect(At)}}function k(q,yt){yt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(yt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let yt=q.near,At=q.far;g.texture!==null&&(g.depthNear>0&&(yt=g.depthNear),g.depthFar>0&&(At=g.depthFar)),W.near=C.near=R.near=yt,W.far=C.far=R.far=At,(L!==W.near||F!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),L=W.near,F=W.far),W.layers.mask=q.layers.mask|6,R.layers.mask=W.layers.mask&-5,C.layers.mask=W.layers.mask&-3;let Bt=q.parent,St=W.cameras;k(W,Bt);for(let Ft=0;Ft<St.length;Ft++)k(St[Ft],Bt);W.projectionMatrix.copy(R.projectionMatrix),W.projectionMatrixInverse.copy(R.projectionMatrixInverse),I===null&&q.isPerspectiveCamera&&(I={camera:q,fov:q.fov,zoom:q.zoom}),Q(q,W,Bt)};function Q(q,yt,At){At===null?q.matrix.copy(yt.matrixWorld):(q.matrix.copy(At.matrixWorld),q.matrix.invert(),q.matrix.multiply(yt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(yt.projectionMatrix),q.projectionMatrixInverse.copy(yt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ed*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(W)},this.getCameraTexture=function(q){return d[q]};let et=null;function wt(q,yt){if(h=yt.getViewerPose(c||r),_=yt,h!==null){let At=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Bt=!1;At.length!==W.cameras.length&&(W.cameras.length=0,Bt=!0);for(let Ht=0;Ht<At.length;Ht++){let Yt=At[Ht],jt=null;if(f!==null)jt=f.getViewport(Yt);else{let lt=p.getViewSubImage(u,Yt);jt=lt.viewport,Ht===0&&(t.setRenderTargetTextures(y,lt.colorTexture,lt.depthStencilTexture),t.setRenderTarget(y))}let tt=H[Ht];tt===void 0&&(tt=new Xn,tt.layers.enable(Ht),tt.viewport=new Xe,H[Ht]=tt),tt.matrix.fromArray(Yt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Yt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(jt.x,jt.y,jt.width,jt.height),Ht===0&&(W.matrix.copy(tt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Bt===!0&&W.cameras.push(tt)}let St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){p=i.getBinding();let Ht=p.getDepthInformation(At[0]);Ht&&Ht.isValid&&Ht.texture&&g.init(Ht,s.renderState)}if(St&&St.includes("camera-access")&&M){t.state.unbindTexture(),p=i.getBinding();for(let Ht=0;Ht<At.length;Ht++){let Yt=At[Ht].camera;if(Yt){let jt=d[Yt];jt||(jt=new eu,d[Yt]=jt);let tt=p.getCameraImage(Yt);jt.sourceTexture=tt}}}}for(let At=0;At<T.length;At++){let Bt=w[At],St=T[At];Bt!==null&&St!==void 0&&St.update(Bt,yt,c||r)}et&&et(q,yt),yt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:yt}),_=null}let Pt=new ME;Pt.setAnimationLoop(wt),this.setAnimationLoop=function(q){et=q},this.dispose=function(){}}},SL=new Ue,LE=new Jt;LE.set(-1,0,0,0,1,0,0,0,1);function ML(e,t){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,B_(e)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,m,x,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?a(g,d):d.isMeshLambertMaterial?(a(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(a(g,d),p(g,d)):d.isMeshPhongMaterial?(a(g,d),h(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(a(g,d),u(g,d),d.isMeshPhysicalMaterial&&f(g,d,y)):d.isMeshMatcapMaterial?(a(g,d),_(g,d)):d.isMeshDepthMaterial?a(g,d):d.isMeshDistanceMaterial?(a(g,d),M(g,d)):d.isMeshNormalMaterial?a(g,d):d.isLineBasicMaterial?(r(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,m,x):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Zn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Zn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let m=t.get(d),x=m.envMap,y=m.envMapRotation;x&&(g.envMap.value=x,g.envMapRotation.value.setFromMatrix4(SL.makeRotationFromEuler(y)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(LE),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function r(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,m,x){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*m,g.scale.value=x*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function p(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function u(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function f(g,d,m){g.ior.value=d.ior,d.diffuseRoughness>0&&(g.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=d.diffuseRoughnessMap,n(d.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Zn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.retroreflectivity>0&&(g.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function M(g,d){let m=t.get(d).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function bL(e,t,n,i){let s={},a={};function r(m,x){let y=x.program;i.uniformBlockBinding(m,y,s[m.id])}function o(m,x){let y=s[m.id];y===void 0&&(_(m),y=l(m),s[m.id]=y,m.addEventListener("dispose",g));let T=x.program;i.updateUBOMapping(m,T);let w=t.render.frame;a[m.id]!==w&&(c(m),a[m.id]=w)}function l(m){let x=e.createBuffer(),y=m.__size,T=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,y,T),e.bindBuffer(e.UNIFORM_BUFFER,null),x}function c(m){let x=s[m.id],y=m.uniforms,T=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,x);for(let w=0,v=y.length;w<v;w++){let E=y[w];if(Array.isArray(E))for(let I=0,R=E.length;I<R;I++)h(E[I],w,I,T);else h(E,w,0,T)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(m,x,y,T){if(u(m,x,y,T)===!0){let w=m.__offset,v=m.value;if(Array.isArray(v)){let E=0;for(let I=0;I<v.length;I++){let R=v[I],C=M(R,!0);p(R,m.__data,E),E+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else p(v,m.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,w,m.__data)}}function p(m,x,y){typeof m=="number"||typeof m=="boolean"?x[y]=m:m.isMatrix3?(x[y]=m.elements[0],x[y+1]=m.elements[1],x[y+2]=m.elements[2],x[y+3]=0,x[y+4]=m.elements[3],x[y+5]=m.elements[4],x[y+6]=m.elements[5],x[y+7]=0,x[y+8]=m.elements[6],x[y+9]=m.elements[7],x[y+10]=m.elements[8],x[y+11]=0):ArrayBuffer.isView(m)?x.set(m.subarray(0,x.length-y),y):m.toArray(x,y)}function u(m,x,y,T){let w=m.value,v=x+"_"+y;if(Array.isArray(w)){T[v]===void 0&&(T[v]=[]);let E=T[v],I=!1;for(let R=0;R<w.length;R++)f(w[R],E,R)===!0&&(I=!0);return I}return f(w,T,v)}function f(m,x,y){if(x[y]===void 0)return typeof m=="number"||typeof m=="boolean"?x[y]=m:ArrayBuffer.isView(m)?x[y]=m.slice():x[y]=m.clone(),!0;{let T=x[y];if(typeof m=="number"||typeof m=="boolean"){if(T!==m)return x[y]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(T.equals(m)===!1)return T.copy(m),!0}}return!1}function _(m){let x=m.uniforms,y=0,T=16;for(let v=0,E=x.length;v<E;v++){let I=Array.isArray(x[v])?x[v]:[x[v]];for(let R=0,C=I.length;R<C;R++){let H=I[R],W=Array.isArray(H.value)?H.value:[H.value],L=Array.isArray(x[v])||Array.isArray(H.value),F=y;for(let V=0,it=W.length;V<it;V++){let k=W[V],Q=M(k,L),et=y%T,wt=et%Q.boundary,Pt=et+wt;y+=wt,Pt!==0&&T-Pt<Q.storage&&(y+=T-Pt),V===0&&(F=y),y+=Q.storage}let Z=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new Z((y-F)/Float32Array.BYTES_PER_ELEMENT),H.__offset=F}}let w=y%T;return w>0&&(y+=T-w),m.__size=y,m.__cache={},this}function M(m,x){let y={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(y.boundary=4,y.storage=4):m.isVector2?(y.boundary=8,y.storage=8):m.isVector3||m.isColor?(y.boundary=16,y.storage=12):m.isVector4?(y.boundary=16,y.storage=16):m.isMatrix3?(y.boundary=16,y.storage=48):m.isMatrix4?(y.boundary=16,y.storage=64):m.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(y.boundary=16,y.storage=m.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",m),x===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function g(m){let x=m.target;x.removeEventListener("dispose",g),e.deleteBuffer(s[x.id]),delete s[x.id],delete a[x.id]}function d(){for(let m in s)e.deleteBuffer(s[m]);s={},a={}}return{bind:r,update:o,dispose:d}}var EL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),As=null;function TL(){return As===null&&(As=new fl(EL,16,16,Qa,es),As.name="DFG_LUT",As.minFilter=Dn,As.magFilter=Dn,As.wrapS=Oi,As.wrapT=Oi,As.generateMipmaps=!1,As.needsUpdate=!0),As}var gp=class{constructor(t={}){let{canvas:n=G1(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:f=si}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=r;let M=f,g=new Set([Pd,Id,Od]),d=new Set([si,$i,Tl,zr,Ld,Ud]),m=new Uint32Array(4),x=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},T=null,w=null,v=[],E=[],I=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ts,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,C=!1,H=null,W=null,L=null,F=null;this._outputColorSpace=Nn;let Z=0,V=0,it=null,k=-1,Q=null,et=new Xe,wt=new Xe,Pt=null,q=new ee(0),yt=0,At=n.width,Bt=n.height,St=1,Ft=null,be=null,Ht=new Xe(0,0,At,Bt),Yt=new Xe(0,0,At,Bt),jt=!1,tt=new Xa,lt=new ad,ot=!1,Et=!1,ct=new Ue,Wt=new O,Nt=new Xe,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},se=!1;function le(){return it===null?St:1}let U=i;function It(b,D){return n.getContext(b,D)}let te,xe,_t,Pe,Ut,Dt,A,S,B,nt,j,ut,dt,Y,J,ht,N,K,X,pt,rt,mt,Ot;try{let b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"187"}`),n.addEventListener("webglcontextlost",Vt,!1),n.addEventListener("webglcontextrestored",kt,!1),n.addEventListener("webglcontextcreationerror",bt,!1),U===null){let D="webgl2";if(U=It(D,b),U===null)throw It(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Zt()}catch(b){throw n.removeEventListener("webglcontextlost",Vt,!1),n.removeEventListener("webglcontextrestored",kt,!1),n.removeEventListener("webglcontextcreationerror",bt,!1),Xt("WebGLRenderer: "+b.message),b}function Zt(){te=new PN(U),te.init(),rt=new vL(U,te),xe=new TN(U,te,t,rt),_t=new gL(U,te),xe.reversedDepthBuffer&&u&&_t.buffers.depth.setReversed(!0),W=U.createFramebuffer(),L=U.createFramebuffer(),F=U.createFramebuffer(),Pe=new FN(U),Ut=new nL,Dt=new _L(U,te,_t,Ut,xe,rt,Pe),A=new IN(R),S=new VC(U),mt=new bN(U,S),B=new BN(U,S,Pe,mt),nt=new VN(U,B,S,mt,Pe),K=new HN(U,xe,Dt),J=new AN(Ut),j=new eL(R,A,te,xe,mt,J),ut=new ML(R,Ut),dt=new sL,Y=new uL(te),N=new MN(R,A,_t,nt,_,l),ht=new mL(R,nt,xe),Ot=new bL(U,Pe,xe,_t),X=new EN(U,te,Pe),pt=new zN(U,te,Pe),Pe.programs=j.programs,R.capabilities=xe,R.extensions=te,R.properties=Ut,R.renderLists=dt,R.shadowMap=ht,R.state=_t,R.info=Pe}M!==si&&(I=new kN(M,n.width,n.height,o,s,a));let at=new ev(R,U);this.xr=at,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let b=te.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=te.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return St},this.setPixelRatio=function(b){b!==void 0&&(St=b,this.setSize(At,Bt,!1))},this.getSize=function(b){return b.set(At,Bt)},this.setSize=function(b,D,G=!0){if(at.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}At=b,Bt=D,n.width=Math.floor(b*St),n.height=Math.floor(D*St),G===!0&&(n.style.width=b+"px",n.style.height=D+"px"),I!==null&&I.setSize(n.width,n.height),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(At*St,Bt*St).floor()},this.setDrawingBufferSize=function(b,D,G){At=b,Bt=D,St=G,n.width=Math.floor(b*G),n.height=Math.floor(D*G),this.setViewport(0,0,b,D)},this.setEffects=function(b){if(M===si){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let D=0;D<b.length;D++)if(b[D].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(et)},this.getViewport=function(b){return b.copy(Ht)},this.setViewport=function(b,D,G,P){b.isVector4?Ht.set(b.x,b.y,b.z,b.w):Ht.set(b,D,G,P),_t.viewport(et.copy(Ht).multiplyScalar(le()).round())},this.getScissor=function(b){return b.copy(Yt)},this.setScissor=function(b,D,G,P){b.isVector4?Yt.set(b.x,b.y,b.z,b.w):Yt.set(b,D,G,P),_t.scissor(wt.copy(Yt).multiplyScalar(le()).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(b){_t.setScissorTest(jt=b)},this.setOpaqueSort=function(b){Ft=b},this.setTransparentSort=function(b){be=b},this.getClearColor=function(b){return b.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(b=!0,D=!0,G=!0){let P=0;if(b){let z=!1;if(it!==null){let gt=it.texture.format;z=g.has(gt)}if(z){let gt=it.texture.type,Rt=d.has(gt),xt=N.getClearColor(),Mt=N.getClearAlpha(),Lt=xt.r,zt=xt.g,Kt=xt.b;Rt?(m[0]=Lt,m[1]=zt,m[2]=Kt,m[3]=Mt,U.clearBufferuiv(U.COLOR,0,m)):(x[0]=Lt,x[1]=zt,x[2]=Kt,x[3]=Mt,U.clearBufferiv(U.COLOR,0,x))}else P|=U.COLOR_BUFFER_BIT}D&&(P|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(P|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P!==0&&U.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),H=b},this.dispose=function(){n.removeEventListener("webglcontextlost",Vt,!1),n.removeEventListener("webglcontextrestored",kt,!1),n.removeEventListener("webglcontextcreationerror",bt,!1),N.dispose(),dt.dispose(),Y.dispose(),Dt.dispose(),Ut.dispose(),A.dispose(),nt.dispose(),B.dispose(),mt.dispose(),Ot.dispose(),j.dispose(),at.dispose(),at.removeEventListener("sessionstart",Vr),at.removeEventListener("sessionend",Gr),zi.stop()};function Vt(b){b.preventDefault(),O_("WebGLRenderer: Context Lost."),C=!0}function kt(){O_("WebGLRenderer: Context Restored."),C=!1;let b=Pe.autoReset,D=ht.enabled,G=ht.autoUpdate,P=ht.needsUpdate,z=ht.type;Zt(),Pe.autoReset=b,ht.enabled=D,ht.autoUpdate=G,ht.needsUpdate=P,ht.type=z}function bt(b){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ve(b){let D=b.target;D.removeEventListener("dispose",ve),$e(D)}function $e(b){Pi(b),Ut.remove(b)}function Pi(b){let D=Ut.get(b).programs;D!==void 0&&(D.forEach(function(G){j.releaseProgram(G)}),b.isShaderMaterial&&j.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,G,P,z,gt){D===null&&(D=ie);let Rt=z.isMesh&&z.matrixWorld.determinantAffine()<0,xt=ae(b,D,G,P,z);_t.setMaterial(P,Rt);let Mt=G.index,Lt=1;if(P.wireframe===!0){if(Mt=B.getWireframeAttribute(G),Mt===void 0)return;Lt=2}let zt=G.drawRange,Kt=G.attributes.position,ft=zt.start*Lt,$t=(zt.start+zt.count)*Lt;gt!==null&&(ft=Math.max(ft,gt.start*Lt),$t=Math.min($t,(gt.start+gt.count)*Lt)),Mt!==null?(ft=Math.max(ft,0),$t=Math.min($t,Mt.count)):Kt!=null&&(ft=Math.max(ft,0),$t=Math.min($t,Kt.count));let We=$t-ft;if(We<0||We===1/0)return;mt.setup(z,P,xt,G,Mt);let Ee,we=X;if(Mt!==null&&(Ee=S.get(Mt),we=pt,we.setIndex(Ee)),z.isMesh)P.wireframe===!0?(_t.setLineWidth(P.wireframeLinewidth*le()),we.setMode(U.LINES)):we.setMode(U.TRIANGLES);else if(z.isLine){let qe=P.linewidth;qe===void 0&&(qe=1),_t.setLineWidth(qe*le()),z.isLineSegments?we.setMode(U.LINES):z.isLineLoop?we.setMode(U.LINE_LOOP):we.setMode(U.LINE_STRIP)}else z.isPoints?we.setMode(U.POINTS):z.isSprite&&we.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(te.get("WEBGL_multi_draw"))we.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let qe=z._multiDrawStarts,Ct=z._multiDrawCounts,on=z._multiDrawCount,pe=Mt?S.get(Mt).bytesPerElement:1,Hi=Ut.get(P).currentProgram.getUniforms();for(let Ln=0;Ln<on;Ln++)Hi.setValue(U,"_gl_DrawID",Ln),we.render(qe[Ln]/pe,Ct[Ln])}else if(z.isInstancedMesh)we.renderInstances(ft,We,z.count);else if(G.isInstancedBufferGeometry){let qe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ct=Math.min(G.instanceCount,qe);we.renderInstances(ft,We,Ct)}else we.render(ft,We)};function Bi(b,D,G,P){H!==null&&b.isNodeMaterial&&H.setObject(P,b),ot===!0&&J.setState(b,G,!1),b.transparent===!0&&b.side===Mi&&b.forceSinglePass===!1?(b.side=Zn,b.needsUpdate=!0,ia(b,D,P),b.side=Ka,b.needsUpdate=!0,ia(b,D,P),b.side=Mi):ia(b,D,P)}this.compile=function(b,D,G=null){G===null&&(G=b),H!==null&&H.renderStart(b,D,G),w=Y.get(G),w.init(D),E.push(w),G.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),b!==G&&b.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),w.setupLights(),H!==null&&H.updateLights(w.state.lightsArray),Et=this.localClippingEnabled,ot=J.init(this.clippingPlanes,Et),ot===!0&&J.setGlobalState(this.clippingPlanes,D),H!==null&&ht.render(w.state.shadowsArray,G,D);let P=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let gt=z.material;if(gt)if(Array.isArray(gt))for(let Rt=0;Rt<gt.length;Rt++){let xt=gt[Rt];Bi(xt,G,D,z),P.add(xt)}else Bi(gt,G,D,z),P.add(gt)}),w=E.pop(),H!==null&&H.renderEnd(),P},this.compileAsync=function(b,D,G=null){let P=this.compile(b,D,G);return new Promise(z=>{function gt(){if(P.forEach(function(Rt){let Mt=Ut.get(Rt).currentProgram;(Mt===void 0||Mt.isReady())&&P.delete(Rt)}),P.size===0){z(b);return}setTimeout(gt,10)}te.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let $a=null;function Du(b){$a&&$a(b)}function Vr(){zi.stop()}function Gr(){zi.start()}let zi=new ME;zi.setAnimationLoop(Du),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(b){$a=b,at.setAnimationLoop(b),b===null?zi.stop():zi.start()},at.addEventListener("sessionstart",Vr),at.addEventListener("sessionend",Gr),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;H!==null&&H.renderStart(b,D);let G=at.enabled===!0&&at.isPresenting===!0,P=I!==null&&(it===null||G)&&I.begin(R,it);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(D),D=at.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,D,it),w=Y.get(b,E.length),w.init(D),w.state.textureUnits=Dt.getTextureUnits(),E.push(w),ct.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?lt.setFromArrayCamera(D):tt.setFromProjectionMatrix(ct,Ii,D.reversedDepth),Et=this.localClippingEnabled,ot=J.init(this.clippingPlanes,Et),T=dt.get(b,v.length),T.init(),v.push(T),this.info.render.frame++,at.enabled===!0&&at.isPresenting===!0){let Rt=R.xr.getDepthSensingMesh();Rt!==null&&Nl(Rt,D,-1/0,R.sortObjects)}Nl(b,D,0,R.sortObjects),T.finish(),H!==null&&H.updateLights(w.state.lightsArray),R.sortObjects===!0&&T.sort(Ft,be),se=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,se&&N.addToRenderList(T,b),this.info.autoReset===!0&&this.info.reset(),ot===!0&&J.beginShadows();let z=w.state.shadowsArray;if(ht.render(z,b,D),ot===!0&&J.endShadows(),(P&&I.hasRenderPass())===!1){let Rt=T.opaque,xt=T.transmissive;if(w.setupLights(),D.isArrayCamera){let Mt=D.cameras;if(xt.length>0)for(let Lt=0,zt=Mt.length;Lt<zt;Lt++){let Kt=Mt[Lt];Ll(Rt,xt,b,Kt)}se&&N.render(b);for(let Lt=0,zt=Mt.length;Lt<zt;Lt++){let Kt=Mt[Lt];Dl(T,b,Kt,Kt.viewport)}}else xt.length>0&&Ll(Rt,xt,b,D),se&&N.render(b),Dl(T,b,D)}it!==null&&V===0&&(Dt.updateMultisampleRenderTarget(it),Dt.updateRenderTargetMipmap(it)),P&&I.end(R),b.isScene===!0&&b.onAfterRender(R,b,D),mt.resetDefaultState(),k=-1,Q=null,E.pop(),E.length>0?(w=E[E.length-1],Dt.setTextureUnits(w.state.textureUnits),ot===!0&&J.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,v.pop(),v.length>0?T=v[v.length-1]:T=null,H!==null&&H.renderEnd()};function Nl(b,D,G,P){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){let Rt=D.isArrayCamera?lt:tt;if(!b.frustumCulled||b.intersectsFrustum(Rt)){P&&Nt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ct);let xt=nt.update(b),Mt=b.material;Mt.visible&&T.push(b,xt,Mt,G,Nt.z,null,D)}}else if(b.isMesh||b.isLine||b.isPoints){let Rt=D.isArrayCamera?lt:tt;if(!b.frustumCulled||b.intersectsFrustum(Rt)){let xt=nt.update(b),Mt=b.material;if(P&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Nt.copy(b.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Nt.copy(xt.boundingSphere.center)),Nt.applyMatrix4(b.matrixWorld).applyMatrix4(ct)),Array.isArray(Mt)){let Lt=xt.groups;for(let zt=0,Kt=Lt.length;zt<Kt;zt++){let ft=Lt[zt],$t=Mt[ft.materialIndex];$t&&$t.visible&&T.push(b,xt,$t,G,Nt.z,ft,D)}}else Mt.visible&&T.push(b,xt,Mt,G,Nt.z,null,D)}}}let gt=b.children;for(let Rt=0,xt=gt.length;Rt<xt;Rt++)Nl(gt[Rt],D,G,P)}function Dl(b,D,G,P){let{opaque:z,transmissive:gt,transparent:Rt}=b;w.setupLightsView(G),ot===!0&&J.setGlobalState(R.clippingPlanes,G),P&&_t.viewport(et.copy(P)),z.length>0&&Fi(z,D,G),gt.length>0&&Fi(gt,D,G),Rt.length>0&&Fi(Rt,D,G),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Ll(b,D,G,P){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[P.id]===void 0){let ft=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[P.id]=new vi(1,1,{generateMipmaps:!0,type:ft?es:si,minFilter:ji,samples:Math.max(4,xe.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:de.workingColorSpace})}let gt=w.state.transmissionRenderTarget[P.id],Rt=P.viewport||et;gt.setSize(Rt.z*R.transmissionResolutionScale,Rt.w*R.transmissionResolutionScale);let xt=R.getRenderTarget(),Mt=R.getActiveCubeFace(),Lt=R.getActiveMipmapLevel();R.setRenderTarget(gt),R.getClearColor(q),yt=R.getClearAlpha(),yt<1&&R.setClearColor(16777215,.5),R.clear(),se&&N.render(G);let zt=R.toneMapping;R.toneMapping=Ts;let Kt=P.viewport;if(P.viewport!==void 0&&(P.viewport=void 0),w.setupLightsView(P),ot===!0&&J.setGlobalState(R.clippingPlanes,P),Fi(b,G,P),Dt.updateMultisampleRenderTarget(gt),Dt.updateRenderTargetMipmap(gt),te.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let $t=0,We=D.length;$t<We;$t++){let Ee=D[$t],{object:we,geometry:qe,material:Ct,group:on}=Ee;if(Ct.side===Mi&&we.layers.test(P.layers)){let pe=Ct.side;Ct.side=Zn,Ct.needsUpdate=!0,Ul(we,G,P,qe,Ct,on),Ct.side=pe,Ct.needsUpdate=!0,ft=!0}}ft===!0&&(Dt.updateMultisampleRenderTarget(gt),Dt.updateRenderTargetMipmap(gt))}R.setRenderTarget(xt,Mt,Lt),R.setClearColor(q,yt),Kt!==void 0&&(P.viewport=Kt),R.toneMapping=zt}function Fi(b,D,G){let P=D.isScene===!0?D.overrideMaterial:null;for(let z=0,gt=b.length;z<gt;z++){let Rt=b[z],{object:xt,geometry:Mt,group:Lt}=Rt,zt=Rt.material;zt.allowOverride===!0&&P!==null&&(zt=P),xt.layers.test(G.layers)&&Ul(xt,D,G,Mt,zt,Lt)}}function Ul(b,D,G,P,z,gt){H!==null&&z.isNodeMaterial&&H.setObject(b,z),b.onBeforeRender(R,D,G,P,z,gt),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(R,D,G,P,b,gt),z.transparent===!0&&z.side===Mi&&z.forceSinglePass===!1?(z.side=Zn,z.needsUpdate=!0,R.renderBufferDirect(G,D,P,z,b,gt),z.side=Ka,z.needsUpdate=!0,R.renderBufferDirect(G,D,P,z,b,gt),z.side=Mi):R.renderBufferDirect(G,D,P,z,b,gt),b.onAfterRender(R,D,G,P,z,gt)}function Ol(b){let D=0;for(let G of b)G.texture!==null&&D++;return D}function ia(b,D,G){D.isScene!==!0&&(D=ie);let P=Ut.get(b),z=w.state.lights,gt=w.state.shadowsArray,Rt=z.state.version,xt=j.getParameters(b,z.state,gt,D,G,w.state.lightProbeGridArray),Mt=j.getProgramCacheKey(xt),Lt=P.programs;P.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?D.environment:null,P.fog=D.fog;let zt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;P.envMap=A.get(b.envMap||P.environment,zt),P.envMapRotation=P.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Lt===void 0&&(b.addEventListener("dispose",ve),Lt=new Map,P.programs=Lt,P.programVariants=new Map);let Kt=Lt.get(Mt);if(Kt!==void 0){if(P.currentProgram===Kt&&P.lightsStateVersion===Rt)return st(b,xt),Kt}else xt.uniforms=j.getUniforms(b),H!==null&&b.isNodeMaterial&&H.build(b,G,xt),b.onBeforeCompile(xt,R),Kt=j.acquireProgram(xt,Mt),Lt.set(Mt,Kt),P.uniforms=xt.uniforms;let ft=P.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ft.clippingPlanes=J.uniform),st(b,xt),P.needsLights=me(b),P.lightsStateVersion=Rt,P.needsLights&&(ft.ambientLightColor.value=z.state.ambient,ft.lightProbe.value=z.state.probe,ft.sunLights.value=z.state.sun,ft.sunLightShadows.value=z.state.sunShadow,ft.directionalLights.value=z.state.directional,ft.directionalLightShadows.value=z.state.directionalShadow,ft.spotLights.value=z.state.spot,ft.spotLightShadows.value=z.state.spotShadow,ft.rectAreaLights.value=z.state.rectArea,ft.ltc_1.value=z.state.rectAreaLTC1,ft.ltc_2.value=z.state.rectAreaLTC2,ft.pointLights.value=z.state.point,ft.pointLightShadows.value=z.state.pointShadow,ft.hemisphereLights.value=z.state.hemi,ft.sunShadowMatrix.value=z.state.sunShadowMatrix,ft.sunShadowCascade.value=z.state.sunShadowCascade,ft.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ft.spotLightMatrix.value=z.state.spotLightMatrix,ft.spotLightMap.value=z.state.spotLightMap,ft.pointShadowMatrix.value=z.state.pointShadowMatrix),P.numLightProbeGrids=Ol(w.state.lightProbeGridArray),P.currentProgram=Kt,P.uniformsList=null,Kt}function Lu(b,D,G,P,z){let gt=Ut.get(b),Rt=gt.currentProgram.id+","+P+","+z,xt=gt.programVariants.get(Rt);return xt===void 0?(xt=ia(b,D,G),gt.programVariants.set(Rt,xt)):(gt.currentProgram=xt,gt.uniformsList=null,gt.outputColorSpace=P,gt.toneMapping=z),xt}function Il(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=wl.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function st(b,D){let G=Ut.get(b);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function ae(b,D,G,P,z){D.isScene!==!0&&(D=ie),Dt.resetTextureUnits();let gt=D.fog,Rt=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?D.environment:null,xt=it===null?R.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:de.workingColorSpace,Mt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap,Lt=A.get(P.envMap||Rt,Mt),zt=P.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Kt=!!G.attributes.tangent&&(!!P.normalMap||P.anisotropy>0),ft=!!G.morphAttributes.position,$t=!!G.morphAttributes.normal,We=!!G.morphAttributes.color,Ee=Ts;P.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Ee=R.toneMapping);let we=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,qe=we!==void 0?we.length:0,Ct=Ut.get(P),on=w.state.lights;if(ot===!0&&(Et===!0||b!==Q)){let Ye=b===Q&&P.id===k;J.setState(P,b,Ye)}let pe=!1,Hi=!1;P.version===Ct.__version?Ct.needsLights&&Ct.lightsStateVersion!==on.state.version||z.isBatchedMesh&&Ct.batching===!1||!z.isBatchedMesh&&Ct.batching===!0||z.isBatchedMesh&&Ct.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Ct.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Ct.instancing===!1||!z.isInstancedMesh&&Ct.instancing===!0||z.isSkinnedMesh&&Ct.skinning===!1||!z.isSkinnedMesh&&Ct.skinning===!0||z.isInstancedMesh&&Ct.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ct.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ct.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ct.instancingMorph===!1&&z.morphTexture!==null||Ct.envMap!==Lt||P.fog===!0&&Ct.fog!==gt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==J.numPlanes||Ct.numIntersection!==J.numIntersection)||Ct.vertexAlphas!==zt||Ct.vertexTangents!==Kt||Ct.morphTargets!==ft||Ct.morphNormals!==$t||Ct.morphColors!==We||Ct.morphTargetsCount!==qe||Ct.numLightProbeGrids!==Ol(w.state.lightProbeGridArray)?pe=!0:(Ct.outputColorSpace!==xt||Ct.toneMapping!==Ee)&&(Hi=!0):(pe=!0,Ct.__version=P.version);let Ln=Ct.currentProgram;(pe===!0||Hi===!0)&&(Ln=Hi===!0?Lu(P,D,z,xt,Ee):ia(P,D,z),H&&P.isNodeMaterial&&H.onUpdateProgram(P,Ln,Ct));let Uu=!1,sa=!1,tr=!1,_e=Ln.getUniforms(),Mn=Ct.uniforms;if(_t.useProgram(Ln.program)&&(Uu=!0,sa=!0,tr=!0),P.id!==k&&(k=P.id,sa=!0),Uu||Q!==b){_t.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),_e.setValue(U,"projectionMatrix",b.projectionMatrix),_e.setValue(U,"viewMatrix",b.matrixWorldInverse);let pn=_e.map.cameraPosition;pn!==void 0&&pn.setValue(U,Wt.setFromMatrixPosition(b.matrixWorld)),xe.logarithmicDepthBuffer&&_e.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&_e.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),Q!==b&&(Q=b,sa=!0,tr=!0)}if(Ct.needsLights&&(on.state.sunShadowMap.length>0&&_e.setValue(U,"sunShadowMap",on.state.sunShadowMap,Dt),on.state.directionalShadowMap.length>0&&_e.setValue(U,"directionalShadowMap",on.state.directionalShadowMap,Dt),on.state.spotShadowMap.length>0&&_e.setValue(U,"spotShadowMap",on.state.spotShadowMap,Dt),on.state.pointShadowMap.length>0&&_e.setValue(U,"pointShadowMap",on.state.pointShadowMap,Dt)),z.isSkinnedMesh){_e.setOptional(U,z,"bindMatrix"),_e.setOptional(U,z,"bindMatrixInverse");let Ye=z.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),_e.setValue(U,"boneTexture",Ye.boneTexture,Dt))}z.isBatchedMesh&&(_e.setOptional(U,z,"batchingTexture"),_e.setValue(U,"batchingTexture",z._matricesTexture,Dt),_e.setOptional(U,z,"batchingIdTexture"),_e.setValue(U,"batchingIdTexture",z._indirectTexture,Dt),_e.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&_e.setValue(U,"batchingColorTexture",z._colorsTexture,Dt));let Vi=G.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&K.update(z,G,Ln),(sa||Ct.receiveShadow!==z.receiveShadow)&&(Ct.receiveShadow=z.receiveShadow,_e.setValue(U,"receiveShadow",z.receiveShadow)),(P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial)&&P.envMap===null&&D.environment!==null&&(Mn.envMapIntensity.value=D.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=TL()),sa){if(_e.setValue(U,"toneMappingExposure",R.toneMappingExposure),Ct.needsLights&&ge(Mn,tr),gt&&P.fog===!0&&ut.refreshFogUniforms(Mn,gt),ut.refreshMaterialUniforms(Mn,P,St,Bt,w.state.transmissionRenderTarget[b.id]),Ct.needsLights&&Ct.numLightProbeGrids>0){let Ye=y,pn=0;for(let Rs of w.state.lightProbeGridArray)Rs.texture!==null&&(Ye.textures[pn]=Rs.texture,Ye.min[pn]=Rs.boundingBox.min,Ye.max[pn]=Rs.boundingBox.max,Ye.resolution[pn]=Rs.resolution,pn++);for(let Rs in Ye)Ye[Rs].length=pn;Mn.probesSH.value=Ye.textures,Mn.probesMin.value=Ye.min,Mn.probesMax.value=Ye.max,Mn.probesResolution.value=Ye.resolution}wl.upload(U,Il(Ct),Mn,Dt)}if(P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(wl.upload(U,Il(Ct),Mn,Dt),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&_e.setValue(U,"center",z.center),_e.setValue(U,"modelViewMatrix",z.modelViewMatrix),_e.setValue(U,"normalMatrix",z.normalMatrix),_e.setValue(U,"modelMatrix",z.matrixWorld),P.uniformsGroups!==void 0){let Ye=P.uniformsGroups;for(let pn=0,Rs=Ye.length;pn<Rs;pn++){let cv=Ye[pn];Ot.update(cv,Ln),Ot.bind(cv,Ln)}}return Ln}function ge(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.sunLights.needsUpdate=D,b.sunLightShadows.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function me(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(b,D,G){let P=Ut.get(b);P.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,P.__autoAllocateDepthBuffer===!1&&(P.__useRenderToTexture=!1),Ut.get(b.texture).__webglTexture=D,Ut.get(b.depthTexture).__webglTexture=P.__autoAllocateDepthBuffer?void 0:G,P.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,D){let G=Ut.get(b);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,G=0){it=b,Z=D,V=G;let P=null,z=!1,gt=!1;if(b){let xt=Ut.get(b);if(xt.__useDefaultFramebuffer!==void 0){_t.bindFramebuffer(U.FRAMEBUFFER,xt.__webglFramebuffer),et.copy(b.viewport),wt.copy(b.scissor),Pt=b.scissorTest,_t.viewport(et),_t.scissor(wt),_t.setScissorTest(Pt),k=-1;return}else if(xt.__webglFramebuffer===void 0)Dt.setupRenderTarget(b);else if(xt.__hasExternalTextures)Dt.rebindTextures(b,Ut.get(b.texture).__webglTexture,Ut.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let zt=b.depthTexture;if(xt.__boundDepthTexture!==zt){if(zt!==null&&Ut.has(zt)&&(b.width!==zt.image.width||b.height!==zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Dt.setupDepthRenderbuffer(b)}}let Mt=b.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(gt=!0);let Lt=Ut.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Lt[D])?P=Lt[D][G]:P=Lt[D],z=!0):b.samples>0&&Dt.useMultisampledRTT(b)===!1?P=Ut.get(b).__webglMultisampledFramebuffer:Array.isArray(Lt)?P=Lt[G]:P=Lt,et.copy(b.viewport),wt.copy(b.scissor),Pt=b.scissorTest}else et.copy(Ht).multiplyScalar(St).floor(),wt.copy(Yt).multiplyScalar(St).floor(),Pt=jt;if(G!==0&&(P=W),_t.bindFramebuffer(U.FRAMEBUFFER,P)&&_t.drawBuffers(b,P),_t.viewport(et),_t.scissor(wt),_t.setScissorTest(Pt),z){let xt=Ut.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,xt.__webglTexture,G)}else if(gt){let xt=D;for(let Mt=0;Mt<b.textures.length;Mt++){let Lt=Ut.get(b.textures[Mt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Mt,Lt.__webglTexture,G,xt)}}else if(b!==null&&G!==0){let xt=Ut.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,xt.__webglTexture,G)}k=-1};function Sn(b){let D=Ut.get(b);return(D.__readFormat!==b.format||D.__readType!==b.type)&&(D.__readFormat=b.format,D.__readType=b.type,D.__formatReadable=xe.textureFormatReadable(b.format),D.__typeReadable=xe.textureTypeReadable(b.type)),D}this.readRenderTargetPixels=function(b,D,G,P,z,gt,Rt,xt=0){if(!(b&&b.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Rt!==void 0&&(Mt=Mt[Rt],Array.isArray(Mt)&&(Mt=Mt[0])),Mt){_t.bindFramebuffer(U.FRAMEBUFFER,Mt);try{let Lt=b.textures[xt],zt=Lt.format,Kt=Lt.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+xt);let ft=Sn(Lt);if(ft.__formatReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ft.__typeReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-P&&G>=0&&G<=b.height-z&&U.readPixels(D,G,P,z,rt.convert(zt),rt.convert(Kt),gt)}finally{let Lt=it!==null?Ut.get(it).__webglFramebuffer:null;_t.bindFramebuffer(U.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(b,D,G,P,z,gt,Rt,xt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Rt!==void 0&&(Mt=Mt[Rt],Array.isArray(Mt)&&(Mt=Mt[0])),Mt)if(D>=0&&D<=b.width-P&&G>=0&&G<=b.height-z){_t.bindFramebuffer(U.FRAMEBUFFER,Mt);let Lt=b.textures[xt],zt=Lt.format,Kt=Lt.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+xt);let ft=Sn(Lt);if(ft.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ft.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $t=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,$t),U.bufferData(U.PIXEL_PACK_BUFFER,gt.byteLength,U.STREAM_READ),U.readPixels(D,G,P,z,rt.convert(zt),rt.convert(Kt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let We=it!==null?Ut.get(it).__webglFramebuffer:null;_t.bindFramebuffer(U.FRAMEBUFFER,We);let Ee=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await X1(U,Ee,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,$t),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,gt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer($t),U.deleteSync(Ee),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,D=null,G=0){let P=Math.pow(2,-G),z=Math.floor(b.image.width*P),gt=Math.floor(b.image.height*P),Rt=D!==null?D.x:0,xt=D!==null?D.y:0;Dt.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,Rt,xt,z,gt),_t.unbindTexture()},this.copyTextureToTexture=function(b,D,G=null,P=null,z=0,gt=0){let Rt,xt,Mt,Lt,zt,Kt,ft,$t,We,Ee=b.isCompressedTexture?b.mipmaps[gt]:b.image;if(G!==null)Rt=G.max.x-G.min.x,xt=G.max.y-G.min.y,Mt=G.isBox3?G.max.z-G.min.z:1,Lt=G.min.x,zt=G.min.y,Kt=G.isBox3?G.min.z:0;else{let _e=Math.pow(2,-z);Rt=Math.floor(Ee.width*_e),xt=Math.floor(Ee.height*_e),b.isDataArrayTexture?Mt=Ee.depth:b.isData3DTexture?Mt=Math.floor(Ee.depth*_e):Mt=1,Lt=0,zt=0,Kt=0}P!==null?(ft=P.x,$t=P.y,We=P.z):(ft=0,$t=0,We=0);let we=rt.convert(D.format),qe=rt.convert(D.type),Ct;D.isData3DTexture?(Dt.setTexture3D(D,0),Ct=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Dt.setTexture2DArray(D,0),Ct=U.TEXTURE_2D_ARRAY):(Dt.setTexture2D(D,0),Ct=U.TEXTURE_2D),_t.activeTexture(U.TEXTURE0),_t.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),_t.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),_t.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);let on=_t.getParameter(U.UNPACK_ROW_LENGTH),pe=_t.getParameter(U.UNPACK_IMAGE_HEIGHT),Hi=_t.getParameter(U.UNPACK_SKIP_PIXELS),Ln=_t.getParameter(U.UNPACK_SKIP_ROWS),Uu=_t.getParameter(U.UNPACK_SKIP_IMAGES);_t.pixelStorei(U.UNPACK_ROW_LENGTH,Ee.width),_t.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ee.height),_t.pixelStorei(U.UNPACK_SKIP_PIXELS,Lt),_t.pixelStorei(U.UNPACK_SKIP_ROWS,zt),_t.pixelStorei(U.UNPACK_SKIP_IMAGES,Kt);let sa=b.isDataArrayTexture||b.isData3DTexture,tr=D.isDataArrayTexture||D.isData3DTexture;if(b.isDepthTexture){let _e=Ut.get(b),Mn=Ut.get(D),Vi=Ut.get(_e.__renderTarget),Ye=Ut.get(Mn.__renderTarget);_t.bindFramebuffer(U.READ_FRAMEBUFFER,Vi.__webglFramebuffer),_t.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let pn=0;pn<Mt;pn++)sa&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ut.get(b).__webglTexture,z,Kt+pn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ut.get(D).__webglTexture,gt,We+pn)),U.blitFramebuffer(Lt,zt,Lt+Rt,zt+xt,ft,$t,ft+Rt,$t+xt,U.DEPTH_BUFFER_BIT,U.NEAREST);_t.bindFramebuffer(U.READ_FRAMEBUFFER,null),_t.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||b.isRenderTargetTexture||Ut.has(b)){let _e=Ut.get(b),Mn=Ut.get(D);_t.bindFramebuffer(U.READ_FRAMEBUFFER,L),_t.bindFramebuffer(U.DRAW_FRAMEBUFFER,F);for(let Vi=0;Vi<Mt;Vi++)sa?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,_e.__webglTexture,z,Kt+Vi):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,_e.__webglTexture,z),tr?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mn.__webglTexture,gt,We+Vi):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Mn.__webglTexture,gt),z!==0?U.blitFramebuffer(Lt,zt,Lt+Rt,zt+xt,ft,$t,ft+Rt,$t+xt,U.COLOR_BUFFER_BIT,U.NEAREST):tr?U.copyTexSubImage3D(Ct,gt,ft,$t,We+Vi,Lt,zt,Rt,xt):U.copyTexSubImage2D(Ct,gt,ft,$t,Lt,zt,Rt,xt);_t.bindFramebuffer(U.READ_FRAMEBUFFER,null),_t.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else tr?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Ct,gt,ft,$t,We,Rt,xt,Mt,we,qe,Ee.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(Ct,gt,ft,$t,We,Rt,xt,Mt,we,Ee.data):U.texSubImage3D(Ct,gt,ft,$t,We,Rt,xt,Mt,we,qe,Ee):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,gt,ft,$t,Rt,xt,we,qe,Ee.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,gt,ft,$t,Ee.width,Ee.height,we,Ee.data):U.texSubImage2D(U.TEXTURE_2D,gt,ft,$t,Rt,xt,we,qe,Ee);_t.pixelStorei(U.UNPACK_ROW_LENGTH,on),_t.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pe),_t.pixelStorei(U.UNPACK_SKIP_PIXELS,Hi),_t.pixelStorei(U.UNPACK_SKIP_ROWS,Ln),_t.pixelStorei(U.UNPACK_SKIP_IMAGES,Uu),gt===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&U.generateMipmap(Ct),_t.unbindTexture()},this.initRenderTarget=function(b){Ut.get(b).__webglFramebuffer===void 0&&Dt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Dt.setTextureCube(b,0):b.isData3DTexture?Dt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Dt.setTexture2DArray(b,0):Dt.setTexture2D(b,0),_t.unbindTexture()},this.resetState=function(){Z=0,V=0,it=null,_t.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),n.unpackColorSpace=de._getUnpackColorSpace()}};var QE=kr(wu(),1),PE={portrait:[1.6,2.25],landscape:[2.25,1.6]},CL={left:.27,center:.5,right:.73},Nu=.018,Jn=.007,rn=4,BE=1/.05,NL=1/960,DL=2,na=72,zE=24,nv=.36,WE=.095,LL=.0135,xp=.036,Cu=.15,FE=1024,HE={glossy:{roughness:.42,metalness:0,clearcoat:1,clearcoatRoughness:.06,foil:0,anisotropy:0},matte:{roughness:.85,metalness:0,clearcoat:0,clearcoatRoughness:.6,foil:0,anisotropy:0},holographic:{roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.04,foil:1,anisotropy:0},metallic:{roughness:.36,metalness:.75,clearcoat:.5,clearcoatRoughness:.18,foil:0,anisotropy:.7}},Sp=[0,.07,.93,1],UL=[-.95,-.28,.28,.95],OL=9,IL=`
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;
`,PL=`
vFoilUv = uv;
vFoilX = normalize((modelViewMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
vFoilY = normalize((modelViewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
`,BL=`
uniform float foilStrength;
uniform float foilAspect;
uniform vec3 foilKey;
uniform vec3 foilFill;
uniform vec3 foilTop;
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;

float foilHash(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float foilBump(float t, float center, float width) {
  float x = (t - center) / width;
  return max(0.0, 1.0 - x * x);
}

vec3 foilSpectrum(float t) {
  return vec3(
    foilBump(t, 0.82, 0.32) + 0.4 * foilBump(t, 0.02, 0.12),
    foilBump(t, 0.5, 0.26),
    foilBump(t, 0.18, 0.24)
  );
}

vec3 foilGrating(float u, float spacing) {
  vec3 color = vec3(0.0);
  for (int m = 1; m <= 2; m++) {
    float order = float(m);
    float t = (spacing * abs(u) / order - 0.38) / 0.32;
    color += foilSpectrum(t) / order;
  }
  return color;
}

vec3 foilShard(vec2 p) {
  vec2 base = floor(p);
  float best = 9.0;
  float edge = 9.0;
  vec2 id = base;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 cell = base + vec2(float(i), float(j));
      vec2 site = cell + vec2(foilHash(cell), foilHash(cell + 7.31)) * 0.9 + 0.05;
      float d = length(site - p);
      if (d < best) {
        edge = best;
        best = d;
        id = cell;
      } else if (d < edge) {
        edge = d;
      }
    }
  }
  return vec3(foilHash(id + 3.17), foilHash(id + 11.73), edge - best);
}
`,zL=`
if (foilStrength > 0.0) {
  vec3 foilView = normalize(vViewPosition);
  vec3 foilNormal = normalize(normal);
  vec2 foilP = vec2(vFoilUv.x, vFoilUv.y * foilAspect);
  vec3 shard = foilShard(foilP * 26.0);
  vec2 ray = foilP - vec2(-1.6, 2.6 * foilAspect);
  float angle = atan(ray.y, ray.x) + (shard.x - 0.5) * 0.16;
  vec3 grating = normalize(vFoilX * cos(angle) + vFoilY * sin(angle));
  float spacing = 1.7 * (0.95 + shard.y * 0.1);
  vec3 rainbow = foilGrating(dot(foilKey + foilView, grating), spacing);
  rainbow += 0.6 * foilGrating(dot(foilTop + foilView, grating), spacing);
  rainbow *= 0.8 + 0.2 * smoothstep(0.0, 0.04, shard.z);
  rainbow = max(rainbow - 0.35 * min(rainbow.r, min(rainbow.g, rainbow.b)), 0.0);
  vec2 grid = foilP * 64.0;
  vec2 cell = floor(grid);
  vec2 jitter = vec2(foilHash(cell + 1.7), foilHash(cell + 9.2));
  float flake = smoothstep(0.32, 0.06, length(fract(grid) - jitter * 0.6 - 0.2)) * step(0.45, foilHash(cell + 4.4));
  vec3 facet = normalize(foilNormal + (vFoilX * (jitter.x - 0.5) + vFoilY * (jitter.y - 0.5)) * 0.8);
  float glint = pow(max(dot(reflect(-foilKey, facet), foilView), 0.0), 28.0);
  glint += 0.7 * pow(max(dot(reflect(-foilTop, facet), foilView), 0.0), 28.0);
  float fine = 1.0 - smoothstep(0.35, 0.9, max(fwidth(grid.x), fwidth(grid.y)));
  vec3 sparkle = flake * glint * fine * (vec3(0.7) + foilGrating(dot(foilKey + foilView, grating) + jitter.x * 0.4, spacing));
  float ink = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
  float foil = foilStrength * (0.08 + 0.92 * smoothstep(0.04, 0.7, ink));
  float facing = clamp(dot(foilNormal, foilView), 0.0, 1.0);
  float tint = clamp(dot(rainbow, vec3(0.4)), 0.0, 1.0);
  outgoingLight = outgoingLight * (1.0 - foil * (0.3 + 0.32 * tint)) + (rainbow * 0.62 * (0.4 + 0.6 * facing) + sparkle * 1.6) * foil;
}
`,VE={silver:{color:"#d9dce2",roughness:.16},gold:{color:"#e4b965",roughness:.2},graphite:{color:"#4d4f55",roughness:.28}},ja=(e,t,n)=>Math.min(n,Math.max(t,e)),Ru=(e,t,n)=>e+(t-e)*n,iv=(e,t)=>{try{let n=document.createElement("canvas").getContext("2d");if(!n)return t;n.fillStyle="#000000",n.fillStyle=e;let i=n.fillStyle;if(i.startsWith("#")){let a=parseInt(i.slice(1),16);return[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255]}let s=i.match(/[\d.]+/g);return!s||s.length<3?t:[Number(s[0])/255,Number(s[1])/255,Number(s[2])/255]}catch{return t}},FL=e=>.2126*e[0]+.7152*e[1]+.0722*e[2],Mp=(e,t=1)=>`rgba(${Math.round(e[0]*255)}, ${Math.round(e[1]*255)}, ${Math.round(e[2]*255)}, ${t})`,qE=e=>{let t=e>>>0;return()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}},ov=(e,t,n,i,s,a)=>{let r=Math.max(0,Math.min(a,i/2,s/2)),o=r*.4477;e.moveTo(t+r,n),e.lineTo(t+i-r,n),e.bezierCurveTo(t+i-o,n,t+i,n+o,t+i,n+r),e.lineTo(t+i,n+s-r),e.bezierCurveTo(t+i,n+s-o,t+i-o,n+s,t+i-r,n+s),e.lineTo(t+r,n+s),e.bezierCurveTo(t+o,n+s,t,n+s-o,t,n+s-r),e.lineTo(t,n+r),e.bezierCurveTo(t,n+o,t+o,n,t+r,n)},sv=(e,t)=>{if(!t)return Promise.resolve(null);let n=e.get(t);if(n)return n;let i=new Promise(s=>{let a=new Image;a.crossOrigin="anonymous",a.decoding="async",a.onload=()=>s(a),a.onerror=()=>s(null),a.src=t});return e.set(t,i),i},GE=(e,t)=>{let[n,i]=PE[e]||PE.portrait,s=Ru(.03,Math.min(n,i)*.2,ja(t,0,1)),a={width:.34,height:.07,y:i/2-.13},r=i/2-.055;return{width:n,height:i,radius:s,slot:a,ringY:r,hangY:r+WE}},HL=e=>{let{width:t,height:n,radius:i,slot:s}=e,a=new Wa;ov(a,-t/2+Jn,-n/2+Jn,t-Jn*2,n-Jn*2,Math.max(i-Jn,.005));let r=new Lr;ov(r,-s.width/2-Jn,s.y-s.height/2-Jn,s.width+Jn*2,s.height+Jn*2,s.height/2+Jn),a.holes.push(r);let o=new _l(a,{depth:Nu,bevelEnabled:!0,bevelThickness:Jn,bevelSize:Jn,bevelSegments:5,curveSegments:24});o.translate(0,0,-Nu/2);let l=new cu(a,24),c=l.getAttribute("position"),h=l.getAttribute("uv");for(let p=0;p<c.count;p++)h.setXY(p,(c.getX(p)+t/2)/t,(c.getY(p)+n/2)/n);return h.needsUpdate=!0,{body:o,face:l}},kE=e=>{let t=new Wa,n=e*1.16;ov(t,-n/2+.014,-Cu/2+.014,n-.028,Cu-.028,.024);let i=new _l(t,{depth:.02,bevelEnabled:!0,bevelThickness:.014,bevelSize:.014,bevelSegments:6,curveSegments:10});return i.translate(0,0,-.01),i},VL=e=>{let t=Sp.length,n=new yi;n.setAttribute("position",new ii(new Float32Array(e*t*3),3)),n.setAttribute("normal",new ii(new Float32Array(e*t*3),3)),n.setAttribute("uv",new ii(new Float32Array(e*t*2),2));let i=[];for(let s=0;s<e-1;s++)for(let a=0;a<t-1;a++){let r=s*t+a;i.push(r,r+t,r+1,r+1,r+t,r+t+1)}return n.setIndex(i),n},GL=e=>{let t=new cl;t.background=new ee(.035,.035,.04);let n=new Or(1,1),i=[],s=(o,l,c,h=0)=>{let p=new hl({color:new ee(o,o,o),side:Mi});i.push(p);let u=new hn(n,p);u.position.set(...l),u.scale.set(c[0],c[1],1),u.lookAt(0,0,0),u.rotateZ(h),t.add(u)};s(2.6,[0,4.5,8],[9,4]),s(6,[-5.5,.5,7],[.9,14]),s(4,[5,-.5,8],[.6,14]),s(3.5,[0,-1,9],[24,.35],Math.PI/3),s(2.5,[1,2.5,9],[24,.2],Math.PI/3),s(1.4,[0,6,-6],[12,4]),s(.5,[0,-7,1],[16,6]),s(.9,[8,0,-2],[4,10]);let a=new Rl(e),r=a.fromScene(t,.035);return a.dispose(),n.dispose(),i.forEach(o=>o.dispose()),r},av=(e,t)=>{let n=new Dr(e);return n.colorSpace=Nn,n.anisotropy=t,n},kL=()=>{let t=document.createElement("canvas");t.width=128,t.height=128;let n=t.getContext("2d");if(!n)return new Dr(t);let i=qE(7),s=Float32Array.from({length:16384},()=>i()),a=(l,c)=>{let h=0;for(let p=-1;p<=1;p++)for(let u=-1;u<=1;u++)h+=s[(c+p+128)%128*128+(l+u+128)%128];return h/9*1.6},r=n.createImageData(128,128);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let h=a((c-1+128)%128,l)-a((c+1)%128,l),p=a(c,(l-1+128)%128)-a(c,(l+1)%128),u=Math.hypot(h,p,1),f=(l*128+c)*4;r.data[f]=(h/u*.5+.5)*255,r.data[f+1]=(p/u*.5+.5)*255,r.data[f+2]=(1/u*.5+.5)*255,r.data[f+3]=255}n.putImageData(r,0,0);let o=new Dr(t);return o.wrapS=Ms,o.wrapT=Ms,o.repeat.set(5,7),o},XL=()=>{let n=qE(19),i=Float32Array.from({length:16384},()=>n()),s=l=>Math.sqrt(Math.max(0,1-4*l*l)),a=(l,c)=>{let h=(l%128+128)%128,p=(c%128+128)%128,u=h/128*8,f=p/128*8,_=Math.floor(u),M=Math.floor(f),g=u-_-.5,d=f-M-.5,m=(_+M)%2===0,x=s(g)*(.55+.45*Math.cos(d*Math.PI*(m?1:.6))),y=s(d)*(.55+.45*Math.cos(g*Math.PI*(m?.6:1)));return(m?Math.max(x,y*.7):Math.max(y,x*.7))+i[p*128+h]*.08},r=new Uint8Array(16384*4);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let h=(a(c-1,l)-a(c+1,l))*1.6,p=(a(c,l-1)-a(c,l+1))*1.6,u=Math.hypot(h,p,1),f=(l*128+c)*4;r[f]=(h/u*.5+.5)*255,r[f+1]=(p/u*.5+.5)*255,r[f+2]=(1/u*.5+.5)*255,r[f+3]=255}let o=new fl(r,128,128);return o.wrapS=Ms,o.wrapT=Ms,o.magFilter=Dn,o.minFilter=ji,o.generateMipmaps=!0,o.needsUpdate=!0,o},WL=(e,t,n,i,s)=>{let a=(s==="contain"?Math.min:Math.max)(n/t.width,i/t.height),r=t.width*a,o=t.height*a;e.drawImage(t,(n-r)/2,(i-o)/2,r,o)},XE=(e,t,n,i)=>{let s=e.getContext("2d");s&&(s.fillStyle=Mp(n),s.fillRect(0,0,e.width,e.height),t&&WL(s,t,e.width,e.height,i))},qL=(e,t,n)=>{let s=t?Math.max(64,Math.round(t.width/t.height*192)):384;e.width=192,e.height=s;let a=e.getContext("2d");if(!a)return s/192;if(a.fillStyle=Mp(n),a.fillRect(0,0,192,s),t)return a.save(),a.translate(192,0),a.rotate(Math.PI/2),a.drawImage(t,0,0,s,192),a.restore(),s/192;let r=FL(n)>.5?[0,0,0]:[1,1,1];a.fillStyle=Mp(r,.05);for(let o=0;o<s;o+=4)a.fillRect(0,o,192,1);a.fillStyle=Mp(r,.2);for(let o=0;o<s;o+=14)a.fillRect(192*.075,o,2,8),a.fillRect(192*.925-2,o,2,8);return s/192},YL=()=>{let e=()=>Array.from({length:rn+1},()=>new O);return{nodes:e(),previous:e(),velocities:e(),lengths:new Float64Array(rn),impulses:new Float64Array(rn),rest:1,anchor:new O,body:{position:new O,previous:new O,velocity:new O,quaternion:new Wn,previousQuaternion:new Wn,angular:new O,mass:1,inverseInertia:new O(1,1,1),hang:new O},grab:null,turn:0,twist:0,twistRaw:0,calm:0}},De={a:new O,b:new O,c:new O,d:new O,e:new O,f:new O,g:new O,pin:new O,q:new Wn,r:new Wn},lv=(e,t,n)=>(De.r.copy(e.quaternion).invert(),n.copy(t).applyQuaternion(De.r),n.set(n.x*e.inverseInertia.x,n.y*e.inverseInertia.y,n.z*e.inverseInertia.z),n.applyQuaternion(e.quaternion)),YE=(e,t)=>{let{x:n,y:i,z:s,w:a}=e;e.x+=.5*(t.x*a+t.y*s-t.z*i),e.y+=.5*(t.y*a+t.z*n-t.x*s),e.z+=.5*(t.z*a+t.x*i-t.y*n),e.w+=.5*(-t.x*n-t.y*i-t.z*s),e.normalize()},ZE=(e,t,n)=>{let i=De.c.crossVectors(t,n);return 1/e.mass+i.dot(lv(e,i,De.d))},JE=(e,t,n)=>{e.position.addScaledVector(n,1/e.mass),YE(e.quaternion,lv(e,De.e.crossVectors(t,n),De.f))},ZL=(e,t,n,i)=>{let{nodes:s,body:a}=e,r=s[t],o=t===0?0:BE,l=t===rn-1,c=De.g,h=s[t+1];l&&(c.copy(a.hang).applyQuaternion(a.quaternion),h=De.b.copy(a.position).add(c));let p=De.a.subVectors(h,r),u=p.length(),f=u-e.rest;if(f<=0||u<1e-9)return;let _=p.divideScalar(u),M=l?ZE(a,c,_):BE,g=(u-e.lengths[t])/n,m=(i.hold*Math.tanh(i.stiffness*f/i.hold)+i.spring*f+i.bandDamping*Math.max(0,g))*n*n-e.impulses[t];if(m<=0)return;let x=Math.min(f/(o+M),m);e.impulses[t]+=x,o&&r.addScaledVector(_,x*o),l?JE(a,c,_.multiplyScalar(-x)):h.addScaledVector(_,-x*M)},JL=(e,t,n)=>{let i=De.g.copy(t.local).applyQuaternion(e.quaternion),s=De.a.copy(n).sub(e.position).sub(i),a=s.length();if(a<1e-9)return;let r=s.divideScalar(a),o=a/ZE(e,i,r);JE(e,i,r.multiplyScalar(o))},rv=(e,t,n)=>{let{nodes:i,previous:s,velocities:a,body:r,anchor:o}=e;i[0].copy(o);for(let c=1;c<=rn;c++)i[c].copy(i[c-1]),n?i[c].x+=e.rest:i[c].y-=e.rest;r.quaternion.identity(),n&&r.quaternion.setFromAxisAngle(new O(0,0,1),Math.PI/2),r.hang.set(0,t.hangY,0);let l=De.a.copy(r.hang).applyQuaternion(r.quaternion);r.position.copy(i[rn]).sub(l),r.previous.copy(r.position),r.previousQuaternion.copy(r.quaternion),r.velocity.set(0,0,0),r.angular.set(0,0,0);for(let c=0;c<=rn;c++)s[c].copy(i[c]),a[c].set(0,0,0);e.lengths.fill(e.rest),e.turn=0,e.twist=0,e.twistRaw=0,e.calm=0},KL=(e,t,n)=>{e.rest=n/rn;let{width:i,height:s}=t,a=e.body,r=Nu+Jn*2;a.mass=1,a.inverseInertia.set(12/(s*s+r*r),12/(i*i+r*r),12/(i*i+s*s)),a.hang.set(0,t.hangY,0)},QL=(e,t,n,i)=>{let s=Math.max(1,Math.ceil(t/NL-1e-6)),a=t/s,{nodes:r,previous:o,velocities:l,body:c}=e,h=n.breeze*(Math.sin(i*.53)*.7+Math.sin(i*1.31+1.7)*.3)*3,p=n.breeze*Math.sin(i*.37+.6)*2,u=e.grab,f=De.pin,_=Math.exp(-n.nodeDrag*a),M=Math.exp(-n.linearDrag*a),g=Math.exp(-n.angularDrag*a);for(let m=0;m<s;m++){for(let R=1;R<rn;R++){let C=l[R];C.y-=n.gravity*a,C.x+=h*a,C.z+=p*a,o[R].copy(r[R]),r[R].addScaledVector(C,a)}c.previous.copy(c.position),c.previousQuaternion.copy(c.quaternion);let x=c.quaternion;if(u){let R=De.q.copy(u.rotation).multiply(De.r.copy(x).invert());R.w<0&&R.set(-R.x,-R.y,-R.z,-R.w);let C=De.a.set(R.x,R.y,R.z).multiplyScalar(2*n.grip);C.addScaledVector(c.angular,-n.gripDamping),c.angular.addScaledVector(lv(c,C,De.b),a)}let y=De.a.set(0,1,0).applyQuaternion(x),T=De.b.set(-y.x*y.z,-y.y*y.z,1-y.z*y.z);if(T.lengthSq()>.001){let R=De.d.set(0,0,1).applyQuaternion(x),C=Math.atan2(De.e.crossVectors(T,R).dot(y),T.dot(R)),H=C-e.twistRaw;H>Math.PI?H-=Math.PI*2:H<-Math.PI&&(H+=Math.PI*2),e.twist+=H,e.twistRaw=C}if(!u){let R=c.angular.dot(y);c.angular.addScaledVector(y,(n.twist*(e.turn-e.twist)-n.twistDamping*R)*a)}c.velocity.y-=n.gravity*a,c.velocity.x+=h*.35*a,c.velocity.z+=p*.35*a,c.position.addScaledVector(c.velocity,a),YE(c.quaternion,De.f.copy(c.angular).multiplyScalar(a)),e.impulses.fill(0),u&&f.lerpVectors(u.from,u.target,(m+1)/s);for(let R=0;R<DL;R++){for(let C=0;C<rn;C++)ZL(e,C,a,n);u&&JL(c,u,f)}for(let R=1;R<rn;R++){let C=l[R].subVectors(r[R],o[R]).divideScalar(a).multiplyScalar(_);C.multiplyScalar(1/(1+n.nodeAir*C.length()*a))}c.velocity.subVectors(c.position,c.previous).divideScalar(a);let w=De.q.copy(c.previousQuaternion).invert().premultiply(c.quaternion);c.angular.set(w.x,w.y,w.z).multiplyScalar(2/a*(w.w<0?-1:1));let v=De.a.set(0,0,1).applyQuaternion(c.quaternion),E=c.velocity.dot(v),I=De.b.copy(c.velocity).addScaledVector(v,-E);I.multiplyScalar(1/(1+n.air*I.length()*a)),c.velocity.copy(I).addScaledVector(v,E/(1+n.broadside*Math.abs(E)*a)).multiplyScalar(M),c.angular.multiplyScalar(g/(1+n.spinAir*c.angular.length()*a)),c.velocity.lengthSq()>3600&&c.velocity.setLength(60),c.angular.lengthSq()>1600&&c.angular.setLength(40),r[rn].copy(c.hang).applyQuaternion(c.quaternion).add(c.position);for(let R=0;R<rn;R++)e.lengths[R]=r[R].distanceTo(r[R+1])}u&&u.from.copy(u.target);let d=c.velocity.lengthSq()+c.angular.lengthSq()*.3;for(let m=1;m<rn;m++)d+=l[m].lengthSq()*.05;e.calm=d<2e-4?e.calm+t:0},jL=({frontImage:e,backImage:t,imageFit:n="cover",cardColor:i="#ffffff",orientation:s="portrait",finish:a="glossy",cornerRadius:r=.3,size:o=.6,anchor:l="center",strapLength:c=.5,strapImage:h,strapColor:p="#111111",strapWidth:u=.65,metal:f="silver",gravity:_=1,damping:M=.5,elasticity:g=.5,breeze:d=.5,interactive:m=!0,intro:x=!0,className:y="",style:T})=>{let w=(0,Hr.useRef)(null),v=(0,Hr.useRef)(null),E=(0,Hr.useRef)(null);return v.current={frontImage:e,backImage:t,imageFit:n==="contain"?"contain":"cover",cardColor:i,orientation:s==="landscape"?"landscape":"portrait",finish:a,cornerRadius:r,size:o,anchor:l,strapLength:c,strapImage:h,strapColor:p,strapWidth:u,metal:f,gravity:_,damping:M,elasticity:g,breeze:d,interactive:m,intro:x},(0,Hr.useEffect)(()=>{E.current?.()}),(0,Hr.useEffect)(()=>{let I=w.current;if(!I)return;let R;try{R=new gp({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return}R.setClearColor(0,0),R.outputColorSpace=Nn,R.toneMapping=mu,R.toneMappingExposure=1;let C=R.domElement;C.className="lanyard-canvas",C.setAttribute("aria-hidden","true"),I.appendChild(C);let H=Math.min(8,R.capabilities.getMaxAnisotropy()),W=new cl,L=GL(R);W.environment=L.texture;let F=new Xn(zE,1,.1,200),Z=new xl(16777215,1.6);Z.position.set(-2.5,4,6);let V=new xl(16777215,.35);V.position.set(3,-1,4),W.add(Z,V);let it=new Map,k={front:null,back:null,strap:null},Q=document.createElement("canvas"),et=document.createElement("canvas"),wt=document.createElement("canvas"),Pt=av(Q,H),q=av(et,H),yt=av(wt,H);yt.wrapS=Oi,yt.wrapT=Ms;let At=kL(),Bt=XL(),St={foilStrength:{value:0},foilAspect:{value:1.4},foilKey:{value:new O},foilFill:{value:new O},foilTop:{value:new O}},Ft=st=>{Object.assign(st.uniforms,St),st.vertexShader=st.vertexShader.replace("#include <common>",`#include <common>
${IL}`).replace("#include <project_vertex>",`#include <project_vertex>
${PL}`),st.fragmentShader=st.fragmentShader.replace("#include <common>",`#include <common>
${BL}`).replace("#include <opaque_fragment>",`${zL}
#include <opaque_fragment>`)},be=new qa({map:Pt,normalMap:At,normalScale:new vt(.06,.06)}),Ht=new qa({map:q,normalMap:At,normalScale:new vt(.06,.06)});be.onBeforeCompile=Ft,Ht.onBeforeCompile=Ft;let Yt=new qa,jt=new yl({metalness:1}),tt=new qa({map:yt,normalMap:Bt,normalScale:new vt(.7,.7),roughness:.68,sheen:1,sheenRoughness:.42,sheenColor:new ee(.32,.32,.34),side:Mi}),lt=new xs,ot=new hn(void 0,Yt),Et=new hn(void 0,be),ct=new hn(void 0,Ht),Wt=new hn(new vl(WE,LL,18,72),jt);Wt.rotation.y=Math.PI/2-.7,lt.add(ot,Et,ct,Wt),W.add(lt);let Nt=VL(na),ie=new hn(Nt,tt);ie.frustumCulled=!1,W.add(ie);let se=new xs,le=new hn(kE(nv),jt);le.position.y=xp+Cu/2-.004;let U=new hn(new vl(xp,.0105,14,40),jt);se.add(le,U),W.add(se);let It=YL(),te=[],xe=new O,_t=new O,Pe=new ml(te,!1,"centripetal"),Ut={width:1,height:1},Dt=GE("portrait",.3),A={},S=nv,B=2,nt=0,j=performance.now(),ut=0,dt=!0,Y=!0,J=!1,ht=!1,N=null,K=0,X=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,pt=()=>{let st=v.current,ae=iv(st.cardColor,[1,1,1]),ge=FE,me=Math.round(FE*Dt.height/Dt.width);(Q.width!==ge||Q.height!==me)&&(Q.width=ge,Q.height=me,et.width=ge,et.height=me,Pt.dispose(),q.dispose()),XE(Q,k.front,ae,st.imageFit),XE(et,k.back||k.front,ae,st.imageFit),Pt.needsUpdate=!0,q.needsUpdate=!0,Bi()},rt=()=>{let st=v.current;B=qL(wt,k.strap,iv(st.strapColor,[.07,.07,.07])),Bt.repeat.set(2,2*B),yt.dispose(),yt.needsUpdate=!0,Bi()},mt=()=>{let st=v.current,ae=Ut.width/Ut.height,ge=Dt.height/ja(st.size,.15,.9),me=Dt.width/.72;ge*ae<me&&(ge=me/ae);let Sn=ge*ae;F.aspect=ae,F.position.set(0,0,ge/2/Math.tan(zE*Math.PI/360)),F.lookAt(0,0,0),F.updateProjectionMatrix(),F.updateMatrixWorld(),St.foilKey.value.set(-2.5,4,6).normalize().transformDirection(F.matrixWorldInverse),St.foilFill.value.set(3,-1,4).normalize().transformDirection(F.matrixWorldInverse),St.foilTop.value.set(.5,4.5,8).normalize().transformDirection(F.matrixWorldInverse);let b=((CL[st.anchor]??.5)-.5)*Sn,D=ge/2+.2,P=ge/2-ge*Ru(.12,.42,ja(st.strapLength,0,1))+(Dt.hangY-Dt.height/2);It.anchor.set(b,D,0),KL(It,Dt,D-P),It.nodes[0].copy(It.anchor),It.previous[0].copy(It.anchor)},Ot=()=>{let st=v.current,ae=`${st.orientation}|${st.cornerRadius}`;if(ae!==A.layoutKey){Dt=GE(st.orientation,st.cornerRadius);let P=HL(Dt);ot.geometry.dispose(),Et.geometry.dispose(),ct.geometry.dispose(),ot.geometry=P.body,Et.geometry=P.face,ct.geometry=P.face.clone(),Et.position.z=Nu/2+Jn+6e-4,ct.rotation.y=Math.PI,ct.position.z=-(Nu/2+Jn+6e-4),Wt.position.set(0,Dt.ringY,0),A.framingKey=""}let ge=`${ae}|${st.size}|${st.anchor}|${st.strapLength}|${Ut.width}|${Ut.height}`;ge!==A.framingKey&&(mt(),J?ae!==A.layoutKey&&rv(It,Dt,!1):(rv(It,Dt,st.intro&&!X),J=!0));let me=`${st.frontImage}|${st.backImage}|${st.strapImage}`;if(me!==A.imageKey){let P=++K;Promise.all([sv(it,st.frontImage),sv(it,st.backImage),sv(it,st.strapImage)]).then(([z,gt,Rt])=>{!Y||P!==K||(k.front=z,k.back=gt,k.strap=Rt,pt(),rt())})}let Sn=`${ae}|${st.cardColor}|${st.imageFit}`;Sn!==A.faceKey&&pt(),st.strapColor!==A.strapColor&&rt();let b=HE[st.finish]||HE.glossy,D=iv(st.cardColor,[1,1,1]);[be,Ht].forEach(P=>{P.roughness=b.roughness,P.metalness=b.metalness,P.clearcoat=b.clearcoat,P.clearcoatRoughness=b.clearcoatRoughness,P.anisotropy=b.anisotropy}),St.foilStrength.value=b.foil,St.foilAspect.value=Dt.height/Dt.width,Yt.color.setRGB(D[0]*.92,D[1]*.92,D[2]*.92,Nn),Yt.roughness=Math.min(b.roughness,.35),Yt.metalness=b.metalness,Yt.clearcoat=1,Yt.clearcoatRoughness=.08;let G=VE[st.metal]||VE.silver;jt.color.set(G.color),jt.roughness=G.roughness,S=nv*ja(st.strapWidth,.2,2),S!==A.strapScale&&(le.geometry.dispose(),le.geometry=kE(S)),C.style.touchAction=st.interactive?"pan-y":"auto",A={layoutKey:ae,framingKey:ge,imageKey:me,faceKey:Sn,strapColor:st.strapColor,strapScale:S},Bi()},Zt=Array.from({length:na},()=>new O),at=Array.from({length:na},()=>new O),Vt=UL.map(st=>[Math.cos(st),Math.sin(st)]),kt={tangent:new O,toCamera:new O,basis:new Ue,up:new O,across:new O,facing:new O,end:new O},bt=()=>{let st=It.nodes[rn],ae=xp+Cu+.05,ge=rn-1;for(;ge>0&&It.nodes[ge].distanceTo(st)<ae*1.1;)ge--;let me=kt.up.subVectors(It.nodes[ge],st);me.lengthSq()<1e-8&&me.set(0,1,0).applyQuaternion(It.body.quaternion),me.normalize(),xe.copy(st).addScaledVector(me,ae),_t.copy(st).addScaledVector(me,xp+Cu*.35),te.length=0;for(let ft=0;ft<=ge;ft++)te.push(It.nodes[ft]);te.push(xe,_t),Pe.updateArcLengths();for(let ft=0;ft<na;ft++)Pe.getPointAt(ft/(na-1),Zt[ft]);let Sn=Pe.getLength(),b=1-xe.distanceTo(_t)/Math.max(Sn,.001),D=Nt.getAttribute("position"),G=Nt.getAttribute("normal"),P=Nt.getAttribute("uv"),z=Sp.length,gt=It.rest*rn,Rt=gt/(S*B),xt=S/Math.pow(Math.max(1,Sn/Math.max(gt,.001)),.35),{tangent:Mt,toCamera:Lt,across:zt,facing:Kt}=kt;for(let ft=0;ft<na;ft++){Mt.subVectors(Zt[Math.min(na-1,ft+1)],Zt[Math.max(0,ft-1)]),Mt.lengthSq()<1e-12&&Mt.set(0,-1,0),Mt.normalize(),Lt.subVectors(F.position,Zt[ft]).normalize();let $t=at[ft].crossVectors(Lt,Mt);$t.lengthSq()<1e-10&&$t.copy(ft>0?at[ft-1]:De.a.set(1,0,0)),$t.normalize(),ft>0&&$t.dot(at[ft-1])<0&&$t.negate();let We=-It.twist*Math.pow(Math.min(1,ft/(na-1)/b),1.3);Kt.crossVectors(Mt,$t),zt.copy($t).multiplyScalar(Math.cos(We)).addScaledVector(Kt,Math.sin(We)),Kt.crossVectors(Mt,zt);let Ee=Zt[ft],we=(1-ft/(na-1))*Rt;for(let qe=0;qe<z;qe++){let Ct=ft*z+qe,on=(Sp[qe]-.5)*xt,[pe,Hi]=Vt[qe];D.setXYZ(Ct,Ee.x+zt.x*on,Ee.y+zt.y*on,Ee.z+zt.z*on),G.setXYZ(Ct,Kt.x*pe+zt.x*Hi,Kt.y*pe+zt.y*Hi,Kt.z*pe+zt.z*Hi),P.setXY(Ct,Sp[qe],we)}}kt.end.copy(zt),D.needsUpdate=!0,G.needsUpdate=!0,P.needsUpdate=!0,zt.copy(kt.end).addScaledVector(me,-kt.end.dot(me)).normalize(),Kt.crossVectors(zt,me).normalize(),kt.basis.makeBasis(zt,me,Kt),se.quaternion.setFromRotationMatrix(kt.basis),se.position.copy(st)},ve=()=>{lt.position.copy(It.body.position),lt.quaternion.copy(It.body.quaternion),bt(),R.render(W,F)},$e=()=>{let st=v.current,ae=40*ja(st.gravity,0,3),ge=Math.max(ae,20),me=ja(st.elasticity,0,1),Sn=ja(st.damping,0,1);return{gravity:ae,hold:ge*Ru(2.2,5.5,me),stiffness:ge*10*rn,spring:ge*Ru(.1,.4,me)*rn,bandDamping:ge*Ru(.3,.08,me)*rn,linearDrag:.25*Math.pow(16,Sn),angularDrag:.5*Math.pow(12,Sn),air:.15,broadside:.5,spinAir:.03,nodeDrag:2,nodeAir:.2,twist:30,twistDamping:3,grip:40,gripDamping:6,breeze:X?0:ja(st.breeze,0,1)}},Pi=st=>{if(nt=0,!Y)return;let ae=Math.min(1/30,Math.max(1/240,(st-j)/1e3));j=st,ut+=ae;let ge=$e();QL(It,ae,ge,ut);let me=It.body;Number.isFinite(me.position.x+me.position.y+me.position.z+me.quaternion.w)||(It.grab=null,rv(It,Dt,!1)),ve();let Sn=It.calm>1.2&&!It.grab&&ge.breeze===0;dt&&!Sn&&(nt=requestAnimationFrame(Pi))},Bi=()=>{nt||!dt||!Y||(It.calm=0,j=performance.now(),nt=requestAnimationFrame(Pi))},$a=new du,Du=new vt,Vr=st=>{let ae=C.getBoundingClientRect();Du.set((st.clientX-ae.left)/ae.width*2-1,-((st.clientY-ae.top)/ae.height)*2+1),$a.setFromCamera(Du,F)},Gr=()=>(lt.updateMatrixWorld(),$a.intersectObjects([ot,Et,ct],!1)[0]||null),zi=st=>{C.style.cursor!==st&&(C.style.cursor=st)},Nl=st=>{let ae=It.body,ge=De.a.set(0,1,0).applyQuaternion(ae.quaternion),me=It.turn>0?-1:1;if(It.turn===0){let Sn=De.c.subVectors(st,F.position).normalize();me=De.b.subVectors(st,ae.position).cross(Sn).dot(ge)<0?-1:1}It.turn=It.turn===0?Math.PI*me:0,ae.angular.addScaledVector(ge,OL*me)},Dl=st=>{if(!v.current.interactive||st.button>0)return;Vr(st);let ae=Gr();ae&&(It.grab={local:ae.point.clone().sub(It.body.position).applyQuaternion(It.body.quaternion.clone().invert()),rotation:It.body.quaternion.clone(),reach:ae.distance,from:ae.point.clone(),target:ae.point.clone()},N={x:st.clientX,y:st.clientY,time:performance.now(),point:ae.point.clone()},C.setPointerCapture?.(st.pointerId),zi("grabbing"),st.preventDefault(),Bi())},Ll=st=>{if(v.current.interactive){if(Vr(st),It.grab){N&&Math.hypot(st.clientX-N.x,st.clientY-N.y)>6&&(N=null),$a.ray.at(It.grab.reach,It.grab.target),Bi();return}st.pointerType!=="touch"&&(ht=!!Gr(),zi(ht?"grab":""))}},Fi=st=>{It.grab&&(It.grab=null,N&&st.type==="pointerup"&&performance.now()-N.time<450&&Nl(N.point),N=null,C.releasePointerCapture?.(st.pointerId),zi(ht&&st.pointerType!=="touch"?"grab":""),Bi())},Ul=st=>{!v.current.interactive||st.touches.length!==1||(Vr(st.touches[0]),Gr()&&st.preventDefault())};C.addEventListener("pointerdown",Dl),C.addEventListener("pointermove",Ll),C.addEventListener("pointerup",Fi),C.addEventListener("pointercancel",Fi),C.addEventListener("lostpointercapture",Fi),C.addEventListener("touchstart",Ul,{passive:!1});let Ol=()=>{Ut.width=Math.max(1,I.clientWidth),Ut.height=Math.max(1,I.clientHeight),R.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),R.setSize(Ut.width,Ut.height,!1),Ot(),ve()},ia=new ResizeObserver(Ol);ia.observe(I);let Lu=new IntersectionObserver(([st])=>{dt=st.isIntersecting,dt&&Bi()});Lu.observe(I);let Il=()=>{document.hidden||Bi()};return document.addEventListener("visibilitychange",Il),E.current=Ot,Ol(),()=>{Y=!1,cancelAnimationFrame(nt),E.current=null,ia.disconnect(),Lu.disconnect(),document.removeEventListener("visibilitychange",Il),C.removeEventListener("pointerdown",Dl),C.removeEventListener("pointermove",Ll),C.removeEventListener("pointerup",Fi),C.removeEventListener("pointercancel",Fi),C.removeEventListener("lostpointercapture",Fi),C.removeEventListener("touchstart",Ul),[ot,Et,ct,Wt,le,U,ie].forEach(st=>st.geometry?.dispose()),[be,Ht,Yt,jt,tt].forEach(st=>st.dispose()),[Pt,q,yt,At,Bt].forEach(st=>st.dispose()),L.dispose(),R.dispose(),C.parentNode&&C.parentNode.removeChild(C)}},[]),(0,QE.jsx)("div",{ref:w,className:`lanyard ${y}`.trim(),style:T})},KE=jL;var $E=kr(wu(),1);function $L(e){(0,jE.createRoot)(e).render((0,$E.jsx)(KE,{frontImage:"/public/images/profile/Lanyard_depan.png",backImage:"/public/images/profile/Lanyard_belakang.png",cardColor:"#ffffff",orientation:"portrait",finish:"glossy",cornerRadius:.3,size:.48,anchor:"center",strapLength:.85,strapColor:"#111111",strapWidth:.52,metal:"silver",gravity:1,damping:.5,elasticity:.5,breeze:.5,interactive:!0,intro:!0})),e.dataset.mounted="true"}document.querySelectorAll("[data-lanyard-root]").forEach($L);
/*! Bundled license information:

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
