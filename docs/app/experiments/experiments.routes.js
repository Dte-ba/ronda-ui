'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('experiments', {
    url: '/experiments',
    template: '<experiments></experiments>'
  });
}
