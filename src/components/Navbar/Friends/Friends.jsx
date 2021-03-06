import s from './Friends.module.css';
import FriendProfile from "./FriendProfile/FriendProfile";

const Friends = (props) => {
    let friendsProfiles = props.names.map(fp => <FriendProfile friendName={fp.friendName}/>);

    return (
        <div className={s.friendsBlock}>
            <h3>Friends</h3>
            <div className={s.friendsProfiles}>
                {friendsProfiles}
            </div>
        </div>
    );
}

export default Friends;
