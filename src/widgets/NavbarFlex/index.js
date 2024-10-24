import { TagsNavbar } from "../../components/TagsNavbar";
import { TagsGallery } from "../../components/TagsGallery";
import styles from './index.module.css';


export const NavbarFlex = () => {
    return (
        <div className={styles.layout_container}>
            <TagsNavbar/>
            <main>
                <TagsGallery/>
            </main>
        </div>
    )
}