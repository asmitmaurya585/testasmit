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
            Contact Us
          </Typography>
        </Grid>

        {/* Description */}
        <Grid item xs={12}>
          <Typography variant="body1" color="text.secondary" lineHeight={1.7}>
            Register to get started with our platform and access all essential features in one place. Create your account by providing basic details like your name, email, and password. Once registered, you can manage your profile, track activities, and stay connected with updates. Your information is secure, and registration takes only a few moments to complete.
          </Typography>
        </Grid>

        {/* LEFT SIDE - Registration Info */}
        <Grid item xs={12} md={4}>
         <Box
            component="img"
            src="./contactus.png"
            alt="Contact"
            sx={{
              width: "100%",
              height: "100%",
              maxHeight: 320,
              //objectFit: "cover",
              borderRadius: 2,
            }}
          />
        </Grid>

        {/* RIGHT SIDE - Registration Form */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Contact Us
            </Typography>

            <Box component="form">
              <TextField
                fullWidth
                label="User Name"
                margin="normal"
              />

              <TextField
                fullWidth
                label="Email"
                type="email"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Message"
                margin="normal"
                required
                multiline
                rows={3}
                placeholder="Enter your message here..."
              
                
              />

              <Button
                variant="contained"
                size="small"
                sx={{ mt: 2, px: 4 }}
              >
                Submit
              </Button>
            </Box>
          </Paper>
        </Grid>

      </Grid>
    </Box>
  );
}
