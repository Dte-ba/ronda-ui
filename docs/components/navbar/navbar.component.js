'use strict';

export class NavbarComponent {

  /*@ngInject*/
  constructor(){
  }

  $onInit(){
  }
}

export default angular.module('rondaDocs.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
