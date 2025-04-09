import{b as N}from"./chunk-I7ZJ5MLG.js";import"./chunk-SIMWXKEG.js";import{a as F,c as R,h as B,j as T}from"./chunk-GEFPFAHX.js";import"./chunk-F5SCUEN3.js";import"./chunk-J2SQZT42.js";import{Bb as n,Db as D,Gb as p,Ma as a,Na as m,P as g,Ta as I,Xa as S,Y as s,Z as _,Zb as j,db as l,eb as x,lb as o,mb as c,pa as b,qa as k,tb as A,vb as C,wb as v,xb as E,yb as M,zb as w}from"./chunk-GP6ZJDQ6.js";import"./chunk-C6Q5SG76.js";var O=["*"],f=(()=>{class t{_element;_renderer;_accordion;header=b();collapsed=S(!0);constructor(i,e,r){this._element=i,this._renderer=e,this._accordion=r,this._renderer.addClass(this._element.nativeElement,"accordion-item"),j(()=>{var u=this.collapsed();r.mode()=="single"&&(u||this._accordion.items.filter(d=>d!==this).forEach(d=>d.collapsed.update(q=>!0)))},{allowSignalWrites:!0})}static \u0275fac=function(e){return new(e||t)(m(k),m(I),m(y))};static \u0275cmp=s({type:t,selectors:[["bk-accordion-item"]],inputs:{header:[1,"header"],collapsed:[1,"collapsed"]},outputs:{collapsed:"collapsedChange"},standalone:!0,features:[p],ngContentSelectors:O,decls:6,vars:4,consts:[[1,"accordion-header"],["type","button",1,"accordion-button",3,"click"],[3,"collapsed"],[1,"accordion-body"]],template:function(e,r){e&1&&(C(),o(0,"h6",0)(1,"button",1),A("click",function(){return r.collapsed.set(!r.collapsed())}),n(2),c()(),o(3,"bk-collapse",2)(4,"div",3),v(5),c()()),e&2&&(a(),x("collapsed",r.collapsed()),a(),D(" ",r.header()," "),a(),l("collapsed",r.collapsed()))},dependencies:[N],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})}return t})(),y=(()=>{class t{_element;_renderer;mode=b("single");items;constructor(i,e){this._element=i,this._renderer=e,this._renderer.addClass(this._element.nativeElement,"accordion")}static \u0275fac=function(e){return new(e||t)(m(k),m(I))};static \u0275cmp=s({type:t,selectors:[["bk-accordion"]],contentQueries:function(e,r,u){if(e&1&&E(u,f,4),e&2){let d;M(d=w())&&(r.items=d)}},inputs:{mode:[1,"mode"]},standalone:!0,features:[p],ngContentSelectors:O,decls:1,vars:0,template:function(e,r){e&1&&(C(),v(0))},styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})}return t})(),P=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=_({type:t});static \u0275inj=g({imports:[f]})}return t})();var Q={simple:[{formatter:"html",title:"HTML",code:`
<bk-accordion >
   <bk-accordion-item header="Item 1">
       Item 1 content.
   </bk-accordion-item>
   <bk-accordion-item header="Item 2">
       Item 2 content.
   </bk-accordion-item>
   <bk-accordion-item header="Item 3">
       Item 3 content.
   </bk-accordion-item>
</bk-accordion>
`}],flush:[{formatter:"html",title:"HTML",code:`
<bk-accordion class="accordion-flush">
   <bk-accordion-item header="Item 1">
       Item 1 content.
   </bk-accordion-item>
   <bk-accordion-item header="Item 2">
       Item 2 content.
   </bk-accordion-item>
   <bk-accordion-item header="Item 3">
       Item 3 content.
   </bk-accordion-item>
</bk-accordion>
`}],alwaysOpen:[{formatter:"html",title:"HTML",code:`
<bk-accordion mode="multiple">
   <bk-accordion-item header="Item 1">
       Item 1 content.
   </bk-accordion-item>
   <bk-accordion-item header="Item 2">
       Item 2 content.
   </bk-accordion-item>
   <bk-accordion-item header="Item 3">
       Item 3 content.
   </bk-accordion-item>
</bk-accordion>
`}]};var h=class t{codes=Q;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=s({type:t,selectors:[["app-bootkit-components-accordion"]],standalone:!0,features:[p],decls:34,vars:3,consts:[["header","Accordion"],["id","basic_usage","header","Basic Usage"],["header","Basic Usage",3,"codes"],["header","Item 1"],["header","Item 2"],["header","Item 3"],["id","flush","header","Flush"],["header","Flush",3,"codes"],[1,"accordion-flush"],["id","always_open","header","Always open"],["header","Always open",3,"codes"],["mode","multiple"]],template:function(i,e){i&1&&(o(0,"app-doc",0),n(1," Build vertically collapsing accordions in combination with Collapse component. "),o(2,"app-doc-section",1)(3,"app-example-viewer",2)(4,"bk-accordion")(5,"bk-accordion-item",3),n(6," Item 1 content. "),c(),o(7,"bk-accordion-item",4),n(8," Item 2 content. "),c(),o(9,"bk-accordion-item",5),n(10," Item 3 content. "),c()()()(),o(11,"app-doc-section",6),n(12," Add .accordion-flush to bk-accordio component to remove some borders and rounded corners to render accordions edge-to-edge with their parent container. "),o(13,"app-example-viewer",7)(14,"bk-accordion",8)(15,"bk-accordion-item",3),n(16," Item 1 content. "),c(),o(17,"bk-accordion-item",4),n(18," Item 2 content. "),c(),o(19,"bk-accordion-item",5),n(20," Item 3 content. "),c()()()(),o(21,"app-doc-section",9),n(22," Set "),o(23,"mark"),n(24,'mode="multiple"'),c(),n(25," to allow multiple accordion items stay open. "),o(26,"app-example-viewer",10)(27,"bk-accordion",11)(28,"bk-accordion-item",3),n(29," Item 1 content. "),c(),o(30,"bk-accordion-item",4),n(31," Item 2 content. "),c(),o(32,"bk-accordion-item",5),n(33," Item 3 content. "),c()()()()()),i&2&&(a(3),l("codes",e.codes.simple),a(10),l("codes",e.codes.flush),a(13),l("codes",e.codes.alwaysOpen))},dependencies:[T,R,F,B,P,y,f],encapsulation:2})};var re=[{path:"",component:h}];export{re as default};
