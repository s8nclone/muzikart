"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useStore from "@/store";

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
            return <div>Loading...</div>;
        }

        return <WrappedComponent {...props} />;
    };

    AuthComponent.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

    return AuthComponent;
};

export default withAuth;
