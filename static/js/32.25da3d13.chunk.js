(this["webpackJsonphow-to-use-the-go-api"]=this["webpackJsonphow-to-use-the-go-api"]||[]).push([[32],{245:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_range",(function(){return u}));var r=n(17),a=n(1),i=n.n(a),o=n(3),s=n(5),l=n(7),d=n(13),b=n(15),g=n(16),c=n(266),u=function(){function t(e){var r=this;Object(s.a)(this,t),Object(d.o)(this,e),this.ionChange=Object(d.g)(this,"ionChange",7),this.ionStyle=Object(d.g)(this,"ionStyle",7),this.ionFocus=Object(d.g)(this,"ionFocus",7),this.ionBlur=Object(d.g)(this,"ionBlur",7),this.didLoad=!1,this.noUpdate=!1,this.hasFocus=!1,this.ratioA=0,this.ratioB=0,this.debounce=0,this.name="",this.dualKnobs=!1,this.min=0,this.max=100,this.pin=!1,this.snaps=!1,this.step=1,this.ticks=!0,this.disabled=!1,this.value=0,this.clampBounds=function(t){return Object(g.e)(r.min,t,r.max)},this.ensureValueInBounds=function(t){return r.dualKnobs?{lower:r.clampBounds(t.lower),upper:r.clampBounds(t.upper)}:r.clampBounds(t)},this.setupGesture=Object(o.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=r.rangeSlider)){t.next=6;break}return t.next=4,Promise.resolve().then(n.bind(null,62));case 4:r.gesture=t.sent.createGesture({el:e,gestureName:"range",gesturePriority:100,threshold:0,onStart:function(t){return r.onStart(t)},onMove:function(t){return r.onMove(t)},onEnd:function(t){return r.onEnd(t)}}),r.gesture.enable(!r.disabled);case 6:case"end":return t.stop()}}),t)}))),this.handleKeyboard=function(t,e){var n=r.step;n=n>0?n:1,n/=r.max-r.min,e||(n*=-1),"A"===t?r.ratioA=Object(g.e)(0,r.ratioA+n,1):r.ratioB=Object(g.e)(0,r.ratioB+n,1),r.updateValue()},this.onBlur=function(){r.hasFocus&&(r.hasFocus=!1,r.ionBlur.emit(),r.emitStyle())},this.onFocus=function(){r.hasFocus||(r.hasFocus=!0,r.ionFocus.emit(),r.emitStyle())}}return Object(l.a)(t,[{key:"debounceChanged",value:function(){this.ionChange=Object(g.d)(this.ionChange,this.debounce)}},{key:"minChanged",value:function(){this.noUpdate||this.updateRatio()}},{key:"maxChanged",value:function(){this.noUpdate||this.updateRatio()}},{key:"disabledChanged",value:function(){this.gesture&&this.gesture.enable(!this.disabled),this.emitStyle()}},{key:"valueChanged",value:function(t){this.noUpdate||this.updateRatio(),t=this.ensureValueInBounds(t),this.ionChange.emit({value:t})}},{key:"componentDidLoad",value:function(){this.setupGesture(),this.didLoad=!0}},{key:"connectedCallback",value:function(){this.updateRatio(),this.debounceChanged(),this.disabledChanged(),this.didLoad&&this.setupGesture()}},{key:"disconnectedCallback",value:function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"getValue",value:function(){var t=this.value||0;return this.dualKnobs?"object"===typeof t?t:{lower:0,upper:t}:"object"===typeof t?t.upper:t}},{key:"emitStyle",value:function(){this.ionStyle.emit({interactive:!0,"interactive-disabled":this.disabled})}},{key:"onStart",value:function(t){var e=this.rect=this.rangeSlider.getBoundingClientRect(),n=t.currentX,r=Object(g.e)(0,(n-e.left)/e.width,1);"rtl"===document.dir&&(r=1-r),this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-r)<Math.abs(this.ratioB-r)?"A":"B",this.setFocus(this.pressedKnob),this.update(n)}},{key:"onMove",value:function(t){this.update(t.currentX)}},{key:"onEnd",value:function(t){this.update(t.currentX),this.pressedKnob=void 0}},{key:"update",value:function(t){var e=this.rect,n=Object(g.e)(0,(t-e.left)/e.width,1);"rtl"===document.dir&&(n=1-n),this.snaps&&(n=k(p(n,this.min,this.max,this.step),this.min,this.max)),"A"===this.pressedKnob?this.ratioA=n:this.ratioB=n,this.updateValue()}},{key:"updateRatio",value:function(){var t=this.getValue(),e=this.min,n=this.max;this.dualKnobs?(this.ratioA=k(t.lower,e,n),this.ratioB=k(t.upper,e,n)):this.ratioA=k(t,e,n)}},{key:"updateValue",value:function(){this.noUpdate=!0;var t=this.valA,e=this.valB;this.value=this.dualKnobs?{lower:Math.min(t,e),upper:Math.max(t,e)}:t,this.noUpdate=!1}},{key:"setFocus",value:function(t){if(this.el.shadowRoot){var e=this.el.shadowRoot.querySelector("A"===t?".range-knob-a":".range-knob-b");e&&e.focus()}}},{key:"render",value:function(){var t,e,n=this,a=this.min,i=this.max,o=this.step,s=this.el,l=this.handleKeyboard,u=this.pressedKnob,p=this.disabled,m=this.pin,f=this.ratioLower,v=this.ratioUpper,x=Object(b.b)(this),w="".concat(100*f,"%"),y="".concat(100-100*v,"%"),j="rtl"===document.dir,z=j?"right":"left",O=j?"left":"right",B=function(t){return Object(r.a)({},z,t[z])},A=(t={},Object(r.a)(t,z,w),Object(r.a)(t,O,y),t),C=[];if(this.snaps&&this.ticks)for(var K=a;K<=i;K+=o){var S=k(K,a,i),F={ratio:S,active:S>=f&&S<=v};F[z]="".concat(100*S,"%"),C.push(F)}return Object(g.c)(!0,s,this.name,JSON.stringify(this.getValue()),p),Object(d.j)(d.c,{onFocusin:this.onFocus,onFocusout:this.onBlur,class:Object(c.a)(this.color,(e={},Object(r.a)(e,x,!0),Object(r.a)(e,"in-item",Object(c.c)("ion-item",s)),Object(r.a)(e,"range-disabled",p),Object(r.a)(e,"range-pressed",void 0!==u),Object(r.a)(e,"range-has-pin",m),e))},Object(d.j)("slot",{name:"start"}),Object(d.j)("div",{class:"range-slider",ref:function(t){return n.rangeSlider=t}},C.map((function(t){return Object(d.j)("div",{style:B(t),role:"presentation",class:{"range-tick":!0,"range-tick-active":t.active},part:t.active?"tick-active":"tick"})})),Object(d.j)("div",{class:"range-bar",role:"presentation",part:"bar"}),Object(d.j)("div",{class:"range-bar range-bar-active",role:"presentation",style:A,part:"bar-active"}),h(j,{knob:"A",pressed:"A"===u,value:this.valA,ratio:this.ratioA,pin:m,disabled:p,handleKeyboard:l,min:a,max:i}),this.dualKnobs&&h(j,{knob:"B",pressed:"B"===u,value:this.valB,ratio:this.ratioB,pin:m,disabled:p,handleKeyboard:l,min:a,max:i})),Object(d.j)("slot",{name:"end"}))}},{key:"valA",get:function(){return p(this.ratioA,this.min,this.max,this.step)}},{key:"valB",get:function(){return p(this.ratioB,this.min,this.max,this.step)}},{key:"ratioLower",get:function(){return this.dualKnobs?Math.min(this.ratioA,this.ratioB):0}},{key:"ratioUpper",get:function(){return this.dualKnobs?Math.max(this.ratioA,this.ratioB):this.ratioA}},{key:"el",get:function(){return Object(d.k)(this)}}],[{key:"watchers",get:function(){return{debounce:["debounceChanged"],min:["minChanged"],max:["maxChanged"],disabled:["disabledChanged"],value:["valueChanged"]}}}]),t}(),h=function(t,e){var n=e.knob,r=e.value,a=e.ratio,i=e.min,o=e.max,s=e.disabled,l=e.pressed,b=e.pin,g=e.handleKeyboard,c=t?"right":"left";return Object(d.j)("div",{onKeyDown:function(t){var e=t.key;"ArrowLeft"===e||"ArrowDown"===e?(g(n,!1),t.preventDefault(),t.stopPropagation()):"ArrowRight"!==e&&"ArrowUp"!==e||(g(n,!0),t.preventDefault(),t.stopPropagation())},class:{"range-knob-handle":!0,"range-knob-a":"A"===n,"range-knob-b":"B"===n,"range-knob-pressed":l,"range-knob-min":r===i,"range-knob-max":r===o},style:function(){var t={};return t[c]="".concat(100*a,"%"),t}(),role:"slider",tabindex:s?-1:0,"aria-valuemin":i,"aria-valuemax":o,"aria-disabled":s?"true":null,"aria-valuenow":r},b&&Object(d.j)("div",{class:"range-pin",role:"presentation",part:"pin"},Math.round(r)),Object(d.j)("div",{class:"range-knob",role:"presentation",part:"knob"}))},p=function(t,e,n,r){var a=(n-e)*t;return r>0&&(a=Math.round(a/r)*r+e),Object(g.e)(e,a,n)},k=function(t,e,n){return Object(g.e)(0,(t-e)/(n-e),1)};u.style={ios:":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:#ffffff;--knob-box-shadow:0 3px 1px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.13), 0 0 0 1px rgba(0, 0, 0, 0.02);--knob-size:28px;--bar-height:2px;--bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){margin-left:0;margin-right:16px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted([slot=end]){margin-left:16px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:20px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-tick{margin-left:-1px;border-radius:0;position:absolute;top:18px;width:2px;height:8px;background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-tick{margin-left:unset;-webkit-margin-start:-1px;margin-inline-start:-1px}}.range-tick-active{background:var(--bar-background-active)}.range-pin{-webkit-transform:translate3d(0,  28px,  0) scale(0.01);transform:translate3d(0,  28px,  0) scale(0.01);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:inline-block;position:relative;top:-20px;min-width:28px;-webkit-transition:-webkit-transform 120ms ease;transition:-webkit-transform 120ms ease;transition:transform 120ms ease;transition:transform 120ms ease, -webkit-transform 120ms ease;background:transparent;color:var(--ion-text-color, #000);font-size:12px;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-pin{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,  0,  0) scale(1);transform:translate3d(0,  0,  0) scale(1)}:host(.range-disabled){opacity:0.5}",md:':host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.26);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary, #3880ff);--pin-color:var(--ion-color-primary-contrast, #fff);padding-left:14px;padding-right:14px;padding-top:8px;padding-bottom:8px;font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px}}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb), 0.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin::before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){margin-left:0;margin-right:14px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px}}::slotted([slot=end]){margin-left:14px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:28px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{-webkit-transform:scale(0.67);transform:scale(0.67);-webkit-transition-duration:120ms;transition-duration:120ms;-webkit-transition-property:background-color, border, -webkit-transform;transition-property:background-color, border, -webkit-transform;transition-property:transform, background-color, border;transition-property:transform, background-color, border, -webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;-webkit-transform:translate3d(0,  0,  0) scale(0.01);transform:translate3d(0,  0,  0) scale(0.01);display:inline-block;position:relative;min-width:28px;height:28px;-webkit-transition:background 120ms ease, -webkit-transform 120ms ease;transition:background 120ms ease, -webkit-transform 120ms ease;transition:transform 120ms ease, background 120ms ease;transition:transform 120ms ease, background 120ms ease, -webkit-transform 120ms ease;background:var(--pin-background);color:var(--pin-color);text-align:center}.range-pin::before{left:50%;top:3px;margin-left:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background 120ms ease;transition:background 120ms ease;background:var(--pin-background);content:"";z-index:-1}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset;right:unset;right:50%}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-pin::before{margin-left:unset;-webkit-margin-start:-13px;margin-inline-start:-13px}}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,  -24px,  0) scale(1);transform:translate3d(0,  -24px,  0) scale(1)}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob{-webkit-transform:scale(1);transform:scale(1)}:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-bar,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250, #bfbfbf)}:host(.range-disabled) .range-knob{-webkit-transform:scale(0.55);transform:scale(0.55);outline:5px solid #fff;background-color:var(--ion-color-step-250, #bfbfbf)}'}},266:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return g}));var r=n(1),a=n.n(r),i=n(3),o=n(17),s=function(t,e){return null!==e.closest(t)},l=function(t,e){return"string"===typeof t&&t.length>0?Object.assign(Object(o.a)({"ion-color":!0},"ion-color-".concat(t),!0),e):e},d=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},b=/^[a-z][a-z0-9+\-.]*:/,g=function(){var t=Object(i.a)(a.a.mark((function t(e,n,r,i){var o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==e||"#"===e[0]||b.test(e)){t.next=5;break}if(!(o=document.querySelector("ion-router"))){t.next=5;break}return null!=n&&n.preventDefault(),t.abrupt("return",o.push(e,r,i));case 5:return t.abrupt("return",!1);case 6:case"end":return t.stop()}}),t)})));return function(e,n,r,a){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=32.25da3d13.chunk.js.map