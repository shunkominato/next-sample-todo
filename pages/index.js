import Head from 'next/head'
import Auth from '../components/Auth'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout title='nexta'>
      <Auth/>
    </Layout>
  )
}
