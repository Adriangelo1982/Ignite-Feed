/*2° importado o arquivo Post*/
import { Header } from './componentes/Header';
import { Sidebar } from './componentes/Sidebar';
import { Post } from './componentes/Post';

import styles from './App.module.css';
import './global.css';

const posts = [
    {
        id:1,
        author: {
            avatarUrl: 'https://github.com/diego3g.png',
            name: 'Diego Fernandes',
            role: 'CTO @Rocketseat'
        },
        content: [
            { type: 'paragraph', content: 'Fala galera',},
            { type: 'paragraph', content: 'Acabei de subir um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat'},
            { type: 'link', content:'pedro.design/doctorcare'},
        ],
        publishedAt: new Date('2023-02-19 20:00:00'),
    },
    {
        id:2,
        author: {
            avatarUrl: 'https://github.com/maykbrito.png',
            name: 'Adriângelo Silva',
            role: 'CTO @Rocketseat'
        },
        content: [
            { type: 'paragraph', content: 'Bom dia',},
            { type: 'paragraph', content: 'Hoje vamos transmitir uma coisa muito boa pela plataforma da Rocketseat'},
            { type: 'link', content:'pedro.design/doctorcare'},
        ],
        publishedAt: new Date('2023-02-08 20:00:00'),
    },
];

export function App() {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map(post => {
                        return (
                        <Post 
                        key={post.id}
                        author={post.author}
                        content={post.content}
                        publishedAt={post.publishedAt}
                        />
                        )
                    })}
                </main>
            </div>           
        </div>
    )
}
