import React from "react";

//MUI
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";

//Icons
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Accordions = ({ topic_name, topic_content }) => {
  return (
    <Accordion sx={{ my: 1 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color="primary" />}
        sx={{ color: "#f9f9f9" }}
      >
        {topic_name}
      </AccordionSummary>
      <AccordionDetails sx={{ backgroundColor: "#fff" }}>
        {topic_content.lessons.map((item) => {
          const { date, title, time_starts, instructor } = item;
          return (
            <Box
              color="secondary"
              sx={{
                py: 1,
                borderBottom: "2px solid #838992",
              }}
              key={title}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography component="div" gutterBottom color="secondary">
                    {title}
                  </Typography>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={6}>
                      <Stack direction="row" spacing={0.5}>
                        <AccessTimeIcon />
                        <Typography>
                          {time_starts.slice(11, time_starts.length - 3)}
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={6}>
                      <Stack direction="row" spacing={0.5}>
                        <CalendarMonthIcon />
                        <Typography>{date}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </Box>
                <Typography component="div" align="right">
                  <Tooltip title={instructor.name} placement="bottom-start">
                    <PersonIcon />
                  </Tooltip>
                </Typography>
              </Stack>
            </Box>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
};

export default Accordions;
