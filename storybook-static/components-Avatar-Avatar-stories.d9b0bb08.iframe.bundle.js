"use strict";(self.webpackChunkthicc_ui=self.webpackChunkthicc_ui||[]).push([[807],{"./src/components/Avatar/Avatar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Circle:()=>Circle,Square:()=>Square,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Avatar_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function composeContextScopes(...scopes){const baseScope=scopes[0];if(1===scopes.length)return baseScope;const createScope=()=>{const scopeHooks=scopes.map((createScope2=>({useScope:createScope2(),scopeName:createScope2.scopeName})));return function useComposedScopes(overrideScopes){const nextScopes=scopeHooks.reduce(((nextScopes2,{useScope,scopeName})=>({...nextScopes2,...useScope(overrideScopes)[`__scope${scopeName}`]})),{});return react.useMemo((()=>({[`__scope${baseScope.scopeName}`]:nextScopes})),[nextScopes])}};return createScope.scopeName=baseScope.scopeName,createScope}var useLayoutEffect2=Boolean(globalThis?.document)?react.useLayoutEffect:()=>{};__webpack_require__("./node_modules/next/dist/compiled/react-dom/index.js");function setRef(ref,value){if("function"==typeof ref)return ref(value);null!=ref&&(ref.current=value)}function composeRefs(...refs){return node=>{let hasCleanup=!1;const cleanups=refs.map((ref=>{const cleanup=setRef(ref,node);return hasCleanup||"function"!=typeof cleanup||(hasCleanup=!0),cleanup}));if(hasCleanup)return()=>{for(let i=0;i<cleanups.length;i++){const cleanup=cleanups[i];"function"==typeof cleanup?cleanup():setRef(refs[i],null)}}}}var Slot=react.forwardRef(((props,forwardedRef)=>{const{children,...slotProps}=props,childrenArray=react.Children.toArray(children),slottable=childrenArray.find(isSlottable);if(slottable){const newElement=slottable.props.children,newChildren=childrenArray.map((child=>child===slottable?react.Children.count(newElement)>1?react.Children.only(null):react.isValidElement(newElement)?newElement.props.children:null:child));return(0,jsx_runtime.jsx)(SlotClone,{...slotProps,ref:forwardedRef,children:react.isValidElement(newElement)?react.cloneElement(newElement,void 0,newChildren):null})}return(0,jsx_runtime.jsx)(SlotClone,{...slotProps,ref:forwardedRef,children})}));Slot.displayName="Slot";var SlotClone=react.forwardRef(((props,forwardedRef)=>{const{children,...slotProps}=props;if(react.isValidElement(children)){const childrenRef=function getElementRef(element){let getter=Object.getOwnPropertyDescriptor(element.props,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning;if(mayWarn)return element.ref;if(getter=Object.getOwnPropertyDescriptor(element,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning,mayWarn)return element.props.ref;return element.props.ref||element.ref}(children);return react.cloneElement(children,{...mergeProps(slotProps,children.props),ref:forwardedRef?composeRefs(forwardedRef,childrenRef):childrenRef})}return react.Children.count(children)>1?react.Children.only(null):null}));SlotClone.displayName="SlotClone";var Slottable=({children})=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children});function isSlottable(child){return react.isValidElement(child)&&child.type===Slottable}function mergeProps(slotProps,childProps){const overrideProps={...childProps};for(const propName in childProps){const slotPropValue=slotProps[propName],childPropValue=childProps[propName];/^on[A-Z]/.test(propName)?slotPropValue&&childPropValue?overrideProps[propName]=(...args)=>{childPropValue(...args),slotPropValue(...args)}:slotPropValue&&(overrideProps[propName]=slotPropValue):"style"===propName?overrideProps[propName]={...slotPropValue,...childPropValue}:"className"===propName&&(overrideProps[propName]=[slotPropValue,childPropValue].filter(Boolean).join(" "))}return{...slotProps,...overrideProps}}var Primitive=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce(((primitive,node)=>{const Node=react.forwardRef(((props,forwardedRef)=>{const{asChild,...primitiveProps}=props,Comp=asChild?Slot:node;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,jsx_runtime.jsx)(Comp,{...primitiveProps,ref:forwardedRef})}));return Node.displayName=`Primitive.${node}`,{...primitive,[node]:Node}}),{});var[createAvatarContext,createAvatarScope]=function createContextScope(scopeName,createContextScopeDeps=[]){let defaultContexts=[];const createScope=()=>{const scopeContexts=defaultContexts.map((defaultContext=>react.createContext(defaultContext)));return function useScope(scope){const contexts=scope?.[scopeName]||scopeContexts;return react.useMemo((()=>({[`__scope${scopeName}`]:{...scope,[scopeName]:contexts}})),[scope,contexts])}};return createScope.scopeName=scopeName,[function createContext3(rootComponentName,defaultContext){const BaseContext=react.createContext(defaultContext),index=defaultContexts.length;defaultContexts=[...defaultContexts,defaultContext];const Provider=props=>{const{scope,children,...context}=props,Context=scope?.[scopeName]?.[index]||BaseContext,value=react.useMemo((()=>context),Object.values(context));return(0,jsx_runtime.jsx)(Context.Provider,{value,children})};return Provider.displayName=rootComponentName+"Provider",[Provider,function useContext2(consumerName,scope){const Context=scope?.[scopeName]?.[index]||BaseContext,context=react.useContext(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]},composeContextScopes(createScope,...createContextScopeDeps)]}("Avatar"),[AvatarProvider,useAvatarContext]=createAvatarContext("Avatar"),Avatar=react.forwardRef(((props,forwardedRef)=>{const{__scopeAvatar,...avatarProps}=props,[imageLoadingStatus,setImageLoadingStatus]=react.useState("idle");return(0,jsx_runtime.jsx)(AvatarProvider,{scope:__scopeAvatar,imageLoadingStatus,onImageLoadingStatusChange:setImageLoadingStatus,children:(0,jsx_runtime.jsx)(Primitive.span,{...avatarProps,ref:forwardedRef})})}));Avatar.displayName="Avatar";var AvatarImage=react.forwardRef(((props,forwardedRef)=>{const{__scopeAvatar,src,onLoadingStatusChange=()=>{},...imageProps}=props,context=useAvatarContext("AvatarImage",__scopeAvatar),imageLoadingStatus=function useImageLoadingStatus(src,referrerPolicy){const[loadingStatus,setLoadingStatus]=react.useState("idle");return useLayoutEffect2((()=>{if(!src)return void setLoadingStatus("error");let isMounted=!0;const image=new window.Image,updateStatus=status=>()=>{isMounted&&setLoadingStatus(status)};return setLoadingStatus("loading"),image.onload=updateStatus("loaded"),image.onerror=updateStatus("error"),image.src=src,referrerPolicy&&(image.referrerPolicy=referrerPolicy),()=>{isMounted=!1}}),[src,referrerPolicy]),loadingStatus}(src,imageProps.referrerPolicy),handleLoadingStatusChange=function useCallbackRef(callback){const callbackRef=react.useRef(callback);return react.useEffect((()=>{callbackRef.current=callback})),react.useMemo((()=>(...args)=>callbackRef.current?.(...args)),[])}((status=>{onLoadingStatusChange(status),context.onImageLoadingStatusChange(status)}));return useLayoutEffect2((()=>{"idle"!==imageLoadingStatus&&handleLoadingStatusChange(imageLoadingStatus)}),[imageLoadingStatus,handleLoadingStatusChange]),"loaded"===imageLoadingStatus?(0,jsx_runtime.jsx)(Primitive.img,{...imageProps,ref:forwardedRef,src}):null}));AvatarImage.displayName="AvatarImage";var AvatarFallback=react.forwardRef(((props,forwardedRef)=>{const{__scopeAvatar,delayMs,...fallbackProps}=props,context=useAvatarContext("AvatarFallback",__scopeAvatar),[canRender,setCanRender]=react.useState(void 0===delayMs);return react.useEffect((()=>{if(void 0!==delayMs){const timerId=window.setTimeout((()=>setCanRender(!0)),delayMs);return()=>window.clearTimeout(timerId)}}),[delayMs]),canRender&&"loaded"!==context.imageLoadingStatus?(0,jsx_runtime.jsx)(Primitive.span,{...fallbackProps,ref:forwardedRef}):null}));AvatarFallback.displayName="AvatarFallback";var react_avatar_dist_Root=Avatar,Image=AvatarImage,Fallback=AvatarFallback;(0,__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs").F)("avatar",{variants:{intent:{circle:["rounded-full"],square:["rounded-sm"]},size:{md:["text-base"]}},defaultVariants:{intent:"circle",size:"md"}});const Avatar_Avatar=({intent,size,content,...props})=>(0,jsx_runtime.jsxs)(react_avatar_dist_Root,{children:[(0,jsx_runtime.jsx)(Image,{}),(0,jsx_runtime.jsx)(Fallback,{})]}),components_Avatar_Avatar=Avatar_Avatar;Avatar_Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{intent:{required:!1,tsType:{name:"union",raw:'"circle" | "square"',elements:[{name:"literal",value:'"circle"'},{name:"literal",value:'"square"'}]},description:""},size:{required:!0,tsType:{name:"union",raw:'"3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"',elements:[{name:"literal",value:'"3xs"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'},{name:"literal",value:'"3xl"'}]},description:""},content:{required:!0,tsType:{name:"union",raw:'"image" | "letter" | "smile"',elements:[{name:"literal",value:'"image"'},{name:"literal",value:'"letter"'},{name:"literal",value:'"smile"'}]},description:""}}};const Avatar_stories={title:"Avatar",component:components_Avatar_Avatar,parameters:{layout:"centered"}},Circle={args:{intent:"circle",size:"md",content:"image"}},Square={args:{intent:"square",size:"md",content:"image"}},__namedExportsOrder=["Circle","Square"];Circle.parameters={...Circle.parameters,docs:{...Circle.parameters?.docs,source:{originalSource:'{\n  args: {\n    intent: "circle",\n    size: "md",\n    content: "image"\n  }\n}',...Circle.parameters?.docs?.source}}},Square.parameters={...Square.parameters,docs:{...Square.parameters?.docs,source:{originalSource:'{\n  args: {\n    intent: "square",\n    size: "md",\n    content: "image"\n  }\n}',...Square.parameters?.docs?.source}}}},"./node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{F:()=>cva});const falsyToString=value=>"boolean"==typeof value?`${value}`:0===value?"0":value,cx=clsx,cva=(base,config)=>props=>{var _config_compoundVariants;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(_config_compoundVariants=config.compoundVariants)||void 0===_config_compoundVariants?void 0:_config_compoundVariants.reduce(((acc,param)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}}}]);