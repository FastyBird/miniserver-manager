(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{689:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));const r={};function o(e){return 0===e.button}function l(e){return e.touches&&e.touches[0]?e=e.touches[0]:e.changedTouches&&e.changedTouches[0]&&(e=e.changedTouches[0]),{top:e.clientY,left:e.clientX}}Object.defineProperty(r,"passive",{configurable:!0,get(){let e;try{const t=Object.defineProperty({},"passive",{get(){e={passive:!0}}});window.addEventListener("qtest",null,t),window.removeEventListener("qtest",null,t)}catch(e){}return r.passive=e,e},set(e){Object.defineProperty(this,"passive",{value:e})}});function d(e){void 0!==e.touchTargetObserver&&(e.touchTargetObserver.disconnect(),e.touchTargetObserver=void 0)}function c(e){const t=!0!==e.horizontal&&!0!==e.vertical,n={all:!0===t||!0===e.horizontal&&!0===e.vertical};return!0!==e.horizontal&&!0!==t||(n.horizontal=!0),!0!==e.vertical&&!0!==t||(n.vertical=!0),n}function m(e,t,n){const r=l(e);let o;const d=r.left-t.event.x,c=r.top-t.event.y,m=Math.abs(d),h=Math.abs(c);return o=t.direction.horizontal&&!t.direction.vertical?d<0?"left":"right":!t.direction.horizontal&&t.direction.vertical?c<0?"up":"down":m>=h?d<0?"left":"right":c<0?"up":"down",{evt:e,position:r,direction:o,isFirst:t.event.isFirst,isFinal:!0===n,isMouse:t.event.mouse,duration:(new Date).getTime()-t.event.time,distance:{x:m,y:h},offset:{x:d,y:c},delta:{x:r.left-t.event.lastX,y:r.top-t.event.lastY}}}function h(e){return 0===e?"":`translate3d(${e}px, 0, 0)`}function v(e){return e?e.clientWidth:0}var f={name:"SwipeOut",directives:{touchPan:{name:"touch-pan",bind(e,t){const n=!0===t.modifiers.mouse,h=!0!==t.modifiers.mouseMightPrevent&&!0!==t.modifiers.mousePrevent,v=void 0===r.passive||{passive:h,capture:!0},f=!0!==t.modifiers.mightPrevent&&!0!==t.modifiers.prevent?r.passive:null;function _(e,r){n&&r?(t.modifiers.mouseStop&&e.stopPropagation(),t.modifiers.mousePrevent&&e.preventDefault()):(t.modifiers.stop&&e.stopPropagation(),t.modifiers.prevent&&e.preventDefault())}const w={handler:t.value,direction:c(t.modifiers),mouseStart(e){o(e)&&(document.addEventListener("mousemove",w.move,v),document.addEventListener("mouseup",w.mouseEnd,v),w.start(e,!0))},mouseEnd(e){document.removeEventListener("mousemove",w.move,v),document.removeEventListener("mouseup",w.mouseEnd,v),w.end(e)},start(t,n){d(w),!0!==n&&function(e,t,n){const{target:r}=t;n.touchTargetObserver=new MutationObserver((()=>{!1===e.contains(r)&&n.end(t)})),n.touchTargetObserver.observe(e,{childList:!0,subtree:!0})}(e,t,w);const r=l(t);w.event={x:r.left,y:r.top,time:(new Date).getTime(),mouse:!0===n,detected:!1,abort:!1,isFirst:!0,isFinal:!1,lastX:r.left,lastY:r.top}},move(e){if(!w.event)return;if(!0===w.event.abort)return;if(!0===w.event.detected){_(e,w.event.mouse);const t=m(e,w,!1);return void(function(e,t){return!(!e.direction.horizontal||!e.direction.vertical)||(e.direction.horizontal&&!e.direction.vertical?Math.abs(t.delta.x)>0:!e.direction.horizontal&&e.direction.vertical?Math.abs(t.delta.y)>0:void 0)}(w,t)&&(w.handler(t),w.event.lastX=t.position.left,w.event.lastY=t.position.top,w.event.isFirst=!1))}const n=l(e),r=Math.abs(n.left-w.event.x),o=Math.abs(n.top-w.event.y);r!==o&&(w.event.detected=!0,!1!==w.direction.all||!1!==w.event.mouse&&!0===t.modifiers.mouseAllDir||(w.event.abort=w.direction.vertical?r>o:r<o),!0!==w.event.abort&&(document.documentElement.style.cursor="grabbing",document.body.classList.add("swipeout-no-pointer-events"),document.body.classList.add("swipeout-non-selectable")),w.move(e))},end(e){w.event&&(!0!==w.event.mouse&&d(w),document.documentElement.style.cursor="",document.body.classList.remove("swipeout-no-pointer-events"),document.body.classList.remove("swipeout-non-selectable"),!0!==w.event.abort&&!0===w.event.detected&&!0!==w.event.isFirst&&(_(e,w.event.mouse),w.handler(m(e,w,!0))))}};e.__qtouchpan&&(e.__qtouchpan_old=e.__qtouchpan),e.__qtouchpan=w,!0===n&&e.addEventListener("mousedown",w.mouseStart,v),e.addEventListener("touchstart",w.start,f),e.addEventListener("touchmove",w.move,f),e.addEventListener("touchcancel",w.end,f),e.addEventListener("touchend",w.end,f)},update(e,{oldValue:t,value:n,modifiers:r}){const o=e.__qtouchpan;t!==n&&(o.handler=n),r.horizontal===o.direction.horizontal&&r.vertical===o.direction.vertical||(o.direction=c(r))},unbind(e,t){const n=e.__qtouchpan_old||e.__qtouchpan;if(void 0!==n){d(n),document.documentElement.style.cursor="",document.body.classList.remove("swipeout-no-pointer-events"),document.body.classList.remove("swipeout-non-selectable");const o=!0===t.modifiers.mouse,l=!0!==t.modifiers.mouseMightPrevent&&!0!==t.modifiers.mousePrevent,c=void 0===r.passive||{passive:l,capture:!0},m=!0!==t.modifiers.mightPrevent&&!0!==t.modifiers.prevent?r.passive:null;!0===o&&(e.removeEventListener("mousedown",n.mouseStart,c),document.removeEventListener("mousemove",n.move,c),document.removeEventListener("mouseup",n.mouseEnd,c)),e.removeEventListener("touchstart",n.start,m),e.removeEventListener("touchmove",n.move,m),e.removeEventListener("touchcancel",n.end,m),e.removeEventListener("touchend",n.end,m),delete e[e.__qtouchpan_old?"__qtouchpan_old":"__qtouchpan"]}}}},props:{threshold:{type:Number,default:45},revealed:{type:[String,Boolean]},disabled:{type:Boolean,default:!1},passiveListeners:{type:Boolean,default:!1}},watch:{revealed(e){this.innerRevealed!==e&&this._reveal(e,!0)}},data(){return{innerRevealed:this.revealed||!1}},methods:{closeActions(){this.close()},close(){this._isActive||this._reveal(!1,!0)},revealLeft(){!this._isActive&&this.$refs.left&&this._reveal("left",!0)},revealRight(){!this._isActive&&this.$refs.right&&this._reveal("right",!0)},_distanceSwiped(){const e=this.$refs.content.getBoundingClientRect(),t=this.$el.getBoundingClientRect();return e.left-t.left-this.$el.clientLeft},_onPan(e){return this.disabled?null:e.isFirst?this._startListener(e):this._isActive?e.isFinal?this._stopListener(e):this._swipeListener(e):null},_startListener({distance:e}){this.$el.classList.add("swipeout--no-transition"),e.y<=5&&(this._leftActionsWidth=this.$refs.left?this.$refs.left.clientWidth:0,this._rightActionsWidth=this.$refs.right?this.$refs.right.clientWidth:0,this._startLeft=this._distanceSwiped(),this._isActive=!0,this.$emit("active",!0),clearTimeout(this._timer))},_swipeListener({offset:e}){const t=e.x+this._startLeft;return!this.$scopedSlots.left&&t>0||!this.$scopedSlots.right&&t<0?this._animateSlide(0):this._animateSlide(e.x+this._startLeft)},_stopListener({offset:e,distance:t}){this.$el.classList.remove("swipeout--no-transition"),this._isActive=!1,this.$emit("active",!1);const n=this._startLeft+e.x;return 0===this._startLeft&&Math.abs(n)<=this.threshold||t.x>=this.threshold&&(this._startLeft>0&&t.x<this._leftActionsWidth||this._startLeft<0&&t.x<this._rightActionsWidth)?this._reveal(!1):this._reveal(n>0?"left":"right")},_reveal(e,t){var a,b;if(!this._isActive||(a=this.innerRevealed,b=e,(a||b)&&a!==b))return e&&!this.$refs[e]&&(e=!1),this.innerRevealed=e,this.$emit("update:revealed",e),e?"left"===e&&this.$refs.left?(this._leftActionsWidth=t?v(this.$refs.left):this._leftActionsWidth,this._animateSlide(this._leftActionsWidth),this.$emit("revealed",{side:"left",close:this.closeActions}),void this.$emit("leftRevealed",{close:this.closeActions})):void("right"===e&&this.$refs.right&&(this._rightActionsWidth=t?v(this.$refs.right):this._rightActionsWidth,this._animateSlide(-this._rightActionsWidth),this.$emit("revealed",{side:"right",close:this.closeActions}),this.$emit("rightRevealed",{close:this.closeActions}))):(this._animateSlide(0),void this.$emit("closed"))},_shiftLeftActions(e){if(!this.$scopedSlots.left)return;e<0&&(e=0);const t=this.$refs.left,n=this._leftActionsWidth,progress=1-Math.min(e/n,1),r=Math.min(e,n),{children:o}=t,{length:l}=o;for(let i=0;i<l;i++){const e=o[i],t=n-e.offsetLeft-e.offsetWidth;e.style.transform=h(r+t*progress),l>1&&(e.style.zIndex=""+(l-i))}},_shiftRightActions(e){if(!this.$scopedSlots.right)return;e>0&&(e=0);const t=this.$refs.right,n=this._rightActionsWidth,progress=1+Math.max(e/n,-1),r=Math.max(e,-n),{children:o}=t;for(let i=0;i<o.length;i++){const e=o[i];e.style.transform=h(r-e.offsetLeft*progress)}},_animateSlide(e){cancelAnimationFrame(this._frame),this._frame=requestAnimationFrame((()=>{this.$refs.content.style.transform=h(e),this._shiftLeftActions(e),this._shiftRightActions(e)}))}},render(e){const content=[],{left:t,right:n,default:r}=this.$scopedSlots;return t&&content.push(e("div",{ref:"left",staticClass:"swipeout-left"},t({close:this.closeActions}))),n&&content.push(e("div",{ref:"right",staticClass:"swipeout-right"},n({close:this.closeActions}))),content.push(e("div",{ref:"content",staticClass:"swipeout-content",directives:this.disabled||!t&&!n?null:[{name:"touch-pan",value:this._onPan,modifiers:{horizontal:!0,mouse:!0,prevent:!this.passiveListeners,mousePrevent:!0}}]},r?r({revealLeft:this.revealLeft,revealRight:this.revealRight,disabled:this.disabled,close:this.closeActions,revealed:this.innerRevealed}):null)),e("div",{staticClass:"swipeout",class:{"swipeout--disabled":this.disabled}},content)},beforeDestroy(){clearTimeout(this._timer),cancelAnimationFrame(this._frame)}},_={name:"SwipeList",props:{items:{type:Array,required:!0},itemKey:{type:String},transitionKey:{type:String},threshold:{type:Number,default:45},revealed:{type:Object},disabled:{type:Boolean,default:!1},itemDisabled:{type:Function,default:()=>!1},passiveListeners:{type:Boolean,default:!1}},data(){return{innerRevealed:this.revealed||{},rev:this.items.map((()=>null))}},watch:{revealed(e){this.innerRevealed=e},items(){this._emitRevealed({})}},methods:{revealRight(e){this.$refs.items[e]&&this.$refs.items[e].revealRight()},revealLeft(e){this.$refs.items[e]&&this.$refs.items[e].revealLeft()},close(e){if(this.$refs.items){if(void 0===e)return this.$refs.items.forEach((i=>i.close()));if(this.$refs.items[e])return this.$refs.items[e].close()}},isRevealed(e){return this.innerRevealed[e]||!1},closeActions(e){this.close(e)},_onReveal(e,t,n){this.$emit("revealed",{index:t,item:e,side:n.side,close:n.close}),this._emitRevealed({...this.innerRevealed,[t]:n.side})},_onClose(e,t){this.$emit("closed",{index:t,item:e});const{[t]:n,...r}=this.innerRevealed;this._emitRevealed(r)},_getItemKey(e,t){return void 0!==(this.itemKey||this.transitionKey)?e[this.itemKey||this.transitionKey]:t},_emitRevealed(e){void 0===this.revealed?this.innerRevealed=e:this.$emit("update:revealed",e)},__renderItem(e,t,n){const{left:r,right:o,default:l}=this.$scopedSlots,d={};return r&&(d.left=({close:e})=>r({item:t,close:e,index:n})),o&&(d.right=({close:e})=>o({item:t,close:e,index:n})),d.default=({close:r,disabled:o,revealLeft:d,revealRight:c,revealed:m})=>e("div",{ref:"itemsContent",on:{click:()=>this.$emit("swipeout:click",t)}},l({item:t,index:n,close:r,disabled:o,revealed:m,revealLeft:d,revealRight:c})),e(f,{key:n,ref:"items",refInFor:!0,staticClass:"swipeout-list-item",props:{disabled:this.disabled||this.itemDisabled(t),threshold:this.threshold,revealed:this.innerRevealed[n],passiveListeners:this.passiveListeners},on:{revealed:e=>this._onReveal(t,n,e),leftRevealed:e=>this.$emit("leftRevealed",{index:n,item:t,close:e.close}),rightRevealed:e=>this.$emit("rightRevealed",{index:n,item:t,close:e.close}),closed:e=>this._onClose(t,n,e),active:e=>this.$emit("active",e)},scopedSlots:d})}},render(e){return e("div",{staticClass:"swipeout-list",class:{"swipeout--disabled":this.disabled}},this.items.map(((t,n)=>this.__renderItem(e,t,n))))}}},773:function(e,t,n){var content=n(900);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(94).default)("7efa3634",content,!0,{sourceMap:!1})},774:function(e,t,n){var content=n(902);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(94).default)("751222e3",content,!0,{sourceMap:!1})},899:function(e,t,n){"use strict";n(773)},900:function(e,t,n){var r=n(93)(!1);r.push([e.i,".fb-triggers-phone-settings__heading{font-size:1.8rem;line-height:1.33333;border-bottom:1px solid #ddd;padding-left:1.5rem;margin:1rem 0 0}.fb-triggers-phone-settings__item-action{padding-left:.5rem;padding-right:.5rem}.fb-triggers-phone-settings__item-remove{color:#d9831f}",""]),e.exports=r},901:function(e,t,n){"use strict";n(774)},902:function(e,t,n){var r=n(93)(!1);r.push([e.i,".fb-triggers-detail-view__container{height:100%;max-height:100%}.fb-triggers-detail-view__container-settings{overflow:scroll}.fb-triggers-detail-view__container-loading{display:flex;flex-direction:row;align-items:center}.fb-triggers-detail-view__loading{flex:0 0 50%;max-width:50%;margin:0 auto}",""]),e.exports=r},910:function(e,t,n){"use strict";n.r(t);n(49),n(56),n(42),n(68),n(90),n(105),n(32),n(64);var r,o=n(20),l=n(16),d=n(10),c=n.n(d),m=n(88),h=n(18),v=(n(24),n(776)),f=n(273),_=n(781),w=n(713);!function(e){e.REMOVE_CONFIRMATION="removeConfirmation"}(r||(r={}));var R,y=Object(o.b)({name:"TriggersPhoneSettings",components:{TriggersSettingsRename:_.a,TriggersSettingsRemove:w.a},props:{trigger:{type:Object,required:!0},remoteFormSubmit:{type:Boolean,default:!1},remoteFormResult:{type:String,default:l.g.NONE},remoteFormReset:{type:Boolean,default:!1}},setup:function(e,t){var n=Object(o.l)(),d=n.app.i18n,m=n.$flashMessage,v=Object(o.j)(!1),_=Object(o.j)(l.g.NONE),w=Object(o.j)(!1),R=Object(o.j)(!1),y=Object(o.i)({removeConfirmation:{opened:!1}}),form=Object(o.i)({model:{enabled:e.trigger.enabled}});function T(e){y[e].opened=!1}return Object(o.g)((function(){R.value=!0})),Object(o.p)((function(){return v.value}),(function(e){R.value&&t.emit("update:remoteFormSubmit",e)})),Object(o.p)((function(){return _.value}),(function(e){R.value&&t.emit("update:remoteFormResult",e)})),Object(o.p)((function(){return w.value}),(function(e){R.value&&t.emit("update:remoteFormReset",e)})),Object(o.p)((function(){return e.remoteFormSubmit}),(function(e){R.value&&(v.value=e)})),Object(o.p)((function(){return e.remoteFormResult}),(function(e){R.value&&(_.value=e)})),Object(o.p)((function(){return e.remoteFormReset}),(function(t){R.value&&(w.value=t,t&&(form.model.enabled=e.trigger.enabled))})),{reRemoteFormSubmit:v,reRemoteFormResult:_,reRemoteFormReset:w,windowScreen:y,form:form,handleToggleState:function(){form.model.enabled=!form.model.enabled;var t=d.t("triggers.messages.triggerNotUpdated",{trigger:e.trigger.name}).toString();h.a.edit(e.trigger,{enabled:!e.trigger.enabled}).catch((function(e){null!==c()(e,"exception",null)?m.exception(e.exception,t):m.error(t)}))},handleOpenWindow:function(e){y[e].opened=!0},handleCloseWindow:T,handleRemoved:function(){T(r.REMOVE_CONFIRMATION),t.emit("removed")},windowScreenTypes:r,sizeTypes:l.J,listItemTypes:f.a,switchVariantTypes:l.lb}}}),T=(n(899),n(58)),O=Object(T.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fb-triggers-phone-settings__container"},[n("h3",{staticClass:"fb-triggers-phone-settings__heading"},[e._v("\n    "+e._s(e.$t("triggers.headings.aboutTrigger"))+"\n  ")]),e._v(" "),n("fb-ui-content",{attrs:{ph:e.sizeTypes.SMALL,pv:e.sizeTypes.SMALL}},[n("triggers-settings-rename",{attrs:{trigger:e.trigger,"remote-form-submit":e.reRemoteFormSubmit,"remote-form-result":e.reRemoteFormResult,"remote-form-reset":e.reRemoteFormReset},on:{"update:remoteFormSubmit":function(t){e.reRemoteFormSubmit=t},"update:remote-form-submit":function(t){e.reRemoteFormSubmit=t},"update:remoteFormResult":function(t){e.reRemoteFormResult=t},"update:remote-form-result":function(t){e.reRemoteFormResult=t},"update:remoteFormReset":function(t){e.reRemoteFormReset=t},"update:remote-form-reset":function(t){e.reRemoteFormReset=t}}})],1),e._v(" "),n("fb-ui-items-container",[n("template",{slot:"heading"},[e._v("\n      "+e._s(e.$t("triggers.headings.generalSettings"))+"\n    ")]),e._v(" "),n("list-item",{staticClass:"fb-triggers-phone-settings__item fb-triggers-phone-settings__item-action",attrs:{variant:e.listItemTypes.DEFAULT}},[n("fb-ui-switch-element",{ref:"enabled",attrs:{slot:"detail",status:e.form.model.enabled,variant:e.switchVariantTypes.PRIMARY},on:{change:e.handleToggleState},slot:"detail"}),e._v(" "),e.trigger.enabled?n("template",{slot:"heading"},[e._v("\n        "+e._s(e.$t("triggers.buttons.triggerEnabled.title"))+"\n      ")]):n("template",{slot:"heading"},[e._v("\n        "+e._s(e.$t("triggers.buttons.triggerDisabled.title"))+"\n      ")])],2),e._v(" "),n("list-item",{staticClass:"fb-triggers-phone-settings__item fb-triggers-phone-settings__item-remove",attrs:{variant:e.listItemTypes.DEFAULT},on:{click:function(t){return e.handleOpenWindow(e.windowScreenTypes.REMOVE_CONFIRMATION)}}},[n("template",{slot:"heading"},[e._v("\n        "+e._s(e.$t("triggers.buttons.removeTrigger.title"))+"\n      ")])],2)],2),e._v(" "),e.windowScreen.removeConfirmation.opened?n("triggers-settings-remove",{attrs:{trigger:e.trigger,"transparent-bg":!1},on:{close:function(t){return e.handleCloseWindow(e.windowScreenTypes.REMOVE_CONFIRMATION)},removed:e.handleRemoved}}):e._e()],1)}),[],!1,null,null,null).exports;!function(e){e.DETAIL="detail",e.SETTINGS="settings"}(R||(R={}));var L=Object(o.b)({name:"TriggerDetailPage",components:{TriggersDetail:v.a,TriggerSettings:O},validate:function(e){var t=e.app,n=e.params;return t.$validateUUID(n.id)},transition:"fade",setup:function(){var e=Object(o.l)(),t=e.app.i18n,n=e.store,r=e.localePath,d=e.$routes,v=e.$validateUUID,f=e.error,_=e.$bus,w=Object(o.n)(),y=Object(o.o)();v(w.value.params.id)||f({statusCode:404,message:"Trigger Not Found"});var view=Object(o.i)({detail:{opened:!w.value.hash.includes(m.u)},settings:{opened:w.value.hash.includes(m.u)}}),T=Object(o.j)(null),O=Object(o.j)(null),L=Object(o.j)(!1),S=Object(o.a)((function(){return n.state.app.windowSize})),$=Object(o.a)((function(){return h.a.query().with("trigger").with("actions").with("actions.rows").with("actions.rows.action").with("conditions").with("conditions.rows").with("conditions.rows.condition").with("schedule").with("schedule.condition").where("id",w.value.params.id).first()})),F=Object(o.a)((function(){return h.a.getters("fetching")()})),j=Object(o.a)((function(){return h.a.getters("getting")(w.value.params.id)})),E=Object(o.a)((function(){return F.value||j.value||null===$.value})),A=Object(o.j)(!1),x=Object(o.j)(l.g.NONE),C=Object(o.j)(!1);function I(e){switch(e){case R.DETAIL:y.push(r({name:d.triggers.list}));break;case R.SETTINGS:view.detail.opened=!0,Object(o.d)((function(){view.settings.opened=!1,y.push(r({name:d.triggers.detail,params:{id:w.value.params.id}}))}))}}return Object(o.e)((function(){0!==h.a.query().count()||F.value||j.value||h.a.getters("firstLoadFinished")()||h.a.get(w.value.params.id).catch((function(e){404===c()(e,"exception.response.status",0)?f({statusCode:404,message:"Trigger Not Found"}):f({statusCode:503,message:"Something went wrong"})})),j.value||null!==$.value||f({statusCode:404,message:"Trigger Not Found"})})),Object(o.g)((function(){L.value=!0,_.$emit("wait-page_reloading",!1)})),Object(o.p)((function(){return S.value}),(function(e){e!==l.J.EXTRA_SMALL&&L.value&&y.push(r({name:d.triggers.list,hash:"".concat(m.t,"-").concat(w.value.params.id)}))})),Object(o.p)((function(){return j.value}),(function(e){!e&&null===$.value&&L.value&&f({statusCode:404,message:"Trigger Not Found"})})),Object(o.p)((function(){return $.value}),(function(e){null!==e&&n.dispatch("app/setHeading",{heading:e.name,subHeading:e.description,icon:$.value?$.value.icon:null},{root:!0})})),Object(o.p)((function(){return x.value}),(function(e){e===l.g.WORKING&&L.value&&I(R.SETTINGS)})),Object(o.m)((function(){return{title:t.t("meta.triggers.detail.title",{trigger:c()($.value,"name")}).toString()}})),{id:w.value.params.id,view:view,isMounted:L,windowSize:S,trigger:$,isLoading:E,fetchingTriggers:F,fetchingTrigger:j,detailComponent:T,settingsComponent:O,remoteFormSubmit:A,remoteFormResult:x,remoteFormReset:C,handleOpenView:function(e){switch(e){case R.DETAIL:break;case R.SETTINGS:view.detail.opened=!1,C.value=!0,Object(o.d)((function(){view.settings.opened=!0,y.push(r({name:d.triggers.detail,params:{id:w.value.params.id},hash:m.u}))}))}},handleCloseView:I,handleSubmitUpdate:function(){A.value=!0},handleTriggerRemoved:function(){y.push(r(d.triggers.list))},viewTypes:R,menuItemTypes:l.I}},head:{},meta:{hideTabs:!0}}),S=(n(901),Object(T.a)(L,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["fb-triggers-detail-view__container",{"fb-triggers-detail-view__container-loading":e.isLoading}]},[n("client-only",[e.isLoading?n("fb-ui-loading-box",{staticClass:"fb-triggers-detail-view__loading"},[n("p",[e._v("\n        "+e._s(e.$t("triggers.texts.loadingTrigger"))+"\n      ")])]):[e.view.settings.opened?e._e():n("fb-layout-header-button",{attrs:{type:e.menuItemTypes.BUTTON,small:"",left:""},on:{click:function(t){return e.handleCloseView(e.viewTypes.DETAIL)}}},[n("template",{slot:"icon"},[n("font-awesome-icon",{attrs:{icon:"angle-left"}})],1)],2),e._v(" "),e.view.settings.opened?n("fb-layout-header-button",{attrs:{label:e.$t("application.buttons.cancel.title"),type:e.menuItemTypes.BUTTON,small:"",left:""},on:{click:function(t){return e.handleCloseView(e.viewTypes.SETTINGS)}}}):e._e(),e._v(" "),e.view.settings.opened?e._e():n("fb-layout-header-button",{attrs:{label:e.$t("application.buttons.edit.title"),type:e.menuItemTypes.BUTTON,small:"",right:""},on:{click:function(t){return e.handleOpenView(e.viewTypes.SETTINGS)}}}),e._v(" "),e.view.settings.opened?n("fb-layout-header-button",{attrs:{label:e.$t("application.buttons.done.title"),type:e.menuItemTypes.BUTTON,small:"",right:""},on:{click:e.handleSubmitUpdate}}):e._e(),e._v(" "),n("fb-layout-header-spacer",{attrs:{small:""}}),e._v(" "),n("expandable-box",{attrs:{show:e.view.detail.opened}},[n("triggers-detail",{attrs:{trigger:e.trigger}})],1),e._v(" "),n("expandable-box",{attrs:{show:e.view.settings.opened}},[n("trigger-settings",{staticClass:"fb-triggers-detail-view__container-settings",attrs:{trigger:e.trigger,"remote-form-submit":e.remoteFormSubmit,"remote-form-result":e.remoteFormResult,"remote-form-reset":e.remoteFormReset},on:{"update:remoteFormSubmit":function(t){e.remoteFormSubmit=t},"update:remote-form-submit":function(t){e.remoteFormSubmit=t},"update:remoteFormResult":function(t){e.remoteFormResult=t},"update:remote-form-result":function(t){e.remoteFormResult=t},"update:remoteFormReset":function(t){e.remoteFormReset=t},"update:remote-form-reset":function(t){e.remoteFormReset=t},removed:e.handleTriggerRemoved}})],1)],e._v(" "),n("fb-ui-loading-box",{staticClass:"fb-triggers-list-view__loading",attrs:{slot:"placeholder"},slot:"placeholder"},[n("p",[e._v("\n        "+e._s(e.$t("triggers.texts.loadingTrigger"))+"\n      ")])])],2)],1)}),[],!1,null,null,null));t.default=S.exports}}]);