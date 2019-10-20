import React from 'react'
import Layout from 'gatsby-theme-blog/src/components/layout'
import { Styled } from "theme-ui"
export default function about(props) {
    return (
        <Layout title={'X3M'} {...props}>
            <Styled.h1>About me</Styled.h1>
            <Styled.p>
                I'm a self-tought software developer, currently residing in Stockholm, Sweden.
            </Styled.p>
            <Styled.p>
                Started programing in Delphi when i was just old enough to sit at a computer. I didnt know any english but i figured things out by clicking and draging stuff and looking what i could do with them in the inspector panel.
                All through out my school years, me and my friends where all about programing, so we tried Python, C/C++, C#, Java and some that i dont even remember.
            </Styled.p>

            <Styled.p>
                The plan was always to study engineering at The Royal institute of technology, but at the end of highschool I decided to take a break from studying.
                I keept on programing though, making some websites here and there and reading everything i could.
            </Styled.p>
            <Styled.p>
                Then I got a job as a graphic designer/project manager for a small company in stockholm.
                But my passion was always in programing, so i quit.
            </Styled.p>
            <Styled.p>
                I got a job at a startup in china, where i got work with some of the most talented people i have ever meet.
                Developing BigData analytics tools, in Golang, Scala, React and Django.
            </Styled.p>

        </Layout>
    )
}
