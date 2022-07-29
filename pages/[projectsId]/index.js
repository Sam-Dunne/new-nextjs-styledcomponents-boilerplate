// import Link from 'next/link';
import { CONTAINER } from "../../globalstyle";


const Projects = (props) => {
    return (
        <>
            <CONTAINER>
                <h1>All Projects</h1>
                
                {/* <ul>
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
                </ul> */}
            </CONTAINER>
        </>
    )
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    projectId: "1"
                },
            },
            {
                params: {
                    projectId: "2"
                },
            },
        ]
    }
}

export async function getStaticProps(context) {

    const projectId = context.params.projectId;
    return {
        props: {
            projectData: {
                id: projectId,
                imgSrc: "",
                imgAlt: "",
                imgWidth: "",
                imgHeight: "",
                title: "",
                textCopy: "",
                url: "",
            }
        }
    }
}

export default Projects;