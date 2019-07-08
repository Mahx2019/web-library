'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, NavLink, UncontrolledDropdown, DropdownToggle,
	DropdownMenu, DropdownItem } from 'reactstrap/lib';
import Icon from './icon';
import { pick } from '../../common/immutable'

class MenuEntry extends React.PureComponent {
	render() {
		const { label, onKeyDown, dropdown, entries, active, position } = this.props;
		const ContainerTag = position === 'right' ? React.Fragment : NavItem;

		return dropdown ? (
			<ContainerTag active={active}>
				<UncontrolledDropdown className="dropdown dropdown-wrapper">
					<DropdownToggle
						tag="a"
						href="#"
						className="dropdown-toggle nav-link"
						onKeyDown={ onKeyDown }
						tabIndex={ -2 }
					>
						{ label }
						<Icon type="16/chevron-9" width="16" height="16" />
					</DropdownToggle>
					<DropdownMenu>
						{ entries.map((entry, ind) => (
							entry.separator ?
								<DropdownItem key={ `divider-${ind}` } divider /> :
								<DropdownItem key={ entry.href } href={ entry.href }>
									{ entry.label }
								</DropdownItem>
						))}
					</DropdownMenu>
				</UncontrolledDropdown>
			</ContainerTag>
		) : (
			<ContainerTag active={ active }>
				<NavLink
					{ ...pick(this.props, ['className', 'href', 'onKeyDown']) }
					tabIndex={ -2 }
				>
					{ label }
				</NavLink>
			</ContainerTag>
		);
	}

	static propTypes = {
		active: PropTypes.bool,
		dropdown: PropTypes.bool,
		entries: PropTypes.array,
		href: PropTypes.string,
		label: PropTypes.string,
		onKeyDown: PropTypes.func,
		position: PropTypes.oneOf(["left", "right"]),
	}

	static defaultProps = {
		active: false
	}
}

export default MenuEntry;