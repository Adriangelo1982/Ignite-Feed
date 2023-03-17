import styles from './Avatar.module.css'
/*criando um conceito de não ficar repetindo o uso de uma imagem */
export function Avatar( { hasBorder = true, src }) {


    return(
        <img className={hasBorder ? styles.avatarWithBorder : styles.src} 
        src={src} />

    )
}
/*utilizado condições para aparição da borda com o uso de se e então*/