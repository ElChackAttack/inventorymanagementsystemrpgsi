import * as React from 'react';

/**
 * If you want to share data between multiple root components, you'll need a
 * global store like Redux. This is similar to building a web app where you
 * want to synchronize data between a sidebar and a main view - just extended
 * into three dimensions.
 * To simplify this sample, we implement a trivial Redux-like store that will
 * ensure all of our elements are synchronized.
 */
// const apiKey = '&key=AIzaSyBs54921ORometcm51RrQYYKt07jgf702U'
const State = {
  // posts: [["0",{id:'assets/eR-I7xKZF79'+apiKey,name:'Divine Rose'
  //             ,author:"Jose Ricardo", description:"Description: A powerful weapon that\
  //             is difficult to deflect. Capable of dealing a string of critical blows."}],
  //           ["1",{id:'assets/aCVXhS46t_J'+apiKey,name:'Crabclaw Keyblade'
  //             ,author:"Jose Ricardo", description:"Description: A powerful weapon that\
  //             is difficult to deflect. Capable of dealing a string of critical blows."}]
//               ,
//               ["2",{id:'assets/aCVXhS46t_J'+apiKey,name:'Crabclaw Keyblade'
//               ,author:"Jose Ricardo", description:"Description: A powerful weapon that\
//               is difficult to deflect. Capable of dealing a string of critical blows."}]
//               ,
// ["3",{id:'assets/aCVXhS46t_J'+apiKey,name:'Crabclaw Keyblade'
//               ,author:"Jose Ricardo", description:"Description: A powerful weapon that\
//               is difficult to deflect. Capable of dealing a string of critical blows."}]
//               ,
// ["4",{id:'assets/aCVXhS46t_J'+apiKey,name:'Crabclaw Keyblade'
//               ,author:"Jose Ricardo", description:"Description: A powerful weapon that\
//               is difficult to deflect. Capable of dealing a string of critical blows."}]
//               ],

  // posts: [{id:'assets/eR-I7xKZF79',name:'Divine Rose'
  //             ,author:"Jose Ricardo", description:"Description: A powerful weapon that\
  //             is difficult to deflect. Capable of dealing a string of critical blows.",source:{formatComplexity:null}}],
  //


  posts: undefined,
  current: -1,
};
console.log(State.posts);
// for (var i = 0; i <  State.posts.length; i++) {
//    console.log(State.posts[i]);
// }
// console.log("Testing hard coding the 3D Model " + State.posts.values());
const listeners = new Set();

function updateComponents() {
  for (const cb of listeners.values()) {
    cb();
  }
}
// Working Sample Demo
const POLY_PATH = 'https://poly.googleapis.com/v1/assets?';
// working POLY_PATH for Divine Rose
// const POLY_PATH = 'https://poly.googleapis.com/v1/assets/eR-I7xKZF79?&key=AIzaSyBs54921ORometcm51RrQYYKt07jgf702U';
// const POLY_PATH = 'https://poly.googleapis.com/v1/assets/eR-I7xKZF79?';
// working loading assets from Poly

export function initialize(apiKey) {
  // Fetch the top 5 posts from Google Poly
  const options = {
    curated: false,
    format: 'GLTF2',
    key: apiKey,
    pageSize:5,
  };
const queryString = Object.keys(options)
    .map(k => `${k}=${options[k]}`)
    .join('&');
  console.log(POLY_PATH + queryString);
  fetch(POLY_PATH + queryString)
    .then(response => response.json())
    .then(body => {
      // console.log(body);
      const entries = body.assets.map(asset => {
        const objSource = asset.formats.filter(
          format => format.formatType === 'GLTF2'
        )[0];
        return {
          id: asset.name,
          name: asset.displayName,
          author: asset.authorName,
          description: asset.description,
          source: objSource,
          preview: asset.thumbnail.url,
        };
      });
  console.log("Entries: >>> " + entries);
  State.posts = entries;
  // State.posts = [{id:'assets/eR-I7xKZF79',name:'Divine Rose'
  //             ,author:"Jose Ricardo", description:"Description: A powerful weapon that\
  //             is difficult to deflect. Capable of dealing a string of critical blows."}];
  updateComponents();
  console.log(State.posts);
});
  };

/*

export function initialize(apiKey) {
  // Fetch the top 5 posts from Google Poly
  const options = {
    curated: true,
    format: 'GLTF2',
    key: apiKey,
    pageSize: 5,
  };

  const queryString = Object.keys(options)
    .map(k => `${k}=${options[k]}`)
    .join('&');
  fetch(POLY_PATH + queryString)
    .then(response => response.json())
    .then(body => {
      // console.log(body);
      const entries = body.assets.map(asset => {
        const objSource = asset.formats.filter(
          format => format.formatType === 'GLTF2'
        )[0];
        return {
          id: asset.name,
          name: asset.displayName,
          author: asset.authorName,
          description: asset.description,
          source: objSource,
          preview: asset.thumbnail.url,
        };
      });
      // console.log(entries);      
      // console.log(typeof(State.posts));



      // Mega Experiment

const keyblade = fetch('https://poly.googleapis.com/v1/assets/eR-I7xKZF79?&key=AIzaSyBs54921ORometcm51RrQYYKt07jgf702U')
                      .then(response => response.json())
                      .then(body => {
                        // console.log(body);
                        const objSource = body.formats.filter(
                            format => format.formatType === 'GLTF2'
                            )[0];
                        // console.log(objSource);
                        // console.log(body.name + body.displayName + body.authorName);
                        // const entry = body.assets.map(asset => {
                        //   const objSource = asset.formats.filter(
                        //     format => format.formatType === 'GLTF2'
                        //   )[0];

                      //   const entry = body.map( asset => {
                      //   const objSource = asset.formats.filter(
                      //       format => format.formatType === 'GLTF2'
                      //     )[0];
                          const entry = {
                            id: body.name,
                            name: body.displayName,
                            author: body.authorName,
                            description: body.description,
                            source: objSource,
                            preview: body.thumbnail.url,
                          }
                          console.log("Entry inside keyblade >>> " + Object.entries(entry));
                          // entries.push(entry);
                          // console.log("Entries >>> " + entries);
                          return entry;
                          
                        });




      //

      console.log(keyblade);
      console.log(Object.values(keyblade));


      console.log("keyblade ??? " + Object.entries(keyblade));
      console.log("Before " + State.posts);
      console.log("Entries entries >>>" + entries);
      // entries[4] = keyblade;
      console.log(Object.entries(entries));
      // entries.push(keyblade);
      State.posts = entries;
      
      console.log("After " + State.posts);
      console.log("How many posts >>> " + State.posts.length);
      updateComponents();
      console.log(POLY_PATH + queryString);

    });

*/

// const keyblade = fetch('https://poly.googleapis.com/v1/assets/eR-I7xKZF79?&key=AIzaSyBs54921ORometcm51RrQYYKt07jgf702U')
//                   .then(response => response.json())
//                   .then(body => {
//                     console.log(body);
//                     const objSource = asset.formats.filter(
//           format => format.formatType === 'GLTF2'
//         )[0];
//         return {
//           id: asset.name,
//           name: asset.displayName,
//           author: asset.authorName,
//           description: asset.description,
//           source: objSource,
//           preview: asset.thumbnail.url,
//         };
//       });

// console.log("Keyblade: >>> " + keyblade);

    // trying something out
    // const keyblade = fetch('https://poly.googleapis.com/v1/assets/eR-I7xKZF79?&key=AIzaSyBs54921ORometcm51RrQYYKt07jgf702U');
    // const keyblade = fetch('https://poly.googleapis.com/v1/assets/eR-I7xKZF79?&key=AIzaSyBs54921ORometcm51RrQYYKt07jgf702U')
    //                   .then(response => response.json())
    //                   .then(body => {
    //                     console.log(body);
    //                     const objSource = body.formats.filter(
    //                         format => format.formatType === 'GLTF2'
    //                         )[0];
    //                     console.log(objSource);
    //                     console.log(body.name + body.displayName + body.authorName);
    //                     // const entry = body.assets.map(asset => {
    //                     //   const objSource = asset.formats.filter(
    //                     //     format => format.formatType === 'GLTF2'
    //                     //   )[0];

    //                   //   const entry = body.map( asset => {
    //                   //   const objSource = asset.formats.filter(
    //                   //       format => format.formatType === 'GLTF2'
    //                   //     )[0];
    //                       const entry = {
    //                         id: body.name,
    //                         name: body.displayName,
    //                         author: body.authorName,
    //                         description: body.description,
    //                         source: objSource,
    //                         preview: body.thumbnail.url,
    //                       }
    //                       console.log("Entry >>> " + Object.entries(entry));
    //                       // State.posts = entry;
    //                       // updateComponents();
    //                       console.log("State.posts >>> " + State.posts);
    //                     });
                      // console.log("Entry successfully retrieved >>>\n" + keyblade);
                      // console.log(keyblade.values);
    // console.log(keyblade);
    // const new_entry = body.asset.formats.filter(
    //   format => format.formatType === 'GLTF2'
    //   )[0];
    //   return {
    //     id: asset.name,
    //     name: asset.displayName,
    //     author: asset.authorName,
    //     description: asset.description,
    //     source: objSource,
    //     preview: asset.thumbnail.url,
    //   };
    // });

// Testing out Divine Rose single asset function
        // export function initialize(apiKey) {
        //   // Fetch Divine Poly
        //   const options = {
        //     // curated: true,
        //     format: 'GLTF2',
        //     key: apiKey,
        //     // pageSize: 5,
        //   };
        //   const queryString = Object.keys(options)
        //     .map(k => `${k}=${options[k]}`)
        //     .join('&');
        //   fetch(POLY_PATH + queryString)
        //     .then(response => response.json())
        //     .then(body => {
        //       const entries = body.assets.map(asset => {
        //         const objSource = asset.formats.filter(
        //           format => format.formatType === 'GLTF2'
        //         )[0];
        //         return {
        //           id: asset.name,
        //           name: asset.displayName,
        //           author: asset.authorName,
        //           description: asset.description,
        //           source: objSource,
        //           preview: asset.thumbnail.url,
        //         };
        //       });

        //       State.posts = entries;
        //       updateComponents();
        //       console.log(POLY_PATH + queryString);

            // });
        // }





export function setCurrent(value) {
  State.current = value;
  updateComponents();
}

export function connect(Component) {
  return class Wrapper extends React.Component {
    state = {
      posts: State.posts,
      current: State.current,
    };

    _listener = () => {
      this.setState({
        posts: State.posts,
        current: State.current,
      });
    };

    componentDidMount() {
      listeners.add(this._listener);
    }

    componentWillUnmount() {
      listeners.delete(this._listener);
    }

    render() {
      return (
        <Component
          {...this.props}
          posts={this.state.posts}
          current={this.state.current}
        />
      );
    }
  };
}