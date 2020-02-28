const getUser = (name) => {
  return new Promise((resolve, reject) => {
    console.log('getUser() started');

    setTimeout(() => {
      const user = users.find(u => u.name === name);

      if (!user) {
        reject('user not found!');
      } else {
        resolve(user);
      }
    }, 5000);
  });
}

const getPosts = (userId) => {
  return new Promise((resolve, reject) => {
    console.log('getPosts() started');

    setTimeout(() => {
      const postsForUser = posts.filter(p => p.userId === userId);

      if (postsForUser.length <= 0) {
        reject('no posts for the user!');
      } else {
        resolve(postsForUser);
      }
    }, 5000);
  });
}

console.log('begin');

getUser('ram')
  .then((user) => {
    console.log('user:', user);
    return getPosts(user.id);
  })
  .then((postsForUser) => {
    console.log('posts for user:', postsForUser);
  })
  .catch((error) => {
    console.log('error:', error);
  });

console.log('perform some other operation');

console.log('end');
