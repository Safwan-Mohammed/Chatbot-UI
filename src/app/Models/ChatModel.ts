interface Chat{
    type : "bot" | "user" | "error" | ""
    message : string
}

export default Chat