# Chatting

```
*EJS ile sisteme başarılı giriş yapan Useri hariç bırakma temel kod*

<% users.forEach(otherUser => { %>
  <% if (otherUser.email !== user.email) { %>
    <option><%= otherUser.email %></option>
  <% } %>
<% }); %>
```

```

***************** FETCH API ***********************
    <script>
        function sendMessage() {

            var selectedEmail = document.getElementById("emailSelect").value;
            var selectedMessage = document.getElementById("messageInput").value;
            var userLoggedInEmail = "<%= user ? user.email : '' %>";


            var messageData = {
                selectedEmail: selectedEmail,
                selectedMessage: selectedMessage,
                userLoggedInEmail: userLoggedInEmail
            };


            fetch('/sendMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(messageData),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                document.getElementById("feedbackMessage").innerText = 'Mesaj gönderildi!';
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    </script>

    app.post('/sendMessage', (req, res) => {
    res.json({});
    });
******************* FETCH API ****************************







****data.messages.reverse(); // mongodb en son gelen mesajı en üstte yazdırma
```
* C:\Program Files\MongoDB\Server\7.0\bin\mongod.cfg