import { CardContainer } from "./styles/UserEvents.styled";
import Card from "./Card";
import CustomModal from "./CustomModal";

const Event = (props) => {
	const { event, open, setOpen, showJoin, showManage } = props;

	return (
		<div>
			<CardContainer>
				<Card event={event} setOpen={setOpen} />
			</CardContainer>
			<CustomModal
				event={event}
				open={open}
				setOpen={setOpen}
				showJoin={showJoin}
				showManage={showManage}
			/>
		</div>
	);
};

export default Event;
