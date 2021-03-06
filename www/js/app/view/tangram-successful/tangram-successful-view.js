'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';
import lang from './../../../services/lang';
import mediator from './../../../services/mediator';
import $ from './../../../lib/jquery';
import _ from './../../../lib/lodash';
import info from './../../../services/info';
import lang from './../../../services/lang';
import tangrams from './../../data/tangrams';
import androidAds from './../../../services/android-ads';
import util from './../../../services/util';
import sm from './../../../sound/sound-master';

var TangramSuccessfulView = BaseView.extend({

	events: {
		'scroll': 'stopEvent',
		'click .js-one-more-tangram': 'oneMoreTangram'
		//'click .js-restart-tangram': 'restartTangram'
	},

	initialize: function (tangramInfo, data) {

		var view = this,
			sectionInfo,
            tl = new TimelineLite();

		sectionInfo = util.getSectionInfo(tangramInfo);

		sectionInfo.stars = data.stars;
		sectionInfo.info = info;
		sectionInfo.lang = lang;
		sectionInfo.sectionProgress = data.sectionProgress;

		view.setElement(tm.get('tangram-successful')(sectionInfo));

		view.render();

		(new TimelineMax()).staggerFromTo('.js-back, .one-more-tangram-check, .js-tangram-successful-view-star, .js-one-more-tangram', 0.5, {opacity: 0, scale: 2, force3D: true}, {opacity: 1, scale: 1}, 0.1);

        view.$el.find('.tangram-successful__tangram-info-paragraph').each(function () {
            tl = tl.to(this, 1, {scrambleText: {text: this.getAttribute('data-text')}});
        });

		view.subscribe('route', view.hide);

        sm.play({
            sound: 'sound/tan-complete.mp3',
            isLoop: false,
            road: 1
        });

        return BaseView.prototype.initialize.apply(view, arguments);

	},

	render: function () {

		var view = this;

		this.$wrapper.append(view.$el);

		window.setTimeout(function () {
			androidAds.showAd();
		}, 1000);

	},

	oneMoreTangram: function (e) {

		var view = this,
			$node = $(e.currentTarget),
			index = $node.attr('data-index'),
			id = $node.attr('data-id');

		view.hide();

		mediator.publish('hide-main-view');

		mediator.publish('tangram-view', {
			id: id,
			index: index
		});

	}

/*
	restartTangram: function (e) {

		var view = this,
			$node = $(e.currentTarget),
			index = $node.attr('data-index'),
			name = $node.attr('data-name');

		view.publish('tangram-view', {
			name: name,
			index: index
		});

		view.hide();

	}
*/

});

export default TangramSuccessfulView;