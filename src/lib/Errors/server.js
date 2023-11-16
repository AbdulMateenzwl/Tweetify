export function internalServerError(){
    return NextResponse.json({ findUser }, { status: 500 });
}