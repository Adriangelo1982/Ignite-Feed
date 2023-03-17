import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR'
import styles from './Post.module.css';//quando o arquivo esta na mesma pasta nao precisa colocar o nome da pasta
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post({ author, publishedAt, content}) {
    const [comments, setComments] = useState([
        'Post muito bacana, hein?! ta show'
    ])
    const [newCommentText, setnewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm", {
        locale: ptBr,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true,
    })

function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText]);
    setnewCommentText('');
}
    //const [newCommentText, setnewCommentText] = useState('')//digitando um comentario com o espaço vazio  

function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setnewCommentText(event.target.value);
}
function handleNewCommentInvalid() {
    event.target.setCustomValidity('Este campo e obrigatório');
}
function deleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter(comment => {
        return comment !== commentToDelete;
    })

    setComments(commentsWithoutDeleteOne);
}
const isNewCommentEmpty = newCommentText.length == 0;
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
                <div className={styles.content}>
                    {content.map(line => {
                        if (line.type === 'paragraph') {
                            return <p key={line.content}>{line.content}</p>;
                        } else if (line.type === 'link') {
                            return <p key={line.content}><a href="#">{line.content}</a></p>;
                        }
                    })}
                </div>
                <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>
                    <textarea 
                        name="comment"
                        placeholder="Deixe um comentário"
                        value={newCommentText}
                        onChange={handleNewCommentChange}
                        onInvalid={handleNewCommentInvalid}
                        required
                    />
                    <footer>
                        <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                    </footer>
                </form>
                <div className={styles.commentList}>
                    {comments.map(comment => {
                        return (
                        <Comment 
                        key={comment} 
                        content={comment} 
                        ondeleteComment={deleteComment} 
                        />
                        )
                    })}                                    
                </div>
        </article>
    )
}
// {' '} uma forma de dar espaço entre as palavras
// hasBorder quando não tem valor e TRUE