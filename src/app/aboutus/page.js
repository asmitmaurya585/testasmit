"use client";

import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
} from "@mui/material";

export default function Page() {

    return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        {/* Title */}
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight={600}>
           About Us
          </Typography>
        </Grid>

        {/* Description */}
        <Grid item xs={12}>
          <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.
            <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Typography>
        </Grid>

        {/* LEFT SIDE - Registration Info */}
        <Grid item xs={6} md={4}>
         <Box
            component="img"
            src="./contactus.png"
            alt="Contact"
            sx={{
              width: "100%",
              height: "100%",
              maxHeight: 320,          
              borderRadius: 2,
            }}
          />
        </Grid>

      

      </Grid>
    </Box>
  );
}
