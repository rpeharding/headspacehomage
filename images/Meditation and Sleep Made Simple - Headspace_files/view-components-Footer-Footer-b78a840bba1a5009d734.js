"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[2761],{8683:function(e,t,i){i.r(t),i.d(t,{default:function(){return O}});var a=i(15785),n=i(23431),s=i(67294),o=i(67990),l=i(28624),c=i(28045),r=i(45018),d=i(90409);const m=(0,o.cssWithMq)([d.K_,{alignItems:"flex-end",display:"flex",margin:"0 0 "+o.SpacingInRemBySize.L+" 0",minHeight:(0,o.rem)(4)}]);var p=(0,s.memo)((e=>{let{children:t,className:i,dataTestIdPrefix:a}=e;const l=(0,s.useMemo)((()=>(0,o.joinDataTestIdPrefixes)(a,"title")),[a]);return(0,n.tZ)("h4",{css:m,className:i,"data-testid":l},t)}));const h="footer-app-category",f=(0,o.cssWithMq)({alignItems:["center","flex-start"],display:"flex",flexDirection:"column",textAlign:["center","left"],width:["100%","max-content"]}),S=(0,o.cssWithMq)(d.K_,{justifyContent:["center","flex-start"]}),u=(0,o.cssWithMq)({"@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)":{minWidth:"auto"},minWidth:[(0,o.rem)(12.5),"100%","max-content"],paddingLeft:o.SpacingInRemBySize.XL,paddingRight:o.SpacingInRemBySize.XL,textAlign:"center"});var g=(0,s.memo)((e=>{let{className:t,appLink:i}=e;return(0,n.tZ)("div",{className:t,css:f,"data-testid":h},(0,n.tZ)(p,{css:S,dataTestIdPrefix:h},i.headline),(0,n.tZ)(r.Z,{css:u,authorizedCta:i.authorizedCta,authorizedUrl:i.authorizedUrl,cta:i.cta,isElevated:!0,isNewWindow:i.isNewWindow,variant:i.variant,url:i.url}))})),x=i(53980),y=i(48239);const L="footer-category",z=(0,o.cssWithMq)({width:["100%","min-content","max-content"]}),I=(0,o.cssWithMq)([(0,o.gridSpace)(o.Size.XS),{alignItems:"flex-start",display:"flex",flexDirection:["row","column"],listStyle:"none",padding:0}]),Z=(0,o.cssWithMq)({fontSize:0,maxWidth:[(0,o.rem)(10.25),"initial"],width:"100%"});var w=(0,s.memo)((e=>{let{className:t,headline:i="",items:a}=e;return(0,n.tZ)("section",{css:z,className:t,"data-testid":L},(0,n.tZ)(p,{dataTestIdPrefix:L},i),a&&(0,n.tZ)("ul",{css:I},a.map((e=>(0,n.tZ)("li",{key:e.id,css:Z},(0,n.tZ)(y.Z,{dataTestIdPrefix:L,link:e}))))))})),v=i(67640),W=i(9298);const M={behavior:"smooth",block:"start",inline:"nearest"},B=()=>{"undefined"!=typeof window&&window.document.body.scrollIntoView(M)},X={componentName:"TopScrollButton"},R=(0,n.iv)({fontSize:o.fontSize3XL,padding:"calc(("+o.DEFAULT_BUTTON_HEIGHT_NOT_INCLUDING_BORDER+" - "+(0,o.em)(1)+") / 2)"},"","","","");var b=(0,s.memo)((e=>{let{className:t,dataTestIdPrefix:i,variant:a,ariaLabel:s}=e;const l=(0,o.useUpdateOrCreateAnalyticCallback)(B,{action:o.AnalyticsInteraction.CLICKED,actionSubject:X.componentName});return(0,n.tZ)(o.Button,{analyticsContext:X,css:R,className:t,dataTestIdPrefix:(0,o.joinDataTestIdPrefixes)(i,"top-scroll"),isCircular:!0,isElevated:!1,onClick:l,variant:null!=a?a:"transparent",ariaLabel:s},(0,n.tZ)(W.CaretUp,{"aria-hidden":!0}))}));const C="footer",N=(0,o.cssWithMq)({"&:after":{background:o.WarmGrey[100],borderRadius:o.borderRadiusCircle,content:'""',height:(0,o.rem)(19),left:"50%",position:"absolute",top:0,transform:["scale(5) translateX(-20%) translateY(40%)","scale(5) translateX(-6%) translateY(40%)","scale(5) translateX(-14%) translateY(40%)"],width:(0,o.rem)(45),zIndex:l.Z.noIndex},overflow:"hidden",position:"relative"}),_=(0,o.cssWithMq)({display:"flex",flexDirection:["column","row"],margin:"0 auto",maxWidth:["100%",void 0,(0,o.rem)(85)],padding:[o.SpacingInRemBySize["5XL"]+" "+(0,o.rem)(1.25)+" "+o.SpacingInRemBySize.L,o.SpacingInRemBySize["5XL"]+" "+o.SpacingInRemBySize.XL+" "+o.SpacingInRemBySize.XL,(0,o.rem)(6.25)+" 0 "+o.SpacingInRemBySize["2XL"]],position:"relative",width:"100%"}),k=(0,o.cssWithMq)({display:["block","none"]}),q=(0,o.cssWithMq)({alignSelf:["auto","flex-end"],display:"flex",justifyContent:"space-between",marginTop:[o.SpacingInRemBySize["5XL"],0]}),D=(0,o.cssWithMq)({display:["flex","none"]}),T=(0,o.cssWithMq)({marginRight:"-"+o.SpacingInRemBySize.S}),A=(0,o.cssWithMq)([(0,o.horizontallySpace)([o.Size.XL,o.Size.M,o.Size.XL]),{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"0 auto",maxWidth:["100%",(0,o.rem)(47),(0,o.rem)(70.5)],paddingRight:[0,0,o.SpacingInRemBySize.XL],width:"100%"}]),E=(0,o.cssWithMq)([(0,o.horizontallySpace)([o.Size.XL,o.Size.M,o.Size.XL]),{display:["none","flex"],flexBasis:["auto","auto","55%"],flexDirection:"row",justifyContent:["flex-start","flex-start","space-between"]}]),P=(0,o.cssWithMq)([(0,o.horizontallySpace)(["0",o.Size.M,o.Size.XL]),(0,o.verticallySpace)([o.Size.XL,"0"]),{display:"flex",flexDirection:["column","row"],width:["100%","auto"]}]),U=(0,o.cssWithMq)({width:["100%","max-content"]});var O=(0,s.memo)((e=>{let{className:t,appLink:i,categories:r,downloadAppLinks:d,legalLinks:m,socialLinks:p,copyright:h,backgroundSecondaryColorHex:f,isExperimentControlView:S,topScrollButtonAriaLabel:u}=e;const y=(0,s.useMemo)((()=>m?[].concat((0,a.Z)(null!=r?r:[]),[m]):r),[m,r]),L=(0,s.useMemo)((()=>(0,o.cssWithMq)([S&&{marginTop:[o.SpacingInRemBySize["2XL"],o.SpacingInRemBySize["3XL"],o.SpacingInRemBySize["6XL"]]},N,f?{"&:before":{background:f,content:'""',height:"100%",left:0,position:"absolute",top:0,width:"100%",zIndex:l.Z.noIndex}}:null])),[f,S]);return(0,n.tZ)("div",{css:L},(0,n.tZ)("footer",{css:_,className:t,"data-testid":C},(0,n.tZ)("div",{css:A},(0,n.tZ)("div",{css:E},null==r?void 0:r.map((e=>(0,n.tZ)(w,{key:e.id,headline:e.headline,items:e.items})))),(0,n.tZ)("div",{css:P},i&&(0,n.tZ)(g,{appLink:i}),y&&(0,n.tZ)(c.Z,{css:k,categories:y}),d&&(0,n.tZ)(w,{css:U,headline:d.headline,items:d.items}))),(0,n.tZ)("div",{css:q},(0,n.tZ)(v.Z,{css:D}),(0,n.tZ)(b,{dataTestIdPrefix:C,css:T,ariaLabel:u}))),(0,n.tZ)(x.default,{legalLinks:null==m?void 0:m.items,socialLinks:p,copyright:h}))}))}}]);