const text_write = (text, index) => {
    let fadeIn = 0
    let stay = 5
    let fadeOut = 0

    if (hasTimings(text)) {
        const timings = getTimings(text)

        text = timings[0]
        fadeIn = timings[1]
        stay = timings[2]
        fadeOut = timings[3]
    }

    const manipulated = text.substring(0, index)

    return tmResult(manipulated, text.length <= index, fadeIn, stay, fadeOut)
}