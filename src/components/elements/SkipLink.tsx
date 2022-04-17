
import React, { useContext } from 'react'
import styled from 'styled-components'
// import { ThemeContext } from '../../index'
import { ThemeContext } from '../../context/Theme'

const SkipButton = styled.a`
	position: absolute;
	top: -3rem;
	left: 50%;
	transform: translateX(-50%);

	background-color: ${props => props.theme.accent};
	padding: 0.8rem 1.25rem 0.75rem;
	border-radius: 100vw;

	text-decoration: none;
	font-size: 0.85rem;
	font-weight: 700;
	color: ${props => props.theme.background};

	transition: transform 250ms ease-in-out;

	&:focus {
		transform: translateY(4rem) translateX(-50%);
	}

	&:hover {
		background-color: ${props => props.theme.primary};
	}
`

export default function SkipLink() {
	const darkTheme = useContext(ThemeContext)

	return (
		<SkipButton theme={ darkTheme } href='#content'>
			Skip to Content
		</SkipButton>
	)
}