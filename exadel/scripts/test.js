
function test() {
  const Posts = new PhotoPosts();
  Posts.addPhotoPost(new PhotoPost('1', '_DESCRIPTION', new Date('2011-02-23T23:00:00'), 'gleb9990', 'LINK', ['#famcs'], ['kek']));
  Posts.addPhotoPost(new PhotoPost('2', '_DESCRIPTION', new Date('2000-02-23T23:00:00'), 'nastya', 'LINK', ['#bsu'], ['lol', 'kek']));
  Posts.addPhotoPost(new PhotoPost('3', '_DESCRIPTION', new Date('2018-02-23T23:00:00'), 'glebek2h', 'LINK', ['#famcs', '#bsu'], ['lol', 'kek']));
  Posts.addPhotoPost(new PhotoPost('4', '_DESCRIPTION', new Date('2014-02-23T23:00:00'), 'gleb9990', 'LINK', ['#famcs', '#bsu'], ['lol', 'kek']));
  Posts.addPhotoPost(new PhotoPost('5', '_DESCRIPTION', new Date('2018-02-23T23:00:00'), 'kop', 'LINK', ['#famcs', '#bsu'], ['lol', 'kek']));
  Posts.addPhotoPost(new PhotoPost('6', '_DESCRIPTION', new Date('2012-02-23T23:00:00'), 'dima', 'LINK', ['#famcs', '#bsu'], ['lol', 'kek']));
  Posts.addPhotoPost(new PhotoPost('7', '_DESCRIPTION', new Date('2007-02-23T23:00:00'), 'sasha', 'LINK', ['#famcs', '#bsu'], ['lol', 'kek']));
  Posts.addPhotoPost(new PhotoPost('8', '_DESCRIPTION', new Date('2018-02-23T23:00:00'), 'gleb', 'LINK', ['#famcs', ' #bsu'], ['lol', 'kek']));
  Posts.addPhotoPost(new PhotoPost('9', '_DESCRIPTION', new Date('2018-02-23T23:00:00'), 'gleb9990', 'LINK', ['#famcs', '#bsu'], ['lol', 'kek']));
  Posts.addPhotoPost(new PhotoPost('10', '_DESCRIPTION', new Date('2018-02-23T23:00:00'), 'gleb', 'LINK', ['#famcs', '#bsu'], ['lol', 'kek']));
  Posts.addPhotoPost(new PhotoPost('11', '_DESCRIPTION', new Date('2018-02-23T23:00:00'), 'bogdan', 'LINK', ['#famcs', '#bsu'], ['lol', 'kek']));
  Posts.addPhotoPost(new PhotoPost('12', '_DESCRIPTION', new Date('2018-02-23T23:00:00'), 'glebek2h', 'LINK', ['#famcs', '#bsu'], ['lol', 'kek']));
  Posts.addPhotoPost(new PhotoPost('13', '_DESCRIPTION', new Date('2008-02-23T23:00:00'), 'gleb9990', 'LINK', ['#famcs', '#bsu'], ['lol', 'kek']));
  Posts.addPhotoPost(new PhotoPost('14', '_DESCRIPTION', new Date('2018-02-23T23:00:00'), 'gleb9990', 'LINK', ['#famcs', '#bsu'], ['lol', 'kek']));
  Posts.addPhotoPost(new PhotoPost('15', '_DESCRIPTION', new Date('2001-02-23T23:00:00'), 'kira', 'LINK', ['#famcs', '#bsu'], ['lol', 'kek']));
  Posts.addPhotoPost(new PhotoPost('16', '_DESCRIPTION', new Date('2018-02-23T23:00:00'), 'seva', 'LINK', ['#famcs', '#bsu'], ['lol', 'kek']));
  Posts.addPhotoPost(new PhotoPost('17', '_DESCRIPTION', new Date('1999-02-23T23:00:00'), 'gleb9990', 'LINK', ['#famcs', '#bsu'], ['lol', 'kek']));
  Posts.addPhotoPost(new PhotoPost('18', '_DESCRIPTION', new Date('2018-02-23T23:00:00'), 'nikita', 'LINK', ['#famcs', '#bsu'], ['lol', 'kek']));
  Posts.addPhotoPost(new PhotoPost('19', '_DESCRIPTION', new Date('1963-02-23T23:00:00'), 'gleb9990', 'LINK', ['#famcs', '#bsu'], ['lol', 'kek']));
  Posts.addPhotoPost(new PhotoPost('20', '_DESCRIPTION', new Date('2018-02-23T23:00:00'), 'glebyshek', 'LINK', ['#famcs', '#bsu'], ['lol', 'kek']));

  console.log("trying to add 'good' posts - successful:");
  Posts.addPhotoPost(new PhotoPost('228', '_DESCRIPTION', new Date('2019-02-23T23:00:00'), 'hunter', 'LINK', ['#famcs', ' #bsu'], ['lol', 'kek']));
  console.log(Posts.getPhotoPosts(0, 30));
  Posts.addPhotoPost(new PhotoPost(
    '322',
    'MMM',
    new Date('2006-02-23T23:00:00'),
    'glebek2h',
    'images/132',
    ['#famcs', '#bsu', '#programming'],
    ['glebyshek', 'seva'],
  ));
  console.log(Posts.getPhotoPosts(0, 30));
  console.log("trying to add 'bad' posts - unsuccessful:");
  Posts.addPhotoPost(new PhotoPost(
    '228',
    'MMM',
    new Date('2019-03-11T23:22:00'),
    'images/132',
    ['glebyshek', 'seva'],
    ['#famcs', '#bsu', '#programming'],
  ));

  console.log(Posts.getPhotoPosts(0, 30));
  console.log('-getPhotoPosts');
  console.log('10 posts:');
  console.log(Posts.getPhotoPosts());
  console.log('3 posts start from the second:');
  console.log(Posts.getPhotoPosts(1, 3));
  console.log('skip = 6 and default-argument for top:');
  console.log(Posts.getPhotoPosts(6));
  console.log('posts after filtering:');
  console.log(Posts.getPhotoPosts(0, 20, {
    _author: 'gleb9990',
    _hashtags: ['#famcs', '#bsu'],
    _dateFrom: new Date('2010-02-23T23:00:00'),
  }));
  console.log(Posts.getPhotoPosts(0, 20, { _author: 'gleb9990' }));

  console.log('-getPhotoPost');
  console.log('post with id 2:');
  console.log(Posts.getPhotoPost('2'));
  console.log('post with id 100:');
  console.log(Posts.getPhotoPost('100'));
  console.log('with invalid argument:');
  console.log(Posts.getPhotoPost(100));

  console.log('-validate');
  console.log('with valid');
  console.log(new PhotoPost(
    '228',
    'glebushek',
    'MMMM',
    'acdw',
    new Date('2018-01-01'),
  ).validate());
  console.log('with invalid');
  console.log(new PhotoPost(
    'glebushek',
    'acdw',
    new Date('2018-01-01'),
  ).validate());

  console.log('-editPhotoPost');
  console.log('id=3 post before editing:');
  console.log(Posts.getPhotoPost('3'));
  console.log('try to edit id=3 post:');
  console.log(Posts.editPhotoPost('3', {
    description: 'new _description',
    hashtags: ['new tag1', 'new tag2'],
  }));
  console.log('id=3 post after editing:');
  console.log(Posts.getPhotoPost('3'));
  console.log('with invalid argument:');
  console.log(Posts.editPhotoPost('213'));

  console.log('-removePhotoPost');
  console.log('with invalid argument:');
  console.log(Posts.removePhotoPost(''));
  console.log('remove id=3 post');
  console.log(Posts.removePhotoPost('3'));
  console.log('try to get id=3 post');
  console.log(Posts.getPhotoPost('3'));
  console.log('all posts: ');
  console.log(Posts.getPhotoPosts(0, 30));

  console.log('-addAll');
  console.log(Posts.addAll([
    new PhotoPost('1000', 'des', new Date('2012-02-23T23:00:00'), 'me', 'link', ['#1', '#2'], ['gleb', 'hleb']),
    new PhotoPost('1001', 'des', new Date('2012-02-23T23:00:00'), 'me', 'link', ['#1', '#2'], ['gleb', 'hleb']),
    new PhotoPost('1002', 'des', new Date('2013-02-23T23:00:00'), 'me', 'link', ['#1', '#2'], ['gleb', 'hleb']),
    new PhotoPost('1003', 'des', new Date('2014-02-23T23:00:00'), 'me', 'link', ['#1', '#2'], ['gleb', 'hleb']),
    new PhotoPost('me', 'link', ['#1', '#2'], ['gleb', 'hleb']), // 'bad' post
    new PhotoPost(['#1', '#2'], ['gleb', 'hleb']), // 'bad' post
    new PhotoPost('1003', 'ivalid', new Date('2014-02-23T23:00:00'), 'me', 'link'), // 'bad' post
    new PhotoPost('1004', 'des', new Date('2011-02-23T23:00:00'), 'me', 'link', ['#1', '#2'], ['gleb', 'hleb']),
  ]));
  console.log('all posts: ');
  console.log(Posts.getPhotoPosts(0, 30));
}

function viewMvcTest() {
  const photoPosts = new PhotoPosts();
  photoPosts.addPhotoPost(new PhotoPost('1', '1 refers to an image of the character HACKERMAN from the 2015 film Kung Fury that is used in jokes regarding a persons inflated sense of self-esteem when they solve a simple technical issue. ', new Date('2011-02-23T23:00:00'), 'gleb9990', 'images/1.jpg', ['#famcs'], ['kek']));
  photoPosts.addPhotoPost(new PhotoPost('2', '2  refers to an image of the character HACKERMAN from the 2015 film Kung Fury that is used in jokes regarding a persons inflated sense of self-esteem when they solve a simple technical issue. ', new Date('2000-02-23T23:00:00'), 'nastya', 'images/2.jpg', ['#bsu'], ['lol', 'kek']));
  photoPosts.addPhotoPost(new PhotoPost('3', '3  refers to an image of the character HACKERMAN from the 2015 film Kung Fury that is used in jokes regarding a persons inflated sense of self-esteem when they solve a simple technical issue. ', new Date('2018-02-23T23:00:00'), 'glebek2h', 'images/3.jpg', ['#famcs', '#bsu'], ['lol', 'kek']));
  photoPosts.addPhotoPost(new PhotoPost('4', '4 refers to an image of the character HACKERMAN from the 2015 film Kung Fury that is used in jokes regarding a persons inflated sense of self-esteem when they solve a simple technical issue. ', new Date('2014-02-23T23:00:00'), 'gleb9990', 'images/4.jpg', ['#famcs', '#bsu'], ['lol', 'kek']));
  photoPosts.addPhotoPost(new PhotoPost('5', '5 refers to an image of the character HACKERMAN from the 2015 film Kung Fury that is used in jokes regarding a persons inflated sense of self-esteem when they solve a simple technical issue. ', new Date('2018-00-23T23:00:00'), 'kop', 'images/5.jpg', ['#famcs', '#bsu'], ['lol', 'kek']));
  photoPosts.addPhotoPost(new PhotoPost('6', '6 refers to an image of the character HACKERMAN from the 2015 film Kung Fury that is used in jokes regarding a persons inflated sense of self-esteem when they solve a simple technical issue. ', new Date('2012-01-23T23:13:00'), 'dima', 'images/6.jpg', ['#famcs', '#bsu'], ['lol', 'kek']));
  photoPosts.addPhotoPost(new PhotoPost('7', '7 refers to an image of the character HACKERMAN from the 2015 film Kung Fury that is used in jokes regarding a persons inflated sense of self-esteem when they solve a simple technical issue. ', new Date('2007-02-23T23:11:00'), 'sasha', 'images/7.jpg', ['#famcs', '#bsu'], ['lol', 'kek']));
  photoPosts.addPhotoPost(new PhotoPost('8', '8 refers to an image of the character HACKERMAN from the 2015 film Kung Fury that is used in jokes regarding a persons inflated sense of self-esteem when they solve a simple technical issue. ', new Date('2018-03-23T23:22:00'), 'gleb', 'images/8.jpg', ['#famcs', ' #bsu'], ['lol', 'kek']));
  photoPosts.addPhotoPost(new PhotoPost('9', '9 refers to an image of the character HACKERMAN from the 2015 film Kung Fury that is used in jokes regarding a persons inflated sense of self-esteem when they solve a simple technical issue. ', new Date('2018-03-26T23:17:41'), 'gleb9990', 'images/10.jpg', ['#famcs', '#bsu'], ['lol', 'kek', '1', 'kek', '1', 'kek', '1', 'kek', '1', 'kek', '1', 'kek', '1', 'kek', '1', 'kek', '1', 'kek', '1', 'kek', '1']));
  photoPosts.addPhotoPost(new PhotoPost('10', '10 refers to an image of the character HACKERMAN from the 2015 film Kung Fury that is used in jokes regarding a persons inflated sense of self-esteem when they solve a simple technical issue. ', new Date('2011-02-23T23:00:00'), 'gleb9990', 'images/11.jpg', ['#famcs'], ['kek']));
  photoPosts.addPhotoPost(new PhotoPost('21', '11  refers to an image of the character HACKERMAN from the 2015 film Kung Fury that is used in jokes regarding a persons inflated sense of self-esteem when they solve a simple technical issue. ', new Date('2000-02-23T23:00:00'), 'nastya', 'images/12.jpg', ['#bsu'], ['lol', 'kek']));
  photoPosts.addPhotoPost(new PhotoPost('32', '12  refers to an image of the character HACKERMAN from the 2015 film Kung Fury that is used in jokes regarding a persons inflated sense of self-esteem when they solve a simple technical issue. ', new Date('2018-02-23T23:00:00'), 'glebek2h', 'images/13.jpg', ['#famcs', '#bsu'], ['lol', 'kek']));
  photoPosts.addPhotoPost(new PhotoPost('43', '13 refers to an image of the character HACKERMAN from the 2015 film Kung Fury that is used in jokes regarding a persons inflated sense of self-esteem when they solve a simple technical issue. ', new Date('2014-02-23T23:00:00'), 'gleb9990', 'images/14.jpg', ['#famcs', '#bsu'], ['lol', 'kek']));
  photoPosts.addPhotoPost(new PhotoPost('54', '14 refers to an image of the character HACKERMAN from the 2015 film Kung Fury that is used in jokes regarding a persons inflated sense of self-esteem when they solve a simple technical issue. ', new Date('2018-00-23T23:00:00'), 'kop', 'images/15.jpg', ['#famcs', '#bsu'], ['lol', 'kek']));
  photoPosts.addPhotoPost(new PhotoPost('65', '15 refers to an image of the character HACKERMAN from the 2015 film Kung Fury that is used in jokes regarding a persons inflated sense of self-esteem when they solve a simple technical issue. ', new Date('2012-01-23T23:13:00'), 'dima', 'images/16.jpg', ['#famcs', '#bsu'], ['lol', 'kek']));
  photoPosts.addPhotoPost(new PhotoPost('76', '16 refers to an image of the character HACKERMAN from the 2015 film Kung Fury that is used in jokes regarding a persons inflated sense of self-esteem when they solve a simple technical issue. ', new Date('2007-02-23T23:11:00'), 'sasha', 'images/17.jpg', ['#famcs', '#bsu'], ['lol', 'kek']));
  photoPosts.addPhotoPost(new PhotoPost('87', '17 refers to an image of the character HACKERMAN from the 2015 film Kung Fury that is used in jokes regarding a persons inflated sense of self-esteem when they solve a simple technical issue. ', new Date('2018-03-23T23:22:00'), 'gleb', 'images/18.jpg', ['#famcs', ' #bsu'], ['lol', 'kek']));
  photoPosts.addPhotoPost(new PhotoPost('98', '18 refers to an image of the character HACKERMAN from the 2015 film Kung Fury that is used in jokes regarding a persons inflated sense of self-esteem when they solve a simple technical issue. ', new Date('2018-03-26T23:17:41'), 'gleb9990', 'images/19.jpg', ['#famcs', '#bsu'], ['lol', 'kek', '1', 'kek', '1', 'kek', '1', 'kek', '1', 'kek', '1', 'kek', '1', 'kek', '1', 'kek', '1', 'kek', '1', 'kek', '1']));
  photoPosts.addPhotoPost(new PhotoPost('101', '19 refers to an image of the character HACKERMAN from the 2015 film Kung Fury that is used in jokes regarding a persons inflated sense of self-esteem when they solve a simple technical issue. ', new Date('2011-02-23T23:00:00'), 'gleb9990', 'images/20.jpg', ['#famcs'], ['kek']));
  photoPosts.addPhotoPost(new PhotoPost('212', '20  refers to an image of the character HACKERMAN from the 2015 film Kung Fury that is used in jokes regarding a persons inflated sense of self-esteem when they solve a simple technical issue. ', new Date('2000-02-23T23:00:00'), 'nastya', 'images/21.jpg', ['#bsu'], ['lol', 'kek']));
  photoPosts.addPhotoPost(new PhotoPost('323', '21  refers to an image of the character HACKERMAN from the 2015 film Kung Fury that is used in jokes regarding a persons inflated sense of self-esteem when they solve a simple technical issue. ', new Date('2018-02-23T23:00:00'), 'glebek2h', 'images/22.jpg', ['#famcs', '#bsu'], ['lol', 'kek']));
  photoPosts.addPhotoPost(new PhotoPost('434', '22 refers to an image of the character HACKERMAN from the 2015 film Kung Fury that is used in jokes regarding a persons inflated sense of self-esteem when they solve a simple technical issue. ', new Date('2014-02-23T23:00:00'), 'gleb9990', 'images/23.jpg', ['#famcs', '#bsu'], ['lol', 'kek']));
  photoPosts.addPhotoPost(new PhotoPost('545', '23 refers to an image of the character HACKERMAN from the 2015 film Kung Fury that is used in jokes regarding a persons inflated sense of self-esteem when they solve a simple technical issue. ', new Date('2018-00-23T23:00:00'), 'kop', 'images/24.jpg', ['#famcs', '#bsu'], ['lol', 'kek']));
  photoPosts.addPhotoPost(new PhotoPost('656', '24 refers to an image of the character HACKERMAN from the 2015 film Kung Fury that is used in jokes regarding a persons inflated sense of self-esteem when they solve a simple technical issue. ', new Date('2012-01-23T23:13:00'), 'dima', 'images/25.jpg', ['#famcs', '#bsu'], ['lol', 'kek']));
  photoPosts.addPhotoPost(new PhotoPost('767', '25 refers to an image of the character HACKERMAN from the 2015 film Kung Fury that is used in jokes regarding a persons inflated sense of self-esteem when they solve a simple technical issue. ', new Date('2007-02-23T23:11:00'), 'sasha', 'images/26.jpeg', ['#famcs', '#bsu'], ['lol', 'kek']));
  photoPosts.addPhotoPost(new PhotoPost('878', '26 refers to an image of the character HACKERMAN from the 2015 film Kung Fury that is used in jokes regarding a persons inflated sense of self-esteem when they solve a simple technical issue. ', new Date('2018-03-23T23:22:00'), 'gleb', 'images/27.jpg', ['#famcs', ' #bsu'], ['lol', 'kek']));
  photoPosts.addPhotoPost(new PhotoPost('989', '27 refers to an image of the character HACKERMAN from the 2015 film Kung Fury that is used in jokes regarding a persons inflated sense of self-esteem when they solve a simple technical issue. ', new Date('2018-03-26T23:17:41'), 'gleb9990', 'images/9.jpg', ['#famcs', '#bsu'], ['lol', 'kek', '1', 'kek', '1', 'kek', '1', 'kek', '1', 'kek', '1', 'kek', '1', 'kek', '1', 'kek', '1', 'kek', '1', 'kek', '1']));

  const wrapper = document.querySelector('#wrapper');
  const view = new View(wrapper, photoPosts);
  view.setAuthorized(new User('glebek2h'));
  view.showPosts();

  // view.addPost(new PhotoPost('10', 'Hac1kerman image of the character HACKERMAN from the 2015 film Kung Fury that is used in jokes regarding a persons inflated sense of self-esteem when they solve a simple technical issue. ', new Date('2017-02-23T23:00:00'), 'hackerman', 'images/6.jpg', ['#hackerman', '#hacks', '#hacker'], ['lol', 'kek']));
  // view.addPost(new PhotoPost('11', 'Hac2kerman  to an image of the character HACKERMAN from the 2015 film Kung Fury that is used in jokes regarding a persons inflated sense of self-esteem when they solve a simple technical issue. ', new Date('2018-02-23T23:00:00'), 'glebyshek', 'images/5.jpg', ['#famcs', '#bsu'], ['lol', 'kek']));
  // view.addPost(new PhotoPost('12', 'Hac3kerman to an image of the character HACKERMAN from the 2015 film Kung Fury that is used in jokes regarding a persons inflated sense of self-esteem when they solve a simple technical issue. ', new Date('2019-02-23T23:00:00'), 'glebek2h', 'images/10.jpg', ['#famcs', '#bsu'], ['lol', 'kek']));
  // view.addPost(new PhotoPost('13', 'Hac4kerman tof the character HACKERMAN from the 2015 film Kung Fury that is used in jokes regarding a persons inflated sense of self-esteem when they solve a simple technical issue. ', new Date('2019-02-23T23:00:00'), 'glebek2h', 'images/8.jpg', ['#famcs', '#bsu'], ['lol', 'kek']));
  // view.deletePost('1');
  // view.deletePost('2');
  // view.editPost('3', {
  //  description: 'new _description',
  //  hashtags: ['#newtag1', '#newtag2'],
  // });

  // mvc.presets();
  showMorePosts(photoPosts, view);
  addAllListeners(view, wrapper, new User('glebek2h'));
}
// test();
viewMvcTest();
