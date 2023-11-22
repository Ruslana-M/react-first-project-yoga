import React from "react";
import { useNavigate } from "react-router-dom";

function Asana(props) {
  const navigate = useNavigate();
  function returnButton() {
    navigate("/asanasCollection");
  }
  return (
    <div className="flex flex-col items-center justify-evenly border-solid border-2 border-gray-600 p-2r h-full">
      <img className="w-2/5" src={props.selectedAsana.pic} />
      <p className="font-bold"> {props.selectedAsana.english_name} </p>
      <p className="font-bold"> {props.selectedAsana.sanskrit_name} </p>
      <p className="font-bold"> {props.selectedAsana.translation_name} </p>
      <p className="font-bold"> {props.selectedAsana.pose_description} </p>
      <button className="btn btn-primary p-2 m-6" onClick={returnButton}>
        {" "}
        Back to Asanas
      </button>
    </div>
  );
}

export default Asana;
