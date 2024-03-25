import React, { useState } from "react";
import CustomModal from "../components/CustomModal";
import Card from "../components/Card";

const Event = (props) => {
  const { event, showJoin, showManage } = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card event={event} handleOpen={handleOpen} />
      <CustomModal
        event={event}
        open={open}
        handleClose={handleClose}
        showJoin={showJoin}
        showManage={showManage}
        setOpen={setOpen}
      />
    </div>
  );
};

export default Event;
