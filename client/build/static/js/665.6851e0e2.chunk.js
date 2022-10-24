"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[665],{5665:function(e,n,r){r.r(n),r.d(n,{default:function(){return ne}});var o=r(4165),t=r(5861),a=r(885),i=r(1413),l=r(2791),c=r(3978),s=r(7205),d=r(3793),u=r(550),m=r(2900),p=r(4942),h=r(3366),f=r(7462),b=r(4419),x=r(2065),v=r(7278),Z=r(1245),g=r(184),y=(0,Z.Z)((0,g.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),k=(0,Z.Z)((0,g.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),j=(0,Z.Z)((0,g.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),w=r(9853),P=r(5513),C=r(277),S=r(1217);function F(e){return(0,S.Z)("MuiCheckbox",e)}var z=(0,r(5878).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),R=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],I=(0,C.ZP)(v.Z,{shouldForwardProp:function(e){return(0,C.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,r.indeterminate&&n.indeterminate,"default"!==r.color&&n["color".concat((0,w.Z)(r.color))]]}})((function(e){var n,r=e.theme,o=e.ownerState;return(0,f.Z)({color:(r.vars||r).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:r.vars?"rgba(".concat("default"===o.color?r.vars.palette.action.activeChannel:r.vars.palette.primary.mainChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,x.Fq)("default"===o.color?r.palette.action.active:r.palette[o.color].main,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&(n={},(0,p.Z)(n,"&.".concat(z.checked,", &.").concat(z.indeterminate),{color:(r.vars||r).palette[o.color].main}),(0,p.Z)(n,"&.".concat(z.disabled),{color:(r.vars||r).palette.action.disabled}),n))})),B=(0,g.jsx)(k,{}),L=(0,g.jsx)(y,{}),M=(0,g.jsx)(j,{}),N=l.forwardRef((function(e,n){var r,o,t=(0,P.Z)({props:e,name:"MuiCheckbox"}),a=t.checkedIcon,i=void 0===a?B:a,c=t.color,s=void 0===c?"primary":c,d=t.icon,u=void 0===d?L:d,m=t.indeterminate,p=void 0!==m&&m,x=t.indeterminateIcon,v=void 0===x?M:x,Z=t.inputProps,y=t.size,k=void 0===y?"medium":y,j=(0,h.Z)(t,R),C=p?v:u,S=p?v:i,z=(0,f.Z)({},t,{color:s,indeterminate:p,size:k}),N=function(e){var n=e.classes,r=e.indeterminate,o=e.color,t={root:["root",r&&"indeterminate","color".concat((0,w.Z)(o))]},a=(0,b.Z)(t,F,n);return(0,f.Z)({},n,a)}(z);return(0,g.jsx)(I,(0,f.Z)({type:"checkbox",inputProps:(0,f.Z)({"data-indeterminate":p},Z),icon:l.cloneElement(C,{fontSize:null!=(r=C.props.fontSize)?r:k}),checkedIcon:l.cloneElement(S,{fontSize:null!=(o=S.props.fontSize)?o:k}),ownerState:z,ref:n},j,{classes:N}))})),O=r(1087),T=r(7689),q=r(5953),D=r(228),E=r(403),H=r(4565),V=r(7020),W=r(7012),U=r(4360),A=r(5700),Y=r(6580),_=r(8501),J=r(9195),X=r(2797),G=r(4695),K=r(7304),Q=(0,U.Z)({typography:{fontFamily:"Poppins"}});function $(e){return(0,g.jsxs)(H.Z,(0,i.Z)((0,i.Z)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",(0,g.jsx)(O.rU,{to:"/",children:"Pet Taker"})," ",(new Date).getFullYear(),"."]}))}var ee=X.Ry().shape({email:X.Z_().email("Invalid email format").min(2).max(200).trim().lowercase().required(!0,"please provide your user name"),password:X.Z_().min(8).max(150).trim().lowercase().required(!0,"please provide your a password")});var ne=function(e){var n,r,p=(0,l.useState)(!1),h=(0,a.Z)(p,2),f=h[0],b=h[1],x=(0,l.useState)(!1),v=(0,a.Z)(x,2),Z=v[0],y=v[1],k=(0,l.useState)(),j=(0,a.Z)(k,2),w=j[0],P=j[1],C=(0,T.s0)(),S=(0,l.useContext)(K.V),F=(0,J.cI)({resolver:(0,G.X)(ee)}),z=F.register,R=F.handleSubmit,I=F.reset,B=F.formState.errors,L=function(){var e=(0,t.Z)((0,o.Z)().mark((function e(n){var r,t,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.prev=1,e.next=4,fetch("https://pet-taker-production.up.railway.app/api/v1/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:return r=e.sent,e.next=7,r.json();case 7:if(t=e.sent,r.ok){e.next=10;break}throw new Error(t.message);case 10:a=t.data.user,b(!0),setTimeout((function(){return b(!1),C("/")}),2e3),y(!1),S.signup(a.image),S.login(a._id,t.token,a.userName),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(1),P(e.t0.message),y(!1);case 22:I();case 23:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(n){return e.apply(this,arguments)}}();return(0,g.jsxs)(g.Fragment,{children:[Z&&(0,g.jsxs)(A.Z,{sx:{backgroundColor:"#000000be",color:"#ff4",zIndex:"1",display:"flex",flexDirection:"column",alignItems:"center"},open:!0,children:[(0,g.jsx)(Y.Z,{color:"inherit"}),(0,g.jsx)(H.Z,{sx:{mt:"2rem",fontSize:"1.5rem"},children:"Lodaing"})]}),f&&(0,g.jsxs)(A.Z,{sx:{backgroundColor:"#000000be",color:"#00e676",zIndex:"1",display:"flex",flexDirection:"column",alignItems:"center"},open:!0,children:[(0,g.jsx)(_.Z,{sx:{fontSize:"5rem"}}),(0,g.jsx)(H.Z,{sx:{mt:"2rem",fontSize:"1.5rem"},children:"loging in went successfully"})]}),(0,g.jsx)(W.Z,{theme:Q,children:(0,g.jsxs)(V.Z,{component:"main",maxWidth:"xs",children:[(0,g.jsx)(d.ZP,{}),(0,g.jsxs)(D.Z,{sx:{paddingTop:17.9,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,g.jsx)(c.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,g.jsx)(E.Z,{})}),(0,g.jsx)(H.Z,{component:"h1",variant:"h5",children:"Login"}),(0,g.jsxs)(D.Z,{component:"form",onSubmit:R(L),autoComplete:"off",noValidate:!0,sx:{mt:1},children:[(0,g.jsx)(u.Z,(0,i.Z)({margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0},z("email"))),(0,g.jsx)(H.Z,{variant:"span",color:"crimson",children:null===(n=B.email)||void 0===n?void 0:n.message}),(0,g.jsx)(u.Z,(0,i.Z)({margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"},z("password"))),(0,g.jsx)(H.Z,{variant:"span",color:"crimson",children:null===(r=B.password)||void 0===r?void 0:r.message}),(0,g.jsx)(m.Z,{control:(0,g.jsx)(N,{value:"remember",color:"primary"}),label:"Remember me"}),(0,g.jsx)(s.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{fontSize:"16px",background:"linear-gradient(45deg, #30292F 40%, #3F4045 90%)",fontWeight:"700",":hover":{background:"linear-gradient(45deg, #3F4045  40%, #30292F  90%)"},marginY:"1rem"},children:"Login"}),w&&(0,g.jsx)(H.Z,{variant:"h6",sx:{paddingY:"1rem",color:"red",textAlign:"center"},children:w}),(0,g.jsxs)(q.ZP,{container:!0,children:[(0,g.jsx)(q.ZP,{item:!0,xs:!0,children:(0,g.jsx)(O.rU,{href:"#",variant:"body2",children:(0,g.jsx)(H.Z,{sx:{color:"#3c52b2",fontSize:"smaller"},children:"Forgot password?"})})}),(0,g.jsx)(q.ZP,{item:!0,children:(0,g.jsx)(O.rU,{to:"/signup",variant:"body2",children:(0,g.jsx)(H.Z,{sx:{color:"#3c52b2",fontSize:"smaller"},children:"Don't have an account? Sign Up"})})})]})]})]}),(0,g.jsx)($,{sx:{mt:8,mb:4}})]})})]})}},2900:function(e,n,r){r.d(n,{Z:function(){return y}});var o=r(4942),t=r(3366),a=r(7462),i=r(2791),l=r(8182),c=r(4419),s=r(6155),d=r(4565),u=r(9853),m=r(277),p=r(5513),h=r(1217);function f(e){return(0,h.Z)("MuiFormControlLabel",e)}var b=(0,r(5878).Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),x=r(6854),v=r(184),Z=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],g=(0,m.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[(0,o.Z)({},"& .".concat(b.label),n.label),n.root,n["labelPlacement".concat((0,u.Z)(r.labelPlacement))]]}})((function(e){var n=e.theme,r=e.ownerState;return(0,a.Z)((0,o.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(b.disabled),{cursor:"default"}),"start"===r.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===r.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===r.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,o.Z)({},"& .".concat(b.label),(0,o.Z)({},"&.".concat(b.disabled),{color:(n.vars||n).palette.text.disabled})))})),y=i.forwardRef((function(e,n){var r=(0,p.Z)({props:e,name:"MuiFormControlLabel"}),o=r.className,m=r.componentsProps,h=void 0===m?{}:m,b=r.control,y=r.disabled,k=r.disableTypography,j=r.label,w=r.labelPlacement,P=void 0===w?"end":w,C=(0,t.Z)(r,Z),S=(0,s.Z)(),F=y;"undefined"===typeof F&&"undefined"!==typeof b.props.disabled&&(F=b.props.disabled),"undefined"===typeof F&&S&&(F=S.disabled);var z={disabled:F};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof b.props[e]&&"undefined"!==typeof r[e]&&(z[e]=r[e])}));var R=(0,x.Z)({props:r,muiFormControl:S,states:["error"]}),I=(0,a.Z)({},r,{disabled:F,labelPlacement:P,error:R.error}),B=function(e){var n=e.classes,r=e.disabled,o=e.labelPlacement,t=e.error,a={root:["root",r&&"disabled","labelPlacement".concat((0,u.Z)(o)),t&&"error"],label:["label",r&&"disabled"]};return(0,c.Z)(a,f,n)}(I),L=j;return null==L||L.type===d.Z||k||(L=(0,v.jsx)(d.Z,(0,a.Z)({component:"span",className:B.label},h.typography,{children:L}))),(0,v.jsxs)(g,(0,a.Z)({className:(0,l.Z)(B.root,o),ownerState:I,ref:n},C,{children:[i.cloneElement(b,z),L]}))}))},7278:function(e,n,r){r.d(n,{Z:function(){return g}});var o=r(885),t=r(3366),a=r(7462),i=r(2791),l=r(8182),c=r(4419),s=r(9853),d=r(277),u=r(4938),m=r(6155),p=r(753),h=r(1217);function f(e){return(0,h.Z)("PrivateSwitchBase",e)}(0,r(5878).Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var b=r(184),x=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],v=(0,d.ZP)(p.Z)((function(e){var n=e.ownerState;return(0,a.Z)({padding:9,borderRadius:"50%"},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})})),Z=(0,d.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),g=i.forwardRef((function(e,n){var r=e.autoFocus,i=e.checked,d=e.checkedIcon,p=e.className,h=e.defaultChecked,g=e.disabled,y=e.disableFocusRipple,k=void 0!==y&&y,j=e.edge,w=void 0!==j&&j,P=e.icon,C=e.id,S=e.inputProps,F=e.inputRef,z=e.name,R=e.onBlur,I=e.onChange,B=e.onFocus,L=e.readOnly,M=e.required,N=e.tabIndex,O=e.type,T=e.value,q=(0,t.Z)(e,x),D=(0,u.Z)({controlled:i,default:Boolean(h),name:"SwitchBase",state:"checked"}),E=(0,o.Z)(D,2),H=E[0],V=E[1],W=(0,m.Z)(),U=g;W&&"undefined"===typeof U&&(U=W.disabled);var A="checkbox"===O||"radio"===O,Y=(0,a.Z)({},e,{checked:H,disabled:U,disableFocusRipple:k,edge:w}),_=function(e){var n=e.classes,r=e.checked,o=e.disabled,t=e.edge,a={root:["root",r&&"checked",o&&"disabled",t&&"edge".concat((0,s.Z)(t))],input:["input"]};return(0,c.Z)(a,f,n)}(Y);return(0,b.jsxs)(v,(0,a.Z)({component:"span",className:(0,l.Z)(_.root,p),centerRipple:!0,focusRipple:!k,disabled:U,tabIndex:null,role:void 0,onFocus:function(e){B&&B(e),W&&W.onFocus&&W.onFocus(e)},onBlur:function(e){R&&R(e),W&&W.onBlur&&W.onBlur(e)},ownerState:Y,ref:n},q,{children:[(0,b.jsx)(Z,(0,a.Z)({autoFocus:r,checked:i,defaultChecked:h,className:_.input,disabled:U,id:A&&C,name:z,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var n=e.target.checked;V(n),I&&I(e,n)}},readOnly:L,ref:F,required:M,ownerState:Y,tabIndex:N,type:O},"checkbox"===O&&void 0===T?{}:{value:T},S)),H?d:P]}))}))}}]);
//# sourceMappingURL=665.6851e0e2.chunk.js.map