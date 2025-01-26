"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useStore from "@/store";
import { Bars } from 'react-loader-spinner'

const withAuth = (WrappedComponent) => {
    const AuthComponent = (props) => {
        const { isAuth } = useStore();
        const router = useRouter();

        useEffect(() => {
            if (!isAuth) {
                router.push("/login");
            }
        }, [isAuth, router]);

        if (!isAuth) {
            // Optionally render a loading spinner here
            return (
                <div style={{width: "100dvw", height: "100dvh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Bars
                        height="80"
                        width="80"
                        color="#5cadd2"
                        ariaLabel="bars-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>
            )
        }

        return <WrappedComponent {...props} />;
    };

    AuthComponent.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

    return AuthComponent;
};

export default withAuth;
