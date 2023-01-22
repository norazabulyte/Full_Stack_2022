import Blog from'./components/blog/Blog';

const Post=(props)=>{
    return(
        <div className='postas col-8'>
            <img src={props.post.image} width='200px' alt='something'/>
            <p className='category'>{props.post.category}</p>
            <p className='date'>{props.post.date}</p>
            <p className='title'>{props.post.title}</p>
            <p className='content'>{props.post.content}</p>
            <p className='continue reading'>continue reading</p>
            </div>
    )
}

export default Post;
