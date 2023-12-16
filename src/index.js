import { fetchFromGraphQL } from "./graphql.js";
import { fetchFromPage } from "./webpage.js";

export const getPostId = (postUrl) => {
    const postRegex =
        /^https:\/\/(?:www\.)?instagram\.com\/p\/([a-zA-Z0-9_-]+)\/?/;
    const reelRegex =
        /^https:\/\/(?:www\.)?instagram\.com\/reels?\/([a-zA-Z0-9_-]+)\/?/;
    let postId;

    if (!postUrl) {
        throw new Error("Instagram URL was not provided");
    }

    const postCheck = postUrl.match(postRegex);
    if (postCheck) {
        postId = postCheck.at(-1);
    }

    const reelCheck = postUrl.match(reelRegex);
    if (reelCheck) {
        postId = reelCheck.at(-1);
    }

    if (!postId) {
        throw new Error("Instagram post/reel ID was not found");
    }

    return postId;
};

export const fetchPostJson = async (postUrl, timeout) => {
    const postId = getPostId(postUrl);

    const pageJson = await fetchFromPage(postId, timeout);
    if (pageJson) return pageJson;

    const apiJson = await fetchFromGraphQL(postId, timeout);
    if (apiJson) return apiJson;

    throw new Error("Video link for this post is not public.", 401);
};