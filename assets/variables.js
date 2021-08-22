/*

MIT License

Copyright (c) 2021 FBI-DEVS

Permission is hereby granted, free of charge, to any person obtaining a copy

of this software and associated documentation files (the "Software"), to deal

in the Software without restriction, including without limitation the rights

to use, copy, modify, merge, publish, distribute, sublicense, and/or sell

copies of the Software, and to permit persons to whom the Software is

furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all

copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR

IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,

FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE

AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER

LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,

OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE

SOFTWARE.

*/

const variables = {

  greetings: {

    morning: "Good Morning",

    day: "Good Day",

    afternoon: "Good Afternoon",

    evening: "Good Evening",

    night: "Good Night",

  },

  quotes: [

    { quote: "", author: "Lasi" },

    { quote: "", author: "Lasi" },

    { quote: "", author: "Lasi" },

    { quote: "", author: "Lasi" },

  ],

  nicknames: [ "Buddy ♥", 

"Friend  ♥", " ♥", ],

  generated: ["{greetings}, {nicknames}"],

};

const particlesConfig = {

  particles: {

    number: {

      value: 50,

      density: {

        enable: true,

        value_area: 8000,

      },

    },

    color: {

      value: "#000",

    },

    shape: {

      type: "image",

      stroke: {

        width: 20,

        color: "#000000",

      },

      polygon: {

        nb_sides: 5,

      },

      image: {

        src: "./assets/heart.png",

        width: 10,

        height: 10,

      },

    },

    opacity: {

      value: 0.5,

      random: false,

      anim: {

        enable: false,

        speed: 1,

        opacity_min: 0.1,

        sync: false,

      },

    },

    size: {

      value: 23,

      random: false,

      anim: {

        enable: false,

        speed: 3,

        size_min: 0.5,

        sync: false,

      },

    },

    line_linked: {

      enable: true,

      distance: 80,

      color: "#FFFFFF",

      opacity: 0.8,

      width: 2.5,

    },

    move: {

      enable: true,

      speed: 3,

      direction: "center",

      random: true,

      straight: false,

      out_mode: "out",

      bounce: false,

      attract: {

        enable: false,

        rotateX: 600,

        rotateY: 1200,

      },

    },

  },

  interactivity: {

    detect_on: "canvas",

    events: {

      onhover: {

        enable: true,

        mode: "grab",

      },

      onclick: {

        enable: true,

        mode: "push",

      },

      resize: true,

    },

    modes: {

      grab: {

        distance: 150,

        line_linked: {

          opacity: 0.3,

        },

      },

      bubble: {

        distance: 800,

        size: 80,

        duration: 2,

        opacity: 0.8,

        speed: 3,

      },

      repulse: {

        distance: 400,

        duration: 0.4,

      },

      push: {

        particles_nb: 2,

      },

      remove: {

        particles_nb: 1,

      },

    },

  },

  retina_detect: true,

};

