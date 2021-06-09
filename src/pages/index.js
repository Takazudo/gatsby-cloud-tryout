import * as React from "react"
import useAxios from "axios-hooks"
import Layout from "../components/layout"
import { css } from "@emotion/css"

const styles = {
  dogs: css`
    overflow: hidden;
    margin: 0 0 0 -20px;
  `,
  dog: css`
    width: 200px;
    height: 200px;
    margin: 20px 0 0 20px;
    float: left;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border: 1px solid black;
    }
  `,
}

const IndexPage = () => {
  const [{ data, loading, error }, refetch] = useAxios("/api/dog")
  return (
    <Layout>
      <h1>Gatsby cloud functions demo</h1>
      <button onClick={() => refetch()}>Refetch!</button>
      <div>{loading && "Loading..."}</div>
      {error && <div>Error!</div>}
      <div className={styles.dogs}>
        {data &&
          data.map(dog => (
            <div className={styles.dog} key={dog.id}>
              <img src={dog.src} alt="" />
            </div>
          ))}
      </div>
    </Layout>
  )
}
export default IndexPage
