import angular from 'angular';

// configs
import { rondaConfig } from './config';

angular
	.module('ronda-ui', [ 'ngMaterial' ])
	.config(rondaConfig);