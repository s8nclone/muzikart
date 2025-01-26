"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import logintoon from "/public/images/login-cuate.png"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import styles from "./login.module.scss"
import Link from 'next/link'
import { Oval } from 'react-loader-spinner'
import useStore from '@/store'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import authApi from '@/lib/useAxios'
// import view from "/public/icons/eyeview.svg"
// import hide from "/public/icons/hide.svg"

const formSchema = z.object({
    username: z.string().min(1, "username is required"),
    password: z.string()
    .min(1, "password is required")
    .min(6, "password must be more than 6 characters")
    .max(24, "password cannot be more than 24 characters")
})

const Login = () => {
    const store = useStore();
    const router = useRouter();

    const [viewPassword, setViewPssword] = useState(false);

    const { 
        register, 
        handleSubmit,
        formState: { errors, isSubmitting } 
    } = useForm({
        resolver: zodResolver(formSchema)
    })

    const onFormSubmit = async (data) => {

        try {
            const res = await authApi.post("/api/signin", data);

            if (res.status === 200) {
                store.setAuthUser(res.data.user);
                store.setAuthToken(res.data.token);
                store.setIsAuth(true);

                console.log("Login successful", res.data)
                toast.success("Login successful!", {
                    positon: "top-right"
                })
    
                router.push("/shop")
            }
        } catch (error) {
            console.error(error)
            toast.error("Login failed. Try again!", {
                positon: "top-right"
            })
        }

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
                                <input {
                                    ...register("password")} 
                                    type="password"
                                    placeholder="password"
                                    className={styles.formInput} 
                                />

                                {/* <Image
                                    src={viewPassword ? hide : view} 
                                    alt="view password"
                                    onClick={() => setViewPssword(!viewPassword)}
                                    className={styles.icon}
                                /> */}
                            {errors.password && <p className={styles.errorText}>{errors.password.message}</p>}
                        </span>

                        <button type="submit" className={styles.btn} 
                        >
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
                            ): <>Login</>
                            }
                        </button>
                    </form>

                    <p >Don&apos;t have an account? <Link href={"/signup"} className="cta" >Sign Up</Link></p>
                </span>
            </div>
        </section>
    )
}

export default Login