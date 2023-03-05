import Rank from "../Rank/Rank";
import "./imagelink.css";

const ImageLinkForm = () => {
  return (
    <div> 
      <div className="flex flex-col items-center mt-11">
        <Rank />
        <p className="p-4 text-2xl">
          VisionX will detect faces in your pictures.Give it a try
        </p>
        <div className="pattern flex p-5 shadow-2xl">
          <input type="text" className="text-3xl w-9/12 text-center" />
          <button className="w-4/12 grow bg-purple-500 transform transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
