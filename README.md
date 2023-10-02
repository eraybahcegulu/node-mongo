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

* mongodb error code 11000 > duplicate key(_id) success login kontrol

![1](https://github.com/eraybahcegulu/node-mongo/assets/84785201/e660b762-b87d-45a9-b3c1-93798a6841ae)

![2](https://github.com/eraybahcegulu/node-mongo/assets/84785201/8796a6b6-5d6b-4b49-b897-2c34b0697c88)

![3](https://github.com/eraybahcegulu/node-mongo/assets/84785201/f3c5bf48-172a-472a-8c7e-ce2f47be2026)

![4](https://github.com/eraybahcegulu/node-mongo/assets/84785201/e6cbf7f1-d510-479c-a439-ff1cb87a6a37)

![5](https://github.com/eraybahcegulu/node-mongo/assets/84785201/cadb849c-729b-490e-bae2-e92b0ea1a137)

![6](https://github.com/eraybahcegulu/node-mongo/assets/84785201/a873b49a-1dfd-4786-b587-671a454dab05)
