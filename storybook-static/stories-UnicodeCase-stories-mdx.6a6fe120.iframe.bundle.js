(self.webpackChunkstorybook_unicode=self.webpackChunkstorybook_unicode||[]).push([[218],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.XA,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.zE,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Sw},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.kQ;return new Promise((resolve,reject)=>{__webpack_require__.e(294).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.d)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.H)(element)}}}},"./src/stories/UnicodeCase.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Case2:()=>Case2,Case3:()=>Case3,Case4:()=>Case4,Case5:()=>Case5,Comp:()=>Comp,Text:()=>Text,__namedExportsOrder:()=>__namedExportsOrder,case1:()=>case1,case2:()=>case2,case3:()=>case3,case4:()=>case4,case5:()=>case5,default:()=>UnicodeCase_stories}),__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js");__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let Case2=({text})=>{let _components=Object.assign({div:"div"},(0,lib.RP)());return(0,jsx_runtime.jsx)(_components.div,{children:text})},Case3=()=>(0,jsx_runtime.jsx)(Case2,{text:"\uD83D\uDE07"}),Case4=({comp})=>{let _components=Object.assign({div:"div"},(0,lib.RP)());return(0,jsx_runtime.jsx)(_components.div,{children:comp})},Text=({text})=>{let _components=Object.assign({div:"div"},(0,lib.RP)());return(0,jsx_runtime.jsx)(_components.div,{children:text})},Comp=({comp})=>comp,Case5=args=>(0,jsx_runtime.jsx)(Comp,{...args});function _createMdxContent(props){let _components=Object.assign({h3:"h3",div:"div",span:"span"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"UnicodeCase"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"case1",children:"Case1"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"case1",children:()=>(0,jsx_runtime.jsx)(_components.div,{children:"\uD83D\uDC4D"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"case-2-",children:"Case 2 💀"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"case2",children:()=>(0,jsx_runtime.jsx)(Case2,{text:"\uD83E\uDD14"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"case-3",children:"Case 3"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"case3",children:Case3.bind()})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"case-4",children:"Case 4"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"case4",children:(0,jsx_runtime.jsx)(Case4,{comp:(0,jsx_runtime.jsx)(_components.span,{children:"\uD83D\uDE35‍\uD83D\uDCAB"})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"case-5-",children:"Case 5 💀"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"case5",args:{comp:(0,jsx_runtime.jsx)(Text,{text:"\uD83D\uDC40"})},children:Case5.bind()})})]})}function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}let case1=()=>(0,jsx_runtime.jsx)("div",{children:"\uD83D\uDC4D"});case1.storyName="case1",case1.parameters={storySource:{source:"() => {\n  return <div>👍</div>;\n}"}};let case2=()=>(0,jsx_runtime.jsx)(Case2,{text:"\uD83E\uDD14"});case2.storyName="case2",case2.parameters={storySource:{source:'() => {\n  return <Case2 text="\uD83E\uDD14" />;\n}'}};let case3=Case3.bind();case3.storyName="case3",case3.parameters={storySource:{source:'() => {\n  return <Case2 text="\uD83D\uDE07" />;\n}'}};let case4=()=>(0,jsx_runtime.jsx)(Case4,{comp:(0,jsx_runtime.jsx)("span",{children:"\uD83D\uDE35‍\uD83D\uDCAB"})});case4.storyName="case4",case4.parameters={storySource:{source:"<Case4 comp={<span>😵‍💫</span>} />"}};let case5=Case5.bind();case5.storyName="case5",case5.args={comp:(0,jsx_runtime.jsx)(Text,{text:"\uD83D\uDC40"})},case5.parameters={storySource:{source:"args => <Comp {...args} />"}};let componentMeta={title:"UnicodeCase",tags:["stories-mdx"],includeStories:["case1","case2","case3","case4","case5"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:MDXContent};let UnicodeCase_stories=componentMeta,__namedExportsOrder=["Case2","Case3","Case4","Text","Comp","Case5","case1","case2","case3","case4","case5"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=stories-UnicodeCase-stories-mdx.6a6fe120.iframe.bundle.js.map