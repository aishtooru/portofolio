import {createConnection } from '@/lib/db.js'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const db = await createConnection()
        const sql = "SELECT * FROM certificate"
        const [certificate] = await db.query(sql)
    return NextResponse.json({ certificate: certificate })
}
    catch(error) {
        console.log(error)
        return NextResponse.json({error: error.message})
}
}

