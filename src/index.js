import angular from 'angular';
import ngMaterial from 'angular-material';

import { rondaConfig } from './config';

angular
	.module('ronda-ui', [ ngMaterial ])
	.config(rondaConfig);