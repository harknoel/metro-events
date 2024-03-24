import styled from "styled-components";

export const StyledUserAuth = styled.div`
	height: 100vh;
	background-color: #cecded;
	display: flex;
	justify-content: center;
`;

export const Form = styled.form`
	margin-top: 60px;
	width: 330px;
	height: 400px;
	background-color: #f7f6fc;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 30px;
	div {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
`;

export const InputEmail = styled.input`
	padding: 10px;
	width: 260px;
	border: 1px solid #94a6f2;
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
`;

export const InputPassword = styled.input`
	padding: 10px;
	width: 260px;
	border: 1px solid #94a6f2;
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
`;
export const Button = styled.button`
	padding: 10px;
	background-color: #6462f1;
	width: 260px;
	border-radius: 10px;
	border: none;
	color: #ffff;
	cursor: pointer;
	&:hover {
		opacity: 0.9;
		transform: scale(0.98);
	}
`;

export const Image = styled.img`
	width: 200px;
	height: 100px;
`;

export const Signup = styled.div`
	font-size: 14px;
`;
