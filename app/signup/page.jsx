"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import signuptoon from "/public/images/signup.gif"
import styles from "./signup.module.scss"
import Link from 'next/link'
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupFormSchema } from '@/lib/definitions'
import { useRouter } from 'next/navigation'
import useStore from '@/store'
import { Oval } from 'react-loader-spinner'
import { toast } from 'react-toastify'



const Signup = () => {
    // const {state, formAction} = useFormState(signupFormAction, undefined)
    const signup = useStore(state => state.signup)
    const [error, setError] = useState(null)

    const router = useRouter()

    const { 
        register, 
        handleSubmit,
        formState: { errors, isSubmitting } 
    } = useForm({
        resolver: zodResolver(SignupFormSchema)
    })

    const onFormSubmit = async (data) => {
        setError(null)

        const { email, username, password } = data
        
        try {
            await signup(email, username, password);
            // redirect("/login")
            toast.success("Signup successful!", {
                positon: "top-right"
            });
            router.push("/login")
        } catch (err) {
            setError(err.message);
            toast.error("Signup failed. Try again!", {
                positon: "top-right"
            });
        }
    }

    return (
        <section className={styles.container}>
            <div className={styles.leftContainer}>
                <Image src={signuptoon} alt="login image from Pexels" width={500} height={500} />
            </div>

            <div className={styles.rightContainer}>
                <h2 className={styles.headerText}>Sign up to gain access to your catalog</h2>
                
                <span>
                    <form onSubmit={handleSubmit(onFormSubmit)} className={styles.formWrapper} >
                        <span>
                            <label>Email</label>
                            <input {...register("email")} type="text" placeholder="jane@example.com" name="email" className={styles.formInput} />
                            {errors?.username && <p className={styles.errorText}>{errors?.username.message}</p>}
                        </span>
                        <span>
                            <label>Username</label>
                            <input {...register("username")} type="text" placeholder="janeDoe007" name="username" className={styles.formInput} />
                            {errors?.username && <p className={styles.errorText}>{errors?.username.message}</p>}
                        </span>

                        <span>
                            <label>Password</label>
                            <input {...register("password")} type="password" placeholder="password" name="password" className={styles.formInput} />
                            {errors?.password && <p className={styles.errorText}>{errors?.password.message}</p>}
                        </span>

                        <button type="submit" className={styles.btn} >
                            {isSubmitting ? (
                                <Oval
                                    visible={isSubmitting}
                                    height="30"
                                    width="30"
                                    color="#4fa94d"
                                    ariaLabel="oval-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                />
                            ) : <>Sign up</>
                            }
                        </button>
                    </form>

                    <p >Already have an account? <Link href={"/login"} className='cta' >Login</Link></p>
                </span>
            </div>
        </section>
    )
}

export default Signup