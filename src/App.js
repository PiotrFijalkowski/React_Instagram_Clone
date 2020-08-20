import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="App">
     <div className="App__header">
       <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo" className="app_headerImage"/>
     </div>

     <Post username="Netciax" caption="Awsome! This Work!" imageUrl="https://images.squarespace-cdn.com/content/v1/52a1e3e4e4b055489471b02a/1534009601147-APZ9579DJIP8UAYO4WTL/ke17ZwdGBToddI8pDm48kL0xsO_zo2P7L8S-aIeZ7eJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmAf_4ymdGyABG5MXImgsXTGG5ECB_TAGzE9h9lclAO8vDkZL-Fi4FosXiNt0jW4w3/50+Engaging+Instagram+Post+Ideas+for+Online+Businesses+%7C+Elle+%26+Company"/>
     <Post />
     <Post />
     <Post />
     <Post />
    </div>
  );
}

export default App;