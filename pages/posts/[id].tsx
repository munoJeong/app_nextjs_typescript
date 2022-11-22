import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostIds, getPostData } from "../../lib/posts";
import homeStyle from '../../styles/home.module.css';
import Head from 'next/head';

export default function Post({postData}:{
  postData:{
    title: string
    date: string
    contentHtml: string
  }}){


  return(
    <div>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={homeStyle.headingXl}>{postData.title}</h1>
        <div className={homeStyle.lightText}>
          {postData.date}
        </div>
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
      </article>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  console.log('paths', paths)

  return{
    paths,
    fallback: false
    //false 면 getStaticPaths로 리턴되지 않는것은 모두 404페이지가 뜬다
    //true면 404로 뜨지 않고, fallback 페이지가 뜨게 된다
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) =>{
  console.log('params', params);
  const postData = await getPostData(params?.id as string) // params가 있으면 id를 사용(string으로 지정)
  return{
    props: {
      postData
    }
  }
}

