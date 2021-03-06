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

var SectionSuccessfulView = BaseView.extend({

	events: {
		'scroll': 'stopEvent',
		'click .js-to-all-section-sections': 'toAllSections'
		//'click .js-one-more-tangram': 'oneMoreTangram'
		//'click .js-restart-tangram': 'restartTangram'
	},

	initialize: function (tangramInfo, data) {

		var view = this,
			sectionInfo;

		//view.extendFromObj(data);

		sectionInfo = util.getSectionInfo(tangramInfo);

		sectionInfo.stars = data.stars;
		sectionInfo.info = info;

		view.setElement(tm.get('section-successful')({
			lang: lang
		}));

		view.render();

		(new TimelineMax()).staggerFromTo('.tangram-successful-full-board', 0.5, {opacity: 0, scale: 2, force3D: true}, {opacity: 1, scale: 1}, 0.1);

		view.subscribe('route', view.hide);

        sm.play({
            sound: 'sound/section-complete.mp3',
            isLoop: false,
            road: 1
        });

        return BaseView.prototype.initialize.apply(view, arguments);

	},

    render: function () {

		var view = this;

		this.$wrapper.append(view.$el);

		// window.setTimeout(function () {
		// 	androidAds.showAd();
		// }, 1000);

	},

    toAllSections: function () {
		this.backTo('sections');
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

export default SectionSuccessfulView;