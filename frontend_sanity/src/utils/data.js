export const categories = [
  {
    name: 'cars',
    image: 'https://i.ibb.co/BtdbQBt/car.png',
  },
  {
    name: 'fitness',
    image: 'https://i.ibb.co/X4CKDQw/gym.png',
  },
  {
    name: 'wallpaper',
    image: 'https://i.imgur.com/FksGS2p.png',
  },
  {
    name: 'websites',
    image: 'https://i.imgur.com/nNijTpw.png',
  },
  {
    name: 'photo',
    image: 'https://i.imgur.com/IX8nehV.png',
  },
  {
    name: 'food',
    image: 'https://i.imgur.com/rf0lXGR.png',
  },
  {
    name: 'nature',
    image: 'https://i.imgur.com/xhjQytw.png',
  },
  {
    name: 'art',
    image: 'https://i.imgur.com/IC7Ua3G.png',
  }, {
    name: 'travel',
    image: 'https://i.imgur.com/2hBI6s0.png',
  },
  {
    name: 'quotes',
    image: 'https://i.imgur.com/0AsuYOJ.png',
  }, {
    name: 'cats',
    image: 'https://i.imgur.com/TgZIUyY.png',
  }, {
    name: 'dogs',
    image: 'https://i.imgur.com/3vbfjtq.png',
  },
  {
    name: 'others',
    image: 'https://i.pinimg.com/236x/2e/63/c8/2e63c82dfd49aca8dccf9de3f57e8588.jpg',
  },
];

export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
  image{
    asset->{
      url
    }
  },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    } `;

export const pinDetailQuery = (pinId) => {
  const query = `*[_type == "pin" && _id == '${pinId}']{
    image{
      asset->{
        url
      }
    },
    _id,
    title, 
    about,
    category,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
   save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
    comments[]{
      comment,
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    }
  }`;
  return query;
};

export const pinDetailMorePinQuery = (pin) => {
  const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const searchQuery = (searchTerm) => {
  const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
        image{
          asset->{
            url
          }
        },
            _id,
            destination,
            postedBy->{
              _id,
              userName,
              image
            },
            save[]{
              _key,
              postedBy->{
                _id,
                userName,
                image
              },
            },
          }`;
  return query;
};

export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};

export const userCreatedPinsQuery = (userId) => {
  const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const userSavedPinsQuery = (userId) => {
  const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};
