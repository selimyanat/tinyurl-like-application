


export const shortenURL = async (longUrl: string): Promise<string> => {
    if (longUrl === "aaa") {
        throw new Error("Invalid URL");
    }
    return "shortened-url";
}