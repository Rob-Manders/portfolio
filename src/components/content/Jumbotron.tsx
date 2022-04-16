
import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../index'

const JumbotronContainer = styled.header`
	
	.title {
		height: 600px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		h1,
		p {
			margin: 0;
		}

		h1 {
			font-family: 'Square Peg', cursive;
			font-size: clamp(4rem, 15vw, 9rem);
		}

		p {
			font-size: clamp(1.2rem, 3.55vw, 2rem);
			color: ${props => props.theme.accent};
		}
	}

`

export default function Jumbotron() {
	const { theme } = useContext(ThemeContext)

	return (
		<JumbotronContainer theme={theme}>
			<div className='title'>
				<h1>Robert Manders</h1>
				<p>Front-End Developer</p>
			</div>
		</JumbotronContainer>
	)
}