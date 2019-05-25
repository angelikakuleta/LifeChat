const nickForm = document.querySelector('#nick-form');
const nickInput = document.querySelector('#nickname');


nickForm.addEventListener('submit', e => {
    e.preventDefault();
    const username = nickInput.value;
    document.body.innerHTML = chatWindow;
    initializeChat(username);
})

const chatWindow = `    
    <div class="nick">
        <div class="chat-container">
            <div class="site-welcome" id="welcome"></div>
            <div id="chat-window">
                <div id="output"></div>
                <div id="feedback"></div>
            </div>
            <input id="message" type="text" placeholder="Wpisz wiadomość" />
            <button id="send">Wyślij</button>
        </div>
    </div>`


const initializeChat = (username) => {
    // Make connection
    const socket = io.connect('http://localhost:3001');

    // Query DOM
    const message = document.getElementById('message'),
        welcome = document.getElementById('welcome'),
        btn = document.getElementById('send'),
        output = document.getElementById('output'),
        feedback = document.getElementById('feedback');

    welcome.innerHTML = `Witaj ${username}, połączyłeś się z naszym konsultantem`;

    // Emit events
     const emitMessage = () => {
         socket.emit('chat', {
             message: message.value,
             handle: username
         });
         message.value = "";
     };

    // Emit events on button click
    btn.addEventListener('click', e => {
        //allows to send messages by pressing enter and prevents from sending empty messages
        if (message.value !== "") emitMessage();
    });

    // Emit events on 'Enter" press
    message.addEventListener('keypress', e => {
        socket.emit('typing', username);

        //allows to send messages by pressing enter and prevents from sending empty messages
        if(e.which === 13 && message.value !== "") emitMessage();
    })

    // Listen for events
    socket.on('chat', function (data) {
        feedback.innerHTML = '';
        let nickName;
        if(data.handle === username) {
            nickName = `<strong style="color:#eb6d21">${data.handle}: </strong>`
        } else {
            nickName = `<strong>${data.handle}: </strong>`
        };
        output.innerHTML += '<p class="message-box">' + nickName + data.message + '</p>';
        document.querySelector('p:last-child').scrollIntoView({behavior:"smooth"});
    });

    socket.on('typing', function (data) {
        if (data){
            feedback.innerHTML = '<p><em>' + data + ' pisze wiadomość.</em></p>';
        }
        else{
            document.querySelector('p:last-child').innerHTML='';
        }
        });
}
