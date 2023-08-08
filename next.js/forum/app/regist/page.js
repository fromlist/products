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
    <div className={'regist-list'}>
		<ul>
			<li>
				<label htmlFor="regProduct">구분</label>
				<input type="text" id={'regProduct'} placeholder="예)청소기" />
			</li>
			<li>
				<label htmlFor="regName">제품</label>
				<input type="text" id={'regName'} />
			</li>
			<li>
				<label htmlFor="regLink">링크</label>
				<input type="text" id={'regLink'} />
			</li>
			<li>
				<label htmlFor="regValue">가격</label>
				<input type="text" id={'regValue'} />
			</li>
			<li>
				<label htmlFor="regSite">비용처리</label>
				<input type="text" id={'regSite'} />
			</li>
			<li>
				<label htmlFor="regNote">비고</label>
				<input type="text" id={'regNote'} />
			</li>
			<li>
				<label htmlFor="regNoteLink">비고링크</label>
				<input type="text" id={'regNoteLink'} />
			</li>
		</ul>
    </div>
  );
}
