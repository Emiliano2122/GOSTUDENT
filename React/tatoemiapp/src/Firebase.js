import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"

const firebaseConfig ={
    apiKey: "AIzaSyCiqpnaz7amNkYtG254xv6szLngjPaqqSE",
    authDomain: "tiendaonlinereact-636af.firebaseapp.com",
    projectId: "tiendaonlinereact-636af",
    storageBucket: "tiendaonlinereact-636af.appspot.com",
    messagingSenderId: "1082550749892",
    appId: "1:1082550749892:web:43338f5fda80b13a06d791",
    measurementId: "G-67NBCZTFPZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
