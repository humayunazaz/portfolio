import { trigger, state, style, transition, animate, keyframes, animation, useAnimation } from '@angular/animations';

export let bounceLeft = animation(
    animate('1s ease-out', keyframes([
        style({offset: .2, 
            opacity: 0,
            transform: 'translateX(-100%)'
        }),
        style({offset: 1, 
            opacity: 1,
            transform: 'translateX(0)'
        })
    ]))
)
export let bounceRight = animation(
    animate('1s ease-out', keyframes([
        style({offset: .2, 
            opacity: 0,
            transform: 'translateX(100%)'
        }),
        style({offset: 1, 
            opacity: 1,
            transform: 'translateX(0)'
        })
    ]))
)