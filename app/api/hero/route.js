import {createConnection } from '@/lib/db.js'
import { NextResponse } from 'next/server'

export async function GET() {
	try {
        const db = await createConnection()
        const sql = "SELECT * FROM biodata"
        const [biodata] = await db.query(sql)
	return NextResponse.json(biodata[0])
}
	catch(error) {
		console.log(error)
		return NextResponse.json({error: error.message})
}
}

