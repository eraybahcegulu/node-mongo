# Chatting

```
*EJS ile sisteme başarılı giriş yapan Useri hariç bırakma temel kod*

<% users.forEach(otherUser => { %>
  <% if (otherUser.email !== user.email) { %>
    <option><%= otherUser.email %></option>
  <% } %>
<% }); %>
```
