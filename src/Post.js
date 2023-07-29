import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import InputOptions from './InputOptions'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { forwardRef } from 'react';

const Post = forwardRef(({name ,description ,message ,photoUrl},ref) => {
  return (
    <div ref={ref} className='post'>
        <div className="post_header">
            <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
        </div>
            <div className="post_body">
                <p>{message}</p>
            </div>

            <div className="post_buttons">
                <InputOptions Icon={ThumbUpOffAltIcon} title = 'Like' color = 'gray'/>
                <InputOptions Icon={ChatBubbleOutlineIcon} title = 'Comment' color = 'gray'/>
                <InputOptions Icon={ShareOutlinedIcon} title = 'Share' color = 'gray'/>
                <InputOptions Icon={SendOutlinedIcon} title = 'Send' color = 'gray'/>
            </div>
    </div>
  );
});

export default Post