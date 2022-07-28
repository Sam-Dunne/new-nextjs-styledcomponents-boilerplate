import { useRouter } from 'next/router'
import {CONTAINER} from "../../globalstyle";

export default function ProjectDetails() {
    const router = useRouter();

    //use this to send a request to backend API 
    //to fetch the item with this ID
    const projectId = router.query.ProjectDetails;

    return (
        <CONTAINER>
            <h1>ProjectDetails</h1>

        </CONTAINER>
    )
    
}

// export default ProjectDetails;