import React, { useState, useEffect } from "react";

import {fetchBubbles} from '../services/fetchBubbles'
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    fetchBubbles()
      .then(res =>{
        setColorList(res.data)
      })
      .catch(err => err)
  },[])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
