'use strict';
/*global window, Date */

import info from './info';

var win = window,
	androidAds = {
		attr: {},
		minShowPeriod: 4 * 60e3,
		set: function (key, value) {
			this.attr[key] = value;
			return this;
		},
		get: function (key) {
			return this.attr[key];
		},
		showAd: function () {

			var ad = this,
				now,
				lastShow;

			// console.log(ad.get('adsIsAvailable'));

			if ( !ad.get('adsIsAvailable') ) {
				return;
			}

			// console.log('try to show');

			now = Date.now();
			lastShow = ad.get('lastShow');

			if ( now - lastShow >= ad.minShowPeriod ) {
				// console.log('ads');
				ad.set('lastShow', now);
				Android.displayInterstitial();
			} else {
				// console.log('too early to show');
			}

		},
		init: function () {

			var ad = this;

			ad.showAd = ad.showAd.bind(ad);

			ad.set('lastShow', 0);

			ad.set('adsIsAvailable', (typeof Android !== 'undefined') && info.isNormal );

		}

	};


if ( info.get('dev-mode') ) {

	win.Android = {
		displayInterstitial: function () {
			console.log('--- ADS is SHOWN');
		}
	}

}

androidAds.init();

export default androidAds;
