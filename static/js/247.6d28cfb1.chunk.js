"use strict";(self.webpackChunktest_task_tweet_cards=self.webpackChunktest_task_tweet_cards||[]).push([[247],{7761:function(n,e,t){t.r(e),t.d(e,{Tweets:function(){return pn},default:function(){return cn}});var r=t(2791),o=t(7689),i=t(3433),a=t(5861),l=t(9439),s=t(4687),p=t.n(s),c=t(7596),u=(t(5462),{position:"top-center",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),d=t(1243);function x(n){return f.apply(this,arguments)}function f(){return(f=(0,a.Z)(p().mark((function n(e){var t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.Z.get("/users",{params:{page:e,limit:3}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}d.Z.defaults.baseURL="https://6446ab580431e885f018cc7c.mockapi.io";var g,b,h,w,A,v,m,Z,k,j,y,z,L,X,H,F,P,S,J=t.p+"static/media/bg_img.b186e544641a66e17d83.png",Y=t(168),C=t(3237),E=C.Z.div(g||(g=(0,Y.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 380px;\n  height: 460px;\n\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  border-radius: 20px;\n"]))),V=C.Z.img(b||(b=(0,Y.Z)(["\n  width: 76px;\n  height: 22px;\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  // background: rgba(255, 255, 255, 0.3);\n"]))),I=C.Z.img(h||(h=(0,Y.Z)(["\n  width: 308px;\n  height: 168px;\n  position: absolute;\n  top: 28px;\n  left: 36px;\n"]))),O=C.Z.div(w||(w=(0,Y.Z)(["\n  position: absolute;\n  top: 214px;\n  height: 8px;\n  width: 380px;\n  background: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;\n"]))),M=C.Z.div(A||(A=(0,Y.Z)(["\n  position: absolute;\n  width: 80px;\n  height: 80px;\n  left: 150px;\n  top: 178px;\n\n  background: #ebd8ff;\n  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),\n    inset 0px -2.19582px 4.39163px #ae7be3,\n    inset 0px 4.39163px 3.29372px #fbf8ff;\n  border-radius: 50px;\n"]))),U=C.Z.img(v||(v=(0,Y.Z)(["\n  position: absolute;\n  width: 62px;\n  height: 62px;\n  left: 9.48px;\n  top: 9.42px;\n  background: #5736a3;\n  border-radius: 50px;\n  background-image: url(",");\n"])),"data:image/png;base64,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"),Q=C.Z.p(m||(m=(0,Y.Z)(["\n  position: absolute;\n  width: 208px;\n  height: 24px;\n\n  top: 284px;\n  margin: 0 0 16px 0;\n\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  text-transform: uppercase;\n  text-align: center;\n\n  color: #ebd8ff;\n"]))),G=C.Z.p(Z||(Z=(0,Y.Z)(["\n  position: absolute;\n  width: 208px;\n  height: 24px;\n\n  top: 324px;\n  margin: 0 0 26px 0;\n\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  text-transform: uppercase;\n  text-align: center;\n\n  color: #ebd8ff;\n"]))),T=C.Z.button(k||(k=(0,Y.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 14px 28px;\n  gap: 6px;\n  margin: 0 0 26px 0;\n\n  position: absolute;\n  width: 196px;\n  height: 50px;\n  left: 92px;\n  top: 374px;\n\n  // background: #EBD8FF;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n\n  text-transform: uppercase;\n  cursor: pointer;\n\n  color: #373737;\n"]))),B=t(184),D=function(n){var e=n.userCard,t=n.isFollower,o=n.followersList,i=e.user,a=e.avatar,s=e.tweets,p=e.followers,c=function(n){var e=(0,r.useState)(n),t=(0,l.Z)(e,2),o=t[0],i=t[1];return{isFollowing:o,toggle:function(){return i((function(n){return!n}))},btnLabel:function(){return o?"Following":"Follow"},getBgColor:function(){return o?"#5CD3A8":"#EBD8FF"},counterFollowers:function(n){return o?(n+1).toLocaleString("en-US"):n.toLocaleString("en-US")}}}(o.some((function(n){return n.id===e.id}))),u=c.btnLabel,d=c.getBgColor,x=c.toggle,f=c.counterFollowers;return(0,B.jsxs)(E,{children:[(0,B.jsx)(V,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKDSURBVHgB1VgxTxtRDPZVzZBIZYBKzdAMdGBIh2bokqVDu/Yvw8DCwhAGGDLAEAaQyMKQDDkp+LvzQ87TO54TIDGfZOXdxWfe+87+7FAsl8v/tHvM2E6LoiibHHifA/74TjvGJ/KBDtuAPgC8EAZ0OYuOyDk8EQYcMWnfyDG8EQYMmLQ2OYVHwlpsQybtMzmEdVPoXtdsU7Y5GzIAQo2udZDwf2S7Ff+F+PfI3uVCEzinzXDHdiXrQzHgjOr9NwH7HL7wvYkw/IEzbvkzdQ9rkDERodZiPWbfcRSj8mffsWzIUnJVE0jEsqAM++UYC3V/Hp1jBexLOeRKcoUslAnbXqQxe2p9qw8o/p1wLXHwlkuyAU2gR28H7P1A7DlZwj1e7ucC5DJsqsgCSX+o1hhco0Rx8K7y12T94I++rCuiOFb1huVZ6wjRZ/8Hehv8VusTtlJe6NAaIJdhE7WGpoAskDKiWqdmsgZxjxG5ffVsPJhOyY6qCZBdb98VuU1ogQxliKxbObDomNaKTiJWuyGuBQVJZu8auQxLHbKNNE60fa1lyL5Yp1LkW4A4ue62NeQI0yPDBdWbRmn9Zfsa+bZEOCHuyLZL9d1cng9Y50f05UudbdvIleQhkzAJYs3XxyKSCyElBkoT2QDSMHJgHmrpA4u+dckGjCgTcoRchoWp+7mEcHhNluhX0Cy051+hXOGXIGtINj2633AGe1dYOg/I+IdMo3qCLuU5lB9mpPjwuAfibqjWMsr4p4ASHtHm2Jf/nwFfGnwwrpS0ZjNZp1X3xCwAyT9pM1Qi31DyVnQo3ak1rLKwAo8/vkeeRD6GN8Ig8nfkGJ4IcynyMbwQ9lqR3xqeAP79BzwxZzuPAAAAAElFTkSuQmCC",alt:"Logo"}),(0,B.jsx)(I,{src:J,alt:"Background"}),(0,B.jsx)(O,{}),(0,B.jsx)(M,{children:(0,B.jsx)(U,{src:a,alt:i})}),(0,B.jsxs)(Q,{children:[s.toLocaleString("en-US")," tweets"]}),(0,B.jsxs)(G,{children:[f(p)," followers"]}),(0,B.jsx)(T,{type:"button",onClick:function(){t(e),x()},style:{background:d()},children:u()})]})},K=C.Z.button(j||(j=(0,Y.Z)(["\n  margin: 0 auto;\n  width: 120px;\n  height: 30px;\n  padding: auto;\n  border-radius: 25px;\n  background-color: #EBD8FF;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #373737;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  :hover,\n  :focus {\n    background-color: #5CD3A8;\n  }\n"]))),R=function(n){var e=n.loadMore;return(0,B.jsx)(K,{type:"button",onClick:e,children:"Load More"})},N=t(8402),q=function(){return(0,B.jsx)("div",{style:{textAlign:"center"},children:(0,B.jsx)(N.Yt,{visible:!0,height:"80",width:"80",ariaLabel:"MagnifyingGlass-loading",wrapperStyle:{},wrapperClass:"MagnifyingGlass-wrapper",glassColor:"#c0efff",color:"#e15b64"})})},W=[{value:"show all",label:"Show all"},{value:"follow",label:"Follow"},{value:"following",label:"Following"}],_=t(7691),$=_.ZP.select(y||(y=(0,Y.Z)(["\nappearance: none;\n-moz-appearance: none;\n-webkit-appearance: none;\ncursor: pointer;\noutline: none;\npadding: 6px 30px 6px 15px;\n\nfont-family: inherit;\nfont-size: 18px;\nfont-weight: 600;\ncolor: black;\nbackground-color: #5CD3A8;\nborder-radius: 6px;\nborder-color: transparent;\n\n"]))),nn=function(n){var e=n.filter,t=n.onFilterChange;return(0,B.jsx)("div",{children:(0,B.jsx)($,{value:e,onChange:function(n){t(n.target.value)},children:W.map((function(n){return(0,B.jsx)("option",{value:n.value,children:n.label},n.value)}))})})},en=_.ZP.ul(z||(z=(0,Y.Z)(["\nlist-style: none;\npadding: 0;\ndisplay: flex;\ngap: 30px;\nflex-wrap: wrap;\njustify-content: center;\nmargin-left: -8px;\nmargin-right: -8px;\nmargin-bottom: 20 px;\nmargin-top: 0;\n"]))),tn=_.ZP.div(L||(L=(0,Y.Z)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-gap: 16px;\n    padding-bottom: 24px;\n    \n  "]))),rn=_.ZP.div(X||(X=(0,Y.Z)(["\nwidth: 100px;\nmargin-left: auto;\nmargin-right: auto;\nmargin-bottom: 20px;\n    \n  }\n"]))),on=function(){var n=(0,r.useState)([]),e=(0,l.Z)(n,2),t=e[0],o=e[1],s=(0,r.useState)(!0),d=(0,l.Z)(s,2),f=d[0],g=d[1],b=(0,r.useState)(0),h=(0,l.Z)(b,2),w=h[0],A=h[1],v=(0,r.useState)(!1),m=(0,l.Z)(v,2),Z=m[0],k=m[1],j=function(n,e){var t=(0,r.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem(n)))&&void 0!==t?t:e})),o=(0,l.Z)(t,2),i=o[0],a=o[1];return(0,r.useEffect)((function(){window.localStorage.setItem(n,JSON.stringify(i))}),[n,i]),[i,a]}("Followers",[]),y=(0,l.Z)(j,2),z=y[0],L=y[1],X=(0,r.useState)("all"),H=(0,l.Z)(X,2),F=H[0],P=H[1];(0,r.useEffect)((function(){if(0===w)return A(w+1);var n=function(){var n=(0,a.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return k(!0),n.prev=1,n.next=4,x(w);case 4:if(0!==(e=n.sent).length){n.next=8;break}return t="All users have been loaded!",c.Am.info(t,u),n.abrupt("return",g(!1));case 8:o((function(n){return[].concat((0,i.Z)(n),(0,i.Z)(e))})),k(!1),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),console.log(n.t0.message);case 15:case"end":return n.stop()}var t}),n,null,[[1,12]])})));return function(){return n.apply(this,arguments)}}();n()}),[w]),(0,r.useEffect)((function(){w>1&&window.scrollBy(0,window.innerHeight)}),[t,w]);var S=function(n){var e=z.some((function(e){return e.id===n.id}));L(e?z.filter((function(e){return e.id!==n.id})):function(e){return[].concat((0,i.Z)(e),[n])})};return(0,B.jsxs)(tn,{children:[(0,B.jsx)(rn,{children:(0,B.jsx)(nn,{filter:F,onFilterChange:function(n){P(n)}})}),(0,B.jsx)(en,{children:function(){var n=z.map((function(n){return n.id}));switch(F){case"follow":return t.filter((function(e){var t=e.id;return!n.includes(t)}));case"following":return t.filter((function(e){var t=e.id;return n.includes(t)}));default:return t}}().map((function(n){return(0,B.jsx)(D,{userCard:n,isFollower:S,followersList:z},n.id)}))}),f&&(Z?(0,B.jsx)(q,{}):(0,B.jsx)(R,{loadMore:function(){A((function(n){return n+1}))}})),(0,B.jsx)(c.Ix,{})]})},an=t(1087),ln=_.ZP.section(H||(H=(0,Y.Z)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\npadding: 50px;\n"]))),sn=(0,_.ZP)(an.OL)(F||(F=(0,Y.Z)(["\ndisplay: flex;\njustify-content: center;\ntext-decoration: none;\npadding: 10px 20px;\ncolor: black;\nfont-weight: 500;\nwidth: 200px;\nbackground-color: #E6E6FA;\nborder-radius: 25px;\n\n:hover {\n    color: white;\n    background-color: #5CD3A8;}\n"]))),pn=(_.ZP.div(P||(P=(0,Y.Z)(["\n  position: relative;\n  border-radius: 6px;\n\n  &:hover,\n  &:hover > :first-child {\n    transform: scale(1.05);\n    color: var(--color-text-active);\n    background-color: var(--color-bg-dark-main);\n  }\n"]))),_.ZP.select(S||(S=(0,Y.Z)(["\n  appearance: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  cursor: pointer;\n  outline: none;\n  padding: 6px 30px 6px 15px;\n\n  font-family: inherit;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--color-text-dark);\n  background-color: var(--color-bg-light-main);\n  border-radius: 6px;\n  border-color: transparent;\n  box-shadow: var(--box-shadow);\n\n  transition: var(--transition);\n"]))),function(){var n,e,t=(0,o.TH)(),i=(0,r.useRef)(null!==(n=null===(e=t.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/Home");return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(sn,{to:i.current,children:" \ud83d\udd19 Back to Homepage"}),(0,B.jsx)(ln,{children:(0,B.jsx)(on,{})})]})}),cn=pn}}]);
//# sourceMappingURL=247.6d28cfb1.chunk.js.map