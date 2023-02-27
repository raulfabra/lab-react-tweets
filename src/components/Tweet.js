import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";



function Tweet(props) {
  /* let {user,timestamp,message} = props.tweet */
  //console.log(props.tweet)
  return (
    <div className="tweet">
      <ProfileImage image = {props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User user = {props.tweet.user} />
          <Timestamp timestamp = {props.tweet.timestamp} />
          
        </div>

        <Message message= {props.tweet.message} />
      
        <Actions />
        
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
