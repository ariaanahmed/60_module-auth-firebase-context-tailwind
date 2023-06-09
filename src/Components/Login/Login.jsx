import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Login = () => {

    const { signIn, signInWithGoogle } = useContext(AuthContext)
    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password).then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
        }).catch((error) => {
            console.log(error)
        })
    }

    const googleSignInAuthBtn = () => {
        signInWithGoogle().then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser)
        }).catch((error) => {
            console.log((error))
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form className="card-body" onSubmit={handleLogIn}>
                        <div className="form-control">
                            <label className="label"> <span className="label-text">Email</span></label>
                            <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label"> <span className="label-text">Password</span></label>
                            <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <Link to="/register" className="label-text-alt link link-hover p-5"> New to AuthMaster? </Link>

                    <div>
                        <button onClick={googleSignInAuthBtn} className='btn btn-primary'>Google SignIn</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;