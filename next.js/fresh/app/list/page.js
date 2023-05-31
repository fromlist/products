"use client";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

export default function List() {
  let product = ["Tomato", "Pasta", "Coconut"];
  let counter = [];
  for (let j = 0; j < product.length; j++) {
    counter.push(0);
  }
  let [defaultCount, setDefaultCount] = useState(counter);

  function calcCnt(action, idx) {
    let tmpCnt = [...defaultCount];
    console.log(tmpCnt);
    if (action > 0) {
      tmpCnt[idx]++;
      setDefaultCount(tmpCnt);
    } else {
      if (tmpCnt[idx] > 0) {
        tmpCnt[idx]--;
      }
      setDefaultCount(tmpCnt);
    }
    console.log(tmpCnt);
  }
  return (
    <div>
      <h2>상품목록</h2>
      <div className="foodList">
        {product.map((productCode, i) => {
          return (
            <div className="food" key={i}>
              <img src={`/food${i}.png`} alt="" />
              <div className="foodName">{productCode}</div>
              <span>{defaultCount[i]}</span>
              <button
                onClick={() => {
                  calcCnt(-1, i);
                }}
              >
                -
              </button>
              <button
                onClick={() => {
                  calcCnt(1, i);
                }}
              >
                +
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
