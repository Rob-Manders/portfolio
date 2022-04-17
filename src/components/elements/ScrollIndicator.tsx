
import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../index'
import Icon_AngleDown from '../icons/Icon_AngleDown'

const ScrollArrow = styled.div`
	margin: 0 auto;

	svg {
		--icon-dimensions: 2rem;

		width: var(--icon-dimensions);
		height: var(--icon-dimensions);
		fill: ${props => props.theme.primary};
		opacity: 0.2;
	}
`

export default function ScrollIndicator() {
	const { theme } = useContext(ThemeContext)

	return (
		<ScrollArrow theme={theme} >
			<Icon_AngleDown />
		</ScrollArrow>
	)
}