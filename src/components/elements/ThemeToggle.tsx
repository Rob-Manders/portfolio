
import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../context/Theme'
import Icon_Moon from '../icons/Icon_Moon'
import Icon_Sun from '../icons/Icon_Sun'

const ToggleContainer = styled.button`
	all: unset;
	display: flex;
	align-items: center;
	margin-top: 0.5rem;
	margin-left: auto;
	cursor: pointer;

	svg {
		--dimensions: 1rem;
		width: var(--dimensions);
		height: var(--dimensions);
		fill: ${props => props.theme.primary};
		opacity: 0.25;
		transition: opacity 150ms ease-in-out;
	}

	.switch {
		width: 3rem;
		height: 1.5rem;
		background-color: #010102;
		margin: 0 0.5rem;
		border-radius: 100vw;

		.toggle {
			background-color: ${props => props.theme.background};
			width: 1rem;
			height: 1rem;
			margin: 0.25rem;
			border-radius: 50%;
			transition: background-color 150ms ease-in-out;
		}

		.toggled {
			margin-left: auto;
		}
	}

	&:hover,
	&:focus {
		svg {
			opacity: 0.9;
		}

		.toggle {
			background-color: ${props => props.theme.accent};
		}
	}
`

export default function ThemeToggle() {
	const { theme, switchTheme } = useContext(ThemeContext)
	const [toggled, setToggled] = useState<boolean>(false)

	// TODO: Hook up to switch theme.

	return (
		<ToggleContainer theme={theme} onClick={() => setToggled(!toggled)} aria-label='Change colour theme'>
			<Icon_Moon />
			<div className='switch'>
				<div className={`toggle ${toggled && 'toggled'}`} />
			</div>
			<Icon_Sun />
		</ToggleContainer>
	)
}