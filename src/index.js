'use strict';

import angular from 'angular';

// configs
import { rondaConfig } from './config';

// components
import container from './components/container/container';
import navbar from './components/navbar/navbar';
import navbarItem from './components/navbarItem/navbar-item';
import waterfall from './components/waterfall/waterfall';

let includes = [
	'ngMaterial',
	container,
	navbar,
	navbarItem,
	waterfall
];

export default angular
	.module('ronda-ui', includes)
	.config(rondaConfig)
	.name;