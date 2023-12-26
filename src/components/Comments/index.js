import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentsList: [],
    commentsCount: 0,
    name: '',
    comment: '',
  }

  onChangeName = event => ({name: event.target.value})

  onChangeComment = event => ({comment: event.target.value})

  onAddComment = event => {
    const {name, comment} = this.state
    event.preventDefault()

    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentsCount: prevState.commentsCount + 1,
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  render() {
    const {commentsCount, commentsList} = this.state

    return (
      <form className="app-container" onSubmit={this.onAddComment}>
        <h1 className="title">Comments</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          alt="comments"
        />
        <p className="about">Say something about 4.0 Technologies</p>
        <input
          type="text"
          placeholder="Your Name"
          onChange={this.onChangeName}
        />
        <textarea
          rows="6"
          cols="55"
          placeholder="Your Comment"
          onChange={this.onChangeComment}
        />
        <button className="button" type="submit">
          Add Comment
        </button>
        <hr />
        <p className="comment">Comments {commentsCount}</p>
        <ul className="container">
          <CommentItem commentDetails={commentsList} />
        </ul>
      </form>
    )
  }
}

export default Comments
