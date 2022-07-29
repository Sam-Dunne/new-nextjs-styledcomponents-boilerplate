import { ProjectsCardWrapper, ProjectsCard, Anchor, ProjectsImage, Middle, ProjectsTitle, CardOverlayCopy, GoTo } from './ProjectCardCO.elements';

// Props 
// {
    // imgSrc,
    // imgAlt,
    // imgWidth,
    // imgHeight,
    // title,
    // textCopy,
    // url,
// }

const ProjectsCardCO = (projects) => {
    return (
        <ProjectsCardWrapper key={projects.id}>
            <ProjectsCard>
                <Anchor href="">
                    <ProjectsImage src={projects.imgSrc} alt={projects.imgAlt} width={projects.imgWidth} height={projects.imgHeight} objectFit='cover' layout='responsive' priority />
                    <Middle>
                        <ProjectsTitle>{projects.title}</ProjectsTitle>
                        <CardOverlayCopy>{projects.textCopy}
                        </CardOverlayCopy>
                    </Middle>
                </Anchor>
            </ProjectsCard>
            <Anchor href={projects.url} target="blank">
                <GoTo>Go to Project</GoTo>
            </Anchor>
        </ProjectsCardWrapper>
        // <ProjectsCardWrapper>
        //     <ProjectsCard>
        //         <Anchor href="">
        //             <ProjectsImage src='/rtk.jpg' alt='shipt clone mobile view' width={224} height={400} objectFit='cover' layout='responsive' priority={true} />
        //             <Middle>
        //                 <ProjectsTitle>Redux Toolkit</ProjectsTitle>
        //                 <CardOverlayCopy>Learned foundational concepts of Redux. Styled with Bootstrap and Sass.
        //                 </CardOverlayCopy>
        //             </Middle>
        //         </Anchor>
        //     </ProjectsCard>
        //     <Anchor href="https://learning-redux.herokuapp.com/" target="blank">
        //         <GoTo>Go to Project</GoTo>
        //     </Anchor>
        // </ProjectsCardWrapper>
    )
}

export default ProjectsCardCO
