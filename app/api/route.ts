import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
    const product = {
        id: 1,
        name: 'Product 1',
        price: 100,
        description: 'This is product 1'
    };

  return NextResponse.json({ product });
}