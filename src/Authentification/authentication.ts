import { auth, db } from "../db/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

import { authCodeErrorToMessage } from "../db/firebaseErrorHandler";

const googleProvider = new GoogleAuthProvider();

const isLoggedIn = async (): Promise<boolean> => {
  try {
    await new Promise((resolve, reject) =>
      auth.onAuthStateChanged(
        user => {
          if (user) {
            console.log('isLogged...');
            
            // User is signed in.
            resolve(user)
          } else {
            // No user is signed in.
            reject('no user logged in')
          }
        },
        // Prevent console error
        error => reject(error)
      )
    )
    return true
  } catch (error) {
    return false
  }
}

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err)
    authCodeErrorToMessage(err)
  }
};

const logInWithEmailAndPassword = async (email: string, password: string): Promise<void | string> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    return authCodeErrorToMessage(err)
  }
};

const registerWithEmailAndPassword = async (name: string, email: string, password: string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    authCodeErrorToMessage(err)
  }
};

const sendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    authCodeErrorToMessage(err)
  }
};


const logout = () => {
  signOut(auth);
};

export {
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  isLoggedIn
};