


const vueIndex = Vue.createApp({
    data() {
      return {
        show_body: true,

        events: [
          { name: 'Event 1', date: 'Date', location: 'Location', description: 'Description' },
          { name: 'Event 2', date: 'Date', location: 'Location', description: 'Description' },
          { name: 'Event 3', date: 'Date', location: 'Location', description: 'Description' },
          { name: 'Event 1', date: 'Date', location: 'Location', description: 'Description' },
          { name: 'Event 2', date: 'Date', location: 'Location', description: 'Description' },
          { name: 'Event 3', date: 'Date', location: 'Location', description: 'Description' },
        ],
        show_login: false
      };
    }
}).mount('#index');

// const vueNav = Vue.createApp({
//     data() {
//         return {
//             navItems: [
//                 { text: 'Home', url: 'home.html' },
//                 { text: 'Find us', url: 'find-us.html' },
//                 { text: 'How to join', url: 'how-to-join.html'}
//               ]
//         };
//     }
// }).mount('#nav');


const vuefooter = Vue.createApp({
    data() {
      return {
        footers: [
          { text: 'Privacy Policy', url: 'privacy.html' },
          { text: 'Terms and Conditions', url: 'terms.html' },
          { text: 'Contact Us', url: 'contactUs.html' }
        ]
      };
    }
}).mount('#footer');
