import React from "react";
import { Link } from "gatsby";
import "./scss/post.scss";

class Post extends React.Component {
    render() {
        const { data } = this.props
        
        let title = data.frontmatter.title || data.fields.slug;
        if( data.fields){
            title =  <Link to={data.fields.slug}> {title} </Link>
        }       
        return (            
            <article className="post">
                <header className="post-header">
                    {/* <img width="48" height="48" alt="Tilo Mitra&#x27;s avatar" className="post-avatar"
                        src="img/common/tilo-avatar.png" /> */}

                    <h2 className="post-title">{title}</h2>

                    <p className="post-meta">
                        <span  className="post-date">{data.frontmatter.date}</span>                            
                        {data.frontmatter.tags && data.frontmatter.tags.map(( tag ) => {  
                            return (
                                <span className="post-category post-category-design" href="#" key={tag}>{tag}</span>
                            )
                        })}
                    </p>
                </header>

                <div className="post-description">
                    <div dangerouslySetInnerHTML={{ __html: data.html || data.excerpt }} />
                </div>
                {data.fields && data.fields.slug &&
                    <div>
                        <Link to={data.fields.slug}> <small>Continuar leyendo </small> </Link>
                    </div>
                }

            </article>
        )
    }
}

export default Post;


