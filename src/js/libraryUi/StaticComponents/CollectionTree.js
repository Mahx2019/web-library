'use strict';

var log = require('libzotero/lib/Log').Logger('zotero-web-library:CollectionTree');

var React = require('react');

var CollectionTree = React.createClass({
	getDefaultProps: function() {
		return {};
	},
	getInitialState: function() {
		return {};
	},
	render: function() {
		return (
			<div>
				CollectionTree
			</div>
		);
	}
});

module.exports = CollectionTree;
