import React from "react";
import Article from "./Article.js";
 function ArticleList({posts}){
    const articlelist=posts.map((post) =>(
        <Article
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}
            minutes={post.minutes}
        />
        
    )
 
    )
    return (
        <main>
            {articlelist}
        </main>

    )
 }
 export default ArticleList;