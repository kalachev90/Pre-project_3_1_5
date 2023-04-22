const url = "http://localhost:8080/api/user"
$(async function() {
    thisUser();
});

async function thisUser() {
    await fetch(url)
        .then((res) => res.json())
        .then(data => {
            $('#headerUsername').append(data.username);
            let roles = data.roles.map(role => " " + role.role.substring(5));
            $('#headerRoles').append(roles);

            let user = `$(
            <tr>
                <td>${data.id}</td>
                <td>${data.username}</td>
                <td>${data.lastName}</td>
                <td>${data.department}</td>
                <td>${data.salary}</td>
                <td style="-webkit-text-security: circle">${data.password}</td>
                <td>${roles}</td>
            </tr>)`;
            $('#userPanelBody').append(user);
        })
}

