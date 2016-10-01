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
		'click .js-background-texture-preview': 'setBackgroundTexture',
		'click .js-set-lang': 'setLang'
	},

	initialize: function () {

		var view = this,
			i,
            textureList = view.getTextureList(),
			backgroundList = view.getBackgroundList();

		view.set('tweens', []);

		view.setElement(tm.get('settings')({
			lang: lang,
			info: info,
			textureList: textureList,
			backgroundList: backgroundList
        }));

        textureList = textureList.map(function (textureName) {
            return 'i/tangram-texture/' + textureName + '.jpg';
        });

		textureList.push('i/tangram-frame.svg');

		util.loadImages(textureList)
			.then(function () {
				return view.render();
			})
			.then(function () {
				// view.animateUI();
				view.setVerticalSwiper();

				if (view.get('isHidden')) {
					return;
				}

				view.publish('previewSectionHelper:initialize');
				view.rateUsPopup();

			});

		// view.setVerticalSwiper();

		return BaseView.prototype.initialize.apply(view, arguments);

	},

    getTextureList: function () {

        var list = [],
            i;

        list.push('zh-happiness', 'zh-life', 'zh-respect');

        for (i = 0; i < 9; i+= 1) {
            list.push(i);
        }

        for (i = 0; i < 17; i+= 1) {
            list.push('solid-' + i);
        }

        return list;

    },

	getBackgroundList: function () {

		return ['0', '1','2','3','4','5', '6', '7'];

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

	setBackgroundTexture: function (e) {

		var view = this,
			$node = $(e.currentTarget),
			index = $node.attr('data-index'),
			cssActiveClass = 'background-texture-preview_active';

		view.$el.find('.' + cssActiveClass).removeClass(cssActiveClass);
		$node.addClass(cssActiveClass);

		info.set('backgroundTexture', index);

        view.setBackground(index);

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