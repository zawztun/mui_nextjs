import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Box } from "@mui/system";
import Link from "next/link";
import BallotIcon from "@mui/icons-material/Ballot";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { IconButton } from "@mui/material";

const lists = [{name:"Posts", slug:"posts"},{name: "Snippets", slug:"snippets"}];

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
            // "&:hover": {
            //   backgroundColor:"black",
            //   color: "white",
            // },
          }}
        >
          <DialogTitle>More Details ? </DialogTitle>
          <List sx={{ pt: 0 }}>
            {lists.map((list) => (
          <Link href={`/${list.slug}`}>
              <ListItem
                button
                divider
                onClick={() => handleListItemClick(list)}
                key={list.slug}
              >
        
                <IconButton>
                  <ExitToAppIcon />
                </IconButton>
                <ListItemText primary={list.name} />
              </ListItem>
            </Link>
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

        padding: "2em",
      }}
    >
      <IconButton onClick={handleClickOpen}>
        <BallotIcon sx={{ color: "black" }} />
      </IconButton>
      <br />
      <Button onClick={handleClickOpen}>
        <DarkModeIcon sx={{ color: "black" }} />
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
