"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[8978],{44345:function(e,t,i){var a=i(87462),o=i(23431),s=i(67294),n=i(67990),r=i(46898),m=i(70748),c=i(18994),l=i(80613),d=i(55461),p=i(95688),v=i(6411),g=i(32272),S=i(28624);const h={name:"1avrbag",styles:"padding:0;position:relative"},b={left:0,overflow:"auto",position:"absolute",right:0,top:"-"+n.SpacingInRemBySize.M,zIndex:S.Z.baseContentIndex},u=(0,n.cssWithMq)((0,n.horizontallySpace)([n.Size.XS,n.Size.M]),{padding:[(0,n.rem)(1.25)+" "+n.SpacingInRemBySize["2XL"],(0,n.rem)(1.25)]}),y={display:"flex",justifyContent:"center",margin:"auto",overflowY:"hidden",width:"max-content",zIndex:S.Z.baseContentIndex},M=(0,n.cssWithMq)({"& > div":{"& > button":{margin:"0 "+n.SpacingInRemBySize.XS+" "+n.SpacingInRemBySize.M,width:"calc(100% - "+n.SpacingInRemBySize.M+")"},width:"50%"},margin:n.SpacingInRemBySize.L+" "+n.SpacingInRemBySize.M+" 0"}),x={display:"flex",flexWrap:"wrap"},I=(0,o.iv)({".wrapper":{display:"flex",flexDirection:"column",position:"relative"},borderRadius:(0,n.rem)(.9),marginTop:n.SpacingInRemBySize.M,overflow:"visible",zIndex:"auto"},"","","",""),f=(0,n.cssWithMq)({height:[void 0,(0,n.rem)(25.25),(0,n.rem)(38.7)],position:[void 0,"absolute"],width:[void 0,(0,n.rem)(24.7),(0,n.rem)(40.6)]}),w=(0,n.cssWithMq)([f,{left:[void 0,(0,n.rem)(-18.7),(0,n.rem)(-39.25)],top:[void 0,(0,n.rem)(17.7),(0,n.rem)(10)]}]),Z=(0,n.cssWithMq)([f,{right:[void 0,(0,n.rem)(-16.4),(0,n.rem)(-39.8)],top:[void 0,(0,n.rem)(6.25),(0,n.rem)(3.75)]}]),k=(0,n.cssWithMq)({borderRadius:[(0,n.rem)(1),void 0,(0,n.rem)(2)],boxShadow:"0px 0px 10px rgba(0,0,0,0.1)",height:[(0,n.rem)(13.4),(0,n.rem)(20.8),(0,n.rem)(31.1)],position:"absolute",width:[(0,n.rem)(6),(0,n.rem)(10.7),(0,n.rem)(16)]}),C=(0,n.cssWithMq)(k,{right:0,top:["-"+(0,n.rem)(4.5),"100%"]}),R=(0,o.iv)(k,"left:0;top:100%;","","",""),z=(0,n.cssWithMq)({position:"absolute",width:[void 0,(0,n.rem)(62.5)]}),W=(0,n.cssWithMq)([z,{left:["50%","-150%","-31%"]}]),q=(0,n.cssWithMq)([z,{left:[void 0,"5%","-23%"],right:["22%",void 0]}]),B={name:"1s0soxz",styles:"display:flex;flex-direction:row;position:relative;width:100%;will-change:transform"},A=(0,s.memo)((e=>{let{tabs:t=[],background:i,isShowSideImagesOnDesktop:S,isShowSideImagesOnMobile:f,isScrollableNavigation:k=!0,backgroundColorHex:z,textColorHex:A,navVariant:L="orangeNav",subComponentVariant:_="orange"}=e;const{0:D,1:O}=(0,s.useState)(0),{key:H}=(0,g.O)(),N=(0,n.useActiveBreakpoint)(),E=(0,s.useMemo)((()=>N===n.Breakpoint.MOBILE),[N]),V=(0,s.useMemo)((()=>({...z&&{background:z},...A&&{color:A}})),[z,A]),X=(0,s.useMemo)((()=>!(E&&!k)&&(0,n.cssWithMq)({margin:[(0,n.rem)(-1.25)+" "+(0,n.rem)(-1.25)+" 0",(0,n.rem)(-1.25)+" 0 0"]})),[E,k]),T=(0,s.useMemo)((()=>({...!(E&&!k)&&b})),[E,k]),K=(0,s.useMemo)((()=>[{listStyle:"none"},E&&!k?M:u]),[E,k]),U=(0,s.useMemo)((()=>E&&!k?x:y),[E,k]),j=(0,s.useMemo)((()=>(e=>({active:{opacity:v.S.opacityActive,rotate:e?v.S.mobileRotate:v.S.rotateLeftActive},inactive:{opacity:v.S.opacityInactive,rotate:e?v.S.mobileRotate:v.S.rotateLeftInactive}}))(E)),[E]),P=(0,s.useMemo)((()=>(e=>({active:{opacity:v.S.opacityActive,rotate:e?v.S.mobileRotate:v.S.rotateRightActive},inactive:{opacity:v.S.opacityInactive,rotate:e?v.S.mobileRotate:v.S.rotateRightInactive}}))(E)),[E]),Y=(0,s.useMemo)((()=>(0,n.cssWithMq)({display:[f?"block":"none",S?"block":"none"]})),[S,f]),F=(0,s.useCallback)((e=>[(0,n.cssWithMq)(W,Y,{bottom:[e?(0,n.rem)(9):"-"+(0,n.rem)(5),(0,n.rem)(30),(0,n.rem)(43)]}),(0,n.cssWithMq)(q,Y,{bottom:[e?(0,n.rem)(16.5):(0,n.rem)(2.5),(0,n.rem)(30),(0,n.rem)(43)]})]),[Y]),G=(0,s.useMemo)((()=>!f&&E?{paddingBottom:"0"}:void 0),[f,E]);return(0,o.tZ)(l.Z,{key:H,css:h,dataTestIdPrefix:"tabs-switcher",style:G},(0,o.tZ)(m.Z,{imageData:i,css:I,style:V,contentContainerClassName:"wrapper",imageClassName:"responsive-image"},(0,o.tZ)("div",{css:X,style:T},(0,o.tZ)("ul",{css:K,style:U},t.map(((e,t)=>(0,o.tZ)("li",{key:e.id},(0,o.tZ)(d.Z,{tabIndex:t,onClick:O,activeTabIndex:D,text:e.tabLabel,backgroundColorHex:z,textColorHex:A,navVariant:L})))))),(0,o.tZ)(r.ww.div,{css:B,transition:v.X.transition,animate:{x:-100*D+"%"}},t.map(((e,t)=>(0,o.tZ)(p.Z,(0,a.Z)({isActive:t===D},e,{key:e.id,subComponentVariant:_})))))),(0,o.tZ)("div",{css:w},t.map(((e,t)=>e.leftImage&&(0,o.tZ)(r.ww.div,{animate:t===D?"active":"inactive",variants:j,css:F(!!e.image)[0],transition:v.S.transition,key:e.id+E},(0,o.tZ)(c.Z,{imageData:e.leftImage,css:C}))))),(0,o.tZ)("div",{css:Z},t.map(((e,t)=>e.rightImage&&(0,o.tZ)(r.ww.div,{animate:t===D?"active":"inactive",variants:P,css:F(!!e.image)[1],transition:v.S.transition,key:e.id+E},(0,o.tZ)(c.Z,{imageData:e.rightImage,css:R}))))))}));t.Z=A}}]);