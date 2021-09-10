

const NewPost = (post) => {
  return (
    <div>
      <p>{post.message}</p>
      <p>{post.name}</p>
      <p>{post.text}</p>
    </div>
  );
};
export default NewPost;
