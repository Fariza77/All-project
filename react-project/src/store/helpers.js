import { BASE_URL } from "../store"

function globalReducer(state, action) {
    switch (action.type) {
        // action.type === "SET_USER"
        case 'SET_USER':
            return { ...state, user: action.payload }
        case 'SET_BLOGS':
            return { ...state, blogs: action.payload }
        case 'LOGOUT':
            return { ...state, user: {} }
        case "SET_BLOG_ACTIVE_PAGE":
            return { ...state, blogActivePage: action.payload }
        case "SET_LOADED":
            return { ...state, loaded: action.payload }
        case "CHANGE_LANG":
            return { ...state, currentLanguage: action.currentLanguage }
    }
}
// globalReducer(initialState, {type:"...",  payload: {"..."}})

async function createNewUser(newUser) {
    return fetch(BASE_URL + "users", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
        .then(response => response)
        .catch((error) => { console.log(error) })
}


async function getUsersFromDB() {
    try {
        const response = await fetch(BASE_URL + "users")
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

// function getUsersFromLocalStorage() {
//     let users = localStorage.getItem('users') ?? "[]"
//     return JSON.parse(users) // [...]
// }

// function addNewUserToLocalStorage(new_user) {
//     let { username, email } = new_user
//     let existingUsers = getUsersFromLocalStorage()

//     let userExists = false
//     for (let user of existingUsers) {
//         if (user.username == username || user.email == email) {
//             userExists = true
//         }
//     }
//     if (userExists) {
//         return false
//     } else {
//         existingUsers.push(new_user)
//         localStorage.setItem('users', JSON.stringify(existingUsers))
//         return true
//     }
// }

async function userExistsInDB({ username, password }) {
    // NOTE:  username can be:   username or email
    let existingUsers = await getUsersFromDB()


    let existingEmails = existingUsers.map(user => user.email)
    let existingUsernames = existingUsers.map(user => user.username)

    if (!existingEmails.includes(username) && !existingUsernames.includes(username)) {
        return false
    }

    for (let existing_user of existingUsers) {
        if (existing_user.username == username && existing_user.password == password) {
            return true
        } else if (existing_user.email == username && existing_user.password == password) {
            return true
        }
    }
    return false
}

function loginUser(user) {
    localStorage.setItem('logged-in-user', JSON.stringify(user))
    return true
}
function logoutUser() {
    localStorage.removeItem('logged-in-user')
    return true
}

async function fetchBlogs() {
    const response = await fetch(BASE_URL + "blogs")
    const data = await response.json()
    return data
}

export {
    loginUser,
    logoutUser,
    createNewUser,
    getUsersFromDB,
    userExistsInDB,
    globalReducer,
    fetchBlogs
}
