
const unluler = ["a", "e", "ı", "i", "o", "ö", "u", "ü"]

const isV = x => unluler.includes(x)

const vowelMask = text => text.split("").map((char, pos) => isV(char))

const splitBy = (text, index) => [text.slice(0, index), text.slice(index)]

export const hecele = text => {
    text = text.toLowerCase()
    let heceler = []

    while (true) {
        const positions = vowelMask(text)

        if (positions.length <= 1) {
            if (text !== "") {
                heceler.push(text)
            }
            break
        }

        const pos = positions.indexOf(true)

        try {
            let left = []
            if (isV(text[pos + 1])) { 
                if (text[pos] === text[pos + 1]) { 
                    left = splitBy(text, pos + 2)
                } else { 
                    left = splitBy(text, pos + 1)
                }
            } else if (isV(text[pos + 2])) {
                left = splitBy(text, pos + 1)
            } else if (isV(text[pos + 3])) {
                left = splitBy(text, pos + 2)
            } else if (text.slice(pos + 1, pos + 4) in ["str", "ktr", "ctr", "ntr"]) { 
                left = splitBy(text, pos + 2)
            } else {
                left = splitBy(text, pos + 3)
            }

            heceler.push(left[0])
            text = left[1]

        } catch {

            break
        }
    }

    return heceler
}






