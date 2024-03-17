
const FlagItem = (props) => {
  return (
    <div className={props.mode ? "flex flex-col cursor-pointer items-center text-start  shadow-lg w-72 h-80  gap-5 rounded-lg m-10" : "flex flex-col cursor-pointer items-center text-start  shadow-lg w-72 h-80  gap-5 rounded-lg m-10 bg-zinc-900" }>
      <img src={props.flagData.flags.svg} className=" rounded-lg w-72 h-40 " alt="" />
      <div className=" text-start w-full ms-12 ">
        <h1 className="text-xl font-bold my-2">{props.flagData.name}</h1>
        <p><span className="font-semibold">Population:</span>{props.flagData.population}</p>
        <p><span className="font-semibold">Region:</span> {props.flagData.region}</p>
        <p><span className="font-semibold">Capital:</span> {props.flagData.capital}</p>
      </div>
    </div>
  );
};

export default FlagItem;
