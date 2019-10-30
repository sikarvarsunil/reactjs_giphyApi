import React, { Component } from 'react';
import './App.css';
import ItemList from './components/ItemList'
import Search from './components/Search'
import Modal from './components/Modal'
import _ from 'lodash'

const API_KEY = "FrBytkYAjkePp16TX17Q8g7kFO6zbP7V"

class App extends Component {
  constructor() {
    super()

    this.state = {
      img: {},
      animateImg: '',
      show: false
    }
  }
  showModal = (e) => {
    const animateImg = e.currentTarget.dataset['animatesrc'];
    this.setState({ show: true, animateImg: animateImg });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  componentDidMount() {
    this.getImgData("")
  }

  getImgData(searchKey) {
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${searchKey}&api_key=${API_KEY}&limit=20`)
    .then( res => res.json() )
    .then(json => {
      if(json.error) {
        alert("Error")
      } else {
        this.setState({
          img: json
        })
      }
    })
  }

  render() {
    const getImgData = _.debounce((searchKey) => {this.getImgData(searchKey)}, 100)

    if(!this.state.img.data) {
      return null
    } else {
      return (
        <div className="container">
          <Search onChange={(searchKey) => getImgData(searchKey)} />

          <div className="items-list">
            <ItemList animatedGif={this.state.img.data}  showModal={this.showModal}/>
            
          </div>
          <Modal className="modal-col" show={this.state.show} handleClose={this.hideModal}>
              <p><img src={this.state.animateImg} width="325" alt="full_img"/></p>
            </Modal>
        </div>
      );
    }
  }
}

export default App;
