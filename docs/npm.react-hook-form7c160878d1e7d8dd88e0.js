"use strict";(self.webpackChunkwebpackreact=self.webpackChunkwebpackreact||[]).push([[598],{930:function(e,t,r){var s=r(6624);Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(r(7294)),n=e=>"checkbox"===e.type,i=e=>e instanceof Date,u=e=>null==e;const o=e=>"object"==typeof e;var l=e=>!u(e)&&!Array.isArray(e)&&o(e)&&!i(e),d=e=>l(e)&&e.target?n(e.target)?e.target.checked:e.target.value:e,c=(e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)),f=e=>{const t=e.constructor&&e.constructor.prototype;return l(t)&&t.hasOwnProperty("isPrototypeOf")},m="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function y(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(m&&(e instanceof Blob||e instanceof FileList)||!r&&!l(e))return e;if(t=r?[]:{},r||f(e))for(const r in e)e.hasOwnProperty(r)&&(t[r]=y(e[r]));else t=e}return t}var p=e=>Array.isArray(e)?e.filter(Boolean):[],_=e=>void 0===e,h=(e,t,r)=>{if(!t||!l(e))return r;const s=p(t.split(/[,[\].]+?/)).reduce(((e,t)=>u(e)?e:e[t]),e);return _(s)||s===e?_(e[t])?r:e[t]:s},g=e=>"boolean"==typeof e;const v="blur",b="focusout",A="change",V="onBlur",x="onChange",F="onSubmit",S="onTouched",w="all",k="pattern",D="required",C=a.default.createContext(null),E=()=>a.default.useContext(C);var j=(e,t,r,s=!0)=>{const a={defaultValues:t._defaultValues};for(const n in e)Object.defineProperty(a,n,{get:()=>{const a=n;return t._proxyFormState[a]!==w&&(t._proxyFormState[a]=!s||w),r&&(r[a]=!0),e[a]}});return a},O=e=>l(e)&&!Object.keys(e).length,T=(e,t,r,s)=>{r(e);const{name:a,...n}=e;return O(n)||Object.keys(n).length>=Object.keys(t).length||Object.keys(n).find((e=>t[e]===(!s||w)))},N=e=>Array.isArray(e)?e:[e],B=(e,t,r)=>!e||!t||e===t||N(e).some((e=>e&&(r?e===t:e.startsWith(t)||t.startsWith(e))));function U(e){const t=a.default.useRef(e);t.current=e,a.default.useEffect((()=>{const r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}}),[e.disabled])}function L(e){const t=E(),{control:r=t.control,disabled:s,name:n,exact:i}=e||{},[u,o]=a.default.useState(r._formState),l=a.default.useRef(!0),d=a.default.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),c=a.default.useRef(n);return c.current=n,U({disabled:s,next:e=>l.current&&B(c.current,e.name,i)&&T(e,d.current,r._updateFormState)&&o({...r._formState,...e}),subject:r._subjects.state}),a.default.useEffect((()=>(l.current=!0,d.current.isValid&&r._updateValid(!0),()=>{l.current=!1})),[r]),j(u,r,d.current,!1)}var M=e=>"string"==typeof e,R=(e,t,r,s,a)=>M(e)?(s&&t.watch.add(e),h(r,e,a)):Array.isArray(e)?e.map((e=>(s&&t.watch.add(e),h(r,e)))):(s&&(t.watchAll=!0),r);function P(e){const t=E(),{control:r=t.control,name:s,defaultValue:n,disabled:i,exact:u}=e||{},o=a.default.useRef(s);o.current=s,U({disabled:i,subject:r._subjects.values,next:e=>{B(o.current,e.name,u)&&d(y(R(o.current,r._names,e.values||r._formValues,!1,n)))}});const[l,d]=a.default.useState(r._getWatch(s,n));return a.default.useEffect((()=>r._removeUnmounted())),l}var q=e=>/^\w*$/.test(e),W=e=>p(e.replace(/["|']|\]/g,"").split(/\.|\[/));function I(e,t,r){let s=-1;const a=q(t)?[t]:W(t),n=a.length,i=n-1;for(;++s<n;){const t=a[s];let n=r;if(s!==i){const r=e[t];n=l(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}e[t]=n,e=e[t]}return e}function $(e){const t=E(),{name:r,disabled:s,control:n=t.control,shouldUnregister:i}=e,u=c(n._names.array,r),o=P({control:n,name:r,defaultValue:h(n._formValues,r,h(n._defaultValues,r,e.defaultValue)),exact:!0}),l=L({control:n,name:r}),f=a.default.useRef(n.register(r,{...e.rules,value:o}));return f.current=n.register(r,e.rules),a.default.useEffect((()=>{const e=n._options.shouldUnregister||i,t=(e,t)=>{const r=h(n._fields,e);r&&(r._f.mount=t)};if(t(r,!0),e){const e=y(h(n._options.defaultValues,r));I(n._defaultValues,r,e),_(h(n._formValues,r))&&I(n._formValues,r,e)}return()=>{(u?e&&!n._state.action:e)?n.unregister(r):t(r,!1)}}),[r,n,u,i]),a.default.useEffect((()=>{h(n._fields,r)&&n._updateDisabledField({disabled:s,fields:n._fields,name:r,value:h(n._fields,r)._f.value})}),[s,r,n]),{field:{name:r,value:o,...g(s)||g(l.disabled)?{disabled:l.disabled||s}:{},onChange:a.default.useCallback((e=>f.current.onChange({target:{value:d(e),name:r},type:A})),[r]),onBlur:a.default.useCallback((()=>f.current.onBlur({target:{value:h(n._formValues,r),name:r},type:v})),[r,n]),ref:e=>{const t=h(n._fields,r);t&&e&&(t._f.ref={focus:()=>e.focus(),select:()=>e.select(),setCustomValidity:t=>e.setCustomValidity(t),reportValidity:()=>e.reportValidity()})}},formState:l,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!h(l.errors,r)},isDirty:{enumerable:!0,get:()=>!!h(l.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!h(l.touchedFields,r)},error:{enumerable:!0,get:()=>h(l.errors,r)}})}}const H="post";var J=(e,t,r,s,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:a||!0}}:{},z=()=>{const e="undefined"==typeof performance?Date.now():1e3*performance.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(t=>{const r=(16*Math.random()+e)%16|0;return("x"==t?r:3&r|8).toString(16)}))},G=(e,t,r={})=>r.shouldFocus||_(r.shouldFocus)?r.focusName||`${e}.${_(r.focusIndex)?t:r.focusIndex}.`:"",K=e=>({isOnSubmit:!e||e===F,isOnBlur:e===V,isOnChange:e===x,isOnAll:e===w,isOnTouch:e===S}),Q=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))));const X=(e,t,r,s)=>{for(const a of r||Object.keys(e)){const r=h(e,a);if(r){const{_f:e,...n}=r;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],a)&&!s)break;if(e.ref&&t(e.ref,e.name)&&!s)break}else l(n)&&X(n,t)}}};var Y=(e,t,r)=>{const s=p(h(e,r));return I(s,"root",t[r]),I(e,r,s),e},Z=e=>"file"===e.type,ee=e=>"function"==typeof e,te=e=>{if(!m)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},re=e=>M(e),se=e=>"radio"===e.type,ae=e=>e instanceof RegExp;const ne={value:!1,isValid:!1},ie={value:!0,isValid:!0};var ue=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!_(e[0].attributes.value)?_(e[0].value)||""===e[0].value?ie:{value:e[0].value,isValid:!0}:ie:ne}return ne};const oe={isValid:!1,value:null};var le=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),oe):oe;function de(e,t,r="validate"){if(re(e)||Array.isArray(e)&&e.every(re)||g(e)&&!e)return{type:r,message:re(e)?e:"",ref:t}}var ce=e=>l(e)&&!ae(e)?e:{value:e,message:""},fe=async(e,t,r,s,a)=>{const{ref:i,refs:o,required:d,maxLength:c,minLength:f,min:m,max:y,pattern:p,validate:v,name:b,valueAsNumber:A,mount:V,disabled:x}=e._f,F=h(t,b);if(!V||x)return{};const S=o?o[0]:i,w=e=>{s&&S.reportValidity&&(S.setCustomValidity(g(e)?"":e||""),S.reportValidity())},C={},E=se(i),j=n(i),T=E||j,N=(A||Z(i))&&_(i.value)&&_(F)||te(i)&&""===i.value||""===F||Array.isArray(F)&&!F.length,B=J.bind(null,b,r,C),U=(e,t,r,s="maxLength",a="minLength")=>{const n=e?t:r;C[b]={type:e?s:a,message:n,ref:i,...B(e?s:a,n)}};if(a?!Array.isArray(F)||!F.length:d&&(!T&&(N||u(F))||g(F)&&!F||j&&!ue(o).isValid||E&&!le(o).isValid)){const{value:e,message:t}=re(d)?{value:!!d,message:d}:ce(d);if(e&&(C[b]={type:D,message:t,ref:S,...B(D,t)},!r))return w(t),C}if(!(N||u(m)&&u(y))){let e,t;const s=ce(y),a=ce(m);if(u(F)||isNaN(F)){const r=i.valueAsDate||new Date(F),n=e=>new Date((new Date).toDateString()+" "+e),u="time"==i.type,o="week"==i.type;M(s.value)&&F&&(e=u?n(F)>n(s.value):o?F>s.value:r>new Date(s.value)),M(a.value)&&F&&(t=u?n(F)<n(a.value):o?F<a.value:r<new Date(a.value))}else{const r=i.valueAsNumber||(F?+F:F);u(s.value)||(e=r>s.value),u(a.value)||(t=r<a.value)}if((e||t)&&(U(!!e,s.message,a.message,"max","min"),!r))return w(C[b].message),C}if((c||f)&&!N&&(M(F)||a&&Array.isArray(F))){const e=ce(c),t=ce(f),s=!u(e.value)&&F.length>+e.value,a=!u(t.value)&&F.length<+t.value;if((s||a)&&(U(s,e.message,t.message),!r))return w(C[b].message),C}if(p&&!N&&M(F)){const{value:e,message:t}=ce(p);if(ae(e)&&!F.match(e)&&(C[b]={type:k,message:t,ref:i,...B(k,t)},!r))return w(t),C}if(v)if(ee(v)){const e=de(await v(F,t),S);if(e&&(C[b]={...e,...B("validate",e.message)},!r))return w(e.message),C}else if(l(v)){let e={};for(const s in v){if(!O(e)&&!r)break;const a=de(await v[s](F,t),S,s);a&&(e={...a,...B(s,a.message)},w(a.message),r&&(C[b]=e))}if(!O(e)&&(C[b]={ref:S,...e},!r))return C}return w(!0),C};function me(e,t){return[...e,...N(t)]}var ye=e=>Array.isArray(e)?e.map((()=>{})):void 0;function pe(e,t,r){return[...e.slice(0,t),...N(r),...e.slice(t)]}var _e=(e,t,r)=>Array.isArray(e)?(_(e[r])&&(e[r]=void 0),e.splice(r,0,e.splice(t,1)[0]),e):[];function he(e,t){return[...N(t),...N(e)]}var ge=(e,t)=>_(t)?[]:function(e,t){let r=0;const s=[...e];for(const e of t)s.splice(e-r,1),r++;return p(s).length?s:[]}(e,N(t).sort(((e,t)=>e-t))),ve=(e,t,r)=>{e[t]=[e[r],e[r]=e[t]][0]};function be(e,t){const r=Array.isArray(t)?t:q(t)?[t]:W(t),s=1===r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=_(e)?s++:e[t[s++]];return e}(e,r),a=r.length-1,n=r[a];return s&&delete s[n],0!==a&&(l(s)&&O(s)||Array.isArray(s)&&function(e){for(const t in e)if(e.hasOwnProperty(t)&&!_(e[t]))return!1;return!0}(s))&&be(e,r.slice(0,-1)),e}var Ae=(e,t,r)=>(e[t]=r,e);function Ve(){let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next&&r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}}var xe=e=>u(e)||!o(e);function Fe(e,t){if(xe(e)||xe(t))return e===t;if(i(e)&&i(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const a of r){const r=e[a];if(!s.includes(a))return!1;if("ref"!==a){const e=t[a];if(i(r)&&i(e)||l(r)&&l(e)||Array.isArray(r)&&Array.isArray(e)?!Fe(r,e):r!==e)return!1}}return!0}var Se=e=>"select-multiple"===e.type,we=e=>se(e)||n(e),ke=e=>te(e)&&e.isConnected,De=e=>{for(const t in e)if(ee(e[t]))return!0;return!1};function Ce(e,t={}){const r=Array.isArray(e);if(l(e)||r)for(const r in e)Array.isArray(e[r])||l(e[r])&&!De(e[r])?(t[r]=Array.isArray(e[r])?[]:{},Ce(e[r],t[r])):u(e[r])||(t[r]=!0);return t}function Ee(e,t,r){const s=Array.isArray(e);if(l(e)||s)for(const s in e)Array.isArray(e[s])||l(e[s])&&!De(e[s])?_(t)||xe(r[s])?r[s]=Array.isArray(e[s])?Ce(e[s],[]):{...Ce(e[s])}:Ee(e[s],u(t)?{}:t[s],r[s]):r[s]=!Fe(e[s],t[s]);return r}var je=(e,t)=>Ee(e,t,Ce(t)),Oe=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>_(e)?e:t?""===e?NaN:e?+e:e:r&&M(e)?new Date(e):s?s(e):e;function Te(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return Z(t)?t.files:se(t)?le(e.refs).value:Se(t)?[...t.selectedOptions].map((({value:e})=>e)):n(t)?ue(e.refs).value:Oe(_(t.value)?e.ref.value:t.value,e)}var Ne=e=>_(e)?e:ae(e)?e.source:l(e)?ae(e.value)?e.value.source:e.value:e;function Be(e,t,r){const s=h(e,r);if(s||q(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),n=h(t,s),i=h(e,s);if(n&&!Array.isArray(n)&&r!==s)return{name:r};if(i&&i.type)return{name:s,error:i};a.pop()}return{name:r}}const Ue={mode:F,reValidateMode:x,shouldFocusError:!0};function Le(e={},t){let r,a={...Ue,...e},o={submitCount:0,isDirty:!1,isLoading:ee(a.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{},disabled:!1},f={},A=(l(a.defaultValues)||l(a.values))&&y(a.defaultValues||a.values)||{},V=a.shouldUnregister?{}:y(A),x={action:!1,mount:!1,watch:!1},F={mount:new Set,unMount:new Set,array:new Set,watch:new Set},S=0;const k={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},D={values:Ve(),array:Ve(),state:Ve()},C=e.resetOptions&&e.resetOptions.keepDirtyValues,E=K(a.mode),j=K(a.reValidateMode),T=a.criteriaMode===w,B=async e=>{if(k.isValid||e){const e=a.resolver?O((await W()).errors):await $(f,!0);e!==o.isValid&&D.state.next({isValid:e})}},U=e=>k.isValidating&&D.state.next({isValidating:e}),L=(e,t,r,s)=>{const a=h(f,e);if(a){const n=h(V,e,_(r)?h(A,e):r);_(n)||s&&s.defaultChecked||t?I(V,e,t?n:Te(a._f)):z(e,n),x.mount&&B()}},P=(e,t,r,s,a)=>{let n=!1,i=!1;const u={name:e};if(!r||s){k.isDirty&&(i=o.isDirty,o.isDirty=u.isDirty=H(),n=i!==u.isDirty);const r=Fe(h(A,e),t);i=h(o.dirtyFields,e),r?be(o.dirtyFields,e):I(o.dirtyFields,e,!0),u.dirtyFields=o.dirtyFields,n=n||k.dirtyFields&&i!==!r}if(r){const t=h(o.touchedFields,e);t||(I(o.touchedFields,e,r),u.touchedFields=o.touchedFields,n=n||k.touchedFields&&t!==r)}return n&&a&&D.state.next(u),n?u:{}},q=(t,s,a,n)=>{const i=h(o.errors,t),u=k.isValid&&g(s)&&o.isValid!==s;var l;if(e.delayError&&a?(l=()=>((e,t)=>{I(o.errors,e,t),D.state.next({errors:o.errors})})(t,a),r=e=>{clearTimeout(S),S=setTimeout(l,e)},r(e.delayError)):(clearTimeout(S),r=null,a?I(o.errors,t,a):be(o.errors,t)),(a?!Fe(i,a):i)||!O(n)||u){const e={...n,...u&&g(s)?{isValid:s}:{},errors:o.errors,name:t};o={...o,...e},D.state.next(e)}U(!1)},W=async e=>a.resolver(V,a.context,((e,t,r,s)=>{const a={};for(const r of e){const e=h(t,r);e&&I(a,r,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}})(e||F.mount,f,a.criteriaMode,a.shouldUseNativeValidation)),$=async(e,t,r={valid:!0})=>{for(const s in e){const n=e[s];if(n){const{_f:e,...s}=n;if(e){const s=F.array.has(e.name),i=await fe(n,V,T,a.shouldUseNativeValidation&&!t,s);if(i[e.name]&&(r.valid=!1,t))break;!t&&(h(i,e.name)?s?Y(o.errors,i,e.name):I(o.errors,e.name,i[e.name]):be(o.errors,e.name))}s&&await $(s,t,r)}}return r.valid},H=(e,t)=>(e&&t&&I(V,e,t),!Fe(ie(),A)),J=(e,t,r)=>R(e,F,{...x.mount?V:_(t)?A:M(e)?{[e]:t}:t},r,t),z=(e,t,r={})=>{const s=h(f,e);let a=t;if(s){const r=s._f;r&&(!r.disabled&&I(V,e,Oe(t,r)),a=te(r.ref)&&u(t)?"":t,Se(r.ref)?[...r.ref.options].forEach((e=>e.selected=a.includes(e.value))):r.refs?n(r.ref)?r.refs.length>1?r.refs.forEach((e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(a)?!!a.find((t=>t===e.value)):a===e.value))):r.refs[0]&&(r.refs[0].checked=!!a):r.refs.forEach((e=>e.checked=e.value===a)):Z(r.ref)?r.ref.value="":(r.ref.value=a,r.ref.type||D.values.next({name:e,values:{...V}})))}(r.shouldDirty||r.shouldTouch)&&P(e,a,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&ne(e)},G=(e,t,r)=>{for(const s in t){const a=t[s],n=`${e}.${s}`,u=h(f,n);!F.array.has(e)&&xe(a)&&(!u||u._f)||i(a)?z(n,a,r):G(n,a,r)}},re=(e,r,s={})=>{const a=h(f,e),n=F.array.has(e),i=y(r);I(V,e,i),n?(D.array.next({name:e,values:{...V}}),(k.isDirty||k.dirtyFields)&&s.shouldDirty&&D.state.next({name:e,dirtyFields:je(A,V),isDirty:H(e,i)})):!a||a._f||u(i)?z(e,i,s):G(e,i,s),Q(e,F)&&D.state.next({...o}),D.values.next({name:e,values:{...V}}),!x.mount&&t()},se=async e=>{const t=e.target;let s=t.name,n=!0;const i=h(f,s),u=e=>{n=Number.isNaN(e)||e===h(V,s,e)};if(i){let l,c;const m=t.type?Te(i._f):d(e),y=e.type===v||e.type===b,p=!(e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate))(i._f)&&!a.resolver&&!h(o.errors,s)&&!i._f.deps||((e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:!(r?s.isOnChange:a.isOnChange)||e))(y,h(o.touchedFields,s),o.isSubmitted,j,E),_=Q(s,F,y);I(V,s,m),y?(i._f.onBlur&&i._f.onBlur(e),r&&r(0)):i._f.onChange&&i._f.onChange(e);const g=P(s,m,y,!1),A=!O(g)||_;if(!y&&D.values.next({name:s,type:e.type,values:{...V}}),p)return k.isValid&&B(),A&&D.state.next({name:s,..._?{}:g});if(!y&&_&&D.state.next({...o}),U(!0),a.resolver){const{errors:e}=await W([s]);if(u(m),n){const t=Be(o.errors,f,s),r=Be(e,f,t.name||s);l=r.error,s=r.name,c=O(e)}}else l=(await fe(i,V,T,a.shouldUseNativeValidation))[s],u(m),n&&(l?c=!1:k.isValid&&(c=await $(f,!0)));n&&(i._f.deps&&ne(i._f.deps),q(s,c,l,g))}},ae=(e,t)=>{if(h(o.errors,t)&&e.focus)return e.focus(),1},ne=async(e,t={})=>{let r,n;const i=N(e);if(U(!0),a.resolver){const t=await(async e=>{const{errors:t}=await W(e);if(e)for(const r of e){const e=h(t,r);e?I(o.errors,r,e):be(o.errors,r)}else o.errors=t;return t})(_(e)?e:i);r=O(t),n=e?!i.some((e=>h(t,e))):r}else e?(n=(await s.all(i.map((async e=>{const t=h(f,e);return await $(t&&t._f?{[e]:t}:t)})))).every(Boolean),(n||o.isValid)&&B()):n=r=await $(f);return D.state.next({...!M(e)||k.isValid&&r!==o.isValid?{}:{name:e},...a.resolver||!e?{isValid:r}:{},errors:o.errors,isValidating:!1}),t.shouldFocus&&!n&&X(f,ae,e?i:F.mount),n},ie=e=>{const t={...A,...x.mount?V:{}};return _(e)?t:M(e)?h(t,e):e.map((e=>h(t,e)))},ue=(e,t)=>({invalid:!!h((t||o).errors,e),isDirty:!!h((t||o).dirtyFields,e),isTouched:!!h((t||o).touchedFields,e),error:h((t||o).errors,e)}),oe=(e,t,r)=>{const s=(h(f,e,{_f:{}})._f||{}).ref;I(o.errors,e,{...t,ref:s}),D.state.next({name:e,errors:o.errors,isValid:!1}),r&&r.shouldFocus&&s&&s.focus&&s.focus()},le=(e,t={})=>{for(const r of e?N(e):F.mount)F.mount.delete(r),F.array.delete(r),t.keepValue||(be(f,r),be(V,r)),!t.keepError&&be(o.errors,r),!t.keepDirty&&be(o.dirtyFields,r),!t.keepTouched&&be(o.touchedFields,r),!a.shouldUnregister&&!t.keepDefaultValue&&be(A,r);D.values.next({values:{...V}}),D.state.next({...o,...t.keepDirty?{isDirty:H()}:{}}),!t.keepIsValid&&B()},de=({disabled:e,name:t,field:r,fields:s,value:a})=>{if(g(e)){const n=e?void 0:_(a)?Te(r?r._f:h(s,t)._f):a;I(V,t,n),P(t,n,!1,!1,!0)}},ce=(e,t={})=>{let r=h(f,e);const s=g(t.disabled);return I(f,e,{...r||{},_f:{...r&&r._f?r._f:{ref:{name:e}},name:e,mount:!0,...t}}),F.mount.add(e),r?de({field:r,disabled:t.disabled,name:e}):L(e,!0,t.value),{...s?{disabled:t.disabled}:{},...a.progressive?{required:!!t.required,min:Ne(t.min),max:Ne(t.max),minLength:Ne(t.minLength),maxLength:Ne(t.maxLength),pattern:Ne(t.pattern)}:{},name:e,onChange:se,onBlur:se,ref:s=>{if(s){ce(e,t),r=h(f,e);const a=_(s.value)&&s.querySelectorAll&&s.querySelectorAll("input,select,textarea")[0]||s,n=we(a),i=r._f.refs||[];if(n?i.find((e=>e===a)):a===r._f.ref)return;I(f,e,{_f:{...r._f,...n?{refs:[...i.filter(ke),a,...Array.isArray(h(A,e))?[{}]:[]],ref:{type:a.type,name:e}}:{ref:a}}}),L(e,!1,void 0,a)}else r=h(f,e,{}),r._f&&(r._f.mount=!1),(a.shouldUnregister||t.shouldUnregister)&&(!c(F.array,e)||!x.action)&&F.unMount.add(e)}}},me=()=>a.shouldFocusError&&X(f,ae,F.mount),ye=(e,t)=>async r=>{r&&(r.preventDefault&&r.preventDefault(),r.persist&&r.persist());let s=y(V);if(D.state.next({isSubmitting:!0}),a.resolver){const{errors:e,values:t}=await W();o.errors=e,s=t}else await $(f);be(o.errors,"root"),O(o.errors)?(D.state.next({errors:{}}),await e(s,r)):(t&&await t({...o.errors},r),me(),setTimeout(me)),D.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:O(o.errors),submitCount:o.submitCount+1,errors:o.errors})},pe=(r,s={})=>{const a=r?y(r):A,n=y(a),i=r&&!O(r)?n:A;if(s.keepDefaultValues||(A=a),!s.keepValues){if(s.keepDirtyValues||C)for(const e of F.mount)h(o.dirtyFields,e)?I(i,e,h(V,e)):re(e,h(i,e));else{if(m&&_(r))for(const e of F.mount){const t=h(f,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(te(e)){const t=e.closest("form");if(t){t.reset();break}}}}f={}}V=e.shouldUnregister?s.keepDefaultValues?y(A):{}:y(i),D.array.next({values:{...i}}),D.values.next({values:{...i}})}F={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!x.mount&&t(),x.mount=!k.isValid||!!s.keepIsValid,x.watch=!!e.shouldUnregister,D.state.next({submitCount:s.keepSubmitCount?o.submitCount:0,isDirty:s.keepDirty?o.isDirty:!(!s.keepDefaultValues||Fe(r,A)),isSubmitted:!!s.keepIsSubmitted&&o.isSubmitted,dirtyFields:s.keepDirtyValues?o.dirtyFields:s.keepDefaultValues&&r?je(A,r):{},touchedFields:s.keepTouched?o.touchedFields:{},errors:s.keepErrors?o.errors:{},isSubmitSuccessful:!!s.keepIsSubmitSuccessful&&o.isSubmitSuccessful,isSubmitting:!1})},_e=(e,t)=>pe(ee(e)?e(V):e,t);return{control:{register:ce,unregister:le,getFieldState:ue,handleSubmit:ye,setError:oe,_executeSchema:W,_getWatch:J,_getDirty:H,_updateValid:B,_removeUnmounted:()=>{for(const e of F.unMount){const t=h(f,e);t&&(t._f.refs?t._f.refs.every((e=>!ke(e))):!ke(t._f.ref))&&le(e)}F.unMount=new Set},_updateFieldArray:(e,t=[],r,s,a=!0,n=!0)=>{if(s&&r){if(x.action=!0,n&&Array.isArray(h(f,e))){const t=r(h(f,e),s.argA,s.argB);a&&I(f,e,t)}if(n&&Array.isArray(h(o.errors,e))){const t=r(h(o.errors,e),s.argA,s.argB);a&&I(o.errors,e,t),((e,t)=>{!p(h(e,t)).length&&be(e,t)})(o.errors,e)}if(k.touchedFields&&n&&Array.isArray(h(o.touchedFields,e))){const t=r(h(o.touchedFields,e),s.argA,s.argB);a&&I(o.touchedFields,e,t)}k.dirtyFields&&(o.dirtyFields=je(A,V)),D.state.next({name:e,isDirty:H(e,t),dirtyFields:o.dirtyFields,errors:o.errors,isValid:o.isValid})}else I(V,e,t)},_updateDisabledField:de,_getFieldArray:t=>p(h(x.mount?V:A,t,e.shouldUnregister?h(A,t,[]):[])),_reset:pe,_resetDefaultValues:()=>ee(a.defaultValues)&&a.defaultValues().then((e=>{_e(e,a.resetOptions),D.state.next({isLoading:!1})})),_updateFormState:e=>{o={...o,...e}},_disableForm:e=>{g(e)&&(D.state.next({disabled:e}),X(f,(t=>{t.disabled=e}),0,!1))},_subjects:D,_proxyFormState:k,get _fields(){return f},get _formValues(){return V},get _state(){return x},set _state(e){x=e},get _defaultValues(){return A},get _names(){return F},set _names(e){F=e},get _formState(){return o},set _formState(e){o=e},get _options(){return a},set _options(e){a={...a,...e}}},trigger:ne,register:ce,handleSubmit:ye,watch:(e,t)=>ee(e)?D.values.subscribe({next:r=>e(J(void 0,t),r)}):J(e,t,!0),setValue:re,getValues:ie,reset:_e,resetField:(e,t={})=>{h(f,e)&&(_(t.defaultValue)?re(e,h(A,e)):(re(e,t.defaultValue),I(A,e,t.defaultValue)),t.keepTouched||be(o.touchedFields,e),t.keepDirty||(be(o.dirtyFields,e),o.isDirty=t.defaultValue?H(e,h(A,e)):H()),t.keepError||(be(o.errors,e),k.isValid&&B()),D.state.next({...o}))},clearErrors:e=>{e&&N(e).forEach((e=>be(o.errors,e))),D.state.next({errors:e?o.errors:{}})},unregister:le,setError:oe,setFocus:(e,t={})=>{const r=h(f,e),s=r&&r._f;if(s){const e=s.refs?s.refs[0]:s.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:ue}}t.Controller=e=>e.render($(e)),t.Form=function(e){const t=E(),[r,s]=a.default.useState(!1),{control:n=t.control,onSubmit:i,children:u,action:o,method:l=H,headers:d,encType:c,onError:f,render:m,onSuccess:y,validateStatus:p,..._}=e,g=async t=>{let r=!1,s="";await n.handleSubmit((async e=>{const a=new FormData;let u="";try{u=JSON.stringify(e)}catch(e){}for(const t of n._names.mount)a.append(t,h(e,t));if(i&&await i({data:e,event:t,method:l,formData:a,formDataJson:u}),o)try{const e=[d&&d["Content-Type"],c].some((e=>e&&e.includes("json"))),t=await fetch(o,{method:l,headers:{...d,...c?{"Content-Type":c}:{}},body:e?u:a});t&&(p?!p(t.status):t.status<200||t.status>=300)?(r=!0,f&&f({response:t}),s=String(t.status)):y&&y({response:t})}catch(e){r=!0,f&&f({error:e})}}))(t),r&&e.control&&(e.control._subjects.state.next({isSubmitSuccessful:!1}),e.control.setError("root.server",{type:s}))};return a.default.useEffect((()=>{s(!0)}),[]),m?a.default.createElement(a.default.Fragment,null,m({submit:g})):a.default.createElement("form",{noValidate:r,action:o,method:l,encType:c,onSubmit:g,..._},u)},t.FormProvider=e=>{const{children:t,...r}=e;return a.default.createElement(C.Provider,{value:r},t)},t.appendErrors=J,t.get=h,t.set=I,t.useController=$,t.useFieldArray=function(e){const t=E(),{control:r=t.control,name:s,keyName:n="id",shouldUnregister:i}=e,[u,o]=a.default.useState(r._getFieldArray(s)),l=a.default.useRef(r._getFieldArray(s).map(z)),d=a.default.useRef(u),c=a.default.useRef(s),f=a.default.useRef(!1);c.current=s,d.current=u,r._names.array.add(s),e.rules&&r.register(s,e.rules),U({next:({values:e,name:t})=>{if(t===c.current||!t){const t=h(e,c.current);Array.isArray(t)&&(o(t),l.current=t.map(z))}},subject:r._subjects.array});const m=a.default.useCallback((e=>{f.current=!0,r._updateFieldArray(s,e)}),[r,s]);return a.default.useEffect((()=>{if(r._state.action=!1,Q(s,r._names)&&r._subjects.state.next({...r._formState}),f.current&&(!K(r._options.mode).isOnSubmit||r._formState.isSubmitted))if(r._options.resolver)r._executeSchema([s]).then((e=>{const t=h(e.errors,s),a=h(r._formState.errors,s);(a?!t&&a.type||t&&(a.type!==t.type||a.message!==t.message):t&&t.type)&&(t?I(r._formState.errors,s,t):be(r._formState.errors,s),r._subjects.state.next({errors:r._formState.errors}))}));else{const e=h(r._fields,s);e&&e._f&&fe(e,r._formValues,r._options.criteriaMode===w,r._options.shouldUseNativeValidation,!0).then((e=>!O(e)&&r._subjects.state.next({errors:Y(r._formState.errors,e,s)})))}r._subjects.values.next({name:s,values:{...r._formValues}}),r._names.focus&&X(r._fields,((e,t)=>{if(r._names.focus&&t.startsWith(r._names.focus)&&e.focus)return e.focus(),1})),r._names.focus="",r._updateValid(),f.current=!1}),[u,s,r]),a.default.useEffect((()=>(!h(r._formValues,s)&&r._updateFieldArray(s),()=>{(r._options.shouldUnregister||i)&&r.unregister(s)})),[s,r,n,i]),{swap:a.default.useCallback(((e,t)=>{const a=r._getFieldArray(s);ve(a,e,t),ve(l.current,e,t),m(a),o(a),r._updateFieldArray(s,a,ve,{argA:e,argB:t},!1)}),[m,s,r]),move:a.default.useCallback(((e,t)=>{const a=r._getFieldArray(s);_e(a,e,t),_e(l.current,e,t),m(a),o(a),r._updateFieldArray(s,a,_e,{argA:e,argB:t},!1)}),[m,s,r]),prepend:a.default.useCallback(((e,t)=>{const a=N(y(e)),n=he(r._getFieldArray(s),a);r._names.focus=G(s,0,t),l.current=he(l.current,a.map(z)),m(n),o(n),r._updateFieldArray(s,n,he,{argA:ye(e)})}),[m,s,r]),append:a.default.useCallback(((e,t)=>{const a=N(y(e)),n=me(r._getFieldArray(s),a);r._names.focus=G(s,n.length-1,t),l.current=me(l.current,a.map(z)),m(n),o(n),r._updateFieldArray(s,n,me,{argA:ye(e)})}),[m,s,r]),remove:a.default.useCallback((e=>{const t=ge(r._getFieldArray(s),e);l.current=ge(l.current,e),m(t),o(t),r._updateFieldArray(s,t,ge,{argA:e})}),[m,s,r]),insert:a.default.useCallback(((e,t,a)=>{const n=N(y(t)),i=pe(r._getFieldArray(s),e,n);r._names.focus=G(s,e,a),l.current=pe(l.current,e,n.map(z)),m(i),o(i),r._updateFieldArray(s,i,pe,{argA:e,argB:ye(t)})}),[m,s,r]),update:a.default.useCallback(((e,t)=>{const a=y(t),n=Ae(r._getFieldArray(s),e,a);l.current=[...n].map(((t,r)=>t&&r!==e?l.current[r]:z())),m(n),o([...n]),r._updateFieldArray(s,n,Ae,{argA:e,argB:a},!0,!1)}),[m,s,r]),replace:a.default.useCallback((e=>{const t=N(y(e));l.current=t.map(z),m([...t]),o([...t]),r._updateFieldArray(s,[...t],(e=>e),{},!0,!1)}),[m,s,r]),fields:a.default.useMemo((()=>u.map(((e,t)=>({...e,[n]:l.current[t]||z()})))),[u,n])}},t.useForm=function(e={}){const t=a.default.useRef(),r=a.default.useRef(),[s,n]=a.default.useState({isDirty:!1,isValidating:!1,isLoading:ee(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},disabled:!1,defaultValues:ee(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...Le(e,(()=>n((e=>({...e}))))),formState:s});const i=t.current.control;return i._options=e,U({subject:i._subjects.state,next:e=>{T(e,i._proxyFormState,i._updateFormState,!0)&&n({...i._formState})}}),a.default.useEffect((()=>i._disableForm(e.disabled)),[i,e.disabled]),a.default.useEffect((()=>{if(i._proxyFormState.isDirty){const e=i._getDirty();e!==s.isDirty&&i._subjects.state.next({isDirty:e})}}),[i,s.isDirty]),a.default.useEffect((()=>{e.values&&!Fe(e.values,r.current)?(i._reset(e.values,i._options.resetOptions),r.current=e.values):i._resetDefaultValues()}),[e.values,i]),a.default.useEffect((()=>{i._state.mount||(i._updateValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()})),t.current.formState=j(s,i),t.current},t.useFormContext=E,t.useFormState=L,t.useWatch=P}}]);