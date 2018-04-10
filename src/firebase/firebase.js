import * as firebase from 'firebase';

const prodConfig = {
    apiKey: "AIzaSyB7TY4GB247sYkCw-R3Pi_vfId84aGfoLU",
    authDomain: "fir-reactprod.firebaseapp.com",
    databaseURL: "https://fir-reactprod.firebaseio.com",
    projectId: "fir-reactprod",
    storageBucket: "fir-reactprod.appspot.com",
    messagingSenderId: "160066264854"
  };


  const devConfig = {
    apiKey: "AIzaSyBvKk6lHK-HtXDw9VHc8imoO-9igGINqbo",
      authDomain: "fir-react-1c686.firebaseapp.com",
      databaseURL: "https://fir-react-1c686.firebaseio.com",
      projectId: "fir-react-1c686",
      storageBucket: "fir-react-1c686.appspot.com",
      messagingSenderId: "913503686389"
  };

  const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const auth = firebase.auth();

  export {
    auth,
  };
