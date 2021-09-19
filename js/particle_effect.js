// tsparticles.js guides:
// https://www.section.io/engineering-education/javascript-particles-effect-with-tsparticles/
// https://codepen.io/matteobruni/pen/poJVRjw

tsParticles.load("tsparticles", {
    particles: {
        number: {
            value: 100
        },
        color: {
            value: "000000",
            // animation: {
            //     enable: true,
            //     speed: 50,
            //     sync: false
            // }
        },
        shape: {
            type: "circle",
        },
        size: {
            value: 3
            // random: true,
            // animation: {
            //     enable: true,
            //     speed: 16,
            //     minimumValue: 0.1,
            //     sync: false
            // }
        },
        links: {
            enable: true,
            distance: 180,
            color: "000000",
            opacity: 1,
            width: 3
        },
        move: {
            enable: true,
            speed: 1
        },
        collisions: {
            enable: true
        },
    },
    interactivity: {
        detectsOn: "window",

        events: {
            onHover: {
                enable: true,
                mode: "repulse"
            },
            onClick: {
                enable: true,
                mode: "push"                  
            },
            resize: true
        },

        modes: {
            repulse: {
                distance: 100
            },
            push: {
                quantity: 3
            },

            grab: {
                distance: 400,
                links: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 0.8
            },
            remove: {
                quantity: 3
            }
        }
    },
    detectRetina: true,
});