import{E as p,Ea as x,Fa as s,Ga as l,I as a,J as c,Ua as g,Va as b,Xa as v,Ya as $,Za as w,ab as y,db as C,f as n,ja as f,qb as k,ra as d,rb as r,sa as h,ta as u,xb as M}from"./chunk-NCYBAJSO.js";var O=[{path:"",loadComponent:()=>import("./chunk-YQMSJZAH.js").then(t=>t.HomeComponent)},{path:"player/:trackId",loadComponent:()=>import("./chunk-X4TMB3BS.js").then(t=>t.PlayerComponent)}];var P={providers:[M(),v($()),C(O)]};var j=(()=>{let e=class e{constructor(){this.breakpointObserver=a(k),this.xsmall$=new n(!1),this.small$=new n(!1),this.medium$=new n(!1),this.large$=new n(!1),this.xlarge$=new n(!1),this.breakpointObserver.observe([r.XSmall,r.Small,r.Medium,r.Large,r.XLarge]).subscribe(o=>{o.breakpoints[r.XSmall]?this.xsmall$.next(!0):this.xsmall$.next(!1),o.breakpoints[r.Small]?this.small$.next(!0):this.small$.next(!1),o.breakpoints[r.Medium]?this.medium$.next(!0):this.medium$.next(!1),o.breakpoints[r.Large]?this.large$.next(!0):this.large$.next(!1),o.breakpoints[r.XLarge]?this.xlarge$.next(!0):this.xlarge$.next(!1)})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var S=(()=>{let e=class e{constructor(){this.breakpointService=a(j)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["app-root"]],standalone:!0,features:[x],decls:4,vars:8,consts:[[1,"shell"]],template:function(i,m){i&1&&(d(0,"div",0),s(1,"async"),s(2,"async"),u(3,"router-outlet"),h()),i&2&&f("mat-elevation-z6",l(1,4,m.breakpointService.xsmall$)===!1)("frame",l(2,6,m.breakpointService.xsmall$)===!1)},dependencies:[b,g,y],styles:["[_nghost-%COMP%]{flex-grow:1;display:flex;flex-direction:column;justify-content:center;align-items:center}.shell[_ngcontent-%COMP%]{height:1px;flex-grow:1;display:flex;flex-direction:column;width:100%}.frame[_ngcontent-%COMP%]{overflow:hidden;border-radius:32px;border:12px;border-color:#202020;border-style:solid;box-sizing:border-box}@media only screen and (min-width: 600px){.frame[_ngcontent-%COMP%]{max-width:var(--frame-max-width);max-height:calc(var(--frame-max-width) * 2)}}"]});let t=e;return t})();w(S,P).catch(t=>console.error(t));