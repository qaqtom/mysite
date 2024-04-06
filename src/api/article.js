import request from "./request";

//博客数据
export async function getArticles(page = 1, limit = 10, categoryid = -1) {
    return await request.get("/api/blog", {
        params: {
            page,
            limit,
            categoryid,
        },
    });
}

export async function getArticleTypes() {
    return await request.get("/api/blogtype");
}

//获取单个文章
export async function getArticle(id) {
    return await request.get(`/api/blog/${id}`);
}

//提交评论
export async function postComment(commentInfo) {
    return await request.post('/api/comment', commentInfo);
}

export async function getComments(blogid, page = 1, limit = 10) {
    return await request.get("/api/comment", {
        params: {
            blogid,
            page,
            limit,
        },
    });
}