"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);var _mithrilSlider=require("mithril-slider");var _mithrilSlider2=_interopRequireDefault(_mithrilSlider);var _appAppCommon=require("app/app/common");var _appAppCommon2=_interopRequireDefault(_appAppCommon);var _appPreloaderPreloader=require("app/preloader/preloader");var _appPreloaderPreloader2=_interopRequireDefault(_appPreloaderPreloader);var _appAppGithub=require("app/app/github");var _appAppGithub2=_interopRequireDefault(_appAppGithub);require("app/app/common.css!");require("./controls.css!");var createPage=function createPage(opts){var currentIndex=opts.currentIndex;var listIndex=opts.listIndex;var data=opts.data;var inRange=Math.abs(currentIndex-listIndex)<2;var content=inRange?(0,_mithril2["default"])(".image-container",[(0,_mithril2["default"])(".image",{config:function config(el,inited){if(inited){return}_appAppCommon2["default"].fadeInImage(el,data)}}),_appPreloaderPreloader2["default"]]):null;return(0,_mithril2["default"])(".page",content)};var example={};example.controller=function(){return{sliderController:_mithril2["default"].prop(),isEditing:_mithril2["default"].prop(false)}};example.view=function(ctrl){var sliderController=ctrl.sliderController();var mySlider=_mithril2["default"].component(_mithrilSlider2["default"],{pageData:_appAppCommon2["default"].getPageData,page:createPage,sliderController:ctrl.sliderController,"class":"example controls"});var sliderControls=sliderController?(0,_mithril2["default"])(".slider-controls.slider-controls-controls",[(0,_mithril2["default"])("input.goto",{value:ctrl.isEditing()?"":sliderController.index(),oninput:function oninput(e){ctrl.isEditing(true);var idx=parseInt(e.target.value,10);if(!isNaN(idx)){sliderController.goTo(idx,0);ctrl.isEditing(false)}}}),(0,_mithril2["default"])("a.prev",{"class":sliderController.hasPrevious()?"enabled":"",onclick:function onclick(){return sliderController.goPrevious()}},"Previous"),(0,_mithril2["default"])("a.next",{"class":sliderController.hasNext()?"enabled":"",onclick:function onclick(){return sliderController.goNext()}},"Next")]):null;return[mySlider,sliderControls,_appAppGithub2["default"]]};exports["default"]=example;module.exports=exports["default"];