import React from 'react';
import axios from 'axios';
import './PostStream.css';

export class PostStream extends React.Component {
//function PostEditor () {
  state = {
    title: '',
    body: '',
    posts: []
  };

  componentDidMount = () => {
    this.getProjectPost();
  };

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

  // handleChange = ({target}) => {
  //   const {name, value} = target;

  //   this.setState({ [name]: value }); //dynamically pass value ex. [name]=title
  // };

 

  displayProjectPost = (posts) => {
    if (!posts.length) return null; //ingnore empty states

    return posts.map((post, index) => (
    <>
      <div className={`post-container-${this.props.postType}`}>
        <div key={index} className='project-post'>
          
              {/* <div className='post-media'> */}
              <div className={`post-media-${this.props.postType}`}>
                  <img  src={`${post.image}`} alt='Post'/>
              </div>
              <div class='post-context'>
                <div className='post-title'>
                  <h2>{post.title}</h2>
                </div> 
                <div  className='post-info'>
                  <h4>{this.props.nameSkills}</h4>
                  <p>{post.skills}</p>
                  <h4>{this.props.nameAbility}</h4>
                  <p>{post.ability}</p>
                </div>
                <p className='post-text'>{post.body.split('\n')}</p>
                {/* <span className='post-text'>{post.body.split("\n")}</span> */}
                {/* <p className='post-text'>{post.body.replace(/(\r\n|\n|\r)/gm, "<br />")}</p> */}
                {/* <a href='#' className='post-read-more'>Read More</a> */}
              </div>
              
          
        </div>
      </div>
    </>
    ));
  }

  render() {

    console.log('state: ', this.state);

    // //Filter POST types
    // let postFilter = this.state.posts.filter((posts) => {
    //   return posts.type.toLowerCase().includes(this.state.postType.toLowerCase())
    // });

    //JSX
    return (
      <>
      <div>
          {this.displayProjectPost(this.state.posts)}
      </div>
      </>
    );
  }
}


