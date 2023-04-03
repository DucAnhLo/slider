import { useState } from 'react';
import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Scrollbar } from 'swiper';
import {data} from './data'
import logo from './assets/image/logo.svg';
import "swiper/css/scrollbar";
import './scrollbar-style.css';
import DataPopup from './popUpData';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';


function App() {
  const getRandomColor = () => {
    const colors = ['#A7A5D6', '#F7CAC9', 
    '#92A8D1', '#F2D7EE', '#D5C7BC', '#B5EAD7', '#F8B195', '#BDB2FF', 
    '#F67280', '#C6D8D3', '#ECE5CE', '#F9D5E5', '#E2F0CB', '#F0B8B8', 
    '#A3E4D7', '#F7E4BE', '#C7CEEA', '#E4F1FE', '#D4B4B4', '#F1E9CB', 
    '#C2DFFF', '#F4F4F4', '#B8F2E6', '#E1E1E1', '#F8DEC9', '#A2D2FF', '#FFD3B5', 
    '#FFADAD', '#FFB7B2', '#FFDAC1', '#FFFFC7', '#D3F8E2', '#E2B2B2', '#B2B2E2', 
    '#C2D1F0', '#E2B2C2', '#F0D1C2', '#E2C2B2', '#B2E2D3', '#F0C2D1', '#C2E2B2', 
    '#D1F0C2', '#D8C7E0', '#B2E2B2', '#D8E0C7', '#C7D8E0', '#E0D8C7', '#E2B2E2', 
    '#C2D8E2', '#D8C2E2', '#E2D8C2', '#C2E2D8', '#D8E2C2', '#E6E6FA', '#F0E68C', 
    '#FAEBD7', '#F0F8FF', '#FFEBCD', '#F5DEB3', '#F0FFF0', '#FFFACD', '#FAF0E6', 
    '#FFF0F5', '#FFE4E1'];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  
  const [selectedData, setSelectedData] = useState(null);
  const [open, setOpen] = useState(false);
  
  const handleClick = (data) => {
    setSelectedData(data);
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  


  return (
    <div className="container">
      <div className='nav-container'>
        <img className="logo-svg" src={logo} alt="Logo" />
        <div className='title-container'>
          <h1 className="heading">Top Rated</h1>
          <h1 className="heading">Freelancer</h1>
          <h3>More than 230+ job offer everyday</h3>
        </div>
      </div>

      <div className='body-container'>
      <Swiper
         //effect={'coverflow'}
         grabCursor={true}
         centeredSlides={true}
         loop={true}
         slidesPerView={3}
         coverflowEffect={{
           rotate: 0,
           stretch: 0,
           depth: 100,
           modifier: 2.5,
         }}
         //pagination={{ clickable: true }}
         scrollbar={{
          hide: false,
        }}
         modules={[EffectCoverflow, Pagination, Navigation,Scrollbar]}
         className="s-container"
      >
        {data.map((data) => (
          <SwiperSlide key={data.image}> 
            <div className='avatar-container' style={{ backgroundColor: getRandomColor(), borderRadius:'50px', margin:' 4rem 3rem' }}>
              <img className='avatar' src={data.image} alt="" />
              <div className='text-overlay'>
                <p className='name'>{data.name}</p>
                <p>{data.title}</p>
              </div>
              <div className='text-overlay-top'>
                <button onClick={() => handleClick(data)}>See More</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{selectedData && selectedData.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {selectedData && selectedData.title}
            <img src={selectedData && selectedData.image} style={{height:"500px", width:'100%'}} alt="" />
            <p>Age: 20</p>
            <p>Jobs done: 21</p>
            <p>Rating: 9/10</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  )
}

export default App
