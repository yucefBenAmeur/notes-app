import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import PersonIcon from "@mui/icons-material/Person";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HomeIcon from "@mui/icons-material/Home";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { setFilter } from "../store/notesSlice";

const Buttons = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filter = useSelector((state: RootState) => state.notes.filter);

  const handleFilter = (category: string) => {
    dispatch(setFilter(category));
  };

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={filter}
        onChange={(_, newValue) => handleFilter(newValue)}
      >
        <BottomNavigationAction
          label="All"
          value="All"
          icon={<DensitySmallIcon />}
        />
        <BottomNavigationAction
          label="Personal"
          value="personal"
          icon={<PersonIcon />}
        />
        <BottomNavigationAction
          label="Business"
          value="business"
          icon={<ApartmentIcon />}
        />
        <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default Buttons;
