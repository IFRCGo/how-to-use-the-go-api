(this["webpackJsonphow-to-use-the-go-api"]=this["webpackJsonphow-to-use-the-go-api"]||[]).push([[9],{240:function(e,t,o){"use strict";o.r(t),o.d(t,"ion_modal",(function(){return E}));var a=o(17),r=o(1),n=o.n(r),i=o(3),s=o(5),d=o(7),c=o(13),l=o(15),m=o(16),p=o(4),h=o(20),u=o(63),f=(o(34),o(62)),b=(o(33),o(29)),x=o(266),w=o(268),v=.93,y=function(e,t){return Object(m.e)(400,e/Math.abs(1.1*t),500)},g=function(e,t){var o=Object(p.a)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),a=Object(p.a)().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)"),r=Object(p.a)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(a);if(t){var n=window.innerWidth<768,i="ION-MODAL"===t.tagName&&void 0!==t.presentingElement,s=Object(p.a)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),d=document.body;if(n){var c=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",l=v,m="translateY(".concat(i?"-10px":c,") scale(").concat(l,")");s.afterStyles({transform:m}).beforeAddWrite((function(){return d.style.setProperty("background-color","black")})).addElement(t).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:m,borderRadius:"10px 10px 0 0"}]),r.addAnimation(s)}else if(r.addAnimation(o),i){var h="translateY(-10px) scale(".concat(i?v:1,")");s.afterStyles({transform:h}).addElement(t.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:h}]);var u=Object(p.a)().afterStyles({transform:h}).addElement(t.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:h}]);r.addAnimation([s,u])}else a.fromTo("opacity","0","1")}else r.addAnimation(o);return r},k=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500,a=Object(p.a)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r=Object(p.a)().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)"),n=Object(p.a)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(o).addAnimation(r);if(t){var i=window.innerWidth<768,s="ION-MODAL"===t.tagName&&void 0!==t.presentingElement,d=Object(p.a)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((function(e){1===e&&(t.style.setProperty("overflow",""),Array.from(c.querySelectorAll("ion-modal")).filter((function(e){return void 0!==e.presentingElement})).length<=1&&c.style.setProperty("background-color",""))})),c=document.body;if(i){var l=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",m=s?"-10px":l,h=v,u="translateY(".concat(m,") scale(").concat(h,")");d.addElement(t).keyframes([{offset:0,filter:"contrast(0.85)",transform:u,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),n.addAnimation(d)}else if(n.addAnimation(a),s){var f=s?v:1,b="translateY(-10px) scale(".concat(f,")");d.addElement(t.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:b},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);var x=Object(p.a)().addElement(t.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:b},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);n.addAnimation([d,x])}else r.fromTo("opacity","1","0")}else n.addAnimation(a);return n},j=function(e){var t=Object(p.a)(),o=Object(p.a)(),a=Object(p.a)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),a.addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([o,a])},O=function(e){var t=Object(p.a)(),o=Object(p.a)(),a=Object(p.a)(),r=e.querySelector(".modal-wrapper");return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),a.addElement(r).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),t.addElement(e).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([o,a])},E=function(){function e(t){var o=this;Object(s.a)(this,e),Object(c.o)(this,t),this.didPresent=Object(c.g)(this,"ionModalDidPresent",7),this.willPresent=Object(c.g)(this,"ionModalWillPresent",7),this.willDismiss=Object(c.g)(this,"ionModalWillDismiss",7),this.didDismiss=Object(c.g)(this,"ionModalDidDismiss",7),this.gestureAnimationDismissing=!1,this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.onBackdropTap=function(){o.dismiss(void 0,b.a)},this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),o.dismiss()},this.onLifecycle=function(e){var t=o.usersElement,a=S[e.type];if(t&&a){var r=new CustomEvent(a,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(r)}}}return Object(d.a)(e,[{key:"swipeToCloseChanged",value:function(e){this.gesture?this.gesture.enable(e):e&&this.initSwipeToClose()}},{key:"connectedCallback",value:function(){Object(b.f)(this.el)}},{key:"present",value:function(){var e=Object(i.a)(n.a.mark((function e(){var t,o,a=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.presented){e.next=2;break}return e.abrupt("return");case 2:if(t=this.el.querySelector(".modal-wrapper")){e.next=5;break}throw new Error("container is undefined");case 5:return o=Object.assign(Object.assign({},this.componentProps),{modal:this.el}),e.next=8,Object(w.a)(this.delegate,t,this.component,["ion-page"],o);case 8:return this.usersElement=e.sent,e.next=11,Object(h.d)(this.usersElement);case 11:return Object(c.f)((function(){return a.el.classList.add("show-modal")})),e.next=14,Object(b.e)(this,"modalEnter",g,j,this.presentingElement);case 14:this.swipeToClose&&this.initSwipeToClose();case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"initSwipeToClose",value:function(){var e=this;if("ios"===Object(l.b)(this)){var t=this.leaveAnimation||l.c.get("modalLeave",k),o=this.animation=t(this.el,this.presentingElement);this.gesture=function(e,t,o){var a=e.offsetHeight,r=!1,n=Object(f.createGesture)({el:e,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:function(e){var t=e.event.target;return null===t||!t.closest||null===t.closest("ion-content")},onStart:function(){t.progressStart(!0,r?1:0)},onMove:function(e){var o=Object(m.e)(1e-4,e.deltaY/a,.9999);t.progressStep(o)},onEnd:function(e){var i=e.velocityY,s=Object(m.e)(1e-4,e.deltaY/a,.9999),d=(e.deltaY+1e3*i)/a>=.5,c=d?-.001:.001;d?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),c+=Object(u.a)([0,0],[.32,.72],[0,1],[1,1],s)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),c+=Object(u.a)([0,0],[1,0],[.68,.28],[1,1],s)[0]);var l=y(d?s*a:(1-s)*a,i);r=d,n.enable(!1),t.onFinish((function(){d||n.enable(!0)})).progressEnd(d?1:0,c,l),d&&o()}});return n}(this.el,o,(function(){e.gestureAnimationDismissing=!0,e.animation.onFinish(Object(i.a)(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.dismiss(void 0,"gesture");case 2:e.gestureAnimationDismissing=!1;case 3:case"end":return t.stop()}}),t)}))))})),this.gesture.enable(!0)}}},{key:"dismiss",value:function(){var e=Object(i.a)(n.a.mark((function e(t,o){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.gestureAnimationDismissing||"gesture"===o){e.next=2;break}return e.abrupt("return",!1);case 2:return a=b.i.get(this)||[],e.next=5,Object(b.g)(this,t,o,"modalLeave",k,O,this.presentingElement);case 5:if(!(r=e.sent)){e.next=11;break}return e.next=9,Object(w.b)(this.delegate,this.usersElement);case 9:this.animation&&this.animation.destroy(),a.forEach((function(e){return e.destroy()}));case 11:return this.animation=void 0,e.abrupt("return",r);case 13:case"end":return e.stop()}}),e,this)})));return function(t,o){return e.apply(this,arguments)}}()},{key:"onDidDismiss",value:function(){return Object(b.h)(this.el,"ionModalDidDismiss")}},{key:"onWillDismiss",value:function(){return Object(b.h)(this.el,"ionModalWillDismiss")}},{key:"render",value:function(){var e,t=Object(l.b)(this);return Object(c.j)(c.c,{"no-router":!0,"aria-modal":"true",tabindex:"-1",class:Object.assign((e={},Object(a.a)(e,t,!0),Object(a.a)(e,"modal-card",void 0!==this.presentingElement&&"ios"===t),e),Object(x.b)(this.cssClass)),style:{zIndex:"".concat(2e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},Object(c.j)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),"ios"===t&&Object(c.j)("div",{class:"modal-shadow"}),Object(c.j)("div",{tabindex:"0"}),Object(c.j)("div",{role:"dialog",class:"modal-wrapper ion-overlay-wrapper"}),Object(c.j)("div",{tabindex:"0"}))}},{key:"el",get:function(){return Object(c.k)(this)}}],[{key:"watchers",get:function(){return{swipeToClose:["swipeToCloseChanged"]}}}]),e}(),S={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};E.style={ios:".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios,.modal-shadow.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-ios{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - 40px)}}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}[dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{display:none}.modal-card.sc-ion-modal-ios-h ion-backdrop.sc-ion-modal-ios{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-ion-modal-ios-h{--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}.modal-card.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:0.18}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{-webkit-box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1)}}",md:".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md,.modal-shadow.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-md{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--border-radius:2px}.sc-ion-modal-md-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}"}},266:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return c})),o.d(t,"c",(function(){return s})),o.d(t,"d",(function(){return m}));var a=o(1),r=o.n(a),n=o(3),i=o(17),s=function(e,t){return null!==t.closest(e)},d=function(e,t){return"string"===typeof e&&e.length>0?Object.assign(Object(i.a)({"ion-color":!0},"ion-color-".concat(e),!0),t):t},c=function(e){var t={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return t[e]=!0})),t},l=/^[a-z][a-z0-9+\-.]*:/,m=function(){var e=Object(n.a)(r.a.mark((function e(t,o,a,n){var i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==t||"#"===t[0]||l.test(t)){e.next=5;break}if(!(i=document.querySelector("ion-router"))){e.next=5;break}return null!=o&&o.preventDefault(),e.abrupt("return",i.push(t,a,n));case 5:return e.abrupt("return",!1);case 6:case"end":return e.stop()}}),e)})));return function(t,o,a,r){return e.apply(this,arguments)}}()},268:function(e,t,o){"use strict";o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return s}));var a=o(1),r=o.n(a),n=o(3),i=function(){var e=Object(n.a)(r.a.mark((function e(t,o,a,n,i){var s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",t.attachViewToDom(o,a,i,n));case 2:if("string"===typeof a||a instanceof HTMLElement){e.next=4;break}throw new Error("framework delegate is missing");case 4:if(s="string"===typeof a?o.ownerDocument&&o.ownerDocument.createElement(a):a,n&&n.forEach((function(e){return s.classList.add(e)})),i&&Object.assign(s,i),o.appendChild(s),!s.componentOnReady){e.next=11;break}return e.next=11,s.componentOnReady();case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)})));return function(t,o,a,r,n){return e.apply(this,arguments)}}(),s=function(e,t){if(t){if(e){var o=t.parentElement;return e.removeViewFromDom(o,t)}t.remove()}return Promise.resolve()}}}]);
//# sourceMappingURL=9.0febed63.chunk.js.map