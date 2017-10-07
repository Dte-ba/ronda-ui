'use strict';

export class FooterComponent {

  /*@ngInject*/
  constructor(){
  }

  $onInit(){
  }
}

export default angular.module('rondaDocs.footer', [])
  .component('footer', {
    template: require('./footer.html'),
    controller: FooterComponent
  })
  .name;
