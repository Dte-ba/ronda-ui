'use strict';

import angular from 'angular';

// configs
import { rondaConfig } from './config';

// components
import container from './components/container/container';
import navbar from './components/navbar/navbar';

let includes = [
	'ngMaterial',
	container,
	navbar
];

export default angular
	.module('ronda-ui', includes)
	.config(rondaConfig)
	.name;