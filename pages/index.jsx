import Post from "@/components/Post";

function Home({ posts }) {
  return (
    <>
      {posts.data.map((post) => {
        return <Post post={post} key={post._id} />;
      })}
    </>
  );
}

export async function getServerSideProps(context) {
  let res = await fetch("/api/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let posts = await res.json();

  return {
    props: { posts },
  };
}

export default Home;
