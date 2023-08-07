import { Visualizer } from "../Visualizer"
import { bubbleSort, insertionSort, mergeSort } from "../../algorithms";
import Grid from '@mui/material/Grid';
import { Icon } from "../../components";
import { useState } from "react";

export const Main = () => {

  const array = [5, 2, 7, 8, 9, 1, 3]
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <Icon
        icon={'play_circle'}
        iconColor={{ color: 'success', grade: 800 }}
        size={45}
        onClick={() => setIsPlaying(true)}
      />
      <Grid container>
        <Grid item xs={12} md={6} lg={4}>
          <Visualizer arr={array} algorithm={mergeSort} algorithmName="mergeSort" playAnimation= {isPlaying} />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Visualizer arr={array} algorithm={insertionSort} algorithmName="insertionSort" playAnimation= {isPlaying} />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Visualizer arr={array} algorithm={bubbleSort} algorithmName="bubbleSort" playAnimation= {isPlaying} />
        </Grid>
      </Grid>
    </>

  )
}

