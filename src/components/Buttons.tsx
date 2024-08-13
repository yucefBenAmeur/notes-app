import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import PersonIcon from "@mui/icons-material/Person";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";
import { Note } from "./Body";

interface ButtonsProps {
  notes: Note[];
  setFilteredNotes: (notes: Note[]) => void;
}

const Buttons = ({ notes, setFilteredNotes }: ButtonsProps) => {
  const [value, setValue] = useState(0); // Initialize state with a default value

  const handleFilter = (category: string) => {
    if (category === "All") {
      setFilteredNotes(notes);
    } else {
      setFilteredNotes(notes.filter((note) => note.category === category));
    }
  };

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
          onClick={() => handleFilter("All")}
          label="All"
          icon={<DensitySmallIcon />}
        />
        <BottomNavigationAction
          onClick={() => handleFilter("personel")}
          label="Personnel"
          icon={<PersonIcon />}
        />
        <BottomNavigationAction
          onClick={() => handleFilter("business")}
          label="Business"
          icon={<ApartmentIcon />}
        />
        <BottomNavigationAction
          onClick={() => handleFilter("home")}
          label="Home"
          icon={<HomeIcon />}
        />
      </BottomNavigation>
    </Box>
  );
};

export default Buttons;
