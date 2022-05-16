require('dotenv').config()
import { MongoClient, ObjectId } from 'mongodb'
import { setlog } from './Util'
const isDev = process.env.NODE_ENV === 'development'
const client = new MongoClient('mongodb://localhost:27017')
const db = client.db( (process.env.DB_NAME || 'big') + (isDev ? '-test' : '') )

export const getObjectId = 	(id:string) => new ObjectId(id)
export const Logs = 		db.collection<Schemalogs>('logs')

const connect = async () => {
	try {
		await client.connect()
		setlog('connected to MongoDB')
	} catch (error) {
		setlog('Connection to MongoDB failed', error)
		process.exit()
	}
}

export default { connect }