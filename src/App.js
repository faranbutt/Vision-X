import { Component } from "react";
import ParticlesBg from "particles-bg";
import NavBar from "./components/navigation/NavBar";
import Logo from "./components/logo/logo";
import ImageLinkForm from "./components/image-link-form/image-link";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/Face-recognition/face-recognition";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";



const intialState = {
  input: "",
  imageUrl:"",
  box:{},
  route:'signin',
  SIGN:false,
  user:{
    id: "",
    name: '',
    email: '',
    enteries: 0,
    joined: ''
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = intialState
  }
  
  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      enteries: data.enteries,
      joined: data.joined
    }})
  }
  calculateFaceLocation = (data) => {
    const clarifiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const faceImage = document.getElementById('inputimage');
    const width = Number(faceImage.width)
    const height = Number(faceImage.height)
    return {
      toprow: height * clarifiFace.top_row,
      leftcol: width * clarifiFace.left_col,
      bottomrow: height - (clarifiFace.bottom_row * height),
      rightcol: width - (clarifiFace.right_col * width)
    }
  }
  displayFaceBox = (box) => {
    this.setState({box: box})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  };

 
  
  onButtonSubmit = () => {

    this.setState({imageUrl:this.state.input})
    fetch('https://murmuring-brook-81935.herokuapp.com/imageUrl',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
        input: this.state.input,
      })
    })
    .then(response=>response.json())
    .then(response => {
      
      if(response){
        fetch('https://murmuring-brook-81935.herokuapp.com/image',{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
        id: this.state.user.id,
      })
    })
     .then(response => response.json())
     .then(count => {
      this.setState(Object.assign(this.state.user, {enteries : count}))
     })
     .catch(console.log)

      }
      this.displayFaceBox(this.calculateFaceLocation(response))
    
    })
    .catch(error=>console.log(error))
    
  };

  isSignedIn = (route) => {
    if(route==='signin'){
      this.setState(intialState)
    }
    else if(route === 'home'){
      this.setState({SIGN:true})
    }
    this.setState({route:route})
  }

  render() {
    const {input, imageUrl, box, route, SIGN} = this.state;
    return (
      <div className="App">
        <NavBar isSignedIn={this.isSignedIn} SIGN={SIGN} />
        {route==="home" ? (
        <div>
        
        <ImageLinkForm name={this.state.user.name} enteries={this.state.user.enteries} onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}  />
        <FaceRecognition box={box} imageUrl={imageUrl} />
        <ParticlesBg type="cobweb" bg={true} />
        </div>
        ) : (
          <div>
          {route==="signin" ? (
            <div>
            <Signin isSignedIn={this.isSignedIn} loadUser = {this.loadUser} />
            <ParticlesBg type="cobweb" bg={true} />
            </div>
          ):(
        <div>
       
        <Register  isSignedIn={this.isSignedIn} loadUser = {this.loadUser} />
        <ParticlesBg type="cobweb" bg={true} />
        </div>
          )}
          </div>
        )}
        
      </div>
    );
  }
}

export default App;
