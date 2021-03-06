import s from "./FriendProfile.module.css";

const FriendProfile = (props) => {
    return (
        <div className={s.friendProfile}>
            <img src='https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png'/>
            <h6>{props.friendName}</h6>
        </div>
    );
}

export default FriendProfile;
