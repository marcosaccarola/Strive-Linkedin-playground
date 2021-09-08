
const Post = ({postData}) => {

    console.log("this is postdata",postData)

return (
    <div>
        {
            postData.slice(0, 7).map( (post) =>
               
                <div>
                    <h5>Something</h5>
                   <p> {post.username} </p>
                   <p> {post.user.id} </p>
                   <p> {post.user.name} </p>
                   <p> {post.user.bio} </p>
                   <p> {post.user.area} </p>
                   <p> {post.text} </p>
                   <img src={post.user.image} alt="userImg" style={{height:60, width:60}}/>

                </div>
                
            )
        }
    </div>
)
}
export default Post