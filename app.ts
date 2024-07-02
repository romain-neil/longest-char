export default function str(s: string): string {
    let longestChar: string = '';
    let lastChar: string = '';

    let longestLong: number = 0;
    let currentLong: number = 1;

    for (const char of s) {
        if (lastChar === char) {
            currentLong++;
        } else {
            if (currentLong > longestLong) {
                longestLong = currentLong;
                longestChar = lastChar;
            }

            currentLong = 1;
        }

        lastChar = char;
    }

    if (currentLong > longestLong) {
        longestChar = lastChar;
    }

    return longestChar;
}