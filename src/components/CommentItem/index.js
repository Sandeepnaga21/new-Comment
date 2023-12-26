import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {id, name, comment, isLiked} = commentDetails
  const time = console.log(formatDistanceToNow(new Date()))

  const onClickLikeBtn = () => {}

  const onClickdeleteBtn = () => {}

  const imgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="list-container" key={id}>
      <p className="logo">{name ? name.slice(0, 2) : ''}</p>
      <h1 className="name">{name}</h1>
      <p className="comment">{comment}</p>
      <p className="time">{time}</p>
      <div>
        <button className="button" onClick={onClickLikeBtn}>
          <img src={imgUrl} alt="like" />
        </button>
        <button testid="delete" className="button" onClick={onClickdeleteBtn}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
