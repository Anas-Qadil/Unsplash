import React from 'react';
import Image from "./Img";
import styled from 'styled-components';

const Api = ({data}) => {

	let obj;
	let images;
	if (data)
	{
		obj = data.data.results;
		images = obj.map((elem) => {
			return <Image1 src={elem.urls.regular} />
		})
		console.log(data);
	}

	return (
		<Div>
			<Img>{images}</Img>
		</Div>
	);
}

const Image1 = styled.img`
	height:300px;
`

const Img = styled.div`
	height:300px;
	flex: 0 0 33.333333%;
`;

const Div = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding-left: 0;
`


export default Api;