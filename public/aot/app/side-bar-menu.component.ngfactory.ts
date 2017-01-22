/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../app/side-bar-menu.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../app/history.component';
import * as import10 from './history.component.ngfactory';
import * as import11 from '../../app/filter-list.component';
import * as import12 from './filter-list.component.ngfactory';
export class Wrapper_SideBarMenuComponent {
  /*private*/ _eventHandler:Function;
  context:import0.SideBarMenuComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor() {
    this._changed = false;
    this.context = new import0.SideBarMenuComponent();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_listResult(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.listResult = currValue;
      this._expr_0 = currValue;
    }
  }
  check_history(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.history = currValue;
      this._expr_1 = currValue;
    }
  }
  check_word(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.word = currValue;
      this._expr_2 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_SideBarMenuComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_SideBarMenuComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.SideBarMenuComponent>;
  _SideBarMenuComponent_0_3:Wrapper_SideBarMenuComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SideBarMenuComponent_Host0,renderType_SideBarMenuComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'side-bar-menu',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_SideBarMenuComponent0(this.viewUtils,this,0,this._el_0);
    this._SideBarMenuComponent_0_3 = new Wrapper_SideBarMenuComponent();
    this.compView_0.create(this._SideBarMenuComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._SideBarMenuComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.SideBarMenuComponent) && (0 === requestNodeIndex))) { return this._SideBarMenuComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._SideBarMenuComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const SideBarMenuComponentNgFactory:import8.ComponentFactory<import0.SideBarMenuComponent> = new import8.ComponentFactory<import0.SideBarMenuComponent>('side-bar-menu',View_SideBarMenuComponent_Host0,import0.SideBarMenuComponent);
const styles_SideBarMenuComponent:any[] = [''];
var renderType_SideBarMenuComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.Emulated,styles_SideBarMenuComponent,{});
export class View_SideBarMenuComponent0 extends import2.AppView<import0.SideBarMenuComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _text_14:any;
  _el_15:any;
  _text_16:any;
  _el_17:any;
  _text_18:any;
  _el_19:any;
  _text_20:any;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _el_24:any;
  compView_24:import2.AppView<import9.Historique>;
  _Historique_24_3:import10.Wrapper_Historique;
  _text_25:any;
  _el_26:any;
  compView_26:import2.AppView<import11.FilterListComponent>;
  _FilterListComponent_26_3:import12.Wrapper_FilterListComponent;
  _text_27:any;
  _text_28:any;
  _text_29:any;
  _text_30:any;
  _text_31:any;
  _text_32:any;
  _text_33:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SideBarMenuComponent0,renderType_SideBarMenuComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','col-md-3 left_col menu_fixed'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray4(4,'class','left_col scroll-view','style','overflow-x: hidden;'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray4(4,'class','navbar nav_title ','style','border: 0;'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_4,'a',new import3.InlineArray4(4,'class','site_title','href','/'),(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_6,'i',new import3.InlineArray2(2,'class','glyphicon glyphicon-book'),(null as any));
    this._text_8 = this.renderer.createText(this._el_6,' \n    	',(null as any));
    this._text_9 = this.renderer.createText(this._el_6,'\n      ',(null as any));
    this._text_10 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._text_11 = this.renderer.createText(this._el_2,'\n\n    ',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','clearfix'),(null as any));
    this._text_13 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_14 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_15 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray4(4,'class','main_menu_side hidden-print main_menu','id','sidebar-menu'),(null as any));
    this._text_16 = this.renderer.createText(this._el_15,'\n      ',(null as any));
    this._el_17 = import3.createRenderElement(this.renderer,this._el_15,'div',new import3.InlineArray2(2,'class','menu_section'),(null as any));
    this._text_18 = this.renderer.createText(this._el_17,'\n        ',(null as any));
    this._el_19 = import3.createRenderElement(this.renderer,this._el_17,'h3',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_20 = this.renderer.createText(this._el_19,'Options',(null as any));
    this._text_21 = this.renderer.createText(this._el_17,'\n        ',(null as any));
    this._el_22 = import3.createRenderElement(this.renderer,this._el_17,'ul',new import3.InlineArray2(2,'class','nav side-menu'),(null as any));
    this._text_23 = this.renderer.createText(this._el_22,'\n          ',(null as any));
    this._el_24 = import3.createRenderElement(this.renderer,this._el_22,'historique',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_24 = new import10.View_Historique0(this.viewUtils,this,24,this._el_24);
    this._Historique_24_3 = new import10.Wrapper_Historique();
    this.compView_24.create(this._Historique_24_3.context);
    this._text_25 = this.renderer.createText(this._el_22,'\n          ',(null as any));
    this._el_26 = import3.createRenderElement(this.renderer,this._el_22,'filter-list-component',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_26 = new import12.View_FilterListComponent0(this.viewUtils,this,26,this._el_26);
    this._FilterListComponent_26_3 = new import12.Wrapper_FilterListComponent();
    this.compView_26.create(this._FilterListComponent_26_3.context);
    this._text_27 = this.renderer.createText(this._el_22,'               \n            \n        ',(null as any));
    this._text_28 = this.renderer.createText(this._el_17,'\n      ',(null as any));
    this._text_29 = this.renderer.createText(this._el_15,'\n    ',(null as any));
    this._text_30 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_31 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._text_32 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_33 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._el_7,
      this._text_8,
      this._text_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._text_28,
      this._text_29,
      this._text_30,
      this._text_31,
      this._text_32,
      this._text_33
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.Historique) && (24 === requestNodeIndex))) { return this._Historique_24_3.context; }
    if (((token === import11.FilterListComponent) && (26 === requestNodeIndex))) { return this._FilterListComponent_26_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_24_0_0:any = this.context.history;
    this._Historique_24_3.check_history(currVal_24_0_0,throwOnChange,false);
    this._Historique_24_3.ngDoCheck(this,this._el_24,throwOnChange);
    const currVal_26_0_0:any = this.context.listResult;
    this._FilterListComponent_26_3.check_listResult(currVal_26_0_0,throwOnChange,false);
    this._FilterListComponent_26_3.ngDoCheck(this,this._el_26,throwOnChange);
    this.compView_24.internalDetectChanges(throwOnChange);
    this.compView_26.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_24.destroy();
    this.compView_26.destroy();
  }
}