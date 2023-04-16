import { Box, Slider } from "@mui/material";
import React, { Dispatch } from "react";

interface RatingMovieFormI {
  setRateScore: Dispatch<React.SetStateAction<number>>;
}

const RatingMovieForm = ({ setRateScore }: RatingMovieFormI) => {
  const handleChange = (event: Event, newValue: number | number[]) => {
    setRateScore(newValue as number);
  };

  function valuetext(value: number) {
    return `${value} pts`;
  }

  return (
    <Box sx={{ width: "90%", mx: 3, textAlign: "center" }}>
      <Slider
        color="primary"
        aria-label="Temperature"
        defaultValue={5}
        onChange={handleChange}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={0.5}
        marks
        min={0.5}
        max={10}
      />
    </Box>
  );
};

export default RatingMovieForm;
