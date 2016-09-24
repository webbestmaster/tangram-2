'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';
import lang from './../../../services/lang';
import $ from './../../../lib/jquery';
import info from './../../../services/info';
import util from './../../../services/util';

var SettingsView = BaseView.extend({

	events: {
		'click .js-tangram-texture-preview': 'setTangramTexture',
		'click .js-set-lang': 'setLang'
	},

	initialize: function () {

		var view = this,
			i,
			images;

		view.set('tweens', []);

		view.setElement(tm.get('settings')({
			lang: lang,
			info: info
		}));

		i = 9;
		images = ['tangram-frame.svg'];
		while ( i ) {
			i -= 1;
			images[images.length] = 'tangram-texture/' + i + '.jpg';
		}

		images = images.map(function (path) {
			return 'i/' + path;
		});

		util.loadImages(images)
			.then(function () {
				return view.render();
			})
			.then(function () {
				// view.animateUI();

				if (view.get('isHidden')) {
					return;
				}

				view.publish('previewSectionHelper:initialize');
				view.rateUsPopup();

			});

		// view.setVerticalSwiper();

		return BaseView.prototype.initialize.apply(view, arguments);

	},

	setTangramTexture: function (e) {

		var view = this,
			$node = $(e.currentTarget),
			index = $node.attr('data-index'),
			cssActiveClass = 'tangram-texture-preview_active';

		view.$el.find('.' + cssActiveClass).removeClass(cssActiveClass);
		$node.addClass(cssActiveClass);

		info.set('tangramTexture', index);

	},

	setLang: function (e) {

		var language = e.currentTarget.getAttribute('data-lang');

		info.set('language', language);
		lang.set(language);

		Backbone.history.loadUrl();

	}

/*
	animateUI: function () {

		var tweens = this.get('tweens');

		tweens.push.apply(tweens, TweenMax.staggerTo('.js-anim-from-top', 0.8, {y: 0, ease: Back.easeOut.config(1.4), force3D: true}, 0.1));

		tweens.push.apply(tweens, TweenMax.staggerTo('.js-anim-from-right', 0.8, {x: 0, ease: Back.easeOut.config(1.4), force3D: true}, 0.1));

	}
*/

});

export default SettingsView;