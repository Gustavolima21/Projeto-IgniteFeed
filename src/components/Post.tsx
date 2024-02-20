import { format, formatDistanceToNow} from "date-fns"
import {ptBR} from "date-fns/locale/pt-BR"

import { Comment } from "./Comment"
import { Avatar } from "./Avatar"

import styles from "./Post.module.css"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react"

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: "paragraph" | "link";
    content: string;
}

export interface PostType {
    author: Author;
    publishedAt: Date;
    content: Content[];
    id: number;
}

interface postProps {
    post: PostType;
}

export function Post({ post } : postProps) {
        const [comments, setComments] = useState([
            "post bacana hein!!!",
        ]);

        const [newCommentText, setNewCommentText] = useState("");

        post.publishedAt = new Date();
        const publishedDateFormated = format(post.publishedAt, "dd 'de' MMMM 'ás' HH:mm'h'", {
            locale: ptBR,
        });

        const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
            locale: ptBR,
            addSuffix: true,
        });

        function handleCreateNewComment(event : FormEvent) {
            event.preventDefault();

            setComments([...comments, newCommentText]);

            setNewCommentText("");
        }

        function handleNewCommentChange(event : ChangeEvent<HTMLTextAreaElement>) {
            event.target.setCustomValidity("");
           setNewCommentText(event.target.value); 
        }

        function handleNewCommentInvalid(event : InvalidEvent<HTMLTextAreaElement>) {
            event.target.setCustomValidity("Este campo é obrigatorio!!!");
        }

        function deleteComment(commentToDelete : string) {
            const commentsWithoutDeletedOne = comments.filter(comment => {
                return comment !== commentToDelete
            })

            setComments(commentsWithoutDeletedOne);
        }

        const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl}/>
                    
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>

                </div>
                <time title={publishedDateFormated} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {post.content.map((item) => {
                    if(item.type == "paragraph") {
                        return <p key={item.content}>{item.content}</p>
                    }else if(item.type == "link") {
                        return <p key={item.content}><a href="#">{item.content}</a></p> 
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name="comment"
                    value={newCommentText}
                    placeholder="Deixa um comentário"
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                    </button> 
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map((comment) => {
                        return (
                            <Comment 
                                key={comment} 
                                content= {comment} 
                                onDeleteComment={deleteComment}
                            />
                        )
                    })
                }
            </div>
        </article>
    )
}
