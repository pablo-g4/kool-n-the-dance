import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "../../db/firebase"
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"
import { authCodeErrorToMessage } from "../../db/firebaseErrorHandler"

export const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth)


  const navigate = useNavigate()

  const loginUser = (e: any) => {
    e.preventDefault()
    signInWithEmailAndPassword(email,password)
  }

    useEffect(() => {

        if (loading) return

        if(user) navigate("/admin")

    }, [user, loading])

    return (
        <div className="m-4">
            {
                error && (
                    <div className="alert alert-danger" role="alert">{ authCodeErrorToMessage(error.code)}</div>
                )
            }
            <form onSubmit={loginUser} action="">

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control" id="email"
                        aria-describedby="emailHelp"
                        value={email}
                        required={true}
                        placeholder="johndoe@email.com"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder=""
                        value={password}
                        required={true}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
