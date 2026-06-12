"use client";

import { useState } from "react";
import { Input, Button, Card } from "@heroui/react";
import { toast } from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function SigninPage() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSignin = async (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            setLoading(true);

            const { data, error } = await authClient.signIn.email({
                email,
                password,
            });

            if (error) {
                toast.error(error.message || "Sign In Failed");
                return;
            }

            toast.success("Welcome Back!");
            router.push("/"); // login এর পর home এ যাবে

        } catch (err) {
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-default-50 px-4">
            <Card className="w-full max-w-md shadow-xl">
                <div className="p-8">
                    <h1 className="text-3xl font-bold text-center mb-2">
                        Welcome Back
                    </h1>

                    <p className="text-center text-default-500 mb-6">
                        Sign in to your account
                    </p>

                    <form onSubmit={handleSignin} className="space-y-5">
                        <Input
                            name="email"
                            type="email"
                            label="Email"
                            placeholder="Enter your email"
                            required
                            className="w-full"
                        />

                        <Input
                            name="password"
                            type="password"
                            label="Password"
                            placeholder="Enter your password"
                            required
                            className="w-full"
                        />

                        <Button
                            type="submit"
                            color="primary"
                            className="w-full"
                            isLoading={loading}
                        >
                            {loading ? "Signing In..." : "Sign In"}
                        </Button>
                    </form>

                    <p className="text-center text-default-500 mt-4">
                        Do not have an account?{" "}
                        <a href="/signup" className="text-primary font-semibold">
                            Sign Up
                        </a>
                    </p>
                </div>
            </Card>
        </div>
    );
}