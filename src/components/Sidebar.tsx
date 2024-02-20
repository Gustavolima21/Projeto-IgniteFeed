import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
import { PencilLine } from "@phosphor-icons/react";
 
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=50&w=500&auto=format&fit=crop&ixlib=rb-5.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={styles.profile}>
                <Avatar src="https://i0.wp.com/heroisx.com/wp-content/uploads/2019/09/Sasuke-Uchiha-Jutsus-Magenkyou-Sharingan.jpg?resize=640%2C346&ssl=1"/>

                <strong>Gustavo Barbosa</strong>
                <span>Desenvolvedor Front-end</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine />
                    Editar seu Perfil
                </a>
            </footer>
        </aside>

        
    );
}