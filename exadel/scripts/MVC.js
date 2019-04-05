
function showMorePosts(photoPosts, view) {
  const button = document.querySelector('#show-more');
  let count = 0;
  button.addEventListener('click', () => {
    count += 10;
    view.showPosts(count);
  });
}

function likeHandling(event) {
  let likeNode;
  event.target.className === 'far fa-thumbs-up fa-2x' ? likeNode = event.target.closest('.like') : likeNode = event.target;
  const postNode = likeNode.closest('.post');
  if (!likeNode.dataset.liked) { likeNode.dataset.liked = '0'; }
  if (likeNode.dataset.liked === '0') {
    likeNode.dataset.liked = '1';
    postNode.querySelector('.likes-count').textContent = `${+postNode.dataset.likesCount + 1} likes`;
    likeNode.style.backgroundColor = 'red';
  } else {
    likeNode.dataset.liked = '0';
    postNode.querySelector('.likes-count').textContent = `${postNode.dataset.likesCount} likes`;
    likeNode.style.backgroundColor = 'white';
  }
}

function descriptionButtonHandling(event, user) {
  const descriptionTag = event.target.previousSibling;
  const postNode = event.target.closest('.post');
  descriptionTag.textContent = postNode.dataset.description.substring(76, 200);
  postNode.querySelector('.description-button').style.display = 'none';
  user instanceof User ? postNode.style.height = '815px' : postNode.style.height = '795px';
}

function signInButtonHandling(event) {
  let signInButton;
  event.target.className === 'sign-in-span' ? signInButton = event.target.closest('.sign-in') : signInButton = event.target;
  if (!signInButton.dataset.clicked)signInButton.dataset.clicked = '0';
  if (signInButton.dataset.clicked === '0') {
    signInButton.dataset.clicked = '1';
    document.querySelector('.authorization-form').style.display = 'block';
  } else {
    signInButton.dataset.clicked = '0';
    document.querySelector('.authorization-form').style.display = 'none';
  }
}

function filterButtonHandling(event) {
  if (event.target.className === 'filter' || event.target.className === 'filter-span') {
    let filterButton;
    event.target.className === 'filter-span' ? filterButton = event.target.closest('.filter') : filterButton = event.target;
    if (!filterButton.dataset.clicked)filterButton.dataset.clicked = '0';
    if (filterButton.dataset.clicked === '0') {
      filterButton.dataset.clicked = '1';
      filterButton.nextSibling.nextSibling.style.display = 'block';
    } else {
      filterButton.dataset.clicked = '0';
      filterButton.nextSibling.nextSibling.style.display = 'none';
    }
  }
}

function addPostButtonHandling(event, user) {
  let addPostButton;
  event.target.className === 'as fa-plus fa-2x' ? addPostButton = event.target.closest('.add-post') : addPostButton = event.target;
  if (!addPostButton.dataset.clicked)addPostButton.dataset.clicked = '0';
  document.querySelector('.add-post-form').querySelector('.inp-user').placeholder = `  ${user.name}`;
  document.querySelector('.current-date').textContent = new Date().toLocaleString('en-US', dateConfig);
  if (addPostButton.dataset.clicked === '0') {
    addPostButton.dataset.clicked = '1';
    document.querySelector('.add-post-form').style.display = 'block';
  } else {
    addPostButton.dataset.clicked = '0';
    document.querySelector('.add-post-form').style.display = 'none';
  }
}

function addAllListeners(view, wrapper, user) {
  wrapper.addEventListener('click', (event) => {
    if (event.target.className === 'like' || event.target.className === 'far fa-thumbs-up fa-2x') {
      likeHandling(event);
    }
    if (event.target.className === 'description-button') {
      descriptionButtonHandling(event, user);
    }
    if (event.target.className === 'delete-post' || event.target.className === 'far fa-trash-alt fa-2x') {
      view.deletePost(event.target.closest('.post').dataset.id);
    }
  });
  document.querySelector('header').addEventListener('click', (event) => {
    if (event.target.className === 'log-out' || event.target.className === 'fas fa-sign-out-alt fa-2x') {
      view.setAuthorized();
    }
    if (event.target.className === 'sign-in' || event.target.className === 'sign-in-span') {
      signInButtonHandling(event);
    }
    if (event.target.className === 'add-post' || event.target.className === 'fas fa-plus fa-2x') {
      addPostButtonHandling(event, user);
    }
  });
  document.querySelector('#sidebar').addEventListener('click', (event) => {
    filterButtonHandling(event);
  });
}
