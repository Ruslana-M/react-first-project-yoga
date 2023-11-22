import React from "react";

function AsanasCollection(props) {
 

  return (
    <div className="flex flex-wrap p-20 justify-around">
      {props.data.asanas.map((i) => (
        <div className="border-solid border-2 border-gray-600 p-2" key={i.id}>
          <img className="w-48 h-48" src={i.pic} />
          <p className="font-bold"> {i.english_name} </p>

          <p className="cursor-pointer underline  decoration-sky-500"
            onClick={() => props.onClickAsana(i)} > Read More
          </p>
        </div>
      ))}
    </div>
  );
}

export default AsanasCollection;
