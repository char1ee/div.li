'use strict';
define(function (require, exports) {
	var mobile = {
		addMeta: function (name, content) {
			var meta = document.createElement('meta');
			meta.setAttribute('name', name);
			meta.setAttribute('content', content);
			head.append(meta);
		},

		addIcon: function (href, sizes, precomposed) {
			var link = document.createElement('link');
			link.setAttribute('rel', 'apple-touch-icon' + (precomposed ? '-precomposed' : ''));
			link.setAttribute('href', href);
			if (sizes) {
				link.setAttribute('sizes', sizes);
			}
			head.append(link);
		},

		addStartupImage: function (href, media) {
			var link = document.createElement('link');
			link.setAttribute('rel', 'apple-touch-startup-image');
			link.setAttribute('href', href);
			if (media) {
				link.setAttribute('media', media);
			}
			head.append(link);
		}
	};

	exports.mobile = mobile;
});