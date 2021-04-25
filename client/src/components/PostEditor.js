import React from 'react';
import axios from 'axios';
//import { post } from '../../routes/api';


import './PostEditor.css';

export class PostEditor extends React.Component {
//function PostEditor () {
  state = {
    title: '',
    body: '',
    posts: []
  };

  componentDidMount = () => {
    this.getProjectPost();
  };

  // getProjectPost = () => {
  //   axios.get('/api/projects')
  //     .then((response) => {
  //       const data = response.data;
  //       this.setState({ posts: data});
  //       console.log('Data received from database');
        
  //     })
  //     .catch(() => {
  //       alert('Error retreiving data from database')
  //       //console.log('Internal server error');
  //     });
  // };

  getProjectPost = () => {
    axios.get(`/api/${this.props.postType}`)
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data});
        console.log('Data received from database');
        
      })
      .catch(() => {
        alert('Error retreiving data from database')
        //console.log('Internal server error');
      });
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value  //dynamically pass value ex. [name]=title
    });
  };

  handleChange = ({target}) => {
    const {name, value} = target;

    this.setState({ [name]: value }); //dynamically pass value ex. [name]=title
  };

  //HTTP POST to database
  submit = (event) => {
    event.preventDefault(); //disable browser from refeshing

    const payload = {
      title: this.state.title,
      body: this.state.body
    };

    axios({
      url:'/api/save',
      method:'POST',
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server');
        this.resetUserInputs(); //clear text field aafter data was sent successfully
        this.getProjectPost();
      })
      .catch(() => {
        console.log('Internal server error');
      });

  };

  //clear text field
  resetUserInputs = () => {
    this.setState({
      title: '',
      body: ''
    });
  };

  displayProjectPost = (posts) => {
    if (!posts.length) return null; //ingnore empty states

    return posts.map((post, index) => (
      <div key={index} className='project-post-display'>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
  }

  render() {

    console.log('state: ', this.state);

    //JSX
    return (
      <>
      <div className='post-editor'>
        <h2>Post Editor</h2>
        <form onSubmit={this.submit}>
          <div className='form-input'>
            <input 
              type='text'
              name='title'
              placeholder='Title'
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-input'>
            <textarea 
              name='body' 
              cols='30' 
              rows='10' 
              placeholder='Body'
              value={this.state.body} 
              onChange={this.handleChange}
            >
            </textarea>
          </div>

          <button className='submit-button'>Submit</button>
        </form>

        <div className='project-post'>
          {this.displayProjectPost(this.state.posts)}
        </div>
      </div>
      </>
    );
  }
}


//export default PostEditor;
