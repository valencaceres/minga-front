import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import React from "react";
import chapterActions from "../../store/chapter/actions";
 import "./renderinfochapter.css"

const { getChapterDetails } = chapterActions;

const RenderInfoChapter = () => {
  const chapterStore = useSelector((state) => state?.id?.idChapter?.payload);
  

  const chaptersStore = useSelector((state) => state.chapters.chapter); 
console.log(chaptersStore);
  const dispatch = useDispatch();
  

  //este despacha el chapter
  useEffect(() => {
    if (chapterStore) {
      dispatch(getChapterDetails(chapterStore));
    }
    
    
  }, [chapterStore,]);
  

  return ( 
    <>
      <div className="container_card" >
        <div className="container_title">
          <p className="text"> { chaptersStore?.title === undefined ? null : `Title: "${chaptersStore?.title}" `  }  </p>
          <p className="text"> { chaptersStore?.order === undefined ? `"Choose a chapter to see the details"` : `Order: ${chaptersStore?.order}`  }  </p>
          <p className="text"> { chaptersStore?.pages === undefined ? null : `Pages: ${chaptersStore?.pages.length}`  }  </p>
        </div>
      </div>
    </>
  );
};

export default RenderInfoChapter;


/* 

*/