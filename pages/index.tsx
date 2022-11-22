import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import homeStyles from '../styles/Home.module.css'
import {getSortedPostsData} from '../lib/posts'


const Home = ({allPostsData}:{
  allPostsData:{
    date:string
    title:string
    id:string
  }[]
}) => {
  console.log('allPostsData', allPostsData);
  return (
    <div>
      <Head>
        <title>Your Name</title>
      </Head>
      <section>
        <p>[Your Self Introduction]</p>
        <p>(This is a website)</p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}>
          {allPostsData.map(({id, date, title}) =>(
          <li className={homeStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <span>{title}</span>
            </Link>
            <br />
            <small className={homeStyles.lightText}>

            </small>
          </li>
          ))}
        </ul>
      </section>
    
    </div>
  )
}
//NextJs에서 데이터를 가져오는 방법
//getStaticProps 빌드할때 데이터를 불러옴
//getStaticPaths pre-render시 동적라우팅 구현
//getServerSideProps serversiderendering으로 요청이 있을때 불러옴
export default Home;

export const getStaticProps: GetStaticProps = async () =>{
  const allPostsData = getSortedPostsData()
  return{
    props:{
      allPostsData // id, date, title 포함해서 props로 전달
    }
  }
}
