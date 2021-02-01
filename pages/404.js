import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);
    }, []);

    return (
        <div>
            <h1>Oooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>
                Go back to the
                <Link href="/">
                    <a>Homepage</a>
                </Link>
            </p>
        </div>
    );
};

export default NotFound;
