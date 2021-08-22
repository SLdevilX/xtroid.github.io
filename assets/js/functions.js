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

const random = (arr) => {

    return arr[Math.floor(Math.random() * arr.length)];

}

const getTime = () => {

    // Get current hour

    const now = new Date().getHours();

    if (now >= 18) return "evening";

    // If right now is equals to or greater than 15 (3pm), turn on darkmode

    if (now >= 15) return "afternoon";

    // If right now is equals to or greater than 11 (11am), turn on darkmode

    if (now >= 11) return "day";

    // If right now is equals to or greater than 5 (5am), turn on daymode

    if (now >= 5) return "morning";

    // If right now is equals to or greater than 0 (12am), turn on darkmode

    if (now >= 0) return "night";

}

const generateTypeIt = (el, speed, cursor, arr) => {

    const typeit = new TypeIt(el, { speed, cursor, lifeLike: true });

    const lengthValue = arr.length;

    let i = 0;

    for (i; i < lengthValue; i++) {

        let key = arr[i];

        let val = parseInt(key.slice(1))

        if (key.startsWith("^")) typeit.pause(val);

        else if (key.startsWith("<")) {

            if (key.length == 1) typeit.delete();

            else typeit.delete(val);

        }

        else typeit.type(key);

    }

    typeit.go();

}

const getMode = (time) => (time == "afternoon" || time == "night" || time == "evening") ? "darkBG" : "lightBG";
