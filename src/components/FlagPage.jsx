import React from "react";
import Header from "./Header";
import { Link, useParams } from "react-router-dom";
const FlagPage = (props) => {
  
  const {flagId} = useParams()
  
  return (
    <div>

      <Link to={'/'}>
        <div className={props.mode ? "bg-black text-white px-8 rounded-xl w-28 ms-24 cursor-pointer shadow-xl py-2 relative mt-12" : "bg-white text-black px-8 rounded-xl w-28 ms-24 cursor-pointer shadow-xl py-2 relative mt-12"}>
          <p className="text-lg">Back</p>
        </div>
      </Link>

      <div className="flex flex-row gap-20 px-24 mt-16 ">
        <img  className="rounded-lg w-1/3 h-96" src={props.data[flagId].flag} alt="" />
        <div>
          <h1 className="font-bold text-3xl mb-12">{props.data[flagId].name}</h1>
          <div className="flex my-3 flex-row gap-32">
            <p>Native Name: {props.data[flagId].nativeName}</p>
            <p>Top Level Domain: {props.data[flagId].topLevelDomain}</p>
          </div>
          <div className="flex my-3 flex-row gap-32">
            <p>Population: {props.data[flagId].population}</p>
            <p>Currencies: {props.data[flagId].currencies && props.data[flagId].currencies[0].name}</p>
          </div>
          <div className="flex my-3 flex-row gap-32">
            <p>Region: {props.data[flagId].region}</p>
            <p>Languages: {props.data[flagId].languages[0].name}</p>
          </div>
          <p className="my-3">Sub Region: {props.data[flagId].subregion}</p>
          <p className="my-3">Capital: {props.data[flagId].capital}</p>

          <div className="flex flex-row gap-12">
            <p>Border Countries:</p>
            <div className={props.data[flagId].borders && props.mode ? "bg-black cursor-pointer text-white rounded-xl  px-5 py-2" : "bg-white cursor-pointer text-black rounded-xl  px-5 py-2"}>
              {props.data[flagId].borders && props.data[flagId].borders[0]}
            </div>
            <div className={props.data[flagId].borders && props.mode  ? "bg-black cursor-pointer text-white rounded-xl  px-5 py-2" : "bg-white cursor-pointer text-black rounded-xl  px-5 py-2"}>
              {props.data[flagId].borders && props.data[flagId].borders[1]}
            </div>
            <div className={props.data[flagId].borders && props.mode  ? "bg-black cursor-pointer text-white rounded-xl  px-5 py-2" : "bg-white cursor-pointer text-black rounded-xl  px-5 py-2"}>
              {props.data[flagId].borders && props.data[flagId].borders[2] }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlagPage;
