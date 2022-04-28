
import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../context/Theme'
import Icon_Code from '../icons/Icon_Code'

const Divider = styled.div`
	display: flex;
	align-items: center;
	opacity: 0.25;
	margin: 0.5rem 1rem;

	.line {
		width: 50%;
		height: 2px;
		background-color: ${props => props.theme.primary};
		border-radius: 100vw;
		margin: 0 1rem;
	}

	svg {
		--icon-dimensions: 1.5rem;

		width: var(--icon-dimensions);
		height: var(--icon-dimensions);
		fill: ${props => props.theme.primary};
	}
`

export default function PageDivider() {
	const darkTheme = useContext(ThemeContext)

	return (
		<Divider theme={darkTheme}>
			<div className='line' />
			<Icon_Code />
			<div className='line' />
		</Divider>
	)
}