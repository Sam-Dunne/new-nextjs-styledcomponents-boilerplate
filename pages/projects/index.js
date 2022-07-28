import Link from 'next/link';
import { CONTAINER } from "../../globalstyle";

const Projects = () => {
    return (
        <>
            <CONTAINER>
                <h1>All Projects</h1>
                <ul>
                    <li>
                        <Link href="/projects/projectId1">
                            Project Id 1
                        </Link>
                    </li>
                    <li>
                        <Link href='/projects/projectId2'>
                            Project Id 2
                        </Link>
                    </li>
                </ul>
            </CONTAINER>
        </>
    )

}

export default Projects;