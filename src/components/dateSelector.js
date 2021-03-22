/* 
  dateSelector.js
  Author - Thilak Raj Soundararajan (thilkrajs@gmail.com)
*/

import React, { useEffect } from "react";
import {
  Paper,
  Divider,
  IconButton,
} from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from "react-redux";

import { getRoverImages } from "../redux/Gallery/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    margin: 'auto'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  underline: {
    color: 'rgba(0, 0, 0, 0.70)',
    "&&&:before": {
      borderBottom: "none"
    },
    "&&:after": {
      borderBottom: "none"
    }
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

/* 
 This function converts the default date to the format required by the NASA API 
*/
const dateFormatter = (date) => {
  return date.getFullYear() +
  '-' + date.getMonth() +
  '-' + date.getDate()
}

const DateSelector = () => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());

// Initiall Dispatch to getRoverImages 
  useEffect(() => {
    dispatch(getRoverImages(dateFormatter(selectedDate)));
  }, []);

  const dispatch = useDispatch();

//Dispatch on selecting new date to getRoverImages
  const handleSubmit = () => {
    dispatch(getRoverImages(dateFormatter(selectedDate)));
  };

//set new selected date
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Paper className={classes.root}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          disableFuture
          autoOk
          className={classes.input}
          InputProps={{ 
            classes: {underline: classes.underline},
          }}
          variant="inline"
          format="MM/dd/yyyy"
          id="date-picker-inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton lassName={classes.iconButton} aria-label="search">
        <SearchIcon onClick={handleSubmit}/>
      </IconButton>
    </Paper>
  );
};

export default DateSelector;
