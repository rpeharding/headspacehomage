"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[6029],{15117:function(t,e,i){var n=i(87462),a=i(23431),o=i(67294),s=i(67990),r=i(9298),l=i(90409),m=i(63801),c=i(71805),d=i(28624);const g="stories-modal",p=(0,a.iv)((0,s.horizontallySpace)(s.Size["2XS"]),{alignItems:"center",display:"flex",justifyContent:"center",paddingBottom:s.SpacingInRemBySize.S,paddingTop:s.SpacingInRemBySize.XS},"","","",""),S=(0,a.iv)({"> span":{verticalAlign:"sub"},background:s.Orange[200],color:s.White["000"],fontSize:(0,s.rem)(1.2),height:(0,s.rem)(2),lineHeight:0,padding:(0,s.rem)(.05),width:(0,s.rem)(2)},"","","",""),u=(0,a.iv)(l.s$,"","","",""),B=(0,s.cssWithMq)({".modalBackground":{backgroundColor:"transparent"},".modalCardContainer":{marginBottom:(0,s.rem)(1.25),marginTop:(0,s.rem)(1.25),maxHeight:"initial",maxWidth:(0,s.rem)(29.5),overflow:"visible",padding:[s.SpacingInRemBySize["5XL"]+" "+s.SpacingInRemBySize.XL+" "+s.SpacingInRemBySize.XL,s.SpacingInRemBySize["5XL"]+" "+s.SpacingInRemBySize["6XL"]],top:s.SpacingInRemBySize["5XL"],width:"calc(100% - "+(0,s.rem)(1.25)+")"},backgroundColor:s.WarmGrey[700],justifyContent:"flex-start",overflow:"scroll",position:"fixed",zIndex:d.Z.modal}),f=(0,a.iv)(l.K_,{marginBottom:s.SpacingInRemBySize.M,marginTop:0},"","","",""),y=(0,a.iv)(l.pD,{marginBottom:s.SpacingInRemBySize["3XL"]},"","","",""),C=(0,a.iv)({display:"flex",left:"50%",position:"absolute",top:"-"+(0,s.rem)(4.5),transform:"translateX(-50%)"},"","","",""),Z=(0,s.cssWithMq)({"& > section:first-of-type > *":{"& > label, & > input":{fontSize:s.fontSizeS,lineHeight:"1.1"},marginBottom:s.SpacingInRemBySize["3XL"]},"& > section:nth-of-type(2)":{textAlign:"center"}}),z=(0,o.memo)((t=>{let{form:e,modalButtonText:i}=t;const{0:l,1:d}=(0,o.useState)(!1),z=(0,o.useCallback)((()=>d(!l)),[l]);return(0,a.tZ)(o.Fragment,null,(0,a.tZ)("div",{css:p,"data-testid":g},(0,a.tZ)(s.Button,{dataTestIdPrefix:g,onClick:z,isCircular:!0,css:S},(0,a.tZ)(r.Plus,null)),(0,a.tZ)("span",{css:u},i)),l&&(0,a.tZ)(s.Portal,null,(0,a.tZ)(s.Modal,{css:B,backgroundClassName:"modalBackground",cardClassName:"modalCardContainer",dataTestIdPrefix:g,body:(0,a.tZ)(o.Fragment,null,(0,a.tZ)(s.CloseButton,{css:C,onClick:z,dataTestIdPrefix:g}),(0,a.tZ)("div",null,(0,a.tZ)("h4",{css:f},e.title),e.description&&(0,a.tZ)(c.Z,{css:y,markdownRemark:e.description}),(0,a.tZ)(m.ZP,(0,n.Z)({},e,{css:Z,onSubmit:()=>{}})))),showCloseButton:!1})))}));e.Z=z}}]);