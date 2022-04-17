
import React, { useContext } from 'react'
import styled from 'styled-components'
// import { ThemeContext } from '../../index'
import { ThemeContext } from '../../context/Theme'
import Icon_AngleDown from '../icons/Icon_AngleDown'

const ScrollArrow = styled.div`
	margin: 0 auto;

	svg {
		--icon-dimensions: 2rem;

		width: var(--icon-dimensions);
		height: var(--icon-dimensions);
		fill: ${props => props.theme.primary};
		opacity: 0.2;
		transition: 150ms ease-in-out;
	}

	a:hover,
	a:focus {
		svg {
			fill: ${props => props.theme.accent};
			opacity: 1;
		}
	}
`

export default function ScrollIndicator() {
	const darkTheme = useContext(ThemeContext)

	return (
		<ScrollArrow theme={darkTheme} aria-label='Skip to content'>
			<a href='#content'><Icon_AngleDown /></a>
		</ScrollArrow>
	)
}