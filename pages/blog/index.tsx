import { GetServerSideProps, GetStaticProps } from 'next'
import Link from 'next/link'
// getServerSideProps, getStaticProps 차이점 테스트
function Blog({ posts, rand }) {
  return (
    <>
      <h1>{rand}</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
      <Link href="/">
        <a className="nav-link">뒤로가기</a>
      </Link>
    </>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const rand = Math.floor(Math.random() * 10)
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const posts = await res.json()

  return {
    props: {
      posts,
      rand,
    },
  }
}
// export const getServerSideProps: GetServerSideProps = async () => {
//   const rand = Math.floor(Math.random() * 10)
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   const posts = await res.json()

//   return {
//     props: {
//       posts,
//       rand,
//     },
//   }
// }

export default Blog
