
import React, { useContext, ReactNode } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../context/Theme'

const PageContainer = styled.div`
	width: 100%;
	background-color: ${props => props.theme.background};
	font-family: 'IBM Plex Sans', sans-serif;
	font-size: 1.1rem;
	color: ${props => props.theme.primary};
	line-height: 1.5;
	padding-bottom: 2rem;

	p {
		a {
			color:${props => props.theme.primary};

			&:hover,
			&:focus {
				color: ${props => props.theme.accent};
			}
		}
	}

	a {
		outline: none;
		transition: 150ms ease-in-out;
	}

	h2 {
		color: ${props => props.theme.accent};
		font-size: 1.75rem;
	}

	.inner {
		max-width: 1100px;
		margin: 0 auto;
		padding: 0 0.5rem;

		@media (min-width: 600px) {
			padding: 0 1rem;
		}
	}

`

export default function Container({ children }: { children: ReactNode }) {
	const theme = useContext(ThemeContext)

	return (
		<PageContainer theme={theme}>
			<div className='inner'>
				{children}
			</div>
		</PageContainer>
	)
}
