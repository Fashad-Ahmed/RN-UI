class Users {
  static all() {
    return fetch('https://facebook.github.io/react-native/movies.json').then(
      response => {
        if (response) {
          return response.json();
        }
      },
    );
  }
}

export default Users;
