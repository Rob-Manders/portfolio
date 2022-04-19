
import React, { useContext, useState, useEffect } from 'react'
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

	.notScrolled {
		svg {
			animation: 5s infinite animateChevron;

			@media (prefers-reduced-motion: reduce) {
				animation: none;
			}
		}
	}

	.scrolled {
		svg {
			animation: none;
			opacity: 0.2;
		}
	}

	a:hover,
	a:focus {
		svg {
			animation: none;
			opacity: 1;
			fill: ${props => props.theme.accent};
		}
	}
	
	@keyframes animateChevron {
		0% {
			transform: translateY(0);
		}

		10% {
			transform: translateY(0.25rem);
		}

		20% {
			transform: translateY(0);
		}
	}
`

export default function ScrollIndicator() {
	const darkTheme = useContext(ThemeContext)
	const [scrollPosition, setScrollPostition] = useState<number>(0)
	const [scrolled, setScrolled] = useState<boolean>(false)

	document.addEventListener('scroll', () => setScrollPostition(window.scrollY))

	useEffect(() => {
		if (scrollPosition > 10) {
			setScrolled(true)
		}
	}, [scrollPosition])


	return (
		<ScrollArrow theme={darkTheme}>
			<a className={scrolled ? 'scrolled' : 'notScrolled'} href='#content' aria-label='skip to content'><Icon_AngleDown /></a>
		</ScrollArrow>
	)
}