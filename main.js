async function sendMessage() {
    const input = document.getElementById("user-input").value;
    const chatBox = document.getElementById("chat-box");
    const userDiv = document.createElement("div");
    userDiv.textContent = "You: " + input;
    chatBox.appendChild(userDiv);
    
    const loadingDiv = document.createElement("div");
    loadingDiv.textContent = "Bot is thinking...";
    chatBox.appendChild(loadingDiv);
    
    // Load the chat module and run the model
    const chat = await ChatModule.create({
        model_path: "https://drive.google.com/uc?export=download&id=1wOs9Au5ft6YToWPhhHim9WIEb_WQrS-B",
        tokenizer_path: "webllm/tokenizer/",
        backend: "webgpu"
    });
    const reply = await chat.chat(input);
    
    loadingDiv.textContent = "Bot: " + reply;
}
