import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

function Animatedcursor() {
    return <>
        <AnimatedCursor 
            innerSize={10}
            outerSize={10}
            color='193, 11, 111'
            outerAlpha={0.3}
            innerScale={0.9}
            outerScale={10}
            trailingSpeed={8}
            clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link'
            ]}
        />
    </>
}

export default Animatedcursor