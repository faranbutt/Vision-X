import './face-recognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
    return (
       <div className='flex justify-center'> 
        <div className="flex absolute justify-center mt-4 mx-auto"> 
            <img id="inputimage" src={imageUrl} alt="" width={320} height={"auto"}/>
            <div className="bounding-box" style={{top:box.toprow,bottom:box.bottomrow,left:box.leftcol,right:box.rightcol}}></div>
        </div>
    </div>
    );
}
export default FaceRecognition;