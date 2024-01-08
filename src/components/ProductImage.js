import React, { Component } from 'react'
import img1 from './images/Screenshot 2024-01-08 080457.png'
import img2 from './images/Screenshot 2024-01-08 081028.png'
import img3 from './images/Screenshot 2024-01-08 081119.png'
import img4 from './images/Screenshot 2024-01-08 081216.png'


class ProductImage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       src: img1
    }
  }

  changeImg1(){
    this.setState({
      src: img1
    })
  }
  changeImg2() {
    this.setState({
      src: img2
    })
  }
  changeImg3() {
    this.setState({
      src: img3
    })
  }
  changeImg4() {
    this.setState({
      src: img4
    })
  }

  render() {
    return (
      <>
          <div className='ProductImage'>

            <div className='MainImage'>
              <img src={this.state.src} className='img'></img>
            </div>

            <div className='SubImages'>
            <img src={img1} onMouseOver={() => this.changeImg1()} onMouseLeave={() => this.changeImg1()}></img>
            <img src={img2} onMouseOver={() => this.changeImg2()} onMouseLeave={() => this.changeImg1() }></img>
              <img src={img3} onMouseOver={() => this.changeImg3()}></img>
              <img src={img4} onMouseOver={() => this.changeImg4()}></img>
              </div>

            </div>
           </>
    )
  }
}

export default ProductImage