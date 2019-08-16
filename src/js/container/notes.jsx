'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Notes from '../component/notes';
import { deleteItem, createItem, updateItem, fetchChildItems, fetchItemTemplate, navigate } from '../actions/';
import { get } from '../utils';
import withDevice from '../enhancers/with-device';
import withEditMode from '../enhancers/with-edit-mode';

const NotesContainer = props => <Notes { ...props } />;

const mapStateToProps = state => {
	const { libraryKey, itemKey, noteKey } = state.current;
	const childItemsData = get(state, ['libraries', libraryKey, 'itemsByParent', itemKey], {});
	const { isFetching, pointer, keys, totalResults } = childItemsData;
	const childItems = (keys || []).map(key => get(state, ['libraries', libraryKey, 'items', key], {}));
	const uploads = get(state, ['libraries', libraryKey, 'updating', 'uploads'], []);
	const hasMoreItems = typeof(pointer) === 'undefined' || pointer < totalResults;
	const isFetched = !isFetching && !hasMoreItems;

	return { childItems, libraryKey, itemKey, noteKey, isFetched, isFetching, uploads, pointer, totalResults };
}

export default withDevice(withEditMode(connect(
	mapStateToProps, { deleteItem, createItem, updateItem, fetchChildItems, fetchItemTemplate, navigate }
)(NotesContainer)))