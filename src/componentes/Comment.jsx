import { ThumbsUp, Trash, BugDroid } from 'phosphor-react'
import { useState } from 'react';
import { Avatar } from './Avatar'
import styles from './Comment.module.css'


export function Comment({ content, onDeleteComment }) {

const [likeCount, setLikeCount] = useState(0);

function handleDeleteComment() {
    onDeleteComment(content);
}
function handleLikeComment() {
    setLikeCount((state) => {
        return state + 1
    });
}

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title="15 de fevereiro às 18:35h" dataTime="2023-02-15 18:36:30">
                                Cerca de 1h atrás
                            </time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />                
                        </button>
                    </header>

                    <p>{content}</p>
                </div>           
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir<span>{likeCount}</span>
                    </button>
                </footer>   
            </div>
        </div>
    )
}
/*hasBorder e uma booleana, nesse caso foi utilizado para retirar as bordas dos avatares dos comentários*/