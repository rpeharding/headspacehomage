"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[2891],{4216:function(t,i,e){e.r(i),e.d(i,{TEST_ID_PREFIX:function(){return h}});var a=e(87462),n=e(23431),s=e(67294),o=e(67990),c=e(44345),r=e(80613),m=e(39271),d=e(45591),l=e(90409),S=e(71805),u=e(10543);const g=(0,n.iv)((0,o.verticallySpace)([o.Size.M,o.Size.L]),"display:flex;flex-direction:column;","","",""),p=(0,o.cssWithMq)({marginBottom:[o.SpacingInRemBySize.L,o.SpacingInRemBySize.XL],maxWidth:["100%",(0,o.rem)(27),(0,o.rem)(33.5)]}),v=(0,o.cssWithMq)(l.EW,{marginBottom:(0,o.rem)(5.5),maxWidth:[void 0,(0,o.rem)(37.5),(0,o.rem)(51)],textAlign:"center"}),b={name:"1infa4c",styles:"margin-left:auto;margin-right:auto"},h="section-with-tabs",I=(0,s.memo)((t=>{let{button:i,tabs:e,title:l,description:I,video:y,background:f,isShowSideImagesOnMobile:Z=!0,isShowSideImagesOnDesktop:R=!0,...x}=t;const B=(0,s.useMemo)((()=>(0,o.cssWithMq)(g,Z?{marginBottom:[o.SpacingInRemBySize["7XL"],0]}:{})),[Z]);return(0,n.tZ)(r.Z,{css:B,dataTestIdPrefix:h},l&&(0,n.tZ)(m.Z,{css:[p,b,"",""],dataTestIdPrefix:h},l),I&&(0,n.tZ)(S.Z,{css:[v,b,"",""],dataTestIdPrefix:h,markdownRemark:I}),y&&(0,n.tZ)(d.Z,{css:b,video:y,isShowCompact:!0,dataTestIdPrefix:h,actionSubject:h}),(null==i?void 0:i.cta)&&(null==i?void 0:i.url)&&(0,n.tZ)(u.Z,{variant:i.variant,to:i.url,isElevated:!0,css:b,dataTestIdPrefix:h,overrideDynamicUrl:i.overrideDynamicUrl},i.cta),e&&(0,n.tZ)(c.Z,(0,a.Z)({isShowSideImagesOnDesktop:R,isShowSideImagesOnMobile:Z,tabs:e,background:f},x)))}));i.default=I},95688:function(t,i,e){var a=e(87462),n=e(23431),s=e(67294),o=e(67990),c=e(46898),r=e(45591),m=e(86720),d=e(71805),l=e(6411),S=e(18994);const u="tab-content",g=(0,o.cssWithMq)((0,o.verticallySpace)(o.Size.XL),{flex:"0 0 100%",maxWidth:["100%",(0,o.rem)(53),(0,o.rem)(72.5)],minHeight:["100%",(0,o.rem)(32),(0,o.rem)(39)],opacity:0,padding:[o.SpacingInRemBySize["4XL"]+" "+(0,o.rem)(1.25),o.SpacingInRemBySize["5XL"]+" "+(0,o.rem)(8.5)+" "+o.SpacingInRemBySize["6XL"],o.SpacingInRemBySize["6XL"]+" "+(0,o.rem)(18.5)+" "+o.SpacingInRemBySize["5XL"]],position:"relative",width:"100%"}),p=(0,o.cssWithMq)([{marginBottom:[o.SpacingInRemBySize["2XL"],o.SpacingInRemBySize["2XL"],o.SpacingInRemBySize["5XL"]],marginLeft:"auto",marginRight:"auto",maxWidth:["100%",(0,o.rem)(25.5)],textAlign:"center"}]),v=(0,o.cssWithMq)({"& > div":{position:"absolute",top:"0"},height:0,paddingTop:"56%",width:"100%"}),b=(0,o.cssWithMq)({maxHeight:[(0,o.rem)(20),(0,o.rem)(30)]}),h=(0,o.cssWithMq)({margin:"auto",width:[(0,o.rem)(12.875),(0,o.rem)(20.75)]}),I=(0,s.memo)((t=>{let{className:i,descriptionClassName:e,description:s,video:o,audio:I,isActive:y,image:f,subComponentVariant:Z}=t;return(0,n.tZ)(c.ww.div,{"data-testid":u,css:g,className:i,transition:l.X.transition,animate:{opacity:y?1:0},tabIndex:y?0:-1,"aria-hidden":!y},s&&(0,n.tZ)(d.Z,{dataTestIdPrefix:"tab",css:p,markdownRemark:s,className:e}),I&&(0,n.tZ)(m.Z,(0,a.Z)({variant:Z+"Dark",actionSubject:"tab-content",isVisible:y},I)),o&&(0,n.tZ)(r.Z,{css:v,video:o,buttonClassName:"button-size",variant:Z,actionSubject:u,isDisabled:!y}),(0,n.tZ)("div",{css:b},f&&(0,n.tZ)(S.Z,{imageData:f,css:h})))}));i.Z=I},6411:function(t,i,e){e.d(i,{S:function(){return n},X:function(){return a}});const a={transition:{opacity:{duration:1},x:{damping:100,duration:1,stiffness:800,type:"spring"}}},n={mobileRotate:45,opacityActive:[0,0,1,1],opacityInactive:[1,1,0,0],rotateLeftActive:[30,30,30,30,22,15],rotateLeftInactive:[15,22,30,30,30,30],rotateRightActive:[330,330,330,330,337,345],rotateRightInactive:[345,337,330,330,330,330],transition:{duration:.8,easing:"linear"}}},55461:function(t,i,e){var a=e(23431),n=e(67294),s=e(67990),o=e(90409),c=e(82723),r=e(25138);const m=(0,s.cssWithMq)([o.s$,{"&, &:focus, &:not([disabled]):hover, &&:not([disabled]):active":{borderRadius:s.borderRadiusS,color:s.WarmGrey[800]},border:0,display:"inline-block",height:"auto",minWidth:["auto",(0,s.rem)(6)],overflow:"visible",padding:[s.SpacingInRemBySize.XS,s.SpacingInRemBySize.XS+" "+s.SpacingInRemBySize.S,s.SpacingInRemBySize.XS+" "+s.SpacingInRemBySize.S]}]),d=(0,n.memo)((t=>{let{text:i,onClick:e,activeTabIndex:s,tabIndex:o,navVariant:d}=t;const l=(0,n.useMemo)((()=>s===o),[s,o]),S=(0,n.useMemo)((()=>({...r.D_,actionSubject:"tab_button_click",details:{...r.D_.details,cta_label:i}})),[i]),u=(0,n.useCallback)((()=>e(o)),[o,e]);return(0,a.tZ)(c.Z,{css:m,analyticsData:S,dataTestIdPrefix:l?"active-tab":"tab",className:l?"active":"",variant:d,circleDiameter:2.8,clickHandler:u},i)}));i.Z=d}}]);