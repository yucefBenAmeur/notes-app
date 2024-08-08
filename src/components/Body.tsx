import { Stack } from "@mui/material";
import AddButton from "./AddButton";
import Buttons from "./Buttons";
import CardList from "./CardList";
import Formm from "./Formm";

import { GiNotebook } from "react-icons/gi";

const Body = () => {
  return (
    <>
      <Stack direction="row" spacing={2} className="m-3">
        <GiNotebook fontSize="40px" className="mt-2 ms-3" />{" "}
        <h1 className="mt-2 ms-3 ">Notes</h1>
      </Stack>

      <div className="mt-5">
        <Buttons />
        <CardList />
        <AddButton />
      </div>
    </>
  );
};

export default Body;
