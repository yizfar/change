import axios from "axios";
import React, { useContext, useRef, setState } from "react";
import { ChangeContext } from "../conetext";
import ViewChange from "./viewchange";
import ReactTooltip from "react-tooltip";
import { toast } from 'react-toastify';


function InputChange(props) {
  let { total, setTotal } = useContext(ChangeContext);

  let amountRef = useRef();
  let coin1Ref = useRef();
  let coin2Ref = useRef();

  const cal = () => {
    doApi();
  };

  const switchCoin = () => {
    let temp = coin1Ref.current.value;
    coin1Ref.current.value = coin2Ref.current.value;
    coin2Ref.current.value = temp;
     toast.success("The currencies have changed");
    doApi();
  };

  const doApi = async () => {
    let coin1 = coin1Ref.current.value;
    let coin2 = coin2Ref.current.value;
    let amount1 = amountRef.current.value;

    let url =
      "https://freecurrencyapi.net/api/v2/latest?apikey=f2dce500-45f0-11ec-9860-7954a32a920b";

    let resp = await axios.get(url);

    console.log(resp.data.data);

    let from1 = 1;
    if (coin1 != "USD") {
      from1 = resp.data.data[coin1];
    }

    let to2 = 1;
    if (coin2 != "USD") {
      to2 = resp.data.data[coin2];
    }

    let Total = (1 / from1) * to2 * amount1;
    console.log(Total);

    setTotal(Total);
  };
  return (
    <div className="container" id="input">
      <h1 data-tip="Change ">Wellcome to Exchange.</h1>
      <div className="row  row-lg-cols-g-2 ">
        <div
          id="select"
          className="col-md-5 border border-secondary  rounded m-4"
        >
          <select
            ref={coin1Ref}
            onChange={cal}
            className="p-5"
            id="selectbox"
            data-selected=""
          >
            <option
              value=""
              selected="selected"
              disabled="disabled"
              data-tip="Choose a coin"
            >
              Select a Coin
            </option>
            <option value="">...</option>
            <option value="USD">$ USD</option>
            <option value="EUR">€ ERU</option>
            <option value="ILS">₪ LIS</option>
            <option value="GBP">£ STERLING</option>
            <option value="BTC">₿ BITCOIN</option>
            <option value="CAD">$ CANDIAN DOLLAR</option>
          </select>
          <div id="view" className="mt-3 text-center col-lg">
            <input
              id="input1"
              ref={amountRef}
              onInput={cal}
              type="number"
              defaultValue="100"
              className="h1 text-center"
              style={{ color: "red" }}
            />

            <hr />
          </div>
        </div>

        <div
          id="signc"
          className="col-lg-1 h1 "
          onClick={switchCoin}
          data-tip="Change coins"
        >
          <i class=" fa fa-exchange  fa-lg" aria-hidden="true"></i>
        </div>

        <div
          id="select"
          className="col-md-5 border border-secondary rounded m-4"
        >
          <select
            ref={coin2Ref}
            onChange={cal}
            data-tip="Choose a coin"
            className="form-control coins"
            name="coins"
            className="p-5"
            id="selectbox"
            data-selected=""
          >
            <option value="" selected="selected" disabled="disabled">
              Select a Coin
            </option>
            <option value="">...</option>
            <option value="USD">$ USD</option>
            <option value="EUR">€ ERU</option>
            <option value="ILS">₪ LIS</option>
            <option value="GBP">£ STERLING</option>
            <option value="BTC">₿ BITCOIN</option>
            <option value="CAD">$ CANDIAN DOLLAR</option>
          </select>
          <ViewChange />
        </div>
      </div>
    </div>
  );
}

export default InputChange;
