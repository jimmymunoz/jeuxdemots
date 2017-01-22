/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../app/search-word-component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from 'ng2-page-scroll/src/ng2-page-scroll.service';
import * as import9 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import10 from '../../app/word.service';
import * as import11 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import12 from 'ng2-completer/services/completer-service';
import * as import13 from '@angular/http/src/http';
import * as import14 from '../../app/side-bar-menu.component';
import * as import15 from './side-bar-menu.component.ngfactory';
import * as import16 from 'ng2-completer/components/completer-cmp';
import * as import17 from '../node_modules/ng2-completer/components/completer-cmp.ngfactory';
import * as import18 from '../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import19 from '../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import20 from '../../app/list-search-result-detail-component';
import * as import21 from './list-search-result-detail-component.ngfactory';
import * as import22 from '@angular/core/src/change_detection/change_detection_util';
import * as import23 from '@angular/forms/src/directives/control_value_accessor';
import * as import24 from '@angular/forms/src/directives/ng_model';
import * as import25 from '@angular/forms/src/directives/ng_control';
import * as import26 from '@angular/forms/src/directives/ng_control_status';
export class Wrapper_SearchWordComponet {
  /*private*/ _eventHandler:Function;
  context:import0.SearchWordComponet;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any,p2:any,p3:any,p4:any,p5:any) {
    this._changed = false;
    this.context = new import0.SearchWordComponet(p0,p1,p2,p3,p4,p5);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_SearchWordComponet_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_SearchWordComponet_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.SearchWordComponet>;
  _SearchWordComponet_0_3:Wrapper_SearchWordComponet;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SearchWordComponet_Host0,renderType_SearchWordComponet_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'search-word-component',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_SearchWordComponet0(this.viewUtils,this,0,this._el_0);
    this._SearchWordComponet_0_3 = new Wrapper_SearchWordComponet(this.injectorGet(import8.PageScrollService,this.parentIndex),this.injectorGet(import9.DOCUMENT,this.parentIndex),this.injectorGet(import10.WordService,this.parentIndex),this.injectorGet(import11.DomSanitizer,this.parentIndex),this.injectorGet(import12.CompleterService,this.parentIndex),this.injectorGet(import13.Http,this.parentIndex));
    this.compView_0.create(this._SearchWordComponet_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._SearchWordComponet_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.SearchWordComponet) && (0 === requestNodeIndex))) { return this._SearchWordComponet_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._SearchWordComponet_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const SearchWordComponetNgFactory:import7.ComponentFactory<import0.SearchWordComponet> = new import7.ComponentFactory<import0.SearchWordComponet>('search-word-component',View_SearchWordComponet_Host0,import0.SearchWordComponet);
const styles_SearchWordComponet:any[] = ['ng2-auto-complete[_ngcontent-%COMP%] {\n      display: inline-block; position: relative; width: 100% !important;\n    }\n    ng2-auto-complete[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n      display: inline-block; position: relative; width: 100%;\n    }'];
var renderType_SearchWordComponet:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.Emulated,styles_SearchWordComponet,{});
export class View_SearchWordComponet0 extends import1.AppView<import0.SearchWordComponet> {
  _el_0:any;
  compView_0:import1.AppView<import14.SideBarMenuComponent>;
  _SideBarMenuComponent_0_3:import15.Wrapper_SideBarMenuComponent;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _el_18:any;
  _text_19:any;
  _el_20:any;
  _text_21:any;
  _el_22:any;
  _el_23:any;
  _text_24:any;
  _el_25:any;
  _text_26:any;
  _text_27:any;
  _text_28:any;
  _el_29:any;
  _text_30:any;
  _el_31:any;
  _text_32:any;
  _el_33:any;
  compView_33:import1.AppView<import16.CompleterCmp>;
  _CompleterCmp_33_3:import17.Wrapper_CompleterCmp;
  _NG_VALUE_ACCESSOR_33_4:any[];
  _NgModel_33_5:import18.Wrapper_NgModel;
  _NgControl_33_6:any;
  _NgControlStatus_33_7:import19.Wrapper_NgControlStatus;
  _text_34:any;
  _text_35:any;
  _el_36:any;
  _text_37:any;
  _text_38:any;
  _el_39:any;
  _el_40:any;
  _text_41:any;
  _text_42:any;
  _text_43:any;
  _text_44:any;
  _text_45:any;
  _text_46:any;
  _text_47:any;
  _text_48:any;
  _text_49:any;
  _el_50:any;
  _text_51:any;
  _el_52:any;
  compView_52:import1.AppView<import20.ListSearchResultDetailComponent>;
  _ListSearchResultDetailComponent_52_3:import21.Wrapper_ListSearchResultDetailComponent;
  _text_53:any;
  _text_54:any;
  _text_55:any;
  _text_56:any;
  _text_57:any;
  /*private*/ _expr_68:any;
  /*private*/ _expr_69:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SearchWordComponet0,renderType_SearchWordComponet,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._expr_68 = import22.UNINITIALIZED;
    this._expr_69 = import22.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'side-bar-menu',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_0 = new import15.View_SideBarMenuComponent0(this.viewUtils,this,0,this._el_0);
    this._SideBarMenuComponent_0_3 = new import15.Wrapper_SideBarMenuComponent();
    this.compView_0.create(this._SideBarMenuComponent_0_3.context);
    this._text_1 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray8(6,'class','right_col','role','main','style','min-height: 819px;'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n    ',(null as any));
    this._text_5 = this.renderer.createText(this._el_3,'\n    ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_3,'div',new import3.InlineArray4(4,'class','row tile_count','style','height: 15px;'),(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'\n\n    ',(null as any));
    this._text_8 = this.renderer.createText(this._el_3,'\n    ',(null as any));
    this._text_9 = this.renderer.createText(this._el_3,'\n    ',(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,this._el_3,'div',new import3.InlineArray2(2,'class','row tile_count main-container-jeuxdemots'),(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'\n      ',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,this._el_10,'section',new import3.InlineArray4(4,'class','search-word','id','search-word-section'),(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'\n        ',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,this._el_12,'div',new import3.InlineArray2(2,'class','col-md-12 col-xs-12'),(null as any));
    this._text_15 = this.renderer.createText(this._el_14,'\n          ',(null as any));
    this._el_16 = import3.createRenderElement(this.renderer,this._el_14,'div',new import3.InlineArray2(2,'class','x_panel-jeuxdemots'),(null as any));
    this._text_17 = this.renderer.createText(this._el_16,'\n            ',(null as any));
    this._el_18 = import3.createRenderElement(this.renderer,this._el_16,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_19 = this.renderer.createText(this._el_18,'\n                ',(null as any));
    this._el_20 = import3.createRenderElement(this.renderer,this._el_18,'div',new import3.InlineArray2(2,'class','text-center'),(null as any));
    this._text_21 = this.renderer.createText(this._el_20,'\n                  ',(null as any));
    this._el_22 = import3.createRenderElement(this.renderer,this._el_20,'h2',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_23 = import3.createRenderElement(this.renderer,this._el_22,'i',new import3.InlineArray2(2,'class','fa fa-search'),(null as any));
    this._text_24 = this.renderer.createText(this._el_22,'',(null as any));
    this._el_25 = import3.createRenderElement(this.renderer,this._el_22,'small',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_26 = this.renderer.createText(this._el_25,'',(null as any));
    this._text_27 = this.renderer.createText(this._el_20,' \n                ',(null as any));
    this._text_28 = this.renderer.createText(this._el_18,'\n                \n                ',(null as any));
    this._el_29 = import3.createRenderElement(this.renderer,this._el_18,'div',new import3.InlineArray4(4,'class','col-sm-12','style','padding-left: 0px; padding-right: 0px;'),(null as any));
    this._text_30 = this.renderer.createText(this._el_29,'\n                  ',(null as any));
    this._el_31 = import3.createRenderElement(this.renderer,this._el_29,'div',new import3.InlineArray2(2,'class','input-group'),(null as any));
    this._text_32 = this.renderer.createText(this._el_31,'\n                    ',(null as any));
    this._el_33 = import3.createRenderElement(this.renderer,this._el_31,'ng2-completer',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_33 = new import17.View_CompleterCmp0(this.viewUtils,this,33,this._el_33);
    this._CompleterCmp_33_3 = new import17.Wrapper_CompleterCmp();
    this._NG_VALUE_ACCESSOR_33_4 = [this._CompleterCmp_33_3.context];
    this._NgModel_33_5 = new import18.Wrapper_NgModel((null as any),(null as any),(null as any),this._NG_VALUE_ACCESSOR_33_4);
    this._NgControl_33_6 = this._NgModel_33_5.context;
    this._NgControlStatus_33_7 = new import19.Wrapper_NgControlStatus(this._NgControl_33_6);
    this._text_34 = this.renderer.createText((null as any),'\n                      ',(null as any));
    this.compView_33.create(this._CompleterCmp_33_3.context);
    this._text_35 = this.renderer.createText(this._el_31,'\n                    \n                    ',(null as any));
    this._el_36 = import3.createRenderElement(this.renderer,this._el_31,'span',new import3.InlineArray2(2,'class','input-group-btn'),(null as any));
    this._text_37 = this.renderer.createText(this._el_36,'\n                      ',(null as any));
    this._text_38 = this.renderer.createText(this._el_36,'\n                      ',(null as any));
    this._el_39 = import3.createRenderElement(this.renderer,this._el_36,'button',new import3.InlineArray4(4,'class','btn btn-default btn-primary','type','button'),(null as any));
    this._el_40 = import3.createRenderElement(this.renderer,this._el_39,'i',new import3.InlineArray2(2,'class','fa fa-search'),(null as any));
    this._text_41 = this.renderer.createText(this._el_39,' Chercher',(null as any));
    this._text_42 = this.renderer.createText(this._el_36,'\n                    ',(null as any));
    this._text_43 = this.renderer.createText(this._el_31,'\n                  ',(null as any));
    this._text_44 = this.renderer.createText(this._el_29,'\n                ',(null as any));
    this._text_45 = this.renderer.createText(this._el_18,'\n            ',(null as any));
    this._text_46 = this.renderer.createText(this._el_16,'\n          ',(null as any));
    this._text_47 = this.renderer.createText(this._el_14,'\n        ',(null as any));
    this._text_48 = this.renderer.createText(this._el_12,'\n      ',(null as any));
    this._text_49 = this.renderer.createText(this._el_10,'\n\n      ',(null as any));
    this._el_50 = import3.createRenderElement(this.renderer,this._el_10,'section',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_51 = this.renderer.createText(this._el_50,'\n        ',(null as any));
    this._el_52 = import3.createRenderElement(this.renderer,this._el_50,'list-search-result-detail-component',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_52 = new import21.View_ListSearchResultDetailComponent0(this.viewUtils,this,52,this._el_52);
    this._ListSearchResultDetailComponent_52_3 = new import21.Wrapper_ListSearchResultDetailComponent(this.parentView.injectorGet(import10.WordService,this.parentIndex));
    this.compView_52.create(this._ListSearchResultDetailComponent_52_3.context);
    this._text_53 = this.renderer.createText(this._el_50,'\n      ',(null as any));
    this._text_54 = this.renderer.createText(this._el_10,'\n    ',(null as any));
    this._text_55 = this.renderer.createText(this._el_3,'\n',(null as any));
    this._text_56 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._text_57 = this.renderer.createText(parentRenderNode,'\n\n  \n						\n			\n\n\n\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_33,new import3.InlineArray4(4,'ngModelChange',(null as any),'keyup',(null as any)),this.eventHandler(this.handleEvent_33));
    this._NgModel_33_5.subscribe(this,this.eventHandler(this.handleEvent_33),true);
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_39,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_39));
    var disposable_2:Function = import3.subscribeToRenderElement(this,this._el_52,new import3.InlineArray2(2,'newWord',(null as any)),this.eventHandler(this.handleEvent_52));
    this._ListSearchResultDetailComponent_52_3.subscribe(this,this.eventHandler(this.handleEvent_52),true);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._el_22,
      this._el_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._text_27,
      this._text_28,
      this._el_29,
      this._text_30,
      this._el_31,
      this._text_32,
      this._el_33,
      this._text_34,
      this._text_35,
      this._el_36,
      this._text_37,
      this._text_38,
      this._el_39,
      this._el_40,
      this._text_41,
      this._text_42,
      this._text_43,
      this._text_44,
      this._text_45,
      this._text_46,
      this._text_47,
      this._text_48,
      this._text_49,
      this._el_50,
      this._text_51,
      this._el_52,
      this._text_53,
      this._text_54,
      this._text_55,
      this._text_56,
      this._text_57
    ]
    ),[
      disposable_0,
      disposable_1,
      disposable_2
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.SideBarMenuComponent) && (0 === requestNodeIndex))) { return this._SideBarMenuComponent_0_3.context; }
    if (((token === import16.CompleterCmp) && ((33 <= requestNodeIndex) && (requestNodeIndex <= 34)))) { return this._CompleterCmp_33_3.context; }
    if (((token === import23.NG_VALUE_ACCESSOR) && ((33 <= requestNodeIndex) && (requestNodeIndex <= 34)))) { return this._NG_VALUE_ACCESSOR_33_4; }
    if (((token === import24.NgModel) && ((33 <= requestNodeIndex) && (requestNodeIndex <= 34)))) { return this._NgModel_33_5.context; }
    if (((token === import25.NgControl) && ((33 <= requestNodeIndex) && (requestNodeIndex <= 34)))) { return this._NgControl_33_6; }
    if (((token === import26.NgControlStatus) && ((33 <= requestNodeIndex) && (requestNodeIndex <= 34)))) { return this._NgControlStatus_33_7.context; }
    if (((token === import20.ListSearchResultDetailComponent) && (52 === requestNodeIndex))) { return this._ListSearchResultDetailComponent_52_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.context.resultsParent;
    this._SideBarMenuComponent_0_3.check_listResult(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.context.history;
    this._SideBarMenuComponent_0_3.check_history(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = this.context.word;
    this._SideBarMenuComponent_0_3.check_word(currVal_0_0_2,throwOnChange,false);
    this._SideBarMenuComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_33_0_0:any = this.context.dataService;
    this._CompleterCmp_33_3.check_dataService(currVal_33_0_0,throwOnChange,false);
    const currVal_33_0_1:any = 3;
    this._CompleterCmp_33_3.check_minSearchLength(currVal_33_0_1,throwOnChange,false);
    const currVal_33_0_2:any = 'Tapez un mot';
    this._CompleterCmp_33_3.check_placeholder(currVal_33_0_2,throwOnChange,false);
    const currVal_33_0_3:any = 'En cherchant';
    this._CompleterCmp_33_3.check_textSearching(currVal_33_0_3,throwOnChange,false);
    const currVal_33_0_4:any = 'Pas des resultats';
    this._CompleterCmp_33_3.check_textNoResults(currVal_33_0_4,throwOnChange,false);
    this._CompleterCmp_33_3.ngDoCheck(this,this._el_33,throwOnChange);
    const currVal_33_1_0:any = this.context.word;
    this._NgModel_33_5.check_model(currVal_33_1_0,throwOnChange,false);
    this._NgModel_33_5.ngDoCheck(this,this._el_33,throwOnChange);
    this._NgControlStatus_33_7.ngDoCheck(this,this._el_33,throwOnChange);
    const currVal_52_0_0:any = this.context.resultsParent;
    this._ListSearchResultDetailComponent_52_3.check_listResult(currVal_52_0_0,throwOnChange,false);
    const currVal_52_0_1:any = this.context.word;
    this._ListSearchResultDetailComponent_52_3.check_word(currVal_52_0_1,throwOnChange,false);
    this._ListSearchResultDetailComponent_52_3.ngDoCheck(this,this._el_52,throwOnChange);
    const currVal_68:any = import3.inlineInterpolate(1,' ',this.context.title,' ');
    if (import3.checkBinding(throwOnChange,this._expr_68,currVal_68)) {
      this.renderer.setText(this._text_24,currVal_68);
      this._expr_68 = currVal_68;
    }
    const currVal_69:any = import3.inlineInterpolate(1,'',this.context.word,'');
    if (import3.checkBinding(throwOnChange,this._expr_69,currVal_69)) {
      this.renderer.setText(this._text_26,currVal_69);
      this._expr_69 = currVal_69;
    }
    this._NgControlStatus_33_7.checkHost(this,this.compView_33,this._el_33,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
    this.compView_33.internalDetectChanges(throwOnChange);
    this.compView_52.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this.compView_33.destroy();
    this.compView_52.destroy();
    this._CompleterCmp_33_3.ngOnDestroy();
    this._NgModel_33_5.ngOnDestroy();
    this._ListSearchResultDetailComponent_52_3.ngOnDestroy();
  }
  handleEvent_33(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'ngModelChange')) {
      const pd_sub_0:any = ((<any>(this.context.word = $event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'keyup')) {
      const pd_sub_1:any = ((<any>this.context.typingEvent($event)) !== false);
      result = (pd_sub_1 && result);
    }
    return result;
  }
  handleEvent_39(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.getSearchResult()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_52(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'newWord')) {
      const pd_sub_0:any = ((<any>this.context.updateSearchResult($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}