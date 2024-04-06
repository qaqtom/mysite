import request from "./request";

export async function test() {
    return await request.get("/api/banner");
}

// test().then((resp) => {
//     console.log(resp);
// });