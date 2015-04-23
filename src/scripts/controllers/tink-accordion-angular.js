'use strict';
(function(module) {
  try {
    module = angular.module('tink.accordion');
  } catch (e) {
    module = angular.module('tink.accordion', ['tink.tinkApi']);
  }
  module.controller('TinkAccordionController', [function () {
    var self = this;

    this.groups = {};

    this.init = function(accordion,element,opts){
     self.$accordion = accordion;
     self.$options = opts;
     self.$accordion.init(element);
   };

   var currentOpen;
   this.addGroup = function(scope,elem){
    self.$accordion.addGroup(elem);
    if(self.$options.startOpen && scope.isCollapsed !== true){
      scope.open();
    }else if(scope.isCollapsed === false){
      scope.open();
    }
  };

  this.addLoader = function(elem){
    currentOpen = elem;
    self.$accordion.addLoader(elem);
  };

  this.openGroup = function(elem,scope){
    if(self.$options.oneAtATime && currentOpen && currentOpen !== scope){
      currentOpen.toggleOpen();
    }
    currentOpen = scope;
    self.$accordion.openGroup(elem);
  };

  this.closeGroup = function(elem){
    self.$accordion.closeGroup(elem);
    currentOpen = null;
  };

  }]);
})();