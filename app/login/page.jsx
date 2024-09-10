"use client"

import Image from 'next/image'
import React from 'react'
import logintoon from "/public/images/login-cuate.png"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import styles from "./login.module.scss"
import Link from 'next/link'
import { authApi } from "@/pages/useAxios"

const formSchema = z.object({
    username: z.string().min(1, "username is required"),
    password: z.string()
    .min(1, "password is required")
    .min(6, "password must be more than 6 characters")
    .max(24, "password cannot be more than 24 characters")
})

const Login = () => {

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm({
        resolver: zodResolver(formSchema)
    })

    const onFormSubmit = async (data) => {

        try {
            const { username, password } = data

            response = await authApi.post("/api/users/login", {
                username,
                password
            })

            console.log("login successful: ", response.data)
        } catch (error) {
            console.error(error)
        }

        // console.log(data)

        // console.log("username:", data.username)
    }
    

    return (
        <section className={styles.container}>
            <div className={styles.leftContainer}>
                <Image src={logintoon} alt="login image from Pexels" width={500} height={500} />
            </div>

            <div className={styles.rightContainer}>
                <h2 className={styles.headerText}>Login to gain access to your catalog</h2>
                
                <span>
                    <form onSubmit={handleSubmit(onFormSubmit)} className={styles.formWrapper} >
                        <span>
                            <label>Username</label>
                            <input {...register("username")} type="text" placeholder="janeDoe007" className={styles.formInput} />
                            {errors.username && <p className={styles.errorText}>{errors.username.message}</p>}
                        </span>

                        <span>
                            <label>Password</label>
                            <input {...register("password")} type="password" placeholder="password" className={styles.formInput} />
                            {errors.password && <p className={styles.errorText}>{errors.password.message}</p>}
                        </span>

                        <button type="submit" className={styles.btn} >Login</button>
                    </form>

                    <p >Don't have an account? <Link href={"/signup"} className='cta' >Sign Up</Link></p>
                </span>
            </div>
        </section>
    )
}

export default Login