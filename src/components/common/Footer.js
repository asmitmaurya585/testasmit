"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#f5f5f5",
        borderTop: "1px solid #ddd",
        py: 1.5,
        textAlign: "center",
        zIndex: 1200,
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Demo App || All Rights Reserved
      </Typography>
    </Box>
  );
}
