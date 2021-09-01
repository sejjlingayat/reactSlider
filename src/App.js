import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import $ from 'jquery';

export default function App() {
  const SwItConRef = useRef(null);
  const movConref = useRef(null);
  const [acwidth, setWidth] = useState(0);
  const [itemW, setitemW] = useState(0);
  const [itemL, setitemL] = useState(0);
  // console.log('Actual', parseInt(acwidth));
  // console.log('itemL', itemL);

  let itemCount = 0;
  let ItemWidth = 0;

  function windowWidth() {
    let windowWidth = $(window).width();
    console.log(windowWidth);

    if (windowWidth < 768) {
      itemCount = 2;
      ItemWidth = 100 / itemCount + '%';
      console.log(ItemWidth);
      $('.swiperItem').css('min-width', ItemWidth);
    }
    if (windowWidth < 480) {
      itemCount = 1;
      $('.swiperItem').css('min-width', 100 / itemCount + '%');
    }
    if (windowWidth > 768) {
      itemCount = 4;
      $('.swiperItem').css('min-width', 100 / itemCount + '%');
    }
  }

  $(window).resize(() => {
    windowWidth();
  });

  const getWidth = () => {
    useEffect(() => {
      windowWidth();
      let swiperItemLength = document.querySelectorAll('.swiperItem').length;
      // console.log('swiperItemLength', swiperItemLength);
      setitemL(swiperItemLength - itemCount);

      let swiperItemWidth = SwItConRef.current.offsetWidth;
      // console.log('swiperItemWidth', swiperItemWidth);
      setitemW(swiperItemWidth);

      let movWidth = movConref.current.offsetWidth;
      // console.log('movWidth', movWidth);

      const acWidth = swiperItemWidth * swiperItemLength;
      // console.log(acWidth);
      setWidth(acWidth);
    }, [0]);
  };
  getWidth();
  let run = 0;
  let moveCount = 0;

  function Next() {
    if (moveCount < itemL) {
      moveCount++;
      // console.log('moveCount', moveCount);

      run = run - itemW;
      // console.log('Next', run + 'px');
      $('.movingCont').css('margin-left', run);
    }
    return moveCount;
  }
  function previous() {
    if (moveCount > 0) {
      moveCount--;
      // console.log('moveCount--', moveCount);

      run = run + itemW;
      // console.log('Previous', run + 'px');
      $('.movingCont').css('margin-left', run);
    }
  }
  return (
    <div>
      <div className="container">
        <div className="swiperContainer">
          <div
            className="movingCont"
            ref={movConref}
            style={{ width: { acwidth } }}
          >
            <div className="swiperItem" ref={SwItConRef}>
              1
            </div>
            <div className="swiperItem" ref={SwItConRef}>
              2
            </div>
            <div className="swiperItem" ref={SwItConRef}>
              3
            </div>
            <div className="swiperItem" ref={SwItConRef}>
              4
            </div>
            <div className="swiperItem" ref={SwItConRef}>
              5
            </div>
            <div className="swiperItem" ref={SwItConRef}>
              6
            </div>
            <div className="swiperItem" ref={SwItConRef}>
              7
            </div>
            <div className="swiperItem" ref={SwItConRef}>
              8
            </div>
            <div className="swiperItem" ref={SwItConRef}>
              9
            </div>
          </div>
          <div className="Next" onClick={Next}>
            Next
          </div>
          <div className="previous" onClick={previous}>
            Previous
          </div>
        </div>
      </div>
    </div>
  );
}
