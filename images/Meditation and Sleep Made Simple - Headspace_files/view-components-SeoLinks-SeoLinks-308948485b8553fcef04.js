"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[2779],{26841:function(t,e,i){i.r(e),i.d(e,{SEO_LINKS_TEST_ID_PREFIX:function(){return L},default:function(){return M}});var s=i(87462),a=i(23431),n=i(67990),o=i(67294),c=i(39271),r=i(80613),l=i(32272),d=i(90409),m=i(30949),p=i(40742);const g="seo-category",u=g+"-title",y=g+"-cta",h=(0,n.cssWithMq)({pointerEvents:"none"}),S=(0,n.cssWithMq)(d.xf,{"div:hover > &":{opacity:1},margin:0,marginBottom:[n.SpacingInRemBySize.L,n.SpacingInRemBySize.L,n.SpacingInRemBySize.XL],opacity:[1,1,.6],width:["100%","80%"]}),f=(0,n.cssWithMq)(d.Vm,{color:"inherit",fontWeight:[500,n.fontWeightBold],opacity:[.7,1,.6],pointerEvents:"auto",textDecoration:"none"}),v=(0,n.cssWithMq)({display:"flex",flex:"1",flexDirection:"column",listStyle:"none",margin:0,padding:0,pointerEvents:"auto"}),Z=(0,n.cssWithMq)(d.Jv,{"&:hover":{opacity:[.7,1]},color:"inherit",display:"inline-block",fontWeight:n.fontWeightBold,opacity:[.7,1,.6],padding:n.SpacingInRemBySize["2XS"]+" 0"});var B=(0,o.memo)((t=>{let{headline:e,items:i,ctaLink:c,className:r,customWidth:l,isActive:d}=t;const B=(0,o.useMemo)((()=>(0,n.cssWithMq)(h,{opacity:[d?1:.6,1],width:[null!=l?l:"70vw","auto"]})),[l,d]);return(0,a.tZ)("div",{className:r,css:B,"data-testid":g},e&&(0,a.tZ)("h3",{css:S,"data-testid":u},e),i&&(0,a.tZ)("ul",{css:v},i.map((t=>{let{id:e,cta:i,url:n,...o}=t;return(0,a.tZ)(p.Z,(0,s.Z)({key:e,dataTestIdPrefix:g,css:Z,ctaLabel:i},o,{isNewWindow:!1,to:n}),i)}))),c&&(0,a.tZ)(p.Z,{dataTestIdPrefix:y,css:f,to:c.url,ctaLabel:c.cta},(0,a.tZ)(m.Z,null,c.cta)))})),I=i(18994);const L="seo-links",W=(0,n.cssWithMq)({marginBottom:[n.SpacingInRemBySize["2XL"],n.SpacingInRemBySize["5XL"]],maxWidth:"100%",textAlign:"left"}),_=(0,a.iv)({alignItems:"flex-start",display:"flex",gap:n.SpacingInRemBySize.M,justifyContent:"space-between"},"","","",""),x=(0,n.cssWithMq)({columnGap:n.SpacingInRemBySize.XL,display:"grid",gridTemplateColumns:[(0,n.rem)(20),(0,n.rem)(12)+" "+(0,n.rem)(12),(0,n.rem)(17)+" "+(0,n.rem)(17)],rowGap:n.SpacingInRemBySize["2XL"]});var M=(0,o.memo)((t=>{let{categories:e,image:i,title:d,alignment:m}=t;const{key:p}=(0,l.O)(),g=(0,n.useActiveBreakpoint)(),u=(0,o.useMemo)((()=>g===n.Breakpoint.MOBILE),[g]),y=(0,o.useMemo)((()=>(0,n.cssWithMq)([_,{flexDirection:"left"===m?["row","row-reverse"]:["row"]}])),[m]);return(0,a.tZ)(r.Z,{dataTestIdPrefix:L,key:p},d&&(0,a.tZ)(c.Z,{css:W,dataTestIdPrefix:L},d),(0,a.tZ)("div",{css:y,"data-testid":L+"-categories"},!u&&i&&(0,a.tZ)(I.Z,{imageData:i,css:(0,a.iv)({borderRadius:n.borderRadiusM,maxWidth:(0,n.rem)(30)},"","","","")}),e&&(0,a.tZ)("div",{css:x},e.map((t=>(0,a.tZ)(B,(0,s.Z)({key:t.id,isActive:!0},t)))))))}))}}]);