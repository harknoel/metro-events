import styled from "styled-components";

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const StyledInput = styled.input`
	width: 100%;
	padding: 8px;
	margin-top: 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
`;

export const ModalContainer = styled.div`
	maxheight: "100%";
	overflowy: "auto";
`;

export const Image = styled.img`
	width: 300px;
	height: 300px;
	border-radius: 10px;
	border: 10px solid #6462f1;
`;

export const ContentContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ParentContainer = styled.div`
	margin: 0px 40px;
	display: flex;
	flex-direction: column;
`;

export const EventContainer = styled.div`
	margin-bottom: 20px;
`;

export const EventDetail = styled.div`
	margin-bottom: 10px;
`;

export const EventName = styled.strong`
	color: #333;
`;

export const EventDescription = styled.div`
	color: #666;
`;
