import React, { useState, useRef } from "react";
import Api from "./components/Api"
import axios from 'axios'
import styled from "styled-components";
import "./styles.css";
import {Routes, Route, Link} from "react-router-dom"

const App = () => {

	const [api, setApi] = useState('');

	

	// test
	const [input, setInput] = useState("");
	const [barOpened, setBarOpened] = useState(false);
	const formRef = useRef();
	const inputFocus = useRef();
	let obj;

	const onFormSubmit = e => {
		e.preventDefault();
		setInput("");
		setBarOpened(false);

		axios.get("https://api.unsplash.com/search/photos", {
		params: { query: input },
		headers: {
			Authorization: "Client-ID ALtiiRCltHMPzSCRNE6-Uhde0zS5i1NyHcsgEkD8u2w"
		}
		}).then((res)=>{setApi(res)});
		
	}
	return (
		<div className="App">
			<Form
				barOpened={barOpened}
				onClick={() => {
				setBarOpened(true);
				inputFocus.current.focus();
				}}
				onFocus={() => {
				setBarOpened(true);
				inputFocus.current.focus();
				}}
				onBlur={() => {
				setBarOpened(false);
				}}
				onSubmit={onFormSubmit}
				ref={formRef}
			>
				<Button type="submit" barOpened={barOpened}>
					icon
				</Button>
				<Input
					onChange={e => setInput(e.target.value)}
					ref={inputFocus}
					value={input}
					barOpened={barOpened}
					placeholder="Search for a movie..."
				/>
			</Form>
			<Api data={api} />
		</div>
	);
}



const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #37474f;
  /* Change width of the form depending if the bar is opened or not */
  width: ${props => (props.barOpened ? "30rem" : "2rem")};
  /* If bar opened, normal cursor on the whole form. If closed, show pointer on the whole form so user knows he can click to open it */
  cursor: ${props => (props.barOpened ? "auto" : "pointer")};
  padding: 2rem;
  height: 2rem;
  border-radius: 10rem;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  margin-bottom:500px;
`;

const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: ${props => (props.barOpened ? "1rem" : "0rem")};
  border: none;
  color: white;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;

const Button = styled.button`
  line-height: 1;
  pointer-events: ${props => (props.barOpened ? "auto" : "none")};
  cursor: ${props => (props.barOpened ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
`;

export default App;