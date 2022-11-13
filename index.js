function shout(string) {
    return string.toUpperCase();
};

function whisper(string) {
    return string.toLowerCase();
};

function logShout(string) {
    console.log(shout(string));
    return shout(string);
};

function logWhisper(string) {
    console.log(whisper(string));
    return whisper(string);
};

function sayHiToHeadphonedRoommate(string) {
    switch (true) {
        case string.toLowerCase() === "let's have dinner together!":
            return "I would love to!";
        case string === string.toUpperCase():
            return "YES INDEED!";
        default:
            return "I can't hear you!";
    };
}


console.log(sayHiToHeadphonedRoommate("TEST"));