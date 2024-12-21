"use strict";(self.webpackChunkthicc_ui=self.webpackChunkthicc_ui||[]).push([[459],{"./src/components/Tooltip/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,Normal:()=>Normal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tooltip_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-tooltip/dist/index.mjs");const TooltipComponent=({text,position,intent,trigger})=>(null==intent&&(intent="normal"),null==position&&(position="top"),(0,jsx_runtime.jsx)(dist.Kq,{delayDuration:0,children:(0,jsx_runtime.jsxs)(dist.bL,{children:[(0,jsx_runtime.jsx)(dist.l9,{className:"w-full",asChild:!0,children:trigger}),(0,jsx_runtime.jsx)(dist.ZL,{children:(0,jsx_runtime.jsxs)(dist.UC,{side:position,className:"max-w-xl rounded-lg border-2 bg-base-100 p-2 "+("normal"==intent?"border-[#22242a]":"border-red-500"),children:[text,"normal"==intent?(0,jsx_runtime.jsx)(dist.i3,{className:"fill-[#22242a]"}):(0,jsx_runtime.jsx)(dist.i3,{className:"fill-red-500"})]})})]})})),Tooltip=TooltipComponent;TooltipComponent.__docgenInfo={description:"",methods:[],displayName:"TooltipComponent",props:{intent:{required:!1,tsType:{name:"union",raw:'"normal" | "danger"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"danger"'}]},description:""},position:{required:!1,tsType:{name:"union",raw:'"left" | "right" | "top" | "bottom"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}]},description:""},text:{required:!0,tsType:{name:"string"},description:""},trigger:{required:!0,tsType:{name:"any"},description:""}}};const Tooltip_stories={title:"Tooltip",component:Tooltip,parameters:{layout:"centered"}},Normal={args:{trigger:(0,jsx_runtime.jsx)("p",{children:"Hover Over Me"}),text:"This is a tooltip",intent:"normal"}},Danger={args:{trigger:(0,jsx_runtime.jsx)("p",{children:"Hover Over Me"}),text:"This is a tooltip",intent:"danger"}},__namedExportsOrder=["Normal","Danger"];Normal.parameters={...Normal.parameters,docs:{...Normal.parameters?.docs,source:{originalSource:'{\n  args: {\n    trigger: <p>Hover Over Me</p>,\n    text: "This is a tooltip",\n    intent: "normal"\n  }\n}',...Normal.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:'{\n  args: {\n    trigger: <p>Hover Over Me</p>,\n    text: "This is a tooltip",\n    intent: "danger"\n  }\n}',...Danger.parameters?.docs?.source}}}}}]);