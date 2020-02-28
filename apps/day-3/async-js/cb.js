const getUser = (name, cb) => {
  console.log('getUser() started');

  setTimeout(() => {
    const user = users.find(u => u.name === name);

    if (!user) {
      cb('user not found!', null);
    } else {
      cb(null, user);
    }
  }, 5000);
}

const getPosts = (userId, cb) => {
  console.log('getPosts() started');

  setTimeout(() => {
    const postsForUser = posts.filter(p => p.userId === userId);

    if (postsForUser.length <= 0) {
      cb('no posts for the user!', null);
    } else {
      cb(null, postsForUser);
    }
  }, 5000);
}

console.log('begin');

getUser('ram', (error, user) => {
  if (error) {
    console.log('error:', error);
    return;
  }

  console.log('user:', user);
  getPosts(user.id, (error, postsForUser) => {
    if (error) {
      console.log('error:', error);
      return;
    }

    console.log('posts for user:', postsForUser);
  });
});

console.log('perform some other operation');

console.log('end');