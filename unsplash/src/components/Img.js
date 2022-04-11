import React from 'react'
import styled from 'styled-components'

const Image = ({img}) => {


	return (
		<Div>
			<Img>{img}</Img>
		</Div>
	)
}

const Img = styled.div`
	height:300px;
	flex: 0 0 33.333333%;
`;

const Div = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding-left: 0;
`

export default Image;