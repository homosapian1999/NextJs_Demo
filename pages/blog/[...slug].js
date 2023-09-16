import { useRouter } from "next/router";

const BlogHomePage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>This is the blog HomePage</h1>
    </div>
  );
};

export default BlogHomePage;
