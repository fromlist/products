import { MongoClient } from "mongodb";
import { connectDB } from "@/util/database";

export default async function Home() {
  const client = await connectDB;
  const dbName = "acbox"
  const db = client.db(dbName);
  let result = await db.collection("2023");
  let collectionName = result.namespace.replace(`${dbName}.`,'')
  let collectionList = await db.collection("2023").find().toArray();
  console.log(collectionList)
  return (
    <div>
      <table className={'border-collapse border'}>
        <caption>{collectionName} 가전, 소품</caption>
        <thead>
          <tr>
            <th>구분</th>
            <th>제품</th>
            <th>가격</th>
            <th>비용처리</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
        {collectionList.map((product, index) => {
          return (
            <tr id={index}>
              <td>{product.product}</td>
              <td className={'al'}>
                {
                  product.link
                  ? <a href={product.link}>{product.name}</a>
                  : product.name
                }
              </td>
              <td>{product.value}</td>
              <td>{product.site}</td>

              <td>
                {
                  product.notelink
                  ? <a href={product.notelink}>{product.note}</a>
                  : product.note
                }
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
}
