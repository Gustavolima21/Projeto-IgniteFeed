import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post, PostType } from "./components/Post"

import styles from "./App.module.css"
import "./global.css"


// Author: Name, Office, Image, Id,
// publishedAt: Date
// Content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl:"https://i.pinimg.com/originals/1c/99/a2/1c99a25a1a8ae2fc219a751931e05207.jpg",
      name: "Gustavo Barbosa",
      role: "Web Developer"
    },

    content: [
      { type: "paragraph", content: "Fala galeraa 👋"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: "link", content: "jane.design/doctorcare"},
            
    ],

    publishedAt: new Date("2024-30-01 11:50:01")
  },
  
  {
    id: 2,
    author: {
      avatarUrl:"https://tm.ibxk.com.br/2023/11/14/14093517191519.jpg?ims=352x208",
      name: "Julio Felix",
      role: "Gestor de Trafego"
    },

    content: [
      { type: "paragraph", content: "Fala galeraa 👋"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: "link", content: "jane.design/doctorcare"},
            
    ],

    publishedAt: new Date("2024-01-28 14:50:54")
  },
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
            <Sidebar/>
        </aside>

        <main>
            {posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  post={post}
                />
              )
            })}
        </main>
      </div>
    </div>
  )
}

export default App
