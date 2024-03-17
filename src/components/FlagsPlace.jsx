import React, { useEffect, useState } from "react";
import searchIcon from "../assets/search.png";
import whiteSeachIcon from "../assets/icons8-search-50.png";
import whiteDownArrowIcon from "../assets/icons8-down-arrow-50.png";
import downArrowIcon from "../assets/down-arrow.png";
import FlagItem from "./FlagItem";
import { Link } from "react-router-dom";

const FlagsPlace = (props) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchFlags, setSearchFlags] = useState("");
  const [regionFlags, setRegionFlags] = useState("");

  useEffect(() => {
    if (searchValue === "") {
      setSearchFlags("");
    }
  }, [searchValue]);

  const clickHandler = (region) => {
    const filtered = props.data.filter(
      (item) => item.region.toLowerCase() == region.toLowerCase()
    );
    setRegionFlags(filtered);
    setModalVisibility(false);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setSearchValue(inputValue);

    const filtered = props.data.filter((item) =>
      item.name.toLowerCase().startsWith(inputValue)
    );

    setSearchFlags(filtered);
    setRegionFlags([]);
  };

  return (
    <div className="text-center items-center">
      {modalVisibility && (
        <div
          className={
            props.mode
              ? "flex flex-col gap-5 rounded-xl shadow-xl p-3 absolute top-56 bg-white ps-10 pe-32 text-start right-32"
              : "flex flex-col gap-5 rounded-xl shadow-xl p-3 absolute top-56 ps-10 pe-32 text-start bg-zinc-900 right-32"
          }
        >
          <p
            className="cursor-pointer"
            onClick={() => {
              clickHandler("Africa");
            }}
          >
            Africa
          </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              clickHandler("Asia");
            }}
          >
            Asia
          </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              clickHandler("America");
            }}
          >
            America
          </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              clickHandler("Europe");
            }}
          >
            Europe
          </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              clickHandler("Oceania");
            }}
          >
            Oceania
          </p>
        </div>
      )}

      <div className="flex justify-between px-32 mt-10">
        <div
          className={
            props.mode
              ? "flex flex-row items-center gap-3 bg-white shadow-lg px-10 py-5 rounded-xl"
              : "flex flex-row items-center gap-3 shadow-lg px-10 py-5 rounded-xl bg-zinc-900"
          }
        >
          <img
            src={props.mode ? searchIcon : whiteSeachIcon}
            className="w-6 h-6 cursor-pointer"
            alt=""
          />
          <input
            className={
              props.mode
                ? "outline-none ps-5 w-80"
                : "outline-none ps-5 w-80 bg-zinc-900"
            }
            value={searchValue}
            onChange={handleInputChange}
            type="text"
            placeholder="Search for a country..."
          />
        </div>
        <div
          onClick={() => setModalVisibility(!modalVisibility)}
          className={
            props.mode
              ? "flex flex-row items-center cursor-pointer gap-3 px-10 py-5 bg-white shadow-lg rounded-xl"
              : "flex flex-row items-center cursor-pointer gap-3 px-10 py-5 shadow-lg rounded-xl bg-zinc-900"
          }
        >
          <p>Filter By Region</p>
          <img
            src={props.mode ? downArrowIcon : whiteDownArrowIcon}
            className="w-6 h-6"
            alt=""
          />
        </div>
      </div>

      {searchFlags && (
        <div className="w-full h-full flex flex-wrap">
          {searchFlags.map((item, index) => {
            return (
              <Link key={index} to={`/flag/${props.data.indexOf(item)}`}>
                <div key={index}>
                  <FlagItem mode={props.mode} flagData={item} />
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {regionFlags && (
        <div className="w-full h-full flex flex-wrap">
          {regionFlags.map((item, index) => {
            return (
              <Link key={index} to={`/flag/${props.data.indexOf(item)}`}>
                <div key={index}>
                  <FlagItem mode={props.mode} flagData={item} />
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {!searchFlags && !regionFlags && (
        <div className="flex flex-row px-12">
          {props.data.slice(20, 25).map((item, index) => {
            return (
              <Link key={index} to={`/flag/${20 + index}`}>
                <div key={index}>
                  <FlagItem mode={props.mode} flagData={item} />
                </div>
              </Link>
            );
          })}
        </div>
      )}
      {!searchFlags && !regionFlags && (
        <div className="flex flex-row px-12">
          {props.data.slice(55, 60).map((item, index) => {
            return (
              <Link key={index} to={`/flag/${55 + index}`}>
                <div key={index}>
                  <FlagItem mode={props.mode} flagData={item} />
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FlagsPlace;
