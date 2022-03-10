import React, { useEffect, useState } from "react";
import "./Widgets.css"
import  {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed ,      
}  from  "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";


function Widgets() {

  const [search, setSearch] = useState("")

  useEffect(() => {
   let searchString = localStorage.getItem("search")
   setSearch(searchString)
  },[]) 

  console.log("search==shbdshbhasb=>", search)

    return (
      <div className="widgets">
        <div className="widgets__input">
          <SearchIcon className="widgets__searchIcon" />
          <input placeholder="Search Twitter" type="text" onChange={e => setSearch(e.target.value)} onBlur={() => localStorage.setItem("search", search)}/>
        </div>
  
        <div className="widgets__widgetContainer">
          <h2>What's happening</h2>
  
          <TwitterTweetEmbed tweetId={"@Dhruvil24680405"} />

          {search && <TwitterTimelineEmbed
            sourceType="profile"
            screenName={search}
            options={{ height: 400 }}
          /> }

  
          <TwitterShareButton
            url={"https://facebook.com/cleverprogrammer"}
            options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
          />
        </div>
      </div>
    );
  }
  
  export default Widgets;

