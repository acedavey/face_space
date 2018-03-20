import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/posts';

class Home extends Component {

  state = {
    title: '',
    body: '',
  }

  componentDidMount() {
    this.props.dispatch(getPosts())
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    title: this.state.title,
    body: this.state.body,
    user_id: this.props.collPerson.id
    
  }

  this.propsdispatch(newPost(post))
  this.setState({})

  render() {
    return (
      <div>
        <Header>Welcome: {this.props.coolPerson.name}</Header>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
            <input
              name="body"
              onChange={this.handleChange}
              value={this.state.body}
            />
            <button type="submit">Add Post</button>
          </form>
        </div>
        <div>
          { this.props.posts.map( p => {
            return(
              <div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <button>Edit Post</button>
                <button>Delete Post</button>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    coolPerson: state.user,
    posts: state.posts,
  }
}

export default connect(mapStateToProps)(Home);```
Message Input

Message uofu_spring_2018