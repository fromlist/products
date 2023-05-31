import { connectDB } from "../util/database"
import { MongoClient } from "mongodb"

export default async function Home() {

  const db = (await connectDB).db("forum");
  let result = await db.collection('post').find().toArray()
  console.log(result)
  return (
    <>
      <div className="list-bg">
        {result.map((results, i) => {
          return (
            <div className="list-item" key={result[i]._id}>
              <h4>{result[i].title}</h4>
              <p>{result[i].content}</p>
            </div>
          );
        })}
      </div>
    </>
  )
}
