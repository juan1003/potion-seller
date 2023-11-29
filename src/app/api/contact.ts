export default async function POST(request: Request) {
    const { name, subject, description } = await request.json();
    console.log(name, subject, description);
    return Response.json({ message: 'Thanks for submitting your issue.'});
}