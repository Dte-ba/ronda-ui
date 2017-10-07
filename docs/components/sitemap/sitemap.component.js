'use strict';

export class SitemapComponent {

  /*@ngInject*/
  constructor(){
  }

  $onInit(){
  }
}

export default angular.module('rondaDocs.sitemap', [])
  .component('sitemap', {
    template: require('./sitemap.html'),
    controller: SitemapComponent
  })
  .name;
