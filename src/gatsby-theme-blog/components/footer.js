import React from 'react'
import { Styled, css } from "theme-ui"
export default function footer() {
    return (
        <footer
            css={css({
                mt: 4,
                pt: 3,
            })}
        >
            {socialLinks.map((platform, i, arr) => (
                <Fragment key={platform.url}>
                    <Styled.a href={platform.url} target="_blank" rel="noopener noreferrer">
                        {platform.name}
                    </Styled.a>
                    {arr.length - 1 !== i && (
                        <Fragment>
                            {` `}&bull;{` `}
                        </Fragment>
                    )}
                </Fragment>
            ))}
        </footer>
    )
}
