import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import PersonIcon from "@mui/icons-material/Person";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";

const Buttons = () => {
  const [value, setValue] = useState(0); // Initialize state with a default value

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="All"
          color="success"
          icon={<DensitySmallIcon />}
        />
        <BottomNavigationAction label="Personnel" icon={<PersonIcon />} />
        <BottomNavigationAction
          label="Business"
          color="success"
          icon={<ApartmentIcon />}
        />
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default Buttons;
