function showDataUsers() {
    let getTable = document.getElementById('table-users')
    console.log(getTable)

    let getTbody = getTable.getElementsByTagName('tbody')[0]
    console.log(getTbody)

    let tr = ''
    for (let i=0; i < dataUsers.length; i++) {
        tr += ` 
                <tr>
                    <td>
                        <center>${i + 1}</center>
                    </td>
                    <td>
                        <center>${dataUsers[i].username}</center>
                    </td>
                    <td>
                        <center>${dataUsers[i].email}</center>
                    </td>
                    <td>
                        <center>${dataUsers[i].role}</center>
                    </td>
                    <td>
                        <input type="button" name="button-edit" value="EDIT">
                        <input type="button" name="button-delete" value="DELETE">
                    </td>
                </tr>
              `
    }

    getTbody.innerHTML = tr
}

showDataUsers()

function addDataUsers() {
    let inputs = document.getElementsByClassName('input-users')
    console.log(inputs)

    let username = inputs[0].value 
    let email = inputs[1].value
    let role = inputs[2].value

    if (username && email && role) {
        dataUsers.push({
            username: username,
            email: email,
            role: role
        })

        showDataUsers()
        inputs[0].value = ''
        inputs[1].value = ''
        inputs[2].value = ''
    }else {
        let errorMessage = alert('INPUT MASIH KOSONG!')
    }
}

document.getElementById('button-submit').addEventListener('click', addDataUsers)

function deleteUsers(i) {
    let confirmBox = confirm(`Anda Yakin ingin menghapus ${dataUsers[i].username}?`)

    if(confirmBox) {
        dataUsers.splice(i, 1)
        alert('Hapus User Berhasil!')

        showDataUsers
    }
}

function editUsers(i) {
    let confirmBox = confirm(`Apakah Anda mau mengedit ${dataUsers[i].name}?`)

    if (confirmBox == true) {
        showDataUsers(i)
    }
}

function simpanUser(index) {
    let inputs = document.getElementsByClassName('input-edit-user')

    let username = inputs[0].value
    let email = inputs[1].value
    let role = inputs[2].value

    if (username && email && role) {
        dataUsers[index].username = username
        dataUsers[index].email = email
        dataUsers[index].role = role

        alert('Edit data Berhasil!')

        showDataUsers()
        }


}