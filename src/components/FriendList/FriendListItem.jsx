import css from './FriendListItem.module.css'

export const FriendListItem = (props) => {
    return (
        props.friends.map((friend) => {
            return(
            <li key={friend.id} className={css.item}>
                <span className={friend.isOnline ? css.online : css.offline}></span>
                <img className={css.avatar} src={friend.avatar} alt={friend.name} width="48" />
                <p className={css.name}>{friend.name}</p>
                </li>
            )
      })
        
    )
}