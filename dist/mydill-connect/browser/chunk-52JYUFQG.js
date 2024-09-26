import{$ as ce,B as a,C as E,D as d,F as X,H as Y,M as C,W as f,_ as ue,a as se,aa as J,ba as K,c as oe,ca as de,d as ae,g as x,h,ha as he,i as $,j as W,k as v,l as q,n as A,p as z,q as u,s as Z,v as _,w as M,x as F,y as le}from"./chunk-M3KYB34F.js";import{a as m,b as y}from"./chunk-TMC7WMLO.js";var Ve=(()=>{class i{constructor(e,n){this._renderer=e,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static{this.\u0275fac=function(n){return new(n||i)(a(E),a(M))}}static{this.\u0275dir=u({type:i})}}return i})(),U=(()=>{class i extends Ve{static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=_(i)))(r||i)}})()}static{this.\u0275dir=u({type:i,features:[d]})}}return i})(),O=new v(""),Ue={provide:O,useExisting:h(()=>Be),multi:!0},Be=(()=>{class i extends U{writeValue(e){this.setProperty("checked",e)}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=_(i)))(r||i)}})()}static{this.\u0275dir=u({type:i,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(n,r){n&1&&C("change",function(o){return r.onChange(o.target.checked)})("blur",function(){return r.onTouched()})},features:[f([Ue]),d]})}}return i})(),He={provide:O,useExisting:h(()=>De),multi:!0};function Le(){let i=K()?K().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var $e=new v(""),De=(()=>{class i extends Ve{constructor(e,n,r){super(e,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Le())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static{this.\u0275fac=function(n){return new(n||i)(a(E),a(M),a($e,8))}}static{this.\u0275dir=u({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&C("input",function(o){return r._handleInput(o.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(o){return r._compositionEnd(o.target.value)})},features:[f([He]),d]})}}return i})();function be(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}var B=new v(""),Ae=new v("");function We(i){return be(i.value)?{required:!0}:null}function qe(i){if(!i)return Q;let t,e;return typeof i=="string"?(e="",i.charAt(0)!=="^"&&(e+="^"),e+=i,i.charAt(i.length-1)!=="$"&&(e+="$"),t=new RegExp(e)):(e=i.toString(),t=i),n=>{if(be(n.value))return null;let r=n.value;return t.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Q(i){return null}function Me(i){return i!=null}function Fe(i){return ue(i)?se(i):i}function Ee(i){let t={};return i.forEach(e=>{t=e!=null?m(m({},t),e):t}),Object.keys(t).length===0?null:t}function we(i,t){return t.map(e=>e(i))}function ze(i){return!i.validate}function Ie(i){return i.map(t=>ze(t)?t:e=>t.validate(e))}function Ze(i){if(!i)return null;let t=i.filter(Me);return t.length==0?null:function(e){return Ee(we(e,t))}}function te(i){return i!=null?Ze(Ie(i)):null}function Xe(i){if(!i)return null;let t=i.filter(Me);return t.length==0?null:function(e){let n=we(e,t).map(Fe);return ae(n).pipe(oe(Ee))}}function ie(i){return i!=null?Xe(Ie(i)):null}function fe(i,t){return i===null?[t]:Array.isArray(i)?[...i,t]:[i,t]}function Ye(i){return i._rawValidators}function Je(i){return i._rawAsyncValidators}function ee(i){return i?Array.isArray(i)?i:[i]:[]}function k(i,t){return Array.isArray(i)?i.includes(t):i===t}function pe(i,t){let e=ee(t);return ee(i).forEach(r=>{k(e,r)||e.push(r)}),e}function ge(i,t){return ee(t).filter(e=>!k(i,e))}var G=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=te(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=ie(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}},D=class extends G{get formDirective(){return null}get path(){return null}},S=class extends G{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},T=class{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Ke={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Wt=y(m({},Ke),{"[class.ng-submitted]":"isSubmitted"}),qt=(()=>{class i extends T{constructor(e){super(e)}static{this.\u0275fac=function(n){return new(n||i)(a(S,2))}}static{this.\u0275dir=u({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&Y("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[d]})}}return i})(),zt=(()=>{class i extends T{constructor(e){super(e)}static{this.\u0275fac=function(n){return new(n||i)(a(D,10))}}static{this.\u0275dir=u({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&Y("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[d]})}}return i})();var w="VALID",P="INVALID",V="PENDING",I="DISABLED";function Ne(i){return(H(i)?i.validators:i)||null}function Qe(i){return Array.isArray(i)?te(i):i||null}function Se(i,t){return(H(t)?t.asyncValidators:i)||null}function et(i){return Array.isArray(i)?ie(i):i||null}function H(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function tt(i,t,e){let n=i.controls;if(!(t?Object.keys(n):n).length)throw new x(1e3,"");if(!n[e])throw new x(1001,"")}function it(i,t,e){i._forEachChild((n,r)=>{if(e[r]===void 0)throw new x(1002,"")})}var j=class{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===w}get invalid(){return this.status===P}get pending(){return this.status==V}get disabled(){return this.status===I}get enabled(){return this.status!==I}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(pe(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(pe(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(ge(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(ge(t,this._rawAsyncValidators))}hasValidator(t){return k(this._rawValidators,t)}hasAsyncValidator(t){return k(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=V,t.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=I,this.errors=null,this._forEachChild(n=>{n.disable(y(m({},t),{onlySelf:!0}))}),this._updateValue(),t.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(y(m({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(n=>n(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=w,this._forEachChild(n=>{n.enable(y(m({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(y(m({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===w||this.status===V)&&this._runAsyncValidator(t.emitEvent)),t.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?I:w}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator=!0;let e=Fe(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,r)=>n&&n._find(r),this)}getError(t,e){let n=e?this.get(e):this;return n&&n.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new F,this.statusChanges=new F}_calculateStatus(){return this._allControlsDisabled()?I:this.errors?P:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(P)?P:w}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){H(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){let e=this._parent&&this._parent.dirty;return!t&&!!e&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=Qe(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=et(this._rawAsyncValidators)}},R=class extends j{constructor(t,e,n){super(Ne(e),Se(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,n={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,n={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){it(this,!0,t),Object.keys(t).forEach(n=>{tt(this,!0,n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(n=>{let r=this.controls[n];r&&r.patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((n,r)=>{n.reset(t?t[r]:null,{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&t(n,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&t(n))return!0;return!1}_reduceValue(){let t={};return this._reduceChildren(t,(e,n,r)=>((n.enabled||this.disabled)&&(e[r]=n.value),e))}_reduceChildren(t,e){let n=t;return this._forEachChild((r,s)=>{n=e(n,r,s)}),n}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}};var ne=new v("CallSetDisabledState",{providedIn:"root",factory:()=>re}),re="always";function nt(i,t){return[...t.path,i]}function Oe(i,t,e=re){xe(i,t),t.valueAccessor.writeValue(i.value),(i.disabled||e==="always")&&t.valueAccessor.setDisabledState?.(i.disabled),st(i,t),at(i,t),ot(i,t),rt(i,t)}function me(i,t){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function rt(i,t){if(t.valueAccessor.setDisabledState){let e=n=>{t.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(e),t._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e)})}}function xe(i,t){let e=Ye(i);t.validator!==null?i.setValidators(fe(e,t.validator)):typeof e=="function"&&i.setValidators([e]);let n=Je(i);t.asyncValidator!==null?i.setAsyncValidators(fe(n,t.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();me(t._rawValidators,r),me(t._rawAsyncValidators,r)}function st(i,t){t.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Pe(i,t)})}function ot(i,t){t.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Pe(i,t),i.updateOn!=="submit"&&i.markAsTouched()})}function Pe(i,t){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function at(i,t){let e=(n,r)=>{t.valueAccessor.writeValue(n),r&&t.viewToModelUpdate(n)};i.registerOnChange(e),t._registerOnDestroy(()=>{i._unregisterOnChange(e)})}function lt(i,t){i==null,xe(i,t)}function ut(i,t){if(!i.hasOwnProperty("model"))return!1;let e=i.model;return e.isFirstChange()?!0:!Object.is(t,e.currentValue)}function ct(i){return Object.getPrototypeOf(i.constructor)===U}function dt(i,t){i._syncPendingControls(),t.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function ht(i,t){if(!t)return null;Array.isArray(t);let e,n,r;return t.forEach(s=>{s.constructor===De?e=s:ct(s)?n=s:r=s}),r||n||e||null}var ft={provide:D,useExisting:h(()=>pt)},N=Promise.resolve(),pt=(()=>{class i extends D{constructor(e,n,r){super(),this.callSetDisabledState=r,this.submitted=!1,this._directives=new Set,this.ngSubmit=new F,this.form=new R({},te(e),ie(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){N.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),Oe(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){N.then(()=>{let n=this._findContainer(e.path);n&&n.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){N.then(()=>{let n=this._findContainer(e.path),r=new R({});lt(r,e),n.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){N.then(()=>{let n=this._findContainer(e.path);n&&n.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){N.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submitted=!0,dt(this.form,this._directives),this.ngSubmit.emit(e),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static{this.\u0275fac=function(n){return new(n||i)(a(B,10),a(Ae,10),a(ne,8))}}static{this.\u0275dir=u({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&C("submit",function(o){return r.onSubmit(o)})("reset",function(){return r.onReset()})},inputs:{options:[A.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[f([ft]),d]})}}return i})();function _e(i,t){let e=i.indexOf(t);e>-1&&i.splice(e,1)}function ye(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var gt=class extends j{constructor(t=null,e,n){super(Ne(e),Se(n,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),H(e)&&(e.nonNullable||e.initialValueIsDefault)&&(ye(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){_e(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){_e(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){ye(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var mt={provide:S,useExisting:h(()=>_t)},ve=Promise.resolve(),_t=(()=>{class i extends S{constructor(e,n,r,s,o,l){super(),this._changeDetectorRef=o,this.callSetDisabledState=l,this.control=new gt,this._registered=!1,this.name="",this.update=new F,this._parent=e,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=ht(this,s)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),ut(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Oe(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){ve.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,r=n!==0&&J(n);ve.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?nt(e,this._parent):[e]}static{this.\u0275fac=function(n){return new(n||i)(a(D,9),a(B,10),a(Ae,10),a(O,10),a(ce,8),a(ne,8))}}static{this.\u0275dir=u({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[A.None,"disabled","isDisabled"],model:[A.None,"ngModel","model"],options:[A.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[f([mt]),d,Z]})}}return i})(),Xt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=u({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return i})();var yt={provide:O,useExisting:h(()=>Ge),multi:!0};function ke(i,t){return i==null?`${t}`:(t&&typeof t=="object"&&(t="Object"),`${i}: ${t}`.slice(0,50))}function vt(i){return i.split(":")[0]}var Ge=(()=>{class i extends U{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){this.value=e;let n=this._getOptionId(e),r=ke(n,e);this.setProperty("value",r)}registerOnChange(e){this.onChange=n=>{this.value=this._getOptionValue(n),e(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n),e))return n;return null}_getOptionValue(e){let n=vt(e);return this._optionMap.has(n)?this._optionMap.get(n):e}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=_(i)))(r||i)}})()}static{this.\u0275dir=u({type:i,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(n,r){n&1&&C("change",function(o){return r.onChange(o.target.value)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},features:[f([yt]),d]})}}return i})(),Yt=(()=>{class i{constructor(e,n,r){this._element=e,this._renderer=n,this._select=r,this._select&&(this.id=this._select._registerOption())}set ngValue(e){this._select!=null&&(this._select._optionMap.set(this.id,e),this._setElementValue(ke(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._setElementValue(e),this._select&&this._select.writeValue(this._select.value)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static{this.\u0275fac=function(n){return new(n||i)(a(M),a(E),a(Ge,9))}}static{this.\u0275dir=u({type:i,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}})}}return i})(),Ct={provide:O,useExisting:h(()=>Te),multi:!0};function Ce(i,t){return i==null?`${t}`:(typeof t=="string"&&(t=`'${t}'`),t&&typeof t=="object"&&(t="Object"),`${i}: ${t}`.slice(0,50))}function Vt(i){return i.split(":")[0]}var Te=(()=>{class i extends U{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){this.value=e;let n;if(Array.isArray(e)){let r=e.map(s=>this._getOptionId(s));n=(s,o)=>{s._setSelected(r.indexOf(o.toString())>-1)}}else n=(r,s)=>{r._setSelected(!1)};this._optionMap.forEach(n)}registerOnChange(e){this.onChange=n=>{let r=[],s=n.selectedOptions;if(s!==void 0){let o=s;for(let l=0;l<o.length;l++){let p=o[l],b=this._getOptionValue(p.value);r.push(b)}}else{let o=n.options;for(let l=0;l<o.length;l++){let p=o[l];if(p.selected){let b=this._getOptionValue(p.value);r.push(b)}}}this.value=r,e(r)}}_registerOption(e){let n=(this._idCounter++).toString();return this._optionMap.set(n,e),n}_getOptionId(e){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n)._value,e))return n;return null}_getOptionValue(e){let n=Vt(e);return this._optionMap.has(n)?this._optionMap.get(n)._value:e}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=_(i)))(r||i)}})()}static{this.\u0275dir=u({type:i,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(n,r){n&1&&C("change",function(o){return r.onChange(o.target)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},features:[f([Ct]),d]})}}return i})(),Jt=(()=>{class i{constructor(e,n,r){this._element=e,this._renderer=n,this._select=r,this._select&&(this.id=this._select._registerOption(this))}set ngValue(e){this._select!=null&&(this._value=e,this._setElementValue(Ce(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._select?(this._value=e,this._setElementValue(Ce(this.id,e)),this._select.writeValue(this._select.value)):this._setElementValue(e)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}_setSelected(e){this._renderer.setProperty(this._element.nativeElement,"selected",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static{this.\u0275fac=function(n){return new(n||i)(a(M),a(E),a(Te,9))}}static{this.\u0275dir=u({type:i,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}})}}return i})();var je=(()=>{class i{constructor(){this._validator=Q}ngOnChanges(e){if(this.inputName in e){let n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):Q,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=u({type:i,features:[Z]})}}return i})();var Dt={provide:B,useExisting:h(()=>bt),multi:!0};var bt=(()=>{class i extends je{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=J,this.createValidator=e=>We}enabled(e){return e}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=_(i)))(r||i)}})()}static{this.\u0275dir=u({type:i,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,r){n&2&&X("required",r._enabled?"":null)},inputs:{required:"required"},features:[f([Dt]),d]})}}return i})();var At={provide:B,useExisting:h(()=>Mt),multi:!0},Mt=(()=>{class i extends je{constructor(){super(...arguments),this.inputName="pattern",this.normalizeInput=e=>e,this.createValidator=e=>qe(e)}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=_(i)))(r||i)}})()}static{this.\u0275dir=u({type:i,selectors:[["","pattern","","formControlName",""],["","pattern","","formControl",""],["","pattern","","ngModel",""]],hostVars:1,hostBindings:function(n,r){n&2&&X("pattern",r._enabled?r.pattern:null)},inputs:{pattern:"pattern"},features:[f([At]),d]})}}return i})();var Ft=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=z({type:i})}static{this.\u0275inj=W({})}}return i})();var Kt=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:ne,useValue:e.callSetDisabledState??re}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=z({type:i})}static{this.\u0275inj=W({imports:[Ft]})}}return i})();var si=(()=>{class i{constructor(e,n){this.document=e,this.platformId=n,this.documentIsAccessible=he(this.platformId)}static getCookieRegExp(e){let n=e.replace(/([\[\]{}()|=;+?,.*^$])/gi,"\\$1");return new RegExp("(?:^"+n+"|;\\s*"+n+")=(.*?)(?:;|$)","g")}static safeDecodeURIComponent(e){try{return decodeURIComponent(e)}catch{return e}}check(e){return this.documentIsAccessible?(e=encodeURIComponent(e),i.getCookieRegExp(e).test(this.document.cookie)):!1}get(e){if(this.documentIsAccessible&&this.check(e)){e=encodeURIComponent(e);let r=i.getCookieRegExp(e).exec(this.document.cookie);return r[1]?i.safeDecodeURIComponent(r[1]):""}else return""}getAll(){if(!this.documentIsAccessible)return{};let e={},n=this.document;return n.cookie&&n.cookie!==""&&n.cookie.split(";").forEach(r=>{let[s,o]=r.split("=");e[i.safeDecodeURIComponent(s.replace(/^ /,""))]=i.safeDecodeURIComponent(o)}),e}set(e,n,r,s,o,l,p,b){if(!this.documentIsAccessible)return;if(typeof r=="number"||r instanceof Date||s||o||l||p){let L={expires:r,path:s,domain:o,secure:l,sameSite:p||"Lax",partitioned:b};this.set(e,n,L);return}let g=encodeURIComponent(e)+"="+encodeURIComponent(n)+";",c=r||{};if(c.expires)if(typeof c.expires=="number"){let L=new Date(new Date().getTime()+c.expires*1e3*60*60*24);g+="expires="+L.toUTCString()+";"}else g+="expires="+c.expires.toUTCString()+";";c.path&&(g+="path="+c.path+";"),c.domain&&(g+="domain="+c.domain+";"),c.secure===!1&&c.sameSite==="None"&&(c.secure=!0,console.warn(`[ngx-cookie-service] Cookie ${e} was forced with secure flag because sameSite=None.More details : https://github.com/stevermeister/ngx-cookie-service/issues/86#issuecomment-597720130`)),c.secure&&(g+="secure;"),c.sameSite||(c.sameSite="Lax"),g+="sameSite="+c.sameSite+";",c.partitioned&&(g+="Partitioned;"),this.document.cookie=g}delete(e,n,r,s,o="Lax"){if(!this.documentIsAccessible)return;let l=new Date("Thu, 01 Jan 1970 00:00:01 GMT");this.set(e,"",{expires:l,path:n,domain:r,secure:s,sameSite:o})}deleteAll(e,n,r,s="Lax"){if(!this.documentIsAccessible)return;let o=this.getAll();for(let l in o)o.hasOwnProperty(l)&&this.delete(l,e,n,r,s)}static{this.\u0275fac=function(n){return new(n||i)(q(de),q(le))}}static{this.\u0275prov=$({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();export{Be as a,De as b,qt as c,zt as d,pt as e,_t as f,Xt as g,Ge as h,Yt as i,Jt as j,bt as k,Mt as l,Kt as m,si as n};
