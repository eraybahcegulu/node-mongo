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

![1](https://github.com/eraybahcegulu/node-mongo/assets/84785201/bb8c0009-ddeb-48df-bff9-b7b07a2fc1d6)

![2](https://github.com/eraybahcegulu/node-mongo/assets/84785201/90844f2c-74a5-4cf5-b21b-a7c7c3baca25)

![3](https://github.com/eraybahcegulu/node-mongo/assets/84785201/2b3a5e0e-7a9d-4b9c-ae3d-c4b0c1fc7bd9)

![4](https://github.com/eraybahcegulu/node-mongo/assets/84785201/a8bf8e45-f6f6-42aa-8009-dacb7a4cd3a0)

![5](https://github.com/eraybahcegulu/node-mongo/assets/84785201/ddb95a45-4920-4820-bbe2-63acf07f37c1)

![6](https://github.com/eraybahcegulu/node-mongo/assets/84785201/f0ce2d37-66c8-400e-982f-aa0983417c70)
