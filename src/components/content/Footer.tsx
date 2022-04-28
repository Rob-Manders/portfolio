
import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../context/Theme'

const FooterContainer = styled.footer`
	text-align: center;
	margin: 3rem 0;
	opacity: 0.5;

	p {
		font-size: 0.8rem;
		margin: 0.25rem;
	}
`

export default function Footer() {
	const { theme } = useContext(ThemeContext)

	return (
		<FooterContainer theme={theme}>
			<p>Copyright © 2022 Robert Manders</p>
			<p>View this site's code on <a href='https://github.com/Rob-Manders/portfolio' target='_blank'>GitHub</a>.</p>
		</FooterContainer>
	)
}