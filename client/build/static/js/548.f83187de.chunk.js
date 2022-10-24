"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[548],{4548:function(e,r,s){s.r(r);var n=s(4165),a=s(5861),i=s(885),t=s(1413),o=s(2791),l=s(3978),d=s(7205),m=s(3793),c=s(550),u=s(1087),p=s(7689),x=s(5953),h=s(228),f=s(403),g=s(4565),Z=s(7020),j=s(7012),v=s(9195),y=s(2797),b=s(4695),w=s(4360),N=s(5700),k=s(6580),P=s(8501),S=s(7304),C=s(184);function q(e){return(0,C.jsxs)(g.Z,(0,t.Z)((0,t.Z)({variant:"body2",color:"text.secondary",align:"center",paddingTop:3,height:"3.7rem"},e),{},{children:["Copyright \xa9 ",(0,C.jsx)(u.rU,{to:"/",children:"Pet Taker"})," ",(new Date).getFullYear(),"."]}))}var F=y.Ry().shape({firstName:y.Z_().min(2).max(20).trim().lowercase().required(!0,"please provide your first name"),lastName:y.Z_().min(2).max(20).trim().lowercase().required(!0,"please provide your last name"),userName:y.Z_().min(2).max(20).trim().lowercase().required(!0,"please provide your user name"),email:y.Z_().email("Invalid email format").min(2).max(50).trim().lowercase().required(!0,"please provide your user name"),password:y.Z_().min(8).max(150).trim().lowercase().required(!0,"please provide your a password")});r.default=function(){var e,r,s,y,I,W=(0,o.useState)(!1),z=(0,i.Z)(W,2),T=z[0],_=z[1],D=(0,o.useState)(!1),U=(0,i.Z)(D,2),L=U[0],A=U[1],E=(0,o.useState)(),R=(0,i.Z)(E,2),Y=R[0],O=R[1],V=(0,o.useContext)(S.V),X=(0,p.s0)(),B=(0,v.cI)({resolver:(0,b.X)(F)}),G=B.register,H=B.handleSubmit,J=B.reset,K=B.formState.errors,M=(0,o.useState)(null),Q=(0,i.Z)(M,2),$=Q[0],ee=Q[1],re=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var s,a,i,o,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(!0),e.prev=1,s=(0,t.Z)((0,t.Z)({},r),{},{image:$}),console.log(s,"1"),(a=new FormData).append("firstName",s.firstName),a.append("lastName",s.lastName),a.append("userName",s.userName),a.append("email",s.email),a.append("password",s.password),a.append("image",s.image),console.log(a,"2"),e.next=14,fetch("https://pet-taker-production.up.railway.app/api/v1/signup",{method:"POST",body:a});case 14:return i=e.sent,e.next=17,i.json();case 17:if(o=e.sent,i.ok){e.next=20;break}throw new Error(o.message);case 20:l=o.data.user,console.log(l,"result"),_(!0),setTimeout((function(){return _(!1),X("/")}),2e3),A(!1),V.signup(l.image),V.login(l._id,o.token,l.userName),e.next=33;break;case 29:e.prev=29,e.t0=e.catch(1),A(!1),O(e.t0.message);case 33:J();case 34:case"end":return e.stop()}}),e,null,[[1,29]])})));return function(r){return e.apply(this,arguments)}}(),se=(0,w.Z)({typography:{fontFamily:"Poppins"},ThemeProvider:{backgroundColor:"#f4f4f4"}});return(0,C.jsxs)(C.Fragment,{children:[L&&(0,C.jsxs)(N.Z,{sx:{backgroundColor:"#000000be",color:"#ff4",zIndex:"1",display:"flex",flexDirection:"column",alignItems:"center"},open:!0,children:[(0,C.jsx)(k.Z,{color:"inherit"}),(0,C.jsx)(g.Z,{sx:{mt:"2rem",fontSize:"1.5rem"},children:"Loading"})]}),T&&(0,C.jsxs)(N.Z,{sx:{backgroundColor:"#000000be",color:"#00e676",zIndex:"1",display:"flex",flexDirection:"column",alignItems:"center"},open:!0,children:[(0,C.jsx)(P.Z,{sx:{fontSize:"5rem"}}),(0,C.jsx)(g.Z,{sx:{mt:"2rem",fontSize:"1.5rem"},children:"register went successfully"})]}),(0,C.jsx)(j.Z,{theme:se,children:(0,C.jsxs)(Z.Z,{component:"main",maxWidth:"xs",children:[(0,C.jsx)(m.ZP,{}),(0,C.jsxs)(h.Z,{sx:{paddingTop:5.1,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,C.jsx)(l.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,C.jsx)(f.Z,{})}),(0,C.jsx)(g.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,C.jsxs)(h.Z,{component:"form",autoComplete:"off",onSubmit:H(re),sx:{mt:3},children:[(0,C.jsxs)(x.ZP,{container:!0,spacing:2,children:[(0,C.jsxs)(x.ZP,{item:!0,xs:12,sm:6,children:[(0,C.jsx)(c.Z,(0,t.Z)({required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0},G("firstName"))),(0,C.jsx)(g.Z,{variant:"span",color:"crimson",children:null===(e=K.firstName)||void 0===e?void 0:e.message})]}),(0,C.jsxs)(x.ZP,{item:!0,xs:12,sm:6,children:[(0,C.jsx)(c.Z,(0,t.Z)({required:!0,fullWidth:!0,id:"lastName",label:"Last Name"},G("lastName"))),(0,C.jsx)(g.Z,{variant:"span",color:"crimson",children:null===(r=K.lastName)||void 0===r?void 0:r.message})]}),(0,C.jsxs)(x.ZP,{item:!0,xs:12,sm:6,children:[(0,C.jsx)(c.Z,(0,t.Z)({required:!0,fullWidth:!0,id:"userName",label:"User Name"},G("userName"))),(0,C.jsx)(g.Z,{variant:"span",color:"crimson",children:null===(s=K.userName)||void 0===s?void 0:s.message})]}),(0,C.jsxs)(x.ZP,{item:!0,xs:12,children:[(0,C.jsx)(c.Z,(0,t.Z)({required:!0,fullWidth:!0,id:"email",label:"Email Address"},G("email"))),(0,C.jsx)(g.Z,{variant:"span",color:"crimson",children:null===(y=K.email)||void 0===y?void 0:y.message})]}),(0,C.jsxs)(x.ZP,{item:!0,xs:12,children:[(0,C.jsx)(c.Z,(0,t.Z)({required:!0,fullWidth:!0,label:"Password",type:"password",id:"password"},G("password"))),(0,C.jsx)(g.Z,{variant:"span",color:"crimson",children:null===(I=K.password)||void 0===I?void 0:I.message})]}),(0,C.jsxs)(x.ZP,{item:!0,xs:12,sx:{display:"flex",justifyContent:"space-between"},children:[(0,C.jsxs)(d.Z,{variant:"contained",component:"label",sx:{mr:"9.2rem"},children:["Upload Image",(0,C.jsx)("input",{style:{display:"none"},accept:".jpg,.png,.jpeg",name:"image",id:"image",label:"image",type:"file",onChange:function(e){e.target.files&&0!==e.target.files?ee(e.target.files[0]):ee(void 0)}})]}),(0,C.jsx)(d.Z,{type:"button",color:"secondary",variant:"contained",component:"span",onClick:function(e){ee(null)},sx:{},children:"Remove"})]}),(0,C.jsx)(d.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{overflow:"hidden",fontSize:"16px",background:"linear-gradient(45deg, #30292F 40%, #3F4045 90%)",fontWeight:"700",":hover":{background:"linear-gradient(45deg, #3F4045  40%, #30292F  90%)"},marginY:"1rem",marginLeft:"1rem"},children:"Sign Up"})]}),Y&&(0,C.jsx)(g.Z,{variant:"span",sx:{color:"red",textAlign:"center",mb:"1rem"},children:Y}),(0,C.jsx)(x.ZP,{container:!0,justifyContent:"flex-end",children:(0,C.jsx)(x.ZP,{item:!0,children:(0,C.jsx)(u.rU,{to:"/login",children:(0,C.jsx)(g.Z,{sx:{color:"#3c52b2",mt:"1rem"},children:"Already have an account? Login"})})})})]})]}),(0,C.jsx)(q,{sx:{}})]})})]})}}}]);
//# sourceMappingURL=548.f83187de.chunk.js.map