import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import { blue, blueGrey } from "@mui/material/colors";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Box } from "@mui/system";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import BallotIcon from '@mui/icons-material/Ballot';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';
import BungalowIcon from '@mui/icons-material/Bungalow';

const lists = ["Blog", "Technologies", "Enveroment"];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Box>
      <Dialog onClose={handleClose} open={open}>
        <Box
          sx={{
            width: { xs: 350, md: 750 },
            height: { xs: 350, md: "auto" },
            textAlign: "left",
              "&:hover": {
                backgroundColor:"black",
                color: "white",
              },
            
            
          }}
        >
          <DialogTitle>More Details ? </DialogTitle>
          <List sx={{ pt: 0 }}>
            {lists.map((list) => (
              <ListItem
                button
                divider
                onClick={() => handleListItemClick(list)}
                key={list}
              >
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor:blue[100], color: blue[600] }}>
                    <ExitToAppIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={list} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Dialog>
    </Box>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(lists[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
  
        padding: '2em'
       
        
      }}
    >
     <Button  onClick={handleClickOpen}>
     <Avatar sx={{ bgcolor:blue[100], color: blue[600] }}>
       <BallotIcon/>
       </Avatar>
      </Button>
      <br />
      <Button 
      onClick={handleClickOpen} >
        <Avatar sx={{ bgcolor:blue[100], color: blue[600] }}>
          
     <DarkModeIcon/>
        </Avatar>
      </Button>
      <Box>
        <SimpleDialog
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
        />
      </Box>
    </Box>
  );
}
