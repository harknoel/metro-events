import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  LocalizationProvider,
  DatePicker,
  TimePicker,
} from "@mui/x-date-pickers";
import {
  Card,
  CardContent,
  TextField,
  Grid,
  Button,
  Typography,
} from "@mui/material";
import Container from "./styles/Container.styled";
import UserNav from "./UserNav";
import { Content } from "./styles/CreateEvent.styled";
import verifyUser from "../helperFunctions";

export default function CreateEvent() {
  const [eventName, setEventName] = React.useState("");
  const [dateStarted, setDateStarted] = React.useState(null);
  const [dateWillEnd, setDateWillEnd] = React.useState(null);
  const [timeStarted, setTimeStarted] = React.useState(null);
  const [timeWillEnd, setTimeWillEnd] = React.useState(null);
  const [description, setDescription] = React.useState("");

  verifyUser("ORGANIZER");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <UserNav />
      <Content>
        <Container>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Create Event
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Event Name"
                      value={eventName}
                      onChange={(event) => setEventName(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <DatePicker
                            sx={{ width: "100%" }} // Set width to 100%
                            label="Date Started"
                            value={dateStarted}
                            onChange={(newValue) => setDateStarted(newValue)}
                            TextField={(params) => <TextField {...params} />}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TimePicker
                            sx={{ width: "100%" }} // Set width to 100%
                            label="Time Started"
                            value={timeStarted}
                            onChange={(newValue) => setTimeStarted(newValue)}
                            TextField={(params) => <TextField {...params} />}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <DatePicker
                            sx={{ width: "100%" }} // Set width to 100%
                            label="Date Will End"
                            value={dateWillEnd}
                            onChange={(newValue) => setDateWillEnd(newValue)}
                            TextField={(params) => <TextField {...params} />}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TimePicker
                            sx={{ width: "100%" }} // Set width to 100%
                            label="Time Will End"
                            value={timeWillEnd}
                            onChange={(newValue) => setTimeWillEnd(newValue)}
                            TextField={(params) => <TextField {...params} />}
                          />
                        </Grid>
                      </Grid>
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Description"
                      multiline
                      rows={4}
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Container>
      </Content>
    </div>
  );
}
