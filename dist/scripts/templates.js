angular.module('tink.accordion').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/tinkAccordionPanel.html',
    "<section class=accordion-panel> <a href class=accordion-toggle ng-click=toggleOpen()> <div class=accordion-panel-heading> <span class=panel-title></span> </div> </a> <div class=accordion-panel-body data-ng-class=\"{'has-no-padding': hasPadding === 'false'}\"> <div class=accordion-loaded-content> </div> </div> </section>"
  );

}]);
