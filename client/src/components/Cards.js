import React from 'react';
import CardItems from './CardItems';
import './Cards.css';
import axios from 'axios';


export class Cards extends React.Component {
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
 

  displayQuickView = (posts) => {
    if (!posts.length) return null; //ingnore empty states

    return posts.map((post, index) => (
    <>    
        <CardItems 
        key ={index}
        src={`${post.image}`}
        text={`${post.title}`}
        label={`${post.label}`}
        path={`${post.type}`}
        />        
    </>
    ));
  }

  render() {

    console.log('state: ', this.state);

    //JSX
    return (
      <>
      <div className='cards'>
            <h1>Projects Quick View</h1>
            <div className='cards-container'>
                <div className='cards-wrapper'>
                    <ul className='cards-items'>
                        {this.displayQuickView(this.state.posts)}
                    </ul>
                </div>
            </div>
        </div>
      </>
    );
  }
}





// function Cards() {
//     return (
//         <div className='cards'>
//             <h1>Projects Quick View</h1>
//             <div className='cards-container'>
//                 <div className='cards-wrapper'>
//                     <ul className='cards-items'>
//                        <CardItems 
//                        src='/images/img-4.JPG'
//                        text='Hungry Alarm'
//                        label='Team Project, Database Admin'
//                        path='/projects'
//                        /> 
//                        <CardItems 
//                        src='/images/img-5.JPG'
//                        text='Mock E-comerce Web App'
//                        label='Team Project, Leadership'
//                        path='/projects'
//                        /> 
//                        <CardItems 
//                        src='/images/img-6.JPG'
//                        text='Sunspots Time Series Prediction'
//                        label='Machine Learning, Personal Project'
//                        path='/projects'
//                        /> 
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Cards

