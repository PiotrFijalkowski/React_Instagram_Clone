import React from 'react';
import './Post.css';
import Avatar from "@material-ui/core/Avatar";

function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
      <Avatar
      className="post__avatar"
      alt={username}
      src="static/images/avatar/1.jpg"
      >

      </Avatar>
        <h3>{username}</h3>

      </div>

        <img className="post__image" src="https://images.squarespace-cdn.com/content/v1/52a1e3e4e4b055489471b02a/1534009601147-APZ9579DJIP8UAYO4WTL/ke17ZwdGBToddI8pDm48kL0xsO_zo2P7L8S-aIeZ7eJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmAf_4ymdGyABG5MXImgsXTGG5ECB_TAGzE9h9lclAO8vDkZL-Fi4FosXiNt0jW4w3/50+Engaging+Instagram+Post+Ideas+for+Online+Businesses+%7C+Elle+%26+Company" alt=""/>
    
        <h4 className="post__text"><strong>{username}</strong> {caption}</h4>
    </div>
  )
}

export default Post
