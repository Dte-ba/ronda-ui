'use strict';

import $ from 'jquery';

export function routeConfig($urlRouterProvider, $locationProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode({
  	enabled: true
  });
}

export function runApp() {
	'ngInject';

	$(document).ready(function(){
	  var scrollTop = 0;
	  $(window).scroll(function(){
	    scrollTop = $(window).scrollTop();
	     $('.counter').html(scrollTop);
	    
	    if (scrollTop >= 100) {
	      $('#main-nav').addClass('scrolled-nav');
	    } else if (scrollTop < 100) {
	      $('#main-nav').removeClass('scrolled-nav');
	    } 
	    
	  }); 
	  
	});
}