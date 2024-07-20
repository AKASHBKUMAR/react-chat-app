import React, { useState } from 'react';
import './DirectMessageComponent.css';
import img1 from "../../assets/Images/img2.jpeg";
import img2 from "../../assets/Images/img1.jpeg";
import img3 from "../../assets/Images/img3.jpg";
import img4 from "../../assets/Images/img4.jpg";
import img5 from "../../assets/Images/img5.jpg";
import img6 from "../../assets/Images/img6.jpg";
import img7 from "../../assets/Images/img7.jpg";
import img8 from "../../assets/Images/img8.png";
import img9 from "../../assets/Images/img9.webp";
import img10 from "../../assets/Images/wall2.jpg";
import img11 from "../../assets/Images/img11.jpg";
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import SendIcon from '@mui/icons-material/Send';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const DirectMessageComponent = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);

  const messages = [
    { name: 'Modiric', message: "What's your favorite season of the year" , img: img11, time: '09:12 AM' },
    { name: 'Ronaldo', message: 'Have you ever tried learning a new language?', img: img2, time: '10:30 AM' },
    { name: 'Kroos', message: 'Do you prefer cats or dogs as pets?', img: img3, time: '08:14 AM' },
    { name: 'Sethu', message: "What's the last book you read?", img: img4, time: '10:45 AM' },
    { name: 'Ramos', message: "What's your go-to comfort food?", img: img5, time: '12:37 AM' },
    { name: 'Benzema', message: "Have you ever been to a concert?", img: img6, time: '6:46 AM' },
    { name: 'Bale', message: "If you could visit any place in the world, where would you go?", img: img7, time: '05:54 AM' },
    { name: 'Casemiro', message: "What's the best movie you've seen recently?", img: img8, time: '04:48 AM' },
    { name: 'Abinesh', message: "What's the most adventurous thing you've ever done?", img: img9, time: '10:12 AM' },
  ];

  return (
    <React.Fragment>
        <div className='flex-container'>
            <div className='direct-message-container'>
                <div className='personal-details-container'>
                    <div className='profile-pic-container'>
                        <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot">
                        <Avatar alt="Remy Sharp" src={img1} sx={{ width: 56, height: 56 }} />
                        </StyledBadge>
                    </div>
                    <div className='personal-detail'>
                        <p className='name'>Akash</p>
                        <p className='light-gray'>Account Info</p>
                    </div>
                    <div className='search-icon-container'>
                        <SearchIcon className='search-icon' />
                    </div>
                    
                </div>
                <div className='hl'></div>
                <div className='direct-message-container2'>
                    <p className='light-gray msg'>Messages</p>
                    {messages.map((msg, index) => (
                        <div key={index} className='direct-message-content' onClick={() => setSelectedMessage(msg)}>
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot">
                                <Avatar alt={msg.name} src={msg.img} sx={{ width: 56, height: 56 }} />
                            </StyledBadge>
                            <div className='message-box '>
                                <p className='name'>{msg.name}</p>
                                <p>{msg.message}</p>
                            </div>
                            <div className='time-container light-gray'>
                                <p>{msg.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='selected-direct-message-container'>
                {selectedMessage && (
                    <div className='selected-message'>
                        <div className='selected-message-header'>
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot">
                                <Avatar alt={selectedMessage.name} src={selectedMessage.img} sx={{ width: 56, height: 56 }} />
                            </StyledBadge>
                            <div className='selected-name'>
                                <h2>{selectedMessage.name}</h2>
                            </div>
                            <div className='selected-message-functions'>
                                <div>
                                    <VideoCallOutlinedIcon/>
                                </div>
                                <div>
                                    <AddIcCallIcon/>
                                </div>
                                <div>
                                    <MoreVertIcon/>
                                </div>
                            </div>
                        </div>
                        <div className='chat-box'>
                            <img className='chat-wallpaper' src={img10} alt="" />
                            <div className='overlay'>
                                <p >{selectedMessage.message}</p>
                                <p className='time'>{selectedMessage.time}</p>
                            </div>
                            
                        </div>
                        <div className='text-space'>
                        
                            <SentimentSatisfiedOutlinedIcon className='emoji'/>
                            <AttachFileOutlinedIcon className='file-attach'/>
                            <input className='text-bar' type="text" placeholder='Type a message' />
                            <SendIcon/>
                        </div>
                
                    </div>
                    )}
            </div>
        </div>
      
      
    </React.Fragment>
  );
}

export default DirectMessageComponent;
