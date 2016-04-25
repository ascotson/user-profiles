var profiles = [
    {
        name: 'Preston McNeil',
        pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1117694_1614542_108355616_q.jpg',
        status: 'Everything is bigger in Texas'
    },
    {
        name: 'Ryan Rasmussen',
        pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/211536_7938705_80713399_q.jpg',
        status: 'RR Rules'
    },
    {
        name: 'Terri Ruff',
        pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/41368_8222994_4799_q.jpg',
        status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
    },
    {
        name: 'Lindsey Mayer',
        pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/173210_10024969_2137324550_q.jpg',
        status: 'OMG MITTENS DID THE CUTEST THING TODAY'
    }
];

module.exports = {
  profile: function(req, res, next) {
    console.log('why hello there');
    console.log(req.session);
    var profileFriends = [];
    var friendsArray = req.session.currentUser.friends;
    for (var i = 0; i < friendsArray.length; i++) {
      for (var j = 0; j < profiles.length; j++) {
        if(friendsArray[i] === profiles[j].name){
          profileFriends.push(profiles[j]);
        }
      }
    }
    res.send({
      currentUser: req.session.currentUser,
      friends: profileFriends
    });
  }
};

// Nick Mariucci's code using the forEach method vs. 2 for loops:
// module.exports = {
//   profile: function(req,res,next){
//     var friendsArray = [];
//     console.log(req.session.currentUser);
//     req.session.currentUser.friends.forEach(function(friend){
//       profiles.forEach(function(profile){
//         if (friend === profile.name) {
//           friendsArray.push(profile);
//         }
//       });
//     });
//     res.send({
//       currentUser: req.session.currentUser,
//       friends: friendsArray
//     });
//   }
// };
