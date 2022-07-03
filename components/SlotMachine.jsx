import React, { useState, useEffect } from "react";

import styles from "./SlotMachine.module.css";

export const SlotMachine = () => {
  const [spin, setSpin] = useState(false);
  const [ring1, setRing1] = useState();
  const [ring2, setRing2] = useState();
  const [ring3, setRing3] = useState();
  const [price, setPrice] = useState();
  const [input, setInput] = useState();
  const [realBet, setRealBet] = useState();
  const [jackpot, setJackpot] = useState(0);
  const [balance, setBalance] = useState(100000);

  useEffect(() => {
    win();
  }, [ring3]);

  function row1() {
    if (!spin) {
      return (
        <>
          <div className={styles.ringEnd}>
            <i class="cf cf-btc"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-eth"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-usdt"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-ltc"></i>
          </div>
        </>
      );
    } else if (spin && ring1 === undefined) {
      return (
        <>
          <div className={styles.ringMoving}>
            <i class="cf cf-btc"></i>
          </div>
          <div className={styles.ringMoving}>
            <i class="cf cf-eth"></i>
          </div>
          <div className={styles.ringMoving}>
            <i class="cf cf-usdt"></i>
          </div>
          <div className={styles.ringMoving}>
            <i class="cf cf-ltc"></i>
          </div>
        </>
      );
    } else if (ring1 >= 1 && ring1 <= 50) {
      return (
        <>
          <div className={styles.ringEnd}>
            <i class="cf cf-btc"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-eth"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-usdt"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-ltc"></i>
          </div>
        </>
      );
    } else if (ring1 > 50 && ring1 <= 75) {
      return (
        <>
          <div className={styles.ringEnd}>
            <i class="cf cf-eth"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-usdt"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-ltc"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-btc"></i>
          </div>
        </>
      );
    } else if (ring1 > 75 && ring1 <= 95) {
      return (
        <>
          <div className={styles.ringEnd}>
            <i class="cf cf-usdt"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-ltc"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-btc"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-eth"></i>
          </div>
        </>
      );
    } else if (ring1 > 95 && ring1 <= 100) {
      return (
        <>
          <div className={styles.ringEnd}>
            <i class="cf cf-ltc"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-btc"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-eth"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-usdt"></i>
          </div>
        </>
      );
    }
  }

  function row2() {
    if (!spin) {
      return (
        <>
          <div className={styles.ringEnd}>
            <i class="cf cf-ltc"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-btc"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-eth"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-usdt"></i>
          </div>
        </>
      );
    } else if (spin && ring2 === undefined) {
      return (
        <>
          <div className={styles.ringMoving}>
            <i class="cf cf-btc"></i>
          </div>
          <div className={styles.ringMoving}>
            <i class="cf cf-eth"></i>
          </div>
          <div className={styles.ringMoving}>
            <i class="cf cf-usdt"></i>
          </div>
          <div className={styles.ringMoving}>
            <i class="cf cf-ltc"></i>
          </div>
        </>
      );
    } else if (ring2 >= 1 && ring2 <= 50) {
      return (
        <>
          <div className={styles.ringEnd}>
            <i class="cf cf-btc"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-eth"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-usdt"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-ltc"></i>
          </div>
        </>
      );
    } else if (ring2 > 50 && ring2 <= 75) {
      return (
        <>
          <div className={styles.ringEnd}>
            <i class="cf cf-eth"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-usdt"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-ltc"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-btc"></i>
          </div>
        </>
      );
    } else if (ring2 > 75 && ring2 <= 95) {
      return (
        <>
          <div className={styles.ringEnd}>
            <i class="cf cf-usdt"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-ltc"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-btc"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-eth"></i>
          </div>
        </>
      );
    } else if (ring2 > 95 && ring2 <= 100) {
      return (
        <>
          <div className={styles.ringEnd}>
            <i class="cf cf-ltc"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-btc"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-eth"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-usdt"></i>
          </div>
        </>
      );
    }
  }

  function row3() {
    if (!spin) {
      return (
        <>
          <div className={styles.ringEnd}>
            <i class="cf cf-ltc"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-btc"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-eth"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-usdt"></i>
          </div>
        </>
      );
    } else if (spin && ring3 === undefined) {
      return (
        <>
          <div className={styles.ringMoving}>
            <i class="cf cf-btc"></i>
          </div>
          <div className={styles.ringMoving}>
            <i class="cf cf-eth"></i>
          </div>
          <div className={styles.ringMoving}>
            <i class="cf cf-usdt"></i>
          </div>
          <div className={styles.ringMoving}>
            <i class="cf cf-ltc"></i>
          </div>
        </>
      );
    } else if (ring3 >= 1 && ring3 <= 50) {
      return (
        <>
          <div className={styles.ringEnd}>
            <i class="cf cf-btc"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-eth"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-usdt"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-ltc"></i>
          </div>
        </>
      );
    } else if (ring3 > 50 && ring3 <= 75) {
      return (
        <>
          <div className={styles.ringEnd}>
            <i class="cf cf-eth"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-usdt"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-ltc"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-btc"></i>
          </div>
        </>
      );
    } else if (ring3 > 75 && ring3 <= 95) {
      return (
        <>
          <div className={styles.ringEnd}>
            <i class="cf cf-usdt"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-ltc"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-btc"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-eth"></i>
          </div>
        </>
      );
    } else if (ring3 > 95 && ring3 <= 100) {
      return (
        <>
          <div className={styles.ringEnd}>
            <i class="cf cf-ltc"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-btc"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-eth"></i>
          </div>
          <div className={styles.ringEnd}>
            <i class="cf cf-usdt"></i>
          </div>
        </>
      );
    }
  }

  function rand() {
    setRing1(Math.floor(Math.random() * (100 - 1) + 1));
    setTimeout(function () {
      setRing2(Math.floor(Math.random() * (100 - 1) + 1));
    }, 1000);
    setTimeout(function () {
      setRing3(Math.floor(Math.random() * (100 - 1) + 1));
    }, 2000);
  }

  function play() {
    if (ring3 > 1 || !spin) {
      if (input <= balance && input >= 1) {
        setRealBet(input);
        setSpin(true);
        setRing1();
        console.log(ring1);
        setRing2();
        setRing3();
        setBalance(balance - input);
        setJackpot(jackpot + input / 2);
        setTimeout(function () {
          rand();
        }, 2000);
      } else {
        setPrice(10);
      }
    }
  }

  function win() {
    if (ring1 <= 50 && ring2 <= 50 && ring3 <= 50 && ring1 !== undefined) {
      setPrice(1);
      setBalance(balance + balance * 15);
    } else if (
      ring1 > 50 &&
      ring1 <= 75 &&
      ring2 > 50 &&
      ring2 <= 75 &&
      ring3 > 50 &&
      ring3 <= 75 &&
      ring1 !== undefined
    ) {
      setPrice(2);
      setBalance(balance + balance * 20);
    } else if (
      ring1 > 75 &&
      ring1 <= 95 &&
      ring2 > 75 &&
      ring2 <= 95 &&
      ring3 > 75 &&
      ring3 <= 95 &&
      ring1 !== undefined
    ) {
      setPrice(3);
      setBalance(balance + balance * 25);
    } else if (
      ring1 > 95 &&
      ring1 <= 100 &&
      ring2 > 95 &&
      ring2 <= 100 &&
      ring3 > 95 &&
      ring3 <= 100 &&
      ring1 !== undefined
    ) {
      setPrice(4);
      setBalance(balance + jackpot);
      setJackpot(0);
    } else {
      setPrice(0);
    }
  }

  function numChecker(e) {
    const value = e.target.value;
    const regex = /^[0-9]+$/;
    if ((value.match(regex) && parseInt(value) >= 0) || value === "") {
      setInput(value);
    }
  }

  return (
    <div className={styles.fullSlot}>
      {/* <h1 className={styles.price}>{"Jackpot: " + jackpot + "€"}</h1> */}
      <div className={styles.slot}>
        <div className={styles.row}>{row1()}</div>
        <div className={styles.row}>{row2()}</div>
        <div className={styles.row}>{row3()}</div>
      </div>
      <div className={styles.slotFoot}>
        <input
          value={input}
          type="number"
          onChange={(e) => numChecker(e)}
          className={styles.betInput}
          placeholder="0€"
        ></input>
        <button className={styles.spinButton} onClick={() => play()}>
          Spin
        </button>
      </div>
      {/* <h1 className={styles.price}>
        {"Available cash: " + Math.round(balance * 100) / 100 + "€"}
      </h1> */}
      {/* <button
        onClick={() => setBalance(balance + 1000)}
        className={styles.buyMoreButton}
      >
        Add 1000 €
      </button> */}
    </div>
  );
};
