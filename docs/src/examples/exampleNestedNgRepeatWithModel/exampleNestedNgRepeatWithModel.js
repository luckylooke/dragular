'use strict';

var NestedNgRepeatWithModelCtrl = function ($timeout, $scope, $element, dragularService) {
  $timeout(function() { // timeount due to nested ngRepeat to be ready
    var rowsContainer = $element.children().eq(0).children(),
      rows = getRows(),
      cellContainers = getCellContainers();

    dragularService.cleanEnviroment();
    dragularService(rowsContainer, {
      moves: function(el, container, handle) {
        return handle.classList.contains('row-handle');
      },
      containersModel: $scope.rows,
      nameSpace: 'rows'
    });

    var cellContainersDrake = dragularService(cellContainers, {
      moves: function(el, container, handle) {
        return handle.classList.contains('example-cell');
      },
      containersModel: getcellContainersModel(),
      nameSpace: 'cells'
    });

    $scope.addItem = function(row) {
      var item = {
        content: 'Item x' + Math.round( Math.random() * 1000 )
      }
      row.items.push( item );
    }

    $scope.removeItem = function(row, item) {
      row.items.splice( row.items.indexOf( item ), 1);
    }

    $scope.addRow = function() {
      var row = { items: [] };
      $scope.rows.push( row );
      // wait for angular to create element for added row
      $scope.$evalAsync(function() {
        // $evalAsync is probably not enough to get after the DOM creation, so timeouted :/
        $timeout(function() {
          // you can provide all containers, dragular will add just new containers
          cellContainersDrake.addContainers( getCellContainers(), getcellContainersModel());
        }, 500);
      });
    }

    $scope.removeRow = function( row, e ) {
      var cellsContainerElm = e.target.parentElement.parentElement.querySelectorAll('.container-nested')[0];
      cellContainersDrake.removeContainers( cellsContainerElm );
      $scope.rows.splice( $scope.rows.indexOf( row ), 1 );
    }

    function getRows() {
      return rowsContainer.children();
    }

    function getCellContainers() {
      var tmpContainers = [];
      rows = getRows();
      for (var i = 0; i < rows.length; i++) {
        var cellContainer = rows.eq(i).children()[1];
        if ( cellContainer ) {
          tmpContainers.push( cellContainer );
        }
      }
      return tmpContainers;
    }

    function getcellContainersModel(){
        var parent = $scope.rows,
          containersModel = [];
        for (var i = 0; i < parent.length; i++) {
          containersModel.push(parent[i].items);
        }
        return containersModel;
      }

  }, 0);

  $scope.rows = [{
    items: [{
      content: 'Item a1'
    }, {
      content: 'Item a2'
    }, {
      content: 'Item a3'
    }, {
      content: 'Item a4'
    }]
  }, {
    items: [{
      content: 'Item b1'
    }, {
      content: 'Item b2'
    }, {
      content: 'Item b3'
    }, {
      content: 'Item b4'
    }]
  }, {
    items: [{
      content: 'Item c1'
    }, {
      content: 'Item c2'
    }, {
      content: 'Item c3'
    }, {
      content: 'Item c4'
    }]
  }];
};

NestedNgRepeatWithModelCtrl.$inject = ['$timeout', '$scope', '$element', 'dragularService'];

module.exports = NestedNgRepeatWithModelCtrl;
