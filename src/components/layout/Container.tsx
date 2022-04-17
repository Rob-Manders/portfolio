
import React, { ReactNode } from 'react'
import styled from 'styled-components'

const PageContainer = styled.div`
	max-width: 1100px;
	margin: 0 auto;
	padding: 0 0.5rem;

	@media (min-width: 600px) {
		padding: 0 1rem;
	}
`

export default function Container({ children }: { children: ReactNode }) {
	return (
		<PageContainer>
			{children}
		</PageContainer>
	)
}
