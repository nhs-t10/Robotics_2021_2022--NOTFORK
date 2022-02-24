module.exports = function prettyButton(b) {
    b = b.replace(/b\d?-/, "");
    return {
        touchpadfinger1: "Touchpad",
        touchpadfinger2: "Touchpad",
        touchpadfinger1x: "Touchpad (x)",
        touchpadfinger1y: "Touchpad (y)",
        touchpadfinger2x: "Touchpad (x)",
        touchpadfinger2y: "Touchpad (y)",
        dpadup: "D-pad Up",
        dpaddown: "D-pad Down",
        dpadleft: "D-pad Left",
        dpadright: "D-pad Right",
        guide: "Guide",
        select: "Select",
        start: "Start",
        back: "Back",
        leftbumper: "Left Bumper",
        rightbumper: "Right Bumper",
        leftstickbutton: "Left Stick Press",
        rightstickbutton: "Right Stick Press",
        circle: "Circle",
        cross: "X",
        triangle: "Triangle",
        square: "Square",
        share: "Share",
        options: "Options",
        touchpad: "Touchpad",
        ps: "System Button",
        leftstickx: "Left Stick (X)",
        leftsticky: "Left Stick (Y)",
        rightstickx: "Right Stick (X)",
        rightsticky: "Right Stick (Y)",
        lefttrigger: "Right Trigger",
        righttrigger: "Left Trigger"
    }[b] || b;
}